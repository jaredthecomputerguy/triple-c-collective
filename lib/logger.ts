// biome-ignore-all lint/suspicious/noConsole: this is a custom logger
export class Logger {
  private static instance: Logger;

  constructor() {
    if (Logger.instance) {
      return;
    }
    Logger.instance = this;
  }

  log(...messages: unknown[]) {
    console.log(...messages);
  }

  warn(...messages: unknown[]) {
    console.warn(...messages);
  }

  error(...messages: unknown[]) {
    console.error(...messages);
  }
}
