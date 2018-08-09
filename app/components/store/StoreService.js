import StoreModel from "../../models/StoreModel.js";
import ProductModel from "../../models/ProductModel.js"

//Private Parts


const sm = new StoreModel()



//public to controller
class StoreService {
  constructor() {

  }

  getItems() {
    return sm.getItems()
  }


  buy(bookIndex) {
    return sm.buy(bookIndex)
  }
  pay(bookIndex) {
      return sm.pay(bookIndex)
  }
}


export default StoreService