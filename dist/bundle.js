/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/Alata-Regular.ttf */ "./src/Fonts/Alata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/outline_inbox_white_24dp.png */ "./src/Icons/outline_inbox_white_24dp.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/outline_today_white_24dp.png */ "./src/Icons/outline_today_white_24dp.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/outline_date_range_white_24dp.png */ "./src/Icons/outline_date_range_white_24dp.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Icons/outline_note_add_white_24dp.png */ "./src/Icons/outline_note_add_white_24dp.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: alata;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.tpBar {\n  background: linear-gradient(#a12f74, #020024);\n  width: 100%;\n  height: 100px;\n  box-shadow: 10px 10px 5px #290424;\n}\n\n.tpTitleStyle {\n  font-size: 70px;\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  margin-top: 10px;\n}\n\n.leftbar {\n  background: linear-gradient(#020024, #a12f74);\n  width: 15%;\n  height: 570px;\n  text-align: center;\n  box-shadow: inset 0 -3em 3em #020024, 10px 5px 5px #290424;\n}\n\n.home,\n.projects {\n  font-size: 30px;\n  border-bottom: 2px solid white;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.allTasksStyle,\n.todayStyle,\n.thisWeekStyle,\n.addProjectsStyle {\n  margin: 20px 0;\n  font-family: alata, sans-serif;\n  font-weight: 100;\n}\n\n.allTasksStyle:hover,\n.todayStyle:hover,\n.thisWeekStyle:hover,\n.addProjectsStyle:hover {\n  color: rgb(230, 85, 213);\n}\n\n.allTasksStyle::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.todayStyle::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.thisWeekStyle::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.addProjectsStyle::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.insertButton {\n  margin-top: 10px;\n  padding: 5px;\n  width: 100px;\n  height: 50px;\n  display: none;\n  border-radius: 10px;\n  background: linear-gradient(#020024, #a12f74);\n  color: white;\n  font-family: monospace;\n}\n\n.introducer {\n  width: 85%;\n  height: 30px;\n  border-radius: 10px;\n  display: none;\n  font-family: monospace;\n  text-align: center;\n}\n\n.Notes {\n  background: linear-gradient(#020024, #a12f74);\n  box-shadow: inset 0 -3em 3em #020024, 10px 5px 5px #290424;\n  text-align: center;\n  width: 18.25%;\n  height: 200px;\n  border: 4px solid black;\n  margin: 20px;\n  border-radius: 20px;\n  font-family: monospace;\n  overflow-wrap: break-word;\n}\n\n/*^POR LAS DUDAS ACA ESTOY APLICANDOO EL FLEX*/\nbody {\n  display: flex;\n  flex-wrap: wrap;\n  color: white;\n}\n\n.emergentWindow {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(#020024, #a12f74);\n  box-shadow: inset 0 -3em 3em #020024, 10px 5px 5px #290424;\n  width: 300px;\n  height: 400px;\n  margin: 200px 600px;\n  border-radius: 20px;\n  font-family: monospace;\n}\n\ninput {\n  margin: 8px;\n}\n\nlabel {\n  display: block;\n  text-align: center;\n  font-size: medium;\n  font-family: monospace;\n}\n\n.task {\n  margin-top: 10px;\n  font-size: 20px;\n}\n\n.taskNotes {\n  font-size: 25px;\n  margin: 10px;\n}\n\n.descNotes {\n  font-size: 15px;\n  margin: 10px;\n}\n\n.dateNotes {\n  font-size: 20px;\n  margin: 10px;\n  margin-bottom: 5px;\n}\n\n.closeButton,\n.modifyButton {\n  width: 100px;\n  height: 50px;\n  border-radius: 10px;\n  background: linear-gradient(#020024, #a12f74);\n  color: white;\n  font-family: monospace;\n}\n\n@media (max-width: 800px) {\n  .emergentWindow {\n    margin: 200px 240px;\n  }\n  .leftbar {\n    width: 20%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,4CAAmC;AACrC;;AAEA;EACE,6CAA6C;EAC7C,WAAW;EACX,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,wEAAwE;EACxE,gBAAgB;AAClB;;AAEA;EACE,6CAA6C;EAC7C,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,0DAA0D;AAC5D;;AAEA;;EAEE,eAAe;EACf,8BAA8B;EAC9B,6EAA6E;AAC/E;;AAEA;;;;EAIE,cAAc;EACd,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;;;;EAIE,wBAAwB;AAC1B;;AAEA;EACE,gDAAkD;EAClD,kBAAkB,EAAE,cAAc;EAClC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gDAAkD;EAClD,kBAAkB,EAAE,cAAc;EAClC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gDAAuD;EACvD,kBAAkB,EAAE,cAAc;EAClC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gDAAqD;EACrD,kBAAkB,EAAE,cAAc;EAClC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6CAA6C;EAC7C,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,6CAA6C;EAC7C,0DAA0D;EAC1D,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA,8CAA8C;AAC9C;EACE,aAAa;EACb,eAAe;EACf,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,6CAA6C;EAC7C,0DAA0D;EAC1D,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,6CAA6C;EAC7C,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: alata;\n  src: url(./Fonts/Alata-Regular.ttf);\n}\n\n.tpBar {\n  background: linear-gradient(#a12f74, #020024);\n  width: 100%;\n  height: 100px;\n  box-shadow: 10px 10px 5px #290424;\n}\n\n.tpTitleStyle {\n  font-size: 70px;\n  text-align: center;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  margin-top: 10px;\n}\n\n.leftbar {\n  background: linear-gradient(#020024, #a12f74);\n  width: 15%;\n  height: 570px;\n  text-align: center;\n  box-shadow: inset 0 -3em 3em #020024, 10px 5px 5px #290424;\n}\n\n.home,\n.projects {\n  font-size: 30px;\n  border-bottom: 2px solid white;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.allTasksStyle,\n.todayStyle,\n.thisWeekStyle,\n.addProjectsStyle {\n  margin: 20px 0;\n  font-family: alata, sans-serif;\n  font-weight: 100;\n}\n\n.allTasksStyle:hover,\n.todayStyle:hover,\n.thisWeekStyle:hover,\n.addProjectsStyle:hover {\n  color: rgb(230, 85, 213);\n}\n\n.allTasksStyle::before {\n  content: url(./Icons/outline_inbox_white_24dp.png);\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.todayStyle::before {\n  content: url(./Icons/outline_today_white_24dp.png);\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.thisWeekStyle::before {\n  content: url(./Icons/outline_date_range_white_24dp.png);\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.addProjectsStyle::after {\n  content: url(./Icons/outline_note_add_white_24dp.png);\n  position: relative; /*or absolute*/\n  z-index: 100000;\n  padding: 5px;\n}\n\n.insertButton {\n  margin-top: 10px;\n  padding: 5px;\n  width: 100px;\n  height: 50px;\n  display: none;\n  border-radius: 10px;\n  background: linear-gradient(#020024, #a12f74);\n  color: white;\n  font-family: monospace;\n}\n\n.introducer {\n  width: 85%;\n  height: 30px;\n  border-radius: 10px;\n  display: none;\n  font-family: monospace;\n  text-align: center;\n}\n\n.Notes {\n  background: linear-gradient(#020024, #a12f74);\n  box-shadow: inset 0 -3em 3em #020024, 10px 5px 5px #290424;\n  text-align: center;\n  width: 18.25%;\n  height: 200px;\n  border: 4px solid black;\n  margin: 20px;\n  border-radius: 20px;\n  font-family: monospace;\n  overflow-wrap: break-word;\n}\n\n/*^POR LAS DUDAS ACA ESTOY APLICANDOO EL FLEX*/\nbody {\n  display: flex;\n  flex-wrap: wrap;\n  color: white;\n}\n\n.emergentWindow {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(#020024, #a12f74);\n  box-shadow: inset 0 -3em 3em #020024, 10px 5px 5px #290424;\n  width: 300px;\n  height: 400px;\n  margin: 200px 600px;\n  border-radius: 20px;\n  font-family: monospace;\n}\n\ninput {\n  margin: 8px;\n}\n\nlabel {\n  display: block;\n  text-align: center;\n  font-size: medium;\n  font-family: monospace;\n}\n\n.task {\n  margin-top: 10px;\n  font-size: 20px;\n}\n\n.taskNotes {\n  font-size: 25px;\n  margin: 10px;\n}\n\n.descNotes {\n  font-size: 15px;\n  margin: 10px;\n}\n\n.dateNotes {\n  font-size: 20px;\n  margin: 10px;\n  margin-bottom: 5px;\n}\n\n.closeButton,\n.modifyButton {\n  width: 100px;\n  height: 50px;\n  border-radius: 10px;\n  background: linear-gradient(#020024, #a12f74);\n  color: white;\n  font-family: monospace;\n}\n\n@media (max-width: 800px) {\n  .emergentWindow {\n    margin: 200px 240px;\n  }\n  .leftbar {\n    width: 20%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/topBar.js":
/*!***********************!*\
  !*** ./src/topBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function topBar() {
  const tpBar = document.createElement("div");
  const tpTitle = document.createElement("h1");
  tpBar.className = "tpBar";
  tpTitle.className = "tpTitleStyle";

  tpTitle.textContent = "TODO LIST";

  tpBar.appendChild(tpTitle);

  return tpBar;
}
document.body.appendChild(topBar());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topBar);


/***/ }),

/***/ "./src/Fonts/Alata-Regular.ttf":
/*!*************************************!*\
  !*** ./src/Fonts/Alata-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90e0970a7aca7d36f95.ttf";

/***/ }),

/***/ "./src/Icons/outline_date_range_white_24dp.png":
/*!*****************************************************!*\
  !*** ./src/Icons/outline_date_range_white_24dp.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85c6e841df47223b39d5.png";

/***/ }),

/***/ "./src/Icons/outline_inbox_white_24dp.png":
/*!************************************************!*\
  !*** ./src/Icons/outline_inbox_white_24dp.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12950ac3e79f4f95f535.png";

/***/ }),

/***/ "./src/Icons/outline_note_add_white_24dp.png":
/*!***************************************************!*\
  !*** ./src/Icons/outline_note_add_white_24dp.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87c2ac2c9ae0a9e4dca1.png";

/***/ }),

/***/ "./src/Icons/outline_today_white_24dp.png":
/*!************************************************!*\
  !*** ./src/Icons/outline_today_white_24dp.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49291f14e0cdd03f1da5.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _topBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topBar */ "./src/topBar.js");



const leftBar = document.createElement("div");
const home = document.createElement("h1");
const allTasks = document.createElement("h2");
const today = document.createElement("h2");
const thisWeek = document.createElement("h2");
const projects = document.createElement("h1");
const addProjects = document.createElement("h2");

function Execution() {
  (0,_topBar__WEBPACK_IMPORTED_MODULE_1__["default"])();

  //!CLASS
  const classElements = [
    home,
    allTasks,
    today,
    thisWeek,
    projects,
    addProjects,
  ];
  const classNames = [
    "home",
    "allTasksStyle",
    "todayStyle",
    "thisWeekStyle",
    "projects",
    "addProjectsStyle",
  ];
  const textContents = [
    "Home",
    "All Tasks",
    "Today",
    "This Week",
    "Projects",
    "Add Proyects",
  ];
  leftBar.className = "leftbar"; //!THIS ISN'T IN THE ARRAY BCS IS THE PRINCIPAL AND IT NEED TO BE ALONE

  for (let i = 0; i < classElements.length; i++) {
    classElements[i].className = classNames[i]; // & The ClassNames
    classElements[i].textContent = textContents[i]; //^The TextContent
    leftBar.appendChild(classElements[i]); //*The AppendChilds
  }

  //*BUTTON PRESS

  const emergentWindow = document.createElement("div"); //!Here i create a window to get all the info from the user

  const task = document.createElement("h3");
  const description = document.createElement("h3");
  const dueDate = document.createElement("h3");
  const priority = document.createElement("h3");

  //
  let taskInput = document.createElement("input");
  let descriptionInput = document.createElement("input");
  let dueDateInput = document.createElement("input");
  let priorityInputHigh = document.createElement("input");
  let priorityInputMedium = document.createElement("input");
  let priorityInputLow = document.createElement("input");
  //

  let priorityInputHighLabel = document.createElement("label");
  let priorityInputMediumLabel = document.createElement("label");
  let priorityInputLowLabel = document.createElement("label");

  const insertButton = document.createElement("button");

  //!SETEO LOS TRES NOMBRES IGUALES PARA QUE EL RADIO
  priorityInputHigh.name = "importance";
  priorityInputMedium.name = "importance";
  priorityInputLow.name = "importance";
  //!BUTON FUNCIONE Y DESSELECIONE OTRO RADIO AL PRECIONAR UN RADIO

  priorityInputHigh.setAttribute("type", "radio");
  priorityInputMedium.setAttribute("type", "radio");
  priorityInputLow.setAttribute("type", "radio"); //^Set the Input as a radio element

  dueDateInput.setAttribute("type", "date"); //^Set the Input as a Date element

  const emergentWindowElements = [
    task,
    taskInput,
    description,
    descriptionInput,
    dueDate,
    dueDateInput,
    priority,
    priorityInputHigh,
    priorityInputHighLabel,
    priorityInputMedium,
    priorityInputMediumLabel,
    priorityInputLow,
    priorityInputLowLabel,
    insertButton,
  ];
  const emergentWindowClass = [
    "task",
    "taskInput",
    "description",
    "descriptionInput",
    "dueDate",
    "dueDateInput",
    "priority",
    "priorityInputHigh",
    "priorityInputHighLabel",
    "priorityInputMedium",
    "priorityInputMediumLabel",
    "priorityInputLow",
    "priorityInputLowLabel",
    "insertButton",
  ];
  const emergentWindowText = [
    "TASK",
    "TASK INPUT",
    "DESCRIPTION",
    "DESCRIPTION INPUT",
    "DUE DATE",
    "DUE DATE INPUT",
    "PRIORITY",
    "PRIORITY HIGH",
    "HIGH PRIORITY", //LABEL
    "PRIORITY MEDIUM",
    "MEDIUM PRIORITY", //LABEL
    "PRIORITY LOW",
    "LOW PRIORITY", //LABEL
    "SUBMIT",
  ];

  addProjects.addEventListener("click", function () {
    insertButton.style.display = "inline";

    emergentWindow.className = "emergentWindow";

    document.body.appendChild(emergentWindow);

    emergentWindow.style.display = "inline";

    for (let i = 0; i < emergentWindowElements.length; i++) {
      emergentWindow.appendChild(emergentWindowElements[i]);
      emergentWindowElements[i].className = emergentWindowClass[i];
      emergentWindowElements[i].textContent = emergentWindowText[i];
    }
  });

  insertButton.addEventListener("click", function () {
    let tasks = taskInput.value;
    let desc = descriptionInput.value;
    let date = dueDateInput.value;

    const Notes = document.createElement("div");

    const taskNotes = document.createElement("h4");
    const descNotes = document.createElement("p");
    const dateNotes = document.createElement("h4");
    const closeButton = document.createElement("button");
    let notesElements = [taskNotes, descNotes, dateNotes];

    //!CLASS
    taskNotes.className = "taskNotes";
    descNotes.className = "descNotes";
    dateNotes.className = "dateNotes";
    closeButton.className = "closeButton";

    //*Text Content
    taskNotes.textContent = tasks;
    descNotes.textContent = desc;
    dateNotes.textContent = date;
    closeButton.textContent = "DELETE";

    //?Append
    Notes.className = "Notes";

    document.body.appendChild(Notes);
    Notes.appendChild(taskNotes);
    Notes.appendChild(descNotes);
    Notes.appendChild(dateNotes);

    emergentWindow.style.display = "none";

    //^Radio Buttons
    if (priorityInputHigh.checked) {
      taskNotes.style.color = "red";
    } else if (priorityInputMedium.checked) {
      taskNotes.style.color = "yellow";
    } else if (priorityInputLow.checked) {
      taskNotes.style.color = "green";
    }

    //!MODIFY NOTES CODE
    for (let i = 0; i < notesElements.length; i++) {
      notesElements[i].addEventListener("dblclick", function () {
        const modifyInput = document.createElement("input");

        const modifyInputDate = document.createElement("input");
        modifyInputDate.setAttribute("type", "date");

        const modifyButton = document.createElement("button");
        modifyButton.className = "modifyButton";

        if (i < 2) {
          Notes.appendChild(modifyInput);
        } else {
          Notes.appendChild(modifyInputDate);
        }
        Notes.append(modifyButton);

        modifyButton.textContent = "MODIFY";

        modifyButton.addEventListener("click", function () {
          if (i < 2) {
            notesElements[i].textContent = modifyInput.value;
            Notes.removeChild(modifyInput);
            Notes.removeChild(modifyButton);
          } else {
            notesElements[i].textContent = modifyInputDate.value;
            Notes.removeChild(modifyInputDate);
            Notes.removeChild(modifyButton);
          }
        });
      });
    }

    // //~Delete elements
    Notes.addEventListener("mouseenter", function () {
      Notes.appendChild(closeButton);
    });
    Notes.addEventListener("mouseleave", function () {
      Notes.removeChild(closeButton);
    });
    closeButton.addEventListener("click", function () {
      Notes.remove();
    });
  });

  return leftBar;
}

document.body.appendChild(Execution());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja2RlZmF1bHQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja2RlZmF1bHQvLi9zcmMvdG9wQmFyLmpzIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2tkZWZhdWx0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja2RlZmF1bHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrZGVmYXVsdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Gb250cy9BbGF0YS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vSWNvbnMvb3V0bGluZV9pbmJveF93aGl0ZV8yNGRwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vSWNvbnMvb3V0bGluZV90b2RheV93aGl0ZV8yNGRwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vSWNvbnMvb3V0bGluZV9kYXRlX3JhbmdlX3doaXRlXzI0ZHAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9JY29ucy9vdXRsaW5lX25vdGVfYWRkX3doaXRlXzI0ZHAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGFsYXRhO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4udHBCYXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNhMTJmNzQsICMwMjAwMjQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjMjkwNDI0O1xcbn1cXG5cXG4udHBUaXRsZVN0eWxlIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVxcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5sZWZ0YmFyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDIwMDI0LCAjYTEyZjc0KTtcXG4gIHdpZHRoOiAxNSU7XFxuICBoZWlnaHQ6IDU3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSAjMDIwMDI0LCAxMHB4IDVweCA1cHggIzI5MDQyNDtcXG59XFxuXFxuLmhvbWUsXFxuLnByb2plY3RzIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYWxsVGFza3NTdHlsZSxcXG4udG9kYXlTdHlsZSxcXG4udGhpc1dlZWtTdHlsZSxcXG4uYWRkUHJvamVjdHNTdHlsZSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBhbGF0YSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5hbGxUYXNrc1N0eWxlOmhvdmVyLFxcbi50b2RheVN0eWxlOmhvdmVyLFxcbi50aGlzV2Vla1N0eWxlOmhvdmVyLFxcbi5hZGRQcm9qZWN0c1N0eWxlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjMwLCA4NSwgMjEzKTtcXG59XFxuXFxuLmFsbFRhc2tzU3R5bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKm9yIGFic29sdXRlKi9cXG4gIHotaW5kZXg6IDEwMDAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRvZGF5U3R5bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKm9yIGFic29sdXRlKi9cXG4gIHotaW5kZXg6IDEwMDAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRoaXNXZWVrU3R5bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKm9yIGFic29sdXRlKi9cXG4gIHotaW5kZXg6IDEwMDAwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmFkZFByb2plY3RzU3R5bGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qb3IgYWJzb2x1dGUqL1xcbiAgei1pbmRleDogMTAwMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5zZXJ0QnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDIwMDI0LCAjYTEyZjc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5pbnRyb2R1Y2VyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Ob3RlcyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAyMDAyNCwgI2ExMmY3NCk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zZW0gM2VtICMwMjAwMjQsIDEwcHggNXB4IDVweCAjMjkwNDI0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4LjI1JTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLypeUE9SIExBUyBEVURBUyBBQ0EgRVNUT1kgQVBMSUNBTkRPTyBFTCBGTEVYKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lbWVyZ2VudFdpbmRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAyMDAyNCwgI2ExMmY3NCk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zZW0gM2VtICMwMjAwMjQsIDEwcHggNXB4IDVweCAjMjkwNDI0O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMjAwcHggNjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgbWFyZ2luOiA4cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4udGFzayB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFza05vdGVzIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmRlc2NOb3RlcyB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5kYXRlTm90ZXMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2xvc2VCdXR0b24sXFxuLm1vZGlmeUJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMjAwMjQsICNhMTJmNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuZW1lcmdlbnRXaW5kb3cge1xcbiAgICBtYXJnaW46IDIwMHB4IDI0MHB4O1xcbiAgfVxcbiAgLmxlZnRiYXIge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3RUFBd0U7RUFDeEUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBEQUEwRDtBQUM1RDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLDZFQUE2RTtBQUMvRTs7QUFFQTs7OztFQUlFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0VBSUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0RBQWtEO0VBQ2xELGtCQUFrQixFQUFFLGNBQWM7RUFDbEMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdEQUFrRDtFQUNsRCxrQkFBa0IsRUFBRSxjQUFjO0VBQ2xDLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnREFBdUQ7RUFDdkQsa0JBQWtCLEVBQUUsY0FBYztFQUNsQyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0RBQXFEO0VBQ3JELGtCQUFrQixFQUFFLGNBQWM7RUFDbEMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3QyxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsMERBQTBEO0VBQzFELGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUEsOENBQThDO0FBQzlDO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QywwREFBMEQ7RUFDMUQsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBhbGF0YTtcXG4gIHNyYzogdXJsKC4vRm9udHMvQWxhdGEtUmVndWxhci50dGYpO1xcbn1cXG5cXG4udHBCYXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNhMTJmNzQsICMwMjAwMjQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjMjkwNDI0O1xcbn1cXG5cXG4udHBUaXRsZVN0eWxlIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJhbmtsaW4gR290aGljIE1lZGl1bVxcXCIsIFxcXCJBcmlhbCBOYXJyb3dcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5sZWZ0YmFyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDIwMDI0LCAjYTEyZjc0KTtcXG4gIHdpZHRoOiAxNSU7XFxuICBoZWlnaHQ6IDU3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSAjMDIwMDI0LCAxMHB4IDVweCA1cHggIzI5MDQyNDtcXG59XFxuXFxuLmhvbWUsXFxuLnByb2plY3RzIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYWxsVGFza3NTdHlsZSxcXG4udG9kYXlTdHlsZSxcXG4udGhpc1dlZWtTdHlsZSxcXG4uYWRkUHJvamVjdHNTdHlsZSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGZvbnQtZmFtaWx5OiBhbGF0YSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5hbGxUYXNrc1N0eWxlOmhvdmVyLFxcbi50b2RheVN0eWxlOmhvdmVyLFxcbi50aGlzV2Vla1N0eWxlOmhvdmVyLFxcbi5hZGRQcm9qZWN0c1N0eWxlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjMwLCA4NSwgMjEzKTtcXG59XFxuXFxuLmFsbFRhc2tzU3R5bGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoLi9JY29ucy9vdXRsaW5lX2luYm94X3doaXRlXzI0ZHAucG5nKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLypvciBhYnNvbHV0ZSovXFxuICB6LWluZGV4OiAxMDAwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RheVN0eWxlOjpiZWZvcmUge1xcbiAgY29udGVudDogdXJsKC4vSWNvbnMvb3V0bGluZV90b2RheV93aGl0ZV8yNGRwLnBuZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qb3IgYWJzb2x1dGUqL1xcbiAgei1pbmRleDogMTAwMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGhpc1dlZWtTdHlsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IHVybCguL0ljb25zL291dGxpbmVfZGF0ZV9yYW5nZV93aGl0ZV8yNGRwLnBuZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qb3IgYWJzb2x1dGUqL1xcbiAgei1pbmRleDogMTAwMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uYWRkUHJvamVjdHNTdHlsZTo6YWZ0ZXIge1xcbiAgY29udGVudDogdXJsKC4vSWNvbnMvb3V0bGluZV9ub3RlX2FkZF93aGl0ZV8yNGRwLnBuZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qb3IgYWJzb2x1dGUqL1xcbiAgei1pbmRleDogMTAwMDAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaW5zZXJ0QnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDIwMDI0LCAjYTEyZjc0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5pbnRyb2R1Y2VyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Ob3RlcyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAyMDAyNCwgI2ExMmY3NCk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zZW0gM2VtICMwMjAwMjQsIDEwcHggNXB4IDVweCAjMjkwNDI0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4LjI1JTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLypeUE9SIExBUyBEVURBUyBBQ0EgRVNUT1kgQVBMSUNBTkRPTyBFTCBGTEVYKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lbWVyZ2VudFdpbmRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAyMDAyNCwgI2ExMmY3NCk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zZW0gM2VtICMwMjAwMjQsIDEwcHggNXB4IDVweCAjMjkwNDI0O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1hcmdpbjogMjAwcHggNjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgbWFyZ2luOiA4cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4udGFzayB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGFza05vdGVzIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmRlc2NOb3RlcyB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5kYXRlTm90ZXMge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2xvc2VCdXR0b24sXFxuLm1vZGlmeUJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMjAwMjQsICNhMTJmNzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuZW1lcmdlbnRXaW5kb3cge1xcbiAgICBtYXJnaW46IDIwMHB4IDI0MHB4O1xcbiAgfVxcbiAgLmxlZnRiYXIge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gdG9wQmFyKCkge1xuICBjb25zdCB0cEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRwQmFyLmNsYXNzTmFtZSA9IFwidHBCYXJcIjtcbiAgdHBUaXRsZS5jbGFzc05hbWUgPSBcInRwVGl0bGVTdHlsZVwiO1xuXG4gIHRwVGl0bGUudGV4dENvbnRlbnQgPSBcIlRPRE8gTElTVFwiO1xuXG4gIHRwQmFyLmFwcGVuZENoaWxkKHRwVGl0bGUpO1xuXG4gIHJldHVybiB0cEJhcjtcbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9wQmFyKCkpO1xuXG5leHBvcnQgZGVmYXVsdCB0b3BCYXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgdG9wQmFyIGZyb20gXCIuL3RvcEJhclwiO1xuXG5jb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5jb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmNvbnN0IGFkZFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG5mdW5jdGlvbiBFeGVjdXRpb24oKSB7XG4gIHRvcEJhcigpO1xuXG4gIC8vIUNMQVNTXG4gIGNvbnN0IGNsYXNzRWxlbWVudHMgPSBbXG4gICAgaG9tZSxcbiAgICBhbGxUYXNrcyxcbiAgICB0b2RheSxcbiAgICB0aGlzV2VlayxcbiAgICBwcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0cyxcbiAgXTtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IFtcbiAgICBcImhvbWVcIixcbiAgICBcImFsbFRhc2tzU3R5bGVcIixcbiAgICBcInRvZGF5U3R5bGVcIixcbiAgICBcInRoaXNXZWVrU3R5bGVcIixcbiAgICBcInByb2plY3RzXCIsXG4gICAgXCJhZGRQcm9qZWN0c1N0eWxlXCIsXG4gIF07XG4gIGNvbnN0IHRleHRDb250ZW50cyA9IFtcbiAgICBcIkhvbWVcIixcbiAgICBcIkFsbCBUYXNrc1wiLFxuICAgIFwiVG9kYXlcIixcbiAgICBcIlRoaXMgV2Vla1wiLFxuICAgIFwiUHJvamVjdHNcIixcbiAgICBcIkFkZCBQcm95ZWN0c1wiLFxuICBdO1xuICBsZWZ0QmFyLmNsYXNzTmFtZSA9IFwibGVmdGJhclwiOyAvLyFUSElTIElTTidUIElOIFRIRSBBUlJBWSBCQ1MgSVMgVEhFIFBSSU5DSVBBTCBBTkQgSVQgTkVFRCBUTyBCRSBBTE9ORVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzRWxlbWVudHNbaV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lc1tpXTsgLy8gJiBUaGUgQ2xhc3NOYW1lc1xuICAgIGNsYXNzRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudHNbaV07IC8vXlRoZSBUZXh0Q29udGVudFxuICAgIGxlZnRCYXIuYXBwZW5kQ2hpbGQoY2xhc3NFbGVtZW50c1tpXSk7IC8vKlRoZSBBcHBlbmRDaGlsZHNcbiAgfVxuXG4gIC8vKkJVVFRPTiBQUkVTU1xuXG4gIGNvbnN0IGVtZXJnZW50V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8hSGVyZSBpIGNyZWF0ZSBhIHdpbmRvdyB0byBnZXQgYWxsIHRoZSBpbmZvIGZyb20gdGhlIHVzZXJcblxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cbiAgLy9cbiAgbGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXRNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAvL1xuXG4gIGxldCBwcmlvcml0eUlucHV0SGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dE1lZGl1bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dExvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gIGNvbnN0IGluc2VydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLy8hU0VURU8gTE9TIFRSRVMgTk9NQlJFUyBJR1VBTEVTIFBBUkEgUVVFIEVMIFJBRElPXG4gIHByaW9yaXR5SW5wdXRIaWdoLm5hbWUgPSBcImltcG9ydGFuY2VcIjtcbiAgcHJpb3JpdHlJbnB1dE1lZGl1bS5uYW1lID0gXCJpbXBvcnRhbmNlXCI7XG4gIHByaW9yaXR5SW5wdXRMb3cubmFtZSA9IFwiaW1wb3J0YW5jZVwiO1xuICAvLyFCVVRPTiBGVU5DSU9ORSBZIERFU1NFTEVDSU9ORSBPVFJPIFJBRElPIEFMIFBSRUNJT05BUiBVTiBSQURJT1xuXG4gIHByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgcHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gIHByaW9yaXR5SW5wdXRMb3cuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpOyAvL15TZXQgdGhlIElucHV0IGFzIGEgcmFkaW8gZWxlbWVudFxuXG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTsgLy9eU2V0IHRoZSBJbnB1dCBhcyBhIERhdGUgZWxlbWVudFxuXG4gIGNvbnN0IGVtZXJnZW50V2luZG93RWxlbWVudHMgPSBbXG4gICAgdGFzayxcbiAgICB0YXNrSW5wdXQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlLFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eSxcbiAgICBwcmlvcml0eUlucHV0SGlnaCxcbiAgICBwcmlvcml0eUlucHV0SGlnaExhYmVsLFxuICAgIHByaW9yaXR5SW5wdXRNZWRpdW0sXG4gICAgcHJpb3JpdHlJbnB1dE1lZGl1bUxhYmVsLFxuICAgIHByaW9yaXR5SW5wdXRMb3csXG4gICAgcHJpb3JpdHlJbnB1dExvd0xhYmVsLFxuICAgIGluc2VydEJ1dHRvbixcbiAgXTtcbiAgY29uc3QgZW1lcmdlbnRXaW5kb3dDbGFzcyA9IFtcbiAgICBcInRhc2tcIixcbiAgICBcInRhc2tJbnB1dFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICBcImRlc2NyaXB0aW9uSW5wdXRcIixcbiAgICBcImR1ZURhdGVcIixcbiAgICBcImR1ZURhdGVJbnB1dFwiLFxuICAgIFwicHJpb3JpdHlcIixcbiAgICBcInByaW9yaXR5SW5wdXRIaWdoXCIsXG4gICAgXCJwcmlvcml0eUlucHV0SGlnaExhYmVsXCIsXG4gICAgXCJwcmlvcml0eUlucHV0TWVkaXVtXCIsXG4gICAgXCJwcmlvcml0eUlucHV0TWVkaXVtTGFiZWxcIixcbiAgICBcInByaW9yaXR5SW5wdXRMb3dcIixcbiAgICBcInByaW9yaXR5SW5wdXRMb3dMYWJlbFwiLFxuICAgIFwiaW5zZXJ0QnV0dG9uXCIsXG4gIF07XG4gIGNvbnN0IGVtZXJnZW50V2luZG93VGV4dCA9IFtcbiAgICBcIlRBU0tcIixcbiAgICBcIlRBU0sgSU5QVVRcIixcbiAgICBcIkRFU0NSSVBUSU9OXCIsXG4gICAgXCJERVNDUklQVElPTiBJTlBVVFwiLFxuICAgIFwiRFVFIERBVEVcIixcbiAgICBcIkRVRSBEQVRFIElOUFVUXCIsXG4gICAgXCJQUklPUklUWVwiLFxuICAgIFwiUFJJT1JJVFkgSElHSFwiLFxuICAgIFwiSElHSCBQUklPUklUWVwiLCAvL0xBQkVMXG4gICAgXCJQUklPUklUWSBNRURJVU1cIixcbiAgICBcIk1FRElVTSBQUklPUklUWVwiLCAvL0xBQkVMXG4gICAgXCJQUklPUklUWSBMT1dcIixcbiAgICBcIkxPVyBQUklPUklUWVwiLCAvL0xBQkVMXG4gICAgXCJTVUJNSVRcIixcbiAgXTtcblxuICBhZGRQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGluc2VydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcblxuICAgIGVtZXJnZW50V2luZG93LmNsYXNzTmFtZSA9IFwiZW1lcmdlbnRXaW5kb3dcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW1lcmdlbnRXaW5kb3cpO1xuXG4gICAgZW1lcmdlbnRXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtZXJnZW50V2luZG93RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVtZXJnZW50V2luZG93LmFwcGVuZENoaWxkKGVtZXJnZW50V2luZG93RWxlbWVudHNbaV0pO1xuICAgICAgZW1lcmdlbnRXaW5kb3dFbGVtZW50c1tpXS5jbGFzc05hbWUgPSBlbWVyZ2VudFdpbmRvd0NsYXNzW2ldO1xuICAgICAgZW1lcmdlbnRXaW5kb3dFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IGVtZXJnZW50V2luZG93VGV4dFtpXTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc2VydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCB0YXNrcyA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgICBsZXQgZGVzYyA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG5cbiAgICBjb25zdCBOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgZGVzY05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGF0ZU5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgbm90ZXNFbGVtZW50cyA9IFt0YXNrTm90ZXMsIGRlc2NOb3RlcywgZGF0ZU5vdGVzXTtcblxuICAgIC8vIUNMQVNTXG4gICAgdGFza05vdGVzLmNsYXNzTmFtZSA9IFwidGFza05vdGVzXCI7XG4gICAgZGVzY05vdGVzLmNsYXNzTmFtZSA9IFwiZGVzY05vdGVzXCI7XG4gICAgZGF0ZU5vdGVzLmNsYXNzTmFtZSA9IFwiZGF0ZU5vdGVzXCI7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gXCJjbG9zZUJ1dHRvblwiO1xuXG4gICAgLy8qVGV4dCBDb250ZW50XG4gICAgdGFza05vdGVzLnRleHRDb250ZW50ID0gdGFza3M7XG4gICAgZGVzY05vdGVzLnRleHRDb250ZW50ID0gZGVzYztcbiAgICBkYXRlTm90ZXMudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcblxuICAgIC8vP0FwcGVuZFxuICAgIE5vdGVzLmNsYXNzTmFtZSA9IFwiTm90ZXNcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTm90ZXMpO1xuICAgIE5vdGVzLmFwcGVuZENoaWxkKHRhc2tOb3Rlcyk7XG4gICAgTm90ZXMuYXBwZW5kQ2hpbGQoZGVzY05vdGVzKTtcbiAgICBOb3Rlcy5hcHBlbmRDaGlsZChkYXRlTm90ZXMpO1xuXG4gICAgZW1lcmdlbnRXaW5kb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgLy9eUmFkaW8gQnV0dG9uc1xuICAgIGlmIChwcmlvcml0eUlucHV0SGlnaC5jaGVja2VkKSB7XG4gICAgICB0YXNrTm90ZXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHlJbnB1dE1lZGl1bS5jaGVja2VkKSB7XG4gICAgICB0YXNrTm90ZXMuc3R5bGUuY29sb3IgPSBcInllbGxvd1wiO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHlJbnB1dExvdy5jaGVja2VkKSB7XG4gICAgICB0YXNrTm90ZXMuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgfVxuXG4gICAgLy8hTU9ESUZZIE5PVEVTIENPREVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vdGVzRWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbW9kaWZ5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICAgICAgY29uc3QgbW9kaWZ5SW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBtb2RpZnlJbnB1dERhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgbW9kaWZ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbW9kaWZ5QnV0dG9uLmNsYXNzTmFtZSA9IFwibW9kaWZ5QnV0dG9uXCI7XG5cbiAgICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgICAgTm90ZXMuYXBwZW5kQ2hpbGQobW9kaWZ5SW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE5vdGVzLmFwcGVuZENoaWxkKG1vZGlmeUlucHV0RGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgTm90ZXMuYXBwZW5kKG1vZGlmeUJ1dHRvbik7XG5cbiAgICAgICAgbW9kaWZ5QnV0dG9uLnRleHRDb250ZW50ID0gXCJNT0RJRllcIjtcblxuICAgICAgICBtb2RpZnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoaSA8IDIpIHtcbiAgICAgICAgICAgIG5vdGVzRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBtb2RpZnlJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIE5vdGVzLnJlbW92ZUNoaWxkKG1vZGlmeUlucHV0KTtcbiAgICAgICAgICAgIE5vdGVzLnJlbW92ZUNoaWxkKG1vZGlmeUJ1dHRvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdGVzRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBtb2RpZnlJbnB1dERhdGUudmFsdWU7XG4gICAgICAgICAgICBOb3Rlcy5yZW1vdmVDaGlsZChtb2RpZnlJbnB1dERhdGUpO1xuICAgICAgICAgICAgTm90ZXMucmVtb3ZlQ2hpbGQobW9kaWZ5QnV0dG9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy9+RGVsZXRlIGVsZW1lbnRzXG4gICAgTm90ZXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgTm90ZXMuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIH0pO1xuICAgIE5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIE5vdGVzLnJlbW92ZUNoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICB9KTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgTm90ZXMucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0QmFyO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEV4ZWN1dGlvbigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==