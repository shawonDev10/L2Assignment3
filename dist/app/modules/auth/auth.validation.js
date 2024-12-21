"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AuthValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            invalid_type_error: "Email must be string",
            required_error: "Email is Required",
        }),
        password: zod_1.z.string({
            invalid_type_error: "Password must be string",
            required_error: "Password is Required",
        }),
    }),
});
exports.default = AuthValidationSchema;
