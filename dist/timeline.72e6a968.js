parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zzgn":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}var n=function(){function t(i,n){e(this,t),this.data=n,this.wrapperId=i,this.wrapper=document.getElementById(i),this.slidesWidth=0,this.docWidth=window.innerWidth,this.timelineInner=null,this.nodes=null}return i(t,[{key:"init",value:function(){if(this.data&&(this.data=this.data.sort(this.sortNodesByDate("year")),this.injectHTML(),this.timelineInner=document.querySelector("#".concat(this.wrapperId," .timeline")),this.nodes=document.querySelectorAll("#".concat(this.wrapperId," .tl-node")),this.checkScreenSize())){this.slidesWidth=200*this.nodes.length;this.slidesWidth,this.docWidth;this.wrapper.addEventListener("mousemove",this.mouseListen.bind(this)),window.addEventListener("resize",this.windowSizeChange.bind(this)),this.initNodeListen()}}},{key:"sortNodesByDate",value:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(i,n){return(i[e]<n[e]?-1:i[e]>n[e]?1:0)*t}}},{key:"initNodeListen",value:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].addEventListener("mouseenter",this.nodeListen)}},{key:"mouseListen",value:function(e){if(this.checkScreenSize()){var t=100*e.pageX/this.docWidth,i=t/100*this.slidesWidth-t/200*this.docWidth;this.timelineInner.style.transform="translate3d("+-i+"px,0,0)"}}},{key:"nodeListen",value:function(){var e=this.getBoundingClientRect().left,t=this.children[2];e>window.innerWidth/2?(t.style.left="auto",t.style.right="-10px",t.classList.remove("left-triangle"),t.classList.add("right-triangle")):(t.style.left="-10px",t.style.right="auto",t.classList.add("left-triangle"),t.classList.remove("right-triangle"))}},{key:"windowSizeChange",value:function(){this.checkScreenSize()||(this.timelineInner.style.transform="translate3d(0,0,0)")}},{key:"checkScreenSize",value:function(){return window.innerWidth>800}},{key:"injectHTML",value:function(){var e=document.createElement("section");e.classList.add("timeline-wrapper"),this.wrapper.appendChild(e);var t=document.createElement("div");t.classList.add("timeline"),e.appendChild(t);var i=document.createElement("div");i.classList.add("line"),e.appendChild(i);var n=document.createElement("div");n.classList.add("node-wrapper"),t.appendChild(n);for(var s=0;s<this.data.length;s++){var a=document.createElement("div");a.classList.add("tl-node"),a.innerHTML='\n          <p class="above-year">'.concat(this.data[s].year,'</p>\n          <div class="dot"></div>\n          <div class="data left-triangle" style="left: -10px; right: auto;">\n            <div class="upper">\n              <h5>').concat(this.data[s].year,"</h5>\n              <h3>").concat(this.data[s].title,"</h3>\n            </div>\n          </div>"),n.appendChild(a)}}}]),t}(),s=[{year:"1985",title:"Saudi Bell was founded in Riyadh",image:"https://picsum.photos/600/400"},{year:"1991",title:"Became a key provider for IT, <br>telecom and physical security",image:"https://picsum.photos/600/400"},{year:"1996",title:"Established Jeddah branch",image:"https://picsum.photos/600/400"},{year:"1997",title:"Established Jeddah branch",image:"https://picsum.photos/600/400"},{year:"2000",title:"Established Dammam branch",image:"https://picsum.photos/600/400"},{year:"2021",title:"Expanding regionally to serve <br>the Middle East",image:"https://picsum.photos/600/400"}];if(window.location.href.includes("about")){var a=new n("timeline",s);a.init()}
},{}]},{},["zzgn"], null)
//# sourceMappingURL=./timeline.72e6a968.js.map