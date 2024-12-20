import express from "express";
import auth from "../../middlewares/auth";
import { ROLE } from "../user/user.interface";
import { adminControllers } from "./admin.controller";

const route = express.Router();

route.patch(
  "/users/:userId/block",
  auth(ROLE.admin),
  adminControllers.blockUser,
);

route.delete("/blogs/:id", auth(ROLE.admin), adminControllers.deleteBlog);

export const adminRoutes = route;
