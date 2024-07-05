import { Prisma } from "@prisma/client";
import { capitalCase } from "change-case";
import { keys } from "lodash-es";
import { IFilterOption } from "../components";
import { MODEL_CONFIG_MAP } from "../constants";

/**
 * Get the filter options by model name
 * @param modelName
 * @returns
 */
export function getModelFilterOptions(
  modelName: Prisma.ModelName
): IFilterOption[] {
  return keys(MODEL_CONFIG_MAP[modelName].filters).map((value) => ({
    value,
    label: capitalCase(value),
  }));
}
