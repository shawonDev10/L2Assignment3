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
exports.blogServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const customError_1 = __importDefault(require("../../errors/customError"));
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload, _id) => __awaiter(void 0, void 0, void 0, function* () {
    payload.author = _id;
    const createBlog = yield blog_model_1.Blog.create(payload);
    const result = yield blog_model_1.Blog.findById(createBlog._id).populate({
        path: "author",
        select: "-password",
    });
    return result;
});
const getAllBlogFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogSearchableField = ["title", "content"];
    const blogQuery = new QueryBuilder_1.default(blog_model_1.Blog.find().populate({
        path: "author",
        select: "-password",
    }), query)
        .search(blogSearchableField)
        .sort()
        .filter();
    const result = yield blogQuery.modelQuery;
    return result;
});
const updateBlogIntoDB = (_id, payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExist = yield blog_model_1.Blog.findById(_id);
    if (!isBlogExist) {
        throw new customError_1.default(404, "Blog not found");
    }
    else if (isBlogExist.author.toString() !== userId.toString()) {
        throw new customError_1.default(403, "You do not have permission to update this data");
    }
    const result = yield blog_model_1.Blog.findOneAndUpdate({ _id }, payload, {
        new: true,
        runValidators: true,
    }).populate({
        path: "author",
        select: "-password",
    });
    return result;
});
const deleteBlogFromDB = (_id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExist = yield blog_model_1.Blog.findById(_id);
    if (!isBlogExist) {
        throw new customError_1.default(404, "Blog not found");
    }
    else if (isBlogExist.author.toString() !== userId.toString()) {
        throw new customError_1.default(403, "You do not have permission to delete this data");
    }
    const result = yield blog_model_1.Blog.deleteOne({ _id });
    return result;
});
exports.blogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
};
