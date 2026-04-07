import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

export const app = express();
export default app;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Health under /api for hosts que usam prefixo
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", apiRouter);
app.use(errorHandler);
