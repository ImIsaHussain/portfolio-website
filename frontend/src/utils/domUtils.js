export const isInteractiveElement = (element) => {
  const tagName = element.tagName.toLowerCase();
  return tagName === 'a' || tagName === 'button' || tagName === 'input' || element.dataset.cursorHover;
};

export default isInteractiveElement;
