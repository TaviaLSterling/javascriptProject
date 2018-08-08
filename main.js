constructor() {
    this.controllers = {
      storeController: new StoreController()
    }
  }
}

//Connects app to document exposing the app class
window.app = new App();
export default App