import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { adminServices } from "./admin.service";

const blockUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  await adminServices.blockUserFromDB(userId);

  res.status(200).json({
    success: true,
    message: "User blocked successfully",
    statusCode: 200,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await adminServices.deleteBlogFromDB(id);

  res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
    statusCode: 200,
  });
});

export const adminControllers = {
  blockUser,
  deleteBlog,
};
