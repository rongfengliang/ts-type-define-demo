
import { App, Platform } from "./app"
let app = new App()
let platform = new Platform()
app.init()
platform.init()
console.log(`app version inf0:${App.appversion}\r\npaltform  version info ${Platform.appversion}`)
let token = app.login("dalong", "dddd")
console.log(token)