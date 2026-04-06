import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/authenticated-request.js";
import {
  createBudgetService,
  deleteBudgetService,
  listBudgetsService,
  updateBudgetService,
} from "./service.js";

export async function listBudgets(req: AuthenticatedRequest, res: Response) {
  res.json(await listBudgetsService(req.userId, req.query as Record<string, unknown>));
}

export async function createBudget(req: AuthenticatedRequest, res: Response) {
  res.status(201).json(await createBudgetService(req.userId, req.body));
}

export async function updateBudget(req: AuthenticatedRequest, res: Response) {
  res.json(await updateBudgetService(req.userId, String(req.params.id), req.body));
}

export async function deleteBudget(req: AuthenticatedRequest, res: Response) {
  await deleteBudgetService(req.userId, String(req.params.id));
  res.status(204).end();
}
