/**
 * Returns an array contains all className of the specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @returns {String[]}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 *
 * // -> [wrap, fx]
 * console.log(getClassName(wrap));
 */
const getClassName = (element: Element): string[] => {
  return element.className.match(/\S+/g) || [];
};

export default getClassName;
