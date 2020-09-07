import defaultConfig from './lib/config';
import './scss/style.scss';
import { getItems, getContainer, getInitialState } from './lib/circleMenu';
import { addError } from './utils/utility';

export default class CircularMenu {
  constructor(domElem, config = {}) {
    this.initialized = false;
    this.rootElem = document.querySelector(domElem);
    this.config = Object.assign(defaultConfig, config);
  }

  init() {
    // destroy previous instance, if exists
    try {
      if (this.rootElem === null) throw new Error('Sorry, but you cannot set a selector that not exist in the DOM ');

      if (this.initialized) {
        this.destroy();
      }
      const container = getContainer(this.rootElem, this.config);

      const elements = getItems(this.config);

      const menuSettings = {
        icons: elements,
        width: this.config.width,
        height: this.config.height,
        iconcolor: this.config.iconcolor,
        in: this.config.animationIn,
        out: this.config.animationOut,
      };

      const initialItem = getInitialState(menuSettings);

      // eslint-disable-next-line array-callback-return
      elements.map((v) => {
        container.append(v);
      });

      container.appendChild(initialItem);

      this.rootElem = this.rootElem.appendChild(container);

      // set initialized value to true
      this.initialized = true;
    } catch (e) {
      document.querySelector('body').appendChild(addError(e.message));
      setTimeout(() => {
        document.querySelector('.js-snackbar__wrapper').classList.remove('snackbar__hide');
        document.querySelector('.js-snackbar__wrapper').classList.add('snackbar__show');
      }, 500);
    }
  }

  // destroy component
  destroy() {
    // reset root element container
    this.rootElem.style = '';
    this.rootElem.innerHTML = '';
    // unset initialized value to true
    this.initialized = false;
  }
}
setTimeout(() => {
  const menu = new CircularMenu('#menuContainer');
  menu.init();
}, 1000);
