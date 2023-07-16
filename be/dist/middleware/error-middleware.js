"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_errors_1 = __importDefault(require("../exceptions/api-errors"));
function default_1(err, req, res, next) {
    console.log(err);
    if (err instanceof api_errors_1.default) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: "Внутренняя ошибка сервера." });
}
exports.default = default_1;
//# sourceMappingURL=error-middleware.js.map