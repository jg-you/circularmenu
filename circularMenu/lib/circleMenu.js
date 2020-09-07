import { domStyle, stylizeContainer } from '../utils/domStyle';
import { checkIconColor } from '../utils/utility';

export const expandMenu = (settings) => {
  document.querySelector('.menuBtn').classList.add('closed');
  document.querySelector('.closeBtn').classList.add('open');

  let y = 30;
  let margin;
  // Determine placement of icons
  settings.icons.map((val, key) => {
    const x = 40;
    y = Math.round(y + (50 * (1 % (key + 1))));
    margin = `-${10 * key}px 0 0 0`;
    // Animate Expansion
    domStyle(val, {
      left: `${x}px`,
      top: `-${y}px`,
      margin,
      transition: `all .3s ${settings.in}`,

    });
  });
  // animate entrance
};

export const retractMenu = (settings) => {
  document.querySelector('.menuBtn').classList.remove('closed');
  document.querySelector('.closeBtn').classList.remove('open');
  // Determine re placement of icons
  settings.icons.map((val) => {
    const x = 25;
    const y = 25;
    const margin = `10%`;
    // Animate Expansion
    domStyle(val,
      {
        left: `${x}px`,
        top: `${y}px`,
        margin,
        transition: `all .5s ${settings.out}`,

      });
  });
};

export const getMenuContainer = () => {
  const containerElem = document.createElement('div');

  // add reference classes
  containerElem.setAttribute('class', 'menuCircle-container');

  return containerElem;
};

export const getContainer = (rootElem) => {
  // empty root element
  rootElem.innerHTML = '';

  // stylize canvas
  stylizeContainer(rootElem);

  // get path element
  const menuContainer = getMenuContainer();

  return menuContainer;
};

export const getItems = (config) => {
  const menuElements = config.menuElem.map((val) => {
    const menuElem = document.createElement('div');
    const menuElemLabel = document.createElement('p');
    const menuElemIcon = document.createElement('i');

    menuElem.setAttribute('class', 'menuCircle-item');

    menuElemLabel.setAttribute('class', `labelmenu`);
    menuElemLabel.innerText = val.label;
    menuElemIcon.setAttribute('class', `icon material-icons md-24 icon-${checkIconColor(config.iconcolor)}`);
    menuElemIcon.innerText = val.icon;

    menuElem.addEventListener('click', () => {
      window.location = val.state;
    });

    menuElem.appendChild(menuElemLabel);
    menuElem.appendChild(menuElemIcon);

    const dim = Math.floor(config.iconDim / 2);

    domStyle(menuElem, { top: `${dim}px`, left: `${dim}px` });

    return menuElem;
  });

  return menuElements;
};

export const getInitialState = (settings) => {
  const initialItem = document.createElement('div');
  const initialItemOpenIcon = document.createElement('i');
  const initialItemCloseIcon = document.createElement('i');

  initialItem.setAttribute('class', 'menuCircle-center closed');
  initialItemOpenIcon.setAttribute('class', `material-icons md-36 menuBtn circlemenu-icon icon-${checkIconColor(settings.iconcolor)}`);
  initialItemOpenIcon.innerText = 'menu';
  initialItemCloseIcon.setAttribute('class',
  `material-icons md-36 closeBtn circlemenu-icon icon-${checkIconColor(settings.iconcolor)}`);
  initialItemCloseIcon.innerText = 'close';

  initialItemOpenIcon.addEventListener('click', () => {
    expandMenu(settings);
  });

  initialItemCloseIcon.addEventListener('click', () => {
    retractMenu(settings);
  });

  initialItem.appendChild(initialItemOpenIcon);
  initialItem.appendChild(initialItemCloseIcon);

  return initialItem;
};
