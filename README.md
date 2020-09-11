[![dependencies Status](https://david-dm.org/barthachijuu/circularmenu/status.svg)](https://david-dm.org/barthachijuu/circularmenu)
[![devDependencies Status](https://david-dm.org/barthachijuu/circularmenu/dev-status.svg)](https://david-dm.org/barthachijuu/circularmenu?type=dev)
[![Build status](https://ci.appveyor.com/api/projects/status/agm38r32u7iy47cd?svg=true)](https://ci.appveyor.com/project/barthachijuu/circularmenu)
[![codecov](https://codecov.io/gh/barthachijuu/circularmenu/branch/master/graph/badge.svg)](https://codecov.io/gh/barthachijuu/circularmenu)
![GitHub package.json version](https://img.shields.io/github/package-json/v/barthachijuu/circularmenu)
![npm](https://img.shields.io/npm/v/@barthachijuu/circularmenu)
![npm](https://img.shields.io/npm/dw/@barthachijuu/circularmenu)
[![HitCount](http://hits.dwyl.com/barthachijuu/circularmenu.svg)](http://hits.dwyl.com/barthachijuu/circularmenu)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# circularmenu

<div align="justify">A very simple circular menu, developed in VanillaJS and animated with CSS3</div>

---

<div align="center"><strong>This project contains:</strong></div>
<br />
<div align="center">
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/logo-sass.png" height="55">&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/logo-npm.png" height="55">&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/yarn.png" height="55">&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/logo-es6.png" height="55">&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/logo-node.png" height="55">&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/logo-webpack.png" height="55">&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/jest.png" height="55">&nbsp;&nbsp;
</div>

---

## Browsers Support

| <img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/browsers/browser-ie.svg" height="35"> | <img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/browsers/browser-firefox.svg" height="35"> | <img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/browsers/browser-chrome.svg" height="35"> | <img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/browsers/browser-safari.svg" height="35"> | <img src="https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/browsers/browser-opera.svg" height="35"> |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge+                                                        | latest                                                       | latest                                                       | latest                                                       | latest                                                       |

---

### 🚀 Getting Started

---

```js
npm install --save-dev @barthachijuu/circularmenu
```

or

```js
yarn add -D @barthachijuu/circularmenu
```

### 📝 Usage

```html
    <div id="your_container"></div>
```

```js
  import CircularMenu from '@barthachijuu/circularmenu';

  const menu = new CircularMenu('your_container');
  menu.init();
```

You can set `options` to `new CirclueMenu('your_container', options);` example:

```javascript

const CircularMenu = require("@barthachijuu/circularmenu");

const options = {
  iconColor: 'blue-7',
  animationIn: 'ease-in',
  animationEntrance: 'bounce',
  animationOut: 'ease-out',
  animationType: 'onTop',
  menuElem: [...],
  ...
};
const menu = new CircularMenu('your_container', options);
  menu.init();
```

Below is available a description of `options` values.

## 🧰 Options

| Parameter | Description | Values | Default value | Available since |
| --- | --- | --- | --- | --- |
| iconcolor | Set the color of icons | string | blue-7 | **v1.0.0** |
| iconIn    | Set the animtion entance | string [ease/linear/ease-in/ease-out/ease-in-out] | ease-in  | **v1.0.0** |
| iconOut   | Set the animation exit | string [ease/linear/ease-in/ease-out/ease-in-out] | ease-out  | **v1.0.0** |
| menuElem  | Set the number of elements in the menu | array | [an example list]  | **v1.0.0** |
| animationEntrance   | Set the animation entrance of the menu | string [bounce/puff-in/slide-in] | bounce  | **v1.2.0** |
| animationType   | Set the animation when over a voice | string [onTop/onside/explode] | onTop  | **v1.2.0** |

> Note: At the moment, the maximun number of elements in menuElem, is limited to 8
> If you want more animation type don't esitate to open a pull request

## 🎨 Palette

Below, the possible color combination to use for the icon. (If you want more, don't esitate to open a pull request)

| Class | Color | Gradation |
| --- | --- | --- |
|icon-gray-{0-7} | Gray | from ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/000000?text=+) `#f8f9fa` to ![#343a40](https://via.placeholder.com/15/343a40/000000?text=+) `#343a40` |
|icon-red-{0-7} | Red | from ![#fff5f5](https://via.placeholder.com/15/fff5f5/000000?text=+) `#fff5f5` to ![#c92a2a](https://via.placeholder.com/15/c92a2a/000000?text=+) `#c92a2a` |
|icon-pink-{0-7} | Pink | from ![#fff0f6](https://via.placeholder.com/15/fff0f6/000000?text=+) `#fff0f6` to ![#a61e4d](https://via.placeholder.com/15/a61e4d/000000?text=+) `#a61e4d` |
|icon-grape-{0-7} | Grape | from ![#f8f0fc](https://via.placeholder.com/15/f8f0fc/000000?text=+) `#f8f0fc` to ![#862e9c](https://via.placeholder.com/15/862e9c/000000?text=+) `#862e9c` |
|icon-violet-{0-7} | Violet | from ![#f3f0ff](https://via.placeholder.com/15/f3f0ff/000000?text=+) `#f3f0ff` to ![#5f3dc4](https://via.placeholder.com/15/5f3dc4/000000?text=+) `#5f3dc4` |
|icon-indigo-{0-7} | Indigo | from ![#edf2ff](https://via.placeholder.com/15/edf2ff/000000?text=+) `#edf2ff` to ![#364fc7](https://via.placeholder.com/15/364fc7/000000?text=+) `#364fc7` |
|icon-blue-{0-7} | Blue | from ![#e7f5ff](https://via.placeholder.com/15/e7f5ff/000000?text=+) `#e7f5ff` to ![#1864ab](https://via.placeholder.com/15/1864ab/000000?text=+) `#1864ab` |
|icon-cyan-{0-7} | Cyan | from ![#e6fcf5](https://via.placeholder.com/15/e6fcf5/000000?text=+) `#e6fcf5` to ![#0b7285](https://via.placeholder.com/15/0b7285/000000?text=+) `#0b7285` |
|icon-teal-{0-7} | Teal | from ![#e6fcf5](https://via.placeholder.com/15/e6fcf5/000000?text=+) `#e6fcf5` to ![#087f5b](https://via.placeholder.com/15/087f5b/000000?text=+) `#087f5b` |
|icon-green-{0-7} | Green | from ![#ebfbee](https://via.placeholder.com/15/ebfbee/000000?text=+) `#ebfbee` to ![#2b8a3e](https://via.placeholder.com/15/2b8a3e/000000?text=+) `#2b8a3e` |
|icon-lime-{0-7} | Lime | from ![#f4fce3](https://via.placeholder.com/15/f4fce3/000000?text=+) `#f4fce3` to ![#5c940d](https://via.placeholder.com/15/5c940d/000000?text=+) `#5c940d` |
|icon-yellow-{0-7} | Yellow | from ![#fff9db](https://via.placeholder.com/15/fff9db/000000?text=+) `#fff9db` to ![#e67700](https://via.placeholder.com/15/e67700/000000?text=+) `#e67700` |
|icon-orange-{0-7} | Orange | from ![#fff9f1](https://via.placeholder.com/15/fff9f1/000000?text=+) `#fff9f1` to ![#d9480f](https://via.placeholder.com/15/d9480f/000000?text=+) `#d9480f` |
|icon-brown-{0-7} | Brown | from ![#f5deb3](https://via.placeholder.com/15/f5deb3/000000?text=+) `#f5deb3` to ![#a52a2a](https://via.placeholder.com/15/a52a2a/000000?text=+) `#a52a2a` |

![CircularMeu Preview](https://raw.githubusercontent.com/barthachijuu/circularmenu/HEAD/repo_readme_assets/circularmenu.gif)

You can view a demo by [click here](https://codesandbox.io/s/zealous-feather-geyk8?fontsize=14&hidenavigation=1&theme=dark)

## 🎁 Support: Donate

> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this and other project for several hours in my spare time between my job and my lovely family, and try to keep it up to date and working. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg?logo=paypal)](https://www.paypal.me/barthachijuu) [![](https://img.shields.io/badge/donate-patreon-F87668.svg?logo=patreon)](https://www.patreon.com/barthachijuu)  [![](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?logo=ko-fi)](https://ko-fi.com/barthachijuu)

## 👑 Sponsors

Support this project by becoming a sponsor. 🙏 Become a sponsor on [patreon](https://www.patreon.com/join/barthachijuu) or become top3 sponsor on [ko-fi](https://ko-fi.com/barthachijuu). Your logo will show up here with a link to your website.

## 👔 Backers

Thank you to all our backers! 🙏 Become a backer on [patreon](https://www.patreon.com/join/barthachijuu).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://barthachijuu.dev"><img src="https://avatars3.githubusercontent.com/u/1281894?v=4" width="100px;" alt="Bartolo Amico"/><br /><sub><b>Bartolo Amico</b></sub></a><br /><a href="https://github.com/barthachijuu/circularmenu/commits?author=barthachijuu" title="Code">💻</a> <a href="#content-barthachijuu" title="Content">🖋</a> <a href="https://github.com/barthachijuu/circularmenu/commits?author=barthachijuu" title="Documentation">📖</a> <a href="#ideas-barthachijuu" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-barthachijuu" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-barthachijuu" title="Maintenance">🚧</a> <a href="#plugin-barthachijuu" title="Plugin/utility libraries">🔌</a> <a href="#projectManagement-barthachijuu" title="Project Management">📆</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

This project is licensed under the MIT license, Copyright (©) 2020 Bartolomeo Amico. For more information see `LICENSE.md`
