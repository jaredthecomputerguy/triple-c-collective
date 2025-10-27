// biome-ignore-all lint: this is a custom logger
/* eslint-disable no-console */
export class Logger {
  private static instance: Logger;
  private showLogs: boolean;

  constructor() {
    this.showLogs = Boolean(process.env.SHOW_LOGS);
    if (Logger.instance) {
      return;
    }
    Logger.instance = this;
  }

  log(...messages: unknown[]) {
    if (!this.showLogs) {
      return;
    }
    console.log(...messages);
  }

  warn(...messages: unknown[]) {
    if (!this.showLogs) {
      return;
    }
    console.warn(...messages);
  }

  error(...messages: unknown[]) {
    if (!this.showLogs) {
      return;
    }
    console.error(...messages);
  }
}
