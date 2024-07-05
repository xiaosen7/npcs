import { getUrl } from "./url";

describe("url", () => {
  describe("getUrl", () => {
    test("base", () => {
      expect(
        getUrl({
          url: "http://example.com",
          searchParams: {
            q: "1",
            a: "",
          },
        })
      ).toBe("http://example.com/?q=1&a=");
    });

    test("preserve existing query", () => {
      expect(
        getUrl({
          url: "http://example.com?c=1",
          searchParams: {
            q: "1",
          },
        })
      ).toBe("http://example.com/?c=1&q=1");
    });
  });

  describe("getHref", () => {
    test("base", () => {
      expect(
        getUrl({
          url: "/question/1",
          searchParams: {
            q: "1",
          },
        })
      ).toBe("/question/1?q=1");
    });

    test("preserve existing query", () => {
      expect(
        getUrl({
          url: "/question/1?c=1",
          searchParams: {
            q: "1",
          },
        })
      ).toBe("/question/1?c=1&q=1");
    });
  });
});
