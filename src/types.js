const isString = (value) => {
  if (typeof value == "string") {
    return true;
  } else {
    return false;
  }
};

const isNumber = (value) => {
  if (typeof value == "number") {
    return true;
  } else {
    return false;
  }
};

const isObject = (value) => {
  const jsonValue = JSON.stringify(value);
  if (
    typeof value == "object" &&
    jsonValue?.startsWith("{") &&
    jsonValue?.endsWith("}")
  ) {
    return true;
  } else {
    return false;
  }
};

const isArray = (value) => {
  const jsonValue = JSON.stringify(value);
  if (
    typeof value == "object" &&
    jsonValue?.startsWith("[") &&
    jsonValue?.endsWith("]")
  ) {
    return true;
  } else {
    return false;
  }
};

const isBoolean = (value) => {
  if (typeof value == "boolean") {
    return true;
  } else {
    return false;
  }
};

const isEmail = (value) => {
  if (
    value?.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const isUrl = (value) => {
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
  if (isValidUrl(value)) {
    return true;
  } else {
    return false;
  }
};

const type = (value) => {
  const rules = [
    { rule: isString, label: "string" },
    { rule: isNumber, label: "number" },
    { rule: isObject, label: "object" },
    { rule: isArray, label: "array" },
    { rule: isBoolean, label: "boolean" },
  ];
  let rtn;
  rules?.forEach(({ rule, label }) => {
    if (rule(value)) {
      rtn = label;
    }
  });
  return rtn;
};

module.exports = {
  type,
  isUrl,
  isEmail,
  isBoolean,
  isArray,
  isObject,
  isNumber,
  isString,
};
