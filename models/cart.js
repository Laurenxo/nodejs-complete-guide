const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(process.mainModule.filename), "data", "cart.json");

module.exports = class Cart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = {
        products: [],
        totalPrice: 0,
      };

      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const productIndex = cart.products.findIndex((p) => p.id === id);
      const existingProduct = cart.products[productIndex];
      let updatedProduct;

      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty = 1;
        cart.products = [...cart.products];
        cart.products[productIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice += parseFloat(productPrice);
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log("err", err);
      });
    });
  }
};
