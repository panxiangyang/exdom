/**
 * Clear all className on the specified element.
 *
 * @function
 * @param {element} element A manipulated element
 * @returns {element}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 * const processed = clearClassName(wrap);
 *
 * // -> true
 * console.log(wrap == processed);
 */
const clearClassName = (element: Element): Element => {
  element.className = '';
  return element;
};
export default clearClassName;
