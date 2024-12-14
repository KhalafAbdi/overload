import * as dotenv from "dotenv";

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schemas from "./schema";

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle({
  client: pool,
  schema: schemas,
  logger: true,
});
