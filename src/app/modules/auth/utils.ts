import { TAuth } from "./auth.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createToken = (
  jwtPayload: TAuth,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};

export const matchedPass = async (
  givenPassText: string,
  hashPassDB: string,
) => {
  return await bcrypt.compare(givenPassText, hashPassDB);
};
