import hasClassName from './hasClassName';

/**
 * Add one or more class names to the specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {String} className The name of class
 * @returns {Element}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 * addClassName(wrap, 'fx');
 */
const addClassName = (element: Element, className: string): Element => {
  if (!hasClassName(element, className)) {
    element.className += (element.className ? ' ' : '') + className;
  }
  return element;
};
export default addClassName;
