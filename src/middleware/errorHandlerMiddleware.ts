import { NextFunction, Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

import { CustomApiError } from "../errors";

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};

export default errorHandlerMiddleware;
