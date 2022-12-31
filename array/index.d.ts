export declare const search: (
  arr: object[],
  query: string,
  keysForImportance?: string[],
  keyForIgnoreSearch?: string[]
) => object[];
export declare const descending: (arr: Array<T>, key?: string) => T;
export declare const ascending: (arr: Array<T>, key?: string) => T;
export declare const arrayToObject: (arr: object[], key?: string) => object;
export declare const objectToArray: (obj: object) => any[];
export declare const allKeysInArray: (arr: any[]) => string[];
export declare const arrayToString: (arr: any[]) => string;
export declare const objectToString: (obj: object) => string;
