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
