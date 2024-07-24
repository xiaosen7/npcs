import { Prisma } from "@/prisma/generated";
import { MODEL_CONFIG_MAP } from "@/prisma/model-config";
import { capitalCase } from "change-case";
import { keys } from "lodash-es";
import { IFilterOption } from "../components";

/**
 * Get the filter options by model name
 * @param modelName
 * @returns
 */
export function getModelFilterOptions(
  modelName: Prisma.ModelName,
): IFilterOption[] {
  return keys(MODEL_CONFIG_MAP[modelName].filters).map((value) => ({
    value,
    label: capitalCase(value),
  }));
}
