/**
 * Takes array of values and returns value that represented most of times
 * If no such value or if array is emply, returns null
 */
exports.filterCommon = (array) => {
  if (!Array.isArray(array) || !array.length) return null;
  const count = array.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  const max = Math.max(...Object.values(count));
  // eslint-disable-next-line no-unused-vars
  const result = Object.entries(count).filter(([_, c]) => c === max).map(([value]) => value);
  return result.length === 1 ? result[0] : null;
};

exports.empty = () => {};
