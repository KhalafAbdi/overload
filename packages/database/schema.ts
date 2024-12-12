import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("created_at", { withTimezone: true })
  .notNull()
  .defaultNow();
const updatedAt = timestamp("updated_at", { withTimezone: true })
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());

export const todos = pgTable("todos", {
  id: uuid("id").primaryKey().defaultRandom(),

  text: text("name").notNull(),
  completed: boolean("completed").notNull(),

  createdAt,
  updatedAt,
});
