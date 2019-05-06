/**
 * Remove the specified node.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {Element}
 * @example
 *
 * removeNode(document.getElementById('container'));
 */
const removeNode = (element: Element): Element => {
  return element.parentNode && element.parentNode.removeChild(element);
};
export default removeNode;
