"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_interface_1 = require("../user/user.interface");
const admin_controller_1 = require("./admin.controller");
const route = express_1.default.Router();
route.patch("/users/:userId/block", (0, auth_1.default)(user_interface_1.ROLE.admin), admin_controller_1.adminControllers.blockUser);
route.delete("/blogs/:id", (0, auth_1.default)(user_interface_1.ROLE.admin), admin_controller_1.adminControllers.deleteBlog);
exports.adminRoutes = route;
