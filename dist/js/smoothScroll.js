/*! 
*  BrickPlus v1.0.8
*  by fronui team
*  updated on 2016-10-11
*  created by generator-frontman
*  (c) 2014-2016 www.frontpay.cn
*  Licensed under MIT
*/
 !function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],o):"object"==typeof exports?exports.smoothScroll=o(require("jquery")):t.smoothScroll=o(t.jQuery)}(this,function(t){return function(t){function o(r){if(e[r])return e[r].exports;var n=e[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}({0:function(t,o,e){t.exports=e(20)},2:function(o,e){o.exports=t},20:function(t,o,e){"use strict";function r(t){return function(){var o=s.Event("done.ui.smoothscroll",{relatedTarget:t});t.trigger(o)}}function n(t,o,e){e=s.extend({},l.DEFAULTS,e);var n=o.offset().top-e.offset,i=s(document).height(),c=s(window).height();n+c>i&&(n=i-c),s("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done([e.complete,r(t)])}function i(t,o){return s(this).each(function(){var e=s(this),r=e.data("bp.smoothScroll");r?"scrollTo"===t?r.scrollTo(o):e.trigger("click.bp.smoothScroll"):e.data("bp.smoothScroll",new l(this,s.extend({},e.data(),t)))})}var s=e(2);s.easing.easeOutExpo||(s.easing.easeOutExpo=function(t,o,e,r,n){return o==n?e+r:r*(-Math.pow(2,-10*o/n)+1)+e});var l=function(t,o){this.$el=s(t),this.options=o,this.$targetElement=s("body"),s(this.$el[0].hash).length&&(this.$targetElement=s(this.$el[0].hash)),s(this.$el.attr("data-target")).length&&(this.$targetElement=s(this.$el.attr("data-target"))),this.init()};l.VERSION="1.0.8",l.DEFAULTS={duration:500,transition:"easeOutExpo",offset:0,complete:s.noop},l.prototype.init=function(){this.$el.on("click.ui.smoothScroll",this.scroll(this.$el,this.$targetElement,this.options))},l.prototype.scroll=function(t,o,e){return function(r){r.preventDefault(),n(t,o,e)}},l.prototype.scrollTo=function(t){n(this.$el,this.$targetElement,t||{})},s.fn.smoothScroll=i,s.fn.smoothScroll.Constructor=l,s(function(){s('[data-toggle="smooth-scroll"]').smoothScroll()}),t.exports=l}})});