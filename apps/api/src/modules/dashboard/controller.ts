import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/authenticated-request.js";
import { getDashboardService } from "./service.js";

export async function getDashboard(req: AuthenticatedRequest, res: Response) {
  const result = await getDashboardService(req.userId);
  res.json(result);
}
