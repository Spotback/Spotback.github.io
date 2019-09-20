(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* You can add global styles to this file, and also import other style files */\nbody {\n    font-family: 'Raleway', sans-serif;\n    background: linear-gradient(rgb(255, 255, 255), rgba(140, 204, 164, 0.849))/*, url(\"./assets/images/Spotbacklogo.png\")*/;\n    background-attachment: fixed;\n    /* background-position: center; */\n    background-size: cover;\n  }\n.someUniqueId {\n    font-family: 'Raleway', sans-serif;\n    background: linear-gradient(rgb(255, 255, 255), rgba(140, 204, 164, 0.849))/*, url(\"./assets/images/Spotbacklogo.png\")*/;\n    background-attachment: fixed;\n    /* background-position: center; */\n    background-size: cover;\n  }\n.icon{\n    width: 50px;\n  }\nh1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Raleway';\n  }\np {\n    line-height: 1.75;\n  }\n.text-faded {\n    color: rgba(255, 255, 255, 0.3);\n  }\n.site-heading {\n    margin-top: 2rem;\n    margin-bottom: 0rem;\n    text-transform: uppercase;\n    line-height: 1;\n    font-family: 'Raleway';\n  }\n.site-heading .site-heading-upper {\n    display: block;\n    font-size: 1.6rem;\n    font-weight: 800;\n  }\n.site-heading .site-heading-lower {\n    font-size: 4.5rem;\n    font-weight: 100;\n    line-height: 4rem;\n  }\n.page-section {\n    margin-top: 3rem;\n    margin-bottom: 5rem;\n  }\n.section-heading {\n    text-transform: uppercase;\n    color: white;\n  }\n.section-heading .section-heading-upper {\n    display: block;\n    font-size: 1rem;\n    font-weight: 800;\n  }\n.section-heading .section-heading-lower {\n    display: block;\n    font-size: 3rem;\n    font-weight: 100;\n  }\n.bg-faded {\n    background-color: rgba(197, 197, 197, 0.74);\n  }\n#mainNav {\n    background-color: rgb(255, 255, 255);\n    font-family: 'Raleway';\n    height: 60px;\n  }\n#mainNav .navbar-brand {\n    color: #56e66e;\n  }\n#mainNav .navbar-nav .nav-item .nav-link {\n    color: rgba(0, 0, 0, 0.7);\n    font-weight: 800;\n    /* added */\n    display: inline-block;\n  }\n#mainNav .navbar-nav .nav-item.active .nav-link {\n    color: #286b17;\n  }\n@media (min-width: 992px) {\n    #mainNav .navbar-nav .nav-item .nav-link {\n      font-size: 0.9rem;\n    }\n    #mainNav .navbar-nav .nav-item .nav-link:hover {\n      color: rgb(58, 165, 92);\n    }\n    #mainNav .navbar-nav .nav-item.active .nav-link:hover {\n      color: #56e692;\n    }\n  }\n.btn-xl {\n    font-weight: 700;\n    font-size: 0.8rem;\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n.intro {\n    position: relative;\n  }\n@media (min-width: 992px) {\n    .intro .intro-img {\n      width: 40%;\n      float: right;\n      right: 20;\n      \n    }\n    .intro .top-img {\n      width: 40%;\n      float: right;\n      right: 2000%;\n      \n    }\n    .intro .intro-text {\n      left: 0;\n      width: 60%;\n      margin-top: 3rem;\n      position: absolute;\n    }\n    .intro .intro-text .intro-button {\n      width: 100%;\n      left: 0;\n      position: absolute;\n      bottom: -2rem;\n    }\n  }\n@media (min-width: 1200px) {\n    .intro .intro-text {\n      width: 45%;\n    }\n  }\n.cta {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n    background-color: rgba(48, 133, 59, 0.85);\n  }\n.cta .cta-inner {\n    position: relative;\n    padding: 3rem;\n    margin: 0.5rem;\n    background-color: rgba(255, 255, 255, 0.85);\n  }\n.cta .cta-inner:before {\n    border-radius: 0.5rem;\n    content: '';\n    position: absolute;\n    top: -0.5rem;\n    bottom: -0.5rem;\n    left: -0.5rem;\n    right: -0.5rem;\n    border: 0.25rem solid rgba(255, 255, 255, 0.85);\n  }\n@media (min-width: 992px) {\n    .about-heading .about-heading-img {\n      position: relative;\n      z-index: 0;\n    }\n    .about-heading .about-heading-content {\n      margin-top: -5rem;\n      position: relative;\n      z-index: 1;\n    }\n  }\n@media (min-width: 992px) {\n    .product-item .product-item-title {\n      position: relative;\n      z-index: 1;\n      margin-bottom: -3rem;\n    }\n    .product-item .product-item-img {\n      position: relative;\n      z-index: 0;\n      max-width: 50vw;\n    }\n\n    .product-item .product-item-description {\n      position: relative;\n      z-index: 1;\n      margin-top: -3rem;\n      max-width: 50vw;\n    }\n    .product-item .product-item-description2 {\n      position: relative;\n      z-index: 1;\n      margin-top: -3rem;\n      max-width: 50vw;\n    }\n  }\n.list-hours {\n    font-size: 0.9rem;\n  }\n.list-hours .list-hours-item {\n    border-bottom: 1px solid rgba(86, 230, 134, 0.5);\n    padding-bottom: .25rem;\n    margin-bottom: 1rem;\n    font-style: italic;\n  }\n.list-hours .list-hours-item.today {\n    font-weight: bold;\n    color: #49af62;\n  }\n@media (min-width: 992px) {\n    .list-hours {\n      width: 50%;\n      font-size: 1.1rem;\n    }\n  }\n.address strong {\n    font-size: 1.2rem;\n  }\n.footer {\n    background-color: #6ec688;\n  }\n.text-primary {\n    color: #56e662 !important;\n  }\n.bg-primary {\n    background-color: #e6a756 !important;\n  }\n.btn {\n    box-shadow: 0px 3px 3px 0px rgba(31, 33, 36, 0.479);\n  }\n.btn-primary {\n    background-color: #1ea34b;\n    border-color: #000000;\n  }\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    background-color: #2adf48;\n    border-color: #717572;\n  }\n.font-weight-light {\n    font-weight: 100 !important;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,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c0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCO0FBRUE7SUFDRTtNQUNFLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7RUFDRjtBQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBRUE7SUFDRSxtREFBbUQ7RUFDckQ7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigyNTUsIDI1NSwgMjU1KSwgcmdiYSgxNDAsIDIwNCwgMTY0LCAwLjg0OSkpLyosIHVybChcIi4vYXNzZXRzL2ltYWdlcy9TcG90YmFja2xvZ28ucG5nXCIpKi87XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAuc29tZVVuaXF1ZUlkIHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjU1LCAyNTUsIDI1NSksIHJnYmEoMTQwLCAyMDQsIDE2NCwgMC44NDkpKS8qLCB1cmwoXCIuL2Fzc2V0cy9pbWFnZXMvU3BvdGJhY2tsb2dvLnBuZ1wiKSovO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmljb257XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIH1cbiAgXG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICB9XG4gIFxuICAudGV4dC1mYWRlZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgfVxuICBcbiAgLnNpdGUtaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgfVxuICBcbiAgLnNpdGUtaGVhZGluZyAuc2l0ZS1oZWFkaW5nLXVwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG4gIFxuICAuc2l0ZS1oZWFkaW5nIC5zaXRlLWhlYWRpbmctbG93ZXIge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIH1cbiAgXG4gIC5wYWdlLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxuXG4gIFxuICBcbiAgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLWhlYWRpbmcgLnNlY3Rpb24taGVhZGluZy11cHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbiAgXG4gIC5zZWN0aW9uLWhlYWRpbmcgLnNlY3Rpb24taGVhZGluZy1sb3dlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgXG4gIC5iZy1mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5NywgMTk3LCAwLjc0KTtcbiAgfVxuICBcbiAgI21haW5OYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICM1NmU2NmU7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAvKiBhZGRlZCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtLmFjdGl2ZSAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMjg2YjE3O1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2IoNTgsIDE2NSwgOTIpO1xuICAgIH1cbiAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluazpob3ZlciB7XG4gICAgICBjb2xvcjogIzU2ZTY5MjtcbiAgICB9XG4gIH1cbiAgXG4gIC5idG4teGwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB9XG4gIFxuICAuaW50cm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmludHJvIC5pbnRyby1pbWcge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHJpZ2h0OiAyMDtcbiAgICAgIFxuICAgIH1cbiAgICAuaW50cm8gLnRvcC1pbWcge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHJpZ2h0OiAyMDAwJTtcbiAgICAgIFxuICAgIH1cbiAgICAuaW50cm8gLmludHJvLXRleHQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuaW50cm8gLmludHJvLXRleHQgLmludHJvLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0ycmVtO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5pbnRybyAuaW50cm8tdGV4dCB7XG4gICAgICB3aWR0aDogNDUlO1xuICAgIH1cbiAgfVxuICBcbiAgLmN0YSB7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgMTMzLCA1OSwgMC44NSk7XG4gIH1cbiAgXG4gIC5jdGEgLmN0YS1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgfVxuICBcbiAgLmN0YSAuY3RhLWlubmVyOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0wLjVyZW07XG4gICAgYm90dG9tOiAtMC41cmVtO1xuICAgIGxlZnQ6IC0wLjVyZW07XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5hYm91dC1oZWFkaW5nIC5hYm91dC1oZWFkaW5nLWltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAuYWJvdXQtaGVhZGluZyAuYWJvdXQtaGVhZGluZy1jb250ZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IC01cmVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaXRlbS10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTNyZW07XG4gICAgfVxuICAgIC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaXRlbS1pbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMDtcbiAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWl0ZW0tZGVzY3JpcHRpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG1hcmdpbi10b3A6IC0zcmVtO1xuICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xuICAgIH1cbiAgICAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWl0ZW0tZGVzY3JpcHRpb24yIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICB9XG4gIH1cbiAgXG4gIC5saXN0LWhvdXJzIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBcbiAgLmxpc3QtaG91cnMgLmxpc3QtaG91cnMtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoODYsIDIzMCwgMTM0LCAwLjUpO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgXG4gIC5saXN0LWhvdXJzIC5saXN0LWhvdXJzLWl0ZW0udG9kYXkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNDlhZjYyO1xuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAubGlzdC1ob3VycyB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICB9XG4gIFxuICAuYWRkcmVzcyBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIFxuICAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmVjNjg4O1xuICB9XG4gIFxuICAudGV4dC1wcmltYXJ5IHtcbiAgICBjb2xvcjogIzU2ZTY2MiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYmctcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2YTc1NiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggcmdiYSgzMSwgMzMsIDM2LCAwLjQ3OSk7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTM0YjtcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmFkZjQ4O1xuICAgIGJvcmRlci1jb2xvcjogIzcxNzU3MjtcbiAgfVxuICBcbiAgLmZvbnQtd2VpZ2h0LWxpZ2h0IHtcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
        } catch (e) {
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
    } else {
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
    } else {
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
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
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
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
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
  } else {
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
  } else {
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
    } else {
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

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dylancorbus/Desktop/spotback-repos/spotback-website/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map