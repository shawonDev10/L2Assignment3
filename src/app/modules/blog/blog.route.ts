import express from "express";
import auth from "../../middlewares/auth";
import { blogControllers } from "./blog.controller";
import { ROLE } from "../user/user.interface";
import validateRequest from "../../middlewares/validateSchema";
import {
  BlogValidateSchema,
  UpdateBlogValidateSchema,
} from "./blog.validation";

const route = express.Router();

route.post(
  "/",
  auth(ROLE.admin, ROLE.user),
  validateRequest(BlogValidateSchema),
  blogControllers.createBlog,
);

route.get("/", blogControllers.getAllBlog);

route.patch(
  "/:id",
  auth(ROLE.user),
  validateRequest(UpdateBlogValidateSchema),
  blogControllers.updateBlog,
);

route.delete("/:id", auth(ROLE.admin, ROLE.user), blogControllers.deleteBlog);

export const blogRoutes = route;
