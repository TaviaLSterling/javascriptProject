import StoreModel from "../../models/StoreModel.js";

//Private Parts


const sm = new StoreModel()



//public to controller
class StoreService {
  constructor() {

  }
  giveChange() {
    return sm.giveChange()
  }

  getItems() {
    return sm.getItems()
  }
  addMoney(type) {
    return sm.addMoney(type)
  }

  vend(foodIndex) {
    return sm.vend(foodIndex)
  }

}


export default StoreService