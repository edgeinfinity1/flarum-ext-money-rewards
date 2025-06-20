/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/forum/components/FormattedMoney.ts":
/*!************************************************!*\
  !*** ./src/forum/components/FormattedMoney.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormattedMoney)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var FormattedMoney = /*#__PURE__*/function (_Component) {
  function FormattedMoney() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FormattedMoney, _Component);
  var _proto = FormattedMoney.prototype;
  _proto.view = function view() {
    var moneyName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('antoinefr-money.moneyname') || '[money]';
    return m('span', moneyName.replace('[money]', this.attrs.money + ''));
  };
  return FormattedMoney;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/PostRewards.ts":
/*!*********************************************!*\
  !*** ./src/forum/components/PostRewards.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostRewards)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RewardRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RewardRecord */ "./src/forum/components/RewardRecord.ts");




var PostRewards = /*#__PURE__*/function (_Component) {
  function PostRewards() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostRewards, _Component);
  var _proto = PostRewards.prototype;
  _proto.view = function view() {
    // @ts-ignore
    var rewards = this.attrs.post.moneyRewards();
    if (!Array.isArray(rewards) || rewards.length === 0) {
      return null;
    }
    return m('.PostMoneyRewards', [m('h4', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.post.section')), m('ul.MoneyRewardRecords', rewards.map(function (reward) {
      return _RewardRecord__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        reward: reward
      });
    }))]);
  };
  return PostRewards;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/RewardHistoryPage.ts":
/*!***************************************************!*\
  !*** ./src/forum/components/RewardHistoryPage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RewardHistoryPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RewardRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RewardRecord */ "./src/forum/components/RewardRecord.ts");






var RewardHistoryPage = /*#__PURE__*/function (_UserPage) {
  function RewardHistoryPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _UserPage.call.apply(_UserPage, [this].concat(args)) || this;
    _this.loading = true;
    _this.rewards = [];
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RewardHistoryPage, _UserPage);
  var _proto = RewardHistoryPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);
    this.loadUser(m.route.param('username'));
  };
  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitle(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.profile.title')));
    this.loadRewards();
  };
  _proto.loadRewards = function loadRewards() {
    var _this2 = this;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'GET',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/users/' + this.user.id() + '/money-rewards'
    }).then(function (payload) {
      _this2.rewards = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(payload);
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.content = function content() {
    if (this.loading) {
      return flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default().component();
    }
    return m('ul.MoneyRewardHistoryPage.MoneyRewardRecords', [this.rewards.map(function (reward) {
      return _RewardRecord__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        reward: reward,
        showReceiver: true
      });
    })]);
  };
  return RewardHistoryPage;
}((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/RewardModal.ts":
/*!*********************************************!*\
  !*** ./src/forum/components/RewardModal.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RewardModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormattedMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormattedMoney */ "./src/forum/components/FormattedMoney.ts");






var RewardModal = /*#__PURE__*/function (_Modal) {
  function RewardModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.preselectAmount = 0;
    _this.customAmount = false;
    _this.customAmountValue = '';
    _this.createMoney = false;
    _this.comment = '';
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RewardModal, _Modal);
  var _proto = RewardModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsPreselection') || []).length === 0) {
      this.customAmount = true;
    }
  };
  _proto.className = function className() {
    return 'Modal--small';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.title');
  };
  _proto.content = function content() {
    var _this2 = this;
    var preselection = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsPreselection') || [];
    return m('.Modal-body', [m('.Form-group', [flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.target', {
      number: this.attrs.post.number(),
      user: this.attrs.post.user()
    })]), preselection.length > 0 ? m('.Form-group', [preselection.map(function (amount, index) {
      return m('label', [m('input', {
        type: 'radio',
        name: 'money-reward-preselection',
        checked: _this2.preselectAmount === index && !_this2.customAmount,
        onchange: function onchange() {
          _this2.preselectAmount = index;
          _this2.customAmount = false;
        }
      }), ' ', _FormattedMoney__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        money: amount
      })]);
    }), flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsCustomAmounts') ? m('label', [m('input', {
      type: 'radio',
      name: 'money-reward-preselection',
      checked: this.customAmount,
      onchange: function onchange() {
        _this2.customAmount = true;
      }
    }), ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.optionCustom')]) : null]) : null, this.customAmount ? m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.label.custom')), m('input.FormControl', {
      type: 'number',
      value: this.customAmountValue,
      oninput: function oninput(event) {
        _this2.customAmountValue = event.target.value;
      },
      min: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsCustomAmountsMin'),
      max: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsCustomAmountsMax') || undefined,
      step: 1 / Math.pow(10, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsCustomAmountsDecimals'))
    })]) : '', m('.Form-group', [flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.balance', {
      amount: _FormattedMoney__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        money: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.attribute('money')
      })
    })]), flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsCreateMoney') ? m('.Form-group', [flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default().component({
      state: this.createMoney,
      onchange: function onchange(value) {
        _this2.createMoney = value;
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.label.create'))]) : null, m('.Form-group', [m('label', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.label.comment')), m('textarea.FormControl', {
      value: this.comment,
      oninput: function oninput(event) {
        _this2.comment = event.target.value;
      }
    })]), m('.Form-group', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.submit')))]);
  };
  _proto.onsubmit = function onsubmit(event) {
    var _this3 = this;
    event.preventDefault();
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'POST',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/posts/' + this.attrs.post.id() + '/money-rewards',
      errorHandler: this.onerror.bind(this),
      body: {
        data: {
          attributes: {
            amount: this.customAmount ? this.customAmountValue : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('moneyRewardsPreselection')[this.preselectAmount],
            createMoney: this.createMoney,
            comment: this.comment
          }
        }
      }
    }).then(function (payload) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(payload);
      _this3.hide();
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show({
        type: 'success'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.modal.success'));
    })["catch"](function () {
      _this3.loading = false;
      m.redraw();
    });
  };
  return RewardModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/RewardRecord.ts":
/*!**********************************************!*\
  !*** ./src/forum/components/RewardRecord.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RewardRecord)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FormattedMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormattedMoney */ "./src/forum/components/FormattedMoney.ts");









var RewardRecord = /*#__PURE__*/function (_Component) {
  function RewardRecord() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RewardRecord, _Component);
  var _proto = RewardRecord.prototype;
  _proto.view = function view() {
    var _post$discussion;
    var _this$attrs = this.attrs,
      reward = _this$attrs.reward,
      showReceiver = _this$attrs.showReceiver;
    var giver = reward.giver() || null;
    var receiver = reward.receiver() || null;
    var post = reward.post();
    var giverContent = [flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(giver), flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default()(giver)];
    var receiverContent = [flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(receiver), flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_7___default()(receiver)];
    var comment = reward.comment();
    return m('li.MoneyRewardRecord', [m('span.MoneyRewardRecordIcon', flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()('fas fa-gift')), m('span.MoneyRewardRecordDate', flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(reward.createdAt())), m('span.MoneyRewardRecordAmount', _FormattedMoney__WEBPACK_IMPORTED_MODULE_8__["default"].component({
      money: reward.amount()
    })), m('span.MoneyRewardRecordGiver', [' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.record.from'), ' ', giver ? flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default().component({
      className: 'MoneyRewardRecordUser',
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.user(giver)
    }, giverContent) : m('span.MoneyRewardRecordUser', giverContent)]), showReceiver ? m('span.MoneyRewardRecordReceiver', [' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.record.to'), ' ', receiver ? flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default().component({
      className: 'MoneyRewardRecordUser',
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.user(receiver)
    }, receiverContent) : m('span.MoneyRewardRecordUser', receiverContent)]) : null, showReceiver && post ? m('span.MoneyRewardRecordPost', [' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.record.post', {
      number: post.number(),
      title: ((_post$discussion = post.discussion()) == null ? void 0 : _post$discussion.title()) || 'N/A',
      a: flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default().component({
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route.post(post)
      })
    })]) : null, comment ? m('.MoneyRewardRecordComment', [m('span.MoneyRewardRecordCommentLabel', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.record.comment')), ' ', m('span.MoneyRewardRecordCommentContent', reward.comment())]) : null]);
  };
  return RewardRecord;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/utils/PostControls */ "flarum/forum/utils/PostControls");
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _models_Reward__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/Reward */ "./src/forum/models/Reward.ts");
/* harmony import */ var _components_RewardHistoryPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/RewardHistoryPage */ "./src/forum/components/RewardHistoryPage.ts");
/* harmony import */ var _components_RewardModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/RewardModal */ "./src/forum/components/RewardModal.ts");
/* harmony import */ var _components_PostRewards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PostRewards */ "./src/forum/components/PostRewards.ts");














flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('clarkwinkelmann-money-rewards', function () {
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().routes).userMoneyRewardHistory = {
    path: '/u/:username/rewards',
    component: _components_RewardHistoryPage__WEBPACK_IMPORTED_MODULE_11__["default"]
  };
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store).models['money-rewards'] = _models_Reward__WEBPACK_IMPORTED_MODULE_10__["default"];

  // @ts-ignore
  (flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5___default().prototype).moneyRewards = flarum_common_Model__WEBPACK_IMPORTED_MODULE_4___default().hasMany('moneyRewards');
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'navItems', function (items) {
    if (!this.user || !this.user.attribute('canSeeMoneyRewardHistory')) {
      return;
    }
    items.add('money-rewards', flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default().component({
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('userMoneyRewardHistory', {
        username: this.user.slug()
      }),
      icon: 'fas fa-money-bill'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.profile.nav')));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_8___default()), 'userControls', function (items, post) {
    if (!post.attribute('rewardWithMoney')) {
      if (post.attribute('contentType') === 'comment' && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) {
        items.add('money-reward', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
          icon: 'fas fa-gift',
          className: 'disabled',
          // Setting just the class so you can still actually click the button
          onclick: function onclick() {
            alert(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.post.disallowed' + (post.user() === (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user ? 'Own' : 'Other'))));
          }
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.post.action')));
      }
      return;
    }
    items.add('money-reward', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      onclick: function onclick() {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_RewardModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: post
        });
      },
      icon: 'fas fa-gift'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-money-rewards.forum.post.action')));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_7___default().prototype), 'content', function (content) {
    content.push(_components_PostRewards__WEBPACK_IMPORTED_MODULE_13__["default"].component({
      post: this.attrs.post
    }));
  });
});

/***/ }),

/***/ "./src/forum/models/Reward.ts":
/*!************************************!*\
  !*** ./src/forum/models/Reward.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reward)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var Reward = /*#__PURE__*/function (_Model) {
  function Reward() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.amount = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('amount');
    _this.newMoney = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('newMoney');
    _this.comment = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('comment');
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.post = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('post');
    _this.giver = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('giver');
    _this.receiver = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('receiver');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Reward, _Model);
  return Reward;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/humanTime":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/humanTime']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/humanTime'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/UserPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserPage']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserPage'];

/***/ }),

/***/ "flarum/forum/utils/PostControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/PostControls']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/PostControls'];

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
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map