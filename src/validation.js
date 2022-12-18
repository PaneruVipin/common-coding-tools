const ruleHandlers = require("./helper/validate/rule");

const validation = (body, rules) => {
  const data = {};
  const errors = [];
  const ruleKeys = Object.keys(rules);
  ruleKeys?.forEach((key, i) => {
    const schemaList = rules?.[key].split("|").map((str) =>
      str
        ?.split(" ")
        ?.filter((subStr) => subStr != false)
        .join("")
    );
    let returnedValue;
    schemaList?.forEach((schema, i) => {
      const rule = schema?.split(":")?.[0];
      const ruleValue = schema?.split(":")?.[1];
      if (i) {
        const newData = ruleHandlers?.[rule](
          returnedValue || body?.[key],
          key,
          ruleValue
        );
        if (newData?.error) errors.push(newData?.error);
        returnedValue = newData?.value;
      } else {
        const newData = ruleHandlers?.[rule](body?.[key], key, ruleValue);
        if (newData?.error) errors.push(newData?.error);
        returnedValue = newData?.value;
      }
    });
    data[key] = returnedValue;
  });
  if (!errors.length) {
    return {data};
  } else {
    return {errors};
  }
};

module.exports = { validation };
