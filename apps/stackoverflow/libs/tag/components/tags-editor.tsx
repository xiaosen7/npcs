"use client";

import {
  IComponentBaseProps,
  IControllableComponentProps,
  ITag,
  Input,
  cn,
  mp,
} from "@/shared";
import {
  useBoolean,
  useClickAway,
  useControllableValue,
  useDebounceEffect,
  useEventTarget,
  useMemoizedFn,
  useRequest,
} from "ahooks";
import { isNumber } from "lodash-es";
import { useRef, useState } from "react";
import { Paths } from "type-fest";
import { TagCard } from "./card";
import { Tag } from "./tag";

export interface ITagsEditorProps<TSearchedTag extends ITag>
  extends IComponentBaseProps,
    IControllableComponentProps<ITag[]> {
  searchApi?: (keywords: string, value: ITag[]) => Promise<TSearchedTag[]>;
  getSearchedTagTotalQuestions?: Paths<TSearchedTag>;
  searchedTagTotalQuestionsPaths?: Paths<TSearchedTag>;
  max?: number;
}

export const TagsEditor = <TSearchedTag extends ITag>(
  props: ITagsEditorProps<TSearchedTag>
) => {
  const { disabled, searchApi, max, searchedTagTotalQuestionsPaths } = props;
  const [value, onChange] = useControllableValue<ITag[] | undefined>(props);
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, openActions] = useBoolean(false);
  const [data, setData] = useState<TSearchedTag[]>([]);
  useClickAway(openActions.setFalse, containerRef);
  const { loading, run: search } = useRequest(
    async (inputValue: string, value: ITag[]) =>
      searchApi?.(inputValue, value) ?? [],
    {
      manual: true,
      onBefore: openActions.setTrue,
      onSuccess(data) {
        setData(data);
      },
    }
  );

  const [inputValue, { onChange: onInputChange }] = useEventTarget<string>();

  useDebounceEffect(() => {
    // run when types or input value change
    if (inputValue) {
      search(inputValue, value || []);
    }
  }, [inputValue, search]);

  const onClickTagCard = useMemoizedFn((tag: ITag) => {
    onChange([...(value ?? []), tag]);
    onInputChange({ target: { value: "" } });
    openActions.setFalse();
  });

  const onRemove = useMemoizedFn((tag: ITag) => {
    onChange(value?.filter((x) => x.id !== tag.id));
  });

  return mp(
    props,
    <div className="relative">
      <div
        ref={containerRef}
        className="light-border-2 text-dark300_light700 background-light900_dark300 paragraph-regular flex border dark:bg-background"
      >
        <div className="flex items-center justify-center gap-2">
          {value?.map((tag, index) => (
            <Tag
              key={tag.id}
              className={cn(index === 0 && "ml-3")}
              extra={
                <svg
                  className="cursor-pointer"
                  fill="none"
                  height="12"
                  viewBox="0 0 15 15"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => onRemove(tag)}
                >
                  <path
                    clip-rule="evenodd"
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              }
              linkable={false}
              tag={tag}
            />
          ))}
        </div>
        <Input
          className="no-focus min-h-[56px] rounded-l-none border-none"
          disabled={disabled || !searchApi || value?.length === max}
          placeholder={
            value?.length === max ? "Maximum reached" : "Add tags..."
          }
          value={inputValue}
          onChange={onInputChange}
        />
      </div>

      {open && (
        <div className="absolute top-full z-10 mt-3 w-full rounded-lg bg-light-800 shadow-sm dark:bg-dark-400">
          {loading ? (
            <div className="flex-center flex-col  p-5">
              <svg
                className="my-2 size-10 animate-spin text-primary-500"
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
              <p className="body-regular text-dark200_light800">
                Browsing the entire database...
              </p>
            </div>
          ) : (
            <div className="background-light900_dark200 flex max-h-[60vh] flex-wrap overflow-auto p-2">
              {data.length > 0 ? (
                data.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer"
                    onClick={() => onClickTagCard(item)}
                  >
                    <TagCard
                      className="border-none rounded-sm shadow-none hover:bg-light-800 dark:hover:bg-background"
                      linkable={false}
                      tag={item}
                      totalQuestions={
                        searchedTagTotalQuestionsPaths
                          ? isNumber(item[searchedTagTotalQuestionsPaths])
                            ? (item[
                                searchedTagTotalQuestionsPaths
                              ] as unknown as number)
                            : undefined
                          : undefined
                      }
                    />
                  </div>
                ))
              ) : (
                <p className="text-dark200_light800 body-regular flex-center flex-col px-5 py-2.5">
                  No results found.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
