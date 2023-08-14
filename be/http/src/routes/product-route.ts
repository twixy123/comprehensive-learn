import {Request, Router} from "express";
import {body} from "express-validator";

import {trace} from "@opentelemetry/api";

import productController from "../controllers/product-controller";
import opentelemetryMiddleware from "../middleware/opentelemetry-middleware";

const tracer = trace.getTracer("product-controller")

const router = Router();

router.post(
  "/add",
  body("price").isNumeric(),
  body('name').notEmpty(),
  body('description').notEmpty(),
  productController.addProduct
);

router.get("/",
  (req: Request, res, next) => {
    return opentelemetryMiddleware(req, () => productController.getProducts(req, res, next))
  }
);
router.get("/:uuid",
  (req: Request, res, next) => {
    return opentelemetryMiddleware(req, () => productController.getOneProduct(req, res, next))
  });
router.put("/:uuid", productController.updateProduct);
router.delete("/:uuid", productController.deleteProduct);

export default router;