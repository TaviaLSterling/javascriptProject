class StoreModel {
    constructor() {
      this.transactionTotal = 0
      this.subtotal = 0
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
  
 
    buy(bookId) { //foodId
      let item = this.bookItems.find(i => i.id == bookId) //let item = this.foodItems.find(i => i.id == foodId)
      if (this.bookItems[bookId].quantity > 0) {
        return {
          img: item.img,
          subtotal: this.bookItems[bookId].price,
          tax: this.subtotal * .06,
          total: this.transactionTotal.toFixed(2)
        }
      }
    }
      
    getItems() {
      return this.bookItems
    }
    pay(bookIndex) {
        let item = this.bookItems[bookIndex].price
        this.transactionTotal = 0
        this.bookItems[bookIndex].quantity -= 1
        this.till += this.transactionTotal
     }
  }
  
  
  export default StoreModel