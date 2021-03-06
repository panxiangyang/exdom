/**
 * Gets or sets the HTML or XML markup contained within the element.
 *
 * @function
 * @param {Element} element A manipulated element
 * @param {String} value? The html fragment
 * @returns {Element| String}
 * @example
 *
 * const wrap = document.getElementById('wrap');
 * // -> <div class="content">content</div>
 * html(wrap)
 *
 * // -> result === wrap
 * const result = html(wrap, '<div class="inner">inner</div>')
 */
const html = (element: Element, value?: string): string | Element => {
  if (!value) {
    return element.innerHTML;
  }
  const wrapMap: { [key: string]: any[] } = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    area: [1, '<map>', '</map>'],
    param: [1, '<object>', '</object>'],
    thead: [1, '<table>', '</table>'],
    tbody: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>']
  };
  try {
    element.innerHTML = value;
  } catch (e) {
    // IE 6-9 don't support setting innerHTML for
    // TABLE, TBODY, TFOOT, THEAD, and TR directly
    // const special = wrapMap[(/<([\w:]+)/.exec(value) || ['', ''])[1].toLowerCase()];
    const special = wrapMap[element.tagName.toLowerCase()];
    if (special) {
      // Create a new element and return the first child
      let vnode = document.createElement('div');
      vnode.innerHTML = special[1] + value + special[2];

      // 遍历获取当前待插入子节点
      for (let i = 0; i < special[0]; i++) {
        vnode = vnode.firstChild as any;
      }

      // Remove the old elements
      let l = element.children.length;
      for (let k = 0; k < l; k++) {
        element.removeChild(element.children[k]);
      }

      // Add the new elements
      l = vnode.children.length;
      for (let u = 0; u < l; u++) {
        element.appendChild(vnode.children[u]);
      }
    }
  }
  return element;
};
export default html;
