const { upperCase, lowerCase } = require("../../../string");

const { isObject, isArray } = require("../../../types");

var validation = (body, rules) => {
  const data = {};
  const errors = [];
  const ruleKeys = Object.keys(rules);
  ruleKeys?.forEach((key, i) => {
    let schemaList;
    if (rules?.[key]?.includes("{") && rules?.[key]?.includes("}"))
      schemaList = [rules?.[key]];
    else {
      schemaList = rules?.[key].split("|").map((str) => str?.trim());
    }
    let returnedValue;
    // console.log("schemaList"schemaList)
    schemaList?.forEach((schema, i) => {
      const rule = schema?.split(":")?.[0]?.trim();
      const ruleValue = schema
        ?.split(":")
        .filter((s, i) => i)
        .join(":");
      // console.log(rule,ruleValue)
      if (i) {
        if (schemaList.includes("trim")) {
          const newData = ruleHandlers?.["trim"](
            returnedValue || body?.[key],
            key,
            ruleValue
          );
          if (newData?.error) errors.push(newData?.error);
          returnedValue = newData?.value;
        }
        const newData = ruleHandlers?.[rule](
          returnedValue || body?.[key],
          key,
          ruleValue
        );
        if (newData?.error) errors.push(newData?.error);
        returnedValue = newData?.value;
      } else {
        // console.log(body?.[key], key, ruleValue)
        const newData = ruleHandlers?.[rule](body?.[key], key, ruleValue);
        if (newData?.error) errors.push(newData?.error);
        returnedValue = newData?.value;
      }
    });
    data[key] = returnedValue;
  });
  if (!errors.length) {
    return { data };
  } else {
    return { errors };
  }
};

const errorRule = {
  "{{rule}}": "rule",
  "{{feild}}": "feild",
  "{{ruleValue}}": "ruleValue",
  "{{firstRuleValue}}": "firstRuleValue",
  "{{secondRuleValue}}": "secondRuleValue",
};

const errorCreator = (message, dep) => {
  const message1 = message
    ?.replace(/\s*\{\s*/g, " {")
    ?.replace(/\s*\}\s*/g, "} ")
    ?.replace(/{\s/g, "{")
    ?.replace(/\s}/g, "}");
  let cleanedmassage = message1;
  Object.keys(errorRule)?.forEach((e, i) => {
    if (cleanedmassage.includes(e)) {
      const newMessage = cleanedmassage?.replace(e, dep?.[errorRule?.[e]]);
      cleanedmassage = newMessage;
      if (newMessage.includes(e)) {
        cleanedmassage = errorCreator(newMessage, dep);
      }
    }
  });
  return cleanedmassage;
};

const required = (value, feild, ruleValue, error) => {
  const data = {};
  if (value || value === 0) {
    data.value = value;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "required", ruleValue }) ||
        `${feild} is require feild`,
    };
  }
  return data;
};

const string = (value, feild, ruleValue, error) => {
  const data = {};
  if (typeof value == "string") {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "string", ruleValue }) ||
        `${feild} must be a string`,
    };
  }
  return data;
};

const object = (value, feild, newRuleValue) => {
  const data = {};
  let ruleValue;
  try {
    ruleValue = JSON.parse(newRuleValue);
  } catch (e) {
    ruleValue = newRuleValue.trim();
  }

  if (isObject(ruleValue)) {
    const newData = validation(value, ruleValue);
    if (newData?.errors) {
      data.error = {
        feild: `${feild}.${newData?.errors?.[0]?.feild}`,
        message: newData?.errors?.[0]?.message,
      };
    } else {
      data.value = newData?.data;
    }
  } else if (!ruleValue && value && ruleValue == "any") {
    data.value = value;
  } else if (!value) {
    return;
  } else if (!isObject(value)) {
    data.error = { feild, message: `${feild} must be a object` };
  } else {
    data.value = value;
  }
  return data;
};

const array = (value, feild, newRuleValue) => {
  let ruleValue;
  try {
    ruleValue = JSON.parse(newRuleValue);
  } catch (e) {
    ruleValue = newRuleValue.trim();
  }
  const data = { value: [] };
  if (value && !isArray(value)) {
    data.error = { feild, message: `${feild} must be a array` };
  } else if (!ruleValue || ruleValue == "any") {
    data.value = value;
  } else if (ruleValue === "any[]") {
    value?.forEach((v, i) => {
      if (!isArray(v)) {
        data.error = {
          feild,
          message: `${feild} value must be a ${ruleValue} type values array,
          But provided ${typeof v} type value at ${i} index of your array `,
        };
      } else {
        data.value = value;
      }
    });
  } else if (ruleValue === "any{}") {
    value?.forEach((v, i) => {
      if (!isObject(v)) {
        data.error = {
          feild,
          message: `${feild} value must be a ${ruleValue} type values array, But provided ${typeof v} type value at ${i} index of your array `,
        };
      } else {
        data.value = value;
      }
    });
  } else if (isObject(ruleValue)) {
    (value?.length ? value : [{}])?.forEach((v, i) => {
      const newData = validation(v, ruleValue);
      if (newData?.errors) {
        data.error = {
          feild: `${feild}[${i}].${newData?.errors?.[0]?.feild}`,
          message: newData?.errors?.[0]?.message,
        };
      } else {
        data.value?.push(newData?.data);
      }
    });
  } else if (!value) {
    return;
  }
  return data;
};

const boolean = (value, feild, ruleValue, error) => {
  const data = {};
  if (typeof value == "boolean") {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "boolean", ruleValue }) ||
        `${feild} must be a boolean`,
    };
  }
  return data;
};

const number = (value, feild, ruleValue, error) => {
  const data = {};
  if (typeof value == "number") {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "number", ruleValue }) ||
        `${feild} must be a number`,
    };
  }
  return data;
};

const email = (value, feild, ruleValue, error) => {
  const data = {};
  if (
    value
      ?.toLowerCase()
      ?.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    data.value = value?.toLowerCase();
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "email", ruleValue }) ||
        `${feild} must be a valid email`,
    };
  }
  return data;
};

const url = (value, feild, ruleValue, error) => {
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
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "URL", ruleValue }) ||
        `${feild} must be a valid URL`,
    };
  }
  return data;
};

const minLength = (value, feild, ruleValue, error) => {
  const data = {};
  if (value?.length >= +ruleValue) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "minimium Length", ruleValue }) ||
        `${feild} length is to short, minimium length is ${ruleValue}`,
    };
  }
  return data;
};

const maxLength = (value, feild, ruleValue, error) => {
  const data = {};
  if (value?.length <= +ruleValue) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "maximium length", ruleValue }) ||
        `${feild} length is to long, maximium length is ${ruleValue}`,
    };
  }
  return data;
};

const min = (value, feild, ruleValue, error) => {
  const data = {};
  if (+value < +ruleValue) {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "minium value", ruleValue }) ||
        `${feild} value is to short, minimium value is ${ruleValue}`,
    };
  } else if (!value) {
    return;
  } else if (+value > +ruleValue) {
    data.value = value;
  }
  return data;
};

const max = (value, feild, ruleValue, error) => {
  const data = {};
  if (+value > +ruleValue) {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "maximium value", ruleValue }) ||
        `${feild} value is to long, maximium value is ${ruleValue}`,
    };
  } else if (!value) {
    return;
  } else if (+value < +ruleValue) {
    data.value = value;
  }
  return data;
};

const range = (value, feild, ruleValue, error) => {
  const data = {};
  const ranges = ruleValue.split("-");
  if (+value >= +ranges?.[0] && +value <= +ranges?.[1]) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, {
          feild,
          rule: "range",
          ruleValue: ranges?.[0],
          firstRuleValue: ranges?.[0],
          secondRuleValue: ranges?.[1],
        }) ||
        `${feild} may be in the range of ${ranges?.[0]} to ${ranges?.[1]}`,
    };
  }
  return data;
};

const trim = (value) => {
  const data = {};
  if (value) {
    data.value = value.trim();
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

const defaultValue = (value, feild, ruleValue) => {
  let newRuleValue;
  try {
    newRuleValue = JSON.parse(ruleValue);
  } catch (e) {
    newRuleValue = ruleValue.trim();
  }

  const data = {};
  if (!ruleValue) {
    return;
  } else if (newRuleValue) {
    data["value"] = newRuleValue;
  }
  return data;
};

const removeAllWhiteSpace = (value) => {
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

const oneOfThese = (value, feild, ruleValue, error) => {
  const data = {};
  let newRuleValue;
  try {
    newRuleValue = JSON.parse(ruleValue);
  } catch (e) {
    newRuleValue = ruleValue;
  }
  // const ranges = ruleValue.split("-");
  if (newRuleValue?.includes(value) || !isArray(newRuleValue)) {
    data.value = value;
  } else if (!value) {
    return;
  } else {
    data.error = {
      feild,
      message:
        errorCreator(error, { feild, rule: "one of these", ruleValue }) ||
        `${feild} may be one of these ${newRuleValue?.join(" or ")}`,
    };
  }
  return data;
};

var ruleHandlers = {
  oneOfThese,
  defaultValue,
  removeAllWhiteSpace,
  boolean,
  array,
  object,
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
exports.errorCreator = errorCreator;
module.exports = { ruleHandlers, errorCreator };
