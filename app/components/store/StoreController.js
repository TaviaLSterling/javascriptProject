import StoreService from "./StoreService.js";

//PRIVATE PARTS

//variables outside of the exported class are not accessible
const storeService = new StoreService()

function drawTotal(total) {
  document.getElementById('total').innerText = total
}

function drawItems() {
  let items = storeService.getItems()
  //draw the items to the page
  let template = ''
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `
            <div class="book-item" onclick="app.controllers.storeController.vend(${i})">
              <img src="${item.img}" alt = "">
              <h3> ${item.price}</h3> 
            </div>
            `
  }
  document.getElementById('food').innerHTML = template
}

function drawVend(img) {
  document.getElementById('bought-item').setAttribute('src', img)
}

//PUBLIC PARTS
//Controllers are used for getting user input
//Updating Screen
//Sending and reciving data from Service
class StoreController {
  constructor() {

  }

  giveChange() {
    var change = storeService.giveChange()
    drawTotal("0.00")
    alert(change)

  }

  //used to send money to service
  addMoney(cur) {
    let total = storeService.addMoney(cur)
    drawTotal(total)
  }

  vend(foodIndex) {
    let result = storeService.vend(foodIndex)
    if (result) {
      drawTotal(result.total)
      drawVend(result.img)
    }
  }

}

drawItems()

export default StoreController