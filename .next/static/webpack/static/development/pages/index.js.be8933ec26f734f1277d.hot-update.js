webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignIndex, _Component);\n\n  var _super = _createSuper(CampaignIndex);\n\n  function CampaignIndex() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, CampaignIndex);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CampaignIndex, [{\n    key: \"renderCampaigns\",\n    value: function renderCampaigns() {\n      var descriptionMap = this.props.descriptionMap;\n      var items = this.props.campaigns.map(function (address) {\n        console.log(descriptionMap[address]);\n        return {\n          header: address,\n          meta: descriptionMap[address],\n          description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n            route: \"/campaign/\".concat(address)\n          }, __jsx(\"a\", null, \"View Campaign\")),\n          fluid: true\n        };\n      });\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Card\"].Group, {\n        items: items\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(\"div\", null, __jsx(\"h3\", null, \"Open Campaigns\"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n        route: \"/campaign/new\"\n      }, __jsx(\"a\", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        floated: \"right\",\n        content: \"Create Campaign\",\n        icon: \"add\",\n        primary: true\n      }))), this.renderCampaigns()));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var campaigns, descriptionMap;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__[\"default\"].methods.getDeployedCampaigns().call();\n\n              case 2:\n                campaigns = _context2.sent;\n                descriptionMap = new Map();\n                _context2.next = 6;\n                return Promise.allSettled(campaigns.map( /*#__PURE__*/function () {\n                  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(address) {\n                    var campaign, description;\n                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(address);\n                            _context.next = 3;\n                            return campaign.methods.campaignDescription().call();\n\n                          case 3:\n                            description = _context.sent;\n                            descriptionMap.set(address, description);\n\n                          case 5:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n\n                  return function (_x) {\n                    return _ref.apply(this, arguments);\n                  };\n                }()));\n\n              case 6:\n                return _context2.abrupt(\"return\", {\n                  campaigns: campaigns,\n                  descriptionMap: descriptionMap\n                });\n\n              case 7:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNhbXBhaWduSW5kZXgiLCJkZXNjcmlwdGlvbk1hcCIsInByb3BzIiwiaXRlbXMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwiZmFjdG9yeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJNYXAiLCJQcm9taXNlIiwiYWxsU2V0dGxlZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJjYW1wYWlnbkRlc2NyaXB0aW9uIiwic2V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7c0NBZWdCO0FBQUEsVUFDTkMsY0FETSxHQUNhLEtBQUtDLEtBRGxCLENBQ05ELGNBRE07QUFHZCxVQUFNRSxLQUFLLEdBQUcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxPQUFPLEVBQUk7QUFDOUNDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUCxjQUFjLENBQUNLLE9BQUQsQ0FBMUI7QUFDQSxlQUFPO0FBQ0hHLGdCQUFNLEVBQUVILE9BREw7QUFFSEksY0FBSSxFQUFFVCxjQUFjLENBQUNLLE9BQUQsQ0FGakI7QUFHSEsscUJBQVcsRUFDUCxNQUFDLDZDQUFEO0FBQU0saUJBQUssc0JBQWVMLE9BQWY7QUFBWCxhQUNJLGlDQURKLENBSkQ7QUFRSE0sZUFBSyxFQUFFO0FBUkosU0FBUDtBQVVILE9BWmEsQ0FBZDtBQWNBLGFBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUVUO0FBQW5CLFFBQVA7QUFDSDs7OzZCQUVRO0FBQ0wsYUFDSSxNQUFDLDJEQUFELFFBQ0ksbUJBQ0ksbUNBREosRUFFSSxNQUFDLDZDQUFEO0FBQU0sYUFBSyxFQUFDO0FBQVosU0FDSSxpQkFDSSxNQUFDLHdEQUFEO0FBQ0ksZUFBTyxFQUFDLE9BRFo7QUFFSSxlQUFPLEVBQUMsaUJBRlo7QUFHSSxZQUFJLEVBQUMsS0FIVDtBQUlJLGVBQU87QUFKWCxRQURKLENBREosQ0FGSixFQWFLLEtBQUtVLGVBQUwsRUFiTCxDQURKLENBREo7QUFtQkg7Ozs7Ozs7Ozs7O3VCQXJEMkJDLHlEQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLG9CQUFoQixHQUF1Q0MsSUFBdkMsRTs7O0FBQWxCYix5QjtBQUVBSCw4QixHQUFpQixJQUFJaUIsR0FBSixFOzt1QkFFakJDLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQmhCLFNBQVMsQ0FBQ0MsR0FBVjtBQUFBLDhNQUFjLGlCQUFNQyxPQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QmUsb0NBRDZCLEdBQ2xCQyxtRUFBUSxDQUFDaEIsT0FBRCxDQURVO0FBQUE7QUFBQSxtQ0FFVGUsUUFBUSxDQUFDTixPQUFULENBQWlCUSxtQkFBakIsR0FBdUNOLElBQXZDLEVBRlM7O0FBQUE7QUFFN0JOLHVDQUY2QjtBQUduQ1YsMENBQWMsQ0FBQ3VCLEdBQWYsQ0FBbUJsQixPQUFuQixFQUE0QkssV0FBNUI7O0FBSG1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFuQixDOzs7a0RBTUM7QUFBRVAsMkJBQVMsRUFBRUEsU0FBYjtBQUF3QkgsZ0NBQWMsRUFBRUE7QUFBeEMsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFaYXdCLCtDOztBQTBEYnpCLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkR3JvdXAsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbScuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5cbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbk1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChjYW1wYWlnbnMubWFwKGFzeW5jIGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jYW1wYWlnbkRlc2NyaXB0aW9uKCkuY2FsbCgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25NYXAuc2V0KGFkZHJlc3MsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zLCBkZXNjcmlwdGlvbk1hcDogZGVzY3JpcHRpb25NYXAgfTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uTWFwIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVzY3JpcHRpb25NYXBbYWRkcmVzc10pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgbWV0YTogZGVzY3JpcHRpb25NYXBbYWRkcmVzc10sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ24vJHthZGRyZXNzfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbi9uZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})