export function nameOf<TObject>(obj: TObject, key: keyof TObject): string;
export function nameOf<TObject>(key: keyof TObject): string;
export function nameOf(key1: any, key2?: any): any {
  return key2 ?? key1;
}
