import { Router } from "express";
import { body } from "express-validator";

import productController from "../controllers/product-controller";
import authMiddleware from "../middleware/auth-middleware";

const router = Router();

router.post(
  "/add",
  authMiddleware,
  body("price").isNumeric(),
  body('name').notEmpty(),
  body('description').notEmpty(),
  productController.addProduct
);

router.get("/", productController.getProducts);
router.get("/:uuid", productController.getOneProduct);
router.put("/:uuid", authMiddleware, productController.updateProduct);
router.delete("/:uuid", authMiddleware, productController.deleteProduct);

export default router;