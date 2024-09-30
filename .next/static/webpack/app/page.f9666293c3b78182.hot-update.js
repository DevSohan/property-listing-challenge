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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PropertyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyCard */ \"(app-pages-browser)/./app/components/PropertyCard.tsx\");\n/* harmony import */ var _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/backendFetching */ \"(app-pages-browser)/./app/lib/backendFetching.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_Store_propertiesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/Store/propertiesSlice */ \"(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PropertyListing = ()=>{\n    _s();\n    const properties = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((param)=>{\n        let { properties } = param;\n        return properties;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_lib_Store_propertiesSlice__WEBPACK_IMPORTED_MODULE_5__.fetchProperties)());\n    }, []);\n    const data = (0,_lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.useGetProperties)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)();\n    const term = searchParams.get(\"query\");\n    const type = searchParams.get(\"type\");\n    const order = searchParams.get(\"order\");\n    let filteredData = [];\n    if (properties.length > 0) {\n        filteredData = properties;\n        if (term) {\n            filteredData = filteredData.filter((property)=>property.title.toLowerCase().includes(term.toLowerCase()));\n            console.log(filteredData);\n        }\n        if (type) {\n            filteredData = filteredData.filter((property)=>property.type == type);\n            console.log(filteredData);\n        }\n        if (order) {\n            filteredData = filteredData.sort((a, b)=>{\n                if (order == \"price-asc\") {\n                    return parseInt(a.price) - parseInt(b.price);\n                } else if (order == \"name-asc\") {\n                    return a.title.localeCompare(b.title);\n                } else if (order == \"name-desc\") {\n                    return b.title.localeCompare(a.title);\n                } else {\n                    return parseInt(b.price) - parseInt(a.price);\n                }\n            });\n        }\n    }\n    console.log(properties);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                lineNumber: 61,\n                columnNumber: 33\n            }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row md:flex-wrap\",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((property)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PropertyCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        info: property\n                    }, property.id, false, {\n                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 29\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(PropertyListing, \"wDmdRwz/I8ZeTJjgxKJNk2alFZw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.useGetProperties,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSearchParams\n    ];\n});\n_c = PropertyListing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyListing);\nvar _c;\n$RefreshReg$(_c, \"PropertyListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5TGlzdGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDZDtBQUNnQjtBQUNSO0FBQ0s7QUFDaUM7QUFHdkYsTUFBTVMsa0JBQWtCOztJQUNwQixNQUFNQyxhQUFhSCx3REFBV0EsQ0FBQztZQUFDLEVBQUNHLFVBQVUsRUFBMkI7ZUFBS0E7O0lBQzNFLE1BQU1DLFdBQVdMLHdEQUFXQTtJQUU1QkosZ0RBQVNBLENBQUM7UUFDTlMsU0FBU0gsMkVBQWVBO0lBQzVCLEdBQUcsRUFBRTtJQUdMLE1BQU1JLE9BQU9SLHNFQUFnQkE7SUFFN0IsTUFBTVMsZUFBZVIsZ0VBQWVBO0lBQ3BDLE1BQU1TLE9BQU9ELGFBQWFFLEdBQUcsQ0FBQztJQUM5QixNQUFNQyxPQUFPSCxhQUFhRSxHQUFHLENBQUM7SUFDOUIsTUFBTUUsUUFBUUosYUFBYUUsR0FBRyxDQUFDO0lBRS9CLElBQUlHLGVBQTBCLEVBQUU7SUFFaEMsSUFBR1IsV0FBV1MsTUFBTSxHQUFHLEdBQUU7UUFDckJELGVBQWVSO1FBQ2YsSUFBR0ksTUFBSztZQUNKSSxlQUFlQSxhQUFjRSxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1YsS0FBS1MsV0FBVztZQUN4R0UsUUFBUUMsR0FBRyxDQUFDUjtRQUNoQjtRQUVBLElBQUdGLE1BQUs7WUFDSkUsZUFBZUEsYUFBY0UsTUFBTSxDQUFDLENBQUNDLFdBQWFBLFNBQVNMLElBQUksSUFBSUE7WUFDbkVTLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDaEI7UUFDQSxJQUFHRCxPQUFNO1lBQ0xDLGVBQWVBLGFBQWNTLElBQUksQ0FBQyxDQUFDQyxHQUFHQztnQkFDbEMsSUFBR1osU0FBUyxhQUFZO29CQUNwQixPQUFPYSxTQUFTRixFQUFFRyxLQUFLLElBQUlELFNBQVNELEVBQUVFLEtBQUs7Z0JBQy9DLE9BQU8sSUFBR2QsU0FBUyxZQUFXO29CQUMxQixPQUFPVyxFQUFFTixLQUFLLENBQUNVLGFBQWEsQ0FBQ0gsRUFBRVAsS0FBSztnQkFDeEMsT0FBTSxJQUFHTCxTQUFTLGFBQVk7b0JBQzFCLE9BQU9ZLEVBQUVQLEtBQUssQ0FBQ1UsYUFBYSxDQUFDSixFQUFFTixLQUFLO2dCQUN4QyxPQUNJO29CQUNBLE9BQU9RLFNBQVNELEVBQUVFLEtBQUssSUFBSUQsU0FBU0YsRUFBRUcsS0FBSztnQkFDL0M7WUFDSjtRQUNKO0lBQ0o7SUFDQU4sUUFBUUMsR0FBRyxDQUFDaEI7SUFLWixxQkFDSTtrQkFDSSw0RUFBQ1QsMkNBQVFBO1lBQUNnQyx3QkFBVSw4REFBQ0M7MEJBQUk7Ozs7OztzQkFDckIsNEVBQUNBO2dCQUFJQyxXQUFVOzBCQUVQakIseUJBQUFBLG1DQUFBQSxhQUFja0IsR0FBRyxDQUFDLENBQUNmLHlCQUNmLDhEQUFDbEIscURBQVlBO3dCQUFtQmtDLE1BQU1oQjt1QkFBbkJBLFNBQVNpQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBOURNN0I7O1FBQ2lCRixvREFBV0E7UUFDYkQsb0RBQVdBO1FBT2ZGLGtFQUFnQkE7UUFFUkMsNERBQWVBOzs7S0FYbENJO0FBZ0VOLCtEQUFlQSxlQUFlQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5TGlzdGluZy50c3g/YmJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCB1c2UsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BlcnR5Q2FyZCBmcm9tICcuL1Byb3BlcnR5Q2FyZCdcbmltcG9ydCB7IHVzZUdldFByb3BlcnRpZXMgfSBmcm9tICcuLi9saWIvYmFja2VuZEZldGNoaW5nJ1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBQcm9wZXJ0eSwgZmV0Y2hQcm9wZXJ0aWVzLCBnZXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vbGliL1N0b3JlL3Byb3BlcnRpZXNTbGljZSdcblxuXG5jb25zdCBQcm9wZXJ0eUxpc3RpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHVzZVNlbGVjdG9yKCh7cHJvcGVydGllc306IHtwcm9wZXJ0aWVzOiBQcm9wZXJ0eVtdfSkgPT4gcHJvcGVydGllcylcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvcGVydGllcygpKVxuICAgIH0sIFtdKVxuXG5cbiAgICBjb25zdCBkYXRhID0gdXNlR2V0UHJvcGVydGllcygpO1xuXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCB0ZXJtID0gc2VhcmNoUGFyYW1zLmdldCgncXVlcnknKVxuICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0eXBlJylcbiAgICBjb25zdCBvcmRlciA9IHNlYXJjaFBhcmFtcy5nZXQoJ29yZGVyJylcblxuICAgIGxldCBmaWx0ZXJlZERhdGE6UHJvcGVydHlbXSA9IFtdXG5cbiAgICBpZihwcm9wZXJ0aWVzLmxlbmd0aCA+IDApe1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmKHRlcm0pe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0udG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGUpe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS50eXBlID09IHR5cGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgaWYob3JkZXIpe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYob3JkZXIgPT0gJ3ByaWNlLWFzYycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYS5wcmljZSkgLSBwYXJzZUludChiLnByaWNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvcmRlciA9PSBcIm5hbWUtYXNjXCIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob3JkZXIgPT0gXCJuYW1lLWRlc2NcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIucHJpY2UpIC0gcGFyc2VJbnQoYS5wcmljZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmZsZXgtd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YT8ubWFwKChwcm9wZXJ0eSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUNhcmQga2V5PXtwcm9wZXJ0eS5pZH0gaW5mbz17cHJvcGVydHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5TGlzdGluZ1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJQcm9wZXJ0eUNhcmQiLCJ1c2VHZXRQcm9wZXJ0aWVzIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImZldGNoUHJvcGVydGllcyIsIlByb3BlcnR5TGlzdGluZyIsInByb3BlcnRpZXMiLCJkaXNwYXRjaCIsImRhdGEiLCJzZWFyY2hQYXJhbXMiLCJ0ZXJtIiwiZ2V0IiwidHlwZSIsIm9yZGVyIiwiZmlsdGVyZWREYXRhIiwibGVuZ3RoIiwiZmlsdGVyIiwicHJvcGVydHkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwic29ydCIsImEiLCJiIiwicGFyc2VJbnQiLCJwcmljZSIsImxvY2FsZUNvbXBhcmUiLCJmYWxsYmFjayIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZm8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PropertyListing.tsx\n"));

/***/ })

});