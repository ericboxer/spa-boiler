import { WebServer, WebServerSettings } from './webserver'
import { LogLevel, Logger, loggerSettings as LoggerSettings } from './backlogger'

import { Config, ConfigSettings } from './config'
import { WebSocket } from './websockets'

const config: Config = new Config()
config.read()

const localConfig: ConfigSettings = config.get()

const loggerSettings: LoggerSettings = {
  consoleLogLevel: LogLevel.DEBUG,
}

const logger = new Logger(loggerSettings)

logger.info(JSON.stringify(localConfig))

const webServer: WebServer = new WebServer(localConfig.WEB_SERVER, logger)
const webSocket: WebSocket = new WebSocket(localConfig.WEB_SOCKET, logger)

webServer.start()
webSocket.start()
