const colorArray = [
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
];

// eslint-disable-next-line import/prefer-default-export
export const checkIconColor = color => (new RegExp(`${color.split('-')[0]}`).test(colorArray) ? color : 'blue-7');

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
