package main

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"
	"time"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func main() {
	app := pocketbase.New()

	var recordId *string

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))
		return nil
	})

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		err := createDefaultAdminUser(app)
		if err != nil {
			return err
		}

		err = createDealCollection(app)
		if err != nil {
			return err
		}

		err = seedDeal(app, &recordId)

		return nil
	})

	sigChannel := make(chan os.Signal, 1)
	signal.Notify(sigChannel, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		if err := app.Start(); err != nil {
			log.Fatal(err)
		}
	}()

	go func() {
		time.Sleep(2 * time.Second)
		if recordId != nil {
			uploadPlaceholderImage(*recordId)
			return
		} else {
			fmt.Println("No record ID found. Image upload aborted.")
			return
		}
	}()

	<-sigChannel
	log.Println("\nReceived shutdown signal, closing PocketBase server...")
	log.Println("Server shut down successfully")
}

// createDefaultAdminUser creates a default admin user with the email "test@test.com" and the password "testpassword"
func createDefaultAdminUser(app *pocketbase.PocketBase) error {
	admin := &models.Admin{}
	admin.Email = "test@test.com"
	admin.SetPassword("testpassword")
	if err := app.Dao().SaveAdmin(admin); err != nil {
		return errors.New("failed to save admin: " + err.Error())
	}

	return nil
}

// createDealCollection creates a collection called "deals" with the following schema:
//
//	{
//	  "active": true,
//	  "title": "string",
//	  "description": "string",
//	  "image": "file",
//	  "brands": "select",
//	  "categories": "select"
//	}
func createDealCollection(app *pocketbase.PocketBase) error {
	collection := &models.Collection{
		Name:       "deals",
		Type:       models.CollectionTypeBase,
		ListRule:   types.Pointer(""),
		ViewRule:   types.Pointer(""),
		CreateRule: nil,
		UpdateRule: types.Pointer(""),
		DeleteRule: nil,
		Schema: schema.NewSchema(
			&schema.SchemaField{
				Name:     "active",
				Type:     schema.FieldTypeBool,
				Required: true,
			},
			&schema.SchemaField{
				Name:     "title",
				Type:     schema.FieldTypeText,
				Required: true,
			},
			&schema.SchemaField{
				Name:     "description",
				Type:     schema.FieldTypeText,
				Required: true,
			},
			&schema.SchemaField{
				Name:     "image",
				Type:     schema.FieldTypeFile,
				Required: true,
				Options: &schema.FileOptions{
					MaxSelect: 1,
					MaxSize:   1000000,
				},
			},
			&schema.SchemaField{
				Name:     "brands",
				Type:     schema.FieldTypeSelect,
				Required: true,
				Options: &schema.SelectOptions{
					Values: types.JsonArray[string]{
						// TODO: Get the list of brands from Treez API programatically
						"Brand 1",
						"Brand 2",
						"Brand 3",
					},
					MaxSelect: 3,
				},
			},
			&schema.SchemaField{
				Name:     "categories",
				Type:     schema.FieldTypeSelect,
				Required: true,
				// I want this to be a multiselect
				Options: &schema.SelectOptions{
					Values: types.JsonArray[string]{
						"flower",
						"cartridge",
						"extract",
						"pill",
						"tincture",
						"preroll",
						"edible",
					},
					MaxSelect: 7,
				},
			},
			&schema.SchemaField{
				Name: "badge",
				Type: schema.FieldTypeText,
			},
		),
	}

	if err := app.Dao().SaveCollection(collection); err != nil {
		return errors.New("failed to save collection: " + err.Error())
	}

	return nil
}

func seedDeal(app *pocketbase.PocketBase, recordId **string) error {
	// Check if the 'deals' table has any records
	collection, err := app.Dao().FindCollectionByNameOrId("deals")
	if err != nil {
		return errors.New("failed to find deals collection: " + err.Error())
	}

	// Try to get the first record
	record, err := app.Dao().FindFirstRecordByFilter(collection.Name, "")
	if err == nil && record != nil {
		// If a record is found, log and return early
		log.Println("Deals table already has records. Skipping seeding.")
		return nil
	}

	// If no records found or there was an error (likely because no records exist), insert a single deal for testing
	deal := models.NewRecord(collection)
	deal.Set("active", true)
	deal.Set("title", "Test Deal")
	deal.Set("description", "This is a test deal for development purposes.")
	// You'll need to ensure this file exists in your pb_public directory
	deal.Set("brands", []string{"Brand 1"})
	deal.Set("categories", []string{"flower"})
	deal.Set("badge", "Test Deal Badge")
	deal.Set("image", "placeholder.png")
	if err := app.Dao().SaveRecord(deal); err != nil {
		return errors.New("failed to save test deal: " + err.Error())
	}

	*recordId = &deal.Id

	log.Println("Test deal inserted successfully.")
	return nil
}

func uploadPlaceholderImage(recordId string) {
	filePath := "./placeholder.png"
	url := fmt.Sprintf("http://127.0.0.1:8090/api/collections/deals/records/%s", recordId)

	file, err := os.Open(filePath)
	if err != nil {
		fmt.Printf("failed to open placeholder image file: %v", err)
		return
	}
	defer file.Close()

	var reqBody bytes.Buffer
	writer := multipart.NewWriter(&reqBody)

	part, err := writer.CreateFormFile("image", filepath.Base(filePath))
	if err != nil {
		fmt.Printf("failed to create form file: %v", err)
		return
	}

	_, err = io.Copy(part, file)
	if err != nil {
		fmt.Printf("failed to copy file data: %v", err)
		return
	}

	err = writer.Close()
	if err != nil {
		fmt.Printf("failed to close writer: %v", err)
		return
	}

	req, err := http.NewRequest("PATCH", url, &reqBody)
	req.Header.Add("Content-Type", writer.FormDataContentType())

	client := &http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("failed to send request: %v", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("upload failed with status: %s\n", resp.Status)
		return
	}

	fmt.Println("> Placeholder image uploaded successfully")

}
