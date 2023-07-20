import { Router } from "express";
import { body } from "express-validator";
const router = Router();

import authController from "../controllers/auth-controller";

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 30 }),
  authController.registration
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 30 }),
  authController.login
);
router.get("/logout", authController.logout);
router.get("/refresh", authController.refresh);


export default router;