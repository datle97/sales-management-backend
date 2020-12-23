const express = require("express");
const router = express.Router();
const Products = require("../models/Product");

router.get("/:product", async (req, res) => {
  const { product } = req.params;
  const page = req.query.page >= 1 ? req.query.page : 1;
  const limit = 40;
  // -1 do skip bắt đầu = 0
  const skip = (page - 1) * limit;
  try {
    // lấy các sản phẩm theo param
    const products = await Products[product].find({}).limit(limit).skip(skip);
    res.json(products);
  } catch (err) {
    res.json({ message: "product err" });
  }
});

module.exports = router;
