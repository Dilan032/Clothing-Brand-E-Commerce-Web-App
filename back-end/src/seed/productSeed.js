import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/productModel.js";

dotenv.config();

const categories = ["Men", "Women", "Kids"];
const sizes = ["S", "M", "L", "XL"];

const generateProducts = (count = 25) => {
  return Array.from({ length: count }).map((_, i) => ({
    
    name: `Product ${i + 1}`,
    description: `Description for product ${i + 1}`,
    price: Math.floor(Math.random() * 3000) + 1000,
    image: `https://picsum.photos/seed/product${i}/400/400`,
    category: categories[Math.floor(Math.random() * categories.length)],
    sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1)
  }));
};

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(generateProducts(20));

    console.log("20 products seeded successfully");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();
