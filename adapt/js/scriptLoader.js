!function(){function e(){var e=function(){for(var e=document.querySelectorAll("link"),r=0,i=e.length;r<i;r++){var o=e[r];if(o.href.substr(-n.length)===n)return o}}();e&&function(e){console.warn("WARN: DEPRECATED - CSS location needs updating from",n,"to",i);var r=e.parentNode;r.removeChild(e);e=document.createElement("link");e.href=i,e.rel="stylesheet",r.appendChild(e)}(e)}var n,i;function r(e,r){var i;e&&"string"==typeof e&&((i=document.createElement("script")).onload=r,i.src=e,document.getElementsByTagName("head")[0].appendChild(i))}function o(){void 0===window.jQuery?setTimeout(o,100):function(){Modernizr.touch=Modernizr.touchevents;var e=Modernizr.touch?"touch":"no-touch";$("html").addClass(e),require(["handlebars","underscore","regenerator-runtime","core-js","underscore.results","backbone","backbone.controller","backbone.controller.results","backbone.es6","velocity","imageReady","inview","jqueryMobile","libraries/jquery.resize","scrollTo","bowser","enum","react","react-dom","object.assign","html-react-parser","libraries/jquery.ui.min"],s)}()}function s(e,r){window._=r,window.Handlebars=e,require(["templates"],a)}function a(){$.ajaxPrefilter(function(e){e.crossDomain=!0}),r("adapt/js/adapt.min.js")}n="adapt/css/adapt.css",i="adapt.css",document.body?e():document.addEventListener("DOMContentLoaded",e),(window.__loadScript=r)("libraries/require.min.js",function(){requirejs.config({map:{"*":{coreJS:"core/js",coreViews:"core/js/views",coreModels:"core/js/models",coreCollections:"core/js/collections"}},paths:{"regenerator-runtime":"libraries/regenerator-runtime.min","core-js":"libraries/core-js.min",jquery:"libraries/jquery.min",underscore:"libraries/underscore.min","underscore.results":"libraries/underscore.results",backbone:"libraries/backbone.min","backbone.controller":"libraries/backbone.controller","backbone.controller.results":"libraries/backbone.controller.results","backbone.es6":"libraries/backbone.es6",handlebars:"libraries/handlebars.min",velocity:"libraries/velocity.min",imageReady:"libraries/imageReady",inview:"libraries/inview",scrollTo:"libraries/scrollTo.min",bowser:"libraries/bowser",enum:"libraries/enum",jqueryMobile:"libraries/jquery.mobile.custom",react:"libraries/react.development","react-dom":"libraries/react-dom.development","object.assign":"libraries/object.assign","html-react-parser":"libraries/html-react-parser.min"}}),r("libraries/jquery.min.js",o)})}();