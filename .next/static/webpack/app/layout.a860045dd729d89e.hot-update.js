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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a3fc7c369a80\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVkZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhM2ZjN2MzNjlhODBcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/lib/Store/propertiesSlice.ts":
/*!******************************************!*\
  !*** ./app/lib/Store/propertiesSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Order: function() { return /* binding */ Order; },\n/* harmony export */   Type: function() { return /* binding */ Type; },\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; },\n/* harmony export */   searchProperties: function() { return /* binding */ searchProperties; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nvar Type;\n(function(Type) {\n    Type[\"All\"] = \"\";\n    Type[\"House\"] = \"house\";\n    Type[\"Apartment\"] = \"apartment\";\n})(Type || (Type = {}));\nvar Order;\n(function(Order) {\n    Order[\"Default\"] = \"\";\n    Order[\"Price_Ascending\"] = \"price-asc\";\n    Order[\"Price_Descending\"] = \"price-desc\";\n    Order[\"Name_Ascending\"] = \"name-asc\";\n    Order[\"Name_Descending\"] = \"name-desc\";\n})(Order || (Order = {}));\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false,\n    searchTerms: {\n        text: \"\",\n        type: \"\",\n        order: \"\"\n    }\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst removeProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/removeProperty\", async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        searchProperties: (state, action)=>{\n            state.searchTerms = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n            state.isloading = false;\n        }).addCase(addNewProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(removeProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(removeProperty.fulfilled, (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload.id);\n            state.isloading = false;\n        }).addCase(removeProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { searchProperties } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ3REOztVQTJCZEc7Ozs7R0FBQUEsU0FBQUE7O1VBTUFDOzs7Ozs7R0FBQUEsVUFBQUE7QUFjWixNQUFNQyxlQUFlO0lBQ2pCQyxXQUFXO0lBQ1hDLFlBQVksRUFBRTtJQUNkQyxTQUFTO0lBQ1RDLGFBQWE7UUFDVEMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLEtBQUs7SUFDVDtBQUNKO0FBSU8sTUFBTUMsa0JBQWtCYixrRUFBZ0JBLENBQUMsNEJBQTRCO0lBQ3hFLE1BQU1jLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLEdBQUcsQ0FBQztJQUNqQyxNQUFNQyxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUssTUFBTUMsaUJBQWlCakIsa0VBQWdCQSxDQUFDLDJCQUEyQixPQUFPa0I7SUFDN0UsTUFBTUosV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2lCLElBQUksQ0FBQyw4REFBOEREO0lBQ2hHLE1BQU1GLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFSyxNQUFNSSxpQkFBaUJwQixrRUFBZ0JBLENBQUMsMkJBQTJCLE9BQU9xQjtJQUM3RSxNQUFNUCxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDb0IsTUFBTSxDQUFDLDhEQUFpRSxPQUFIRDtJQUNsRyxNQUFNTCxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUYsTUFBTU8sa0JBQWtCdEIsNkRBQVdBLENBQUM7SUFDaEN1QixNQUFNO0lBQ05uQjtJQUNBb0IsVUFBVTtRQUNOQyxrQkFBa0IsQ0FBQ0MsT0FBT0M7WUFDdEJELE1BQU1sQixXQUFXLEdBQUdtQixPQUFPQyxPQUFPO1FBQ3RDO0lBRUo7SUFDQUMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNuQixnQkFBZ0JvQixPQUFPLEVBQUUsQ0FBQ047WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ25CLGdCQUFnQnFCLFNBQVMsRUFBRSxDQUFDUCxPQUFPQztZQUN4Q0QsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1wQixVQUFVLEdBQUdxQixPQUFPQyxPQUFPO1FBQ3JDLEdBQ0NHLE9BQU8sQ0FBQ25CLGdCQUFnQnNCLFFBQVEsRUFBRSxDQUFDUjtZQUNoQ0EsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1uQixPQUFPLEdBQUc7UUFDcEIsR0FDQ3dCLE9BQU8sQ0FBQ2YsZUFBZWdCLE9BQU8sRUFBRSxDQUFDTjtZQUM5QkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDZixlQUFlaUIsU0FBUyxFQUFFLENBQUNQLE9BQU9DO1lBQ3ZDRCxNQUFNcEIsVUFBVSxDQUFDNkIsSUFBSSxDQUFDUixPQUFPQyxPQUFPO1lBQ3BDRixNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNmLGVBQWVrQixRQUFRLEVBQUUsQ0FBQ1I7WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCLEdBQ0N3QixPQUFPLENBQUNaLGVBQWVhLE9BQU8sRUFBRSxDQUFDTjtZQUM5QkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDWixlQUFlYyxTQUFTLEVBQUUsQ0FBQ1AsT0FBT0M7WUFDdkNELE1BQU1wQixVQUFVLEdBQUdvQixNQUFNcEIsVUFBVSxDQUFDOEIsTUFBTSxDQUFDLENBQUNuQixXQUFhQSxTQUFTRyxFQUFFLEtBQUtPLE9BQU9DLE9BQU8sQ0FBQ1IsRUFBRTtZQUMxRk0sTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDWixlQUFlZSxRQUFRLEVBQUUsQ0FBQ1I7WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCO0lBQ1I7QUFDSjtBQUVPLE1BQU0sRUFBRWtCLGdCQUFnQixFQUFFLEdBQUdILGdCQUFnQmUsT0FBTztBQUUzRCwrREFBZWYsZ0JBQWdCZ0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGliL1N0b3JlL3Byb3BlcnRpZXNTbGljZS50cz8yMTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJkb21haW5cIjtcbmltcG9ydCB7IGlzRXJyb3IgfSBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG4gICAgb3duZXI6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgcHJpY2U6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHBsb3RTaXplOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9wZXJ0eXtcbiAgICBpZDogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgcGxvdFN1cmZhY2U6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbn1cbmV4cG9ydCBlbnVtIFR5cGUge1xuICAgIEFsbCA9ICcnLFxuICAgIEhvdXNlID0gJ2hvdXNlJyxcbiAgICBBcGFydG1lbnQgPSAnYXBhcnRtZW50J1xufVxuXG5leHBvcnQgZW51bSBPcmRlciB7XG4gICAgRGVmYXVsdCA9ICcnLFxuICAgIFByaWNlX0FzY2VuZGluZyA9ICdwcmljZS1hc2MnLFxuICAgIFByaWNlX0Rlc2NlbmRpbmcgPSAncHJpY2UtZGVzYycsXG4gICAgTmFtZV9Bc2NlbmRpbmcgPSAnbmFtZS1hc2MnLFxuICAgIE5hbWVfRGVzY2VuZGluZyA9ICduYW1lLWRlc2MnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoVGVybXMge1xuICAgIHRleHQ6IHN0cmluZ1xuICAgIHR5cGU6IFR5cGVcbiAgICBvcmRlcjogT3JkZXJcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzbG9hZGluZzogZmFsc2UsXG4gICAgcHJvcGVydGllczogW10gYXMgUHJvcGVydHlbXSxcbiAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICBzZWFyY2hUZXJtczoge1xuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgdHlwZTogVHlwZS5BbGwsXG4gICAgICAgIG9yZGVyOiBPcmRlci5EZWZhdWx0XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvcGVydGllcyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Byb3BlcnR5L2ZldGNoUHJvcGVydGllcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly82NDM4Zjk2MDQ2NjBmMjZlYjFhNzU2OGIubW9ja2FwaS5pby9hcGkvcHJvcGVydGllcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcbiAgICByZXR1cm4gZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Byb3BlcnR5ID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvYWRkTmV3UHJvcGVydHknLCBhc3luYyAocHJvcGVydHk6IE5ld1Byb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJywgcHJvcGVydHkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcbiAgICByZXR1cm4gZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb3BlcnR5ID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvcmVtb3ZlUHJvcGVydHknLCBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzLyR7aWR9YClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5jb25zdCBwcm9wZXJ0aWVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3Byb3BlcnR5JyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2VhcmNoUHJvcGVydGllczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248U2VhcmNoVGVybXM+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hUZXJtcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShhZGROZXdQcm9wZXJ0eS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoYWRkTmV3UHJvcGVydHkucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNFcnJvciA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShyZW1vdmVQcm9wZXJ0eS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UocmVtb3ZlUHJvcGVydHkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBzdGF0ZS5wcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHByb3BlcnR5LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHJlbW92ZVByb3BlcnR5LnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IHNlYXJjaFByb3BlcnRpZXMgfSA9IHByb3BlcnRpZXNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHByb3BlcnRpZXNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImF4aW9zIiwiVHlwZSIsIk9yZGVyIiwiaW5pdGlhbFN0YXRlIiwiaXNsb2FkaW5nIiwicHJvcGVydGllcyIsImlzRXJyb3IiLCJzZWFyY2hUZXJtcyIsInRleHQiLCJ0eXBlIiwib3JkZXIiLCJmZXRjaFByb3BlcnRpZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJhZGROZXdQcm9wZXJ0eSIsInByb3BlcnR5IiwicG9zdCIsInJlbW92ZVByb3BlcnR5IiwiaWQiLCJkZWxldGUiLCJwcm9wZXJ0aWVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZWFyY2hQcm9wZXJ0aWVzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaCIsImZpbHRlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});