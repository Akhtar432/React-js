const Joi = require('joi');

// Signup Validation Middleware
const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required().messages({
            'string.base': 'Name must be a string',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name cannot exceed 100 characters',
            'any.required': 'Name is required'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Invalid email format',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(4).max(100).required().messages({
            'string.min': 'Password must be at least 4 characters long',
            'string.max': 'Password cannot exceed 100 characters',
            'any.required': 'Password is required'
        })
    });

    const { error } = schema.validate(req.body, { abortEarly: false }); // Show all errors
    if (error) {
        const errorMessages = error.details.map(err => err.message); // Extract error messages
        return res.status(400).json({
            message: "Validation error",
            errors: errorMessages
        });
    }
    next();
};

// Login Validation Middleware
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'Invalid email format',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(4).max(100).required().messages({
            'string.min': 'Password must be at least 4 characters long',
            'string.max': 'Password cannot exceed 100 characters',
            'any.required': 'Password is required'
        })
    });

    const { error } = schema.validate(req.body, { abortEarly: false }); // Show all errors
    if (error) {
        const errorMessages = error.details.map(err => err.message); // Extract error messages
        return res.status(400).json({
            message: "Validation error",
            errors: errorMessages
        });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};
