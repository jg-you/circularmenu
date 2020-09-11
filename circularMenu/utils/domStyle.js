
export const domStyle = (domElem, styles) => {
  // add styles to a dom element
  // eslint-disable-next-line
  for (const prop in styles) {
    domElem.style.cssText = ` ${domElem.style.cssText} ${prop}:${styles[prop]}`;
  }

  return domElem;
};

export const stylizeContainer = (canvasElem, animation) => {
  // get recommended size of canvas element

  // add reference class
  canvasElem.classList.add(`container`);
  canvasElem.classList.add(`${animation}`);

  // return canvas element
/*   return domStyle(canvasElem, {
    width: '130px',
    height: '140px',
    right: '10px',
    bottom: '10px',
  }); */
};
