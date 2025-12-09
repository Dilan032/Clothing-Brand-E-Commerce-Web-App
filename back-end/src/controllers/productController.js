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

// manage product list
export const manageProductList = async (req, res) => {
    try {
        const { 
            page = 1,
            limit = 10, 
            search, 
            category, 
            size, 
            minPrice, 
            maxPrice 
        } = req.query;

        const query = {};

        // Search by name or description
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

        // Filter by category
        if (category) {
            query.category = category;
        }

        // Filter by size
        if (size) {
            query.sizes = size;
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        // Pagination
        const skip = (page - 1) * limit;

        const products = await Product.find(query)
            .skip(skip)
            .limit(Number(limit));

        const total = await Product.countDocuments(query);

        res.json({
            total,
            page: Number(page),
            limit: Number(limit),
            pages: Math.ceil(total / limit),
            products
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

