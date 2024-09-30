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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e3296dd24018\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVkZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJlMzI5NmRkMjQwMThcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/lib/Store/propertiesSlice.ts":
/*!******************************************!*\
  !*** ./app/lib/Store/propertiesSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nvar Type;\n(function(Type) {\n    Type[\"All\"] = \"\";\n    Type[\"HOUSE\"] = \"house\";\n    Type[\"APARTMENT\"] = \"apartment\";\n})(Type || (Type = {}));\nvar Order;\n(function(Order) {\n    Order[\"DEFAULT\"] = \"\";\n    Order[\"PRICE_ASC\"] = \"price-asc\";\n    Order[\"PRICE_DESC\"] = \"price-desc\";\n    Order[\"NAME_ASC\"] = \"name-asc\";\n    Order[\"NAME_DESC\"] = \"name-desc\";\n})(Order || (Order = {}));\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false,\n    searchTerms: {\n        text: \"\",\n        type: \"\",\n        order: \"\"\n    }\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst removeProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/removeProperty\", async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        searchProperties: (state, action)=>{\n            state.searchTerms = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n            state.isloading = false;\n        }).addCase(addNewProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(removeProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(removeProperty.fulfilled, (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload.id);\n            state.isloading = false;\n        }).addCase(removeProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { getProperties } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRjtBQUN0RDs7VUEyQnJCRzs7OztHQUFBQSxTQUFBQTs7VUFNQUM7Ozs7OztHQUFBQSxVQUFBQTtBQWNMLE1BQU1DLGVBQWU7SUFDakJDLFdBQVc7SUFDWEMsWUFBWSxFQUFFO0lBQ2RDLFNBQVM7SUFDVEMsYUFBYTtRQUNUQyxNQUFNO1FBQ05DLElBQUk7UUFDSkMsS0FBSztJQUNUO0FBQ0o7QUFJTyxNQUFNQyxrQkFBa0JiLGtFQUFnQkEsQ0FBQyw0QkFBNEI7SUFDeEUsTUFBTWMsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDO0lBQ2pDLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFSyxNQUFNQyxpQkFBaUJqQixrRUFBZ0JBLENBQUMsMkJBQTJCLE9BQU9rQjtJQUM3RSxNQUFNSixXQUFXLE1BQU1aLDZDQUFLQSxDQUFDaUIsSUFBSSxDQUFDLDhEQUE4REQ7SUFDaEcsTUFBTUYsT0FBTyxNQUFNRixTQUFTRSxJQUFJO0lBQ2hDLE9BQU9BO0FBQ1gsR0FBRTtBQUVLLE1BQU1JLGlCQUFpQnBCLGtFQUFnQkEsQ0FBQywyQkFBMkIsT0FBT3FCO0lBQzdFLE1BQU1QLFdBQVcsTUFBTVosNkNBQUtBLENBQUNvQixNQUFNLENBQUMsOERBQWlFLE9BQUhEO0lBQ2xHLE1BQU1MLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFRixNQUFNTyxrQkFBa0J0Qiw2REFBV0EsQ0FBQztJQUNoQ3VCLE1BQU07SUFDTm5CO0lBQ0FvQixVQUFVO1FBQ05DLGtCQUFrQixDQUFDQyxPQUFPQztZQUN0QkQsTUFBTWxCLFdBQVcsR0FBR21CLE9BQU9DLE9BQU87UUFDdEM7SUFFSjtJQUNBQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ25CLGdCQUFnQm9CLE9BQU8sRUFBRSxDQUFDTjtZQUMvQkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDbkIsZ0JBQWdCcUIsU0FBUyxFQUFFLENBQUNQLE9BQU9DO1lBQ3hDRCxNQUFNckIsU0FBUyxHQUFHO1lBQ2xCcUIsTUFBTXBCLFVBQVUsR0FBR3FCLE9BQU9DLE9BQU87UUFDckMsR0FDQ0csT0FBTyxDQUFDbkIsZ0JBQWdCc0IsUUFBUSxFQUFFLENBQUNSO1lBQ2hDQSxNQUFNckIsU0FBUyxHQUFHO1lBQ2xCcUIsTUFBTW5CLE9BQU8sR0FBRztRQUNwQixHQUNDd0IsT0FBTyxDQUFDZixlQUFlZ0IsT0FBTyxFQUFFLENBQUNOO1lBQzlCQSxNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNmLGVBQWVpQixTQUFTLEVBQUUsQ0FBQ1AsT0FBT0M7WUFDdkNELE1BQU1wQixVQUFVLENBQUM2QixJQUFJLENBQUNSLE9BQU9DLE9BQU87WUFDcENGLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ2YsZUFBZWtCLFFBQVEsRUFBRSxDQUFDUjtZQUMvQkEsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1uQixPQUFPLEdBQUc7UUFDcEIsR0FDQ3dCLE9BQU8sQ0FBQ1osZUFBZWEsT0FBTyxFQUFFLENBQUNOO1lBQzlCQSxNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNaLGVBQWVjLFNBQVMsRUFBRSxDQUFDUCxPQUFPQztZQUN2Q0QsTUFBTXBCLFVBQVUsR0FBR29CLE1BQU1wQixVQUFVLENBQUM4QixNQUFNLENBQUMsQ0FBQ25CLFdBQWFBLFNBQVNHLEVBQUUsS0FBS08sT0FBT0MsT0FBTyxDQUFDUixFQUFFO1lBQzFGTSxNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNaLGVBQWVlLFFBQVEsRUFBRSxDQUFDUjtZQUMvQkEsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1uQixPQUFPLEdBQUc7UUFDcEI7SUFDUjtBQUNKO0FBRU8sTUFBTSxFQUFFOEIsYUFBYSxFQUFFLEdBQUdmLGdCQUFnQmdCLE9BQU87QUFFeEQsK0RBQWVoQixnQkFBZ0JpQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzPzIxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcImRvbWFpblwiO1xuaW1wb3J0IHsgaXNFcnJvciB9IGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHkge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbiAgICBvd25lcjogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICBwcmljZTogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcGxvdFNpemU6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1Byb3BlcnR5e1xuICAgIGlkOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBwbG90U3VyZmFjZTogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxufVxuZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnJyxcbiAgICBIT1VTRSA9ICdob3VzZScsXG4gICAgQVBBUlRNRU5UID0gJ2FwYXJ0bWVudCdcbn1cblxuZW51bSBPcmRlciB7XG4gICAgREVGQVVMVCA9ICcnLFxuICAgIFBSSUNFX0FTQyA9ICdwcmljZS1hc2MnLFxuICAgIFBSSUNFX0RFU0MgPSAncHJpY2UtZGVzYycsXG4gICAgTkFNRV9BU0MgPSAnbmFtZS1hc2MnLFxuICAgIE5BTUVfREVTQyA9ICduYW1lLWRlc2MnXG59XG5cbmludGVyZmFjZSBTZWFyY2hUZXJtcyB7XG4gICAgdGV4dDogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgb3JkZXI6IHN0cmluZ1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNsb2FkaW5nOiBmYWxzZSxcbiAgICBwcm9wZXJ0aWVzOiBbXSBhcyBQcm9wZXJ0eVtdLFxuICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgIHNlYXJjaFRlcm1zOiB7XG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0eXBlOiBUeXBlLkFsbCxcbiAgICAgICAgb3JkZXI6IE9yZGVyLkRFRkFVTFRcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9wZXJ0aWVzID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvZmV0Y2hQcm9wZXJ0aWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9hZGROZXdQcm9wZXJ0eScsIGFzeW5jIChwcm9wZXJ0eTogTmV3UHJvcGVydHkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnLCBwcm9wZXJ0eSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9yZW1vdmVQcm9wZXJ0eScsIGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMvJHtpZH1gKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmNvbnN0IHByb3BlcnRpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvcGVydHknLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZWFyY2hQcm9wZXJ0aWVzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9wZXJ0eVtdPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoVGVybXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNFcnJvciA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShhZGROZXdQcm9wZXJ0eS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoYWRkTmV3UHJvcGVydHkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UocmVtb3ZlUHJvcGVydHkucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHJlbW92ZVByb3BlcnR5LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gc3RhdGUucHJvcGVydGllcy5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShyZW1vdmVQcm9wZXJ0eS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBnZXRQcm9wZXJ0aWVzIH0gPSBwcm9wZXJ0aWVzU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wZXJ0aWVzU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJheGlvcyIsIlR5cGUiLCJPcmRlciIsImluaXRpYWxTdGF0ZSIsImlzbG9hZGluZyIsInByb3BlcnRpZXMiLCJpc0Vycm9yIiwic2VhcmNoVGVybXMiLCJ0ZXh0IiwidHlwZSIsIm9yZGVyIiwiZmV0Y2hQcm9wZXJ0aWVzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiYWRkTmV3UHJvcGVydHkiLCJwcm9wZXJ0eSIsInBvc3QiLCJyZW1vdmVQcm9wZXJ0eSIsImlkIiwiZGVsZXRlIiwicHJvcGVydGllc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2VhcmNoUHJvcGVydGllcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2giLCJmaWx0ZXIiLCJnZXRQcm9wZXJ0aWVzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});