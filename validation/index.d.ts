type errors = {
  feild: string;
  message: string;
}[];

type rules = {
  [str: string]: string;
  [num: number]: string;
};
export declare const validation: (
  data: object,
  rules: rules
) => { data?: object; errors?: errors };

export declare const schema: (value: any) => string;
