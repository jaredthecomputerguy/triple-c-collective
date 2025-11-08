export const Logger = {
  isDev: process.env.NODE_ENV === "development",

  colors: {
    reset: "\x1b[0m",
    gray: "\x1b[90m",
    blue: "\x1b[34m",
    yellow: "\x1b[33m",
    red: "\x1b[31m"
  },

  timestamp() {
    const now = new Date().toISOString();
    return this.isDev ? `${this.colors.gray}${now}${this.colors.reset}` : now;
  },

  log(...messages: unknown[]) {
    this.print("info", messages, this.colors.blue);
  },

  warn(...messages: unknown[]) {
    this.print("warn", messages, this.colors.yellow);
  },

  error(...messages: unknown[]) {
    this.print("error", messages, this.colors.red);
  },

  print(level: string, messages: unknown[], color: string) {
    const time = this.timestamp();
    const prefix = this.isDev
      ? `${color}${level.toUpperCase()}${this.colors.reset}`
      : level.toUpperCase();

    const output = this.isDev
      ? messages
      : [JSON.stringify({ level, time, message: messages })];

    // biome-ignore lint/suspicious/noConsole: project-wide logger
    console.log(`${time} ${prefix}:`, ...output);
  }
};
