"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const api_errors_1 = __importDefault(require("../exceptions/api-errors"));
const auth_service_1 = __importDefault(require("../service/auth-service"));
class AuthController {
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return next(api_errors_1.default.BadRequest("Ошибка валидации", errors.array()));
                }
                const { email, password } = req.body;
                const customer = yield auth_service_1.default.registration(email, password);
                res.cookie("refreshToken", customer.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(customer);
            }
            catch (error) {
                next(error);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    return next(api_errors_1.default.BadRequest("Ошибка валидации", errors.array()));
                }
                const { email, password } = req.body;
                const customer = yield auth_service_1.default.login(email, password);
                res.cookie("refreshToken", customer.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(customer);
            }
            catch (error) {
                next(error);
            }
        });
    }
    logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                yield auth_service_1.default.logout(refreshToken);
                res.clearCookie("refreshToken");
                return res.json({ message: "Вы успешно вышли из системы" });
            }
            catch (error) {
                next(error);
            }
        });
    }
    refresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const customer = yield auth_service_1.default.refresh(refreshToken);
                res.cookie("refreshToken", customer.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(customer);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth-controller.js.map