import { Router } from "express";

import authRouter from "./auth-route";
import customerRouter from "./customer-route";
import productRouter from "./product-route";

import authMiddleware from "../middleware/auth-middleware";

const router = Router();

router.use("/", authRouter)
router.use("/customer", authMiddleware, customerRouter);
router.use("/product", authMiddleware, productRouter);
router.use("/test", (res, req) => {
  req.json([123, 123, 123])
});

export default router;