"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5e4d7272aaa8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVkZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1ZTRkNzI3MmFhYThcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/lib/Store/propertiesSlice.ts":
/*!******************************************!*\
  !*** ./app/lib/Store/propertiesSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   addProperty: function() { return /* binding */ addProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await fetch(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.json();\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        },\n        addProperty: (state, action)=>{\n            state.properties.push(action.payload);\n        },\n        removeProperty: (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload);\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { getProperties, addProperty, removeProperty } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRjtBQTZCaEYsTUFBTUUsZUFBZTtJQUNqQkMsV0FBVztJQUNYQyxZQUFZLEVBQUU7SUFDZEMsU0FBUztBQUNiO0FBRU8sTUFBTUMsa0JBQWtCTixrRUFBZ0JBLENBQUMsNEJBQTRCO0lBQ3hFLE1BQU1PLFdBQVcsTUFBTUMsTUFBTTtJQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaEMsT0FBT0Q7QUFDWCxHQUFFO0FBRUssTUFBTUUsaUJBQWlCWCxrRUFBZ0JBLENBQUMsMkJBQTJCLE9BQU9ZLFlBRWpGLEdBQUU7QUFFRixNQUFNQyxrQkFBa0JaLDZEQUFXQSxDQUFDO0lBQ2hDYSxNQUFNO0lBQ05aO0lBQ0FhLFVBQVU7UUFDTkMsZUFBZSxDQUFDQyxPQUFPQztZQUNuQkQsTUFBTWIsVUFBVSxHQUFHYyxPQUFPQyxPQUFPO1FBQ3JDO1FBQ0FDLGFBQWEsQ0FBQ0gsT0FBT0M7WUFDakJELE1BQU1iLFVBQVUsQ0FBQ2lCLElBQUksQ0FBQ0gsT0FBT0MsT0FBTztRQUN4QztRQUVBRyxnQkFBZ0IsQ0FBQ0wsT0FBT0M7WUFDcEJELE1BQU1iLFVBQVUsR0FBR2EsTUFBTWIsVUFBVSxDQUFDbUIsTUFBTSxDQUFDLENBQUNYLFdBQXVCQSxTQUFTWSxFQUFFLEtBQUtOLE9BQU9DLE9BQU87UUFDckc7SUFFSjtJQUNBTSxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ3JCLGdCQUFnQnNCLE9BQU8sRUFBRSxDQUFDWDtZQUMvQkEsTUFBTWQsU0FBUyxHQUFHO1FBQ3RCLEdBQ0N3QixPQUFPLENBQUNyQixnQkFBZ0J1QixTQUFTLEVBQUUsQ0FBQ1osT0FBT0M7WUFDeENELE1BQU1kLFNBQVMsR0FBRztZQUNsQmMsTUFBTWIsVUFBVSxHQUFHYyxPQUFPQyxPQUFPO1FBQ3JDLEdBQ0NRLE9BQU8sQ0FBQ3JCLGdCQUFnQndCLFFBQVEsRUFBRSxDQUFDYjtZQUNoQ0EsTUFBTWQsU0FBUyxHQUFHO1lBQ2xCYyxNQUFNWixPQUFPLEdBQUc7UUFDcEI7SUFDUjtBQUNKO0FBRU8sTUFBTSxFQUFFVyxhQUFhLEVBQUVJLFdBQVcsRUFBRUUsY0FBYyxFQUFFLEdBQUdULGdCQUFnQmtCLE9BQU87QUFFckYsK0RBQWVsQixnQkFBZ0JtQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzPzIxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcImRvbWFpblwiO1xuaW1wb3J0IHsgaXNFcnJvciB9IGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHkge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbiAgICBvd25lcjogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBwcmljZTogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcGxvdFNpemU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1Byb3BlcnR5e1xuICAgIGlkOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBwbG90U3VyZmFjZTogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNsb2FkaW5nOiBmYWxzZSxcbiAgICBwcm9wZXJ0aWVzOiBbXSBhcyBQcm9wZXJ0eVtdLFxuICAgIGlzRXJyb3I6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9mZXRjaFByb3BlcnRpZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9hZGROZXdQcm9wZXJ0eScsIGFzeW5jIChwcm9wZXJ0eTogTmV3UHJvcGVydHkpID0+IHtcbiAgICBcbn0pXG5cbmNvbnN0IHByb3BlcnRpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvcGVydHknLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBnZXRQcm9wZXJ0aWVzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9wZXJ0eVtdPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFByb3BlcnR5OiAoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPE5ld1Byb3BlcnR5PikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVByb3BlcnR5OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gc3RhdGUucHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5OiBQcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgIT09IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBnZXRQcm9wZXJ0aWVzLCBhZGRQcm9wZXJ0eSwgcmVtb3ZlUHJvcGVydHkgfSA9IHByb3BlcnRpZXNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHByb3BlcnRpZXNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImlzbG9hZGluZyIsInByb3BlcnRpZXMiLCJpc0Vycm9yIiwiZmV0Y2hQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYWRkTmV3UHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImdldFByb3BlcnRpZXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhZGRQcm9wZXJ0eSIsInB1c2giLCJyZW1vdmVQcm9wZXJ0eSIsImZpbHRlciIsImlkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});