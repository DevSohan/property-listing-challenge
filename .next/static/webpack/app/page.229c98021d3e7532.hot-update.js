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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nvar Type;\n(function(Type) {\n    Type[\"All\"] = \"\";\n    Type[\"HOUSE\"] = \"house\";\n    Type[\"APARTMENT\"] = \"apartment\";\n})(Type || (Type = {}));\nvar Order;\n(function(Order) {\n    Order[\"DEFAULT\"] = \"\";\n    Order[\"PRICE_ASC\"] = \"price-asc\";\n    Order[\"PRICE_DESC\"] = \"price-desc\";\n    Order[\"NAME_ASC\"] = \"name-asc\";\n    Order[\"NAME_DESC\"] = \"name-desc\";\n})(Order || (Order = {}));\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false,\n    SearchTerms: {\n        text: \"\",\n        type: \"\",\n        order: \"\"\n    }\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.data;\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst removeProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/removeProperty\", async (id)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/\".concat(id));\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(addNewProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(addNewProperty.fulfilled, (state, action)=>{\n            state.properties.push(action.payload);\n            state.isloading = false;\n        }).addCase(addNewProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        }).addCase(removeProperty.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(removeProperty.fulfilled, (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload.id);\n            state.isloading = false;\n        }).addCase(removeProperty.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { getProperties } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRjtBQUN0RDs7VUEyQnJCRzs7OztHQUFBQSxTQUFBQTs7VUFNQUM7Ozs7OztHQUFBQSxVQUFBQTtBQWNMLE1BQU1DLGVBQWU7SUFDakJDLFdBQVc7SUFDWEMsWUFBWSxFQUFFO0lBQ2RDLFNBQVM7SUFDVEMsYUFBYTtRQUNUQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztJQUNYO0FBQ0o7QUFJTyxNQUFNQyxrQkFBa0JiLGtFQUFnQkEsQ0FBQyw0QkFBNEI7SUFDeEUsTUFBTWMsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDO0lBQ2pDLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFSyxNQUFNQyxpQkFBaUJqQixrRUFBZ0JBLENBQUMsMkJBQTJCLE9BQU9rQjtJQUM3RSxNQUFNSixXQUFXLE1BQU1aLDZDQUFLQSxDQUFDaUIsSUFBSSxDQUFDLDhEQUE4REQ7SUFDaEcsTUFBTUYsT0FBTyxNQUFNRixTQUFTRSxJQUFJO0lBQ2hDLE9BQU9BO0FBQ1gsR0FBRTtBQUVLLE1BQU1JLGlCQUFpQnBCLGtFQUFnQkEsQ0FBQywyQkFBMkIsT0FBT3FCO0lBQzdFLE1BQU1QLFdBQVcsTUFBTVosNkNBQUtBLENBQUNvQixNQUFNLENBQUMsOERBQWlFLE9BQUhEO0lBQ2xHLE1BQU1MLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtJQUNoQyxPQUFPQTtBQUNYLEdBQUU7QUFFRixNQUFNTyxrQkFBa0J0Qiw2REFBV0EsQ0FBQztJQUNoQ3VCLE1BQU07SUFDTm5CO0lBQ0FvQixVQUFVO1FBQ05DLGVBQWUsQ0FBQ0MsT0FBT0M7WUFDbkJELE1BQU1wQixVQUFVLEdBQUdxQixPQUFPQyxPQUFPO1FBQ3JDO0lBRUo7SUFDQUMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNuQixnQkFBZ0JvQixPQUFPLEVBQUUsQ0FBQ047WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7UUFDdEIsR0FDQzBCLE9BQU8sQ0FBQ25CLGdCQUFnQnFCLFNBQVMsRUFBRSxDQUFDUCxPQUFPQztZQUN4Q0QsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1wQixVQUFVLEdBQUdxQixPQUFPQyxPQUFPO1FBQ3JDLEdBQ0NHLE9BQU8sQ0FBQ25CLGdCQUFnQnNCLFFBQVEsRUFBRSxDQUFDUjtZQUNoQ0EsTUFBTXJCLFNBQVMsR0FBRztZQUNsQnFCLE1BQU1uQixPQUFPLEdBQUc7UUFDcEIsR0FDQ3dCLE9BQU8sQ0FBQ2YsZUFBZWdCLE9BQU8sRUFBRSxDQUFDTjtZQUM5QkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDZixlQUFlaUIsU0FBUyxFQUFFLENBQUNQLE9BQU9DO1lBQ3ZDRCxNQUFNcEIsVUFBVSxDQUFDNkIsSUFBSSxDQUFDUixPQUFPQyxPQUFPO1lBQ3BDRixNQUFNckIsU0FBUyxHQUFHO1FBQ3RCLEdBQ0MwQixPQUFPLENBQUNmLGVBQWVrQixRQUFRLEVBQUUsQ0FBQ1I7WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCLEdBQ0N3QixPQUFPLENBQUNaLGVBQWVhLE9BQU8sRUFBRSxDQUFDTjtZQUM5QkEsTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDWixlQUFlYyxTQUFTLEVBQUUsQ0FBQ1AsT0FBT0M7WUFDdkNELE1BQU1wQixVQUFVLEdBQUdvQixNQUFNcEIsVUFBVSxDQUFDOEIsTUFBTSxDQUFDLENBQUNuQixXQUFhQSxTQUFTRyxFQUFFLEtBQUtPLE9BQU9DLE9BQU8sQ0FBQ1IsRUFBRTtZQUMxRk0sTUFBTXJCLFNBQVMsR0FBRztRQUN0QixHQUNDMEIsT0FBTyxDQUFDWixlQUFlZSxRQUFRLEVBQUUsQ0FBQ1I7WUFDL0JBLE1BQU1yQixTQUFTLEdBQUc7WUFDbEJxQixNQUFNbkIsT0FBTyxHQUFHO1FBQ3BCO0lBQ1I7QUFDSjtBQUVPLE1BQU0sRUFBRWtCLGFBQWEsRUFBRSxHQUFHSCxnQkFBZ0JlLE9BQU87QUFFeEQsK0RBQWVmLGdCQUFnQmdCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9TdG9yZS9wcm9wZXJ0aWVzU2xpY2UudHM/MjE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiZG9tYWluXCI7XG5pbXBvcnQgeyBpc0Vycm9yIH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgZmxvb3I6IG51bWJlclxuICAgIG93bmVyOiBzdHJpbmdcbiAgICBjcmVhdGVkQXQ6IHN0cmluZ1xuICAgIGFkZHJlc3M6IHN0cmluZ1xuICAgIHByaWNlOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBwbG90U2l6ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvcGVydHl7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgdHlwZTogc3RyaW5nXG4gICAgcm9vbXM6IG51bWJlclxuICAgIHBsb3RTdXJmYWNlOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG59XG5lbnVtIFR5cGUge1xuICAgIEFsbCA9ICcnLFxuICAgIEhPVVNFID0gJ2hvdXNlJyxcbiAgICBBUEFSVE1FTlQgPSAnYXBhcnRtZW50J1xufVxuXG5lbnVtIE9yZGVyIHtcbiAgICBERUZBVUxUID0gJycsXG4gICAgUFJJQ0VfQVNDID0gJ3ByaWNlLWFzYycsXG4gICAgUFJJQ0VfREVTQyA9ICdwcmljZS1kZXNjJyxcbiAgICBOQU1FX0FTQyA9ICduYW1lLWFzYycsXG4gICAgTkFNRV9ERVNDID0gJ25hbWUtZGVzYydcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFRlcm1zIHtcbiAgICB0ZXh0OiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBvcmRlcjogc3RyaW5nXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc2xvYWRpbmc6IGZhbHNlLFxuICAgIHByb3BlcnRpZXM6IFtdIGFzIFByb3BlcnR5W10sXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAgU2VhcmNoVGVybXM6IHtcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBvcmRlcjogJydcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9wZXJ0aWVzID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvZmV0Y2hQcm9wZXJ0aWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9hZGROZXdQcm9wZXJ0eScsIGFzeW5jIChwcm9wZXJ0eTogTmV3UHJvcGVydHkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnLCBwcm9wZXJ0eSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxuICAgIHJldHVybiBkYXRhXG59KVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvcGVydHkgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9wZXJ0eS9yZW1vdmVQcm9wZXJ0eScsIGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMvJHtpZH1gKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG4gICAgcmV0dXJuIGRhdGFcbn0pXG5cbmNvbnN0IHByb3BlcnRpZXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvcGVydHknLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBnZXRQcm9wZXJ0aWVzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9wZXJ0eVtdPikgPT4ge1xuICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvcGVydGllcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXNsb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0Vycm9yID0gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGFkZE5ld1Byb3BlcnR5LnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShhZGROZXdQcm9wZXJ0eS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoYWRkTmV3UHJvcGVydHkucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNFcnJvciA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShyZW1vdmVQcm9wZXJ0eS5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UocmVtb3ZlUHJvcGVydHkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBzdGF0ZS5wcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHkpID0+IHByb3BlcnR5LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHJlbW92ZVByb3BlcnR5LnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGdldFByb3BlcnRpZXMgfSA9IHByb3BlcnRpZXNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHByb3BlcnRpZXNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImF4aW9zIiwiVHlwZSIsIk9yZGVyIiwiaW5pdGlhbFN0YXRlIiwiaXNsb2FkaW5nIiwicHJvcGVydGllcyIsImlzRXJyb3IiLCJTZWFyY2hUZXJtcyIsInRleHQiLCJ0eXBlIiwib3JkZXIiLCJmZXRjaFByb3BlcnRpZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJhZGROZXdQcm9wZXJ0eSIsInByb3BlcnR5IiwicG9zdCIsInJlbW92ZVByb3BlcnR5IiwiaWQiLCJkZWxldGUiLCJwcm9wZXJ0aWVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJnZXRQcm9wZXJ0aWVzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaCIsImZpbHRlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});