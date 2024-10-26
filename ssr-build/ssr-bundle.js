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
  for (var i = 0; i < 6; i++) {
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
/* harmony import */ var _components_chip_ChipComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("x2aB");
/* harmony import */ var _components_photo_PhotoComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("a4Xf");








function App() {
  var startYear = 2016;
  var currentYear = new Date().getFullYear();
  var experienceInYears = currentYear - startYear;
  return h(Fragment, null, h("div", {
    class: "resume resume__container"
  }, h(_components_title_TitleComponent__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    title: "Micha\u0142 G\xF3rski"
  }), h("div", {
    class: "resume__left-container"
  }, h(_components_photo_PhotoComponent__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
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
    title: "LinkedIn"
  }), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Programming languages"
  }), h("p", {
    class: "label"
  }, "Java"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "4"
  }), h("p", {
    class: "label"
  }, "Javascript/Typescript"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "HTML & CSS"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "SQL"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Frameworks & Tools"
  }), h("p", {
    class: "label"
  }, "Spring (Boot/MVC/Data/Security)"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "4"
  }), h("p", {
    class: "label"
  }, "Testing (Cypress, Selenium, JUnit, Jest, Chromatic)"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "4"
  }), h("p", {
    class: "label"
  }, "ReactJS"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "Thymeleaf"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "Docker"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "3"
  }), h("p", {
    class: "label"
  }, "Kubernetes"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h("p", {
    class: "label"
  }, "Angular"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h("p", {
    class: "label"
  }, "NodeJS"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "2"
  }), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Other"
  }), h("p", {
    class: "label"
  }, "CircleCI"), h("p", {
    class: "label"
  }, "GitHub/GitLab"), h("p", {
    class: "label"
  }, "Jira/Confluence"), h("p", {
    class: "label"
  }, "Maven"), h("p", {
    class: "label"
  }, "Sonar"), h("p", {
    class: "label"
  }, "Git"), h("p", {
    class: "label"
  }, "REST"), h("p", {
    class: "label"
  }, "OAuth/OIDC"), h("p", {
    class: "label"
  }, "Unix"), h("p", {
    class: "label"
  }, "Redis"), h("p", {
    class: "label"
  }, "Postman"), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Concepts"
  }), h("p", {
    class: "label"
  }, "SOLID"), h("p", {
    class: "label"
  }, "Clean code"), h("p", {
    class: "label"
  }, "Micro-frontends"), h("p", {
    class: "label"
  }, "Multitenancy"), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Languages"
  }), h("p", {
    class: "label"
  }, "Polish"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "6"
  }), h("p", {
    class: "label"
  }, "English"), h(_components_score_ScoreComponent__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    score: "5"
  })), h("div", {
    class: "resume__right-container"
  }, h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "About Me"
  }), h("p", null, "With ", h("b", null, "over ", experienceInYears), " years of experience in the IT industry, I have honed my skills in developing and maintaining web applications on various complexity levels. My unique approach to team leadership focuses on inspiring proactivity and fostering a positive team culture."), h("p", null, "If you're looking for a developer who can deliver high-quality solutions while cultivating a collaborative and motivated team environment, let\u2019s connect and explore how we can achieve your business goals together."), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Employment history"
  }), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Team Lead at OneWelcome, a Thales company",
    startYear: "2022",
    endYear: "present",
    location: "Gda\u0144sk/Remote"
  }), h(_components_chip_ChipComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    titles: ['ReactJS', 'TypeScript', 'Cypress', 'Storybook', 'Java', 'Spring']
  }), h("p", null, "I lead a multinational team of four skilled developers, each with a diverse skill set, tasked with the following key responsibilities:"), h("ul", null, h("li", null, "Developing and maintaining an open-source, highly accessible component library, while building scalable user interfaces using ReactJS and TypeScript in a micro-frontend architecture."), h("li", null, "Designing and implementing system architecture to support scalable and efficient frontend applications."), h("li", null, "Working on a new platform, being responsible for new microservices and frontend applications."), h("li", null, "Owning and maintaining production-ready micro-frontend containers."), h("li", null, "Writing various types of tests, including unit, component, end-to-end, and visual tests.")), h("p", null, "As a team leader, I focus on:"), h("ul", null, h("li", null, "Planning and refining our work processes and tasks within an agile framework to enhance team productivity."), h("li", null, "Fostering a strong engineering culture by implementing best practices and encouraging continuous learning."), h("li", null, "Conducting job interviews, facilitating 1-on-1s, and overseeing annual performance reviews to support team development.")), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Software Developer at Onegini",
    startYear: "2018",
    endYear: "2022",
    location: "Gda\u0144sk/Remote"
  }), h(_components_chip_ChipComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    titles: ['Java', 'Spring', 'Selenium', 'Thymeleaf', 'JavaScript']
  }), h("p", null, "I worked on the implementation of a core identity platform with over 25 customers from various markets, including financial, insurance, and government sectors. In this role, time was crucial, which allowed me to test my abilities when working under pressure."), h("p", null, "My key responsibilities included:"), h("ul", null, h("li", null, "Integrating and customizing our product, which involved integrating it with existing APIs, implementing UI designs, and more."), h("li", null, "Collaborating with architects to validate proposed designs."), h("li", null, "Implementing and maintaining internal tools (e.g., SpringBoot starters) to expedite time-to-market."), h("li", null, "Assisting the R&D team with new features and maintenance tasks.")), h("p", null, "I transitioned to an R&D position where I continued to work on the same identity platform's monolithic application as a senior Java developer. In this role, my focus was primarily on:"), h("ul", null, h("li", null, "Delivering new features, primarily related to identity protocols such as OIDC/OAuth2, SAML, and their implementations with various national identity providers."), h("li", null, "Enhancing the existing codebase and tests, which significantly reduced the time and flakiness of our Selenium-based end-to-end tests."), h("li", null, "Shifting from JUnit/Mockito-based tests to proper black-box testing whenever applicable.")), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Junior Java Developer at Solwit",
    startYear: "2016",
    endYear: "2018",
    location: "Gda\u0144sk"
  }), h(_components_chip_ChipComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    titles: ['Java', 'Spring', 'Angular', 'Protractor', 'TypeScript']
  }), h("p", null, "I was responsible for development of web application for an external customer. The work consisted of both backend part of the application and frontend."), h(_components_section_SectionComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Education"
  }), h(_components_timeline_TimelineComponent__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Masters`s in Computer Science, University of Gdansk",
    startYear: "2013",
    endYear: "2018",
    location: "Gda\u0144sk"
  }))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "UGRL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "UhlR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "a4Xf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
/* harmony import */ var _photo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UhlR");

function PhotoComponent() {
  return h("div", {
    class: 'photo__container'
  }, h("img", {
    class: 'photo',
    width: 150,
    height: 150,
    src: '/assets/portrait.jpg',
    alt: "portrait of Michał Górski"
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

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


/***/ }),

/***/ "x2aB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipComponent; });
/* harmony import */ var _chip_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UGRL");

function ChipComponent(props) {
  var chips = [];
  props.titles.forEach(function (element) {
    chips.push(h("span", {
      class: "chip"
    }, element));
  });
  return chips;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map