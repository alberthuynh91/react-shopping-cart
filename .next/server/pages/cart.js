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
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./components/CartItem.tsx":
/*!*********************************!*\
  !*** ./components/CartItem.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartItem = ({ item , cart , setCart  })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cart\", JSON.stringify(cart));\n    }, [\n        cart\n    ]);\n    const handleRemove = (item)=>{\n        const cartCopy = Object.assign({}, cart);\n        const itemToRemove = cartCopy[item.id];\n        if (itemToRemove) {\n            if (itemToRemove.quantity === 1) {\n                delete cartCopy[item.id];\n            } else {\n                itemToRemove.quantity--;\n            }\n        }\n        setCart(cartCopy);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4 mb-4 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl font-bold\",\n                children: item.name\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: item.imageUrl,\n                    width: \"60px\",\n                    height: \"60px\"\n                }, void 0, false, {\n                    fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg\",\n                children: [\n                    \"$\",\n                    item.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Qty \",\n                    item.quantity\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-400 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-4 rounded mt-2\",\n                onClick: ()=>handleRemove(item),\n                children: \"Remove item\"\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/CartItem.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlDO0FBRXpDLE1BQU1FLFFBQVEsR0FBRyxDQUFDLEVBQUVDLElBQUksR0FBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQWEsR0FBSztJQUN2REosZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RLLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQyxFQUFFO1FBQUNBLElBQUk7S0FBQyxDQUFDLENBQUM7SUFFWCxNQUFNTSxZQUFZLEdBQUcsQ0FBQ1AsSUFBVSxHQUFLO1FBQ25DLE1BQU1RLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFVCxJQUFJLENBQUM7UUFDeEMsTUFBTVUsWUFBWSxHQUFHSCxRQUFRLENBQUNSLElBQUksQ0FBQ1ksRUFBRSxDQUFDO1FBQ3RDLElBQUlELFlBQVksRUFBRTtZQUNoQixJQUFJQSxZQUFZLENBQUNFLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU9MLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDWSxFQUFFLENBQUMsQ0FBQztZQUMzQixPQUFPO2dCQUNMRCxZQUFZLENBQUNFLFFBQVEsRUFBRSxDQUFDO1lBQzFCLENBQUM7UUFDSCxDQUFDO1FBQ0RYLE9BQU8sQ0FBQ00sUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELHFCQUNFLDhEQUFDTSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlOzswQkFDNUIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7MEJBQUVmLElBQUksQ0FBQ2dCLElBQUk7Ozs7O3lCQUFPOzBCQUNwRCw4REFBQ0YsS0FBRzswQkFDRiw0RUFBQ0csS0FBRztvQkFBQ0MsR0FBRyxFQUFFbEIsSUFBSSxDQUFDbUIsUUFBUTtvQkFBRUMsS0FBSyxFQUFDLE1BQU07b0JBQUNDLE1BQU0sRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBQ2xEOzBCQUNOLDhEQUFDUCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsU0FBUzs7b0JBQUMsR0FBQztvQkFBQ2YsSUFBSSxDQUFDc0IsS0FBSzs7Ozs7O3lCQUFPOzBCQUM1Qyw4REFBQ1IsS0FBRzs7b0JBQUMsTUFBSTtvQkFBQ2QsSUFBSSxDQUFDYSxRQUFROzs7Ozs7eUJBQU87MEJBQzlCLDhEQUFDVSxRQUFNO2dCQUNMUixTQUFTLEVBQUMsdUZBQXVGO2dCQUNqR1MsT0FBTyxFQUFFLElBQU1qQixZQUFZLENBQUNQLElBQUksQ0FBQzswQkFDbEMsYUFFRDs7Ozs7eUJBQVM7Ozs7OztpQkFDTCxDQUNOO0FBQ0osQ0FBQztBQUVELGlFQUFlRCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnRJdGVtLnRzeD9hMjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhcnRJdGVtID0gKHsgaXRlbSwgY2FydCwgc2V0Q2FydCB9OiBJdGVtUHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbiAgfSwgW2NhcnRdKTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoaXRlbTogSXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcnRDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgY2FydCk7XG4gICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gY2FydENvcHlbaXRlbS5pZF07XG4gICAgaWYgKGl0ZW1Ub1JlbW92ZSkge1xuICAgICAgaWYgKGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSA9PT0gMSkge1xuICAgICAgICBkZWxldGUgY2FydENvcHlbaXRlbS5pZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtVG9SZW1vdmUucXVhbnRpdHktLTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0Q2FydChjYXJ0Q29weSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItNCBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57aXRlbS5uYW1lfTwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VVcmx9IHdpZHRoPVwiNjBweFwiIGhlaWdodD1cIjYwcHhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGdcIj4ke2l0ZW0ucHJpY2V9PC9kaXY+XG4gICAgICA8ZGl2PlF0eSB7aXRlbS5xdWFudGl0eX08L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgaG92ZXI6YmctZ3JheS02MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtMlwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShpdGVtKX1cbiAgICAgID5cbiAgICAgICAgUmVtb3ZlIGl0ZW1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDYXJ0SXRlbSIsIml0ZW0iLCJjYXJ0Iiwic2V0Q2FydCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlUmVtb3ZlIiwiY2FydENvcHkiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtVG9SZW1vdmUiLCJpZCIsInF1YW50aXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlVXJsIiwid2lkdGgiLCJoZWlnaHQiLCJwcmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartItem.tsx\n");

/***/ }),

/***/ "./components/Item.tsx":
/*!*****************************!*\
  !*** ./components/Item.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Item = ({ item , cart , setCart  })=>{\n    const handleAddToCart = ()=>{\n        const tempCart = Object.assign({}, cart);\n        if (tempCart[item.id]) {\n            tempCart[item.id].quantity++;\n            setCart(tempCart);\n        } else {\n            tempCart[item.id] = {\n                ...item,\n                quantity: 1\n            };\n            setCart(tempCart);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4 mb-4 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-xl font-bold\",\n                children: item.name\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/Item.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: item.imageUrl,\n                    width: \"60px\",\n                    height: \"60px\"\n                }, void 0, false, {\n                    fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/Item.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/Item.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg\",\n                children: [\n                    \"$\",\n                    item.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/Item.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-400 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-4 rounded mt-2\",\n                onClick: handleAddToCart,\n                children: \"Add to cart\"\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/Item.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/components/Item.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsTUFBTUMsSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBYSxHQUFLO0lBQ25ELE1BQU1DLGVBQWUsR0FBRyxJQUFNO1FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFTCxJQUFJLENBQUM7UUFDeEMsSUFBSUcsUUFBUSxDQUFDSixJQUFJLENBQUNPLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCSCxRQUFRLENBQUNKLElBQUksQ0FBQ08sRUFBRSxDQUFDLENBQUNDLFFBQVEsRUFBRSxDQUFDO1lBQzdCTixPQUFPLENBQUNFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BCLE9BQU87WUFDTEEsUUFBUSxDQUFDSixJQUFJLENBQUNPLEVBQUUsQ0FBQyxHQUFHO2dCQUNsQixHQUFHUCxJQUFJO2dCQUNQUSxRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUM7WUFDRk4sT0FBTyxDQUFDRSxRQUFRLENBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUNFLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxlQUFlOzswQkFDNUIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7MEJBQUVWLElBQUksQ0FBQ1csSUFBSTs7Ozs7eUJBQU87MEJBQ3BELDhEQUFDRixLQUFHOzBCQUNGLDRFQUFDRyxLQUFHO29CQUFDQyxHQUFHLEVBQUViLElBQUksQ0FBQ2MsUUFBUTtvQkFBRUMsS0FBSyxFQUFDLE1BQU07b0JBQUNDLE1BQU0sRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBQ2xEOzBCQUNOLDhEQUFDUCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsU0FBUzs7b0JBQUMsR0FBQztvQkFBQ1YsSUFBSSxDQUFDaUIsS0FBSzs7Ozs7O3lCQUFPOzBCQUM1Qyw4REFBQ0MsUUFBTTtnQkFDTFIsU0FBUyxFQUFDLHVGQUF1RjtnQkFDakdTLE9BQU8sRUFBRWhCLGVBQWU7MEJBQ3pCLGFBRUQ7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0wsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZUosSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtLnRzeD8yNmNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEl0ZW0gPSAoeyBpdGVtLCBjYXJ0LCBzZXRDYXJ0IH06IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcENhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBjYXJ0KTtcbiAgICBpZiAodGVtcENhcnRbaXRlbS5pZF0pIHtcbiAgICAgIHRlbXBDYXJ0W2l0ZW0uaWRdLnF1YW50aXR5Kys7XG4gICAgICBzZXRDYXJ0KHRlbXBDYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcENhcnRbaXRlbS5pZF0gPSB7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfTtcbiAgICAgIHNldENhcnQodGVtcENhcnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBtYi00IHAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gd2lkdGg9XCI2MHB4XCIgaGVpZ2h0PVwiNjBweFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPiR7aXRlbS5wcmljZX08L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgaG92ZXI6YmctZ3JheS02MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtMlwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFRvQ2FydH1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkl0ZW0iLCJpdGVtIiwiY2FydCIsInNldENhcnQiLCJoYW5kbGVBZGRUb0NhcnQiLCJ0ZW1wQ2FydCIsIk9iamVjdCIsImFzc2lnbiIsImlkIiwicXVhbnRpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJ3aWR0aCIsImhlaWdodCIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Item.tsx\n");

/***/ }),

/***/ "./components/index.tsx":
/*!******************************!*\
  !*** ./components/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartItem\": () => (/* reexport safe */ _CartItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Item\": () => (/* reexport safe */ _Item__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./components/Item.tsx\");\n/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ \"./components/CartItem.tsx\");\n// allows us to easily export and import components\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbURBQW1EO0FBQ1Y7QUFDUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgudHN4P2M3ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxsb3dzIHVzIHRvIGVhc2lseSBleHBvcnQgYW5kIGltcG9ydCBjb21wb25lbnRzXG5leHBvcnQgeyBkZWZhdWx0IGFzIEl0ZW0gfSBmcm9tICcuL0l0ZW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0SXRlbSB9IGZyb20gJy4vQ2FydEl0ZW0nO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJJdGVtIiwiQ2FydEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index.tsx\n");

/***/ }),

/***/ "./pages/cart/index.tsx":
/*!******************************!*\
  !*** ./pages/cart/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.tsx\");\n\n\n\n\nconst CartItems = ({ cart , setCart  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Object.values(cart).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CartItem, {\n                item: item,\n                cart: cart,\n                setCart: setCart\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\nconst EmptyCart = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Your cart is currently empty\"\n        }, void 0, false, {\n            fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nconst Cart = ()=>{\n    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            const cartFromStorage = localStorage.getItem(\"cart\");\n            if (cartFromStorage) {\n                const cart = JSON.parse(cartFromStorage);\n                setCart(cart);\n            }\n        }\n    }, []);\n    const isCartEmpty = Object.values(cart).length === 0;\n    const cartTotal = Object.values(cart).reduce((accum, curr)=>{\n        const itemCost = parseFloat(curr.price);\n        const total = curr.quantity * itemCost;\n        return total + accum;\n    }, 0);\n    const handleEmptyCart = ()=>{\n        setCart({});\n        localStorage.setItem(\"cart\", JSON.stringify({}));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-4xl font-extrabold\",\n                children: \"Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            isCartEmpty ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmptyCart, {}, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItems, {\n                cart: cart,\n                setCart: setCart\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            !isCartEmpty && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold\",\n                        children: [\n                            \"Cart Total: $\",\n                            cartTotal.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleEmptyCart,\n                        className: \"ml-2 bg-gray-300 hover:bg-gray-600 text-white text-xs font-semibold py-2 px-4 rounded mt-2\",\n                        children: \"Empty cart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    router.back();\n                },\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8\",\n                children: \"Go back to shopping\"\n            }, void 0, false, {\n                fileName: \"/Users/alberthuynh/work/personal-work/react-shopping-cart/pages/cart/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjNCLE1BQU0sQ0FBQzRCLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQUNETixTQUFTLEVBQUMsMkVBQTJFOzBCQUN0RixxQkFFRDs7Ozs7eUJBQVM7O29CQUNSLENBQ0g7QUFDSixDQUFDO0FBRUQsaUVBQWV2QixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJ0L2luZGV4LnRzeD8wNjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuY29uc3QgQ2FydEl0ZW1zID0gKHsgY2FydCwgc2V0Q2FydCB9OiBDYXJ0SXRlbXNQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhjYXJ0KS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPENhcnRJdGVtIGl0ZW09e2l0ZW19IGNhcnQ9e2NhcnR9IHNldENhcnQ9e3NldENhcnR9IC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IEVtcHR5Q2FydCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPllvdXIgY2FydCBpcyBjdXJyZW50bHkgZW1wdHk8L2gyPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgQ2FydCA9ICgpID0+IHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNhcnRGcm9tU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XG4gICAgICBpZiAoY2FydEZyb21TdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGNhcnRGcm9tU3RvcmFnZSk7XG4gICAgICAgIHNldENhcnQoY2FydCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaXNDYXJ0RW1wdHkgPSBPYmplY3QudmFsdWVzKGNhcnQpLmxlbmd0aCA9PT0gMDtcblxuICBjb25zdCBjYXJ0VG90YWwgPSBPYmplY3QudmFsdWVzKGNhcnQpLnJlZHVjZSgoYWNjdW06IGFueSwgY3VycjogYW55KSA9PiB7XG4gICAgY29uc3QgaXRlbUNvc3QgPSBwYXJzZUZsb2F0KGN1cnIucHJpY2UpO1xuICAgIGNvbnN0IHRvdGFsID0gY3Vyci5xdWFudGl0eSAqIGl0ZW1Db3N0O1xuICAgIHJldHVybiB0b3RhbCArIGFjY3VtO1xuICB9LCAwKSBhcyBudW1iZXI7XG5cbiAgY29uc3QgaGFuZGxlRW1wdHlDYXJ0ID0gKCkgPT4ge1xuICAgIHNldENhcnQoe30pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCBmb250LWV4dHJhYm9sZFwiPkNhcnQ8L2gxPlxuICAgICAge2lzQ2FydEVtcHR5ID8gKFxuICAgICAgICA8RW1wdHlDYXJ0IC8+XG4gICAgICApIDogKFxuICAgICAgICA8Q2FydEl0ZW1zIGNhcnQ9e2NhcnR9IHNldENhcnQ9e3NldENhcnR9IC8+XG4gICAgICApfVxuICAgICAgeyFpc0NhcnRFbXB0eSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Q2FydCBUb3RhbDogJHtjYXJ0VG90YWwudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRW1wdHlDYXJ0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtdC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFbXB0eSBjYXJ0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtOFwiXG4gICAgICA+XG4gICAgICAgIEdvIGJhY2sgdG8gc2hvcHBpbmdcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ2FydEl0ZW0iLCJDYXJ0SXRlbXMiLCJjYXJ0Iiwic2V0Q2FydCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJFbXB0eUNhcnQiLCJoMiIsIkNhcnQiLCJyb3V0ZXIiLCJ1bmRlZmluZWQiLCJjYXJ0RnJvbVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaXNDYXJ0RW1wdHkiLCJsZW5ndGgiLCJjYXJ0VG90YWwiLCJyZWR1Y2UiLCJhY2N1bSIsImN1cnIiLCJpdGVtQ29zdCIsInBhcnNlRmxvYXQiLCJwcmljZSIsInRvdGFsIiwicXVhbnRpdHkiLCJoYW5kbGVFbXB0eUNhcnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaDEiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwidG9GaXhlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cart/index.tsx"));
module.exports = __webpack_exports__;

})();