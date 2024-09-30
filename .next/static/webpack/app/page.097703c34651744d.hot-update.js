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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/backendFetching */ \"(app-pages-browser)/./app/lib/backendFetching.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PropertyCard = (param)=>{\n    let { info } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const handleDelete = (e)=>{\n        dispatch((0,_lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.removeProperty)(info.id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:w-1/4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-3 pb-0 bg-white border-b-[1px] border-gray-300 mx-3 mb-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: info === null || info === void 0 ? void 0 : info.title\n                        }, void 0, false, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"cursor-pointer\",\n                            onClick: handleDelete\n                        }, void 0, false, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-3 flex gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/5 bg-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"object-cover h-24\",\n                                src: \"/images/property-placeholder.jpeg\",\n                                alt: info === null || info === void 0 ? void 0 : info.title,\n                                width: 250,\n                                height: 250,\n                                objectFit: \"cover\",\n                                objectPosition: \"center\"\n                            }, void 0, false, {\n                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 49\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-3/5 flex flex-col gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Rooms\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: info === null || info === void 0 ? void 0 : info.rooms\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Plot Size\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                info === null || info === void 0 ? void 0 : info.floor,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: [\n                                                        \"m\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                                            children: \"2\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                                            lineNumber: 42,\n                                                            columnNumber: 51\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 44\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Price\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                info === null || info === void 0 ? void 0 : info.price,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-sm\",\n                                                    children: \"EUR\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 44\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyCard.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PropertyCard, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = PropertyCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyCard);\nvar _c;\n$RefreshReg$(_c, \"PropertyCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNGO0FBQ0w7QUFDOEI7QUFDZDtBQWdCekMsTUFBTUssZUFBZTtRQUFDLEVBQUVDLElBQUksRUFBc0I7O0lBQzlDLE1BQU1DLFdBQVdILHdEQUFXQTtJQUM1QixNQUFNSSxlQUFlLENBQUNDO1FBQ2pCRixTQUFpQkosb0VBQWNBLENBQUNHLEtBQUtJLEVBQUU7SUFDNUM7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDZiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7c0NBQUtMLGlCQUFBQSwyQkFBQUEsS0FBTU8sS0FBSzs7Ozs7O3NDQUNqQiw4REFBQ2IsNkVBQUNBOzRCQUFDWSxXQUFVOzRCQUFpQkUsU0FBU047Ozs7Ozs7Ozs7Ozs4QkFFM0MsOERBQUNHO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQWlCLDRFQUFDWCxrREFBS0E7Z0NBQUNXLFdBQVU7Z0NBQW9CRyxLQUFJO2dDQUFvQ0MsR0FBRyxFQUFFVixpQkFBQUEsMkJBQUFBLEtBQU1PLEtBQUs7Z0NBQUVJLE9BQU87Z0NBQUtDLFFBQVE7Z0NBQUtDLFdBQVU7Z0NBQVFDLGdCQUFlOzs7Ozs7Ozs7OztzQ0FDekwsOERBQUNUOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFBZ0I7Ozs7OztzREFDL0IsOERBQUNEO3NEQUFLTCxpQkFBQUEsMkJBQUFBLEtBQU1lLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FFckIsOERBQUNWO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQWdCOzs7Ozs7c0RBQy9CLDhEQUFDRDs7Z0RBQUtMLGlCQUFBQSwyQkFBQUEsS0FBTWdCLEtBQUs7Z0RBQUM7OERBQUMsOERBQUNDOzt3REFBSztzRUFBQyw4REFBQ0M7c0VBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FFbkMsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ2Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFBZ0I7Ozs7OztzREFDL0IsOERBQUNEOztnREFBS0wsaUJBQUFBLDJCQUFBQSxLQUFNb0IsS0FBSztnREFBQzs4REFBQyw4REFBQ0g7b0RBQUtYLFdBQVU7OERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFO0dBakNNUDs7UUFDZUQsb0RBQVdBOzs7S0FEMUJDO0FBbUNOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5Q2FyZC50c3g/ZGQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW1vdmVQcm9wZXJ0eSB9IGZyb20gJy4uL2xpYi9iYWNrZW5kRmV0Y2hpbmcnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5cbmludGVyZmFjZSBQcm9wZXJ0eSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxuICAgIG93bmVyOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHByaWNlOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBwbG90U2l6ZTogbnVtYmVyXG59XG5cbmNvbnN0IFByb3BlcnR5Q2FyZCA9ICh7IGluZm8gfTogeyBpbmZvOiBQcm9wZXJ0eSB9KSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgICAgKGRpc3BhdGNoIGFzIGFueSkocmVtb3ZlUHJvcGVydHkoaW5mby5pZCkpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0xLzQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0zIHBiLTAgYmctd2hpdGUgYm9yZGVyLWItWzFweF0gYm9yZGVyLWdyYXktMzAwIG14LTMgbWItMyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2PntpbmZvPy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGV9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTMgZmxleCBnYXAtMyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMi81IGJnLWJsYWNrJz48SW1hZ2UgY2xhc3NOYW1lPSdvYmplY3QtY292ZXIgaC0yNCcgc3JjPVwiL2ltYWdlcy9wcm9wZXJ0eS1wbGFjZWhvbGRlci5qcGVnXCIgYWx0PXtpbmZvPy50aXRsZX0gd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9IG9iamVjdEZpdD0nY292ZXInIG9iamVjdFBvc2l0aW9uPSdjZW50ZXInIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMy81IGZsZXggZmxleC1jb2wgZ2FwLTEnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAnPlJvb21zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpbmZvPy5yb29tc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCc+UGxvdCBTaXplPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpbmZvPy5mbG9vcn0gPHNwYW4+bTxzdXA+Mjwvc3VwPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAnPlByaWNlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpbmZvPy5wcmljZX0gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtJz5FVVI8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5Q2FyZFxuIl0sIm5hbWVzIjpbIlgiLCJJbWFnZSIsIlJlYWN0IiwicmVtb3ZlUHJvcGVydHkiLCJ1c2VEaXNwYXRjaCIsIlByb3BlcnR5Q2FyZCIsImluZm8iLCJkaXNwYXRjaCIsImhhbmRsZURlbGV0ZSIsImUiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJyb29tcyIsImZsb29yIiwic3BhbiIsInN1cCIsImhyIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PropertyCard.tsx\n"));

/***/ })

});