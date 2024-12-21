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
exports.authServices = void 0;
const config_1 = __importDefault(require("../../config"));
const customError_1 = __importDefault(require("../../errors/customError"));
const user_model_1 = require("../user/user.model");
const utils_1 = require("./utils");
const loginUser_authenticating = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload.email });
    if (!user) {
        throw new customError_1.default(404, "This user is not found !");
    }
    else if (user.isBlocked === true) {
        throw new customError_1.default(403, "This user is blocked !");
    }
    else if (!(yield user_model_1.User.matchedPass(payload.password, user.password))) {
        throw new customError_1.default(403, "Invalid credentials !");
    }
    const jwtPayload = {
        email: payload.email,
        password: payload.password,
    };
    const accessToken = (0, utils_1.createToken)(jwtPayload, config_1.default.access_token_secret, config_1.default.access_token_expire);
    return accessToken;
});
exports.authServices = {
    loginUser_authenticating,
};
