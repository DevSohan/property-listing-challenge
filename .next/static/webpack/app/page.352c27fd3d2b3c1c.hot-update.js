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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; },\n/* harmony export */   useGetProperties: function() { return /* binding */ useGetProperties; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useGetProperties = ()=>{\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchProperties = async ()=>{\n            setLoading(true);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n                setData(response.data);\n            } catch (error) {\n                Th;\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchProperties();\n    }, []);\n    return {\n        data\n    };\n};\nconst addNewProperty = async (property)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n        console.log(response);\n        return response.data;\n    } catch (error) {\n        throw error;\n    }\n};\nconst removeProperty = async (id)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n        console.log(response);\n    } catch (error) {\n        throw error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvYmFja2VuZEZldGNoaW5nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQWlDckMsTUFBTUcsbUJBQW1CO0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBb0I7SUFFcERELGdEQUFTQSxDQUFDO1FBQ04sTUFBTUssa0JBQWtCO1lBQ3hCQyxXQUFXO1lBQ1gsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1SLDZDQUFLQSxDQUFDUyxHQUFHLENBQUM7Z0JBQ2pDSixRQUFRRyxTQUFTSixJQUFJO1lBQ3pCLEVBQUUsT0FBT00sT0FBTztnQkFDWkM7WUFDSixTQUFVO2dCQUNOSixXQUFXO1lBQ2Y7UUFDQTtRQUNBRDtJQUNKLEdBQUcsRUFBRTtJQUVMLE9BQU87UUFBRUY7SUFBSztBQUNsQixFQUFFO0FBRUssTUFBTVEsaUJBQWlCLE9BQU9DO0lBQ2pDLElBQUc7UUFDQyxNQUFNTCxXQUFZLE1BQU1SLDZDQUFLQSxDQUFDYyxJQUFJLENBQUMsOERBQThERDtRQUNqR0UsUUFBUUMsR0FBRyxDQUFDUjtRQUVaLE9BQU9BLFNBQVNKLElBQUk7SUFDeEIsRUFBQyxPQUFNTSxPQUFNO1FBQ1QsTUFBTUE7SUFDVjtBQUVKLEVBQUM7QUFFTSxNQUFNTyxpQkFBaUIsT0FBT0M7SUFDakMsSUFBRztRQUNDLE1BQU1WLFdBQVksTUFBTVIsNkNBQUtBLENBQUNtQixNQUFNLENBQUMsOERBQWlFLE9BQUhEO1FBQ25HSCxRQUFRQyxHQUFHLENBQUNSO0lBQ2hCLEVBQUMsT0FBTUUsT0FBTTtRQUNULE1BQU1BO0lBQ1Y7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvYmFja2VuZEZldGNoaW5nLnRzPzhlZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuaW50ZXJmYWNlIFByb3BlcnR5IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG4gICAgb3duZXI6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgcHJpY2U6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHBsb3RTaXplOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIE5ld1Byb3BlcnR5e1xuICAgIGlkOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBwbG90U3VyZmFjZTogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxufVxuaW50ZXJmYWNlIEdldFByb3BlcnRpZXNSZXNwb25zZSB7XG4gIGVycm9yOiBFcnJvciB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGRhdGE6IFByb3BlcnR5W10gfCBudWxsO1xufVxuXG4gIFxuZXhwb3J0IGNvbnN0IHVzZUdldFByb3BlcnRpZXMgPSAoKTogR2V0UHJvcGVydGllc1Jlc3BvbnNlID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxQcm9wZXJ0eVtdIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycpO1xuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFRoXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaFByb3BlcnRpZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4geyBkYXRhIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvcGVydHkgPSBhc3luYyAocHJvcGVydHk6IE5ld1Byb3BlcnR5KTogUHJvbWlzZTxQcm9wZXJ0eT4gPT4ge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycsIHByb3BlcnR5KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvcGVydHkgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzLyR7aWR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICAgIFxufSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlR2V0UHJvcGVydGllcyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hQcm9wZXJ0aWVzIiwic2V0TG9hZGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZXJyb3IiLCJUaCIsImFkZE5ld1Byb3BlcnR5IiwicHJvcGVydHkiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZVByb3BlcnR5IiwiaWQiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/backendFetching.ts\n"));

/***/ })

});