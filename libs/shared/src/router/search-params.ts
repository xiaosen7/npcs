export function patchSearchParams(
  params: URLSearchParams = new URLSearchParams(),
  patch: Record<string, string>,
) {
  const searchParams = new URLSearchParams(params?.toString() ?? "");

  Object.entries(patch).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
  });

  return searchParams;
}
