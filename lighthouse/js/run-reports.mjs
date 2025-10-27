import { mkdir, writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";

const BASE_URL = "https://www.tripleccollective.com";

const routes = [
  "",
  "/about"
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

console.log("Running lighthouse for", routes);

let index = 0;
const total = routes.length;

async function main() {
  console.time("lighthouse");
  const outPath = "./lighthouse/js/reports";

  if (existsSync(outPath)) {
    try {
      await rm(outPath, { recursive: true, force: true });
    } catch (e) {
      console.log("Error removing reports", e);
    }
  }

  await mkdir(outPath);

  generateIndex(outPath, routes);

  for (let idx = 0; idx < routes.length; idx++) {
    const route = routes[idx];
    console.log(`Running lighthouse for ${route}`);
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
      logLevel: "info",
      output: "html",
      port: chrome.port
    };

    const runnerResult = await lighthouse(BASE_URL + route, options);

    if (!runnerResult) {
      throw new Error(`Lighthouse runner result is undefined for ${route}`);
    }

    const reportHtml = runnerResult.report;

    const fileName =
      route === ""
        ? `${outPath}/root.html`
        : `${outPath}/${route.replace(/\//gi, "_")}.html`;
    try {
      await Bun.write(fileName, reportHtml);
      // await writeFile(fileName, reportHtml, {
      //   flag: "w",
      //   encoding: "utf-8"
      // });
      index++;
      console.log(
        "\nReport is done for",
        runnerResult.lhr.finalDisplayedUrl,
        `Progress: ${index}/${total}`,
        "\n--------------------\n"
      );
    } catch (e) {
      console.log("Error writing report", e);
      chrome.kill();
    }

    chrome.kill();
  }

  console.log("\x1b[32;1;4mFinished running lighthouse.");
  console.timeEnd("lighthouse");
}

async function generateIndex(outPath, routes) {
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
    <p>This is a collection of lighthouse reports for the www.triplecolllective.com website.</p>
  </hgroup>
  <hr />
  <h2>Reports</h2>
  <ul>
    ${routes.map((route) => `<li><a href="${route == "" ? "./root" : route.replace(/\//gi, "_")}.html">${route == "" ? "/" : route}</a></li>`).join("\n")}
  </ul>
</body>
</html>`;

  await Bun.write(`${outPath}/index.html`, indexHtml);
}

main();
