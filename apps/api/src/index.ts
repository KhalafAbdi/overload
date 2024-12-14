import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { db } from "@repo/database/src/database";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/todos", async (c) => {
  const result = await db.execute(`select 1`);
  return c.text("Hello todos");
});

const port = 3002;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
