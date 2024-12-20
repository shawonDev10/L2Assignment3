import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { TRole } from "../modules/user/user.interface";
import customError from "../errors/customError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/user/user.model";

const auth = (...rolesRequired: TRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new customError(401, "You are not authorized !");
    }

    const decoded = jwt.verify(
      token,
      config.access_token_secret as string,
    ) as JwtPayload;
    const { email } = decoded;

    const user = await User.findOne({ email });

    if (!user) {
      throw new customError(404, "User not found !");
    } else if (user.isBlocked === true) {
      throw new customError(403, "This user is blocked");
    } else if (rolesRequired && !rolesRequired.includes(user.role)) {
      throw new customError(401, "You are not authorized !");
    }

    req.user = user?._id;
    next();
  });
};

export default auth;
