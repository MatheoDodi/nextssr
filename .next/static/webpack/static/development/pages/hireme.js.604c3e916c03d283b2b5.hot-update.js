webpackHotUpdate("static/development/pages/hireme.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/matthew/Documents/All-Projects/nextssr/components/Layout.js";






nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.configure({
  showSpinner: false
});

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function (url) {
  console.log(url);
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.OnRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3461679010" + " " + "root",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Nextssr"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/hireme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Hire Me"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-3461679010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\xA9 ", new Date().getFullYear()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2066028704",
    __self: this
  }, ".root.jsx-3461679010{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header.jsx-3461679010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:1em;font-size:1.2rem;background:indigo;}header.jsx-3461679010 a.jsx-3461679010{color:darkgrey;-webkit-text-decoration:none;text-decoration:none;}header.jsx-3461679010 a.jsx-3461679010:hover{font-weight:bold;color:lightgrey;}footer.jsx-3461679010{padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvbmV4dHNzci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q08sQUFHd0IsQUFPRixBQVNJLEFBS0UsQUFLTCxXQWxCQyxDQW1CZixHQVZ1QixFQUtMLGdCQUNsQixnQ0FMQSxTQWpCeUIsV0FRTSx3RkFQVixtQ0FRUCxZQUNLLGlCQUNDLGtCQUNwQixXQVZ3Qiw4RUFDeEIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9uZXh0c3NyL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcblxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiB7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5Sb3V0ZXIuT25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TmV4dHNzcjwvdGl0bGU+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25wcm9ncmVzcy8wLjIuMC9ucHJvZ3Jlc3MubWluLmNzc1wiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2hpcmVtZVwiPlxuICAgICAgICA8YT5IaXJlIE1lPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGluZGlnbztcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciBhIHtcbiAgICAgICAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIGE6aG92ZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDExMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/nextssr/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "13586891",
    __self: this
  }, "body{margin:0;font-size:110%;background:#fafafa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3L0RvY3VtZW50cy9BbGwtUHJvamVjdHMvbmV4dHNzci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RXVCLEFBR2tCLFNBQ00sZUFDSSxtQkFDckIiLCJmaWxlIjoiL1VzZXJzL21hdHRoZXcvRG9jdW1lbnRzL0FsbC1Qcm9qZWN0cy9uZXh0c3NyL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcblxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiB7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5Sb3V0ZXIuT25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TmV4dHNzcjwvdGl0bGU+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25wcm9ncmVzcy8wLjIuMC9ucHJvZ3Jlc3MubWluLmNzc1wiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2hpcmVtZVwiPlxuICAgICAgICA8YT5IaXJlIE1lPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAucm9vdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGluZGlnbztcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciBhIHtcbiAgICAgICAgICBjb2xvcjogZGFya2dyZXk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIGE6aG92ZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDExMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/matthew/Documents/All-Projects/nextssr/components/Layout.js */"));
});

/***/ })

})
//# sourceMappingURL=hireme.js.604c3e916c03d283b2b5.hot-update.js.map