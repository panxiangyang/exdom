/**
 * Returns a NodeList of nodes which match the specified selector string relative to the element.
 *
 * @function
 * @memberof Fx
 * @param {String} selector The css selector
 * @param {Element} context The context
 * @returns {NodeList | null}
 * @example
 *
 * queryAll('div.container');
 * queryAll('#container');
 */
const queryAll = (
  selector: string,
  context: Element | Document = document
): NodeList | null => {
  return context.querySelectorAll(selector);
};
export default queryAll;
