/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('clarkwinkelmann-money-rewards', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('clarkwinkelmann-money-rewards').registerSetting({
    type: 'text',
    setting: 'money-rewards.preselection',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.settings.preselection')
  }).registerSetting({
    type: 'number',
    setting: 'money-rewards.min',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.settings.min'),
    min: 0
  }).registerSetting({
    type: 'number',
    setting: 'money-rewards.max',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.settings.max'),
    min: 0
  }).registerSetting({
    type: 'number',
    setting: 'money-rewards.decimals',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.settings.decimals'),
    min: 0
  }).registerPermission({
    permission: 'money-rewards.seeMoneyRewardHistory',
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.permissions.seeMoneyRewardHistory'),
    allowGuest: true
  }, 'view').registerPermission({
    permission: 'discussion.rewardPostsWithMoney',
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.permissions.rewardWithMoney')
  }, 'reply').registerPermission({
    permission: 'money-rewards.customAmounts',
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.permissions.customAmounts')
  }, 'reply').registerPermission({
    permission: 'money-rewards.createMoney',
    icon: 'fas fa-money-bill',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-money-rewards.admin.permissions.createMoney')
  }, 'moderate');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map