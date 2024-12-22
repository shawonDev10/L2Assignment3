"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const blog_controller_1 = require("./blog.controller");
const user_interface_1 = require("../user/user.interface");
const validateSchema_1 = __importDefault(require("../../middlewares/validateSchema"));
const blog_validation_1 = require("./blog.validation");
const route = express_1.default.Router();
route.post("/", (0, auth_1.default)(user_interface_1.ROLE.user), (0, validateSchema_1.default)(blog_validation_1.BlogValidateSchema), blog_controller_1.blogControllers.createBlog);
route.get("/", blog_controller_1.blogControllers.getAllBlog);
route.patch("/:id", (0, auth_1.default)(user_interface_1.ROLE.user), (0, validateSchema_1.default)(blog_validation_1.UpdateBlogValidateSchema), blog_controller_1.blogControllers.updateBlog);
route.delete("/:id", (0, auth_1.default)(user_interface_1.ROLE.user), blog_controller_1.blogControllers.deleteBlog);
exports.blogRoutes = route;
