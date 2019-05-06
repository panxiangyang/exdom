import insertNode from './insertNode';

/**
 * Inserts elemnt or html fragment inside the element, before its first child.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {Element | String} node A element or html fragment
 * @returns {Element}
 * @example
 *
 * const content = document.querySelector('#content');
 * // add node
 * const div = document.createElement('div');
 * prepend(content, div);
 *
 * // add html fragment
 * prepend(content, '<div>information</div>')
 */
const prepend = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'afterbegin');
};
export default prepend;
