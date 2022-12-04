function search(arr, keys, query) {
  let results = [];

  arr?.forEach((obj) => {
    keys?.forEach((key, i) => {
      let wet = 0;
      if (
        obj?.[key]?.includes(query) ||
        obj[key]?.split(" ")?.some((ch) => query?.includes(ch)) ||
        obj?.[key]
          .replace(/ /g, "")
          ?.match(/.{1,4}/g)
          .filter((str) => str.length > 2)
          ?.some((ch) => query?.includes(ch))
      ) {
        if (obj?.[key]?.includes(query)) {
          wet += 10 - i;
        }
        if (obj?.[key]?.split(" ")?.some((ch) => query?.includes(ch))) {
          wet += 5 - i;
        }
        if (
          obj?.[key]
            .replace(/ /g, "")
            ?.match(/.{1,4}/g)
            .filter((str) => str.length > 2)
            ?.some((ch) => query?.includes(ch))
        ) {
          wet += 1 - i;
        }
        results.push({ obj, wet });
      }
    });
  });
  const newResults = results
    ?.sort((a, b) => b?.wet - a?.wet)
    ?.map((r) => r?.obj);
  return [...new Set(newResults)];
}

module.exports = {
  search,
};

