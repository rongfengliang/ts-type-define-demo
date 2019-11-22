class App {
  constructor() { }
  /**
   * App init
   */
  init() {
    console.log("app is init .......")
  }
  /**
   * app login
   * @param {name} name 
   * @param {password} password 
   */
  login(name, password) {
    return `${name}-------${password}`
  }
}
/**
 * Platform
 */

class Platform extends App {
  constructor() {
  }
  init() {
    console.log("Platform is init.....")
  }
}

App.appversion = "v1.0"
Platform.appversion = "v1.0"

export default App;
export {
  App,
  Platform
}
