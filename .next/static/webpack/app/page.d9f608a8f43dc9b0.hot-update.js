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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Order: function() { return /* binding */ Order; },\n/* harmony export */   Type: function() { return /* binding */ Type; },\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; },\n/* harmony export */   searchProperties: function() { return /* binding */ searchProperties; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nvar Type;\n(function(Type) {\n    Type[\"All\"] = \"all\";\n    Type[\"House\"] = \"house\";\n    Type[\"Apartment\"] = \"apartment\";\n})(Type || (Type = {}));\nvar Order;\n(function(Order) {\n    Order[\"Default\"] = \"\";\n    Order[\"Price_Ascending\"] = \"price-asc\";\n    Order[\"Price_Descending\"] = \"price-desc\";\n    Order[\"Name_Ascending\"] = \"name-asc\";\n    Order[\"Name_Descending\"] = \"name-desc\";\n})(Order || (Order = {}));\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false,\n    searchTerms: {\n        text: \"\",\n        type: \"all\",\n        order: \"\"\n    }\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst removeProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/removeProperty\", async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        searchProperties: (state, action)=>{\n            state.searchTerms = {\n                ...state.searchTerms,\n                ...action.payload\n            };\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n            state.isloading = false;\n        }).addCase(addNewProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(removeProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(removeProperty.fulfilled, (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload.id);\n            state.isloading = false;\n        }).addCase(removeProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { searchProperties } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ3REOztVQTJCZEc7Ozs7R0FBQUEsU0FBQUE7O1VBTUFDOzs7Ozs7R0FBQUEsVUFBQUE7QUFjWixNQUFNQyxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0lBQ1RDLGFBQWE7UUFDVEMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtBQUNKO0FBSU8sTUFBTUMsa0JBQWtCYixrRUFBZ0JBLENBQUMsNEJBQTRCO0lBQ3hFLE1BQU1jLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUNqQyxNQUFNQyxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUssTUFBTUMsaUJBQWlCakIsa0VBQWdCQSxDQUFDLDJCQUEyQixPQUFPa0I7SUFDN0UsTUFBTUosV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2lCLElBQUksQ0FBQyw4REFBOEREO0lBQ2hHLE1BQU1GLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFSyxNQUFNSSxpQkFBaUJwQixrRUFBZ0JBLENBQUMsMkJBQTJCLE9BQU9xQjtJQUM3RSxNQUFNUCxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDb0IsTUFBTSxDQUFDLDhEQUFpRSxPQUFIRDtJQUNsRyxNQUFNTCxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUYsTUFBTU8sa0JBQWtCdEIsNkRBQVdBLENBQUM7SUFDaEN1QixNQUFNO0lBQ05uQjtJQUNBb0IsVUFBVTtRQUNOQyxrQkFBa0IsQ0FBQ0MsT0FBT0M7WUFDdEJELE1BQU1sQixXQUFXLEdBQUc7Z0JBQ2hCLEdBQUdrQixNQUFNbEIsV0FBVztnQkFDcEIsR0FBR21CLE9BQU9DLE9BQU87WUFDckI7UUFDSjtJQUVKO0lBQ0FDLGVBQWUsQ0FBQ0M7UUFDWkEsUUFDS0MsT0FBTyxDQUFDbkIsZ0JBQWdCb0IsT0FBTyxFQUFFLENBQUNOO1lBQy9CQSxNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNuQixnQkFBZ0JxQixTQUFTLEVBQUUsQ0FBQ1AsT0FBT0M7WUFDeENELE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNcEIsVUFBVSxHQUFHcUIsT0FBT0MsT0FBTztRQUNyQyxHQUNDRyxPQUFPLENBQUNuQixnQkFBZ0JzQixRQUFRLEVBQUUsQ0FBQ1I7WUFDaENBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCLEdBQ0N3QixPQUFPLENBQUNmLGVBQWVnQixPQUFPLEVBQUUsQ0FBQ047WUFDOUJBLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ2YsZUFBZWlCLFNBQVMsRUFBRSxDQUFDUCxPQUFPQztZQUN2Q0QsTUFBTXBCLFVBQVUsQ0FBQzZCLElBQUksQ0FBQ1IsT0FBT0MsT0FBTztZQUNwQ0YsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDZixlQUFla0IsUUFBUSxFQUFFLENBQUNSO1lBQy9CQSxNQUFNckIsU0FBUyxHQUFHO1lBQ2xCcUIsTUFBTW5CLE9BQU8sR0FBRztRQUNwQixHQUNDd0IsT0FBTyxDQUFDWixlQUFlYSxPQUFPLEVBQUUsQ0FBQ047WUFDOUJBLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ1osZUFBZWMsU0FBUyxFQUFFLENBQUNQLE9BQU9DO1lBQ3ZDRCxNQUFNcEIsVUFBVSxHQUFHb0IsTUFBTXBCLFVBQVUsQ0FBQzhCLE1BQU0sQ0FBQyxDQUFDbkIsV0FBYUEsU0FBU0csRUFBRSxLQUFLTyxPQUFPQyxPQUFPLENBQUNSLEVBQUU7WUFDMUZNLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ1osZUFBZWUsUUFBUSxFQUFFLENBQUNSO1lBQy9CQSxNQUFNckIsU0FBUyxHQUFHO1lBQ2xCcUIsTUFBTW5CLE9BQU8sR0FBRztRQUNwQjtJQUNSO0FBQ0o7QUFFTyxNQUFNLEVBQUVrQixnQkFBZ0IsRUFBRSxHQUFHSCxnQkFBZ0JlLE9BQU87QUFFM0QsK0RBQWVmLGdCQUFnQmdCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UudHM/MjE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiZG9tYWluXCI7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxuICAgIG93bmVyOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHByaWNlOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBwbG90U2l6ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvcGVydHl7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIHBsb3RTdXJmYWNlOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG59XG5leHBvcnQgZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBIb3VzZSA9ICdob3VzZScsXG4gICAgQXBhcnRtZW50ID0gJ2FwYXJ0bWVudCdcbn1cblxuZXhwb3J0IGVudW0gT3JkZXIge1xuICAgIERlZmF1bHQgPSAnJyxcbiAgICBQcmljZV9Bc2NlbmRpbmcgPSAncHJpY2UtYXNjJyxcbiAgICBQcmljZV9EZXNjZW5kaW5nID0gJ3ByaWNlLWRlc2MnLFxuICAgIE5hbWVfQXNjZW5kaW5nID0gJ25hbWUtYXNjJyxcbiAgICBOYW1lX0Rlc2NlbmRpbmcgPSAnbmFtZS1kZXNjJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFRlcm1zIHtcbiAgICB0ZXh0OiBzdHJpbmdcbiAgICB0eXBlOiBUeXBlXG4gICAgb3JkZXI6IE9yZGVyXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc2xvYWRpbmc6IGZhbHNlLFxuICAgIHByb3BlcnRpZXM6IFtdIGFzIFByb3BlcnR5W10sXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAgc2VhcmNoVGVybXM6IHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHR5cGU6IFR5cGUuQWxsLFxuICAgICAgICBvcmRlcjogT3JkZXIuRGVmYXVsdFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9mZXRjaFByb3BlcnRpZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmV4cG9ydCBjb25zdCBhZGROZXdQcm9wZXJ0eSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L2FkZE5ld1Byb3BlcnR5JywgYXN5bmMgKHByb3BlcnR5OiBOZXdQcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycsIHByb3BlcnR5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9wZXJ0eSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L3JlbW92ZVByb3BlcnR5JywgYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcy8ke2lkfWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcbiAgICByZXR1cm4gZGF0YVxufSlcblxuY29uc3QgcHJvcGVydGllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdwcm9wZXJ0eScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNlYXJjaFByb3BlcnRpZXM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNlYXJjaFRlcm1zPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGVybXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2VhcmNoVGVybXMsXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoYWRkTmV3UHJvcGVydHkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShhZGROZXdQcm9wZXJ0eS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHJlbW92ZVByb3BlcnR5LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShyZW1vdmVQcm9wZXJ0eS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IHN0YXRlLnByb3BlcnRpZXMuZmlsdGVyKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UocmVtb3ZlUHJvcGVydHkucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNFcnJvciA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2VhcmNoUHJvcGVydGllcyB9ID0gcHJvcGVydGllc1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydGllc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJUeXBlIiwiT3JkZXIiLCJpbml0aWFsU3RhdGUiLCJpc2xvYWRpbmciLCJwcm9wZXJ0aWVzIiwiaXNFcnJvciIsInNlYXJjaFRlcm1zIiwidGV4dCIsInR5cGUiLCJvcmRlciIsImZldGNoUHJvcGVydGllcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImFkZE5ld1Byb3BlcnR5IiwicHJvcGVydHkiLCJwb3N0IiwicmVtb3ZlUHJvcGVydHkiLCJpZCIsImRlbGV0ZSIsInByb3BlcnRpZXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNlYXJjaFByb3BlcnRpZXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJwdXNoIiwiZmlsdGVyIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});