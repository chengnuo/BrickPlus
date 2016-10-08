/*! 
*  BrickPlus v1.0.5
*  by fronui team
*  updated on 2016-10-08
*  created by generator-frontman
*  (c) 2014-2016 www.frontpay.cn
*  Licensed under MIT
*/
 !function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],o):"object"==typeof exports?exports.tooltips=o(require("jquery")):t.tooltips=o(t.jQuery)}(this,function(t){return function(t){function o(e){if(i[e])return i[e].exports;var s=i[e]={exports:{},id:e,loaded:!1};return t[e].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var i={};return o.m=t,o.c=i,o.p="",o(0)}({0:function(t,o,i){t.exports=i(26)},2:function(o,i){o.exports=t},26:function(t,o,i){"use strict";function e(t){return s(this).each(function(){var o=s(this),i=o.data("bp.tooltips");i||o.data("bp.tooltips",i=new l(this,t)),"string"==typeof t&&i[t]()})}var s=i(2),n='[data-toggle="tooltips"]',l=function h(t,o){this.$el=s(t),this.options=s.extend({},h.DEFAULTS,this.$el.data(),o),this.$tooltip=null,this.content="",this.tooltipdelay=null,this.checkdelay=null,this.init()};l.VERSION="1.0.5",l.TRANSITION_DURATION=150,l.DEFAULTS={offset:9,pos:"top",animation:!0,delay:0,cls:"",active:"active",url:"",content:function(t,o){return o=t.attr("title"),o&&t.data("cached-title",o).removeAttr("title"),t.data("cached-title")}},l.prototype.init=function(){var t=this;t.$tooltip||(t.$tooltip=s('<div class="tooltips"><div class="tooltips-inner"></div><span class="tips-arrow-border"></span><span class="tips-arrow"></span></div>').appendTo("body")),t.$el.on({focus:function(){t.show()},blur:function(){t.hide()},mouseenter:function(){t.show()},mouseleave:function(){t.hide()}})},l.prototype.__getPosition=function(){var t=s.extend({},this.$el.offset(),{width:this.$el[0].offsetWidth,height:this.$el[0].offsetHeight}),o=this.$tooltip[0].offsetWidth,i=this.$tooltip[0].offsetHeight,e="function"==typeof this.options.offset?this.options.offset.call(this.$el):this.options.offset,n="function"==typeof this.options.pos?this.options.pos.call(this.$el):this.options.pos,l=n.split("-"),p={display:"none",visibility:"visible",top:t.top+t.height+i,left:t.left},h={bottom:{top:t.top+t.height+e,left:t.left+t.width/2-o/2},top:{top:t.top-i-e,left:t.left+t.width/2-o/2},left:{top:t.top+t.height/2-i/2,left:t.left-o-e},right:{top:t.top+t.height/2-i/2,left:t.left+t.width+e}};s.extend(p,h[l[0]]),2==l.length&&(p.left="left"==l[1]?t.left:t.left+t.width-o);var a=this.checkBoundary(p.left,p.top,o,i);if(a){switch(a){case"x":n=2==l.length?l[0]+"-"+(p.left<0?"left":"right"):p.left<0?"right":"left";break;case"y":n=2==l.length?(p.top<0?"bottom":"top")+"-"+l[1]:p.top<0?"bottom":"top";break;case"xy":n=2==l.length?(p.top<0?"bottom":"top")+"-"+(p.left<0?"left":"right"):p.left<0?"right":"left"}l=n.split("-"),s.extend(p,h[l[0]]),2==l.length&&(p.left="left"==l[1]?t.left:t.left+t.width-o)}return p.left-=s("body").position().left,[p,n]},l.prototype.__setPosition=function(){var t=this.__getPosition();this.$tooltip.css(t[0]).attr("class",["tooltips","tooltips-"+t[1],this.options.cls].join(" ")),this.options.animation?this.$tooltip.css({opacity:0,display:"block"}).addClass(this.options.active).animate({opacity:1},parseInt(this.options.animation,10)||400):this.$tooltip.show().addClass(this.options.active)},l.prototype.show=function(){var t=this;this.content="function"==typeof this.options.content?this.options.content(this.$el):this.options.content,this.tooltipdelay&&clearTimeout(this.tooltipdelay),this.checkdelay&&clearTimeout(this.checkdelay),this.content.length&&(this.$tooltip.stop().css({top:-2e3,visibility:"hidden"}).removeClass(this.options.active).show(),this.$tooltip.find(".tooltips-inner").html(this.content),""!==this.options.url&&this.$tooltip.find(".tooltips-inner").load(this.options.url,function(){t.__setPosition()}),this.tooltipdelay=setTimeout(function(){t.__setPosition(),t.tooltipdelay=!1,t.checkdelay=setInterval(function(){t.$el.is(":visible")||t.hide()},150)},parseInt(this.options.delay,10)||0))},l.prototype.hide=function(){if(!this.$el.is("input")||this.$el[0]!==document.activeElement)if(this.tooltipdelay&&clearTimeout(this.tooltipdelay),this.checkdelay&&clearTimeout(this.checkdelay),this.$tooltip.stop(),this.options.animation){var t=this;this.$tooltip.fadeOut(parseInt(this.options.animation,10)||400,function(){t.$tooltip.removeClass(t.options.active)})}else this.$tooltip.hide().removeClass(this.options.active)},l.prototype.checkBoundary=function(t,o,i,e){var n="";return(0>t||t-s(document).scrollLeft()+i>s(window).width())&&(n+="x"),(0>o||o-s(document).scrollTop()+e>s(window).height())&&(n+="y"),n},s.fn.tooltips=e,s.fn.tooltips.Constructor=l;var p=function(){s(this).tooltips("show")};s(function(){s(document).on("mouseenter.bp.tooltips focus.bp.tooltips",n,p)}),t.exports=l}})});