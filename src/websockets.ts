import { AddressInfo, ServerOptions, WebSocketServer } from 'ws'
import { Logger } from './backlogger'

export type WebsocketSettings = {
  PORT: number
}

export class WebSocket {
  private _wss: WebSocketServer
  private _port: number
  private _logger: Logger

  constructor(settings: WebsocketSettings, logger: Logger) {
    this._port = settings.PORT

    this._wss = new WebSocketServer({ port: this._port })
    this._logger = logger
  }

  start() {
    this._logger.info(`Starting Web Socket Server on Port ${this._port}`)

    this._wss.on('connection', (ws, req) => {
      const address: AddressInfo = req.socket.address() as AddressInfo

      this._logger.info(`Websocket connection from ${address.address.split(':').pop()}`)

      ws.on('message', (data) => {
        this._logger.debug(data.toString())
      })

      ws.send('Testing')
    })
  }
}
