import { app } from "./app.js";
import { env } from "./config/env.js";
import { bootstrapDemoUsers } from "./lib/bootstrap-demo.js";

(async () => {
  try {
    await bootstrapDemoUsers();
  } catch (error) {
    console.error("Failed to seed demo users", error);
  }

  app.listen(env.PORT, () => {
    console.log(`API listening on http://localhost:${env.PORT}`);
  });
})();
