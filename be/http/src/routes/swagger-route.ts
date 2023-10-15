import { Router } from "express";
const router = Router();
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger/index.json"
import authController from "../controllers/auth-controller";

router.use("/", swaggerUI.serve)
router.get("/", swaggerUI.setup(swaggerDocument));

export default router;
