import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const UserSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round),
  );
});

UserSchema.statics.matchedPass = async function (clientPassText, DBhashPass) {
  return await bcrypt.compare(clientPassText, DBhashPass);
};

export const User = model<TUser, UserModel>("User", UserSchema);
