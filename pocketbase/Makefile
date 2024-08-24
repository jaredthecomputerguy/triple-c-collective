all: clean build run

build:
	CGO_ENABLED=0 go build -o pocketbase main.go

run:
	./pocketbase serve

clean:
	@rm -f ./pocketbase 
	@rm -rf ./pb_data

PHONY: build run clean
