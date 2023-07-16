"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const customer_controller_1 = __importDefault(require("../controllers/customer-controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth-middleware"));
router.get("/", auth_middleware_1.default, customer_controller_1.default.getCustomers);
router.get("/:id", auth_middleware_1.default, customer_controller_1.default.getCustomers);
exports.default = router;
//# sourceMappingURL=customer-route.js.map