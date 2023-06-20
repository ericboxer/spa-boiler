import 'colors'

export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FAIL,
}

export type loggerSettings = {
  consoleLogLevel: LogLevel
  logToFile?: boolean
}

export class Logger {
  private settings: loggerSettings

  constructor(settings: loggerSettings) {
    this.settings = settings
  }

  private log(message: string, logLevel: LogLevel) {
    let levelToLog: string = ''

    switch (logLevel) {
      case LogLevel.DEBUG:
        levelToLog = 'DEBUG'.cyan
        break
      case LogLevel.INFO:
        levelToLog = 'INFO '.green
        break
      case LogLevel.WARN:
        levelToLog = 'WARN '.yellow
        break
      case LogLevel.ERROR:
        levelToLog = 'ERROR'.red
        break
      case LogLevel.FAIL:
        levelToLog = 'DEBUG'.bgRed.black
        break
      default:
        break
    }

    if (logLevel >= this.settings.consoleLogLevel) {
      console.log(`[${levelToLog}] : ${message}`)
    }
  }

  debug(message: string) {
    this.log(message, LogLevel.DEBUG)
  }
  info(message: string) {
    this.log(message, LogLevel.INFO)
  }
  warn(message: string) {
    this.log(message, LogLevel.WARN)
  }
  error(message: string) {
    this.log(message, LogLevel.ERROR)
  }
  fail(message: string) {
    this.log(message, LogLevel.FAIL)
  }
}
