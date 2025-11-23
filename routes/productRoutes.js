import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

const router = Router();

router.get("/", getProducts);        // GET all
router.get("/:id", getProduct);      // GET one
router.post("/", createProduct);     // CREATE
router.put("/:id", updateProduct);   // UPDATE
router.delete("/:id", deleteProduct); // DELETE

export default router;
