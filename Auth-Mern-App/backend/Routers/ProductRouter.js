const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../Middlewares/AuthProduct');
const productController = require('../Controllers/ProductController');

// Get all products
router.get('/', ensureAuthenticated, productController.Get_All_Products);

// Create a new product
router.post('/', ensureAuthenticated, productController.Create_New_Product);

// Get a specific product by ID
router.get('/:productId', ensureAuthenticated, productController.Specific_Show_Product);

// Update a product by ID
router.patch('/:productId', ensureAuthenticated, productController.Update_Product);

// Delete a product by ID
router.delete('/:productId', ensureAuthenticated, productController.Delete_Product);

module.exports = router;
