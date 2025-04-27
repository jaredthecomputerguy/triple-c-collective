/* eslint-disable no-console */
export class Logger {
  private static instance: Logger;
  private showLogs: boolean;

  constructor() {
    this.showLogs = Boolean(process.env.SHOW_LOGS);
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  log(...messages: any[]) {
    if (!this.showLogs) {
      return;
    }
    console.log(...messages);
  }

  warn(...messages: any[]) {
    if (!this.showLogs) {
      return;
    }
    console.warn(...messages);
  }

  error(...messages: any[]) {
    if (!this.showLogs) {
      return;
    }
    console.error(...messages);
  }
}
