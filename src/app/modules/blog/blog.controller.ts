import { Request, Response } from "express";
import { blogServices } from "./blog.service";
import sandResponse from "../../utils/sandResponse";
import { Types } from "mongoose";
import catchAsync from "../../utils/catchAsync";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user as Types.ObjectId;
  const result = await blogServices.createBlogIntoDB(req.body, userId);

  sandResponse(res, {
    statusCode: 201,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getAllBlogFromDB(req.query);

  sandResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogServices.updateBlogIntoDB(id, req.body);

  sandResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await blogServices.deleteBlogFromDB(id);

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    statusCode: 200,
  });
});

export const blogControllers = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
};
