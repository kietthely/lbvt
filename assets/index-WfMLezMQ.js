function XI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function S0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var KE={exports:{}},Vh={},ZE={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=Symbol.for("react.element"),jI=Symbol.for("react.portal"),YI=Symbol.for("react.fragment"),$I=Symbol.for("react.strict_mode"),qI=Symbol.for("react.profiler"),KI=Symbol.for("react.provider"),ZI=Symbol.for("react.context"),QI=Symbol.for("react.forward_ref"),JI=Symbol.for("react.suspense"),eN=Symbol.for("react.memo"),tN=Symbol.for("react.lazy"),sS=Symbol.iterator;function nN(n){return n===null||typeof n!="object"?null:(n=sS&&n[sS]||n["@@iterator"],typeof n=="function"?n:null)}var QE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},JE=Object.assign,ew={};function Zl(n,e,t){this.props=n,this.context=e,this.refs=ew,this.updater=t||QE}Zl.prototype.isReactComponent={};Zl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Zl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function tw(){}tw.prototype=Zl.prototype;function M0(n,e,t){this.props=n,this.context=e,this.refs=ew,this.updater=t||QE}var E0=M0.prototype=new tw;E0.constructor=M0;JE(E0,Zl.prototype);E0.isPureReactComponent=!0;var aS=Array.isArray,nw=Object.prototype.hasOwnProperty,w0={current:null},iw={key:!0,ref:!0,__self:!0,__source:!0};function rw(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nw.call(e,i)&&!iw.hasOwnProperty(i)&&(r[i]=e[i]);var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];r.children=c}if(n&&n.defaultProps)for(i in u=n.defaultProps,u)r[i]===void 0&&(r[i]=u[i]);return{$$typeof:Bc,type:n,key:s,ref:o,props:r,_owner:w0.current}}function iN(n,e){return{$$typeof:Bc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function T0(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bc}function rN(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var oS=/\/+/g;function Pm(n,e){return typeof n=="object"&&n!==null&&n.key!=null?rN(""+n.key):e.toString(36)}function Vd(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bc:case jI:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Pm(o,0):i,aS(r)?(t="",n!=null&&(t=n.replace(oS,"$&/")+"/"),Vd(r,e,t,"",function(f){return f})):r!=null&&(T0(r)&&(r=iN(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(oS,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",aS(n))for(var u=0;u<n.length;u++){s=n[u];var c=i+Pm(s,u);o+=Vd(s,e,t,c,r)}else if(c=nN(n),typeof c=="function")for(n=c.call(n),u=0;!(s=n.next()).done;)s=s.value,c=i+Pm(s,u++),o+=Vd(s,e,t,c,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vf(n,e,t){if(n==null)return n;var i=[],r=0;return Vd(n,i,"","",function(s){return e.call(t,s,r++)}),i}function sN(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var pi={current:null},Gd={transition:null},aN={ReactCurrentDispatcher:pi,ReactCurrentBatchConfig:Gd,ReactCurrentOwner:w0};bt.Children={map:Vf,forEach:function(n,e,t){Vf(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Vf(n,function(){e++}),e},toArray:function(n){return Vf(n,function(e){return e})||[]},only:function(n){if(!T0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};bt.Component=Zl;bt.Fragment=YI;bt.Profiler=qI;bt.PureComponent=M0;bt.StrictMode=$I;bt.Suspense=JI;bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aN;bt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=JE({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=w0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var u=n.type.defaultProps;for(c in e)nw.call(e,c)&&!iw.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=t;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:Bc,type:n.type,key:r,ref:s,props:i,_owner:o}};bt.createContext=function(n){return n={$$typeof:ZI,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:KI,_context:n},n.Consumer=n};bt.createElement=rw;bt.createFactory=function(n){var e=rw.bind(null,n);return e.type=n,e};bt.createRef=function(){return{current:null}};bt.forwardRef=function(n){return{$$typeof:QI,render:n}};bt.isValidElement=T0;bt.lazy=function(n){return{$$typeof:tN,_payload:{_status:-1,_result:n},_init:sN}};bt.memo=function(n,e){return{$$typeof:eN,type:n,compare:e===void 0?null:e}};bt.startTransition=function(n){var e=Gd.transition;Gd.transition={};try{n()}finally{Gd.transition=e}};bt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};bt.useCallback=function(n,e){return pi.current.useCallback(n,e)};bt.useContext=function(n){return pi.current.useContext(n)};bt.useDebugValue=function(){};bt.useDeferredValue=function(n){return pi.current.useDeferredValue(n)};bt.useEffect=function(n,e){return pi.current.useEffect(n,e)};bt.useId=function(){return pi.current.useId()};bt.useImperativeHandle=function(n,e,t){return pi.current.useImperativeHandle(n,e,t)};bt.useInsertionEffect=function(n,e){return pi.current.useInsertionEffect(n,e)};bt.useLayoutEffect=function(n,e){return pi.current.useLayoutEffect(n,e)};bt.useMemo=function(n,e){return pi.current.useMemo(n,e)};bt.useReducer=function(n,e,t){return pi.current.useReducer(n,e,t)};bt.useRef=function(n){return pi.current.useRef(n)};bt.useState=function(n){return pi.current.useState(n)};bt.useSyncExternalStore=function(n,e,t){return pi.current.useSyncExternalStore(n,e,t)};bt.useTransition=function(){return pi.current.useTransition()};bt.version="18.2.0";ZE.exports=bt;var be=ZE.exports;const b0=S0(be),oN=XI({__proto__:null,default:b0},[be]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lN=be,uN=Symbol.for("react.element"),cN=Symbol.for("react.fragment"),fN=Object.prototype.hasOwnProperty,dN=lN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hN={key:!0,ref:!0,__self:!0,__source:!0};function sw(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fN.call(e,i)&&!hN.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uN,type:n,key:s,ref:o,props:r,_owner:dN.current}}Vh.Fragment=cN;Vh.jsx=sw;Vh.jsxs=sw;KE.exports=Vh;var De=KE.exports,$g={},aw={exports:{}},zi={},ow={exports:{}},lw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(W,K){var Y=W.length;W.push(K);e:for(;0<Y;){var Me=Y-1>>>1,ze=W[Me];if(0<r(ze,K))W[Me]=K,W[Y]=ze,Y=Me;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var K=W[0],Y=W.pop();if(Y!==K){W[0]=Y;e:for(var Me=0,ze=W.length,gt=ze>>>1;Me<gt;){var se=2*(Me+1)-1,xe=W[se],Ce=se+1,fe=W[Ce];if(0>r(xe,Y))Ce<ze&&0>r(fe,xe)?(W[Me]=fe,W[Ce]=Y,Me=Ce):(W[Me]=xe,W[se]=Y,Me=se);else if(Ce<ze&&0>r(fe,Y))W[Me]=fe,W[Ce]=Y,Me=Ce;else break e}}return K}function r(W,K){var Y=W.sortIndex-K.sortIndex;return Y!==0?Y:W.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,u=o.now();n.unstable_now=function(){return o.now()-u}}var c=[],f=[],h=1,p=null,m=3,v=!1,S=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var K=t(f);K!==null;){if(K.callback===null)i(f);else if(K.startTime<=W)i(f),K.sortIndex=K.expirationTime,e(c,K);else break;K=t(f)}}function C(W){if(E=!1,x(W),!S)if(t(c)!==null)S=!0,me(U);else{var K=t(f);K!==null&&ge(C,K.startTime-W)}}function U(W,K){S=!1,E&&(E=!1,g(z),z=-1),v=!0;var Y=m;try{for(x(K),p=t(c);p!==null&&(!(p.expirationTime>K)||W&&!N());){var Me=p.callback;if(typeof Me=="function"){p.callback=null,m=p.priorityLevel;var ze=Me(p.expirationTime<=K);K=n.unstable_now(),typeof ze=="function"?p.callback=ze:p===t(c)&&i(c),x(K)}else i(c);p=t(c)}if(p!==null)var gt=!0;else{var se=t(f);se!==null&&ge(C,se.startTime-K),gt=!1}return gt}finally{p=null,m=Y,v=!1}}var O=!1,I=null,z=-1,A=5,w=-1;function N(){return!(n.unstable_now()-w<A)}function V(){if(I!==null){var W=n.unstable_now();w=W;var K=!0;try{K=I(!0,W)}finally{K?k():(O=!1,I=null)}}else O=!1}var k;if(typeof M=="function")k=function(){M(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Z=ae.port2;ae.port1.onmessage=V,k=function(){Z.postMessage(null)}}else k=function(){_(V,0)};function me(W){I=W,O||(O=!0,k())}function ge(W,K){z=_(function(){W(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){S||v||(S=!0,me(U))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(c)},n.unstable_next=function(W){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Y=m;m=K;try{return W()}finally{m=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,K){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=m;m=W;try{return K()}finally{m=Y}},n.unstable_scheduleCallback=function(W,K,Y){var Me=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Me+Y:Me):Y=Me,W){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=Y+ze,W={id:h++,callback:K,priorityLevel:W,startTime:Y,expirationTime:ze,sortIndex:-1},Y>Me?(W.sortIndex=Y,e(f,W),t(c)===null&&W===t(f)&&(E?(g(z),z=-1):E=!0,ge(C,Y-Me))):(W.sortIndex=ze,e(c,W),S||v||(S=!0,me(U))),W},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(W){var K=m;return function(){var Y=m;m=K;try{return W.apply(this,arguments)}finally{m=Y}}}})(lw);ow.exports=lw;var pN=ow.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uw=be,Bi=pN;function Se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cw=new Set,dc={};function xo(n,e){Nl(n,e),Nl(n+"Capture",e)}function Nl(n,e){for(dc[n]=e,n=0;n<e.length;n++)cw.add(e[n])}var Ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qg=Object.prototype.hasOwnProperty,mN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lS={},uS={};function gN(n){return qg.call(uS,n)?!0:qg.call(lS,n)?!1:mN.test(n)?uS[n]=!0:(lS[n]=!0,!1)}function vN(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function _N(n,e,t,i){if(e===null||typeof e>"u"||vN(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mi(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Hn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Hn[n]=new mi(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Hn[e]=new mi(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Hn[n]=new mi(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Hn[n]=new mi(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Hn[n]=new mi(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Hn[n]=new mi(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Hn[n]=new mi(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Hn[n]=new mi(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Hn[n]=new mi(n,5,!1,n.toLowerCase(),null,!1,!1)});var A0=/[\-:]([a-z])/g;function C0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(A0,C0);Hn[e]=new mi(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(A0,C0);Hn[e]=new mi(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(A0,C0);Hn[e]=new mi(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Hn[n]=new mi(n,1,!1,n.toLowerCase(),null,!1,!1)});Hn.xlinkHref=new mi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Hn[n]=new mi(n,1,!1,n.toLowerCase(),null,!0,!0)});function R0(n,e,t,i){var r=Hn.hasOwnProperty(e)?Hn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_N(e,t,r,i)&&(t=null),i||r===null?gN(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Rs=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gf=Symbol.for("react.element"),al=Symbol.for("react.portal"),ol=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),Kg=Symbol.for("react.profiler"),fw=Symbol.for("react.provider"),dw=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Qg=Symbol.for("react.suspense_list"),I0=Symbol.for("react.memo"),Js=Symbol.for("react.lazy"),hw=Symbol.for("react.offscreen"),cS=Symbol.iterator;function Cu(n){return n===null||typeof n!="object"?null:(n=cS&&n[cS]||n["@@iterator"],typeof n=="function"?n:null)}var un=Object.assign,Lm;function Wu(n){if(Lm===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Lm=e&&e[1]||""}return`
`+Lm+n}var Im=!1;function Nm(n,e){if(!n||Im)return"";Im=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var i=f}Reflect.construct(n,[],e)}else{try{e.call()}catch(f){i=f}n.call(e.prototype)}else{try{throw Error()}catch(f){i=f}n()}}catch(f){if(f&&i&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,u=s.length-1;1<=o&&0<=u&&r[o]!==s[u];)u--;for(;1<=o&&0<=u;o--,u--)if(r[o]!==s[u]){if(o!==1||u!==1)do if(o--,u--,0>u||r[o]!==s[u]){var c=`
`+r[o].replace(" at new "," at ");return n.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",n.displayName)),c}while(1<=o&&0<=u);break}}}finally{Im=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Wu(n):""}function yN(n){switch(n.tag){case 5:return Wu(n.type);case 16:return Wu("Lazy");case 13:return Wu("Suspense");case 19:return Wu("SuspenseList");case 0:case 2:case 15:return n=Nm(n.type,!1),n;case 11:return n=Nm(n.type.render,!1),n;case 1:return n=Nm(n.type,!0),n;default:return""}}function Jg(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ol:return"Fragment";case al:return"Portal";case Kg:return"Profiler";case P0:return"StrictMode";case Zg:return"Suspense";case Qg:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dw:return(n.displayName||"Context")+".Consumer";case fw:return(n._context.displayName||"Context")+".Provider";case L0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I0:return e=n.displayName||null,e!==null?e:Jg(n.type)||"Memo";case Js:e=n._payload,n=n._init;try{return Jg(n(e))}catch{}}return null}function xN(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jg(e);case 8:return e===P0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wa(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pw(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SN(n){var e=pw(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wf(n){n._valueTracker||(n._valueTracker=SN(n))}function mw(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=pw(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function rh(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ev(n,e){var t=e.checked;return un({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function fS(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=wa(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gw(n,e){e=e.checked,e!=null&&R0(n,"checked",e,!1)}function tv(n,e){gw(n,e);var t=wa(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?nv(n,e.type,t):e.hasOwnProperty("defaultValue")&&nv(n,e.type,wa(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function dS(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function nv(n,e,t){(e!=="number"||rh(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Xu=Array.isArray;function Ml(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+wa(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function iv(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return un({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function hS(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Se(92));if(Xu(t)){if(1<t.length)throw Error(Se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:wa(t)}}function vw(n,e){var t=wa(e.value),i=wa(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function pS(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function _w(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rv(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?_w(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xf,yw=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Xf=Xf||document.createElement("div"),Xf.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xf.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function hc(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Zu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MN=["Webkit","ms","Moz","O"];Object.keys(Zu).forEach(function(n){MN.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zu[e]=Zu[n]})});function xw(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Zu.hasOwnProperty(n)&&Zu[n]?(""+e).trim():e+"px"}function Sw(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=xw(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var EN=un({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sv(n,e){if(e){if(EN[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function av(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ov=null;function N0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lv=null,El=null,wl=null;function mS(n){if(n=Vc(n)){if(typeof lv!="function")throw Error(Se(280));var e=n.stateNode;e&&(e=Yh(e),lv(n.stateNode,n.type,e))}}function Mw(n){El?wl?wl.push(n):wl=[n]:El=n}function Ew(){if(El){var n=El,e=wl;if(wl=El=null,mS(n),e)for(n=0;n<e.length;n++)mS(e[n])}}function ww(n,e){return n(e)}function Tw(){}var Dm=!1;function bw(n,e,t){if(Dm)return n(e,t);Dm=!0;try{return ww(n,e,t)}finally{Dm=!1,(El!==null||wl!==null)&&(Tw(),Ew())}}function pc(n,e){var t=n.stateNode;if(t===null)return null;var i=Yh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Se(231,e,typeof t));return t}var uv=!1;if(Ss)try{var Ru={};Object.defineProperty(Ru,"passive",{get:function(){uv=!0}}),window.addEventListener("test",Ru,Ru),window.removeEventListener("test",Ru,Ru)}catch{uv=!1}function wN(n,e,t,i,r,s,o,u,c){var f=Array.prototype.slice.call(arguments,3);try{e.apply(t,f)}catch(h){this.onError(h)}}var Qu=!1,sh=null,ah=!1,cv=null,TN={onError:function(n){Qu=!0,sh=n}};function bN(n,e,t,i,r,s,o,u,c){Qu=!1,sh=null,wN.apply(TN,arguments)}function AN(n,e,t,i,r,s,o,u,c){if(bN.apply(this,arguments),Qu){if(Qu){var f=sh;Qu=!1,sh=null}else throw Error(Se(198));ah||(ah=!0,cv=f)}}function So(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Aw(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function gS(n){if(So(n)!==n)throw Error(Se(188))}function CN(n){var e=n.alternate;if(!e){if(e=So(n),e===null)throw Error(Se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return gS(r),n;if(s===i)return gS(r),e;s=s.sibling}throw Error(Se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,u=r.child;u;){if(u===t){o=!0,t=r,i=s;break}if(u===i){o=!0,i=r,t=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===t){o=!0,t=s,i=r;break}if(u===i){o=!0,i=s,t=r;break}u=u.sibling}if(!o)throw Error(Se(189))}}if(t.alternate!==i)throw Error(Se(190))}if(t.tag!==3)throw Error(Se(188));return t.stateNode.current===t?n:e}function Cw(n){return n=CN(n),n!==null?Rw(n):null}function Rw(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Rw(n);if(e!==null)return e;n=n.sibling}return null}var Pw=Bi.unstable_scheduleCallback,vS=Bi.unstable_cancelCallback,RN=Bi.unstable_shouldYield,PN=Bi.unstable_requestPaint,yn=Bi.unstable_now,LN=Bi.unstable_getCurrentPriorityLevel,D0=Bi.unstable_ImmediatePriority,Lw=Bi.unstable_UserBlockingPriority,oh=Bi.unstable_NormalPriority,IN=Bi.unstable_LowPriority,Iw=Bi.unstable_IdlePriority,Gh=null,Wr=null;function NN(n){if(Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot(Gh,n,void 0,(n.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:UN,DN=Math.log,ON=Math.LN2;function UN(n){return n>>>=0,n===0?32:31-(DN(n)/ON|0)|0}var jf=64,Yf=4194304;function ju(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function lh(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var u=o&~r;u!==0?i=ju(u):(s&=o,s!==0&&(i=ju(s)))}else o=t&~r,o!==0?i=ju(o):s!==0&&(i=ju(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Tr(e),r=1<<t,i|=n[t],e&=~r;return i}function kN(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FN(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Tr(s),u=1<<o,c=r[o];c===-1?(!(u&t)||u&i)&&(r[o]=kN(u,e)):c<=e&&(n.expiredLanes|=u),s&=~u}}function fv(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nw(){var n=jf;return jf<<=1,!(jf&4194240)&&(jf=64),n}function Om(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function zc(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Tr(e),n[e]=t}function BN(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Tr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function O0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Tr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var zt=0;function Dw(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ow,U0,Uw,kw,Fw,dv=!1,$f=[],ha=null,pa=null,ma=null,mc=new Map,gc=new Map,ia=[],zN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _S(n,e){switch(n){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":mc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gc.delete(e.pointerId)}}function Pu(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vc(e),e!==null&&U0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function HN(n,e,t,i,r){switch(e){case"focusin":return ha=Pu(ha,n,e,t,i,r),!0;case"dragenter":return pa=Pu(pa,n,e,t,i,r),!0;case"mouseover":return ma=Pu(ma,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return mc.set(s,Pu(mc.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,gc.set(s,Pu(gc.get(s)||null,n,e,t,i,r)),!0}return!1}function Bw(n){var e=no(n.target);if(e!==null){var t=So(e);if(t!==null){if(e=t.tag,e===13){if(e=Aw(t),e!==null){n.blockedOn=e,Fw(n.priority,function(){Uw(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wd(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hv(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ov=i,t.target.dispatchEvent(i),ov=null}else return e=Vc(t),e!==null&&U0(e),n.blockedOn=t,!1;e.shift()}return!0}function yS(n,e,t){Wd(n)&&t.delete(e)}function VN(){dv=!1,ha!==null&&Wd(ha)&&(ha=null),pa!==null&&Wd(pa)&&(pa=null),ma!==null&&Wd(ma)&&(ma=null),mc.forEach(yS),gc.forEach(yS)}function Lu(n,e){n.blockedOn===e&&(n.blockedOn=null,dv||(dv=!0,Bi.unstable_scheduleCallback(Bi.unstable_NormalPriority,VN)))}function vc(n){function e(r){return Lu(r,n)}if(0<$f.length){Lu($f[0],n);for(var t=1;t<$f.length;t++){var i=$f[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ha!==null&&Lu(ha,n),pa!==null&&Lu(pa,n),ma!==null&&Lu(ma,n),mc.forEach(e),gc.forEach(e),t=0;t<ia.length;t++)i=ia[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ia.length&&(t=ia[0],t.blockedOn===null);)Bw(t),t.blockedOn===null&&ia.shift()}var Tl=Rs.ReactCurrentBatchConfig,uh=!0;function GN(n,e,t,i){var r=zt,s=Tl.transition;Tl.transition=null;try{zt=1,k0(n,e,t,i)}finally{zt=r,Tl.transition=s}}function WN(n,e,t,i){var r=zt,s=Tl.transition;Tl.transition=null;try{zt=4,k0(n,e,t,i)}finally{zt=r,Tl.transition=s}}function k0(n,e,t,i){if(uh){var r=hv(n,e,t,i);if(r===null)Xm(n,e,i,ch,t),_S(n,i);else if(HN(r,n,e,t,i))i.stopPropagation();else if(_S(n,i),e&4&&-1<zN.indexOf(n)){for(;r!==null;){var s=Vc(r);if(s!==null&&Ow(s),s=hv(n,e,t,i),s===null&&Xm(n,e,i,ch,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xm(n,e,i,null,t)}}var ch=null;function hv(n,e,t,i){if(ch=null,n=N0(i),n=no(n),n!==null)if(e=So(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Aw(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ch=n,null}function zw(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LN()){case D0:return 1;case Lw:return 4;case oh:case IN:return 16;case Iw:return 536870912;default:return 16}default:return 16}}var aa=null,F0=null,Xd=null;function Hw(){if(Xd)return Xd;var n,e=F0,t=e.length,i,r="value"in aa?aa.value:aa.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Xd=r.slice(n,1<i?1-i:void 0)}function jd(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qf(){return!0}function xS(){return!1}function Hi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qf:xS,this.isPropagationStopped=xS,this}return un(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qf)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qf)},persist:function(){},isPersistent:qf}),e}var Ql={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},B0=Hi(Ql),Hc=un({},Ql,{view:0,detail:0}),XN=Hi(Hc),Um,km,Iu,Wh=un({},Hc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:z0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Iu&&(Iu&&n.type==="mousemove"?(Um=n.screenX-Iu.screenX,km=n.screenY-Iu.screenY):km=Um=0,Iu=n),Um)},movementY:function(n){return"movementY"in n?n.movementY:km}}),SS=Hi(Wh),jN=un({},Wh,{dataTransfer:0}),YN=Hi(jN),$N=un({},Hc,{relatedTarget:0}),Fm=Hi($N),qN=un({},Ql,{animationName:0,elapsedTime:0,pseudoElement:0}),KN=Hi(qN),ZN=un({},Ql,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),QN=Hi(ZN),JN=un({},Ql,{data:0}),MS=Hi(JN),eD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iD(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=nD[n])?!!e[n]:!1}function z0(){return iD}var rD=un({},Hc,{key:function(n){if(n.key){var e=eD[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=jd(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tD[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:z0,charCode:function(n){return n.type==="keypress"?jd(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?jd(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),sD=Hi(rD),aD=un({},Wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ES=Hi(aD),oD=un({},Hc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:z0}),lD=Hi(oD),uD=un({},Ql,{propertyName:0,elapsedTime:0,pseudoElement:0}),cD=Hi(uD),fD=un({},Wh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dD=Hi(fD),hD=[9,13,27,32],H0=Ss&&"CompositionEvent"in window,Ju=null;Ss&&"documentMode"in document&&(Ju=document.documentMode);var pD=Ss&&"TextEvent"in window&&!Ju,Vw=Ss&&(!H0||Ju&&8<Ju&&11>=Ju),wS=" ",TS=!1;function Gw(n,e){switch(n){case"keyup":return hD.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ww(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ll=!1;function mD(n,e){switch(n){case"compositionend":return Ww(e);case"keypress":return e.which!==32?null:(TS=!0,wS);case"textInput":return n=e.data,n===wS&&TS?null:n;default:return null}}function gD(n,e){if(ll)return n==="compositionend"||!H0&&Gw(n,e)?(n=Hw(),Xd=F0=aa=null,ll=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vw&&e.locale!=="ko"?null:e.data;default:return null}}var vD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bS(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vD[n.type]:e==="textarea"}function Xw(n,e,t,i){Mw(i),e=fh(e,"onChange"),0<e.length&&(t=new B0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ec=null,_c=null;function _D(n){nT(n,0)}function Xh(n){var e=fl(n);if(mw(e))return n}function yD(n,e){if(n==="change")return e}var jw=!1;if(Ss){var Bm;if(Ss){var zm="oninput"in document;if(!zm){var AS=document.createElement("div");AS.setAttribute("oninput","return;"),zm=typeof AS.oninput=="function"}Bm=zm}else Bm=!1;jw=Bm&&(!document.documentMode||9<document.documentMode)}function CS(){ec&&(ec.detachEvent("onpropertychange",Yw),_c=ec=null)}function Yw(n){if(n.propertyName==="value"&&Xh(_c)){var e=[];Xw(e,_c,n,N0(n)),bw(_D,e)}}function xD(n,e,t){n==="focusin"?(CS(),ec=e,_c=t,ec.attachEvent("onpropertychange",Yw)):n==="focusout"&&CS()}function SD(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xh(_c)}function MD(n,e){if(n==="click")return Xh(e)}function ED(n,e){if(n==="input"||n==="change")return Xh(e)}function wD(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pr=typeof Object.is=="function"?Object.is:wD;function yc(n,e){if(Pr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!qg.call(e,r)||!Pr(n[r],e[r]))return!1}return!0}function RS(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function PS(n,e){var t=RS(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=RS(t)}}function $w(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?$w(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function qw(){for(var n=window,e=rh();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=rh(n.document)}return e}function V0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function TD(n){var e=qw(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&$w(t.ownerDocument.documentElement,t)){if(i!==null&&V0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=PS(t,s);var o=PS(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bD=Ss&&"documentMode"in document&&11>=document.documentMode,ul=null,pv=null,tc=null,mv=!1;function LS(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mv||ul==null||ul!==rh(i)||(i=ul,"selectionStart"in i&&V0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),tc&&yc(tc,i)||(tc=i,i=fh(pv,"onSelect"),0<i.length&&(e=new B0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ul)))}function Kf(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var cl={animationend:Kf("Animation","AnimationEnd"),animationiteration:Kf("Animation","AnimationIteration"),animationstart:Kf("Animation","AnimationStart"),transitionend:Kf("Transition","TransitionEnd")},Hm={},Kw={};Ss&&(Kw=document.createElement("div").style,"AnimationEvent"in window||(delete cl.animationend.animation,delete cl.animationiteration.animation,delete cl.animationstart.animation),"TransitionEvent"in window||delete cl.transitionend.transition);function jh(n){if(Hm[n])return Hm[n];if(!cl[n])return n;var e=cl[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Kw)return Hm[n]=e[t];return n}var Zw=jh("animationend"),Qw=jh("animationiteration"),Jw=jh("animationstart"),eT=jh("transitionend"),tT=new Map,IS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ra(n,e){tT.set(n,e),xo(e,[n])}for(var Vm=0;Vm<IS.length;Vm++){var Gm=IS[Vm],AD=Gm.toLowerCase(),CD=Gm[0].toUpperCase()+Gm.slice(1);Ra(AD,"on"+CD)}Ra(Zw,"onAnimationEnd");Ra(Qw,"onAnimationIteration");Ra(Jw,"onAnimationStart");Ra("dblclick","onDoubleClick");Ra("focusin","onFocus");Ra("focusout","onBlur");Ra(eT,"onTransitionEnd");Nl("onMouseEnter",["mouseout","mouseover"]);Nl("onMouseLeave",["mouseout","mouseover"]);Nl("onPointerEnter",["pointerout","pointerover"]);Nl("onPointerLeave",["pointerout","pointerover"]);xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RD=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yu));function NS(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,AN(i,e,void 0,n),n.currentTarget=null}function nT(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var u=i[o],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==s&&r.isPropagationStopped())break e;NS(r,u,f),s=c}else for(o=0;o<i.length;o++){if(u=i[o],c=u.instance,f=u.currentTarget,u=u.listener,c!==s&&r.isPropagationStopped())break e;NS(r,u,f),s=c}}}if(ah)throw n=cv,ah=!1,cv=null,n}function qt(n,e){var t=e[xv];t===void 0&&(t=e[xv]=new Set);var i=n+"__bubble";t.has(i)||(iT(e,n,2,!1),t.add(i))}function Wm(n,e,t){var i=0;e&&(i|=4),iT(t,n,i,e)}var Zf="_reactListening"+Math.random().toString(36).slice(2);function xc(n){if(!n[Zf]){n[Zf]=!0,cw.forEach(function(t){t!=="selectionchange"&&(RD.has(t)||Wm(t,!1,n),Wm(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zf]||(e[Zf]=!0,Wm("selectionchange",!1,e))}}function iT(n,e,t,i){switch(zw(e)){case 1:var r=GN;break;case 4:r=WN;break;default:r=k0}t=r.bind(null,e,t,n),r=void 0,!uv||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Xm(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===r||u.nodeType===8&&u.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;u!==null;){if(o=no(u),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}u=u.parentNode}}i=i.return}bw(function(){var f=s,h=N0(t),p=[];e:{var m=tT.get(n);if(m!==void 0){var v=B0,S=n;switch(n){case"keypress":if(jd(t)===0)break e;case"keydown":case"keyup":v=sD;break;case"focusin":S="focus",v=Fm;break;case"focusout":S="blur",v=Fm;break;case"beforeblur":case"afterblur":v=Fm;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=SS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=YN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=lD;break;case Zw:case Qw:case Jw:v=KN;break;case eT:v=cD;break;case"scroll":v=XN;break;case"wheel":v=dD;break;case"copy":case"cut":case"paste":v=QN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ES}var E=(e&4)!==0,_=!E&&n==="scroll",g=E?m!==null?m+"Capture":null:m;E=[];for(var M=f,x;M!==null;){x=M;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,g!==null&&(C=pc(M,g),C!=null&&E.push(Sc(M,C,x)))),_)break;M=M.return}0<E.length&&(m=new v(m,S,null,t,h),p.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",m&&t!==ov&&(S=t.relatedTarget||t.fromElement)&&(no(S)||S[Ms]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(S=t.relatedTarget||t.toElement,v=f,S=S?no(S):null,S!==null&&(_=So(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=f),v!==S)){if(E=SS,C="onMouseLeave",g="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(E=ES,C="onPointerLeave",g="onPointerEnter",M="pointer"),_=v==null?m:fl(v),x=S==null?m:fl(S),m=new E(C,M+"leave",v,t,h),m.target=_,m.relatedTarget=x,C=null,no(h)===f&&(E=new E(g,M+"enter",S,t,h),E.target=x,E.relatedTarget=_,C=E),_=C,v&&S)t:{for(E=v,g=S,M=0,x=E;x;x=Bo(x))M++;for(x=0,C=g;C;C=Bo(C))x++;for(;0<M-x;)E=Bo(E),M--;for(;0<x-M;)g=Bo(g),x--;for(;M--;){if(E===g||g!==null&&E===g.alternate)break t;E=Bo(E),g=Bo(g)}E=null}else E=null;v!==null&&DS(p,m,v,E,!1),S!==null&&_!==null&&DS(p,_,S,E,!0)}}e:{if(m=f?fl(f):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var U=yD;else if(bS(m))if(jw)U=ED;else{U=SD;var O=xD}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=MD);if(U&&(U=U(n,f))){Xw(p,U,t,h);break e}O&&O(n,m,f),n==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&nv(m,"number",m.value)}switch(O=f?fl(f):window,n){case"focusin":(bS(O)||O.contentEditable==="true")&&(ul=O,pv=f,tc=null);break;case"focusout":tc=pv=ul=null;break;case"mousedown":mv=!0;break;case"contextmenu":case"mouseup":case"dragend":mv=!1,LS(p,t,h);break;case"selectionchange":if(bD)break;case"keydown":case"keyup":LS(p,t,h)}var I;if(H0)e:{switch(n){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else ll?Gw(n,t)&&(z="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Vw&&t.locale!=="ko"&&(ll||z!=="onCompositionStart"?z==="onCompositionEnd"&&ll&&(I=Hw()):(aa=h,F0="value"in aa?aa.value:aa.textContent,ll=!0)),O=fh(f,z),0<O.length&&(z=new MS(z,n,null,t,h),p.push({event:z,listeners:O}),I?z.data=I:(I=Ww(t),I!==null&&(z.data=I)))),(I=pD?mD(n,t):gD(n,t))&&(f=fh(f,"onBeforeInput"),0<f.length&&(h=new MS("onBeforeInput","beforeinput",null,t,h),p.push({event:h,listeners:f}),h.data=I))}nT(p,e)})}function Sc(n,e,t){return{instance:n,listener:e,currentTarget:t}}function fh(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pc(n,t),s!=null&&i.unshift(Sc(n,s,r)),s=pc(n,e),s!=null&&i.push(Sc(n,s,r))),n=n.return}return i}function Bo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function DS(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var u=t,c=u.alternate,f=u.stateNode;if(c!==null&&c===i)break;u.tag===5&&f!==null&&(u=f,r?(c=pc(t,s),c!=null&&o.unshift(Sc(t,c,u))):r||(c=pc(t,s),c!=null&&o.push(Sc(t,c,u)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var PD=/\r\n?/g,LD=/\u0000|\uFFFD/g;function OS(n){return(typeof n=="string"?n:""+n).replace(PD,`
`).replace(LD,"")}function Qf(n,e,t){if(e=OS(e),OS(n)!==e&&t)throw Error(Se(425))}function dh(){}var gv=null,vv=null;function _v(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yv=typeof setTimeout=="function"?setTimeout:void 0,ID=typeof clearTimeout=="function"?clearTimeout:void 0,US=typeof Promise=="function"?Promise:void 0,ND=typeof queueMicrotask=="function"?queueMicrotask:typeof US<"u"?function(n){return US.resolve(null).then(n).catch(DD)}:yv;function DD(n){setTimeout(function(){throw n})}function jm(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vc(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vc(e)}function ga(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function kS(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Jl=Math.random().toString(36).slice(2),zr="__reactFiber$"+Jl,Mc="__reactProps$"+Jl,Ms="__reactContainer$"+Jl,xv="__reactEvents$"+Jl,OD="__reactListeners$"+Jl,UD="__reactHandles$"+Jl;function no(n){var e=n[zr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ms]||t[zr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=kS(n);n!==null;){if(t=n[zr])return t;n=kS(n)}return e}n=t,t=n.parentNode}return null}function Vc(n){return n=n[zr]||n[Ms],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fl(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Se(33))}function Yh(n){return n[Mc]||null}var Sv=[],dl=-1;function Pa(n){return{current:n}}function Jt(n){0>dl||(n.current=Sv[dl],Sv[dl]=null,dl--)}function jt(n,e){dl++,Sv[dl]=n.current,n.current=e}var Ta={},Qn=Pa(Ta),Ei=Pa(!1),fo=Ta;function Dl(n,e){var t=n.type.contextTypes;if(!t)return Ta;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function wi(n){return n=n.childContextTypes,n!=null}function hh(){Jt(Ei),Jt(Qn)}function FS(n,e,t){if(Qn.current!==Ta)throw Error(Se(168));jt(Qn,e),jt(Ei,t)}function rT(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,xN(n)||"Unknown",r));return un({},t,i)}function ph(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ta,fo=Qn.current,jt(Qn,n),jt(Ei,Ei.current),!0}function BS(n,e,t){var i=n.stateNode;if(!i)throw Error(Se(169));t?(n=rT(n,e,fo),i.__reactInternalMemoizedMergedChildContext=n,Jt(Ei),Jt(Qn),jt(Qn,n)):Jt(Ei),jt(Ei,t)}var ms=null,$h=!1,Ym=!1;function sT(n){ms===null?ms=[n]:ms.push(n)}function kD(n){$h=!0,sT(n)}function La(){if(!Ym&&ms!==null){Ym=!0;var n=0,e=zt;try{var t=ms;for(zt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ms=null,$h=!1}catch(r){throw ms!==null&&(ms=ms.slice(n+1)),Pw(D0,La),r}finally{zt=e,Ym=!1}}return null}var hl=[],pl=0,mh=null,gh=0,er=[],tr=0,ho=null,gs=1,vs="";function Ka(n,e){hl[pl++]=gh,hl[pl++]=mh,mh=n,gh=e}function aT(n,e,t){er[tr++]=gs,er[tr++]=vs,er[tr++]=ho,ho=n;var i=gs;n=vs;var r=32-Tr(i)-1;i&=~(1<<r),t+=1;var s=32-Tr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gs=1<<32-Tr(e)+r|t<<r|i,vs=s+n}else gs=1<<s|t<<r|i,vs=n}function G0(n){n.return!==null&&(Ka(n,1),aT(n,1,0))}function W0(n){for(;n===mh;)mh=hl[--pl],hl[pl]=null,gh=hl[--pl],hl[pl]=null;for(;n===ho;)ho=er[--tr],er[tr]=null,vs=er[--tr],er[tr]=null,gs=er[--tr],er[tr]=null}var Fi=null,ki=null,nn=!1,yr=null;function oT(n,e){var t=ir(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function zS(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Fi=n,ki=ga(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Fi=n,ki=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ho!==null?{id:gs,overflow:vs}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ir(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Fi=n,ki=null,!0):!1;default:return!1}}function Mv(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ev(n){if(nn){var e=ki;if(e){var t=e;if(!zS(n,e)){if(Mv(n))throw Error(Se(418));e=ga(t.nextSibling);var i=Fi;e&&zS(n,e)?oT(i,t):(n.flags=n.flags&-4097|2,nn=!1,Fi=n)}}else{if(Mv(n))throw Error(Se(418));n.flags=n.flags&-4097|2,nn=!1,Fi=n}}}function HS(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fi=n}function Jf(n){if(n!==Fi)return!1;if(!nn)return HS(n),nn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!_v(n.type,n.memoizedProps)),e&&(e=ki)){if(Mv(n))throw lT(),Error(Se(418));for(;e;)oT(n,e),e=ga(e.nextSibling)}if(HS(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){ki=ga(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}ki=null}}else ki=Fi?ga(n.stateNode.nextSibling):null;return!0}function lT(){for(var n=ki;n;)n=ga(n.nextSibling)}function Ol(){ki=Fi=null,nn=!1}function X0(n){yr===null?yr=[n]:yr.push(n)}var FD=Rs.ReactCurrentBatchConfig;function vr(n,e){if(n&&n.defaultProps){e=un({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var vh=Pa(null),_h=null,ml=null,j0=null;function Y0(){j0=ml=_h=null}function $0(n){var e=vh.current;Jt(vh),n._currentValue=e}function wv(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function bl(n,e){_h=n,j0=ml=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Si=!0),n.firstContext=null)}function sr(n){var e=n._currentValue;if(j0!==n)if(n={context:n,memoizedValue:e,next:null},ml===null){if(_h===null)throw Error(Se(308));ml=n,_h.dependencies={lanes:0,firstContext:n}}else ml=ml.next=n;return e}var io=null;function q0(n){io===null?io=[n]:io.push(n)}function uT(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,q0(e)):(t.next=r.next,r.next=t),e.interleaved=t,Es(n,i)}function Es(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ea=!1;function K0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cT(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xs(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function va(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Es(n,t)}return r=i.interleaved,r===null?(e.next=e,q0(i)):(e.next=r.next,r.next=e),i.interleaved=e,Es(n,t)}function Yd(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,O0(n,t)}}function VS(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function yh(n,e,t,i){var r=n.updateQueue;ea=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var c=u,f=c.next;c.next=null,o===null?s=f:o.next=f,o=c;var h=n.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=f:u.next=f,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,h=f=c=null,u=s;do{var m=u.lane,v=u.eventTime;if((i&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=n,E=u;switch(m=e,v=t,E.tag){case 1:if(S=E.payload,typeof S=="function"){p=S.call(v,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(v,p,m):S,m==null)break e;p=un({},p,m);break e;case 2:ea=!0}}u.callback!==null&&u.lane!==0&&(n.flags|=64,m=r.effects,m===null?r.effects=[u]:m.push(u))}else v={eventTime:v,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(f=h=v,c=p):h=h.next=v,o|=m;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;m=u,u=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=f,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);mo|=o,n.lanes=o,n.memoizedState=p}}function GS(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var fT=new uw.Component().refs;function Tv(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:un({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var qh={isMounted:function(n){return(n=n._reactInternals)?So(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=di(),r=ya(n),s=xs(i,r);s.payload=e,t!=null&&(s.callback=t),e=va(n,s,r),e!==null&&(br(e,n,r,i),Yd(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=di(),r=ya(n),s=xs(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=va(n,s,r),e!==null&&(br(e,n,r,i),Yd(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=di(),i=ya(n),r=xs(t,i);r.tag=2,e!=null&&(r.callback=e),e=va(n,r,i),e!==null&&(br(e,n,i,t),Yd(e,n,i))}};function WS(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yc(t,i)||!yc(r,s):!0}function dT(n,e,t){var i=!1,r=Ta,s=e.contextType;return typeof s=="object"&&s!==null?s=sr(s):(r=wi(e)?fo:Qn.current,i=e.contextTypes,s=(i=i!=null)?Dl(n,r):Ta),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function XS(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&qh.enqueueReplaceState(e,e.state,null)}function bv(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=fT,K0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=sr(s):(s=wi(e)?fo:Qn.current,r.context=Dl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tv(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qh.enqueueReplaceState(r,r.state,null),yh(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Nu(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Se(309));var i=t.stateNode}if(!i)throw Error(Se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var u=r.refs;u===fT&&(u=r.refs={}),o===null?delete u[s]:u[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Se(284));if(!t._owner)throw Error(Se(290,n))}return n}function ed(n,e){throw n=Object.prototype.toString.call(e),Error(Se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function jS(n){var e=n._init;return e(n._payload)}function hT(n){function e(g,M){if(n){var x=g.deletions;x===null?(g.deletions=[M],g.flags|=16):x.push(M)}}function t(g,M){if(!n)return null;for(;M!==null;)e(g,M),M=M.sibling;return null}function i(g,M){for(g=new Map;M!==null;)M.key!==null?g.set(M.key,M):g.set(M.index,M),M=M.sibling;return g}function r(g,M){return g=xa(g,M),g.index=0,g.sibling=null,g}function s(g,M,x){return g.index=x,n?(x=g.alternate,x!==null?(x=x.index,x<M?(g.flags|=2,M):x):(g.flags|=2,M)):(g.flags|=1048576,M)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function u(g,M,x,C){return M===null||M.tag!==6?(M=eg(x,g.mode,C),M.return=g,M):(M=r(M,x),M.return=g,M)}function c(g,M,x,C){var U=x.type;return U===ol?h(g,M,x.props.children,C,x.key):M!==null&&(M.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Js&&jS(U)===M.type)?(C=r(M,x.props),C.ref=Nu(g,M,x),C.return=g,C):(C=Jd(x.type,x.key,x.props,null,g.mode,C),C.ref=Nu(g,M,x),C.return=g,C)}function f(g,M,x,C){return M===null||M.tag!==4||M.stateNode.containerInfo!==x.containerInfo||M.stateNode.implementation!==x.implementation?(M=tg(x,g.mode,C),M.return=g,M):(M=r(M,x.children||[]),M.return=g,M)}function h(g,M,x,C,U){return M===null||M.tag!==7?(M=co(x,g.mode,C,U),M.return=g,M):(M=r(M,x),M.return=g,M)}function p(g,M,x){if(typeof M=="string"&&M!==""||typeof M=="number")return M=eg(""+M,g.mode,x),M.return=g,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Gf:return x=Jd(M.type,M.key,M.props,null,g.mode,x),x.ref=Nu(g,null,M),x.return=g,x;case al:return M=tg(M,g.mode,x),M.return=g,M;case Js:var C=M._init;return p(g,C(M._payload),x)}if(Xu(M)||Cu(M))return M=co(M,g.mode,x,null),M.return=g,M;ed(g,M)}return null}function m(g,M,x,C){var U=M!==null?M.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:u(g,M,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gf:return x.key===U?c(g,M,x,C):null;case al:return x.key===U?f(g,M,x,C):null;case Js:return U=x._init,m(g,M,U(x._payload),C)}if(Xu(x)||Cu(x))return U!==null?null:h(g,M,x,C,null);ed(g,x)}return null}function v(g,M,x,C,U){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(x)||null,u(M,g,""+C,U);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Gf:return g=g.get(C.key===null?x:C.key)||null,c(M,g,C,U);case al:return g=g.get(C.key===null?x:C.key)||null,f(M,g,C,U);case Js:var O=C._init;return v(g,M,x,O(C._payload),U)}if(Xu(C)||Cu(C))return g=g.get(x)||null,h(M,g,C,U,null);ed(M,C)}return null}function S(g,M,x,C){for(var U=null,O=null,I=M,z=M=0,A=null;I!==null&&z<x.length;z++){I.index>z?(A=I,I=null):A=I.sibling;var w=m(g,I,x[z],C);if(w===null){I===null&&(I=A);break}n&&I&&w.alternate===null&&e(g,I),M=s(w,M,z),O===null?U=w:O.sibling=w,O=w,I=A}if(z===x.length)return t(g,I),nn&&Ka(g,z),U;if(I===null){for(;z<x.length;z++)I=p(g,x[z],C),I!==null&&(M=s(I,M,z),O===null?U=I:O.sibling=I,O=I);return nn&&Ka(g,z),U}for(I=i(g,I);z<x.length;z++)A=v(I,g,z,x[z],C),A!==null&&(n&&A.alternate!==null&&I.delete(A.key===null?z:A.key),M=s(A,M,z),O===null?U=A:O.sibling=A,O=A);return n&&I.forEach(function(N){return e(g,N)}),nn&&Ka(g,z),U}function E(g,M,x,C){var U=Cu(x);if(typeof U!="function")throw Error(Se(150));if(x=U.call(x),x==null)throw Error(Se(151));for(var O=U=null,I=M,z=M=0,A=null,w=x.next();I!==null&&!w.done;z++,w=x.next()){I.index>z?(A=I,I=null):A=I.sibling;var N=m(g,I,w.value,C);if(N===null){I===null&&(I=A);break}n&&I&&N.alternate===null&&e(g,I),M=s(N,M,z),O===null?U=N:O.sibling=N,O=N,I=A}if(w.done)return t(g,I),nn&&Ka(g,z),U;if(I===null){for(;!w.done;z++,w=x.next())w=p(g,w.value,C),w!==null&&(M=s(w,M,z),O===null?U=w:O.sibling=w,O=w);return nn&&Ka(g,z),U}for(I=i(g,I);!w.done;z++,w=x.next())w=v(I,g,z,w.value,C),w!==null&&(n&&w.alternate!==null&&I.delete(w.key===null?z:w.key),M=s(w,M,z),O===null?U=w:O.sibling=w,O=w);return n&&I.forEach(function(V){return e(g,V)}),nn&&Ka(g,z),U}function _(g,M,x,C){if(typeof x=="object"&&x!==null&&x.type===ol&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gf:e:{for(var U=x.key,O=M;O!==null;){if(O.key===U){if(U=x.type,U===ol){if(O.tag===7){t(g,O.sibling),M=r(O,x.props.children),M.return=g,g=M;break e}}else if(O.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Js&&jS(U)===O.type){t(g,O.sibling),M=r(O,x.props),M.ref=Nu(g,O,x),M.return=g,g=M;break e}t(g,O);break}else e(g,O);O=O.sibling}x.type===ol?(M=co(x.props.children,g.mode,C,x.key),M.return=g,g=M):(C=Jd(x.type,x.key,x.props,null,g.mode,C),C.ref=Nu(g,M,x),C.return=g,g=C)}return o(g);case al:e:{for(O=x.key;M!==null;){if(M.key===O)if(M.tag===4&&M.stateNode.containerInfo===x.containerInfo&&M.stateNode.implementation===x.implementation){t(g,M.sibling),M=r(M,x.children||[]),M.return=g,g=M;break e}else{t(g,M);break}else e(g,M);M=M.sibling}M=tg(x,g.mode,C),M.return=g,g=M}return o(g);case Js:return O=x._init,_(g,M,O(x._payload),C)}if(Xu(x))return S(g,M,x,C);if(Cu(x))return E(g,M,x,C);ed(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,M!==null&&M.tag===6?(t(g,M.sibling),M=r(M,x),M.return=g,g=M):(t(g,M),M=eg(x,g.mode,C),M.return=g,g=M),o(g)):t(g,M)}return _}var Ul=hT(!0),pT=hT(!1),Gc={},Xr=Pa(Gc),Ec=Pa(Gc),wc=Pa(Gc);function ro(n){if(n===Gc)throw Error(Se(174));return n}function Z0(n,e){switch(jt(wc,e),jt(Ec,n),jt(Xr,Gc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rv(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rv(e,n)}Jt(Xr),jt(Xr,e)}function kl(){Jt(Xr),Jt(Ec),Jt(wc)}function mT(n){ro(wc.current);var e=ro(Xr.current),t=rv(e,n.type);e!==t&&(jt(Ec,n),jt(Xr,t))}function Q0(n){Ec.current===n&&(Jt(Xr),Jt(Ec))}var an=Pa(0);function xh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $m=[];function J0(){for(var n=0;n<$m.length;n++)$m[n]._workInProgressVersionPrimary=null;$m.length=0}var $d=Rs.ReactCurrentDispatcher,qm=Rs.ReactCurrentBatchConfig,po=0,on=null,Tn=null,Nn=null,Sh=!1,nc=!1,Tc=0,BD=0;function Yn(){throw Error(Se(321))}function e_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pr(n[t],e[t]))return!1;return!0}function t_(n,e,t,i,r,s){if(po=s,on=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$d.current=n===null||n.memoizedState===null?GD:WD,n=t(i,r),nc){s=0;do{if(nc=!1,Tc=0,25<=s)throw Error(Se(301));s+=1,Nn=Tn=null,e.updateQueue=null,$d.current=XD,n=t(i,r)}while(nc)}if($d.current=Mh,e=Tn!==null&&Tn.next!==null,po=0,Nn=Tn=on=null,Sh=!1,e)throw Error(Se(300));return n}function n_(){var n=Tc!==0;return Tc=0,n}function Fr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?on.memoizedState=Nn=n:Nn=Nn.next=n,Nn}function ar(){if(Tn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=Tn.next;var e=Nn===null?on.memoizedState:Nn.next;if(e!==null)Nn=e,Tn=n;else{if(n===null)throw Error(Se(310));Tn=n,n={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},Nn===null?on.memoizedState=Nn=n:Nn=Nn.next=n}return Nn}function bc(n,e){return typeof e=="function"?e(n):e}function Km(n){var e=ar(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var i=Tn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var u=o=null,c=null,f=s;do{var h=f.lane;if((po&h)===h)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),i=f.hasEagerState?f.eagerState:n(i,f.action);else{var p={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=p,o=i):c=c.next=p,on.lanes|=h,mo|=h}f=f.next}while(f!==null&&f!==s);c===null?o=i:c.next=u,Pr(i,e.memoizedState)||(Si=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,on.lanes|=s,mo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Zm(n){var e=ar(),t=e.queue;if(t===null)throw Error(Se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Pr(s,e.memoizedState)||(Si=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function gT(){}function vT(n,e){var t=on,i=ar(),r=e(),s=!Pr(i.memoizedState,r);if(s&&(i.memoizedState=r,Si=!0),i=i.queue,i_(xT.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Nn!==null&&Nn.memoizedState.tag&1){if(t.flags|=2048,Ac(9,yT.bind(null,t,i,r,e),void 0,null),Dn===null)throw Error(Se(349));po&30||_T(t,e,r)}return r}function _T(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=on.updateQueue,e===null?(e={lastEffect:null,stores:null},on.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function yT(n,e,t,i){e.value=t,e.getSnapshot=i,ST(e)&&MT(n)}function xT(n,e,t){return t(function(){ST(e)&&MT(n)})}function ST(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pr(n,t)}catch{return!0}}function MT(n){var e=Es(n,1);e!==null&&br(e,n,1,-1)}function YS(n){var e=Fr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bc,lastRenderedState:n},e.queue=n,n=n.dispatch=VD.bind(null,on,n),[e.memoizedState,n]}function Ac(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=on.updateQueue,e===null?(e={lastEffect:null,stores:null},on.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ET(){return ar().memoizedState}function qd(n,e,t,i){var r=Fr();on.flags|=n,r.memoizedState=Ac(1|e,t,void 0,i===void 0?null:i)}function Kh(n,e,t,i){var r=ar();i=i===void 0?null:i;var s=void 0;if(Tn!==null){var o=Tn.memoizedState;if(s=o.destroy,i!==null&&e_(i,o.deps)){r.memoizedState=Ac(e,t,s,i);return}}on.flags|=n,r.memoizedState=Ac(1|e,t,s,i)}function $S(n,e){return qd(8390656,8,n,e)}function i_(n,e){return Kh(2048,8,n,e)}function wT(n,e){return Kh(4,2,n,e)}function TT(n,e){return Kh(4,4,n,e)}function bT(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function AT(n,e,t){return t=t!=null?t.concat([n]):null,Kh(4,4,bT.bind(null,e,n),t)}function r_(){}function CT(n,e){var t=ar();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&e_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function RT(n,e){var t=ar();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&e_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function PT(n,e,t){return po&21?(Pr(t,e)||(t=Nw(),on.lanes|=t,mo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Si=!0),n.memoizedState=t)}function zD(n,e){var t=zt;zt=t!==0&&4>t?t:4,n(!0);var i=qm.transition;qm.transition={};try{n(!1),e()}finally{zt=t,qm.transition=i}}function LT(){return ar().memoizedState}function HD(n,e,t){var i=ya(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},IT(n))NT(e,t);else if(t=uT(n,e,t,i),t!==null){var r=di();br(t,n,i,r),DT(t,e,i)}}function VD(n,e,t){var i=ya(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(IT(n))NT(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,u=s(o,t);if(r.hasEagerState=!0,r.eagerState=u,Pr(u,o)){var c=e.interleaved;c===null?(r.next=r,q0(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}t=uT(n,e,r,i),t!==null&&(r=di(),br(t,n,i,r),DT(t,e,i))}}function IT(n){var e=n.alternate;return n===on||e!==null&&e===on}function NT(n,e){nc=Sh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function DT(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,O0(n,t)}}var Mh={readContext:sr,useCallback:Yn,useContext:Yn,useEffect:Yn,useImperativeHandle:Yn,useInsertionEffect:Yn,useLayoutEffect:Yn,useMemo:Yn,useReducer:Yn,useRef:Yn,useState:Yn,useDebugValue:Yn,useDeferredValue:Yn,useTransition:Yn,useMutableSource:Yn,useSyncExternalStore:Yn,useId:Yn,unstable_isNewReconciler:!1},GD={readContext:sr,useCallback:function(n,e){return Fr().memoizedState=[n,e===void 0?null:e],n},useContext:sr,useEffect:$S,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,qd(4194308,4,bT.bind(null,e,n),t)},useLayoutEffect:function(n,e){return qd(4194308,4,n,e)},useInsertionEffect:function(n,e){return qd(4,2,n,e)},useMemo:function(n,e){var t=Fr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Fr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=HD.bind(null,on,n),[i.memoizedState,n]},useRef:function(n){var e=Fr();return n={current:n},e.memoizedState=n},useState:YS,useDebugValue:r_,useDeferredValue:function(n){return Fr().memoizedState=n},useTransition:function(){var n=YS(!1),e=n[0];return n=zD.bind(null,n[1]),Fr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=on,r=Fr();if(nn){if(t===void 0)throw Error(Se(407));t=t()}else{if(t=e(),Dn===null)throw Error(Se(349));po&30||_T(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$S(xT.bind(null,i,s,n),[n]),i.flags|=2048,Ac(9,yT.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Fr(),e=Dn.identifierPrefix;if(nn){var t=vs,i=gs;t=(i&~(1<<32-Tr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Tc++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=BD++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},WD={readContext:sr,useCallback:CT,useContext:sr,useEffect:i_,useImperativeHandle:AT,useInsertionEffect:wT,useLayoutEffect:TT,useMemo:RT,useReducer:Km,useRef:ET,useState:function(){return Km(bc)},useDebugValue:r_,useDeferredValue:function(n){var e=ar();return PT(e,Tn.memoizedState,n)},useTransition:function(){var n=Km(bc)[0],e=ar().memoizedState;return[n,e]},useMutableSource:gT,useSyncExternalStore:vT,useId:LT,unstable_isNewReconciler:!1},XD={readContext:sr,useCallback:CT,useContext:sr,useEffect:i_,useImperativeHandle:AT,useInsertionEffect:wT,useLayoutEffect:TT,useMemo:RT,useReducer:Zm,useRef:ET,useState:function(){return Zm(bc)},useDebugValue:r_,useDeferredValue:function(n){var e=ar();return Tn===null?e.memoizedState=n:PT(e,Tn.memoizedState,n)},useTransition:function(){var n=Zm(bc)[0],e=ar().memoizedState;return[n,e]},useMutableSource:gT,useSyncExternalStore:vT,useId:LT,unstable_isNewReconciler:!1};function Fl(n,e){try{var t="",i=e;do t+=yN(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Qm(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Av(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var jD=typeof WeakMap=="function"?WeakMap:Map;function OT(n,e,t){t=xs(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){wh||(wh=!0,kv=i),Av(n,e)},t}function UT(n,e,t){t=xs(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Av(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Av(n,e),typeof i!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function qS(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new jD;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=aO.bind(null,n,e,t),e.then(n,n))}function KS(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ZS(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=xs(-1,1),e.tag=2,va(t,e,1))),t.lanes|=1),n)}var YD=Rs.ReactCurrentOwner,Si=!1;function ai(n,e,t,i){e.child=n===null?pT(e,null,t,i):Ul(e,n.child,t,i)}function QS(n,e,t,i,r){t=t.render;var s=e.ref;return bl(e,r),i=t_(n,e,t,i,s,r),t=n_(),n!==null&&!Si?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ws(n,e,r)):(nn&&t&&G0(e),e.flags|=1,ai(n,e,i,r),e.child)}function JS(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!d_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,kT(n,e,s,i,r)):(n=Jd(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:yc,t(o,i)&&n.ref===e.ref)return ws(n,e,r)}return e.flags|=1,n=xa(s,i),n.ref=e.ref,n.return=e,e.child=n}function kT(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(yc(s,i)&&n.ref===e.ref)if(Si=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Si=!0);else return e.lanes=n.lanes,ws(n,e,r)}return Cv(n,e,t,i,r)}function FT(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(vl,Oi),Oi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,jt(vl,Oi),Oi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,jt(vl,Oi),Oi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,jt(vl,Oi),Oi|=i;return ai(n,e,r,t),e.child}function BT(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cv(n,e,t,i,r){var s=wi(t)?fo:Qn.current;return s=Dl(e,s),bl(e,r),t=t_(n,e,t,i,s,r),i=n_(),n!==null&&!Si?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ws(n,e,r)):(nn&&i&&G0(e),e.flags|=1,ai(n,e,t,r),e.child)}function e1(n,e,t,i,r){if(wi(t)){var s=!0;ph(e)}else s=!1;if(bl(e,r),e.stateNode===null)Kd(n,e),dT(e,t,i),bv(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var c=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=sr(f):(f=wi(t)?fo:Qn.current,f=Dl(e,f));var h=t.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==i||c!==f)&&XS(e,o,i,f),ea=!1;var m=e.memoizedState;o.state=m,yh(e,i,o,r),c=e.memoizedState,u!==i||m!==c||Ei.current||ea?(typeof h=="function"&&(Tv(e,t,h,i),c=e.memoizedState),(u=ea||WS(e,t,u,i,m,c,f))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=f,i=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cT(n,e),u=e.memoizedProps,f=e.type===e.elementType?u:vr(e.type,u),o.props=f,p=e.pendingProps,m=o.context,c=t.contextType,typeof c=="object"&&c!==null?c=sr(c):(c=wi(t)?fo:Qn.current,c=Dl(e,c));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||m!==c)&&XS(e,o,i,c),ea=!1,m=e.memoizedState,o.state=m,yh(e,i,o,r);var S=e.memoizedState;u!==p||m!==S||Ei.current||ea?(typeof v=="function"&&(Tv(e,t,v,i),S=e.memoizedState),(f=ea||WS(e,t,f,i,m,S,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,S,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,S,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),o.props=i,o.state=S,o.context=c,i=f):(typeof o.componentDidUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),i=!1)}return Rv(n,e,t,i,s,r)}function Rv(n,e,t,i,r,s){BT(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&BS(e,t,!1),ws(n,e,s);i=e.stateNode,YD.current=e;var u=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ul(e,n.child,null,s),e.child=Ul(e,null,u,s)):ai(n,e,u,s),e.memoizedState=i.state,r&&BS(e,t,!0),e.child}function zT(n){var e=n.stateNode;e.pendingContext?FS(n,e.pendingContext,e.pendingContext!==e.context):e.context&&FS(n,e.context,!1),Z0(n,e.containerInfo)}function t1(n,e,t,i,r){return Ol(),X0(r),e.flags|=256,ai(n,e,t,i),e.child}var Pv={dehydrated:null,treeContext:null,retryLane:0};function Lv(n){return{baseLanes:n,cachePool:null,transitions:null}}function HT(n,e,t){var i=e.pendingProps,r=an.current,s=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=n!==null&&n.memoizedState===null?!1:(r&2)!==0),u?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),jt(an,r&1),n===null)return Ev(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jh(o,i,0,null),n=co(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lv(t),e.memoizedState=Pv,n):s_(e,o));if(r=n.memoizedState,r!==null&&(u=r.dehydrated,u!==null))return $D(n,e,o,i,u,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,u=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=xa(r,c),i.subtreeFlags=r.subtreeFlags&14680064),u!==null?s=xa(u,s):(s=co(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lv(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Pv,i}return s=n.child,n=s.sibling,i=xa(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function s_(n,e){return e=Jh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function td(n,e,t,i){return i!==null&&X0(i),Ul(e,n.child,null,t),n=s_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function $D(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Qm(Error(Se(422))),td(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jh({mode:"visible",children:i.children},r,0,null),s=co(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ul(e,n.child,null,o),e.child.memoizedState=Lv(o),e.memoizedState=Pv,s);if(!(e.mode&1))return td(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var u=i.dgst;return i=u,s=Error(Se(419)),i=Qm(s,i,void 0),td(n,e,o,i)}if(u=(o&n.childLanes)!==0,Si||u){if(i=Dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Es(n,r),br(i,n,r,-1))}return f_(),i=Qm(Error(Se(421))),td(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=oO.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,ki=ga(r.nextSibling),Fi=e,nn=!0,yr=null,n!==null&&(er[tr++]=gs,er[tr++]=vs,er[tr++]=ho,gs=n.id,vs=n.overflow,ho=e),e=s_(e,i.children),e.flags|=4096,e)}function n1(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),wv(n.return,e,t)}function Jm(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function VT(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ai(n,e,i.children,t),i=an.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&n1(n,t,e);else if(n.tag===19)n1(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(jt(an,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&xh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Jm(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&xh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Jm(e,!0,t,null,s);break;case"together":Jm(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kd(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ws(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),mo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Se(153));if(e.child!==null){for(n=e.child,t=xa(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=xa(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function qD(n,e,t){switch(e.tag){case 3:zT(e),Ol();break;case 5:mT(e);break;case 1:wi(e.type)&&ph(e);break;case 4:Z0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;jt(vh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(jt(an,an.current&1),e.flags|=128,null):t&e.child.childLanes?HT(n,e,t):(jt(an,an.current&1),n=ws(n,e,t),n!==null?n.sibling:null);jt(an,an.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return VT(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),jt(an,an.current),i)break;return null;case 22:case 23:return e.lanes=0,FT(n,e,t)}return ws(n,e,t)}var GT,Iv,WT,XT;GT=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Iv=function(){};WT=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ro(Xr.current);var s=null;switch(t){case"input":r=ev(n,r),i=ev(n,i),s=[];break;case"select":r=un({},r,{value:void 0}),i=un({},i,{value:void 0}),s=[];break;case"textarea":r=iv(n,r),i=iv(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=dh)}sv(t,i);var o;t=null;for(f in r)if(!i.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var u=r[f];for(o in u)u.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(dc.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in i){var c=i[f];if(u=r!=null?r[f]:void 0,i.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(t||(t={}),t[o]=c[o])}else t||(s||(s=[]),s.push(f,t)),t=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(dc.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&qt("scroll",n),s||u===c||(s=[])):(s=s||[]).push(f,c))}t&&(s=s||[]).push("style",t);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};XT=function(n,e,t,i){t!==i&&(e.flags|=4)};function Du(n,e){if(!nn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function $n(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function KD(n,e,t){var i=e.pendingProps;switch(W0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(e),null;case 1:return wi(e.type)&&hh(),$n(e),null;case 3:return i=e.stateNode,kl(),Jt(Ei),Jt(Qn),J0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Jf(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yr!==null&&(zv(yr),yr=null))),Iv(n,e),$n(e),null;case 5:Q0(e);var r=ro(wc.current);if(t=e.type,n!==null&&e.stateNode!=null)WT(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return $n(e),null}if(n=ro(Xr.current),Jf(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[zr]=e,i[Mc]=s,n=(e.mode&1)!==0,t){case"dialog":qt("cancel",i),qt("close",i);break;case"iframe":case"object":case"embed":qt("load",i);break;case"video":case"audio":for(r=0;r<Yu.length;r++)qt(Yu[r],i);break;case"source":qt("error",i);break;case"img":case"image":case"link":qt("error",i),qt("load",i);break;case"details":qt("toggle",i);break;case"input":fS(i,s),qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},qt("invalid",i);break;case"textarea":hS(i,s),qt("invalid",i)}sv(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="children"?typeof u=="string"?i.textContent!==u&&(s.suppressHydrationWarning!==!0&&Qf(i.textContent,u,n),r=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Qf(i.textContent,u,n),r=["children",""+u]):dc.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&qt("scroll",i)}switch(t){case"input":Wf(i),dS(i,s,!0);break;case"textarea":Wf(i),pS(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dh)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_w(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[zr]=e,n[Mc]=i,GT(n,e,!1,!1),e.stateNode=n;e:{switch(o=av(t,i),t){case"dialog":qt("cancel",n),qt("close",n),r=i;break;case"iframe":case"object":case"embed":qt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Yu.length;r++)qt(Yu[r],n);r=i;break;case"source":qt("error",n),r=i;break;case"img":case"image":case"link":qt("error",n),qt("load",n),r=i;break;case"details":qt("toggle",n),r=i;break;case"input":fS(n,i),r=ev(n,i),qt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=un({},i,{value:void 0}),qt("invalid",n);break;case"textarea":hS(n,i),r=iv(n,i),qt("invalid",n);break;default:r=i}sv(t,r),u=r;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?Sw(n,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yw(n,c)):s==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&hc(n,c):typeof c=="number"&&hc(n,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(dc.hasOwnProperty(s)?c!=null&&s==="onScroll"&&qt("scroll",n):c!=null&&R0(n,s,c,o))}switch(t){case"input":Wf(n),dS(n,i,!1);break;case"textarea":Wf(n),pS(n);break;case"option":i.value!=null&&n.setAttribute("value",""+wa(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ml(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ml(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=dh)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $n(e),null;case 6:if(n&&e.stateNode!=null)XT(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(t=ro(wc.current),ro(Xr.current),Jf(e)){if(i=e.stateNode,t=e.memoizedProps,i[zr]=e,(s=i.nodeValue!==t)&&(n=Fi,n!==null))switch(n.tag){case 3:Qf(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qf(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[zr]=e,e.stateNode=i}return $n(e),null;case 13:if(Jt(an),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nn&&ki!==null&&e.mode&1&&!(e.flags&128))lT(),Ol(),e.flags|=98560,s=!1;else if(s=Jf(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[zr]=e}else Ol(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$n(e),s=!1}else yr!==null&&(zv(yr),yr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||an.current&1?bn===0&&(bn=3):f_())),e.updateQueue!==null&&(e.flags|=4),$n(e),null);case 4:return kl(),Iv(n,e),n===null&&xc(e.stateNode.containerInfo),$n(e),null;case 10:return $0(e.type._context),$n(e),null;case 17:return wi(e.type)&&hh(),$n(e),null;case 19:if(Jt(an),s=e.memoizedState,s===null)return $n(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Du(s,!1);else{if(bn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=xh(n),o!==null){for(e.flags|=128,Du(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return jt(an,an.current&1|2),e.child}n=n.sibling}s.tail!==null&&yn()>Bl&&(e.flags|=128,i=!0,Du(s,!1),e.lanes=4194304)}else{if(!i)if(n=xh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Du(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nn)return $n(e),null}else 2*yn()-s.renderingStartTime>Bl&&t!==1073741824&&(e.flags|=128,i=!0,Du(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yn(),e.sibling=null,t=an.current,jt(an,i?t&1|2:t&1),e):($n(e),null);case 22:case 23:return c_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Oi&1073741824&&($n(e),e.subtreeFlags&6&&(e.flags|=8192)):$n(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function ZD(n,e){switch(W0(e),e.tag){case 1:return wi(e.type)&&hh(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return kl(),Jt(Ei),Jt(Qn),J0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Q0(e),null;case 13:if(Jt(an),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));Ol()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Jt(an),null;case 4:return kl(),null;case 10:return $0(e.type._context),null;case 22:case 23:return c_(),null;case 24:return null;default:return null}}var nd=!1,Zn=!1,QD=typeof WeakSet=="function"?WeakSet:Set,ke=null;function gl(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){hn(n,e,i)}else t.current=null}function Nv(n,e,t){try{t()}catch(i){hn(n,e,i)}}var i1=!1;function JD(n,e){if(gv=uh,n=qw(),V0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,u=-1,c=-1,f=0,h=0,p=n,m=null;t:for(;;){for(var v;p!==t||r!==0&&p.nodeType!==3||(u=o+r),p!==s||i!==0&&p.nodeType!==3||(c=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===n)break t;if(m===t&&++f===r&&(u=o),m===s&&++h===i&&(c=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}t=u===-1||c===-1?null:{start:u,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(vv={focusedElem:n,selectionRange:t},uh=!1,ke=e;ke!==null;)if(e=ke,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ke=n;else for(;ke!==null;){e=ke;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,_=S.memoizedState,g=e.stateNode,M=g.getSnapshotBeforeUpdate(e.elementType===e.type?E:vr(e.type,E),_);g.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(C){hn(e,e.return,C)}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}return S=i1,i1=!1,S}function ic(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nv(e,t,s)}r=r.next}while(r!==i)}}function Zh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Dv(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function jT(n){var e=n.alternate;e!==null&&(n.alternate=null,jT(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[zr],delete e[Mc],delete e[xv],delete e[OD],delete e[UD])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function YT(n){return n.tag===5||n.tag===3||n.tag===4}function r1(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||YT(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ov(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=dh));else if(i!==4&&(n=n.child,n!==null))for(Ov(n,e,t),n=n.sibling;n!==null;)Ov(n,e,t),n=n.sibling}function Uv(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Uv(n,e,t),n=n.sibling;n!==null;)Uv(n,e,t),n=n.sibling}var Fn=null,_r=!1;function Ws(n,e,t){for(t=t.child;t!==null;)$T(n,e,t),t=t.sibling}function $T(n,e,t){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount(Gh,t)}catch{}switch(t.tag){case 5:Zn||gl(t,e);case 6:var i=Fn,r=_r;Fn=null,Ws(n,e,t),Fn=i,_r=r,Fn!==null&&(_r?(n=Fn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Fn.removeChild(t.stateNode));break;case 18:Fn!==null&&(_r?(n=Fn,t=t.stateNode,n.nodeType===8?jm(n.parentNode,t):n.nodeType===1&&jm(n,t),vc(n)):jm(Fn,t.stateNode));break;case 4:i=Fn,r=_r,Fn=t.stateNode.containerInfo,_r=!0,Ws(n,e,t),Fn=i,_r=r;break;case 0:case 11:case 14:case 15:if(!Zn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nv(t,e,o),r=r.next}while(r!==i)}Ws(n,e,t);break;case 1:if(!Zn&&(gl(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(u){hn(t,e,u)}Ws(n,e,t);break;case 21:Ws(n,e,t);break;case 22:t.mode&1?(Zn=(i=Zn)||t.memoizedState!==null,Ws(n,e,t),Zn=i):Ws(n,e,t);break;default:Ws(n,e,t)}}function s1(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new QD),e.forEach(function(i){var r=lO.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function hr(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:Fn=u.stateNode,_r=!1;break e;case 3:Fn=u.stateNode.containerInfo,_r=!0;break e;case 4:Fn=u.stateNode.containerInfo,_r=!0;break e}u=u.return}if(Fn===null)throw Error(Se(160));$T(s,o,r),Fn=null,_r=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(f){hn(r,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qT(e,n),e=e.sibling}function qT(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hr(e,n),kr(n),i&4){try{ic(3,n,n.return),Zh(3,n)}catch(E){hn(n,n.return,E)}try{ic(5,n,n.return)}catch(E){hn(n,n.return,E)}}break;case 1:hr(e,n),kr(n),i&512&&t!==null&&gl(t,t.return);break;case 5:if(hr(e,n),kr(n),i&512&&t!==null&&gl(t,t.return),n.flags&32){var r=n.stateNode;try{hc(r,"")}catch(E){hn(n,n.return,E)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,u=n.type,c=n.updateQueue;if(n.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&gw(r,s),av(u,o);var f=av(u,s);for(o=0;o<c.length;o+=2){var h=c[o],p=c[o+1];h==="style"?Sw(r,p):h==="dangerouslySetInnerHTML"?yw(r,p):h==="children"?hc(r,p):R0(r,h,p,f)}switch(u){case"input":tv(r,s);break;case"textarea":vw(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ml(r,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ml(r,!!s.multiple,s.defaultValue,!0):Ml(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mc]=s}catch(E){hn(n,n.return,E)}}break;case 6:if(hr(e,n),kr(n),i&4){if(n.stateNode===null)throw Error(Se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(E){hn(n,n.return,E)}}break;case 3:if(hr(e,n),kr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vc(e.containerInfo)}catch(E){hn(n,n.return,E)}break;case 4:hr(e,n),kr(n);break;case 13:hr(e,n),kr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(l_=yn())),i&4&&s1(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(Zn=(f=Zn)||h,hr(e,n),Zn=f):hr(e,n),kr(n),i&8192){if(f=n.memoizedState!==null,(n.stateNode.isHidden=f)&&!h&&n.mode&1)for(ke=n,h=n.child;h!==null;){for(p=ke=h;ke!==null;){switch(m=ke,v=m.child,m.tag){case 0:case 11:case 14:case 15:ic(4,m,m.return);break;case 1:gl(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){i=m,t=m.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(E){hn(i,t,E)}}break;case 5:gl(m,m.return);break;case 22:if(m.memoizedState!==null){o1(p);continue}}v!==null?(v.return=m,ke=v):o1(p)}h=h.sibling}e:for(h=null,p=n;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,f?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=xw("display",o))}catch(E){hn(n,n.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=f?"":p.memoizedProps}catch(E){hn(n,n.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hr(e,n),kr(n),i&4&&s1(n);break;case 21:break;default:hr(e,n),kr(n)}}function kr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(YT(t)){var i=t;break e}t=t.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(hc(r,""),i.flags&=-33);var s=r1(n);Uv(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,u=r1(n);Ov(n,u,o);break;default:throw Error(Se(161))}}catch(c){hn(n,n.return,c)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function eO(n,e,t){ke=n,KT(n)}function KT(n,e,t){for(var i=(n.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nd;if(!o){var u=r.alternate,c=u!==null&&u.memoizedState!==null||Zn;u=nd;var f=Zn;if(nd=o,(Zn=c)&&!f)for(ke=r;ke!==null;)o=ke,c=o.child,o.tag===22&&o.memoizedState!==null?l1(r):c!==null?(c.return=o,ke=c):l1(r);for(;s!==null;)ke=s,KT(s),s=s.sibling;ke=r,nd=u,Zn=f}a1(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):a1(n)}}function a1(n){for(;ke!==null;){var e=ke;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zn||Zh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:vr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&GS(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}GS(e,o,t)}break;case 5:var u=e.stateNode;if(t===null&&e.flags&4){t=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&vc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}Zn||e.flags&512&&Dv(e)}catch(m){hn(e,e.return,m)}}if(e===n){ke=null;break}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}}function o1(n){for(;ke!==null;){var e=ke;if(e===n){ke=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ke=t;break}ke=e.return}}function l1(n){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Zh(4,e)}catch(c){hn(e,t,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){hn(e,r,c)}}var s=e.return;try{Dv(e)}catch(c){hn(e,s,c)}break;case 5:var o=e.return;try{Dv(e)}catch(c){hn(e,o,c)}}}catch(c){hn(e,e.return,c)}if(e===n){ke=null;break}var u=e.sibling;if(u!==null){u.return=e.return,ke=u;break}ke=e.return}}var tO=Math.ceil,Eh=Rs.ReactCurrentDispatcher,a_=Rs.ReactCurrentOwner,rr=Rs.ReactCurrentBatchConfig,Lt=0,Dn=null,Mn=null,zn=0,Oi=0,vl=Pa(0),bn=0,Cc=null,mo=0,Qh=0,o_=0,rc=null,xi=null,l_=0,Bl=1/0,ps=null,wh=!1,kv=null,_a=null,id=!1,oa=null,Th=0,sc=0,Fv=null,Zd=-1,Qd=0;function di(){return Lt&6?yn():Zd!==-1?Zd:Zd=yn()}function ya(n){return n.mode&1?Lt&2&&zn!==0?zn&-zn:FD.transition!==null?(Qd===0&&(Qd=Nw()),Qd):(n=zt,n!==0||(n=window.event,n=n===void 0?16:zw(n.type)),n):1}function br(n,e,t,i){if(50<sc)throw sc=0,Fv=null,Error(Se(185));zc(n,t,i),(!(Lt&2)||n!==Dn)&&(n===Dn&&(!(Lt&2)&&(Qh|=t),bn===4&&ra(n,zn)),Ti(n,i),t===1&&Lt===0&&!(e.mode&1)&&(Bl=yn()+500,$h&&La()))}function Ti(n,e){var t=n.callbackNode;FN(n,e);var i=lh(n,n===Dn?zn:0);if(i===0)t!==null&&vS(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&vS(t),e===1)n.tag===0?kD(u1.bind(null,n)):sT(u1.bind(null,n)),ND(function(){!(Lt&6)&&La()}),t=null;else{switch(Dw(i)){case 1:t=D0;break;case 4:t=Lw;break;case 16:t=oh;break;case 536870912:t=Iw;break;default:t=oh}t=rb(t,ZT.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ZT(n,e){if(Zd=-1,Qd=0,Lt&6)throw Error(Se(327));var t=n.callbackNode;if(Al()&&n.callbackNode!==t)return null;var i=lh(n,n===Dn?zn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=bh(n,i);else{e=i;var r=Lt;Lt|=2;var s=JT();(Dn!==n||zn!==e)&&(ps=null,Bl=yn()+500,uo(n,e));do try{rO();break}catch(u){QT(n,u)}while(!0);Y0(),Eh.current=s,Lt=r,Mn!==null?e=0:(Dn=null,zn=0,e=bn)}if(e!==0){if(e===2&&(r=fv(n),r!==0&&(i=r,e=Bv(n,r))),e===1)throw t=Cc,uo(n,0),ra(n,i),Ti(n,yn()),t;if(e===6)ra(n,i);else{if(r=n.current.alternate,!(i&30)&&!nO(r)&&(e=bh(n,i),e===2&&(s=fv(n),s!==0&&(i=s,e=Bv(n,s))),e===1))throw t=Cc,uo(n,0),ra(n,i),Ti(n,yn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:Za(n,xi,ps);break;case 3:if(ra(n,i),(i&130023424)===i&&(e=l_+500-yn(),10<e)){if(lh(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){di(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=yv(Za.bind(null,n,xi,ps),e);break}Za(n,xi,ps);break;case 4:if(ra(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Tr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tO(i/1960))-i,10<i){n.timeoutHandle=yv(Za.bind(null,n,xi,ps),i);break}Za(n,xi,ps);break;case 5:Za(n,xi,ps);break;default:throw Error(Se(329))}}}return Ti(n,yn()),n.callbackNode===t?ZT.bind(null,n):null}function Bv(n,e){var t=rc;return n.current.memoizedState.isDehydrated&&(uo(n,e).flags|=256),n=bh(n,e),n!==2&&(e=xi,xi=t,e!==null&&zv(e)),n}function zv(n){xi===null?xi=n:xi.push.apply(xi,n)}function nO(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Pr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ra(n,e){for(e&=~o_,e&=~Qh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Tr(e),i=1<<t;n[t]=-1,e&=~i}}function u1(n){if(Lt&6)throw Error(Se(327));Al();var e=lh(n,0);if(!(e&1))return Ti(n,yn()),null;var t=bh(n,e);if(n.tag!==0&&t===2){var i=fv(n);i!==0&&(e=i,t=Bv(n,i))}if(t===1)throw t=Cc,uo(n,0),ra(n,e),Ti(n,yn()),t;if(t===6)throw Error(Se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Za(n,xi,ps),Ti(n,yn()),null}function u_(n,e){var t=Lt;Lt|=1;try{return n(e)}finally{Lt=t,Lt===0&&(Bl=yn()+500,$h&&La())}}function go(n){oa!==null&&oa.tag===0&&!(Lt&6)&&Al();var e=Lt;Lt|=1;var t=rr.transition,i=zt;try{if(rr.transition=null,zt=1,n)return n()}finally{zt=i,rr.transition=t,Lt=e,!(Lt&6)&&La()}}function c_(){Oi=vl.current,Jt(vl)}function uo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ID(t)),Mn!==null)for(t=Mn.return;t!==null;){var i=t;switch(W0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hh();break;case 3:kl(),Jt(Ei),Jt(Qn),J0();break;case 5:Q0(i);break;case 4:kl();break;case 13:Jt(an);break;case 19:Jt(an);break;case 10:$0(i.type._context);break;case 22:case 23:c_()}t=t.return}if(Dn=n,Mn=n=xa(n.current,null),zn=Oi=e,bn=0,Cc=null,o_=Qh=mo=0,xi=rc=null,io!==null){for(e=0;e<io.length;e++)if(t=io[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}io=null}return n}function QT(n,e){do{var t=Mn;try{if(Y0(),$d.current=Mh,Sh){for(var i=on.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sh=!1}if(po=0,Nn=Tn=on=null,nc=!1,Tc=0,a_.current=null,t===null||t.return===null){bn=1,Cc=e,Mn=null;break}e:{var s=n,o=t.return,u=t,c=e;if(e=zn,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,h=u,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=KS(o);if(v!==null){v.flags&=-257,ZS(v,o,u,s,e),v.mode&1&&qS(s,f,e),e=v,c=f;var S=e.updateQueue;if(S===null){var E=new Set;E.add(c),e.updateQueue=E}else S.add(c);break e}else{if(!(e&1)){qS(s,f,e),f_();break e}c=Error(Se(426))}}else if(nn&&u.mode&1){var _=KS(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ZS(_,o,u,s,e),X0(Fl(c,u));break e}}s=c=Fl(c,u),bn!==4&&(bn=2),rc===null?rc=[s]:rc.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=OT(s,c,e);VS(s,g);break e;case 1:u=c;var M=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof M.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_a===null||!_a.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=UT(s,u,e);VS(s,C);break e}}s=s.return}while(s!==null)}tb(t)}catch(U){e=U,Mn===t&&t!==null&&(Mn=t=t.return);continue}break}while(!0)}function JT(){var n=Eh.current;return Eh.current=Mh,n===null?Mh:n}function f_(){(bn===0||bn===3||bn===2)&&(bn=4),Dn===null||!(mo&268435455)&&!(Qh&268435455)||ra(Dn,zn)}function bh(n,e){var t=Lt;Lt|=2;var i=JT();(Dn!==n||zn!==e)&&(ps=null,uo(n,e));do try{iO();break}catch(r){QT(n,r)}while(!0);if(Y0(),Lt=t,Eh.current=i,Mn!==null)throw Error(Se(261));return Dn=null,zn=0,bn}function iO(){for(;Mn!==null;)eb(Mn)}function rO(){for(;Mn!==null&&!RN();)eb(Mn)}function eb(n){var e=ib(n.alternate,n,Oi);n.memoizedProps=n.pendingProps,e===null?tb(n):Mn=e,a_.current=null}function tb(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ZD(t,e),t!==null){t.flags&=32767,Mn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bn=6,Mn=null;return}}else if(t=KD(t,e,Oi),t!==null){Mn=t;return}if(e=e.sibling,e!==null){Mn=e;return}Mn=e=n}while(e!==null);bn===0&&(bn=5)}function Za(n,e,t){var i=zt,r=rr.transition;try{rr.transition=null,zt=1,sO(n,e,t,i)}finally{rr.transition=r,zt=i}return null}function sO(n,e,t,i){do Al();while(oa!==null);if(Lt&6)throw Error(Se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(BN(n,s),n===Dn&&(Mn=Dn=null,zn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||id||(id=!0,rb(oh,function(){return Al(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=rr.transition,rr.transition=null;var o=zt;zt=1;var u=Lt;Lt|=4,a_.current=null,JD(n,t),qT(t,n),TD(vv),uh=!!gv,vv=gv=null,n.current=t,eO(t),PN(),Lt=u,zt=o,rr.transition=s}else n.current=t;if(id&&(id=!1,oa=n,Th=r),s=n.pendingLanes,s===0&&(_a=null),NN(t.stateNode),Ti(n,yn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(wh)throw wh=!1,n=kv,kv=null,n;return Th&1&&n.tag!==0&&Al(),s=n.pendingLanes,s&1?n===Fv?sc++:(sc=0,Fv=n):sc=0,La(),null}function Al(){if(oa!==null){var n=Dw(Th),e=rr.transition,t=zt;try{if(rr.transition=null,zt=16>n?16:n,oa===null)var i=!1;else{if(n=oa,oa=null,Th=0,Lt&6)throw Error(Se(331));var r=Lt;for(Lt|=4,ke=n.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(ke=f;ke!==null;){var h=ke;switch(h.tag){case 0:case 11:case 15:ic(8,h,s)}var p=h.child;if(p!==null)p.return=h,ke=p;else for(;ke!==null;){h=ke;var m=h.sibling,v=h.return;if(jT(h),h===f){ke=null;break}if(m!==null){m.return=v,ke=m;break}ke=v}}}var S=s.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ic(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ke=g;break e}ke=s.return}}var M=n.current;for(ke=M;ke!==null;){o=ke;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ke=x;else e:for(o=M;ke!==null;){if(u=ke,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Zh(9,u)}}catch(U){hn(u,u.return,U)}if(u===o){ke=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,ke=C;break e}ke=u.return}}if(Lt=r,La(),Wr&&typeof Wr.onPostCommitFiberRoot=="function")try{Wr.onPostCommitFiberRoot(Gh,n)}catch{}i=!0}return i}finally{zt=t,rr.transition=e}}return!1}function c1(n,e,t){e=Fl(t,e),e=OT(n,e,1),n=va(n,e,1),e=di(),n!==null&&(zc(n,1,e),Ti(n,e))}function hn(n,e,t){if(n.tag===3)c1(n,n,t);else for(;e!==null;){if(e.tag===3){c1(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))){n=Fl(t,n),n=UT(e,n,1),e=va(e,n,1),n=di(),e!==null&&(zc(e,1,n),Ti(e,n));break}}e=e.return}}function aO(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=di(),n.pingedLanes|=n.suspendedLanes&t,Dn===n&&(zn&t)===t&&(bn===4||bn===3&&(zn&130023424)===zn&&500>yn()-l_?uo(n,0):o_|=t),Ti(n,e)}function nb(n,e){e===0&&(n.mode&1?(e=Yf,Yf<<=1,!(Yf&130023424)&&(Yf=4194304)):e=1);var t=di();n=Es(n,e),n!==null&&(zc(n,e,t),Ti(n,t))}function oO(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),nb(n,t)}function lO(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),nb(n,t)}var ib;ib=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ei.current)Si=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Si=!1,qD(n,e,t);Si=!!(n.flags&131072)}else Si=!1,nn&&e.flags&1048576&&aT(e,gh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kd(n,e),n=e.pendingProps;var r=Dl(e,Qn.current);bl(e,t),r=t_(null,e,i,n,r,t);var s=n_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wi(i)?(s=!0,ph(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,K0(e),r.updater=qh,e.stateNode=r,r._reactInternals=e,bv(e,i,n,t),e=Rv(null,e,i,!0,s,t)):(e.tag=0,nn&&s&&G0(e),ai(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Kd(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cO(i),n=vr(i,n),r){case 0:e=Cv(null,e,i,n,t);break e;case 1:e=e1(null,e,i,n,t);break e;case 11:e=QS(null,e,i,n,t);break e;case 14:e=JS(null,e,i,vr(i.type,n),t);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),Cv(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),e1(n,e,i,r,t);case 3:e:{if(zT(e),n===null)throw Error(Se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cT(n,e),yh(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fl(Error(Se(423)),e),e=t1(n,e,i,t,r);break e}else if(i!==r){r=Fl(Error(Se(424)),e),e=t1(n,e,i,t,r);break e}else for(ki=ga(e.stateNode.containerInfo.firstChild),Fi=e,nn=!0,yr=null,t=pT(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ol(),i===r){e=ws(n,e,t);break e}ai(n,e,i,t)}e=e.child}return e;case 5:return mT(e),n===null&&Ev(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,_v(i,r)?o=null:s!==null&&_v(i,s)&&(e.flags|=32),BT(n,e),ai(n,e,o,t),e.child;case 6:return n===null&&Ev(e),null;case 13:return HT(n,e,t);case 4:return Z0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ul(e,null,i,t):ai(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),QS(n,e,i,r,t);case 7:return ai(n,e,e.pendingProps,t),e.child;case 8:return ai(n,e,e.pendingProps.children,t),e.child;case 12:return ai(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,jt(vh,i._currentValue),i._currentValue=o,s!==null)if(Pr(s.value,o)){if(s.children===r.children&&!Ei.current){e=ws(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){o=s.child;for(var c=u.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=xs(-1,t&-t),c.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?c.next=c:(c.next=h.next,h.next=c),f.pending=c}}s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),wv(s.return,t,e),u.lanes|=t;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Se(341));o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),wv(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ai(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bl(e,t),r=sr(r),i=i(r),e.flags|=1,ai(n,e,i,t),e.child;case 14:return i=e.type,r=vr(i,e.pendingProps),r=vr(i.type,r),JS(n,e,i,r,t);case 15:return kT(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vr(i,r),Kd(n,e),e.tag=1,wi(i)?(n=!0,ph(e)):n=!1,bl(e,t),dT(e,i,r),bv(e,i,r,t),Rv(null,e,i,!0,n,t);case 19:return VT(n,e,t);case 22:return FT(n,e,t)}throw Error(Se(156,e.tag))};function rb(n,e){return Pw(n,e)}function uO(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ir(n,e,t,i){return new uO(n,e,t,i)}function d_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cO(n){if(typeof n=="function")return d_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L0)return 11;if(n===I0)return 14}return 2}function xa(n,e){var t=n.alternate;return t===null?(t=ir(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jd(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")d_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ol:return co(t.children,r,s,e);case P0:o=8,r|=8;break;case Kg:return n=ir(12,t,e,r|2),n.elementType=Kg,n.lanes=s,n;case Zg:return n=ir(13,t,e,r),n.elementType=Zg,n.lanes=s,n;case Qg:return n=ir(19,t,e,r),n.elementType=Qg,n.lanes=s,n;case hw:return Jh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case fw:o=10;break e;case dw:o=9;break e;case L0:o=11;break e;case I0:o=14;break e;case Js:o=16,i=null;break e}throw Error(Se(130,n==null?n:typeof n,""))}return e=ir(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function co(n,e,t,i){return n=ir(7,n,i,e),n.lanes=t,n}function Jh(n,e,t,i){return n=ir(22,n,i,e),n.elementType=hw,n.lanes=t,n.stateNode={isHidden:!1},n}function eg(n,e,t){return n=ir(6,n,null,e),n.lanes=t,n}function tg(n,e,t){return e=ir(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function fO(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Om(0),this.expirationTimes=Om(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Om(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function h_(n,e,t,i,r,s,o,u,c){return n=new fO(n,e,t,u,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ir(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},K0(s),n}function dO(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:al,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function sb(n){if(!n)return Ta;n=n._reactInternals;e:{if(So(n)!==n||n.tag!==1)throw Error(Se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(n.tag===1){var t=n.type;if(wi(t))return rT(n,t,e)}return e}function ab(n,e,t,i,r,s,o,u,c){return n=h_(t,i,!0,n,r,s,o,u,c),n.context=sb(null),t=n.current,i=di(),r=ya(t),s=xs(i,r),s.callback=e??null,va(t,s,r),n.current.lanes=r,zc(n,r,i),Ti(n,i),n}function ep(n,e,t,i){var r=e.current,s=di(),o=ya(r);return t=sb(t),e.context===null?e.context=t:e.pendingContext=t,e=xs(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=va(r,e,o),n!==null&&(br(n,r,o,s),Yd(n,r,o)),o}function Ah(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function f1(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function p_(n,e){f1(n,e),(n=n.alternate)&&f1(n,e)}function hO(){return null}var ob=typeof reportError=="function"?reportError:function(n){console.error(n)};function m_(n){this._internalRoot=n}tp.prototype.render=m_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Se(409));ep(n,e,null,null)};tp.prototype.unmount=m_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;go(function(){ep(null,n,null,null)}),e[Ms]=null}};function tp(n){this._internalRoot=n}tp.prototype.unstable_scheduleHydration=function(n){if(n){var e=kw();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ia.length&&e!==0&&e<ia[t].priority;t++);ia.splice(t,0,n),t===0&&Bw(n)}};function g_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function np(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function d1(){}function pO(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var f=Ah(o);s.call(f)}}var o=ab(e,i,n,0,null,!1,!1,"",d1);return n._reactRootContainer=o,n[Ms]=o.current,xc(n.nodeType===8?n.parentNode:n),go(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var u=i;i=function(){var f=Ah(c);u.call(f)}}var c=h_(n,0,!1,null,null,!1,!1,"",d1);return n._reactRootContainer=c,n[Ms]=c.current,xc(n.nodeType===8?n.parentNode:n),go(function(){ep(e,c,t,i)}),c}function ip(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var u=r;r=function(){var c=Ah(o);u.call(c)}}ep(e,o,n,r)}else o=pO(t,e,n,r,i);return Ah(o)}Ow=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ju(e.pendingLanes);t!==0&&(O0(e,t|1),Ti(e,yn()),!(Lt&6)&&(Bl=yn()+500,La()))}break;case 13:go(function(){var i=Es(n,1);if(i!==null){var r=di();br(i,n,1,r)}}),p_(n,1)}};U0=function(n){if(n.tag===13){var e=Es(n,134217728);if(e!==null){var t=di();br(e,n,134217728,t)}p_(n,134217728)}};Uw=function(n){if(n.tag===13){var e=ya(n),t=Es(n,e);if(t!==null){var i=di();br(t,n,e,i)}p_(n,e)}};kw=function(){return zt};Fw=function(n,e){var t=zt;try{return zt=n,e()}finally{zt=t}};lv=function(n,e,t){switch(e){case"input":if(tv(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Yh(i);if(!r)throw Error(Se(90));mw(i),tv(i,r)}}}break;case"textarea":vw(n,t);break;case"select":e=t.value,e!=null&&Ml(n,!!t.multiple,e,!1)}};ww=u_;Tw=go;var mO={usingClientEntryPoint:!1,Events:[Vc,fl,Yh,Mw,Ew,u_]},Ou={findFiberByHostInstance:no,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gO={bundleType:Ou.bundleType,version:Ou.version,rendererPackageName:Ou.rendererPackageName,rendererConfig:Ou.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cw(n),n===null?null:n.stateNode},findFiberByHostInstance:Ou.findFiberByHostInstance||hO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{Gh=rd.inject(gO),Wr=rd}catch{}}zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mO;zi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g_(e))throw Error(Se(200));return dO(n,e,null,t)};zi.createRoot=function(n,e){if(!g_(n))throw Error(Se(299));var t=!1,i="",r=ob;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=h_(n,1,!1,null,null,t,!1,i,r),n[Ms]=e.current,xc(n.nodeType===8?n.parentNode:n),new m_(e)};zi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Se(188)):(n=Object.keys(n).join(","),Error(Se(268,n)));return n=Cw(e),n=n===null?null:n.stateNode,n};zi.flushSync=function(n){return go(n)};zi.hydrate=function(n,e,t){if(!np(e))throw Error(Se(200));return ip(null,n,e,!0,t)};zi.hydrateRoot=function(n,e,t){if(!g_(n))throw Error(Se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ob;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ab(e,null,n,1,t??null,r,!1,s,o),n[Ms]=e.current,xc(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new tp(e)};zi.render=function(n,e,t){if(!np(e))throw Error(Se(200));return ip(null,n,e,!1,t)};zi.unmountComponentAtNode=function(n){if(!np(n))throw Error(Se(40));return n._reactRootContainer?(go(function(){ip(null,null,n,!1,function(){n._reactRootContainer=null,n[Ms]=null})}),!0):!1};zi.unstable_batchedUpdates=u_;zi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!np(t))throw Error(Se(200));if(n==null||n._reactInternals===void 0)throw Error(Se(38));return ip(n,e,t,!1,i)};zi.version="18.2.0-next-9e3b772b8-20220608";function lb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lb)}catch(n){console.error(n)}}lb(),aw.exports=zi;var vO=aw.exports,h1=vO;$g.createRoot=h1.createRoot,$g.hydrateRoot=h1.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rc(){return Rc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Rc.apply(this,arguments)}var la;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(la||(la={}));const p1="popstate";function _O(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:u}=i.location;return Hv("",{pathname:s,search:o,hash:u},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Ch(r)}return xO(e,t,null,n)}function mn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ub(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yO(){return Math.random().toString(36).substr(2,8)}function m1(n,e){return{usr:n.state,key:n.key,idx:e}}function Hv(n,e,t,i){return t===void 0&&(t=null),Rc({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?eu(e):e,{state:t,key:e&&e.key||i||yO()})}function Ch(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function eu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function xO(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,u=la.Pop,c=null,f=h();f==null&&(f=0,o.replaceState(Rc({},o.state,{idx:f}),""));function h(){return(o.state||{idx:null}).idx}function p(){u=la.Pop;let _=h(),g=_==null?null:_-f;f=_,c&&c({action:u,location:E.location,delta:g})}function m(_,g){u=la.Push;let M=Hv(E.location,_,g);t&&t(M,_),f=h()+1;let x=m1(M,f),C=E.createHref(M);try{o.pushState(x,"",C)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;r.location.assign(C)}s&&c&&c({action:u,location:E.location,delta:1})}function v(_,g){u=la.Replace;let M=Hv(E.location,_,g);t&&t(M,_),f=h();let x=m1(M,f),C=E.createHref(M);o.replaceState(x,"",C),s&&c&&c({action:u,location:E.location,delta:0})}function S(_){let g=r.location.origin!=="null"?r.location.origin:r.location.href,M=typeof _=="string"?_:Ch(_);return M=M.replace(/ $/,"%20"),mn(g,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,g)}let E={get action(){return u},get location(){return n(r,o)},listen(_){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(p1,p),c=_,()=>{r.removeEventListener(p1,p),c=null}},createHref(_){return e(r,_)},createURL:S,encodeLocation(_){let g=S(_);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:v,go(_){return o.go(_)}};return E}var g1;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(g1||(g1={}));function SO(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?eu(e):e,r=zl(i.pathname||"/",t);if(r==null)return null;let s=cb(n);MO(s);let o=null;for(let u=0;o==null&&u<s.length;++u){let c=NO(r);o=LO(s[u],c)}return o}function cb(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(mn(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let f=Sa([i,c.relativePath]),h=t.concat(c);s.children&&s.children.length>0&&(mn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),cb(s.children,e,h,f)),!(s.path==null&&!s.index)&&e.push({path:f,score:RO(f,s.index),routesMeta:h})};return n.forEach((s,o)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))r(s,o);else for(let c of fb(s.path))r(s,o,c)}),e}function fb(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=fb(i.join("/")),u=[];return u.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&u.push(...o),u.map(c=>n.startsWith("/")&&c===""?"/":c)}function MO(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:PO(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const EO=/^:[\w-]+$/,wO=3,TO=2,bO=1,AO=10,CO=-2,v1=n=>n==="*";function RO(n,e){let t=n.split("/"),i=t.length;return t.some(v1)&&(i+=CO),e&&(i+=TO),t.filter(r=>!v1(r)).reduce((r,s)=>r+(EO.test(s)?wO:s===""?bO:AO),i)}function PO(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function LO(n,e){let{routesMeta:t}=n,i={},r="/",s=[];for(let o=0;o<t.length;++o){let u=t[o],c=o===t.length-1,f=r==="/"?e:e.slice(r.length)||"/",h=Vv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f);if(!h)return null;Object.assign(i,h.params);let p=u.route;s.push({params:i,pathname:Sa([r,h.pathname]),pathnameBase:kO(Sa([r,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(r=Sa([r,h.pathnameBase]))}return s}function Vv(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=IO(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),u=r.slice(1);return{params:i.reduce((f,h,p)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let E=u[p]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const S=u[p];return v&&!S?f[m]=void 0:f[m]=(S||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:o,pattern:n}}function IO(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ub(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,c)=>(i.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function NO(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ub(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function zl(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function DO(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?eu(n):n;return{pathname:t?t.startsWith("/")?t:OO(t,e):e,search:FO(i),hash:BO(r)}}function OO(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ng(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function UO(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function db(n,e){let t=UO(n);return e?t.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function hb(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=eu(n):(r=Rc({},n),mn(!r.pathname||!r.pathname.includes("?"),ng("?","pathname","search",r)),mn(!r.pathname||!r.pathname.includes("#"),ng("#","pathname","hash",r)),mn(!r.search||!r.search.includes("#"),ng("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,u;if(o==null)u=t;else{let p=e.length-1;if(!i&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;r.pathname=m.join("/")}u=p>=0?e[p]:"/"}let c=DO(r,u),f=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(f||h)&&(c.pathname+="/"),c}const Sa=n=>n.join("/").replace(/\/\/+/g,"/"),kO=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FO=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,BO=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function zO(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const pb=["post","put","patch","delete"];new Set(pb);const HO=["get",...pb];new Set(HO);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pc(){return Pc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Pc.apply(this,arguments)}const rp=be.createContext(null),mb=be.createContext(null),Ia=be.createContext(null),sp=be.createContext(null),Mo=be.createContext({outlet:null,matches:[],isDataRoute:!1}),gb=be.createContext(null);function VO(n,e){let{relative:t}=e===void 0?{}:e;Wc()||mn(!1);let{basename:i,navigator:r}=be.useContext(Ia),{hash:s,pathname:o,search:u}=ap(n,{relative:t}),c=o;return i!=="/"&&(c=o==="/"?i:Sa([i,o])),r.createHref({pathname:c,search:u,hash:s})}function Wc(){return be.useContext(sp)!=null}function tu(){return Wc()||mn(!1),be.useContext(sp).location}function vb(n){be.useContext(Ia).static||be.useLayoutEffect(n)}function _b(){let{isDataRoute:n}=be.useContext(Mo);return n?tU():GO()}function GO(){Wc()||mn(!1);let n=be.useContext(rp),{basename:e,future:t,navigator:i}=be.useContext(Ia),{matches:r}=be.useContext(Mo),{pathname:s}=tu(),o=JSON.stringify(db(r,t.v7_relativeSplatPath)),u=be.useRef(!1);return vb(()=>{u.current=!0}),be.useCallback(function(f,h){if(h===void 0&&(h={}),!u.current)return;if(typeof f=="number"){i.go(f);return}let p=hb(f,JSON.parse(o),s,h.relative==="path");n==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Sa([e,p.pathname])),(h.replace?i.replace:i.push)(p,h.state,h)},[e,i,o,s,n])}function ap(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=be.useContext(Ia),{matches:r}=be.useContext(Mo),{pathname:s}=tu(),o=JSON.stringify(db(r,i.v7_relativeSplatPath));return be.useMemo(()=>hb(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function WO(n,e){return XO(n,e)}function XO(n,e,t,i){Wc()||mn(!1);let{navigator:r}=be.useContext(Ia),{matches:s}=be.useContext(Mo),o=s[s.length-1],u=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let f=tu(),h;if(e){var p;let _=typeof e=="string"?eu(e):e;c==="/"||(p=_.pathname)!=null&&p.startsWith(c)||mn(!1),h=_}else h=f;let m=h.pathname||"/",v=m;if(c!=="/"){let _=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let S=SO(n,{pathname:v}),E=KO(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:Sa([c,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?c:Sa([c,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,t,i);return e&&E?be.createElement(sp.Provider,{value:{location:Pc({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:la.Pop}},E):E}function jO(){let n=eU(),e=zO(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return be.createElement(be.Fragment,null,be.createElement("h2",null,"Unexpected Application Error!"),be.createElement("h3",{style:{fontStyle:"italic"}},e),t?be.createElement("pre",{style:r},t):null,null)}const YO=be.createElement(jO,null);class $O extends be.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?be.createElement(Mo.Provider,{value:this.props.routeContext},be.createElement(gb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qO(n){let{routeContext:e,match:t,children:i}=n,r=be.useContext(rp);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),be.createElement(Mo.Provider,{value:e},i)}function KO(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if((s=t)!=null&&s.errors)n=t.matches;else return null}let o=n,u=(r=t)==null?void 0:r.errors;if(u!=null){let h=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id]));h>=0||mn(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,f=-1;if(t&&i&&i.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=h),p.route.id){let{loaderData:m,errors:v}=t,S=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||S){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let v,S=!1,E=null,_=null;t&&(v=u&&p.route.id?u[p.route.id]:void 0,E=p.route.errorElement||YO,c&&(f<0&&m===0?(nU("route-fallback",!1),S=!0,_=null):f===m&&(S=!0,_=p.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,m+1)),M=()=>{let x;return v?x=E:S?x=_:p.route.Component?x=be.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=h,be.createElement(qO,{match:p,routeContext:{outlet:h,matches:g,isDataRoute:t!=null},children:x})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?be.createElement($O,{location:t.location,revalidation:t.revalidation,component:E,error:v,children:M(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):M()},null)}var yb=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(yb||{}),Rh=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Rh||{});function ZO(n){let e=be.useContext(rp);return e||mn(!1),e}function QO(n){let e=be.useContext(mb);return e||mn(!1),e}function JO(n){let e=be.useContext(Mo);return e||mn(!1),e}function xb(n){let e=JO(),t=e.matches[e.matches.length-1];return t.route.id||mn(!1),t.route.id}function eU(){var n;let e=be.useContext(gb),t=QO(Rh.UseRouteError),i=xb(Rh.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function tU(){let{router:n}=ZO(yb.UseNavigateStable),e=xb(Rh.UseNavigateStable),t=be.useRef(!1);return vb(()=>{t.current=!0}),be.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Pc({fromRouteId:e},s)))},[n,e])}const _1={};function nU(n,e,t){!e&&!_1[n]&&(_1[n]=!0)}function Gv(n){mn(!1)}function iU(n){let{basename:e="/",children:t=null,location:i,navigationType:r=la.Pop,navigator:s,static:o=!1,future:u}=n;Wc()&&mn(!1);let c=e.replace(/^\/*/,"/"),f=be.useMemo(()=>({basename:c,navigator:s,static:o,future:Pc({v7_relativeSplatPath:!1},u)}),[c,u,s,o]);typeof i=="string"&&(i=eu(i));let{pathname:h="/",search:p="",hash:m="",state:v=null,key:S="default"}=i,E=be.useMemo(()=>{let _=zl(h,c);return _==null?null:{location:{pathname:_,search:p,hash:m,state:v,key:S},navigationType:r}},[c,h,p,m,v,S,r]);return E==null?null:be.createElement(Ia.Provider,{value:f},be.createElement(sp.Provider,{children:t,value:E}))}function rU(n){let{children:e,location:t}=n;return WO(Wv(e),t)}new Promise(()=>{});function Wv(n,e){e===void 0&&(e=[]);let t=[];return be.Children.forEach(n,(i,r)=>{if(!be.isValidElement(i))return;let s=[...e,r];if(i.type===be.Fragment){t.push.apply(t,Wv(i.props.children,s));return}i.type!==Gv&&mn(!1),!i.props.index||!i.props.children||mn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Wv(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ph(){return Ph=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ph.apply(this,arguments)}function Sb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function sU(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function aU(n,e){return n.button===0&&(!e||e==="_self")&&!sU(n)}function Xv(n){return n===void 0&&(n=""),new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((e,t)=>{let i=n[t];return e.concat(Array.isArray(i)?i.map(r=>[t,r]):[[t,i]])},[]))}function oU(n,e){let t=Xv(n);return e&&e.forEach((i,r)=>{t.has(r)||e.getAll(r).forEach(s=>{t.append(r,s)})}),t}const lU=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],uU=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],cU="6";try{window.__reactRouterVersion=cU}catch{}const fU=be.createContext({isTransitioning:!1}),dU="startTransition",y1=oN[dU];function hU(n){let{basename:e,children:t,future:i,window:r}=n,s=be.useRef();s.current==null&&(s.current=_O({window:r,v5Compat:!0}));let o=s.current,[u,c]=be.useState({action:o.action,location:o.location}),{v7_startTransition:f}=i||{},h=be.useCallback(p=>{f&&y1?y1(()=>c(p)):c(p)},[c,f]);return be.useLayoutEffect(()=>o.listen(h),[o,h]),be.createElement(iU,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:o,future:i})}const pU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gU=be.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:u,target:c,to:f,preventScrollReset:h,unstable_viewTransition:p}=e,m=Sb(e,lU),{basename:v}=be.useContext(Ia),S,E=!1;if(typeof f=="string"&&mU.test(f)&&(S=f,pU))try{let x=new URL(window.location.href),C=f.startsWith("//")?new URL(x.protocol+f):new URL(f),U=zl(C.pathname,v);C.origin===x.origin&&U!=null?f=U+C.search+C.hash:E=!0}catch{}let _=VO(f,{relative:r}),g=_U(f,{replace:o,state:u,target:c,preventScrollReset:h,relative:r,unstable_viewTransition:p});function M(x){i&&i(x),x.defaultPrevented||g(x)}return be.createElement("a",Ph({},m,{href:S||_,onClick:E||s?i:M,ref:t,target:c}))}),ac=be.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:u,to:c,unstable_viewTransition:f,children:h}=e,p=Sb(e,uU),m=ap(c,{relative:p.relative}),v=tu(),S=be.useContext(mb),{navigator:E,basename:_}=be.useContext(Ia),g=S!=null&&xU(m)&&f===!0,M=E.encodeLocation?E.encodeLocation(m).pathname:m.pathname,x=v.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(x=x.toLowerCase(),C=C?C.toLowerCase():null,M=M.toLowerCase()),C&&_&&(C=zl(C,_)||C);const U=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let O=x===M||!o&&x.startsWith(M)&&x.charAt(U)==="/",I=C!=null&&(C===M||!o&&C.startsWith(M)&&C.charAt(M.length)==="/"),z={isActive:O,isPending:I,isTransitioning:g},A=O?i:void 0,w;typeof s=="function"?w=s(z):w=[s,O?"active":null,I?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(z):u;return be.createElement(gU,Ph({},p,{"aria-current":A,className:w,ref:t,style:N,to:c,unstable_viewTransition:f}),typeof h=="function"?h(z):h)});var jv;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(jv||(jv={}));var x1;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(x1||(x1={}));function vU(n){let e=be.useContext(rp);return e||mn(!1),e}function _U(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:u}=e===void 0?{}:e,c=_b(),f=tu(),h=ap(n,{relative:o});return be.useCallback(p=>{if(aU(p,t)){p.preventDefault();let m=i!==void 0?i:Ch(f)===Ch(h);c(n,{replace:m,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:u})}},[f,c,h,i,r,t,n,s,o,u])}function yU(n){let e=be.useRef(Xv(n)),t=be.useRef(!1),i=tu(),r=be.useMemo(()=>oU(i.search,t.current?null:e.current),[i.search]),s=_b(),o=be.useCallback((u,c)=>{const f=Xv(typeof u=="function"?u(r):u);t.current=!0,s("?"+f,c)},[s,r]);return[r,o]}function xU(n,e){e===void 0&&(e={});let t=be.useContext(fU);t==null&&mn(!1);let{basename:i}=vU(jv.useViewTransitionState),r=ap(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=zl(t.currentLocation.pathname,i)||t.currentLocation.pathname,o=zl(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Vv(r.pathname,o)!=null||Vv(r.pathname,s)!=null}const SU=()=>De.jsxs("header",{className:"header bg-m-white w-full min-w-full",children:[De.jsx(ac,{to:"/",className:"w-12 h-12 rounded-lg bg-white items-center justify-center flex font-bold shadow-md",children:De.jsx("p",{className:"blue-gradient_text",children:"LBVT"})}),De.jsx("nav",{className:"flex text-lg gap-7 font-medium",children:De.jsx(ac,{to:"/Help",className:({isActive:n})=>n?"text-blue-500":"text-white",children:"Help"})})]}),MU="modulepreload",EU=function(n){return"/"+n},S1={},M1=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.all(t.map(c=>{if(c=EU(c),c in S1)return;S1[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let v=s.length-1;v>=0;v--){const S=s[v];if(S.href===c&&(!f||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":MU,f||(m.as="script",m.crossOrigin=""),m.href=c,u&&m.setAttribute("nonce",u),document.head.appendChild(m),f)return new Promise((v,S)=>{m.addEventListener("load",v),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},wU=(n,e)=>{const t=n[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const v_="163",zo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TU=0,E1=1,bU=2,Mb=1,AU=2,hs=3,Ts=0,bi=1,nr=2,Ar=0,Cl=1,Yv=2,w1=3,T1=4,CU=5,Ja=100,RU=101,PU=102,LU=103,IU=104,NU=200,DU=201,OU=202,UU=203,$v=204,qv=205,kU=206,FU=207,BU=208,zU=209,HU=210,VU=211,GU=212,WU=213,XU=214,jU=0,YU=1,$U=2,Lh=3,qU=4,KU=5,ZU=6,QU=7,Eb=0,JU=1,ek=2,Ma=0,tk=1,nk=2,ik=3,rk=4,sk=5,ak=6,ok=7,b1="attached",lk="detached",wb=300,Hl=301,Vl=302,Kv=303,Zv=304,op=306,Gl=1e3,ua=1001,Ih=1002,fi=1003,Tb=1004,$u=1005,Ui=1006,eh=1007,_s=1008,Ea=1009,uk=1010,ck=1011,bb=1012,Ab=1013,Wl=1014,Vr=1015,xr=1016,Cb=1017,Rb=1018,Xc=1020,fk=35902,dk=1021,hk=1022,Er=1023,pk=1024,mk=1025,Rl=1026,Lc=1027,Pb=1028,Lb=1029,gk=1030,Ib=1031,Nb=1033,ig=33776,rg=33777,sg=33778,ag=33779,A1=35840,C1=35841,R1=35842,P1=35843,Db=36196,L1=37492,I1=37496,N1=37808,D1=37809,O1=37810,U1=37811,k1=37812,F1=37813,B1=37814,z1=37815,H1=37816,V1=37817,G1=37818,W1=37819,X1=37820,j1=37821,og=36492,Y1=36494,$1=36495,vk=36283,q1=36284,K1=36285,Z1=36286,Ic=2300,Xl=2301,lg=2302,Q1=2400,J1=2401,eM=2402,_k=2500,yk=0,Ob=1,Qv=2,xk=3200,Ub=3201,kb=0,Sk=1,sa="",oi="srgb",Vn="srgb-linear",__="display-p3",lp="display-p3-linear",Nh="linear",Zt="srgb",Dh="rec709",Oh="p3",Vo=7680,tM=519,Mk=512,Ek=513,wk=514,Fb=515,Tk=516,bk=517,Ak=518,Ck=519,Jv=35044,nM="300 es",ys=2e3,Uh=2001;class Eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iM=1234567;const oc=Math.PI/180,jl=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]).toLowerCase()}function Bn(n,e,t){return Math.max(e,Math.min(t,n))}function y_(n,e){return(n%e+e)%e}function Rk(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Pk(n,e,t){return n!==e?(t-n)/(e-n):0}function lc(n,e,t){return(1-t)*n+t*e}function Lk(n,e,t,i){return lc(n,e,1-Math.exp(-t*i))}function Ik(n,e=1){return e-Math.abs(y_(n,e*2)-e)}function Nk(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dk(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ok(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Uk(n,e){return n+Math.random()*(e-n)}function kk(n){return n*(.5-Math.random())}function Fk(n){n!==void 0&&(iM=n);let e=iM+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bk(n){return n*oc}function zk(n){return n*jl}function Hk(n){return(n&n-1)===0&&n!==0}function Vk(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gk(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wk(n,e,t,i,r){const s=Math.cos,o=Math.sin,u=s(t/2),c=o(t/2),f=s((e+i)/2),h=o((e+i)/2),p=s((e-i)/2),m=o((e-i)/2),v=s((i-e)/2),S=o((i-e)/2);switch(r){case"XYX":n.set(u*h,c*p,c*m,u*f);break;case"YZY":n.set(c*m,u*h,c*p,u*f);break;case"ZXZ":n.set(c*p,c*m,u*h,u*f);break;case"XZX":n.set(u*h,c*S,c*v,u*f);break;case"YXY":n.set(c*v,u*h,c*S,u*f);break;case"ZYZ":n.set(c*S,c*v,u*h,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bb={DEG2RAD:oc,RAD2DEG:jl,generateUUID:Cr,clamp:Bn,euclideanModulo:y_,mapLinear:Rk,inverseLerp:Pk,lerp:lc,damp:Lk,pingpong:Ik,smoothstep:Nk,smootherstep:Dk,randInt:Ok,randFloat:Uk,randFloatSpread:kk,seededRandom:Fk,degToRad:Bk,radToDeg:zk,isPowerOfTwo:Hk,ceilPowerOfTwo:Vk,floorPowerOfTwo:Gk,setQuaternionFromProperEuler:Wk,normalize:Ft,denormalize:Sr};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,r,s,o,u,c,f){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,u,c,f)}set(e,t,i,r,s,o,u,c,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=u,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],u=i[3],c=i[6],f=i[1],h=i[4],p=i[7],m=i[2],v=i[5],S=i[8],E=r[0],_=r[3],g=r[6],M=r[1],x=r[4],C=r[7],U=r[2],O=r[5],I=r[8];return s[0]=o*E+u*M+c*U,s[3]=o*_+u*x+c*O,s[6]=o*g+u*C+c*I,s[1]=f*E+h*M+p*U,s[4]=f*_+h*x+p*O,s[7]=f*g+h*C+p*I,s[2]=m*E+v*M+S*U,s[5]=m*_+v*x+S*O,s[8]=m*g+v*C+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],u=e[5],c=e[6],f=e[7],h=e[8];return t*o*h-t*u*f-i*s*h+i*u*c+r*s*f-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],u=e[5],c=e[6],f=e[7],h=e[8],p=h*o-u*f,m=u*c-h*s,v=f*s-o*c,S=t*p+i*m+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(r*f-h*i)*E,e[2]=(u*i-r*o)*E,e[3]=m*E,e[4]=(h*t-r*c)*E,e[5]=(r*s-u*t)*E,e[6]=v*E,e[7]=(i*c-f*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,u){const c=Math.cos(s),f=Math.sin(s);return this.set(i*c,i*f,-i*(c*o+f*u)+o+e,-r*f,r*c,-r*(-f*o+c*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ug.makeScale(e,t)),this}rotate(e){return this.premultiply(ug.makeRotation(-e)),this}translate(e,t){return this.premultiply(ug.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ug=new mt;function zb(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xk(){const n=Nc("canvas");return n.style.display="block",n}const rM={};function Hb(n){n in rM||(rM[n]=!0,console.warn(n))}const sM=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),aM=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sd={[Vn]:{transfer:Nh,primaries:Dh,toReference:n=>n,fromReference:n=>n},[oi]:{transfer:Zt,primaries:Dh,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lp]:{transfer:Nh,primaries:Oh,toReference:n=>n.applyMatrix3(aM),fromReference:n=>n.applyMatrix3(sM)},[__]:{transfer:Zt,primaries:Oh,toReference:n=>n.convertSRGBToLinear().applyMatrix3(aM),fromReference:n=>n.applyMatrix3(sM).convertLinearToSRGB()}},jk=new Set([Vn,lp]),Ut={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!jk.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=sd[e].toReference,r=sd[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return sd[n].primaries},getTransfer:function(n){return n===sa?Nh:sd[n].transfer}};function Pl(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cg(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Go;class Yk{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Go===void 0&&(Go=Nc("canvas")),Go.width=e.width,Go.height=e.height;const i=Go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Go}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pl(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pl(t[i]/255)*255):t[i]=Pl(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $k=0;class Vb{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$k++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,u=r.length;o<u;o++)r[o].isDataTexture?s.push(fg(r[o].image)):s.push(fg(r[o]))}else s=fg(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fg(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yk.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qk=0;class On extends Eo{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=ua,r=ua,s=Ui,o=_s,u=Er,c=Ea,f=On.DEFAULT_ANISOTROPY,h=sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qk++}),this.uuid=Cr(),this.name="",this.source=new Vb(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case ua:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case ua:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=wb;On.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,f=c[0],h=c[4],p=c[8],m=c[1],v=c[5],S=c[9],E=c[2],_=c[6],g=c[10];if(Math.abs(h-m)<.01&&Math.abs(p-E)<.01&&Math.abs(S-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+E)<.1&&Math.abs(S+_)<.1&&Math.abs(f+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(f+1)/2,C=(v+1)/2,U=(g+1)/2,O=(h+m)/4,I=(p+E)/4,z=(S+_)/4;return x>C&&x>U?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=O/i,s=I/i):C>U?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=O/r,s=z/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=I/s,r=z/s),this.set(i,r,s,t),this}let M=Math.sqrt((_-S)*(_-S)+(p-E)*(p-E)+(m-h)*(m-h));return Math.abs(M)<.001&&(M=1),this.x=(_-S)/M,this.y=(p-E)/M,this.z=(m-h)/M,this.w=Math.acos((f+v+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kk extends Eo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new On(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let u=0;u<o;u++)this.textures[u]=s.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vb(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Kk{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gb extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zk extends On{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,u){let c=i[r+0],f=i[r+1],h=i[r+2],p=i[r+3];const m=s[o+0],v=s[o+1],S=s[o+2],E=s[o+3];if(u===0){e[t+0]=c,e[t+1]=f,e[t+2]=h,e[t+3]=p;return}if(u===1){e[t+0]=m,e[t+1]=v,e[t+2]=S,e[t+3]=E;return}if(p!==E||c!==m||f!==v||h!==S){let _=1-u;const g=c*m+f*v+h*S+p*E,M=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const U=Math.sqrt(x),O=Math.atan2(U,g*M);_=Math.sin(_*O)/U,u=Math.sin(u*O)/U}const C=u*M;if(c=c*_+m*C,f=f*_+v*C,h=h*_+S*C,p=p*_+E*C,_===1-u){const U=1/Math.sqrt(c*c+f*f+h*h+p*p);c*=U,f*=U,h*=U,p*=U}}e[t]=c,e[t+1]=f,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){const u=i[r],c=i[r+1],f=i[r+2],h=i[r+3],p=s[o],m=s[o+1],v=s[o+2],S=s[o+3];return e[t]=u*S+h*p+c*v-f*m,e[t+1]=c*S+h*m+f*p-u*v,e[t+2]=f*S+h*v+u*m-c*p,e[t+3]=h*S-u*p-c*m-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,u=Math.cos,c=Math.sin,f=u(i/2),h=u(r/2),p=u(s/2),m=c(i/2),v=c(r/2),S=c(s/2);switch(o){case"XYZ":this._x=m*h*p+f*v*S,this._y=f*v*p-m*h*S,this._z=f*h*S+m*v*p,this._w=f*h*p-m*v*S;break;case"YXZ":this._x=m*h*p+f*v*S,this._y=f*v*p-m*h*S,this._z=f*h*S-m*v*p,this._w=f*h*p+m*v*S;break;case"ZXY":this._x=m*h*p-f*v*S,this._y=f*v*p+m*h*S,this._z=f*h*S+m*v*p,this._w=f*h*p-m*v*S;break;case"ZYX":this._x=m*h*p-f*v*S,this._y=f*v*p+m*h*S,this._z=f*h*S-m*v*p,this._w=f*h*p+m*v*S;break;case"YZX":this._x=m*h*p+f*v*S,this._y=f*v*p+m*h*S,this._z=f*h*S-m*v*p,this._w=f*h*p-m*v*S;break;case"XZY":this._x=m*h*p-f*v*S,this._y=f*v*p-m*h*S,this._z=f*h*S+m*v*p,this._w=f*h*p+m*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],u=t[5],c=t[9],f=t[2],h=t[6],p=t[10],m=i+u+p;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(h-c)*v,this._y=(s-f)*v,this._z=(o-r)*v}else if(i>u&&i>p){const v=2*Math.sqrt(1+i-u-p);this._w=(h-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+f)/v}else if(u>p){const v=2*Math.sqrt(1+u-i-p);this._w=(s-f)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+h)/v}else{const v=2*Math.sqrt(1+p-i-u);this._w=(o-r)/v,this._x=(s+f)/v,this._y=(c+h)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,u=t._x,c=t._y,f=t._z,h=t._w;return this._x=i*h+o*u+r*f-s*c,this._y=r*h+o*c+s*u-i*f,this._z=s*h+o*f+i*c-r*u,this._w=o*h-i*u-r*c-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let u=o*e._w+i*e._x+r*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-u*u;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const f=Math.sqrt(c),h=Math.atan2(f,u),p=Math.sin((1-t)*h)/f,m=Math.sin(t*h)/f;return this._w=o*p+this._w*m,this._x=i*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oM.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,u=e.z,c=e.w,f=2*(o*r-u*i),h=2*(u*t-s*r),p=2*(s*i-o*t);return this.x=t+c*f+o*p-u*h,this.y=i+c*h+u*f-s*p,this.z=r+c*p+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,u=t.y,c=t.z;return this.x=r*c-s*u,this.y=s*o-i*c,this.z=i*u-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dg.copy(this).projectOnVector(e),this.sub(dg)}reflect(e){return this.sub(dg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dg=new X,oM=new Yr;class Ps{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,u=s.count;o<u;o++)e.isMesh===!0?e.getVertexPosition(o,pr):pr.fromBufferAttribute(s,o),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ad.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ad.copy(i.boundingBox)),ad.applyMatrix4(e.matrixWorld),this.union(ad)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uu),od.subVectors(this.max,Uu),Wo.subVectors(e.a,Uu),Xo.subVectors(e.b,Uu),jo.subVectors(e.c,Uu),Xs.subVectors(Xo,Wo),js.subVectors(jo,Xo),Ga.subVectors(Wo,jo);let t=[0,-Xs.z,Xs.y,0,-js.z,js.y,0,-Ga.z,Ga.y,Xs.z,0,-Xs.x,js.z,0,-js.x,Ga.z,0,-Ga.x,-Xs.y,Xs.x,0,-js.y,js.x,0,-Ga.y,Ga.x,0];return!hg(t,Wo,Xo,jo,od)||(t=[1,0,0,0,1,0,0,0,1],!hg(t,Wo,Xo,jo,od))?!1:(ld.crossVectors(Xs,js),t=[ld.x,ld.y,ld.z],hg(t,Wo,Xo,jo,od))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const os=[new X,new X,new X,new X,new X,new X,new X,new X],pr=new X,ad=new Ps,Wo=new X,Xo=new X,jo=new X,Xs=new X,js=new X,Ga=new X,Uu=new X,od=new X,ld=new X,Wa=new X;function hg(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Wa.fromArray(n,s);const u=r.x*Math.abs(Wa.x)+r.y*Math.abs(Wa.y)+r.z*Math.abs(Wa.z),c=e.dot(Wa),f=t.dot(Wa),h=i.dot(Wa);if(Math.max(-Math.max(c,f,h),Math.min(c,f,h))>u)return!1}return!0}const Qk=new Ps,ku=new X,pg=new X;class qr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qk.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ku.subVectors(e,this.center);const t=ku.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ku,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ku.copy(e.center).add(pg)),this.expandByPoint(ku.copy(e.center).sub(pg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ls=new X,mg=new X,ud=new X,Ys=new X,gg=new X,cd=new X,vg=new X;class nu{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ls.copy(this.origin).addScaledVector(this.direction,t),ls.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mg.copy(e).add(t).multiplyScalar(.5),ud.copy(t).sub(e).normalize(),Ys.copy(this.origin).sub(mg);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ud),u=Ys.dot(this.direction),c=-Ys.dot(ud),f=Ys.lengthSq(),h=Math.abs(1-o*o);let p,m,v,S;if(h>0)if(p=o*c-u,m=o*u-c,S=s*h,p>=0)if(m>=-S)if(m<=S){const E=1/h;p*=E,m*=E,v=p*(p+o*m+2*u)+m*(o*p+m+2*c)+f}else m=s,p=Math.max(0,-(o*m+u)),v=-p*p+m*(m+2*c)+f;else m=-s,p=Math.max(0,-(o*m+u)),v=-p*p+m*(m+2*c)+f;else m<=-S?(p=Math.max(0,-(-o*s+u)),m=p>0?-s:Math.min(Math.max(-s,-c),s),v=-p*p+m*(m+2*c)+f):m<=S?(p=0,m=Math.min(Math.max(-s,-c),s),v=m*(m+2*c)+f):(p=Math.max(0,-(o*s+u)),m=p>0?s:Math.min(Math.max(-s,-c),s),v=-p*p+m*(m+2*c)+f);else m=o>0?-s:s,p=Math.max(0,-(o*m+u)),v=-p*p+m*(m+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(mg).addScaledVector(ud,m),v}intersectSphere(e,t){ls.subVectors(e.center,this.origin);const i=ls.dot(this.direction),r=ls.dot(ls)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),u=i-o,c=i+o;return c<0?null:u<0?this.at(c,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,u,c;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(u=(e.min.z-m.z)*p,c=(e.max.z-m.z)*p):(u=(e.max.z-m.z)*p,c=(e.min.z-m.z)*p),i>c||u>r)||((u>i||i!==i)&&(i=u),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ls)!==null}intersectTriangle(e,t,i,r,s){gg.subVectors(t,e),cd.subVectors(i,e),vg.crossVectors(gg,cd);let o=this.direction.dot(vg),u;if(o>0){if(r)return null;u=1}else if(o<0)u=-1,o=-o;else return null;Ys.subVectors(this.origin,e);const c=u*this.direction.dot(cd.crossVectors(Ys,cd));if(c<0)return null;const f=u*this.direction.dot(gg.cross(Ys));if(f<0||c+f>o)return null;const h=-u*Ys.dot(vg);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,u,c,f,h,p,m,v,S,E,_){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,u,c,f,h,p,m,v,S,E,_)}set(e,t,i,r,s,o,u,c,f,h,p,m,v,S,E,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=u,g[13]=c,g[2]=f,g[6]=h,g[10]=p,g[14]=m,g[3]=v,g[7]=S,g[11]=E,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),s=1/Yo.setFromMatrixColumn(e,1).length(),o=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),u=Math.sin(i),c=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,v=o*p,S=u*h,E=u*p;t[0]=c*h,t[4]=-c*p,t[8]=f,t[1]=v+S*f,t[5]=m-E*f,t[9]=-u*c,t[2]=E-m*f,t[6]=S+v*f,t[10]=o*c}else if(e.order==="YXZ"){const m=c*h,v=c*p,S=f*h,E=f*p;t[0]=m+E*u,t[4]=S*u-v,t[8]=o*f,t[1]=o*p,t[5]=o*h,t[9]=-u,t[2]=v*u-S,t[6]=E+m*u,t[10]=o*c}else if(e.order==="ZXY"){const m=c*h,v=c*p,S=f*h,E=f*p;t[0]=m-E*u,t[4]=-o*p,t[8]=S+v*u,t[1]=v+S*u,t[5]=o*h,t[9]=E-m*u,t[2]=-o*f,t[6]=u,t[10]=o*c}else if(e.order==="ZYX"){const m=o*h,v=o*p,S=u*h,E=u*p;t[0]=c*h,t[4]=S*f-v,t[8]=m*f+E,t[1]=c*p,t[5]=E*f+m,t[9]=v*f-S,t[2]=-f,t[6]=u*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,v=o*f,S=u*c,E=u*f;t[0]=c*h,t[4]=E-m*p,t[8]=S*p+v,t[1]=p,t[5]=o*h,t[9]=-u*h,t[2]=-f*h,t[6]=v*p+S,t[10]=m-E*p}else if(e.order==="XZY"){const m=o*c,v=o*f,S=u*c,E=u*f;t[0]=c*h,t[4]=-p,t[8]=f*h,t[1]=m*p+E,t[5]=o*h,t[9]=v*p-S,t[2]=S*p-v,t[6]=u*h,t[10]=E*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jk,e,eF)}lookAt(e,t,i){const r=this.elements;return Ni.subVectors(e,t),Ni.lengthSq()===0&&(Ni.z=1),Ni.normalize(),$s.crossVectors(i,Ni),$s.lengthSq()===0&&(Math.abs(i.z)===1?Ni.x+=1e-4:Ni.z+=1e-4,Ni.normalize(),$s.crossVectors(i,Ni)),$s.normalize(),fd.crossVectors(Ni,$s),r[0]=$s.x,r[4]=fd.x,r[8]=Ni.x,r[1]=$s.y,r[5]=fd.y,r[9]=Ni.y,r[2]=$s.z,r[6]=fd.z,r[10]=Ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],u=i[4],c=i[8],f=i[12],h=i[1],p=i[5],m=i[9],v=i[13],S=i[2],E=i[6],_=i[10],g=i[14],M=i[3],x=i[7],C=i[11],U=i[15],O=r[0],I=r[4],z=r[8],A=r[12],w=r[1],N=r[5],V=r[9],k=r[13],ae=r[2],Z=r[6],me=r[10],ge=r[14],W=r[3],K=r[7],Y=r[11],Me=r[15];return s[0]=o*O+u*w+c*ae+f*W,s[4]=o*I+u*N+c*Z+f*K,s[8]=o*z+u*V+c*me+f*Y,s[12]=o*A+u*k+c*ge+f*Me,s[1]=h*O+p*w+m*ae+v*W,s[5]=h*I+p*N+m*Z+v*K,s[9]=h*z+p*V+m*me+v*Y,s[13]=h*A+p*k+m*ge+v*Me,s[2]=S*O+E*w+_*ae+g*W,s[6]=S*I+E*N+_*Z+g*K,s[10]=S*z+E*V+_*me+g*Y,s[14]=S*A+E*k+_*ge+g*Me,s[3]=M*O+x*w+C*ae+U*W,s[7]=M*I+x*N+C*Z+U*K,s[11]=M*z+x*V+C*me+U*Y,s[15]=M*A+x*k+C*ge+U*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],u=e[5],c=e[9],f=e[13],h=e[2],p=e[6],m=e[10],v=e[14],S=e[3],E=e[7],_=e[11],g=e[15];return S*(+s*c*p-r*f*p-s*u*m+i*f*m+r*u*v-i*c*v)+E*(+t*c*v-t*f*m+s*o*m-r*o*v+r*f*h-s*c*h)+_*(+t*f*p-t*u*v-s*o*p+i*o*v+s*u*h-i*f*h)+g*(-r*u*h-t*c*p+t*u*m+r*o*p-i*o*m+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],u=e[5],c=e[6],f=e[7],h=e[8],p=e[9],m=e[10],v=e[11],S=e[12],E=e[13],_=e[14],g=e[15],M=p*_*f-E*m*f+E*c*v-u*_*v-p*c*g+u*m*g,x=S*m*f-h*_*f-S*c*v+o*_*v+h*c*g-o*m*g,C=h*E*f-S*p*f+S*u*v-o*E*v-h*u*g+o*p*g,U=S*p*c-h*E*c-S*u*m+o*E*m+h*u*_-o*p*_,O=t*M+i*x+r*C+s*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=M*I,e[1]=(E*m*s-p*_*s-E*r*v+i*_*v+p*r*g-i*m*g)*I,e[2]=(u*_*s-E*c*s+E*r*f-i*_*f-u*r*g+i*c*g)*I,e[3]=(p*c*s-u*m*s-p*r*f+i*m*f+u*r*v-i*c*v)*I,e[4]=x*I,e[5]=(h*_*s-S*m*s+S*r*v-t*_*v-h*r*g+t*m*g)*I,e[6]=(S*c*s-o*_*s-S*r*f+t*_*f+o*r*g-t*c*g)*I,e[7]=(o*m*s-h*c*s+h*r*f-t*m*f-o*r*v+t*c*v)*I,e[8]=C*I,e[9]=(S*p*s-h*E*s-S*i*v+t*E*v+h*i*g-t*p*g)*I,e[10]=(o*E*s-S*u*s+S*i*f-t*E*f-o*i*g+t*u*g)*I,e[11]=(h*u*s-o*p*s-h*i*f+t*p*f+o*i*v-t*u*v)*I,e[12]=U*I,e[13]=(h*E*r-S*p*r+S*i*m-t*E*m-h*i*_+t*p*_)*I,e[14]=(S*u*r-o*E*r-S*i*c+t*E*c+o*i*_-t*u*_)*I,e[15]=(o*p*r-h*u*r+h*i*c-t*p*c-o*i*m+t*u*m)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,u=e.y,c=e.z,f=s*o,h=s*u;return this.set(f*o+i,f*u-r*c,f*c+r*u,0,f*u+r*c,h*u+i,h*c-r*o,0,f*c-r*u,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,u=t._z,c=t._w,f=s+s,h=o+o,p=u+u,m=s*f,v=s*h,S=s*p,E=o*h,_=o*p,g=u*p,M=c*f,x=c*h,C=c*p,U=i.x,O=i.y,I=i.z;return r[0]=(1-(E+g))*U,r[1]=(v+C)*U,r[2]=(S-x)*U,r[3]=0,r[4]=(v-C)*O,r[5]=(1-(m+g))*O,r[6]=(_+M)*O,r[7]=0,r[8]=(S+x)*I,r[9]=(_-M)*I,r[10]=(1-(m+E))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yo.set(r[0],r[1],r[2]).length();const o=Yo.set(r[4],r[5],r[6]).length(),u=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mr.copy(this);const f=1/s,h=1/o,p=1/u;return mr.elements[0]*=f,mr.elements[1]*=f,mr.elements[2]*=f,mr.elements[4]*=h,mr.elements[5]*=h,mr.elements[6]*=h,mr.elements[8]*=p,mr.elements[9]*=p,mr.elements[10]*=p,t.setFromRotationMatrix(mr),i.x=s,i.y=o,i.z=u,this}makePerspective(e,t,i,r,s,o,u=ys){const c=this.elements,f=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let v,S;if(u===ys)v=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(u===Uh)v=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return c[0]=f,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,u=ys){const c=this.elements,f=1/(t-e),h=1/(i-r),p=1/(o-s),m=(t+e)*f,v=(i+r)*h;let S,E;if(u===ys)S=(o+s)*p,E=-2*p;else if(u===Uh)S=s*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=E,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yo=new X,mr=new ct,Jk=new X(0,0,0),eF=new X(1,1,1),$s=new X,fd=new X,Ni=new X,lM=new ct,uM=new Yr;class $r{constructor(e=0,t=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],u=r[8],c=r[1],f=r[5],h=r[9],p=r[2],m=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-Bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-h,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lM,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uM.setFromEuler(this),this.setFromQuaternion(uM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";let x_=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tF=0;const cM=new X,$o=new Yr,us=new ct,dd=new X,Fu=new X,nF=new X,iF=new Yr,fM=new X(1,0,0),dM=new X(0,1,0),hM=new X(0,0,1),pM={type:"added"},rF={type:"removed"},qo={type:"childadded",child:null},_g={type:"childremoved",child:null};class ln extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tF++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new X,t=new $r,i=new Yr,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new mt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(fM,e)}rotateY(e){return this.rotateOnAxis(dM,e)}rotateZ(e){return this.rotateOnAxis(hM,e)}translateOnAxis(e,t){return cM.copy(e).applyQuaternion(this.quaternion),this.position.add(cM.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fM,e)}translateY(e){return this.translateOnAxis(dM,e)}translateZ(e){return this.translateOnAxis(hM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dd.copy(e):dd.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Fu,dd,this.up):us.lookAt(dd,Fu,this.up),this.quaternion.setFromRotationMatrix(us),r&&(us.extractRotation(r.matrixWorld),$o.setFromRotationMatrix(us),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pM),qo.child=e,this.dispatchEvent(qo),qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rF),_g.child=e,this.dispatchEvent(_g),_g.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),us.multiply(e.parent.matrixWorld)),e.applyMatrix4(us),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pM),qo.child=e,this.dispatchEvent(qo),qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fu,e,nF),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fu,iF,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const u=r[s];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(u,c){return u[c.uuid]===void 0&&(u[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const c=u.shapes;if(Array.isArray(c))for(let f=0,h=c.length;f<h;f++){const p=c[f];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let c=0,f=this.material.length;c<f;c++)u.push(s(e.materials,this.material[c]));r.material=u}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const c=this.animations[u];r.animations.push(s(e.animations,c))}}if(t){const u=o(e.geometries),c=o(e.materials),f=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),v=o(e.animations),S=o(e.nodes);u.length>0&&(i.geometries=u),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),v.length>0&&(i.animations=v),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(u){const c=[];for(const f in u){const h=u[f];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new X(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gr=new X,cs=new X,yg=new X,fs=new X,Ko=new X,Zo=new X,mM=new X,xg=new X,Sg=new X,Mg=new X;class Hr{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gr.subVectors(e,t),r.cross(gr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gr.subVectors(r,t),cs.subVectors(i,t),yg.subVectors(e,t);const o=gr.dot(gr),u=gr.dot(cs),c=gr.dot(yg),f=cs.dot(cs),h=cs.dot(yg),p=o*f-u*u;if(p===0)return s.set(0,0,0),null;const m=1/p,v=(f*c-u*h)*m,S=(o*h-u*c)*m;return s.set(1-v-S,S,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,i,r,s,o,u,c){return this.getBarycoord(e,t,i,r,fs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fs.x),c.addScaledVector(o,fs.y),c.addScaledVector(u,fs.z),c)}static isFrontFacing(e,t,i,r){return gr.subVectors(i,t),cs.subVectors(e,t),gr.cross(cs).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gr.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),gr.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,u;Ko.subVectors(r,i),Zo.subVectors(s,i),xg.subVectors(e,i);const c=Ko.dot(xg),f=Zo.dot(xg);if(c<=0&&f<=0)return t.copy(i);Sg.subVectors(e,r);const h=Ko.dot(Sg),p=Zo.dot(Sg);if(h>=0&&p<=h)return t.copy(r);const m=c*p-h*f;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ko,o);Mg.subVectors(e,s);const v=Ko.dot(Mg),S=Zo.dot(Mg);if(S>=0&&v<=S)return t.copy(s);const E=v*f-c*S;if(E<=0&&f>=0&&S<=0)return u=f/(f-S),t.copy(i).addScaledVector(Zo,u);const _=h*S-v*p;if(_<=0&&p-h>=0&&v-S>=0)return mM.subVectors(s,r),u=(p-h)/(p-h+(v-S)),t.copy(r).addScaledVector(mM,u);const g=1/(_+E+m);return o=E*g,u=m*g,t.copy(i).addScaledVector(Ko,o).addScaledVector(Zo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qs={h:0,s:0,l:0},hd={h:0,s:0,l:0};function Eg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ut.workingColorSpace){if(e=y_(e,1),t=Bn(t,0,1),i=Bn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Eg(o,s,e+1/3),this.g=Eg(o,s,e),this.b=Eg(o,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],u=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const i=Wb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}copyLinearToSRGB(e){return this.r=cg(e.r),this.g=cg(e.g),this.b=cg(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Ut.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Bn(Kn.r*255,0,255))*65536+Math.round(Bn(Kn.g*255,0,255))*256+Math.round(Bn(Kn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Kn.copy(this),t);const i=Kn.r,r=Kn.g,s=Kn.b,o=Math.max(i,r,s),u=Math.min(i,r,s);let c,f;const h=(u+o)/2;if(u===o)c=0,f=0;else{const p=o-u;switch(f=h<=.5?p/(o+u):p/(2-o-u),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=f,e.l=h,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=oi){Ut.fromWorkingColorSpace(Kn.copy(this),e);const t=Kn.r,i=Kn.g,r=Kn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qs),this.setHSL(qs.h+e,qs.s+t,qs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qs),e.getHSL(hd);const i=lc(qs.h,hd.h,t),r=lc(qs.s,hd.s,t),s=lc(qs.l,hd.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new tt;tt.NAMES=Wb;let sF=0;class jr extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sF++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Cl,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$v,this.blendDst=qv,this.blendEquation=Ja,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Lh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cl&&(i.blending=this.blending),this.side!==Ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$v&&(i.blendSrc=this.blendSrc),this.blendDst!==qv&&(i.blendDst=this.blendDst),this.blendEquation!==Ja&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lh&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const u in s){const c=s[u];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class so extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=Eb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new X,pd=new He;class hi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hb("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pd.fromBufferAttribute(this,t),pd.applyMatrix3(e),this.setXY(t,pd.x,pd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jv&&(e.usage=this.usage),e}}class Xb extends hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jb extends hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rr extends hi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let aF=0;const Qi=new ct,wg=new ln,Qo=new X,Di=new Ps,Bu=new Ps,In=new X;class or extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aF++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zb(e)?jb:Xb)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qi.makeRotationFromQuaternion(e),this.applyMatrix4(Qi),this}rotateX(e){return Qi.makeRotationX(e),this.applyMatrix4(Qi),this}rotateY(e){return Qi.makeRotationY(e),this.applyMatrix4(Qi),this}rotateZ(e){return Qi.makeRotationZ(e),this.applyMatrix4(Qi),this}translate(e,t,i){return Qi.makeTranslation(e,t,i),this.applyMatrix4(Qi),this}scale(e,t,i){return Qi.makeScale(e,t,i),this.applyMatrix4(Qi),this}lookAt(e){return wg.lookAt(e),wg.updateMatrix(),this.applyMatrix4(wg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const u=t[s];Bu.setFromBufferAttribute(u),this.morphTargetsRelative?(In.addVectors(Di.min,Bu.min),Di.expandByPoint(In),In.addVectors(Di.max,Bu.max),Di.expandByPoint(In)):(Di.expandByPoint(Bu.min),Di.expandByPoint(Bu.max))}Di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)In.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(In));if(t)for(let s=0,o=t.length;s<o;s++){const u=t[s],c=this.morphTargetsRelative;for(let f=0,h=u.count;f<h;f++)In.fromBufferAttribute(u,f),c&&(Qo.fromBufferAttribute(e,f),In.add(Qo)),r=Math.max(r,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),u=[],c=[];for(let z=0;z<i.count;z++)u[z]=new X,c[z]=new X;const f=new X,h=new X,p=new X,m=new He,v=new He,S=new He,E=new X,_=new X;function g(z,A,w){f.fromBufferAttribute(i,z),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,w),m.fromBufferAttribute(s,z),v.fromBufferAttribute(s,A),S.fromBufferAttribute(s,w),h.sub(f),p.sub(f),v.sub(m),S.sub(m);const N=1/(v.x*S.y-S.x*v.y);isFinite(N)&&(E.copy(h).multiplyScalar(S.y).addScaledVector(p,-v.y).multiplyScalar(N),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-S.x).multiplyScalar(N),u[z].add(E),u[A].add(E),u[w].add(E),c[z].add(_),c[A].add(_),c[w].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let z=0,A=M.length;z<A;++z){const w=M[z],N=w.start,V=w.count;for(let k=N,ae=N+V;k<ae;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new X,C=new X,U=new X,O=new X;function I(z){U.fromBufferAttribute(r,z),O.copy(U);const A=u[z];x.copy(A),x.sub(U.multiplyScalar(U.dot(A))).normalize(),C.crossVectors(O,A);const N=C.dot(c[z])<0?-1:1;o.setXYZW(z,x.x,x.y,x.z,N)}for(let z=0,A=M.length;z<A;++z){const w=M[z],N=w.start,V=w.count;for(let k=N,ae=N+V;k<ae;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,v=i.count;m<v;m++)i.setXYZ(m,0,0,0);const r=new X,s=new X,o=new X,u=new X,c=new X,f=new X,h=new X,p=new X;if(e)for(let m=0,v=e.count;m<v;m+=3){const S=e.getX(m+0),E=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,_),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),u.fromBufferAttribute(i,S),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,_),u.add(h),c.add(h),f.add(h),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,v=t.count;m<v;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(u,c){const f=u.array,h=u.itemSize,p=u.normalized,m=new f.constructor(c.length*h);let v=0,S=0;for(let E=0,_=c.length;E<_;E++){u.isInterleavedBufferAttribute?v=c[E]*u.data.stride+u.offset:v=c[E]*h;for(let g=0;g<h;g++)m[S++]=f[v++]}return new hi(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,i=this.index.array,r=this.attributes;for(const u in r){const c=r[u],f=e(c,i);t.setAttribute(u,f)}const s=this.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++){const m=f[h],v=e(m,i);c.push(v)}t.morphAttributes[u]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],h=[];for(let p=0,m=f.length;p<m;p++){const v=f[p];h.push(v.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let m=0,v=p.length;m<v;m++)h.push(p[m].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gM=new ct,Xa=new nu,md=new qr,vM=new X,Jo=new X,el=new X,tl=new X,Tg=new X,gd=new X,vd=new He,_d=new He,yd=new He,_M=new X,yM=new X,xM=new X,xd=new X,Sd=new X;class Mi extends ln{constructor(e=new or,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const u=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(s&&u){gd.set(0,0,0);for(let c=0,f=s.length;c<f;c++){const h=u[c],p=s[c];h!==0&&(Tg.fromBufferAttribute(p,e),o?gd.addScaledVector(Tg,h):gd.addScaledVector(Tg.sub(t),h))}t.add(gd)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),md.copy(i.boundingSphere),md.applyMatrix4(s),Xa.copy(e.ray).recast(e.near),!(md.containsPoint(Xa.origin)===!1&&(Xa.intersectSphere(md,vM)===null||Xa.origin.distanceToSquared(vM)>(e.far-e.near)**2))&&(gM.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(gM),!(i.boundingBox!==null&&Xa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,u=s.index,c=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,v=s.drawRange;if(u!==null)if(Array.isArray(o))for(let S=0,E=m.length;S<E;S++){const _=m[S],g=o[_.materialIndex],M=Math.max(_.start,v.start),x=Math.min(u.count,Math.min(_.start+_.count,v.start+v.count));for(let C=M,U=x;C<U;C+=3){const O=u.getX(C),I=u.getX(C+1),z=u.getX(C+2);r=Md(this,g,e,i,f,h,p,O,I,z),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),E=Math.min(u.count,v.start+v.count);for(let _=S,g=E;_<g;_+=3){const M=u.getX(_),x=u.getX(_+1),C=u.getX(_+2);r=Md(this,o,e,i,f,h,p,M,x,C),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let S=0,E=m.length;S<E;S++){const _=m[S],g=o[_.materialIndex],M=Math.max(_.start,v.start),x=Math.min(c.count,Math.min(_.start+_.count,v.start+v.count));for(let C=M,U=x;C<U;C+=3){const O=C,I=C+1,z=C+2;r=Md(this,g,e,i,f,h,p,O,I,z),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),E=Math.min(c.count,v.start+v.count);for(let _=S,g=E;_<g;_+=3){const M=_,x=_+1,C=_+2;r=Md(this,o,e,i,f,h,p,M,x,C),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function oF(n,e,t,i,r,s,o,u){let c;if(e.side===bi?c=i.intersectTriangle(o,s,r,!0,u):c=i.intersectTriangle(r,s,o,e.side===Ts,u),c===null)return null;Sd.copy(u),Sd.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(Sd);return f<t.near||f>t.far?null:{distance:f,point:Sd.clone(),object:n}}function Md(n,e,t,i,r,s,o,u,c,f){n.getVertexPosition(u,Jo),n.getVertexPosition(c,el),n.getVertexPosition(f,tl);const h=oF(n,e,t,i,Jo,el,tl,xd);if(h){r&&(vd.fromBufferAttribute(r,u),_d.fromBufferAttribute(r,c),yd.fromBufferAttribute(r,f),h.uv=Hr.getInterpolation(xd,Jo,el,tl,vd,_d,yd,new He)),s&&(vd.fromBufferAttribute(s,u),_d.fromBufferAttribute(s,c),yd.fromBufferAttribute(s,f),h.uv1=Hr.getInterpolation(xd,Jo,el,tl,vd,_d,yd,new He)),o&&(_M.fromBufferAttribute(o,u),yM.fromBufferAttribute(o,c),xM.fromBufferAttribute(o,f),h.normal=Hr.getInterpolation(xd,Jo,el,tl,_M,yM,xM,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:u,b:c,c:f,normal:new X,materialIndex:0};Hr.getNormal(Jo,el,tl,p.normal),h.face=p}return h}class jc extends or{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const u=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],f=[],h=[],p=[];let m=0,v=0;S("z","y","x",-1,-1,i,t,e,o,s,0),S("z","y","x",1,-1,i,t,-e,o,s,1),S("x","z","y",1,1,e,i,t,r,o,2),S("x","z","y",1,-1,e,i,-t,r,o,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Rr(f,3)),this.setAttribute("normal",new Rr(h,3)),this.setAttribute("uv",new Rr(p,2));function S(E,_,g,M,x,C,U,O,I,z,A){const w=C/I,N=U/z,V=C/2,k=U/2,ae=O/2,Z=I+1,me=z+1;let ge=0,W=0;const K=new X;for(let Y=0;Y<me;Y++){const Me=Y*N-k;for(let ze=0;ze<Z;ze++){const gt=ze*w-V;K[E]=gt*M,K[_]=Me*x,K[g]=ae,f.push(K.x,K.y,K.z),K[E]=0,K[_]=0,K[g]=O>0?1:-1,h.push(K.x,K.y,K.z),p.push(ze/I),p.push(1-Y/z),ge+=1}}for(let Y=0;Y<z;Y++)for(let Me=0;Me<I;Me++){const ze=m+Me+Z*Y,gt=m+Me+Z*(Y+1),se=m+(Me+1)+Z*(Y+1),xe=m+(Me+1)+Z*Y;c.push(ze,gt,xe),c.push(gt,se,xe),W+=6}u.addGroup(v,W,A),v+=W,m+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function si(n){const e={};for(let t=0;t<n.length;t++){const i=Yl(n[t]);for(const r in i)e[r]=i[r]}return e}function lF(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yb(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const S_={clone:Yl,merge:si};var uF=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cF=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uF,this.fragmentShader=cF,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yl(e.uniforms),this.uniformsGroups=lF(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $b extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ys}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new X,SM=new He,MM=new He;class ui extends $b{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jl*2*Math.atan(Math.tan(oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,SM,MM),t.subVectors(MM,SM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/f,r*=o.width/c,i*=o.height/f}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nl=-90,il=1;class fF extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ui(nl,il,e,t);r.layers=this.layers,this.add(r);const s=new ui(nl,il,e,t);s.layers=this.layers,this.add(s);const o=new ui(nl,il,e,t);o.layers=this.layers,this.add(o);const u=new ui(nl,il,e,t);u.layers=this.layers,this.add(u);const c=new ui(nl,il,e,t);c.layers=this.layers,this.add(c);const f=new ui(nl,il,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,u,c]=t;for(const f of t)this.remove(f);if(e===ys)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Uh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,u,c,f,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,u),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(p,m,v),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class qb extends On{constructor(e,t,i,r,s,o,u,c,f,h){e=e!==void 0?e:[],t=t!==void 0?t:Hl,super(e,t,i,r,s,o,u,c,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dF extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qb(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new jc(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Yl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:Ar});s.uniforms.tEquirect.value=t;const o=new Mi(r,s),u=t.minFilter;return t.minFilter===_s&&(t.minFilter=Ui),new fF(1,10,this).update(e,o),t.minFilter=u,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const bg=new X,hF=new X,pF=new mt;class ta{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bg.subVectors(i,t).cross(hF.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bg),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pF.getNormalMatrix(e),r=this.coplanarPoint(bg).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ja=new qr,Ed=new X;class M_{constructor(e=new ta,t=new ta,i=new ta,r=new ta,s=new ta,o=new ta){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(r),u[4].copy(s),u[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ys){const i=this.planes,r=e.elements,s=r[0],o=r[1],u=r[2],c=r[3],f=r[4],h=r[5],p=r[6],m=r[7],v=r[8],S=r[9],E=r[10],_=r[11],g=r[12],M=r[13],x=r[14],C=r[15];if(i[0].setComponents(c-s,m-f,_-v,C-g).normalize(),i[1].setComponents(c+s,m+f,_+v,C+g).normalize(),i[2].setComponents(c+o,m+h,_+S,C+M).normalize(),i[3].setComponents(c-o,m-h,_-S,C-M).normalize(),i[4].setComponents(c-u,m-p,_-E,C-x).normalize(),t===ys)i[5].setComponents(c+u,m+p,_+E,C+x).normalize();else if(t===Uh)i[5].setComponents(u,p,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ja.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ja.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ja)}intersectsSprite(e){return ja.center.set(0,0,0),ja.radius=.7071067811865476,ja.applyMatrix4(e.matrixWorld),this.intersectsSphere(ja)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ed.x=r.normal.x>0?e.max.x:e.min.x,Ed.y=r.normal.y>0?e.max.y:e.min.y,Ed.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ed)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kb(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mF(n){const e=new WeakMap;function t(u,c){const f=u.array,h=u.usage,p=f.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,f,h),u.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function i(u,c,f){const h=c.array,p=c._updateRange,m=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&m.length===0&&n.bufferSubData(f,0,h),m.length!==0){for(let v=0,S=m.length;v<S;v++){const E=m[v];n.bufferSubData(f,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}p.count!==-1&&(n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count),p.count=-1),c.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=e.get(u);c&&(n.deleteBuffer(c.buffer),e.delete(u))}function o(u,c){if(u.isGLBufferAttribute){const h=e.get(u);(!h||h.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);if(f===void 0)e.set(u,t(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,c),f.version=u.version}}return{get:r,remove:s,update:o}}class up extends or{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,u=Math.floor(i),c=Math.floor(r),f=u+1,h=c+1,p=e/u,m=t/c,v=[],S=[],E=[],_=[];for(let g=0;g<h;g++){const M=g*m-o;for(let x=0;x<f;x++){const C=x*p-s;S.push(C,-M,0),E.push(0,0,1),_.push(x/u),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<u;M++){const x=M+f*g,C=M+f*(g+1),U=M+1+f*(g+1),O=M+1+f*g;v.push(x,C,O),v.push(C,U,O)}this.setIndex(v),this.setAttribute("position",new Rr(S,3)),this.setAttribute("normal",new Rr(E,3)),this.setAttribute("uv",new Rr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.width,e.height,e.widthSegments,e.heightSegments)}}var gF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vF=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_F=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MF=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wF=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CF=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RF=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PF=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LF=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OF=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kF=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FF=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,BF=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zF=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HF=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jF="gl_FragColor = linearToOutputTexel( gl_FragColor );",YF=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$F=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KF=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QF=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eB=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tB=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nB=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iB=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rB=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sB=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aB=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oB=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lB=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uB=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cB=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fB=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dB=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hB=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pB=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mB=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gB=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vB=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_B=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yB=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xB=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SB=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MB=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EB=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wB=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bB=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PB=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IB=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NB=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,DB=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OB=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BB=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WB=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XB=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YB=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$B=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QB=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,JB=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,w4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:gF,alphahash_pars_fragment:vF,alphamap_fragment:_F,alphamap_pars_fragment:yF,alphatest_fragment:xF,alphatest_pars_fragment:SF,aomap_fragment:MF,aomap_pars_fragment:EF,batching_pars_vertex:wF,batching_vertex:TF,begin_vertex:bF,beginnormal_vertex:AF,bsdfs:CF,iridescence_fragment:RF,bumpmap_pars_fragment:PF,clipping_planes_fragment:LF,clipping_planes_pars_fragment:IF,clipping_planes_pars_vertex:NF,clipping_planes_vertex:DF,color_fragment:OF,color_pars_fragment:UF,color_pars_vertex:kF,color_vertex:FF,common:BF,cube_uv_reflection_fragment:zF,defaultnormal_vertex:HF,displacementmap_pars_vertex:VF,displacementmap_vertex:GF,emissivemap_fragment:WF,emissivemap_pars_fragment:XF,colorspace_fragment:jF,colorspace_pars_fragment:YF,envmap_fragment:$F,envmap_common_pars_fragment:qF,envmap_pars_fragment:KF,envmap_pars_vertex:ZF,envmap_physical_pars_fragment:uB,envmap_vertex:QF,fog_vertex:JF,fog_pars_vertex:eB,fog_fragment:tB,fog_pars_fragment:nB,gradientmap_pars_fragment:iB,lightmap_fragment:rB,lightmap_pars_fragment:sB,lights_lambert_fragment:aB,lights_lambert_pars_fragment:oB,lights_pars_begin:lB,lights_toon_fragment:cB,lights_toon_pars_fragment:fB,lights_phong_fragment:dB,lights_phong_pars_fragment:hB,lights_physical_fragment:pB,lights_physical_pars_fragment:mB,lights_fragment_begin:gB,lights_fragment_maps:vB,lights_fragment_end:_B,logdepthbuf_fragment:yB,logdepthbuf_pars_fragment:xB,logdepthbuf_pars_vertex:SB,logdepthbuf_vertex:MB,map_fragment:EB,map_pars_fragment:wB,map_particle_fragment:TB,map_particle_pars_fragment:bB,metalnessmap_fragment:AB,metalnessmap_pars_fragment:CB,morphinstance_vertex:RB,morphcolor_vertex:PB,morphnormal_vertex:LB,morphtarget_pars_vertex:IB,morphtarget_vertex:NB,normal_fragment_begin:DB,normal_fragment_maps:OB,normal_pars_fragment:UB,normal_pars_vertex:kB,normal_vertex:FB,normalmap_pars_fragment:BB,clearcoat_normal_fragment_begin:zB,clearcoat_normal_fragment_maps:HB,clearcoat_pars_fragment:VB,iridescence_pars_fragment:GB,opaque_fragment:WB,packing:XB,premultiplied_alpha_fragment:jB,project_vertex:YB,dithering_fragment:$B,dithering_pars_fragment:qB,roughnessmap_fragment:KB,roughnessmap_pars_fragment:ZB,shadowmap_pars_fragment:QB,shadowmap_pars_vertex:JB,shadowmap_vertex:e4,shadowmask_pars_fragment:t4,skinbase_vertex:n4,skinning_pars_vertex:i4,skinning_vertex:r4,skinnormal_vertex:s4,specularmap_fragment:a4,specularmap_pars_fragment:o4,tonemapping_fragment:l4,tonemapping_pars_fragment:u4,transmission_fragment:c4,transmission_pars_fragment:f4,uv_pars_fragment:d4,uv_pars_vertex:h4,uv_vertex:p4,worldpos_vertex:m4,background_vert:g4,background_frag:v4,backgroundCube_vert:_4,backgroundCube_frag:y4,cube_vert:x4,cube_frag:S4,depth_vert:M4,depth_frag:E4,distanceRGBA_vert:w4,distanceRGBA_frag:T4,equirect_vert:b4,equirect_frag:A4,linedashed_vert:C4,linedashed_frag:R4,meshbasic_vert:P4,meshbasic_frag:L4,meshlambert_vert:I4,meshlambert_frag:N4,meshmatcap_vert:D4,meshmatcap_frag:O4,meshnormal_vert:U4,meshnormal_frag:k4,meshphong_vert:F4,meshphong_frag:B4,meshphysical_vert:z4,meshphysical_frag:H4,meshtoon_vert:V4,meshtoon_frag:G4,points_vert:W4,points_frag:X4,shadow_vert:j4,shadow_frag:Y4,sprite_vert:$4,sprite_frag:q4},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Br={basic:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:si([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:si([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:si([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:si([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:si([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:si([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:si([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:si([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:si([Pe.common,Pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:si([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Br.physical={uniforms:si([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const wd={r:0,b:0,g:0},Ya=new $r,K4=new ct;function Z4(n,e,t,i,r,s,o){const u=new tt(0);let c=s===!0?0:1,f,h,p=null,m=0,v=null;function S(_,g){let M=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x)),x===null?E(u,c):x&&x.isColor&&(E(x,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===op)?(h===void 0&&(h=new Mi(new jc(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Yl(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ya.copy(g.backgroundRotation),Ya.x*=-1,Ya.y*=-1,Ya.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ya.y*=-1,Ya.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K4.makeRotationFromEuler(Ya)),h.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Zt,(p!==x||m!==x.version||v!==n.toneMapping)&&(h.material.needsUpdate=!0,p=x,m=x.version,v=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(f===void 0&&(f=new Mi(new up(2,2),new ci({name:"BackgroundMaterial",uniforms:Yl(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=x,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=Ut.getTransfer(x.colorSpace)!==Zt,x.matrixAutoUpdate===!0&&x.updateMatrix(),f.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||m!==x.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,p=x,m=x.version,v=n.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function E(_,g){_.getRGB(wd,Yb(n)),i.buffers.color.setClear(wd.r,wd.g,wd.b,g,o)}return{getClearColor:function(){return u},setClearColor:function(_,g=1){u.set(_),c=g,E(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,E(u,c)},render:S}}function Q4(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function u(w,N,V,k,ae){let Z=!1;const me=p(k,V,N);s!==me&&(s=me,f(s.object)),Z=v(w,k,V,ae),Z&&S(w,k,V,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,C(w,N,V,k),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function c(){return n.createVertexArray()}function f(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function p(w,N,V){const k=V.wireframe===!0;let ae=i[w.id];ae===void 0&&(ae={},i[w.id]=ae);let Z=ae[N.id];Z===void 0&&(Z={},ae[N.id]=Z);let me=Z[k];return me===void 0&&(me=m(c()),Z[k]=me),me}function m(w){const N=[],V=[],k=[];for(let ae=0;ae<t;ae++)N[ae]=0,V[ae]=0,k[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:k,object:w,attributes:{},index:null}}function v(w,N,V,k){const ae=s.attributes,Z=N.attributes;let me=0;const ge=V.getAttributes();for(const W in ge)if(ge[W].location>=0){const Y=ae[W];let Me=Z[W];if(Me===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Y===void 0||Y.attribute!==Me||Me&&Y.data!==Me.data)return!0;me++}return s.attributesNum!==me||s.index!==k}function S(w,N,V,k){const ae={},Z=N.attributes;let me=0;const ge=V.getAttributes();for(const W in ge)if(ge[W].location>=0){let Y=Z[W];Y===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor));const Me={};Me.attribute=Y,Y&&Y.data&&(Me.data=Y.data),ae[W]=Me,me++}s.attributes=ae,s.attributesNum=me,s.index=k}function E(){const w=s.newAttributes;for(let N=0,V=w.length;N<V;N++)w[N]=0}function _(w){g(w,0)}function g(w,N){const V=s.newAttributes,k=s.enabledAttributes,ae=s.attributeDivisors;V[w]=1,k[w]===0&&(n.enableVertexAttribArray(w),k[w]=1),ae[w]!==N&&(n.vertexAttribDivisor(w,N),ae[w]=N)}function M(){const w=s.newAttributes,N=s.enabledAttributes;for(let V=0,k=N.length;V<k;V++)N[V]!==w[V]&&(n.disableVertexAttribArray(V),N[V]=0)}function x(w,N,V,k,ae,Z,me){me===!0?n.vertexAttribIPointer(w,N,V,ae,Z):n.vertexAttribPointer(w,N,V,k,ae,Z)}function C(w,N,V,k){E();const ae=k.attributes,Z=V.getAttributes(),me=N.defaultAttributeValues;for(const ge in Z){const W=Z[ge];if(W.location>=0){let K=ae[ge];if(K===void 0&&(ge==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),ge==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),K!==void 0){const Y=K.normalized,Me=K.itemSize,ze=e.get(K);if(ze===void 0)continue;const gt=ze.buffer,se=ze.type,xe=ze.bytesPerElement,Ce=se===n.INT||se===n.UNSIGNED_INT||K.gpuType===Ab;if(K.isInterleavedBufferAttribute){const fe=K.data,$e=fe.stride,le=K.offset;if(fe.isInstancedInterleavedBuffer){for(let we=0;we<W.locationSize;we++)g(W.location+we,fe.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let we=0;we<W.locationSize;we++)_(W.location+we);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let we=0;we<W.locationSize;we++)x(W.location+we,Me/W.locationSize,se,Y,$e*xe,(le+Me/W.locationSize*we)*xe,Ce)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)g(W.location+fe,K.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<W.locationSize;fe++)_(W.location+fe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let fe=0;fe<W.locationSize;fe++)x(W.location+fe,Me/W.locationSize,se,Y,Me*xe,Me/W.locationSize*fe*xe,Ce)}}else if(me!==void 0){const Y=me[ge];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(W.location,Y);break;case 3:n.vertexAttrib3fv(W.location,Y);break;case 4:n.vertexAttrib4fv(W.location,Y);break;default:n.vertexAttrib1fv(W.location,Y)}}}}M()}function U(){z();for(const w in i){const N=i[w];for(const V in N){const k=N[V];for(const ae in k)h(k[ae].object),delete k[ae];delete N[V]}delete i[w]}}function O(w){if(i[w.id]===void 0)return;const N=i[w.id];for(const V in N){const k=N[V];for(const ae in k)h(k[ae].object),delete k[ae];delete N[V]}delete i[w.id]}function I(w){for(const N in i){const V=i[N];if(V[w.id]===void 0)continue;const k=V[w.id];for(const ae in k)h(k[ae].object),delete k[ae];delete V[w.id]}}function z(){A(),o=!0,s!==r&&(s=r,f(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:z,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:_,disableUnusedAttributes:M}}function J4(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function o(c,f,h){h!==0&&(n.drawArraysInstanced(i,c,f,h),t.update(f,i,h))}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h;m++)this.render(c[m],f[m]);else{p.multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=f[v];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=u}function ez(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const u=s(o);u!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",u,"instead."),o=u);const c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:g,maxSamples:M}}function tz(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ta,u=new mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const v=p.length!==0||m||i!==0||r;return r=m,i=p.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,v){const S=p.clippingPlanes,E=p.clipIntersection,_=p.clipShadows,g=n.get(p);if(!r||S===null||S.length===0||s&&!_)s?h(null):f();else{const M=s?0:i,x=M*4;let C=g.clippingState||null;c.value=C,C=h(S,m,x,v);for(let U=0;U!==x;++U)C[U]=t[U];g.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,m,v,S){const E=p!==null?p.length:0;let _=null;if(E!==0){if(_=c.value,S!==!0||_===null){const g=v+E*4,M=m.matrixWorldInverse;u.getNormalMatrix(M),(_===null||_.length<g)&&(_=new Float32Array(g));for(let x=0,C=v;x!==E;++x,C+=4)o.copy(p[x]).applyMatrix4(M,u),o.normal.toArray(_,C),_[C+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function nz(n){let e=new WeakMap;function t(o,u){return u===Kv?o.mapping=Hl:u===Zv&&(o.mapping=Vl),o}function i(o){if(o&&o.isTexture){const u=o.mapping;if(u===Kv||u===Zv)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new dF(c.height);return f.fromEquirectangularTexture(n,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const u=o.target;u.removeEventListener("dispose",r);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cp extends $b{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,u=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,u-=h*this.view.offsetY,c=u-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,u,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _l=4,EM=[.125,.215,.35,.446,.526,.582],eo=20,Ag=new cp,wM=new tt;let Cg=null,Rg=0,Pg=0,Lg=!1;const Qa=(1+Math.sqrt(5))/2,rl=1/Qa,TM=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Qa,rl),new X(0,Qa,-rl),new X(rl,0,Qa),new X(-rl,0,Qa),new X(Qa,rl,0),new X(-Qa,rl,0)];class bM{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Cg=this._renderer.getRenderTarget(),Rg=this._renderer.getActiveCubeFace(),Pg=this._renderer.getActiveMipmapLevel(),Lg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=RM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=CM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cg,Rg,Pg),this._renderer.xr.enabled=Lg,e.scissorTest=!1,Td(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hl||e.mapping===Vl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cg=this._renderer.getRenderTarget(),Rg=this._renderer.getActiveCubeFace(),Pg=this._renderer.getActiveMipmapLevel(),Lg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:xr,format:Er,colorSpace:Vn,depthBuffer:!1},r=AM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=AM(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iz(s)),this._blurMaterial=rz(s,e,t)}return r}_compileMaterial(e){const t=new Mi(this._lodPlanes[0],e);this._renderer.compile(t,Ag)}_sceneToCubeUV(e,t,i,r){const u=new ui(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(wM),h.toneMapping=Ma,h.autoClear=!1;const v=new so({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),S=new Mi(new jc,v);let E=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,E=!0):(v.color.copy(wM),E=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(u.up.set(0,c[g],0),u.lookAt(f[g],0,0)):M===1?(u.up.set(0,0,c[g]),u.lookAt(0,f[g],0)):(u.up.set(0,c[g],0),u.lookAt(0,0,f[g]));const x=this._cubeSize;Td(r,M*x,g>2?x:0,x,x),h.setRenderTarget(r),E&&h.render(S,u),h.render(e,u)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hl||e.mapping===Vl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=RM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=CM());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mi(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const c=this._cubeSize;Td(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ag)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=TM[(r-1)%TM.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,u){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Mi(this._lodPlanes[r],f),m=f.uniforms,v=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*eo-1),E=s/S,_=isFinite(s)?1+Math.floor(h*E):eo;_>eo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${eo}`);const g=[];let M=0;for(let I=0;I<eo;++I){const z=I/E,A=Math.exp(-z*z/2);g.push(A),I===0?M+=A:I<_&&(M+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/M;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=g,m.latitudinal.value=o==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:x}=this;m.dTheta.value=S,m.mipInt.value=x-i;const C=this._sizeLods[r],U=3*C*(r>x-_l?r-x+_l:0),O=4*(this._cubeSize-C);Td(t,U,O,3*C,2*C),c.setRenderTarget(t),c.render(p,Ag)}}function iz(n){const e=[],t=[],i=[];let r=n;const s=n-_l+1+EM.length;for(let o=0;o<s;o++){const u=Math.pow(2,r);t.push(u);let c=1/u;o>n-_l?c=EM[o-n+_l-1]:o===0&&(c=0),i.push(c);const f=1/(u-2),h=-f,p=1+f,m=[h,h,p,h,p,p,h,h,p,p,h,p],v=6,S=6,E=3,_=2,g=1,M=new Float32Array(E*S*v),x=new Float32Array(_*S*v),C=new Float32Array(g*S*v);for(let O=0;O<v;O++){const I=O%3*2/3-1,z=O>2?0:-1,A=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];M.set(A,E*S*O),x.set(m,_*S*O);const w=[O,O,O,O,O,O];C.set(w,g*S*O)}const U=new or;U.setAttribute("position",new hi(M,E)),U.setAttribute("uv",new hi(x,_)),U.setAttribute("faceIndex",new hi(C,g)),e.push(U),r>_l&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function AM(n,e,t){const i=new li(n,e,t);return i.texture.mapping=op,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Td(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rz(n,e,t){const i=new Float32Array(eo),r=new X(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:eo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:E_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function CM(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:E_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function RM(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:E_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function E_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sz(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const c=u.mapping,f=c===Kv||c===Zv,h=c===Hl||c===Vl;if(f||h){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return t===null&&(t=new bM(n)),p=f?t.fromEquirectangular(u,p):t.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return f&&v&&v.height>0||h&&v&&r(v)?(t===null&&(t=new bM(n)),p=f?t.fromEquirectangular(u):t.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",s),p.texture):null}}}return u}function r(u){let c=0;const f=6;for(let h=0;h<f;h++)u[h]!==void 0&&c++;return c===f}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function az(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oz(n,e,t,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const E=m.morphAttributes[S];for(let _=0,g=E.length;_<g;_++)e.remove(E[_])}m.removeEventListener("dispose",o),delete r[m.id];const v=s.get(m);v&&(e.remove(v),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function c(p){const m=p.attributes;for(const S in m)e.update(m[S],n.ARRAY_BUFFER);const v=p.morphAttributes;for(const S in v){const E=v[S];for(let _=0,g=E.length;_<g;_++)e.update(E[_],n.ARRAY_BUFFER)}}function f(p){const m=[],v=p.index,S=p.attributes.position;let E=0;if(v!==null){const M=v.array;E=v.version;for(let x=0,C=M.length;x<C;x+=3){const U=M[x+0],O=M[x+1],I=M[x+2];m.push(U,O,O,I,I,U)}}else if(S!==void 0){const M=S.array;E=S.version;for(let x=0,C=M.length/3-1;x<C;x+=3){const U=x+0,O=x+1,I=x+2;m.push(U,O,O,I,I,U)}}else return;const _=new(zb(m)?jb:Xb)(m,1);_.version=E;const g=s.get(p);g&&e.remove(g),s.set(p,_)}function h(p){const m=s.get(p);if(m){const v=p.index;v!==null&&m.version<v.version&&f(p)}else f(p);return s.get(p)}return{get:u,update:c,getWireframeAttribute:h}}function lz(n,e,t){let i;function r(p){i=p}let s,o;function u(p){s=p.type,o=p.bytesPerElement}function c(p,m){n.drawElements(i,m,s,p*o),t.update(m,i,1)}function f(p,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,p*o,v),t.update(m,i,v))}function h(p,m,v){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<v;E++)this.render(p[E]/o,m[E]);else{S.multiDrawElementsWEBGL(i,m,0,s,p,0,v);let E=0;for(let _=0;_<v;_++)E+=m[_];t.update(E,i,1)}}this.setMode=r,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function uz(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,u){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=u*(s/3);break;case n.LINES:t.lines+=u*(s/2);break;case n.LINE_STRIP:t.lines+=u*(s-1);break;case n.LINE_LOOP:t.lines+=u*s;break;case n.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cz(n,e,t){const i=new WeakMap,r=new Vt;function s(o,u,c){const f=o.morphTargetInfluences,h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0;let m=i.get(u);if(m===void 0||m.count!==p){let w=function(){z.dispose(),i.delete(u),u.removeEventListener("dispose",w)};var v=w;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let C=0;S===!0&&(C=1),E===!0&&(C=2),_===!0&&(C=3);let U=u.attributes.position.count*C,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*O*4*p),z=new Gb(I,U,O,p);z.type=Vr,z.needsUpdate=!0;const A=C*4;for(let N=0;N<p;N++){const V=g[N],k=M[N],ae=x[N],Z=U*O*4*N;for(let me=0;me<V.count;me++){const ge=me*A;S===!0&&(r.fromBufferAttribute(V,me),I[Z+ge+0]=r.x,I[Z+ge+1]=r.y,I[Z+ge+2]=r.z,I[Z+ge+3]=0),E===!0&&(r.fromBufferAttribute(k,me),I[Z+ge+4]=r.x,I[Z+ge+5]=r.y,I[Z+ge+6]=r.z,I[Z+ge+7]=0),_===!0&&(r.fromBufferAttribute(ae,me),I[Z+ge+8]=r.x,I[Z+ge+9]=r.y,I[Z+ge+10]=r.z,I[Z+ge+11]=ae.itemSize===4?r.w:1)}}m={count:p,texture:z,size:new He(U,O)},i.set(u,m),u.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let S=0;for(let _=0;_<f.length;_++)S+=f[_];const E=u.morphTargetsRelative?1:1-S;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",f)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function fz(n,e,t,i){let r=new WeakMap;function s(c){const f=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",u)===!1&&c.addEventListener("dispose",u),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function o(){r=new WeakMap}function u(c){const f=c.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}class Zb extends On{constructor(e,t,i,r,s,o,u,c,f,h){if(h=h!==void 0?h:Rl,h!==Rl&&h!==Lc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Rl&&(i=Wl),i===void 0&&h===Lc&&(i=Xc),super(null,r,s,o,u,c,h,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:fi,this.minFilter=c!==void 0?c:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qb=new On,Jb=new Zb(1,1);Jb.compareFunction=Fb;const eA=new Gb,tA=new Zk,nA=new qb,PM=[],LM=[],IM=new Float32Array(16),NM=new Float32Array(9),DM=new Float32Array(4);function iu(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=PM[r];if(s===void 0&&(s=new Float32Array(r),PM[r]=s),e!==0){i.toArray(s,0);for(let o=1,u=0;o!==e;++o)u+=t,n[o].toArray(s,u)}return s}function An(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fp(n,e){let t=LM[e];t===void 0&&(t=new Int32Array(e),LM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dz(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;n.uniform2fv(this.addr,e),Cn(t,e)}}function pz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;n.uniform3fv(this.addr,e),Cn(t,e)}}function mz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;n.uniform4fv(this.addr,e),Cn(t,e)}}function gz(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(An(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(An(t,i))return;DM.set(i),n.uniformMatrix2fv(this.addr,!1,DM),Cn(t,i)}}function vz(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(An(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(An(t,i))return;NM.set(i),n.uniformMatrix3fv(this.addr,!1,NM),Cn(t,i)}}function _z(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(An(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(An(t,i))return;IM.set(i),n.uniformMatrix4fv(this.addr,!1,IM),Cn(t,i)}}function yz(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;n.uniform2iv(this.addr,e),Cn(t,e)}}function Sz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;n.uniform3iv(this.addr,e),Cn(t,e)}}function Mz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;n.uniform4iv(this.addr,e),Cn(t,e)}}function Ez(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;n.uniform2uiv(this.addr,e),Cn(t,e)}}function Tz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;n.uniform3uiv(this.addr,e),Cn(t,e)}}function bz(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;n.uniform4uiv(this.addr,e),Cn(t,e)}}function Az(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Jb:Qb;t.setTexture2D(e||s,r)}function Cz(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||tA,r)}function Rz(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nA,r)}function Pz(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||eA,r)}function Lz(n){switch(n){case 5126:return dz;case 35664:return hz;case 35665:return pz;case 35666:return mz;case 35674:return gz;case 35675:return vz;case 35676:return _z;case 5124:case 35670:return yz;case 35667:case 35671:return xz;case 35668:case 35672:return Sz;case 35669:case 35673:return Mz;case 5125:return Ez;case 36294:return wz;case 36295:return Tz;case 36296:return bz;case 35678:case 36198:case 36298:case 36306:case 35682:return Az;case 35679:case 36299:case 36307:return Cz;case 35680:case 36300:case 36308:case 36293:return Rz;case 36289:case 36303:case 36311:case 36292:return Pz}}function Iz(n,e){n.uniform1fv(this.addr,e)}function Nz(n,e){const t=iu(e,this.size,2);n.uniform2fv(this.addr,t)}function Dz(n,e){const t=iu(e,this.size,3);n.uniform3fv(this.addr,t)}function Oz(n,e){const t=iu(e,this.size,4);n.uniform4fv(this.addr,t)}function Uz(n,e){const t=iu(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kz(n,e){const t=iu(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fz(n,e){const t=iu(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bz(n,e){n.uniform1iv(this.addr,e)}function zz(n,e){n.uniform2iv(this.addr,e)}function Hz(n,e){n.uniform3iv(this.addr,e)}function Vz(n,e){n.uniform4iv(this.addr,e)}function Gz(n,e){n.uniform1uiv(this.addr,e)}function Wz(n,e){n.uniform2uiv(this.addr,e)}function Xz(n,e){n.uniform3uiv(this.addr,e)}function jz(n,e){n.uniform4uiv(this.addr,e)}function Yz(n,e,t){const i=this.cache,r=e.length,s=fp(t,r);An(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Qb,s[o])}function $z(n,e,t){const i=this.cache,r=e.length,s=fp(t,r);An(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||tA,s[o])}function qz(n,e,t){const i=this.cache,r=e.length,s=fp(t,r);An(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||nA,s[o])}function Kz(n,e,t){const i=this.cache,r=e.length,s=fp(t,r);An(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||eA,s[o])}function Zz(n){switch(n){case 5126:return Iz;case 35664:return Nz;case 35665:return Dz;case 35666:return Oz;case 35674:return Uz;case 35675:return kz;case 35676:return Fz;case 5124:case 35670:return Bz;case 35667:case 35671:return zz;case 35668:case 35672:return Hz;case 35669:case 35673:return Vz;case 5125:return Gz;case 36294:return Wz;case 36295:return Xz;case 36296:return jz;case 35678:case 36198:case 36298:case 36306:case 35682:return Yz;case 35679:case 36299:case 36307:return $z;case 35680:case 36300:case 36308:case 36293:return qz;case 36289:case 36303:case 36311:case 36292:return Kz}}class Qz{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lz(t.type)}}class Jz{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zz(t.type)}}class e5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const u=r[s];u.setValue(e,t[u.id],i)}}}const Ig=/(\w+)(\])?(\[|\.)?/g;function OM(n,e){n.seq.push(e),n.map[e.id]=e}function t5(n,e,t){const i=n.name,r=i.length;for(Ig.lastIndex=0;;){const s=Ig.exec(i),o=Ig.lastIndex;let u=s[1];const c=s[2]==="]",f=s[3];if(c&&(u=u|0),f===void 0||f==="["&&o+2===r){OM(t,f===void 0?new Qz(u,n,e):new Jz(u,n,e));break}else{let p=t.map[u];p===void 0&&(p=new e5(u),OM(t,p)),t=p}}}class th{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);t5(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const u=t[s],c=i[u.id];c.needsUpdate!==!1&&u.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function UM(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const n5=37297;let i5=0;function r5(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const u=o+1;i.push(`${u===e?">":" "} ${u}: ${t[o]}`)}return i.join(`
`)}function s5(n){const e=Ut.getPrimaries(Ut.workingColorSpace),t=Ut.getPrimaries(n);let i;switch(e===t?i="":e===Oh&&t===Dh?i="LinearDisplayP3ToLinearSRGB":e===Dh&&t===Oh&&(i="LinearSRGBToLinearDisplayP3"),n){case Vn:case lp:return[i,"LinearTransferOETF"];case oi:case __:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function kM(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+r5(n.getShaderSource(e),o)}else return r}function a5(n,e){const t=s5(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function o5(n,e){let t;switch(e){case tk:t="Linear";break;case nk:t="Reinhard";break;case ik:t="OptimizedCineon";break;case rk:t="ACESFilmic";break;case ak:t="AgX";break;case ok:t="Neutral";break;case sk:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l5(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qu).join(`
`)}function u5(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function c5(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let u=1;s.type===n.FLOAT_MAT2&&(u=2),s.type===n.FLOAT_MAT3&&(u=3),s.type===n.FLOAT_MAT4&&(u=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:u}}return t}function qu(n){return n!==""}function FM(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function BM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f5=/^[ \t]*#include +<([\w\d./]+)>/gm;function e0(n){return n.replace(f5,h5)}const d5=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function h5(n,e){let t=pt[e];if(t===void 0){const i=d5.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return e0(t)}const p5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zM(n){return n.replace(p5,m5)}function m5(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function HM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g5(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mb?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===AU?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function v5(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hl:case Vl:e="ENVMAP_TYPE_CUBE";break;case op:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _5(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vl:e="ENVMAP_MODE_REFRACTION";break}return e}function y5(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eb:e="ENVMAP_BLENDING_MULTIPLY";break;case JU:e="ENVMAP_BLENDING_MIX";break;case ek:e="ENVMAP_BLENDING_ADD";break}return e}function x5(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function S5(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,u=t.fragmentShader;const c=g5(t),f=v5(t),h=_5(t),p=y5(t),m=x5(t),v=l5(t),S=u5(s),E=r.createProgram();let _,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(qu).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(qu).join(`
`),g.length>0&&(g+=`
`)):(_=[HM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qu).join(`
`),g=[HM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ma?"#define TONE_MAPPING":"",t.toneMapping!==Ma?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ma?o5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,a5("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qu).join(`
`)),o=e0(o),o=FM(o,t),o=BM(o,t),u=e0(u),u=FM(u,t),u=BM(u,t),o=zM(o),u=zM(u),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===nM?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=M+_+o,C=M+g+u,U=UM(r,r.VERTEX_SHADER,x),O=UM(r,r.FRAGMENT_SHADER,C);r.attachShader(E,U),r.attachShader(E,O),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function I(N){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(E).trim(),k=r.getShaderInfoLog(U).trim(),ae=r.getShaderInfoLog(O).trim();let Z=!0,me=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,U,O);else{const ge=kM(r,U,"vertex"),W=kM(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+ge+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||ae==="")&&(me=!1);me&&(N.diagnostics={runnable:Z,programLog:V,vertexShader:{log:k,prefix:_},fragmentShader:{log:ae,prefix:g}})}r.deleteShader(U),r.deleteShader(O),z=new th(r,E),A=c5(r,E)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(E,n5)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i5++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=O,this}let M5=0;class E5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new w5(e),t.set(e,i)),i}}class w5{constructor(e){this.id=M5++,this.code=e,this.usedTimes=0}}function T5(n,e,t,i,r,s,o){const u=new x_,c=new E5,f=new Set,h=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return f.add(A),A===0?"uv":`uv${A}`}function _(A,w,N,V,k){const ae=V.fog,Z=k.geometry,me=A.isMeshStandardMaterial?V.environment:null,ge=(A.isMeshStandardMaterial?t:e).get(A.envMap||me),W=ge&&ge.mapping===op?ge.image.height:null,K=S[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const Y=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=Y!==void 0?Y.length:0;let ze=0;Z.morphAttributes.position!==void 0&&(ze=1),Z.morphAttributes.normal!==void 0&&(ze=2),Z.morphAttributes.color!==void 0&&(ze=3);let gt,se,xe,Ce;if(K){const xn=Br[K];gt=xn.vertexShader,se=xn.fragmentShader}else gt=A.vertexShader,se=A.fragmentShader,c.update(A),xe=c.getVertexShaderID(A),Ce=c.getFragmentShaderID(A);const fe=n.getRenderTarget(),$e=k.isInstancedMesh===!0,le=k.isBatchedMesh===!0,we=!!A.map,H=!!A.matcap,ne=!!ge,ye=!!A.aoMap,Pt=!!A.lightMap,Ke=!!A.bumpMap,It=!!A.normalMap,F=!!A.displacementMap,R=!!A.emissiveMap,re=!!A.metalnessMap,ce=!!A.roughnessMap,pe=A.anisotropy>0,_e=A.clearcoat>0,Ye=A.iridescence>0,Ee=A.sheen>0,Ve=A.transmission>0,Ze=pe&&!!A.anisotropyMap,Te=_e&&!!A.clearcoatMap,Le=_e&&!!A.clearcoatNormalMap,nt=_e&&!!A.clearcoatRoughnessMap,Fe=Ye&&!!A.iridescenceMap,Be=Ye&&!!A.iridescenceThicknessMap,dt=Ee&&!!A.sheenColorMap,vt=Ee&&!!A.sheenRoughnessMap,At=!!A.specularMap,xt=!!A.specularColorMap,Ct=!!A.specularIntensityMap,Xe=Ve&&!!A.transmissionMap,T=Ve&&!!A.thicknessMap,Q=!!A.gradientMap,ue=!!A.alphaMap,Ae=A.alphaTest>0,Ne=!!A.alphaHash,St=!!A.extensions;let _t=Ma;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Gt={shaderID:K,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:se,defines:A.defines,customVertexShaderID:xe,customFragmentShaderID:Ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:le,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Vn,alphaToCoverage:!!A.alphaToCoverage,map:we,matcap:H,envMap:ne,envMapMode:ne&&ge.mapping,envMapCubeUVHeight:W,aoMap:ye,lightMap:Pt,bumpMap:Ke,normalMap:It,displacementMap:m&&F,emissiveMap:R,normalMapObjectSpace:It&&A.normalMapType===Sk,normalMapTangentSpace:It&&A.normalMapType===kb,metalnessMap:re,roughnessMap:ce,anisotropy:pe,anisotropyMap:Ze,clearcoat:_e,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:nt,iridescence:Ye,iridescenceMap:Fe,iridescenceThicknessMap:Be,sheen:Ee,sheenColorMap:dt,sheenRoughnessMap:vt,specularMap:At,specularColorMap:xt,specularIntensityMap:Ct,transmission:Ve,transmissionMap:Xe,thicknessMap:T,gradientMap:Q,opaque:A.transparent===!1&&A.blending===Cl&&A.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ae,alphaHash:Ne,combine:A.combine,mapUv:we&&E(A.map.channel),aoMapUv:ye&&E(A.aoMap.channel),lightMapUv:Pt&&E(A.lightMap.channel),bumpMapUv:Ke&&E(A.bumpMap.channel),normalMapUv:It&&E(A.normalMap.channel),displacementMapUv:F&&E(A.displacementMap.channel),emissiveMapUv:R&&E(A.emissiveMap.channel),metalnessMapUv:re&&E(A.metalnessMap.channel),roughnessMapUv:ce&&E(A.roughnessMap.channel),anisotropyMapUv:Ze&&E(A.anisotropyMap.channel),clearcoatMapUv:Te&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Le&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:vt&&E(A.sheenRoughnessMap.channel),specularMapUv:At&&E(A.specularMap.channel),specularColorMapUv:xt&&E(A.specularColorMap.channel),specularIntensityMapUv:Ct&&E(A.specularIntensityMap.channel),transmissionMapUv:Xe&&E(A.transmissionMap.channel),thicknessMapUv:T&&E(A.thicknessMap.channel),alphaMapUv:ue&&E(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(It||pe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(we||ue),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&A.map.isVideoTexture===!0&&Ut.getTransfer(A.map.colorSpace)===Zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===nr,flipSided:A.side===bi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:St&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:St&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Gt.vertexUv1s=f.has(1),Gt.vertexUv2s=f.has(2),Gt.vertexUv3s=f.has(3),f.clear(),Gt}function g(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)w.push(N),w.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(M(w,A),x(w,A),w.push(n.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function M(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function x(A,w){u.disableAll(),w.supportsVertexTextures&&u.enable(0),w.instancing&&u.enable(1),w.instancingColor&&u.enable(2),w.instancingMorph&&u.enable(3),w.matcap&&u.enable(4),w.envMap&&u.enable(5),w.normalMapObjectSpace&&u.enable(6),w.normalMapTangentSpace&&u.enable(7),w.clearcoat&&u.enable(8),w.iridescence&&u.enable(9),w.alphaTest&&u.enable(10),w.vertexColors&&u.enable(11),w.vertexAlphas&&u.enable(12),w.vertexUv1s&&u.enable(13),w.vertexUv2s&&u.enable(14),w.vertexUv3s&&u.enable(15),w.vertexTangents&&u.enable(16),w.anisotropy&&u.enable(17),w.alphaHash&&u.enable(18),w.batching&&u.enable(19),A.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.skinning&&u.enable(4),w.morphTargets&&u.enable(5),w.morphNormals&&u.enable(6),w.morphColors&&u.enable(7),w.premultipliedAlpha&&u.enable(8),w.shadowMapEnabled&&u.enable(9),w.useLegacyLights&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.alphaToCoverage&&u.enable(20),A.push(u.mask)}function C(A){const w=S[A.type];let N;if(w){const V=Br[w];N=S_.clone(V.uniforms)}else N=A.uniforms;return N}function U(A,w){let N;for(let V=0,k=h.length;V<k;V++){const ae=h[V];if(ae.cacheKey===w){N=ae,++N.usedTimes;break}}return N===void 0&&(N=new S5(n,w,A,s),h.push(N)),N}function O(A){if(--A.usedTimes===0){const w=h.indexOf(A);h[w]=h[h.length-1],h.pop(),A.destroy()}}function I(A){c.remove(A)}function z(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:C,acquireProgram:U,releaseProgram:O,releaseShaderCache:I,programs:h,dispose:z}}function b5(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,u){n.get(s)[o]=u}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function A5(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function VM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function GM(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p,m,v,S,E,_){let g=n[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:v,groupOrder:S,renderOrder:p.renderOrder,z:E,group:_},n[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=v,g.groupOrder=S,g.renderOrder=p.renderOrder,g.z=E,g.group=_),e++,g}function u(p,m,v,S,E,_){const g=o(p,m,v,S,E,_);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):t.push(g)}function c(p,m,v,S,E,_){const g=o(p,m,v,S,E,_);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function f(p,m){t.length>1&&t.sort(p||A5),i.length>1&&i.sort(m||VM),r.length>1&&r.sort(m||VM)}function h(){for(let p=e,m=n.length;p<m;p++){const v=n[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:u,unshift:c,finish:h,sort:f}}function C5(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new GM,n.set(i,[o])):r>=s.length?(o=new GM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function R5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new tt};break;case"SpotLight":t={position:new X,direction:new X,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function P5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let L5=0;function I5(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N5(n){const e=new R5,t=P5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new X);const r=new X,s=new ct,o=new ct;function u(f,h){let p=0,m=0,v=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let S=0,E=0,_=0,g=0,M=0,x=0,C=0,U=0,O=0,I=0,z=0;f.sort(I5);const A=h===!0?Math.PI:1;for(let N=0,V=f.length;N<V;N++){const k=f[N],ae=k.color,Z=k.intensity,me=k.distance,ge=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=ae.r*Z*A,m+=ae.g*Z*A,v+=ae.b*Z*A;else if(k.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(k.sh.coefficients[W],Z);z++}else if(k.isDirectionalLight){const W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const K=k.shadow,Y=t.get(k);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.directionalShadow[S]=Y,i.directionalShadowMap[S]=ge,i.directionalShadowMatrix[S]=k.shadow.matrix,x++}i.directional[S]=W,S++}else if(k.isSpotLight){const W=e.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(ae).multiplyScalar(Z*A),W.distance=me,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,i.spot[_]=W;const K=k.shadow;if(k.map&&(i.spotLightMap[O]=k.map,O++,K.updateMatrices(k),k.castShadow&&I++),i.spotLightMatrix[_]=K.matrix,k.castShadow){const Y=t.get(k);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=ge,U++}_++}else if(k.isRectAreaLight){const W=e.get(k);W.color.copy(ae).multiplyScalar(Z),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),i.rectArea[g]=W,g++}else if(k.isPointLight){const W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*A),W.distance=k.distance,W.decay=k.decay,k.castShadow){const K=k.shadow,Y=t.get(k);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,i.pointShadow[E]=Y,i.pointShadowMap[E]=ge,i.pointShadowMatrix[E]=k.shadow.matrix,C++}i.point[E]=W,E++}else if(k.isHemisphereLight){const W=e.get(k);W.skyColor.copy(k.color).multiplyScalar(Z*A),W.groundColor.copy(k.groundColor).multiplyScalar(Z*A),i.hemi[M]=W,M++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=v;const w=i.hash;(w.directionalLength!==S||w.pointLength!==E||w.spotLength!==_||w.rectAreaLength!==g||w.hemiLength!==M||w.numDirectionalShadows!==x||w.numPointShadows!==C||w.numSpotShadows!==U||w.numSpotMaps!==O||w.numLightProbes!==z)&&(i.directional.length=S,i.spot.length=_,i.rectArea.length=g,i.point.length=E,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=U+O-I,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=z,w.directionalLength=S,w.pointLength=E,w.spotLength=_,w.rectAreaLength=g,w.hemiLength=M,w.numDirectionalShadows=x,w.numPointShadows=C,w.numSpotShadows=U,w.numSpotMaps=O,w.numLightProbes=z,i.version=L5++)}function c(f,h){let p=0,m=0,v=0,S=0,E=0;const _=h.matrixWorldInverse;for(let g=0,M=f.length;g<M;g++){const x=f[g];if(x.isDirectionalLight){const C=i.directional[p];C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(_),p++}else if(x.isSpotLight){const C=i.spot[v];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(_),v++}else if(x.isRectAreaLight){const C=i.rectArea[S];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),S++}else if(x.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(_),E++}}}return{setup:u,setupView:c,state:i}}function WM(n){const e=new N5(n),t=[],i=[];function r(){t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function u(h){e.setup(t,h)}function c(h){e.setupView(t,h)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:u,setupLightsView:c,pushLight:s,pushShadow:o}}function D5(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let u;return o===void 0?(u=new WM(n),e.set(r,[u])):s>=o.length?(u=new WM(n),o.push(u)):u=o[s],u}function i(){e=new WeakMap}return{get:t,dispose:i}}class iA extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O5 extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F5(n,e,t){let i=new M_;const r=new He,s=new He,o=new Vt,u=new iA({depthPacking:Ub}),c=new O5,f={},h=t.maxTextureSize,p={[Ts]:bi,[bi]:Ts,[nr]:nr},m=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:U5,fragmentShader:k5}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const S=new or;S.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Mi(S,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mb;let g=this.type;this.render=function(O,I,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const A=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ar),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=g!==hs&&this.type===hs,ae=g===hs&&this.type!==hs;for(let Z=0,me=O.length;Z<me;Z++){const ge=O[Z],W=ge.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const K=W.getFrameExtents();if(r.multiply(K),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,W.mapSize.y=s.y)),W.map===null||k===!0||ae===!0){const Me=this.type!==hs?{minFilter:fi,magFilter:fi}:{};W.map!==null&&W.map.dispose(),W.map=new li(r.x,r.y,Me),W.map.texture.name=ge.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Y=W.getViewportCount();for(let Me=0;Me<Y;Me++){const ze=W.getViewport(Me);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),V.viewport(o),W.updateMatrices(ge,Me),i=W.getFrustum(),C(I,z,W.camera,ge,this.type)}W.isPointLightShadow!==!0&&this.type===hs&&M(W,z),W.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(A,w,N)};function M(O,I){const z=e.update(E);m.defines.VSM_SAMPLES!==O.blurSamples&&(m.defines.VSM_SAMPLES=O.blurSamples,v.defines.VSM_SAMPLES=O.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new li(r.x,r.y)),m.uniforms.shadow_pass.value=O.map.texture,m.uniforms.resolution.value=O.mapSize,m.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(I,null,z,m,E,null),v.uniforms.shadow_pass.value=O.mapPass.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(I,null,z,v,E,null)}function x(O,I,z,A){let w=null;const N=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(N!==void 0)w=N;else if(w=z.isPointLight===!0?c:u,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=w.uuid,k=I.uuid;let ae=f[V];ae===void 0&&(ae={},f[V]=ae);let Z=ae[k];Z===void 0&&(Z=w.clone(),ae[k]=Z,I.addEventListener("dispose",U)),w=Z}if(w.visible=I.visible,w.wireframe=I.wireframe,A===hs?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:p[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=n.properties.get(w);V.light=z}return w}function C(O,I,z,A,w){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===hs)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const k=e.update(O),ae=O.material;if(Array.isArray(ae)){const Z=k.groups;for(let me=0,ge=Z.length;me<ge;me++){const W=Z[me],K=ae[W.materialIndex];if(K&&K.visible){const Y=x(O,K,A,w);O.onBeforeShadow(n,O,I,z,k,Y,W),n.renderBufferDirect(z,null,k,Y,O,W),O.onAfterShadow(n,O,I,z,k,Y,W)}}}else if(ae.visible){const Z=x(O,ae,A,w);O.onBeforeShadow(n,O,I,z,k,Z,null),n.renderBufferDirect(z,null,k,Z,O,null),O.onAfterShadow(n,O,I,z,k,Z,null)}}const V=O.children;for(let k=0,ae=V.length;k<ae;k++)C(V[k],I,z,A,w)}function U(O){O.target.removeEventListener("dispose",U);for(const z in f){const A=f[z],w=O.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function B5(n){function e(){let T=!1;const Q=new Vt;let ue=null;const Ae=new Vt(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!T&&(n.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){T=Ne},setClear:function(Ne,St,_t,Gt,xn){xn===!0&&(Ne*=Gt,St*=Gt,_t*=Gt),Q.set(Ne,St,_t,Gt),Ae.equals(Q)===!1&&(n.clearColor(Ne,St,_t,Gt),Ae.copy(Q))},reset:function(){T=!1,ue=null,Ae.set(-1,0,0,0)}}}function t(){let T=!1,Q=null,ue=null,Ae=null;return{setTest:function(Ne){Ne?Ce(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(Ne){Q!==Ne&&!T&&(n.depthMask(Ne),Q=Ne)},setFunc:function(Ne){if(ue!==Ne){switch(Ne){case jU:n.depthFunc(n.NEVER);break;case YU:n.depthFunc(n.ALWAYS);break;case $U:n.depthFunc(n.LESS);break;case Lh:n.depthFunc(n.LEQUAL);break;case qU:n.depthFunc(n.EQUAL);break;case KU:n.depthFunc(n.GEQUAL);break;case ZU:n.depthFunc(n.GREATER);break;case QU:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ne}},setLocked:function(Ne){T=Ne},setClear:function(Ne){Ae!==Ne&&(n.clearDepth(Ne),Ae=Ne)},reset:function(){T=!1,Q=null,ue=null,Ae=null}}}function i(){let T=!1,Q=null,ue=null,Ae=null,Ne=null,St=null,_t=null,Gt=null,xn=null;return{setTest:function(Nt){T||(Nt?Ce(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Nt){Q!==Nt&&!T&&(n.stencilMask(Nt),Q=Nt)},setFunc:function(Nt,cn,fn){(ue!==Nt||Ae!==cn||Ne!==fn)&&(n.stencilFunc(Nt,cn,fn),ue=Nt,Ae=cn,Ne=fn)},setOp:function(Nt,cn,fn){(St!==Nt||_t!==cn||Gt!==fn)&&(n.stencilOp(Nt,cn,fn),St=Nt,_t=cn,Gt=fn)},setLocked:function(Nt){T=Nt},setClear:function(Nt){xn!==Nt&&(n.clearStencil(Nt),xn=Nt)},reset:function(){T=!1,Q=null,ue=null,Ae=null,Ne=null,St=null,_t=null,Gt=null,xn=null}}}const r=new e,s=new t,o=new i,u=new WeakMap,c=new WeakMap;let f={},h={},p=new WeakMap,m=[],v=null,S=!1,E=null,_=null,g=null,M=null,x=null,C=null,U=null,O=new tt(0,0,0),I=0,z=!1,A=null,w=null,N=null,V=null,k=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,me=0;const ge=n.getParameter(n.VERSION);ge.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ge)[1]),Z=me>=1):ge.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),Z=me>=2);let W=null,K={};const Y=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),ze=new Vt().fromArray(Y),gt=new Vt().fromArray(Me);function se(T,Q,ue,Ae){const Ne=new Uint8Array(4),St=n.createTexture();n.bindTexture(T,St),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<ue;_t++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Q+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return St}const xe={};xe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ce(n.DEPTH_TEST),s.setFunc(Lh),Ke(!1),It(E1),Ce(n.CULL_FACE),ye(Ar);function Ce(T){f[T]!==!0&&(n.enable(T),f[T]=!0)}function fe(T){f[T]!==!1&&(n.disable(T),f[T]=!1)}function $e(T,Q){return h[T]!==Q?(n.bindFramebuffer(T,Q),h[T]=Q,T===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Q),T===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function le(T,Q){let ue=m,Ae=!1;if(T){ue=p.get(Q),ue===void 0&&(ue=[],p.set(Q,ue));const Ne=T.textures;if(ue.length!==Ne.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let St=0,_t=Ne.length;St<_t;St++)ue[St]=n.COLOR_ATTACHMENT0+St;ue.length=Ne.length,Ae=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ue)}function we(T){return v!==T?(n.useProgram(T),v=T,!0):!1}const H={[Ja]:n.FUNC_ADD,[RU]:n.FUNC_SUBTRACT,[PU]:n.FUNC_REVERSE_SUBTRACT};H[LU]=n.MIN,H[IU]=n.MAX;const ne={[NU]:n.ZERO,[DU]:n.ONE,[OU]:n.SRC_COLOR,[$v]:n.SRC_ALPHA,[HU]:n.SRC_ALPHA_SATURATE,[BU]:n.DST_COLOR,[kU]:n.DST_ALPHA,[UU]:n.ONE_MINUS_SRC_COLOR,[qv]:n.ONE_MINUS_SRC_ALPHA,[zU]:n.ONE_MINUS_DST_COLOR,[FU]:n.ONE_MINUS_DST_ALPHA,[VU]:n.CONSTANT_COLOR,[GU]:n.ONE_MINUS_CONSTANT_COLOR,[WU]:n.CONSTANT_ALPHA,[XU]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(T,Q,ue,Ae,Ne,St,_t,Gt,xn,Nt){if(T===Ar){S===!0&&(fe(n.BLEND),S=!1);return}if(S===!1&&(Ce(n.BLEND),S=!0),T!==CU){if(T!==E||Nt!==z){if((_!==Ja||x!==Ja)&&(n.blendEquation(n.FUNC_ADD),_=Ja,x=Ja),Nt)switch(T){case Cl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yv:n.blendFunc(n.ONE,n.ONE);break;case w1:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case T1:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Cl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case w1:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case T1:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}g=null,M=null,C=null,U=null,O.set(0,0,0),I=0,E=T,z=Nt}return}Ne=Ne||Q,St=St||ue,_t=_t||Ae,(Q!==_||Ne!==x)&&(n.blendEquationSeparate(H[Q],H[Ne]),_=Q,x=Ne),(ue!==g||Ae!==M||St!==C||_t!==U)&&(n.blendFuncSeparate(ne[ue],ne[Ae],ne[St],ne[_t]),g=ue,M=Ae,C=St,U=_t),(Gt.equals(O)===!1||xn!==I)&&(n.blendColor(Gt.r,Gt.g,Gt.b,xn),O.copy(Gt),I=xn),E=T,z=!1}function Pt(T,Q){T.side===nr?fe(n.CULL_FACE):Ce(n.CULL_FACE);let ue=T.side===bi;Q&&(ue=!ue),Ke(ue),T.blending===Cl&&T.transparent===!1?ye(Ar):ye(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const Ae=T.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),R(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(T){A!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),A=T)}function It(T){T!==TU?(Ce(n.CULL_FACE),T!==w&&(T===E1?n.cullFace(n.BACK):T===bU?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),w=T}function F(T){T!==N&&(Z&&n.lineWidth(T),N=T)}function R(T,Q,ue){T?(Ce(n.POLYGON_OFFSET_FILL),(V!==Q||k!==ue)&&(n.polygonOffset(Q,ue),V=Q,k=ue)):fe(n.POLYGON_OFFSET_FILL)}function re(T){T?Ce(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function ce(T){T===void 0&&(T=n.TEXTURE0+ae-1),W!==T&&(n.activeTexture(T),W=T)}function pe(T,Q,ue){ue===void 0&&(W===null?ue=n.TEXTURE0+ae-1:ue=W);let Ae=K[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[ue]=Ae),(Ae.type!==T||Ae.texture!==Q)&&(W!==ue&&(n.activeTexture(ue),W=ue),n.bindTexture(T,Q||xe[T]),Ae.type=T,Ae.texture=Q)}function _e(){const T=K[W];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Ye(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ve(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ze(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function vt(T){ze.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),ze.copy(T))}function At(T){gt.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),gt.copy(T))}function xt(T,Q){let ue=c.get(Q);ue===void 0&&(ue=new WeakMap,c.set(Q,ue));let Ae=ue.get(T);Ae===void 0&&(Ae=n.getUniformBlockIndex(Q,T.name),ue.set(T,Ae))}function Ct(T,Q){const Ae=c.get(Q).get(T);u.get(Q)!==Ae&&(n.uniformBlockBinding(Q,Ae,T.__bindingPointIndex),u.set(Q,Ae))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},W=null,K={},h={},p=new WeakMap,m=[],v=null,S=!1,E=null,_=null,g=null,M=null,x=null,C=null,U=null,O=new tt(0,0,0),I=0,z=!1,A=null,w=null,N=null,V=null,k=null,ze.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ce,disable:fe,bindFramebuffer:$e,drawBuffers:le,useProgram:we,setBlending:ye,setMaterial:Pt,setFlipSided:Ke,setCullFace:It,setLineWidth:F,setPolygonOffset:R,setScissorTest:re,activeTexture:ce,bindTexture:pe,unbindTexture:_e,compressedTexImage2D:Ye,compressedTexImage3D:Ee,texImage2D:Be,texImage3D:dt,updateUBOMapping:xt,uniformBlockBinding:Ct,texStorage2D:nt,texStorage3D:Fe,texSubImage2D:Ve,texSubImage3D:Ze,compressedTexSubImage2D:Te,compressedTexSubImage3D:Le,scissor:vt,viewport:At,reset:Xe}}function z5(n,e,t,i,r,s,o){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new He,h=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(F,R){return v?new OffscreenCanvas(F,R):Nc("canvas")}function E(F,R,re){let ce=1;const pe=It(F);if((pe.width>re||pe.height>re)&&(ce=re/Math.max(pe.width,pe.height)),ce<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const _e=Math.floor(ce*pe.width),Ye=Math.floor(ce*pe.height);p===void 0&&(p=S(_e,Ye));const Ee=R?S(_e,Ye):p;return Ee.width=_e,Ee.height=Ye,Ee.getContext("2d").drawImage(F,0,0,_e,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+_e+"x"+Ye+")."),Ee}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),F;return F}function _(F){return F.generateMipmaps&&F.minFilter!==fi&&F.minFilter!==Ui}function g(F){n.generateMipmap(F)}function M(F,R,re,ce,pe=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let _e=R;if(R===n.RED&&(re===n.FLOAT&&(_e=n.R32F),re===n.HALF_FLOAT&&(_e=n.R16F),re===n.UNSIGNED_BYTE&&(_e=n.R8)),R===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(_e=n.R8UI),re===n.UNSIGNED_SHORT&&(_e=n.R16UI),re===n.UNSIGNED_INT&&(_e=n.R32UI),re===n.BYTE&&(_e=n.R8I),re===n.SHORT&&(_e=n.R16I),re===n.INT&&(_e=n.R32I)),R===n.RG&&(re===n.FLOAT&&(_e=n.RG32F),re===n.HALF_FLOAT&&(_e=n.RG16F),re===n.UNSIGNED_BYTE&&(_e=n.RG8)),R===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(_e=n.RG8UI),re===n.UNSIGNED_SHORT&&(_e=n.RG16UI),re===n.UNSIGNED_INT&&(_e=n.RG32UI),re===n.BYTE&&(_e=n.RG8I),re===n.SHORT&&(_e=n.RG16I),re===n.INT&&(_e=n.RG32I)),R===n.RGB&&re===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),R===n.RGBA){const Ye=pe?Nh:Ut.getTransfer(ce);re===n.FLOAT&&(_e=n.RGBA32F),re===n.HALF_FLOAT&&(_e=n.RGBA16F),re===n.UNSIGNED_BYTE&&(_e=Ye===Zt?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function x(F,R){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==fi&&F.minFilter!==Ui?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function C(F){const R=F.target;R.removeEventListener("dispose",C),O(R),R.isVideoTexture&&h.delete(R)}function U(F){const R=F.target;R.removeEventListener("dispose",U),z(R)}function O(F){const R=i.get(F);if(R.__webglInit===void 0)return;const re=F.source,ce=m.get(re);if(ce){const pe=ce[R.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(F),Object.keys(ce).length===0&&m.delete(re)}i.remove(F)}function I(F){const R=i.get(F);n.deleteTexture(R.__webglTexture);const re=F.source,ce=m.get(re);delete ce[R.__cacheKey],o.memory.textures--}function z(F){const R=i.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(R.__webglFramebuffer[ce]))for(let pe=0;pe<R.__webglFramebuffer[ce].length;pe++)n.deleteFramebuffer(R.__webglFramebuffer[ce][pe]);else n.deleteFramebuffer(R.__webglFramebuffer[ce]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ce])}else{if(Array.isArray(R.__webglFramebuffer))for(let ce=0;ce<R.__webglFramebuffer.length;ce++)n.deleteFramebuffer(R.__webglFramebuffer[ce]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ce=0;ce<R.__webglColorRenderbuffer.length;ce++)R.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ce]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const re=F.textures;for(let ce=0,pe=re.length;ce<pe;ce++){const _e=i.get(re[ce]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(re[ce])}i.remove(F)}let A=0;function w(){A=0}function N(){const F=A;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),A+=1,F}function V(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function k(F,R){const re=i.get(F);if(F.isVideoTexture&&Pt(F),F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){const ce=F.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(re,F,R);return}}t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+R)}function ae(F,R){const re=i.get(F);if(F.version>0&&re.__version!==F.version){ze(re,F,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+R)}function Z(F,R){const re=i.get(F);if(F.version>0&&re.__version!==F.version){ze(re,F,R);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+R)}function me(F,R){const re=i.get(F);if(F.version>0&&re.__version!==F.version){gt(re,F,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+R)}const ge={[Gl]:n.REPEAT,[ua]:n.CLAMP_TO_EDGE,[Ih]:n.MIRRORED_REPEAT},W={[fi]:n.NEAREST,[Tb]:n.NEAREST_MIPMAP_NEAREST,[$u]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[eh]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},K={[Mk]:n.NEVER,[Ck]:n.ALWAYS,[Ek]:n.LESS,[Fb]:n.LEQUAL,[wk]:n.EQUAL,[Ak]:n.GEQUAL,[Tk]:n.GREATER,[bk]:n.NOTEQUAL};function Y(F,R){if(R.type===Vr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ui||R.magFilter===eh||R.magFilter===$u||R.magFilter===_s||R.minFilter===Ui||R.minFilter===eh||R.minFilter===$u||R.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,ge[R.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,ge[R.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,ge[R.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,W[R.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,W[R.minFilter]),R.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,K[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===fi||R.minFilter!==$u&&R.minFilter!==_s||R.type===Vr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Me(F,R){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",C));const ce=R.source;let pe=m.get(ce);pe===void 0&&(pe={},m.set(ce,pe));const _e=V(R);if(_e!==F.__cacheKey){pe[_e]===void 0&&(pe[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,re=!0),pe[_e].usedTimes++;const Ye=pe[F.__cacheKey];Ye!==void 0&&(pe[F.__cacheKey].usedTimes--,Ye.usedTimes===0&&I(R)),F.__cacheKey=_e,F.__webglTexture=pe[_e].texture}return re}function ze(F,R,re){let ce=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ce=n.TEXTURE_3D);const pe=Me(F,R),_e=R.source;t.bindTexture(ce,F.__webglTexture,n.TEXTURE0+re);const Ye=i.get(_e);if(_e.version!==Ye.__version||pe===!0){t.activeTexture(n.TEXTURE0+re);const Ee=Ut.getPrimaries(Ut.workingColorSpace),Ve=R.colorSpace===sa?null:Ut.getPrimaries(R.colorSpace),Ze=R.colorSpace===sa||Ee===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Te=E(R.image,!1,r.maxTextureSize);Te=Ke(R,Te);const Le=s.convert(R.format,R.colorSpace),nt=s.convert(R.type);let Fe=M(R.internalFormat,Le,nt,R.colorSpace,R.isVideoTexture);Y(ce,R);let Be;const dt=R.mipmaps,vt=R.isVideoTexture!==!0&&Fe!==Db,At=Ye.__version===void 0||pe===!0,xt=_e.dataReady,Ct=x(R,Te);if(R.isDepthTexture)Fe=n.DEPTH_COMPONENT16,R.type===Vr?Fe=n.DEPTH_COMPONENT32F:R.type===Wl?Fe=n.DEPTH_COMPONENT24:R.type===Xc&&(Fe=n.DEPTH24_STENCIL8),At&&(vt?t.texStorage2D(n.TEXTURE_2D,1,Fe,Te.width,Te.height):t.texImage2D(n.TEXTURE_2D,0,Fe,Te.width,Te.height,0,Le,nt,null));else if(R.isDataTexture)if(dt.length>0){vt&&At&&t.texStorage2D(n.TEXTURE_2D,Ct,Fe,dt[0].width,dt[0].height);for(let Xe=0,T=dt.length;Xe<T;Xe++)Be=dt[Xe],vt?xt&&t.texSubImage2D(n.TEXTURE_2D,Xe,0,0,Be.width,Be.height,Le,nt,Be.data):t.texImage2D(n.TEXTURE_2D,Xe,Fe,Be.width,Be.height,0,Le,nt,Be.data);R.generateMipmaps=!1}else vt?(At&&t.texStorage2D(n.TEXTURE_2D,Ct,Fe,Te.width,Te.height),xt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te.width,Te.height,Le,nt,Te.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,Te.width,Te.height,0,Le,nt,Te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){vt&&At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Fe,dt[0].width,dt[0].height,Te.depth);for(let Xe=0,T=dt.length;Xe<T;Xe++)Be=dt[Xe],R.format!==Er?Le!==null?vt?xt&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Xe,0,0,0,Be.width,Be.height,Te.depth,Le,Be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Xe,Fe,Be.width,Be.height,Te.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?xt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Xe,0,0,0,Be.width,Be.height,Te.depth,Le,nt,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Xe,Fe,Be.width,Be.height,Te.depth,0,Le,nt,Be.data)}else{vt&&At&&t.texStorage2D(n.TEXTURE_2D,Ct,Fe,dt[0].width,dt[0].height);for(let Xe=0,T=dt.length;Xe<T;Xe++)Be=dt[Xe],R.format!==Er?Le!==null?vt?xt&&t.compressedTexSubImage2D(n.TEXTURE_2D,Xe,0,0,Be.width,Be.height,Le,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,Xe,Fe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?xt&&t.texSubImage2D(n.TEXTURE_2D,Xe,0,0,Be.width,Be.height,Le,nt,Be.data):t.texImage2D(n.TEXTURE_2D,Xe,Fe,Be.width,Be.height,0,Le,nt,Be.data)}else if(R.isDataArrayTexture)vt?(At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Fe,Te.width,Te.height,Te.depth),xt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Le,nt,Te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,Te.width,Te.height,Te.depth,0,Le,nt,Te.data);else if(R.isData3DTexture)vt?(At&&t.texStorage3D(n.TEXTURE_3D,Ct,Fe,Te.width,Te.height,Te.depth),xt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Le,nt,Te.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,Te.width,Te.height,Te.depth,0,Le,nt,Te.data);else if(R.isFramebufferTexture){if(At)if(vt)t.texStorage2D(n.TEXTURE_2D,Ct,Fe,Te.width,Te.height);else{let Xe=Te.width,T=Te.height;for(let Q=0;Q<Ct;Q++)t.texImage2D(n.TEXTURE_2D,Q,Fe,Xe,T,0,Le,nt,null),Xe>>=1,T>>=1}}else if(dt.length>0){if(vt&&At){const Xe=It(dt[0]);t.texStorage2D(n.TEXTURE_2D,Ct,Fe,Xe.width,Xe.height)}for(let Xe=0,T=dt.length;Xe<T;Xe++)Be=dt[Xe],vt?xt&&t.texSubImage2D(n.TEXTURE_2D,Xe,0,0,Le,nt,Be):t.texImage2D(n.TEXTURE_2D,Xe,Fe,Le,nt,Be);R.generateMipmaps=!1}else if(vt){if(At){const Xe=It(Te);t.texStorage2D(n.TEXTURE_2D,Ct,Fe,Xe.width,Xe.height)}xt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,nt,Te)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Le,nt,Te);_(R)&&g(ce),Ye.__version=_e.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function gt(F,R,re){if(R.image.length!==6)return;const ce=Me(F,R),pe=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+re);const _e=i.get(pe);if(pe.version!==_e.__version||ce===!0){t.activeTexture(n.TEXTURE0+re);const Ye=Ut.getPrimaries(Ut.workingColorSpace),Ee=R.colorSpace===sa?null:Ut.getPrimaries(R.colorSpace),Ve=R.colorSpace===sa||Ye===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Ze=R.isCompressedTexture||R.image[0].isCompressedTexture,Te=R.image[0]&&R.image[0].isDataTexture,Le=[];for(let T=0;T<6;T++)!Ze&&!Te?Le[T]=E(R.image[T],!0,r.maxCubemapSize):Le[T]=Te?R.image[T].image:R.image[T],Le[T]=Ke(R,Le[T]);const nt=Le[0],Fe=s.convert(R.format,R.colorSpace),Be=s.convert(R.type),dt=M(R.internalFormat,Fe,Be,R.colorSpace),vt=R.isVideoTexture!==!0,At=_e.__version===void 0||ce===!0,xt=pe.dataReady;let Ct=x(R,nt);Y(n.TEXTURE_CUBE_MAP,R);let Xe;if(Ze){vt&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,dt,nt.width,nt.height);for(let T=0;T<6;T++){Xe=Le[T].mipmaps;for(let Q=0;Q<Xe.length;Q++){const ue=Xe[Q];R.format!==Er?Fe!==null?vt?xt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q,0,0,ue.width,ue.height,Fe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q,dt,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?xt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q,0,0,ue.width,ue.height,Fe,Be,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q,dt,ue.width,ue.height,0,Fe,Be,ue.data)}}}else{if(Xe=R.mipmaps,vt&&At){Xe.length>0&&Ct++;const T=It(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,dt,T.width,T.height)}for(let T=0;T<6;T++)if(Te){vt?xt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Le[T].width,Le[T].height,Fe,Be,Le[T].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,dt,Le[T].width,Le[T].height,0,Fe,Be,Le[T].data);for(let Q=0;Q<Xe.length;Q++){const Ae=Xe[Q].image[T].image;vt?xt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q+1,0,0,Ae.width,Ae.height,Fe,Be,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q+1,dt,Ae.width,Ae.height,0,Fe,Be,Ae.data)}}else{vt?xt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Fe,Be,Le[T]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,dt,Fe,Be,Le[T]);for(let Q=0;Q<Xe.length;Q++){const ue=Xe[Q];vt?xt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q+1,0,0,Fe,Be,ue.image[T]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,Q+1,dt,Fe,Be,ue.image[T])}}}_(R)&&g(n.TEXTURE_CUBE_MAP),_e.__version=pe.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function se(F,R,re,ce,pe,_e){const Ye=s.convert(re.format,re.colorSpace),Ee=s.convert(re.type),Ve=M(re.internalFormat,Ye,Ee,re.colorSpace);if(!i.get(R).__hasExternalTextures){const Te=Math.max(1,R.width>>_e),Le=Math.max(1,R.height>>_e);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,_e,Ve,Te,Le,R.depth,0,Ye,Ee,null):t.texImage2D(pe,_e,Ve,Te,Le,0,Ye,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),ye(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,pe,i.get(re).__webglTexture,0,ne(R)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,pe,i.get(re).__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(F,R,re){if(n.bindRenderbuffer(n.RENDERBUFFER,F),R.depthBuffer&&!R.stencilBuffer){let ce=n.DEPTH_COMPONENT24;if(re||ye(R)){const pe=R.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Vr?ce=n.DEPTH_COMPONENT32F:pe.type===Wl&&(ce=n.DEPTH_COMPONENT24));const _e=ne(R);ye(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,ce,R.width,R.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ce,R.width,R.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,R.width,R.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,F)}else if(R.depthBuffer&&R.stencilBuffer){const ce=ne(R);re&&ye(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,R.width,R.height):ye(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,F)}else{const ce=R.textures;for(let pe=0;pe<ce.length;pe++){const _e=ce[pe],Ye=s.convert(_e.format,_e.colorSpace),Ee=s.convert(_e.type),Ve=M(_e.internalFormat,Ye,Ee,_e.colorSpace),Ze=ne(R);re&&ye(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Ve,R.width,R.height):ye(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,Ve,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Ve,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);const ce=i.get(R.depthTexture).__webglTexture,pe=ne(R);if(R.depthTexture.format===Rl)ye(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(R.depthTexture.format===Lc)ye(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function fe(F){const R=i.get(F),re=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Ce(R.__webglFramebuffer,F)}else if(re){R.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ce]),R.__webglDepthbuffer[ce]=n.createRenderbuffer(),xe(R.__webglDepthbuffer[ce],F,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=n.createRenderbuffer(),xe(R.__webglDepthbuffer,F,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(F,R,re){const ce=i.get(F);R!==void 0&&se(ce.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&fe(F)}function le(F){const R=F.texture,re=i.get(F),ce=i.get(R);F.addEventListener("dispose",U);const pe=F.textures,_e=F.isWebGLCubeRenderTarget===!0,Ye=pe.length>1;if(Ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=R.version,o.memory.textures++),_e){re.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[Ee]=[];for(let Ve=0;Ve<R.mipmaps.length;Ve++)re.__webglFramebuffer[Ee][Ve]=n.createFramebuffer()}else re.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)re.__webglFramebuffer[Ee]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(Ye)for(let Ee=0,Ve=pe.length;Ee<Ve;Ee++){const Ze=i.get(pe[Ee]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&ye(F)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Ve=pe[Ee];re.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[Ee]);const Ze=s.convert(Ve.format,Ve.colorSpace),Te=s.convert(Ve.type),Le=M(Ve.internalFormat,Ze,Te,Ve.colorSpace,F.isXRRenderTarget===!0),nt=ne(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Le,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,re.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(re.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Y(n.TEXTURE_CUBE_MAP,R);for(let Ee=0;Ee<6;Ee++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ve=0;Ve<R.mipmaps.length;Ve++)se(re.__webglFramebuffer[Ee][Ve],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve);else se(re.__webglFramebuffer[Ee],F,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);_(R)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ee=0,Ve=pe.length;Ee<Ve;Ee++){const Ze=pe[Ee],Te=i.get(Ze);t.bindTexture(n.TEXTURE_2D,Te.__webglTexture),Y(n.TEXTURE_2D,Ze),se(re.__webglFramebuffer,F,Ze,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),_(Ze)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ee=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ce.__webglTexture),Y(Ee,R),R.mipmaps&&R.mipmaps.length>0)for(let Ve=0;Ve<R.mipmaps.length;Ve++)se(re.__webglFramebuffer[Ve],F,R,n.COLOR_ATTACHMENT0,Ee,Ve);else se(re.__webglFramebuffer,F,R,n.COLOR_ATTACHMENT0,Ee,0);_(R)&&g(Ee),t.unbindTexture()}F.depthBuffer&&fe(F)}function we(F){const R=F.textures;for(let re=0,ce=R.length;re<ce;re++){const pe=R[re];if(_(pe)){const _e=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ye=i.get(pe).__webglTexture;t.bindTexture(_e,Ye),g(_e),t.unbindTexture()}}}function H(F){if(F.samples>0&&ye(F)===!1){const R=F.textures,re=F.width,ce=F.height;let pe=n.COLOR_BUFFER_BIT;const _e=[],Ye=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(F),Ve=R.length>1;if(Ve)for(let Ze=0;Ze<R.length;Ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ze=0;Ze<R.length;Ze++){_e.push(n.COLOR_ATTACHMENT0+Ze),F.depthBuffer&&_e.push(Ye);const Te=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Te===!1&&(F.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&Ee.__isTransmissionRenderTarget!==!0&&(pe|=n.STENCIL_BUFFER_BIT)),Ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ze]),Te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ye])),Ve){const Le=i.get(R[Ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,re,ce,0,0,re,ce,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ve)for(let Ze=0;Ze<R.length;Ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ze]);const Te=i.get(R[Ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function ne(F){return Math.min(r.maxSamples,F.samples)}function ye(F){const R=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Pt(F){const R=o.render.frame;h.get(F)!==R&&(h.set(F,R),F.update())}function Ke(F,R){const re=F.colorSpace,ce=F.format,pe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==Vn&&re!==sa&&(Ut.getTransfer(re)===Zt?(ce!==Er||pe!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),R}function It(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=N,this.resetTextureUnits=w,this.setTexture2D=k,this.setTexture2DArray=ae,this.setTexture3D=Z,this.setTextureCube=me,this.rebindTextures=$e,this.setupRenderTarget=le,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ye}function H5(n,e){function t(i,r=sa){let s;const o=Ut.getTransfer(r);if(i===Ea)return n.UNSIGNED_BYTE;if(i===Cb)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rb)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fk)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uk)return n.BYTE;if(i===ck)return n.SHORT;if(i===bb)return n.UNSIGNED_SHORT;if(i===Ab)return n.INT;if(i===Wl)return n.UNSIGNED_INT;if(i===Vr)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===dk)return n.ALPHA;if(i===hk)return n.RGB;if(i===Er)return n.RGBA;if(i===pk)return n.LUMINANCE;if(i===mk)return n.LUMINANCE_ALPHA;if(i===Rl)return n.DEPTH_COMPONENT;if(i===Lc)return n.DEPTH_STENCIL;if(i===Pb)return n.RED;if(i===Lb)return n.RED_INTEGER;if(i===gk)return n.RG;if(i===Ib)return n.RG_INTEGER;if(i===Nb)return n.RGBA_INTEGER;if(i===ig||i===rg||i===sg||i===ag)if(o===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ig)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rg)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sg)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ag)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ig)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rg)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sg)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ag)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===A1||i===C1||i===R1||i===P1)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===A1)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===C1)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===R1)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===P1)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Db)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===L1||i===I1)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===L1)return o===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===I1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===N1||i===D1||i===O1||i===U1||i===k1||i===F1||i===B1||i===z1||i===H1||i===V1||i===G1||i===W1||i===X1||i===j1)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===N1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===D1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===O1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===U1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===k1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===F1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===B1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===z1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===H1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===V1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===G1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===W1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===X1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===j1)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===og||i===Y1||i===$1)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===og)return o===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Y1)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$1)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vk||i===q1||i===K1||i===Z1)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===og)return s.COMPRESSED_RED_RGTC1_EXT;if(i===q1)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===K1)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Z1)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class V5 extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ao extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G5={type:"move"};class Ng{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const u=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,i),g=this._getHandJoint(f,E);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=h.position.distanceTo(p.position),v=.02,S=.005;f.inputState.pinching&&m>v+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=v-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(G5)))}return u!==null&&(u.visible=r!==null),c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const W5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new On,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new ci({vertexShader:W5,fragmentShader:X5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new up(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Y5 extends Eo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,u="local-floor",c=1,f=null,h=null,p=null,m=null,v=null,S=null;const E=new j5,_=t.getContextAttributes();let g=null,M=null;const x=[],C=[],U=new He;let O=null;const I=new ui;I.layers.enable(1),I.viewport=new Vt;const z=new ui;z.layers.enable(2),z.viewport=new Vt;const A=[I,z],w=new V5;w.layers.enable(1),w.layers.enable(2);let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=x[se];return xe===void 0&&(xe=new Ng,x[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=x[se];return xe===void 0&&(xe=new Ng,x[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=x[se];return xe===void 0&&(xe=new Ng,x[se]=xe),xe.getHandSpace()};function k(se){const xe=C.indexOf(se.inputSource);if(xe===-1)return;const Ce=x[xe];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,f||o),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function ae(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",Z);for(let se=0;se<x.length;se++){const xe=C[se];xe!==null&&(C[se]=null,x[se].disconnect(xe))}N=null,V=null,E.reset(),e.setRenderTarget(g),v=null,m=null,p=null,r=null,M=null,gt.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){u=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const xe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),M=new li(v.framebufferWidth,v.framebufferHeight,{format:Er,type:Ea,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let xe=null,Ce=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=_.stencil?Lc:Rl,Ce=_.stencil?Xc:Wl);const $e={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer($e),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new li(m.textureWidth,m.textureHeight,{format:Er,type:Ea,depthTexture:new Zb(m.textureWidth,m.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const le=e.properties.get(M);le.__ignoreDepthValues=m.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await r.requestReferenceSpace(u),gt.setContext(r),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(se){for(let xe=0;xe<se.removed.length;xe++){const Ce=se.removed[xe],fe=C.indexOf(Ce);fe>=0&&(C[fe]=null,x[fe].disconnect(Ce))}for(let xe=0;xe<se.added.length;xe++){const Ce=se.added[xe];let fe=C.indexOf(Ce);if(fe===-1){for(let le=0;le<x.length;le++)if(le>=C.length){C.push(Ce),fe=le;break}else if(C[le]===null){C[le]=Ce,fe=le;break}if(fe===-1)break}const $e=x[fe];$e&&$e.connect(Ce)}}const me=new X,ge=new X;function W(se,xe,Ce){me.setFromMatrixPosition(xe.matrixWorld),ge.setFromMatrixPosition(Ce.matrixWorld);const fe=me.distanceTo(ge),$e=xe.projectionMatrix.elements,le=Ce.projectionMatrix.elements,we=$e[14]/($e[10]-1),H=$e[14]/($e[10]+1),ne=($e[9]+1)/$e[5],ye=($e[9]-1)/$e[5],Pt=($e[8]-1)/$e[0],Ke=(le[8]+1)/le[0],It=we*Pt,F=we*Ke,R=fe/(-Pt+Ke),re=R*-Pt;xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(re),se.translateZ(R),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const ce=we+R,pe=H+R,_e=It-re,Ye=F+(fe-re),Ee=ne*H/pe*ce,Ve=ye*H/pe*ce;se.projectionMatrix.makePerspective(_e,Ye,Ee,Ve,ce,pe),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function K(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;E.texture!==null&&(se.near=E.depthNear,se.far=E.depthFar),w.near=z.near=I.near=se.near,w.far=z.far=I.far=se.far,(N!==w.near||V!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,V=w.far,I.near=N,I.far=V,z.near=N,z.far=V,I.updateProjectionMatrix(),z.updateProjectionMatrix(),se.updateProjectionMatrix());const xe=se.parent,Ce=w.cameras;K(w,xe);for(let fe=0;fe<Ce.length;fe++)K(Ce[fe],xe);Ce.length===2?W(w,I,z):w.projectionMatrix.copy(I.projectionMatrix),Y(se,w,xe)};function Y(se,xe,Ce){Ce===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=jl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&v===null))return c},this.setFoveation=function(se){c=se,m!==null&&(m.fixedFoveation=se),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=se)},this.hasDepthSensing=function(){return E.texture!==null};let Me=null;function ze(se,xe){if(h=xe.getViewerPose(f||o),S=xe,h!==null){const Ce=h.views;v!==null&&(e.setRenderTargetFramebuffer(M,v.framebuffer),e.setRenderTarget(M));let fe=!1;Ce.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let le=0;le<Ce.length;le++){const we=Ce[le];let H=null;if(v!==null)H=v.getViewport(we);else{const ye=p.getViewSubImage(m,we);H=ye.viewport,le===0&&(e.setRenderTargetTextures(M,ye.colorTexture,m.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(M))}let ne=A[le];ne===void 0&&(ne=new ui,ne.layers.enable(le),ne.viewport=new Vt,A[le]=ne),ne.matrix.fromArray(we.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(we.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(H.x,H.y,H.width,H.height),le===0&&(w.matrix.copy(ne.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(ne)}const $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")){const le=p.getDepthInformation(Ce[0]);le&&le.isValid&&le.texture&&E.init(e,le,r.renderState)}}for(let Ce=0;Ce<x.length;Ce++){const fe=C[Ce],$e=x[Ce];fe!==null&&$e!==void 0&&$e.update(fe,xe,f||o)}E.render(e,w),Me&&Me(se,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),S=null}const gt=new Kb;gt.setAnimationLoop(ze),this.setAnimationLoop=function(se){Me=se},this.dispose=function(){}}}const $a=new $r,$5=new ct;function q5(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,Yb(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,M,x,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),p(_,g)):g.isMeshPhongMaterial?(s(_,g),h(_,g)):g.isMeshStandardMaterial?(s(_,g),m(_,g),g.isMeshPhysicalMaterial&&v(_,g,C)):g.isMeshMatcapMaterial?(s(_,g),S(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),E(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&u(_,g)):g.isPointsMaterial?c(_,g,M,x):g.isSpriteMaterial?f(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===bi&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===bi&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const M=e.get(g),x=M.envMap,C=M.envMapRotation;if(x&&(_.envMap.value=x,$a.copy(C),$a.x*=-1,$a.y*=-1,$a.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($a.y*=-1,$a.z*=-1),_.envMapRotation.value.setFromMatrix4($5.makeRotationFromEuler($a)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap){_.lightMap.value=g.lightMap;const U=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=g.lightMapIntensity*U,t(g.lightMap,_.lightMapTransform)}g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function u(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,M,x){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*M,_.scale.value=x*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function p(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function m(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function v(_,g,M){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bi&&_.clearcoatNormalScale.value.negate())),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,g){g.matcap&&(_.matcap.value=g.matcap)}function E(_,g){const M=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function K5(n,e,t,i){let r={},s={},o=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const C=x.program;i.uniformBlockBinding(M,C)}function f(M,x){let C=r[M.id];C===void 0&&(S(M),C=h(M),r[M.id]=C,M.addEventListener("dispose",_));const U=x.program;i.updateUBOMapping(M,U);const O=e.render.frame;s[M.id]!==O&&(m(M),s[M.id]=O)}function h(M){const x=p();M.__bindingPointIndex=x;const C=n.createBuffer(),U=M.__size,O=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,U,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,C),C}function p(){for(let M=0;M<u;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const x=r[M.id],C=M.uniforms,U=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let O=0,I=C.length;O<I;O++){const z=Array.isArray(C[O])?C[O]:[C[O]];for(let A=0,w=z.length;A<w;A++){const N=z[A];if(v(N,O,A,U)===!0){const V=N.__offset,k=Array.isArray(N.value)?N.value:[N.value];let ae=0;for(let Z=0;Z<k.length;Z++){const me=k[Z],ge=E(me);typeof me=="number"||typeof me=="boolean"?(N.__data[0]=me,n.bufferSubData(n.UNIFORM_BUFFER,V+ae,N.__data)):me.isMatrix3?(N.__data[0]=me.elements[0],N.__data[1]=me.elements[1],N.__data[2]=me.elements[2],N.__data[3]=0,N.__data[4]=me.elements[3],N.__data[5]=me.elements[4],N.__data[6]=me.elements[5],N.__data[7]=0,N.__data[8]=me.elements[6],N.__data[9]=me.elements[7],N.__data[10]=me.elements[8],N.__data[11]=0):(me.toArray(N.__data,ae),ae+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(M,x,C,U){const O=M.value,I=x+"_"+C;if(U[I]===void 0)return typeof O=="number"||typeof O=="boolean"?U[I]=O:U[I]=O.clone(),!0;{const z=U[I];if(typeof O=="number"||typeof O=="boolean"){if(z!==O)return U[I]=O,!0}else if(z.equals(O)===!1)return z.copy(O),!0}return!1}function S(M){const x=M.uniforms;let C=0;const U=16;for(let I=0,z=x.length;I<z;I++){const A=Array.isArray(x[I])?x[I]:[x[I]];for(let w=0,N=A.length;w<N;w++){const V=A[w],k=Array.isArray(V.value)?V.value:[V.value];for(let ae=0,Z=k.length;ae<Z;ae++){const me=k[ae],ge=E(me),W=C%U;W!==0&&U-W<ge.boundary&&(C+=U-W),V.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=C,C+=ge.storage}}}const O=C%U;return O>0&&(C+=U-O),M.__size=C,M.__cache={},this}function E(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function _(M){const x=M.target;x.removeEventListener("dispose",_);const C=o.indexOf(x.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:f,dispose:g}}class Z5{constructor(e={}){const{canvas:t=Xk(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:u=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),S=new Int32Array(4);let E=null,_=null;const g=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this._useLegacyLights=!1,this.toneMapping=Ma,this.toneMappingExposure=1;const x=this;let C=!1,U=0,O=0,I=null,z=-1,A=null;const w=new Vt,N=new Vt;let V=null;const k=new tt(0);let ae=0,Z=t.width,me=t.height,ge=1,W=null,K=null;const Y=new Vt(0,0,Z,me),Me=new Vt(0,0,Z,me);let ze=!1;const gt=new M_;let se=!1,xe=!1;const Ce=new ct,fe=new He,$e=new X,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return I===null?ge:1}let H=i;function ne(D,q){const te=t.getContext(D,q);return te!==null?te:null}try{const D={alpha:!0,depth:r,stencil:s,antialias:u,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${v_}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),H===null){const q="webgl2";if(H=ne(q,D),H===null)throw ne(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ye,Pt,Ke,It,F,R,re,ce,pe,_e,Ye,Ee,Ve,Ze,Te,Le,nt,Fe,Be,dt,vt,At,xt,Ct;function Xe(){ye=new az(H),ye.init(),Pt=new ez(H,ye,e),At=new H5(H,ye),Ke=new B5(H),It=new uz(H),F=new b5,R=new z5(H,ye,Ke,F,Pt,At,It),re=new nz(x),ce=new sz(x),pe=new mF(H),xt=new Q4(H,pe),_e=new oz(H,pe,It,xt),Ye=new fz(H,_e,pe,It),Be=new cz(H,Pt,R),Le=new tz(F),Ee=new T5(x,re,ce,ye,Pt,xt,Le),Ve=new q5(x,F),Ze=new C5,Te=new D5(ye),Fe=new Z4(x,re,ce,Ke,Ye,m,c),nt=new F5(x,Ye,Pt),Ct=new K5(H,It,Pt,Ke),dt=new J4(H,ye,It),vt=new lz(H,ye,It),It.programs=Ee.programs,x.capabilities=Pt,x.extensions=ye,x.properties=F,x.renderLists=Ze,x.shadowMap=nt,x.state=Ke,x.info=It}Xe();const T=new Y5(x,H);this.xr=T,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=ye.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ye.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(D){D!==void 0&&(ge=D,this.setSize(Z,me,!1))},this.getSize=function(D){return D.set(Z,me)},this.setSize=function(D,q,te=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,me=q,t.width=Math.floor(D*ge),t.height=Math.floor(q*ge),te===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(Z*ge,me*ge).floor()},this.setDrawingBufferSize=function(D,q,te){Z=D,me=q,ge=te,t.width=Math.floor(D*te),t.height=Math.floor(q*te),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(w)},this.getViewport=function(D){return D.copy(Y)},this.setViewport=function(D,q,te,ie){D.isVector4?Y.set(D.x,D.y,D.z,D.w):Y.set(D,q,te,ie),Ke.viewport(w.copy(Y).multiplyScalar(ge).round())},this.getScissor=function(D){return D.copy(Me)},this.setScissor=function(D,q,te,ie){D.isVector4?Me.set(D.x,D.y,D.z,D.w):Me.set(D,q,te,ie),Ke.scissor(N.copy(Me).multiplyScalar(ge).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(D){Ke.setScissorTest(ze=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){K=D},this.getClearColor=function(D){return D.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(D=!0,q=!0,te=!0){let ie=0;if(D){let J=!1;if(I!==null){const Ie=I.texture.format;J=Ie===Nb||Ie===Ib||Ie===Lb}if(J){const Ie=I.texture.type,je=Ie===Ea||Ie===Wl||Ie===bb||Ie===Xc||Ie===Cb||Ie===Rb,qe=Fe.getClearColor(),it=Fe.getClearAlpha(),rt=qe.r,st=qe.g,ot=qe.b;je?(v[0]=rt,v[1]=st,v[2]=ot,v[3]=it,H.clearBufferuiv(H.COLOR,0,v)):(S[0]=rt,S[1]=st,S[2]=ot,S[3]=it,H.clearBufferiv(H.COLOR,0,S))}else ie|=H.COLOR_BUFFER_BIT}q&&(ie|=H.DEPTH_BUFFER_BIT),te&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ze.dispose(),Te.dispose(),F.dispose(),re.dispose(),ce.dispose(),Ye.dispose(),xt.dispose(),Ct.dispose(),Ee.dispose(),T.dispose(),T.removeEventListener("sessionstart",cn),T.removeEventListener("sessionend",fn),Jn.stop()};function Q(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=It.autoReset,q=nt.enabled,te=nt.autoUpdate,ie=nt.needsUpdate,J=nt.type;Xe(),It.autoReset=D,nt.enabled=q,nt.autoUpdate=te,nt.needsUpdate=ie,nt.type=J}function Ae(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ne(D){const q=D.target;q.removeEventListener("dispose",Ne),St(q)}function St(D){_t(D),F.remove(D)}function _t(D){const q=F.get(D).programs;q!==void 0&&(q.forEach(function(te){Ee.releaseProgram(te)}),D.isShaderMaterial&&Ee.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,te,ie,J,Ie){q===null&&(q=le);const je=J.isMesh&&J.matrixWorld.determinant()<0,qe=_p(D,q,te,ie,J);Ke.setMaterial(ie,je);let it=te.index,rt=1;if(ie.wireframe===!0){if(it=_e.getWireframeAttribute(te),it===void 0)return;rt=2}const st=te.drawRange,ot=te.attributes.position;let rn=st.start*rt,Wn=(st.start+st.count)*rt;Ie!==null&&(rn=Math.max(rn,Ie.start*rt),Wn=Math.min(Wn,(Ie.start+Ie.count)*rt)),it!==null?(rn=Math.max(rn,0),Wn=Math.min(Wn,it.count)):ot!=null&&(rn=Math.max(rn,0),Wn=Math.min(Wn,ot.count));const gn=Wn-rn;if(gn<0||gn===1/0)return;xt.setup(J,ie,qe,te,it);let Gi,Yt=dt;if(it!==null&&(Gi=pe.get(it),Yt=vt,Yt.setIndex(Gi)),J.isMesh)ie.wireframe===!0?(Ke.setLineWidth(ie.wireframeLinewidth*we()),Yt.setMode(H.LINES)):Yt.setMode(H.TRIANGLES);else if(J.isLine){let ut=ie.linewidth;ut===void 0&&(ut=1),Ke.setLineWidth(ut*we()),J.isLineSegments?Yt.setMode(H.LINES):J.isLineLoop?Yt.setMode(H.LINE_LOOP):Yt.setMode(H.LINE_STRIP)}else J.isPoints?Yt.setMode(H.POINTS):J.isSprite&&Yt.setMode(H.TRIANGLES);if(J.isBatchedMesh)Yt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Yt.renderInstances(rn,gn,J.count);else if(te.isInstancedBufferGeometry){const ut=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,lu=Math.min(te.instanceCount,ut);Yt.renderInstances(rn,gn,lu)}else Yt.render(rn,gn)};function Gt(D,q,te){D.transparent===!0&&D.side===nr&&D.forceSinglePass===!1?(D.side=bi,D.needsUpdate=!0,wo(D,q,te),D.side=Ts,D.needsUpdate=!0,wo(D,q,te),D.side=nr):wo(D,q,te)}this.compile=function(D,q,te=null){te===null&&(te=D),_=Te.get(te),_.init(),M.push(_),te.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),D!==te&&D.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights(x._useLegacyLights);const ie=new Set;return D.traverse(function(J){const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let je=0;je<Ie.length;je++){const qe=Ie[je];Gt(qe,te,J),ie.add(qe)}else Gt(Ie,te,J),ie.add(Ie)}),M.pop(),_=null,ie},this.compileAsync=function(D,q,te=null){const ie=this.compile(D,q,te);return new Promise(J=>{function Ie(){if(ie.forEach(function(je){F.get(je).currentProgram.isReady()&&ie.delete(je)}),ie.size===0){J(D);return}setTimeout(Ie,10)}ye.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let xn=null;function Nt(D){xn&&xn(D)}function cn(){Jn.stop()}function fn(){Jn.start()}const Jn=new Kb;Jn.setAnimationLoop(Nt),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(D){xn=D,T.setAnimationLoop(D),D===null?Jn.stop():Jn.start()},T.addEventListener("sessionstart",cn),T.addEventListener("sessionend",fn),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(q),q=T.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,q,I),_=Te.get(D,M.length),_.init(),M.push(_),Ce.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),gt.setFromProjectionMatrix(Ce),xe=this.localClippingEnabled,se=Le.init(this.clippingPlanes,xe),E=Ze.get(D,g.length),E.init(),g.push(E),Gn(D,q,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(W,K),this.info.render.frame++,se===!0&&Le.beginShadows();const te=_.state.shadowsArray;if(nt.render(te,D,q),se===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1)&&Fe.render(E,D),_.setupLights(x._useLegacyLights),q.isArrayCamera){const ie=q.cameras;for(let J=0,Ie=ie.length;J<Ie;J++){const je=ie[J];Lr(E,D,je,je.viewport)}}else Lr(E,D,q);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(x,D,q),xt.resetDefaultState(),z=-1,A=null,M.pop(),M.length>0?_=M[M.length-1]:_=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function Gn(D,q,te,ie){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)te=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||gt.intersectsSprite(D)){ie&&$e.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ce);const je=Ye.update(D),qe=D.material;qe.visible&&E.push(D,je,qe,te,$e.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||gt.intersectsObject(D))){const je=Ye.update(D),qe=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),$e.copy(D.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),$e.copy(je.boundingSphere.center)),$e.applyMatrix4(D.matrixWorld).applyMatrix4(Ce)),Array.isArray(qe)){const it=je.groups;for(let rt=0,st=it.length;rt<st;rt++){const ot=it[rt],rn=qe[ot.materialIndex];rn&&rn.visible&&E.push(D,je,rn,te,$e.z,ot)}}else qe.visible&&E.push(D,je,qe,te,$e.z,null)}}const Ie=D.children;for(let je=0,qe=Ie.length;je<qe;je++)Gn(Ie[je],q,te,ie)}function Lr(D,q,te,ie){const J=D.opaque,Ie=D.transmissive,je=D.transparent;_.setupLightsView(te),se===!0&&Le.setGlobalState(x.clippingPlanes,te),Ie.length>0&&Ir(J,Ie,q,te),ie&&Ke.viewport(w.copy(ie)),J.length>0&&Zr(J,q,te),Ie.length>0&&Zr(Ie,q,te),je.length>0&&Zr(je,q,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ir(D,q,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget===null){_.state.transmissionRenderTarget=new li(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?xr:Ea,minFilter:_s,samples:4,stencilBuffer:s});const rt=F.get(_.state.transmissionRenderTarget);rt.__isTransmissionRenderTarget=!0}const Ie=_.state.transmissionRenderTarget;x.getDrawingBufferSize(fe),Ie.setSize(fe.x,fe.y);const je=x.getRenderTarget();x.setRenderTarget(Ie),x.getClearColor(k),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear();const qe=x.toneMapping;x.toneMapping=Ma,Zr(D,te,ie),R.updateMultisampleRenderTarget(Ie),R.updateRenderTargetMipmap(Ie);let it=!1;for(let rt=0,st=q.length;rt<st;rt++){const ot=q[rt],rn=ot.object,Wn=ot.geometry,gn=ot.material,Gi=ot.group;if(gn.side===nr&&rn.layers.test(ie.layers)){const Yt=gn.side;gn.side=bi,gn.needsUpdate=!0,Qc(rn,te,ie,Wn,gn,Gi),gn.side=Yt,gn.needsUpdate=!0,it=!0}}it===!0&&(R.updateMultisampleRenderTarget(Ie),R.updateRenderTargetMipmap(Ie)),x.setRenderTarget(je),x.setClearColor(k,ae),x.toneMapping=qe}function Zr(D,q,te){const ie=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Ie=D.length;J<Ie;J++){const je=D[J],qe=je.object,it=je.geometry,rt=ie===null?je.material:ie,st=je.group;qe.layers.test(te.layers)&&Qc(qe,q,te,it,rt,st)}}function Qc(D,q,te,ie,J,Ie){D.onBeforeRender(x,q,te,ie,J,Ie),D.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(x,q,te,ie,D,Ie),J.transparent===!0&&J.side===nr&&J.forceSinglePass===!1?(J.side=bi,J.needsUpdate=!0,x.renderBufferDirect(te,q,ie,J,D,Ie),J.side=Ts,J.needsUpdate=!0,x.renderBufferDirect(te,q,ie,J,D,Ie),J.side=nr):x.renderBufferDirect(te,q,ie,J,D,Ie),D.onAfterRender(x,q,te,ie,J,Ie)}function wo(D,q,te){q.isScene!==!0&&(q=le);const ie=F.get(D),J=_.state.lights,Ie=_.state.shadowsArray,je=J.state.version,qe=Ee.getParameters(D,J.state,Ie,q,te),it=Ee.getProgramCacheKey(qe);let rt=ie.programs;ie.environment=D.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(D.isMeshStandardMaterial?ce:re).get(D.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,rt===void 0&&(D.addEventListener("dispose",Ne),rt=new Map,ie.programs=rt);let st=rt.get(it);if(st!==void 0){if(ie.currentProgram===st&&ie.lightsStateVersion===je)return ef(D,qe),st}else qe.uniforms=Ee.getUniforms(D),D.onBuild(te,qe,x),D.onBeforeCompile(qe,x),st=Ee.acquireProgram(qe,it),rt.set(it,st),ie.uniforms=qe.uniforms;const ot=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ot.clippingPlanes=Le.uniform),ef(D,qe),ie.needsLights=xp(D),ie.lightsStateVersion=je,ie.needsLights&&(ot.ambientLightColor.value=J.state.ambient,ot.lightProbe.value=J.state.probe,ot.directionalLights.value=J.state.directional,ot.directionalLightShadows.value=J.state.directionalShadow,ot.spotLights.value=J.state.spot,ot.spotLightShadows.value=J.state.spotShadow,ot.rectAreaLights.value=J.state.rectArea,ot.ltc_1.value=J.state.rectAreaLTC1,ot.ltc_2.value=J.state.rectAreaLTC2,ot.pointLights.value=J.state.point,ot.pointLightShadows.value=J.state.pointShadow,ot.hemisphereLights.value=J.state.hemi,ot.directionalShadowMap.value=J.state.directionalShadowMap,ot.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ot.spotShadowMap.value=J.state.spotShadowMap,ot.spotLightMatrix.value=J.state.spotLightMatrix,ot.spotLightMap.value=J.state.spotLightMap,ot.pointShadowMap.value=J.state.pointShadowMap,ot.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=st,ie.uniformsList=null,st}function Jc(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=th.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function ef(D,q){const te=F.get(D);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function _p(D,q,te,ie,J){q.isScene!==!0&&(q=le),R.resetTextureUnits();const Ie=q.fog,je=ie.isMeshStandardMaterial?q.environment:null,qe=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vn,it=(ie.isMeshStandardMaterial?ce:re).get(ie.envMap||je),rt=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ot=!!te.morphAttributes.position,rn=!!te.morphAttributes.normal,Wn=!!te.morphAttributes.color;let gn=Ma;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gn=x.toneMapping);const Gi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Yt=Gi!==void 0?Gi.length:0,ut=F.get(ie),lu=_.state.lights;if(se===!0&&(xe===!0||D!==A)){const ei=D===A&&ie.id===z;Le.setState(ie,D,ei)}let Wt=!1;ie.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==lu.state.version||ut.outputColorSpace!==qe||J.isBatchedMesh&&ut.batching===!1||!J.isBatchedMesh&&ut.batching===!0||J.isInstancedMesh&&ut.instancing===!1||!J.isInstancedMesh&&ut.instancing===!0||J.isSkinnedMesh&&ut.skinning===!1||!J.isSkinnedMesh&&ut.skinning===!0||J.isInstancedMesh&&ut.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ut.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ut.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ut.instancingMorph===!1&&J.morphTexture!==null||ut.envMap!==it||ie.fog===!0&&ut.fog!==Ie||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Le.numPlanes||ut.numIntersection!==Le.numIntersection)||ut.vertexAlphas!==rt||ut.vertexTangents!==st||ut.morphTargets!==ot||ut.morphNormals!==rn||ut.morphColors!==Wn||ut.toneMapping!==gn||ut.morphTargetsCount!==Yt)&&(Wt=!0):(Wt=!0,ut.__version=ie.version);let Nr=ut.currentProgram;Wt===!0&&(Nr=wo(ie,q,J));let uu=!1,Ns=!1,Na=!1;const Pn=Nr.getUniforms(),lr=ut.uniforms;if(Ke.useProgram(Nr.program)&&(uu=!0,Ns=!0,Na=!0),ie.id!==z&&(z=ie.id,Ns=!0),uu||A!==D){Pn.setValue(H,"projectionMatrix",D.projectionMatrix),Pn.setValue(H,"viewMatrix",D.matrixWorldInverse);const ei=Pn.map.cameraPosition;ei!==void 0&&ei.setValue(H,$e.setFromMatrixPosition(D.matrixWorld)),Pt.logarithmicDepthBuffer&&Pn.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pn.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),A!==D&&(A=D,Ns=!0,Na=!0)}if(J.isSkinnedMesh){Pn.setOptional(H,J,"bindMatrix"),Pn.setOptional(H,J,"bindMatrixInverse");const ei=J.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Pn.setValue(H,"boneTexture",ei.boneTexture,R))}J.isBatchedMesh&&(Pn.setOptional(H,J,"batchingTexture"),Pn.setValue(H,"batchingTexture",J._matricesTexture,R));const Ds=te.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Be.update(J,te,Nr),(Ns||ut.receiveShadow!==J.receiveShadow)&&(ut.receiveShadow=J.receiveShadow,Pn.setValue(H,"receiveShadow",J.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(lr.envMap.value=it,lr.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(lr.envMapIntensity.value=q.environmentIntensity),Ns&&(Pn.setValue(H,"toneMappingExposure",x.toneMappingExposure),ut.needsLights&&yp(lr,Na),Ie&&ie.fog===!0&&Ve.refreshFogUniforms(lr,Ie),Ve.refreshMaterialUniforms(lr,ie,ge,me,_.state.transmissionRenderTarget),th.upload(H,Jc(ut),lr,R)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(th.upload(H,Jc(ut),lr,R),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pn.setValue(H,"center",J.center),Pn.setValue(H,"modelViewMatrix",J.modelViewMatrix),Pn.setValue(H,"normalMatrix",J.normalMatrix),Pn.setValue(H,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const ei=ie.uniformsGroups;for(let cu=0,tf=ei.length;cu<tf;cu++){const fu=ei[cu];Ct.update(fu,Nr),Ct.bind(fu,Nr)}}return Nr}function yp(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function xp(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,q,te){F.get(D.texture).__webglTexture=q,F.get(D.depthTexture).__webglTexture=te;const ie=F.get(D);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,q){const te=F.get(D);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,te=0){I=D,U=q,O=te;let ie=!0,J=null,Ie=!1,je=!1;if(D){const it=F.get(D);it.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1):it.__webglFramebuffer===void 0?R.setupRenderTarget(D):it.__hasExternalTextures&&R.rebindTextures(D,F.get(D.texture).__webglTexture,F.get(D.depthTexture).__webglTexture);const rt=D.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(je=!0);const st=F.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(st[q])?J=st[q][te]:J=st[q],Ie=!0):D.samples>0&&R.useMultisampledRTT(D)===!1?J=F.get(D).__webglMultisampledFramebuffer:Array.isArray(st)?J=st[te]:J=st,w.copy(D.viewport),N.copy(D.scissor),V=D.scissorTest}else w.copy(Y).multiplyScalar(ge).floor(),N.copy(Me).multiplyScalar(ge).floor(),V=ze;if(Ke.bindFramebuffer(H.FRAMEBUFFER,J)&&ie&&Ke.drawBuffers(D,J),Ke.viewport(w),Ke.scissor(N),Ke.setScissorTest(V),Ie){const it=F.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,it.__webglTexture,te)}else if(je){const it=F.get(D.texture),rt=q||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.__webglTexture,te||0,rt)}z=-1},this.readRenderTargetPixels=function(D,q,te,ie,J,Ie,je){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=F.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe){Ke.bindFramebuffer(H.FRAMEBUFFER,qe);try{const it=D.texture,rt=it.format,st=it.type;if(rt!==Er&&At.convert(rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=st===xr&&(ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float"));if(st!==Ea&&At.convert(st)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&st!==Vr&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ie&&te>=0&&te<=D.height-J&&H.readPixels(q,te,ie,J,At.convert(rt),At.convert(st),Ie)}finally{const it=I!==null?F.get(I).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(D,q,te=0){const ie=Math.pow(2,-te),J=Math.floor(q.image.width*ie),Ie=Math.floor(q.image.height*ie);R.setTexture2D(q,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,D.x,D.y,J,Ie),Ke.unbindTexture()},this.copyTextureToTexture=function(D,q,te,ie=0){const J=q.image.width,Ie=q.image.height,je=At.convert(te.format),qe=At.convert(te.type);R.setTexture2D(te,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,te.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,te.unpackAlignment),q.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ie,D.x,D.y,J,Ie,je,qe,q.image.data):q.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ie,D.x,D.y,q.mipmaps[0].width,q.mipmaps[0].height,je,q.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,ie,D.x,D.y,je,qe,q.image),ie===0&&te.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(D,q,te,ie,J=0){const Ie=Math.round(D.max.x-D.min.x),je=Math.round(D.max.y-D.min.y),qe=D.max.z-D.min.z+1,it=At.convert(ie.format),rt=At.convert(ie.type);let st;if(ie.isData3DTexture)R.setTexture3D(ie,0),st=H.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)R.setTexture2DArray(ie,0),st=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ie.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ie.unpackAlignment);const ot=H.getParameter(H.UNPACK_ROW_LENGTH),rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Wn=H.getParameter(H.UNPACK_SKIP_PIXELS),gn=H.getParameter(H.UNPACK_SKIP_ROWS),Gi=H.getParameter(H.UNPACK_SKIP_IMAGES),Yt=te.isCompressedTexture?te.mipmaps[J]:te.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Yt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Yt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,D.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,D.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,D.min.z),te.isDataTexture||te.isData3DTexture?H.texSubImage3D(st,J,q.x,q.y,q.z,Ie,je,qe,it,rt,Yt.data):ie.isCompressedArrayTexture?H.compressedTexSubImage3D(st,J,q.x,q.y,q.z,Ie,je,qe,it,Yt.data):H.texSubImage3D(st,J,q.x,q.y,q.z,Ie,je,qe,it,rt,Yt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ot),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wn),H.pixelStorei(H.UNPACK_SKIP_ROWS,gn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),J===0&&ie.generateMipmaps&&H.generateMipmap(st),Ke.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?R.setTextureCube(D,0):D.isData3DTexture?R.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?R.setTexture2DArray(D,0):R.setTexture2D(D,0),Ke.unbindTexture()},this.resetState=function(){U=0,O=0,I=null,Ke.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===__?"display-p3":"srgb",t.unpackColorSpace=Ut.workingColorSpace===lp?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Q5 extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class J5{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hb("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ri=new X;class w_{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new w_(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const XM=new X,jM=new Vt,YM=new Vt,eH=new X,$M=new ct,bd=new X,Dg=new qr,qM=new ct,Og=new nu;class tH extends Mi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=b1,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ps),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,bd),this.boundingBox.expandByPoint(bd)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,bd),this.boundingSphere.expandByPoint(bd)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dg.copy(this.boundingSphere),Dg.applyMatrix4(r),e.ray.intersectsSphere(Dg)!==!1&&(qM.copy(r).invert(),Og.copy(e.ray).applyMatrix4(qM),!(this.boundingBox!==null&&Og.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Og)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===b1?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lk?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;jM.fromBufferAttribute(r.attributes.skinIndex,e),YM.fromBufferAttribute(r.attributes.skinWeight,e),XM.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=YM.getComponent(s);if(o!==0){const u=jM.getComponent(s);$M.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(eH.copy(XM).applyMatrix4($M),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rA extends ln{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sA extends On{constructor(e=null,t=1,i=1,r,s,o,u,c,f=fi,h=fi,p,m){super(null,o,u,c,f,h,r,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const KM=new ct,nH=new ct;class T_{constructor(e=[],t=[]){this.uuid=Cr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const u=e[s]?e[s].matrixWorld:nH;KM.multiplyMatrices(u,t[s]),KM.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new T_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new sA(t,e,e,Er,Vr);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new rA),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const u=i[r];e.boneInverses.push(u.toArray())}return e}}class t0 extends hi{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sl=new ct,ZM=new ct,Ad=[],QM=new Ps,iH=new ct,zu=new Mi,Hu=new qr;class rH extends Mi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new t0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,iH)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ps),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sl),QM.copy(e.boundingBox).applyMatrix4(sl),this.boundingBox.union(QM)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sl),Hu.copy(e.boundingSphere).applyMatrix4(sl),this.boundingSphere.union(Hu)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let u=0;u<i.length;u++)i[u]=r[o+u]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(zu.geometry=this.geometry,zu.material=this.material,zu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hu.copy(this.boundingSphere),Hu.applyMatrix4(i),e.ray.intersectsSphere(Hu)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sl),ZM.multiplyMatrices(i,sl),zu.matrixWorld=ZM,zu.raycast(e,Ad);for(let o=0,u=Ad.length;o<u;o++){const c=Ad[o];c.instanceId=s,c.object=this,t.push(c)}Ad.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new t0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new sA(new Float32Array(r*this.count),r,this.count,Pb,Vr));const s=this.morphTexture.source.data.data;let o=0;for(let f=0;f<i.length;f++)o+=i[f];const u=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=u,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class b_ extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const JM=new X,eE=new X,tE=new ct,Ug=new nu,Cd=new qr;class dp extends ln{constructor(e=new or,t=new b_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)JM.fromBufferAttribute(t,r-1),eE.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=JM.distanceTo(eE);e.setAttribute("lineDistance",new Rr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cd.copy(i.boundingSphere),Cd.applyMatrix4(r),Cd.radius+=s,e.ray.intersectsSphere(Cd)===!1)return;tE.copy(r).invert(),Ug.copy(e.ray).applyMatrix4(tE);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=u*u,f=new X,h=new X,p=new X,m=new X,v=this.isLineSegments?2:1,S=i.index,_=i.attributes.position;if(S!==null){const g=Math.max(0,o.start),M=Math.min(S.count,o.start+o.count);for(let x=g,C=M-1;x<C;x+=v){const U=S.getX(x),O=S.getX(x+1);if(f.fromBufferAttribute(_,U),h.fromBufferAttribute(_,O),Ug.distanceSqToSegment(f,h,m,p)>c)continue;m.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(m);z<e.near||z>e.far||t.push({distance:z,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let x=g,C=M-1;x<C;x+=v){if(f.fromBufferAttribute(_,x),h.fromBufferAttribute(_,x+1),Ug.distanceSqToSegment(f,h,m,p)>c)continue;m.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(m);O<e.near||O>e.far||t.push({distance:O,point:p.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const u=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}const nE=new X,iE=new X;class sH extends dp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)nE.fromBufferAttribute(t,r),iE.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nE.distanceTo(iE);e.setAttribute("lineDistance",new Rr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aH extends dp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class aA extends jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rE=new ct,n0=new nu,Rd=new qr,Pd=new X;class oH extends ln{constructor(e=new or,t=new aA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rd.copy(i.boundingSphere),Rd.applyMatrix4(r),Rd.radius+=s,e.ray.intersectsSphere(Rd)===!1)return;rE.copy(r).invert(),n0.copy(e.ray).applyMatrix4(rE);const u=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=u*u,f=i.index,p=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let S=m,E=v;S<E;S++){const _=f.getX(S);Pd.fromBufferAttribute(p,_),sE(Pd,_,c,r,e,t,this)}}else{const m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let S=m,E=v;S<E;S++)Pd.fromBufferAttribute(p,S),sE(Pd,S,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const u=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}}function sE(n,e,t,i,r,s,o){const u=n0.distanceSqToPoint(n);if(u<t){const c=new X;n0.closestPointToPoint(n,c),c.applyMatrix4(i);const f=r.ray.origin.distanceTo(c);if(f<r.near||f>r.far)return;s.push({distance:f,distanceToRay:Math.sqrt(u),point:c,index:e,face:null,object:o})}}class A_ extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kb,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ls extends A_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ld(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lH(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uH(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function aE(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const u=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[u+c]}return r}function oA(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Yc{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let u=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const u=t[1];e<u&&(i=2,s=u);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const u=i+o>>>1;e<t[u]?o=u:i=u+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cH extends Yc{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Q1,endingEnd:Q1}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,u=r[s],c=r[o];if(u===void 0)switch(this.getSettings_().endingStart){case J1:s=e,u=2*t-i;break;case eM:s=r.length-2,u=t+r[s]-r[s+1];break;default:s=e,u=i}if(c===void 0)switch(this.getSettings_().endingEnd){case J1:o=e,c=2*i-t;break;case eM:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const f=(i-t)*.5,h=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,u=this.valueSize,c=e*u,f=c-u,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,v=this._weightNext,S=(i-t)/(r-t),E=S*S,_=E*S,g=-m*_+2*m*E-m*S,M=(1+m)*_+(-1.5-2*m)*E+(-.5+m)*S+1,x=(-1-v)*_+(1.5+v)*E+.5*S,C=v*_-v*E;for(let U=0;U!==u;++U)s[U]=g*o[h+U]+M*o[f+U]+x*o[c+U]+C*o[p+U];return s}}class fH extends Yc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,u=this.valueSize,c=e*u,f=c-u,h=(i-t)/(r-t),p=1-h;for(let m=0;m!==u;++m)s[m]=o[f+m]*p+o[c+m]*h;return s}}class dH extends Yc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kr{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ld(t,this.TimeBufferType),this.values=Ld(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ld(e.times,Array),values:Ld(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dH(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fH(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cH(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ic:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case lg:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return lg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const u=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*u,o*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let u=0;u!==s;u++){const c=i[u];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,c,o),e=!1;break}o=c}if(r!==void 0&&lH(r))for(let u=0,c=r.length;u!==c;++u){const f=r[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===lg,s=e.length-1;let o=1;for(let u=1;u<s;++u){let c=!1;const f=e[u],h=e[u+1];if(f!==h&&(u!==1||f!==e[0]))if(r)c=!0;else{const p=u*i,m=p-i,v=p+i;for(let S=0;S!==i;++S){const E=t[p+S];if(E!==t[m+S]||E!==t[v+S]){c=!0;break}}}if(c){if(u!==o){e[o]=e[u];const p=u*i,m=o*i;for(let v=0;v!==i;++v)t[m+v]=t[p+v]}++o}}if(s>0){e[o]=e[s];for(let u=s*i,c=o*i,f=0;f!==i;++f)t[c+f]=t[u+f];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Kr.prototype.TimeBufferType=Float32Array;Kr.prototype.ValueBufferType=Float32Array;Kr.prototype.DefaultInterpolation=Xl;class ru extends Kr{}ru.prototype.ValueTypeName="bool";ru.prototype.ValueBufferType=Array;ru.prototype.DefaultInterpolation=Ic;ru.prototype.InterpolantFactoryMethodLinear=void 0;ru.prototype.InterpolantFactoryMethodSmooth=void 0;class lA extends Kr{}lA.prototype.ValueTypeName="color";class $l extends Kr{}$l.prototype.ValueTypeName="number";class hH extends Yc{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,u=this.valueSize,c=(i-t)/(r-t);let f=e*u;for(let h=f+u;f!==h;f+=4)Yr.slerpFlat(s,0,o,f-u,o,f,c);return s}}class vo extends Kr{InterpolantFactoryMethodLinear(e){return new hH(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.DefaultInterpolation=Xl;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class su extends Kr{}su.prototype.ValueTypeName="string";su.prototype.ValueBufferType=Array;su.prototype.DefaultInterpolation=Ic;su.prototype.InterpolantFactoryMethodLinear=void 0;su.prototype.InterpolantFactoryMethodSmooth=void 0;class ql extends Kr{}ql.prototype.ValueTypeName="vector";class pH{constructor(e="",t=-1,i=[],r=_k){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Cr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,u=i.length;o!==u;++o)t.push(gH(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Kr.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let u=0;u<s;u++){let c=[],f=[];c.push((u+s-1)%s,u,(u+1)%s),f.push(0,1,0);const h=uH(c);c=aE(c,1,h),f=aE(f,1,h),!r&&c[0]===0&&(c.push(s),f.push(f[0])),o.push(new $l(".morphTargetInfluences["+t[u].name+"]",c,f).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let u=0,c=e.length;u<c;u++){const f=e[u],h=f.name.match(s);if(h&&h.length>1){const p=h[1];let m=r[p];m||(r[p]=m=[]),m.push(f)}}const o=[];for(const u in r)o.push(this.CreateFromMorphTargetSequence(u,r[u],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(p,m,v,S,E){if(v.length!==0){const _=[],g=[];oA(v,_,g,S),_.length!==0&&E.push(new p(m,_,g))}},r=[],s=e.name||"default",o=e.fps||30,u=e.blendMode;let c=e.length||-1;const f=e.hierarchy||[];for(let p=0;p<f.length;p++){const m=f[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let S;for(S=0;S<m.length;S++)if(m[S].morphTargets)for(let E=0;E<m[S].morphTargets.length;E++)v[m[S].morphTargets[E]]=-1;for(const E in v){const _=[],g=[];for(let M=0;M!==m[S].morphTargets.length;++M){const x=m[S];_.push(x.time),g.push(x.morphTarget===E?1:0)}r.push(new $l(".morphTargetInfluence["+E+"]",_,g))}c=v.length*o}else{const v=".bones["+t[p].name+"]";i(ql,v+".position",m,"pos",r),i(vo,v+".quaternion",m,"rot",r),i(ql,v+".scale",m,"scl",r)}}return r.length===0?null:new this(s,c,r,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mH(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $l;case"vector":case"vector2":case"vector3":case"vector4":return ql;case"color":return lA;case"quaternion":return vo;case"bool":case"boolean":return ru;case"string":return su}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function gH(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mH(n.type);if(n.times===void 0){const t=[],i=[];oA(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ca={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vH{constructor(e,t,i){const r=this;let s=!1,o=0,u=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){u++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,u),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,u),o===u&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return f.push(h,p),this},this.removeHandler=function(h){const p=f.indexOf(h);return p!==-1&&f.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=f.length;p<m;p+=2){const v=f[p],S=f[p+1];if(v.global&&(v.lastIndex=0),v.test(h))return S}return null}}}const _H=new vH;class au{constructor(e){this.manager=e!==void 0?e:_H,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}au.DEFAULT_MATERIAL_NAME="__DEFAULT";const ds={};class yH extends Error{constructor(e,t){super(e),this.response=t}}class uA extends au{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ca.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ds[e]!==void 0){ds[e].push({onLoad:t,onProgress:i,onError:r});return}ds[e]=[],ds[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,c=this.responseType;fetch(o).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const h=ds[e],p=f.body.getReader(),m=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),v=m?parseInt(m):0,S=v!==0;let E=0;const _=new ReadableStream({start(g){M();function M(){p.read().then(({done:x,value:C})=>{if(x)g.close();else{E+=C.byteLength;const U=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:v});for(let O=0,I=h.length;O<I;O++){const z=h[O];z.onProgress&&z.onProgress(U)}g.enqueue(C),M()}})}}});return new Response(_)}else throw new yH(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(c){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(h=>new DOMParser().parseFromString(h,u));case"json":return f.json();default:if(u===void 0)return f.text();{const p=/charset="?([^;"\s]*)"?/i.exec(u),m=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(m);return f.arrayBuffer().then(S=>v.decode(S))}}}).then(f=>{ca.add(e,f);const h=ds[e];delete ds[e];for(let p=0,m=h.length;p<m;p++){const v=h[p];v.onLoad&&v.onLoad(f)}}).catch(f=>{const h=ds[e];if(h===void 0)throw this.manager.itemError(e),f;delete ds[e];for(let p=0,m=h.length;p<m;p++){const v=h[p];v.onError&&v.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xH extends au{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ca.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const u=Nc("img");function c(){h(),ca.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){u.removeEventListener("load",c,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",c,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),s.manager.itemStart(e),u.src=e,u}}class SH extends au{constructor(e){super(e)}load(e,t,i,r){const s=new On,o=new xH(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(u){s.image=u,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class hp extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kg=new ct,oE=new X,lE=new X;class C_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new M_,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oE.setFromMatrixPosition(e.matrixWorld),t.position.copy(oE),lE.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lE),t.updateMatrixWorld(),kg.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kg),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class MH extends C_{constructor(){super(new ui(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=jl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class EH extends hp{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new MH}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uE=new ct,Vu=new X,Fg=new X;class wH extends C_{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vu.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vu),Fg.copy(i.position),Fg.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fg),i.updateMatrixWorld(),r.makeTranslation(-Vu.x,-Vu.y,-Vu.z),uE.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uE)}}class TH extends hp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wH}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bH extends C_{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AH extends hp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new bH}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CH extends hp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RH extends au{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ca.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(f=>{t&&t(f),s.manager.itemEnd(e)}).catch(f=>{r&&r(f)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const c=fetch(e,u).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(f){return ca.add(e,f),t&&t(f),s.manager.itemEnd(e),f}).catch(function(f){r&&r(f),ca.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ca.add(e,c),s.manager.itemStart(e)}}class PH{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cE(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cE();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cE(){return(typeof performance>"u"?Date:performance).now()}const R_="\\[\\]\\.:\\/",LH=new RegExp("["+R_+"]","g"),P_="[^"+R_+"]",IH="[^"+R_.replace("\\.","")+"]",NH=/((?:WC+[\/:])*)/.source.replace("WC",P_),DH=/(WCOD+)?/.source.replace("WCOD",IH),OH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",P_),UH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",P_),kH=new RegExp("^"+NH+DH+OH+UH+"$"),FH=["material","materials","bones","map"];class BH{constructor(e,t,i){const r=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Bt{constructor(e,t,i){this.path=t,this.parsedPath=i||Bt.parseTrackName(t),this.node=Bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Bt.Composite(e,t,i):new Bt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LH,"")}static parseTrackName(e){const t=kH.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);FH.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const u=s[o];if(u.name===t||u.uuid===t)return u;const c=i(u.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===f){f=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const o=e[r];if(o===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Bt.Composite=BH;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const fE=new ct;class zH{constructor(e,t,i=0,r=1/0){this.ray=new nu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new x_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fE.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fE),this}intersectObject(e,t=!0,i=[]){return i0(e,this,i,t),i.sort(dE),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)i0(e[r],this,i,t);return i.sort(dE),i}}function dE(n,e){return n.distance-e.distance}function i0(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)i0(r[s],e,t,!0)}}class hE{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:v_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=v_);function pE(n,e){if(e===yk)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Qv||e===Ob){let t=n.getIndex();if(t===null){const o=[],u=n.getAttribute("position");if(u!==void 0){for(let c=0;c<u.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Qv)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class HH extends au{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jH(t)}),this.register(function(t){return new tV(t)}),this.register(function(t){return new nV(t)}),this.register(function(t){return new iV(t)}),this.register(function(t){return new $H(t)}),this.register(function(t){return new qH(t)}),this.register(function(t){return new KH(t)}),this.register(function(t){return new ZH(t)}),this.register(function(t){return new XH(t)}),this.register(function(t){return new QH(t)}),this.register(function(t){return new YH(t)}),this.register(function(t){return new eV(t)}),this.register(function(t){return new JH(t)}),this.register(function(t){return new GH(t)}),this.register(function(t){return new rV(t)}),this.register(function(t){return new sV(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const f=uc.extractUrlBase(e);o=uc.resolveURL(f,this.path)}else o=uc.extractUrlBase(e);this.manager.itemStart(e);const u=function(f){r?r(f):console.error(f),s.manager.itemError(e),s.manager.itemEnd(e)},c=new uA(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){try{s.parse(f,o,function(h){t(h),s.manager.itemEnd(e)},u)}catch(h){u(h)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},u={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cA){try{o[Tt.KHR_BINARY_GLTF]=new aV(e)}catch(p){r&&r(p);return}s=JSON.parse(o[Tt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new yV(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const p=this.pluginCallbacks[h](f);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[p.name]=p,o[p.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const p=s.extensionsUsed[h],m=s.extensionsRequired||[];switch(p){case Tt.KHR_MATERIALS_UNLIT:o[p]=new WH;break;case Tt.KHR_DRACO_MESH_COMPRESSION:o[p]=new oV(s,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:o[p]=new lV;break;case Tt.KHR_MESH_QUANTIZATION:o[p]=new uV;break;default:m.indexOf(p)>=0&&u[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}f.setExtensions(o),f.setPlugins(u),f.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function VH(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GH{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let f;const h=new tt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Vn);const p=c.range!==void 0?c.range:0;switch(c.type){case"directional":f=new AH(h),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new TH(h),f.distance=p;break;case"spot":f=new EH(h),f.distance=p,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,f.angle=c.spot.outerConeAngle,f.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return f.position.set(0,0,0),f.decay=2,na(f,c),c.intensity!==void 0&&(f.intensity=c.intensity),f.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(f),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],u=(s.extensions&&s.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(c){return i._getNodeRef(t.cache,u,c)})}}class WH{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return so}extendParams(e,t,i){const r=[];e.color=new tt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,oi))}return Promise.all(r)}}class XH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class jH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const u=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(u,u)}return Promise.all(s)}}class YH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class $H{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const u=o.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Vn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,oi)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class qH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class KH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const u=o.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(u[0],u[1],u[2],Vn),Promise.all(s)}}class ZH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class QH{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const u=o.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(u[0],u[1],u[2],Vn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,oi)),Promise.all(s)}}class JH{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class eV{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ls}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class tV{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class nV{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],u=r.images[o.source];let c=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(c=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iV{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],u=r.images[o.source];let c=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(c=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rV{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(u){const c=r.byteOffset||0,f=r.byteLength||0,h=r.count,p=r.byteStride,m=new Uint8Array(u,c,f);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,p,m,r.mode,r.filter).then(function(v){return v.buffer}):o.ready.then(function(){const v=new ArrayBuffer(h*p);return o.decodeGltfBuffer(new Uint8Array(v),h,p,m,r.mode,r.filter),v})})}else return null}}class sV{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const f of r.primitives)if(f.mode!==Ji.TRIANGLES&&f.mode!==Ji.TRIANGLE_STRIP&&f.mode!==Ji.TRIANGLE_FAN&&f.mode!==void 0)return null;const o=i.extensions[this.name].attributes,u=[],c={};for(const f in o)u.push(this.parser.getDependency("accessor",o[f]).then(h=>(c[f]=h,c[f])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(f=>{const h=f.pop(),p=h.isGroup?h.children:[h],m=f[0].count,v=[];for(const S of p){const E=new ct,_=new X,g=new Yr,M=new X(1,1,1),x=new rH(S.geometry,S.material,m);for(let C=0;C<m;C++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,C),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,C),c.SCALE&&M.fromBufferAttribute(c.SCALE,C),x.setMatrixAt(C,E.compose(_,g,M));for(const C in c)if(C==="_COLOR_0"){const U=c[C];x.instanceColor=new t0(U.array,U.itemSize,U.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&S.geometry.setAttribute(C,c[C]);ln.prototype.copy.call(x,S),this.parser.assignFinalMaterial(x),v.push(x)}return h.isGroup?(h.clear(),h.add(...v),h):v[0]}))}}const cA="glTF",Gu=12,mE={JSON:1313821514,BIN:5130562};class aV{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gu),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cA)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Gu,s=new DataView(e,Gu);let o=0;for(;o<r;){const u=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===mE.JSON){const f=new Uint8Array(e,Gu+o,u);this.content=i.decode(f)}else if(c===mE.BIN){const f=Gu+o;this.body=e.slice(f,f+u)}o+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oV{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,u={},c={},f={};for(const h in o){const p=r0[h]||h.toLowerCase();u[p]=o[h]}for(const h in e.attributes){const p=r0[h]||h.toLowerCase();if(o[h]!==void 0){const m=i.accessors[e.attributes[h]],v=Ll[m.componentType];f[p]=v.name,c[p]=m.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(p,m){r.decodeDracoFile(h,function(v){for(const S in v.attributes){const E=v.attributes[S],_=c[S];_!==void 0&&(E.normalized=_)}p(v)},u,f,Vn,m)})})}}class lV{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uV{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class fA extends Yc{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,u=this.valueSize,c=u*2,f=u*3,h=r-t,p=(i-t)/h,m=p*p,v=m*p,S=e*f,E=S-f,_=-2*v+3*m,g=v-m,M=1-_,x=g-m+p;for(let C=0;C!==u;C++){const U=o[E+C+u],O=o[E+C+c]*h,I=o[S+C+u],z=o[S+C]*h;s[C]=M*U+x*O+_*I+g*z}return s}}const cV=new Yr;class fV extends fA{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return cV.fromArray(s).normalize().toArray(s),s}}const Ji={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ll={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gE={9728:fi,9729:Ui,9984:Tb,9985:eh,9986:$u,9987:_s},vE={33071:ua,33648:Ih,10497:Gl},Bg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},r0={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dV={CUBICSPLINE:void 0,LINEAR:Xl,STEP:Ic},zg={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hV(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new A_({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ts})),n.DefaultMaterial}function qa(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function na(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pV(n,e,t){let i=!1,r=!1,s=!1;for(let f=0,h=e.length;f<h;f++){const p=e[f];if(p.POSITION!==void 0&&(i=!0),p.NORMAL!==void 0&&(r=!0),p.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],u=[],c=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];if(i){const m=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):n.attributes.position;o.push(m)}if(r){const m=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):n.attributes.normal;u.push(m)}if(s){const m=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):n.attributes.color;c.push(m)}}return Promise.all([Promise.all(o),Promise.all(u),Promise.all(c)]).then(function(f){const h=f[0],p=f[1],m=f[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=p),s&&(n.morphAttributes.color=m),n.morphTargetsRelative=!0,n})}function mV(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gV(n){let e;const t=n.extensions&&n.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hg(t.attributes):e=n.indices+":"+Hg(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Hg(n.targets[i]);return e}function Hg(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function s0(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vV(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _V=new ct;class yV{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new VH,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new SH(this.options.manager):this.textureLoader=new RH(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uA(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const u={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return qa(s,u,r),na(u,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(u)})).then(function(){for(const c of u.scenes)c.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let u=0,c=o.length;u<c;u++)e[o[u]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,u)=>{const c=this.associations.get(o);c!=null&&this.associations.set(u,c);for(const[f,h]of o.children.entries())s(h,u.children[f])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(uc.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Bg[r.type],u=Ll[r.componentType],c=r.normalized===!0,f=new u(r.count*o);return Promise.resolve(new hi(f,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const u=o[0],c=Bg[r.type],f=Ll[r.componentType],h=f.BYTES_PER_ELEMENT,p=h*c,m=r.byteOffset||0,v=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,S=r.normalized===!0;let E,_;if(v&&v!==p){const g=Math.floor(m/v),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let x=t.cache.get(M);x||(E=new f(u,g*v,r.count*v/h),x=new J5(E,v/h),t.cache.add(M,x)),_=new w_(x,c,m%v/h,S)}else u===null?E=new f(r.count*c):E=new f(u,m,r.count*c),_=new hi(E,c,S);if(r.sparse!==void 0){const g=Bg.SCALAR,M=Ll[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,U=new M(o[1],x,r.sparse.count*g),O=new f(o[2],C,r.sparse.count*c);u!==null&&(_=new hi(_.array.slice(),_.itemSize,_.normalized));for(let I=0,z=U.length;I<z;I++){const A=U[I];if(_.setX(A,O[I*c]),c>=2&&_.setY(A,O[I*c+1]),c>=3&&_.setZ(A,O[I*c+2]),c>=4&&_.setW(A,O[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return _})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let u=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(u=c)}return this.loadTextureImage(e,s,u)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],u=s.images[t],c=(u.uri||u.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const f=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||u.name||"",h.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(h.name=u.uri);const m=(s.samplers||{})[o.sampler]||{};return h.magFilter=gE[m.magFilter]||Ui,h.minFilter=gE[m.minFilter]||_s,h.wrapS=vE[m.wrapS]||Gl,h.wrapT=vE[m.wrapT]||Gl,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=f,f}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const o=r.images[e],u=self.URL||self.webkitURL;let c=o.uri||"",f=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(p){f=!0;const m=new Blob([p],{type:o.mimeType});return c=u.createObjectURL(m),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(p){return new Promise(function(m,v){let S=m;t.isImageBitmapLoader===!0&&(S=function(E){const _=new On(E);_.needsUpdate=!0,m(_)}),t.load(uc.resolveURL(p,s.path),S,void 0,v)})}).then(function(p){return f===!0&&u.revokeObjectURL(c),p.userData.mimeType=o.mimeType||vV(o.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),p});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const c=s.associations.get(o);o=s.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,u),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let c=this.cache.get(u);c||(c=new aA,jr.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(u,c)),i=c}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let c=this.cache.get(u);c||(c=new b_,jr.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(u,c)),i=c}if(r||s||o){let u="ClonedMaterial:"+i.uuid+":";r&&(u+="derivative-tangents:"),s&&(u+="vertex-colors:"),o&&(u+="flat-shading:");let c=this.cache.get(u);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(u,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return A_}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const u={},c=s.extensions||{},f=[];if(c[Tt.KHR_MATERIALS_UNLIT]){const p=r[Tt.KHR_MATERIALS_UNLIT];o=p.getMaterialType(),f.push(p.extendParams(u,s,t))}else{const p=s.pbrMetallicRoughness||{};if(u.color=new tt(1,1,1),u.opacity=1,Array.isArray(p.baseColorFactor)){const m=p.baseColorFactor;u.color.setRGB(m[0],m[1],m[2],Vn),u.opacity=m[3]}p.baseColorTexture!==void 0&&f.push(t.assignTexture(u,"map",p.baseColorTexture,oi)),u.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,u.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(u,"metalnessMap",p.metallicRoughnessTexture)),f.push(t.assignTexture(u,"roughnessMap",p.metallicRoughnessTexture))),o=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,u)})))}s.doubleSided===!0&&(u.side=nr);const h=s.alphaMode||zg.OPAQUE;if(h===zg.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,h===zg.MASK&&(u.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==so&&(f.push(t.assignTexture(u,"normalMap",s.normalTexture)),u.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const p=s.normalTexture.scale;u.normalScale.set(p,p)}if(s.occlusionTexture!==void 0&&o!==so&&(f.push(t.assignTexture(u,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==so){const p=s.emissiveFactor;u.emissive=new tt().setRGB(p[0],p[1],p[2],Vn)}return s.emissiveTexture!==void 0&&o!==so&&f.push(t.assignTexture(u,"emissiveMap",s.emissiveTexture,oi)),Promise.all(f).then(function(){const p=new o(u);return s.name&&(p.name=s.name),na(p,s),t.associations.set(p,{materials:e}),s.extensions&&qa(r,p,s),p})}createUniqueName(e){const t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(u){return i[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(c){return _E(c,u,t)})}const o=[];for(let u=0,c=e.length;u<c;u++){const f=e[u],h=gV(f),p=r[h];if(p)o.push(p.promise);else{let m;f.extensions&&f.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?m=s(f):m=_E(new or,f,t),r[h]={primitive:f,promise:m},o.push(m)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,u=[];for(let c=0,f=o.length;c<f;c++){const h=o[c].material===void 0?hV(this.cache):this.getDependency("material",o[c].material);u.push(h)}return u.push(t.loadGeometries(o)),Promise.all(u).then(function(c){const f=c.slice(0,c.length-1),h=c[c.length-1],p=[];for(let v=0,S=h.length;v<S;v++){const E=h[v],_=o[v];let g;const M=f[v];if(_.mode===Ji.TRIANGLES||_.mode===Ji.TRIANGLE_STRIP||_.mode===Ji.TRIANGLE_FAN||_.mode===void 0)g=s.isSkinnedMesh===!0?new tH(E,M):new Mi(E,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),_.mode===Ji.TRIANGLE_STRIP?g.geometry=pE(g.geometry,Ob):_.mode===Ji.TRIANGLE_FAN&&(g.geometry=pE(g.geometry,Qv));else if(_.mode===Ji.LINES)g=new sH(E,M);else if(_.mode===Ji.LINE_STRIP)g=new dp(E,M);else if(_.mode===Ji.LINE_LOOP)g=new aH(E,M);else if(_.mode===Ji.POINTS)g=new oH(E,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(g.geometry.morphAttributes).length>0&&mV(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),na(g,s),_.extensions&&qa(r,g,_),t.assignFinalMaterial(g),p.push(g)}for(let v=0,S=p.length;v<S;v++)t.associations.set(p[v],{meshes:e,primitives:v});if(p.length===1)return s.extensions&&qa(r,p[0],s),p[0];const m=new ao;s.extensions&&qa(r,m,s),t.associations.set(m,{meshes:e});for(let v=0,S=p.length;v<S;v++)m.add(p[v]);return m})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ui(Bb.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new cp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),na(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,u=[],c=[];for(let f=0,h=o.length;f<h;f++){const p=o[f];if(p){u.push(p);const m=new ct;s!==null&&m.fromArray(s.array,f*16),c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new T_(u,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],u=[],c=[],f=[],h=[];for(let p=0,m=r.channels.length;p<m;p++){const v=r.channels[p],S=r.samplers[v.sampler],E=v.target,_=E.node,g=r.parameters!==void 0?r.parameters[S.input]:S.input,M=r.parameters!==void 0?r.parameters[S.output]:S.output;E.node!==void 0&&(o.push(this.getDependency("node",_)),u.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",M)),f.push(S),h.push(E))}return Promise.all([Promise.all(o),Promise.all(u),Promise.all(c),Promise.all(f),Promise.all(h)]).then(function(p){const m=p[0],v=p[1],S=p[2],E=p[3],_=p[4],g=[];for(let M=0,x=m.length;M<x;M++){const C=m[M],U=v[M],O=S[M],I=E[M],z=_[M];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const A=i._createAnimationTracks(C,U,O,I,z);if(A)for(let w=0;w<A.length;w++)g.push(A[w])}return new pH(s,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(u){if(u.isMesh)for(let c=0,f=r.weights.length;c<f;c++)u.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],u=r.children||[];for(let f=0,h=u.length;f<h;f++)o.push(i.getDependency("node",u[f]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(f){const h=f[0],p=f[1],m=f[2];m!==null&&h.traverse(function(v){v.isSkinnedMesh&&v.bind(m,_V)});for(let v=0,S=p.length;v<S;v++)h.add(p[v]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",u=[],c=r._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return c&&u.push(c),s.camera!==void 0&&u.push(r.getDependency("camera",s.camera).then(function(f){return r._getNodeRef(r.cameraCache,s.camera,f)})),r._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){u.push(f)}),this.nodeCache[e]=Promise.all(u).then(function(f){let h;if(s.isBone===!0?h=new rA:f.length>1?h=new ao:f.length===1?h=f[0]:h=new ln,h!==f[0])for(let p=0,m=f.length;p<m;p++)h.add(f[p]);if(s.name&&(h.userData.name=s.name,h.name=o),na(h,s),s.extensions&&qa(i,h,s),s.matrix!==void 0){const p=new ct;p.fromArray(s.matrix),h.applyMatrix4(p)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new ao;i.name&&(s.name=r.createUniqueName(i.name)),na(s,i),i.extensions&&qa(t,s,i);const o=i.nodes||[],u=[];for(let c=0,f=o.length;c<f;c++)u.push(r.getDependency("node",o[c]));return Promise.all(u).then(function(c){for(let h=0,p=c.length;h<p;h++)s.add(c[h]);const f=h=>{const p=new Map;for(const[m,v]of r.associations)(m instanceof jr||m instanceof On)&&p.set(m,v);return h.traverse(m=>{const v=r.associations.get(m);v!=null&&p.set(m,v)}),p};return r.associations=f(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],u=e.name?e.name:e.uuid,c=[];Zs[s.path]===Zs.weights?e.traverse(function(m){m.morphTargetInfluences&&c.push(m.name?m.name:m.uuid)}):c.push(u);let f;switch(Zs[s.path]){case Zs.weights:f=$l;break;case Zs.rotation:f=vo;break;case Zs.position:case Zs.scale:f=ql;break;default:switch(i.itemSize){case 1:f=$l;break;case 2:case 3:default:f=ql;break}break}const h=r.interpolation!==void 0?dV[r.interpolation]:Xl,p=this._getArrayFromAccessor(i);for(let m=0,v=c.length;m<v;m++){const S=new f(c[m]+"."+Zs[s.path],t.array,p,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),o.push(S)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=s0(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof vo?fV:fA;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xV(n,e,t){const i=e.attributes,r=new Ps;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],c=u.min,f=u.max;if(c!==void 0&&f!==void 0){if(r.set(new X(c[0],c[1],c[2]),new X(f[0],f[1],f[2])),u.normalized){const h=s0(Ll[u.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const u=new X,c=new X;for(let f=0,h=s.length;f<h;f++){const p=s[f];if(p.POSITION!==void 0){const m=t.json.accessors[p.POSITION],v=m.min,S=m.max;if(v!==void 0&&S!==void 0){if(c.setX(Math.max(Math.abs(v[0]),Math.abs(S[0]))),c.setY(Math.max(Math.abs(v[1]),Math.abs(S[1]))),c.setZ(Math.max(Math.abs(v[2]),Math.abs(S[2]))),m.normalized){const E=s0(Ll[m.componentType]);c.multiplyScalar(E)}u.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(u)}n.boundingBox=r;const o=new qr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function _E(n,e,t){const i=e.attributes,r=[];function s(o,u){return t.getDependency("accessor",o).then(function(c){n.setAttribute(u,c)})}for(const o in i){const u=r0[o]||o.toLowerCase();u in n.attributes||r.push(s(i[o],u))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(u){n.setIndex(u)});r.push(o)}return Ut.workingColorSpace!==Vn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ut.workingColorSpace}" not supported.`),na(n,e),xV(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?pV(n,e.targets,t):n})}function yE(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ue(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yE(Object(t),!0).forEach(function(i){Rn(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):yE(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function kh(n){"@babel/helpers - typeof";return kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kh(n)}function SV(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function xE(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function MV(n,e,t){return e&&xE(n.prototype,e),t&&xE(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Rn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function L_(n,e){return wV(n)||bV(n,e)||dA(n,e)||CV()}function $c(n){return EV(n)||TV(n)||dA(n)||AV()}function EV(n){if(Array.isArray(n))return a0(n)}function wV(n){if(Array.isArray(n))return n}function TV(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function bV(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,u;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(c){s=!0,u=c}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw u}}return i}}function dA(n,e){if(n){if(typeof n=="string")return a0(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a0(n,e)}}function a0(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function AV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var SE=function(){},I_={},hA={},pA=null,mA={mark:SE,measure:SE};try{typeof window<"u"&&(I_=window),typeof document<"u"&&(hA=document),typeof MutationObserver<"u"&&(pA=MutationObserver),typeof performance<"u"&&(mA=performance)}catch{}var RV=I_.navigator||{},ME=RV.userAgent,EE=ME===void 0?"":ME,ba=I_,en=hA,wE=pA,Id=mA;ba.document;var Is=!!en.documentElement&&!!en.head&&typeof en.addEventListener=="function"&&typeof en.createElement=="function",gA=~EE.indexOf("MSIE")||~EE.indexOf("Trident/"),Nd,Dd,Od,Ud,kd,bs="___FONT_AWESOME___",o0=16,vA="fa",_A="svg-inline--fa",_o="data-fa-i2svg",l0="data-fa-pseudo-element",PV="data-fa-pseudo-element-pending",N_="data-prefix",D_="data-icon",TE="fontawesome-i2svg",LV="async",IV=["HTML","HEAD","STYLE","SCRIPT"],yA=function(){try{return!0}catch{return!1}}(),Qt="classic",pn="sharp",O_=[Qt,pn];function qc(n){return new Proxy(n,{get:function(t,i){return i in t?t[i]:t[Qt]}})}var Dc=qc((Nd={},Rn(Nd,Qt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Rn(Nd,pn,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Nd)),Oc=qc((Dd={},Rn(Dd,Qt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Rn(Dd,pn,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Dd)),Uc=qc((Od={},Rn(Od,Qt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Rn(Od,pn,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Od)),NV=qc((Ud={},Rn(Ud,Qt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Rn(Ud,pn,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ud)),DV=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,xA="fa-layers-text",OV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,UV=qc((kd={},Rn(kd,Qt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Rn(kd,pn,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),kd)),SA=[1,2,3,4,5,6,7,8,9,10],kV=SA.concat([11,12,13,14,15,16,17,18,19,20]),FV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},kc=new Set;Object.keys(Oc[Qt]).map(kc.add.bind(kc));Object.keys(Oc[pn]).map(kc.add.bind(kc));var BV=[].concat(O_,$c(kc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oo.GROUP,oo.SWAP_OPACITY,oo.PRIMARY,oo.SECONDARY]).concat(SA.map(function(n){return"".concat(n,"x")})).concat(kV.map(function(n){return"w-".concat(n)})),cc=ba.FontAwesomeConfig||{};function zV(n){var e=en.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function HV(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(en&&typeof en.querySelector=="function"){var VV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];VV.forEach(function(n){var e=L_(n,2),t=e[0],i=e[1],r=HV(zV(t));r!=null&&(cc[i]=r)})}var MA={styleDefault:"solid",familyDefault:"classic",cssPrefix:vA,replacementClass:_A,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};cc.familyPrefix&&(cc.cssPrefix=cc.familyPrefix);var Kl=Ue(Ue({},MA),cc);Kl.autoReplaceSvg||(Kl.observeMutations=!1);var We={};Object.keys(MA).forEach(function(n){Object.defineProperty(We,n,{enumerable:!0,set:function(t){Kl[n]=t,fc.forEach(function(i){return i(We)})},get:function(){return Kl[n]}})});Object.defineProperty(We,"familyPrefix",{enumerable:!0,set:function(e){Kl.cssPrefix=e,fc.forEach(function(t){return t(We)})},get:function(){return Kl.cssPrefix}});ba.FontAwesomeConfig=We;var fc=[];function GV(n){return fc.push(n),function(){fc.splice(fc.indexOf(n),1)}}var Qs=o0,Gr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WV(n){if(!(!n||!Is)){var e=en.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=en.head.childNodes,i=null,r=t.length-1;r>-1;r--){var s=t[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return en.head.insertBefore(e,i),n}}var XV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fc(){for(var n=12,e="";n-- >0;)e+=XV[Math.random()*62|0];return e}function ou(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function U_(n){return n.classList?ou(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function EA(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jV(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(EA(n[t]),'" ')},"").trim()}function pp(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function k_(n){return n.size!==Gr.size||n.x!==Gr.x||n.y!==Gr.y||n.rotate!==Gr.rotate||n.flipX||n.flipY}function YV(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),u="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:c,path:f}}function $V(n){var e=n.transform,t=n.width,i=t===void 0?o0:t,r=n.height,s=r===void 0?o0:r,o=n.startCentered,u=o===void 0?!1:o,c="";return u&&gA?c+="translate(".concat(e.x/Qs-i/2,"em, ").concat(e.y/Qs-s/2,"em) "):u?c+="translate(calc(-50% + ".concat(e.x/Qs,"em), calc(-50% + ").concat(e.y/Qs,"em)) "):c+="translate(".concat(e.x/Qs,"em, ").concat(e.y/Qs,"em) "),c+="scale(".concat(e.size/Qs*(e.flipX?-1:1),", ").concat(e.size/Qs*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var qV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wA(){var n=vA,e=_A,t=We.cssPrefix,i=We.replacementClass,r=qV;if(t!==n||i!==e){var s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),u=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(u,".".concat(i))}return r}var bE=!1;function Vg(){We.autoAddCss&&!bE&&(WV(wA()),bE=!0)}var KV={mixout:function(){return{dom:{css:wA,insertCss:Vg}}},hooks:function(){return{beforeDOMElementCreation:function(){Vg()},beforeI2svg:function(){Vg()}}}},As=ba||{};As[bs]||(As[bs]={});As[bs].styles||(As[bs].styles={});As[bs].hooks||(As[bs].hooks={});As[bs].shims||(As[bs].shims=[]);var wr=As[bs],TA=[],ZV=function n(){en.removeEventListener("DOMContentLoaded",n),Fh=1,TA.map(function(e){return e()})},Fh=!1;Is&&(Fh=(en.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(en.readyState),Fh||en.addEventListener("DOMContentLoaded",ZV));function QV(n){Is&&(Fh?setTimeout(n,0):TA.push(n))}function Kc(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?EA(n):"<".concat(e," ").concat(jV(i),">").concat(s.map(Kc).join(""),"</").concat(e,">")}function AE(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var JV=function(e,t){return function(i,r,s,o){return e.call(t,i,r,s,o)}},Gg=function(e,t,i,r){var s=Object.keys(e),o=s.length,u=r!==void 0?JV(t,r):t,c,f,h;for(i===void 0?(c=1,h=e[s[0]]):(c=0,h=i);c<o;c++)f=s[c],h=u(h,e[f],f,e);return h};function eG(n){for(var e=[],t=0,i=n.length;t<i;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){var s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function u0(n){var e=eG(n);return e.length===1?e[0].toString(16):null}function tG(n,e){var t=n.length,i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function CE(n){return Object.keys(n).reduce(function(e,t){var i=n[t],r=!!i.icon;return r?e[i.iconName]=i.icon:e[t]=i,e},{})}function c0(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,r=i===void 0?!1:i,s=CE(e);typeof wr.hooks.addPack=="function"&&!r?wr.hooks.addPack(n,CE(e)):wr.styles[n]=Ue(Ue({},wr.styles[n]||{}),s),n==="fas"&&c0("fa",e)}var Fd,Bd,zd,yl=wr.styles,nG=wr.shims,iG=(Fd={},Rn(Fd,Qt,Object.values(Uc[Qt])),Rn(Fd,pn,Object.values(Uc[pn])),Fd),F_=null,bA={},AA={},CA={},RA={},PA={},rG=(Bd={},Rn(Bd,Qt,Object.keys(Dc[Qt])),Rn(Bd,pn,Object.keys(Dc[pn])),Bd);function sG(n){return~BV.indexOf(n)}function aG(n,e){var t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!sG(r)?r:null}var LA=function(){var e=function(s){return Gg(yl,function(o,u,c){return o[c]=Gg(u,s,{}),o},{})};bA=e(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var u=s[2].filter(function(c){return typeof c=="number"});u.forEach(function(c){r[c.toString(16)]=o})}return r}),AA=e(function(r,s,o){if(r[o]=o,s[2]){var u=s[2].filter(function(c){return typeof c=="string"});u.forEach(function(c){r[c]=o})}return r}),PA=e(function(r,s,o){var u=s[2];return r[o]=o,u.forEach(function(c){r[c]=o}),r});var t="far"in yl||We.autoFetchSvg,i=Gg(nG,function(r,s){var o=s[0],u=s[1],c=s[2];return u==="far"&&!t&&(u="fas"),typeof o=="string"&&(r.names[o]={prefix:u,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:u,iconName:c}),r},{names:{},unicodes:{}});CA=i.names,RA=i.unicodes,F_=mp(We.styleDefault,{family:We.familyDefault})};GV(function(n){F_=mp(n.styleDefault,{family:We.familyDefault})});LA();function B_(n,e){return(bA[n]||{})[e]}function oG(n,e){return(AA[n]||{})[e]}function lo(n,e){return(PA[n]||{})[e]}function IA(n){return CA[n]||{prefix:null,iconName:null}}function lG(n){var e=RA[n],t=B_("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Aa(){return F_}var z_=function(){return{prefix:null,iconName:null,rest:[]}};function mp(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,i=t===void 0?Qt:t,r=Dc[i][n],s=Oc[i][n]||Oc[i][r],o=n in wr.styles?n:null;return s||o||null}var RE=(zd={},Rn(zd,Qt,Object.keys(Uc[Qt])),Rn(zd,pn,Object.keys(Uc[pn])),zd);function gp(n){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.skipLookups,r=i===void 0?!1:i,s=(e={},Rn(e,Qt,"".concat(We.cssPrefix,"-").concat(Qt)),Rn(e,pn,"".concat(We.cssPrefix,"-").concat(pn)),e),o=null,u=Qt;(n.includes(s[Qt])||n.some(function(f){return RE[Qt].includes(f)}))&&(u=Qt),(n.includes(s[pn])||n.some(function(f){return RE[pn].includes(f)}))&&(u=pn);var c=n.reduce(function(f,h){var p=aG(We.cssPrefix,h);if(yl[h]?(h=iG[u].includes(h)?NV[u][h]:h,o=h,f.prefix=h):rG[u].indexOf(h)>-1?(o=h,f.prefix=mp(h,{family:u})):p?f.iconName=p:h!==We.replacementClass&&h!==s[Qt]&&h!==s[pn]&&f.rest.push(h),!r&&f.prefix&&f.iconName){var m=o==="fa"?IA(f.iconName):{},v=lo(f.prefix,f.iconName);m.prefix&&(o=null),f.iconName=m.iconName||v||f.iconName,f.prefix=m.prefix||f.prefix,f.prefix==="far"&&!yl.far&&yl.fas&&!We.autoFetchSvg&&(f.prefix="fas")}return f},z_());return(n.includes("fa-brands")||n.includes("fab"))&&(c.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(c.prefix="fad"),!c.prefix&&u===pn&&(yl.fass||We.autoFetchSvg)&&(c.prefix="fass",c.iconName=lo(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Aa()||"fas"),c}var uG=function(){function n(){SV(this,n),this.definitions={}}return MV(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(u){t.definitions[u]=Ue(Ue({},t.definitions[u]||{}),o[u]),c0(u,o[u]);var c=Uc[Qt][u];c&&c0(c,o[u]),LA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],u=o.prefix,c=o.iconName,f=o.icon,h=f[2];t[u]||(t[u]={}),h.length>0&&h.forEach(function(p){typeof p=="string"&&(t[u][p]=f)}),t[u][c]=f}),t}}]),n}(),PE=[],xl={},Il={},cG=Object.keys(Il);function fG(n,e){var t=e.mixoutsTo;return PE=n,xl={},Object.keys(Il).forEach(function(i){cG.indexOf(i)===-1&&delete Il[i]}),PE.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),kh(r[o])==="object"&&Object.keys(r[o]).forEach(function(u){t[o]||(t[o]={}),t[o][u]=r[o][u]})}),i.hooks){var s=i.hooks();Object.keys(s).forEach(function(o){xl[o]||(xl[o]=[]),xl[o].push(s[o])})}i.provides&&i.provides(Il)}),t}function f0(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];var s=xl[n]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function yo(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=xl[n]||[];r.forEach(function(s){s.apply(null,t)})}function Cs(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Il[n]?Il[n].apply(null,e):void 0}function d0(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||Aa();if(e)return e=lo(t,e)||e,AE(NA.definitions,t,e)||AE(wr.styles,t,e)}var NA=new uG,dG=function(){We.autoReplaceSvg=!1,We.observeMutations=!1,yo("noAuto")},hG={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Is?(yo("beforeI2svg",e),Cs("pseudoElements2svg",e),Cs("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;We.autoReplaceSvg===!1&&(We.autoReplaceSvg=!0),We.observeMutations=!0,QV(function(){mG({autoReplaceSvgRoot:t}),yo("watch",e)})}},pG={icon:function(e){if(e===null)return null;if(kh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:lo(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=mp(e[0]);return{prefix:i,iconName:lo(i,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(We.cssPrefix,"-"))>-1||e.match(DV))){var r=gp(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Aa(),iconName:lo(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Aa();return{prefix:s,iconName:lo(s,e)||e}}}},Vi={noAuto:dG,config:We,dom:hG,parse:pG,library:NA,findIconDefinition:d0,toHtml:Kc},mG=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,i=t===void 0?en:t;(Object.keys(wr.styles).length>0||We.autoFetchSvg)&&Is&&We.autoReplaceSvg&&Vi.dom.i2svg({node:i})};function vp(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return Kc(i)})}}),Object.defineProperty(n,"node",{get:function(){if(Is){var i=en.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function gG(n){var e=n.children,t=n.main,i=n.mask,r=n.attributes,s=n.styles,o=n.transform;if(k_(o)&&t.found&&!i.found){var u=t.width,c=t.height,f={x:u/c/2,y:.5};r.style=pp(Ue(Ue({},s),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function vG(n){var e=n.prefix,t=n.iconName,i=n.children,r=n.attributes,s=n.symbol,o=s===!0?"".concat(e,"-").concat(We.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ue(Ue({},r),{},{id:o}),children:i}]}]}function H_(n){var e=n.icons,t=e.main,i=e.mask,r=n.prefix,s=n.iconName,o=n.transform,u=n.symbol,c=n.title,f=n.maskId,h=n.titleId,p=n.extra,m=n.watchable,v=m===void 0?!1:m,S=i.found?i:t,E=S.width,_=S.height,g=r==="fak",M=[We.replacementClass,s?"".concat(We.cssPrefix,"-").concat(s):""].filter(function(A){return p.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(p.classes).join(" "),x={children:[],attributes:Ue(Ue({},p.attributes),{},{"data-prefix":r,"data-icon":s,class:M,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(_)})},C=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(E/_*16*.0625,"em")}:{};v&&(x.attributes[_o]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(h||Fc())},children:[c]}),delete x.attributes.title);var U=Ue(Ue({},x),{},{prefix:r,iconName:s,main:t,mask:i,maskId:f,transform:o,symbol:u,styles:Ue(Ue({},C),p.styles)}),O=i.found&&t.found?Cs("generateAbstractMask",U)||{children:[],attributes:{}}:Cs("generateAbstractIcon",U)||{children:[],attributes:{}},I=O.children,z=O.attributes;return U.children=I,U.attributes=z,u?vG(U):gG(U)}function LE(n){var e=n.content,t=n.width,i=n.height,r=n.transform,s=n.title,o=n.extra,u=n.watchable,c=u===void 0?!1:u,f=Ue(Ue(Ue({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(f[_o]="");var h=Ue({},o.styles);k_(r)&&(h.transform=$V({transform:r,startCentered:!0,width:t,height:i}),h["-webkit-transform"]=h.transform);var p=pp(h);p.length>0&&(f.style=p);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function _G(n){var e=n.content,t=n.title,i=n.extra,r=Ue(Ue(Ue({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),s=pp(i.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var Wg=wr.styles;function h0(n){var e=n[0],t=n[1],i=n.slice(4),r=L_(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(We.cssPrefix,"-").concat(oo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(We.cssPrefix,"-").concat(oo.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(We.cssPrefix,"-").concat(oo.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}var yG={found:!1,width:512,height:512};function xG(n,e){!yA&&!We.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function p0(n,e){var t=e;return e==="fa"&&We.styleDefault!==null&&(e=Aa()),new Promise(function(i,r){if(Cs("missingIconAbstract"),t==="fa"){var s=IA(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&Wg[e]&&Wg[e][n]){var o=Wg[e][n];return i(h0(o))}xG(n,e),i(Ue(Ue({},yG),{},{icon:We.showMissingIcons&&n?Cs("missingIconAbstract")||{}:{}}))})}var IE=function(){},m0=We.measurePerformance&&Id&&Id.mark&&Id.measure?Id:{mark:IE,measure:IE},Ku='FA "6.5.2"',SG=function(e){return m0.mark("".concat(Ku," ").concat(e," begins")),function(){return DA(e)}},DA=function(e){m0.mark("".concat(Ku," ").concat(e," ends")),m0.measure("".concat(Ku," ").concat(e),"".concat(Ku," ").concat(e," begins"),"".concat(Ku," ").concat(e," ends"))},V_={begin:SG,end:DA},nh=function(){};function NE(n){var e=n.getAttribute?n.getAttribute(_o):null;return typeof e=="string"}function MG(n){var e=n.getAttribute?n.getAttribute(N_):null,t=n.getAttribute?n.getAttribute(D_):null;return e&&t}function EG(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(We.replacementClass)}function wG(){if(We.autoReplaceSvg===!0)return ih.replace;var n=ih[We.autoReplaceSvg];return n||ih.replace}function TG(n){return en.createElementNS("http://www.w3.org/2000/svg",n)}function bG(n){return en.createElement(n)}function OA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,i=t===void 0?n.tag==="svg"?TG:bG:t;if(typeof n=="string")return en.createTextNode(n);var r=i(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var s=n.children||[];return s.forEach(function(o){r.appendChild(OA(o,{ceFn:i}))}),r}function AG(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ih={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(OA(r),t)}),t.getAttribute(_o)===null&&We.keepOriginalSource){var i=en.createComment(AG(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(e){var t=e[0],i=e[1];if(~U_(t).indexOf(We.replacementClass))return ih.replace(e);var r=new RegExp("".concat(We.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var s=i[0].attributes.class.split(" ").reduce(function(u,c){return c===We.replacementClass||c.match(r)?u.toSvg.push(c):u.toNode.push(c),u},{toNode:[],toSvg:[]});i[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var o=i.map(function(u){return Kc(u)}).join(`
`);t.setAttribute(_o,""),t.innerHTML=o}};function DE(n){n()}function UA(n,e){var t=typeof e=="function"?e:nh;if(n.length===0)t();else{var i=DE;We.mutateApproach===LV&&(i=ba.requestAnimationFrame||DE),i(function(){var r=wG(),s=V_.begin("mutate");n.map(r),s(),t()})}}var G_=!1;function kA(){G_=!0}function g0(){G_=!1}var Bh=null;function OE(n){if(wE&&We.observeMutations){var e=n.treeCallback,t=e===void 0?nh:e,i=n.nodeCallback,r=i===void 0?nh:i,s=n.pseudoElementsCallback,o=s===void 0?nh:s,u=n.observeMutationsRoot,c=u===void 0?en:u;Bh=new wE(function(f){if(!G_){var h=Aa();ou(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!NE(p.addedNodes[0])&&(We.searchPseudoElements&&o(p.target),t(p.target)),p.type==="attributes"&&p.target.parentNode&&We.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&NE(p.target)&&~FV.indexOf(p.attributeName))if(p.attributeName==="class"&&MG(p.target)){var m=gp(U_(p.target)),v=m.prefix,S=m.iconName;p.target.setAttribute(N_,v||h),S&&p.target.setAttribute(D_,S)}else EG(p.target)&&r(p.target)})}}),Is&&Bh.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CG(){Bh&&Bh.disconnect()}function RG(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(i,r){var s=r.split(":"),o=s[0],u=s.slice(1);return o&&u.length>0&&(i[o]=u.join(":").trim()),i},{})),t}function PG(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"",r=gp(U_(n));return r.prefix||(r.prefix=Aa()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=oG(r.prefix,n.innerText)||B_(r.prefix,u0(n.innerText))),!r.iconName&&We.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function LG(n){var e=ou(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return We.autoA11y&&(t?e["aria-labelledby"]="".concat(We.replacementClass,"-title-").concat(i||Fc()):(e["aria-hidden"]="true",e.focusable="false")),e}function IG(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Gr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function UE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=PG(n),i=t.iconName,r=t.prefix,s=t.rest,o=LG(n),u=f0("parseNodeAttributes",{},n),c=e.styleParser?RG(n):[];return Ue({iconName:i,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:Gr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},u)}var NG=wr.styles;function FA(n){var e=We.autoReplaceSvg==="nest"?UE(n,{styleParser:!1}):UE(n);return~e.extra.classes.indexOf(xA)?Cs("generateLayersText",n,e):Cs("generateSvgReplacementMutation",n,e)}var Ca=new Set;O_.map(function(n){Ca.add("fa-".concat(n))});Object.keys(Dc[Qt]).map(Ca.add.bind(Ca));Object.keys(Dc[pn]).map(Ca.add.bind(Ca));Ca=$c(Ca);function kE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Is)return Promise.resolve();var t=en.documentElement.classList,i=function(p){return t.add("".concat(TE,"-").concat(p))},r=function(p){return t.remove("".concat(TE,"-").concat(p))},s=We.autoFetchSvg?Ca:O_.map(function(h){return"fa-".concat(h)}).concat(Object.keys(NG));s.includes("fa")||s.push("fa");var o=[".".concat(xA,":not([").concat(_o,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(_o,"])")})).join(", ");if(o.length===0)return Promise.resolve();var u=[];try{u=ou(n.querySelectorAll(o))}catch{}if(u.length>0)i("pending"),r("complete");else return Promise.resolve();var c=V_.begin("onTree"),f=u.reduce(function(h,p){try{var m=FA(p);m&&h.push(m)}catch(v){yA||v.name==="MissingIcon"&&console.error(v)}return h},[]);return new Promise(function(h,p){Promise.all(f).then(function(m){UA(m,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),c(),h()})}).catch(function(m){c(),p(m)})})}function DG(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;FA(n).then(function(t){t&&UA([t],e)})}function OG(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:d0(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:d0(r||{})),n(i,Ue(Ue({},t),{},{mask:r}))}}var UG=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,r=i===void 0?Gr:i,s=t.symbol,o=s===void 0?!1:s,u=t.mask,c=u===void 0?null:u,f=t.maskId,h=f===void 0?null:f,p=t.title,m=p===void 0?null:p,v=t.titleId,S=v===void 0?null:v,E=t.classes,_=E===void 0?[]:E,g=t.attributes,M=g===void 0?{}:g,x=t.styles,C=x===void 0?{}:x;if(e){var U=e.prefix,O=e.iconName,I=e.icon;return vp(Ue({type:"icon"},e),function(){return yo("beforeDOMElementCreation",{iconDefinition:e,params:t}),We.autoA11y&&(m?M["aria-labelledby"]="".concat(We.replacementClass,"-title-").concat(S||Fc()):(M["aria-hidden"]="true",M.focusable="false")),H_({icons:{main:h0(I),mask:c?h0(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:O,transform:Ue(Ue({},Gr),r),symbol:o,title:m,maskId:h,titleId:S,extra:{attributes:M,styles:C,classes:_}})})}},kG={mixout:function(){return{icon:OG(UG)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=kE,t.nodeCallback=DG,t}}},provides:function(e){e.i2svg=function(t){var i=t.node,r=i===void 0?en:i,s=t.callback,o=s===void 0?function(){}:s;return kE(r,o)},e.generateSvgReplacementMutation=function(t,i){var r=i.iconName,s=i.title,o=i.titleId,u=i.prefix,c=i.transform,f=i.symbol,h=i.mask,p=i.maskId,m=i.extra;return new Promise(function(v,S){Promise.all([p0(r,u),h.iconName?p0(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var _=L_(E,2),g=_[0],M=_[1];v([t,H_({icons:{main:g,mask:M},prefix:u,iconName:r,transform:c,symbol:f,maskId:p,title:s,titleId:o,extra:m,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){var i=t.children,r=t.attributes,s=t.main,o=t.transform,u=t.styles,c=pp(u);c.length>0&&(r.style=c);var f;return k_(o)&&(f=Cs("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),i.push(f||s.icon),{children:i,attributes:r}}}},FG={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,s=r===void 0?[]:r;return vp({type:"layer"},function(){yo("beforeDOMElementCreation",{assembler:t,params:i});var o=[];return t(function(u){Array.isArray(u)?u.map(function(c){o=o.concat(c.abstract)}):o=o.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(We.cssPrefix,"-layers")].concat($c(s)).join(" ")},children:o}]})}}}},BG={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,s=r===void 0?null:r,o=i.classes,u=o===void 0?[]:o,c=i.attributes,f=c===void 0?{}:c,h=i.styles,p=h===void 0?{}:h;return vp({type:"counter",content:t},function(){return yo("beforeDOMElementCreation",{content:t,params:i}),_G({content:t.toString(),title:s,extra:{attributes:f,styles:p,classes:["".concat(We.cssPrefix,"-layers-counter")].concat($c(u))}})})}}}},zG={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,s=r===void 0?Gr:r,o=i.title,u=o===void 0?null:o,c=i.classes,f=c===void 0?[]:c,h=i.attributes,p=h===void 0?{}:h,m=i.styles,v=m===void 0?{}:m;return vp({type:"text",content:t},function(){return yo("beforeDOMElementCreation",{content:t,params:i}),LE({content:t,transform:Ue(Ue({},Gr),s),title:u,extra:{attributes:p,styles:v,classes:["".concat(We.cssPrefix,"-layers-text")].concat($c(f))}})})}}},provides:function(e){e.generateLayersText=function(t,i){var r=i.title,s=i.transform,o=i.extra,u=null,c=null;if(gA){var f=parseInt(getComputedStyle(t).fontSize,10),h=t.getBoundingClientRect();u=h.width/f,c=h.height/f}return We.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,LE({content:t.innerHTML,width:u,height:c,transform:s,title:r,extra:o,watchable:!0})])}}},HG=new RegExp('"',"ug"),FE=[1105920,1112319];function VG(n){var e=n.replace(HG,""),t=tG(e,0),i=t>=FE[0]&&t<=FE[1],r=e.length===2?e[0]===e[1]:!1;return{value:u0(r?e[0]:e),isSecondary:i||r}}function BE(n,e){var t="".concat(PV).concat(e.replace(":","-"));return new Promise(function(i,r){if(n.getAttribute(t)!==null)return i();var s=ou(n.children),o=s.filter(function(I){return I.getAttribute(l0)===e})[0],u=ba.getComputedStyle(n,e),c=u.getPropertyValue("font-family").match(OV),f=u.getPropertyValue("font-weight"),h=u.getPropertyValue("content");if(o&&!c)return n.removeChild(o),i();if(c&&h!=="none"&&h!==""){var p=u.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?pn:Qt,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Oc[m][c[2].toLowerCase()]:UV[m][f],S=VG(p),E=S.value,_=S.isSecondary,g=c[0].startsWith("FontAwesome"),M=B_(v,E),x=M;if(g){var C=lG(E);C.iconName&&C.prefix&&(M=C.iconName,v=C.prefix)}if(M&&!_&&(!o||o.getAttribute(N_)!==v||o.getAttribute(D_)!==x)){n.setAttribute(t,x),o&&n.removeChild(o);var U=IG(),O=U.extra;O.attributes[l0]=e,p0(M,v).then(function(I){var z=H_(Ue(Ue({},U),{},{icons:{main:I,mask:z_()},prefix:v,iconName:x,extra:O,watchable:!0})),A=en.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(A,n.firstChild):n.appendChild(A),A.outerHTML=z.map(function(w){return Kc(w)}).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function GG(n){return Promise.all([BE(n,"::before"),BE(n,"::after")])}function WG(n){return n.parentNode!==document.head&&!~IV.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(l0)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function zE(n){if(Is)return new Promise(function(e,t){var i=ou(n.querySelectorAll("*")).filter(WG).map(GG),r=V_.begin("searchPseudoElements");kA(),Promise.all(i).then(function(){r(),g0(),e()}).catch(function(){r(),g0(),t()})})}var XG={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=zE,t}}},provides:function(e){e.pseudoElements2svg=function(t){var i=t.node,r=i===void 0?en:i;We.searchPseudoElements&&zE(r)}}},HE=!1,jG={mixout:function(){return{dom:{unwatch:function(){kA(),HE=!0}}}},hooks:function(){return{bootstrap:function(){OE(f0("mutationObserverCallbacks",{}))},noAuto:function(){CG()},watch:function(t){var i=t.observeMutationsRoot;HE?g0():OE(f0("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},VE=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],u=s.slice(1).join("-");if(o&&u==="h")return i.flipX=!0,i;if(o&&u==="v")return i.flipY=!0,i;if(u=parseFloat(u),isNaN(u))return i;switch(o){case"grow":i.size=i.size+u;break;case"shrink":i.size=i.size-u;break;case"left":i.x=i.x-u;break;case"right":i.x=i.x+u;break;case"up":i.y=i.y-u;break;case"down":i.y=i.y+u;break;case"rotate":i.rotate=i.rotate+u;break}return i},t)},YG={mixout:function(){return{parse:{transform:function(t){return VE(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-transform");return r&&(t.transform=VE(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var i=t.main,r=t.transform,s=t.containerWidth,o=t.iconWidth,u={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(c," ").concat(f," ").concat(h)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:u,inner:p,path:m};return{tag:"g",attributes:Ue({},v.outer),children:[{tag:"g",attributes:Ue({},v.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Ue(Ue({},i.icon.attributes),v.path)}]}]}}}},Xg={x:0,y:0,width:"100%",height:"100%"};function GE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function $G(n){return n.tag==="g"?n.children:[n]}var qG={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-mask"),s=r?gp(r.split(" ").map(function(o){return o.trim()})):z_();return s.prefix||(s.prefix=Aa()),t.mask=s,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var i=t.children,r=t.attributes,s=t.main,o=t.mask,u=t.maskId,c=t.transform,f=s.width,h=s.icon,p=o.width,m=o.icon,v=YV({transform:c,containerWidth:p,iconWidth:f}),S={tag:"rect",attributes:Ue(Ue({},Xg),{},{fill:"white"})},E=h.children?{children:h.children.map(GE)}:{},_={tag:"g",attributes:Ue({},v.inner),children:[GE(Ue({tag:h.tag,attributes:Ue(Ue({},h.attributes),v.path)},E))]},g={tag:"g",attributes:Ue({},v.outer),children:[_]},M="mask-".concat(u||Fc()),x="clip-".concat(u||Fc()),C={tag:"mask",attributes:Ue(Ue({},Xg),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,g]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:$G(m)},C]};return i.push(U,{tag:"rect",attributes:Ue({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(M,")")},Xg)}),{children:i,attributes:r}}}},KG={provides:function(e){var t=!1;ba.matchMedia&&(t=ba.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:Ue(Ue({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Ue(Ue({},s),{},{attributeName:"opacity"}),u={tag:"circle",attributes:Ue(Ue({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||u.children.push({tag:"animate",attributes:Ue(Ue({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ue(Ue({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(u),i.push({tag:"path",attributes:Ue(Ue({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Ue(Ue({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:Ue(Ue({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ue(Ue({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},ZG={hooks:function(){return{parseNodeAttributes:function(t,i){var r=i.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},QG=[KV,kG,FG,BG,zG,XG,jG,YG,qG,KG,ZG];fG(QG,{mixoutsTo:Vi});Vi.noAuto;Vi.config;Vi.library;Vi.dom;var v0=Vi.parse;Vi.findIconDefinition;Vi.toHtml;var JG=Vi.icon;Vi.layer;Vi.text;Vi.counter;var BA={exports:{}},e6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",t6=e6,n6=t6;function zA(){}function HA(){}HA.resetWarningCache=zA;var i6=function(){function n(i,r,s,o,u,c){if(c!==n6){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:HA,resetWarningCache:zA};return t.PropTypes=t,t};BA.exports=i6();var r6=BA.exports;const Et=S0(r6);function WE(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function fa(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?WE(Object(t),!0).forEach(function(i){Sl(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):WE(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function zh(n){"@babel/helpers - typeof";return zh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zh(n)}function Sl(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s6(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function a6(n,e){if(n==null)return{};var t=s6(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function _0(n){return o6(n)||l6(n)||u6(n)||c6()}function o6(n){if(Array.isArray(n))return y0(n)}function l6(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function u6(n,e){if(n){if(typeof n=="string")return y0(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y0(n,e)}}function y0(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function c6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f6(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,o=n.shake,u=n.flash,c=n.spin,f=n.spinPulse,h=n.spinReverse,p=n.pulse,m=n.fixedWidth,v=n.inverse,S=n.border,E=n.listItem,_=n.flip,g=n.size,M=n.rotation,x=n.pull,C=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":u,"fa-spin":c,"fa-spin-reverse":h,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":m,"fa-inverse":v,"fa-border":S,"fa-li":E,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Sl(e,"fa-".concat(g),typeof g<"u"&&g!==null),Sl(e,"fa-rotate-".concat(M),typeof M<"u"&&M!==null&&M!==0),Sl(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),Sl(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(C).map(function(U){return C[U]?U:null}).filter(function(U){return U})}function d6(n){return n=n-0,n===n}function VA(n){return d6(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var h6=["style"];function p6(n){return n.charAt(0).toUpperCase()+n.slice(1)}function m6(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=VA(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[p6(r)]=s:e[r]=s,e},{})}function GA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(c){return GA(n,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var h=e.attributes[f];switch(f){case"class":c.attrs.className=h,delete e.attributes.class;break;case"style":c.attrs.style=m6(h);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=h:c.attrs[VA(f)]=h}return c},{attrs:{}}),s=t.style,o=s===void 0?{}:s,u=a6(t,h6);return r.attrs.style=fa(fa({},r.attrs.style),o),n.apply(void 0,[e.tag,fa(fa({},r.attrs),u)].concat(_0(i)))}var WA=!1;try{WA=!0}catch{}function g6(){if(!WA&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function XE(n){if(n&&zh(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(v0.icon)return v0.icon(n);if(n===null)return null;if(n&&zh(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function jg(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Sl({},n,e):{}}var Mr=b0.forwardRef(function(n,e){var t=n.icon,i=n.mask,r=n.symbol,s=n.className,o=n.title,u=n.titleId,c=n.maskId,f=XE(t),h=jg("classes",[].concat(_0(f6(n)),_0(s.split(" ")))),p=jg("transform",typeof n.transform=="string"?v0.transform(n.transform):n.transform),m=jg("mask",XE(i)),v=JG(f,fa(fa(fa(fa({},h),p),m),{},{symbol:r,title:o,titleId:u,maskId:c}));if(!v)return g6("Could not find icon",f),null;var S=v.abstract,E={ref:e};return Object.keys(n).forEach(function(_){Mr.defaultProps.hasOwnProperty(_)||(E[_]=n[_])}),v6(S[0],E)});Mr.displayName="FontAwesomeIcon";Mr.propTypes={beat:Et.bool,border:Et.bool,beatFade:Et.bool,bounce:Et.bool,className:Et.string,fade:Et.bool,flash:Et.bool,mask:Et.oneOfType([Et.object,Et.array,Et.string]),maskId:Et.string,fixedWidth:Et.bool,inverse:Et.bool,flip:Et.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Et.oneOfType([Et.object,Et.array,Et.string]),listItem:Et.bool,pull:Et.oneOf(["right","left"]),pulse:Et.bool,rotation:Et.oneOf([0,90,180,270]),shake:Et.bool,size:Et.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Et.bool,spinPulse:Et.bool,spinReverse:Et.bool,symbol:Et.oneOfType([Et.bool,Et.string]),title:Et.string,titleId:Et.string,transform:Et.oneOfType([Et.string,Et.object]),swapOpacity:Et.bool};Mr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v6=GA.bind(null,b0.createElement),_6={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},y6=_6,x6={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},S6={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},M6={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},E6={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},w6={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},T6={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};const to=n=>{const{children:e,...t}=n;return De.jsx("button",{...t,children:e})},b6=({moveCameraLeft:n,moveCameraRight:e,moveCameraTop:t,moveCameraBottom:i,resetCamera:r,rotateCameraLeft:s,rotateCameraRight:o})=>De.jsxs("div",{className:"control-panel",children:[De.jsx(to,{onClick:n,className:"btn-control button3",title:"Move Camera Left",children:De.jsx(Mr,{icon:S6})}),De.jsx(to,{onClick:e,className:"btn-control button2",title:"Move Camera Right",children:De.jsx(Mr,{icon:x6})}),De.jsx(to,{onClick:t,className:"btn-control button1",title:"Move Camera Up",children:De.jsx(Mr,{icon:w6})}),De.jsx(to,{onClick:i,className:"btn-control button4",title:"Move Camera Down",children:De.jsx(Mr,{icon:E6})}),De.jsx(to,{onClick:r,className:"btn-control button5",title:"Reset Camera",children:De.jsx(Mr,{icon:y6})})]}),jE={type:"change"},Yg={type:"start"},YE={type:"end"},Hd=new nu,$E=new ta,A6=Math.cos(70*Bb.DEG2RAD);class C6 extends Eo{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zo.ROTATE,MIDDLE:zo.DOLLY,RIGHT:zo.PAN},this.touches={ONE:Ho.ROTATE,TWO:Ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Le),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(jE),i.update(),s=r.NONE},this.update=function(){const T=new X,Q=new Yr().setFromUnitVectors(e.up,new X(0,1,0)),ue=Q.clone().invert(),Ae=new X,Ne=new Yr,St=new X,_t=2*Math.PI;return function(xn=null){const Nt=i.object.position;T.copy(Nt).sub(i.target),T.applyQuaternion(Q),u.setFromVector3(T),i.autoRotate&&s===r.NONE&&V(w(xn)),i.enableDamping?(u.theta+=c.theta*i.dampingFactor,u.phi+=c.phi*i.dampingFactor):(u.theta+=c.theta,u.phi+=c.phi);let cn=i.minAzimuthAngle,fn=i.maxAzimuthAngle;isFinite(cn)&&isFinite(fn)&&(cn<-Math.PI?cn+=_t:cn>Math.PI&&(cn-=_t),fn<-Math.PI?fn+=_t:fn>Math.PI&&(fn-=_t),cn<=fn?u.theta=Math.max(cn,Math.min(fn,u.theta)):u.theta=u.theta>(cn+fn)/2?Math.max(cn,u.theta):Math.min(fn,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Jn=!1;if(i.zoomToCursor&&O||i.object.isOrthographicCamera)u.radius=Y(u.radius);else{const Gn=u.radius;u.radius=Y(u.radius*f),Jn=Gn!=u.radius}if(T.setFromSpherical(u),T.applyQuaternion(ue),Nt.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&O){let Gn=null;if(i.object.isPerspectiveCamera){const Lr=T.length();Gn=Y(Lr*f);const Ir=Lr-Gn;i.object.position.addScaledVector(C,Ir),i.object.updateMatrixWorld(),Jn=!!Ir}else if(i.object.isOrthographicCamera){const Lr=new X(U.x,U.y,0);Lr.unproject(i.object);const Ir=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),i.object.updateProjectionMatrix(),Jn=Ir!==i.object.zoom;const Zr=new X(U.x,U.y,0);Zr.unproject(i.object),i.object.position.sub(Zr).add(Lr),i.object.updateMatrixWorld(),Gn=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Gn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Gn).add(i.object.position):(Hd.origin.copy(i.object.position),Hd.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Hd.direction))<A6?e.lookAt(i.target):($E.setFromNormalAndCoplanarPoint(i.object.up,i.target),Hd.intersectPlane($E,i.target))))}else if(i.object.isOrthographicCamera){const Gn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/f)),Gn!==i.object.zoom&&(i.object.updateProjectionMatrix(),Jn=!0)}return f=1,O=!1,Jn||Ae.distanceToSquared(i.object.position)>o||8*(1-Ne.dot(i.object.quaternion))>o||St.distanceToSquared(i.target)>o?(i.dispatchEvent(jE),Ae.copy(i.object.position),Ne.copy(i.object.quaternion),St.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Be),i.domElement.removeEventListener("pointerdown",re),i.domElement.removeEventListener("pointercancel",pe),i.domElement.removeEventListener("wheel",Ee),i.domElement.removeEventListener("pointermove",ce),i.domElement.removeEventListener("pointerup",pe),i.domElement.getRootNode().removeEventListener("keydown",Ze,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,u=new hE,c=new hE;let f=1;const h=new X,p=new He,m=new He,v=new He,S=new He,E=new He,_=new He,g=new He,M=new He,x=new He,C=new X,U=new He;let O=!1;const I=[],z={};let A=!1;function w(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function N(T){const Q=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*Q)}function V(T){c.theta-=T}function k(T){c.phi-=T}const ae=function(){const T=new X;return function(ue,Ae){T.setFromMatrixColumn(Ae,0),T.multiplyScalar(-ue),h.add(T)}}(),Z=function(){const T=new X;return function(ue,Ae){i.screenSpacePanning===!0?T.setFromMatrixColumn(Ae,1):(T.setFromMatrixColumn(Ae,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(ue),h.add(T)}}(),me=function(){const T=new X;return function(ue,Ae){const Ne=i.domElement;if(i.object.isPerspectiveCamera){const St=i.object.position;T.copy(St).sub(i.target);let _t=T.length();_t*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*ue*_t/Ne.clientHeight,i.object.matrix),Z(2*Ae*_t/Ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(ue*(i.object.right-i.object.left)/i.object.zoom/Ne.clientWidth,i.object.matrix),Z(Ae*(i.object.top-i.object.bottom)/i.object.zoom/Ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ge(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?f/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?f*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(T,Q){if(!i.zoomToCursor)return;O=!0;const ue=i.domElement.getBoundingClientRect(),Ae=T-ue.left,Ne=Q-ue.top,St=ue.width,_t=ue.height;U.x=Ae/St*2-1,U.y=-(Ne/_t)*2+1,C.set(U.x,U.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function Me(T){p.set(T.clientX,T.clientY)}function ze(T){K(T.clientX,T.clientX),g.set(T.clientX,T.clientY)}function gt(T){S.set(T.clientX,T.clientY)}function se(T){m.set(T.clientX,T.clientY),v.subVectors(m,p).multiplyScalar(i.rotateSpeed);const Q=i.domElement;V(2*Math.PI*v.x/Q.clientHeight),k(2*Math.PI*v.y/Q.clientHeight),p.copy(m),i.update()}function xe(T){M.set(T.clientX,T.clientY),x.subVectors(M,g),x.y>0?ge(N(x.y)):x.y<0&&W(N(x.y)),g.copy(M),i.update()}function Ce(T){E.set(T.clientX,T.clientY),_.subVectors(E,S).multiplyScalar(i.panSpeed),me(_.x,_.y),S.copy(E),i.update()}function fe(T){K(T.clientX,T.clientY),T.deltaY<0?W(N(T.deltaY)):T.deltaY>0&&ge(N(T.deltaY)),i.update()}function $e(T){let Q=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,i.keyPanSpeed),Q=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(0,-i.keyPanSpeed),Q=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(i.keyPanSpeed,0),Q=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):me(-i.keyPanSpeed,0),Q=!0;break}Q&&(T.preventDefault(),i.update())}function le(T){if(I.length===1)p.set(T.pageX,T.pageY);else{const Q=Ct(T),ue=.5*(T.pageX+Q.x),Ae=.5*(T.pageY+Q.y);p.set(ue,Ae)}}function we(T){if(I.length===1)S.set(T.pageX,T.pageY);else{const Q=Ct(T),ue=.5*(T.pageX+Q.x),Ae=.5*(T.pageY+Q.y);S.set(ue,Ae)}}function H(T){const Q=Ct(T),ue=T.pageX-Q.x,Ae=T.pageY-Q.y,Ne=Math.sqrt(ue*ue+Ae*Ae);g.set(0,Ne)}function ne(T){i.enableZoom&&H(T),i.enablePan&&we(T)}function ye(T){i.enableZoom&&H(T),i.enableRotate&&le(T)}function Pt(T){if(I.length==1)m.set(T.pageX,T.pageY);else{const ue=Ct(T),Ae=.5*(T.pageX+ue.x),Ne=.5*(T.pageY+ue.y);m.set(Ae,Ne)}v.subVectors(m,p).multiplyScalar(i.rotateSpeed);const Q=i.domElement;V(2*Math.PI*v.x/Q.clientHeight),k(2*Math.PI*v.y/Q.clientHeight),p.copy(m)}function Ke(T){if(I.length===1)E.set(T.pageX,T.pageY);else{const Q=Ct(T),ue=.5*(T.pageX+Q.x),Ae=.5*(T.pageY+Q.y);E.set(ue,Ae)}_.subVectors(E,S).multiplyScalar(i.panSpeed),me(_.x,_.y),S.copy(E)}function It(T){const Q=Ct(T),ue=T.pageX-Q.x,Ae=T.pageY-Q.y,Ne=Math.sqrt(ue*ue+Ae*Ae);M.set(0,Ne),x.set(0,Math.pow(M.y/g.y,i.zoomSpeed)),ge(x.y),g.copy(M);const St=(T.pageX+Q.x)*.5,_t=(T.pageY+Q.y)*.5;K(St,_t)}function F(T){i.enableZoom&&It(T),i.enablePan&&Ke(T)}function R(T){i.enableZoom&&It(T),i.enableRotate&&Pt(T)}function re(T){i.enabled!==!1&&(I.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",ce),i.domElement.addEventListener("pointerup",pe)),!At(T)&&(dt(T),T.pointerType==="touch"?nt(T):_e(T)))}function ce(T){i.enabled!==!1&&(T.pointerType==="touch"?Fe(T):Ye(T))}function pe(T){switch(vt(T),I.length){case 0:i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",ce),i.domElement.removeEventListener("pointerup",pe),i.dispatchEvent(YE),s=r.NONE;break;case 1:const Q=I[0],ue=z[Q];nt({pointerId:Q,pageX:ue.x,pageY:ue.y});break}}function _e(T){let Q;switch(T.button){case 0:Q=i.mouseButtons.LEFT;break;case 1:Q=i.mouseButtons.MIDDLE;break;case 2:Q=i.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case zo.DOLLY:if(i.enableZoom===!1)return;ze(T),s=r.DOLLY;break;case zo.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;gt(T),s=r.PAN}else{if(i.enableRotate===!1)return;Me(T),s=r.ROTATE}break;case zo.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;Me(T),s=r.ROTATE}else{if(i.enablePan===!1)return;gt(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Yg)}function Ye(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;se(T);break;case r.DOLLY:if(i.enableZoom===!1)return;xe(T);break;case r.PAN:if(i.enablePan===!1)return;Ce(T);break}}function Ee(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Yg),fe(Ve(T)),i.dispatchEvent(YE))}function Ve(T){const Q=T.deltaMode,ue={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(Q){case 1:ue.deltaY*=16;break;case 2:ue.deltaY*=100;break}return T.ctrlKey&&!A&&(ue.deltaY*=10),ue}function Ze(T){T.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",Te,{passive:!0,capture:!0}))}function Te(T){T.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",Te,{passive:!0,capture:!0}))}function Le(T){i.enabled===!1||i.enablePan===!1||$e(T)}function nt(T){switch(xt(T),I.length){case 1:switch(i.touches.ONE){case Ho.ROTATE:if(i.enableRotate===!1)return;le(T),s=r.TOUCH_ROTATE;break;case Ho.PAN:if(i.enablePan===!1)return;we(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ho.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ne(T),s=r.TOUCH_DOLLY_PAN;break;case Ho.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Yg)}function Fe(T){switch(xt(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pt(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ke(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R(T),i.update();break;default:s=r.NONE}}function Be(T){i.enabled!==!1&&T.preventDefault()}function dt(T){I.push(T.pointerId)}function vt(T){delete z[T.pointerId];for(let Q=0;Q<I.length;Q++)if(I[Q]==T.pointerId){I.splice(Q,1);return}}function At(T){for(let Q=0;Q<I.length;Q++)if(I[Q]==T.pointerId)return!0;return!1}function xt(T){let Q=z[T.pointerId];Q===void 0&&(Q=new He,z[T.pointerId]=Q),Q.set(T.pageX,T.pageY)}function Ct(T){const Q=T.pointerId===I[0]?I[1]:I[0];return z[Q]}i.domElement.addEventListener("contextmenu",Be),i.domElement.addEventListener("pointerdown",re),i.domElement.addEventListener("pointercancel",pe),i.domElement.addEventListener("wheel",Ee,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ze,{passive:!0,capture:!0}),this.update()}}function R6({camera:n,setCamera:e}){const[t,i]=be.useState(n?n.position.y:60);be.useEffect(()=>{n&&i(n.position.y)},[n]);const r=u=>{const c=parseFloat(u.target.value);i(c),n&&(n.position.y=c,n.updateProjectionMatrix(),e({...n}))},s=()=>{const u=Math.max(1,t-1);i(u),n&&(n.position.y=u,n.updateProjectionMatrix(),e({...n}))},o=()=>{const u=Math.min(50,t+1);i(u),n&&(n.position.y=u,n.updateProjectionMatrix(),e({...n}))};return De.jsxs("div",{className:"slider-container",children:[De.jsx(to,{className:"btn-control",onClick:s,children:De.jsx(Mr,{icon:T6})}),De.jsx("input",{type:"range",min:"1",max:"50",step:"0.1",value:t,onChange:r,className:"slider"}),De.jsx(to,{className:"btn-control",onClick:o,children:De.jsx(Mr,{icon:M6})})]})}const XA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const P6=new cp(-1,1,1,-1,0,1);class L6 extends or{constructor(){super(),this.setAttribute("position",new Rr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rr([0,2,0,0,2,0],2))}}const I6=new L6;class jA{constructor(e){this._mesh=new Mi(I6,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,P6)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class N6 extends Zc{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ci?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=S_.clone(e.uniforms),this.material=new ci({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jA(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qE extends Zc{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,u;this.inverse?(o=0,u=1):(o=1,u=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(u),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class D6 extends Zc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class O6{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new He);this._width=i.width,this._height=i.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new N6(XA),this.copyPass.material.blending=Ar,this.clock=new PH}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const u=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}qE!==void 0&&(o instanceof qE?i=!0:o instanceof D6&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class U6 extends Zc{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}class da extends Zc{constructor(e,t,i,r){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=r!==void 0?r:[],this.visibleEdgeColor=new tt(1,1,1),this.hiddenEdgeColor=new tt(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new li(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new iA,this.depthMaterial.side=nr,this.depthMaterial.depthPacking=Ub,this.depthMaterial.blending=Ar,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=nr,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new li(this.resolution.x,this.resolution.y,{type:xr}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new li(s,o,{type:xr}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new li(s,o,{type:xr}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new li(Math.round(s/2),Math.round(o/2),{type:xr}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new li(s,o,{type:xr}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new li(Math.round(s/2),Math.round(o/2),{type:xr}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const u=4,c=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(u),this.separableBlurMaterial1.uniforms.texSize.value.set(s,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(c),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=c,this.overlayMaterial=this.getOverlayMaterial();const f=XA;this.copyUniforms=S_.clone(f.uniforms),this.materialCopy=new ci({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Ar,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new tt,this.oldClearAlpha=1,this.fsQuad=new jA(null),this.tempPulseColor1=new tt,this.tempPulseColor2=new tt,this.textureMatrix=new ct;function h(p,m){const v=m.isPerspectiveCamera?"perspective":"orthographic";return p.replace(/DEPTH_TO_VIEW_Z/g,v+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,r),this.renderTargetBlurBuffer1.setSize(i,r),this.renderTargetEdgeBuffer1.setSize(i,r),this.separableBlurMaterial1.uniforms.texSize.value.set(i,r),i=Math.round(i/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(i,r),this.renderTargetEdgeBuffer2.setSize(i,r),this.separableBlurMaterial2.uniforms.texSize.value.set(i,r)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function i(r){r.isMesh&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}for(let r=0;r<this.selectedObjects.length;r++)this.selectedObjects[r].traverse(i)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=[];function r(o){o.isMesh&&i.push(o)}for(let o=0;o<this.selectedObjects.length;o++)this.selectedObjects[o].traverse(r);function s(o){if(o.isMesh||o.isSprite){let u=!1;for(let c=0;c<i.length;c++)if(i[c].id===o.id){u=!0;break}if(u===!1){const c=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,c)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,i,r,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const u=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=u,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=da.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=da.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=da.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=da.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new ci({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new He(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new ci({uniforms:{maskTexture:{value:null},texSize:{value:new He(.5,.5)},visibleEdgeColor:{value:new X(1,1,1)},hiddenEdgeColor:{value:new X(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new ci({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new ci({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Yv,depthTest:!1,depthWrite:!1,transparent:!0})}}da.BlurDirectionX=new He(1,0);da.BlurDirectionY=new He(0,1);var Hh={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Hh.exports;(function(n,e){(function(){var t,i="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",u="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",p=1,m=2,v=4,S=1,E=2,_=1,g=2,M=4,x=8,C=16,U=32,O=64,I=128,z=256,A=512,w=30,N="...",V=800,k=16,ae=1,Z=2,me=3,ge=1/0,W=9007199254740991,K=17976931348623157e292,Y=NaN,Me=4294967295,ze=Me-1,gt=Me>>>1,se=[["ary",I],["bind",_],["bindKey",g],["curry",x],["curryRight",C],["flip",A],["partial",U],["partialRight",O],["rearg",z]],xe="[object Arguments]",Ce="[object Array]",fe="[object AsyncFunction]",$e="[object Boolean]",le="[object Date]",we="[object DOMException]",H="[object Error]",ne="[object Function]",ye="[object GeneratorFunction]",Pt="[object Map]",Ke="[object Number]",It="[object Null]",F="[object Object]",R="[object Promise]",re="[object Proxy]",ce="[object RegExp]",pe="[object Set]",_e="[object String]",Ye="[object Symbol]",Ee="[object Undefined]",Ve="[object WeakMap]",Ze="[object WeakSet]",Te="[object ArrayBuffer]",Le="[object DataView]",nt="[object Float32Array]",Fe="[object Float64Array]",Be="[object Int8Array]",dt="[object Int16Array]",vt="[object Int32Array]",At="[object Uint8Array]",xt="[object Uint8ClampedArray]",Ct="[object Uint16Array]",Xe="[object Uint32Array]",T=/\b__p \+= '';/g,Q=/\b(__p \+=) '' \+/g,ue=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ae=/&(?:amp|lt|gt|quot|#39);/g,Ne=/[&<>"']/g,St=RegExp(Ae.source),_t=RegExp(Ne.source),Gt=/<%-([\s\S]+?)%>/g,xn=/<%([\s\S]+?)%>/g,Nt=/<%=([\s\S]+?)%>/g,cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fn=/^\w*$/,Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gn=/[\\^$.*+?()[\]{}|]/g,Lr=RegExp(Gn.source),Ir=/^\s+/,Zr=/\s/,Qc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,wo=/\{\n\/\* \[wrapped with (.+)\] \*/,Jc=/,? & /,ef=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_p=/[()=,{}\[\]\/\s]/,yp=/\\(\\)?/g,xp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,D=/\w*$/,q=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,ie=/^\[object .+?Constructor\]$/,J=/^0o[0-7]+$/i,Ie=/^(?:0|[1-9]\d*)$/,je=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,qe=/($^)/,it=/['\n\r\u2028\u2029\\]/g,rt="\\ud800-\\udfff",st="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",Wn=st+ot+rn,gn="\\u2700-\\u27bf",Gi="a-z\\xdf-\\xf6\\xf8-\\xff",Yt="\\xac\\xb1\\xd7\\xf7",ut="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",lu="\\u2000-\\u206f",Wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nr="A-Z\\xc0-\\xd6\\xd8-\\xde",uu="\\ufe0e\\ufe0f",Ns=Yt+ut+lu+Wt,Na="['’]",Pn="["+rt+"]",lr="["+Ns+"]",Ds="["+Wn+"]",ei="\\d+",cu="["+gn+"]",tf="["+Gi+"]",fu="[^"+rt+Ns+ei+gn+Gi+Nr+"]",Sp="\\ud83c[\\udffb-\\udfff]",YA="(?:"+Ds+"|"+Sp+")",W_="[^"+rt+"]",Mp="(?:\\ud83c[\\udde6-\\uddff]){2}",Ep="[\\ud800-\\udbff][\\udc00-\\udfff]",To="["+Nr+"]",X_="\\u200d",j_="(?:"+tf+"|"+fu+")",$A="(?:"+To+"|"+fu+")",Y_="(?:"+Na+"(?:d|ll|m|re|s|t|ve))?",$_="(?:"+Na+"(?:D|LL|M|RE|S|T|VE))?",q_=YA+"?",K_="["+uu+"]?",qA="(?:"+X_+"(?:"+[W_,Mp,Ep].join("|")+")"+K_+q_+")*",KA="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ZA="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Z_=K_+q_+qA,QA="(?:"+[cu,Mp,Ep].join("|")+")"+Z_,JA="(?:"+[W_+Ds+"?",Ds,Mp,Ep,Pn].join("|")+")",eC=RegExp(Na,"g"),tC=RegExp(Ds,"g"),wp=RegExp(Sp+"(?="+Sp+")|"+JA+Z_,"g"),nC=RegExp([To+"?"+tf+"+"+Y_+"(?="+[lr,To,"$"].join("|")+")",$A+"+"+$_+"(?="+[lr,To+j_,"$"].join("|")+")",To+"?"+j_+"+"+Y_,To+"+"+$_,ZA,KA,ei,QA].join("|"),"g"),iC=RegExp("["+X_+rt+Wn+uu+"]"),rC=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,sC=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],aC=-1,$t={};$t[nt]=$t[Fe]=$t[Be]=$t[dt]=$t[vt]=$t[At]=$t[xt]=$t[Ct]=$t[Xe]=!0,$t[xe]=$t[Ce]=$t[Te]=$t[$e]=$t[Le]=$t[le]=$t[H]=$t[ne]=$t[Pt]=$t[Ke]=$t[F]=$t[ce]=$t[pe]=$t[_e]=$t[Ve]=!1;var Xt={};Xt[xe]=Xt[Ce]=Xt[Te]=Xt[Le]=Xt[$e]=Xt[le]=Xt[nt]=Xt[Fe]=Xt[Be]=Xt[dt]=Xt[vt]=Xt[Pt]=Xt[Ke]=Xt[F]=Xt[ce]=Xt[pe]=Xt[_e]=Xt[Ye]=Xt[At]=Xt[xt]=Xt[Ct]=Xt[Xe]=!0,Xt[H]=Xt[ne]=Xt[Ve]=!1;var oC={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},lC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},uC={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},cC={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},fC=parseFloat,dC=parseInt,Q_=typeof Au=="object"&&Au&&Au.Object===Object&&Au,hC=typeof self=="object"&&self&&self.Object===Object&&self,Un=Q_||hC||Function("return this")(),Tp=e&&!e.nodeType&&e,Da=Tp&&!0&&n&&!n.nodeType&&n,J_=Da&&Da.exports===Tp,bp=J_&&Q_.process,Wi=function(){try{var j=Da&&Da.require&&Da.require("util").types;return j||bp&&bp.binding&&bp.binding("util")}catch{}}(),ey=Wi&&Wi.isArrayBuffer,ty=Wi&&Wi.isDate,ny=Wi&&Wi.isMap,iy=Wi&&Wi.isRegExp,ry=Wi&&Wi.isSet,sy=Wi&&Wi.isTypedArray;function Ai(j,oe,ee){switch(ee.length){case 0:return j.call(oe);case 1:return j.call(oe,ee[0]);case 2:return j.call(oe,ee[0],ee[1]);case 3:return j.call(oe,ee[0],ee[1],ee[2])}return j.apply(oe,ee)}function pC(j,oe,ee,Oe){for(var at=-1,Dt=j==null?0:j.length;++at<Dt;){var En=j[at];oe(Oe,En,ee(En),j)}return Oe}function Xi(j,oe){for(var ee=-1,Oe=j==null?0:j.length;++ee<Oe&&oe(j[ee],ee,j)!==!1;);return j}function mC(j,oe){for(var ee=j==null?0:j.length;ee--&&oe(j[ee],ee,j)!==!1;);return j}function ay(j,oe){for(var ee=-1,Oe=j==null?0:j.length;++ee<Oe;)if(!oe(j[ee],ee,j))return!1;return!0}function Os(j,oe){for(var ee=-1,Oe=j==null?0:j.length,at=0,Dt=[];++ee<Oe;){var En=j[ee];oe(En,ee,j)&&(Dt[at++]=En)}return Dt}function nf(j,oe){var ee=j==null?0:j.length;return!!ee&&bo(j,oe,0)>-1}function Ap(j,oe,ee){for(var Oe=-1,at=j==null?0:j.length;++Oe<at;)if(ee(oe,j[Oe]))return!0;return!1}function tn(j,oe){for(var ee=-1,Oe=j==null?0:j.length,at=Array(Oe);++ee<Oe;)at[ee]=oe(j[ee],ee,j);return at}function Us(j,oe){for(var ee=-1,Oe=oe.length,at=j.length;++ee<Oe;)j[at+ee]=oe[ee];return j}function Cp(j,oe,ee,Oe){var at=-1,Dt=j==null?0:j.length;for(Oe&&Dt&&(ee=j[++at]);++at<Dt;)ee=oe(ee,j[at],at,j);return ee}function gC(j,oe,ee,Oe){var at=j==null?0:j.length;for(Oe&&at&&(ee=j[--at]);at--;)ee=oe(ee,j[at],at,j);return ee}function Rp(j,oe){for(var ee=-1,Oe=j==null?0:j.length;++ee<Oe;)if(oe(j[ee],ee,j))return!0;return!1}var vC=Pp("length");function _C(j){return j.split("")}function yC(j){return j.match(ef)||[]}function oy(j,oe,ee){var Oe;return ee(j,function(at,Dt,En){if(oe(at,Dt,En))return Oe=Dt,!1}),Oe}function rf(j,oe,ee,Oe){for(var at=j.length,Dt=ee+(Oe?1:-1);Oe?Dt--:++Dt<at;)if(oe(j[Dt],Dt,j))return Dt;return-1}function bo(j,oe,ee){return oe===oe?LC(j,oe,ee):rf(j,ly,ee)}function xC(j,oe,ee,Oe){for(var at=ee-1,Dt=j.length;++at<Dt;)if(Oe(j[at],oe))return at;return-1}function ly(j){return j!==j}function uy(j,oe){var ee=j==null?0:j.length;return ee?Ip(j,oe)/ee:Y}function Pp(j){return function(oe){return oe==null?t:oe[j]}}function Lp(j){return function(oe){return j==null?t:j[oe]}}function cy(j,oe,ee,Oe,at){return at(j,function(Dt,En,Ht){ee=Oe?(Oe=!1,Dt):oe(ee,Dt,En,Ht)}),ee}function SC(j,oe){var ee=j.length;for(j.sort(oe);ee--;)j[ee]=j[ee].value;return j}function Ip(j,oe){for(var ee,Oe=-1,at=j.length;++Oe<at;){var Dt=oe(j[Oe]);Dt!==t&&(ee=ee===t?Dt:ee+Dt)}return ee}function Np(j,oe){for(var ee=-1,Oe=Array(j);++ee<j;)Oe[ee]=oe(ee);return Oe}function MC(j,oe){return tn(oe,function(ee){return[ee,j[ee]]})}function fy(j){return j&&j.slice(0,my(j)+1).replace(Ir,"")}function Ci(j){return function(oe){return j(oe)}}function Dp(j,oe){return tn(oe,function(ee){return j[ee]})}function du(j,oe){return j.has(oe)}function dy(j,oe){for(var ee=-1,Oe=j.length;++ee<Oe&&bo(oe,j[ee],0)>-1;);return ee}function hy(j,oe){for(var ee=j.length;ee--&&bo(oe,j[ee],0)>-1;);return ee}function EC(j,oe){for(var ee=j.length,Oe=0;ee--;)j[ee]===oe&&++Oe;return Oe}var wC=Lp(oC),TC=Lp(lC);function bC(j){return"\\"+cC[j]}function AC(j,oe){return j==null?t:j[oe]}function Ao(j){return iC.test(j)}function CC(j){return rC.test(j)}function RC(j){for(var oe,ee=[];!(oe=j.next()).done;)ee.push(oe.value);return ee}function Op(j){var oe=-1,ee=Array(j.size);return j.forEach(function(Oe,at){ee[++oe]=[at,Oe]}),ee}function py(j,oe){return function(ee){return j(oe(ee))}}function ks(j,oe){for(var ee=-1,Oe=j.length,at=0,Dt=[];++ee<Oe;){var En=j[ee];(En===oe||En===h)&&(j[ee]=h,Dt[at++]=ee)}return Dt}function sf(j){var oe=-1,ee=Array(j.size);return j.forEach(function(Oe){ee[++oe]=Oe}),ee}function PC(j){var oe=-1,ee=Array(j.size);return j.forEach(function(Oe){ee[++oe]=[Oe,Oe]}),ee}function LC(j,oe,ee){for(var Oe=ee-1,at=j.length;++Oe<at;)if(j[Oe]===oe)return Oe;return-1}function IC(j,oe,ee){for(var Oe=ee+1;Oe--;)if(j[Oe]===oe)return Oe;return Oe}function Co(j){return Ao(j)?DC(j):vC(j)}function ur(j){return Ao(j)?OC(j):_C(j)}function my(j){for(var oe=j.length;oe--&&Zr.test(j.charAt(oe)););return oe}var NC=Lp(uC);function DC(j){for(var oe=wp.lastIndex=0;wp.test(j);)++oe;return oe}function OC(j){return j.match(wp)||[]}function UC(j){return j.match(nC)||[]}var kC=function j(oe){oe=oe==null?Un:Ro.defaults(Un.Object(),oe,Ro.pick(Un,sC));var ee=oe.Array,Oe=oe.Date,at=oe.Error,Dt=oe.Function,En=oe.Math,Ht=oe.Object,Up=oe.RegExp,FC=oe.String,ji=oe.TypeError,af=ee.prototype,BC=Dt.prototype,Po=Ht.prototype,of=oe["__core-js_shared__"],lf=BC.toString,kt=Po.hasOwnProperty,zC=0,gy=function(){var a=/[^.]+$/.exec(of&&of.keys&&of.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),uf=Po.toString,HC=lf.call(Ht),VC=Un._,GC=Up("^"+lf.call(kt).replace(Gn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),cf=J_?oe.Buffer:t,Fs=oe.Symbol,ff=oe.Uint8Array,vy=cf?cf.allocUnsafe:t,df=py(Ht.getPrototypeOf,Ht),_y=Ht.create,yy=Po.propertyIsEnumerable,hf=af.splice,xy=Fs?Fs.isConcatSpreadable:t,hu=Fs?Fs.iterator:t,Oa=Fs?Fs.toStringTag:t,pf=function(){try{var a=za(Ht,"defineProperty");return a({},"",{}),a}catch{}}(),WC=oe.clearTimeout!==Un.clearTimeout&&oe.clearTimeout,XC=Oe&&Oe.now!==Un.Date.now&&Oe.now,jC=oe.setTimeout!==Un.setTimeout&&oe.setTimeout,mf=En.ceil,gf=En.floor,kp=Ht.getOwnPropertySymbols,YC=cf?cf.isBuffer:t,Sy=oe.isFinite,$C=af.join,qC=py(Ht.keys,Ht),wn=En.max,Xn=En.min,KC=Oe.now,ZC=oe.parseInt,My=En.random,QC=af.reverse,Fp=za(oe,"DataView"),pu=za(oe,"Map"),Bp=za(oe,"Promise"),Lo=za(oe,"Set"),mu=za(oe,"WeakMap"),gu=za(Ht,"create"),vf=mu&&new mu,Io={},JC=Ha(Fp),eR=Ha(pu),tR=Ha(Bp),nR=Ha(Lo),iR=Ha(mu),_f=Fs?Fs.prototype:t,vu=_f?_f.valueOf:t,Ey=_f?_f.toString:t;function P(a){if(dn(a)&&!lt(a)&&!(a instanceof wt)){if(a instanceof Yi)return a;if(kt.call(a,"__wrapped__"))return wx(a)}return new Yi(a)}var No=function(){function a(){}return function(l){if(!sn(l))return{};if(_y)return _y(l);a.prototype=l;var d=new a;return a.prototype=t,d}}();function yf(){}function Yi(a,l){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=t}P.templateSettings={escape:Gt,evaluate:xn,interpolate:Nt,variable:"",imports:{_:P}},P.prototype=yf.prototype,P.prototype.constructor=P,Yi.prototype=No(yf.prototype),Yi.prototype.constructor=Yi;function wt(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Me,this.__views__=[]}function rR(){var a=new wt(this.__wrapped__);return a.__actions__=gi(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=gi(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=gi(this.__views__),a}function sR(){if(this.__filtered__){var a=new wt(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function aR(){var a=this.__wrapped__.value(),l=this.__dir__,d=lt(a),y=l<0,b=d?a.length:0,L=_2(0,b,this.__views__),B=L.start,G=L.end,$=G-B,de=y?G:B-1,he=this.__iteratees__,ve=he.length,Re=0,Ge=Xn($,this.__takeCount__);if(!d||!y&&b==$&&Ge==$)return Yy(a,this.__actions__);var Je=[];e:for(;$--&&Re<Ge;){de+=l;for(var ht=-1,et=a[de];++ht<ve;){var Mt=he[ht],Rt=Mt.iteratee,Li=Mt.type,ii=Rt(et);if(Li==Z)et=ii;else if(!ii){if(Li==ae)continue e;break e}}Je[Re++]=et}return Je}wt.prototype=No(yf.prototype),wt.prototype.constructor=wt;function Ua(a){var l=-1,d=a==null?0:a.length;for(this.clear();++l<d;){var y=a[l];this.set(y[0],y[1])}}function oR(){this.__data__=gu?gu(null):{},this.size=0}function lR(a){var l=this.has(a)&&delete this.__data__[a];return this.size-=l?1:0,l}function uR(a){var l=this.__data__;if(gu){var d=l[a];return d===c?t:d}return kt.call(l,a)?l[a]:t}function cR(a){var l=this.__data__;return gu?l[a]!==t:kt.call(l,a)}function fR(a,l){var d=this.__data__;return this.size+=this.has(a)?0:1,d[a]=gu&&l===t?c:l,this}Ua.prototype.clear=oR,Ua.prototype.delete=lR,Ua.prototype.get=uR,Ua.prototype.has=cR,Ua.prototype.set=fR;function Qr(a){var l=-1,d=a==null?0:a.length;for(this.clear();++l<d;){var y=a[l];this.set(y[0],y[1])}}function dR(){this.__data__=[],this.size=0}function hR(a){var l=this.__data__,d=xf(l,a);if(d<0)return!1;var y=l.length-1;return d==y?l.pop():hf.call(l,d,1),--this.size,!0}function pR(a){var l=this.__data__,d=xf(l,a);return d<0?t:l[d][1]}function mR(a){return xf(this.__data__,a)>-1}function gR(a,l){var d=this.__data__,y=xf(d,a);return y<0?(++this.size,d.push([a,l])):d[y][1]=l,this}Qr.prototype.clear=dR,Qr.prototype.delete=hR,Qr.prototype.get=pR,Qr.prototype.has=mR,Qr.prototype.set=gR;function Jr(a){var l=-1,d=a==null?0:a.length;for(this.clear();++l<d;){var y=a[l];this.set(y[0],y[1])}}function vR(){this.size=0,this.__data__={hash:new Ua,map:new(pu||Qr),string:new Ua}}function _R(a){var l=If(this,a).delete(a);return this.size-=l?1:0,l}function yR(a){return If(this,a).get(a)}function xR(a){return If(this,a).has(a)}function SR(a,l){var d=If(this,a),y=d.size;return d.set(a,l),this.size+=d.size==y?0:1,this}Jr.prototype.clear=vR,Jr.prototype.delete=_R,Jr.prototype.get=yR,Jr.prototype.has=xR,Jr.prototype.set=SR;function ka(a){var l=-1,d=a==null?0:a.length;for(this.__data__=new Jr;++l<d;)this.add(a[l])}function MR(a){return this.__data__.set(a,c),this}function ER(a){return this.__data__.has(a)}ka.prototype.add=ka.prototype.push=MR,ka.prototype.has=ER;function cr(a){var l=this.__data__=new Qr(a);this.size=l.size}function wR(){this.__data__=new Qr,this.size=0}function TR(a){var l=this.__data__,d=l.delete(a);return this.size=l.size,d}function bR(a){return this.__data__.get(a)}function AR(a){return this.__data__.has(a)}function CR(a,l){var d=this.__data__;if(d instanceof Qr){var y=d.__data__;if(!pu||y.length<r-1)return y.push([a,l]),this.size=++d.size,this;d=this.__data__=new Jr(y)}return d.set(a,l),this.size=d.size,this}cr.prototype.clear=wR,cr.prototype.delete=TR,cr.prototype.get=bR,cr.prototype.has=AR,cr.prototype.set=CR;function wy(a,l){var d=lt(a),y=!d&&Va(a),b=!d&&!y&&Gs(a),L=!d&&!y&&!b&&ko(a),B=d||y||b||L,G=B?Np(a.length,FC):[],$=G.length;for(var de in a)(l||kt.call(a,de))&&!(B&&(de=="length"||b&&(de=="offset"||de=="parent")||L&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||is(de,$)))&&G.push(de);return G}function Ty(a){var l=a.length;return l?a[Kp(0,l-1)]:t}function RR(a,l){return Nf(gi(a),Fa(l,0,a.length))}function PR(a){return Nf(gi(a))}function zp(a,l,d){(d!==t&&!fr(a[l],d)||d===t&&!(l in a))&&es(a,l,d)}function _u(a,l,d){var y=a[l];(!(kt.call(a,l)&&fr(y,d))||d===t&&!(l in a))&&es(a,l,d)}function xf(a,l){for(var d=a.length;d--;)if(fr(a[d][0],l))return d;return-1}function LR(a,l,d,y){return Bs(a,function(b,L,B){l(y,b,d(b),B)}),y}function by(a,l){return a&&Or(l,Ln(l),a)}function IR(a,l){return a&&Or(l,_i(l),a)}function es(a,l,d){l=="__proto__"&&pf?pf(a,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):a[l]=d}function Hp(a,l){for(var d=-1,y=l.length,b=ee(y),L=a==null;++d<y;)b[d]=L?t:Sm(a,l[d]);return b}function Fa(a,l,d){return a===a&&(d!==t&&(a=a<=d?a:d),l!==t&&(a=a>=l?a:l)),a}function $i(a,l,d,y,b,L){var B,G=l&p,$=l&m,de=l&v;if(d&&(B=b?d(a,y,b,L):d(a)),B!==t)return B;if(!sn(a))return a;var he=lt(a);if(he){if(B=x2(a),!G)return gi(a,B)}else{var ve=jn(a),Re=ve==ne||ve==ye;if(Gs(a))return Ky(a,G);if(ve==F||ve==xe||Re&&!b){if(B=$||Re?{}:mx(a),!G)return $?u2(a,IR(B,a)):l2(a,by(B,a))}else{if(!Xt[ve])return b?a:{};B=S2(a,ve,G)}}L||(L=new cr);var Ge=L.get(a);if(Ge)return Ge;L.set(a,B),Wx(a)?a.forEach(function(et){B.add($i(et,l,d,et,a,L))}):Vx(a)&&a.forEach(function(et,Mt){B.set(Mt,$i(et,l,d,Mt,a,L))});var Je=de?$?om:am:$?_i:Ln,ht=he?t:Je(a);return Xi(ht||a,function(et,Mt){ht&&(Mt=et,et=a[Mt]),_u(B,Mt,$i(et,l,d,Mt,a,L))}),B}function NR(a){var l=Ln(a);return function(d){return Ay(d,a,l)}}function Ay(a,l,d){var y=d.length;if(a==null)return!y;for(a=Ht(a);y--;){var b=d[y],L=l[b],B=a[b];if(B===t&&!(b in a)||!L(B))return!1}return!0}function Cy(a,l,d){if(typeof a!="function")throw new ji(o);return Tu(function(){a.apply(t,d)},l)}function yu(a,l,d,y){var b=-1,L=nf,B=!0,G=a.length,$=[],de=l.length;if(!G)return $;d&&(l=tn(l,Ci(d))),y?(L=Ap,B=!1):l.length>=r&&(L=du,B=!1,l=new ka(l));e:for(;++b<G;){var he=a[b],ve=d==null?he:d(he);if(he=y||he!==0?he:0,B&&ve===ve){for(var Re=de;Re--;)if(l[Re]===ve)continue e;$.push(he)}else L(l,ve,y)||$.push(he)}return $}var Bs=tx(Dr),Ry=tx(Gp,!0);function DR(a,l){var d=!0;return Bs(a,function(y,b,L){return d=!!l(y,b,L),d}),d}function Sf(a,l,d){for(var y=-1,b=a.length;++y<b;){var L=a[y],B=l(L);if(B!=null&&(G===t?B===B&&!Pi(B):d(B,G)))var G=B,$=L}return $}function OR(a,l,d,y){var b=a.length;for(d=ft(d),d<0&&(d=-d>b?0:b+d),y=y===t||y>b?b:ft(y),y<0&&(y+=b),y=d>y?0:jx(y);d<y;)a[d++]=l;return a}function Py(a,l){var d=[];return Bs(a,function(y,b,L){l(y,b,L)&&d.push(y)}),d}function kn(a,l,d,y,b){var L=-1,B=a.length;for(d||(d=E2),b||(b=[]);++L<B;){var G=a[L];l>0&&d(G)?l>1?kn(G,l-1,d,y,b):Us(b,G):y||(b[b.length]=G)}return b}var Vp=nx(),Ly=nx(!0);function Dr(a,l){return a&&Vp(a,l,Ln)}function Gp(a,l){return a&&Ly(a,l,Ln)}function Mf(a,l){return Os(l,function(d){return rs(a[d])})}function Ba(a,l){l=Hs(l,a);for(var d=0,y=l.length;a!=null&&d<y;)a=a[Ur(l[d++])];return d&&d==y?a:t}function Iy(a,l,d){var y=l(a);return lt(a)?y:Us(y,d(a))}function ti(a){return a==null?a===t?Ee:It:Oa&&Oa in Ht(a)?v2(a):P2(a)}function Wp(a,l){return a>l}function UR(a,l){return a!=null&&kt.call(a,l)}function kR(a,l){return a!=null&&l in Ht(a)}function FR(a,l,d){return a>=Xn(l,d)&&a<wn(l,d)}function Xp(a,l,d){for(var y=d?Ap:nf,b=a[0].length,L=a.length,B=L,G=ee(L),$=1/0,de=[];B--;){var he=a[B];B&&l&&(he=tn(he,Ci(l))),$=Xn(he.length,$),G[B]=!d&&(l||b>=120&&he.length>=120)?new ka(B&&he):t}he=a[0];var ve=-1,Re=G[0];e:for(;++ve<b&&de.length<$;){var Ge=he[ve],Je=l?l(Ge):Ge;if(Ge=d||Ge!==0?Ge:0,!(Re?du(Re,Je):y(de,Je,d))){for(B=L;--B;){var ht=G[B];if(!(ht?du(ht,Je):y(a[B],Je,d)))continue e}Re&&Re.push(Je),de.push(Ge)}}return de}function BR(a,l,d,y){return Dr(a,function(b,L,B){l(y,d(b),L,B)}),y}function xu(a,l,d){l=Hs(l,a),a=yx(a,l);var y=a==null?a:a[Ur(Ki(l))];return y==null?t:Ai(y,a,d)}function Ny(a){return dn(a)&&ti(a)==xe}function zR(a){return dn(a)&&ti(a)==Te}function HR(a){return dn(a)&&ti(a)==le}function Su(a,l,d,y,b){return a===l?!0:a==null||l==null||!dn(a)&&!dn(l)?a!==a&&l!==l:VR(a,l,d,y,Su,b)}function VR(a,l,d,y,b,L){var B=lt(a),G=lt(l),$=B?Ce:jn(a),de=G?Ce:jn(l);$=$==xe?F:$,de=de==xe?F:de;var he=$==F,ve=de==F,Re=$==de;if(Re&&Gs(a)){if(!Gs(l))return!1;B=!0,he=!1}if(Re&&!he)return L||(L=new cr),B||ko(a)?dx(a,l,d,y,b,L):m2(a,l,$,d,y,b,L);if(!(d&S)){var Ge=he&&kt.call(a,"__wrapped__"),Je=ve&&kt.call(l,"__wrapped__");if(Ge||Je){var ht=Ge?a.value():a,et=Je?l.value():l;return L||(L=new cr),b(ht,et,d,y,L)}}return Re?(L||(L=new cr),g2(a,l,d,y,b,L)):!1}function GR(a){return dn(a)&&jn(a)==Pt}function jp(a,l,d,y){var b=d.length,L=b,B=!y;if(a==null)return!L;for(a=Ht(a);b--;){var G=d[b];if(B&&G[2]?G[1]!==a[G[0]]:!(G[0]in a))return!1}for(;++b<L;){G=d[b];var $=G[0],de=a[$],he=G[1];if(B&&G[2]){if(de===t&&!($ in a))return!1}else{var ve=new cr;if(y)var Re=y(de,he,$,a,l,ve);if(!(Re===t?Su(he,de,S|E,y,ve):Re))return!1}}return!0}function Dy(a){if(!sn(a)||T2(a))return!1;var l=rs(a)?GC:ie;return l.test(Ha(a))}function WR(a){return dn(a)&&ti(a)==ce}function XR(a){return dn(a)&&jn(a)==pe}function jR(a){return dn(a)&&Bf(a.length)&&!!$t[ti(a)]}function Oy(a){return typeof a=="function"?a:a==null?yi:typeof a=="object"?lt(a)?Fy(a[0],a[1]):ky(a):iS(a)}function Yp(a){if(!wu(a))return qC(a);var l=[];for(var d in Ht(a))kt.call(a,d)&&d!="constructor"&&l.push(d);return l}function YR(a){if(!sn(a))return R2(a);var l=wu(a),d=[];for(var y in a)y=="constructor"&&(l||!kt.call(a,y))||d.push(y);return d}function $p(a,l){return a<l}function Uy(a,l){var d=-1,y=vi(a)?ee(a.length):[];return Bs(a,function(b,L,B){y[++d]=l(b,L,B)}),y}function ky(a){var l=um(a);return l.length==1&&l[0][2]?vx(l[0][0],l[0][1]):function(d){return d===a||jp(d,a,l)}}function Fy(a,l){return fm(a)&&gx(l)?vx(Ur(a),l):function(d){var y=Sm(d,a);return y===t&&y===l?Mm(d,a):Su(l,y,S|E)}}function Ef(a,l,d,y,b){a!==l&&Vp(l,function(L,B){if(b||(b=new cr),sn(L))$R(a,l,B,d,Ef,y,b);else{var G=y?y(hm(a,B),L,B+"",a,l,b):t;G===t&&(G=L),zp(a,B,G)}},_i)}function $R(a,l,d,y,b,L,B){var G=hm(a,d),$=hm(l,d),de=B.get($);if(de){zp(a,d,de);return}var he=L?L(G,$,d+"",a,l,B):t,ve=he===t;if(ve){var Re=lt($),Ge=!Re&&Gs($),Je=!Re&&!Ge&&ko($);he=$,Re||Ge||Je?lt(G)?he=G:vn(G)?he=gi(G):Ge?(ve=!1,he=Ky($,!0)):Je?(ve=!1,he=Zy($,!0)):he=[]:bu($)||Va($)?(he=G,Va(G)?he=Yx(G):(!sn(G)||rs(G))&&(he=mx($))):ve=!1}ve&&(B.set($,he),b(he,$,y,L,B),B.delete($)),zp(a,d,he)}function By(a,l){var d=a.length;if(d)return l+=l<0?d:0,is(l,d)?a[l]:t}function zy(a,l,d){l.length?l=tn(l,function(L){return lt(L)?function(B){return Ba(B,L.length===1?L[0]:L)}:L}):l=[yi];var y=-1;l=tn(l,Ci(Qe()));var b=Uy(a,function(L,B,G){var $=tn(l,function(de){return de(L)});return{criteria:$,index:++y,value:L}});return SC(b,function(L,B){return o2(L,B,d)})}function qR(a,l){return Hy(a,l,function(d,y){return Mm(a,y)})}function Hy(a,l,d){for(var y=-1,b=l.length,L={};++y<b;){var B=l[y],G=Ba(a,B);d(G,B)&&Mu(L,Hs(B,a),G)}return L}function KR(a){return function(l){return Ba(l,a)}}function qp(a,l,d,y){var b=y?xC:bo,L=-1,B=l.length,G=a;for(a===l&&(l=gi(l)),d&&(G=tn(a,Ci(d)));++L<B;)for(var $=0,de=l[L],he=d?d(de):de;($=b(G,he,$,y))>-1;)G!==a&&hf.call(G,$,1),hf.call(a,$,1);return a}function Vy(a,l){for(var d=a?l.length:0,y=d-1;d--;){var b=l[d];if(d==y||b!==L){var L=b;is(b)?hf.call(a,b,1):Jp(a,b)}}return a}function Kp(a,l){return a+gf(My()*(l-a+1))}function ZR(a,l,d,y){for(var b=-1,L=wn(mf((l-a)/(d||1)),0),B=ee(L);L--;)B[y?L:++b]=a,a+=d;return B}function Zp(a,l){var d="";if(!a||l<1||l>W)return d;do l%2&&(d+=a),l=gf(l/2),l&&(a+=a);while(l);return d}function yt(a,l){return pm(_x(a,l,yi),a+"")}function QR(a){return Ty(Fo(a))}function JR(a,l){var d=Fo(a);return Nf(d,Fa(l,0,d.length))}function Mu(a,l,d,y){if(!sn(a))return a;l=Hs(l,a);for(var b=-1,L=l.length,B=L-1,G=a;G!=null&&++b<L;){var $=Ur(l[b]),de=d;if($==="__proto__"||$==="constructor"||$==="prototype")return a;if(b!=B){var he=G[$];de=y?y(he,$,G):t,de===t&&(de=sn(he)?he:is(l[b+1])?[]:{})}_u(G,$,de),G=G[$]}return a}var Gy=vf?function(a,l){return vf.set(a,l),a}:yi,e2=pf?function(a,l){return pf(a,"toString",{configurable:!0,enumerable:!1,value:wm(l),writable:!0})}:yi;function t2(a){return Nf(Fo(a))}function qi(a,l,d){var y=-1,b=a.length;l<0&&(l=-l>b?0:b+l),d=d>b?b:d,d<0&&(d+=b),b=l>d?0:d-l>>>0,l>>>=0;for(var L=ee(b);++y<b;)L[y]=a[y+l];return L}function n2(a,l){var d;return Bs(a,function(y,b,L){return d=l(y,b,L),!d}),!!d}function wf(a,l,d){var y=0,b=a==null?y:a.length;if(typeof l=="number"&&l===l&&b<=gt){for(;y<b;){var L=y+b>>>1,B=a[L];B!==null&&!Pi(B)&&(d?B<=l:B<l)?y=L+1:b=L}return b}return Qp(a,l,yi,d)}function Qp(a,l,d,y){var b=0,L=a==null?0:a.length;if(L===0)return 0;l=d(l);for(var B=l!==l,G=l===null,$=Pi(l),de=l===t;b<L;){var he=gf((b+L)/2),ve=d(a[he]),Re=ve!==t,Ge=ve===null,Je=ve===ve,ht=Pi(ve);if(B)var et=y||Je;else de?et=Je&&(y||Re):G?et=Je&&Re&&(y||!Ge):$?et=Je&&Re&&!Ge&&(y||!ht):Ge||ht?et=!1:et=y?ve<=l:ve<l;et?b=he+1:L=he}return Xn(L,ze)}function Wy(a,l){for(var d=-1,y=a.length,b=0,L=[];++d<y;){var B=a[d],G=l?l(B):B;if(!d||!fr(G,$)){var $=G;L[b++]=B===0?0:B}}return L}function Xy(a){return typeof a=="number"?a:Pi(a)?Y:+a}function Ri(a){if(typeof a=="string")return a;if(lt(a))return tn(a,Ri)+"";if(Pi(a))return Ey?Ey.call(a):"";var l=a+"";return l=="0"&&1/a==-ge?"-0":l}function zs(a,l,d){var y=-1,b=nf,L=a.length,B=!0,G=[],$=G;if(d)B=!1,b=Ap;else if(L>=r){var de=l?null:h2(a);if(de)return sf(de);B=!1,b=du,$=new ka}else $=l?[]:G;e:for(;++y<L;){var he=a[y],ve=l?l(he):he;if(he=d||he!==0?he:0,B&&ve===ve){for(var Re=$.length;Re--;)if($[Re]===ve)continue e;l&&$.push(ve),G.push(he)}else b($,ve,d)||($!==G&&$.push(ve),G.push(he))}return G}function Jp(a,l){return l=Hs(l,a),a=yx(a,l),a==null||delete a[Ur(Ki(l))]}function jy(a,l,d,y){return Mu(a,l,d(Ba(a,l)),y)}function Tf(a,l,d,y){for(var b=a.length,L=y?b:-1;(y?L--:++L<b)&&l(a[L],L,a););return d?qi(a,y?0:L,y?L+1:b):qi(a,y?L+1:0,y?b:L)}function Yy(a,l){var d=a;return d instanceof wt&&(d=d.value()),Cp(l,function(y,b){return b.func.apply(b.thisArg,Us([y],b.args))},d)}function em(a,l,d){var y=a.length;if(y<2)return y?zs(a[0]):[];for(var b=-1,L=ee(y);++b<y;)for(var B=a[b],G=-1;++G<y;)G!=b&&(L[b]=yu(L[b]||B,a[G],l,d));return zs(kn(L,1),l,d)}function $y(a,l,d){for(var y=-1,b=a.length,L=l.length,B={};++y<b;){var G=y<L?l[y]:t;d(B,a[y],G)}return B}function tm(a){return vn(a)?a:[]}function nm(a){return typeof a=="function"?a:yi}function Hs(a,l){return lt(a)?a:fm(a,l)?[a]:Ex(Ot(a))}var i2=yt;function Vs(a,l,d){var y=a.length;return d=d===t?y:d,!l&&d>=y?a:qi(a,l,d)}var qy=WC||function(a){return Un.clearTimeout(a)};function Ky(a,l){if(l)return a.slice();var d=a.length,y=vy?vy(d):new a.constructor(d);return a.copy(y),y}function im(a){var l=new a.constructor(a.byteLength);return new ff(l).set(new ff(a)),l}function r2(a,l){var d=l?im(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.byteLength)}function s2(a){var l=new a.constructor(a.source,D.exec(a));return l.lastIndex=a.lastIndex,l}function a2(a){return vu?Ht(vu.call(a)):{}}function Zy(a,l){var d=l?im(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.length)}function Qy(a,l){if(a!==l){var d=a!==t,y=a===null,b=a===a,L=Pi(a),B=l!==t,G=l===null,$=l===l,de=Pi(l);if(!G&&!de&&!L&&a>l||L&&B&&$&&!G&&!de||y&&B&&$||!d&&$||!b)return 1;if(!y&&!L&&!de&&a<l||de&&d&&b&&!y&&!L||G&&d&&b||!B&&b||!$)return-1}return 0}function o2(a,l,d){for(var y=-1,b=a.criteria,L=l.criteria,B=b.length,G=d.length;++y<B;){var $=Qy(b[y],L[y]);if($){if(y>=G)return $;var de=d[y];return $*(de=="desc"?-1:1)}}return a.index-l.index}function Jy(a,l,d,y){for(var b=-1,L=a.length,B=d.length,G=-1,$=l.length,de=wn(L-B,0),he=ee($+de),ve=!y;++G<$;)he[G]=l[G];for(;++b<B;)(ve||b<L)&&(he[d[b]]=a[b]);for(;de--;)he[G++]=a[b++];return he}function ex(a,l,d,y){for(var b=-1,L=a.length,B=-1,G=d.length,$=-1,de=l.length,he=wn(L-G,0),ve=ee(he+de),Re=!y;++b<he;)ve[b]=a[b];for(var Ge=b;++$<de;)ve[Ge+$]=l[$];for(;++B<G;)(Re||b<L)&&(ve[Ge+d[B]]=a[b++]);return ve}function gi(a,l){var d=-1,y=a.length;for(l||(l=ee(y));++d<y;)l[d]=a[d];return l}function Or(a,l,d,y){var b=!d;d||(d={});for(var L=-1,B=l.length;++L<B;){var G=l[L],$=y?y(d[G],a[G],G,d,a):t;$===t&&($=a[G]),b?es(d,G,$):_u(d,G,$)}return d}function l2(a,l){return Or(a,cm(a),l)}function u2(a,l){return Or(a,hx(a),l)}function bf(a,l){return function(d,y){var b=lt(d)?pC:LR,L=l?l():{};return b(d,a,Qe(y,2),L)}}function Do(a){return yt(function(l,d){var y=-1,b=d.length,L=b>1?d[b-1]:t,B=b>2?d[2]:t;for(L=a.length>3&&typeof L=="function"?(b--,L):t,B&&ni(d[0],d[1],B)&&(L=b<3?t:L,b=1),l=Ht(l);++y<b;){var G=d[y];G&&a(l,G,y,L)}return l})}function tx(a,l){return function(d,y){if(d==null)return d;if(!vi(d))return a(d,y);for(var b=d.length,L=l?b:-1,B=Ht(d);(l?L--:++L<b)&&y(B[L],L,B)!==!1;);return d}}function nx(a){return function(l,d,y){for(var b=-1,L=Ht(l),B=y(l),G=B.length;G--;){var $=B[a?G:++b];if(d(L[$],$,L)===!1)break}return l}}function c2(a,l,d){var y=l&_,b=Eu(a);function L(){var B=this&&this!==Un&&this instanceof L?b:a;return B.apply(y?d:this,arguments)}return L}function ix(a){return function(l){l=Ot(l);var d=Ao(l)?ur(l):t,y=d?d[0]:l.charAt(0),b=d?Vs(d,1).join(""):l.slice(1);return y[a]()+b}}function Oo(a){return function(l){return Cp(tS(eS(l).replace(eC,"")),a,"")}}function Eu(a){return function(){var l=arguments;switch(l.length){case 0:return new a;case 1:return new a(l[0]);case 2:return new a(l[0],l[1]);case 3:return new a(l[0],l[1],l[2]);case 4:return new a(l[0],l[1],l[2],l[3]);case 5:return new a(l[0],l[1],l[2],l[3],l[4]);case 6:return new a(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new a(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=No(a.prototype),y=a.apply(d,l);return sn(y)?y:d}}function f2(a,l,d){var y=Eu(a);function b(){for(var L=arguments.length,B=ee(L),G=L,$=Uo(b);G--;)B[G]=arguments[G];var de=L<3&&B[0]!==$&&B[L-1]!==$?[]:ks(B,$);if(L-=de.length,L<d)return lx(a,l,Af,b.placeholder,t,B,de,t,t,d-L);var he=this&&this!==Un&&this instanceof b?y:a;return Ai(he,this,B)}return b}function rx(a){return function(l,d,y){var b=Ht(l);if(!vi(l)){var L=Qe(d,3);l=Ln(l),d=function(G){return L(b[G],G,b)}}var B=a(l,d,y);return B>-1?b[L?l[B]:B]:t}}function sx(a){return ns(function(l){var d=l.length,y=d,b=Yi.prototype.thru;for(a&&l.reverse();y--;){var L=l[y];if(typeof L!="function")throw new ji(o);if(b&&!B&&Lf(L)=="wrapper")var B=new Yi([],!0)}for(y=B?y:d;++y<d;){L=l[y];var G=Lf(L),$=G=="wrapper"?lm(L):t;$&&dm($[0])&&$[1]==(I|x|U|z)&&!$[4].length&&$[9]==1?B=B[Lf($[0])].apply(B,$[3]):B=L.length==1&&dm(L)?B[G]():B.thru(L)}return function(){var de=arguments,he=de[0];if(B&&de.length==1&&lt(he))return B.plant(he).value();for(var ve=0,Re=d?l[ve].apply(this,de):he;++ve<d;)Re=l[ve].call(this,Re);return Re}})}function Af(a,l,d,y,b,L,B,G,$,de){var he=l&I,ve=l&_,Re=l&g,Ge=l&(x|C),Je=l&A,ht=Re?t:Eu(a);function et(){for(var Mt=arguments.length,Rt=ee(Mt),Li=Mt;Li--;)Rt[Li]=arguments[Li];if(Ge)var ii=Uo(et),Ii=EC(Rt,ii);if(y&&(Rt=Jy(Rt,y,b,Ge)),L&&(Rt=ex(Rt,L,B,Ge)),Mt-=Ii,Ge&&Mt<de){var _n=ks(Rt,ii);return lx(a,l,Af,et.placeholder,d,Rt,_n,G,$,de-Mt)}var dr=ve?d:this,as=Re?dr[a]:a;return Mt=Rt.length,G?Rt=L2(Rt,G):Je&&Mt>1&&Rt.reverse(),he&&$<Mt&&(Rt.length=$),this&&this!==Un&&this instanceof et&&(as=ht||Eu(as)),as.apply(dr,Rt)}return et}function ax(a,l){return function(d,y){return BR(d,a,l(y),{})}}function Cf(a,l){return function(d,y){var b;if(d===t&&y===t)return l;if(d!==t&&(b=d),y!==t){if(b===t)return y;typeof d=="string"||typeof y=="string"?(d=Ri(d),y=Ri(y)):(d=Xy(d),y=Xy(y)),b=a(d,y)}return b}}function rm(a){return ns(function(l){return l=tn(l,Ci(Qe())),yt(function(d){var y=this;return a(l,function(b){return Ai(b,y,d)})})})}function Rf(a,l){l=l===t?" ":Ri(l);var d=l.length;if(d<2)return d?Zp(l,a):l;var y=Zp(l,mf(a/Co(l)));return Ao(l)?Vs(ur(y),0,a).join(""):y.slice(0,a)}function d2(a,l,d,y){var b=l&_,L=Eu(a);function B(){for(var G=-1,$=arguments.length,de=-1,he=y.length,ve=ee(he+$),Re=this&&this!==Un&&this instanceof B?L:a;++de<he;)ve[de]=y[de];for(;$--;)ve[de++]=arguments[++G];return Ai(Re,b?d:this,ve)}return B}function ox(a){return function(l,d,y){return y&&typeof y!="number"&&ni(l,d,y)&&(d=y=t),l=ss(l),d===t?(d=l,l=0):d=ss(d),y=y===t?l<d?1:-1:ss(y),ZR(l,d,y,a)}}function Pf(a){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=Zi(l),d=Zi(d)),a(l,d)}}function lx(a,l,d,y,b,L,B,G,$,de){var he=l&x,ve=he?B:t,Re=he?t:B,Ge=he?L:t,Je=he?t:L;l|=he?U:O,l&=~(he?O:U),l&M||(l&=~(_|g));var ht=[a,l,b,Ge,ve,Je,Re,G,$,de],et=d.apply(t,ht);return dm(a)&&xx(et,ht),et.placeholder=y,Sx(et,a,l)}function sm(a){var l=En[a];return function(d,y){if(d=Zi(d),y=y==null?0:Xn(ft(y),292),y&&Sy(d)){var b=(Ot(d)+"e").split("e"),L=l(b[0]+"e"+(+b[1]+y));return b=(Ot(L)+"e").split("e"),+(b[0]+"e"+(+b[1]-y))}return l(d)}}var h2=Lo&&1/sf(new Lo([,-0]))[1]==ge?function(a){return new Lo(a)}:Am;function ux(a){return function(l){var d=jn(l);return d==Pt?Op(l):d==pe?PC(l):MC(l,a(l))}}function ts(a,l,d,y,b,L,B,G){var $=l&g;if(!$&&typeof a!="function")throw new ji(o);var de=y?y.length:0;if(de||(l&=~(U|O),y=b=t),B=B===t?B:wn(ft(B),0),G=G===t?G:ft(G),de-=b?b.length:0,l&O){var he=y,ve=b;y=b=t}var Re=$?t:lm(a),Ge=[a,l,d,y,b,he,ve,L,B,G];if(Re&&C2(Ge,Re),a=Ge[0],l=Ge[1],d=Ge[2],y=Ge[3],b=Ge[4],G=Ge[9]=Ge[9]===t?$?0:a.length:wn(Ge[9]-de,0),!G&&l&(x|C)&&(l&=~(x|C)),!l||l==_)var Je=c2(a,l,d);else l==x||l==C?Je=f2(a,l,G):(l==U||l==(_|U))&&!b.length?Je=d2(a,l,d,y):Je=Af.apply(t,Ge);var ht=Re?Gy:xx;return Sx(ht(Je,Ge),a,l)}function cx(a,l,d,y){return a===t||fr(a,Po[d])&&!kt.call(y,d)?l:a}function fx(a,l,d,y,b,L){return sn(a)&&sn(l)&&(L.set(l,a),Ef(a,l,t,fx,L),L.delete(l)),a}function p2(a){return bu(a)?t:a}function dx(a,l,d,y,b,L){var B=d&S,G=a.length,$=l.length;if(G!=$&&!(B&&$>G))return!1;var de=L.get(a),he=L.get(l);if(de&&he)return de==l&&he==a;var ve=-1,Re=!0,Ge=d&E?new ka:t;for(L.set(a,l),L.set(l,a);++ve<G;){var Je=a[ve],ht=l[ve];if(y)var et=B?y(ht,Je,ve,l,a,L):y(Je,ht,ve,a,l,L);if(et!==t){if(et)continue;Re=!1;break}if(Ge){if(!Rp(l,function(Mt,Rt){if(!du(Ge,Rt)&&(Je===Mt||b(Je,Mt,d,y,L)))return Ge.push(Rt)})){Re=!1;break}}else if(!(Je===ht||b(Je,ht,d,y,L))){Re=!1;break}}return L.delete(a),L.delete(l),Re}function m2(a,l,d,y,b,L,B){switch(d){case Le:if(a.byteLength!=l.byteLength||a.byteOffset!=l.byteOffset)return!1;a=a.buffer,l=l.buffer;case Te:return!(a.byteLength!=l.byteLength||!L(new ff(a),new ff(l)));case $e:case le:case Ke:return fr(+a,+l);case H:return a.name==l.name&&a.message==l.message;case ce:case _e:return a==l+"";case Pt:var G=Op;case pe:var $=y&S;if(G||(G=sf),a.size!=l.size&&!$)return!1;var de=B.get(a);if(de)return de==l;y|=E,B.set(a,l);var he=dx(G(a),G(l),y,b,L,B);return B.delete(a),he;case Ye:if(vu)return vu.call(a)==vu.call(l)}return!1}function g2(a,l,d,y,b,L){var B=d&S,G=am(a),$=G.length,de=am(l),he=de.length;if($!=he&&!B)return!1;for(var ve=$;ve--;){var Re=G[ve];if(!(B?Re in l:kt.call(l,Re)))return!1}var Ge=L.get(a),Je=L.get(l);if(Ge&&Je)return Ge==l&&Je==a;var ht=!0;L.set(a,l),L.set(l,a);for(var et=B;++ve<$;){Re=G[ve];var Mt=a[Re],Rt=l[Re];if(y)var Li=B?y(Rt,Mt,Re,l,a,L):y(Mt,Rt,Re,a,l,L);if(!(Li===t?Mt===Rt||b(Mt,Rt,d,y,L):Li)){ht=!1;break}et||(et=Re=="constructor")}if(ht&&!et){var ii=a.constructor,Ii=l.constructor;ii!=Ii&&"constructor"in a&&"constructor"in l&&!(typeof ii=="function"&&ii instanceof ii&&typeof Ii=="function"&&Ii instanceof Ii)&&(ht=!1)}return L.delete(a),L.delete(l),ht}function ns(a){return pm(_x(a,t,Ax),a+"")}function am(a){return Iy(a,Ln,cm)}function om(a){return Iy(a,_i,hx)}var lm=vf?function(a){return vf.get(a)}:Am;function Lf(a){for(var l=a.name+"",d=Io[l],y=kt.call(Io,l)?d.length:0;y--;){var b=d[y],L=b.func;if(L==null||L==a)return b.name}return l}function Uo(a){var l=kt.call(P,"placeholder")?P:a;return l.placeholder}function Qe(){var a=P.iteratee||Tm;return a=a===Tm?Oy:a,arguments.length?a(arguments[0],arguments[1]):a}function If(a,l){var d=a.__data__;return w2(l)?d[typeof l=="string"?"string":"hash"]:d.map}function um(a){for(var l=Ln(a),d=l.length;d--;){var y=l[d],b=a[y];l[d]=[y,b,gx(b)]}return l}function za(a,l){var d=AC(a,l);return Dy(d)?d:t}function v2(a){var l=kt.call(a,Oa),d=a[Oa];try{a[Oa]=t;var y=!0}catch{}var b=uf.call(a);return y&&(l?a[Oa]=d:delete a[Oa]),b}var cm=kp?function(a){return a==null?[]:(a=Ht(a),Os(kp(a),function(l){return yy.call(a,l)}))}:Cm,hx=kp?function(a){for(var l=[];a;)Us(l,cm(a)),a=df(a);return l}:Cm,jn=ti;(Fp&&jn(new Fp(new ArrayBuffer(1)))!=Le||pu&&jn(new pu)!=Pt||Bp&&jn(Bp.resolve())!=R||Lo&&jn(new Lo)!=pe||mu&&jn(new mu)!=Ve)&&(jn=function(a){var l=ti(a),d=l==F?a.constructor:t,y=d?Ha(d):"";if(y)switch(y){case JC:return Le;case eR:return Pt;case tR:return R;case nR:return pe;case iR:return Ve}return l});function _2(a,l,d){for(var y=-1,b=d.length;++y<b;){var L=d[y],B=L.size;switch(L.type){case"drop":a+=B;break;case"dropRight":l-=B;break;case"take":l=Xn(l,a+B);break;case"takeRight":a=wn(a,l-B);break}}return{start:a,end:l}}function y2(a){var l=a.match(wo);return l?l[1].split(Jc):[]}function px(a,l,d){l=Hs(l,a);for(var y=-1,b=l.length,L=!1;++y<b;){var B=Ur(l[y]);if(!(L=a!=null&&d(a,B)))break;a=a[B]}return L||++y!=b?L:(b=a==null?0:a.length,!!b&&Bf(b)&&is(B,b)&&(lt(a)||Va(a)))}function x2(a){var l=a.length,d=new a.constructor(l);return l&&typeof a[0]=="string"&&kt.call(a,"index")&&(d.index=a.index,d.input=a.input),d}function mx(a){return typeof a.constructor=="function"&&!wu(a)?No(df(a)):{}}function S2(a,l,d){var y=a.constructor;switch(l){case Te:return im(a);case $e:case le:return new y(+a);case Le:return r2(a,d);case nt:case Fe:case Be:case dt:case vt:case At:case xt:case Ct:case Xe:return Zy(a,d);case Pt:return new y;case Ke:case _e:return new y(a);case ce:return s2(a);case pe:return new y;case Ye:return a2(a)}}function M2(a,l){var d=l.length;if(!d)return a;var y=d-1;return l[y]=(d>1?"& ":"")+l[y],l=l.join(d>2?", ":" "),a.replace(Qc,`{
/* [wrapped with `+l+`] */
`)}function E2(a){return lt(a)||Va(a)||!!(xy&&a&&a[xy])}function is(a,l){var d=typeof a;return l=l??W,!!l&&(d=="number"||d!="symbol"&&Ie.test(a))&&a>-1&&a%1==0&&a<l}function ni(a,l,d){if(!sn(d))return!1;var y=typeof l;return(y=="number"?vi(d)&&is(l,d.length):y=="string"&&l in d)?fr(d[l],a):!1}function fm(a,l){if(lt(a))return!1;var d=typeof a;return d=="number"||d=="symbol"||d=="boolean"||a==null||Pi(a)?!0:fn.test(a)||!cn.test(a)||l!=null&&a in Ht(l)}function w2(a){var l=typeof a;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?a!=="__proto__":a===null}function dm(a){var l=Lf(a),d=P[l];if(typeof d!="function"||!(l in wt.prototype))return!1;if(a===d)return!0;var y=lm(d);return!!y&&a===y[0]}function T2(a){return!!gy&&gy in a}var b2=of?rs:Rm;function wu(a){var l=a&&a.constructor,d=typeof l=="function"&&l.prototype||Po;return a===d}function gx(a){return a===a&&!sn(a)}function vx(a,l){return function(d){return d==null?!1:d[a]===l&&(l!==t||a in Ht(d))}}function A2(a){var l=kf(a,function(y){return d.size===f&&d.clear(),y}),d=l.cache;return l}function C2(a,l){var d=a[1],y=l[1],b=d|y,L=b<(_|g|I),B=y==I&&d==x||y==I&&d==z&&a[7].length<=l[8]||y==(I|z)&&l[7].length<=l[8]&&d==x;if(!(L||B))return a;y&_&&(a[2]=l[2],b|=d&_?0:M);var G=l[3];if(G){var $=a[3];a[3]=$?Jy($,G,l[4]):G,a[4]=$?ks(a[3],h):l[4]}return G=l[5],G&&($=a[5],a[5]=$?ex($,G,l[6]):G,a[6]=$?ks(a[5],h):l[6]),G=l[7],G&&(a[7]=G),y&I&&(a[8]=a[8]==null?l[8]:Xn(a[8],l[8])),a[9]==null&&(a[9]=l[9]),a[0]=l[0],a[1]=b,a}function R2(a){var l=[];if(a!=null)for(var d in Ht(a))l.push(d);return l}function P2(a){return uf.call(a)}function _x(a,l,d){return l=wn(l===t?a.length-1:l,0),function(){for(var y=arguments,b=-1,L=wn(y.length-l,0),B=ee(L);++b<L;)B[b]=y[l+b];b=-1;for(var G=ee(l+1);++b<l;)G[b]=y[b];return G[l]=d(B),Ai(a,this,G)}}function yx(a,l){return l.length<2?a:Ba(a,qi(l,0,-1))}function L2(a,l){for(var d=a.length,y=Xn(l.length,d),b=gi(a);y--;){var L=l[y];a[y]=is(L,d)?b[L]:t}return a}function hm(a,l){if(!(l==="constructor"&&typeof a[l]=="function")&&l!="__proto__")return a[l]}var xx=Mx(Gy),Tu=jC||function(a,l){return Un.setTimeout(a,l)},pm=Mx(e2);function Sx(a,l,d){var y=l+"";return pm(a,M2(y,I2(y2(y),d)))}function Mx(a){var l=0,d=0;return function(){var y=KC(),b=k-(y-d);if(d=y,b>0){if(++l>=V)return arguments[0]}else l=0;return a.apply(t,arguments)}}function Nf(a,l){var d=-1,y=a.length,b=y-1;for(l=l===t?y:l;++d<l;){var L=Kp(d,b),B=a[L];a[L]=a[d],a[d]=B}return a.length=l,a}var Ex=A2(function(a){var l=[];return a.charCodeAt(0)===46&&l.push(""),a.replace(Jn,function(d,y,b,L){l.push(b?L.replace(yp,"$1"):y||d)}),l});function Ur(a){if(typeof a=="string"||Pi(a))return a;var l=a+"";return l=="0"&&1/a==-ge?"-0":l}function Ha(a){if(a!=null){try{return lf.call(a)}catch{}try{return a+""}catch{}}return""}function I2(a,l){return Xi(se,function(d){var y="_."+d[0];l&d[1]&&!nf(a,y)&&a.push(y)}),a.sort()}function wx(a){if(a instanceof wt)return a.clone();var l=new Yi(a.__wrapped__,a.__chain__);return l.__actions__=gi(a.__actions__),l.__index__=a.__index__,l.__values__=a.__values__,l}function N2(a,l,d){(d?ni(a,l,d):l===t)?l=1:l=wn(ft(l),0);var y=a==null?0:a.length;if(!y||l<1)return[];for(var b=0,L=0,B=ee(mf(y/l));b<y;)B[L++]=qi(a,b,b+=l);return B}function D2(a){for(var l=-1,d=a==null?0:a.length,y=0,b=[];++l<d;){var L=a[l];L&&(b[y++]=L)}return b}function O2(){var a=arguments.length;if(!a)return[];for(var l=ee(a-1),d=arguments[0],y=a;y--;)l[y-1]=arguments[y];return Us(lt(d)?gi(d):[d],kn(l,1))}var U2=yt(function(a,l){return vn(a)?yu(a,kn(l,1,vn,!0)):[]}),k2=yt(function(a,l){var d=Ki(l);return vn(d)&&(d=t),vn(a)?yu(a,kn(l,1,vn,!0),Qe(d,2)):[]}),F2=yt(function(a,l){var d=Ki(l);return vn(d)&&(d=t),vn(a)?yu(a,kn(l,1,vn,!0),t,d):[]});function B2(a,l,d){var y=a==null?0:a.length;return y?(l=d||l===t?1:ft(l),qi(a,l<0?0:l,y)):[]}function z2(a,l,d){var y=a==null?0:a.length;return y?(l=d||l===t?1:ft(l),l=y-l,qi(a,0,l<0?0:l)):[]}function H2(a,l){return a&&a.length?Tf(a,Qe(l,3),!0,!0):[]}function V2(a,l){return a&&a.length?Tf(a,Qe(l,3),!0):[]}function G2(a,l,d,y){var b=a==null?0:a.length;return b?(d&&typeof d!="number"&&ni(a,l,d)&&(d=0,y=b),OR(a,l,d,y)):[]}function Tx(a,l,d){var y=a==null?0:a.length;if(!y)return-1;var b=d==null?0:ft(d);return b<0&&(b=wn(y+b,0)),rf(a,Qe(l,3),b)}function bx(a,l,d){var y=a==null?0:a.length;if(!y)return-1;var b=y-1;return d!==t&&(b=ft(d),b=d<0?wn(y+b,0):Xn(b,y-1)),rf(a,Qe(l,3),b,!0)}function Ax(a){var l=a==null?0:a.length;return l?kn(a,1):[]}function W2(a){var l=a==null?0:a.length;return l?kn(a,ge):[]}function X2(a,l){var d=a==null?0:a.length;return d?(l=l===t?1:ft(l),kn(a,l)):[]}function j2(a){for(var l=-1,d=a==null?0:a.length,y={};++l<d;){var b=a[l];y[b[0]]=b[1]}return y}function Cx(a){return a&&a.length?a[0]:t}function Y2(a,l,d){var y=a==null?0:a.length;if(!y)return-1;var b=d==null?0:ft(d);return b<0&&(b=wn(y+b,0)),bo(a,l,b)}function $2(a){var l=a==null?0:a.length;return l?qi(a,0,-1):[]}var q2=yt(function(a){var l=tn(a,tm);return l.length&&l[0]===a[0]?Xp(l):[]}),K2=yt(function(a){var l=Ki(a),d=tn(a,tm);return l===Ki(d)?l=t:d.pop(),d.length&&d[0]===a[0]?Xp(d,Qe(l,2)):[]}),Z2=yt(function(a){var l=Ki(a),d=tn(a,tm);return l=typeof l=="function"?l:t,l&&d.pop(),d.length&&d[0]===a[0]?Xp(d,t,l):[]});function Q2(a,l){return a==null?"":$C.call(a,l)}function Ki(a){var l=a==null?0:a.length;return l?a[l-1]:t}function J2(a,l,d){var y=a==null?0:a.length;if(!y)return-1;var b=y;return d!==t&&(b=ft(d),b=b<0?wn(y+b,0):Xn(b,y-1)),l===l?IC(a,l,b):rf(a,ly,b,!0)}function eP(a,l){return a&&a.length?By(a,ft(l)):t}var tP=yt(Rx);function Rx(a,l){return a&&a.length&&l&&l.length?qp(a,l):a}function nP(a,l,d){return a&&a.length&&l&&l.length?qp(a,l,Qe(d,2)):a}function iP(a,l,d){return a&&a.length&&l&&l.length?qp(a,l,t,d):a}var rP=ns(function(a,l){var d=a==null?0:a.length,y=Hp(a,l);return Vy(a,tn(l,function(b){return is(b,d)?+b:b}).sort(Qy)),y});function sP(a,l){var d=[];if(!(a&&a.length))return d;var y=-1,b=[],L=a.length;for(l=Qe(l,3);++y<L;){var B=a[y];l(B,y,a)&&(d.push(B),b.push(y))}return Vy(a,b),d}function mm(a){return a==null?a:QC.call(a)}function aP(a,l,d){var y=a==null?0:a.length;return y?(d&&typeof d!="number"&&ni(a,l,d)?(l=0,d=y):(l=l==null?0:ft(l),d=d===t?y:ft(d)),qi(a,l,d)):[]}function oP(a,l){return wf(a,l)}function lP(a,l,d){return Qp(a,l,Qe(d,2))}function uP(a,l){var d=a==null?0:a.length;if(d){var y=wf(a,l);if(y<d&&fr(a[y],l))return y}return-1}function cP(a,l){return wf(a,l,!0)}function fP(a,l,d){return Qp(a,l,Qe(d,2),!0)}function dP(a,l){var d=a==null?0:a.length;if(d){var y=wf(a,l,!0)-1;if(fr(a[y],l))return y}return-1}function hP(a){return a&&a.length?Wy(a):[]}function pP(a,l){return a&&a.length?Wy(a,Qe(l,2)):[]}function mP(a){var l=a==null?0:a.length;return l?qi(a,1,l):[]}function gP(a,l,d){return a&&a.length?(l=d||l===t?1:ft(l),qi(a,0,l<0?0:l)):[]}function vP(a,l,d){var y=a==null?0:a.length;return y?(l=d||l===t?1:ft(l),l=y-l,qi(a,l<0?0:l,y)):[]}function _P(a,l){return a&&a.length?Tf(a,Qe(l,3),!1,!0):[]}function yP(a,l){return a&&a.length?Tf(a,Qe(l,3)):[]}var xP=yt(function(a){return zs(kn(a,1,vn,!0))}),SP=yt(function(a){var l=Ki(a);return vn(l)&&(l=t),zs(kn(a,1,vn,!0),Qe(l,2))}),MP=yt(function(a){var l=Ki(a);return l=typeof l=="function"?l:t,zs(kn(a,1,vn,!0),t,l)});function EP(a){return a&&a.length?zs(a):[]}function wP(a,l){return a&&a.length?zs(a,Qe(l,2)):[]}function TP(a,l){return l=typeof l=="function"?l:t,a&&a.length?zs(a,t,l):[]}function gm(a){if(!(a&&a.length))return[];var l=0;return a=Os(a,function(d){if(vn(d))return l=wn(d.length,l),!0}),Np(l,function(d){return tn(a,Pp(d))})}function Px(a,l){if(!(a&&a.length))return[];var d=gm(a);return l==null?d:tn(d,function(y){return Ai(l,t,y)})}var bP=yt(function(a,l){return vn(a)?yu(a,l):[]}),AP=yt(function(a){return em(Os(a,vn))}),CP=yt(function(a){var l=Ki(a);return vn(l)&&(l=t),em(Os(a,vn),Qe(l,2))}),RP=yt(function(a){var l=Ki(a);return l=typeof l=="function"?l:t,em(Os(a,vn),t,l)}),PP=yt(gm);function LP(a,l){return $y(a||[],l||[],_u)}function IP(a,l){return $y(a||[],l||[],Mu)}var NP=yt(function(a){var l=a.length,d=l>1?a[l-1]:t;return d=typeof d=="function"?(a.pop(),d):t,Px(a,d)});function Lx(a){var l=P(a);return l.__chain__=!0,l}function DP(a,l){return l(a),a}function Df(a,l){return l(a)}var OP=ns(function(a){var l=a.length,d=l?a[0]:0,y=this.__wrapped__,b=function(L){return Hp(L,a)};return l>1||this.__actions__.length||!(y instanceof wt)||!is(d)?this.thru(b):(y=y.slice(d,+d+(l?1:0)),y.__actions__.push({func:Df,args:[b],thisArg:t}),new Yi(y,this.__chain__).thru(function(L){return l&&!L.length&&L.push(t),L}))});function UP(){return Lx(this)}function kP(){return new Yi(this.value(),this.__chain__)}function FP(){this.__values__===t&&(this.__values__=Xx(this.value()));var a=this.__index__>=this.__values__.length,l=a?t:this.__values__[this.__index__++];return{done:a,value:l}}function BP(){return this}function zP(a){for(var l,d=this;d instanceof yf;){var y=wx(d);y.__index__=0,y.__values__=t,l?b.__wrapped__=y:l=y;var b=y;d=d.__wrapped__}return b.__wrapped__=a,l}function HP(){var a=this.__wrapped__;if(a instanceof wt){var l=a;return this.__actions__.length&&(l=new wt(this)),l=l.reverse(),l.__actions__.push({func:Df,args:[mm],thisArg:t}),new Yi(l,this.__chain__)}return this.thru(mm)}function VP(){return Yy(this.__wrapped__,this.__actions__)}var GP=bf(function(a,l,d){kt.call(a,d)?++a[d]:es(a,d,1)});function WP(a,l,d){var y=lt(a)?ay:DR;return d&&ni(a,l,d)&&(l=t),y(a,Qe(l,3))}function XP(a,l){var d=lt(a)?Os:Py;return d(a,Qe(l,3))}var jP=rx(Tx),YP=rx(bx);function $P(a,l){return kn(Of(a,l),1)}function qP(a,l){return kn(Of(a,l),ge)}function KP(a,l,d){return d=d===t?1:ft(d),kn(Of(a,l),d)}function Ix(a,l){var d=lt(a)?Xi:Bs;return d(a,Qe(l,3))}function Nx(a,l){var d=lt(a)?mC:Ry;return d(a,Qe(l,3))}var ZP=bf(function(a,l,d){kt.call(a,d)?a[d].push(l):es(a,d,[l])});function QP(a,l,d,y){a=vi(a)?a:Fo(a),d=d&&!y?ft(d):0;var b=a.length;return d<0&&(d=wn(b+d,0)),zf(a)?d<=b&&a.indexOf(l,d)>-1:!!b&&bo(a,l,d)>-1}var JP=yt(function(a,l,d){var y=-1,b=typeof l=="function",L=vi(a)?ee(a.length):[];return Bs(a,function(B){L[++y]=b?Ai(l,B,d):xu(B,l,d)}),L}),eL=bf(function(a,l,d){es(a,d,l)});function Of(a,l){var d=lt(a)?tn:Uy;return d(a,Qe(l,3))}function tL(a,l,d,y){return a==null?[]:(lt(l)||(l=l==null?[]:[l]),d=y?t:d,lt(d)||(d=d==null?[]:[d]),zy(a,l,d))}var nL=bf(function(a,l,d){a[d?0:1].push(l)},function(){return[[],[]]});function iL(a,l,d){var y=lt(a)?Cp:cy,b=arguments.length<3;return y(a,Qe(l,4),d,b,Bs)}function rL(a,l,d){var y=lt(a)?gC:cy,b=arguments.length<3;return y(a,Qe(l,4),d,b,Ry)}function sL(a,l){var d=lt(a)?Os:Py;return d(a,Ff(Qe(l,3)))}function aL(a){var l=lt(a)?Ty:QR;return l(a)}function oL(a,l,d){(d?ni(a,l,d):l===t)?l=1:l=ft(l);var y=lt(a)?RR:JR;return y(a,l)}function lL(a){var l=lt(a)?PR:t2;return l(a)}function uL(a){if(a==null)return 0;if(vi(a))return zf(a)?Co(a):a.length;var l=jn(a);return l==Pt||l==pe?a.size:Yp(a).length}function cL(a,l,d){var y=lt(a)?Rp:n2;return d&&ni(a,l,d)&&(l=t),y(a,Qe(l,3))}var fL=yt(function(a,l){if(a==null)return[];var d=l.length;return d>1&&ni(a,l[0],l[1])?l=[]:d>2&&ni(l[0],l[1],l[2])&&(l=[l[0]]),zy(a,kn(l,1),[])}),Uf=XC||function(){return Un.Date.now()};function dL(a,l){if(typeof l!="function")throw new ji(o);return a=ft(a),function(){if(--a<1)return l.apply(this,arguments)}}function Dx(a,l,d){return l=d?t:l,l=a&&l==null?a.length:l,ts(a,I,t,t,t,t,l)}function Ox(a,l){var d;if(typeof l!="function")throw new ji(o);return a=ft(a),function(){return--a>0&&(d=l.apply(this,arguments)),a<=1&&(l=t),d}}var vm=yt(function(a,l,d){var y=_;if(d.length){var b=ks(d,Uo(vm));y|=U}return ts(a,y,l,d,b)}),Ux=yt(function(a,l,d){var y=_|g;if(d.length){var b=ks(d,Uo(Ux));y|=U}return ts(l,y,a,d,b)});function kx(a,l,d){l=d?t:l;var y=ts(a,x,t,t,t,t,t,l);return y.placeholder=kx.placeholder,y}function Fx(a,l,d){l=d?t:l;var y=ts(a,C,t,t,t,t,t,l);return y.placeholder=Fx.placeholder,y}function Bx(a,l,d){var y,b,L,B,G,$,de=0,he=!1,ve=!1,Re=!0;if(typeof a!="function")throw new ji(o);l=Zi(l)||0,sn(d)&&(he=!!d.leading,ve="maxWait"in d,L=ve?wn(Zi(d.maxWait)||0,l):L,Re="trailing"in d?!!d.trailing:Re);function Ge(_n){var dr=y,as=b;return y=b=t,de=_n,B=a.apply(as,dr),B}function Je(_n){return de=_n,G=Tu(Mt,l),he?Ge(_n):B}function ht(_n){var dr=_n-$,as=_n-de,rS=l-dr;return ve?Xn(rS,L-as):rS}function et(_n){var dr=_n-$,as=_n-de;return $===t||dr>=l||dr<0||ve&&as>=L}function Mt(){var _n=Uf();if(et(_n))return Rt(_n);G=Tu(Mt,ht(_n))}function Rt(_n){return G=t,Re&&y?Ge(_n):(y=b=t,B)}function Li(){G!==t&&qy(G),de=0,y=$=b=G=t}function ii(){return G===t?B:Rt(Uf())}function Ii(){var _n=Uf(),dr=et(_n);if(y=arguments,b=this,$=_n,dr){if(G===t)return Je($);if(ve)return qy(G),G=Tu(Mt,l),Ge($)}return G===t&&(G=Tu(Mt,l)),B}return Ii.cancel=Li,Ii.flush=ii,Ii}var hL=yt(function(a,l){return Cy(a,1,l)}),pL=yt(function(a,l,d){return Cy(a,Zi(l)||0,d)});function mL(a){return ts(a,A)}function kf(a,l){if(typeof a!="function"||l!=null&&typeof l!="function")throw new ji(o);var d=function(){var y=arguments,b=l?l.apply(this,y):y[0],L=d.cache;if(L.has(b))return L.get(b);var B=a.apply(this,y);return d.cache=L.set(b,B)||L,B};return d.cache=new(kf.Cache||Jr),d}kf.Cache=Jr;function Ff(a){if(typeof a!="function")throw new ji(o);return function(){var l=arguments;switch(l.length){case 0:return!a.call(this);case 1:return!a.call(this,l[0]);case 2:return!a.call(this,l[0],l[1]);case 3:return!a.call(this,l[0],l[1],l[2])}return!a.apply(this,l)}}function gL(a){return Ox(2,a)}var vL=i2(function(a,l){l=l.length==1&&lt(l[0])?tn(l[0],Ci(Qe())):tn(kn(l,1),Ci(Qe()));var d=l.length;return yt(function(y){for(var b=-1,L=Xn(y.length,d);++b<L;)y[b]=l[b].call(this,y[b]);return Ai(a,this,y)})}),_m=yt(function(a,l){var d=ks(l,Uo(_m));return ts(a,U,t,l,d)}),zx=yt(function(a,l){var d=ks(l,Uo(zx));return ts(a,O,t,l,d)}),_L=ns(function(a,l){return ts(a,z,t,t,t,l)});function yL(a,l){if(typeof a!="function")throw new ji(o);return l=l===t?l:ft(l),yt(a,l)}function xL(a,l){if(typeof a!="function")throw new ji(o);return l=l==null?0:wn(ft(l),0),yt(function(d){var y=d[l],b=Vs(d,0,l);return y&&Us(b,y),Ai(a,this,b)})}function SL(a,l,d){var y=!0,b=!0;if(typeof a!="function")throw new ji(o);return sn(d)&&(y="leading"in d?!!d.leading:y,b="trailing"in d?!!d.trailing:b),Bx(a,l,{leading:y,maxWait:l,trailing:b})}function ML(a){return Dx(a,1)}function EL(a,l){return _m(nm(l),a)}function wL(){if(!arguments.length)return[];var a=arguments[0];return lt(a)?a:[a]}function TL(a){return $i(a,v)}function bL(a,l){return l=typeof l=="function"?l:t,$i(a,v,l)}function AL(a){return $i(a,p|v)}function CL(a,l){return l=typeof l=="function"?l:t,$i(a,p|v,l)}function RL(a,l){return l==null||Ay(a,l,Ln(l))}function fr(a,l){return a===l||a!==a&&l!==l}var PL=Pf(Wp),LL=Pf(function(a,l){return a>=l}),Va=Ny(function(){return arguments}())?Ny:function(a){return dn(a)&&kt.call(a,"callee")&&!yy.call(a,"callee")},lt=ee.isArray,IL=ey?Ci(ey):zR;function vi(a){return a!=null&&Bf(a.length)&&!rs(a)}function vn(a){return dn(a)&&vi(a)}function NL(a){return a===!0||a===!1||dn(a)&&ti(a)==$e}var Gs=YC||Rm,DL=ty?Ci(ty):HR;function OL(a){return dn(a)&&a.nodeType===1&&!bu(a)}function UL(a){if(a==null)return!0;if(vi(a)&&(lt(a)||typeof a=="string"||typeof a.splice=="function"||Gs(a)||ko(a)||Va(a)))return!a.length;var l=jn(a);if(l==Pt||l==pe)return!a.size;if(wu(a))return!Yp(a).length;for(var d in a)if(kt.call(a,d))return!1;return!0}function kL(a,l){return Su(a,l)}function FL(a,l,d){d=typeof d=="function"?d:t;var y=d?d(a,l):t;return y===t?Su(a,l,t,d):!!y}function ym(a){if(!dn(a))return!1;var l=ti(a);return l==H||l==we||typeof a.message=="string"&&typeof a.name=="string"&&!bu(a)}function BL(a){return typeof a=="number"&&Sy(a)}function rs(a){if(!sn(a))return!1;var l=ti(a);return l==ne||l==ye||l==fe||l==re}function Hx(a){return typeof a=="number"&&a==ft(a)}function Bf(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=W}function sn(a){var l=typeof a;return a!=null&&(l=="object"||l=="function")}function dn(a){return a!=null&&typeof a=="object"}var Vx=ny?Ci(ny):GR;function zL(a,l){return a===l||jp(a,l,um(l))}function HL(a,l,d){return d=typeof d=="function"?d:t,jp(a,l,um(l),d)}function VL(a){return Gx(a)&&a!=+a}function GL(a){if(b2(a))throw new at(s);return Dy(a)}function WL(a){return a===null}function XL(a){return a==null}function Gx(a){return typeof a=="number"||dn(a)&&ti(a)==Ke}function bu(a){if(!dn(a)||ti(a)!=F)return!1;var l=df(a);if(l===null)return!0;var d=kt.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&lf.call(d)==HC}var xm=iy?Ci(iy):WR;function jL(a){return Hx(a)&&a>=-W&&a<=W}var Wx=ry?Ci(ry):XR;function zf(a){return typeof a=="string"||!lt(a)&&dn(a)&&ti(a)==_e}function Pi(a){return typeof a=="symbol"||dn(a)&&ti(a)==Ye}var ko=sy?Ci(sy):jR;function YL(a){return a===t}function $L(a){return dn(a)&&jn(a)==Ve}function qL(a){return dn(a)&&ti(a)==Ze}var KL=Pf($p),ZL=Pf(function(a,l){return a<=l});function Xx(a){if(!a)return[];if(vi(a))return zf(a)?ur(a):gi(a);if(hu&&a[hu])return RC(a[hu]());var l=jn(a),d=l==Pt?Op:l==pe?sf:Fo;return d(a)}function ss(a){if(!a)return a===0?a:0;if(a=Zi(a),a===ge||a===-ge){var l=a<0?-1:1;return l*K}return a===a?a:0}function ft(a){var l=ss(a),d=l%1;return l===l?d?l-d:l:0}function jx(a){return a?Fa(ft(a),0,Me):0}function Zi(a){if(typeof a=="number")return a;if(Pi(a))return Y;if(sn(a)){var l=typeof a.valueOf=="function"?a.valueOf():a;a=sn(l)?l+"":l}if(typeof a!="string")return a===0?a:+a;a=fy(a);var d=te.test(a);return d||J.test(a)?dC(a.slice(2),d?2:8):q.test(a)?Y:+a}function Yx(a){return Or(a,_i(a))}function QL(a){return a?Fa(ft(a),-W,W):a===0?a:0}function Ot(a){return a==null?"":Ri(a)}var JL=Do(function(a,l){if(wu(l)||vi(l)){Or(l,Ln(l),a);return}for(var d in l)kt.call(l,d)&&_u(a,d,l[d])}),$x=Do(function(a,l){Or(l,_i(l),a)}),Hf=Do(function(a,l,d,y){Or(l,_i(l),a,y)}),e3=Do(function(a,l,d,y){Or(l,Ln(l),a,y)}),t3=ns(Hp);function n3(a,l){var d=No(a);return l==null?d:by(d,l)}var i3=yt(function(a,l){a=Ht(a);var d=-1,y=l.length,b=y>2?l[2]:t;for(b&&ni(l[0],l[1],b)&&(y=1);++d<y;)for(var L=l[d],B=_i(L),G=-1,$=B.length;++G<$;){var de=B[G],he=a[de];(he===t||fr(he,Po[de])&&!kt.call(a,de))&&(a[de]=L[de])}return a}),r3=yt(function(a){return a.push(t,fx),Ai(qx,t,a)});function s3(a,l){return oy(a,Qe(l,3),Dr)}function a3(a,l){return oy(a,Qe(l,3),Gp)}function o3(a,l){return a==null?a:Vp(a,Qe(l,3),_i)}function l3(a,l){return a==null?a:Ly(a,Qe(l,3),_i)}function u3(a,l){return a&&Dr(a,Qe(l,3))}function c3(a,l){return a&&Gp(a,Qe(l,3))}function f3(a){return a==null?[]:Mf(a,Ln(a))}function d3(a){return a==null?[]:Mf(a,_i(a))}function Sm(a,l,d){var y=a==null?t:Ba(a,l);return y===t?d:y}function h3(a,l){return a!=null&&px(a,l,UR)}function Mm(a,l){return a!=null&&px(a,l,kR)}var p3=ax(function(a,l,d){l!=null&&typeof l.toString!="function"&&(l=uf.call(l)),a[l]=d},wm(yi)),m3=ax(function(a,l,d){l!=null&&typeof l.toString!="function"&&(l=uf.call(l)),kt.call(a,l)?a[l].push(d):a[l]=[d]},Qe),g3=yt(xu);function Ln(a){return vi(a)?wy(a):Yp(a)}function _i(a){return vi(a)?wy(a,!0):YR(a)}function v3(a,l){var d={};return l=Qe(l,3),Dr(a,function(y,b,L){es(d,l(y,b,L),y)}),d}function _3(a,l){var d={};return l=Qe(l,3),Dr(a,function(y,b,L){es(d,b,l(y,b,L))}),d}var y3=Do(function(a,l,d){Ef(a,l,d)}),qx=Do(function(a,l,d,y){Ef(a,l,d,y)}),x3=ns(function(a,l){var d={};if(a==null)return d;var y=!1;l=tn(l,function(L){return L=Hs(L,a),y||(y=L.length>1),L}),Or(a,om(a),d),y&&(d=$i(d,p|m|v,p2));for(var b=l.length;b--;)Jp(d,l[b]);return d});function S3(a,l){return Kx(a,Ff(Qe(l)))}var M3=ns(function(a,l){return a==null?{}:qR(a,l)});function Kx(a,l){if(a==null)return{};var d=tn(om(a),function(y){return[y]});return l=Qe(l),Hy(a,d,function(y,b){return l(y,b[0])})}function E3(a,l,d){l=Hs(l,a);var y=-1,b=l.length;for(b||(b=1,a=t);++y<b;){var L=a==null?t:a[Ur(l[y])];L===t&&(y=b,L=d),a=rs(L)?L.call(a):L}return a}function w3(a,l,d){return a==null?a:Mu(a,l,d)}function T3(a,l,d,y){return y=typeof y=="function"?y:t,a==null?a:Mu(a,l,d,y)}var Zx=ux(Ln),Qx=ux(_i);function b3(a,l,d){var y=lt(a),b=y||Gs(a)||ko(a);if(l=Qe(l,4),d==null){var L=a&&a.constructor;b?d=y?new L:[]:sn(a)?d=rs(L)?No(df(a)):{}:d={}}return(b?Xi:Dr)(a,function(B,G,$){return l(d,B,G,$)}),d}function A3(a,l){return a==null?!0:Jp(a,l)}function C3(a,l,d){return a==null?a:jy(a,l,nm(d))}function R3(a,l,d,y){return y=typeof y=="function"?y:t,a==null?a:jy(a,l,nm(d),y)}function Fo(a){return a==null?[]:Dp(a,Ln(a))}function P3(a){return a==null?[]:Dp(a,_i(a))}function L3(a,l,d){return d===t&&(d=l,l=t),d!==t&&(d=Zi(d),d=d===d?d:0),l!==t&&(l=Zi(l),l=l===l?l:0),Fa(Zi(a),l,d)}function I3(a,l,d){return l=ss(l),d===t?(d=l,l=0):d=ss(d),a=Zi(a),FR(a,l,d)}function N3(a,l,d){if(d&&typeof d!="boolean"&&ni(a,l,d)&&(l=d=t),d===t&&(typeof l=="boolean"?(d=l,l=t):typeof a=="boolean"&&(d=a,a=t)),a===t&&l===t?(a=0,l=1):(a=ss(a),l===t?(l=a,a=0):l=ss(l)),a>l){var y=a;a=l,l=y}if(d||a%1||l%1){var b=My();return Xn(a+b*(l-a+fC("1e-"+((b+"").length-1))),l)}return Kp(a,l)}var D3=Oo(function(a,l,d){return l=l.toLowerCase(),a+(d?Jx(l):l)});function Jx(a){return Em(Ot(a).toLowerCase())}function eS(a){return a=Ot(a),a&&a.replace(je,wC).replace(tC,"")}function O3(a,l,d){a=Ot(a),l=Ri(l);var y=a.length;d=d===t?y:Fa(ft(d),0,y);var b=d;return d-=l.length,d>=0&&a.slice(d,b)==l}function U3(a){return a=Ot(a),a&&_t.test(a)?a.replace(Ne,TC):a}function k3(a){return a=Ot(a),a&&Lr.test(a)?a.replace(Gn,"\\$&"):a}var F3=Oo(function(a,l,d){return a+(d?"-":"")+l.toLowerCase()}),B3=Oo(function(a,l,d){return a+(d?" ":"")+l.toLowerCase()}),z3=ix("toLowerCase");function H3(a,l,d){a=Ot(a),l=ft(l);var y=l?Co(a):0;if(!l||y>=l)return a;var b=(l-y)/2;return Rf(gf(b),d)+a+Rf(mf(b),d)}function V3(a,l,d){a=Ot(a),l=ft(l);var y=l?Co(a):0;return l&&y<l?a+Rf(l-y,d):a}function G3(a,l,d){a=Ot(a),l=ft(l);var y=l?Co(a):0;return l&&y<l?Rf(l-y,d)+a:a}function W3(a,l,d){return d||l==null?l=0:l&&(l=+l),ZC(Ot(a).replace(Ir,""),l||0)}function X3(a,l,d){return(d?ni(a,l,d):l===t)?l=1:l=ft(l),Zp(Ot(a),l)}function j3(){var a=arguments,l=Ot(a[0]);return a.length<3?l:l.replace(a[1],a[2])}var Y3=Oo(function(a,l,d){return a+(d?"_":"")+l.toLowerCase()});function $3(a,l,d){return d&&typeof d!="number"&&ni(a,l,d)&&(l=d=t),d=d===t?Me:d>>>0,d?(a=Ot(a),a&&(typeof l=="string"||l!=null&&!xm(l))&&(l=Ri(l),!l&&Ao(a))?Vs(ur(a),0,d):a.split(l,d)):[]}var q3=Oo(function(a,l,d){return a+(d?" ":"")+Em(l)});function K3(a,l,d){return a=Ot(a),d=d==null?0:Fa(ft(d),0,a.length),l=Ri(l),a.slice(d,d+l.length)==l}function Z3(a,l,d){var y=P.templateSettings;d&&ni(a,l,d)&&(l=t),a=Ot(a),l=Hf({},l,y,cx);var b=Hf({},l.imports,y.imports,cx),L=Ln(b),B=Dp(b,L),G,$,de=0,he=l.interpolate||qe,ve="__p += '",Re=Up((l.escape||qe).source+"|"+he.source+"|"+(he===Nt?xp:qe).source+"|"+(l.evaluate||qe).source+"|$","g"),Ge="//# sourceURL="+(kt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++aC+"]")+`
`;a.replace(Re,function(et,Mt,Rt,Li,ii,Ii){return Rt||(Rt=Li),ve+=a.slice(de,Ii).replace(it,bC),Mt&&(G=!0,ve+=`' +
__e(`+Mt+`) +
'`),ii&&($=!0,ve+=`';
`+ii+`;
__p += '`),Rt&&(ve+=`' +
((__t = (`+Rt+`)) == null ? '' : __t) +
'`),de=Ii+et.length,et}),ve+=`';
`;var Je=kt.call(l,"variable")&&l.variable;if(!Je)ve=`with (obj) {
`+ve+`
}
`;else if(_p.test(Je))throw new at(u);ve=($?ve.replace(T,""):ve).replace(Q,"$1").replace(ue,"$1;"),ve="function("+(Je||"obj")+`) {
`+(Je?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+($?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ve+`return __p
}`;var ht=nS(function(){return Dt(L,Ge+"return "+ve).apply(t,B)});if(ht.source=ve,ym(ht))throw ht;return ht}function Q3(a){return Ot(a).toLowerCase()}function J3(a){return Ot(a).toUpperCase()}function eI(a,l,d){if(a=Ot(a),a&&(d||l===t))return fy(a);if(!a||!(l=Ri(l)))return a;var y=ur(a),b=ur(l),L=dy(y,b),B=hy(y,b)+1;return Vs(y,L,B).join("")}function tI(a,l,d){if(a=Ot(a),a&&(d||l===t))return a.slice(0,my(a)+1);if(!a||!(l=Ri(l)))return a;var y=ur(a),b=hy(y,ur(l))+1;return Vs(y,0,b).join("")}function nI(a,l,d){if(a=Ot(a),a&&(d||l===t))return a.replace(Ir,"");if(!a||!(l=Ri(l)))return a;var y=ur(a),b=dy(y,ur(l));return Vs(y,b).join("")}function iI(a,l){var d=w,y=N;if(sn(l)){var b="separator"in l?l.separator:b;d="length"in l?ft(l.length):d,y="omission"in l?Ri(l.omission):y}a=Ot(a);var L=a.length;if(Ao(a)){var B=ur(a);L=B.length}if(d>=L)return a;var G=d-Co(y);if(G<1)return y;var $=B?Vs(B,0,G).join(""):a.slice(0,G);if(b===t)return $+y;if(B&&(G+=$.length-G),xm(b)){if(a.slice(G).search(b)){var de,he=$;for(b.global||(b=Up(b.source,Ot(D.exec(b))+"g")),b.lastIndex=0;de=b.exec(he);)var ve=de.index;$=$.slice(0,ve===t?G:ve)}}else if(a.indexOf(Ri(b),G)!=G){var Re=$.lastIndexOf(b);Re>-1&&($=$.slice(0,Re))}return $+y}function rI(a){return a=Ot(a),a&&St.test(a)?a.replace(Ae,NC):a}var sI=Oo(function(a,l,d){return a+(d?" ":"")+l.toUpperCase()}),Em=ix("toUpperCase");function tS(a,l,d){return a=Ot(a),l=d?t:l,l===t?CC(a)?UC(a):yC(a):a.match(l)||[]}var nS=yt(function(a,l){try{return Ai(a,t,l)}catch(d){return ym(d)?d:new at(d)}}),aI=ns(function(a,l){return Xi(l,function(d){d=Ur(d),es(a,d,vm(a[d],a))}),a});function oI(a){var l=a==null?0:a.length,d=Qe();return a=l?tn(a,function(y){if(typeof y[1]!="function")throw new ji(o);return[d(y[0]),y[1]]}):[],yt(function(y){for(var b=-1;++b<l;){var L=a[b];if(Ai(L[0],this,y))return Ai(L[1],this,y)}})}function lI(a){return NR($i(a,p))}function wm(a){return function(){return a}}function uI(a,l){return a==null||a!==a?l:a}var cI=sx(),fI=sx(!0);function yi(a){return a}function Tm(a){return Oy(typeof a=="function"?a:$i(a,p))}function dI(a){return ky($i(a,p))}function hI(a,l){return Fy(a,$i(l,p))}var pI=yt(function(a,l){return function(d){return xu(d,a,l)}}),mI=yt(function(a,l){return function(d){return xu(a,d,l)}});function bm(a,l,d){var y=Ln(l),b=Mf(l,y);d==null&&!(sn(l)&&(b.length||!y.length))&&(d=l,l=a,a=this,b=Mf(l,Ln(l)));var L=!(sn(d)&&"chain"in d)||!!d.chain,B=rs(a);return Xi(b,function(G){var $=l[G];a[G]=$,B&&(a.prototype[G]=function(){var de=this.__chain__;if(L||de){var he=a(this.__wrapped__),ve=he.__actions__=gi(this.__actions__);return ve.push({func:$,args:arguments,thisArg:a}),he.__chain__=de,he}return $.apply(a,Us([this.value()],arguments))})}),a}function gI(){return Un._===this&&(Un._=VC),this}function Am(){}function vI(a){return a=ft(a),yt(function(l){return By(l,a)})}var _I=rm(tn),yI=rm(ay),xI=rm(Rp);function iS(a){return fm(a)?Pp(Ur(a)):KR(a)}function SI(a){return function(l){return a==null?t:Ba(a,l)}}var MI=ox(),EI=ox(!0);function Cm(){return[]}function Rm(){return!1}function wI(){return{}}function TI(){return""}function bI(){return!0}function AI(a,l){if(a=ft(a),a<1||a>W)return[];var d=Me,y=Xn(a,Me);l=Qe(l),a-=Me;for(var b=Np(y,l);++d<a;)l(d);return b}function CI(a){return lt(a)?tn(a,Ur):Pi(a)?[a]:gi(Ex(Ot(a)))}function RI(a){var l=++zC;return Ot(a)+l}var PI=Cf(function(a,l){return a+l},0),LI=sm("ceil"),II=Cf(function(a,l){return a/l},1),NI=sm("floor");function DI(a){return a&&a.length?Sf(a,yi,Wp):t}function OI(a,l){return a&&a.length?Sf(a,Qe(l,2),Wp):t}function UI(a){return uy(a,yi)}function kI(a,l){return uy(a,Qe(l,2))}function FI(a){return a&&a.length?Sf(a,yi,$p):t}function BI(a,l){return a&&a.length?Sf(a,Qe(l,2),$p):t}var zI=Cf(function(a,l){return a*l},1),HI=sm("round"),VI=Cf(function(a,l){return a-l},0);function GI(a){return a&&a.length?Ip(a,yi):0}function WI(a,l){return a&&a.length?Ip(a,Qe(l,2)):0}return P.after=dL,P.ary=Dx,P.assign=JL,P.assignIn=$x,P.assignInWith=Hf,P.assignWith=e3,P.at=t3,P.before=Ox,P.bind=vm,P.bindAll=aI,P.bindKey=Ux,P.castArray=wL,P.chain=Lx,P.chunk=N2,P.compact=D2,P.concat=O2,P.cond=oI,P.conforms=lI,P.constant=wm,P.countBy=GP,P.create=n3,P.curry=kx,P.curryRight=Fx,P.debounce=Bx,P.defaults=i3,P.defaultsDeep=r3,P.defer=hL,P.delay=pL,P.difference=U2,P.differenceBy=k2,P.differenceWith=F2,P.drop=B2,P.dropRight=z2,P.dropRightWhile=H2,P.dropWhile=V2,P.fill=G2,P.filter=XP,P.flatMap=$P,P.flatMapDeep=qP,P.flatMapDepth=KP,P.flatten=Ax,P.flattenDeep=W2,P.flattenDepth=X2,P.flip=mL,P.flow=cI,P.flowRight=fI,P.fromPairs=j2,P.functions=f3,P.functionsIn=d3,P.groupBy=ZP,P.initial=$2,P.intersection=q2,P.intersectionBy=K2,P.intersectionWith=Z2,P.invert=p3,P.invertBy=m3,P.invokeMap=JP,P.iteratee=Tm,P.keyBy=eL,P.keys=Ln,P.keysIn=_i,P.map=Of,P.mapKeys=v3,P.mapValues=_3,P.matches=dI,P.matchesProperty=hI,P.memoize=kf,P.merge=y3,P.mergeWith=qx,P.method=pI,P.methodOf=mI,P.mixin=bm,P.negate=Ff,P.nthArg=vI,P.omit=x3,P.omitBy=S3,P.once=gL,P.orderBy=tL,P.over=_I,P.overArgs=vL,P.overEvery=yI,P.overSome=xI,P.partial=_m,P.partialRight=zx,P.partition=nL,P.pick=M3,P.pickBy=Kx,P.property=iS,P.propertyOf=SI,P.pull=tP,P.pullAll=Rx,P.pullAllBy=nP,P.pullAllWith=iP,P.pullAt=rP,P.range=MI,P.rangeRight=EI,P.rearg=_L,P.reject=sL,P.remove=sP,P.rest=yL,P.reverse=mm,P.sampleSize=oL,P.set=w3,P.setWith=T3,P.shuffle=lL,P.slice=aP,P.sortBy=fL,P.sortedUniq=hP,P.sortedUniqBy=pP,P.split=$3,P.spread=xL,P.tail=mP,P.take=gP,P.takeRight=vP,P.takeRightWhile=_P,P.takeWhile=yP,P.tap=DP,P.throttle=SL,P.thru=Df,P.toArray=Xx,P.toPairs=Zx,P.toPairsIn=Qx,P.toPath=CI,P.toPlainObject=Yx,P.transform=b3,P.unary=ML,P.union=xP,P.unionBy=SP,P.unionWith=MP,P.uniq=EP,P.uniqBy=wP,P.uniqWith=TP,P.unset=A3,P.unzip=gm,P.unzipWith=Px,P.update=C3,P.updateWith=R3,P.values=Fo,P.valuesIn=P3,P.without=bP,P.words=tS,P.wrap=EL,P.xor=AP,P.xorBy=CP,P.xorWith=RP,P.zip=PP,P.zipObject=LP,P.zipObjectDeep=IP,P.zipWith=NP,P.entries=Zx,P.entriesIn=Qx,P.extend=$x,P.extendWith=Hf,bm(P,P),P.add=PI,P.attempt=nS,P.camelCase=D3,P.capitalize=Jx,P.ceil=LI,P.clamp=L3,P.clone=TL,P.cloneDeep=AL,P.cloneDeepWith=CL,P.cloneWith=bL,P.conformsTo=RL,P.deburr=eS,P.defaultTo=uI,P.divide=II,P.endsWith=O3,P.eq=fr,P.escape=U3,P.escapeRegExp=k3,P.every=WP,P.find=jP,P.findIndex=Tx,P.findKey=s3,P.findLast=YP,P.findLastIndex=bx,P.findLastKey=a3,P.floor=NI,P.forEach=Ix,P.forEachRight=Nx,P.forIn=o3,P.forInRight=l3,P.forOwn=u3,P.forOwnRight=c3,P.get=Sm,P.gt=PL,P.gte=LL,P.has=h3,P.hasIn=Mm,P.head=Cx,P.identity=yi,P.includes=QP,P.indexOf=Y2,P.inRange=I3,P.invoke=g3,P.isArguments=Va,P.isArray=lt,P.isArrayBuffer=IL,P.isArrayLike=vi,P.isArrayLikeObject=vn,P.isBoolean=NL,P.isBuffer=Gs,P.isDate=DL,P.isElement=OL,P.isEmpty=UL,P.isEqual=kL,P.isEqualWith=FL,P.isError=ym,P.isFinite=BL,P.isFunction=rs,P.isInteger=Hx,P.isLength=Bf,P.isMap=Vx,P.isMatch=zL,P.isMatchWith=HL,P.isNaN=VL,P.isNative=GL,P.isNil=XL,P.isNull=WL,P.isNumber=Gx,P.isObject=sn,P.isObjectLike=dn,P.isPlainObject=bu,P.isRegExp=xm,P.isSafeInteger=jL,P.isSet=Wx,P.isString=zf,P.isSymbol=Pi,P.isTypedArray=ko,P.isUndefined=YL,P.isWeakMap=$L,P.isWeakSet=qL,P.join=Q2,P.kebabCase=F3,P.last=Ki,P.lastIndexOf=J2,P.lowerCase=B3,P.lowerFirst=z3,P.lt=KL,P.lte=ZL,P.max=DI,P.maxBy=OI,P.mean=UI,P.meanBy=kI,P.min=FI,P.minBy=BI,P.stubArray=Cm,P.stubFalse=Rm,P.stubObject=wI,P.stubString=TI,P.stubTrue=bI,P.multiply=zI,P.nth=eP,P.noConflict=gI,P.noop=Am,P.now=Uf,P.pad=H3,P.padEnd=V3,P.padStart=G3,P.parseInt=W3,P.random=N3,P.reduce=iL,P.reduceRight=rL,P.repeat=X3,P.replace=j3,P.result=E3,P.round=HI,P.runInContext=j,P.sample=aL,P.size=uL,P.snakeCase=Y3,P.some=cL,P.sortedIndex=oP,P.sortedIndexBy=lP,P.sortedIndexOf=uP,P.sortedLastIndex=cP,P.sortedLastIndexBy=fP,P.sortedLastIndexOf=dP,P.startCase=q3,P.startsWith=K3,P.subtract=VI,P.sum=GI,P.sumBy=WI,P.template=Z3,P.times=AI,P.toFinite=ss,P.toInteger=ft,P.toLength=jx,P.toLower=Q3,P.toNumber=Zi,P.toSafeInteger=QL,P.toString=Ot,P.toUpper=J3,P.trim=eI,P.trimEnd=tI,P.trimStart=nI,P.truncate=iI,P.unescape=rI,P.uniqueId=RI,P.upperCase=sI,P.upperFirst=Em,P.each=Ix,P.eachRight=Nx,P.first=Cx,bm(P,function(){var a={};return Dr(P,function(l,d){kt.call(P.prototype,d)||(a[d]=l)}),a}(),{chain:!1}),P.VERSION=i,Xi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){P[a].placeholder=P}),Xi(["drop","take"],function(a,l){wt.prototype[a]=function(d){d=d===t?1:wn(ft(d),0);var y=this.__filtered__&&!l?new wt(this):this.clone();return y.__filtered__?y.__takeCount__=Xn(d,y.__takeCount__):y.__views__.push({size:Xn(d,Me),type:a+(y.__dir__<0?"Right":"")}),y},wt.prototype[a+"Right"]=function(d){return this.reverse()[a](d).reverse()}}),Xi(["filter","map","takeWhile"],function(a,l){var d=l+1,y=d==ae||d==me;wt.prototype[a]=function(b){var L=this.clone();return L.__iteratees__.push({iteratee:Qe(b,3),type:d}),L.__filtered__=L.__filtered__||y,L}}),Xi(["head","last"],function(a,l){var d="take"+(l?"Right":"");wt.prototype[a]=function(){return this[d](1).value()[0]}}),Xi(["initial","tail"],function(a,l){var d="drop"+(l?"":"Right");wt.prototype[a]=function(){return this.__filtered__?new wt(this):this[d](1)}}),wt.prototype.compact=function(){return this.filter(yi)},wt.prototype.find=function(a){return this.filter(a).head()},wt.prototype.findLast=function(a){return this.reverse().find(a)},wt.prototype.invokeMap=yt(function(a,l){return typeof a=="function"?new wt(this):this.map(function(d){return xu(d,a,l)})}),wt.prototype.reject=function(a){return this.filter(Ff(Qe(a)))},wt.prototype.slice=function(a,l){a=ft(a);var d=this;return d.__filtered__&&(a>0||l<0)?new wt(d):(a<0?d=d.takeRight(-a):a&&(d=d.drop(a)),l!==t&&(l=ft(l),d=l<0?d.dropRight(-l):d.take(l-a)),d)},wt.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},wt.prototype.toArray=function(){return this.take(Me)},Dr(wt.prototype,function(a,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),y=/^(?:head|last)$/.test(l),b=P[y?"take"+(l=="last"?"Right":""):l],L=y||/^find/.test(l);b&&(P.prototype[l]=function(){var B=this.__wrapped__,G=y?[1]:arguments,$=B instanceof wt,de=G[0],he=$||lt(B),ve=function(Mt){var Rt=b.apply(P,Us([Mt],G));return y&&Re?Rt[0]:Rt};he&&d&&typeof de=="function"&&de.length!=1&&($=he=!1);var Re=this.__chain__,Ge=!!this.__actions__.length,Je=L&&!Re,ht=$&&!Ge;if(!L&&he){B=ht?B:new wt(this);var et=a.apply(B,G);return et.__actions__.push({func:Df,args:[ve],thisArg:t}),new Yi(et,Re)}return Je&&ht?a.apply(this,G):(et=this.thru(ve),Je?y?et.value()[0]:et.value():et)})}),Xi(["pop","push","shift","sort","splice","unshift"],function(a){var l=af[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",y=/^(?:pop|shift)$/.test(a);P.prototype[a]=function(){var b=arguments;if(y&&!this.__chain__){var L=this.value();return l.apply(lt(L)?L:[],b)}return this[d](function(B){return l.apply(lt(B)?B:[],b)})}}),Dr(wt.prototype,function(a,l){var d=P[l];if(d){var y=d.name+"";kt.call(Io,y)||(Io[y]=[]),Io[y].push({name:l,func:d})}}),Io[Af(t,g).name]=[{name:"wrapper",func:t}],wt.prototype.clone=rR,wt.prototype.reverse=sR,wt.prototype.value=aR,P.prototype.at=OP,P.prototype.chain=UP,P.prototype.commit=kP,P.prototype.next=FP,P.prototype.plant=zP,P.prototype.reverse=HP,P.prototype.toJSON=P.prototype.valueOf=P.prototype.value=VP,P.prototype.first=P.prototype.head,hu&&(P.prototype[hu]=BP),P},Ro=kC();Da?((Da.exports=Ro)._=Ro,Tp._=Ro):Un._=Ro}).call(Au)})(Hh,Hh.exports);var x0=Hh.exports;const k6=S0(x0);function F6(n){const e=[],t=["year1.sp2","year1.sp5","year2.sp2","year2.sp5","year3.sp2","year3.sp5"];for(let i of t){let r=k6.get(n,i+".course",[]);for(let s of r)e.push(s)}return e}function Kt(n,e){let t=new Set;for(let i=0;i<e.length;i++){let r=e[i];if(r.prerequisites&&Array.isArray(r.prerequisites.prerequisite))for(let s of r.prerequisites.prerequisite)s.id===n&&(t.add(i+1),Kt(r.id,e).forEach(u=>t.add(u)))}return t}const B6=()=>{const n=be.useRef(),[e,t]=be.useState(null),i=be.useRef(),[r,s]=be.useState(null),[o]=yU(),u=o.get("program")||"lbvt",[c,f]=be.useState(null);be.useEffect(()=>{(async()=>{try{const w=await wU(Object.assign({"../assets/iboe.json":()=>M1(()=>import("./iboe-B6_hO7FO.js"),[]),"../assets/lbvt.json":()=>M1(()=>import("./lbvt-CMo7DBo4.js"),[])}),`../assets/${u}.json`);s(w.default);let N=null;w.default&&(N=w.default.repository.program.courses);const V=F6(N);f(V)}catch(w){console.error("Something wrong with my website folder:",w)}})()},[u]),be.useEffect(()=>{if(!c)return;console.log(c);var A,w,N;A=new Q5,A.background=new tt(0),w=new ui(75,window.innerWidth/window.innerHeight,.1,1e3),N=new Z5,w.position.x=8,w.position.y=20,w.position.z=60,w.rotation.x=-Math.PI/6,t(w);const V=new b_({color:3800852}),k=new or;let ae=new dp(k,V);A.add(ae);const Z=(Ce,fe,$e)=>{$e.forEach(le=>{const we=fe[`building_${le}`];we&&we.traverse(function(H){}),console.log("here")})},me=new CH(16777215,4);A.add(me),N.setSize(window.innerWidth,window.innerHeight),n.current.appendChild(N.domElement);const ge=new O6(N),W=new U6(A,w);ge.addPass(W);const K=new da(new He(window.innerWidth,window.innerHeight),A,w);K.visibleEdgeColor.set("#39FF14"),K.hiddenEdgeColor.set("#39FF14"),K.edgeThickness=2,ge.addPass(K),i.current=new C6(w,N.domElement),i.current.target.set(5,i.current.target.y,25),i.current.update(),i.current.minPolarAngle=Math.PI/6,i.current.maxPolarAngle=Math.PI/2,i.current.enablePan=!0,i.current.screenSpacePanning=!1,i.current.addEventListener("change",()=>{t({...w})});const Y={};new HH().load(`/models/${u}.glb`,function(Ce){Ce.scene.traverse(function(fe){fe.name.startsWith("building")&&(Y[fe.name]=fe)}),A.add(Ce.scene)});const ze=function(){requestAnimationFrame(ze),ge.render()};ze();const gt=new zH,se=new He;function xe(Ce){if(Ce.target==null)return;se.x=Ce.clientX/window.innerWidth*2-1,se.y=-(Ce.clientY/window.innerHeight)*2+1,gt.setFromCamera(se,w);let fe;const $e=gt.intersectObjects(A.children,!0);if($e.length>0){let H=$e[0].object;for(;H;){if(/^building_\d+$/.test(H.name)){K.selectedObjects=[H],fe=H;break}else if(H.name==="elective_lbvt"){K.selectedObjects=[H],fe=H;break}else if(H.name==="alumni_lbvt"){K.selectedObjects=[H],fe=H;break}else if(H.name==="industry_lbvt"){K.selectedObjects=[H],fe=H;break}else if(H.name==="great_hall"){K.selectedObjects=[H],fe=H;break}else K.selectedObjects=[];H=H.parent}}let le,we;if(fe)switch(fe.name){case"building_1":le=Kt(c[0].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[0].id,c),Z(fe,Y,le),g(c,we,c[0].id);break;case"building_2":le=Kt(c[1].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[1].id,c),Z(fe,Y,le),g(c,we,c[1].id);break;case"building_3":le=Kt(c[2].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[2].id,c),Z(fe,Y,le),g(c,we,c[2].id);break;case"building_4":console.log(c[3].id),le=Kt(c[3].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[3].id,c),Z(fe,Y,le),g(c,we,c[3].id);break;case"building_5":le=Kt(c[4].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[4].id,c),Z(fe,Y,le),g(c,we,c[4].id);break;case"building_6":le=Kt(c[5].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[5].id,c),Z(fe,Y,le),g(c,we,c[5].id);break;case"building_7":le=Kt(c[6].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[6].id,c),Z(fe,Y,le),g(c,we,c[6].id);break;case"building_8":le=Kt(c[7].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[7].id,c),Z(fe,Y,le),g(c,we,c[7].id);break;case"building_9":le=Kt(c[8].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[8].id,c),Z(fe,Y,le),g(c,we,c[8].id);break;case"building_10":le=Kt(c[9].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[9].id,c),Z(fe,Y,le),g(c,we,c[9].id);break;case"building_11":le=Kt(c[10].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[10].id,c),Z(fe,Y,le),g(c,we,c[10].id);break;case"building_12":le=Kt(c[11].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[11].id,c),Z(fe,Y,le),g(c,we,c[11].id);break;case"building_13":le=Kt(c[12].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[12].id,c),Z(fe,Y,le),g(c,we,c[12].id);break;case"building_14":le=Kt(c[13].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[13].id,c),Z(fe,Y,le),g(c,we,c[13].id);break;case"building_15":le=Kt(c[14].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[14].id,c),Z(fe,Y,le),g(c,we,c[14].id);break;case"building_16":le=Kt(c[15].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[15].id,c),Z(fe,Y,le),g(c,we,c[15].id);break;case"building_17":le=Kt(c[16].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[16].id,c),Z(fe,Y,le),g(c,we,c[16].id);break;case"building_18":le=Kt(c[17].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[17].id,c),Z(fe,Y,le),g(c,we,c[17].id);break;case"building_19":le=Kt(c[18].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[18].id,c),Z(fe,Y,le),g(c,we,c[18].id);break;case"building_20":le=Kt(c[19].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[19].id,c),Z(fe,Y,le),g(c,we,c[19].id);break;case"building_21":le=Kt(c[20].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[20].id,c),Z(fe,Y,le),g(c,we,c[20].id);break;case"building_22":le=Kt(c[21].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[21].id,c),Z(fe,Y,le),g(c,we,c[21].id);break;case"building_23":le=Kt(c[22].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[22].id,c),Z(fe,Y,le),g(c,we,c[22].id);break;case"building_24":le=Kt(c[23].id,c),le.forEach(H=>{const ne=Y[`building_${H}`];ne&&(ne.traverse(function(ye){ye.fog=!1}),K.selectedObjects.push(ne))}),we=z(c[23].id,c),Z(fe,Y,le),g(c,we,c[23].id);break;case"elective_lbvt":x();break;case"alumni_lbvt":U();break;case"industry_lbvt":O();break;case"great_hall":I();break;default:K.selectedObjects=[];break}}return window.addEventListener("click",xe),()=>{window.removeEventListener("click",xe)}},[c]),be.useEffect(()=>{e&&i.current&&(i.current.object.position.copy(e.position),i.current.update())},[e]);const h=()=>{e&&(e.position.x+=1,i.current.target.x+=1,i.current.update())},p=()=>{e&&(e.position.x-=1,i.current.target.x-=1,i.current.update())},m=()=>{e&&(e.position.z-=1,i.current.target.z-=1,i.current.update())},v=()=>{e&&(e.position.z+=1,i.current.target.z+=1,i.current.update())},S=()=>{i.current&&(i.current.reset(),e.position.x=8,e.position.y=20,e.position.z=60,e.rotation.x=-Math.PI/6,i.current.target.set(5,i.current.target.y,25),i.current.update())},E=()=>{},_=()=>{};function g(A,w,N){const V=A.find(Z=>Z.id===N);if(console.log(w),V.id!=null){var k=window.open("","_blank","width=700, height=600");k.document.write("<html><head><title>"+V.name+"</title>"),k.document.write("<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;}"),k.document.write("h2{ color: blue; font-size: 24px; font-weight: bold; line-height:1.25;} h3{ color: blue; font-size: 18px; font-weight: bold; line-height:1.25;} p{color:black; font-size: 14px; line-height:1.5;}"),k.document.write("a:visited { color: blue } a:hover { color: lightseagreen } a:active { color: gray } a:link {color: blue;} </style>"),k.document.write("</head><body>"),k.document.write("<div class ='container'>"),k.document.write("<h2><a href="+V.url+' target="_blank" rel="noopener noreferrer">'+V.name+"</a></h2>"),k.document.write("<p>Course ID: "+V.id+"</p>"),k.document.write("<h3>Course aim</h3>"),V.courseAim!=""?k.document.write("<p>"+V.courseAim+"</p>"):k.document.write("<p>N/A</p>"),k.document.write("<h3>Course content</h3>"),V.courseContent!=""?k.document.write("<p>"+V.courseContent+"</p>"):k.document.write("<p>N/A</p>"),k.document.write("<h3>Textbook(s)</h3>"),V.textbook!=""?k.document.write("<p>"+V.textbook+"</p>"):k.document.write("<p>N/A</p>"),k.document.write("<h3>Prerequisite(s)</h3>");for(let me=0;me<V.prerequisites.prerequisite.length;me++)if(V.prerequisites.prerequisite[0].id){var ae=M(V.prerequisites.prerequisite[me].id);k.document.write("<p>"+ae.id+" <a href="+ae.url+' target="_blank" rel="noopener noreferrer">'+ae.name+"</a></p>")}else k.document.write("<p>N/A </p>");let Z="";if(console.log(x0.size(w)),x0.size(w)>0){for(let me of w)Z+="<br>"+me.id+" <a href="+me.url+' target="_blank" rel="noopener noreferrer">'+me.name+"</a> ";Z.length>0&&k.document.write("<p>"+V.name+" is a prerequisite to learn "+Z+"</p>")}k.document.write("<h3>Assessment(s)</h3>"),V.assessment!=""?k.document.write("<p>"+V.assessment+"</p>"):k.document.write("<p>N/A</p>"),k.document.write("<h3>Course coordinator(s)</h3>");for(let me of V.courseCoordinators.courseCoordinator)me.name!=null?k.document.write("<p><a href="+me.url+' target="_blank" rel="noopener noreferrer">'+me.name+"</a></p>"):k.document.write("<p>N/A</p>");V.notes.note&&(k.document.write("<h3>Note(s)</h3>"),k.document.write("<p>"+V.notes.note+"</p>")),V.rules.rule&&(k.document.write("<h3>Rule(s)</h3>"),k.document.write("<p>"+V.rules.rule+"</p>")),k.document.write("</div>"),k.document.write("</div>"),k.document.write("</body></html>")}V.notes.note!=null&&k.document.write("<p>Note: "+V.notes.note+"</p>"),V.rules.rule!=null&&k.document.write("<p>Rule: "+V.rules.rule+"</p>"),k.document.write("</div>"),k.document.write("</body></html>")}function M(A){const w=r.repository.program.courses;for(let N=0;N<w.year1.sp2.course.length;N++)if(w.year1.sp2.course[N].id===A)return w.year1.sp2.course[N];for(let N=0;N<w.year1.sp5.course.length;N++)if(w.year1.sp5.course[N].id===A)return w.year1.sp5.course[N];for(let N=0;N<w.year2.sp2.course.length;N++)if(w.year2.sp2.course[N].id===A)return w.year2.sp2.course[N];for(let N=0;N<w.year2.sp5.course.length;N++)if(w.year2.sp5.course[N].id===A)return w.year2.sp5.course[N];for(let N=0;N<w.year3.sp2.course.length;N++)if(w.year3.sp2.course[N].id===A)return w.year3.sp2.course[N];for(let N=0;N<w.year3.sp5.course.length;N++)if(w.year3.sp5.course[N].id===A)return w.year3.sp5.course[N];return null}function x(){const A=r.repository.assistances.elective;var w=A.electiveCourses.undergraduate;console.log(A.electiveCourses);var N=window.open("","_blank","width=700, height=600");if(N.document.write("<html><head><title>Electives</title>"),N.document.write("<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;}"),N.document.write(".electives{margin-top: 20px;margin-left: 50px; } .subHeader{margin-top: 20px;}"),N.document.write("h2{ color: blue; font-size: 24px; font-weight: bold; line-height:1.25;} h3{ color: blue; font-size: 18px; font-weight: bold; line-height:1.25;} p{color:black; font-size: 14px; line-height:1.5;}"),N.document.write("a:visited { color: blue } a:hover { color: lightseagreen } a:active { color: gray } a:link {color: blue;} </style>"),N.document.write("</head><body>"),N.document.write("<div class ='container'>"),N.document.write("<h2>Electives</h2>"),N.document.write("<p>You can find the courses' information for electives.</p>"),N.document.write("<hr>"),"environmental"in A.electiveCourses){N.document.write("<div id='undergraduate'>"),N.document.write("<h3><a href="+w.course.url+' target="_blank" rel="noopener noreferrer">Undergraduate elective</a></h3>'),N.document.write("<p>"+w.course.notes.note+"</p>"),N.document.write("<hr>"),N.document.write("</div>");var V=A.electiveCourses.environmental;N.document.write("<div class='environmental'>"),N.document.write("<h3><a href="+V.url+' target="_blank" rel="noopener noreferrer">Environment electives</a></h3>'),N.document.write("<p>Note: "+V.notes.note+"</p>"),N.document.write("<p>Rule: "+V.rules.rule+"</p>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3>Intermediate Elective</h3>"),N.document.write("</div>"),N.document.write("<div class ='electives' display: block;>"),C(N,V.intermediate),N.document.write("</div>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3>Advanced Elective</h3>"),N.document.write("</div>"),N.document.write("<div class='electives' display: block;>"),C(N,V.advanced),N.document.write("</div>"),N.document.write("</div>")}else if("CommunityEngagementAndSustainability"in A.electiveCourses){const k=A.electiveCourses;if(N.document.write("<h3>Rule(s)</h3>"),A.rules.rule[0]!=null)for(let ae=0;ae<A.rules.rule.length;ae++)N.document.write("<p>Rule"+(ae+1)+": "+A.rules.rule[ae]+"</p>");N.document.write("<hr>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3><a href="+A.url+'target="_blank" rel="noopener noreferrer">Community Engagement and Sustainability</a></h3>'),N.document.write("</div>"),N.document.write("<div class ='electives' display: block;>"),C(N,k.CommunityEngagementAndSustainability),N.document.write("</div>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3><a href="+A.url+'target="_blank" rel="noopener noreferrer">Management</a></h3>'),N.document.write("</div>"),N.document.write("<div class ='electives' display: block;>"),C(N,k.Management),N.document.write("</div>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3><a href="+A.url+'target="_blank" rel="noopener noreferrer">Counseling and Interpersonal Skills</a></h3>'),N.document.write("</div>"),N.document.write("<div class ='electives' display: block;>"),C(N,k.CounselingAndInterpersonalSkills),N.document.write("</div>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3><a href="+A.url+'target="_blank" rel="noopener noreferrer">Aboriginal Cultures</a></h3>'),N.document.write("</div>"),N.document.write("<div class ='electives' display: block;>"),C(N,k.AboriginalCultures),N.document.write("</div>"),N.document.write("<div class='subHeader'>"),N.document.write("<h3><a href="+A.url+'target="_blank" rel="noopener noreferrer">Biology for Education</a></h3>'),N.document.write("</div>"),N.document.write("<div class ='electives' display: block;>"),C(N,k.BiologyForEducation),N.document.write("</div>")}N.document.write("</div>"),N.document.write("</div>"),N.document.write("</body></html>")}function C(A,w){for(let V=0;V<w.course.length;V++){A.document.write("<h3><a href="+w.course[V].url+' target="_blank" rel="noopener noreferrer">'+w.course[V].name+"</a></h3>"),A.document.write("<p>course ID: "+w.course[V].id+"</p>"),A.document.write("<h3>Course aim</h3>"),w.course[V].courseAim!=""?A.document.write("<p>"+w.course[V].courseAim+"</p>"):A.document.write("<p>N/A</p>"),A.document.write("<h3>Course content</h3>"),w.course[V].courseContent!=""?A.document.write("<p>"+w.course[V].courseContent+"</p>"):A.document.write("<p>N/A</p>"),A.document.write("<h3>Textbook(s)</h3>"),w.course[V].textbook!=""?A.document.write("<p>"+w.course[V].textbook+"</p>"):A.document.write("<p>N/A</p>"),A.document.write("<h3>Prerequisite(s)</h3>");for(let k=0;k<w.course[V].prerequisites.prerequisite.length;k++)if(w.course[V].prerequisites.prerequisite[k].id!=null){var N=M(w.course[V].prerequisites.prerequisite[k].id);N!=null?A.document.write("<p> "+N.id+" <a href="+N.url+' target="_blank" rel="noopener noreferrer">'+N.name+"</a></p>"):A.document.write("<p>N/A</p>")}else A.document.write("<p>N/A</p>");if(A.document.write("<h3>Assessment(s)</h3>"),w.course[V].assessment!=""?A.document.write("<p>"+w.course[V].assessment+"</p>"):A.document.write("<p>N/A</p>"),A.document.write("<h3>Course coordinator(s)</h3>"),w.course[V].courseCoordinators.courseCoordinator.length>1)for(let k=0;k<w.course[V].courseCoordinators.courseCoordinator.length;k++)A.document.write("<p><a href="+w.course[V].courseCoordinators.courseCoordinator[k].url+' target="_blank" rel="noopener noreferrer">'+w.course[V].courseCoordinators.courseCoordinator[k].name+"</a></p>");else A.document.write("<p><a href="+w.course[V].courseCoordinators.courseCoordinator[0].url+' target="_blank" rel="noopener noreferrer">'+w.course[V].courseCoordinators.courseCoordinator[0].name+"</a></p>");w.course[V].notes.note&&(A.document.write("<h3>Note(s)</h3>"),A.document.write("<p>"+w.course[V].notes.note+"</p>")),w.course[V].rules.rule&&(A.document.write("<h3>Rule(s)</h3>"),A.document.write("<p>"+w.course[V].rules.rule+"</p>")),A.document.write("<hr>")}}function U(){const A=r.repository.alumnus,w=A.alumni[0].url;var N=window.open("","_blank","width=600, height=400");if(N.document.write("<html><head><title>Alumni</title>"),N.document.write("<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;}"),N.document.write("h2{ color: blue; font-size: 24px; font-weight: bold; line-height:1.25;} h3{ color: blue; font-size: 18px; font-weight: bold; line-height:1.25;} p{color:black; font-size: 14px; line-height:1.5;}"),N.document.write("a:visited { color: blue } a:hover { color: lightseagreen } a:active { color: gray } a:link {color: blue;} </style>"),N.document.write("</head><body>"),N.document.write("<div class ='container'>"),N.document.write("<h2><a href="+w+' target="_blank" rel="noopener noreferrer">Alumni</a></h2>'),"alumni"in A)for(let V=0;V<A.alumni.length;V++)N.document.write("<p><a href="+A.alumni[V].url+' target="_blank" rel="noopener noreferrer">'+A.alumni[V].name+"</a></p>");else N.document.write("<p>Oops, There is no data for Alumni.<p/>");N.document.write("</div>"),N.document.write("</body></html>")}function O(){const A=r.repository.industries,w=A.partner[0].url,N=A.partner[1].url;var V=window.open("","_blank","width=600, height=800");if(V.document.write("<html><head><title>Industry</title>"),V.document.write("<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;}"),V.document.write("h2{ color: blue; font-size: 24px; font-weight: bold; line-height:1.25;} h3{ color: blue; font-size: 18px; font-weight: bold; line-height:1.25;} p{color:black; font-size: 14px; line-height:1.5;}"),V.document.write(".Partner{ margin-top: 20px;margin-left: 50px; } .Associations{margin-top: 20px;margin-left: 50px;}"),V.document.write("a:visited { color: blue } a:hover { color: lightseagreen } a:active { color: gray } a:link {color: blue;} </style>"),V.document.write("</head><body>"),V.document.write("<div class ='container'>"),V.document.write("<h2><a href="+w+' target="_blank" rel="noopener noreferrer">Industry</a></h2>'),V.document.write("<p>You can check partner companies from list below.</p>"),"partner"in A){V.document.write("<h3><a href="+N+' target="_blank" rel="noopener noreferrer">Partner companies</a></h3>'),V.document.write("<div class = Partner>");for(let k=2;k<A.partner.length;k++)A.partner[k].url!=null?V.document.write("<p><a href="+A.partner[k].url+' target="_blank" rel="noopener noreferrer">'+A.partner[k].name+"</a></p>"):V.document.write("<p>"+A.partner[k].name+"</p>");V.document.write("</div>")}else V.document.write("<p>Oops, There is no data for Industry.<p/>");if("associations"in A){if(A.associations.association[0].name!=null){V.document.write("<h3>Related associations</h3>"),V.document.write("<div class = Associations>");for(let k=0;k<A.associations.association.length;k++)A.associations.association[k].url!=null?V.document.write("<p><a href="+A.associations.association[k].url+' target="_blank" rel="noopener noreferrer">'+A.associations.association[k].name+"</a></p>"):V.document.write("<p>"+A.associations.association[k].name+"</p>")}V.document.write("</div>")}V.document.write("</div>"),V.document.write("</body></html>")}function I(){console.log(r);const A=r.repository.welcome;var w=window.open("","_blank","width=750, height=600");if(w.document.write('<html><head><title>Welcome</title><meta http-equiv="Permissions-Policy" content="*">'),w.document.write("<style>.container{ border: 2px solid #000; padding: 10px;border-radius: 5px;background-color: #fff;margin-top: 100px;margin-left: 50px;position: relative;justify-content: center;}"),w.document.write("h2{ color: blue; font-size: 24px; font-weight: bold; line-height:1.25;} h3{ color: blue; font-size: 18px; font-weight: bold; line-height:1.25;} p{color:black; font-size: 14px; line-height:1.5;}"),w.document.write(".Videos{ margin-top: 20px; margin-left: 50px;}"),w.document.write("a:visited { color: blue } a:hover { color: lightseagreen } a:active { color: gray } a:link {color: blue;} </style>"),w.document.write("</head><body>"),w.document.write("<div class ='container'>"),w.document.write("<h2>Welcome to "+A.name+"</h2>"),w.document.write("<p>You can check videos that are related to the program.</p>"),w.document.write("<h3>Video</h3>"),w.document.write("<div class ='Videos'>"),"videos"in A)for(let N=0;N<A.videos.video.length;N++)w.document.write("<p>"+A.videos.video[N].name+"</p>"),w.document.write('<iframe width="560" height="315" src="'+A.videos.video[N].embd+'" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');else w.document.write("<p>Oops, There is no data for video to display.</p>");w.document.write("</div>"),w.document.write("</div>"),w.document.write("</body></html>")}function z(A,w){let N=new Set;for(let V=0;V<w.length;V++){for(let k of w)if(k.prerequisites&&Array.isArray(k.prerequisites.prerequisite))for(let ae of k.prerequisites.prerequisite)ae.id===A&&(N.add(k),z(k.id,w).forEach(me=>N.add(me)));return N}}return De.jsxs("div",{children:[De.jsx("div",{ref:n,className:"ref",style:{position:"fixed",zIndex:-1}}),De.jsxs("div",{className:"control-panel-container",children:[e&&De.jsx(R6,{camera:e,setCamera:t}),De.jsx(b6,{moveCameraLeft:p,moveCameraRight:h,moveCameraTop:m,moveCameraBottom:v,resetCamera:S,rotateCameraLeft:E,rotateCameraRight:_})]})]})},z6=()=>De.jsxs("div",{id:"Help",className:"container",children:[De.jsx("h2",{className:"mt-3 mb-3",children:"Help"}),De.jsx("h3",{className:"mb-3",children:"How to use the system"}),De.jsxs("p",{children:["  To move your location, hold your right click down then move your mouse.",De.jsx("br",{}),"  or click arrow buttons which are right middle of the screen."]}),De.jsx("br",{}),De.jsxs("p",{children:["  To move your camera, hold your left click down then move your mouse.",De.jsx("br",{}),"  Or slide a +/- bar which are right middle of the screen to modifying the height"]}),De.jsx("br",{}),De.jsx("p",{children:"  To reset camera, click the circle button which is on right bottom corner."}),De.jsx("br",{}),De.jsx("p",{children:"  To zoom in, scrolling up your mouse and scrolling down for zoom out."}),De.jsx("br",{}),De.jsx("p",{children:"  When you click the building, the related information will be popped up."}),De.jsx("br",{}),De.jsx("h3",{className:"mt-3 mb-3",children:"Q&A"}),De.jsxs("p",{children:["  Q. How I can check the map?",De.jsx("br",{}),"  A. You can access from ",De.jsx(ac,{to:"/?program=lbvt",id:"link",className:({isActive:n})=>n?"text-blue-500":"text-black",children:"here"}),"."]}),De.jsx("br",{}),De.jsxs("p",{children:["  Q. How I can find the course information?",De.jsx("br",{}),"  A. You need to click the related course building in the map."]}),De.jsx("br",{}),De.jsxs("p",{children:["  Q. Can I check the course page on the Uni SA website?",De.jsx("br",{}),"  A. You can find a link when you click the building in the map."]}),De.jsx("br",{}),De.jsxs("p",{children:["  Q. Can I change the program for the roadmap?",De.jsx("br",{}),"  A. Currently, you can change ",De.jsx(ac,{to:"/?program=lbvt",id:"link",className:({isActive:n})=>n?"text-blue-500":"text-black",children:"LBVT"})," or ",De.jsx(ac,{to:"/?program=iboe",className:({isActive:n})=>n?"text-blue-500":"text-black",children:"IBOE"})," program.",De.jsx("br",{}),'    To change the road map, click the link above or enter "?program=lbvt" or "?program=iboe" after the localhost::XXXX.']})]}),H6=()=>De.jsx("main",{className:"bg-slate-300/20",children:De.jsxs(hU,{children:[De.jsx(SU,{}),De.jsxs(rU,{children:[De.jsx(Gv,{path:"/",element:De.jsx(B6,{})}),De.jsx(Gv,{path:"/Help",element:De.jsx(z6,{})})]})]})});$g.createRoot(document.getElementById("root")).render(De.jsx(H6,{}));
