"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const customer_route_1 = __importDefault(require("./customer-route"));
const auth_route_1 = __importDefault(require("./auth-route"));
router.use("/", auth_route_1.default);
router.use("/customer", customer_route_1.default);
router.use("/test", (res, req) => {
    req.json([123, 123, 123]);
});
exports.default = router;
//# sourceMappingURL=index.js.map