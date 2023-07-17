"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listOfStudents",{

/***/ "./pages/listOfStudents.js":
/*!*********************************!*\
  !*** ./pages/listOfStudents.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ListOfStudents; },\n/* harmony export */   \"prevInfo\": function() { return /* binding */ prevInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_search_ic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/search_ic.png */ \"./public/search_ic.png\");\n/* harmony import */ var _public_trash_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/trash.png */ \"./public/trash.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\n//import clientPromise from \"../lib/mongodb\";\n//import { getServerSideProps } from './addNew'\nlet prevInfo = {};\nfunction ListOfStudents(param) {\n    let { studentCpE  } = param;\n    _s();\n    //studentProp from getServerSideProps loads intial data\n    const [student, setstudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(studentCpE);\n    const [selectAll, setselectAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //  Get API req, loads new data when edited or deletd\n    async function GetData() {\n        //what could be the problem with this function?\n        let collectionName = \"English\"; //we will send this as req.query.collection \n        const res = await fetch(\"http://localhost:3000/api/studentdb?collection=\".concat(collectionName), {\n            method: \"GET\"\n        });\n        const data = await res.json();\n        setstudent(data);\n    }\n    async function DeleteData(studentId) {\n        //will this code snippet work if I want to delete a certain user in the database?\n        const collectionName = \"English\";\n        const res = await fetch(\"http://localhost:3000/api/studentdb?collection=\".concat(collectionName, \"&deleteAll=false\"), {\n            method: \"DELETE\"\n        });\n        const data = await res.json();\n        window.alert(data.message);\n        GetData();\n    }\n    async function DeleteAll() {\n        const collectionName = \"English\";\n        const deleteAll = window.confirm(\"Are you sure you want to DELETE all data? This cannot be undone.\");\n        console.log(deleteAll);\n        if (deleteAll) {\n            const res = await fetch(\"http://localhost:3000/api/studentdb?collection=\".concat(collectionName, \"&deleteAll=true\"), {\n                method: \"DELETE\"\n            });\n            const data = await res.json();\n            window.alert(data.message);\n        }\n        GetData();\n    }\n    function getStud(stud) {\n        console.log(\"update\");\n        prevInfo = stud;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-200 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"List of students\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"bg-violet-400 w-full p-2  flex flex-row justify-between items-center rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"ml-4\",\n                                children: \"Subject Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"w-1/4 flex flex-row justify-around \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"p-1 w-3/4 rounded-md border border-slate-700 focus:outline-red-400\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        className: \"w-10 h-10 pt-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            src: _public_search_ic_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center flex-col bg-white mr-5 mt-5 w-full rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \" grid grid-cols-4 p-3  w-70  md:w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"p-1 md:p-3 w-1/2 col-span-2 font-bold\",\n                                        children: \"Student Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" p-1 md:p-3 w-1/2 col-span-1 font-bold\",\n                                        children: \"Student Number\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                        className: \"items-center w-50 h-10 flex flex-row justify-around \",\n                                        children: [\n                                            selectAll ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: DeleteAll,\n                                                className: \"bg-red-400 h-10 p-2 w-40 flex flex-row justify-around\",\n                                                children: [\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                                        src: _public_trash_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                                        alt: \"trash\",\n                                                        width: 20,\n                                                        height: 20\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 125\n                                                    }, this),\n                                                    \"Delete All?\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 30\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Select All\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 215\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                id: \"selectAll\",\n                                                checked: selectAll,\n                                                onChange: ()=>setselectAll(!selectAll)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                lineNumber: 87,\n                                columnNumber: 10\n                            }, this),\n                            student.map((stud)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \" grid grid-cols-4 p-3  w-70  md:w-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"p-1 md:p-3 w-1/2 col-span-2\",\n                                            children: stud.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" p-1 md:p-3 w-1/2 col-span-1\",\n                                            children: stud.number\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                            className: \"flex flex-row  md:ml-2 md:col-span-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"./updateData\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"bg-yellow-400 ml-0 p-1 md:p-3 md:w-40  ml-2 hover:bg-yellow-700\",\n                                                        onClick: ()=>getStud(stud),\n                                                        children: \" Edit\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                        lineNumber: 109,\n                                                        columnNumber: 43\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-red-600  p-1 md:p-3 ml-0 md:w-40  ml-2 hover:bg-green-600\",\n                                                    onClick: ()=>DeleteData(stud.id),\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, stud._id, true, {\n                                    fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Noel Satiembre\\\\Desktop\\\\ReactPractice\\\\student-in\\\\client\\\\pages\\\\listOfStudents.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(ListOfStudents, \"3qWxNyvMd2Gpq2NqislEhR5+zTg=\");\n_c = ListOfStudents;\nvar _c;\n$RefreshReg$(_c, \"ListOfStudents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQ1RvQyxVQUFVLElBQUluQyxhQUFhLENBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTXBDRixRQUFRdUMsR0FBRyxDQUFDakIsQ0FBQUEscUJBQ1IsOERBQUNJO29DQUFRRixXQUFVOztzREFDbkIsOERBQUNHOzRDQUFFSCxXQUFVO3NEQUErQkYsS0FBS2tCLElBQUk7Ozs7OztzREFDckQsOERBQUNiOzRDQUFFSCxXQUFVO3NEQUFnQ0YsS0FBS21CLE1BQU07Ozs7OztzREFDeEQsOERBQUNmOzRDQUFRRixXQUFVOzs4REFFbkIsOERBQUNqQyxrREFBSUE7b0RBQUNtRCxNQUFLOzhEQUFlLDRFQUFDWDt3REFBT1AsV0FBVTt3REFBa0VRLFNBQVMsSUFBSVgsUUFBUUM7a0VBQU87Ozs7Ozs7Ozs7OzhEQUN0SSw4REFBQ1M7b0RBQU9QLFdBQVU7b0RBQStEUSxTQUFXLElBQUlyQixXQUFXVyxLQUFLYyxFQUFFOzhEQUFHOzs7Ozs7Ozs7Ozs7O21DQU52RGQsS0FBS3FCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0I3RTs7Ozs7OztBQUViLENBQUM7R0EvR3VCN0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdE9mU3R1ZGVudHMuanM/MjA2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc2VhcmNoX2ljIGZyb20gXCIuLi9wdWJsaWMvc2VhcmNoX2ljLnBuZ1wiXHJcbmltcG9ydCB0cmFzaCBmcm9tIFwiLi4vcHVibGljL3RyYXNoLnBuZ1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbi8vaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uL2xpYi9tb25nb2RiXCI7XHJcbi8vaW1wb3J0IHsgZ2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnLi9hZGROZXcnXHJcblxyXG5leHBvcnQgbGV0IHByZXZJbmZvID17fVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0T2ZTdHVkZW50cyh7c3R1ZGVudENwRX0pIHtcclxuICAgIC8vc3R1ZGVudFByb3AgZnJvbSBnZXRTZXJ2ZXJTaWRlUHJvcHMgbG9hZHMgaW50aWFsIGRhdGFcclxuICAgIGNvbnN0IFtzdHVkZW50LCBzZXRzdHVkZW50XSA9IHVzZVN0YXRlKHN0dWRlbnRDcEUpO1xyXG4gICAgY29uc3QgW3NlbGVjdEFsbCwgc2V0c2VsZWN0QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gIC8vICBHZXQgQVBJIHJlcSwgbG9hZHMgbmV3IGRhdGEgd2hlbiBlZGl0ZWQgb3IgZGVsZXRkXHJcbiAgICBhc3luYyBmdW5jdGlvbiBHZXREYXRhKCl7XHJcbiAgICAgICAgLy93aGF0IGNvdWxkIGJlIHRoZSBwcm9ibGVtIHdpdGggdGhpcyBmdW5jdGlvbj9cclxuICAgICAgICBsZXQgY29sbGVjdGlvbk5hbWUgPSBcIkVuZ2xpc2hcIjsgLy93ZSB3aWxsIHNlbmQgdGhpcyBhcyByZXEucXVlcnkuY29sbGVjdGlvbiBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc3R1ZGVudGRiP2NvbGxlY3Rpb249JHtjb2xsZWN0aW9uTmFtZX1gLCB7IFxyXG4gICAgICAgICAgICBtZXRob2Q6XCJHRVRcIiAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgc2V0c3R1ZGVudChkYXRhKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIERlbGV0ZURhdGEoc3R1ZGVudElkKXtcclxuICAgICAgICAvL3dpbGwgdGhpcyBjb2RlIHNuaXBwZXQgd29yayBpZiBJIHdhbnQgdG8gZGVsZXRlIGEgY2VydGFpbiB1c2VyIGluIHRoZSBkYXRhYmFzZT9cclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwiRW5nbGlzaFwiXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc3R1ZGVudGRiP2NvbGxlY3Rpb249JHtjb2xsZWN0aW9uTmFtZX0mZGVsZXRlQWxsPWZhbHNlYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5hbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIEdldERhdGEoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIERlbGV0ZUFsbCgpe1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJFbmdsaXNoXCI7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQWxsID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gREVMRVRFIGFsbCBkYXRhPyBUaGlzIGNhbm5vdCBiZSB1bmRvbmUuXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nIChkZWxldGVBbGwpO1xyXG4gICAgICAgIGlmKGRlbGV0ZUFsbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0dWRlbnRkYj9jb2xsZWN0aW9uPSR7Y29sbGVjdGlvbk5hbWV9JmRlbGV0ZUFsbD10cnVlYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWxlcnQoZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIEdldERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0dWQoc3R1ZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIilcclxuICAgICAgICBwcmV2SW5mbyA9IHN0dWRcclxuICAgIH1cclxuICBcclxuICAgXHJcbiAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXNsYXRlLTIwMCAnPlxyXG4gICAgPExheW91dCA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEhlYWQ+PHRpdGxlPkxpc3Qgb2Ygc3R1ZGVudHM8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2JnLXZpb2xldC00MDAgdy1mdWxsIHAtMiAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHJvdW5kZWQtbWQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21sLTQnPlN1YmplY3QgTmFtZTwvcD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3LTEvNCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kICc+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwLTEgdy0zLzQgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCBmb2N1czpvdXRsaW5lLXJlZC00MDAnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy0xMCBoLTEwIHB0LTInPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9IHtzZWFyY2hfaWN9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBiZy13aGl0ZSBtci01IG10LTUgdy1mdWxsIHJvdW5kZWQtbWQgc2hhZG93LVswcHhfNHB4XzE2cHhfcmdiYSgxNywxNywyNiwwLjEpLF8wcHhfOHB4XzI0cHhfcmdiYSgxNywxNywyNiwwLjEpLF8wcHhfMTZweF81NnB4X3JnYmEoMTcsMTcsMjYsMC4xKV0nPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgXHJcbiAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nIGdyaWQgZ3JpZC1jb2xzLTQgcC0zICB3LTcwICBtZDp3LWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwLTEgbWQ6cC0zIHctMS8yIGNvbC1zcGFuLTIgZm9udC1ib2xkJz5TdHVkZW50IE5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9JyBwLTEgbWQ6cC0zIHctMS8yIGNvbC1zcGFuLTEgZm9udC1ib2xkJz5TdHVkZW50IE51bWJlcjwvcD4gICBcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naXRlbXMtY2VudGVyIHctNTAgaC0xMCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kICc+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsgc2VsZWN0QWxsPyA8YnV0dG9uIG9uQ2xpY2s9e0RlbGV0ZUFsbH0gY2xhc3NOYW1lPSdiZy1yZWQtNDAwIGgtMTAgcC0yIHctNDAgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCc+IDxJbWFnZSBzcmM9IHt0cmFzaH0gYWx0ID0gXCJ0cmFzaFwiIHdpZHRoPXsyMH0gaGVpZ2h0ID0gezIwfT48L0ltYWdlPkRlbGV0ZSBBbGw/PC9idXR0b24+IDogPHA+U2VsZWN0IEFsbDwvcD4gfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGVjdEFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0QWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+c2V0c2VsZWN0QWxsKCFzZWxlY3RBbGwpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICBcclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHN0dWRlbnQubWFwKHN0dWQ9PihcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nIGdyaWQgZ3JpZC1jb2xzLTQgcC0zICB3LTcwICBtZDp3LWZ1bGwnIGtleT0ge3N0dWQuX2lkfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncC0xIG1kOnAtMyB3LTEvMiBjb2wtc3Bhbi0yJz57c3R1ZC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nIHAtMSBtZDpwLTMgdy0xLzIgY29sLXNwYW4tMSc+e3N0dWQubnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyAgbWQ6bWwtMiBtZDpjb2wtc3Bhbi0xJz5cclxuICAgICAgICAgICAgICAgIHsgLypzdHVkZW50SW5mbyBpcyBhbiBvYmplY3QgdGhhdCBob2xkcyBpZCwgbmFtZSBhbmQgbnVtLCB5b3Ugc2hvdWxkIGRlc3RydWN0dXJlIGl0IHdoZW4gcGFzc2luZyovfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi4vdXBkYXRlRGF0YVwiPjxidXR0b24gY2xhc3NOYW1lPSdiZy15ZWxsb3ctNDAwIG1sLTAgcC0xIG1kOnAtMyBtZDp3LTQwICBtbC0yIGhvdmVyOmJnLXllbGxvdy03MDAnIG9uQ2xpY2s9eygpPT5nZXRTdHVkKHN0dWQpfT4gRWRpdDwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctcmVkLTYwMCAgcC0xIG1kOnAtMyBtbC0wIG1kOnctNDAgIG1sLTIgaG92ZXI6YmctZ3JlZW4tNjAwJyBvbkNsaWNrID0geygpPT5EZWxldGVEYXRhKHN0dWQuaWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj4gKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgIFxyXG4gICAgPC9MYXlvdXQ+IDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuICAgIGxldCBjb2xsZWN0aW9uTmFtZSA9IFwiRW5nbGlzaFwiOyAvL3dlIHdpbGwgc2VuZCB0aGlzIGFzIHJlcS5xdWVyeS5jb2xsZWN0aW9uIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2ggKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0dWRlbnRkYj9jb2xsZWN0aW9uPSR7Y29sbGVjdGlvbk5hbWV9YCwgeyBcclxuICAgICAgICBtZXRob2Q6XCJHRVRcIiAgIFxyXG4gICAgfSk7XHJcbiAgICAvLyAgICAgICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy93ZSBuZWVkIHRvIHN0cmluZ2lmeSB0aGUgZGF0YSBmcm9tIGpzb25cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgc3R1ZGVudENwRTogZGF0YSB9XHJcbiAgICB9O1xyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkxpbmsiLCJIZWFkIiwidXNlU3RhdGUiLCJzZWFyY2hfaWMiLCJ0cmFzaCIsIkltYWdlIiwicHJldkluZm8iLCJMaXN0T2ZTdHVkZW50cyIsInN0dWRlbnRDcEUiLCJzdHVkZW50Iiwic2V0c3R1ZGVudCIsInNlbGVjdEFsbCIsInNldHNlbGVjdEFsbCIsIkdldERhdGEiLCJjb2xsZWN0aW9uTmFtZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJEZWxldGVEYXRhIiwic3R1ZGVudElkIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiRGVsZXRlQWxsIiwiZGVsZXRlQWxsIiwiY29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdHVkIiwic3R1ZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic2VjdGlvbiIsInAiLCJpbnB1dCIsInR5cGUiLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpZCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm1hcCIsIm5hbWUiLCJudW1iZXIiLCJocmVmIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/listOfStudents.js\n"));

/***/ })

});