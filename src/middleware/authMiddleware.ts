import { Request, Response, NextFunction } from "express";

import { UnauthenticatedError } from "../errors";

// import { tokenService } from "../services";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const authorizationHeader = req.headers.authorization;
  // if (!authorizationHeader) {
  //   throw new UnauthenticatedError("Not authorized");
  // }
  //
  // const accessToken = authorizationHeader.split(" ")[1];
  // if (!accessToken) {
  //   throw new UnauthenticatedError("Not authorized");
  // }
  //
  // const userData = await tokenService.validateAccessToken(accessToken);
  // if (!userData) {
  //   throw new UnauthenticatedError("Not authorized");
  // }
  //
  // req.user = userData;

  next();
};

export default authMiddleware;
