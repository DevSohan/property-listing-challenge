"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/PropertyCard.tsx":
/*!*****************************************!*\
  !*** ./app/components/PropertyCard.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_Store_propertiesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Store/propertiesSlice */ \"(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PropertyCard = (param)=>{\n    let { info } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:w-1/2 lg:1/3 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-3 pb-0 bg-white border-b-[1px] border-gray-300 mx-3 mb-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: info === null || info === void 0 ? void 0 : info.title\n                        }, void 0, false, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"cursor-pointer\",\n                            onClick: ()=>dispatch((0,_lib_Store_propertiesSlice__WEBPACK_IMPORTED_MODULE_3__.removeProperty)(info.id))\n                        }, void 0, false, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-3 flex gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/5 bg-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"object-cover h-24\",\n                                src: \"/images/property-placeholder.jpeg\",\n                                alt: info === null || info === void 0 ? void 0 : info.title,\n                                width: 250,\n                                height: 250,\n                                objectFit: \"cover\",\n                                objectPosition: \"center\"\n                            }, void 0, false, {\n                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 49\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-3/5 flex flex-col gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Rooms\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: info === null || info === void 0 ? void 0 : info.rooms\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Plot Size\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                info === null || info === void 0 ? void 0 : info.floor,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: [\n                                                        \"m\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                                            children: \"2\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                                            lineNumber: 40,\n                                                            columnNumber: 51\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 44\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Price\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                info === null || info === void 0 ? void 0 : info.price,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-sm\",\n                                                    children: \"EUR\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 44\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PropertyCard, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = PropertyCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyCard);\nvar _c;\n$RefreshReg$(_c, \"PropertyCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNGO0FBQ0w7QUFDZ0I7QUFDb0I7QUFnQjdELE1BQU1LLGVBQWU7UUFBQyxFQUFFQyxJQUFJLEVBQXNCOztJQUM5QyxNQUFNQyxXQUFXSix3REFBV0E7SUFFNUIscUJBQ0ksOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEO3NDQUFLRixpQkFBQUEsMkJBQUFBLEtBQU1JLEtBQUs7Ozs7OztzQ0FDakIsOERBQUNWLDZFQUFDQTs0QkFBQ1MsV0FBVTs0QkFBaUJFLFNBQVMsSUFBTSxTQUFrQlAsMEVBQWNBLENBQUNFLEtBQUtNLEVBQUU7Ozs7Ozs7Ozs7Ozs4QkFFekYsOERBQUNKO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQWlCLDRFQUFDUixrREFBS0E7Z0NBQUNRLFdBQVU7Z0NBQW9CSSxLQUFJO2dDQUFvQ0MsR0FBRyxFQUFFUixpQkFBQUEsMkJBQUFBLEtBQU1JLEtBQUs7Z0NBQUVLLE9BQU87Z0NBQUtDLFFBQVE7Z0NBQUtDLFdBQVU7Z0NBQVFDLGdCQUFlOzs7Ozs7Ozs7OztzQ0FDekwsOERBQUNWOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFBZ0I7Ozs7OztzREFDL0IsOERBQUNEO3NEQUFLRixpQkFBQUEsMkJBQUFBLEtBQU1hLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FFckIsOERBQUNYO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQWdCOzs7Ozs7c0RBQy9CLDhEQUFDRDs7Z0RBQUtGLGlCQUFBQSwyQkFBQUEsS0FBTWMsS0FBSztnREFBQzs4REFBQyw4REFBQ0M7O3dEQUFLO3NFQUFDLDhEQUFDQztzRUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUVuQyw4REFBQ0M7Ozs7OzhDQUNELDhEQUFDZjtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUFnQjs7Ozs7O3NEQUMvQiw4REFBQ0Q7O2dEQUFLRixpQkFBQUEsMkJBQUFBLEtBQU1rQixLQUFLO2dEQUFDOzhEQUFDLDhEQUFDSDtvREFBS1osV0FBVTs4REFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckU7R0EvQk1KOztRQUNlRixvREFBV0E7OztLQUQxQkU7QUFpQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUHJvcGVydHlDYXJkLnRzeD9kZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFggfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyByZW1vdmVQcm9wZXJ0eSB9IGZyb20gJy4uL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UnXG5cblxuaW50ZXJmYWNlIFByb3BlcnR5IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG4gICAgb3duZXI6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgcHJpY2U6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHBsb3RTaXplOiBudW1iZXJcbn1cblxuY29uc3QgUHJvcGVydHlDYXJkID0gKHsgaW5mbyB9OiB7IGluZm86IFByb3BlcnR5IH0pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0xLzIgbGc6MS8zICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTMgcGItMCBiZy13aGl0ZSBib3JkZXItYi1bMXB4XSBib3JkZXItZ3JheS0zMDAgbXgtMyBtYi0zJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXY+e2luZm8/LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IChkaXNwYXRjaCBhcyBhbnkpKHJlbW92ZVByb3BlcnR5KGluZm8uaWQpKX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMyBmbGV4IGdhcC0zJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0yLzUgYmctYmxhY2snPjxJbWFnZSBjbGFzc05hbWU9J29iamVjdC1jb3ZlciBoLTI0JyBzcmM9XCIvaW1hZ2VzL3Byb3BlcnR5LXBsYWNlaG9sZGVyLmpwZWdcIiBhbHQ9e2luZm8/LnRpdGxlfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gb2JqZWN0Rml0PSdjb3Zlcicgb2JqZWN0UG9zaXRpb249J2NlbnRlcicgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0zLzUgZmxleCBmbGV4LWNvbCBnYXAtMSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCc+Um9vbXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2luZm8/LnJvb21zfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwJz5QbG90IFNpemU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2luZm8/LmZsb29yfSA8c3Bhbj5tPHN1cD4yPC9zdXA+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCc+UHJpY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2luZm8/LnByaWNlfSA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20nPkVVUjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlDYXJkXG4iXSwibmFtZXMiOlsiWCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VEaXNwYXRjaCIsInJlbW92ZVByb3BlcnR5IiwiUHJvcGVydHlDYXJkIiwiaW5mbyIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvbkNsaWNrIiwiaWQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwicm9vbXMiLCJmbG9vciIsInNwYW4iLCJzdXAiLCJociIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PropertyCard.tsx\n"));

/***/ })

});