/*
Copyright © 2024 Jared Mercer <jared@jaredthecomputerguy.dev>
*/
package cmd

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/spf13/cobra"
)

// serveCmd represents the serve command
var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "Starts a local server for the generated lighthouse reports",
	Run: func(cmd *cobra.Command, args []string) {
		app := fiber.New()

		app.Use(cors.New())

		app.Static("/", "./reports", fiber.Static{
			Compress: true,
		})


		// Serve the index.html file at the root
		app.Get("/", func(c *fiber.Ctx) error {
			return c.SendFile("./reports/index.html")
		})

		// Serve other HTML files based on the route
		app.Get("/:page", func(c *fiber.Ctx) error {
			page := c.Params("page")
			filePath := "./reports/" + page + ".html"
			return c.SendFile(filePath)
		})

		fmt.Println("Starting server on port 3000...")
		log.Fatal(app.Listen(":3000"))
	},
}

func init() {
	rootCmd.AddCommand(serveCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// serveCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// serveCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
