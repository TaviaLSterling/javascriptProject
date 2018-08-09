class StoreModel {
    constructor() {
      this.transactionTotal = 0
      
      this.bookItems = [{
        id: 'book1',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51R7mLxzL7L._SX327_BO1,204,203,200_.jpg',
        price: 10.50,
        quantity: 20
      }, {
        id: 'book2',
        img: 'http://www.robinhobb.com/wp-content/uploads/2010/01/RoyalAssassin-UK.jpg',
        price: 12.00,
        quantity: 8
      }, {
        id: 'book3',
        img: 'http://www.robinhobb.com/wp-content/uploads/2010/01/AssassinsQuest-UK.jpg',
        price: 15.00,
        quantity: 10
      }]
      this.till = 0
    }
  
    addMoney(coin) {
      if (this.acceptableCurrency[coin]) {
        this.transactionTotal += this.acceptableCurrency[coin]
        return this.transactionTotal.toFixed(2)
      }
    
    }
  
  
    buy(bookIndex) { //foodId
      let item = this.bookItems[bookIndex] //let item = this.foodItems.find(i => i.id == foodId)
      if (this.transactionTotal >= item.price && item.quantity > 0) {
        item.quantity -= 1
        this.transactionTotal -= item.price
        this.till += item.price
        return {
          img: item.img,
          total: this.transactionTotal.toFixed(2)
        }
      }
    }
     giveChange() {
      let change = this.transactionTotal
      this.transactionTotal = 0
      return change
     }
  
    getItems() {
      return this.bookItems
    }
    pay(price) {
        let item = this.bookItems[price]
        this.transactionTotal = 0
        this.till += this.bookItems.price
     }
  }
  
  
  export default StoreModel