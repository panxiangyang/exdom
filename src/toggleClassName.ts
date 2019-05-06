import hasClassName from './hasClassName';
import addClassName from './addClassName';
import removeClassName from './removeClassName';

/**
 * Toggle the class value; if the class exists then remove it and return false, if not, then add it and return true.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {String} className The name of class
 * @returns {Boolean}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 * toggleClassName(wrap, 'selected');
 */
const toggleClassName = (element: Element, className: string): boolean => {
  if (hasClassName(element, className)) {
    removeClassName(element, className);
    return false;
  } else {
    addClassName(element, className);
    return true;
  }
};
export default toggleClassName;
