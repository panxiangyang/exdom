import insertNode from './insertNode';

/**
 * Inserts a elment or html fragment before a specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {Element | String} node A node or html fragment
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * insertBefore(container, '<div id="outerBefore"></div>');
 *
 * const before = document.getElementById('before');
 * insertBefore(container, before);
 */
const insertBefore = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'beforebegin');
};
export default insertBefore;
