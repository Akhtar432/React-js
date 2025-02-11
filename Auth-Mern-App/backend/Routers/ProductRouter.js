const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const ensureAuthenticated = require("../Middlewares/AuthProduct");
const productController = require("../Controllers/ProductController");

// Ensure 'uploads' folder exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage configuration for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save files to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only JPEG, JPG, and PNG files are allowed"));
    }
  },
});

// Get all products
router.get("/", ensureAuthenticated, productController.Get_All_Products);

// Create a new product with image upload
router.post("/", ensureAuthenticated, upload.single("image"), productController.Create_New_Product);

// Get a specific product by ID
router.get("/:productId", ensureAuthenticated, productController.Specific_Show_Product);

// Update a product by ID with image upload
router.patch("/:productId", ensureAuthenticated, upload.single("image"), productController.Update_Product);

// Delete a product by ID
router.delete("/:productId", ensureAuthenticated, productController.Delete_Product);

module.exports = router;