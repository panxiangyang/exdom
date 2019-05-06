import recursivelyCollect from './recursivelyCollect';

/**
 * Returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.
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
 * console.log(next(document.querySelector('li.name')));
 */
const next = (element: Element): Element[] => {
  return recursivelyCollect(element, 'nextSibling');
};
export default next;
