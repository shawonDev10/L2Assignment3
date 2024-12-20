import { z } from "zod";

const AuthValidationSchema = z.object({
  body: z.object({
    email: z.string({
      invalid_type_error: "Email must be string",
      required_error: "Email is Required",
    }),
    password: z.string({
      invalid_type_error: "Password must be string",
      required_error: "Password is Required",
    }),
  }),
});

export default AuthValidationSchema;
