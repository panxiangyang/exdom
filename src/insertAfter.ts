import insertNode from './insertNode';

/**
 * Inserts a elment or html fragment after a specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {Element | String} node A node or html fragment
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * const htmlFragment = `<div>html fragment</div>`;
 * insertAfter(container, htmlFragment);
 *
 * const div = document.createElement('div');
 * insertAfter(container, div);
 */
const insertAfter = (element: Element, node: Element | string): Element => {
  return insertNode(element, node, 'afterend');
};
export default insertAfter;
