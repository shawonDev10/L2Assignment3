import express from "express";
import validateRequest from "../../middlewares/validateSchema";
import AuthValidationSchema from "./auth.validation";
import { authControllers } from "./auth.controller";

const route = express.Router();

route.post(
  "/",
  validateRequest(AuthValidationSchema),
  authControllers.loginUser,
);

export const loginRoutes = route;
