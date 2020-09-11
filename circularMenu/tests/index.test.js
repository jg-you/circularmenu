import CircularMenu from '../index';
import defaultConfig from '../lib/config';
import { validateSettings } from '../utils/utility';
import { getInitialState, getMenuContainer, getContainer, getItems } from '../lib/circleMenu';

describe('CircularMenu', () => {
  jest.useFakeTimers();
  let menu;

  beforeEach(() => {
    document.body.innerHTML = `<div id='menuContainer'></div>`;
    document.querySelector('#menuContainer').children;
  });

  test('Menu constructs with a parameters', () => {
    menu = new CircularMenu('#menuContainer', {});
    expect(menu).not.toBeNull();
    menu.init();
  });

  test('Menu constructs with initialized setted to true', () => {
    const menu = new CircularMenu('#menuContainer');
    menu.initialized = true;
    menu.init();
  });

  test('We can check if the the DOM element is rendered correctly', () => {
    const root = document.getElementById('menuContainer');
    expect(getInitialState(defaultConfig)).not.toBeNull();
    expect(getContainer(root)).not.toBeNull();
    expect(getMenuContainer()).not.toBeNull();
    expect(getItems(defaultConfig)).not.toBeNull();
    expect(getItems(defaultConfig).length).toBeCloseTo(5);
    // eslint-disable-next-line max-len
    expect(getInitialState(defaultConfig).innerHTML).toBe(`<i class="material-icons md-36 menuBtn circlemenu-icon icon-blue-7"></i><i class="material-icons md-36 closeBtn circlemenu-icon icon-blue-7"></i>`);
  });

  test('Simulate the expand menu method', () => {
    menu = new CircularMenu('#menuContainer', {animationType: 'onSide'});
    menu.init();
    validateSettings({
      iconColor: 'crab-4',
      animationIn: 'landscape',
      animationOut: 'omit',
      animationType: 'swift',
      animationEntrance: 'dance',
    });
    document.body.children[0].children[0].lastElementChild.children[0].click();
  });

  test('Simulate the expand menu method with different animation', () => {
    menu = new CircularMenu('#menuContainer', {animationType: 'onTop'});
    menu.init();
    document.body.children[0].children[0].lastElementChild.children[0].click();
  });

  test('Simulate the retract menu method', () => {
    menu = new CircularMenu('#menuContainer', {});
    menu.init();
    document.body.children[0].children[0].lastElementChild.children[1].click();
  });

  test('Simulate the explode menu method', () => {
    menu = new CircularMenu('#menuContainer', {animationType: 'explode'});
    menu.init();
    document.body.children[0].children[0].lastElementChild.children[0].click();
  });

  test('Simulate the implode menu method', () => {
    menu = new CircularMenu('#menuContainer', {animationType: 'explode'});
    menu.init();
    document.body.children[0].children[0].lastElementChild.children[1].click();
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1400);
  });

  test('Simulate the location change', () => {
    menu = new CircularMenu('#menuContainer', {});
    menu.init();
    document.body.children[0].lastElementChild.firstElementChild.click();
  });

  test('Simulate the explode animation', () => {
    menu = new CircularMenu('#menuContainer', {animationType: 'explode'});
    validateSettings({
      iconColor: 'blue-4',
      animationIn: 'ease-in',
      animationOut: 'linear',
      animationType: 'explode',
      animationEntrance: 'dance',
    });
    menu.init();
  });

  test('Remove the toaster', () => {
    menu = new CircularMenu('#menu', {});
    menu.init();
    jest.runAllTimers();
    document.body.lastElementChild.lastElementChild.lastElementChild.click();
    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
  });
});
