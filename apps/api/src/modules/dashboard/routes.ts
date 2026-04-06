import { Router } from "express";
import { getDashboard } from "./controller.js";
import { requireAuth } from "../../middlewares/auth.js";

export const dashboardRouter = Router();

dashboardRouter.get("/", requireAuth, getDashboard);
