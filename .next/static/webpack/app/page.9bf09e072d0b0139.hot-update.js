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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Order: function() { return /* binding */ Order; },\n/* harmony export */   Type: function() { return /* binding */ Type; },\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; },\n/* harmony export */   searchProperties: function() { return /* binding */ searchProperties; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nvar Type;\n(function(Type) {\n    Type[\"All\"] = \"All\";\n    Type[\"HOUSE\"] = \"house\";\n    Type[\"APARTMENT\"] = \"apartment\";\n})(Type || (Type = {}));\nvar Order;\n(function(Order) {\n    Order[\"DEFAULT\"] = \"Default\";\n    Order[\"PRICE_ASC\"] = \"price-asc\";\n    Order[\"PRICE_DESC\"] = \"price-desc\";\n    Order[\"NAME_ASC\"] = \"name-asc\";\n    Order[\"NAME_DESC\"] = \"name-desc\";\n})(Order || (Order = {}));\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false,\n    searchTerms: {\n        text: \"\",\n        type: \"All\",\n        order: \"Default\"\n    }\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst removeProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/removeProperty\", async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        searchProperties: (state, action)=>{\n            state.searchTerms = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n            state.isloading = false;\n        }).addCase(addNewProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(removeProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(removeProperty.fulfilled, (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload.id);\n            state.isloading = false;\n        }).addCase(removeProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { searchProperties } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ3REOztVQTJCZEc7Ozs7R0FBQUEsU0FBQUE7O1VBTUFDOzs7Ozs7R0FBQUEsVUFBQUE7QUFjWixNQUFNQyxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0lBQ1RDLGFBQWE7UUFDVEMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtBQUNKO0FBSU8sTUFBTUMsa0JBQWtCYixrRUFBZ0JBLENBQUMsNEJBQTRCO0lBQ3hFLE1BQU1jLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUNqQyxNQUFNQyxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUssTUFBTUMsaUJBQWlCakIsa0VBQWdCQSxDQUFDLDJCQUEyQixPQUFPa0I7SUFDN0UsTUFBTUosV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2lCLElBQUksQ0FBQyw4REFBOEREO0lBQ2hHLE1BQU1GLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFSyxNQUFNSSxpQkFBaUJwQixrRUFBZ0JBLENBQUMsMkJBQTJCLE9BQU9xQjtJQUM3RSxNQUFNUCxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDb0IsTUFBTSxDQUFDLDhEQUFpRSxPQUFIRDtJQUNsRyxNQUFNTCxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUYsTUFBTU8sa0JBQWtCdEIsNkRBQVdBLENBQUM7SUFDaEN1QixNQUFNO0lBQ05uQjtJQUNBb0IsVUFBVTtRQUNOQyxrQkFBa0IsQ0FBQ0MsT0FBT0M7WUFDdEJELE1BQU1sQixXQUFXLEdBQUdtQixPQUFPQyxPQUFPO1FBQ3RDO0lBRUo7SUFDQUMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNuQixnQkFBZ0JvQixPQUFPLEVBQUUsQ0FBQ047WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ25CLGdCQUFnQnFCLFNBQVMsRUFBRSxDQUFDUCxPQUFPQztZQUN4Q0QsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1wQixVQUFVLEdBQUdxQixPQUFPQyxPQUFPO1FBQ3JDLEdBQ0NHLE9BQU8sQ0FBQ25CLGdCQUFnQnNCLFFBQVEsRUFBRSxDQUFDUjtZQUNoQ0EsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1uQixPQUFPLEdBQUc7UUFDcEIsR0FDQ3dCLE9BQU8sQ0FBQ2YsZUFBZWdCLE9BQU8sRUFBRSxDQUFDTjtZQUM5QkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDZixlQUFlaUIsU0FBUyxFQUFFLENBQUNQLE9BQU9DO1lBQ3ZDRCxNQUFNcEIsVUFBVSxDQUFDNkIsSUFBSSxDQUFDUixPQUFPQyxPQUFPO1lBQ3BDRixNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNmLGVBQWVrQixRQUFRLEVBQUUsQ0FBQ1I7WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCLEdBQ0N3QixPQUFPLENBQUNaLGVBQWVhLE9BQU8sRUFBRSxDQUFDTjtZQUM5QkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDWixlQUFlYyxTQUFTLEVBQUUsQ0FBQ1AsT0FBT0M7WUFDdkNELE1BQU1wQixVQUFVLEdBQUdvQixNQUFNcEIsVUFBVSxDQUFDOEIsTUFBTSxDQUFDLENBQUNuQixXQUFhQSxTQUFTRyxFQUFFLEtBQUtPLE9BQU9DLE9BQU8sQ0FBQ1IsRUFBRTtZQUMxRk0sTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDWixlQUFlZSxRQUFRLEVBQUUsQ0FBQ1I7WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCO0lBQ1I7QUFDSjtBQUVPLE1BQU0sRUFBRWtCLGdCQUFnQixFQUFFLEdBQUdILGdCQUFnQmUsT0FBTztBQUUzRCwrREFBZWYsZ0JBQWdCZ0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGliL1N0b3JlL3Byb3BlcnRpZXNTbGljZS50cz8yMTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJkb21haW5cIjtcbmltcG9ydCB7IGlzRXJyb3IgfSBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG4gICAgb3duZXI6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgcHJpY2U6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHBsb3RTaXplOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9wZXJ0eXtcbiAgICBpZDogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgcGxvdFN1cmZhY2U6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbn1cbmV4cG9ydCBlbnVtIFR5cGUge1xuICAgIEFsbCA9ICdBbGwnLFxuICAgIEhPVVNFID0gJ2hvdXNlJyxcbiAgICBBUEFSVE1FTlQgPSAnYXBhcnRtZW50J1xufVxuXG5leHBvcnQgZW51bSBPcmRlciB7XG4gICAgREVGQVVMVCA9ICdEZWZhdWx0JyxcbiAgICBQUklDRV9BU0MgPSAncHJpY2UtYXNjJyxcbiAgICBQUklDRV9ERVNDID0gJ3ByaWNlLWRlc2MnLFxuICAgIE5BTUVfQVNDID0gJ25hbWUtYXNjJyxcbiAgICBOQU1FX0RFU0MgPSAnbmFtZS1kZXNjJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFRlcm1zIHtcbiAgICB0ZXh0OiBzdHJpbmdcbiAgICB0eXBlOiBUeXBlXG4gICAgb3JkZXI6IE9yZGVyXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc2xvYWRpbmc6IGZhbHNlLFxuICAgIHByb3BlcnRpZXM6IFtdIGFzIFByb3BlcnR5W10sXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAgc2VhcmNoVGVybXM6IHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHR5cGU6IFR5cGUuQWxsLFxuICAgICAgICBvcmRlcjogT3JkZXIuREVGQVVMVFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb3BlcnRpZXMgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9mZXRjaFByb3BlcnRpZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmV4cG9ydCBjb25zdCBhZGROZXdQcm9wZXJ0eSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L2FkZE5ld1Byb3BlcnR5JywgYXN5bmMgKHByb3BlcnR5OiBOZXdQcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycsIHByb3BlcnR5KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmV4cG9ydCBjb25zdCByZW1vdmVQcm9wZXJ0eSA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L3JlbW92ZVByb3BlcnR5JywgYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcy8ke2lkfWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcbiAgICByZXR1cm4gZGF0YVxufSlcblxuY29uc3QgcHJvcGVydGllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdwcm9wZXJ0eScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNlYXJjaFByb3BlcnRpZXM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNlYXJjaFRlcm1zPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGVybXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNFcnJvciA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShhZGROZXdQcm9wZXJ0eS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoYWRkTmV3UHJvcGVydHkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UocmVtb3ZlUHJvcGVydHkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHJlbW92ZVByb3BlcnR5LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gc3RhdGUucHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShyZW1vdmVQcm9wZXJ0eS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBzZWFyY2hQcm9wZXJ0aWVzIH0gPSBwcm9wZXJ0aWVzU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wZXJ0aWVzU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJheGlvcyIsIlR5cGUiLCJPcmRlciIsImluaXRpYWxTdGF0ZSIsImlzbG9hZGluZyIsInByb3BlcnRpZXMiLCJpc0Vycm9yIiwic2VhcmNoVGVybXMiLCJ0ZXh0IiwidHlwZSIsIm9yZGVyIiwiZmV0Y2hQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiYWRkTmV3UHJvcGVydHkiLCJwcm9wZXJ0eSIsInBvc3QiLCJyZW1vdmVQcm9wZXJ0eSIsImlkIiwiZGVsZXRlIiwicHJvcGVydGllc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2VhcmNoUHJvcGVydGllcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2giLCJmaWx0ZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});