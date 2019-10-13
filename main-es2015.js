(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-top\">\n  <a class=\"navbar-brand\" href=\"/\">KORP</a>\n<ul class=\"navbar-nav ml-auto\">\n  <li class=\"nav-item\">\n    <a href=\"#home\" class=\"nav-link\">Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a href=\"#skills\" class=\"nav-link\">Skills</a>\n  </li>\n  <li class=\"nav-item\">\n    <a href=\"#projects\" class=\"nav-link\">Projects</a>\n  </li>\n   <li class=\"nav-item\">\n    <a href=\"#contactus\" class=\"nav-link\">Contact Us</a>\n  </li>\n</ul>\n</nav>\n<!-- home -->\n<div style=\"background-image: linear-gradient(to bottom right, orange, mediumpurple);opacity: 10px;\">\n<section id=\"home\">\n<div class=\"homescreen\">\n    <img src=\"assets/pic2.jpg\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n       \n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            \n                 <h2>Omkar Raut</h2>\n              Web Developer & Front-End Developer.\n          \n          </div>\n          <div class=\"carousel-item\">\n            <p>\n              “We don't just build websites,we build websites that SELLS”\n              ― Christopher Dayagdag\n            </p>\n          </div>\n          <div class=\"carousel-item\">\n            <p>\n                “We love what we do and we do what our clients love & work \n                with great clients all over the world to create \n                thoughtful and purposeful websites.”\n            </p>\n           </div>\n        </div>\n        <!-- <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a> -->\n      </div>\n</div>\n    </section>\n<!-- info -->\n<section id=\"skills\">\n<div class=\"container\">\n    <h1 class=\"font-weight-dark text-center text-lg-center mt-4 mb-0\">Skills</h1>\n    <hr class=\"mt-2 mb-5\">\n    <div class=\"row\">\n      <div class=\"col-md-3 mx-auto\" *ngFor=\"let lang of languages\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img src=\"{{lang.src}}\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{lang.title}}</h5>\n                <p class=\"card-text\">{{lang.desc}}</p>\n              </div>\n            </div>\n      </div>\n      </div>\n\n  </div>\n</section>\n<!-- service -->\n<section id=\"projects\">\n    <div class=\"container\">\n    <h1 class=\"font-weight-dark text-center text-lg-center mt-4 mb-0\">Projects</h1>\n    <hr class=\"mt-2 mb-5\">\n\n    <div class=\"card-group\">\n        <div class=\"card bg-warning\" *ngFor=\"let proj of projects\">\n          <div class=\"card-body text-center\">\n            <h3>{{proj.title}}</h3>\n            <p class=\"card-text\">\n                {{proj.desc}}\n            </p>\n          </div>\n        </div>\n      </div>\n<div class=\"feedback\">\n    <div id=\"feedback-caraousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item\" *ngFor=\"let feed of feedback;first as isFirst\" [class.active]=\"isFirst\">\n            <img src=\"{{feed.profilepic}}\">\n            <h3>{{feed.username}}</h3>\n            <i>\"{{feed.message}}\".</i>\n          </div>\n              </div>\n    </div>\n</div>\n    </div>\n</section>\n<!-- contact -->\n<section id=\"contactus\">\n    <div class=\"container\">\n    <h1 class=\"font-weight-dark text-center text-lg-center mt-4 mb-0\">Contact Us</h1>\n    <hr class=\"mt-2 mb-5\">\n    <div class=\"row\">\n    <div class=\"col-md col-sm\">\n      <p>\n        <label class=\"about-heading\">Name</label><br>\n        <label class=\"about-body\">{{name}}</label><br>\n        <label class=\"about-heading\">Email</label><br>\n        <label class=\"about-body\">{{email}}</label><br>\n        <label class=\"about-heading\">Mobile No.</label><br>\n        <label class=\"about-body\">{{mob}}</label>\n      </p>\n    </div>\n    <div class=\"col-md col-sm\">\n    <form action=\"\">\n      <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Name</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"First Name\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\n            </div>\n      </div>\n      <div class=\"form-group\">\n          <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Email</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n              <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">@</span>\n                </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"gmail\">\n              <div class=\"input-group-postpend\">\n                <span class=\"input-group-text\">.com</span>\n              </div>\n            </div>\n        </div>\n      <div class=\"form-group\">\n        <textarea type=\"text\" class=\"form-control\" placeholder=\"message\"></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n    </div>\n    </div>\n    </div>\n</section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#skills .row{\r\n    padding: 2rem 0rem;\r\n  }\r\n\r\n  #skills img{\r\n    width: 286px;\r\n    height: 180px;\r\n  }\r\n\r\n  #home img{\r\n     width:100%;\r\n     height: 750px;\r\n     /* margin-bottom: 50px; */\r\n    \r\n  }\r\n\r\n  .nav-link{\r\n      color: white!important;\r\n      font: bold!important;\r\n      font-size: 20px!important;\r\n  }\r\n\r\n  .homescreen{\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n\r\n  .centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n  #carouselExampleIndicators\r\n  {\r\n    position: absolute;\r\n    top:40%;\r\n    /* left: 20%; */\r\n    width: 100%;\r\n  }\r\n\r\n  pre{\r\n      color: azure;\r\n  }\r\n\r\n  .navbar{\r\n    background-image: -webkit-gradient(linear,left top, right top,from(purple) , to(orange));\r\n    background-image: linear-gradient(to right,purple , orange);\r\n  }\r\n\r\n  .right-col{\r\n    margin-left: 51%;\r\n    margin-top: -25px;\r\n  }\r\n\r\n  .left-col{\r\n    float: left;\r\n    margin-left: 1%;\r\n    margin-top: -25px;\r\n  }\r\n\r\n  .about-heading{\r\n    font-size: 25px;\r\n    color:purple;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .about-body{\r\n    font-size: 22px;\r\n    color:azure;\r\n    margin-left:10px ;\r\n  }\r\n\r\n  .carousel-item img{\r\n    float: left;\r\n    width: 10%;\r\n    height: 10%;\r\n    margin: 10px;\r\n    margin-left: 20%;\r\n    margin-top: 2%;\r\n  }\r\n\r\n  .carousel-item h3{\r\n    margin-left: 50%;\r\n    margin-top: 3%;\r\n  }\r\n\r\n  .carousel-item i{\r\n    margin-left: 20%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n  .feedback{\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  #skills .card{\r\n    background-color: transparent!important;\r\n    border: none!important;\r\n  }\r\n\r\n  .input-group-text{\r\n    background-color: purple;\r\n    border-color:purple ;\r\n    color: azure;\r\n}\r\n\r\n  .form-control\r\n{\r\n  background-color: transparent;\r\n    border-color:purple ;\r\n    color: azure;\r\n}\r\n\r\n  ::-webkit-input-placeholder{\r\n  color: beige;\r\n}\r\n\r\n  ::-moz-placeholder{\r\n  color: beige;\r\n}\r\n\r\n  ::-ms-input-placeholder{\r\n  color: beige;\r\n}\r\n\r\n  ::placeholder{\r\n  color: beige;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0tBQ0csVUFBVTtLQUNWLGFBQWE7S0FDYix5QkFBeUI7O0VBRTVCOztFQUVDO01BQ0csc0JBQXNCO01BQ3RCLG9CQUFvQjtNQUNwQix5QkFBeUI7RUFDN0I7O0VBRUM7SUFDQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTtJQUNFLHdGQUEyRDtJQUEzRCwyREFBMkQ7RUFDN0Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0VBRUE7O0VBRUUsNkJBQTZCO0lBQzNCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUZBO0VBQ0UsWUFBWTtBQUNkOztFQUZBO0VBQ0UsWUFBWTtBQUNkOztFQUZBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2tpbGxzIC5yb3d7XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgfVxyXG5cclxuICAjc2tpbGxzIGltZ3tcclxuICAgIHdpZHRoOiAyODZweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG5cclxuICAjaG9tZSBpbWd7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXHJcbiAgICBcclxuICB9XHJcblxyXG4gICAubmF2LWxpbmt7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQ6IGJvbGQhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgIC5ob21lc2NyZWVue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1xyXG4gIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo0MCU7XHJcbiAgICAvKiBsZWZ0OiAyMCU7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHByZXtcclxuICAgICAgY29sb3I6IGF6dXJlO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxwdXJwbGUgLCBvcmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWNvbHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MSU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICB9XHJcbiAgLmxlZnQtY29se1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICB9XHJcblxyXG4gIC5hYm91dC1oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6cHVycGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtYm9keXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOmF6dXJlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweCA7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtaXRlbSBpbWd7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbiAgLmNhcm91c2VsLWl0ZW0gaDN7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pdGVtIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuZmVlZGJhY2t7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gICNza2lsbHMgLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICBib3JkZXItY29sb3I6cHVycGxlIDtcclxuICAgIGNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6cHVycGxlIDtcclxuICAgIGNvbG9yOiBhenVyZTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICBjb2xvcjogYmVpZ2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor(db) {
        this.title = 'techsite';
        db.list('/languages')
            .valueChanges().subscribe(languages => {
            this.languages = languages;
        });
        db.list('/projects')
            .valueChanges().subscribe(proj => {
            this.projects = proj;
        });
        db.list('/feedback')
            .valueChanges().subscribe(feedback => {
            this.feedback = feedback;
        });
        db.list('/selfinfo')
            .valueChanges().subscribe(info => {
            this.name = info[2];
            this.email = info[0];
            this.mob = info[1];
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDwjkGlFi4H3NZ2s3nGBV0Gj06-7xKMkYY",
        authDomain: "fir-demo-a7af1.firebaseapp.com",
        databaseURL: "https://fir-demo-a7af1.firebaseio.com",
        projectId: "fir-demo-a7af1",
        storageBucket: "fir-demo-a7af1.appspot.com",
        messagingSenderId: "73875149293",
        appId: "1:73875149293:web:7b52a0c5a2378b776897e4"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\angular\techsite\techsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map