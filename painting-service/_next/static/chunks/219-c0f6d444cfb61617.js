(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{6145:function(e,t,r){"use strict";r.r(t),r.d(t,{PrismicNextImage:function(){return u}});var o=r(7437),n=r(6691),i=r.n(n);let a=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),l=(e,t)=>{let r=new URL(e);for(let e in t){let o=a(e),n=t[e];void 0===n?r.searchParams.delete(o):Array.isArray(n)?r.searchParams.set(o,n.join(",")):r.searchParams.set(o,`${n}`)}let o=r.searchParams.get("s");return o&&(r.searchParams.delete("s"),r.searchParams.append("s",o)),r.toString()},s=e=>{let t=new URL(e.src),r={fit:t.searchParams.get("fit")||"max",w:e.width,h:void 0};return e.quality&&(r.q=e.quality),l(e.src,r)};var c=r(427);let d=e=>{if("number"==typeof e||void 0===e)return e;{let t=Number.parseInt(e);if(Number.isNaN(t))return;return t}},u=({field:e,imgixParams:t={},alt:r,fallbackAlt:n,fill:a,width:u,height:f,fallback:p=null,...m})=>{if(!(0,c.S)(e))return(0,o.jsx)(o.Fragment,{children:p});{for(let e in t)null===t[e]&&(t[e]=void 0);let c=l(e.url,t),p=e.dimensions.width/e.dimensions.height,g=d(u),b=d(f),h=g??e.dimensions.width,v=b??e.dimensions.height;null!=g&&null==b?v=g/p:null==g&&null!=b&&(h=b*p);let y=r??(e.alt||n),w=i();return"default"in w&&(w=w.default),(0,o.jsx)(w,{src:c,width:a?void 0:h,height:a?void 0:v,alt:y,fill:a,loader:s,...m})}}},427:function(e,t,r){"use strict";r.d(t,{S:function(){return n},p:function(){return i}});let o=e=>null!=e,n=e=>o(e)&&!!e.url,i=e=>o(e)&&("id"in e||"url"in e)},991:function(e,t,r){"use strict";r.d(t,{ZP:function(){return s}});var o=r(7437),n=r(2265),i=r(3986);let a={0:100},l=[540,750,1e3,1500,2200,3e3];function s(e){let{src:t,sizes:r=a,sources:s=l,format:c="jpeg",alt:d="",lazy:u={blur:15,resize:"20x"},quality:f="lighter",classes:p,width:m="100%",height:g="100%",strategy:b="lazy",draggable:h,onLoad:v,style:y}=e,[w,x]=(0,n.useState)(!1),[_,k]=(0,n.useState)(!1),j=(0,n.useRef)(null),P=(0,i.m)("block",null==p?void 0:p.picture),C=(0,i.m)("object-cover",null==p?void 0:p.img),z=t.includes("https://")?null:"https://ucarecdn.com/".concat(t,"/"),S=[];if(Object.keys(r).forEach((e,t)=>{let o=parseInt(e);if(0===o)return;let n=r[o],i=n;i>100&&(i=100),i<0&&(i=0);let a="(max-width: ".concat(o,"px) ").concat(i,"vw");S.push(a)}),void 0!==r[0]){let e=r[0];e>100&&(e=100),e<0&&(e=0),S.push("".concat(e,"vw"))}let O=s.map(e=>"".concat(z,"-/quality/").concat(f,"/-/format/auto/-/resize/").concat(e,"x/ ").concat(e,"w")),E="".concat(z,"-/format/auto/-/preview/-/quality/lightest/-/blur/").concat(u.blur,"/-/resize/").concat(u.resize,"/"),I="".concat(z,"-/format/").concat(c,"/-/preview/-/quality/lightest/");function M(e){x(!0),setTimeout(()=>{k(!0)},350),void 0!==v&&v(e)}(0,n.useEffect)(()=>{var e;(null===(e=j.current)||void 0===e?void 0:e.complete)&&M(j.current)},[]);let N={style:{width:m,height:g}};return(void 0!==h&&(N.draggable=h),void 0!==y&&(N.style={...N.style,...y}),z)?(0,o.jsxs)("picture",{className:(0,i.m)(P,"relative"),style:{height:g,width:m},children:[!_&&(0,o.jsx)("img",{...N,alt:d,className:(0,i.m)(C,"absolute transition duration-300 ease-in-out",w?"opacity-0":"opacity-100"),height:g,width:m,loading:b,decoding:"async",src:E}),(0,o.jsx)("img",{ref:j,...N,alt:d,className:(0,i.m)(C,"transition duration-300 ease-in-out",w?"opacity-100":"opacity-0"),loading:b,height:g,width:m,decoding:"async",sizes:S.join(", "),srcSet:O.join(", "),src:I,onLoad:M})]}):(0,o.jsx)("p",{children:"Proxy URLs are not supported yet"})}},3222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let o=r(1024),n=r(8533),i=n._(r(2265)),a=r(4887),l=o._(r(2912)),s=r(2301),c=r(7709),d=r(9469);r(7873);let u=r(2706),f=o._(r(6515)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,o,n,i){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function g(e){let[t,r]=i.version.split("."),o=parseInt(t,10),n=parseInt(r,10);return o>18||18===o&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:o,sizes:n,height:a,width:l,decoding:s,className:c,style:d,fetchPriority:u,placeholder:f,loading:p,unoptimized:b,fill:h,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:x,onLoad:_,onError:k,...j}=e;return i.default.createElement("img",{...j,...g(u),loading:p,width:l,height:a,decoding:s,"data-nimg":h?"fill":"1",className:c,style:d,sizes:n,srcSet:o,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,f,v,y,w,b))},[r,f,v,y,w,k,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,v,y,w,b)},onError:e=>{x(!0),"blur"===f&&w(!0),k&&k(e)}})});function h(e){let{isAppRouter:t,imgAttributes:r}=e,o={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t?((0,a.preload)(r.src,o),null):i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...o}))}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(u.RouterContext),o=(0,i.useContext)(d.ImageConfigContext),n=(0,i.useMemo)(()=>{let e=p||o||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[o]),{onLoad:a,onLoadingComplete:l}=e,m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let[v,y]=(0,i.useState)(!1),[w,x]=(0,i.useState)(!1),{props:_,meta:k}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:w});return i.default.createElement(i.default.Fragment,null,i.default.createElement(b,{..._,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:x,ref:t}),k.priority?i.default.createElement(h,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let o=r(1024),n=o._(r(2265)),i=n.default.createContext({})},8551:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:o=!1}=void 0===e?{}:e;return t||r&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(7873);let o=r(9540),n=r(7709);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:b,width:h,height:v,fill:y=!1,style:w,onLoad:x,onLoadingComplete:_,placeholder:k="empty",blurDataURL:j,fetchPriority:P,layout:C,objectFit:z,objectPosition:S,lazyBoundary:O,lazyRoot:E,...I}=e,{imgConf:M,showAltText:N,blurComplete:R,defaultLoader:A}=t,G=M||n.imageConfigDefault;if("allSizes"in G)l=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);l={...G,allSizes:e,deviceSizes:t}}let L=I.loader||A;delete I.loader,delete I.srcSet;let T="__next_img_default"in L;if(T){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...o}=t;return e(o)}}if(C){"fill"===C&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let U="",D=a(h),W=a(v);if("object"==typeof(r=d)&&(i(r)||void 0!==r.src)){let e=i(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,j=j||e.blurDataURL,U=e.src,!y){if(D||W){if(D&&!W){let t=D/e.width;W=Math.round(e.height*t)}else if(!D&&W){let t=W/e.height;D=Math.round(e.width*t)}}else D=e.width,W=e.height}}let $=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,$=!1),l.unoptimized&&(f=!0),T&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let q=a(b),F=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:S}:{},N?{}:{color:"transparent"},w),B="blur"===k&&j&&!R?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:D,heightInt:W,blurWidth:s,blurHeight:c,blurDataURL:j,objectFit:F.objectFit})+'")'}:{},V=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:i,sizes:a,loader:l}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let i=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:i,kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,o)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===c?e:o+1)+c).join(", "),src:l({config:t,src:r,quality:i,width:s[d]})}}({config:l,src:d,unoptimized:f,width:D,quality:q,sizes:u,loader:L}),H={...I,loading:$?"lazy":m,fetchPriority:P,width:D,height:W,decoding:"async",className:g,style:{...F,...B},sizes:V.sizes,srcSet:V.srcSet,src:V.src},Y={unoptimized:f,priority:p,placeholder:k,fill:y};return{props:H,meta:Y}}},2912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return m}});let o=r(1024),n=r(8533),i=n._(r(2265)),a=o._(r(2378)),l=r(7555),s=r(1330),c=r(8551);function d(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7873);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(u,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,o={};return n=>{let i=!0,a=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){a=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?i=!1:t.add(n.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=n.props[t],r=o[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),o[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:o})})}let m=function(e){let{children:t}=e,r=(0,i.useContext)(l.AmpStateContext),o=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,c.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9540:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:i,objectFit:a}=e,l=o||t,s=n||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(o&&n?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let o=r(1024),n=o._(r(2265)),i=r(7709),a=n.default.createContext(i.imageConfigDefault)},7709:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return o}});let r=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return s}});let o=r(1024),n=r(2301),i=r(7873),a=r(3222),l=o._(r(6515)),s=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=a.Image},6515:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},2706:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let o=r(1024),n=o._(r(2265)),i=n.default.createContext(null)},2378:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let o=r(8533),n=o._(r(2265)),i=n.useLayoutEffect,a=n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,i={},c=null,d=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,o)&&!s.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)},3986:function(e,t,r){"use strict";r.d(t,{m:function(){return N}});var o=/^\[(.+)\]$/;function n(e,t){var r=e;return t.split("-").forEach(function(e){r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}var i=/\s+/;function a(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){if("string"==typeof t)return t;for(var r,o="",n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);return o}(e))&&(o&&(o+=" "),o+=t);return o}function l(e){var t=function(t){return t[e]||[]};return t.isThemeGetter=!0,t}var s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(e){return w(e)||d.has(e)||c.test(e)||g(e)}function g(e){return z(e,"length",S)}function b(e){return z(e,"size",O)}function h(e){return z(e,"position",O)}function v(e){return z(e,"url",E)}function y(e){return z(e,"number",w)}function w(e){return!Number.isNaN(Number(e))}function x(e){return e.endsWith("%")&&w(e.slice(0,-1))}function _(e){return I(e)||z(e,"number",I)}function k(e){return s.test(e)}function j(){return!0}function P(e){return u.test(e)}function C(e){return z(e,"",M)}function z(e,t,r){var o=s.exec(e);return!!o&&(o[1]?o[1]===t:r(o[2]))}function S(e){return f.test(e)}function O(){return!1}function E(e){return e.startsWith("url(")}function I(e){return Number.isInteger(Number(e))}function M(e){return p.test(e)}var N=function(){for(var e,t,r,l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];var d=function(i){var a=s[0];return t=(e=function(e){var t,r,i,a,l,s,c,d,u,f,p;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,r=new Map,o=new Map;function n(n,i){r.set(n,i),++t>e&&(t=0,o=r,r=new Map)}return{get:function(e){var t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set:function(e,t){r.has(e)?r.set(e,t):n(e,t)}}}(e.cacheSize),splitModifiers:(r=1===(t=e.separator||":").length,i=t[0],a=t.length,function(e){for(var o,n=[],l=0,s=0,c=0;c<e.length;c++){var d=e[c];if(0===l){if(d===i&&(r||e.slice(c,c+a)===t)){n.push(e.slice(s,c)),s=c+a;continue}if("/"===d){o=c;continue}}"["===d?l++:"]"===d&&l--}var u=0===n.length?e:e.substring(s),f=u.startsWith("!"),p=f?u.substring(1):u;return{modifiers:n,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:o&&o>s?o-s:void 0}}),...(d=e.theme,u=e.prefix,f={nextPart:new Map,validators:[]},(p=Object.entries(e.classGroups),u?p.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):p).forEach(function(e){var t=e[0];(function e(t,r,o,i){t.forEach(function(t){if("string"==typeof t){(""===t?r:n(r,t)).classGroupId=o;return}if("function"==typeof t){if(t.isThemeGetter){e(t(i),r,o,i);return}r.validators.push({validator:t,classGroupId:o});return}Object.entries(t).forEach(function(t){var a=t[0];e(t[1],n(r,a),o,i)})})})(e[1],f,t,d)}),l=e.conflictingClassGroups,c=void 0===(s=e.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(t,r){if(0===t.length)return r.classGroupId;var o=t[0],n=r.nextPart.get(o),i=n?e(t.slice(1),n):void 0;if(i)return i;if(0!==r.validators.length){var a=t.join("-");return r.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(t,f)||function(e){if(o.test(e)){var t=o.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){var r=l[e]||[];return t&&c[e]?[].concat(r,c[e]):r}})}}(s.slice(1).reduce(function(e,t){return t(e)},a()))).cache.get,r=e.cache.set,d=u,u(i)};function u(o){var n,a,l,s,c,d=t(o);if(d)return d;var u=(a=(n=e).splitModifiers,l=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,o.trim().split(i).map(function(e){var t=a(e),r=t.modifiers,o=t.hasImportantModifier,n=t.baseClassName,i=t.maybePostfixModifierPosition,s=l(i?n.substring(0,i):n),c=!!i;if(!s){if(!i||!(s=l(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=(function(e){if(e.length<=1)return e;var t=[],r=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,r.sort().concat([e])),r=[]):r.push(e)}),t.push.apply(t,r.sort()),t})(r).join(":");return{isTailwindClass:!0,modifierId:o?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,r=e.classGroupId,o=e.hasPostfixModifier,n=t+r;return!c.has(n)&&(c.add(n),s(r,o).forEach(function(e){return c.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return r(o,u),u}return function(){return d(a.apply(null,arguments))}}(function(){var e=l("colors"),t=l("spacing"),r=l("blur"),o=l("brightness"),n=l("borderColor"),i=l("borderRadius"),a=l("borderSpacing"),s=l("borderWidth"),c=l("contrast"),d=l("grayscale"),u=l("hueRotate"),f=l("invert"),p=l("gap"),z=l("gradientColorStops"),S=l("gradientColorStopPositions"),O=l("inset"),E=l("margin"),I=l("opacity"),M=l("padding"),N=l("saturate"),R=l("scale"),A=l("sepia"),G=l("skew"),L=l("space"),T=l("translate"),U=function(){return["auto","contain","none"]},D=function(){return["auto","hidden","clip","visible","scroll"]},W=function(){return["auto",k,t]},$=function(){return[k,t]},q=function(){return["",m]},F=function(){return["auto",w,k]},B=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},V=function(){return["solid","dashed","dotted","double","none"]},H=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Y=function(){return["start","end","center","between","around","evenly","stretch"]},J=function(){return["","0",k]},Z=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},K=function(){return[w,y]},Q=function(){return[w,k]};return{cacheSize:500,theme:{colors:[j],spacing:[m],blur:["none","",P,k],brightness:K(),borderColor:[e],borderRadius:["none","","full",P,k],borderSpacing:$(),borderWidth:q(),contrast:K(),grayscale:J(),hueRotate:Q(),invert:J(),gap:$(),gradientColorStops:[e],gradientColorStopPositions:[x,g],inset:W(),margin:W(),opacity:K(),padding:$(),saturate:K(),scale:K(),sepia:J(),skew:Q(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[P]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(B(),[k])}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[O]}],"inset-x":[{"inset-x":[O]}],"inset-y":[{"inset-y":[O]}],start:[{start:[O]}],end:[{end:[O]}],top:[{top:[O]}],right:[{right:[O]}],bottom:[{bottom:[O]}],left:[{left:[O]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",_]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",_]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",_]},k]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[_]},k]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(Y())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(Y(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Y(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[E]}],mx:[{mx:[E]}],my:[{my:[E]}],ms:[{ms:[E]}],me:[{me:[E]}],mt:[{mt:[E]}],mr:[{mr:[E]}],mb:[{mb:[E]}],ml:[{ml:[E]}],"space-x":[{"space-x":[L]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[L]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",k,t]}],"min-w":[{"min-w":["min","max","fit",k,m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[P]},P,k]}],h:[{h:[k,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",k,m]}],"max-h":[{"max-h":[k,t,"min","max","fit"]}],"font-size":[{text:["base",P,g]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",w,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,m]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[I]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(V(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",k,m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[I]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(B(),[h])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",b]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},v]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[z]}],"gradient-via":[{via:[z]}],"gradient-to":[{to:[z]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[I]}],"border-style":[{border:[].concat(V(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[I]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(V())}],"outline-offset":[{"outline-offset":[k,m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[I]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",P,C]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[I]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",P,k]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[N]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[I]}],"backdrop-saturate":[{"backdrop-saturate":[N]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[_,k]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[G]}],"skew-y":[{"skew-y":[G]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);