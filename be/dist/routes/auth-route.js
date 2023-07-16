"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
const auth_controller_1 = __importDefault(require("../controllers/auth-controller"));
router.post("/registration", (0, express_validator_1.body)("email").isEmail(), (0, express_validator_1.body)("password").isLength({ min: 3, max: 30 }), auth_controller_1.default.registration);
router.post("/login", (0, express_validator_1.body)("email").isEmail(), (0, express_validator_1.body)("password").isLength({ min: 3, max: 30 }), auth_controller_1.default.login);
router.get("/logout", auth_controller_1.default.logout);
router.get("/refresh", auth_controller_1.default.refresh);
exports.default = router;
//# sourceMappingURL=auth-route.js.map