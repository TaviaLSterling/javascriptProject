class ProductModel {
    constructor(id,title,image,price,quantity){
        this.id = id || ''
        this.title = title || ''
        this.image = image || ''
        this.price = price || 0
        this.quantity = quantity || 0

    }
}



export default ProductModel