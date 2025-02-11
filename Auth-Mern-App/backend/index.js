const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const AuthRouter = require("./Routers/AuthRouter");
const ProductRouter = require("./Routers/ProductRouter");
const UploadRouter = require("./Routers/UploadRouter"); // Import Upload Router

require("./Models/db");
dotenv.config();

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/upload", UploadRouter); // Register Upload Router

// Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});