/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import config from "../config";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import { TErrorDetails } from "../interface/error";
import customError from "../errors/customError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong !";
  let errorDetails: TErrorDetails = [
    {
      path: "",
      message: "Something went wrong !",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorDetails = simplifiedError?.errorDetails;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorDetails = simplifiedError?.errorDetails;
  } else if (err instanceof customError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorDetails = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    statusCode,
    error: errorDetails,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
