"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = __importDefault(require("./config"));
const pool = new pg_1.Pool({
    user: config_1.default.DB_USER,
    password: config_1.default.DB_PASSWORD,
    host: config_1.default.DB_HOST,
    port: Number(config_1.default.DB_PORT),
    database: config_1.default.DB_NAME
});
const query = (text, params) => pool.query(text, params);
exports.default = query;
//# sourceMappingURL=db.js.map