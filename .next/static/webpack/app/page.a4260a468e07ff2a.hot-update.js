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

/***/ "(app-pages-browser)/./app/lib/Store/propertiesSlice.ts":
/*!******************************************!*\
  !*** ./app/lib/Store/propertiesSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProperty: function() { return /* binding */ addProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        },\n        addProperty: (state, action)=>{\n            state.properties.push(action.payload);\n        },\n        removeProperty: (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload);\n        }\n    }\n});\nconst { getProperties, addProperty, removeProperty } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBZ0JoRixNQUFNRSxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0FBQ2I7QUFFTyxNQUFNQyxrQkFBa0JOLGtFQUFnQkEsQ0FBQyw0QkFBNEIsV0FFNUUsR0FBRTtBQUVGLE1BQU1PLGtCQUFrQk4sNkRBQVdBLENBQUM7SUFDaENPLE1BQU07SUFDTk47SUFDQU8sVUFBVTtRQUNOQyxlQUFlLENBQUNDLE9BQU9DO1lBQ25CRCxNQUFNUCxVQUFVLEdBQUdRLE9BQU9DLE9BQU87UUFDckM7UUFDQUMsYUFBYSxDQUFDSCxPQUFPQztZQUNqQkQsTUFBTVAsVUFBVSxDQUFDVyxJQUFJLENBQUNILE9BQU9DLE9BQU87UUFDeEM7UUFFQUcsZ0JBQWdCLENBQUNMLE9BQU9DO1lBQ3BCRCxNQUFNUCxVQUFVLEdBQUdPLE1BQU1QLFVBQVUsQ0FBQ2EsTUFBTSxDQUFDLENBQUNDLFdBQXVCQSxTQUFTQyxFQUFFLEtBQUtQLE9BQU9DLE9BQU87UUFDckc7SUFFSjtBQUNKO0FBRU8sTUFBTSxFQUFFSCxhQUFhLEVBQUVJLFdBQVcsRUFBRUUsY0FBYyxFQUFFLEdBQUdULGdCQUFnQmEsT0FBTztBQUVyRiwrREFBZWIsZ0JBQWdCYyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzPzIxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgaXNFcnJvciB9IGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHkge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbiAgICBvd25lcjogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBwcmljZTogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcGxvdFNpemU6IG51bWJlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNsb2FkaW5nOiBmYWxzZSxcbiAgICBwcm9wZXJ0aWVzOiBbXSBhcyBQcm9wZXJ0eVtdLFxuICAgIGlzRXJyb3I6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9mZXRjaFByb3BlcnRpZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgXG59KVxuXG5jb25zdCBwcm9wZXJ0aWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3Byb3BlcnR5JyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgZ2V0UHJvcGVydGllczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UHJvcGVydHlbXT4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBhZGRQcm9wZXJ0eTogKHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxQcm9wZXJ0eT4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVQcm9wZXJ0eTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IHN0YXRlLnByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eTogUHJvcGVydHkpID0+IHByb3BlcnR5LmlkICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfVxuXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgZ2V0UHJvcGVydGllcywgYWRkUHJvcGVydHksIHJlbW92ZVByb3BlcnR5IH0gPSBwcm9wZXJ0aWVzU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wZXJ0aWVzU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc2xvYWRpbmciLCJwcm9wZXJ0aWVzIiwiaXNFcnJvciIsImZldGNoUHJvcGVydGllcyIsInByb3BlcnRpZXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImdldFByb3BlcnRpZXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhZGRQcm9wZXJ0eSIsInB1c2giLCJyZW1vdmVQcm9wZXJ0eSIsImZpbHRlciIsInByb3BlcnR5IiwiaWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});