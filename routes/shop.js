const express = require("express");
const path = require("path");
const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: adminData.products,
    docTitle: "Shop",
    pageTitle: "Shop",
    path: "/",
    hasProducts: adminData.products.length > 0,
    activeShop: true,
    productCSS: true,
    layout: false
  });
});

module.exports = router;
