import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/authenticated-request.js";
import { loginService, meService, registerService } from "./service.js";

export async function register(req: AuthenticatedRequest, res: Response) {
  const result = await registerService(req.body);
  res.status(201).json(result);
}

export async function login(req: AuthenticatedRequest, res: Response) {
  const result = await loginService(req.body);
  res.json(result);
}

export async function me(req: AuthenticatedRequest, res: Response) {
  const result = await meService(req.userId);
  res.json(result);
}
