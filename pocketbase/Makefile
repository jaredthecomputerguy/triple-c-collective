all: clean build run

build:
	@echo "Building PocketBase...\n"
	CGO_ENABLED=0 go build -o pocketbase main.go

run:
	@echo "Starting PocketBase...\n"
	./pocketbase serve

clean:
	@echo "Cleaning up...\n"
	@rm -f ./pocketbase 
	@rm -rf ./pb_data

PHONY: build run clean
