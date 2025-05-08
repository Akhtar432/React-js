const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");

dotenv.config();

const app = express();

const AuthRouter = require("./Routers/AuthRouter");
const ProductRouter = require("./Routers/ProductRouter");

require("./Models/db");

const PORT = process.env.PORT || 8080;

// Ensure 'uploads' folder exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

// Serve uploaded files statically
app.use("/uploads", express.static(uploadDir));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
