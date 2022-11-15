class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.likedBy = []
    this.reviews = []
  }
}

module.exports = Product
