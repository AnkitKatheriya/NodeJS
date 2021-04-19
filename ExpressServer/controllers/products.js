const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //   console.log("In add product middleware");
  //   res.send(
  //     "<html><body><form action='/admin/add-product' method='POST'><input name='product-title' /><button>Submit</button></form></body></html>"
  //   );
  //   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  //   res.sendFile(path.join(rootDirPath, "views", "add-product.html"));
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    hasShopCSS: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  //   console.log(req.body);
  //   products.push({ title: req.body.title });
  console.log("Inside Post add products");
  console.log(req.body.title);
  const product = new Product(req.body.title);
  product.save();
  //   console.log("length of products array", product.fetchAll());
  res.redirect("/");
};

exports.getProductList = (req, res, next) => {
  //   console.log("In another middleware");
  //   res.send("<h1>Hello from express</h1>");
  //   res.sendFile("../views/shop.html");  // It will give an error message to make the path absolute
  //   res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  //   console.log(adminData.products);
  //   res.sendFile(path.join(rootDirPath, "views", "shop.html"));
  console.log("Inside Get Product list");
  //   const products = new Product("dummy");
  //   console.log(Product.fetchAll());
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      pageTitle: "Shopping",
      path: "/",
      products: products,
      hasProducts: products.length > 0,
      hasShopCSS: true,
    });
  });
};
