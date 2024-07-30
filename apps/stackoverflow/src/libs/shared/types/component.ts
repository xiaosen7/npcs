import { z } from "zod";
import { IFormProps } from "../components";
import { ISafeAny } from "./base";

export interface IFormComponentProps<TSchema extends z.ZodObject<ISafeAny>>
  extends Omit<IFormProps<TSchema>, "items" | "schema"> {}
