import express from 'express'
import path from 'path'
import { Logger } from './backlogger'

export type WebServerSettings = {
  WEB_SERVER_PORT: number
}

export class WebServer {
  private _serverPort: number

  private _app = express()
  private _logger: Logger | null = null

  constructor(settings: WebServerSettings, logger: Logger | null) {
    this._serverPort = settings.WEB_SERVER_PORT
    if (logger !== null) {
      this._logger = logger
    }
  }

  start() {
    this._app.use(express.static(path.join(__dirname, 'static')))

    this._app.get('/', (req, res) => {
      res.sendFile('./index.hmtl')
    })

    this._app.listen(this._serverPort, () => {
      this._logger?.info(`Web server started on port ${this._serverPort}`)
    })
  }
}
