package cmd

import (
	"fmt"
	"io"
	"os/exec"
	"strings"
	"sync"

	"github.com/spf13/cobra"
	"github.com/vbauerster/mpb"
	"github.com/vbauerster/mpb/decor"
)

var generateCmd = &cobra.Command{
	Use:   "generate",
	Short: "Generates lighthouse reports for a given URL",
	Long:  `Generates lighthouse reports for a given URL (Default URL: www.tripleccollective.com)`,
	Run: func(cmd *cobra.Command, args []string) {
		routes := []string{
			"",
			"/about",
			"/reward-program",
			"/deals",
			"/contact",
			"/real-ca-cannabis",
			"/privacy-policy",
			"/cookie-policy",
			"/terms-of-use",
			"/deals/trap-takeover",
		}

		var wg sync.WaitGroup
		p := mpb.New(mpb.WithWaitGroup(&wg))

		for _, route := range routes {
			wg.Add(1)
			go runLighthouse("https://www.tripleccollective.com", route, p, &wg)
		}

		p.Wait()
		fmt.Println("\n✅ All reports generated successfully!")
	},
}

func init() {
	rootCmd.AddCommand(generateCmd)
}

func runLighthouse(url, route string, p *mpb.Progress, wg *sync.WaitGroup) {
	defer wg.Done()

	routeName := "root"
	if route != "" {
		routeName = route[1:] // Remove leading slash
	}

	var outPath string
	fullUrl := url + route
	if route == "" {
		outPath = "./reports/root.html"
	} else {
		outPath = fmt.Sprintf("./reports/%s.html", strings.Replace(route, "/", "_", 20))
	}
	outputFlag := fmt.Sprintf("--output-path=%s", outPath)

	// Create a progress bar for this route
	bar := p.AddBar(100, // we'll use 100 as the total, representing 100%
		mpb.PrependDecorators(
			decor.Name(fmt.Sprintf("Route %-15s", routeName), decor.WC{W: len(routeName) + 15, C: decor.DidentRight}),
			decor.Percentage(decor.WCSyncSpace),
		),
		mpb.AppendDecorators(
			decor.OnComplete(
				decor.AverageETA(decor.ET_STYLE_GO, decor.WC{W: 4}),
				"Done!",
			),
		),
	)

	// Run the Lighthouse command
	cmd := exec.Command("npx", "lighthouse", fullUrl, "--verbose", "--chrome-flags=--headless", "--output=html", outputFlag)
	stdout, _ := cmd.StdoutPipe()

	err := cmd.Start()
	if err != nil {
		bar.SetTotal(100, true) // Complete the bar
		fmt.Printf("Error starting lighthouse for %s: %v\n", routeName, err)
		return
	}

	// Read the command output and update the progress bar
	go func() {
		reader := NewProgressReader(stdout, bar)
		io.Copy(io.Discard, reader)
	}()

	err = cmd.Wait()
	if err != nil {
		bar.SetTotal(100, true) // Complete the bar
		fmt.Printf("Error running lighthouse for %s: %v\n", routeName, err)
	} else {
		bar.SetTotal(100, true) // Ensure the bar is completed
	}
}

// ProgressReader is a custom io.Reader that updates a progress bar
type ProgressReader struct {
	reader io.Reader
	bar    *mpb.Bar
}

func NewProgressReader(reader io.Reader, bar *mpb.Bar) *ProgressReader {
	return &ProgressReader{reader: reader, bar: bar}
}

func (pr *ProgressReader) Read(p []byte) (int, error) {
	n, err := pr.reader.Read(p)
	if n > 0 {
		pr.bar.IncrBy(1)
	}
	return n, err
}
