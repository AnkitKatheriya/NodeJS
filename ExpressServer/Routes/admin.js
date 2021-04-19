const express = require("express");
const router = express.Router();
const path = require("path");
const rootDirPath = require("../util/rootDirPath");
const procuctsController = require("../controllers/products");

// const rootDriPath = require("../util/rootDirPath");

// const products = [];

router.get("/add-product", procuctsController.getAddProduct);

router.post("/add-product", procuctsController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
