import { Request } from "express";

const getApiUrl = (req: Request) => {
  return `${req.protocol}://${req.get("host")}`;
}

export default getApiUrl;