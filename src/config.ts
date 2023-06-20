import * as fs from 'fs-extra'
import { WebServerSettings } from './webserver'
import path from 'path'
import * as toml from '@iarna/toml'
import { WebsocketSettings } from './websockets'

export type ConfigMeta = {
  INSTALLATION_NAME: string
  LOCATION_NAME: string
}

export type ConfigSettings = {
  CONFIG_META: ConfigMeta
  WEB_SERVER: WebServerSettings
  WEB_SOCKET: WebsocketSettings
}

export class Config {
  private _settings: ConfigSettings = {
    CONFIG_META: {
      INSTALLATION_NAME: 'DEMO CONFIG',
      LOCATION_NAME: 'DEMO VENU',
    },
    WEB_SERVER: {
      WEB_SERVER_PORT: 80,
    },
    WEB_SOCKET: {
      PORT: 1972,
    },
  }

  private _configPath: string = path.join(process.cwd(), 'config.toml')

  get webServer() {
    return this._settings.WEB_SERVER
  }

  set webServer(settings: WebServerSettings) {
    this._settings.WEB_SERVER = settings
  }

  constructor() {
    // this._settings = settings
  }

  write() {
    fs.ensureFileSync(this._configPath)
    fs.writeFileSync(this._configPath, toml.stringify(this._settings))
  }

  read() {
    if (!fs.existsSync(this._configPath)) {
      this.write()
    }
    const obj: ConfigSettings = toml.parse(fs.readFileSync(this._configPath).toString()) as ConfigSettings

    console.log(obj)
  }

  get() {
    return this._settings
  }
}
