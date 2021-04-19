const express = require("express");
const router = express.Router();
const path = require("path");

// const rootDirPath = require("../util/rootDirPath");
const productsController = require("../controllers/products");
// const adminData = require("./admin");
// const adminData = require("./admin");

router.get("/", productsController.getProductList);

// module.exports = router;
module.exports.routes = router;
