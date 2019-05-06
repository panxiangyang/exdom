import insertNode from './insertNode';

/**
 * Inserts a elment or html fragment to the end of the list of children of a specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {Element | String} node A element or html fragement
 * @returns {Element}
 * @example
 *
 * const content = document.querySelector('#content');
 * const div = document.createElement('div');
 * append(content, div);
 */
const append = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'beforeend');
};
export default append;
