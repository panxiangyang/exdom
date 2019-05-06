import recursivelyCollect from './recursivelyCollect';

/**
 * Returns all ancestor elements of specified element.
 * 
 * @function
 * @param {Element} element A manipulated element
 * @returns {Element[]}
 * @example
 *
 * const ancestors = ancestors(document.querySelector('li'));
 * // -> object
 * console.log(typeof ancestors);
 */
const ancestors = (element: Element): Element[] => {
  return recursivelyCollect(element, 'parentNode');
};
export default ancestors;
