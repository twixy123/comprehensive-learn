"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_errors_1 = __importDefault(require("../exceptions/api-errors"));
const token_service_1 = __importDefault(require("../service/token-service"));
function default_1(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(api_errors_1.default.UnathorizedError());
        }
        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) {
            return next(api_errors_1.default.UnathorizedError());
        }
        const customer = token_service_1.default.validateAccessToken(accessToken);
        if (!customer) {
            return next(api_errors_1.default.UnathorizedError());
        }
        req.customer = customer;
        next();
    }
    catch (error) {
        return next(api_errors_1.default.UnathorizedError());
    }
}
exports.default = default_1;
//# sourceMappingURL=auth-middleware.js.map