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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProperty: function() { return /* binding */ addNewProperty; },\n/* harmony export */   addProperty: function() { return /* binding */ addProperty; },\n/* harmony export */   fetchProperties: function() { return /* binding */ fetchProperties; },\n/* harmony export */   getProperties: function() { return /* binding */ getProperties; },\n/* harmony export */   removeProperty: function() { return /* binding */ removeProperty; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    isloading: false,\n    properties: [],\n    isError: false\n};\nconst fetchProperties = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/fetchProperties\", async ()=>{\n    const response = await fetch(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\");\n    const data = await response.json();\n    return data;\n});\nconst addNewProperty = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"property/addNewProperty\", async (property)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://6438f9604660f26eb1a7568b.mockapi.io/api/properties\", property);\n    const data = await response.data;\n    return data;\n});\nconst propertiesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"property\",\n    initialState,\n    reducers: {\n        getProperties: (state, action)=>{\n            state.properties = action.payload;\n        },\n        addProperty: (state, action)=>{\n            state.properties.push(action.payload);\n        },\n        removeProperty: (state, action)=>{\n            state.properties = state.properties.filter((property)=>property.id !== action.payload);\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProperties.pending, (state)=>{\n            state.isloading = true;\n        }).addCase(fetchProperties.fulfilled, (state, action)=>{\n            state.isloading = false;\n            state.properties = action.payload;\n        }).addCase(fetchProperties.rejected, (state)=>{\n            state.isloading = false;\n            state.isError = true;\n        });\n    }\n});\nconst { getProperties, addProperty, removeProperty } = propertiesSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (propertiesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvU3RvcmUvcHJvcGVydGllc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDdEQ7QUE0QjFCLE1BQU1HLGVBQWU7SUFDakJDLFdBQVc7SUFDWEMsWUFBWSxFQUFFO0lBQ2RDLFNBQVM7QUFDYjtBQUVPLE1BQU1DLGtCQUFrQlAsa0VBQWdCQSxDQUFDLDRCQUE0QjtJQUN4RSxNQUFNUSxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE9BQU9EO0FBQ1gsR0FBRTtBQUVLLE1BQU1FLGlCQUFpQlosa0VBQWdCQSxDQUFDLDJCQUEyQixPQUFPYTtJQUM3RSxNQUFNTCxXQUFXLE1BQU1OLDZDQUFLQSxDQUFDWSxJQUFJLENBQUMsOERBQThERDtJQUNoRyxNQUFNSCxPQUFPLE1BQU1GLFNBQVNFLElBQUk7SUFDaEMsT0FBT0E7QUFDWCxHQUFFO0FBRUYsTUFBTUssa0JBQWtCZCw2REFBV0EsQ0FBQztJQUNoQ2UsTUFBTTtJQUNOYjtJQUNBYyxVQUFVO1FBQ05DLGVBQWUsQ0FBQ0MsT0FBT0M7WUFDbkJELE1BQU1kLFVBQVUsR0FBR2UsT0FBT0MsT0FBTztRQUNyQztRQUNBQyxhQUFhLENBQUNILE9BQU9DO1lBQ2pCRCxNQUFNZCxVQUFVLENBQUNrQixJQUFJLENBQUNILE9BQU9DLE9BQU87UUFDeEM7UUFFQUcsZ0JBQWdCLENBQUNMLE9BQU9DO1lBQ3BCRCxNQUFNZCxVQUFVLEdBQUdjLE1BQU1kLFVBQVUsQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDWixXQUF1QkEsU0FBU2EsRUFBRSxLQUFLTixPQUFPQyxPQUFPO1FBQ3JHO0lBRUo7SUFDQU0sZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUN0QixnQkFBZ0J1QixPQUFPLEVBQUUsQ0FBQ1g7WUFDL0JBLE1BQU1mLFNBQVMsR0FBRztRQUN0QixHQUNDeUIsT0FBTyxDQUFDdEIsZ0JBQWdCd0IsU0FBUyxFQUFFLENBQUNaLE9BQU9DO1lBQ3hDRCxNQUFNZixTQUFTLEdBQUc7WUFDbEJlLE1BQU1kLFVBQVUsR0FBR2UsT0FBT0MsT0FBTztRQUNyQyxHQUNDUSxPQUFPLENBQUN0QixnQkFBZ0J5QixRQUFRLEVBQUUsQ0FBQ2I7WUFDaENBLE1BQU1mLFNBQVMsR0FBRztZQUNsQmUsTUFBTWIsT0FBTyxHQUFHO1FBQ3BCO0lBQ1I7QUFDSjtBQUVPLE1BQU0sRUFBRVksYUFBYSxFQUFFSSxXQUFXLEVBQUVFLGNBQWMsRUFBRSxHQUFHVCxnQkFBZ0JrQixPQUFPO0FBRXJGLCtEQUFlbEIsZ0JBQWdCbUIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGliL1N0b3JlL3Byb3BlcnRpZXNTbGljZS50cz8yMTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJkb21haW5cIjtcbmltcG9ydCB7IGlzRXJyb3IgfSBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5IHtcbiAgICBpZDogc3RyaW5nXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIHJvb21zOiBudW1iZXJcbiAgICBmbG9vcjogbnVtYmVyXG4gICAgb3duZXI6IHN0cmluZ1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nXG4gICAgYWRkcmVzczogc3RyaW5nXG4gICAgcHJpY2U6IHN0cmluZ1xuICAgIHR5cGU6IHN0cmluZ1xuICAgIHBsb3RTaXplOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9wZXJ0eXtcbiAgICBpZDogc3RyaW5nXG4gICAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBhZGRyZXNzOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICByb29tczogbnVtYmVyXG4gICAgcGxvdFN1cmZhY2U6IG51bWJlclxuICAgIGZsb29yOiBudW1iZXJcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzbG9hZGluZzogZmFsc2UsXG4gICAgcHJvcGVydGllczogW10gYXMgUHJvcGVydHlbXSxcbiAgICBpc0Vycm9yOiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9wZXJ0aWVzID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvZmV0Y2hQcm9wZXJ0aWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vNjQzOGY5NjA0NjYwZjI2ZWIxYTc1NjhiLm1vY2thcGkuaW8vYXBpL3Byb3BlcnRpZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Byb3BlcnR5ID0gY3JlYXRlQXN5bmNUaHVuaygncHJvcGVydHkvYWRkTmV3UHJvcGVydHknLCBhc3luYyAocHJvcGVydHk6IE5ld1Byb3BlcnR5KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovLzY0MzhmOTYwNDY2MGYyNmViMWE3NTY4Yi5tb2NrYXBpLmlvL2FwaS9wcm9wZXJ0aWVzJywgcHJvcGVydHkpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGFcbiAgICByZXR1cm4gZGF0YVxufSlcblxuY29uc3QgcHJvcGVydGllc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdwcm9wZXJ0eScsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIGdldFByb3BlcnRpZXM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFByb3BlcnR5W10+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUHJvcGVydHk6IChzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248TmV3UHJvcGVydHk+KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9wZXJ0aWVzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlUHJvcGVydHk6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnByb3BlcnRpZXMgPSBzdGF0ZS5wcm9wZXJ0aWVzLmZpbHRlcigocHJvcGVydHk6IFByb3BlcnR5KSA9PiBwcm9wZXJ0eS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFByb3BlcnRpZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmlzbG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc3RhdGUucHJvcGVydGllcyA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9wZXJ0aWVzLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc2xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHN0YXRlLmlzRXJyb3IgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IGdldFByb3BlcnRpZXMsIGFkZFByb3BlcnR5LCByZW1vdmVQcm9wZXJ0eSB9ID0gcHJvcGVydGllc1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydGllc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJpc2xvYWRpbmciLCJwcm9wZXJ0aWVzIiwiaXNFcnJvciIsImZldGNoUHJvcGVydGllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFkZE5ld1Byb3BlcnR5IiwicHJvcGVydHkiLCJwb3N0IiwicHJvcGVydGllc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZ2V0UHJvcGVydGllcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZFByb3BlcnR5IiwicHVzaCIsInJlbW92ZVByb3BlcnR5IiwiZmlsdGVyIiwiaWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/Store/propertiesSlice.ts\n"));

/***/ })

});