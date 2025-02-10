const Product = require('../Models/ProductModel');
const mongoose = require('mongoose');

// Get all products
exports.Get_All_Products = (req, res, next) => {
    Product.find()
        .select("name price productImage") // Include only the necessary fields
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => ({
                    name: doc.name,
                    price: doc.price,
                    productImage: doc.productImage,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:7070/products/' + doc._id
                    }
                }))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: err
            });
        });
};

// Create a new product
exports.Create_New_Product = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.file ? req.file.path : null // Handle image file
    });

    product.save()
        .then(result => {
            res.status(201).json({
                message: 'Product created successfully',
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    productImage: result.productImage,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:7070/products/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: err.message,
            });
        });
};

// Get a specific product by ID
exports.Specific_Show_Product = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .select('name price productImage')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:7070/products/'
                    }
                });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.message });
        });
};

// Update a product by ID
exports.Update_Product = (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};

    for (const prop in req.body) {
        if (req.body.hasOwnProperty(prop)) {
            updateOps[prop] = req.body[prop];
        }
    }

    Product.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:7070/products/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

// Delete a product by ID
exports.Delete_Product = (req, res, next) => {
    const id = req.params.productId;

    Product.deleteOne({ _id: id })
        .exec()
        .then(result => {
            if (result.deletedCount > 0) {
                res.status(200).json({
                    message: 'Product deleted successfully',
                    request: {
                        type: 'POST',
                        url: 'http://localhost:7070/products/',
                        body: { name: 'String', price: 'Number' }
                    }
                });
            } else {
                res.status(404).json({ message: 'No product found with the provided ID' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: err.message,
            });
        });
};
