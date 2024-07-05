import { ISearchParams } from "@/search-params";
import React from "react";
import { z } from "zod";
import { IFormProps } from "../components";
import { ISafeAny } from "./base";

export interface IComponentBaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface IControllableComponentProps<TValue> {
  value?: TValue;
  defaultValue?: TValue;
  onChange?: (value: TValue) => void;
  disabled?: boolean;
}

export interface IPageProps<TParams = {}, TSearchParams = {}> {
  params: TParams;
  searchParams: ISearchParams & TSearchParams;
}

export interface IFormComponentProps<TSchema extends z.ZodObject<ISafeAny>>
  extends Omit<IFormProps<TSchema>, "items" | "schema"> {}
