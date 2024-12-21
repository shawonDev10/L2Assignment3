import QueryBuilder from "../../builder/queryBulder";
import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import { Types } from "mongoose";

const createBlogIntoDB = async (payload: TBlog, _id: Types.ObjectId) => {
  payload.author = _id;
  const createBlog = await Blog.create(payload);

  const result = await Blog.findById(createBlog._id).populate({
    path: "author",
    select: "-password",
  });

  return result;
};

const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogSearchableField = ["title", "content"];

  const blogQuery = new QueryBuilder(
    Blog.find().populate({
      path: "author",
      select: "-password",
    }),
    query,
  ).search(blogSearchableField).sort().filter()

  const result = await blogQuery.modelQuery;
  return result;
};

const updateBlogIntoDB = async (_id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findOneAndUpdate({ _id }, payload, {
    new: true,
    runValidators: true,
  }).populate({
    path: "author",
    select: "-password",
  });

  return result;
};

const deleteBlogFromDB = async (_id: string) => {
  const result = await Blog.deleteOne({ _id });
  return result;
};

export const blogServices = {
  createBlogIntoDB,
  getAllBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
