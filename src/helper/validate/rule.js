const { upperCase, lowerCase } = require("../../string");

const required = (value, feild) => {
  const data = {};
  if (value) {
    data.value = value;
  } else {
    data.error = {
      feild,
      message: `${feild} is require feild`,
    };
  }
  return data;
};

const string = (value, feild) => {
  const data = {};
  if (typeof value == "string") {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = { feild, message: `${feild} must be a string` };
  }
  return data;
};

const number = (value, feild) => {
  const data = {};
  if (typeof value == "number") {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = { feild, message: `${feild} must be a number` };
  }
  return data;
};

const email = (value, feild) => {
  const data = {};
  if (
    value?.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = { feild, message: `${feild} must be a valid email` };
  }
  return data;
};

const url = (value, feild) => {
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  const data = {};
  if (isValidUrl(value)) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = { feild, message: `${feild} must be a valid URL` };
  }
  return data;
};

const minLength = (value, feild, ruleValue) => {
  const data = {};
  if (value?.length >= +ruleValue) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message: `${feild} length is to short, minimium length is ${ruleValue}`,
    };
  }
  return data;
};

const maxLength = (value, feild, ruleValue) => {
  const data = {};
  if (value?.length <= +ruleValue) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message: `${feild} length is to long, maximium length is ${ruleValue}`,
    };
  }
  return data;
};

const min = (value, feild, ruleValue) => {
  const data = {};
  if (+value < +ruleValue) {
    data.error = {
      feild,
      message: `${feild} value is to short, minimium value is ${ruleValue}`,
    };
  } else if (!value) {
    return;
  } else if (+value > +ruleValue) {
    data.value = value;
  }
  return data;
};

const max = (value, feild, ruleValue) => {
  const data = {};
  if (+value > +ruleValue) {
    data.error = {
      feild,
      message: `${feild} value is to long, maximium value is ${ruleValue}`,
    };
  } else if (!value) {
    return;
  } else if (+value < +ruleValue) {
    data.value = value;
  }
  return data;
};

const range = (value, feild, ruleValue) => {
  const data = {};
  const ranges = ruleValue.split("-");
  if (+value >= +ranges?.[0] && +value <= +ranges?.[1]) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message: `${feild} may be in the range of ${ranges?.[0]} to ${ranges?.[1]}`,
    };
  }
  return data;
};

const trim = (value) => {
  const data = {};
  if (value) {
    const cleandvalues = value
      ?.split(" ")
      .filter((str) => str != false)
      ?.map((str) => {
        const substrs = str?.split("")?.filter((subStr) => {
          return subStr != false;
        });
        return substrs?.join("");
      });
    data.value = cleandvalues?.join(" ");
  }
  return data;
};

const allLowerCase = (value) => {
  const data = {};
  if (typeof value != "string") {
    data["value"] = value;
  } else if (value) {
    data["value"] = value.toLowerCase();
  }
  return data;
};

const allUpperCase = (value) => {
  const data = {};
  if (typeof value != "string") {
    data["value"] = value;
  } else if (value) {
    data["value"] = value.toUpperCase();
  }
  return data;
};

const firstCharacterUpperCase = (value) => {
  const data = {};
  if (typeof value != "string") {
    data["value"] = value;
  } else if (value) {
    data["value"] = upperCase().firstCharacter(value);
  }
  return data;
};

const firstCharacterLowerCase = (value) => {
  const data = {};
  if (typeof value != "string") {
    data["value"] = value;
  } else if (value) {
    data["value"] = lowerCase().firstCharacter(value);
  }
  return data;
};

const ruleHandlers = {
  required,
  firstCharacterLowerCase,
  firstCharacterUpperCase,
  allUpperCase,
  allLowerCase,
  trim,
  range,
  max,
  min,
  maxLength,
  minLength,
  url,
  email,
  number,
  string,
};

module.exports=ruleHandlers