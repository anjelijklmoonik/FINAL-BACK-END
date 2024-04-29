const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const { error } = require("console");

const sellerRouter = require ('./seller/seller.routes.js')
const buyerRouter = require ('./buyer/buyer.routes.js')

const upload = multer({ dest: "public" });
const app = express();
const port = 6000;

app.use(morgan("short"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.corsOptions = {
  origin: "http://localhost:3300",
};

app.use(sellerRouter);
app.use(buyerRouter)

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
