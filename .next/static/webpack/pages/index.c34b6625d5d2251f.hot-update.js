"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Page = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        __source: {\n            fileName: \"/Users/cmo/Documents/Programming/Websites/cmoss-homepage/pages/index.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                borderRadius: \"lg\",\n                bg: \"red\",\n                p: 3,\n                mb: 6,\n                align: \"center\",\n                __source: {\n                    fileName: \"/Users/cmo/Documents/Programming/Websites/cmoss-homepage/pages/index.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Hello, I'm Cmos, a web and game developer based in Canada\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                display: {\n                    md: 'flex'\n                },\n                __source: {\n                    fileName: \"/Users/cmo/Documents/Programming/Websites/cmoss-homepage/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    flexGrow: 1,\n                    __source: {\n                        fileName: \"/Users/cmo/Documents/Programming/Websites/cmoss-homepage/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        as: \"h2\",\n                        variant: \"page-title\",\n                        __source: {\n                            fileName: \"/Users/cmo/Documents/Programming/Websites/cmoss-homepage/pages/index.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"Cmos\"\n                    })\n                })\n            })\n        ]\n    }));\n};\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQ7O0FBRTFELEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQ2IsR0FEbUIsQ0FBQztJQUNoQixNQUFNLHVFQUNESCx1REFBUzs7Ozs7Ozs7aUZBQ0xDLGlEQUFHO2dCQUFDRyxZQUFZLEVBQUMsQ0FBSTtnQkFBQ0MsRUFBRSxFQUFDLENBQUs7Z0JBQUNDLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxFQUFFLEVBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFHLENBQVE7Ozs7Ozs7MEJBQUMsQ0FFaEU7O2lGQUNDUCxpREFBRztnQkFBQ1EsT0FBTyxFQUFFLENBQUNDO29CQUFBQSxFQUFFLEVBQUUsQ0FBTTtnQkFBQSxDQUFDOzs7Ozs7OytGQUN6QlQsaURBQUc7b0JBQUNVLFFBQVEsRUFBSSxDQUFDOzs7Ozs7O21HQUNqQlQscURBQU87d0JBQUNVLEVBQUUsRUFBQyxDQUFJO3dCQUFDQyxPQUFPLEVBQUMsQ0FBWTs7Ozs7OztrQ0FBQyxDQUV0Qzs7Ozs7O0FBS1osQ0FBQztLQWZLVixJQUFJO0FBaUJWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9XCJsZ1wiIGJnPVwicmVkXCIgcD17M30gbWIgPSB7Nn0gYWxpZ24gPSBcImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIEhlbGxvLCBJJmFwb3M7bSBDbW9zLCBhIHdlYiBhbmQgZ2FtZSBkZXZlbG9wZXIgYmFzZWQgaW4gQ2FuYWRhXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT17e21kOiAnZmxleCd9fT5cbiAgICAgICAgICAgIDxCb3ggZmxleEdyb3cgPSB7MX0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdmFyaWFudD1cInBhZ2UtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBDbW9zXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UgIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkJveCIsIkhlYWRpbmciLCJQYWdlIiwiYm9yZGVyUmFkaXVzIiwiYmciLCJwIiwibWIiLCJhbGlnbiIsImRpc3BsYXkiLCJtZCIsImZsZXhHcm93IiwiYXMiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});