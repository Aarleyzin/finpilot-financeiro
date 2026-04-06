import { Router } from "express";
import { authRouter } from "../modules/auth/routes.js";
import { dashboardRouter } from "../modules/dashboard/routes.js";
import { transactionsRouter } from "../modules/transactions/routes.js";
import { categoriesRouter } from "../modules/categories/routes.js";
import { budgetsRouter } from "../modules/budgets/routes.js";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/dashboard", dashboardRouter);
apiRouter.use("/transactions", transactionsRouter);
apiRouter.use("/categories", categoriesRouter);
apiRouter.use("/budgets", budgetsRouter);
