import { StatusCodes } from "http-status-codes";

import CustomApiError from "./customApiError";

class NotFoundError extends CustomApiError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
