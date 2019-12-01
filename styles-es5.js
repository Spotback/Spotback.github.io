(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
          \*****************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n    font-family: 'Raleway', sans-serif;\r\n    background: linear-gradient(rgb(255, 255, 255), rgba(140, 204, 164, 0.849))/*, url(\"./assets/images/Spotbacklogo.png\")*/;\r\n    background-attachment: fixed;\r\n    /* background-position: center; */\r\n    background-size: cover;\r\n  }\r\n.someUniqueId {\r\n    font-family: 'Raleway', sans-serif;\r\n    background: linear-gradient(rgb(255, 255, 255), rgba(140, 204, 164, 0.849))/*, url(\"./assets/images/Spotbacklogo.png\")*/;\r\n    background-attachment: fixed;\r\n    /* background-position: center; */\r\n    background-size: cover;\r\n  }\r\n.icon{\r\n    width: 50px;\r\n  }\r\nh1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-family: 'Raleway';\r\n  }\r\np {\r\n    line-height: 1.75;\r\n  }\r\n.text-faded {\r\n    color: rgba(255, 255, 255, 0.3);\r\n  }\r\n.site-heading {\r\n    margin-top: 2rem;\r\n    margin-bottom: 0rem;\r\n    text-transform: uppercase;\r\n    line-height: 1;\r\n    font-family: 'Raleway';\r\n  }\r\n.site-heading .site-heading-upper {\r\n    display: block;\r\n    font-size: 1.6rem;\r\n    font-weight: 800;\r\n  }\r\n.site-heading .site-heading-lower {\r\n    font-size: 4.5rem;\r\n    font-weight: 100;\r\n    line-height: 4rem;\r\n  }\r\n.page-section {\r\n    margin-top: 3rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n.section-heading {\r\n    text-transform: uppercase;\r\n    color: white;\r\n  }\r\n.section-heading .section-heading-upper {\r\n    display: block;\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n  }\r\n.section-heading .section-heading-lower {\r\n    display: block;\r\n    font-size: 3rem;\r\n    font-weight: 100;\r\n  }\r\n.bg-faded {\r\n    background-color: rgba(197, 197, 197, 0.74);\r\n  }\r\n#mainNav {\r\n    background-color: rgb(255, 255, 255);\r\n    font-family: 'Raleway';\r\n    height: 60px;\r\n  }\r\n#mainNav .navbar-brand {\r\n    color: #56e66e;\r\n  }\r\n#mainNav .navbar-nav .nav-item .nav-link {\r\n    color: rgba(0, 0, 0, 0.7);\r\n    font-weight: 800;\r\n    /* added */\r\n    display: inline-block;\r\n  }\r\n#mainNav .navbar-nav .nav-item.active .nav-link {\r\n    color: #286b17;\r\n  }\r\n@media (min-width: 992px) {\r\n    #mainNav .navbar-nav .nav-item .nav-link {\r\n      font-size: 0.9rem;\r\n    }\r\n    #mainNav .navbar-nav .nav-item .nav-link:hover {\r\n      color: rgb(58, 165, 92);\r\n    }\r\n    #mainNav .navbar-nav .nav-item.active .nav-link:hover {\r\n      color: #56e692;\r\n    }\r\n  }\r\n.btn-xl {\r\n    font-weight: 700;\r\n    font-size: 0.8rem;\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n  }\r\n.intro {\r\n    position: relative;\r\n  }\r\n@media (min-width: 992px) {\r\n    .intro .intro-img {\r\n      width: 40%;\r\n      float: right;\r\n      right: 20;\r\n      \r\n    }\r\n    .intro .top-img {\r\n      width: 40%;\r\n      float: right;\r\n      right: 2000%;\r\n      \r\n    }\r\n    .intro .intro-text {\r\n      right: 0;\r\n      width: 60%;\r\n      margin-top: 3rem;\r\n      position: absolute;\r\n    }\r\n    .intro .intro-text .intro-button {\r\n      width: 100%;\r\n      left: 0;\r\n      position: absolute;\r\n      bottom: -2rem;\r\n    }\r\n  }\r\n@media (min-width: 1200px) {\r\n    .intro .intro-text {\r\n      width: 45%;\r\n    }\r\n  }\r\n.cta {\r\n    padding-top: 5rem;\r\n    padding-bottom: 5rem;\r\n    background-color: rgba(48, 133, 59, 0.85);\r\n  }\r\n.cta .cta-inner {\r\n    position: relative;\r\n    padding: 3rem;\r\n    margin: 0.5rem;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n  }\r\n.cta .cta-inner:before {\r\n    border-radius: 0.5rem;\r\n    content: '';\r\n    position: absolute;\r\n    top: -0.5rem;\r\n    bottom: -0.5rem;\r\n    left: -0.5rem;\r\n    right: -0.5rem;\r\n    border: 0.25rem solid rgba(255, 255, 255, 0.85);\r\n  }\r\n@media (min-width: 992px) {\r\n    .about-heading .about-heading-img {\r\n      position: relative;\r\n      z-index: 0;\r\n    }\r\n    .about-heading .about-heading-content {\r\n      margin-top: -5rem;\r\n      position: relative;\r\n      z-index: 1;\r\n    }\r\n  }\r\n@media (min-width: 992px) {\r\n    .product-item .product-item-title {\r\n      position: relative;\r\n      z-index: 1;\r\n      margin-bottom: -3rem;\r\n    }\r\n    .product-item .product-item-img {\r\n      position: relative;\r\n      z-index: 0;\r\n      max-width: 50vw;\r\n    }\r\n\r\n    .product-item .product-item-description {\r\n      position: relative;\r\n      z-index: 1;\r\n      margin-top: -3rem;\r\n      max-width: 50vw;\r\n    }\r\n    .product-item .product-item-description2 {\r\n      position: relative;\r\n      z-index: 1;\r\n      margin-top: -3rem;\r\n      max-width: 50vw;\r\n    }\r\n  }\r\n.list-hours {\r\n    font-size: 0.9rem;\r\n  }\r\n.list-hours .list-hours-item {\r\n    border-bottom: 1px solid rgba(86, 230, 134, 0.5);\r\n    padding-bottom: .25rem;\r\n    margin-bottom: 1rem;\r\n    font-style: italic;\r\n  }\r\n.list-hours .list-hours-item.today {\r\n    font-weight: bold;\r\n    color: #49af62;\r\n  }\r\n@media (min-width: 992px) {\r\n    .list-hours {\r\n      width: 50%;\r\n      font-size: 1.1rem;\r\n    }\r\n  }\r\n.address strong {\r\n    font-size: 1.2rem;\r\n  }\r\n.footer {\r\n    background-color: #6ec688;\r\n  }\r\n.text-primary {\r\n    color: #56e662 !important;\r\n  }\r\n.bg-primary {\r\n    background-color: #e6a756 !important;\r\n  }\r\n.btn {\r\n    box-shadow: 0px 3px 3px 0px rgba(31, 33, 36, 0.479);\r\n  }\r\n.btn-primary {\r\n    background-color: #1ea34b;\r\n    border-color: #000000;\r\n  }\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n    background-color: #2adf48;\r\n    border-color: #717572;\r\n  }\r\n.font-weight-light {\r\n    font-weight: 100 !important;\r\n  }\r\na {\r\n    color: black !important;\r\n    transition: 150ms ease-in;\r\n  }\r\nfooter div a {\r\n    color: white !important;\r\n  }\r\na:hover {\r\n    transform: scale(1.2);\r\n    transition: 150ms ease-in;\r\n    color: black !important;\r\n    -webkit-text-decoration-line: underline !important;\r\n            text-decoration-line: underline !important;\r\n  }\r\n.site-heading-upper {\r\n    color: black !important;\r\n  }\r\n.img-fluid.rounded.about-heading-img.mb-3.mb-lg-0 {\r\n    width: 100%;\r\n  }\r\n.mt-5 {\r\n    width: 100% !important;\r\n    padding: 10px;\r\n  }\r\nfooter {\r\n    background-color: rgb(52, 58, 64) !important;\r\n  }\r\n.navbar-toggler{\r\n    border: 1px solid #363a3e !important;\r\n    height: 40px;\r\n    outline: none;\r\n  }\r\n.navbar-toggler span{\r\n    color: #a8c875;\r\n    font-size: 24px;\r\n  }\r\n@media only screen and (max-width: 991px){\r\n    .navbar{\r\n      border-bottom: 1px solid #f5f5f5;\r\n    }\r\n    .xs-logo{\r\n      margin-left: 0;\r\n    }\r\n    .navbar-collapse{\r\n      padding: 5px 0;\r\n      position: absolute;\r\n      top: 60px;\r\n      left: 0;\r\n      z-index: 11;\r\n      width: 100%;\r\n      background: linear-gradient(rgb(255, 255, 255), rgba(140, 204, 164, 0.9));\r\n    }\r\n    .navbar-collapse ul li a{\r\n      display: block !important;\r\n      padding-left: 15px !important;\r\n      transform: none !important;\r\n      font-weight: 700 !important;\r\n    }\r\n  }\r\n@media only screen and (max-width: 767px){\r\n    .form-block{\r\n      margin: 70px 0 50px;\r\n    }\r\n    .form-block .form-control{\r\n      width: 100%;\r\n    }\r\n    .form-block .btn{\r\n      margin-top: 30px;\r\n    }\r\n    .watch-video-block h2{\r\n      font-size: 30px !important;\r\n    }\r\n    .video-section iframe{\r\n      height: auto;\r\n      width: 100%;\r\n    }\r\n    .share-link-block{\r\n      display: block !important;\r\n    }\r\n    .share-link-block h2{\r\n      margin-bottom: 12px !important;\r\n    }\r\n    .share-link-block .copy-text{\r\n      width: 85%;\r\n    }\r\n    .social-ul li:last-child{\r\n      margin-right: 5px !important;\r\n    }\r\n    .queue-text-block img{\r\n      max-width: 280px;\r\n    }\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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SUFDbEI7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsWUFBWTtNQUNaLFdBQVc7SUFDYjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSw4QkFBOEI7SUFDaEM7SUFDQTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjU1LCAyNTUpLCByZ2JhKDE0MCwgMjA0LCAxNjQsIDAuODQ5KSkvKiwgdXJsKFwiLi9hc3NldHMvaW1hZ2VzL1Nwb3RiYWNrbG9nby5wbmdcIikqLztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuc29tZVVuaXF1ZUlkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjU1LCAyNTUpLCByZ2JhKDE0MCwgMjA0LCAxNjQsIDAuODQ5KSkvKiwgdXJsKFwiLi9hc3NldHMvaW1hZ2VzL1Nwb3RiYWNrbG9nby5wbmdcIikqLztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmljb257XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtZmFkZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB9XHJcbiAgXHJcbiAgLnNpdGUtaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaXRlLWhlYWRpbmcgLnNpdGUtaGVhZGluZy11cHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbiAgXHJcbiAgLnNpdGUtaGVhZGluZyAuc2l0ZS1oZWFkaW5nLWxvd2VyIHtcclxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAucGFnZS1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi1oZWFkaW5nIC5zZWN0aW9uLWhlYWRpbmctdXBwZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi1oZWFkaW5nIC5zZWN0aW9uLWhlYWRpbmctbG93ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICBcclxuICAuYmctZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5NywgMTk3LCAwLjc0KTtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogIzU2ZTY2ZTtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIC8qIGFkZGVkICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjMjg2YjE3O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmdiKDU4LCAxNjUsIDkyKTtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICM1NmU2OTI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4teGwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuaW50cm8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5pbnRybyAuaW50cm8taW1nIHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICByaWdodDogMjA7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmludHJvIC50b3AtaW1nIHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICByaWdodDogMjAwMCU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmludHJvIC5pbnRyby10ZXh0IHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5pbnRybyAuaW50cm8tdGV4dCAuaW50cm8tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmludHJvIC5pbnRyby10ZXh0IHtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmN0YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgMTMzLCA1OSwgMC44NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdGEgLmN0YS1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gIH1cclxuICBcclxuICAuY3RhIC5jdGEtaW5uZXI6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMC41cmVtO1xyXG4gICAgYm90dG9tOiAtMC41cmVtO1xyXG4gICAgbGVmdDogLTAuNXJlbTtcclxuICAgIHJpZ2h0OiAtMC41cmVtO1xyXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmFib3V0LWhlYWRpbmcgLmFib3V0LWhlYWRpbmctaW1nIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LWhlYWRpbmcgLmFib3V0LWhlYWRpbmctY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC1pdGVtLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaXRlbS1pbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIG1heC13aWR0aDogNTB2dztcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWl0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zcmVtO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWl0ZW0tZGVzY3JpcHRpb24yIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtM3JlbTtcclxuICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubGlzdC1ob3VycyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtaG91cnMgLmxpc3QtaG91cnMtaXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg4NiwgMjMwLCAxMzQsIDAuNSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtaG91cnMgLmxpc3QtaG91cnMtaXRlbS50b2RheSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNDlhZjYyO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5saXN0LWhvdXJzIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRyZXNzIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmVjNjg4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjNTZlNjYyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmE3NTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggcmdiYSgzMSwgMzMsIDM2LCAwLjQ3OSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVhMzRiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFkZjQ4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzE3NTcyO1xyXG4gIH1cclxuICBcclxuICAuZm9udC13ZWlnaHQtbGlnaHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDE1MG1zIGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICBmb290ZXIgZGl2IGEge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMTUwbXMgZWFzZS1pbjtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2l0ZS1oZWFkaW5nLXVwcGVyIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmltZy1mbHVpZC5yb3VuZGVkLmFib3V0LWhlYWRpbmctaW1nLm1iLTMubWItbGctMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tdC01IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgNTgsIDY0KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzYzYTNlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXIgc3BhbntcclxuICAgIGNvbG9yOiAjYThjODc1O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCl7XHJcbiAgICAubmF2YmFye1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgIH1cclxuICAgIC54cy1sb2dve1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2V7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjU1LCAyNTUpLCByZ2JhKDE0MCwgMjA0LCAxNjQsIDAuOSkpO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB1bCBsaSBhe1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmZvcm0tYmxvY2t7XHJcbiAgICAgIG1hcmdpbjogNzBweCAwIDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ibG9jayAuZm9ybS1jb250cm9se1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5mb3JtLWJsb2NrIC5idG57XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAud2F0Y2gtdmlkZW8tYmxvY2sgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnZpZGVvLXNlY3Rpb24gaWZyYW1le1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNoYXJlLWxpbmstYmxvY2t7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2hhcmUtbGluay1ibG9jayBoMntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNoYXJlLWxpbmstYmxvY2sgLmNvcHktdGV4dHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgIH1cclxuICAgIC5zb2NpYWwtdWwgbGk6bGFzdC1jaGlsZHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5xdWV1ZS10ZXh0LWJsb2NrIGltZ3tcclxuICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcblxyXG4iXX0= */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.css": 
        /*!************************!*\
          !*** ./src/styles.css ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!******************************!*\
          !*** multi ./src/styles.css ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/dylancorbus/Desktop/spotback-repos/spotback-website/src/styles.css */ "./src/styles.css");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map