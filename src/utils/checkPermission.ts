import { Types } from "mongoose";

import { UserDto } from "../dtos";

import { UnauthorizedError } from "../errors";

const checkPermission = (
  requestUser: UserDto,
  resourceUserId: Types.ObjectId
) => {
  if (requestUser.role === "admin") return;

  if (requestUser._id.toString() === resourceUserId.toString()) return;

  throw new UnauthorizedError("You don't have access");
};

export default checkPermission;
