package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/filesystem"
	"github.com/pocketbase/pocketbase/tools/types"
)

type BrandData struct {
	Brands []string `json:"brands"`
}

func main() {
	app := pocketbase.New()

	var recordId *string

	app.OnServe().BindFunc(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.Static(os.DirFS("./pb_public"), false))
		e.Next()
		return nil
	})

	app.OnServe().BindFunc(func(e *core.ServeEvent) error {
		fmt.Println("Creating default admin user...")
		err := createDefaultAdminUser(app)
		if err != nil {
			return err
		}

		err = createDealCollection(app)

		fmt.Println("Creating deals collection user...")
		if err != nil {
			return err
		}

		fmt.Println("Seeding deals collection...")
		err = seedDeal(app, &recordId)

		fmt.Println("Finished seeding deals collection...")

		if err != nil {
			return err
		}

		err = e.Next()
		if err != nil {
			return err
		}
		return nil
	})

	// sigChannel := make(chan os.Signal, 1)
	// signal.Notify(sigChannel, os.Interrupt, syscall.SIGINT, syscall.SIGTERM)
	//
	// go func() {
	// 	if err := app.Start(); err != nil {
	// 		log.Fatal(err)
	// 	}
	// }()

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
	// go func() {
	// 	time.Sleep(2 * time.Second)
	// 	if recordId != nil {
	// 		uploadPlaceholderImage(*recordId)
	// 		return
	// 	} else {
	// 		fmt.Println("No record ID found. Image upload aborted.")
	// 		return
	// 	}
	// }()
	//
	// <-sigChannel
	// log.Println("\nReceived shutdown signal, closing PocketBase server...")
	// log.Println("Server shut down successfully")
}

// createDefaultAdminUser creates a default admin user with the email "test@test.com" and the password "testpassword"
func createDefaultAdminUser(app *pocketbase.PocketBase) error {
	collection, err := app.FindCollectionByNameOrId(core.CollectionNameSuperusers)
	if err != nil {
		return errors.New("failed to find admins collection: " + err.Error())
	}
	admin := core.NewRecord(collection)
	admin.SetEmail("test@test.com")
	admin.SetPassword("testpassword")
	if err := app.Save(admin); err != nil {
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

	brands := getBrands()

	dealsCollection := core.NewBaseCollection("deals")

	dealsCollection.ListRule = types.Pointer("")
	dealsCollection.ViewRule = types.Pointer("")
	dealsCollection.CreateRule = nil
	dealsCollection.UpdateRule = types.Pointer("")
	dealsCollection.DeleteRule = nil

	dealsCollection.Fields.Add(&core.BoolField{
		Name:     "active",
		Required: true,
	}, &core.TextField{
		Name:     "title",
		Required: true,
	}, &core.TextField{
		Name:     "description",
		Required: true,
	}, &core.FileField{
		Name:      "image",
		Required:  true,
		MaxSelect: 1,
		MaxSize:   1000000,
	}, &core.SelectField{
		Name:      "brands",
		Required:  true,
		Values:    types.JSONArray[string](brands),
		MaxSelect: 3,
	}, &core.SelectField{
		Name:     "categories",
		Required: true,
		Values: types.JSONArray[string]{
			"flower",
			"cartridge",
			"extract",
			"pill",
			"tincture",
			"preroll",
			"edible",
			"plant",
		},
		MaxSelect: 7,
	}, &core.TextField{
		Name: "badge",
	},
		&core.AutodateField{
			Name:     "created",
			OnCreate: true,
		},
		&core.AutodateField{
			Name:     "updated",
			OnCreate: true,
			OnUpdate: true,
		},
	)

	if err := app.Save(dealsCollection); err != nil {
		return errors.New("failed to save deals collection: " + err.Error())
	}

	return nil
}

func seedDeal(app *pocketbase.PocketBase, recordId **string) error {
	// Check if the 'deals' table has any records
	collection, err := app.FindCollectionByNameOrId("deals")
	if err != nil {
		return errors.New("failed to find deals collection: " + err.Error())
	}

	// Try to get the first record
	record, err := app.FindFirstRecordByFilter(collection.Name, "")
	if err == nil && record != nil {
		// If a record is found, log and return early
		log.Println("Deals table already has records. Skipping seeding.")
		return nil
	}

	// If no records found or there was an error (likely because no records exist), insert a single deal for testing
	deal := core.NewRecord(collection)
	deal.Set("active", true)
	deal.Set("title", "Test Deal")
	deal.Set("description", "This is a test deal for development purposes.")
	deal.Set("brands", []string{"AKWAABA FARMS"})
	deal.Set("categories", []string{"flower"})
	deal.Set("badge", "Test Deal Badge")
	imageFile, err := filesystem.NewFileFromPath("placeholder.png")
	if err != nil {
		return errors.New("failed to create test deal: " + err.Error())
	}
	deal.Set("image", imageFile)
	if err := app.Save(deal); err != nil {
		return errors.New("failed to save test deal: " + err.Error())
	}

	*recordId = &deal.Id

	return nil
}

func getBrands() []string {

	brandJsonPath := "./treez-brands.json"

	file, err := os.Open(brandJsonPath)

	if err != nil {
		log.Fatal("Error opening treez-brands.json file.")
	}

	defer file.Close()

	var brandData BrandData

	decoder := json.NewDecoder(file)

	decoder.Decode(&brandData)

	return brandData.Brands
}
