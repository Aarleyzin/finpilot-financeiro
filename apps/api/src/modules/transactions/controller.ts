import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/authenticated-request.js";
import {
  createTransactionService,
  deleteTransactionService,
  listTransactionsService,
  updateTransactionService,
} from "./service.js";

export async function listTransactions(req: AuthenticatedRequest, res: Response) {
  res.json(await listTransactionsService(req.userId, req.query as Record<string, unknown>));
}

export async function createTransaction(req: AuthenticatedRequest, res: Response) {
  const result = await createTransactionService(req.userId, req.body);
  res.status(201).json(result);
}

export async function updateTransaction(req: AuthenticatedRequest, res: Response) {
  const result = await updateTransactionService(req.userId, String(req.params.id), req.body);
  res.json(result);
}

export async function deleteTransaction(req: AuthenticatedRequest, res: Response) {
  await deleteTransactionService(req.userId, String(req.params.id));
  res.status(204).end();
}
