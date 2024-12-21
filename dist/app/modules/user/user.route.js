"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateSchema_1 = __importDefault(require("../../middlewares/validateSchema"));
const user_validation_1 = __importDefault(require("./user.validation"));
const user_controller_1 = require("./user.controller");
const route = express_1.default.Router();
route.post("/", (0, validateSchema_1.default)(user_validation_1.default), user_controller_1.userControllers.createUser);
exports.registerRoutes = route;
