//1 number question//

//answear//

1. getElementById()
   Selects one element with a specific id.
Return type: A single element (or null if not found).

2. getElementsByClassName()
   Selects all elements with a specific class.
Return type: HTMLCollection (looks like an array, but not exactly).

3. querySelector()
 Selects the first element that matches a CSS selector.
Return type: A single element (or null if not found).
4. querySelectorAll()
 Selects all elements that match a CSS selector.
Return type: NodeList (array-like, can use forEach).

//2nd number question//

//How do you create and insert a new element into the DOM?//

//answear//

Create the element → use document.createElement().
Add content or attributes → use .textContent, .innerHTML, or .setAttribute().
Insert it into the DOM → use .appendChild(), .append(), .prepend(), or .insertBefore().

//3rd number question//

//What is Event Bubbling and how does it work?//

//answear//

Event Bubbling is a mechanism in the DOM where an event starts from the target element (the element that was clicked, for example) and then bubbles up (moves upward) through its ancestors (parent, grandparent, etc.) until it reaches the document object.

//4th number question//

//What is Event Delegation in JavaScript? Why is it useful?//

//answear//

Event Delegation = handle events at parent level using event bubbling.
Useful for performance, dynamic content, and cleaner code.

//5th number question//

//What is the difference between preventDefault() and stopPropagation() methods?//

//answear//

Use preventDefault() when you don’t want the browser to do its normal action.
Use stopPropagation() when you don’t want the event to bubble up the DOM tree.
