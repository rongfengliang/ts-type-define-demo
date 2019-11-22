
/**
 * App for bootstraping app
 */
declare class App {
    constructor();
    /**
     * init for application bootstraping
     */
    init(): void;
    /**
     * app login
     * @param name app name
     * @param password app passwords 
     */
    login(name:string, password:string):string;
    static appversion:string;
}

/**
 * Platform class
 */
declare class Platform extends App{
   constructor();
   /**
    * platform init 
    */
   init():void
   static  platformversion:string;
}
export default App;
export {
    App,
    Platform
}
