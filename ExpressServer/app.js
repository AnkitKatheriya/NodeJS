const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// const adminData = require("./Routes/admin");
const adminRoutes = require("./Routes/admin");
const shopeData = require("./Routes/shop");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminData.routes);
app.use("/admin", adminRoutes);
app.use(shopeData.routes);

// console.log(adminData.products);

app.use("/", errorController.get404);

// app.use("/", (req, res, next) => {
//   //   console.log("this always runs");
//   next();
// });

// app.use("/add-product", (req, res, next) => {
//   //   console.log("In add product middleware");
//   res.send(
//     "<html><body><form action='/product' method='POST'><input name='product-title' /><button>Submit</button></form></body></html>"
//   );
// });

// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   //   console.log("In another middleware");
//   res.send("<h1>Hello from express</h1>");
// });

app.listen(4000, () => {
  console.log("listening to the port 4000");
});
// const server = http.createServer(app);

// server.listen(4000);
