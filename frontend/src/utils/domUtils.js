export const isInteractiveElement = (element) => {
  // Check if the element itself is interactive
  const isDirectlyInteractive = (el) => {
    const tagName = el.tagName.toLowerCase();
    // Only consider labels interactive if they have a 'for' attribute or contain an input
    if (tagName === 'label') {
      return el.htmlFor || el.querySelector('input');
    }
    return tagName === 'a' || tagName === 'button' || tagName === 'input' || el.dataset.cursorHover;
  };

  // Check the element and its parent chain
  let currentElement = element;
  while (currentElement && currentElement !== document.body) {
    if (isDirectlyInteractive(currentElement)) {
      // If it's a child of a label, use the label's attributes
      if (currentElement.tagName.toLowerCase() === 'label') {
        return true;
      }
      // If it's inside a label, check if the parent label is interactive
      const parentLabel = currentElement.closest('label');
      if (parentLabel && isDirectlyInteractive(parentLabel)) {
        return true;
      }
      return isDirectlyInteractive(currentElement);
    }
    currentElement = currentElement.parentElement;
  }
  return false;
};

export default isInteractiveElement;
