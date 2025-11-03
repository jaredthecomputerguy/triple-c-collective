// biome-ignore-all lint/suspicious/noConsole: this is a project-wide logger
export class Logger {
  private static instance: Logger;

  constructor() {
    if (Logger.instance) {
      return;
    }
    Logger.instance = this;
  }

  static log(...messages: unknown[]) {
    console.log(...messages);
  }

  static warn(...messages: unknown[]) {
    console.warn(...messages);
  }

  static error(...messages: unknown[]) {
    console.error(...messages);
  }
}
