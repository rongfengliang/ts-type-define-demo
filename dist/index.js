"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var app = new app_1.App();
var platform = new app_1.Platform();
app.init();
platform.init();
var token = app.login("dalong", "dddd");
console.log(token);
