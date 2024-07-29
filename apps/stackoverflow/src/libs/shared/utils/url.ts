import { omit } from "lodash-es";
import { formatUrl } from "next/dist/shared/lib/router/utils/format-url";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";

export function getUrl(options: {
  url: string;
  searchParams: Record<string, string>;
}) {
  const { url } = options;

  if (url.startsWith("http")) {
    return getUrlWithProtocol(options);
  }

  return getHref(options);
}

function getUrlWithProtocol(options: {
  url: string;
  searchParams: Record<string, string>;
}) {
  const { url, searchParams } = options;

  const newSearchParams = new URLSearchParams(searchParams);
  const urlObj = new URL(url);

  newSearchParams.forEach((value, key) => {
    urlObj.searchParams.set(key, value);
  });

  return urlObj.toString();
}

function getHref(options: {
  url: string;
  searchParams: Record<string, string>;
}) {
  const { url, searchParams } = options;
  const parsedUrl = structuredClone(parseUrl(url));
  Object.entries(searchParams).forEach(([key, value]) => {
    parsedUrl.query[key] = value;
  });

  return formatUrl(omit(parsedUrl, "search"));
}
