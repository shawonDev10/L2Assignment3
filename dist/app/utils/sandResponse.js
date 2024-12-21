"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sandResponse = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: true,
        message: data === null || data === void 0 ? void 0 : data.message,
        statusCode: data === null || data === void 0 ? void 0 : data.statusCode,
        data: data === null || data === void 0 ? void 0 : data.data,
    });
};
exports.default = sandResponse;
