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
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_service_1 = __importDefault(require("./token-service"));
const api_errors_1 = __importDefault(require("../exceptions/api-errors"));
const db_1 = __importDefault(require("../db"));
const customer_dto_1 = __importDefault(require("../dtos/customer-dto"));
class AuthService {
    registration(email, password) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield (0, db_1.default)('SELECT * FROM customer WHERE email = $1', [email]);
            if ((_a = candidate === null || candidate === void 0 ? void 0 : candidate.rows) === null || _a === void 0 ? void 0 : _a[0]) {
                throw api_errors_1.default.BadRequest('Пользователь с таким email уже существует');
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 5);
            const customerResponse = yield (0, db_1.default)(`INSERT INTO customer (email, password) VALUES ($1, $2) RETURNING uuid, email`, [email, hashPassword]);
            if ((_b = customerResponse === null || customerResponse === void 0 ? void 0 : customerResponse.rows) === null || _b === void 0 ? void 0 : _b[0]) {
                const customerInstance = new customer_dto_1.default((_c = customerResponse === null || customerResponse === void 0 ? void 0 : customerResponse.rows) === null || _c === void 0 ? void 0 : _c[0]);
                const customerTokens = token_service_1.default.generateTokens(Object.assign({}, customerInstance));
                yield token_service_1.default.saveToken(customerInstance.uuid, customerTokens.refreshToken);
                return Object.assign(Object.assign({}, customerTokens), { customer: Object.assign({}, customerInstance) });
            }
            else {
                throw new Error('Внутренняя ошибка сервера. Не удалось создать пользователя.');
            }
        });
    }
    login(email, password) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const customerResponce = yield (0, db_1.default)('SELECT * FROM customer WHERE email = $1', [email]);
            if (!((_a = customerResponce === null || customerResponce === void 0 ? void 0 : customerResponce.rows) === null || _a === void 0 ? void 0 : _a[0])) {
                throw api_errors_1.default.BadRequest('Пользователь с таким email не найден');
            }
            const isPasswordsEqual = yield bcrypt_1.default.compare(password, customerResponce.rows[0].password);
            if (!isPasswordsEqual) {
                throw api_errors_1.default.BadRequest('Неверный пароль');
            }
            const customerInstance = new customer_dto_1.default(customerResponce.rows[0]);
            const customerTokens = token_service_1.default.generateTokens(Object.assign({}, customerInstance));
            yield token_service_1.default.saveToken(customerInstance.uuid, customerTokens.refreshToken);
            return Object.assign(Object.assign({}, customerTokens), { customer: Object.assign({}, customerInstance) });
        });
    }
    logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw api_errors_1.default.UnathorizedError();
            }
            yield token_service_1.default.removeToken(refreshToken);
        });
    }
    refresh(refreshToken) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const refreshTokenAndCustomer = yield token_service_1.default.findRefreshToken(refreshToken);
            const customerDBResult = yield (0, db_1.default)('SELECT * FROM customer WHERE uuid = $1', [refreshTokenAndCustomer.customer.uuid]);
            const customer = (_a = customerDBResult === null || customerDBResult === void 0 ? void 0 : customerDBResult.rows) === null || _a === void 0 ? void 0 : _a[0];
            if (!customer) {
                throw api_errors_1.default.BadRequest("Пользователь не найден");
            }
            const customerInstance = new customer_dto_1.default(customer);
            const customerTokens = token_service_1.default.generateTokens(Object.assign({}, customerInstance));
            yield token_service_1.default.saveToken(customerInstance.uuid, customerTokens.refreshToken);
            return Object.assign(Object.assign({}, customerTokens), { customer: Object.assign({}, customerInstance) });
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth-service.js.map