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

/***/ "(app-pages-browser)/./app/components/Search.tsx":
/*!***********************************!*\
  !*** ./app/components/Search.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_PlusIcon_SearchIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=PlusIcon,SearchIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_PlusIcon_SearchIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=PlusIcon,SearchIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaCaretDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaCaretDown!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _AddProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProperty */ \"(app-pages-browser)/./app/components/AddProperty.tsx\");\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-debounce */ \"(app-pages-browser)/./node_modules/use-debounce/dist/index.module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const [openAddProperty, setOpenAddProperty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showPropertyAddForm = (e)=>{\n        e.preventDefault();\n        setOpenAddProperty(!openAddProperty);\n    };\n    const handleSearch = (0,use_debounce__WEBPACK_IMPORTED_MODULE_3__.useDebouncedCallback)((SearchTerms)=>{}, 300);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-10 md:px-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"md:flex gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        className: \"w-full md:w-3/6 relative flex gap-4 pb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusIcon_SearchIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1 text-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        onChange: (e)=>{\n                                            var _searchParams_get, _searchParams_get1;\n                                            return handleSearch(e.target.value, (_searchParams_get = searchParams.get(\"type\")) !== null && _searchParams_get !== void 0 ? _searchParams_get : \"\", (_searchParams_get1 = searchParams.get(\"order\")) !== null && _searchParams_get1 !== void 0 ? _searchParams_get1 : \"\");\n                                        },\n                                        placeholder: \"Search\",\n                                        type: \"text\",\n                                        name: \"search\",\n                                        className: \"h-10 w-full pl-8 md:text-lg py-1 rounded\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: showPropertyAddForm,\n                                className: \"flex md:hidden items-center gap-2 bg-red-500 py-2 px-3 rounded text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusIcon_SearchIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-base\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        className: \"flex md:w-3/6 flex-row gap-10 justify-between items-center  pb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row gap-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row gap-2 items-center relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Type:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                onChange: (e)=>{\n                                                    var _searchParams_get, _searchParams_get1;\n                                                    return handleSearch((_searchParams_get = searchParams.get(\"query\")) !== null && _searchParams_get !== void 0 ? _searchParams_get : \"\", e.target.value, (_searchParams_get1 = searchParams.get(\"order\")) !== null && _searchParams_get1 !== void 0 ? _searchParams_get1 : \"\");\n                                                },\n                                                className: \"bg-transparent appearance-none block px-0 pr-6 relative\",\n                                                name: \"type\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"all\",\n                                                        children: \"All\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"house\",\n                                                        children: \"House\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"apartment\",\n                                                        children: \"Apartment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"pointer-events-none h-full absolute right-0 flex items-center  text-gray-700\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCaretDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCaretDown, {}, void 0, false, {\n                                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row gap-2 items-center relative\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                onChange: (e)=>{\n                                                    var _searchParams_get, _searchParams_get1;\n                                                    return handleSearch((_searchParams_get = searchParams.get(\"query\")) !== null && _searchParams_get !== void 0 ? _searchParams_get : \"\", (_searchParams_get1 = searchParams.get(\"type\")) !== null && _searchParams_get1 !== void 0 ? _searchParams_get1 : \"\", e.target.value);\n                                                },\n                                                className: \"bg-transparent appearance-none block px-0 pr-6 relative\",\n                                                name: \"order\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"price-desc\",\n                                                        children: \"Price descending\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"price-asc\",\n                                                        children: \"Price ascending\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"name-asc\",\n                                                        children: \"Name ascending\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"name-desc\",\n                                                        children: \"Name descending\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"pointer-events-none h-full absolute right-0 flex items-center  text-gray-700\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCaretDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCaretDown, {}, void 0, false, {\n                                                    fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: showPropertyAddForm,\n                                className: \"hidden md:flex items-center gap-2 bg-red-500 py-2 px-3 rounded text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PlusIcon_SearchIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-base\",\n                                        children: \"Add Property\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-gray-300\"\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            openAddProperty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setOpenAddProperty: setOpenAddProperty,\n                openAddProperty: openAddProperty\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n                lineNumber: 71,\n                columnNumber: 33\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/Search.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Search, \"YHBzW8bvFzjjEdPlZJGBUyWkJeA=\", false, function() {\n    return [\n        use_debounce__WEBPACK_IMPORTED_MODULE_3__.useDebouncedCallback\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDeUQ7QUFDbEI7QUFDSztBQUNMO0FBQ1k7QUFLbkQsTUFBTU8sU0FBUzs7SUFDWCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZELE1BQU1PLHNCQUFzQixDQUFDQztRQUN6QkEsRUFBRUMsY0FBYztRQUNoQkgsbUJBQW1CLENBQUNEO0lBQ3hCO0lBRUEsTUFBTUssZUFBZVAsa0VBQW9CQSxDQUFDLENBQUNRLGVBRXpDLEdBQUc7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFLRCxXQUFVOztrQ0FDWiw4REFBQ0U7d0JBQVNGLFdBQVU7OzBDQUNoQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDZiwrRkFBVUE7d0NBQUNlLFdBQVU7Ozs7OztrREFDdEIsOERBQUNHO3dDQUFNQyxVQUFVLENBQUNUO2dEQUFtQ1UsbUJBQStCQTttREFBNURSLGFBQWFGLEVBQUVXLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFRixDQUFBQSxvQkFBQUEsYUFBYUcsR0FBRyxDQUFDLHFCQUFqQkgsK0JBQUFBLG9CQUEyQixJQUFJQSxDQUFBQSxxQkFBQUEsYUFBYUcsR0FBRyxDQUFDLHNCQUFqQkgsZ0NBQUFBLHFCQUE2Qjt3Q0FBRTt3Q0FBR0ksYUFBWTt3Q0FBU0MsTUFBSzt3Q0FBT0MsTUFBSzt3Q0FBU1gsV0FBVTs7Ozs7Ozs7Ozs7OzBDQUVuTCw4REFBQ1k7Z0NBQVFDLFNBQVNuQjtnQ0FBcUJNLFdBQVU7O2tEQUM3Qyw4REFBQ2hCLCtGQUFRQTs7Ozs7a0RBQ1QsOERBQUM4Qjt3Q0FBS2QsV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdwQyw4REFBQ0U7d0JBQVNGLFdBQVU7OzBDQUNoQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNjOzBEQUFLOzs7Ozs7MERBQ04sOERBQUNDO2dEQUFPWCxVQUFVLENBQUNUO3dEQUFtQlUsbUJBQWlEQTsyREFBOURSLGFBQWFRLENBQUFBLG9CQUFBQSxhQUFhRyxHQUFHLENBQUMsc0JBQWpCSCwrQkFBQUEsb0JBQTZCLElBQUlWLEVBQUVXLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFRixDQUFBQSxxQkFBQUEsYUFBYUcsR0FBRyxDQUFDLHNCQUFqQkgsZ0NBQUFBLHFCQUE2QjtnREFBRTtnREFBR0wsV0FBVTtnREFBMERXLE1BQUs7O2tFQUM5TCw4REFBQ0s7d0RBQU9ULE9BQU07a0VBQU07Ozs7OztrRUFDcEIsOERBQUNTO3dEQUFPVCxPQUFNO2tFQUFROzs7Ozs7a0VBQ3RCLDhEQUFDUzt3REFBT1QsT0FBTTtrRUFBWTs7Ozs7Ozs7Ozs7OzBEQUc5Qiw4REFBQ087Z0RBQUtkLFdBQVU7MERBQ1IsNEVBQUNaLDBGQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztrREFHeEIsOERBQUNXO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2U7Z0RBQU9YLFVBQVUsQ0FBQ1Q7d0RBQW1CVSxtQkFBaUNBOzJEQUE5Q1IsYUFBYVEsQ0FBQUEsb0JBQUFBLGFBQWFHLEdBQUcsQ0FBQyxzQkFBakJILCtCQUFBQSxvQkFBNkIsSUFBSUEsQ0FBQUEscUJBQUFBLGFBQWFHLEdBQUcsQ0FBQyxxQkFBakJILGdDQUFBQSxxQkFBNEIsSUFBSVYsRUFBRVcsTUFBTSxDQUFDQyxLQUFLO2dEQUFBO2dEQUFHUCxXQUFVO2dEQUEwRFcsTUFBSzs7a0VBQzdMLDhEQUFDSzt3REFBT1QsT0FBTTtrRUFBYTs7Ozs7O2tFQUMzQiw4REFBQ1M7d0RBQU9ULE9BQU07a0VBQVk7Ozs7OztrRUFDMUIsOERBQUNTO3dEQUFPVCxPQUFNO2tFQUFXOzs7Ozs7a0VBQ3pCLDhEQUFDUzt3REFBT1QsT0FBTTtrRUFBWTs7Ozs7Ozs7Ozs7OzBEQUc5Qiw4REFBQ087Z0RBQUtkLFdBQVU7MERBQ1IsNEVBQUNaLDBGQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJNUIsOERBQUN3QjtnQ0FBT0MsU0FBU25CO2dDQUFxQk0sV0FBVTs7a0RBQzVDLDhEQUFDaEIsK0ZBQVFBOzs7OztrREFDVCw4REFBQzhCO3dDQUFLZCxXQUFVO2tEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3hDLDhEQUFDaUI7Z0JBQUdqQixXQUFVOzs7Ozs7WUFDYlIsaUNBQW1CLDhEQUFDSCxvREFBV0E7Z0JBQUNJLG9CQUFvQkE7Z0JBQW9CRCxpQkFBaUJBOzs7Ozs7Ozs7Ozs7QUFHdEc7R0EvRE1EOztRQVFtQkQsOERBQW9CQTs7O0tBUnZDQztBQWlFTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TZWFyY2gudHN4P2Y0YTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IFBsdXMsIFBsdXNJY29uLCBTZWFyY2hJY29uIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGYUNhcmV0RG93biB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IEFkZFByb3BlcnR5IGZyb20gJy4vQWRkUHJvcGVydHknXG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gJ3VzZS1kZWJvdW5jZSdcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IE9yZGVyLCBTZWFyY2hUZXJtcywgVHlwZSB9IGZyb20gJy4uL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UnXG5cblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IFtvcGVuQWRkUHJvcGVydHksIHNldE9wZW5BZGRQcm9wZXJ0eV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHNob3dQcm9wZXJ0eUFkZEZvcm0gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldE9wZW5BZGRQcm9wZXJ0eSghb3BlbkFkZFByb3BlcnR5KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IHVzZURlYm91bmNlZENhbGxiYWNrKChTZWFyY2hUZXJtcykgPT4ge1xuXG4gICAgICB9LCAzMDApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMTAgbWQ6cHgtMyc+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J21kOmZsZXggZ2FwLTEwJz5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0zLzYgcmVsYXRpdmUgZmxleCBnYXAtNCBwYi00Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9J3ctNCBoLTQgYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGxlZnQtMSB0ZXh0LWdyYXktNDAwJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2goZS50YXJnZXQudmFsdWUsIHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKT8/IFwiXCIsIHNlYXJjaFBhcmFtcy5nZXQoJ29yZGVyJykgPz8gXCJcIil9IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPSdzZWFyY2gnIGNsYXNzTmFtZT0naC0xMCB3LWZ1bGwgcGwtOCBtZDp0ZXh0LWxnIHB5LTEgcm91bmRlZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e3Nob3dQcm9wZXJ0eUFkZEZvcm19IGNsYXNzTmFtZT0nZmxleCBtZDpoaWRkZW4gaXRlbXMtY2VudGVyIGdhcC0yIGJnLXJlZC01MDAgcHktMiBweC0zIHJvdW5kZWQgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1iYXNlJz5BZGQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT0nZmxleCBtZDp3LTMvNiBmbGV4LXJvdyBnYXAtMTAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAgcGItNCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtMiBpdGVtcy1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlR5cGU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2goc2VhcmNoUGFyYW1zLmdldCgncXVlcnknKSA/PyBcIlwiLCBlLnRhcmdldC52YWx1ZSwgc2VhcmNoUGFyYW1zLmdldCgnb3JkZXInKSA/PyBcIlwiKX0gY2xhc3NOYW1lPSdiZy10cmFuc3BhcmVudCBhcHBlYXJhbmNlLW5vbmUgYmxvY2sgcHgtMCBwci02IHJlbGF0aXZlJyBuYW1lPVwidHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJob3VzZVwiPkhvdXNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhcGFydG1lbnRcIj5BcGFydG1lbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgaC1mdWxsIGFic29sdXRlIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhcmV0RG93biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0yIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaChzZWFyY2hQYXJhbXMuZ2V0KCdxdWVyeScpID8/IFwiXCIsIHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKSA/PyBcIlwiLCBlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT0nYmctdHJhbnNwYXJlbnQgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHB4LTAgcHItNiByZWxhdGl2ZScgbmFtZT1cIm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZS1kZXNjXCI+UHJpY2UgZGVzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2UtYXNjXCI+UHJpY2UgYXNjZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lLWFzY1wiPk5hbWUgYXNjZW5kaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lLWRlc2NcIj5OYW1lIGRlc2NlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgaC1mdWxsIGFic29sdXRlIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNhcmV0RG93biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd1Byb3BlcnR5QWRkRm9ybX0gY2xhc3NOYW1lPSdoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctcmVkLTUwMCBweS0yIHB4LTMgcm91bmRlZCB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWJhc2UnPkFkZCBQcm9wZXJ0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0nYm9yZGVyLWdyYXktMzAwJyAvPlxuICAgICAgICAgICAge29wZW5BZGRQcm9wZXJ0eSAmJiA8QWRkUHJvcGVydHkgc2V0T3BlbkFkZFByb3BlcnR5PXtzZXRPcGVuQWRkUHJvcGVydHl9IG9wZW5BZGRQcm9wZXJ0eT17b3BlbkFkZFByb3BlcnR5fSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcbiJdLCJuYW1lcyI6WyJQbHVzSWNvbiIsIlNlYXJjaEljb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiRmFDYXJldERvd24iLCJBZGRQcm9wZXJ0eSIsInVzZURlYm91bmNlZENhbGxiYWNrIiwiU2VhcmNoIiwib3BlbkFkZFByb3BlcnR5Iiwic2V0T3BlbkFkZFByb3BlcnR5Iiwic2hvd1Byb3BlcnR5QWRkRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVNlYXJjaCIsIlNlYXJjaFRlcm1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImZpZWxkc2V0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInNlYXJjaFBhcmFtcyIsInRhcmdldCIsInZhbHVlIiwiZ2V0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwic2VsZWN0Iiwib3B0aW9uIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Search.tsx\n"));

/***/ })

});