import { z } from "zod";
import { QUESTION_SCHEMA } from "../constants";

export type IQuestionSchema = typeof QUESTION_SCHEMA;

export type IQuestionPostValue = z.infer<IQuestionSchema>;
