const mongoose = require("mongoose");

require("dotenv").config();
require("./config/mongodb");

const express = require("express");
const hbs = require("hbs");
const app = express();
const ProductModel = require("./models/Product");
const data = require("./data");

// file allowed for browser download
app.use(express.static(__dirname + "/public"));

// accept incoming post values and expose in reqbody
app.use(express.urlencoded());

// view engine setup
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// app.get("/" (req, res) => {
//     res.redirect("/home");
// });

// route for the home page
app.get(["/", "/home"], (req, res) => {
  res.render("home");
});

// route to access the products page
app.get("/products", async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.render("products", { allProducts });
  } catch (err) {
    console.log(error);
  }
});

// route to access the contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

// localhost access
app.listen(process.env.PORT, () => {
  console.log("http://localhost:" + process.env.PORT);
});
