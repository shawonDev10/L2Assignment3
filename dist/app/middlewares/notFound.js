"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API not found",
        "statusCode": 404,
        error: "",
    });
};
exports.default = notFound;
