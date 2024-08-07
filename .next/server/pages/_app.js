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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"about\": () => (/* binding */ about),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"skills\": () => (/* binding */ skills),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst header = {\n    // the `wordmark` property is optional - it can be left empty or deleted\n    // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid\n    wordmark: ''\n};\nconst about = {\n    // each of these properties is optional - they can be left empty or deleted\n    // each element in the `description` array will be treated as a separate paragraph\n    names: [\n        'Max',\n        'Marriott-Clarke'\n    ],\n    greetingEmoji: '👋',\n    role: 'MSci Theoretical Physics Student',\n    company: 'Imperial College London',\n    description: [\n        '4th year MSci student with a passion for mathematical problem solving looking to break into quant development.', \n    ],\n    resume: 'https://online.publuu.com/612309/1369749',\n    social: {\n        github: 'https://github.com/MaxMarriottClarke',\n        linkedin: 'https://www.linkedin.com/in/max-marriott-clarke-1736b820a/'\n    }\n};\nconst projects = [\n    // projects can be added and removed\n    // if the array is left empty, the \"Projects\" section won't render\n    // each element in each `description` array will be treated as a separate paragraph\n    {\n        thumbnail: 'images/VAR.jpeg',\n        name: 'C++ Monte Carlo Value-at-Risk Engine',\n        description: [\n            \"This C++ Monte Carlo Value-at-Risk (VaR) engine assesses portfolio risk at both the portfolio and instrument levels. Leveraging design patterns for extensibility, it supports various instruments and stochastic processes. Core classes handle simulations, valuations, and statistics, while auxiliary classes manage tasks like covariance matrix calculation and historical backtesting.\", \n        ],\n        stack: [\n            'C++',\n            'C'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/CppMonteCarloVaR'\n    },\n    {\n        thumbnail: 'images/AR.jpg',\n        name: 'Augmented Reality Application',\n        description: [\n            'This project focuses on Camera Calibration and Augmented Reality. Using a checkerboard with 9 columns and 6 rows (54 internal corners) as the target, the system detects and extracts corners for camera calibration. Multiple images from different angles are used to determine intrinsic camera parameters such as focal length and image center. With the camera matrix and distortion coefficients, the project calculates the transitional and rotational vectors to accurately overlay 3D objects onto the 2D scene.', \n        ],\n        stack: [\n            'C++',\n            'opencv'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/AR-Cpp'\n    },\n    {\n        thumbnail: 'images/TracksterHits2.png',\n        name: 'MSci Project - Enhancing Particle Event Reconstruction with Self-Supervised Learning at CERN',\n        description: [\n            'For my master’s project, I am collaborating with CERN to enhance event reconstruction for the CMS experiment at the Large Hadron Collider. I am using PyTorch to develop and refine self-supervised machine learning models, specifically contrastive learning algorithms, to process data from the upgraded calorimeter with 6 million channels. By leveraging PyTorch’s deep learning capabilities, I focus on training and optimizing these models to improve clustering and interpretation of particle collision events, aiming for more accurate and robust event reconstruction compared to traditional methods.', \n        ],\n        stack: [\n            'Python',\n            'Pytorch'\n        ]\n    },\n    {\n        thumbnail: 'images/Final.png',\n        name: 'Neutrino Parameter Estimation via Optimisation',\n        description: [\n            'In this project, I developed a Python application to estimate neutrino oscillation parameters using machine learning techniques. I implemented two optimization methods: a Univariate minimizer and a Hybrid Particle Swarm Optimisation - Simulated Annealing (HPSO-SA) minimizer. The project focused on minimizing a negative log-likelihood function to extract the relevant parameters. I compared and tested both optimization approaches to ensure accuracy and efficiency, showcasing the power of machine learning in scientific analysis.', \n        ],\n        stack: [\n            'Python',\n            'Data Analysis'\n        ],\n        livePreview: 'https://online.publuu.com/612309/1369669'\n    },\n    {\n        thumbnail: 'images/Tennis.jpeg',\n        name: 'Tennis ML Video Analysis',\n        description: [\n            'This project, developed using PyTorch, focuses on analyzing tennis videos to measure player speed, shot velocity, and shot frequency. It employs YOLO for detecting players and the tennis ball, and uses CNNs to extract key court keypoints. This work showcases advanced skills in machine learning and computer vision.', \n        ],\n        stack: [\n            'Python',\n            'Pytorch',\n            'YOLO'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/TennisML'\n    },\n    {\n        thumbnail: 'images/Cosmic.png',\n        name: 'Cosmig Game - pygame',\n        description: [\n            'A 2D Spacecraft shooter game to learn more about pygame and improve development skills. It includes mutliple levels, increasing difficulty, powerups, bosses, enemies and much more.', \n        ],\n        stack: [\n            'Python',\n            'Pygame'\n        ],\n        sourceCode: 'https://github.com/MaxMarriottClarke/pygameGame'\n    }, \n];\nconst skills = [\n    // skills can be added or removed\n    // if the array is left empty, the \"Skills\" section won't render\n    'Python',\n    'C++',\n    'R',\n    'Java',\n    'SQL',\n    'JavaScript',\n    'Git',\n    'AWS',\n    'CI/CD',\n    'Django',\n    'Next.js',\n    'GraphQL',\n    'Linux',\n    'Docker'\n];\nconst contact = {\n    // the `email` property is optional - it can be left empty or deleted\n    // if so, the \"Contact\" section won't render\n    email: 'mm1221@ic.ac.uk'\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVE7SUFDUixDQUFTO0lBQ1QsQ0FBUztJQUNULENBQU87SUFDUCxDQUFRO0FBQ1YsQ0FBQztBQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZixFQUFxRTtJQUNyRSxFQUE0QztJQUM1Q0MsS0FBSyxFQUFFLENBQWlCO0FBQzFCLENBQUM7QUFFZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFuZm9saW8vLi9kYXRhL3BvcnRmb2xpby5qcz9kOGI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IHtcbiAgLy8gdGhlIGB3b3JkbWFya2AgcHJvcGVydHkgaXMgb3B0aW9uYWwgLSBpdCBjYW4gYmUgbGVmdCBlbXB0eSBvciBkZWxldGVkXG4gIC8vIGlmIHNvLCBpdCB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHlvdXIgZnVsbCBuYW1lLCBvciBhIGRlZmF1bHQgd29yZG1hcmsgaWYgdGhlIGZ1bGwgbmFtZSBpcyBpbnZhbGlkXG4gIHdvcmRtYXJrOiAnJyxcbn1cblxuY29uc3QgYWJvdXQgPSB7XG4gIC8vIGVhY2ggb2YgdGhlc2UgcHJvcGVydGllcyBpcyBvcHRpb25hbCAtIHRoZXkgY2FuIGJlIGxlZnQgZW1wdHkgb3IgZGVsZXRlZFxuICAvLyBlYWNoIGVsZW1lbnQgaW4gdGhlIGBkZXNjcmlwdGlvbmAgYXJyYXkgd2lsbCBiZSB0cmVhdGVkIGFzIGEgc2VwYXJhdGUgcGFyYWdyYXBoXG4gIG5hbWVzOiBbJ01heCcsICdNYXJyaW90dC1DbGFya2UnXSxcbiAgZ3JlZXRpbmdFbW9qaTogJ/CfkYsnLFxuICByb2xlOiAnTVNjaSBUaGVvcmV0aWNhbCBQaHlzaWNzIFN0dWRlbnQnLFxuICBjb21wYW55OiAnSW1wZXJpYWwgQ29sbGVnZSBMb25kb24nLFxuICBkZXNjcmlwdGlvbjogW1xuICAgICc0dGggeWVhciBNU2NpIHN0dWRlbnQgd2l0aCBhIHBhc3Npb24gZm9yIG1hdGhlbWF0aWNhbCBwcm9ibGVtIHNvbHZpbmcgbG9va2luZyB0byBicmVhayBpbnRvIHF1YW50IGRldmVsb3BtZW50LicsXG4gIF0sXG4gIHJlc3VtZTogJ2h0dHBzOi8vb25saW5lLnB1Ymx1dS5jb20vNjEyMzA5LzEzNjk3NDknLFxuICBzb2NpYWw6IHtcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vTWF4TWFycmlvdHRDbGFya2UnLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21heC1tYXJyaW90dC1jbGFya2UtMTczNmI4MjBhLycsXG4gIH0sXG59XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICAvLyBwcm9qZWN0cyBjYW4gYmUgYWRkZWQgYW5kIHJlbW92ZWRcbiAgLy8gaWYgdGhlIGFycmF5IGlzIGxlZnQgZW1wdHksIHRoZSBcIlByb2plY3RzXCIgc2VjdGlvbiB3b24ndCByZW5kZXJcbiAgLy8gZWFjaCBlbGVtZW50IGluIGVhY2ggYGRlc2NyaXB0aW9uYCBhcnJheSB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBzZXBhcmF0ZSBwYXJhZ3JhcGhcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9WQVIuanBlZycsXG4gICAgbmFtZTogJ0MrKyBNb250ZSBDYXJsbyBWYWx1ZS1hdC1SaXNrIEVuZ2luZScsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgIFwiVGhpcyBDKysgTW9udGUgQ2FybG8gVmFsdWUtYXQtUmlzayAoVmFSKSBlbmdpbmUgYXNzZXNzZXMgcG9ydGZvbGlvIHJpc2sgYXQgYm90aCB0aGUgcG9ydGZvbGlvIGFuZCBpbnN0cnVtZW50IGxldmVscy4gTGV2ZXJhZ2luZyBkZXNpZ24gcGF0dGVybnMgZm9yIGV4dGVuc2liaWxpdHksIGl0IHN1cHBvcnRzIHZhcmlvdXMgaW5zdHJ1bWVudHMgYW5kIHN0b2NoYXN0aWMgcHJvY2Vzc2VzLiBDb3JlIGNsYXNzZXMgaGFuZGxlIHNpbXVsYXRpb25zLCB2YWx1YXRpb25zLCBhbmQgc3RhdGlzdGljcywgd2hpbGUgYXV4aWxpYXJ5IGNsYXNzZXMgbWFuYWdlIHRhc2tzIGxpa2UgY292YXJpYW5jZSBtYXRyaXggY2FsY3VsYXRpb24gYW5kIGhpc3RvcmljYWwgYmFja3Rlc3RpbmcuXCIsXG4gICAgXSxcbiAgICBzdGFjazogWydDKysnLCAnQyddLFxuICAgIHNvdXJjZUNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vTWF4TWFycmlvdHRDbGFya2UvQ3BwTW9udGVDYXJsb1ZhUicsXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvQVIuanBnJyxcbiAgICBuYW1lOiAnQXVnbWVudGVkIFJlYWxpdHkgQXBwbGljYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnVGhpcyBwcm9qZWN0IGZvY3VzZXMgb24gQ2FtZXJhIENhbGlicmF0aW9uIGFuZCBBdWdtZW50ZWQgUmVhbGl0eS4gVXNpbmcgYSBjaGVja2VyYm9hcmQgd2l0aCA5IGNvbHVtbnMgYW5kIDYgcm93cyAoNTQgaW50ZXJuYWwgY29ybmVycykgYXMgdGhlIHRhcmdldCwgdGhlIHN5c3RlbSBkZXRlY3RzIGFuZCBleHRyYWN0cyBjb3JuZXJzIGZvciBjYW1lcmEgY2FsaWJyYXRpb24uIE11bHRpcGxlIGltYWdlcyBmcm9tIGRpZmZlcmVudCBhbmdsZXMgYXJlIHVzZWQgdG8gZGV0ZXJtaW5lIGludHJpbnNpYyBjYW1lcmEgcGFyYW1ldGVycyBzdWNoIGFzIGZvY2FsIGxlbmd0aCBhbmQgaW1hZ2UgY2VudGVyLiBXaXRoIHRoZSBjYW1lcmEgbWF0cml4IGFuZCBkaXN0b3J0aW9uIGNvZWZmaWNpZW50cywgdGhlIHByb2plY3QgY2FsY3VsYXRlcyB0aGUgdHJhbnNpdGlvbmFsIGFuZCByb3RhdGlvbmFsIHZlY3RvcnMgdG8gYWNjdXJhdGVseSBvdmVybGF5IDNEIG9iamVjdHMgb250byB0aGUgMkQgc2NlbmUuJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ0MrKycsICdvcGVuY3YnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL01heE1hcnJpb3R0Q2xhcmtlL0FSLUNwcCdcbiAgfSxcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9UcmFja3N0ZXJIaXRzMi5wbmcnLFxuICAgIG5hbWU6ICdNU2NpIFByb2plY3QgLSBFbmhhbmNpbmcgUGFydGljbGUgRXZlbnQgUmVjb25zdHJ1Y3Rpb24gd2l0aCBTZWxmLVN1cGVydmlzZWQgTGVhcm5pbmcgYXQgQ0VSTicsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICdGb3IgbXkgbWFzdGVy4oCZcyBwcm9qZWN0LCBJIGFtIGNvbGxhYm9yYXRpbmcgd2l0aCBDRVJOIHRvIGVuaGFuY2UgZXZlbnQgcmVjb25zdHJ1Y3Rpb24gZm9yIHRoZSBDTVMgZXhwZXJpbWVudCBhdCB0aGUgTGFyZ2UgSGFkcm9uIENvbGxpZGVyLiBJIGFtIHVzaW5nIFB5VG9yY2ggdG8gZGV2ZWxvcCBhbmQgcmVmaW5lIHNlbGYtc3VwZXJ2aXNlZCBtYWNoaW5lIGxlYXJuaW5nIG1vZGVscywgc3BlY2lmaWNhbGx5IGNvbnRyYXN0aXZlIGxlYXJuaW5nIGFsZ29yaXRobXMsIHRvIHByb2Nlc3MgZGF0YSBmcm9tIHRoZSB1cGdyYWRlZCBjYWxvcmltZXRlciB3aXRoIDYgbWlsbGlvbiBjaGFubmVscy4gQnkgbGV2ZXJhZ2luZyBQeVRvcmNo4oCZcyBkZWVwIGxlYXJuaW5nIGNhcGFiaWxpdGllcywgSSBmb2N1cyBvbiB0cmFpbmluZyBhbmQgb3B0aW1pemluZyB0aGVzZSBtb2RlbHMgdG8gaW1wcm92ZSBjbHVzdGVyaW5nIGFuZCBpbnRlcnByZXRhdGlvbiBvZiBwYXJ0aWNsZSBjb2xsaXNpb24gZXZlbnRzLCBhaW1pbmcgZm9yIG1vcmUgYWNjdXJhdGUgYW5kIHJvYnVzdCBldmVudCByZWNvbnN0cnVjdGlvbiBjb21wYXJlZCB0byB0cmFkaXRpb25hbCBtZXRob2RzLicsXG4gICAgXSxcbiAgICBzdGFjazogWydQeXRob24nLCAnUHl0b3JjaCddXG4gIH0sXG4gIHtcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvRmluYWwucG5nJyxcbiAgICBuYW1lOiAnTmV1dHJpbm8gUGFyYW1ldGVyIEVzdGltYXRpb24gdmlhIE9wdGltaXNhdGlvbicsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICdJbiB0aGlzIHByb2plY3QsIEkgZGV2ZWxvcGVkIGEgUHl0aG9uIGFwcGxpY2F0aW9uIHRvIGVzdGltYXRlIG5ldXRyaW5vIG9zY2lsbGF0aW9uIHBhcmFtZXRlcnMgdXNpbmcgbWFjaGluZSBsZWFybmluZyB0ZWNobmlxdWVzLiBJIGltcGxlbWVudGVkIHR3byBvcHRpbWl6YXRpb24gbWV0aG9kczogYSBVbml2YXJpYXRlIG1pbmltaXplciBhbmQgYSBIeWJyaWQgUGFydGljbGUgU3dhcm0gT3B0aW1pc2F0aW9uIC0gU2ltdWxhdGVkIEFubmVhbGluZyAoSFBTTy1TQSkgbWluaW1pemVyLiBUaGUgcHJvamVjdCBmb2N1c2VkIG9uIG1pbmltaXppbmcgYSBuZWdhdGl2ZSBsb2ctbGlrZWxpaG9vZCBmdW5jdGlvbiB0byBleHRyYWN0IHRoZSByZWxldmFudCBwYXJhbWV0ZXJzLiBJIGNvbXBhcmVkIGFuZCB0ZXN0ZWQgYm90aCBvcHRpbWl6YXRpb24gYXBwcm9hY2hlcyB0byBlbnN1cmUgYWNjdXJhY3kgYW5kIGVmZmljaWVuY3ksIHNob3djYXNpbmcgdGhlIHBvd2VyIG9mIG1hY2hpbmUgbGVhcm5pbmcgaW4gc2NpZW50aWZpYyBhbmFseXNpcy4nLFxuICAgIF0sXG4gICAgc3RhY2s6IFsnUHl0aG9uJywgJ0RhdGEgQW5hbHlzaXMnXSxcbiAgICBsaXZlUHJldmlldzogJ2h0dHBzOi8vb25saW5lLnB1Ymx1dS5jb20vNjEyMzA5LzEzNjk2NjknLFxuICB9LFxuICB7XG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL1Rlbm5pcy5qcGVnJyxcbiAgICBuYW1lOiAnVGVubmlzIE1MIFZpZGVvIEFuYWx5c2lzJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ1RoaXMgcHJvamVjdCwgZGV2ZWxvcGVkIHVzaW5nIFB5VG9yY2gsIGZvY3VzZXMgb24gYW5hbHl6aW5nIHRlbm5pcyB2aWRlb3MgdG8gbWVhc3VyZSBwbGF5ZXIgc3BlZWQsIHNob3QgdmVsb2NpdHksIGFuZCBzaG90IGZyZXF1ZW5jeS4gSXQgZW1wbG95cyBZT0xPIGZvciBkZXRlY3RpbmcgcGxheWVycyBhbmQgdGhlIHRlbm5pcyBiYWxsLCBhbmQgdXNlcyBDTk5zIHRvIGV4dHJhY3Qga2V5IGNvdXJ0IGtleXBvaW50cy4gVGhpcyB3b3JrIHNob3djYXNlcyBhZHZhbmNlZCBza2lsbHMgaW4gbWFjaGluZSBsZWFybmluZyBhbmQgY29tcHV0ZXIgdmlzaW9uLicsXG4gICAgXSxcbiAgICBzdGFjazogWydQeXRob24nLCAnUHl0b3JjaCcsICdZT0xPJ10sXG4gICAgc291cmNlQ29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYXhNYXJyaW90dENsYXJrZS9UZW5uaXNNTCdcbiAgfSxcbiAge1xuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9Db3NtaWMucG5nJyxcbiAgICBuYW1lOiAnQ29zbWlnIEdhbWUgLSBweWdhbWUnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAnQSAyRCBTcGFjZWNyYWZ0IHNob290ZXIgZ2FtZSB0byBsZWFybiBtb3JlIGFib3V0IHB5Z2FtZSBhbmQgaW1wcm92ZSBkZXZlbG9wbWVudCBza2lsbHMuIEl0IGluY2x1ZGVzIG11dGxpcGxlIGxldmVscywgaW5jcmVhc2luZyBkaWZmaWN1bHR5LCBwb3dlcnVwcywgYm9zc2VzLCBlbmVtaWVzIGFuZCBtdWNoIG1vcmUuJyxcbiAgICBdLFxuICAgIHN0YWNrOiBbJ1B5dGhvbicsICdQeWdhbWUnXSxcbiAgICBzb3VyY2VDb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL01heE1hcnJpb3R0Q2xhcmtlL3B5Z2FtZUdhbWUnLFxuICB9LFxuXVxuXG5jb25zdCBza2lsbHMgPSBbXG4gIC8vIHNraWxscyBjYW4gYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICAvLyBpZiB0aGUgYXJyYXkgaXMgbGVmdCBlbXB0eSwgdGhlIFwiU2tpbGxzXCIgc2VjdGlvbiB3b24ndCByZW5kZXJcbiAgJ1B5dGhvbicsXG4gICdDKysnLFxuICAnUicsXG4gICdKYXZhJyxcbiAgJ1NRTCcsXG4gICdKYXZhU2NyaXB0JyxcbiAgJ0dpdCcsXG4gICdBV1MnLFxuICAnQ0kvQ0QnLFxuICAnRGphbmdvJyxcbiAgJ05leHQuanMnLFxuICAnR3JhcGhRTCcsXG4gICdMaW51eCcsXG4gICdEb2NrZXInXG5dXG5cbmNvbnN0IGNvbnRhY3QgPSB7XG4gIC8vIHRoZSBgZW1haWxgIHByb3BlcnR5IGlzIG9wdGlvbmFsIC0gaXQgY2FuIGJlIGxlZnQgZW1wdHkgb3IgZGVsZXRlZFxuICAvLyBpZiBzbywgdGhlIFwiQ29udGFjdFwiIHNlY3Rpb24gd29uJ3QgcmVuZGVyXG4gIGVtYWlsOiAnbW0xMjIxQGljLmFjLnVrJyxcbn1cblxuZXhwb3J0IHsgaGVhZGVyLCBhYm91dCwgcHJvamVjdHMsIHNraWxscywgY29udGFjdCB9XG4iXSwibmFtZXMiOlsiaGVhZGVyIiwid29yZG1hcmsiLCJhYm91dCIsIm5hbWVzIiwiZ3JlZXRpbmdFbW9qaSIsInJvbGUiLCJjb21wYW55IiwiZGVzY3JpcHRpb24iLCJyZXN1bWUiLCJzb2NpYWwiLCJnaXRodWIiLCJsaW5rZWRpbiIsInByb2plY3RzIiwidGh1bWJuYWlsIiwibmFtZSIsInN0YWNrIiwic291cmNlQ29kZSIsImxpdmVQcmV2aWV3Iiwic2tpbGxzIiwiY29udGFjdCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/portfolio.js\n");

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