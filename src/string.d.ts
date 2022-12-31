type rules = {
  firstCharacter: (str: string) => string;
  all: (str: string) => string;
};
export declare const lowerCase: () => rules;
export declare const upperCase: () => rules;