import customError from "../../errors/customError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  // check the user is already exist or not
  const isUserExist = await User.findOne(
    { email: payload.email },
    { _id: 0, email: 1 },
  );

  if (isUserExist) {
    throw new customError(400, "User is already exist");
  }

  const result = await User.create(payload);

  const projection = {
    _id: result._id,
    name: result.name,
    email: result.email,
  };

  return projection;
};

export const userServices = {
  createUserIntoDB,
};
