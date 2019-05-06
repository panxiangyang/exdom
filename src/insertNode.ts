/**
 * Insert element or html fragment at specified position. but the position must be one of the following strings:
 *  'beforebegin'：before the element itself.
 *  'afterbegin'：inside the element, before its first child.
 *  'beforeend'：inside the element, after its last child.
 *  'afterend'：after the element itself.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {Element | String} node A element or html fragment
 * @param {String} position Where to be inserted
 * @returns {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * const elem = document.createElement('div');
 *
 * // add node
 * insertNode(container, elem, 'beforebegin');
 * insertNode(container, elem, 'afterbegin');
 * insertNode(container, elem, 'beforeend');
 * insertNode(container, elem, 'afterend');
 *
 * // add html fragment
 * insertNode(container, `<div>content</div>`, 'beforebegin');
 * insertNode(container, `<div>content</div>`, 'afterbegin');
 * insertNode(container, `<div>content</div>`, 'beforeend');
 * insertNode(container, `<div>content</div>`, 'afterend');
 */
const insertNode = (
  element: Element,
  node: Node | string,
  position: string = 'beforeend'
): Element => {
  const nodeType: number = element.nodeType;
  // 1 -> element
  // 9 -> document
  // 11 -> DocumentFragment
  if (nodeType === 1 || nodeType === 11 || nodeType === 9) {
    if (typeof node === 'string') {
      element.insertAdjacentHTML(position as any, node as string);
    } else {
      switch (position) {
        case 'beforebegin':
          element.parentNode.insertBefore(node, element);
          break;
        case 'afterbegin':
          element.insertBefore(node, element.firstChild);
          break;
        case 'beforeend':
          element.appendChild(node);
          break;
        case 'afterend':
          element.parentNode.insertBefore(node, element.nextSibling);
          break;
        default:
          throw new SyntaxError('Illegal insertion position of nodes.');
      }
    }
  }
  return element;
};
export default insertNode;
