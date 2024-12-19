import { Response } from "express";
import { TResponse } from "../interface/success";

const sandResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: true,
    message: data?.message,
    statusCode: data?.statusCode,
    data: data?.data,
  });
};

export default sandResponse;
