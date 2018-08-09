import StoreModel from "../../models/StoreModel.js";

//Private Parts


const sm = new StoreModel()



//public to controller
class StoreService {
  constructor() {

  }

  getItems() {
    return sm.getItems()
  }
  addMoney(type) {
    return sm.addMoney(type)
  }

  buy(bookIndex) {
    return sm.buy(bookIndex)
  }

}


export default StoreService