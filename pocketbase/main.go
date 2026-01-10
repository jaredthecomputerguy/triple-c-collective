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

const BRANDS_JSON_PATH = "./treez-brands.json"

var (
	ErrCreateDefaultAdminUser = errors.New("create default admin user failed")
	ErrEnsureDealsCollection  = errors.New("ensure deals collection failed")
	ErrSeedDeals              = errors.New("seed deals failed")
	ErrLoadBrands             = errors.New("load brands failed")
)

func wrapErr(kind error, err error) error {
	if err == nil {
		return nil
	}
	return fmt.Errorf("%w: %w", kind, err)
}

type BrandData struct {
	Brands []string `json:"brands"`
}

func main() {
	app := pocketbase.New()

	app.OnServe().BindFunc(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.Static(os.DirFS("./pb_public"), false))

		if err := createDefaultAdminUser(app); err != nil {
			return wrapErr(ErrCreateDefaultAdminUser, err)
		}
		if err := ensureDealsCollection(app); err != nil {
			return wrapErr(ErrEnsureDealsCollection, err)
		}
		if err := seedDeal(app); err != nil {
			return wrapErr(ErrSeedDeals, err)
		}

		return e.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

// createDefaultAdminUser creates a default admin user.
func createDefaultAdminUser(app *pocketbase.PocketBase) error {
	collection, err := app.FindCollectionByNameOrId(core.CollectionNameSuperusers)
	if err != nil {
		return fmt.Errorf("find admins collection: %w", err)
	}

	admin := core.NewRecord(collection)
	admin.SetEmail("test@test.com")
	admin.SetPassword("testpassword")

	if err := app.Save(admin); err != nil {
		return fmt.Errorf("save admin: %w", err)
	}
	return nil
}

func ensureDealsCollection(app *pocketbase.PocketBase) error {
	brands, err := getBrands()
	if err != nil {
		return wrapErr(ErrLoadBrands, err)
	}

	// If the collection already exists, no-op.
	if _, err := app.FindCollectionByNameOrId("deals"); err == nil {
		return nil
	}

	deals := newDealsCollection(brands)

	if err := app.Save(deals); err != nil {
		return fmt.Errorf("save deals collection: %w", err)
	}
	return nil
}

func allowAll() *string {
	s := ""
	return &s
}

func newDealsCollection(brands []string) *core.Collection {
	c := core.NewBaseCollection("deals")

	// PocketBase rules: empty string pointer means allow, nil means disallow.
	c.ListRule = allowAll()
	c.ViewRule = allowAll()
	c.CreateRule = nil
	c.UpdateRule = allowAll()
	c.DeleteRule = nil

	c.Fields.Add(
		&core.BoolField{Name: "active", Required: true},
		&core.TextField{Name: "title", Required: true},
		&core.TextField{Name: "description", Required: true},
		&core.FileField{
			Name:      "image",
			Required:  true,
			MaxSelect: 1,
			MaxSize:   1_000_000,
		},
		&core.TextField{Name: "htmlId"},
		&core.TextField{
			Name:    "imageBackgroundColor",
			Pattern: "^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$",
		},
		&core.SelectField{
			Name:      "brands",
			Required:  true,
			Values:    types.JSONArray[string](brands),
			MaxSelect: 3,
		},
		&core.SelectField{
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
		},
		&core.TextField{Name: "subTypes"},
		&core.JSONField{Name: "typeSubtypes"},
		&core.TextField{Name: "badge"},
		&core.AutodateField{Name: "created", OnCreate: true},
		&core.AutodateField{Name: "updated", OnCreate: true, OnUpdate: true},
	)

	return c
}

func seedDeal(app *pocketbase.PocketBase) error {
	collection, err := app.FindCollectionByNameOrId("deals")
	if err != nil {
		return fmt.Errorf("find deals collection: %w", err)
	}

	// If any record exists, skip.
	if record, err := app.FindFirstRecordByFilter(collection.Name, ""); err == nil && record != nil {
		log.Println("Deals table already has records. Skipping seeding.")
		return nil
	}

	deal := core.NewRecord(collection)
	deal.Set("active", true)
	deal.Set("title", "Test Deal")
	deal.Set("description", "This is a test deal for development purposes.")
	deal.Set("brands", []string{"EMERALD SKY"})
	deal.Set("categories", []string{"edible"})
	deal.Set("htmlId", "test-deal")
	deal.Set("subTypes", "HARD CANDY,GUMMY")

	typeSub := map[string][]string{
		"EDIBLE": {"HARD CANDY", "GUMMY"},
	}
	deal.Set("typeSubtypes", typeSub)
	deal.Set("badge", "Test Deal Badge")

	imageFile, err := filesystem.NewFileFromPath("placeholder.png")
	if err != nil {
		return fmt.Errorf("open placeholder image: %w", err)
	}
	deal.Set("image", imageFile)
	deal.Set("imageBackgroundColor", "#DDDDDD")

	if err := app.Save(deal); err != nil {
		return fmt.Errorf("save test deal: %w", err)
	}
	return nil
}

func getBrands() ([]string, error) {
	rawBrands, err := os.ReadFile(BRANDS_JSON_PATH)
	if err != nil {
		return nil, fmt.Errorf("read brands file: %w", err)
	}

	var brandData BrandData
	if err := json.Unmarshal(rawBrands, &brandData); err != nil {
		return nil, fmt.Errorf("unmarshal brands json: %w", err)
	}

	if len(brandData.Brands) == 0 {
		return nil, errors.New("no brands found in json")
	}
	return brandData.Brands, nil
}
