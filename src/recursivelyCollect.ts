/**
 * Recursively collect elements that relate to elements specified by attributes.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {String} property The name of property
 * @param {Number} maximumLength Maximum number of recursions
 * @returns {Node[]}
 * @example
 *
 * const container = document.querySelector('#container');
 * recursivelyCollect(container, 'nextSibling');
 * recursivelyCollect(container, 'previousSibling');
 */
const recursivelyCollect = (
  element: Element,
  property: string,
  maximumLength: number = -1
): Element[] => {
  const elements = [];

  // tslint:disable-next-line:no-conditional-assignment
  while ((element = (element as any)[property])) {
    if (element.nodeType === 1) {
      elements.push(element);
    }
    if (elements.length === maximumLength) {
      break;
    }
  }

  return elements;
};

export default recursivelyCollect;
