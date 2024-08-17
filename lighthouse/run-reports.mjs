import { mkdir, writeFile } from "node:fs/promises";
import { existsSync, rmdir } from "node:fs";

import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";

const BASE_URL = "https://www.tripleccollective.com";

const routes = [
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
];

console.log("Running lighthouse for", routes);

async function main() {
  const outPath = "./lighthouse/reports";

  if (existsSync(outPath)) {
    rmdir(outPath, { recursive: true, force: true });
  }

  await mkdir(outPath);

  for (let idx = 0; idx < routes.length; idx++) {
    const route = routes[idx];
    console.log(`Running lighthouse for ${route}`);
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
      logLevel: "info",
      output: "html",
      port: chrome.port,
    };

    const runnerResult = await lighthouse(BASE_URL + route, options);

    if (!runnerResult) {
      throw new Error(`Lighthouse runner result is undefined for ${route}`);
    }

    const reportHtml = runnerResult.report;

    const fileName =
      route === ""
        ? `${outPath}/index.html`
        : `${outPath}/${route.replace(/\//gi, "_")}.html`;

    await writeFile(fileName, reportHtml, {
      flag: "w",
      encoding: "utf-8",
    });

    console.log("Report is done for", runnerResult.lhr.finalDisplayedUrl);

    chrome.kill();
  }
}

main();
