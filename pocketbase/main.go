package main

import (
	"errors"
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func main() {
	app := pocketbase.New()

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

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
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
		UpdateRule: nil,
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
				Options:  &schema.FileOptions{},
			},
			&schema.SchemaField{
				Name:     "brands",
				Type:     schema.FieldTypeSelect,
				Required: true,
				// I want this to be a multiselect
				Options: &schema.SelectOptions{
					Values: types.JsonArray[string]{
						// TODO: Get the list of brands
						"Brand 1",
						"Brand 2",
						"Brand 3",
					},
					MaxSelect: 32,
				},
			},
			&schema.SchemaField{
				Name:     "categories",
				Type:     schema.FieldTypeSelect,
				Required: true,
				// I want this to be a multiselect
				Options: &schema.SelectOptions{
					Values: types.JsonArray[string]{
						// TODO: Get the list of categories
						"Category 1",
						"Category 2",
						"Category 3",
					},
					MaxSelect: 32,
				},
			},
		),
	}

	if err := app.Dao().SaveCollection(collection); err != nil {
		return errors.New("failed to save collection: " + err.Error())
	}

	return nil
}
