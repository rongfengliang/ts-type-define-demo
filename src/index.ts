
import {App,Platform} from "./app"
let app  = new App()
let platform = new Platform()
app.init()
platform.init()
let token =  app.login("dalong","dddd")
console.log(token)