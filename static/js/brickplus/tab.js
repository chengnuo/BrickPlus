/*! generator-frontman v0.1.2
*  by fronui team
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-07-20
*  Licensed under MIT
*/
 !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?exports.BrickPlus=e(require("jquery")):t.BrickPlus=e(t.jQuery)}(this,function(t){return function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){return o(this).each(function(){var e=o(this),a=e.data("ui.tab");a||e.data("ui.tab",a=new u(this)),"string"==typeof t&&a[t]&&a[t]()})}var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=a(1),s='[data-toggle="tab"],.tabs-btn',u=function(){function t(e){n(this,t),this.$el=o(e),this.VERSION="{{VERSION}}",this.TRANSITION_DURATION=150}return i(t,[{key:"show",value:function(){var t=this.$el,e=t.closest('.tabs,[data-tab="item"]'),a=t.data("target");a||(a=t.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,""));var n=e.find(".active a"),r=o.Event("hide.ui.tab",{relatedTarget:t[0]}),i=o.Event("show.ui.tab",{relatedTarget:n[0]}),s=o(a);n.trigger(r),t.trigger(i),i.isDefaultPrevented()||r.isDefaultPrevented()||(this.activate(t.closest('li,[data-tab="nav"]'),e),this.activate(s,s.parent(),function(){n.trigger({type:"hidden.ui.tab",relatedTarget:t[0]}),t.trigger({type:"shown.ui.tab",relatedTarget:n[0]})}))}},{key:"activate",value:function(e,a,n){var r=a.find("> .active"),i=n&&o.support.transition&&(r.length&&r.hasClass("fade")||!!a.find("> .fade").length),u=function(){r.removeClass("active").find(s).attr("aria-expanded",!1),e.addClass("active").find(s).attr("aria-expanded",!0),i?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),n&&n()};r.length&&i?r.one("uiTransitionEnd",u).emulateTransitionEnd(t.TRANSITION_DURATION):u(),r.removeClass("in")}}]),t}();o.fn.tab=r,o.fn.tab.Constructor=u;var f=function(t){o(t.target).hasClass("tab-disabled")||(t.preventDefault(),r.call(o(this),"show"))};o(function(){o(document).on("click.ui.tab",s,f)}),t.exports=u},function(e,a){e.exports=t}])});