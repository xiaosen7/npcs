export const isValidString = (value: any) => {
  return typeof value === "string" && value.length > 0;
};

export const isPositiveInter = (s: any) =>
  typeof s === "number" && s >= 0 && s % 1 === 0;

export function createFormData(object: object) {
  const formData = new FormData();
  Object.entries(object).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}

export function deconstructFormData<T>(formData: FormData): T {
  if (!(formData instanceof FormData)) {
    return formData;
  }

  const object: any = {};
  Array.from(formData.entries()).forEach(([key, value]) => {
    object[key] = value;
  });
  return object;
}
