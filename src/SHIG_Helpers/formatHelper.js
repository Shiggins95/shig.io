/**
 *
 * @param {string} string
 * @return {string}
 * @private
 */
export const _capitaliseString = (string) => {
  return string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
};
