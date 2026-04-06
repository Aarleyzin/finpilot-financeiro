import { Router } from "express";
import { createCategory, deleteCategory, listCategories, updateCategory } from "./controller.js";
import { requireAuth } from "../../middlewares/auth.js";

export const categoriesRouter = Router();

categoriesRouter.use(requireAuth);
categoriesRouter.get("/", listCategories);
categoriesRouter.post("/", createCategory);
categoriesRouter.patch("/:id", updateCategory);
categoriesRouter.delete("/:id", deleteCategory);
