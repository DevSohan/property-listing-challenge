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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5a0e2c354039\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVkZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1YTBlMmMzNTQwMzlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/lib/Store/propertiesSlice.ts":
/*!******************************************!*\
  !*** ./app/lib/Store/propertiesSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   addProperty: function() { return /* binding */ addProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        },\n        addProperty: (state, action)=>{\n            state.properties.push(action.payload);\n        },\n        removeProperty: (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload);\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n        });\n    }\n});\nconst { getProperties, addProperty, removeProperty } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDdEQ7QUE0QjFCLE1BQU1HLGVBQWU7SUFDakJDLFdBQVc7SUFDWEMsWUFBWSxFQUFFO0lBQ2RDLFNBQVM7QUFDYjtBQUVPLE1BQU1DLGtCQUFrQlAsa0VBQWdCQSxDQUFDLDRCQUE0QjtJQUN4RSxNQUFNUSxXQUFXLE1BQU1OLDZDQUFLQSxDQUFDTyxHQUFHLENBQUM7SUFDakMsTUFBTUMsT0FBTyxNQUFNRixTQUFTRSxJQUFJO0lBQ2hDLE9BQU9BO0FBQ1gsR0FBRTtBQUVLLE1BQU1DLGlCQUFpQlgsa0VBQWdCQSxDQUFDLDJCQUEyQixPQUFPWTtJQUM3RSxNQUFNSixXQUFXLE1BQU1OLDZDQUFLQSxDQUFDVyxJQUFJLENBQUMsOERBQThERDtJQUNoRyxNQUFNRixPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUYsTUFBTUksa0JBQWtCYiw2REFBV0EsQ0FBQztJQUNoQ2MsTUFBTTtJQUNOWjtJQUNBYSxVQUFVO1FBQ05DLGVBQWUsQ0FBQ0MsT0FBT0M7WUFDbkJELE1BQU1iLFVBQVUsR0FBR2MsT0FBT0MsT0FBTztRQUNyQztRQUNBQyxhQUFhLENBQUNILE9BQU9DO1lBQ2pCRCxNQUFNYixVQUFVLENBQUNpQixJQUFJLENBQUNILE9BQU9DLE9BQU87UUFDeEM7UUFFQUcsZ0JBQWdCLENBQUNMLE9BQU9DO1lBQ3BCRCxNQUFNYixVQUFVLEdBQUdhLE1BQU1iLFVBQVUsQ0FBQ21CLE1BQU0sQ0FBQyxDQUFDWixXQUF1QkEsU0FBU2EsRUFBRSxLQUFLTixPQUFPQyxPQUFPO1FBQ3JHO0lBRUo7SUFDQU0sZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNyQixnQkFBZ0JzQixPQUFPLEVBQUUsQ0FBQ1g7WUFDL0JBLE1BQU1kLFNBQVMsR0FBRztRQUN0QixHQUNDd0IsT0FBTyxDQUFDckIsZ0JBQWdCdUIsU0FBUyxFQUFFLENBQUNaLE9BQU9DO1lBQ3hDRCxNQUFNZCxTQUFTLEdBQUc7WUFDbEJjLE1BQU1iLFVBQVUsR0FBR2MsT0FBT0MsT0FBTztRQUNyQyxHQUNDUSxPQUFPLENBQUNyQixnQkFBZ0J3QixRQUFRLEVBQUUsQ0FBQ2I7WUFDaENBLE1BQU1kLFNBQVMsR0FBRztZQUNsQmMsTUFBTVosT0FBTyxHQUFHO1FBQ3BCLEdBQ0NzQixPQUFPLENBQUNqQixlQUFlbUIsU0FBUyxFQUFFLENBQUNaLE9BQU9DO1lBQ3ZDRCxNQUFNYixVQUFVLENBQUNpQixJQUFJLENBQUNILE9BQU9DLE9BQU87UUFDeEM7SUFDUjtBQUNKO0FBRU8sTUFBTSxFQUFFSCxhQUFhLEVBQUVJLFdBQVcsRUFBRUUsY0FBYyxFQUFFLEdBQUdULGdCQUFnQmtCLE9BQU87QUFFckYsK0RBQWVsQixnQkFBZ0JtQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzPzIxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcImRvbWFpblwiO1xuaW1wb3J0IHsgaXNFcnJvciB9IGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHkge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbiAgICBvd25lcjogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBwcmljZTogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcGxvdFNpemU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1Byb3BlcnR5e1xuICAgIGlkOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBwbG90U3VyZmFjZTogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNsb2FkaW5nOiBmYWxzZSxcbiAgICBwcm9wZXJ0aWVzOiBbXSBhcyBQcm9wZXJ0eVtdLFxuICAgIGlzRXJyb3I6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9mZXRjaFByb3BlcnRpZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmV4cG9ydCBjb25zdCBhZGROZXdQcm9wZXJ0eSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L2FkZE5ld1Byb3BlcnR5JywgYXN5bmMgKHByb3BlcnR5OiBOZXdQcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycsIHByb3BlcnR5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmNvbnN0IHByb3BlcnRpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvcGVydHknLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBnZXRQcm9wZXJ0aWVzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9wZXJ0eVtdPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGFkZFByb3BlcnR5OiAoc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPE5ld1Byb3BlcnR5PikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVByb3BlcnR5OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gc3RhdGUucHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5OiBQcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgIT09IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGdldFByb3BlcnRpZXMsIGFkZFByb3BlcnR5LCByZW1vdmVQcm9wZXJ0eSB9ID0gcHJvcGVydGllc1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydGllc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJpc2xvYWRpbmciLCJwcm9wZXJ0aWVzIiwiaXNFcnJvciIsImZldGNoUHJvcGVydGllcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImFkZE5ld1Byb3BlcnR5IiwicHJvcGVydHkiLCJwb3N0IiwicHJvcGVydGllc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZ2V0UHJvcGVydGllcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZFByb3BlcnR5IiwicHVzaCIsInJlbW92ZVByb3BlcnR5IiwiZmlsdGVyIiwiaWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});