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

/***/ "(app-pages-browser)/./app/components/PropertyListing.tsx":
/*!********************************************!*\
  !*** ./app/components/PropertyListing.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PropertyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyCard */ \"(app-pages-browser)/./app/components/PropertyCard.tsx\");\n/* harmony import */ var _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/backendFetching */ \"(app-pages-browser)/./app/lib/backendFetching.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PropertyListing = ()=>{\n    _s();\n    const properties = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((param)=>{\n        let { properties } = param;\n        return properties;\n    });\n    console.log(properties);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect;\n    const data = (0,_lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.useGetProperties)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const term = searchParams.get(\"query\");\n    const type = searchParams.get(\"type\");\n    const order = searchParams.get(\"order\");\n    let filteredData = [];\n    if (data) {\n        filteredData = data;\n        if (term) {\n            filteredData = filteredData.filter((property)=>property.title.toLowerCase().includes(term.toLowerCase()));\n            console.log(filteredData);\n        }\n        if (type) {\n            filteredData = filteredData.filter((property)=>property.type == type);\n            console.log(filteredData);\n        }\n        if (order) {\n            filteredData = filteredData.sort((a, b)=>{\n                if (order == \"price-asc\") {\n                    return parseInt(a.price) - parseInt(b.price);\n                } else if (order == \"name-asc\") {\n                    return a.title.localeCompare(b.title);\n                } else if (order == \"name-desc\") {\n                    return b.title.localeCompare(a.title);\n                } else {\n                    return parseInt(b.price) - parseInt(a.price);\n                }\n            });\n        }\n    }\n    console.log(filteredData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                lineNumber: 59,\n                columnNumber: 33\n            }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row md:flex-wrap\",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((property)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PropertyCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        info: property\n                    }, property.id, false, {\n                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 29\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(PropertyListing, \"aCcklCAWgNElp+lYxSpw/aI582Q=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.useGetProperties,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = PropertyListing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyListing);\nvar _c;\n$RefreshReg$(_c, \"PropertyListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5TGlzdGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1RDtBQUNkO0FBQ2dCO0FBQ1I7QUFDUjtBQUl6QyxNQUFNTyxrQkFBa0I7O0lBQ3BCLE1BQU1DLGFBQWFGLHdEQUFXQSxDQUFDO1lBQUMsRUFBQ0UsVUFBVSxFQUEyQjtlQUFLQTs7SUFFM0VDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWk4sNENBQVNBO0lBRVQsTUFBTVMsT0FBT1Asc0VBQWdCQTtJQUU3QixNQUFNUSxlQUFlUCxnRUFBZUE7SUFDcEMsTUFBTVEsT0FBT0QsYUFBYUUsR0FBRyxDQUFDO0lBQzlCLE1BQU1DLE9BQU9ILGFBQWFFLEdBQUcsQ0FBQztJQUM5QixNQUFNRSxRQUFRSixhQUFhRSxHQUFHLENBQUM7SUFFL0IsSUFBSUcsZUFBMEIsRUFBRTtJQUVoQyxJQUFHTixNQUFLO1FBQ0pNLGVBQWVOO1FBQ2YsSUFBR0UsTUFBSztZQUNKSSxlQUFlQSxhQUFjQyxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1QsS0FBS1EsV0FBVztZQUN4R1osUUFBUUMsR0FBRyxDQUFDTztRQUNoQjtRQUVBLElBQUdGLE1BQUs7WUFDSkUsZUFBZUEsYUFBY0MsTUFBTSxDQUFDLENBQUNDLFdBQWFBLFNBQVNKLElBQUksSUFBSUE7WUFDbkVOLFFBQVFDLEdBQUcsQ0FBQ087UUFDaEI7UUFDQSxJQUFHRCxPQUFNO1lBQ0xDLGVBQWVBLGFBQWNNLElBQUksQ0FBQyxDQUFDQyxHQUFHQztnQkFDbEMsSUFBR1QsU0FBUyxhQUFZO29CQUNwQixPQUFPVSxTQUFTRixFQUFFRyxLQUFLLElBQUlELFNBQVNELEVBQUVFLEtBQUs7Z0JBQy9DLE9BQU8sSUFBR1gsU0FBUyxZQUFXO29CQUMxQixPQUFPUSxFQUFFSixLQUFLLENBQUNRLGFBQWEsQ0FBQ0gsRUFBRUwsS0FBSztnQkFDeEMsT0FBTSxJQUFHSixTQUFTLGFBQVk7b0JBQzFCLE9BQU9TLEVBQUVMLEtBQUssQ0FBQ1EsYUFBYSxDQUFDSixFQUFFSixLQUFLO2dCQUN4QyxPQUNJO29CQUNBLE9BQU9NLFNBQVNELEVBQUVFLEtBQUssSUFBSUQsU0FBU0YsRUFBRUcsS0FBSztnQkFDL0M7WUFDSjtRQUNKO0lBQ0o7SUFDQWxCLFFBQVFDLEdBQUcsQ0FBQ087SUFLWixxQkFDSTtrQkFDSSw0RUFBQ2hCLDJDQUFRQTtZQUFDNEIsd0JBQVUsOERBQUNDOzBCQUFJOzs7Ozs7c0JBQ3JCLDRFQUFDQTtnQkFBSUMsV0FBVTswQkFFUGQseUJBQUFBLG1DQUFBQSxhQUFjZSxHQUFHLENBQUMsQ0FBQ2IseUJBQ2YsOERBQUNoQixxREFBWUE7d0JBQW1COEIsTUFBTWQ7dUJBQW5CQSxTQUFTZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBNURNM0I7O1FBQ2lCRCxvREFBV0E7UUFNakJGLGtFQUFnQkE7UUFFUkMsNERBQWVBOzs7S0FUbENFO0FBOEROLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5TGlzdGluZy50c3g/YmJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCB1c2UsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BlcnR5Q2FyZCBmcm9tICcuL1Byb3BlcnR5Q2FyZCdcbmltcG9ydCB7IHVzZUdldFByb3BlcnRpZXMgfSBmcm9tICcuLi9saWIvYmFja2VuZEZldGNoaW5nJ1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSAnLi4vbGliL1N0b3JlL3Byb3BlcnRpZXNTbGljZSdcblxuXG5jb25zdCBQcm9wZXJ0eUxpc3RpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHVzZVNlbGVjdG9yKCh7cHJvcGVydGllc306IHtwcm9wZXJ0aWVzOiBQcm9wZXJ0eVtdfSkgPT4gcHJvcGVydGllcylcblxuICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpXG5cbiAgICB1c2VFZmZlY3RcblxuICAgIGNvbnN0IGRhdGEgPSB1c2VHZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hQYXJhbXMuZ2V0KCdxdWVyeScpXG4gICAgY29uc3QgdHlwZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKVxuICAgIGNvbnN0IG9yZGVyID0gc2VhcmNoUGFyYW1zLmdldCgnb3JkZXInKVxuXG4gICAgbGV0IGZpbHRlcmVkRGF0YTpQcm9wZXJ0eVtdID0gW11cblxuICAgIGlmKGRhdGEpe1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBkYXRhXG4gICAgICAgIGlmKHRlcm0pe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGUpe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS50eXBlID09IHR5cGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgaWYob3JkZXIpe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYob3JkZXIgPT0gJ3ByaWNlLWFzYycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYS5wcmljZSkgLSBwYXJzZUludChiLnByaWNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcmRlciA9PSBcIm5hbWUtYXNjXCIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob3JkZXIgPT0gXCJuYW1lLWRlc2NcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIucHJpY2UpIC0gcGFyc2VJbnQoYS5wcmljZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSlcblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6ZmxleC13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWREYXRhPy5tYXAoKHByb3BlcnR5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3BlcnR5Q2FyZCBrZXk9e3Byb3BlcnR5LmlkfSBpbmZvPXtwcm9wZXJ0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlMaXN0aW5nXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsIlByb3BlcnR5Q2FyZCIsInVzZUdldFByb3BlcnRpZXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VTZWxlY3RvciIsIlByb3BlcnR5TGlzdGluZyIsInByb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNlYXJjaFBhcmFtcyIsInRlcm0iLCJnZXQiLCJ0eXBlIiwib3JkZXIiLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50IiwicHJpY2UiLCJsb2NhbGVDb21wYXJlIiwiZmFsbGJhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmZvIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PropertyListing.tsx\n"));

/***/ })

});