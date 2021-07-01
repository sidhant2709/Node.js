const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // console.log("In The '/add-product'MiddleWare");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("req.body", req.body);
  res.redirect("/");
});

module.exports = router;
