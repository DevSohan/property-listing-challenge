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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"10b3092ee214\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVkZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxMGIzMDkyZWUyMTRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/lib/Store/propertiesSlice.ts":
/*!******************************************!*\
  !*** ./app/lib/Store/propertiesSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Order: function() { return /* binding */ Order; },\n/* harmony export */   Type: function() { return /* binding */ Type; },\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; },\n/* harmony export */   searchProperties: function() { return /* binding */ searchProperties; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nvar Type;\n(function(Type) {\n    Type[\"All\"] = \"\";\n    Type[\"House\"] = \"house\";\n    Type[\"Apartment\"] = \"apartment\";\n})(Type || (Type = {}));\nvar Order;\n(function(Order) {\n    Order[\"Default\"] = \"\";\n    Order[\"Price_Ascending\"] = \"price-asc\";\n    Order[\"Price\"] = \"price-desc\";\n    Order[\"NAME_ASC\"] = \"name-asc\";\n    Order[\"NAME_DESC\"] = \"name-desc\";\n})(Order || (Order = {}));\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false,\n    searchTerms: {\n        text: \"\",\n        type: \"\",\n        order: Order.DEFAULT\n    }\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst removeProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/removeProperty\", async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        searchProperties: (state, action)=>{\n            state.searchTerms = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n            state.isloading = false;\n        }).addCase(addNewProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(removeProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(removeProperty.fulfilled, (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload.id);\n            state.isloading = false;\n        }).addCase(removeProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { searchProperties } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ3REOztVQTJCZEc7Ozs7R0FBQUEsU0FBQUE7O1VBTUFDOzs7Ozs7R0FBQUEsVUFBQUE7QUFjWixNQUFNQyxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0lBQ1RDLGFBQWE7UUFDVEMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLE9BQU9SLE1BQU1TLE9BQU87SUFDeEI7QUFDSjtBQUlPLE1BQU1DLGtCQUFrQmQsa0VBQWdCQSxDQUFDLDRCQUE0QjtJQUN4RSxNQUFNZSxXQUFXLE1BQU1iLDZDQUFLQSxDQUFDYyxHQUFHLENBQUM7SUFDakMsTUFBTUMsT0FBTyxNQUFNRixTQUFTRSxJQUFJO0lBQ2hDLE9BQU9BO0FBQ1gsR0FBRTtBQUVLLE1BQU1DLGlCQUFpQmxCLGtFQUFnQkEsQ0FBQywyQkFBMkIsT0FBT21CO0lBQzdFLE1BQU1KLFdBQVcsTUFBTWIsNkNBQUtBLENBQUNrQixJQUFJLENBQUMsOERBQThERDtJQUNoRyxNQUFNRixPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUssTUFBTUksaUJBQWlCckIsa0VBQWdCQSxDQUFDLDJCQUEyQixPQUFPc0I7SUFDN0UsTUFBTVAsV0FBVyxNQUFNYiw2Q0FBS0EsQ0FBQ3FCLE1BQU0sQ0FBQyw4REFBaUUsT0FBSEQ7SUFDbEcsTUFBTUwsT0FBTyxNQUFNRixTQUFTRSxJQUFJO0lBQ2hDLE9BQU9BO0FBQ1gsR0FBRTtBQUVGLE1BQU1PLGtCQUFrQnZCLDZEQUFXQSxDQUFDO0lBQ2hDd0IsTUFBTTtJQUNOcEI7SUFDQXFCLFVBQVU7UUFDTkMsa0JBQWtCLENBQUNDLE9BQU9DO1lBQ3RCRCxNQUFNbkIsV0FBVyxHQUFHb0IsT0FBT0MsT0FBTztRQUN0QztJQUVKO0lBQ0FDLGVBQWUsQ0FBQ0M7UUFDWkEsUUFDS0MsT0FBTyxDQUFDbkIsZ0JBQWdCb0IsT0FBTyxFQUFFLENBQUNOO1lBQy9CQSxNQUFNdEIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MyQixPQUFPLENBQUNuQixnQkFBZ0JxQixTQUFTLEVBQUUsQ0FBQ1AsT0FBT0M7WUFDeENELE1BQU10QixTQUFTLEdBQUc7WUFDbEJzQixNQUFNckIsVUFBVSxHQUFHc0IsT0FBT0MsT0FBTztRQUNyQyxHQUNDRyxPQUFPLENBQUNuQixnQkFBZ0JzQixRQUFRLEVBQUUsQ0FBQ1I7WUFDaENBLE1BQU10QixTQUFTLEdBQUc7WUFDbEJzQixNQUFNcEIsT0FBTyxHQUFHO1FBQ3BCLEdBQ0N5QixPQUFPLENBQUNmLGVBQWVnQixPQUFPLEVBQUUsQ0FBQ047WUFDOUJBLE1BQU10QixTQUFTLEdBQUc7UUFDdEIsR0FDQzJCLE9BQU8sQ0FBQ2YsZUFBZWlCLFNBQVMsRUFBRSxDQUFDUCxPQUFPQztZQUN2Q0QsTUFBTXJCLFVBQVUsQ0FBQzhCLElBQUksQ0FBQ1IsT0FBT0MsT0FBTztZQUNwQ0YsTUFBTXRCLFNBQVMsR0FBRztRQUN0QixHQUNDMkIsT0FBTyxDQUFDZixlQUFla0IsUUFBUSxFQUFFLENBQUNSO1lBQy9CQSxNQUFNdEIsU0FBUyxHQUFHO1lBQ2xCc0IsTUFBTXBCLE9BQU8sR0FBRztRQUNwQixHQUNDeUIsT0FBTyxDQUFDWixlQUFlYSxPQUFPLEVBQUUsQ0FBQ047WUFDOUJBLE1BQU10QixTQUFTLEdBQUc7UUFDdEIsR0FDQzJCLE9BQU8sQ0FBQ1osZUFBZWMsU0FBUyxFQUFFLENBQUNQLE9BQU9DO1lBQ3ZDRCxNQUFNckIsVUFBVSxHQUFHcUIsTUFBTXJCLFVBQVUsQ0FBQytCLE1BQU0sQ0FBQyxDQUFDbkIsV0FBYUEsU0FBU0csRUFBRSxLQUFLTyxPQUFPQyxPQUFPLENBQUNSLEVBQUU7WUFDMUZNLE1BQU10QixTQUFTLEdBQUc7UUFDdEIsR0FDQzJCLE9BQU8sQ0FBQ1osZUFBZWUsUUFBUSxFQUFFLENBQUNSO1lBQy9CQSxNQUFNdEIsU0FBUyxHQUFHO1lBQ2xCc0IsTUFBTXBCLE9BQU8sR0FBRztRQUNwQjtJQUNSO0FBQ0o7QUFFTyxNQUFNLEVBQUVtQixnQkFBZ0IsRUFBRSxHQUFHSCxnQkFBZ0JlLE9BQU87QUFFM0QsK0RBQWVmLGdCQUFnQmdCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UudHM/MjE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiZG9tYWluXCI7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxuICAgIG93bmVyOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHByaWNlOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBwbG90U2l6ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvcGVydHl7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIHBsb3RTdXJmYWNlOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG59XG5leHBvcnQgZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnJyxcbiAgICBIb3VzZSA9ICdob3VzZScsXG4gICAgQXBhcnRtZW50ID0gJ2FwYXJ0bWVudCdcbn1cblxuZXhwb3J0IGVudW0gT3JkZXIge1xuICAgIERlZmF1bHQgPSAnJyxcbiAgICBQcmljZV9Bc2NlbmRpbmcgPSAncHJpY2UtYXNjJyxcbiAgICBQcmljZSA9ICdwcmljZS1kZXNjJyxcbiAgICBOQU1FX0FTQyA9ICduYW1lLWFzYycsXG4gICAgTkFNRV9ERVNDID0gJ25hbWUtZGVzYydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hUZXJtcyB7XG4gICAgdGV4dDogc3RyaW5nXG4gICAgdHlwZTogVHlwZVxuICAgIG9yZGVyOiBPcmRlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNsb2FkaW5nOiBmYWxzZSxcbiAgICBwcm9wZXJ0aWVzOiBbXSBhcyBQcm9wZXJ0eVtdLFxuICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgIHNlYXJjaFRlcm1zOiB7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0eXBlOiBUeXBlLkFsbCxcbiAgICAgICAgb3JkZXI6IE9yZGVyLkRFRkFVTFRcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9wZXJ0aWVzID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvZmV0Y2hQcm9wZXJ0aWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9hZGROZXdQcm9wZXJ0eScsIGFzeW5jIChwcm9wZXJ0eTogTmV3UHJvcGVydHkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnLCBwcm9wZXJ0eSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9yZW1vdmVQcm9wZXJ0eScsIGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMvJHtpZH1gKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmNvbnN0IHByb3BlcnRpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvcGVydHknLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZWFyY2hQcm9wZXJ0aWVzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxTZWFyY2hUZXJtcz4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFRlcm1zID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoYWRkTmV3UHJvcGVydHkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShhZGROZXdQcm9wZXJ0eS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHJlbW92ZVByb3BlcnR5LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShyZW1vdmVQcm9wZXJ0eS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IHN0YXRlLnByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UocmVtb3ZlUHJvcGVydHkucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNFcnJvciA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2VhcmNoUHJvcGVydGllcyB9ID0gcHJvcGVydGllc1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydGllc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJUeXBlIiwiT3JkZXIiLCJpbml0aWFsU3RhdGUiLCJpc2xvYWRpbmciLCJwcm9wZXJ0aWVzIiwiaXNFcnJvciIsInNlYXJjaFRlcm1zIiwidGV4dCIsInR5cGUiLCJvcmRlciIsIkRFRkFVTFQiLCJmZXRjaFByb3BlcnRpZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJhZGROZXdQcm9wZXJ0eSIsInByb3BlcnR5IiwicG9zdCIsInJlbW92ZVByb3BlcnR5IiwiaWQiLCJkZWxldGUiLCJwcm9wZXJ0aWVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZWFyY2hQcm9wZXJ0aWVzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaCIsImZpbHRlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});