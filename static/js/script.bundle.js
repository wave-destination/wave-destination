!function(){"use strict";var e;e=(new(function(){function e(){this.ua=navigator.userAgent.toLowerCase()}return e.prototype.isIos=function(){return this.ua.indexOf("iphone")>=0||this.ua.indexOf("ipad")>=0||this.ua.indexOf("ipod")>=0},e.prototype.isMobile=function(){return!!this.ua.match(/iphone|ipad|android.+mobile/)},e}())).isMobile();var t=0,n=null,i=function(){return window.innerWidth<=1024},o=function(){var e=document.getElementById("mv"),t=e.clientWidth;document.getElementById("container").style.width="".concat(t,"px");var n=document.getElementById("wrapper").getBoundingClientRect().left;e.style.left="".concat(n,"px"),window.removeEventListener("scroll",r,!1)},d=function(){document.getElementById("container").style.width="100%";var e=document.getElementById("container-title");t=e.getBoundingClientRect().bottom,n=document.getElementById("mobile-bg"),window.addEventListener("scroll",r,!1)},a=null,c=!0,r=function(){if(!(window.pageYOffset<t/3*2)){a?c=!(a>window.pageYOffset):a=window.pageYOffset;var e,i=Number(getComputedStyle(n).top.replace("px",""));(e=c?i-=window.pageYOffset/1e3:i+=window.pageYOffset/1e3)>=0||(n.style.top="".concat(e,"px"),a=window.pageYOffset)}},s=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},u=window.innerWidth;e||window.addEventListener("resize",(function(){i()?d():o(),u!==window.innerWidth&&(u=window.innerWidth,s())})),s(),window.onload=function(){i()?d():o(),setTimeout((function(){var e;e=document.getElementById("splash"),document.getElementById("splash-text").classList.add("is-hidden"),e.classList.add("is-out")}),500)}}();