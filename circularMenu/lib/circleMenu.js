import { domStyle, stylizeContainer } from '../utils/domStyle';

export const explodeMenu = (settings) => {
  document.querySelector('.container').classList.add('go_on');
  document.querySelector('.menuBtn').classList.add('closed');
  document.querySelector('.closeBtn').classList.add('open');
  document.querySelector('.overlay').classList.add(`bg-${settings.iconColor}`);
  domStyle(document.querySelector('.overlay'), {
    display: 'block',
  });
  let margin;
  let left;
  let top;
  const position = [
    { left: '0', top: '-150px' },
    { left: '100px', top: '-100px' },
    { left: '150px', top: '0' },
    { left: '100px', top: '100px' },
    { left: '0', top: '150px' },
    { left: '-100px', top: '100px' },
    { left: '-150px', top: '0' },
    { left: '-100px', top: '-100px' },
  ];

  // Determine placement of icons
  settings.icons.map((val, key) => {
    margin = 'unset';
    left = position[key].left;
    top = position[key].top;
    // Animate Expansion
    if (/Trident/.test(navigator.userAgent)) domStyle(val.children[0], { right: '3px', width: '70px', top: '30px' });
    domStyle(val, {
      left,
      top,
      margin,
      opacity: 1,
    });

  });
};

export const implodeMenu = (settings) => {
  document.querySelector('.overlay').classList.remove(`bg-${settings.iconColor}`);
  domStyle(document.querySelector('.overlay'), {
    display: 'none',
  });
  document.querySelector('.menuBtn').classList.remove('closed');
  document.querySelector('.closeBtn').classList.remove('open');
  // Determine re placement of icons
  settings.icons.map((val, key) => {
    const x = 15;
    const y = 15;
    // Animate Expansion
    domStyle(val,
      {
        left: `${x}px`,
        top: `${y}px`,
        opacity: 0,
        margin: 'unset',
      });
    if(key === settings.icons.length - 1){
      setTimeout(() => {
        document.querySelector('.container').classList.remove('go_on');
      }, 350 * key);
    }
  });
};

export const expandMenu = (settings) => {
  document.querySelector('.menuBtn').classList.add('closed');
  document.querySelector('.closeBtn').classList.add('open');

  let y = 60;
  let margin;
  let left;
  let top;
  // Determine placement of icons
  settings.icons.map((val, key) => {
    const x = 15;
    const yMultiplier = /onSide|explode/.test(settings.animationType) ? 60 : 50;
    y = Math.round(y + (yMultiplier * (1 % (key + 1))));
    margin = /onSide|explode/.test(settings.animationType) ? 0 : `-${10 * key}px 0 0 0`;
    left =/onSide|explode/.test(settings.animationType) ? `-${y}px` : `${x}px`;
    top = /onSide|explode/.test(settings.animationType) ? `${x + 5}px` : `-${y}px`;
    // Animate Expansion
    domStyle(val, {
      left,
      top,
      margin,
      transition: `all .2s ${settings.animationIn}`,
    });
    if(/Trident/.test(navigator.userAgent)) domStyle(val.children[0], { right: 0, width: '50px' });
  });
};

export const retractMenu = (settings) => {
  document.querySelector('.menuBtn').classList.remove('closed');
  document.querySelector('.closeBtn').classList.remove('open');
  // Determine re placement of icons
  settings.icons.map((val) => {
    const x = 15;
    const y = 15;
    const margin = `0`;
    // Animate Expansion
    domStyle(val,
      {
        left: `${x}px`,
        top: `${y}px`,
        margin,
      });
  });
};

export const getMenuContainer = () => {
  const containerElem = document.createElement('div');

  // add reference classes
  containerElem.setAttribute('class', 'menuCircle-container');

  return containerElem;
};

export const getContainer = (rootElem, animation) => {
  // empty root element
  rootElem.innerHTML = '';

  // stylize canvas
  stylizeContainer(rootElem, animation);

  // get path element
  const menuContainer = getMenuContainer();

  return menuContainer;
};

export const getItems = (config) => {
  let delay = 0;
  const menuElements = config.menuElem.map((val) => {
    const menuElem = document.createElement('div');
    const menuElemLabel = document.createElement('p');
    const menuElemIcon = document.createElement('i');
    menuElem.setAttribute('class', `menuCircle-item ${config.animationType}`);

    menuElemLabel.setAttribute('class', `labelmenu icon-${config.iconColor}`);
    menuElemLabel.innerText = val.label;
    menuElemIcon.setAttribute('class', `material-icons md-24 icon-${config.iconColor}`);
    menuElemIcon.innerText = val.icon;

    menuElem.addEventListener('click', () => {
      window.location = val.state;
    });

    menuElem.appendChild(menuElemLabel);
    menuElem.appendChild(menuElemIcon);

    delay = delay + 0.2;

    domStyle(menuElem, { 'transition-delay': `${delay}s` });
    return menuElem;
  });

  if (config.menuElem.length > 7) menuElements.splice(8);
  return menuElements;
};

export const getInitialState = (settings) => {
  const initialItem = document.createElement('div');
  const initialItemOpenIcon = document.createElement('i');
  const initialItemCloseIcon = document.createElement('i');

  initialItem.setAttribute('class', 'menuCircle-center closed');
  initialItemOpenIcon.setAttribute('class', `material-icons md-36 menuBtn circlemenu-icon icon-${settings.iconColor}`);
  initialItemOpenIcon.innerText = 'menu';
  initialItemCloseIcon.setAttribute('class',
  `material-icons md-36 closeBtn circlemenu-icon icon-${settings.iconColor}`);
  initialItemCloseIcon.innerText = 'close';

  initialItemOpenIcon.addEventListener('click', () => {
    settings.animationType === 'explode' ? explodeMenu(settings) : expandMenu(settings);
  });

  initialItemCloseIcon.addEventListener('click', () => {
    settings.animationType === 'explode' ? implodeMenu(settings) : retractMenu(settings);
  });

  initialItem.appendChild(initialItemOpenIcon);
  initialItem.appendChild(initialItemCloseIcon);

  return initialItem;
};
