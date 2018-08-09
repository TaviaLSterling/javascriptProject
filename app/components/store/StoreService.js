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

  vend(foodIndex) {
    return sm.buy(foodIndex)
  }

}


export default StoreService