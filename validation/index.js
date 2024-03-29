const { ruleHandlers, errorCreator } = require("../src/helper/validate/rule");

var validation = (body, rules, customErrors) => {
  return ValidationForCustomRules(ruleHandlers, body, rules, customErrors);
};

var ValidationForCustomRules = (ruleHandlers, body, rules, customErrors) => {
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
          ruleValue,
          customErrors?.[`${key}.${rule}`] || customErrors?.[rule]
        );
        if (newData?.error) errors.push(newData?.error);
        returnedValue = newData?.value;
      } else {
        // console.log(body?.[key], key, ruleValue)
        const newData = ruleHandlers?.[rule](
          body?.[key],
          key,
          ruleValue,
          customErrors?.[`${key}.${rule}`] || customErrors?.[rule]
        );
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

var schema = (data) => {
  return JSON.stringify(data);
};

exports.ValidationForCustomRules = ValidationForCustomRules;
exports.validation = validation;
exports.schema = schema;
exports.errorCreator = errorCreator;
exports.ruleHandlers = ruleHandlers;
module.exports = {
  validation,
  schema,
  ValidationForCustomRules,
  errorCreator,
  ruleHandlers,
};
//console.log(ruleHandlers,errorCreator)