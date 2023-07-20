import { Router } from "express";
import { body } from "express-validator";

import productController from "../controllers/product-controller";

const router = Router();

router.post(
  "/add",
  body("price").isNumeric(),
  body('name').notEmpty(),
  body('description').notEmpty(),
  productController.addProduct
);

router.get("/", productController.getProducts);
router.get("/:uuid", productController.getOneProduct);
router.put("/:uuid", productController.updateProduct);
router.delete("/:uuid", productController.deleteProduct);

export default router;