import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

import authRoutes from "./src/routes/authRoutes.js";
import { protect_JWT } from "./src/middleware/authMiddleware.js";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();

// connect to mongoDB
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", protect_JWT, productRoutes);
