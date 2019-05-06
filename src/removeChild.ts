/**
 * Removes a child node from the DOM and returns the removed node.
 *
 * @function
 * @param {Element} element A manipulated element.
 * @param {Element} child? To be removed from the DOM.
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * removeChild(container);
 */
const removeChild = (element: Element, child?: Element): Element => {
  if (child !== void 0) {
    return element.removeChild(child);
  }

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};
export default removeChild;
