/**
 * Remove the className on the specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {String} className The name of class
 * @param {Element}
 * @example
 *
 * const container = document.getElementById('container');
 * removeClassName(container, 'selected');
 */
const removeClassName = (element: Element, className: string): Element => {
  element.className = element.className.replace(
    new RegExp('(^|\\s+)' + className + '(\\s+|$)'),
    ' '
  );
  return element;
};

export default removeClassName;
