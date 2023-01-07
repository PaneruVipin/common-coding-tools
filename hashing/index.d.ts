export declare const makeHash: (str: string, seed: number) => number;
export declare const verifyHash: (
  original: string,
  hashedValue: number,
  seed: number
) => boolean;
