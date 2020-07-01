webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignIndex, _Component);\n\n  var _super = _createSuper(CampaignIndex);\n\n  function CampaignIndex() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CampaignIndex);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CampaignIndex, [{\n    key: \"renderCampaigns\",\n    value: function renderCampaigns() {\n      var items = this.props.campaigns.map(function (address) {\n        console.log(descriptionMap[address]);\n        return {\n          header: address,\n          meta: descriptionMap[address],\n          description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n            route: \"/campaign/\".concat(address)\n          }, __jsx(\"a\", null, \"View Campaign\")),\n          fluid: true\n        };\n      });\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Card\"].Group, {\n        items: items\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(\"div\", null, __jsx(\"h3\", null, \"Open Campaigns\"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n        route: \"/campaign/new\"\n      }, __jsx(\"a\", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        floated: \"right\",\n        content: \"Create Campaign\",\n        icon: \"add\",\n        primary: true\n      }))), this.renderCampaigns()));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var _this = this;\n\n        var campaigns, descriptionMap;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__[\"default\"].methods.getDeployedCampaigns().call();\n\n              case 2:\n                campaigns = _context2.sent;\n                descriptionMap = new Map();\n                _context2.next = 6;\n                return Promise.allSettled(campaigns.map( /*#__PURE__*/function () {\n                  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(address) {\n                    var campaign, description;\n                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(address);\n                            _context.next = 3;\n                            return campaign.methods.campaignDescription().call();\n\n                          case 3:\n                            description = _context.sent;\n                            descriptionMap.set(address, description);\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x) {\n                    return _ref.apply(this, arguments);\n                  };\n                }())).then(function () {\n                  return _this.render();\n                });\n\n              case 6:\n                return _context2.abrupt(\"return\", {\n                  campaigns: campaigns,\n                  descriptionMap: descriptionMap\n                });\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbk1hcCIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJNYXAiLCJQcm9taXNlIiwiYWxsU2V0dGxlZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJjYW1wYWlnbkRlc2NyaXB0aW9uIiwic2V0IiwidGhlbiIsInJlbmRlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxhOzs7Ozs7Ozs7Ozs7O3NDQWVnQjtBQUNkLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUFDLE9BQU8sRUFBSTtBQUM5Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVlDLGNBQWMsQ0FBQ0gsT0FBRCxDQUExQjtBQUNBLGVBQU87QUFDSEksZ0JBQU0sRUFBRUosT0FETDtBQUVISyxjQUFJLEVBQUVGLGNBQWMsQ0FBQ0gsT0FBRCxDQUZqQjtBQUdITSxxQkFBVyxFQUNQLE1BQUMsNkNBQUQ7QUFBTSxpQkFBSyxzQkFBZU4sT0FBZjtBQUFYLGFBQ0ksaUNBREosQ0FKRDtBQVFITyxlQUFLLEVBQUU7QUFSSixTQUFQO0FBVUgsT0FaYSxDQUFkO0FBY0EsYUFBTyxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGFBQUssRUFBRVg7QUFBbkIsUUFBUDtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJLE1BQUMsMkRBQUQsUUFDSSxtQkFDSSxtQ0FESixFQUVJLE1BQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUM7QUFBWixTQUNJLGlCQUNJLE1BQUMsd0RBQUQ7QUFDSSxlQUFPLEVBQUMsT0FEWjtBQUVJLGVBQU8sRUFBQyxpQkFGWjtBQUdJLFlBQUksRUFBQyxLQUhUO0FBSUksZUFBTztBQUpYLFFBREosQ0FESixDQUZKLEVBYUssS0FBS1ksZUFBTCxFQWJMLENBREosQ0FESjtBQW1CSDs7Ozs7Ozs7Ozs7Ozt1QkFuRDJCQyx5REFBTyxDQUFDQyxPQUFSLENBQWdCQyxvQkFBaEIsR0FBdUNDLElBQXZDLEU7OztBQUFsQmQseUI7QUFFQUssOEIsR0FBaUIsSUFBSVUsR0FBSixFOzt1QkFFakJDLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQmpCLFNBQVMsQ0FBQ0MsR0FBVjtBQUFBLDhNQUFjLGlCQUFNQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QmdCLG9DQUQ2QixHQUNsQkMsbUVBQVEsQ0FBQ2pCLE9BQUQsQ0FEVTtBQUFBO0FBQUEsbUNBRVRnQixRQUFRLENBQUNOLE9BQVQsQ0FBaUJRLG1CQUFqQixHQUF1Q04sSUFBdkMsRUFGUzs7QUFBQTtBQUU3Qk4sdUNBRjZCO0FBR25DSCwwQ0FBYyxDQUFDZ0IsR0FBZixDQUFtQm5CLE9BQW5CLEVBQTRCTSxXQUE1Qjs7QUFIbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW5CLEVBSUZjLElBSkUsQ0FJRztBQUFBLHlCQUFNLEtBQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUEsaUJBSkgsQzs7O2tEQU1DO0FBQUV2QiwyQkFBUyxFQUFFQSxTQUFiO0FBQXdCSyxnQ0FBYyxFQUFFQTtBQUF4QyxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVphbUIsK0M7O0FBd0RiM0IsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB7IENhcmQsIENhcmRHcm91cCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKGNhbXBhaWducy5tYXAoYXN5bmMgYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNhbXBhaWduRGVzY3JpcHRpb24oKS5jYWxsKCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbk1hcC5zZXQoYWRkcmVzcywgZGVzY3JpcHRpb24pO1xuICAgICAgICB9KSkudGhlbigoKSA9PiB0aGlzLnJlbmRlcigpKTtcblxuICAgICAgICByZXR1cm4geyBjYW1wYWlnbnM6IGNhbXBhaWducywgZGVzY3JpcHRpb25NYXA6IGRlc2NyaXB0aW9uTWFwIH07XG4gICAgfVxuICAgIFxuICAgIHJlbmRlckNhbXBhaWducygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbk1hcFthZGRyZXNzXSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBtZXRhOiBkZXNjcmlwdGlvbk1hcFthZGRyZXNzXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKFxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbi8ke2FkZHJlc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5WaWV3IENhbXBhaWduPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWduL25ld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})