import previous from './previous';
import next from './next';

/**
 * Gets all sibling element.
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
 * console.log(Fx.siblings(document.querySelector('li.age')));
 */
const siblings = (element: Element): Element[] => {
  return previous(element)
    .reverse()
    .concat(next(element));
};
export default siblings;
