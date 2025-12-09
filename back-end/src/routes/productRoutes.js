import express from "express";
import { 
    getProducts, 
    getProductById, 
    manageProductList 
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

// product list (search, filters, pagination)
router.get("/list/manage", manageProductList);

export default router;
