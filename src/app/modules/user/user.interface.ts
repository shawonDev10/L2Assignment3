/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;
}

export interface UserModel extends Model<TUser> {
  matchedPass(clientPassText: string, DBhashPass: string): Promise<boolean>;
}
