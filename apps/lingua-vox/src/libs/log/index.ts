import { env } from "@npcs/env/shared";
import { createLog, LogLevels } from "@npcs/log";

export const log = createLog("Lingua Vox");
log.level = env.NODE_ENV === "development" ? LogLevels.debug : LogLevels.info;
