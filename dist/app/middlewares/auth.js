"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const customError_1 = __importDefault(require("../errors/customError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../modules/user/user.model");
const auth = (...rolesRequired) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            throw new customError_1.default(401, "You are not authorized !");
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.access_token_secret);
        const { email } = decoded;
        const user = yield user_model_1.User.findOne({ email });
        if (!user) {
            throw new customError_1.default(404, "User not found !");
        }
        else if ((user === null || user === void 0 ? void 0 : user.isBlocked) === true) {
            throw new customError_1.default(403, "This user is blocked");
        }
        else if (rolesRequired && !rolesRequired.includes(user.role)) {
            throw new customError_1.default(401, "You are not authorized !");
        }
        req.user = user === null || user === void 0 ? void 0 : user._id;
        next();
    }));
};
exports.default = auth;
