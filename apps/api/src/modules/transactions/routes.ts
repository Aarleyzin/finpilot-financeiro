import { Router } from "express";
import { createTransaction, deleteTransaction, listTransactions, updateTransaction } from "./controller.js";
import { requireAuth } from "../../middlewares/auth.js";

export const transactionsRouter = Router();

transactionsRouter.use(requireAuth);
transactionsRouter.get("/", listTransactions);
transactionsRouter.post("/", createTransaction);
transactionsRouter.patch("/:id", updateTransaction);
transactionsRouter.delete("/:id", deleteTransaction);
