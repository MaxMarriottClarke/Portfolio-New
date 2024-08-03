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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/theme.js":
/*!***************************!*\
  !*** ./contexts/theme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeProvider\": () => (/* binding */ ThemeProvider),\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = ({ children  })=>{\n    const { 0: themeName , 1: setThemeName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setThemeName(localStorage.getItem('themeName') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));\n    }, []);\n    const toggleTheme = ()=>{\n        const newThemeName = themeName === 'dark' ? 'light' : 'dark';\n        localStorage.setItem('themeName', newThemeName);\n        setThemeName(newThemeName);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            themeName,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/max/Desktop/GithubProjects/Portfolio-New/contexts/theme.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined));\n};\nThemeProvider.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDeEI7QUFFbEMsS0FBSyxDQUFDSSxZQUFZLGlCQUFHSixvREFBYTtBQUVsQyxLQUFLLENBQUNLLGFBQWEsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN2QyxLQUFLLE1BQUVDLFNBQVMsTUFBRUMsWUFBWSxNQUFJTiwrQ0FBUSxDQUFDLENBQU87SUFFbERELGdEQUFTLEtBQU8sQ0FBQztRQUNmTyxZQUFZLENBQ1ZDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVcsZ0JBQzdCQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUE4QiwrQkFBRUMsT0FBTyxHQUN0RCxDQUFNLFFBQ04sQ0FBTztJQUVqQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDQyxXQUFXLE9BQVMsQ0FBQztRQUN6QixLQUFLLENBQUNDLFlBQVksR0FBR1IsU0FBUyxLQUFLLENBQU0sUUFBRyxDQUFPLFNBQUcsQ0FBTTtRQUM1REUsWUFBWSxDQUFDTyxPQUFPLENBQUMsQ0FBVyxZQUFFRCxZQUFZO1FBQzlDUCxZQUFZLENBQUNPLFlBQVk7SUFDM0IsQ0FBQztJQUVELE1BQU0sNkVBQ0hYLFlBQVksQ0FBQ2EsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDWCxTQUFTO1lBQUVPLFdBQVc7UUFBQyxDQUFDO2tCQUNyRFIsUUFBUTs7Ozs7O0FBR2YsQ0FBQztBQUVERCxhQUFhLENBQUNjLFNBQVMsR0FBRyxDQUFDO0lBQ3pCYixRQUFRLEVBQUVILG1FQUF5QjtBQUNyQyxDQUFDO0FBRW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhbmZvbGlvLy4vY29udGV4dHMvdGhlbWUuanM/YzhiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBUaGVtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWVOYW1lLCBzZXRUaGVtZU5hbWVdID0gdXNlU3RhdGUoJ2xpZ2h0JylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRoZW1lTmFtZShcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZU5hbWUnKSB8fFxuICAgICAgICAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG4gICAgICAgICAgPyAnZGFyaydcbiAgICAgICAgICA6ICdsaWdodCcpXG4gICAgKVxuICB9LCBbXSlcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZU5hbWUgPSB0aGVtZU5hbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaydcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWVOYW1lJywgbmV3VGhlbWVOYW1lKVxuICAgIHNldFRoZW1lTmFtZShuZXdUaGVtZU5hbWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWVOYW1lLCB0b2dnbGVUaGVtZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5UaGVtZVByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIsIFRoZW1lQ29udGV4dCB9XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiVGhlbWVDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWVOYW1lIiwic2V0VGhlbWVOYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidG9nZ2xlVGhlbWUiLCJuZXdUaGVtZU5hbWUiLCJzZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/theme.js\n");

/***/ }),

/***/ "./data/portfolio.js":
/*!***************************!*\
  !*** ./data/portfolio.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"about\": () => (/* binding */ about),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"skills\": () => (/* binding */ skills),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst header = {\n    // the `wordmark` property is optional - it can be left empty or deleted\n    // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid\n    wordmark: ''\n};\nconst about = {\n    // each of these properties is optional - they can be left empty or deleted\n    // each element in the `description` array will be treated as a separate paragraph\n    names: [\n        'Max',\n        'Marriott-Clarke'\n    ],\n    greetingEmoji: '👋',\n    role: 'MSci Theoretical Physics Student',\n    company: 'Imperial College London',\n    description: [\n        '4th year MSci student with a passion for mathematical problem solving looking to break into quant development.', \n    ],\n    resume: 'https://example.com',\n    social: {\n        github: 'https://github.com/MaxMarriottClarke',\n        linkedin: 'https://www.linkedin.com/in/max-marriott-clarke-1736b820a/'\n    }\n};\nconst projects = [\n    // projects can be added and removed\n    // if the array is left empty, the \"Projects\" section won't render\n    // each element in each `description` array will be treated as a separate paragraph\n    {\n        thumbnail: 'images/VAR.jpeg',\n        name: 'C++ Monte Carlo Value-at-Risk Engine',\n        description: [\n            \"This C++ Monte Carlo Value-at-Risk (VaR) engine assesses portfolio risk at both the portfolio and instrument levels. Leveraging design patterns for extensibility, it supports various instruments and stochastic processes. Core classes handle simulations, valuations, and statistics, while auxiliary classes manage tasks like covariance matrix calculation and historical backtesting.\", \n        ],\n        stack: [\n            'C++',\n            'C'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/CppMonteCarloVaR'\n    },\n    {\n        thumbnail: 'images/Tennis.jpeg',\n        name: 'Tennis ML Video Analysis',\n        description: [\n            'This project, developed using PyTorch, focuses on analyzing tennis videos to measure player speed, shot velocity, and shot frequency. It employs YOLO for detecting players and the tennis ball, and uses CNNs to extract key court keypoints. This work showcases advanced skills in machine learning and computer vision.', \n        ],\n        stack: [\n            'Python',\n            'Pytorch',\n            'YOLO'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/TennisML'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Augmented Reality Application',\n        description: [\n            'This project focuses on Camera Calibration and Augmented Reality. Using a checkerboard with 9 columns and 6 rows (54 internal corners) as the target, the system detects and extracts corners for camera calibration. Multiple images from different angles are used to determine intrinsic camera parameters such as focal length and image center. With the camera matrix and distortion coefficients, the project calculates the transitional and rotational vectors to accurately overlay 3D objects onto the 2D scene.', \n        ],\n        stack: [\n            'C++',\n            'opencv'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/AR-Cpp'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Extracting Neutrino Oscillation Paramaters via Machine Learning',\n        description: [\n            'Using gradient descent and other machine learning tools', \n        ],\n        stack: [\n            'Python',\n            'PyTorch'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Tennis AI tracker',\n        description: [\n            'Using yolo and python tracking tennis points', \n        ],\n        stack: [\n            'Python',\n            'PyTorch'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    },\n    {\n        thumbnail: 'images/placeholder-image.jpeg',\n        name: 'Cosmig Game - pygame',\n        description: [\n            'Built a game using pygame', \n        ],\n        stack: [\n            'Python',\n            'Pygame'\n        ],\n        sourceCode: 'https://github.com',\n        livePreview: 'https://example.com'\n    }, \n];\nconst skills = [\n    // skills can be added or removed\n    // if the array is left empty, the \"Skills\" section won't render\n    'Python',\n    'C++',\n    'R',\n    'Java',\n    'SQL',\n    'JavaScript',\n    'Git',\n    'AWS',\n    'CI/CD',\n    'Django',\n    'Next.js',\n    'GraphQL',\n    'Linux',\n    'Docker'\n];\nconst contact = {\n    // the `email` property is optional - it can be left empty or deleted\n    // if so, the \"Contact\" section won't render\n    email: 'mm1221@ic.ac.uk'\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVE7SUFDUixDQUFLO0lBQ0wsQ0FBRztJQUNILENBQU07SUFDTixDQUFLO0lBQ0wsQ0FBWTtJQUNaLENBQUs7SUFDTCxDQUFLO0lBQ0wsQ0FBTztJQUNQLENBQVE7SUFDUixDQUFTO0lBQ1QsQ0FBUztJQUNULENBQU87SUFDUCxDQUFRO0FBQ1YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZixFQUFxRTtJQUNyRSxFQUE0QztJQUM1Q0MsS0FBSyxFQUFFLENBQWlCO0FBQzFCLENBQUM7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9kYXRhL3BvcnRmb2xpby5qcz9kOGI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IHtcbiAgLy8gdGhlIGB3b3JkbWFya2AgcHJvcGVydHkgaXMgb3B0aW9uYWwgLSBpdCBjYW4gYmUgbGVmdCBlbXB0eSBvciBkZWxldGVkXG4gIC8vIGlmIHNvLCBpdCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHlvdXIgZnVsbCBuYW1lLCBvciBhIGRlZmF1bHQgd29yZG1hcmsgaWYgdGhlIGZ1bGwgbmFtZSBpcyBpbnZhbGlkXG4gIHdvcmRtYXJrOiAnJyxcbn1cblxuY29uc3QgYWJvdXQgPSB7XG4gIC8vIGVhY2ggb2YgdGhlc2UgcHJvcGVydGllcyBpcyBvcHRpb25hbCAtIHRoZXkgY2FuIGJlIGxlZnQgZW1wdHkgb3IgZGVsZXRlZFxuICAvLyBlYWNoIGVsZW1lbnQgaW4gdGhlIGBkZXNjcmlwdGlvbmAgYXJyYXkgd2lsbCBiZSB0cmVhdGVkIGFzIGEgc2VwYXJhdGUgcGFyYWdyYXBoXG4gIG5hbWVzOiBbJ01heCcsICdNYXJyaW90dC1DbGFya2UnXSxcbiAgZ3JlZXRpbmdFbW9qaTogJ/CfkYsnLFxuICByb2xlOiAnTVNjaSBUaGVvcmV0aWNhbCBQaHlzaWNzIFN0dWRlbnQnLFxuICBjb21wYW55OiAnSW1wZXJpYWwgQ29sbGVnZSBMb25kb24nLFxuICBkZXNjcmlwdGlvbjogW1xuICAgICc0dGggeWVhciBNU2NpIHN0dWRlbnQgd2l0aCBhIHBhc3Npb24gZm9yIG1hdGhlbWF0aWNhbCBwcm9ibGVtIHNvbHZpbmcgbG9va2luZyB0byBicmVhayBpbnRvIHF1YW50IGRldmVsb3BtZW50LicsXG4gIF0sXG4gIHJlc3VtZTogJ2h0dHBzOi8vZXhhbXBsZS5jb20nLFxuICBzb2NpYWw6IHtcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vTWF4TWFycmlvdHRDbGFya2UnLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21heC1tYXJyaW90dC1jbGFya2UtMTczNmI4MjBhLycsXG4gIH0sXG59XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAvLyBwcm9qZWN0cyBjYW4gYmUgYWRkZWQgYW5kIHJlbW92ZWRcbiAgLy8gaWYgdGhlIGFycmF5IGlzIGxlZnQgZW1wdHksIHRoZSBcIlByb2plY3RzXCIgc2VjdGlvbiB3b24ndCByZW5kZXJcbiAgLy8gZWFjaCBlbGVtZW50IGluIGVhY2ggYGRlc2NyaXB0aW9uYCBhcnJheSB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBzZXBhcmF0ZSBwYXJhZ3JhcGhcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9WQVIuanBlZycsXG4gICAgbmFtZTogJ0MrKyBNb250ZSBDYXJsbyBWYWx1ZS1hdC1SaXNrIEVuZ2luZScsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgIFwiVGhpcyBDKysgTW9udGUgQ2FybG8gVmFsdWUtYXQtUmlzayAoVmFSKSBlbmdpbmUgYXNzZXNzZXMgcG9ydGZvbGlvIHJpc2sgYXQgYm90aCB0aGUgcG9ydGZvbGlvIGFuZCBpbnN0cnVtZW50IGxldmVscy4gTGV2ZXJhZ2luZyBkZXNpZ24gcGF0dGVybnMgZm9yIGV4dGVuc2liaWxpdHksIGl0IHN1cHBvcnRzIHZhcmlvdXMgaW5zdHJ1bWVudHMgYW5kIHN0b2NoYXN0aWMgcHJvY2Vzc2VzLiBDb3JlIGNsYXNzZXMgaGFuZGxlIHNpbXVsYXRpb25zLCB2YWx1YXRpb25zLCBhbmQgc3RhdGlzdGljcywgd2hpbGUgYXV4aWxpYXJ5IGNsYXNzZXMgbWFuYWdlIHRhc2tzIGxpa2UgY292YXJpYW5jZSBtYXRyaXggY2FsY3VsYXRpb24gYW5kIGhpc3RvcmljYWwgYmFja3Rlc3RpbmcuXCIsXG4gICAgXSxcbiAgICBzdGFjazogWydDKysnLCAnQyddLFxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vTWF4TWFycmlvdHRDbGFya2UvQ3BwTW9udGVDYXJsb1ZhUicsXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvVGVubmlzLmpwZWcnLFxuICAgIG5hbWU6ICdUZW5uaXMgTUwgVmlkZW8gQW5hbHlzaXMnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnVGhpcyBwcm9qZWN0LCBkZXZlbG9wZWQgdXNpbmcgUHlUb3JjaCwgZm9jdXNlcyBvbiBhbmFseXppbmcgdGVubmlzIHZpZGVvcyB0byBtZWFzdXJlIHBsYXllciBzcGVlZCwgc2hvdCB2ZWxvY2l0eSwgYW5kIHNob3QgZnJlcXVlbmN5LiBJdCBlbXBsb3lzIFlPTE8gZm9yIGRldGVjdGluZyBwbGF5ZXJzIGFuZCB0aGUgdGVubmlzIGJhbGwsIGFuZCB1c2VzIENOTnMgdG8gZXh0cmFjdCBrZXkgY291cnQga2V5cG9pbnRzLiBUaGlzIHdvcmsgc2hvd2Nhc2VzIGFkdmFuY2VkIHNraWxscyBpbiBtYWNoaW5lIGxlYXJuaW5nIGFuZCBjb21wdXRlciB2aXNpb24uJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ1B5dGhvbicsICdQeXRvcmNoJywgJ1lPTE8nXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL01heE1hcnJpb3R0Q2xhcmtlL1Rlbm5pc01MJ1xuICB9LFxuICB7XG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxuICAgIG5hbWU6ICdBdWdtZW50ZWQgUmVhbGl0eSBBcHBsaWNhdGlvbicsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICdUaGlzIHByb2plY3QgZm9jdXNlcyBvbiBDYW1lcmEgQ2FsaWJyYXRpb24gYW5kIEF1Z21lbnRlZCBSZWFsaXR5LiBVc2luZyBhIGNoZWNrZXJib2FyZCB3aXRoIDkgY29sdW1ucyBhbmQgNiByb3dzICg1NCBpbnRlcm5hbCBjb3JuZXJzKSBhcyB0aGUgdGFyZ2V0LCB0aGUgc3lzdGVtIGRldGVjdHMgYW5kIGV4dHJhY3RzIGNvcm5lcnMgZm9yIGNhbWVyYSBjYWxpYnJhdGlvbi4gTXVsdGlwbGUgaW1hZ2VzIGZyb20gZGlmZmVyZW50IGFuZ2xlcyBhcmUgdXNlZCB0byBkZXRlcm1pbmUgaW50cmluc2ljIGNhbWVyYSBwYXJhbWV0ZXJzIHN1Y2ggYXMgZm9jYWwgbGVuZ3RoIGFuZCBpbWFnZSBjZW50ZXIuIFdpdGggdGhlIGNhbWVyYSBtYXRyaXggYW5kIGRpc3RvcnRpb24gY29lZmZpY2llbnRzLCB0aGUgcHJvamVjdCBjYWxjdWxhdGVzIHRoZSB0cmFuc2l0aW9uYWwgYW5kIHJvdGF0aW9uYWwgdmVjdG9ycyB0byBhY2N1cmF0ZWx5IG92ZXJsYXkgM0Qgb2JqZWN0cyBvbnRvIHRoZSAyRCBzY2VuZS4nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnQysrJywgJ29wZW5jdiddLFxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vTWF4TWFycmlvdHRDbGFya2UvQVItQ3BwJ1xuICB9LFxuICB7XG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3BsYWNlaG9sZGVyLWltYWdlLmpwZWcnLFxuICAgIG5hbWU6ICdFeHRyYWN0aW5nIE5ldXRyaW5vIE9zY2lsbGF0aW9uIFBhcmFtYXRlcnMgdmlhIE1hY2hpbmUgTGVhcm5pbmcnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnVXNpbmcgZ3JhZGllbnQgZGVzY2VudCBhbmQgb3RoZXIgbWFjaGluZSBsZWFybmluZyB0b29scycsXG4gICAgXSxcbiAgICBzdGFjazogWydQeXRob24nLCAnUHlUb3JjaCddLFxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20nLFxuICAgIGxpdmVQcmV2aWV3OiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvcGxhY2Vob2xkZXItaW1hZ2UuanBlZycsXG4gICAgbmFtZTogJ1Rlbm5pcyBBSSB0cmFja2VyJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ1VzaW5nIHlvbG8gYW5kIHB5dGhvbiB0cmFja2luZyB0ZW5uaXMgcG9pbnRzJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ1B5dGhvbicsICdQeVRvcmNoJ10sXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gICAgbGl2ZVByZXZpZXc6ICdodHRwczovL2V4YW1wbGUuY29tJyxcbiAgfSxcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9wbGFjZWhvbGRlci1pbWFnZS5qcGVnJyxcbiAgICBuYW1lOiAnQ29zbWlnIEdhbWUgLSBweWdhbWUnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnQnVpbHQgYSBnYW1lIHVzaW5nIHB5Z2FtZScsXG4gICAgXSxcbiAgICBzdGFjazogWydQeXRob24nLCAnUHlnYW1lJ10sXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbScsXG4gICAgbGl2ZVByZXZpZXc6ICdodHRwczovL2V4YW1wbGUuY29tJyxcbiAgfSxcbl1cblxuY29uc3Qgc2tpbGxzID0gW1xuICAvLyBza2lsbHMgY2FuIGJlIGFkZGVkIG9yIHJlbW92ZWRcbiAgLy8gaWYgdGhlIGFycmF5IGlzIGxlZnQgZW1wdHksIHRoZSBcIlNraWxsc1wiIHNlY3Rpb24gd29uJ3QgcmVuZGVyXG4gICdQeXRob24nLFxuICAnQysrJyxcbiAgJ1InLFxuICAnSmF2YScsXG4gICdTUUwnLFxuICAnSmF2YVNjcmlwdCcsXG4gICdHaXQnLFxuICAnQVdTJyxcbiAgJ0NJL0NEJyxcbiAgJ0RqYW5nbycsXG4gICdOZXh0LmpzJyxcbiAgJ0dyYXBoUUwnLFxuICAnTGludXgnLFxuICAnRG9ja2VyJ1xuXVxuXG5jb25zdCBjb250YWN0ID0ge1xuICAvLyB0aGUgYGVtYWlsYCBwcm9wZXJ0eSBpcyBvcHRpb25hbCAtIGl0IGNhbiBiZSBsZWZ0IGVtcHR5IG9yIGRlbGV0ZWRcbiAgLy8gaWYgc28sIHRoZSBcIkNvbnRhY3RcIiBzZWN0aW9uIHdvbid0IHJlbmRlclxuICBlbWFpbDogJ21tMTIyMUBpYy5hYy51aycsXG59XG5cbmV4cG9ydCB7IGhlYWRlciwgYWJvdXQsIHByb2plY3RzLCBza2lsbHMsIGNvbnRhY3QgfVxuIl0sIm5hbWVzIjpbImhlYWRlciIsIndvcmRtYXJrIiwiYWJvdXQiLCJuYW1lcyIsImdyZWV0aW5nRW1vamkiLCJyb2xlIiwiY29tcGFueSIsImRlc2NyaXB0aW9uIiwicmVzdW1lIiwic29jaWFsIiwiZ2l0aHViIiwibGlua2VkaW4iLCJwcm9qZWN0cyIsInRodW1ibmFpbCIsIm5hbWUiLCJzdGFjayIsInNvdXJjZUNvZGUiLCJsaXZlUHJldmlldyIsInNraWxscyIsImNvbnRhY3QiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/portfolio.js\n");

/***/ }),

/***/ "./lib/google-analytics.js":
/*!*********************************!*\
  !*** ./lib/google-analytics.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ga_measurement_id\": () => (/* binding */ ga_measurement_id),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID;\n// logs page views\nconst pageview = (url)=>{\n    window.gtag('config', ga_measurement_id, {\n        page_path: url\n    });\n};\n// logs specific events\nconst event = ({ action , params  })=>{\n    window.gtag('event', action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLGlCQUFpQixHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsK0JBQStCO0FBRTVFLEVBQWtCO0FBQ1gsS0FBSyxDQUFDQyxRQUFRLElBQUlDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRLFNBQUVQLGlCQUFpQixFQUFFLENBQUM7UUFDeENRLFNBQVMsRUFBRUgsR0FBRztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQXVCO0FBQ2hCLEtBQUssQ0FBQ0ksS0FBSyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDNUNMLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQU8sUUFBRUcsTUFBTSxFQUFFQyxNQUFNO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9saWIvZ29vZ2xlLWFuYWx5dGljcy5qcz80ZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnYV9tZWFzdXJlbWVudF9pZCA9IHByb2Nlc3MuZW52LkdPT0dMRV9BTkFMWVRJQ1NfTUVBU1VSRU1FTlRfSURcblxuLy8gbG9ncyBwYWdlIHZpZXdzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBnYV9tZWFzdXJlbWVudF9pZCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBsb2dzIHNwZWNpZmljIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBwYXJhbXMgfSkgPT4ge1xuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcylcbn1cbiJdLCJuYW1lcyI6WyJnYV9tZWFzdXJlbWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQU5BTFlUSUNTX01FQVNVUkVNRU5UX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/google-analytics.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/theme */ \"./contexts/theme.js\");\n/* harmony import */ var _data_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/portfolio */ \"./data/portfolio.js\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/App.css */ \"./styles/App.css\");\n/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.css */ \"./styles/Header.css\");\n/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Navbar.css */ \"./styles/Navbar.css\");\n/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/About.css */ \"./styles/About.css\");\n/* harmony import */ var _styles_About_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_About_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Projects.css */ \"./styles/Projects.css\");\n/* harmony import */ var _styles_Projects_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/ProjectCard.css */ \"./styles/ProjectCard.css\");\n/* harmony import */ var _styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_Skills_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Skills.css */ \"./styles/Skills.css\");\n/* harmony import */ var _styles_Skills_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Skills_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Contact.css */ \"./styles/Contact.css\");\n/* harmony import */ var _styles_Contact_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/ScrollToTop.css */ \"./styles/ScrollToTop.css\");\n/* harmony import */ var _styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_ScrollToTop_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Footer.css */ \"./styles/Footer.css\");\n/* harmony import */ var _styles_Footer_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/google-analytics */ \"./lib/google-analytics.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// google analytics\n\n\n\n// /google analytics\nfunction MyApp({ Component , pageProps  }) {\n    // google analytics\n    // will log page views on route changes if new routes are added\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(()=>{\n        if (!_lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__.ga_measurement_id) return;\n        const handleRouteChange = (url)=>(0,_lib_google_analytics__WEBPACK_IMPORTED_MODULE_18__.pageview)(url)\n        ;\n        router.events.on('routeChangeComplete', handleRouteChange);\n        return ()=>router.events.off('routeChangeComplete', handleRouteChange)\n        ;\n    }, [\n        router.events\n    ]);\n    // /google analytics\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/max/Desktop/GithubProjects/Portfolio-New/pages/_app.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: _data_portfolio__WEBPACK_IMPORTED_MODULE_3__.about.names.join(' ') || 'Portfolio'\n                    }, void 0, false, {\n                        fileName: \"/Users/max/Desktop/GithubProjects/Portfolio-New/pages/_app.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/max/Desktop/GithubProjects/Portfolio-New/pages/_app.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/max/Desktop/GithubProjects/Portfolio-New/pages/_app.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/max/Desktop/GithubProjects/Portfolio-New/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDcUI7QUFDUjtBQUNiO0FBQ0Y7QUFDRztBQUNBO0FBQ0Q7QUFDRztBQUNHO0FBQ0w7QUFDQztBQUNJO0FBQ0w7QUFDVDtBQUVwQixFQUFtQjtBQUNjO0FBQ007QUFDOEI7QUFDckUsRUFBb0I7U0FFWE8sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsRUFBbUI7SUFDbkIsRUFBK0Q7SUFDL0QsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLHVEQUFTO0lBQ3hCRCxpREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEdBQUdFLHFFQUFpQixFQUFFLE1BQU07UUFDOUIsS0FBSyxDQUFDTSxpQkFBaUIsSUFBSUMsR0FBRyxHQUFLTixnRUFBUSxDQUFDTSxHQUFHOztRQUMvQ0YsTUFBTSxDQUFDRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFxQixzQkFBRUgsaUJBQWlCO1FBQ3pELE1BQU0sS0FBT0QsTUFBTSxDQUFDRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUosaUJBQWlCOztJQUN6RSxDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsTUFBTSxDQUFDRyxNQUFNO0lBQUEsQ0FBQztJQUNsQixFQUFvQjtJQUVwQixNQUFNOzt3RkFFRGIsa0RBQUk7O2dHQUNGZ0IsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUFxQzs7Ozs7O2dHQUNsRUMsQ0FBSztrQ0FBRWpCLDZEQUFnQixDQUFDLENBQUcsT0FBSyxDQUFXOzs7Ozs7Ozs7Ozs7d0ZBRTdDRCwwREFBYTtzR0FDWE8sU0FBUzt1QkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL3RoZW1lJ1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuLi9kYXRhL3BvcnRmb2xpbydcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL0FwcC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9IZWFkZXIuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvTmF2YmFyLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL0Fib3V0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL1Byb2plY3RzLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL1Byb2plY3RDYXJkLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL1NraWxscy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Db250YWN0LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL1Njcm9sbFRvVG9wLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL0Zvb3Rlci5jc3MnXG5pbXBvcnQgJ2FuaW1hdGUuY3NzJ1xuXG4vLyBnb29nbGUgYW5hbHl0aWNzXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ2FfbWVhc3VyZW1lbnRfaWQsIHBhZ2V2aWV3IH0gZnJvbSAnLi4vbGliL2dvb2dsZS1hbmFseXRpY3MnXG4vLyAvZ29vZ2xlIGFuYWx5dGljc1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gZ29vZ2xlIGFuYWx5dGljc1xuICAvLyB3aWxsIGxvZyBwYWdlIHZpZXdzIG9uIHJvdXRlIGNoYW5nZXMgaWYgbmV3IHJvdXRlcyBhcmUgYWRkZWRcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdhX21lYXN1cmVtZW50X2lkKSByZXR1cm5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHBhZ2V2aWV3KHVybClcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgcmV0dXJuICgpID0+IHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcbiAgLy8gL2dvb2dsZSBhbmFseXRpY3NcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8dGl0bGU+e2Fib3V0Lm5hbWVzLmpvaW4oJyAnKSB8fCAnUG9ydGZvbGlvJ308L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwiYWJvdXQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnYV9tZWFzdXJlbWVudF9pZCIsInBhZ2V2aWV3IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImV2ZW50cyIsIm9uIiwib2ZmIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGl0bGUiLCJuYW1lcyIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/About.css":
/*!**************************!*\
  !*** ./styles/About.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/App.css":
/*!************************!*\
  !*** ./styles/App.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Contact.css":
/*!****************************!*\
  !*** ./styles/Contact.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Footer.css":
/*!***************************!*\
  !*** ./styles/Footer.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Header.css":
/*!***************************!*\
  !*** ./styles/Header.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Navbar.css":
/*!***************************!*\
  !*** ./styles/Navbar.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ProjectCard.css":
/*!********************************!*\
  !*** ./styles/ProjectCard.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Projects.css":
/*!*****************************!*\
  !*** ./styles/Projects.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/ScrollToTop.css":
/*!********************************!*\
  !*** ./styles/ScrollToTop.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/Skills.css":
/*!***************************!*\
  !*** ./styles/Skills.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();