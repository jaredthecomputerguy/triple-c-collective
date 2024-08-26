all:
	clean build run

clean:
	@echo "Cleaning..."
	rm -rf ./bin/*

build:
	@echo "Building..."
	go build -o ./bin/lighthouse-go ./main.go

run: build
	@echo "Running..."
	./bin/lighthouse-go $(cmd)

PHONY: all clean build run
