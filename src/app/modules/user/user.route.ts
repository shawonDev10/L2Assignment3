import express from "express";
import validateRequest from "../../middlewares/validateSchema";
import UserValidationSchema from "./user.validation";
import { userControllers } from "./user.controller";

const route = express.Router();

route.post("/", validateRequest(UserValidationSchema), userControllers.createUser)


export const userRoutes = route;