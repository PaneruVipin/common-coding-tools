const ruleHandlers = require("./helper/validate/rule");

const validation = (body, rules) => {
  const data = {};
  const errors = [];
  const ruleKeys = Object.keys(rules);
  ruleKeys?.forEach((key, i) => {
    const schemaList = rules?.[key].split("|").map((str) =>
      str
        ?.trim()
    );
    let returnedValue;
    schemaList?.forEach((schema, i) => {
      const rule = schema?.split(":")?.[0]?.trim();
      const ruleValue = schema?.split(":")?.[1]?.trim();
      if (i) {
        if(schemaList.includes("trim")){
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
        const newData =ruleHandlers?.[rule] && ruleHandlers?.[rule](body?.[key], key, ruleValue);
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
}

module.exports = { validation };
