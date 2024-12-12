import { createEnv } from "@t3-oss/env-nextjs";

const server: Parameters<typeof createEnv>[0]["server"] = {};

const client: Parameters<typeof createEnv>[0]["client"] = {};

export const env = createEnv({
  client,
  server,
  runtimeEnv: {},
});
