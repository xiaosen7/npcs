"use client";
import { ESearchParamKey, patchSearchParams } from "@/search-params";
import { ImageSearch } from "@/shared/assets/icons/search";
import { useDebounceEffect, useMemoizedFn } from "ahooks";
import { omit } from "lodash-es";
import React, { useState } from "react";
import { IComponentBaseProps, Input, InputProps, mp, useRouter } from "../ui";

export interface ISearchInputSyncQueryProps
  extends IComponentBaseProps,
    Pick<InputProps, "onFocus"> {
  placeholder?: string;
  /**
   * @default ESearchParamKey.Q
   */
  searchParamKey?: ESearchParamKey;
}

export const SearchInputSyncQuery: React.FC<ISearchInputSyncQueryProps> = (
  props,
) => {
  const { placeholder, searchParamKey = ESearchParamKey.Q } = props;
  const { router, pathname, searchParams } = useRouter();

  const searchParamValue = searchParams?.get(searchParamKey) ?? "";
  const [value, setValue] = useState(searchParamValue);

  const onChange = useMemoizedFn(((e) => {
    setValue(e.target.value);
  }) satisfies InputProps["onChange"]);

  useDebounceEffect(() => {
    const newSearchParams = patchSearchParams(searchParams, {
      [searchParamKey]: value,
    });
    if (newSearchParams.toString() !== searchParams.toString()) {
      newSearchParams.delete(ESearchParamKey.Page); // means value changed, reset page
      router?.replace(`?${newSearchParams.toString()}`, {
        scroll: false,
      });
    }
  }, [searchParamValue, pathname, router, value]);

  return mp(
    props,
    <SearchInput placeholder={placeholder} value={value} onChange={onChange} />,
  );
};

export const SearchInput: React.FC<InputProps> = (props) => {
  return mp(
    props,
    <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
      <ImageSearch
        alt="Search"
        className="cursor-pointer"
        height={24}
        width={24}
      />

      <Input
        className="paragraph-regular no-focus placeholder border-none bg-inherit shadow-none outline-none"
        type="text"
        {...omit(props, ["className", "style"])}
      />
    </div>,
  );
};
