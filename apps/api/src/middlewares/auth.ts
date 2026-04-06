import type { NextFunction, Response } from "express";
import type { AuthenticatedRequest } from "../types/authenticated-request.js";
import { verifyAuthToken } from "../lib/jwt.js";

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = header.slice("Bearer ".length);
  const userId = verifyAuthToken(token);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.userId = userId;
  next();
}
