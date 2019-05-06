/**
 * Check whether the specified element has the className.
 *
 * @function
 * @param {Element} element A manipulated elemenet
 * @param {String} className The name of class
 * @returns {Boolean}
 *
 * @example
 *
 * const wrap = document.getElementById('wrap');
 *
 * // -> false
 * console.log(hasClassName(wrap, 'Fx'));
 *
 * // -> true
 * console.log(hasClassName(wrap, 'wrap'));
 */
const hasClassName = (element: Element, className: string): boolean => {
  const elementClassName = element.className;
  return (
    elementClassName.length > 0 &&
    (elementClassName === className ||
      new RegExp('(^|\\s)' + className + '(\\s|$)').test(elementClassName))
  );
};

export default hasClassName;
