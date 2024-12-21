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
exports.adminServices = void 0;
const customError_1 = __importDefault(require("../../errors/customError"));
const blog_model_1 = require("../blog/blog.model");
const user_model_1 = require("../user/user.model");
const blockUserFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield blog_model_1.Blog.findById(_id);
    if (!isUserExist) {
        throw new customError_1.default(404, "User not found");
    }
    const result = yield user_model_1.User.findOneAndUpdate({ _id }, { isBlocked: true });
    return result;
});
const deleteBlogFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield blog_model_1.Blog.findById(_id);
    if (!isUserExist) {
        throw new customError_1.default(404, "User not found");
    }
    const result = yield blog_model_1.Blog.deleteOne({ _id });
    return result;
});
exports.adminServices = {
    blockUserFromDB,
    deleteBlogFromDB,
};
