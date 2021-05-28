const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

// Init the express app
const app = express();

// Middlewares
app.use(express.json());
app.use("/images", express.static("images"));

// DB connection
mongoose
  .connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database..."))
  .catch((err) => console.log(err));

const products = require("./routes/products");
app.use("/products", products);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
