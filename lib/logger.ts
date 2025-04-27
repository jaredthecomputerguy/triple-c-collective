/* eslint-disable no-console */
export class Logger {
  private static instance: Logger;
  private isDevEnv: boolean;

  constructor() {
    this.isDevEnv = process.env.NODE_ENV === "development";
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  log(...messages: any[]) {
    if (!this.isDevEnv) {
      return;
    }
    console.log(...messages);
  }

  warn(...messages: any[]) {
    if (!this.isDevEnv) {
      return;
    }
    console.warn(...messages);
  }

  error(...messages: any[]) {
    if (!this.isDevEnv) {
      return;
    }
    console.error(...messages);
  }
}
