"use strict";(self.webpackChunkavidity_lab=self.webpackChunkavidity_lab||[]).push([[245],{2729:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,s=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,a=new RegExp("^"+i.source),o=new RegExp(i.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,s,r)=>{let i=!1,a=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=a,a=!0,l++):a&&o&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=a,a=!1,i=!0):(i=s(c)===c&&r(c)!==c,o=a,a=r(c)===c&&s(c)!==c)}return e})(e,i,c)),e=e.replace(a,""),e=r.preserveConsecutiveUppercase?((e,t)=>(s.lastIndex=0,e.replace(s,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,n){n.d(t,{L:function(){return h},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return a},b:function(){return u},g:function(){return d},h:function(){return l}});var s=n(6540),r=(n(2729),n(5556)),i=n.n(r);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t.indexOf(n=i[s])>=0||(r[n]=e[n]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const s={};let r="gatsby-image-wrapper";return"fixed"===n?(s.width=e,s.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:s}}function u(e,t,n,s,r){return void 0===r&&(r={}),a({},n,{loading:s,shouldLoad:e,"data-main-image":"",style:a({},r,{opacity:t?1:0})})}function d(e,t,n,s,r,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=s,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:n,height:r}=e;return"fullWidth"===t?s.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?s.createElement("div",{style:{maxWidth:n,display:"block"}},s.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,n=o(e,p);return s.createElement(s.Fragment,null,s.createElement(m,a({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:r,alt:i="",shouldLoad:l}=e,c=o(e,f);return s.createElement("img",a({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:i}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:r=!0}=e,i=o(e,g);const l=i.sizes||(null==t?void 0:t.sizes),c=s.createElement(y,a({},i,t,{sizes:l,shouldLoad:r}));return n.length?s.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return s.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:l})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,n=o(e,w);return t?s.createElement(v,a({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):s.createElement("div",a({},n))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const x=function(e){return s.createElement(s.Fragment,null,s.createElement(v,a({},e)),s.createElement("noscript",null,s.createElement(v,a({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),N=function(e,t,n){for(var s=arguments.length,r=new Array(s>3?s-3:0),a=3;a<s;a++)r[a-3]=arguments[a];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:i().object.isRequired,alt:N},P=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],T=new Set;let j,A;const I=function(e){let{as:t="div",image:r,style:i,backgroundColor:u,className:d,class:p,onStartLoad:m,onLoad:h,onError:f}=e,g=o(e,P);const{width:y,height:v,layout:b}=r,w=c(y,v,b),{style:E,className:x}=w,k=o(w,L),C=(0,s.useRef)(),S=(0,s.useMemo)((()=>JSON.stringify(r.images)),[r.images]);p&&(d=p);const N=function(e,t,n){let s="";return"fullWidth"===e&&(s='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(s='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),s}(b,y,v);return(0,s.useEffect)((()=>{j||(j=n.e(108).then(n.bind(n,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(S);if(A&&T.has(S))return;let t,s;return j.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=n(a({isLoading:!0,isLoaded:T.has(S),image:r},g)),T.has(S)||(t=requestAnimationFrame((()=>{C.current&&(s=o(C.current,S,T,i,m,h,f))}))))})),()=>{t&&cancelAnimationFrame(t),s&&s()}}),[r]),(0,s.useLayoutEffect)((()=>{T.has(S)&&A&&(C.current.innerHTML=A(a({isLoading:T.has(S),isLoaded:T.has(S),image:r},g)),null==m||m({wasCached:!0}),null==h||h({wasCached:!0}))}),[r]),(0,s.createElement)(t,a({},k,{style:a({},E,i,{backgroundColor:u}),className:x+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},q=(0,s.memo)((function(e){return e.image?(0,s.createElement)(I,e):null}));q.propTypes=O,q.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function D(e){return function(t){let{src:n,__imageData:r,__error:i}=t,l=o(t,z);return i&&console.warn(i),r?s.createElement(e,a({image:r},l)):(console.warn("Image not loaded",n),null)}}const W=D((function(e){let{as:t="div",className:n,class:r,style:i,image:l,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:g,objectFit:y,objectPosition:v}=e,b=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(n=r),f=a({objectFit:y,objectPosition:v,backgroundColor:g},f);const{width:w,height:N,layout:O,images:P,placeholder:L,backgroundColor:T}=l,j=c(w,N,O),{style:A,className:I}=j,q=o(j,C),z={fallback:void 0,sources:[]};return P.fallback&&(z.fallback=a({},P.fallback,{srcSet:P.fallback.srcSet?S(P.fallback.srcSet):void 0})),P.sources&&(z.sources=P.sources.map((e=>a({},e,{srcSet:S(e.srcSet)})))),s.createElement(t,a({},q,{style:a({},A,i,{backgroundColor:g}),className:I+(n?" "+n:"")}),s.createElement(h,{layout:O,width:w,height:N},s.createElement(E,a({},d(L,!1,O,w,N,T,y,v))),s.createElement(x,a({"data-gatsby-image-ssr":"",className:m},b,u("eager"===p,!1,z,p,f)))))})),F=function(e,t){for(var n=arguments.length,s=new Array(n>2?n-2:0),r=2;r<n;r++)s[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(s)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),B={src:i().string.isRequired,alt:N,width:F,height:F,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=B;const H=D(q);H.displayName="StaticImage",H.propTypes=B},9854:function(e,t,n){n.r(t),n.d(t,{Head:function(){return L},default:function(){return P}});var s=n(6540),r=n(2388),i=n(6512);var a=e=>{let{show:t}=e;return s.createElement("div",{className:" flex flex-col mt-4"},s.createElement("div",null,s.createElement("div",{style:{transition:"height 0.4s ease-in-out",overflow:"hidden",height:t?"244px":"0"},className:"bg-white rounded-xl"},["Services","Process","Work","About"].map(((e,t)=>s.createElement("div",{key:t,className:"p-3 font-livvic font-semibold text-sm cursor-pointer"},e))),s.createElement("div",{className:"m-4 p-2 bg-black cursor-pointer text-white rounded-full text-center font-livvic font-semibold text-sm"},"Start a project"))))};var o=()=>{const[e,t]=s.useState(!1);return s.createElement("div",{className:"pt-5 px-16 absolute w-full z-50"},s.createElement("div",{className:"z-10 relative overflow-hidden"},s.createElement("div",{className:"bg-white rounded-xl flex justify-between font-josefinSans font-bold text-lg items-stretch"},s.createElement("div",{className:" py-2 px-4 "},"Avidity"),s.createElement("div",{className:"px-4 cursor-pointer flex items-center rounded-bl-xl",onClick:()=>{t((e=>!e))}},!e&&s.createElement(r.Jtp,null),e&&s.createElement(i.WQq,null))),s.createElement(a,{show:e})))},l=n(2532),c=()=>s.createElement("div",{className:" absolute z-0 w-full"},s.createElement(l.S,{src:"../../images/mainbg.webp",alt:"",layout:"fullWidth",__imageData:n(5917)})),u=n(7909);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},d.apply(this,arguments)}var p={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},m=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=d({},p,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(e.stringsElement.children),r=s.length;if(r)for(var i=0;i<r;i+=1)e.strings.push(s[i].innerHTML.trim())}for(var a in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[a]=a;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},e}()),h=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s=e.substring(t).charAt(0);if("<"===s||"&"===s){var r;for(r="<"===s?">":";";e.substring(t+1).charAt(0)!==r&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s=e.substring(t).charAt(0);if(">"===s||";"===s){var r;for(r=">"===s?"<":"&";e.substring(t-1).charAt(0)!==r&&!(--t<0););t--}return t},e}()),f=function(){function e(e,t){m.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)},t.typewrite=function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=h.typeHtmlChars(e,t,n);var s=0,i=e.substring(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var a=1;a+=(i=/\d+/.exec(i)[0]).length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+a),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substring(t+r).charAt(0)&&(r++,!(t+r>e.length)););var o=e.substring(0,t),l=e.substring(o.length+1,t+r),c=e.substring(t+r+1);e=o+l+c,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=e.substring(0,t+=n);this.replaceText(s),this.typewrite(e,t)},t.doneTyping=function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))},t.backspace=function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=h.backSpaceHtmlChars(e,t,n);var s=e.substring(0,t);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&s===r.substring(0,t)?t:0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),s)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const g=()=>{const e=s.useRef(null);return s.useEffect((()=>{const t=new f(e.current,{strings:["craft unique solutions","develop scalable platforms","designs seamless experience"],typeSpeed:50,backSpeed:50,cursorChar:"/",loop:!0,backDelay:3e3});return()=>{t.destroy()}}),[]),s.createElement("div",{className:""},s.createElement("span",{ref:e}))};var y=e=>{const t=s.useRef(null),n=s.useRef(null),r=()=>{n.current&&n.current.style&&(n.current.style.opacity=""+(1-scrollY/300)),t.current&&t.current.style&&(t.current.style.paddingTop=scrollY+.5*innerHeight+"px")};return(0,s.useEffect)((()=>(window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)})),[]),s.createElement("div",{className:"pt-[50vh] absolute w-full z-10 ",ref:t},s.createElement("div",{className:" text-black relative flex flex-col "},s.createElement("div",{className:"opacity-100",ref:n},s.createElement("div",{className:"flex space-x-1 text-sm text-center justify-center"},s.createElement("div",{className:" font-livvic font-semibold"},"Hi, welcome to"),s.createElement("div",{className:" font-josefinSans font-bold"},"Avidity ",s.createElement("span",{className:" font-normal"},"Lab")),s.createElement("div",{className:" font-livvic"},"[uh-vi-duh-tee læb]"),s.createElement("div",{className:"mt-[3px]"},s.createElement(u.lST,null))),s.createElement("div",{className:" font-livvic text-lg font-bold text-center mt-4"},"A Digital Product Agency"),s.createElement("div",{className:" font-livvic font-bold text-xl  flex space-x-1 justify-center"},s.createElement("div",{className:" text-black text-opacity-50"},"that"),s.createElement(g,null)))))},v=n.p+"static/landingVideo-45ca67fcfb07cb1da0c3379635120e57.mp4";var b=()=>{const e=s.useRef(null),t=s.useRef(null);(0,s.useEffect)((()=>{n()}),[]);const n=()=>{if(e.current&&e.current.style){let t=80;if(scrollY>0){let e=scrollY/300,n=Math.ceil(1/e*10);n<80&&(t=n)}t<10&&(t=10),e.current.style.marginLeft=t+"px",e.current.style.marginRight=t+"px"}if(t.current&&t.current.style){let e=280;if(scrollY>0){let t=280+scrollY/313*100*1.9;e=t>=448?448:t}t.current.style.height=e+"px"}};return(0,s.useEffect)((()=>(window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)})),[]),s.createElement("div",{className:" pt-[85vh] flex justify-center mb-40"},s.createElement("div",{className:"relative w-full h-[448px] rounded-xl overflow-hidden mx-20 z-20",ref:e},s.createElement("div",{style:{position:"absolute",left:"50%"}},s.createElement("video",{autoPlay:!0,loop:!0,muted:!0,style:{position:"relative",height:280,maxWidth:"none",left:"-50%"},ref:t},s.createElement("source",{src:v,type:"video/mp4"})))))},w=n(5066);var E=e=>{let{}=e;return s.createElement("div",{className:"flex my-40 items-start font-livvic mx-4"},s.createElement("div",{className:" flex flex-1 justify-center items-center text-xs"},s.createElement(w.HGZ,null)," Who are we?"),s.createElement("div",{className:" flex-[2] text-sm font-semibold"},"A dedicated digital agency, firmly rooted in Indonesia since our establishment in 2024 — propelled by a vision to revolutionize the digital landscape. At our essence, we prioritize fostering enduring partnerships, recognizing that collaboration is pivotal to success in this dynamic industry."))};var x=e=>{let{number:t,title:n,description:r,IconComponent:i}=e;return s.createElement("div",{className:" bg-black mx-10 text-white h-[400px] rounded-3xl flex flex-col justify-center text-center px-6 space-y-3 relative"},s.createElement("div",{className:" bg-white h-9 w-9 rounded-full absolute right-4 top-4 flex justify-center items-center"},s.createElement(i,{className:" text-black",size:20})),s.createElement("div",{className:" font-livvic font-bold text-sm"},t),s.createElement("div",{className:" font-livvic font-bold text-sm"},n),s.createElement("div",{className:" font-satoshi  font-sm text-[#DEDEDE]"},r))},k=n(8027),C=n(9879);var S=e=>{let{}=e;const t=[{IconComponent:k.b9F,title:"Ideate",description:"Brainstorming is where the magic begins. We'll explore your vision, deciphering your ideas into actionable plans."},{IconComponent:C.M6J,title:"Design",description:"Design is the canvas upon which your dreams take shape. From wireframes to prototypes, we sculpt each element with precision and care, crafting experiences that captivate and inspire."},{title:"Develop",description:"Our commitment to transparency ensures you're kept informed every step of the way.",IconComponent:k.FSj},{IconComponent:k.uoG,title:"Launch",description:"Your digital product undergoes thorough testing to guarantee flawless performance."},{IconComponent:k.xdT,title:"Optimize",description:"We continually refine and enhance your digital presence, ensuring it remains at the forefront of innovation."}];return s.createElement("div",{className:"flex flex-col my-40 items-start font-livvic mx-4"},s.createElement("div",{className:"w-full text-lg font-bold text-center mb-10"},"WORK FLOW"),s.createElement("div",{className:"w-full text-sm font-semibold text-center"},"Our process to make sure you got what you want"),s.createElement("div",{className:" flex flex-col mt-20 space-y-24"},t.map(((e,t)=>s.createElement(x,{number:"0"+(t+1),title:e.title,description:e.description,IconComponent:e.IconComponent})))))};var N=e=>{let{question:t,answer:n}=e;const{0:r,1:i}=(0,s.useState)(!1);return s.createElement("div",{className:" border-b-2 border-solid border-gray-700 py-3 "},s.createElement("div",{className:" flex justify-between  items-center",onClick:()=>i((e=>!e))},s.createElement("div",null,t),s.createElement("div",null,r?s.createElement(k.iu5,null):s.createElement(k.OiG,null))),s.createElement("div",{className:"transition duration-150 ease-out hover:ease-in font-satoshi text-xs text-gray-500 overflow-hidden "+(r?"":"h-0")},n))};var O=()=>s.createElement("div",{className:"text-white bg-black rounded-t-[3rem] pt-10 px-4 z-20"},s.createElement("div",{className:" text-6xl font-semibold mb-10"},"FAQ"),[{question:"What separates Avidity from other software house or digital agencies?",answer:"At Avidity, we're dedicated to your success. With our experienced team, including hands-on cofounders and seasoned project directors, we ensure meticulous attention to detail and comprehensive design reviews. Transparency and open communication are key, guaranteeing a superior experience from start to finish. What sets us apart is our holistic approach, seamlessly integrating development expertise with branding and user experience. Our multidisciplinary teams ensure your software not only meets functional requirements but also reflects your brand identity and delivers an unparalleled user experience. We specialize in crafting scalable solutions aligned with your long-term business objectives, demonstrating our commitment to future-proofing your digital assets."},{question:"Do you work with clients in different timezones?",answer:"At Avidity, we excel at collaborating across time zones. With our globally distributed team, we've mastered remote collaboration, ensuring seamless interaction worldwide. Whether you're in New York, London, Sydney, or beyond, we accommodate diverse time preferences effortlessly. We've implemented robust communication and project management strategies to overcome time zone challenges. Leveraging various collaboration tools, we ensure constant connectivity and streamlined workflows, regardless of geographical barriers. Our commitment to clear and timely communication ensures exceptional results, regardless of distance. Embracing global diversity enriches our capabilities and deepens our understanding of your unique needs."},{question:"How much does partnership with Avidity for a development project?",answer:"At Avidity, we understand that each partnership is unique, and we tailor our engagement models to suit your specific requirements and budgetary considerations. We offer flexible pricing structures, including time & materials, fixed fee, and retainer-based arrangements. Following in-depth discussions and project briefings, our team collaborates with you to determine the most suitable engagement model for your needs. We then provide a customized proposal outlining the project timeline, scope, and estimated cost, ensuring transparency and alignment every step of the way."},{question:"Do Avidity work with startups?",answer:"Absolutely, Avidity is proud to collaborate with startups at every stage of their journey. We're passionate about empowering early-stage ventures to realize their vision and achieve sustainable growth through innovative technology solutions. Our expertise extends beyond mere development; we offer strategic guidance and support to help startups navigate the complexities of their respective industries and emerge as industry leaders. From conceptualization to launch and beyond, we've partnered with numerous startups across various sectors, providing tailored solutions that propel them toward success. Whether you're a fledgling startup with a groundbreaking idea or a scaling company seeking to optimize your digital presence, we're here to help."}].map(((e,t)=>s.createElement(N,{key:t,question:e.question,answer:e.answer}))));var P=()=>s.createElement("main",null,s.createElement(c,null),s.createElement(o,null),s.createElement(y,null),s.createElement(b,null),s.createElement(E,null),s.createElement(S,null),s.createElement(O,null));const L=()=>s.createElement(s.Fragment,null,s.createElement("title",null,"Avidity Lab"),s.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),s.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"use-credentials"}),s.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",rel:"stylesheet"}),s.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap",rel:"stylesheet"}),s.createElement("link",{href:"/fonts/satoshi.css",rel:"stylesheet"}))},2225:function(e,t,n){n.d(t,{k5:function(){return m}});var s=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=s.createContext&&s.createContext(r),a=["attr","size","title"];function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return e&&e.map(((e,t)=>s.createElement(e.tag,u({key:t},e.attr),p(e.child))))}function m(e){return t=>s.createElement(h,l({attr:u({},e.attr)},t),p(e.child))}function h(e){var t=t=>{var n,{attr:r,size:i,title:c}=e,d=o(e,a),p=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),s.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),e.children)};return void 0!==i?s.createElement(i.Consumer,null,(e=>t(e))):t(r)}},5917:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9deb88e84f6d918b3aee14630d23390e/83805/mainbg.webp","srcSet":"/static/9deb88e84f6d918b3aee14630d23390e/4f03f/mainbg.webp 750w,\\n/static/9deb88e84f6d918b3aee14630d23390e/4f506/mainbg.webp 1080w,\\n/static/9deb88e84f6d918b3aee14630d23390e/83805/mainbg.webp 1200w","sizes":"100vw"},"sources":[]},"width":1,"height":1}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c0bddbc65d453c1e17b8.js.map