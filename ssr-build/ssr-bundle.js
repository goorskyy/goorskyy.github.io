module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+waJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "2Y+P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkComponent; });
/* harmony import */ var _link_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9V1R");

function LinkComponent(props) {
  return h("a", {
    class: "link",
    href: props.href
  }, props.title);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "9V1R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "AM+F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreComponent; });
/* harmony import */ var _score_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DFEF");

function ScoreComponent(props) {
  var array = [];
  for (var i = 0; i < 5; i++) {
    var active = i < props.score ? 'score--active' : '';
    var classes = "score ".concat(active);
    array.push(h("span", {
      class: classes
    }));
  }
  return array;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "CCTK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var _section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hf3f");

function SectionComponent(props) {
  return h("p", {
    class: "section__title"
  }, props.title);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "DFEF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "DqCW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var _timeline_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vG3n");

function TimelineComponent(props) {
  return h("div", {
    class: "timeline__container"
  }, h("div", {
    class: "flex__space-between"
  }, h("span", {
    class: "timeline__title"
  }, props.title), h("span", {
    class: "timeline__location"
  }, props.location)), h("p", {
    class: "timeline__period"
  }, props.startYear, " - ", props.endYear), h("p", {
    class: "timeline__description"
  }, props.description));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "LdiY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+waJ");

function TitleComponent(props) {
  return h("div", {
    class: "page-title__container"
  }, h("h2", {
    class: "page-title__text"
  }, props.title));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _components_title_TitleComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LdiY");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h3ov");
/* harmony import */ var _components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CCTK");
/* harmony import */ var _components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DqCW");
/* harmony import */ var _components_link_LinkComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2Y+P");
/* harmony import */ var _components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AM+F");






function App() {
  return h(Fragment, null, h("div", {
    class: "resume resume__container"
  }, h(_components_title_TitleComponent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    title: "Micha\u0142 G\xF3rski"
  }), h("div", {
    class: "resume__left-container"
  }, h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Details"
  }), h("p", {
    class: "label"
  }, "Phone"), h("p", {
    class: "text"
  }, "+48609203699"), h("p", {
    class: "label"
  }, "Email"), h("p", {
    class: "text"
  }, "michal.gorski.it@gmail.com"), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Links"
  }), h(_components_link_LinkComponent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    href: "https://github.com/goorskyy",
    title: "GitHub"
  }), h(_components_link_LinkComponent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    href: "https://www.linkedin.com/in/mgorskyy/",
    title: "Linkedin"
  }), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Skills"
  }), h("p", {
    class: "label"
  }, "Java"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "Spring"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "Javascript"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "HTML & CSS"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "Docker"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h("p", {
    class: "label"
  }, "SQL"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h("p", {
    class: "label"
  }, "Angular 2+/ReactJS"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Languages"
  }), h("p", {
    class: "label"
  }, "Polish"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "5"
  }), h("p", {
    class: "label"
  }, "English"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "4"
  })), h("div", {
    class: "resume__right-container"
  }, h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "About me"
  }), h("p", null, "With many years of experience in the IT industry, I have honed my skills in developing and maintaining web applications on various complexity levels. My non-standard approach to leading teams involves inspiring proactiveness and fostering a positive team culture."), h("p", null, "As a Team Lead, I am passionate about empowering my team to collaborate effectively. My strong communication skills enable me to communicate complex technical concepts to non-technical stakeholders and align our work with business objectives."), h("p", null, "I am always looking for innovative ways to optimize team performance and continuously improve our processes. If you're looking for a Team Lead who can deliver high-quality solutions while fostering a positive and collaborative team culture, let's connect and explore how we can achieve your business goals together."), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Employment history"
  }), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Team Lead, OneWelcome",
    startYear: "2022",
    endYear: "present",
    location: "Gda\u0144sk/Remote"
  }), h("p", null, "I oversee a team comprising four skilled frontend engineers, tasked with the following key responsibilities:"), h("ul", null, h("li", null, "Developing and maintaining an open-source, highly accessible, component library in alignment with UX-designed templates."), h("li", null, "Collaborating on the creation of UI for new products."), h("li", null, "Exploring innovative solutions through the development of Proof of Concepts (PoCs).")), h("p", null, "In my role as a team lead, I assume various duties, including:"), h("ul", null, h("li", null, "Acting as the primary point of contact for product management."), h("li", null, "Strategizing and refining our workflow and tasks."), h("li", null, "Conceptualizing novel solutions and designs."), h("li", null, "Nurturing a cohesive engineering culture within the team.")), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Software Developer, OneWelcome",
    startYear: "2018",
    endYear: "2022",
    location: "Gda\u0144sk/Remote"
  }), h("p", null, "I was working with a product operating in the IAM space where I was mostly responsible for the engineering tasks, such as creating new features, testing, and styling."), h("p", null, "For the first two years, I worked closely with the customer implementing the designs. I was also making demonstrations of our customizations."), h("p", null, " After that, I moved to an R&D position where I was creating features based on business requirements. In addition to that, I was leading a frontend architecture meeting."), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Junior Java Developer, Solwit",
    startYear: "2016",
    endYear: "2018",
    location: "Gda\u0144sk"
  }), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Education"
  }), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Masters`s, University of Gdansk",
    startYear: "2013",
    endYear: "2018",
    location: "Gda\u0144sk"
  }))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "h3ov":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "hf3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "vG3n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map