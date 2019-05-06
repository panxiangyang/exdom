/**
 * Control element display by setting display attribute.
 *
 * @function
 * @param {Element} element A manipulated element.
 * @returns {Element}
 * @example
 *
 * show(document.getElementById('container'));
 */
const show = (element: Element): Element => {
  (element as any).style.display = '';
  return element;
};
export default show;
