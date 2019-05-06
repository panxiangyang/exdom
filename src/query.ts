/**
 * Returns the first Node which matches the specified selector string relative to the element.
 *
 * @function
 * @param {String} selector The css selector
 * @param {Element} context The context
 * @returns {Element | null}
 * @example
 *
 * query('div.container');
 * query('#container');
 */
const query = (
  selector: string,
  context: Element | Document = document
): Element | null => {
  return context.querySelector(selector);
};
export default query;
