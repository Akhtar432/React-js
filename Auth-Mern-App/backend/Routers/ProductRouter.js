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
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration (Only Images)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName =
      new Date().toISOString().replace(/:/g, "-") + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// File Filter: Allow only JPEG & PNG
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG and PNG images are allowed"), false);
  }
};

// Multer Upload Configuration
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter,
});

// Middleware to Handle Multer Errors
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message.includes("Only JPEG and PNG")) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

// Get all products
router.get("/", ensureAuthenticated, productController.Get_All_Products);

// Create a new product with image upload
router.post(
  "/",
  ensureAuthenticated,
  upload.single("productImage"),
  handleMulterError,
  productController.Create_New_Product
);

// Get a specific product by ID
router.get("/:productId", ensureAuthenticated, productController.Specific_Show_Product);

// Update a product by ID with image upload
router.patch(
  "/:productId",
  ensureAuthenticated,
  upload.single("productImage"),
  handleMulterError,
  productController.Update_Product
);

// Delete a product by ID
router.delete("/:productId", ensureAuthenticated, productController.Delete_Product);

module.exports = router;
