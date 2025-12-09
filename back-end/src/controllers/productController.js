import Product from "../models/productModel.js";

// GET all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        const count = await Product.countDocuments();

        res.json({
            count,
            products
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// GET product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product)
            return res.status(404).json({
                message: "Product not found"
            });

        res.json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
