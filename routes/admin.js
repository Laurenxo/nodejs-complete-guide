/**
 * Admin routes for handling product-related operations.
 * 
 * @module routes/admin
 */

const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

/**
 * GET /admin/add-product
 * 
 * Renders a form for adding a new product.
 * 
 * @name GetAddProduct
 * @route {GET} /admin/add-product
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formCSS: true,
    productCSS: true,
    layout: false
  });
});

/**
 * POST /admin/product
 * 
 * Handles the submission of the product form and logs the product data.
 * Redirects the user to the homepage after processing.
 * 
 * @name PostProduct
 * @route {POST} /admin/product
 * @param {Object} req - Express request object containing the form data in `req.body`.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title });

  res.redirect("/");
});

exports.routes = router;
exports.products = products;
