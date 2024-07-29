import { consola, ConsolaInstance } from "consola";

export interface ILog extends ConsolaInstance {}

export function createLog(tag: string): ILog {
  return consola.withTag(tag);
}
