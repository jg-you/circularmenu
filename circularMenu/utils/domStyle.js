
export const domStyle = (domElem, styles) => {
  // add styles to a dom element
  // eslint-disable-next-line
  for (const prop in styles) {
    domElem.style.cssText = ` ${domElem.style.cssText} ${prop}:${styles[prop]}`;
  }

  return domElem;
};

export const stylizeContainer = (canvasElem) => {
  // get recommended size of canvas element

  // add reference class
  canvasElem.classList.add('container');

  // return canvas element
  return domStyle(canvasElem, {
    width: '150px',
    height: '150px',
    right: '10px',
    bottom: '10px',
  });
};
