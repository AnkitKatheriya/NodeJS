const fs = require("fs");
const path = require("path");

const rootDirPath = require("../util/rootDirPath");

const getProductsFromFile = (cb) => {
  fs.readFile(
    path.join(rootDirPath, "data", "products.json"),
    (err, fileContent) => {
      if (err) {
        console.log("Error during file reading");
        cb([]);
      }

      try {
        cb(JSON.parse(fileContent));
      } catch (err) {
        console.log(err.message);
        cb([]);
      }
    }
  );
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(
        path.join(rootDirPath, "data", "products.json"),
        JSON.stringify(products),
        (err, data) => {
          if (err) {
            console.log("Error during writing file");
          }
        }
      );
    });
    //     fs.readFile(
    //       path.join(rootDirPath, "data", "products.json"),
    //       (err, fileContent) => {
    //         let products = [];
    //         if (err) {
    //           console.log("Error during file reading");
    //           return [];
    //         }

    //         try {
    //           products = JSON.parse(fileContent);
    //           console.log("fileContent", JSON.parse(fileContent));
    //         } catch {
    //           console.log("Error during parsing file");
    //         }
    //         products.push(this);
    //         fs.writeFile(
    //           path.join(rootDirPath, "data", "products.json"),
    //           JSON.stringify(products),
    //           (err, data) => {
    //             if (err) {
    //               console.log("Error during writing file");
    //             }
    //           }
    //         );
    //       }
    //     );
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
