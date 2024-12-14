import { db } from "./src/database";

const main = async () => {
  try {
    console.log("Starting test...");
    const t = await db.execute(`select 1`);
    console.log(t, "blaaa");
  } catch (error) {
    console.error("Migration test:", error);
  } finally {
    console.log("finished test");
  }
};

void main();
