/**
 *
 * @param {string} string
 * @return {string}
 * @private
 */
export const _capitaliseString = (string) => {
  return string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
};
/**
 *
 * @param {string} string
 * @param {Number} newLength
 * @return {Array}
 * @private
 */
export const _splitString = (string, newLength) => {
  const stringSplit = string.split(' ');
  const newStrings = [];
  let currentStart = 0;
  let currentEnd = Math.floor(stringSplit.length / newLength);
  do {
    newStrings.push(stringSplit.slice(currentStart, currentEnd).join(' '));
    currentStart = currentEnd;
    currentEnd += currentEnd;
  } while (newStrings.length < newLength);
  return newStrings;
}
