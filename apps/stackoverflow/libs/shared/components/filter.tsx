"use client";

import { Prisma } from "@/prisma/generated";
import { ESearchParamKey } from "@/search-params";
import { useMemoizedFn } from "ahooks";
import React from "react";
import { useNextRouter } from "../hooks";
import { IComponentBaseProps } from "../types";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";
import { cn, getModelFilterOptions, getUrl, mp } from "../utils";

export interface IFilterProps extends IComponentBaseProps {
  options: IFilterOption[];
  /**
   * @default "Select a filter"
   */
  placeholder?: React.ReactNode;
  variant?: "tags" | "default";
}

export interface IFilterOption {
  value: string;
  label: string;
}

export const Filter: React.FC<IFilterProps> = (props) => {
  const { variant = "default" } = props;
  const { searchParams, router } = useNextRouter();

  const filter = searchParams.get(ESearchParamKey.Filter) ?? undefined;

  const onChange = useMemoizedFn((newFilter: string) => {
    if (newFilter === filter) {
      return;
    }

    router?.replace(
      getUrl({
        url: location.href,
        searchParams: {
          [ESearchParamKey.Filter]: newFilter,
        },
      }),
      {
        scroll: false,
      },
    );
  });

  return mp(
    props,
    <div>
      <div
        className={cn(
          "min-h-[56px] min-w-[170px]",
          variant === "tags" && "hidden",
        )}
      >
        <Select value={filter} onValueChange={onChange}>
          <SelectTrigger
            className={
              "no-focus body-regular light-border background-light800_dark300 text-dark500_light700 min-h-[56px] rounded-md border-0 px-5 py-2.5"
            }
          >
            <SelectValue placeholder={props.placeholder ?? "Select a filter"} />
          </SelectTrigger>
          <SelectContent className="text-dark500_light700 small-regular bg-light-900 dark:bg-dark-300 border-none">
            {props.options.map((option) => (
              <SelectItem
                key={option.value}
                className="focus:bg-light-800 dark:focus:bg-dark-400 cursor-pointer"
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div
        className={cn(
          "w-full flex-wrap gap-3 flex",
          variant === "default" && "hidden",
        )}
      >
        {props.options.map(({ label, value }) => (
          <Button
            key={value}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              filter === value
                ? "bg-primary-100 text-primary-500 dark:bg-dark-400 "
                : "bg-light-800 text-light-500 dark:bg-dark-300 dark:text-light-500"
            }`}
            onClick={() => onChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>,
  );
};

export interface IModelFilterProps extends Omit<IFilterProps, "options"> {
  name: Prisma.ModelName;
}
/**
 * Automatically determine the filter options by model name
 * @param props
 * @returns
 */
export const ModelFilter: React.FC<IModelFilterProps> = (props) => {
  const { name: modelName } = props;
  const options = getModelFilterOptions(modelName);
  return <Filter {...props} options={options} />;
};
