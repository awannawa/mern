const express = require("express");

const app = express();
const productRoutes = require("./src/routes/products");

app.use("/v1/pelanggan", productRoutes);

app.listen(4000);
