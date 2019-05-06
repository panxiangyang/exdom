(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Exd = {}));
}(this, function (exports) { 'use strict';

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
  var query = function(selector, context) {
    if (context === void 0) {
      context = document;
    }
    return context.querySelector(selector);
  };

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
  var queryAll = function(selector, context) {
    if (context === void 0) {
      context = document;
    }
    return context.querySelectorAll(selector);
  };

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
  var recursivelyCollect = function(element, property, maximumLength) {
    if (maximumLength === void 0) {
      maximumLength = -1;
    }
    var elements = [];
    // tslint:disable-next-line:no-conditional-assignment
    while ((element = element[property])) {
      if (element.nodeType === 1) {
        elements.push(element);
      }
      if (elements.length === maximumLength) {
        break;
      }
    }
    return elements;
  };

  /**
   * Returns all ancestor elements of specified element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @returns {Element[]}
   * @example
   *
   * const ancestors = ancestors(document.querySelector('li'));
   * // -> object
   * console.log(typeof ancestors);
   */
  var ancestors = function(element) {
    return recursivelyCollect(element, 'parentNode');
  };

  /**
   * Returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @returns {Element[]}
   * @example
   * // <ul>
   * //   <li class="name">name</li>
   * //   <li class="age">age</li>
   * //   <li class="sex">sex</li>
   * // </ul>
   * // -> [HTMLLIElement {}, HTMLLIElement {}]
   * console.log(next(document.querySelector('li.name')));
   */
  var next = function(element) {
    return recursivelyCollect(element, 'nextSibling');
  };

  /**
   * Returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.
   *
   * @function
   * @param {Element} element A manipulated element
   * @returns {Element[]}
   * @example
   * // <ul>
   * //   <li class="name">name</li>
   * //   <li class="age">age</li>
   * //   <li class="sex">sex</li>
   * // </ul>
   * // -> [HTMLLIElement {}, HTMLLIElement {}]
   * console.log(previous(document.querySelector('li.sex')));
   */
  var previous = function(element) {
    return recursivelyCollect(element, 'previousSibling');
  };

  /**
   * Gets all sibling element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @returns {Element[]}
   * @example
   * // <ul>
   * //   <li class="name">name</li>
   * //   <li class="age">age</li>
   * //   <li class="sex">sex</li>
   * // </ul>
   * // -> [HTMLLIElement {}, HTMLLIElement {}]
   * console.log(Fx.siblings(document.querySelector('li.age')));
   */
  var siblings = function(element) {
    return previous(element)
      .reverse()
      .concat(next(element));
  };

  /**
   * Remove the specified node.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {Element}
   * @example
   *
   * removeNode(document.getElementById('container'));
   */
  var removeNode = function(element) {
    return element.parentNode && element.parentNode.removeChild(element);
  };

  /**
   * Removes a child node from the DOM and returns the removed node.
   *
   * @function
   * @param {Element} element A manipulated element.
   * @param {Element} child? To be removed from the DOM.
   * @returns {Element}
   * @example
   *
   * const container = document.getElementById('container');
   * removeChild(container);
   */
  var removeChild = function(element, child) {
    if (child !== void 0) {
      return element.removeChild(child);
    }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    return element;
  };

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
  var show = function(element) {
    element.style.display = '';
    return element;
  };

  var hide = function(element) {
    element.style.display = 'none';
    return element;
  };

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
  var insertNode = function(element, node, position) {
    if (position === void 0) {
      position = 'beforeend';
    }
    var nodeType = element.nodeType;
    // 1 -> element
    // 9 -> document
    // 11 -> DocumentFragment
    if (nodeType === 1 || nodeType === 11 || nodeType === 9) {
      if (typeof node === 'string') {
        element.insertAdjacentHTML(position, node);
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

  /**
   * Inserts a elment or html fragment before a specified element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {Element | String} node A node or html fragment
   * @returns {Element}
   * @example
   *
   * const container = document.getElementById('container');
   * insertBefore(container, '<div id="outerBefore"></div>');
   *
   * const before = document.getElementById('before');
   * insertBefore(container, before);
   */
  var insertBefore = function(element, node) {
    return insertNode(element, node, 'beforebegin');
  };

  /**
   * Inserts a elment or html fragment after a specified element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {Element | String} node A node or html fragment
   * @returns {Element}
   * @example
   *
   * const container = document.getElementById('container');
   * const htmlFragment = `<div>html fragment</div>`;
   * insertAfter(container, htmlFragment);
   *
   * const div = document.createElement('div');
   * insertAfter(container, div);
   */
  var insertAfter = function(element, node) {
    return insertNode(element, node, 'afterend');
  };

  /**
   * Inserts a elment or html fragment to the end of the list of children of a specified element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {Element | String} node A element or html fragement
   * @returns {Element}
   * @example
   *
   * const content = document.querySelector('#content');
   * const div = document.createElement('div');
   * append(content, div);
   */
  var append = function(element, node) {
    return insertNode(element, node, 'beforeend');
  };

  /**
   * Inserts elemnt or html fragment inside the element, before its first child.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {Element | String} node A element or html fragment
   * @returns {Element}
   * @example
   *
   * const content = document.querySelector('#content');
   * // add node
   * const div = document.createElement('div');
   * prepend(content, div);
   *
   * // add html fragment
   * prepend(content, '<div>information</div>')
   */
  var prepend = function(element, node) {
    return insertNode(element, node, 'afterbegin');
  };

  var text = function(element, txt) {
    if (txt === void 0) {
      return element.textContent;
    }
    element.textContent = txt;
    return element;
  };

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
  var html = function(element, value) {
    if (!value) {
      return element.innerHTML;
    }
    var wrapMap = {
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
      var special = wrapMap[element.tagName.toLowerCase()];
      if (special) {
        // Create a new element and return the first child
        var vnode = document.createElement('div');
        vnode.innerHTML = special[1] + value + special[2];
        // 遍历获取当前待插入子节点
        for (var i = 0; i < special[0]; i++) {
          vnode = vnode.firstChild;
        }
        // Remove the old elements
        var l = element.children.length;
        for (var k = 0; k < l; k++) {
          element.removeChild(element.children[k]);
        }
        // Add the new elements
        l = vnode.children.length;
        for (var u = 0; u < l; u++) {
          element.appendChild(vnode.children[u]);
        }
      }
    }
    return element;
  };

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
  var hasClassName = function(element, className) {
    var elementClassName = element.className;
    return (
      elementClassName.length > 0 &&
      (elementClassName === className ||
        new RegExp('(^|\\s)' + className + '(\\s|$)').test(elementClassName))
    );
  };

  /**
   * Add one or more class names to the specified element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {String} className The name of class
   * @returns {Element}
   * @example
   *
   * const wrap = document.getElementById('wrap');
   * addClassName(wrap, 'fx');
   */
  var addClassName = function(element, className) {
    if (!hasClassName(element, className)) {
      element.className += (element.className ? ' ' : '') + className;
    }
    return element;
  };

  /**
   * Returns an array contains all className of the specified element.
   *
   * @function
   * @param {Element} element A manipulated element
   * @returns {String[]}
   * @example
   *
   * const wrap = document.getElementById('wrap');
   *
   * // -> [wrap, fx]
   * console.log(getClassName(wrap));
   */
  var getClassName = function(element) {
    return element.className.match(/\S+/g) || [];
  };

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
  var removeClassName = function(element, className) {
    element.className = element.className.replace(
      new RegExp('(^|\\s+)' + className + '(\\s+|$)'),
      ' '
    );
    return element;
  };

  /**
   * Toggle the class value; if the class exists then remove it and return false, if not, then add it and return true.
   *
   * @function
   * @param {Element} element A manipulated element
   * @param {String} className The name of class
   * @returns {Boolean}
   * @example
   *
   * const wrap = document.getElementById('wrap');
   * toggleClassName(wrap, 'selected');
   */
  var toggleClassName = function(element, className) {
    if (hasClassName(element, className)) {
      removeClassName(element, className);
      return false;
    } else {
      addClassName(element, className);
      return true;
    }
  };

  /**
   * Clear all className on the specified element.
   *
   * @function
   * @param {element} element A manipulated element
   * @returns {element}
   * @example
   *
   * const wrap = document.getElementById('wrap');
   * const processed = clearClassName(wrap);
   *
   * // -> true
   * console.log(wrap == processed);
   */
  var clearClassName = function(element) {
    element.className = '';
    return element;
  };

  exports.addClassName = addClassName;
  exports.ancestors = ancestors;
  exports.append = append;
  exports.clearClassName = clearClassName;
  exports.getClassName = getClassName;
  exports.hasClassName = hasClassName;
  exports.hide = hide;
  exports.html = html;
  exports.insertAfter = insertAfter;
  exports.insertBefore = insertBefore;
  exports.insertNode = insertNode;
  exports.next = next;
  exports.prepend = prepend;
  exports.previous = previous;
  exports.query = query;
  exports.queryAll = queryAll;
  exports.recursivelyCollect = recursivelyCollect;
  exports.removeChild = removeChild;
  exports.removeClassName = removeClassName;
  exports.removeNode = removeNode;
  exports.show = show;
  exports.siblings = siblings;
  exports.text = text;
  exports.toggleClassName = toggleClassName;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
