import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";

const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await userServices.createUserIntoDB(req.body);

    res.status(200).json({
        success: true,
        message: "user create successfully",
        data: result
    })
})

export const userControllers = {
    createUser
}