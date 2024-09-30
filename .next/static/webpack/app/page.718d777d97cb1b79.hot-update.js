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

/***/ "(app-pages-browser)/./app/lib/backendFetching.ts":
/*!************************************!*\
  !*** ./app/lib/backendFetching.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; },\n/* harmony export */   useGetProperties: function() { return /* binding */ useGetProperties; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useGetProperties = ()=>{\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchProperties = async ()=>{\n            setLoading(true);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n                setData(response.data);\n            } catch (error) {\n                throw error;\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchProperties();\n    }, []);\n    return {\n        data\n    };\n};\nconst addNewProperty = async (property)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n        console.log(response);\n        return response.data;\n    } catch (error) {\n        throw error;\n    }\n};\nconst removeProperty = async (id)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n        console.log(response);\n    } catch (error) {\n        throw error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvYmFja2VuZEZldGNoaW5nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQWlDckMsTUFBTUcsbUJBQW1CO0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBb0I7SUFFcERELGdEQUFTQSxDQUFDO1FBQ04sTUFBTUssa0JBQWtCO1lBQ3hCQyxXQUFXO1lBQ1gsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1SLDZDQUFLQSxDQUFDUyxHQUFHLENBQUM7Z0JBQ2pDSixRQUFRRyxTQUFTSixJQUFJO1lBQ3pCLEVBQUUsT0FBT00sT0FBTztnQkFDWixNQUFNQTtZQUNWLFNBQVU7Z0JBQ05ILFdBQVc7WUFDZjtRQUNBO1FBQ0FEO0lBQ0osR0FBRyxFQUFFO0lBRUwsT0FBTztRQUFFRjtJQUFLO0FBQ2xCLEVBQUU7QUFFSyxNQUFNTyxpQkFBaUIsT0FBT0M7SUFDakMsSUFBRztRQUNDLE1BQU1KLFdBQVksTUFBTVIsNkNBQUtBLENBQUNhLElBQUksQ0FBQyw4REFBOEREO1FBQ2pHRSxRQUFRQyxHQUFHLENBQUNQO1FBRVosT0FBT0EsU0FBU0osSUFBSTtJQUN4QixFQUFDLE9BQU1NLE9BQU07UUFDVCxNQUFNQTtJQUNWO0FBRUosRUFBQztBQUVNLE1BQU1NLGlCQUFpQixPQUFPQztJQUNqQyxJQUFHO1FBQ0MsTUFBTVQsV0FBWSxNQUFNUiw2Q0FBS0EsQ0FBQ2tCLE1BQU0sQ0FBQyw4REFBaUUsT0FBSEQ7UUFDbkdILFFBQVFDLEdBQUcsQ0FBQ1A7SUFDaEIsRUFBQyxPQUFNRSxPQUFNO1FBQ1QsTUFBTUE7SUFDVjtBQUVKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9iYWNrZW5kRmV0Y2hpbmcudHM/OGVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5pbnRlcmZhY2UgUHJvcGVydHkge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbiAgICBvd25lcjogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBwcmljZTogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcGxvdFNpemU6IG51bWJlclxufVxuXG5pbnRlcmZhY2UgTmV3UHJvcGVydHl7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIHBsb3RTdXJmYWNlOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG59XG5pbnRlcmZhY2UgR2V0UHJvcGVydGllc1Jlc3BvbnNlIHtcbiAgZXJyb3I6IEVycm9yIHwgbnVsbDtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgZGF0YTogUHJvcGVydHlbXSB8IG51bGw7XG59XG5cbiAgXG5leHBvcnQgY29uc3QgdXNlR2V0UHJvcGVydGllcyA9ICgpOiBHZXRQcm9wZXJ0aWVzUmVzcG9uc2UgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFByb3BlcnR5W10gfCBudWxsPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJvcGVydGllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJyk7XG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3IgYXMgRXJyb3JcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoUHJvcGVydGllcygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB7IGRhdGEgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGROZXdQcm9wZXJ0eSA9IGFzeW5jIChwcm9wZXJ0eTogTmV3UHJvcGVydHkpOiBQcm9taXNlPFByb3BlcnR5PiA9PiB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJywgcHJvcGVydHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9wZXJ0eSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMvJHtpZH1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VHZXRQcm9wZXJ0aWVzIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaFByb3BlcnRpZXMiLCJzZXRMb2FkaW5nIiwicmVzcG9uc2UiLCJnZXQiLCJlcnJvciIsImFkZE5ld1Byb3BlcnR5IiwicHJvcGVydHkiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZVByb3BlcnR5IiwiaWQiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/backendFetching.ts\n"));

/***/ })

});