# Extend Dom

Extended dom operation. Support for all major browsers.

- Works in IE8+
- Accepts any character
- Heavily tested
- No dependency
- Supports CommonJS/ES Module/UMD

## Installation

### Direct download

Download the script from `dist/exdom.umd.js` and include it.

```html
<script src="/path/to/exdom.umd.js"></script>
```

### Package Managers

```
npm install exdom --save
```

## Basic Usage

### UMD

```javascript
const li = Exd.query('li');
Exd.addClassName(li, 'selected');
```

### CJS / ES

```javascript
import { query, addClassName } from 'exdom';

const li = query('li');
addClassName(li, 'selected');
```

## API

### ClassName

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| addClassName | (element: Element, className: string) | Element | Add one or more class names to the specified element. |
| clearClassName | (element: Element) | Element | Clear all className on the specified element. |
| getClassName | (element: Element) | String[] | Returns an array contains all className of the specified element. |
| hasClassName | (element: Element, className: string) | Boolean | Check whether the specified element has the className. |
| removeClassName | (element: Element, className: string) | Element | Remove the className on the specified element. |
| toggleClassName | (element: Element, className: string) | Boolean | Toggle the class value; if the class exists then remove it and return false, if not, then add it and return true. |

### Insert

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| append | (element: Element, node: Element | string) | Element | Inserts a elment or html fragment to the end of the list of children of a specified element. |
| prepend | element: Element, node: Element | string) | Element | Inserts elemnt or html fragment inside the element, before its first child. |
| insertAfter | (element: Element, node: Element | string) | Element | Inserts a elment or html fragment after a specified element. |
| insertBefore | (element: Element, node: Element | string) | Element | Inserts a elment or html fragment before a specified element. |
| insertNode | (element: Element, node: Node | string, position: string = 'beforeend') | Element | Insert element or html fragment at specified position. |

### Query

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| query | (selector: string, context: Element or Document = document) | Element | Returns the first Node which matches the specified selector string relative to the element. |
| queryAll | (selector: string, context: Element or Document = document) | NodeList | Returns a NodeList of nodes which match the specified selector string relative to the element. |
| ancestors | (element: Element) | Element[] | Returns all ancestor elements of specified element. |
| next | (element: Element) | Element[] | Returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element. |
| previous | (element: Element) | Element[] | Returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list. |
| siblings | (element: Element) | Element[] | Gets all sibling element. |
| recursivelyCollect | (element: Element, property: string, maximumLength: number = -1) | Element | Recursively collect elements that relate to elements specified by attributes. |

### Other

| hide | (element: Element) | Element | Sets the display attributes to hide specified element. |
| show | (element: Element) | Element | Control element display by setting display attribute.|
| html | (element: Element, value?: string) | Element or String | Gets or sets the HTML or XML markup contained within the element. |
| text | (element: Element, text?: string) | Element or String | Gets or sets the text contained within the element. |
| removeChild | (element: Element, child?: Element) | Element | Removes a child node from the DOM and returns the removed node. |
| removeNode | (element: Element) | Element | Remove the specified node. |