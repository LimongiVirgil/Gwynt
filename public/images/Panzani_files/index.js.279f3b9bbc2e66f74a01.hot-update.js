webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/app/blocks/index.js":
/*!*********************************!*\
  !*** ./src/app/blocks/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBlocks; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_blocks_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/blocks/breadcrumb */ "./src/app/blocks/breadcrumb/index.js");
/* harmony import */ var app_blocks_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/blocks/contact */ "./src/app/blocks/contact/index.js");
/* harmony import */ var app_blocks_ingredients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/blocks/ingredients */ "./src/app/blocks/ingredients/index.js");
/* harmony import */ var app_blocks_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/blocks/header */ "./src/app/blocks/header/index.js");
/* harmony import */ var app_blocks_pastas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/blocks/pastas */ "./src/app/blocks/pastas/index.js");
/* harmony import */ var app_blocks_push_texts_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/blocks/push-texts-images */ "./src/app/blocks/push-texts-images/index.js");
/* harmony import */ var app_blocks_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/blocks/search */ "./src/app/blocks/search/index.js");
/* harmony import */ var app_blocks_search_recipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/blocks/search-recipe */ "./src/app/blocks/search-recipe/index.js");
/* harmony import */ var app_blocks_slider_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/blocks/slider-1 */ "./src/app/blocks/slider-1/index.js");
/* harmony import */ var app_blocks_slider_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/blocks/slider-2 */ "./src/app/blocks/slider-2/index.js");
/* harmony import */ var app_blocks_slider_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/blocks/slider-3 */ "./src/app/blocks/slider-3/index.js");
/* harmony import */ var app_blocks_push__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/blocks/push */ "./src/app/blocks/push/index.js");
/* harmony import */ var app_blocks_push_texts_images_compact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/blocks/push-texts-images-compact */ "./src/app/blocks/push-texts-images-compact/index.js");
/* harmony import */ var app_blocks_social__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/blocks/social */ "./src/app/blocks/social/index.js");
/* harmony import */ var app_blocks_product_description__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/blocks/product-description */ "./src/app/blocks/product-description/index.js");
/* harmony import */ var app_blocks_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/blocks/text */ "./src/app/blocks/text/index.js");
/* harmony import */ var app_blocks_recipe_header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/blocks/recipe-header */ "./src/app/blocks/recipe-header/index.js");
/* harmony import */ var app_blocks_recipe_body__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/blocks/recipe-body */ "./src/app/blocks/recipe-body/index.js");

var _jsxFileName = "/Users/vlimongi/project/panzani.fr-2020/src/app/blocks/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















 // Blocks with their type

var BLOCKS = {
  "breadcrumb": app_blocks_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
  "contact": app_blocks_contact__WEBPACK_IMPORTED_MODULE_3__["default"],
  "header": app_blocks_header__WEBPACK_IMPORTED_MODULE_5__["default"],
  "ingredients": app_blocks_ingredients__WEBPACK_IMPORTED_MODULE_4__["default"],
  "pastas": app_blocks_pastas__WEBPACK_IMPORTED_MODULE_6__["default"],
  "product-description": app_blocks_product_description__WEBPACK_IMPORTED_MODULE_16__["default"],
  "push": app_blocks_push__WEBPACK_IMPORTED_MODULE_13__["default"],
  "push-texts-images": app_blocks_push_texts_images__WEBPACK_IMPORTED_MODULE_7__["default"],
  "push-texts-images-compact": app_blocks_push_texts_images_compact__WEBPACK_IMPORTED_MODULE_14__["default"],
  "search": app_blocks_search__WEBPACK_IMPORTED_MODULE_8__["default"],
  "search-recipe": app_blocks_search_recipe__WEBPACK_IMPORTED_MODULE_9__["default"],
  "slider-1": app_blocks_slider_1__WEBPACK_IMPORTED_MODULE_10__["default"],
  "slider-2": app_blocks_slider_2__WEBPACK_IMPORTED_MODULE_11__["default"],
  "slider-3": app_blocks_slider_3__WEBPACK_IMPORTED_MODULE_12__["default"],
  "social": app_blocks_social__WEBPACK_IMPORTED_MODULE_15__["default"],
  "text": app_blocks_text__WEBPACK_IMPORTED_MODULE_17__["default"],
  "recipe-header": app_blocks_recipe_header__WEBPACK_IMPORTED_MODULE_18__["default"],
  "recipe-body": app_blocks_recipe_body__WEBPACK_IMPORTED_MODULE_19__["default"]
};
/**
 * Get blocks
 * @param {Array} data 
 * @returns {Array}
 */

function getBlocks(data) {
  var blocks = [],
      time = Date.now();
  var Block;
  data.forEach(function (data, index) {
    Block = BLOCKS[data.type];

    if (Block) {
      blocks.push(__jsx(Block, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: time + '.' + index
      }, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })));
    }
  });
  return blocks;
}

/***/ })

})
//# sourceMappingURL=index.js.279f3b9bbc2e66f74a01.hot-update.js.map