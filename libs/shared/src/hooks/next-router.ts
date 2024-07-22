/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export function useNextRouter() {
  try {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return {
      router,
      pathname,
      searchParams,
    };
  } catch {
    // only for storybook
    return {
      router: null,
      pathname: "",
      searchParams: new ReadonlyURLSearchParams(),
    };
  }
}
