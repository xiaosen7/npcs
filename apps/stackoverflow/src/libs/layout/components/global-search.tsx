"use client";

import { Prisma } from ".prisma/client";
import { ESearchParamKey } from "@/search-params";
import {
  IComponentBaseProps,
  ISafeAny,
  SearchInput,
  getUrl,
  mp,
} from "@/shared";
import { ImageTag } from "@/shared/assets/icons/tag";
import {
  useBoolean,
  useClickAway,
  useDebounceEffect,
  useEventTarget,
  useMemoizedFn,
  useRequest,
  useSet,
} from "ahooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type IGlobalSearchType = Prisma.ModelName;
const globalTypes: IGlobalSearchType[] = [
  Prisma.ModelName.Question,
  Prisma.ModelName.Answer,
  Prisma.ModelName.Tag,
  Prisma.ModelName.User,
];

type IModelNameToType = {
  [K in Prisma.ModelName]: Prisma.TypeMap["model"][K]["payload"]["scalars"];
};

export type IGlobalSearchResult<T = Prisma.ModelName> = Array<
  T extends Prisma.ModelName ? IModelNameToType[T] & { type: T } : never
>;

const modelMap: {
  [K in Prisma.ModelName]: {
    getTitle: (model: IModelNameToType[K]) => React.ReactNode;
    getLink: (model: IModelNameToType[K]) => string;
  };
} = {
  [Prisma.ModelName.Question]: {
    getTitle: (question) => question.title,
    getLink: (question) => `/question/${question.id}`,
  },
  [Prisma.ModelName.Answer]: {
    getTitle: (answer) => answer.content,
    getLink: (answer) =>
      getUrl({
        url: `/question/${answer.questionId}`,
        searchParams: {
          [ESearchParamKey.AnswerId]: answer.id,
        },
      }),
  },
  [Prisma.ModelName.Tag]: {
    getTitle: (tag) => tag.name,
    getLink: (tag) => `/tags/${tag.id}`,
  },
  [Prisma.ModelName.User]: {
    getTitle: (user) => user.username,
    getLink: (user) => `/profile/${user.id}`,
  },
};

export interface IGlobalSearchProps extends IComponentBaseProps {
  api: (
    types: IGlobalSearchType[],
    value: string,
  ) => Promise<IGlobalSearchResult>;
}

export const GlobalSearch: React.FC<IGlobalSearchProps> = (props) => {
  const { api } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, openActions] = useBoolean(false);
  useClickAway(openActions.setFalse, containerRef);
  const [data, setData] = useState<IGlobalSearchResult>([]);
  const { loading, run } = useRequest(api, {
    manual: true,
    onBefore: openActions.setTrue,
    onSuccess(data) {
      setData(data);
    },
  });
  const [value, { onChange }] = useEventTarget<string>();
  const [types, typesActions] = useSet<Prisma.ModelName>();

  useDebounceEffect(() => {
    // run when types or input value change
    if (value) {
      run(types.size === 0 ? globalTypes : Array.from(types), value);
    }
  }, [value, types, run]);

  useEffect(() => {
    if (!value) {
      setData([]);
    }
  }, [value]);

  const onTypeClick = useMemoizedFn((type: IGlobalSearchType) => {
    if (types.has(type)) {
      typesActions.remove(type);
    } else {
      typesActions.add(type);
    }
  });

  return mp(
    props,
    <div ref={containerRef} className="relative">
      <SearchInput
        placeholder="Search globally"
        value={value}
        onChange={onChange}
        onFocus={openActions.setTrue}
      />

      {open && (
        <div className="bg-light-800 dark:bg-dark-400 absolute top-full z-10 mt-3 w-full rounded-lg py-5 shadow-sm">
          <div className="flex items-baseline gap-5 px-5">
            <p className="text-dark400_light900 body-medium">Type:</p>
            <div className="flex flex-wrap gap-3">
              {globalTypes.map((type) => (
                <button
                  key={type}
                  className={`light-border-2 small-medium dark:text-light-800 dark:hover:text-primary-500 rounded-3xl px-5 py-2 capitalize ${
                    types.has(type)
                      ? "bg-primary-500 text-light-900 dark:hover:text-light-800"
                      : "bg-light-700 text-dark-400 hover:text-primary-500 dark:bg-dark-500"
                  }`}
                  type="button"
                  onClick={() => onTypeClick(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-light-700/50 dark:bg-dark-500/50 my-5 h-px" />
          <p className="text-dark400_light900 paragraph-semibold space-y-5 px-5">
            Top Match
          </p>

          {loading ? (
            <div className="flex-center flex-col px-5">
              <svg
                className="text-primary-500 my-2 size-10 animate-spin"
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
            <div className="flex max-h-[60vh] flex-col gap-2 overflow-auto">
              {data.length > 0 ? (
                data.map((item) => (
                  <Link
                    key={item.id}
                    className="hover:bg-light-700/50 hover:dark:bg-dark-500/50 flex w-full cursor-pointer items-start gap-3 px-5 py-2.5"
                    href={modelMap[item.type].getLink(item as ISafeAny)}
                  >
                    <ImageTag
                      alt="tag"
                      className="invert-colors mt-1 object-contain"
                      height={18}
                      width={18}
                    />

                    <div className="flex flex-col">
                      <p className="body-medium text-dark200_light800 line-clamp-1">
                        {modelMap[item.type].getTitle(item as ISafeAny)}
                      </p>
                      <p className="text-light400_light500 small-medium mt-1 font-bold capitalize">
                        {item.type}
                      </p>
                    </div>
                  </Link>
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
    </div>,
  );
};
