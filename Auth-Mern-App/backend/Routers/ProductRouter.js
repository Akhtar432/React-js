const ensureAuthenticated = require('../Middlewares/AuthProduct');
const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- Logged in user detail ---', req.user);

    const products = [
        { name: "mobile", price: 10000 },
        { name: "tv", price: 20000 },
    ];

    res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        user: req.user, // Optionally include user info
        data: products,
    });
});

module.exports = router;