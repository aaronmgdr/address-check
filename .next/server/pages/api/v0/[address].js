"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v0/[address]";
exports.ids = ["pages/api/v0/[address]"];
exports.modules = {

/***/ "./pages/api/v0/[address].ts":
/*!***********************************!*\
  !*** ./pages/api/v0/[address].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/address */ \"./src/address.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n // type Data = {\n//   name: string\n// }\n\nasync function handler(req, res) {\n  const info = await (0,_src_address__WEBPACK_IMPORTED_MODULE_0__.default)(req.query.address, \"celo\");\n  res.status(200).json({\n    info\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdjAvW2FkZHJlc3NdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Q0FJQTtBQUNBO0FBQ0E7O0FBRWUsZUFBZUMsT0FBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNSixxREFBVyxDQUFDRSxHQUFHLENBQUNHLEtBQUosQ0FBVUMsT0FBWCxFQUE4QixNQUE5QixDQUE5QjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSixJQUFBQTtBQUFGLEdBQXJCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZGRyZXNzLWNoZWNrLy4vcGFnZXMvYXBpL3YwL1thZGRyZXNzXS50cz85NzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IGFkZHJlc3NJbmZvIGZyb20gJy4uLy4uLy4uL3NyYy9hZGRyZXNzJ1xuXG4vLyB0eXBlIERhdGEgPSB7XG4vLyAgIG5hbWU6IHN0cmluZ1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IGluZm8gPSBhd2FpdCBhZGRyZXNzSW5mbyhyZXEucXVlcnkuYWRkcmVzcyBhcyBzdHJpbmcsIFwiY2Vsb1wiKVxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGluZm8gfSlcbn1cbiJdLCJuYW1lcyI6WyJhZGRyZXNzSW5mbyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpbmZvIiwicXVlcnkiLCJhZGRyZXNzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/v0/[address].ts\n");

/***/ }),

/***/ "./src/address.ts":
/*!************************!*\
  !*** ./src/address.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addressInfo)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nasync function addressInfo(address, chain) {\n  const celoData = await getCeloExplorerData(address);\n  !!celoData.address.contractCode;\n  return _objectSpread({\n    advice: \"info\",\n    message: \"\",\n    isSmartContract: false,\n    meta: {}\n  }, smartContract(celoData));\n}\n\nfunction smartContract(celoData) {\n  if (!!celoData.address.contractCode) {\n    var _celoData$address$sma;\n\n    const contractName = (_celoData$address$sma = celoData.address.smartContract) === null || _celoData$address$sma === void 0 ? void 0 : _celoData$address$sma.name;\n    return {\n      advice: \"warn\",\n      isSmartContract: true,\n      message: `This address belongs to ${contractName || \"a\"} smart contract. Sending tokens my result in their loss if the contract is not intended to receive in this way.`\n    };\n  }\n\n  return {};\n}\n\nconst query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\n  query getAddress($hash: AddressHash!) {\n    address(hash: $hash) {\n      celoAccount {\n        accountType\n        name\n      }\n      celoValidator {\n        name\n      }\n      smartContract {\n        name\n      }\n      contractCode\n      fetchedCoinBalance\n  }\n}\n`;\n\nasync function getCeloExplorerData(address) {\n  const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(\"https://explorer.celo.org/graphiql\", query, {\n    hash: address\n  });\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRkcmVzcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQWNlLGVBQWVFLFdBQWYsQ0FBMkJDLE9BQTNCLEVBQTRDQyxLQUE1QyxFQUFpRjtBQUM5RixRQUFNQyxRQUFRLEdBQUcsTUFBTUMsbUJBQW1CLENBQUNILE9BQUQsQ0FBMUM7QUFFQSxHQUFDLENBQUNFLFFBQVEsQ0FBQ0YsT0FBVCxDQUFpQkksWUFBbkI7QUFFQTtBQUNFQyxJQUFBQSxNQUFNLEVBQUUsTUFEVjtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsRUFGWDtBQUdFQyxJQUFBQSxlQUFlLEVBQUUsS0FIbkI7QUFJRUMsSUFBQUEsSUFBSSxFQUFFO0FBSlIsS0FLS0MsYUFBYSxDQUFDUCxRQUFELENBTGxCO0FBT0Q7O0FBRUQsU0FBU08sYUFBVCxDQUF1QlAsUUFBdkIsRUFBcUU7QUFDbkUsTUFBSSxDQUFDLENBQUNBLFFBQVEsQ0FBQ0YsT0FBVCxDQUFpQkksWUFBdkIsRUFBcUM7QUFBQTs7QUFDbkMsVUFBTU0sWUFBWSw0QkFBR1IsUUFBUSxDQUFDRixPQUFULENBQWlCUyxhQUFwQiwwREFBRyxzQkFBZ0NFLElBQXJEO0FBQ0EsV0FBTztBQUNMTixNQUFBQSxNQUFNLEVBQUUsTUFESDtBQUVMRSxNQUFBQSxlQUFlLEVBQUUsSUFGWjtBQUdMRCxNQUFBQSxPQUFPLEVBQUcsMkJBQTBCSSxZQUFZLElBQUksR0FBSTtBQUhuRCxLQUFQO0FBS0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0Q7O0FBR0QsTUFBTUUsS0FBSyxHQUFHZCxnREFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJBOztBQWdDQSxlQUFlSyxtQkFBZixDQUFtQ0gsT0FBbkMsRUFBb0Q7QUFDbEQsUUFBTWEsSUFBSSxHQUFJLE1BQU1oQix3REFBTyxDQUFlLG9DQUFmLEVBQXFEZSxLQUFyRCxFQUE0RDtBQUFDRSxJQUFBQSxJQUFJLEVBQUVkO0FBQVAsR0FBNUQsQ0FBM0I7QUFDQSxTQUFPYSxJQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZGRyZXNzLWNoZWNrLy4vc3JjL2FkZHJlc3MudHM/MzYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5cbmludGVyZmFjZSBBZGRyZXNzSW5mbyB7XG4gIGFkdmljZTogXCJzdG9wXCIgfCBcIndhcm5cIiB8IFwiaW5mb1wiXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBrbm93bkV2aWw/OiB0cnVlIHwgbnVsbFxuICBlbnM/OiBhbnlcbiAgbm9tc3BhY2U/OiBhbnlcbiAgaXNTbWFydENvbnRyYWN0OiBib29sZWFuXG5cbiAgbWV0YToge31cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRyZXNzSW5mbyhhZGRyZXNzOiBzdHJpbmcsIGNoYWluOiBzdHJpbmcpOiBQcm9taXNlPEFkZHJlc3NJbmZvPiB7XG4gIGNvbnN0IGNlbG9EYXRhID0gYXdhaXQgZ2V0Q2Vsb0V4cGxvcmVyRGF0YShhZGRyZXNzKVxuXG4gICEhY2Vsb0RhdGEuYWRkcmVzcy5jb250cmFjdENvZGVcblxuICByZXR1cm4ge1xuICAgIGFkdmljZTogXCJpbmZvXCIgYXMgY29uc3QsXG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBpc1NtYXJ0Q29udHJhY3Q6IGZhbHNlLFxuICAgIG1ldGE6IHt9LFxuICAgIC4uLnNtYXJ0Q29udHJhY3QoY2Vsb0RhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gc21hcnRDb250cmFjdChjZWxvRGF0YTogQWRkcmVzc1F1ZXJ5KTogUGFydGlhbDxBZGRyZXNzSW5mbz4ge1xuICBpZiAoISFjZWxvRGF0YS5hZGRyZXNzLmNvbnRyYWN0Q29kZSkge1xuICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNlbG9EYXRhLmFkZHJlc3Muc21hcnRDb250cmFjdD8ubmFtZVxuICAgIHJldHVybiB7XG4gICAgICBhZHZpY2U6IFwid2FyblwiLFxuICAgICAgaXNTbWFydENvbnRyYWN0OiB0cnVlLFxuICAgICAgbWVzc2FnZTogYFRoaXMgYWRkcmVzcyBiZWxvbmdzIHRvICR7Y29udHJhY3ROYW1lIHx8IFwiYVwifSBzbWFydCBjb250cmFjdC4gU2VuZGluZyB0b2tlbnMgbXkgcmVzdWx0IGluIHRoZWlyIGxvc3MgaWYgdGhlIGNvbnRyYWN0IGlzIG5vdCBpbnRlbmRlZCB0byByZWNlaXZlIGluIHRoaXMgd2F5LmBcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge31cbn1cblxuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgcXVlcnkgZ2V0QWRkcmVzcygkaGFzaDogQWRkcmVzc0hhc2ghKSB7XG4gICAgYWRkcmVzcyhoYXNoOiAkaGFzaCkge1xuICAgICAgY2Vsb0FjY291bnQge1xuICAgICAgICBhY2NvdW50VHlwZVxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgICBjZWxvVmFsaWRhdG9yIHtcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgICAgc21hcnRDb250cmFjdCB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICAgIGNvbnRyYWN0Q29kZVxuICAgICAgZmV0Y2hlZENvaW5CYWxhbmNlXG4gIH1cbn1cbmBcblxuaW50ZXJmYWNlIEFkZHJlc3NRdWVyeSB7XG4gIGFkZHJlc3M6IHtcbiAgICBjZWxvQWNjb3VudDoge1xuICAgICAgYWNjb3VudFR5cGU6IHN0cmluZ1xuICAgICAgbmFtZT86c3RyaW5nXG4gICAgfSxcbiAgICBzbWFydENvbnRyYWN0Pzoge1xuICAgICAgbmFtZT86IHN0cmluZ1xuICAgIH1cbiAgICBjb250cmFjdENvZGU/OiBzdHJpbmdcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDZWxvRXhwbG9yZXJEYXRhKGFkZHJlc3M6IHN0cmluZykge1xuICBjb25zdCBkYXRhID0gIGF3YWl0IHJlcXVlc3Q8QWRkcmVzc1F1ZXJ5PihcImh0dHBzOi8vZXhwbG9yZXIuY2Vsby5vcmcvZ3JhcGhpcWxcIiwgcXVlcnksIHtoYXNoOiBhZGRyZXNzfSlcbiAgcmV0dXJuIGRhdGFcbn0iXSwibmFtZXMiOlsicmVxdWVzdCIsImdxbCIsImFkZHJlc3NJbmZvIiwiYWRkcmVzcyIsImNoYWluIiwiY2Vsb0RhdGEiLCJnZXRDZWxvRXhwbG9yZXJEYXRhIiwiY29udHJhY3RDb2RlIiwiYWR2aWNlIiwibWVzc2FnZSIsImlzU21hcnRDb250cmFjdCIsIm1ldGEiLCJzbWFydENvbnRyYWN0IiwiY29udHJhY3ROYW1lIiwibmFtZSIsInF1ZXJ5IiwiZGF0YSIsImhhc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/address.ts\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/v0/[address].ts"));
module.exports = __webpack_exports__;

})();