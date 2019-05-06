/**
 * Gets or sets the text contained within the element.
 *
 * @function
 * @param element A manipulated element
 * @param txt The text
 * @returns {String | Element}
 * @example
 *
 * const container = document.getElementById('container');
 * // get text
 * const txt = text(container);
 *
 * // set text
 * text(container, 'container');
 */
interface Element {
  innerText: any;
  textContent: any;
}
const text = (element: Element, txt?: string): string | Element => {
  if (txt === void 0) {
    return element.textContent;
  }
  element.textContent = txt;
  return element;
};
export default text;
