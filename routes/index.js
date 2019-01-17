const express = require("express");
const router = express.Router();
//model
const product = require("../models/product/product");
/* GET home page. */

//find products
// const findProducts = async () => {
//   let result = await product.find();
//   if (result) {
//     return result;
//   }
//   return false;
// };
// const data = findProducts();
// if (data) {
//   console.log(data);
// } else {
//   console.log("undefined");
// }

router.get("/", function(req, res, next) {
  //find products
  product.find().then(result => {
    console.log("done");
    if (result) {
      res.render("shop/index", { title: "Express", products: result });
    } else {
      res.send("404 server error!");
    }
  });
});

module.exports = router;
