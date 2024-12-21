"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogValidateSchema = exports.BlogValidateSchema = void 0;
const zod_1 = require("zod");
exports.BlogValidateSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            invalid_type_error: "Title must be string",
            required_error: "Title is Required",
        }),
        content: zod_1.z.string({
            invalid_type_error: "Content must be string",
            required_error: "Content is Required",
        }),
        isPublished: zod_1.z.boolean().default(true),
    }),
});
exports.UpdateBlogValidateSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ invalid_type_error: "Title must be string" }).optional(),
        content: zod_1.z
            .string({ invalid_type_error: "Content must be string" })
            .optional(),
    }),
});
