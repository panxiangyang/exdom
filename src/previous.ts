import recursivelyCollect from './recursivelyCollect';

/**
 * Returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.
 *
 * @function
 * @param {Element} element A manipulated element
 * @returns {Element[]}
 * @example
 * // <ul>
 * //   <li class="name">name</li>
 * //   <li class="age">age</li>
 * //   <li class="sex">sex</li>
 * // </ul>
 * // -> [HTMLLIElement {}, HTMLLIElement {}]
 * console.log(previous(document.querySelector('li.sex')));
 */
const previous = (element: Element): Element[] => {
  return recursivelyCollect(element, 'previousSibling');
};
export default previous;
