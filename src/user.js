const Review = require('./review')

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.likes = []
    this.basket = []
    this.reviews = []
  }

  greet() {
    console.log(`Hello ${this.name}, welcome to Joy Toys!`)
  }

  likeProduct(product) {
    this.likes.push(product)
    product.likedBy.push(this)
  }

  addToBasket(product) {
    this.basket.push(product)
  }

  makeReview(product, text, rate) {
    const review = new Review(text, rate, this)
    this.reviews.push(review)
    product.reviews.push(review)
  }
}

module.exports = User
