const settingType = {
  iconColor: ['gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'],
  animation: ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'],
  animationType: ['onTop', 'onSide', 'explode'],
  animationEntrance: ['bounce', 'swirl', 'slide-in'],
};

// eslint-disable-next-line import/prefer-default-export
export const validateSettings = settings => {
  if(!settingType.iconColor.includes(settings.iconColor.split('-')[0])) settings.iconColor = 'blue-7';
  if(!settingType.animation.includes(settings.animationIn)) settings.animationIn = 'ease-in';
  if(!settingType.animation.includes(settings.animationOut)) settings.animationOut = 'ease-out';
  if(!settingType.animationType.includes(settings.animationType)) settings.animationType = 'onTop';
  if(!settingType.animationEntrance.includes(settings.animationEntrance)) settings.animationEntrance = 'bounce';
  return settings;
};

export const addError = (text) => {
  const snackbarWrapper = document.createElement('div');
  snackbarWrapper.setAttribute('class', `js-snackbar__wrapper snackbar__hide`);

  const snackbar = document.createElement('div');
  snackbar.setAttribute('class', `js-snackbar`);

  const message = document.createElement('span');
  message.setAttribute('class', `js-snackbar__message`);
  message.addEventListener('click', () => {
    document.querySelector('.js-snackbar__wrapper').remove();
  });
  message.innerText = text;

  snackbar.appendChild(message);
  snackbarWrapper.appendChild(snackbar);

  return snackbarWrapper;
};
