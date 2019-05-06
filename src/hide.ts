/**
 * Sets the display attributes to hide specified element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @returns {Element}
 * @example
 * 
 * const wrap = document.getElementById('wrap');
 * hide(wrap);
 * 
 * // -> none
 * console.log(wrap.style.display);
 */
interface Element {
  style: any;
}
const hide = (element: Element): Element => {
  element.style.display = 'none';
  return element;
};
export default hide;
