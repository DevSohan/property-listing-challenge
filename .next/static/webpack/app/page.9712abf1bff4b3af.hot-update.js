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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProperty: function() { return /* binding */ addProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false\n};\nconst fetchProperties = createA;\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        },\n        addProperty: (state, action)=>{\n            state.properties.push(action.payload);\n        },\n        removeProperty: (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload);\n        }\n    }\n});\nconst { getProperties, addProperty, removeProperty } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThEO0FBZ0I5RCxNQUFNQyxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0FBQ2I7QUFFTyxNQUFNQyxrQkFBa0JDLFFBQU87QUFFdEMsTUFBTUMsa0JBQWtCUCw2REFBV0EsQ0FBQztJQUNoQ1EsTUFBTTtJQUNOUDtJQUNBUSxVQUFVO1FBQ05DLGVBQWUsQ0FBQ0MsT0FBT0M7WUFDbkJELE1BQU1SLFVBQVUsR0FBR1MsT0FBT0MsT0FBTztRQUNyQztRQUNBQyxhQUFhLENBQUNILE9BQU9DO1lBQ2pCRCxNQUFNUixVQUFVLENBQUNZLElBQUksQ0FBQ0gsT0FBT0MsT0FBTztRQUN4QztRQUVBRyxnQkFBZ0IsQ0FBQ0wsT0FBT0M7WUFDcEJELE1BQU1SLFVBQVUsR0FBR1EsTUFBTVIsVUFBVSxDQUFDYyxNQUFNLENBQUMsQ0FBQ0MsV0FBdUJBLFNBQVNDLEVBQUUsS0FBS1AsT0FBT0MsT0FBTztRQUNyRztJQUVKO0FBQ0o7QUFFTyxNQUFNLEVBQUVILGFBQWEsRUFBRUksV0FBVyxFQUFFRSxjQUFjLEVBQUUsR0FBR1QsZ0JBQWdCYSxPQUFPO0FBRXJGLCtEQUFlYixnQkFBZ0JjLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UudHM/MjE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxuICAgIG93bmVyOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHByaWNlOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBwbG90U2l6ZTogbnVtYmVyXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc2xvYWRpbmc6IGZhbHNlLFxuICAgIHByb3BlcnRpZXM6IFtdIGFzIFByb3BlcnR5W10sXG4gICAgaXNFcnJvcjogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvcGVydGllcyA9IGNyZWF0ZUFcblxuY29uc3QgcHJvcGVydGllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdwcm9wZXJ0eScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGdldFByb3BlcnRpZXM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFByb3BlcnR5W10+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUHJvcGVydHk6IChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248UHJvcGVydHk+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlUHJvcGVydHk6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBzdGF0ZS5wcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHk6IFByb3BlcnR5KSA9PiBwcm9wZXJ0eS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH1cblxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGdldFByb3BlcnRpZXMsIGFkZFByb3BlcnR5LCByZW1vdmVQcm9wZXJ0eSB9ID0gcHJvcGVydGllc1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydGllc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc2xvYWRpbmciLCJwcm9wZXJ0aWVzIiwiaXNFcnJvciIsImZldGNoUHJvcGVydGllcyIsImNyZWF0ZUEiLCJwcm9wZXJ0aWVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJnZXRQcm9wZXJ0aWVzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWRkUHJvcGVydHkiLCJwdXNoIiwicmVtb3ZlUHJvcGVydHkiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsImlkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});