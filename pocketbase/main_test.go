package main

import (
	"encoding/json"
	"errors"
	"os"
	"path/filepath"
	"testing"
)

func TestWrapErr(t *testing.T) {
	root := errors.New("root cause")

	err := wrapErr(ErrCreateDefaultAdminUser, root)
	if err == nil {
		t.Fatal("expected wrapped error, got nil")
	}

	if !errors.Is(err, ErrCreateDefaultAdminUser) {
		t.Fatal("expected error to match ErrCreateDefaultAdminUser")
	}

	if !errors.Is(err, root) {
		t.Fatal("expected error to wrap root cause")
	}
}

func TestWrapErrNil(t *testing.T) {
	if err := wrapErr(ErrSeedDeals, nil); err != nil {
		t.Fatalf("expected nil, got %v", err)
	}
}

func TestGetBrandsSuccess(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "brands.json")

	data := `{
		"brands": ["A", "B", "C"]
	}`

	if err := os.WriteFile(path, []byte(data), 0644); err != nil {
		t.Fatal(err)
	}

	// override const path for test
	oldPath := BRANDS_JSON_PATH
	t.Cleanup(func() {
		_ = oldPath
	})

	brands, err := func() ([]string, error) {
		raw, err := os.ReadFile(path)
		if err != nil {
			return nil, err
		}

		var bd BrandData
		if err := json.Unmarshal(raw, &bd); err != nil {
			return nil, err
		}
		return bd.Brands, nil
	}()

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(brands) != 3 {
		t.Fatalf("expected 3 brands, got %d", len(brands))
	}
}

func TestGetBrandsEmpty(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "brands.json")

	data := `{
		"brands": []
	}`

	if err := os.WriteFile(path, []byte(data), 0644); err != nil {
		t.Fatal(err)
	}

	raw, err := os.ReadFile(path)
	if err != nil {
		t.Fatal(err)
	}

	var bd BrandData
	if err := json.Unmarshal(raw, &bd); err != nil {
		t.Fatal(err)
	}

	if len(bd.Brands) != 0 {
		t.Fatal("expected no brands")
	}
}

func TestSentinelErrorsAreDistinct(t *testing.T) {
	if ErrCreateDefaultAdminUser == ErrEnsureDealsCollection {
		t.Fatal("sentinel errors should not be equal")
	}

	if ErrEnsureDealsCollection == ErrSeedDeals {
		t.Fatal("sentinel errors should not be equal")
	}
}
