/*! 
*  BrickPlus v1.0.0
*  by fronui team
*  updated on 2016-09-26
*  created by generator-frontman
*  (c) 2014-2016 www.frontpay.cn
*  Licensed under MIT
*/
 !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?exports.modalLayer=e(require("jquery")):t.modalLayer=e(t.jQuery)}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(15)},2:function(e,n){e.exports=t},3:function(t,e,n){"use strict";function i(){var t=document.createElement("ui"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}var a=n(2);a.fn.emulateTransitionEnd=function(t){var e=!1,n=this;a(this).one("uiTransitionEnd",function(){e=!0});var i=function(){e||a(n).trigger(a.support.transition.end)};return setTimeout(i,t),this},a(function(){a.support.transition=i(),a.support.transition&&(a.event.special.uiTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(t){if(a(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})}),t.exports=i},15:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){function e(){var t=(0,d["default"])(this);(0,d["default"])(this).on("click",".bp-modallayer-btns .btn",function(){var e=(0,d["default"])(this).data("index"),n=!0;o.length&&o[e]&&o[e].callback&&"function"==typeof o[e].callback&&(n=o[e].callback.call(null,(0,d["default"])(this),e)!==!1),n&&t.modal("hide")})}var n=void 0,i=void 0,a=[],o=t.buttons;i=d["default"].extend({},f.DEFAULTS,t);for(var l=0;l<o.length;l++)o[l].href?a.push('<a href="'+o[l].href+'" '+(o[l].target?'target="'+o[l].target+'"':"")+' class="'+(o[l].style||"btn primary")+'" data-index="'+l+'">'+o[l].text+"</a>"):a.push('<button type="button" class="'+(o[l].style||"btn primary")+'" data-index="'+l+'">'+o[l].text+"</button>");i.content=f.render({status:i.icon?"result-"+i.icon:"",title:i.title,content:t.content||"",buttons:a.join("")}),i.callback=e,n=(0,d["default"])(this).modal({title:i.title,content:i.content,callback:i.callback,size:i.size})}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),d=i(r),u=n(16),c=i(u),f=function(t){function e(t,n){return a(this,e),o(this,Object.getPrototypeOf(e).call(this,t,n))}return l(e,t),e}(c["default"]);e["default"]=f,f.DEFAULTS={icon:"info",title:"提示",content:"",close:!0,size:!1,buttons:[{text:"确定",href:!1,style:"btn primary",target:!1,callback:d["default"].noop}]},f.TEMPLATE='\n    <div class="result-wrap result-s {{status}}">\n        <div class="result-box">\n            <div class="result-icon"></div>\n            <div class="result-content">\n                <div class="result-inner">\n                    <h1>\n                        {{title}}\n                    </h1>\n                    <div class="bp-modallayer-content fn-pt-15">\n                        {{content}}\n                    </div>\n                    <div class="bp-modallayer-btns plural-btns fn-pt-15 small-btn-gb">\n                        {{buttons}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n',f.render=function(t){var e=void 0;return e=f.TEMPLATE.replace(/{{(\w*)}}/gi,function(e,n){var i=t[n];return i})},d["default"].fn.modalLayer=s,d["default"].fn.modalLayer.constructor=f,d["default"].successModalLayer=function(t){if(d["default"].isPlainObject(t)){var e=t.id?t.id:"#bp-successModalLayer";return(0,d["default"])(e).modalLayer({icon:"success",size:"small",title:t.title,content:t.content,buttons:[{style:"btn secondary",text:"确定",callback:t.callback}]})}},d["default"].confirmModalLayer=function(t){if(d["default"].isPlainObject(t)){var e=t.id?t.id:"#bp-confirmModalLayer";return(0,d["default"])(e).modalLayer({icon:"info",size:"small",title:t.title,content:t.content,buttons:[{text:"确定",callback:t.callback},{href:"javascript:void(0);",text:"取消",style:"btn links"}]})}},d["default"].alertModalLayer=function(t){if(d["default"].isPlainObject(t)){var e=t.id?t.id:"#bp-alertModalLayer";return(0,d["default"])(e).modalLayer({icon:"info",size:"small",title:t.title,content:t.content,buttons:[{text:"确定",callback:t.callback}]})}},d["default"].errorModalLayer=function(t){if(d["default"].isPlainObject(t)){var e=t.id?t.id:"#bp-infoModalLayer";return(0,d["default"])(e).modalLayer({icon:"fail",size:"small",title:t.title,content:t.content,buttons:[{text:"确定",style:"btn thirdly",callback:t.callback}]})}}},16:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!(0,r["default"])(this).length&&t&&/^#(\w*)/gi.test((0,r["default"])(this).selector)){var a=void 0,o=void 0;"string"==typeof t&&(o=t,t={title:"标题",content:""}),t.mid=(0,r["default"])(this).selector.replace(/^#/g,"");var l=u.render(t);return l.data("bp.modal",a=new u(l,t)),"string"==typeof o&&"function"==typeof a[o]&&a[o].apply(a,n),"function"==typeof t.callback&&t.callback.call(l),a.show(),l}return(0,r["default"])(this).each(function(){var e=(0,r["default"])(this),i=e.data("bp.modal"),a=r["default"].extend({},u.DEFAULTS,e.data(),r["default"].isPlainObject(t)?t:{});i||e.data("bp.modal",i=new u(e,a)),"string"==typeof t?"function"==typeof i[t]&&i[t].apply(i,n):r["default"].isPlainObject(t)&&(t.title&&i.setTitle(t.title),t.content&&i.setContent(t.content),i.show(n))})}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(2),r=i(s);n(3);var d='[data-toggle="modal"]',u=function(){function t(e,n){a(this,t),this.el=(0,r["default"])(e),this.props=r["default"].extend({},t.DEFAULTS,n),this.$body=(0,r["default"])(document.body),this.$dialog=this.el.find(".modal-wrap"),this.$backdrop=null,this.isShown=!1,this.originalBodyPad=null,this.scrollbarWidth=0,this.size=this.props.size,this.setSize(this.size,!0),this.props.remote&&this.el.find(".modal-body").load(this.props.remote,r["default"].proxy(function(){this.el.trigger("loaded.bp.modal")},this))}return l(t,[{key:"toggle",value:function(t){return this.isShown?this.hide():this.show(t)}},{key:"show",value:function(e){var n=this,i=r["default"].Event("show.pb.modal",{reletedTarget:e});if(!this.isShown&&!i.isDefaultPrevented()){this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.el.on("click.dismiss.pb.modal",'[data-dismiss="modal"], .modal-close',r["default"].proxy(this.hide,this));var a=r["default"].support.transition;this.el.addClass("in").scrollTop(0).attr("tabindex",-1),this.$dialog.addClass("bounceInDown"),this.adjustDialog(),a&&this.el[0].offsetWidth,this.enforceFocus(),a?this.el.attr("aria-hidden",!1).one("uiTransitionEnd",function(){return n.el.trigger("focus").trigger(i)}).emulateTransitionEnd(t.TRANSITION_DURATION):this.el.attr("aria-hidden",!0).fadeIn(t.TRANSITION_DURATION,function(){return n.el.trigger("focus").trigger(i)})}}},{key:"hide",value:function(e){var n=this;e&&e.preventDefault(),(this.el.is(":visible")||this.isShown)&&(this.isShown=!1,this.escape(),(0,r["default"])(document).off("focusin.pb.modal").off("keydown.bp.modal"),this.el.attr("aria-hidden",!0).off("click.dismiss.pb.modal").off("mouseup.dismiss.pb.modal"),this.$dialog.off("mousedown.dismiss.bp.modal"),r["default"].support.transition?this.el.one("uiTransitionEnd",r["default"].proxy(this.hideModal,this)).emulateTransitionEnd(t.TRANSITION_DURATION):this.el.fadeOut(t.TRANSITION_DURATION,function(){return n.hideModal()}))}},{key:"escape",value:function(){var t=this;this.isShown&&this.props.keyboard?this.el.on("keydown.dismiss.bp.modal",function(e){27===e.which&&t.hide()}):this.isShown||this.el.off("keydown.dismiss.bp.modal")}},{key:"hideModal",value:function(){var t=r["default"].Event("hide.bp.modal",{reletedTarget:this.el});this.$body.removeClass("modal-open"),this.resetAdjustments(),this.resetScrollbar(),this.$dialog.removeClass("bounceInDown"),this.el.removeClass("in").trigger(t)}},{key:"handleUpdate",value:function(){this.ajustDialog()}},{key:"adjustDialog",value:function(){var t=this.el[0].scrollHeight>document.documentElement.clientHeight;this.el.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})}},{key:"resetAdjustments",value:function(){this.el.css({paddingLeft:"",paddingRight:""})}},{key:"enforceFocus",value:function(){var t=this;(0,r["default"])(document).off("focusin.bp.modal").on("focusin.bp.modal",function(e){t.el[0]===e.target||t.el.has(e.target).length||t.$dialog.trigger("focus")})}},{key:"checkScrollbar",value:function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()}},{key:"setScrollbar",value:function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)}},{key:"resetScrollbar",value:function(){this.$body.css("padding-right",this.originalBodyPad)}},{key:"measureScrollbar",value:function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body[0].appendChild(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e}},{key:"setContent",value:function(t){var e=this.el.find(".modal-body");e.length&&e.html(t||"")}},{key:"setTitle",value:function(t){var e=this.el.find(".modal-title");e.length&&e.html(t||"")}},{key:"setSize",value:function(t,e){if(this.size!==t||e){for(var n=this.el.attr("class").split(" "),i=0,a=[];i<n.length;i++)n[i].indexOf("-modal")===-1&&a.push(n[i]);t&&a.push(t+"-modal"),this.el.attr("class",a.join(" "))}}}]),t}();e["default"]=u,u.TRANSITION_DURATION=150,u.DEFAULTS={backdrop:!0,keyboard:!0,show:!0,size:!1},u.TEMPLATE='\n    <div class="modal-background fade" id="{{mid}}">\n        <div class="modal-layer">\n            <div class="modal-position">\n            <div class="modal-wrap animated bounceInDown">\n                <div class="modal-head">\n                    <span class="modal-title">{{title}}</span>\n                    <i class="modal-close"></i>\n                </div>\n                <div class="modal-body">\n                {{content}}\n                </div>\n            </div>\n            </div>\n        </div>\n    </div>\n',u.render=function(t){var e=(0,r["default"])(document.body),n=void 0;return r["default"].isPlainObject(t)&&(n=u.TEMPLATE.replace(/{{(\w*)}}/gi,function(e,n){var i=t[n];return i&&"string"==typeof i?/^(\.|#)\w*/gi.test(i)?(0,r["default"])(i).html():i:i&&i instanceof r["default"]&&i.length>0?i.html():void 0}),n=(0,r["default"])(n).appendTo(e)),n},r["default"].fn.modal=o,r["default"].fn.modal.Constructor=u,r["default"].closeModal=function(t){(0,r["default"])(t).modal("hide")};var c=function(t){var e=(0,r["default"])(this),n=e.attr("href"),i=(0,r["default"])(e.attr("data-target"))||n&&n.replace(/.*(?=#[^\s]+$)/,"");o.call(i,"show",this)};(0,r["default"])(function(){(0,r["default"])(document).on("click.bp.modal",d,function(t){c.call(t.target,t)})})}})});