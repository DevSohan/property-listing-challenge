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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PropertyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyCard */ \"(app-pages-browser)/./app/components/PropertyCard.tsx\");\n/* harmony import */ var _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/backendFetching */ \"(app-pages-browser)/./app/lib/backendFetching.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _lib_Store_propertiesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Store/propertiesSlice */ \"(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PropertyListing = ()=>{\n    _s();\n    const properties = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((param)=>{\n        let { properties } = param;\n        return properties;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const searchParams = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((param)=>{\n        let { searchTerms } = param;\n        return searchTerms;\n    });\n    console.log(searchParams);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_lib_Store_propertiesSlice__WEBPACK_IMPORTED_MODULE_4__.fetchProperties)());\n    }, []);\n    const data = (0,_lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.useGetProperties)();\n    let filteredData = [];\n    if (properties.length > 0) {\n        filteredData = properties;\n        if (searchParams.text) {\n            filteredData = filteredData.filter((property)=>property.title.toLowerCase().includes(searchParams.text.toLowerCase()));\n            console.log(filteredData);\n        }\n        if (searchParams.type !== \"\") {\n            filteredData = filteredData.filter((property)=>property.type == searchParams.type);\n            console.log(filteredData);\n        }\n        if (searchParams.order) {\n            filteredData = filteredData.sort((a, b)=>{\n                if (searchParams.order == \"price-asc\") {\n                    return parseInt(a.price) - parseInt(b.price);\n                } else if (searchParams.order == \"name-asc\") {\n                    return a.title.localeCompare(b.title);\n                } else if (searchParams.order == \"name-desc\") {\n                    return b.title.localeCompare(a.title);\n                } else {\n                    return parseInt(b.price) - parseInt(a.price);\n                }\n            });\n        }\n    }\n    console.log(properties);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                lineNumber: 59,\n                columnNumber: 33\n            }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row md:flex-wrap\",\n                children: filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((property)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PropertyCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        info: property\n                    }, property.id, false, {\n                        fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 29\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/msr/Desktop/Projects/React-Challange/property-listing-challenge/app/components/PropertyListing.tsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(PropertyListing, \"FyR8ADgAKF6rAe6FT3wLHNWxfrs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _lib_backendFetching__WEBPACK_IMPORTED_MODULE_3__.useGetProperties\n    ];\n});\n_c = PropertyListing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyListing);\nvar _c;\n$RefreshReg$(_c, \"PropertyListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb3BlcnR5TGlzdGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1RDtBQUNkO0FBQ2dCO0FBRUg7QUFDK0I7QUFHckYsTUFBTVEsa0JBQWtCOztJQUNwQixNQUFNQyxhQUFhSCx3REFBV0EsQ0FBQztZQUFDLEVBQUNHLFVBQVUsRUFBMkI7ZUFBS0E7O0lBQzNFLE1BQU1DLFdBQVdMLHdEQUFXQTtJQUU1QixNQUFNTSxlQUFlTCx3REFBV0EsQ0FBQztZQUFDLEVBQUNNLFdBQVcsRUFBNkI7ZUFBS0E7O0lBQ2hGQyxRQUFRQyxHQUFHLENBQUNIO0lBRVpULGdEQUFTQSxDQUFDO1FBQ0xRLFNBQWlCSCwyRUFBZUE7SUFDckMsR0FBRyxFQUFFO0lBR0wsTUFBTVEsT0FBT1gsc0VBQWdCQTtJQUU3QixJQUFJWSxlQUEwQixFQUFFO0lBRWhDLElBQUdQLFdBQVdRLE1BQU0sR0FBRyxHQUFFO1FBQ3JCRCxlQUFlUDtRQUNmLElBQUdFLGFBQWFPLElBQUksRUFBQztZQUNqQkYsZUFBZUEsYUFBY0csTUFBTSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNaLGFBQWFPLElBQUksQ0FBRUksV0FBVztZQUN0SFQsUUFBUUMsR0FBRyxDQUFDRTtRQUNoQjtRQUVBLElBQUdMLGFBQWFhLElBQUksS0FBSyxJQUFHO1lBQ3hCUixlQUFlQSxhQUFjRyxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0ksSUFBSSxJQUFJYixhQUFhYSxJQUFJO1lBQ3BGWCxRQUFRQyxHQUFHLENBQUNFO1FBQ2hCO1FBQ0EsSUFBR0wsYUFBYWMsS0FBSyxFQUFDO1lBQ2xCVCxlQUFlQSxhQUFjVSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7Z0JBQ2xDLElBQUdqQixhQUFhYyxLQUFLLElBQUksYUFBWTtvQkFDakMsT0FBT0ksU0FBU0YsRUFBRUcsS0FBSyxJQUFJRCxTQUFTRCxFQUFFRSxLQUFLO2dCQUMvQyxPQUFPLElBQUduQixhQUFhYyxLQUFLLElBQUksWUFBVztvQkFDdkMsT0FBT0UsRUFBRU4sS0FBSyxDQUFDVSxhQUFhLENBQUNILEVBQUVQLEtBQUs7Z0JBQ3hDLE9BQU0sSUFBR1YsYUFBYWMsS0FBSyxJQUFJLGFBQVk7b0JBQ3ZDLE9BQU9HLEVBQUVQLEtBQUssQ0FBQ1UsYUFBYSxDQUFDSixFQUFFTixLQUFLO2dCQUN4QyxPQUNJO29CQUNBLE9BQU9RLFNBQVNELEVBQUVFLEtBQUssSUFBSUQsU0FBU0YsRUFBRUcsS0FBSztnQkFDL0M7WUFDSjtRQUNKO0lBQ0o7SUFDQWpCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFLWixxQkFDSTtrQkFDSSw0RUFBQ1IsMkNBQVFBO1lBQUMrQix3QkFBVSw4REFBQ0M7MEJBQUk7Ozs7OztzQkFDckIsNEVBQUNBO2dCQUFJQyxXQUFVOzBCQUVQbEIseUJBQUFBLG1DQUFBQSxhQUFjbUIsR0FBRyxDQUFDLENBQUNmLHlCQUNmLDhEQUFDakIscURBQVlBO3dCQUFtQmlDLE1BQU1oQjt1QkFBbkJBLFNBQVNpQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBNURNN0I7O1FBQ2lCRixvREFBV0E7UUFDYkQsb0RBQVdBO1FBRVBDLG9EQUFXQTtRQVFuQkYsa0VBQWdCQTs7O0tBWjNCSTtBQThETiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Qcm9wZXJ0eUxpc3RpbmcudHN4P2JiYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wZXJ0eUNhcmQgZnJvbSAnLi9Qcm9wZXJ0eUNhcmQnXG5pbXBvcnQgeyB1c2VHZXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vbGliL2JhY2tlbmRGZXRjaGluZydcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUHJvcGVydHksIFNlYXJjaFRlcm1zLCBmZXRjaFByb3BlcnRpZXMgfSBmcm9tICcuLi9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlJ1xuXG5cbmNvbnN0IFByb3BlcnR5TGlzdGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdXNlU2VsZWN0b3IoKHtwcm9wZXJ0aWVzfToge3Byb3BlcnRpZXM6IFByb3BlcnR5W119KSA9PiBwcm9wZXJ0aWVzKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VsZWN0b3IoKHtzZWFyY2hUZXJtc306IHtzZWFyY2hUZXJtczogU2VhcmNoVGVybXN9KSA9PiBzZWFyY2hUZXJtcylcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hQYXJhbXMpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoZGlzcGF0Y2ggYXMgYW55KShmZXRjaFByb3BlcnRpZXMoKSlcbiAgICB9LCBbXSlcblxuXG4gICAgY29uc3QgZGF0YSA9IHVzZUdldFByb3BlcnRpZXMoKTtcblxuICAgIGxldCBmaWx0ZXJlZERhdGE6UHJvcGVydHlbXSA9IFtdXG5cbiAgICBpZihwcm9wZXJ0aWVzLmxlbmd0aCA+IDApe1xuICAgICAgICBmaWx0ZXJlZERhdGEgPSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmKHNlYXJjaFBhcmFtcy50ZXh0KXtcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YSEuZmlsdGVyKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hQYXJhbXMudGV4dCEudG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHNlYXJjaFBhcmFtcy50eXBlICE9PSBcIlwiKXtcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YSEuZmlsdGVyKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkudHlwZSA9PSBzZWFyY2hQYXJhbXMudHlwZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZihzZWFyY2hQYXJhbXMub3JkZXIpe1xuICAgICAgICAgICAgZmlsdGVyZWREYXRhID0gZmlsdGVyZWREYXRhIS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc2VhcmNoUGFyYW1zLm9yZGVyID09ICdwcmljZS1hc2MnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEucHJpY2UpIC0gcGFyc2VJbnQoYi5wcmljZSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoc2VhcmNoUGFyYW1zLm9yZGVyID09IFwibmFtZS1hc2NcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSlcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzZWFyY2hQYXJhbXMub3JkZXIgPT0gXCJuYW1lLWRlc2NcIil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGIucHJpY2UpIC0gcGFyc2VJbnQoYS5wcmljZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmZsZXgtd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YT8ubWFwKChwcm9wZXJ0eSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUNhcmQga2V5PXtwcm9wZXJ0eS5pZH0gaW5mbz17cHJvcGVydHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5TGlzdGluZ1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJQcm9wZXJ0eUNhcmQiLCJ1c2VHZXRQcm9wZXJ0aWVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImZldGNoUHJvcGVydGllcyIsIlByb3BlcnR5TGlzdGluZyIsInByb3BlcnRpZXMiLCJkaXNwYXRjaCIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFRlcm1zIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJsZW5ndGgiLCJ0ZXh0IiwiZmlsdGVyIiwicHJvcGVydHkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwib3JkZXIiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsInByaWNlIiwibG9jYWxlQ29tcGFyZSIsImZhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5mbyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PropertyListing.tsx\n"));

/***/ })

});