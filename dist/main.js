/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// create header\nconst createHeader = () => {\n    const header = document.createElement(\"header\"); \n\n    const createLogo = (() => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"menu-logo\");\n        div.textContent = \"FrenchSounding\";\n        header.appendChild(div);\n    })();\n\n    const createNav = (() => {\n        const nav = document.createElement(\"nav\");\n        nav.classList.add(\"menu-nav\");\n        nav.innerHTML = `<a href=\"#\" class=\"menu-item\">Home</a>\n        <a href=\"#\" class=\"menu-item\">Menu</a>\n        <a href=\"#\" class=\"menu-item\">Contact</a>\n        <a href=\"#\" class=\"ghost-button menu-item-button\">Catering</a>`;\n        header.appendChild(nav);\n    })();\n\n    return header; \n}\n\n// create main section\nconst createMainSection = () => {\n    const section = document.createElement(\"section\"); \n    section.classList.add(\"main\"); \n\n    const createLeftMainSection = (() => {\n        const div = document.createElement(\"div\"); \n        div.classList.add(\"main-left\"); \n        div.innerHTML = \n            `<div class=\"main-left-wrapper\">\n                <h1 class=\"heading-statement\">Overpriced Food That Tastes Bad!</h1>\n                <a href=\"#\" class=\"ghost-button heading-button\">Menu</a>\n            </div>`;\n\n        section.appendChild(div); \n    })(); \n\n    const createRightMainSection = (() => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"main-right\");\n        div.innerHTML = `<img \n            class=\"heading-image\" \n            src=\"./imgs/pot-lemons.jpg\" \n            alt=\"Hot and fresh mussels in the pot.\n        >`;\n        section.appendChild(div);\n    })();\n\n    return section; \n}\n\n\n// create webpage\nconst createWebpage = (() => {\n    const content = document.querySelector(\"#content\"); \n    \n    content.appendChild(createHeader());\n    content.appendChild(createMainSection());  \n})(); \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;