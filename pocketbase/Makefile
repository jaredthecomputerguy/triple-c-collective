all: clean build run

clean:
	@echo "Cleaning up PocketBase...\n"
	@rm -f ./pocketbase 
	@rm -rf ./pb_data

build:
	@echo "Building PocketBase...\n"
	CGO_ENABLED=0 go build -o pocketbase main.go

run:
	@echo "Starting PocketBase...\n"
	./pocketbase serve

test:
	@echo "Running tests...\n"
	go test -v ./...

PHONY: clean build run test
