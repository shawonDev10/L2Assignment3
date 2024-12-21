"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateSchema_1 = __importDefault(require("../../middlewares/validateSchema"));
const auth_validation_1 = __importDefault(require("./auth.validation"));
const auth_controller_1 = require("./auth.controller");
const route = express_1.default.Router();
route.post("/", (0, validateSchema_1.default)(auth_validation_1.default), auth_controller_1.authControllers.loginUser);
exports.loginRoutes = route;
