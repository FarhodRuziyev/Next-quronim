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
exports.id = "pages/surah/[number]";
exports.ids = ["pages/surah/[number]"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Home_navbar__H7ooC\",\n\t\"ul\": \"Home_ul__fkmwq\",\n\t\"surahdiv\": \"Home_surahdiv__AhVVt\",\n\t\"card1\": \"Home_card1__Kylal\",\n\t\"card2\": \"Home_card2___9f4Z\",\n\t\"single\": \"Home_single__w_OJc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1cm9uaW0vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2YmFyXCI6IFwiSG9tZV9uYXZiYXJfX0g3b29DXCIsXG5cdFwidWxcIjogXCJIb21lX3VsX19ma213cVwiLFxuXHRcInN1cmFoZGl2XCI6IFwiSG9tZV9zdXJhaGRpdl9fQWhWVnRcIixcblx0XCJjYXJkMVwiOiBcIkhvbWVfY2FyZDFfX0t5bGFsXCIsXG5cdFwiY2FyZDJcIjogXCJIb21lX2NhcmQyX19fOWY0WlwiLFxuXHRcInNpbmdsZVwiOiBcIkhvbWVfc2luZ2xlX193X09KY1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/surah/[number].tsx":
/*!**********************************!*\
  !*** ./pages/surah/[number].tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(`https://api.alquran.cloud/v1/surah`);\n    const repo = await res.json();\n    const paths = repo?.data?.map((p)=>{\n        return {\n            params: {\n                number: `${p?.number}`\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const { params  } = context;\n    const res = await fetch(`https://quranenc.com/api/v1/translation/sura/uzbek_mansour/${params.number}`);\n    const repo = await res.json();\n    return {\n        props: {\n            repo\n        }\n    };\n};\n\nconst SingleProps = ({ repo  })=>{\n    console.log(repo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().card2),\n            children: repo?.result?.map((p, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().single),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: p.arabic_text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farhod\\\\Desktop\\\\quronim\\\\pages\\\\surah\\\\[number].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: p.footnotes\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farhod\\\\Desktop\\\\quronim\\\\pages\\\\surah\\\\[number].tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: p.aya\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farhod\\\\Desktop\\\\quronim\\\\pages\\\\surah\\\\[number].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: p.translation\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Farhod\\\\Desktop\\\\quronim\\\\pages\\\\surah\\\\[number].tsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Farhod\\\\Desktop\\\\quronim\\\\pages\\\\surah\\\\[number].tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Farhod\\\\Desktop\\\\quronim\\\\pages\\\\surah\\\\[number].tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProps);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdXJhaC9bbnVtYmVyXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0Q7QUFDekMsTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDN0QsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQzdCLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxFQUFFRyxJQUFJLEVBQUVDLEdBQUcsQ0FBQyxDQUFDQyxDQUFNLEdBQUs7UUFDeEMsT0FBTztZQUNMQyxNQUFNLEVBQUU7Z0JBQ05DLE1BQU0sRUFBRSxDQUFDLEVBQUVGLENBQUMsRUFBRUUsTUFBTSxDQUFDLENBQUM7YUFDdkI7U0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsT0FBTztRQUNMTCxLQUFLO1FBQ0xNLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNQyxjQUFjLEdBQUcsT0FBT0MsT0FBWSxHQUFLO0lBQ3BELE1BQU0sRUFBRUosTUFBTSxHQUFFLEdBQUdJLE9BQU87SUFFMUIsTUFBTVosR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIsQ0FBQywyREFBMkQsRUFBRU8sTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUM5RTtJQUNELE1BQU1QLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUU3QixPQUFPO1FBQUVVLEtBQUssRUFBRTtZQUFFWCxJQUFJO1NBQUU7S0FBRSxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUV3QjtBQUUxQixNQUFNYSxXQUFXLEdBQUcsQ0FBQyxFQUFFYixJQUFJLEdBQU8sR0FBSztJQUNyQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUNmLElBQUksQ0FBQyxDQUFDO0lBRWxCLHFCQUNFO2tCQUNFLDRFQUFDZ0IsS0FBRztZQUFDQyxTQUFTLEVBQUVyQixzRUFBVztzQkFDeEJJLElBQUksRUFBRW1CLE1BQU0sRUFBRWYsR0FBRyxDQUFDLENBQUNDLENBQVMsRUFBRWUsS0FBWSxpQkFDdkMsOERBQUNKLEtBQUc7b0JBQUNDLFNBQVMsRUFBRXJCLHVFQUFZOztzQ0FDMUIsOERBQUMwQixJQUFFO3NDQUFFakIsQ0FBQyxDQUFDa0IsV0FBVzs7Ozs7cUNBQU07c0NBQ3hCLDhEQUFDbEIsR0FBQztzQ0FBRUEsQ0FBQyxDQUFDbUIsU0FBUzs7Ozs7cUNBQUs7c0NBQ3BCLDhEQUFDbkIsR0FBQztzQ0FBRUEsQ0FBQyxDQUFDb0IsR0FBRzs7Ozs7cUNBQUs7c0NBQ2QsOERBQUNwQixHQUFDO3NDQUFFQSxDQUFDLENBQUNxQixXQUFXOzs7OztxQ0FBSzs7bUJBSldOLEtBQUs7Ozs7NkJBS2xDLENBQ1I7Ozs7O3FCQUNFO3FCQUNMLENBQ0g7QUFDSixDQUFDO0FBRUQsaUVBQWVQLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1cm9uaW0vLi9wYWdlcy9zdXJhaC9bbnVtYmVyXS50c3g/OWRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpbmdsZX0gZnJvbSBcIi4uLy4uL3V0aWxzL2ludGVyZmFjZVwiXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYWxxdXJhbi5jbG91ZC92MS9zdXJhaGApO1xyXG4gIGNvbnN0IHJlcG8gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IHBhdGhzID0gcmVwbz8uZGF0YT8ubWFwKChwOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIG51bWJlcjogYCR7cD8ubnVtYmVyfWAsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9xdXJhbmVuYy5jb20vYXBpL3YxL3RyYW5zbGF0aW9uL3N1cmEvdXpiZWtfbWFuc291ci8ke3BhcmFtcy5udW1iZXJ9YFxyXG4gICk7XHJcbiAgY29uc3QgcmVwbyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IHJlcG8gfSB9O1xyXG59O1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2luZ2xlUHJvcHMgPSAoeyByZXBvIH06IGFueSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHJlcG8pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmQyfT5cclxuICAgICAgICB7cmVwbz8ucmVzdWx0Py5tYXAoKHA6IHNpbmdsZSwgaW5kZXg6bnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zaW5nbGV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxoMz57cC5hcmFiaWNfdGV4dH08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntwLmZvb3Rub3Rlc308L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3AuYXlhfTwvcD5cclxuICAgICAgICAgICAgICA8cD57cC50cmFuc2xhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9wcztcclxuIl0sIm5hbWVzIjpbInN0eWxlIiwiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsInJlcG8iLCJqc29uIiwicGF0aHMiLCJkYXRhIiwibWFwIiwicCIsInBhcmFtcyIsIm51bWJlciIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJSZWFjdCIsIlNpbmdsZVByb3BzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQyIiwicmVzdWx0IiwiaW5kZXgiLCJzaW5nbGUiLCJoMyIsImFyYWJpY190ZXh0IiwiZm9vdG5vdGVzIiwiYXlhIiwidHJhbnNsYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/surah/[number].tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/surah/[number].tsx"));
module.exports = __webpack_exports__;

})();