import type { Response } from "express";
import type { AuthenticatedRequest } from "../../types/authenticated-request.js";
import {
  createCategoryService,
  deleteCategoryService,
  listCategoriesService,
  updateCategoryService,
} from "./service.js";

export async function listCategories(req: AuthenticatedRequest, res: Response) {
  res.json(await listCategoriesService(req.userId));
}

export async function createCategory(req: AuthenticatedRequest, res: Response) {
  res.status(201).json(await createCategoryService(req.userId, req.body));
}

export async function updateCategory(req: AuthenticatedRequest, res: Response) {
  res.json(await updateCategoryService(req.userId, String(req.params.id), req.body));
}

export async function deleteCategory(req: AuthenticatedRequest, res: Response) {
  await deleteCategoryService(req.userId, String(req.params.id));
  res.status(204).end();
}
