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
exports.blogControllers = void 0;
const blog_service_1 = require("./blog.service");
const sandResponse_1 = __importDefault(require("../../utils/sandResponse"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user;
    const result = yield blog_service_1.blogServices.createBlogIntoDB(req.body, userId);
    (0, sandResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
}));
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogServices.getAllBlogFromDB(req.query);
    (0, sandResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        data: result,
    });
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.blogServices.updateBlogIntoDB(id, req.body);
    (0, sandResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield blog_service_1.blogServices.deleteBlogFromDB(id);
    res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
        statusCode: 200,
    });
}));
exports.blogControllers = {
    createBlog,
    getAllBlog,
    updateBlog,
    deleteBlog,
};
