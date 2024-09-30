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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProperty: function() { return /* binding */ addProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await fetch(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.json();\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        },\n        addProperty: (state, action)=>{\n            state.properties.push(action.payload);\n        },\n        removeProperty: (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload);\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { getProperties, addProperty, removeProperty } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBMkJoRixNQUFNRSxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0FBQ2I7QUFFTyxNQUFNQyxrQkFBa0JOLGtFQUFnQkEsQ0FBQyw0QkFBNEI7SUFDeEUsTUFBTU8sV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUNoQyxPQUFPRDtBQUNYLEdBQUU7QUFFRixNQUFNRSxrQkFBa0JWLDZEQUFXQSxDQUFDO0lBQ2hDVyxNQUFNO0lBQ05WO0lBQ0FXLFVBQVU7UUFDTkMsZUFBZSxDQUFDQyxPQUFPQztZQUNuQkQsTUFBTVgsVUFBVSxHQUFHWSxPQUFPQyxPQUFPO1FBQ3JDO1FBQ0FDLGFBQWEsQ0FBQ0gsT0FBT0M7WUFDakJELE1BQU1YLFVBQVUsQ0FBQ2UsSUFBSSxDQUFDSCxPQUFPQyxPQUFPO1FBQ3hDO1FBRUFHLGdCQUFnQixDQUFDTCxPQUFPQztZQUNwQkQsTUFBTVgsVUFBVSxHQUFHVyxNQUFNWCxVQUFVLENBQUNpQixNQUFNLENBQUMsQ0FBQ0MsV0FBdUJBLFNBQVNDLEVBQUUsS0FBS1AsT0FBT0MsT0FBTztRQUNyRztJQUVKO0lBQ0FPLGVBQWUsQ0FBQ0M7UUFDWkEsUUFDS0MsT0FBTyxDQUFDcEIsZ0JBQWdCcUIsT0FBTyxFQUFFLENBQUNaO1lBQy9CQSxNQUFNWixTQUFTLEdBQUc7UUFDdEIsR0FDQ3VCLE9BQU8sQ0FBQ3BCLGdCQUFnQnNCLFNBQVMsRUFBRSxDQUFDYixPQUFPQztZQUN4Q0QsTUFBTVosU0FBUyxHQUFHO1lBQ2xCWSxNQUFNWCxVQUFVLEdBQUdZLE9BQU9DLE9BQU87UUFDckMsR0FDQ1MsT0FBTyxDQUFDcEIsZ0JBQWdCdUIsUUFBUSxFQUFFLENBQUNkO1lBQ2hDQSxNQUFNWixTQUFTLEdBQUc7WUFDbEJZLE1BQU1WLE9BQU8sR0FBRztRQUNwQjtJQUNSO0FBQ0o7QUFFTyxNQUFNLEVBQUVTLGFBQWEsRUFBRUksV0FBVyxFQUFFRSxjQUFjLEVBQUUsR0FBR1QsZ0JBQWdCbUIsT0FBTztBQUVyRiwrREFBZW5CLGdCQUFnQm9CLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UudHM/MjE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxuICAgIG93bmVyOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHByaWNlOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBwbG90U2l6ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvcGVydHl7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIHBsb3RTdXJmYWNlOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc2xvYWRpbmc6IGZhbHNlLFxuICAgIHByb3BlcnRpZXM6IFtdIGFzIFByb3BlcnR5W10sXG4gICAgaXNFcnJvcjogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvcGVydGllcyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L2ZldGNoUHJvcGVydGllcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmNvbnN0IHByb3BlcnRpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvcGVydHknLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBnZXRQcm9wZXJ0aWVzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9wZXJ0eVtdPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFByb3BlcnR5OiAoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPE5ld1Byb3BlcnR5PikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVByb3BlcnR5OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gc3RhdGUucHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5OiBQcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgIT09IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBnZXRQcm9wZXJ0aWVzLCBhZGRQcm9wZXJ0eSwgcmVtb3ZlUHJvcGVydHkgfSA9IHByb3BlcnRpZXNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHByb3BlcnRpZXNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImlzbG9hZGluZyIsInByb3BlcnRpZXMiLCJpc0Vycm9yIiwiZmV0Y2hQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcGVydGllc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZ2V0UHJvcGVydGllcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZFByb3BlcnR5IiwicHVzaCIsInJlbW92ZVByb3BlcnR5IiwiZmlsdGVyIiwicHJvcGVydHkiLCJpZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});