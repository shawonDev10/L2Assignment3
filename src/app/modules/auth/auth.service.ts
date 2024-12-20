import config from "../../config";
import customError from "../../errors/customError";
import { User } from "../user/user.model";
import { TAuth } from "./auth.interface";
import { createToken } from "./utils";

const loginUser_authenticating = async (payload: TAuth) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw new customError(404, "This user is not found !");
  } else if (user.isBlocked === true) {
    throw new customError(403, "This user is blocked !");
  } else if (!(await User.matchedPass(payload.password, user.password))) {
    throw new customError(403, "Invalid credentials !");
  }

  const jwtPayload = {
    email: payload.email,
    password: payload.password,
  };

  const accessToken = createToken(
    jwtPayload,
    config.access_token_secret as string,
    config.access_token_expire as string,
  );

  return accessToken;
};

export const authServices = {
  loginUser_authenticating,
};
