!function(){"use strict";(new(function(){function t(){this.isIpad=!1,this.ua=navigator.userAgent.toLowerCase()}return t.prototype.isMobile=function(){return!!this.ua.match(/iphone|ipad|android.+mobile/)},t.prototype.isIpadAndPCView=function(){return this.isIpad=/ipad/.test(this.ua),this.ua.indexOf("macintosh")>=0&&"ontouchend"in document},t.prototype.isIos=function(){return this.ua.indexOf("iphone")>=0||this.ua.indexOf("ipad")>=0||this.ua.indexOf("ipod")>=0},t.prototype.isIos13Over=function(){return this.isIpad?!/os ([1-9]_|1[0-2]_)/.test(this.ua):!/iphone os ([1-9]_|1[0-2]_)/.test(this.ua)},t.prototype.isIos12=function(){return this.isIpad?!/os (12_)/.test(this.ua):/iphone os (12_)/.test(this.ua)},t.prototype.isIos11Under=function(){return this.isIpad?!/os ([1-9]_|1[0-1]_)/.test(this.ua):!/iphone os ([1-9]_|1[0-1]_)/.test(this.ua)},t}())).isMobile();var t=!1,e=null,n=null,i=null,o=!1,s=!1,d=null,u=null,a=function(){return window.innerWidth<=1024};t=a();var r=function(){n=document.getElementById("mv"),i=document.getElementById("mv-image");var t=n.clientWidth;document.getElementById("container").style.width="".concat(t,"px");var e=document.getElementById("wrapper").getBoundingClientRect().left;n.style.left="".concat(e,"px"),u=document.getElementById("container-statement")},c=function(){document.getElementById("container").style.width="100%",document.getElementById("container-title"),d=document.getElementById("mobile-bg"),u=document.getElementById("container-statement")},l=function(){t?h():m()},h=function(){window.pageYOffset<1.2*window.innerHeight?s&&(s=!1,d.classList.remove("is-blur")):s||(s=!0,d.classList.add("is-blur")),u.getBoundingClientRect().top<300?e.classList.remove("is-hidden"):e.classList.add("is-hidden")},m=function(){window.pageYOffset<window.innerHeight-window.innerHeight/3||window.pageYOffset>2*window.innerHeight-window.innerHeight/3?o&&(o=!1,i.classList.remove("is-blur")):o||(o=!0,i.classList.add("is-blur")),u.getBoundingClientRect().top<200?e.classList.remove("is-hidden"):e.classList.add("is-hidden")},p=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))},w=window.innerWidth;window.addEventListener("resize",(function(){(t=a())?c():r(),w!==window.innerWidth&&(w=window.innerWidth,p())})),p(),window.onload=function(){t?c():r(),window.addEventListener("scroll",l,!1),e=document.getElementById("bg-color"),setTimeout((function(){var t;t=document.getElementById("splash"),document.getElementById("splash-text").classList.add("is-hidden"),t.classList.add("is-out")}),500)}}();