import express from "express";
import { registerRoutes } from "../modules/user/user.route";
import { loginRoutes } from "../modules/auth/auth.route";
import { blogRoutes } from "../modules/blog/blog.route";
import { adminRoutes } from "../modules/admin/admin.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth/register",
    route: registerRoutes,
  },
  {
    path: "/auth/login",
    route: loginRoutes,
  },
  {
    path: "/blogs",
    route: blogRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
