// oxlint-disable no-console
// @ts-check
import { mkdir, rm } from "node:fs/promises";

import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";

const BASE_URL = "http://localhost:3000";

const routes = [
  "",
  "/about",
  /* "/reward-program",
  "/deals",
  "/contact",
  "/real-ca-cannabis",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-of-use",
  "/deals/trap-takeover",
  "/best-of-lake-and-mendocino" */
];

const OUT_PATH = "./lighthouse/js/reports";

let completed = 0;

console.log("Running Lighthouse for", routes);

async function main() {
  console.time("lighthouse");

  try {
    await rm(OUT_PATH, { recursive: true, force: true });
    await mkdir(OUT_PATH, { recursive: true });

    await generateIndex(OUT_PATH, routes);

    const failures = [];

    for (const route of routes) {
      try {
        // oxlint-disable-next-line no-await-in-loop I want these to run sequentially to avoid resource contention
        await runLighthouse(route);
      } catch (error) {
        failures.push({ route, error });
        console.error(`Lighthouse failed for ${route || "/"}`, error);
      }
    }

    if (failures.length > 0) {
      console.error(
        `\n${failures.length}/${routes.length} Lighthouse audit(s) failed.`,
      );

      process.exitCode = 1;
      return;
    }

    console.log("\x1b[32;1;4mFinished running Lighthouse.");
  } catch (error) {
    console.error("Failed to initialize Lighthouse reports", error);
    process.exitCode = 1;
  } finally {
    console.timeEnd("lighthouse");
  }
}

/**
 * @param {string} route
 * */
async function runLighthouse(route) {
  console.log(`Running Lighthouse for ${route || "/"}`);

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless"],
  });

  try {
    const runnerResult = await lighthouse(`${BASE_URL}${route}`, {
      logLevel: "info",
      output: "html",
      port: chrome.port,
    });

    if (!runnerResult) {
      throw new Error(
        `Lighthouse runner result is undefined for ${route || "/"}`,
      );
    }

    const fileName =
      route === ""
        ? `${OUT_PATH}/root.html`
        : `${OUT_PATH}/${route.replace(/\//g, "_")}.html`;

    await Bun.write(fileName, runnerResult.report);

    completed++;

    console.log(
      "\nReport completed for",
      runnerResult.lhr.finalDisplayedUrl,
      `Progress: ${completed}/${routes.length}`,
      "\n--------------------\n",
    );
  } finally {
    chrome.kill();
  }
}

/**
 * @param {string} outPath
 * @param {string[]} generatedRoutes
 */
async function generateIndex(outPath, generatedRoutes) {
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lighthouse Reports</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
  >
  <style>
    .pt-8 {
      padding-top: 2rem;
    }
  </style>
</head>
<body class="container pt-8">
  <hgroup>
    <h1>Lighthouse Reports</h1>
    <p>This is a collection of Lighthouse reports for the www.tripleccollective.com website.</p>
  </hgroup>
  <hr />
  <h2>Reports</h2>
  <ul>
    ${generatedRoutes
      .map(
        (route) =>
          `<li><a href="${route === "" ? "./root" : route.replace(/\//g, "_")}.html">${route === "" ? "/" : route}</a></li>`,
      )
      .join("\n")}
  </ul>
</body>
</html>`;

  await Bun.write(`${outPath}/index.html`, indexHtml);
}

void main();
