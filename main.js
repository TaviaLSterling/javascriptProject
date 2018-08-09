import StoreController from './app/components/store/StoreController.js'


//used to initialize and contain all controllers
class App {
  constructor() {
    this.controllers = {
      storeController: new StoreController()
    }
  }
}

//Connects app to document exposing the app class
window.app = new App();