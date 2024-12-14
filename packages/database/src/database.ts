import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schemas from "./schema";

import { env } from "@repo/env";

const { Pool } = pg;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle({
  client: pool,
  schema: schemas,
  logger: true,
});
