import { env } from "@/env";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/d1";

export const d1 = (database: D1Database) => drizzle(database, { schema });
