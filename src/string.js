const lowerCase = () => {
  const firstCharacter = (str) => {
    const subStrs = str.split(" ");
    const lowerCase = subStrs
      .map((subStr) => {
        return subStr.charAt(0).toLowerCase() + subStr.slice(1).toUpperCase();
      })
      .join(" ");
    return lowerCase;
  };
  const all = (str) => {
    const newStr = str.toLowerCase();
    return newStr;
  };
  return { firstCharacter, all };
};

const upperCase = () => {
  const firstCharacter = (str) => {
    const subStrs = str.split(" ");
    const upperCase = subStrs
      .map((subStr) => {
        return subStr.charAt(0).toUpperCase() + subStr.slice(1).toLowerCase();
      })
      .join(" ");
    return upperCase;
  };
  const all = () => {
    const newStr = str.toUpperCase();
    return newStr;
  };
  return { firstCharacter, all };
};

module.exports = { lowerCase, upperCase };