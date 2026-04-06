import { Router } from "express";
import { createBudget, deleteBudget, listBudgets, updateBudget } from "./controller.js";
import { requireAuth } from "../../middlewares/auth.js";

export const budgetsRouter = Router();

budgetsRouter.use(requireAuth);
budgetsRouter.get("/", listBudgets);
budgetsRouter.post("/", createBudget);
budgetsRouter.patch("/:id", updateBudget);
budgetsRouter.delete("/:id", deleteBudget);
