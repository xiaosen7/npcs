"use client";
import { ESearchParamKey, patchSearchParams } from "@/search-params";
import {
  IComponentBaseProps,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  mp,
} from "@/shared";
import { useSearchParams } from "next/navigation";
import React from "react";

export interface IPagePaginationProps extends IComponentBaseProps {
  total: number;
  hrefHash?: string;
  searchParamKey?: ESearchParamKey;
}

export const PagePagination: React.FC<IPagePaginationProps> = (props) => {
  const { total, hrefHash, searchParamKey = ESearchParamKey.Page } = props;
  const searchParams = useSearchParams();
  const page = Number(searchParams?.get(searchParamKey)) || 1;
  const pageSize = 20;

  const lastPage = Math.ceil(total / pageSize);
  const prevHref =
    "?" +
    patchSearchParams(
      searchParams,
      searchParamKey,
      String(page - 1),
    ).toString() +
    (hrefHash ? `#${hrefHash}` : "");
  const nextHref =
    "?" +
    patchSearchParams(
      searchParams,
      searchParamKey,
      String(page + 1),
    ).toString() +
    (hrefHash ? `#${hrefHash}` : "");

  if (lastPage <= 1) {
    // show nothing if only exists one page
    return null;
  }

  return mp(
    props,
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={prevHref} />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>

        {lastPage > page && (
          <PaginationItem>
            <PaginationNext href={nextHref} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>,
  );
};
