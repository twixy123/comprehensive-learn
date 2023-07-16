"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnathorizedError() {
        return new ApiError(401, "Пользователь не авторизован");
    }
    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
}
exports.default = ApiError;
//# sourceMappingURL=api-errors.js.map