(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function p(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(u){if(u.ep)return;u.ep=!0;const m=p(u);fetch(u.href,m)}})();function vg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hs={exports:{}},Hl={};var lp;function bg(){if(lp)return Hl;lp=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function p(c,u,m){var h=null;if(m!==void 0&&(h=""+m),u.key!==void 0&&(h=""+u.key),"key"in u){m={};for(var v in u)v!=="key"&&(m[v]=u[v])}else m=u;return u=m.ref,{$$typeof:r,type:c,key:h,ref:u!==void 0?u:null,props:m}}return Hl.Fragment=d,Hl.jsx=p,Hl.jsxs=p,Hl}var np;function yg(){return np||(np=1,Hs.exports=bg()),Hs.exports}var n=yg(),Ls={exports:{}},ne={};var op;function zg(){if(op)return ne;op=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),_=Symbol.iterator;function B(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,U={};function V(w,D,q){this.props=w,this.context=D,this.refs=U,this.updater=q||L}V.prototype.isReactComponent={},V.prototype.setState=function(w,D){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,D,"setState")},V.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function P(){}P.prototype=V.prototype;function J(w,D,q){this.props=w,this.context=D,this.refs=U,this.updater=q||L}var pe=J.prototype=new P;pe.constructor=J,H(pe,V.prototype),pe.isPureReactComponent=!0;var ze=Array.isArray;function ce(){}var ee={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function Ae(w,D,q){var Q=q.ref;return{$$typeof:r,type:w,key:D,ref:Q!==void 0?Q:null,props:q}}function Ze(w,D){return Ae(w.type,D,w.props)}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function G(w){var D={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(q){return D[q]})}var re=/\/+/g;function $(w,D){return typeof w=="object"&&w!==null&&w.key!=null?G(""+w.key):D.toString(36)}function ue(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ce,ce):(w.status="pending",w.then(function(D){w.status==="pending"&&(w.status="fulfilled",w.value=D)},function(D){w.status==="pending"&&(w.status="rejected",w.reason=D)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function C(w,D,q,Q,I){var ae=typeof w;(ae==="undefined"||ae==="boolean")&&(w=null);var ie=!1;if(w===null)ie=!0;else switch(ae){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(w.$$typeof){case r:case d:ie=!0;break;case S:return ie=w._init,C(ie(w._payload),D,q,Q,I)}}if(ie)return I=I(w),ie=Q===""?"."+$(w,0):Q,ze(I)?(q="",ie!=null&&(q=ie.replace(re,"$&/")+"/"),C(I,D,q,"",function(nt){return nt})):I!=null&&(Z(I)&&(I=Ze(I,q+(I.key==null||w&&w.key===I.key?"":(""+I.key).replace(re,"$&/")+"/")+ie)),D.push(I)),1;ie=0;var ve=Q===""?".":Q+":";if(ze(w))for(var be=0;be<w.length;be++)Q=w[be],ae=ve+$(Q,be),ie+=C(Q,D,q,ae,I);else if(be=B(w),typeof be=="function")for(w=be.call(w),be=0;!(Q=w.next()).done;)Q=Q.value,ae=ve+$(Q,be++),ie+=C(Q,D,q,ae,I);else if(ae==="object"){if(typeof w.then=="function")return C(ue(w),D,q,Q,I);throw D=String(w),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ie}function Y(w,D,q){if(w==null)return w;var Q=[],I=0;return C(w,Q,"","",function(ae){return D.call(q,ae,I++)}),Q}function F(w){if(w._status===-1){var D=w._result;D=D(),D.then(function(q){(w._status===0||w._status===-1)&&(w._status=1,w._result=q)},function(q){(w._status===0||w._status===-1)&&(w._status=2,w._result=q)}),w._status===-1&&(w._status=0,w._result=D)}if(w._status===1)return w._result.default;throw w._result}var me=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},we={map:Y,forEach:function(w,D,q){Y(w,function(){D.apply(this,arguments)},q)},count:function(w){var D=0;return Y(w,function(){D++}),D},toArray:function(w){return Y(w,function(D){return D})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ne.Activity=y,ne.Children=we,ne.Component=V,ne.Fragment=p,ne.Profiler=u,ne.PureComponent=J,ne.StrictMode=c,ne.Suspense=x,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ne.__COMPILER_RUNTIME={__proto__:null,c:function(w){return ee.H.useMemoCache(w)}},ne.cache=function(w){return function(){return w.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(w,D,q){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var Q=H({},w.props),I=w.key;if(D!=null)for(ae in D.key!==void 0&&(I=""+D.key),D)!le.call(D,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&D.ref===void 0||(Q[ae]=D[ae]);var ae=arguments.length-2;if(ae===1)Q.children=q;else if(1<ae){for(var ie=Array(ae),ve=0;ve<ae;ve++)ie[ve]=arguments[ve+2];Q.children=ie}return Ae(w.type,I,Q)},ne.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:m,_context:w},w},ne.createElement=function(w,D,q){var Q,I={},ae=null;if(D!=null)for(Q in D.key!==void 0&&(ae=""+D.key),D)le.call(D,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(I[Q]=D[Q]);var ie=arguments.length-2;if(ie===1)I.children=q;else if(1<ie){for(var ve=Array(ie),be=0;be<ie;be++)ve[be]=arguments[be+2];I.children=ve}if(w&&w.defaultProps)for(Q in ie=w.defaultProps,ie)I[Q]===void 0&&(I[Q]=ie[Q]);return Ae(w,ae,I)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(w){return{$$typeof:v,render:w}},ne.isValidElement=Z,ne.lazy=function(w){return{$$typeof:S,_payload:{_status:-1,_result:w},_init:F}},ne.memo=function(w,D){return{$$typeof:g,type:w,compare:D===void 0?null:D}},ne.startTransition=function(w){var D=ee.T,q={};ee.T=q;try{var Q=w(),I=ee.S;I!==null&&I(q,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ce,me)}catch(ae){me(ae)}finally{D!==null&&q.types!==null&&(D.types=q.types),ee.T=D}},ne.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ne.use=function(w){return ee.H.use(w)},ne.useActionState=function(w,D,q){return ee.H.useActionState(w,D,q)},ne.useCallback=function(w,D){return ee.H.useCallback(w,D)},ne.useContext=function(w){return ee.H.useContext(w)},ne.useDebugValue=function(){},ne.useDeferredValue=function(w,D){return ee.H.useDeferredValue(w,D)},ne.useEffect=function(w,D){return ee.H.useEffect(w,D)},ne.useEffectEvent=function(w){return ee.H.useEffectEvent(w)},ne.useId=function(){return ee.H.useId()},ne.useImperativeHandle=function(w,D,q){return ee.H.useImperativeHandle(w,D,q)},ne.useInsertionEffect=function(w,D){return ee.H.useInsertionEffect(w,D)},ne.useLayoutEffect=function(w,D){return ee.H.useLayoutEffect(w,D)},ne.useMemo=function(w,D){return ee.H.useMemo(w,D)},ne.useOptimistic=function(w,D){return ee.H.useOptimistic(w,D)},ne.useReducer=function(w,D,q){return ee.H.useReducer(w,D,q)},ne.useRef=function(w){return ee.H.useRef(w)},ne.useState=function(w){return ee.H.useState(w)},ne.useSyncExternalStore=function(w,D,q){return ee.H.useSyncExternalStore(w,D,q)},ne.useTransition=function(){return ee.H.useTransition()},ne.version="19.2.4",ne}var rp;function Fs(){return rp||(rp=1,Ls.exports=zg()),Ls.exports}var E=Fs(),qs={exports:{}},Ll={},Ys={exports:{}},Gs={};var sp;function wg(){return sp||(sp=1,(function(r){function d(C,Y){var F=C.length;C.push(Y);e:for(;0<F;){var me=F-1>>>1,we=C[me];if(0<u(we,Y))C[me]=Y,C[F]=we,F=me;else break e}}function p(C){return C.length===0?null:C[0]}function c(C){if(C.length===0)return null;var Y=C[0],F=C.pop();if(F!==Y){C[0]=F;e:for(var me=0,we=C.length,w=we>>>1;me<w;){var D=2*(me+1)-1,q=C[D],Q=D+1,I=C[Q];if(0>u(q,F))Q<we&&0>u(I,q)?(C[me]=I,C[Q]=F,me=Q):(C[me]=q,C[D]=F,me=D);else if(Q<we&&0>u(I,F))C[me]=I,C[Q]=F,me=Q;else break e}}return Y}function u(C,Y){var F=C.sortIndex-Y.sortIndex;return F!==0?F:C.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var h=Date,v=h.now();r.unstable_now=function(){return h.now()-v}}var x=[],g=[],S=1,y=null,_=3,B=!1,L=!1,H=!1,U=!1,V=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function pe(C){for(var Y=p(g);Y!==null;){if(Y.callback===null)c(g);else if(Y.startTime<=C)c(g),Y.sortIndex=Y.expirationTime,d(x,Y);else break;Y=p(g)}}function ze(C){if(H=!1,pe(C),!L)if(p(x)!==null)L=!0,ce||(ce=!0,G());else{var Y=p(g);Y!==null&&ue(ze,Y.startTime-C)}}var ce=!1,ee=-1,le=5,Ae=-1;function Ze(){return U?!0:!(r.unstable_now()-Ae<le)}function Z(){if(U=!1,ce){var C=r.unstable_now();Ae=C;var Y=!0;try{e:{L=!1,H&&(H=!1,P(ee),ee=-1),B=!0;var F=_;try{t:{for(pe(C),y=p(x);y!==null&&!(y.expirationTime>C&&Ze());){var me=y.callback;if(typeof me=="function"){y.callback=null,_=y.priorityLevel;var we=me(y.expirationTime<=C);if(C=r.unstable_now(),typeof we=="function"){y.callback=we,pe(C),Y=!0;break t}y===p(x)&&c(x),pe(C)}else c(x);y=p(x)}if(y!==null)Y=!0;else{var w=p(g);w!==null&&ue(ze,w.startTime-C),Y=!1}}break e}finally{y=null,_=F,B=!1}Y=void 0}}finally{Y?G():ce=!1}}}var G;if(typeof J=="function")G=function(){J(Z)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,$=re.port2;re.port1.onmessage=Z,G=function(){$.postMessage(null)}}else G=function(){V(Z,0)};function ue(C,Y){ee=V(function(){C(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(C){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var F=_;_=Y;try{return C()}finally{_=F}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(C,Y){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var F=_;_=C;try{return Y()}finally{_=F}},r.unstable_scheduleCallback=function(C,Y,F){var me=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?me+F:me):F=me,C){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=F+we,C={id:S++,callback:Y,priorityLevel:C,startTime:F,expirationTime:we,sortIndex:-1},F>me?(C.sortIndex=F,d(g,C),p(x)===null&&C===p(g)&&(H?(P(ee),ee=-1):H=!0,ue(ze,F-me))):(C.sortIndex=we,d(x,C),L||B||(L=!0,ce||(ce=!0,G()))),C},r.unstable_shouldYield=Ze,r.unstable_wrapCallback=function(C){var Y=_;return function(){var F=_;_=Y;try{return C.apply(this,arguments)}finally{_=F}}}})(Gs)),Gs}var cp;function jg(){return cp||(cp=1,Ys.exports=wg()),Ys.exports}var Qs={exports:{}},at={};var up;function Sg(){if(up)return at;up=1;var r=Fs();function d(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(){}var c={d:{f:p,r:function(){throw Error(d(522))},D:p,C:p,L:p,m:p,X:p,S:p,M:p},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(x,g,S){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:x,containerInfo:g,implementation:S}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,at.createPortal=function(x,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(d(299));return m(x,g,null,S)},at.flushSync=function(x){var g=h.T,S=c.p;try{if(h.T=null,c.p=2,x)return x()}finally{h.T=g,c.p=S,c.d.f()}},at.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(x,g))},at.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},at.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var S=g.as,y=v(S,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?c.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:B}):S==="script"&&c.d.X(x,{crossOrigin:y,integrity:_,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},at.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=v(g.as,g.crossOrigin);c.d.M(x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(x)},at.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,y=v(S,g.crossOrigin);c.d.L(x,S,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},at.preloadModule=function(x,g){if(typeof x=="string")if(g){var S=v(g.as,g.crossOrigin);c.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(x)},at.requestFormReset=function(x){c.d.r(x)},at.unstable_batchedUpdates=function(x,g){return x(g)},at.useFormState=function(x,g,S){return h.H.useFormState(x,g,S)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.2.4",at}var dp;function Ng(){if(dp)return Qs.exports;dp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Qs.exports=Sg(),Qs.exports}var fp;function Eg(){if(fp)return Ll;fp=1;var r=jg(),d=Fs(),p=Ng();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(m(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return x(l),e;if(o===i)return x(l),t;o=o.sibling}throw Error(c(188))}if(a.return!==i.return)a=l,i=o;else{for(var s=!1,f=l.child;f;){if(f===a){s=!0,a=l,i=o;break}if(f===i){s=!0,i=l,a=o;break}f=f.sibling}if(!s){for(f=o.child;f;){if(f===a){s=!0,a=o,i=l;break}if(f===i){s=!0,i=o,a=l;break}f=f.sibling}if(!s)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),J=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Ae=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case V:return"Profiler";case U:return"StrictMode";case ze:return"Suspense";case ce:return"SuspenseList";case Ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case J:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}var ue=Array.isArray,C=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},me=[],we=-1;function w(e){return{current:e}}function D(e){0>we||(e.current=me[we],me[we]=null,we--)}function q(e,t){we++,me[we]=e.current,e.current=t}var Q=w(null),I=w(null),ae=w(null),ie=w(null);function ve(e,t){switch(q(ae,t),q(I,e),q(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kf(t),e=Af(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(Q),q(Q,e)}function be(){D(Q),D(I),D(ae)}function nt(e){e.memoizedState!==null&&q(ie,e);var t=Q.current,a=Af(t,e.type);t!==a&&(q(I,e),q(Q,a))}function pt(e){I.current===e&&(D(Q),D(I)),ie.current===e&&(D(ie),_l._currentValue=F)}var mt,De;function he(e){if(mt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);mt=t&&t[1]||"",De=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mt+e+De}var Je=!1;function Nt(e,t){if(!e||Je)return"";Je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(T){var A=T}Reflect.construct(e,[],R)}else{try{R.call()}catch(T){A=T}e.call(R.prototype)}}else{try{throw Error()}catch(T){A=T}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(T){if(T&&A&&typeof T.stack=="string")return[T.stack,A.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),s=o[0],f=o[1];if(s&&f){var b=s.split(`
`),k=f.split(`
`);for(l=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;if(i===b.length||l===k.length)for(i=b.length-1,l=k.length-1;1<=i&&0<=l&&b[i]!==k[l];)l--;for(;1<=i&&0<=l;i--,l--)if(b[i]!==k[l]){if(i!==1||l!==1)do if(i--,l--,0>l||b[i]!==k[l]){var O=`
`+b[i].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=i&&0<=l);break}}}finally{Je=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?he(a):""}function Fl(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==t&&t!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return Nt(e.type,!1);case 11:return Nt(e.type.render,!1);case 1:return Nt(e.type,!0);case 31:return he("Activity");default:return""}}function ic(e){try{var t="",a=null;do t+=Fl(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var jo=Object.prototype.hasOwnProperty,So=r.unstable_scheduleCallback,No=r.unstable_cancelCallback,Fp=r.unstable_shouldYield,Wp=r.unstable_requestPaint,ht=r.unstable_now,Ip=r.unstable_getCurrentPriorityLevel,lc=r.unstable_ImmediatePriority,nc=r.unstable_UserBlockingPriority,Wl=r.unstable_NormalPriority,Pp=r.unstable_LowPriority,oc=r.unstable_IdlePriority,em=r.log,tm=r.unstable_setDisableYieldValue,Zi=null,gt=null;function ga(e){if(typeof em=="function"&&tm(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Zi,e)}catch{}}var xt=Math.clz32?Math.clz32:lm,am=Math.log,im=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(am(e)/im|0)|0}var Il=256,Pl=262144,en=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tn(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var f=i&134217727;return f!==0?(i=f&~o,i!==0?l=Ga(i):(s&=f,s!==0?l=Ga(s):a||(a=f&~e,a!==0&&(l=Ga(a))))):(f=i&~o,f!==0?l=Ga(f):s!==0?l=Ga(s):a||(a=i&~e,a!==0&&(l=Ga(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function Ki(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rc(){var e=en;return en<<=1,(en&62914560)===0&&(en=4194304),e}function Eo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ji(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function om(e,t,a,i,l,o){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,b=e.expirationTimes,k=e.hiddenUpdates;for(a=s&~a;0<a;){var O=31-xt(a),R=1<<O;f[O]=0,b[O]=-1;var A=k[O];if(A!==null)for(k[O]=null,O=0;O<A.length;O++){var T=A[O];T!==null&&(T.lane&=-536870913)}a&=~R}i!==0&&sc(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(s&~t))}function sc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function cc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-xt(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function uc(e,t){var a=t&-t;return a=(a&42)!==0?1:ko(a),(a&(e.suspendedLanes|t))!==0?0:a}function ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Wf(e.type))}function fc(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var xa=Math.random().toString(36).slice(2),We="__reactFiber$"+xa,ot="__reactProps$"+xa,oi="__reactContainer$"+xa,To="__reactEvents$"+xa,rm="__reactListeners$"+xa,sm="__reactHandles$"+xa,pc="__reactResources$"+xa,$i="__reactMarker$"+xa;function Co(e){delete e[We],delete e[ot],delete e[To],delete e[rm],delete e[sm]}function ri(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[oi]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Rf(e);e!==null;){if(a=e[We])return a;e=Rf(e)}return t}e=a,a=e.parentNode}return null}function si(e){if(e=e[We]||e[oi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ci(e){var t=e[pc];return t||(t=e[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[$i]=!0}var mc=new Set,hc={};function Qa(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(hc[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var cm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},xc={};function um(e){return jo.call(xc,e)?!0:jo.call(gc,e)?!1:cm.test(e)?xc[e]=!0:(gc[e]=!0,!1)}function an(e,t,a){if(um(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ln(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ft(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oo(e){if(!e._valueTracker){var t=vc(e)?"checked":"value";e._valueTracker=dm(e,t,""+e[t])}}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=vc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fm=/[\n"\\]/g;function kt(e){return e.replace(fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mo(e,t,a,i,l,o,s,f){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Do(e,s,Et(t)):a!=null?Do(e,s,Et(a)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Et(f):e.removeAttribute("name")}function yc(e,t,a,i,l,o,s,f){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Oo(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=f?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Oo(e)}function Do(e,t,a){t==="number"&&nn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function di(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function zc(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function wc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(ue(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Oo(e)}function fi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var pm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||pm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Sc(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&jc(e,l,i)}else for(var o in t)t.hasOwnProperty(o)&&jc(e,o,t[o])}function _o(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return hm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var Ro=null;function Uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,mi=null;function Nc(e){var t=si(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[ot]||null;if(!l)throw Error(c(90));Mo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&bc(i)}break e;case"textarea":zc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&di(e,!!a.multiple,t,!1)}}}var Bo=!1;function Ec(e,t,a){if(Bo)return e(t,a);Bo=!0;try{var i=e(t);return i}finally{if(Bo=!1,(pi!==null||mi!==null)&&(Kn(),pi&&(t=pi,e=mi,mi=pi=null,Nc(t),e)))for(t=0;t<e.length;t++)Nc(e[t])}}function Wi(e,t){var a=e.stateNode;if(a===null)return null;var i=a[ot]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ho=!1;if(It)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Ho=!1}var va=null,Lo=null,rn=null;function kc(){if(rn)return rn;var e,t=Lo,a=t.length,i,l="value"in va?va.value:va.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(i=1;i<=s&&t[a-i]===l[o-i];i++);return rn=l.slice(e,1<i?1-i:void 0)}function sn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cn(){return!0}function Ac(){return!1}function rt(e){function t(a,i,l,o,s){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cn:Ac,this.isPropagationStopped=Ac,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=rt(Xa),Pi=y({},Xa,{view:0,detail:0}),gm=rt(Pi),qo,Yo,el,dn=y({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(qo=e.screenX-el.screenX,Yo=e.screenY-el.screenY):Yo=qo=0,el=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),Tc=rt(dn),xm=y({},dn,{dataTransfer:0}),vm=rt(xm),bm=y({},Pi,{relatedTarget:0}),Go=rt(bm),ym=y({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),zm=rt(ym),wm=y({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jm=rt(wm),Sm=y({},Xa,{data:0}),Cc=rt(Sm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function Qo(){return Am}var Tm=y({},Pi,{key:function(e){if(e.key){var t=Nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?sn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cm=rt(Tm),Om=y({},dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=rt(Om),Mm=y({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),Dm=rt(Mm),_m=y({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rm=rt(_m),Um=y({},dn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bm=rt(Um),Hm=y({},Xa,{newState:0,oldState:0}),Lm=rt(Hm),qm=[9,13,27,32],Xo=It&&"CompositionEvent"in window,tl=null;It&&"documentMode"in document&&(tl=document.documentMode);var Ym=It&&"TextEvent"in window&&!tl,Mc=It&&(!Xo||tl&&8<tl&&11>=tl),Dc=" ",_c=!1;function Rc(e,t){switch(e){case"keyup":return qm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function Gm(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(_c=!0,Dc);case"textInput":return e=t.data,e===Dc&&_c?null:e;default:return null}}function Qm(e,t){if(hi)return e==="compositionend"||!Xo&&Rc(e,t)?(e=kc(),rn=Lo=va=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var Xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xm[e.type]:t==="textarea"}function Hc(e,t,a,i){pi?mi?mi.push(i):mi=[i]:pi=i,t=eo(t,"onChange"),0<t.length&&(a=new un("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var al=null,il=null;function Vm(e){zf(e,0)}function fn(e){var t=Fi(e);if(bc(t))return e}function Lc(e,t){if(e==="change")return t}var qc=!1;if(It){var Vo;if(It){var Zo="oninput"in document;if(!Zo){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),Zo=typeof Yc.oninput=="function"}Vo=Zo}else Vo=!1;qc=Vo&&(!document.documentMode||9<document.documentMode)}function Gc(){al&&(al.detachEvent("onpropertychange",Qc),il=al=null)}function Qc(e){if(e.propertyName==="value"&&fn(il)){var t=[];Hc(t,il,e,Uo(e)),Ec(Vm,t)}}function Zm(e,t,a){e==="focusin"?(Gc(),al=t,il=a,al.attachEvent("onpropertychange",Qc)):e==="focusout"&&Gc()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fn(il)}function Jm(e,t){if(e==="click")return fn(t)}function $m(e,t){if(e==="input"||e==="change")return fn(t)}function Fm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Fm;function ll(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!jo.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function Xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var a=Xc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xc(a)}}function Zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=nn(e.document)}return t}function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wm=It&&"documentMode"in document&&11>=document.documentMode,gi=null,Jo=null,nl=null,$o=!1;function Jc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$o||gi==null||gi!==nn(i)||(i=gi,"selectionStart"in i&&Ko(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nl&&ll(nl,i)||(nl=i,i=eo(Jo,"onSelect"),0<i.length&&(t=new un("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=gi)))}function Va(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var xi={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Fo={},$c={};It&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Za(e){if(Fo[e])return Fo[e];if(!xi[e])return e;var t=xi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in $c)return Fo[e]=t[a];return e}var Fc=Za("animationend"),Wc=Za("animationiteration"),Ic=Za("animationstart"),Im=Za("transitionrun"),Pm=Za("transitionstart"),eh=Za("transitioncancel"),Pc=Za("transitionend"),eu=new Map,Wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wo.push("scrollEnd");function Lt(e,t){eu.set(e,t),Qa(t,[e])}var pn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],vi=0,Io=0;function mn(){for(var e=vi,t=Io=vi=0;t<e;){var a=At[t];At[t++]=null;var i=At[t];At[t++]=null;var l=At[t];At[t++]=null;var o=At[t];if(At[t++]=null,i!==null&&l!==null){var s=i.pending;s===null?l.next=l:(l.next=s.next,s.next=l),i.pending=l}o!==0&&tu(a,l,o)}}function hn(e,t,a,i){At[vi++]=e,At[vi++]=t,At[vi++]=a,At[vi++]=i,Io|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Po(e,t,a,i){return hn(e,t,a,i),gn(e)}function Ka(e,t){return hn(e,null,null,t),gn(e)}function tu(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-xt(a),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),o):null}function gn(e){if(50<kl)throw kl=0,ss=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bi={};function th(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,a,i){return new th(e,t,a,i)}function er(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var a=e.alternate;return a===null?(a=bt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function au(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xn(e,t,a,i,l,o){var s=0;if(i=e,typeof e=="function")er(e)&&(s=1);else if(typeof e=="string")s=og(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ae:return e=bt(31,a,t,l),e.elementType=Ae,e.lanes=o,e;case H:return Ja(a.children,l,o,t);case U:s=8,l|=24;break;case V:return e=bt(12,a,t,l|2),e.elementType=V,e.lanes=o,e;case ze:return e=bt(13,a,t,l),e.elementType=ze,e.lanes=o,e;case ce:return e=bt(19,a,t,l),e.elementType=ce,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:s=10;break e;case P:s=9;break e;case pe:s=11;break e;case ee:s=14;break e;case le:s=16,i=null;break e}s=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=bt(s,a,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function Ja(e,t,a,i){return e=bt(7,e,i,t),e.lanes=a,e}function tr(e,t,a){return e=bt(6,e,null,t),e.lanes=a,e}function iu(e){var t=bt(18,null,null,0);return t.stateNode=e,t}function ar(e,t,a){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lu=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=lu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ic(t)},lu.set(e,t),t)}return{value:e,source:t,stack:ic(t)}}var yi=[],zi=0,vn=null,ol=0,Ct=[],Ot=0,ba=null,Xt=1,Vt="";function ea(e,t){yi[zi++]=ol,yi[zi++]=vn,vn=e,ol=t}function nu(e,t,a){Ct[Ot++]=Xt,Ct[Ot++]=Vt,Ct[Ot++]=ba,ba=e;var i=Xt;e=Vt;var l=32-xt(i)-1;i&=~(1<<l),a+=1;var o=32-xt(t)+l;if(30<o){var s=l-l%5;o=(i&(1<<s)-1).toString(32),i>>=s,l-=s,Xt=1<<32-xt(t)+l|a<<l|i,Vt=o+e}else Xt=1<<o|a<<l|i,Vt=e}function ir(e){e.return!==null&&(ea(e,1),nu(e,1,0))}function lr(e){for(;e===vn;)vn=yi[--zi],yi[zi]=null,ol=yi[--zi],yi[zi]=null;for(;e===ba;)ba=Ct[--Ot],Ct[Ot]=null,Vt=Ct[--Ot],Ct[Ot]=null,Xt=Ct[--Ot],Ct[Ot]=null}function ou(e,t){Ct[Ot++]=Xt,Ct[Ot++]=Vt,Ct[Ot++]=ba,Xt=t.id,Vt=t.overflow,ba=e}var Ie=null,_e=null,ye=!1,ya=null,Mt=!1,nr=Error(c(519));function za(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rl(Tt(t,e)),nr}function ru(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[We]=e,t[ot]=i,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Tl.length;a++)fe(Tl[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),yc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),wc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Nf(t.textContent,a)?(i.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),i.onScroll!=null&&fe("scroll",t),i.onScrollEnd!=null&&fe("scrollend",t),i.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||za(e,!0)}function su(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Ie=Ie.return}}function wi(e){if(e!==Ie)return!1;if(!ye)return su(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||js(e.type,e.memoizedProps)),a=!a),a&&_e&&za(e),su(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=_f(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=_f(e)}else t===27?(t=_e,Ra(e.type)?(e=As,As=null,_e=e):_e=t):_e=Ie?_t(e.stateNode.nextSibling):null;return!0}function $a(){_e=Ie=null,ye=!1}function or(){var e=ya;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),ya=null),e}function rl(e){ya===null?ya=[e]:ya.push(e)}var rr=w(null),Fa=null,ta=null;function wa(e,t,a){q(rr,t._currentValue),t._currentValue=a}function aa(e){e._currentValue=rr.current,D(rr)}function sr(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function cr(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var s=l.child;o=o.firstContext;e:for(;o!==null;){var f=o;o=l;for(var b=0;b<t.length;b++)if(f.context===t[b]){o.lanes|=a,f=o.alternate,f!==null&&(f.lanes|=a),sr(o.return,a,e),i||(s=null);break e}o=f.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(c(341));s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),sr(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ji(e,t,a,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=l.type;vt(l.pendingProps.value,s.value)||(e!==null?e.push(f):e=[f])}}else if(l===ie.current){if(s=l.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(_l):e=[_l])}l=l.return}e!==null&&cr(t,e,a,i),t.flags|=262144}function bn(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wa(e){Fa=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return cu(Fa,e)}function yn(e,t){return Fa===null&&Wa(e),cu(e,t)}function cu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(c(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return a}var ah=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ih=r.unstable_scheduleCallback,lh=r.unstable_NormalPriority,Ge={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ur(){return{controller:new ah,data:new Map,refCount:0}}function sl(e){e.refCount--,e.refCount===0&&ih(lh,function(){e.controller.abort()})}var cl=null,dr=0,Si=0,Ni=null;function nh(e,t){if(cl===null){var a=cl=[];dr=0,Si=ms(),Ni={status:"pending",value:void 0,then:function(i){a.push(i)}}}return dr++,t.then(uu,uu),t}function uu(){if(--dr===0&&cl!==null){Ni!==null&&(Ni.status="fulfilled");var e=cl;cl=null,Si=0,Ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function oh(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var du=C.S;C.S=function(e,t){Jd=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nh(e,t),du!==null&&du(e,t)};var Ia=w(null);function fr(){var e=Ia.current;return e!==null?e:Me.pooledCache}function zn(e,t){t===null?q(Ia,Ia.current):q(Ia,t.pool)}function fu(){var e=fr();return e===null?null:{parent:Ge._currentValue,pool:e}}var Ei=Error(c(460)),pr=Error(c(474)),wn=Error(c(542)),jn={then:function(){}};function pu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function mu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Wt,Wt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gu(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gu(e),e}throw ei=t,Ei}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ei=a,Ei):a}}var ei=null;function hu(){if(ei===null)throw Error(c(459));var e=ei;return ei=null,e}function gu(e){if(e===Ei||e===wn)throw Error(c(483))}var ki=null,ul=0;function Sn(e){var t=ul;return ul+=1,ki===null&&(ki=[]),mu(ki,e,t)}function dl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Nn(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xu(e){function t(j,z){if(e){var N=j.deletions;N===null?(j.deletions=[z],j.flags|=16):N.push(z)}}function a(j,z){if(!e)return null;for(;z!==null;)t(j,z),z=z.sibling;return null}function i(j){for(var z=new Map;j!==null;)j.key!==null?z.set(j.key,j):z.set(j.index,j),j=j.sibling;return z}function l(j,z){return j=Pt(j,z),j.index=0,j.sibling=null,j}function o(j,z,N){return j.index=N,e?(N=j.alternate,N!==null?(N=N.index,N<z?(j.flags|=67108866,z):N):(j.flags|=67108866,z)):(j.flags|=1048576,z)}function s(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function f(j,z,N,M){return z===null||z.tag!==6?(z=tr(N,j.mode,M),z.return=j,z):(z=l(z,N),z.return=j,z)}function b(j,z,N,M){var W=N.type;return W===H?O(j,z,N.props.children,M,N.key):z!==null&&(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===le&&Pa(W)===z.type)?(z=l(z,N.props),dl(z,N),z.return=j,z):(z=xn(N.type,N.key,N.props,null,j.mode,M),dl(z,N),z.return=j,z)}function k(j,z,N,M){return z===null||z.tag!==4||z.stateNode.containerInfo!==N.containerInfo||z.stateNode.implementation!==N.implementation?(z=ar(N,j.mode,M),z.return=j,z):(z=l(z,N.children||[]),z.return=j,z)}function O(j,z,N,M,W){return z===null||z.tag!==7?(z=Ja(N,j.mode,M,W),z.return=j,z):(z=l(z,N),z.return=j,z)}function R(j,z,N){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=tr(""+z,j.mode,N),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case B:return N=xn(z.type,z.key,z.props,null,j.mode,N),dl(N,z),N.return=j,N;case L:return z=ar(z,j.mode,N),z.return=j,z;case le:return z=Pa(z),R(j,z,N)}if(ue(z)||G(z))return z=Ja(z,j.mode,N,null),z.return=j,z;if(typeof z.then=="function")return R(j,Sn(z),N);if(z.$$typeof===J)return R(j,yn(j,z),N);Nn(j,z)}return null}function A(j,z,N,M){var W=z!==null?z.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return W!==null?null:f(j,z,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case B:return N.key===W?b(j,z,N,M):null;case L:return N.key===W?k(j,z,N,M):null;case le:return N=Pa(N),A(j,z,N,M)}if(ue(N)||G(N))return W!==null?null:O(j,z,N,M,null);if(typeof N.then=="function")return A(j,z,Sn(N),M);if(N.$$typeof===J)return A(j,z,yn(j,N),M);Nn(j,N)}return null}function T(j,z,N,M,W){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return j=j.get(N)||null,f(z,j,""+M,W);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case B:return j=j.get(M.key===null?N:M.key)||null,b(z,j,M,W);case L:return j=j.get(M.key===null?N:M.key)||null,k(z,j,M,W);case le:return M=Pa(M),T(j,z,N,M,W)}if(ue(M)||G(M))return j=j.get(N)||null,O(z,j,M,W,null);if(typeof M.then=="function")return T(j,z,N,Sn(M),W);if(M.$$typeof===J)return T(j,z,N,yn(z,M),W);Nn(z,M)}return null}function X(j,z,N,M){for(var W=null,je=null,K=z,se=z=0,xe=null;K!==null&&se<N.length;se++){K.index>se?(xe=K,K=null):xe=K.sibling;var Se=A(j,K,N[se],M);if(Se===null){K===null&&(K=xe);break}e&&K&&Se.alternate===null&&t(j,K),z=o(Se,z,se),je===null?W=Se:je.sibling=Se,je=Se,K=xe}if(se===N.length)return a(j,K),ye&&ea(j,se),W;if(K===null){for(;se<N.length;se++)K=R(j,N[se],M),K!==null&&(z=o(K,z,se),je===null?W=K:je.sibling=K,je=K);return ye&&ea(j,se),W}for(K=i(K);se<N.length;se++)xe=T(K,j,se,N[se],M),xe!==null&&(e&&xe.alternate!==null&&K.delete(xe.key===null?se:xe.key),z=o(xe,z,se),je===null?W=xe:je.sibling=xe,je=xe);return e&&K.forEach(function(qa){return t(j,qa)}),ye&&ea(j,se),W}function te(j,z,N,M){if(N==null)throw Error(c(151));for(var W=null,je=null,K=z,se=z=0,xe=null,Se=N.next();K!==null&&!Se.done;se++,Se=N.next()){K.index>se?(xe=K,K=null):xe=K.sibling;var qa=A(j,K,Se.value,M);if(qa===null){K===null&&(K=xe);break}e&&K&&qa.alternate===null&&t(j,K),z=o(qa,z,se),je===null?W=qa:je.sibling=qa,je=qa,K=xe}if(Se.done)return a(j,K),ye&&ea(j,se),W;if(K===null){for(;!Se.done;se++,Se=N.next())Se=R(j,Se.value,M),Se!==null&&(z=o(Se,z,se),je===null?W=Se:je.sibling=Se,je=Se);return ye&&ea(j,se),W}for(K=i(K);!Se.done;se++,Se=N.next())Se=T(K,j,se,Se.value,M),Se!==null&&(e&&Se.alternate!==null&&K.delete(Se.key===null?se:Se.key),z=o(Se,z,se),je===null?W=Se:je.sibling=Se,je=Se);return e&&K.forEach(function(xg){return t(j,xg)}),ye&&ea(j,se),W}function Oe(j,z,N,M){if(typeof N=="object"&&N!==null&&N.type===H&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case B:e:{for(var W=N.key;z!==null;){if(z.key===W){if(W=N.type,W===H){if(z.tag===7){a(j,z.sibling),M=l(z,N.props.children),M.return=j,j=M;break e}}else if(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===le&&Pa(W)===z.type){a(j,z.sibling),M=l(z,N.props),dl(M,N),M.return=j,j=M;break e}a(j,z);break}else t(j,z);z=z.sibling}N.type===H?(M=Ja(N.props.children,j.mode,M,N.key),M.return=j,j=M):(M=xn(N.type,N.key,N.props,null,j.mode,M),dl(M,N),M.return=j,j=M)}return s(j);case L:e:{for(W=N.key;z!==null;){if(z.key===W)if(z.tag===4&&z.stateNode.containerInfo===N.containerInfo&&z.stateNode.implementation===N.implementation){a(j,z.sibling),M=l(z,N.children||[]),M.return=j,j=M;break e}else{a(j,z);break}else t(j,z);z=z.sibling}M=ar(N,j.mode,M),M.return=j,j=M}return s(j);case le:return N=Pa(N),Oe(j,z,N,M)}if(ue(N))return X(j,z,N,M);if(G(N)){if(W=G(N),typeof W!="function")throw Error(c(150));return N=W.call(N),te(j,z,N,M)}if(typeof N.then=="function")return Oe(j,z,Sn(N),M);if(N.$$typeof===J)return Oe(j,z,yn(j,N),M);Nn(j,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,z!==null&&z.tag===6?(a(j,z.sibling),M=l(z,N),M.return=j,j=M):(a(j,z),M=tr(N,j.mode,M),M.return=j,j=M),s(j)):a(j,z)}return function(j,z,N,M){try{ul=0;var W=Oe(j,z,N,M);return ki=null,W}catch(K){if(K===Ei||K===wn)throw K;var je=bt(29,K,null,j.mode);return je.lanes=M,je.return=j,je}}}var ti=xu(!0),vu=xu(!1),ja=!1;function mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=gn(e),tu(e,null,a),t}return hn(e,i,t,a),gn(e)}function fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,cc(e,a)}}function gr(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=s:o=o.next=s,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var xr=!1;function pl(){if(xr){var e=Ni;if(e!==null)throw e}}function ml(e,t,a,i){xr=!1;var l=e.updateQueue;ja=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var b=f,k=b.next;b.next=null,s===null?o=k:s.next=k,s=b;var O=e.alternate;O!==null&&(O=O.updateQueue,f=O.lastBaseUpdate,f!==s&&(f===null?O.firstBaseUpdate=k:f.next=k,O.lastBaseUpdate=b))}if(o!==null){var R=l.baseState;s=0,O=k=b=null,f=o;do{var A=f.lane&-536870913,T=A!==f.lane;if(T?(ge&A)===A:(i&A)===A){A!==0&&A===Si&&(xr=!0),O!==null&&(O=O.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var X=e,te=f;A=t;var Oe=a;switch(te.tag){case 1:if(X=te.payload,typeof X=="function"){R=X.call(Oe,R,A);break e}R=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=te.payload,A=typeof X=="function"?X.call(Oe,R,A):X,A==null)break e;R=y({},R,A);break e;case 2:ja=!0}}A=f.callback,A!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[A]:T.push(A))}else T={lane:A,tag:f.tag,payload:f.payload,callback:f.callback,next:null},O===null?(k=O=T,b=R):O=O.next=T,s|=A;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;T=f,f=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);O===null&&(b=R),l.baseState=b,l.firstBaseUpdate=k,l.lastBaseUpdate=O,o===null&&(l.shared.lanes=0),Ca|=s,e.lanes=s,e.memoizedState=R}}function bu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function yu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bu(a[e],t)}var Ai=w(null),En=w(0);function zu(e,t){e=da,q(En,e),q(Ai,t),da=e|t.baseLanes}function vr(){q(En,da),q(Ai,Ai.current)}function br(){da=En.current,D(Ai),D(En)}var yt=w(null),Dt=null;function Ea(e){var t=e.alternate;q(qe,qe.current&1),q(yt,e),Dt===null&&(t===null||Ai.current!==null||t.memoizedState!==null)&&(Dt=e)}function yr(e){q(qe,qe.current),q(yt,e),Dt===null&&(Dt=e)}function wu(e){e.tag===22?(q(qe,qe.current),q(yt,e),Dt===null&&(Dt=e)):ka()}function ka(){q(qe,qe.current),q(yt,yt.current)}function zt(e){D(yt),Dt===e&&(Dt=null),D(qe)}var qe=w(0);function kn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Es(a)||ks(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ia=0,oe=null,Te=null,Qe=null,An=!1,Ti=!1,ai=!1,Tn=0,hl=0,Ci=null,rh=0;function He(){throw Error(c(321))}function zr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!vt(e[a],t[a]))return!1;return!0}function wr(e,t,a,i,l,o){return ia=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?nd:Br,ai=!1,o=a(i,l),ai=!1,Ti&&(o=Su(t,a,i,l)),ju(e),o}function ju(e){C.H=vl;var t=Te!==null&&Te.next!==null;if(ia=0,Qe=Te=oe=null,An=!1,hl=0,Ci=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&bn(e)&&(Xe=!0))}function Su(e,t,a,i){oe=e;var l=0;do{if(Ti&&(Ci=null),hl=0,Ti=!1,25<=l)throw Error(c(301));if(l+=1,Qe=Te=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=od,o=t(a,i)}while(Ti);return o}function sh(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?gl(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(oe.flags|=1024),t}function jr(){var e=Tn!==0;return Tn=0,e}function Sr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Nr(e){if(An){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}An=!1}ia=0,Qe=Te=oe=null,Ti=!1,hl=Tn=0,Ci=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?oe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ye(){if(Te===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Qe===null?oe.memoizedState:Qe.next;if(t!==null)Qe=t,Te=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Qe===null?oe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Cn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(e){var t=hl;return hl+=1,Ci===null&&(Ci=[]),e=mu(Ci,e,t),t=oe,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?nd:Br),e}function On(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gl(e);if(e.$$typeof===J)return Pe(e)}throw Error(c(438,String(e)))}function Er(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Cn(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Ze;return t.index++,a}function la(e,t){return typeof t=="function"?t(e):t}function Mn(e){var t=Ye();return kr(t,Te,e)}function kr(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var f=s=null,b=null,k=t,O=!1;do{var R=k.lane&-536870913;if(R!==k.lane?(ge&R)===R:(ia&R)===R){var A=k.revertLane;if(A===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),R===Si&&(O=!0);else if((ia&A)===A){k=k.next,A===Si&&(O=!0);continue}else R={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},b===null?(f=b=R,s=o):b=b.next=R,oe.lanes|=A,Ca|=A;R=k.action,ai&&a(o,R),o=k.hasEagerState?k.eagerState:a(o,R)}else A={lane:R,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},b===null?(f=b=A,s=o):b=b.next=A,oe.lanes|=R,Ca|=R;k=k.next}while(k!==null&&k!==t);if(b===null?s=o:b.next=f,!vt(o,e.memoizedState)&&(Xe=!0,O&&(a=Ni,a!==null)))throw a;e.memoizedState=o,e.baseState=s,e.baseQueue=b,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ar(e){var t=Ye(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);vt(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,i]}function Nu(e,t,a){var i=oe,l=Ye(),o=ye;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var s=!vt((Te||l).memoizedState,a);if(s&&(l.memoizedState=a,Xe=!0),l=l.queue,Or(Au.bind(null,i,l,e),[e]),l.getSnapshot!==t||s||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,Oi(9,{destroy:void 0},ku.bind(null,i,l,a,t),null),Me===null)throw Error(c(349));o||(ia&127)!==0||Eu(i,t,a)}return a}function Eu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Cn(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function ku(e,t,a,i){t.value=a,t.getSnapshot=i,Tu(t)&&Cu(e)}function Au(e,t,a){return a(function(){Tu(t)&&Cu(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!vt(e,a)}catch{return!0}}function Cu(e){var t=Ka(e,2);t!==null&&ft(t,e,2)}function Tr(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),ai){ga(!0);try{a()}finally{ga(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},t}function Ou(e,t,a,i){return e.baseState=a,kr(e,Te,typeof i=="function"?i:la)}function ch(e,t,a,i,l){if(Rn(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){o.listeners.push(s)}};C.T!==null?a(!0):o.isTransition=!1,i(o),a=t.pending,a===null?(o.next=t.pending=o,Mu(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Mu(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=C.T,s={};C.T=s;try{var f=a(l,i),b=C.S;b!==null&&b(s,f),Du(e,t,f)}catch(k){Cr(e,t,k)}finally{o!==null&&s.types!==null&&(o.types=s.types),C.T=o}}else try{o=a(l,i),Du(e,t,o)}catch(k){Cr(e,t,k)}}function Du(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){_u(e,t,i)},function(i){return Cr(e,t,i)}):_u(e,t,a)}function _u(e,t,a){t.status="fulfilled",t.value=a,Ru(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Mu(e,a)))}function Cr(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Ru(t),t=t.next;while(t!==i)}e.action=null}function Ru(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uu(e,t){return t}function Bu(e,t){if(ye){var a=Me.formState;if(a!==null){e:{var i=oe;if(ye){if(_e){t:{for(var l=_e,o=Mt;l.nodeType!==8;){if(!o){l=null;break t}if(l=_t(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){_e=_t(l.nextSibling),i=l.data==="F!";break e}}za(i)}i=!1}i&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uu,lastRenderedState:t},a.queue=i,a=ad.bind(null,oe,i),i.dispatch=a,i=Tr(!1),o=Ur.bind(null,oe,!1,i.queue),i=lt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=ch.bind(null,oe,l,o,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function Hu(e){var t=Ye();return Lu(t,Te,e)}function Lu(e,t,a){if(t=kr(e,t,Uu)[0],e=Mn(la)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=gl(t)}catch(s){throw s===Ei?wn:s}else i=t;t=Ye();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Oi(9,{destroy:void 0},uh.bind(null,l,a),null)),[i,o,e]}function uh(e,t){e.action=t}function qu(e){var t=Ye(),a=Te;if(a!==null)return Lu(t,a,e);Ye(),t=t.memoizedState,a=Ye();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Oi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Cn(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function Yu(){return Ye().memoizedState}function Dn(e,t,a,i){var l=lt();oe.flags|=e,l.memoizedState=Oi(1|t,{destroy:void 0},a,i===void 0?null:i)}function _n(e,t,a,i){var l=Ye();i=i===void 0?null:i;var o=l.memoizedState.inst;Te!==null&&i!==null&&zr(i,Te.memoizedState.deps)?l.memoizedState=Oi(t,o,a,i):(oe.flags|=e,l.memoizedState=Oi(1|t,o,a,i))}function Gu(e,t){Dn(8390656,8,e,t)}function Or(e,t){_n(2048,8,e,t)}function dh(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Cn(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Qu(e){var t=Ye().memoizedState;return dh({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Xu(e,t){return _n(4,2,e,t)}function Vu(e,t){return _n(4,4,e,t)}function Zu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ku(e,t,a){a=a!=null?a.concat([e]):null,_n(4,4,Zu.bind(null,t,e),a)}function Mr(){}function Ju(e,t){var a=Ye();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&zr(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function $u(e,t){var a=Ye();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&zr(t,i[1]))return i[0];if(i=e(),ai){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[i,t],i}function Dr(e,t,a){return a===void 0||(ia&1073741824)!==0&&(ge&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fd(),oe.lanes|=e,Ca|=e,a)}function Fu(e,t,a,i){return vt(a,t)?a:Ai.current!==null?(e=Dr(e,a,i),vt(e,t)||(Xe=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(ge&261930)===0?(Xe=!0,e.memoizedState=a):(e=Fd(),oe.lanes|=e,Ca|=e,t)}function Wu(e,t,a,i,l){var o=Y.p;Y.p=o!==0&&8>o?o:8;var s=C.T,f={};C.T=f,Ur(e,!1,t,a);try{var b=l(),k=C.S;if(k!==null&&k(f,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var O=oh(b,i);xl(e,t,O,St(e))}else xl(e,t,i,St(e))}catch(R){xl(e,t,{then:function(){},status:"rejected",reason:R},St())}finally{Y.p=o,s!==null&&f.types!==null&&(s.types=f.types),C.T=s}}function fh(){}function _r(e,t,a,i){if(e.tag!==5)throw Error(c(476));var l=Iu(e).queue;Wu(e,l,t,F,a===null?fh:function(){return Pu(e),a(i)})}function Iu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Pu(e){var t=Iu(e);t.next===null&&(t=e.alternate.memoizedState),xl(e,t.next.queue,{},St())}function Rr(){return Pe(_l)}function ed(){return Ye().memoizedState}function td(){return Ye().memoizedState}function ph(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=Sa(a);var i=Na(t,e,a);i!==null&&(ft(i,t,a),fl(i,t,a)),t={cache:ur()},e.payload=t;return}t=t.return}}function mh(e,t,a){var i=St();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rn(e)?id(t,a):(a=Po(e,t,a,i),a!==null&&(ft(a,e,i),ld(a,t,i)))}function ad(e,t,a){var i=St();xl(e,t,a,i)}function xl(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rn(e))id(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,f=o(s,a);if(l.hasEagerState=!0,l.eagerState=f,vt(f,s))return hn(e,t,l,0),Me===null&&mn(),!1}catch{}if(a=Po(e,t,l,i),a!==null)return ft(a,e,i),ld(a,t,i),!0}return!1}function Ur(e,t,a,i){if(i={lane:2,revertLane:ms(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Rn(e)){if(t)throw Error(c(479))}else t=Po(e,a,i,2),t!==null&&ft(t,e,2)}function Rn(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function id(e,t){Ti=An=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ld(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,cc(e,a)}}var vl={readContext:Pe,use:On,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};vl.useEffectEvent=He;var nd={readContext:Pe,use:On,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Gu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Dn(4194308,4,Zu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Dn(4194308,4,e,t)},useInsertionEffect:function(e,t){Dn(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var i=e();if(ai){ga(!0);try{e()}finally{ga(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=lt();if(a!==void 0){var l=a(t);if(ai){ga(!0);try{a(t)}finally{ga(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=mh.bind(null,oe,e),[i.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Tr(e);var t=e.queue,a=ad.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Mr,useDeferredValue:function(e,t){var a=lt();return Dr(a,e,t)},useTransition:function(){var e=Tr(!1);return e=Wu.bind(null,oe,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=oe,l=lt();if(ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Me===null)throw Error(c(349));(ge&127)!==0||Eu(i,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,Gu(Au.bind(null,i,o,e),[e]),i.flags|=2048,Oi(9,{destroy:void 0},ku.bind(null,i,o,a,t),null),a},useId:function(){var e=lt(),t=Me.identifierPrefix;if(ye){var a=Vt,i=Xt;a=(i&~(1<<32-xt(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Tn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=rh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rr,useFormState:Bu,useActionState:Bu,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ur.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Er,useCacheRefresh:function(){return lt().memoizedState=ph.bind(null,oe)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((Ne&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Br={readContext:Pe,use:On,useCallback:Ju,useContext:Pe,useEffect:Or,useImperativeHandle:Ku,useInsertionEffect:Xu,useLayoutEffect:Vu,useMemo:$u,useReducer:Mn,useRef:Yu,useState:function(){return Mn(la)},useDebugValue:Mr,useDeferredValue:function(e,t){var a=Ye();return Fu(a,Te.memoizedState,e,t)},useTransition:function(){var e=Mn(la)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Nu,useId:ed,useHostTransitionStatus:Rr,useFormState:Hu,useActionState:Hu,useOptimistic:function(e,t){var a=Ye();return Ou(a,Te,e,t)},useMemoCache:Er,useCacheRefresh:td};Br.useEffectEvent=Qu;var od={readContext:Pe,use:On,useCallback:Ju,useContext:Pe,useEffect:Or,useImperativeHandle:Ku,useInsertionEffect:Xu,useLayoutEffect:Vu,useMemo:$u,useReducer:Ar,useRef:Yu,useState:function(){return Ar(la)},useDebugValue:Mr,useDeferredValue:function(e,t){var a=Ye();return Te===null?Dr(a,e,t):Fu(a,Te.memoizedState,e,t)},useTransition:function(){var e=Ar(la)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:gl(e),t]},useSyncExternalStore:Nu,useId:ed,useHostTransitionStatus:Rr,useFormState:qu,useActionState:qu,useOptimistic:function(e,t){var a=Ye();return Te!==null?Ou(a,Te,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Er,useCacheRefresh:td};od.useEffectEvent=Qu;function Hr(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Lr={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=St(),l=Sa(i);l.payload=t,a!=null&&(l.callback=a),t=Na(e,l,i),t!==null&&(ft(t,e,i),fl(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=St(),l=Sa(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Na(e,l,i),t!==null&&(ft(t,e,i),fl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),i=Sa(a);i.tag=2,t!=null&&(i.callback=t),t=Na(e,i,a),t!==null&&(ft(t,e,a),fl(t,e,a))}};function rd(e,t,a,i,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!ll(a,i)||!ll(l,o):!0}function sd(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Lr.enqueueReplaceState(t,t.state,null)}function ii(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function cd(e){pn(e)}function ud(e){console.error(e)}function dd(e){pn(e)}function Un(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function fd(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function qr(e,t,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Un(e,t)},a}function pd(e){return e=Sa(e),e.tag=3,e}function md(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){fd(t,a,i)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){fd(t,a,i),typeof l!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var f=i.stack;this.componentDidCatch(i.value,{componentStack:f!==null?f:""})})}function hh(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ji(t,a,l,!0),a=yt.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?Jn():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===jn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),ds(e,i,l)),!1;case 22:return a.flags|=65536,i===jn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),ds(e,i,l)),!1}throw Error(c(435,a.tag))}return ds(e,i,l),Jn(),!1}if(ye)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==nr&&(e=Error(c(422),{cause:i}),rl(Tt(e,a)))):(i!==nr&&(t=Error(c(423),{cause:i}),rl(Tt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Tt(i,a),l=qr(e.stateNode,i,l),gr(e,l),Le!==4&&(Le=2)),!1;var o=Error(c(520),{cause:i});if(o=Tt(o,a),El===null?El=[o]:El.push(o),Le!==4&&(Le=2),t===null)return!0;i=Tt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=qr(a.stateNode,i,e),gr(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=pd(l),md(l,e,a,i),gr(a,l),!1}a=a.return}while(a!==null);return!1}var Yr=Error(c(461)),Xe=!1;function et(e,t,a,i){t.child=e===null?vu(t,null,a,i):ti(t,e.child,a,i)}function hd(e,t,a,i,l){a=a.render;var o=t.ref;if("ref"in i){var s={};for(var f in i)f!=="ref"&&(s[f]=i[f])}else s=i;return Wa(t),i=wr(e,t,a,s,o,l),f=jr(),e!==null&&!Xe?(Sr(e,t,l),na(e,t,l)):(ye&&f&&ir(t),t.flags|=1,et(e,t,i,l),t.child)}function gd(e,t,a,i,l){if(e===null){var o=a.type;return typeof o=="function"&&!er(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,xd(e,t,o,i,l)):(e=xn(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!$r(e,l)){var s=o.memoizedProps;if(a=a.compare,a=a!==null?a:ll,a(s,i)&&e.ref===t.ref)return na(e,t,l)}return t.flags|=1,e=Pt(o,i),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,a,i,l){if(e!==null){var o=e.memoizedProps;if(ll(o,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=o,$r(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,na(e,t,l)}return Gr(e,t,a,i,l)}function vd(e,t,a,i){var l=i.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~o}else i=0,t.child=null;return bd(e,t,o,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zn(t,o!==null?o.cachePool:null),o!==null?zu(t,o):vr(),wu(t);else return i=t.lanes=536870912,bd(e,t,o!==null?o.baseLanes|a:a,a,i)}else o!==null?(zn(t,o.cachePool),zu(t,o),ka(),t.memoizedState=null):(e!==null&&zn(t,null),vr(),ka());return et(e,t,l,a),t.child}function bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bd(e,t,a,i,l){var o=fr();return o=o===null?null:{parent:Ge._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&zn(t,null),vr(),wu(t),e!==null&&ji(e,t,i,!0),t.childLanes=l,null}function Bn(e,t){return t=Ln({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yd(e,t,a){return ti(t,e.child,null,a),e=Bn(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function gh(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(i.mode==="hidden")return e=Bn(t,i),t.lanes=536870912,bl(null,e);if(yr(t),(e=_e)?(e=Df(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Xt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=iu(e),a.return=t,t.child=a,Ie=t,_e=null)):e=null,e===null)throw za(t);return t.lanes=536870912,null}return Bn(t,i)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(yr(t),l)if(t.flags&256)t.flags&=-257,t=yd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Xe||ji(e,t,a,!1),l=(a&e.childLanes)!==0,Xe||l){if(i=Me,i!==null&&(s=uc(i,a),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ka(e,s),ft(i,e,s),Yr;Jn(),t=yd(e,t,a)}else e=o.treeContext,_e=_t(s.nextSibling),Ie=t,ye=!0,ya=null,Mt=!1,e!==null&&ou(t,e),t=Bn(t,i),t.flags|=4096;return t}return e=Pt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Gr(e,t,a,i,l){return Wa(t),a=wr(e,t,a,i,void 0,l),i=jr(),e!==null&&!Xe?(Sr(e,t,l),na(e,t,l)):(ye&&i&&ir(t),t.flags|=1,et(e,t,a,l),t.child)}function zd(e,t,a,i,l,o){return Wa(t),t.updateQueue=null,a=Su(t,i,a,l),ju(e),i=jr(),e!==null&&!Xe?(Sr(e,t,o),na(e,t,o)):(ye&&i&&ir(t),t.flags|=1,et(e,t,a,o),t.child)}function wd(e,t,a,i,l){if(Wa(t),t.stateNode===null){var o=bi,s=a.contextType;typeof s=="object"&&s!==null&&(o=Pe(s)),o=new a(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Lr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},mr(t),s=a.contextType,o.context=typeof s=="object"&&s!==null?Pe(s):bi,o.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Hr(t,a,s,i),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(s=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),s!==o.state&&Lr.enqueueReplaceState(o,o.state,null),ml(t,i,o,l),pl(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var f=t.memoizedProps,b=ii(a,f);o.props=b;var k=o.context,O=a.contextType;s=bi,typeof O=="object"&&O!==null&&(s=Pe(O));var R=a.getDerivedStateFromProps;O=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,O||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f||k!==s)&&sd(t,o,i,s),ja=!1;var A=t.memoizedState;o.state=A,ml(t,i,o,l),pl(),k=t.memoizedState,f||A!==k||ja?(typeof R=="function"&&(Hr(t,a,R,i),k=t.memoizedState),(b=ja||rd(t,a,b,i,A,k,s))?(O||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=k),o.props=i,o.state=k,o.context=s,i=b):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,hr(e,t),s=t.memoizedProps,O=ii(a,s),o.props=O,R=t.pendingProps,A=o.context,k=a.contextType,b=bi,typeof k=="object"&&k!==null&&(b=Pe(k)),f=a.getDerivedStateFromProps,(k=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==R||A!==b)&&sd(t,o,i,b),ja=!1,A=t.memoizedState,o.state=A,ml(t,i,o,l),pl();var T=t.memoizedState;s!==R||A!==T||ja||e!==null&&e.dependencies!==null&&bn(e.dependencies)?(typeof f=="function"&&(Hr(t,a,f,i),T=t.memoizedState),(O=ja||rd(t,a,O,i,A,T,b)||e!==null&&e.dependencies!==null&&bn(e.dependencies))?(k||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,T,b),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,T,b)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=T),o.props=i,o.state=T,o.context=b,i=O):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,Hn(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=ti(t,e.child,null,l),t.child=ti(t,null,a,l)):et(e,t,a,l),t.memoizedState=o.state,e=t.child):e=na(e,t,l),e}function jd(e,t,a,i){return $a(),t.flags|=256,et(e,t,a,i),t.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xr(e){return{baseLanes:e,cachePool:fu()}}function Vr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function Sd(e,t,a){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(l?Ea(t):ka(),(e=_e)?(e=Df(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Xt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},a=iu(e),a.return=t,t.child=a,Ie=t,_e=null)):e=null,e===null)throw za(t);return ks(e)?t.lanes=32:t.lanes=536870912,null}var f=i.children;return i=i.fallback,l?(ka(),l=t.mode,f=Ln({mode:"hidden",children:f},l),i=Ja(i,l,a,null),f.return=t,i.return=t,f.sibling=i,t.child=f,i=t.child,i.memoizedState=Xr(a),i.childLanes=Vr(e,s,a),t.memoizedState=Qr,bl(null,i)):(Ea(t),Zr(t,f))}var b=e.memoizedState;if(b!==null&&(f=b.dehydrated,f!==null)){if(o)t.flags&256?(Ea(t),t.flags&=-257,t=Kr(e,t,a)):t.memoizedState!==null?(ka(),t.child=e.child,t.flags|=128,t=null):(ka(),f=i.fallback,l=t.mode,i=Ln({mode:"visible",children:i.children},l),f=Ja(f,l,a,null),f.flags|=2,i.return=t,f.return=t,i.sibling=f,t.child=i,ti(t,e.child,null,a),i=t.child,i.memoizedState=Xr(a),i.childLanes=Vr(e,s,a),t.memoizedState=Qr,t=bl(null,i));else if(Ea(t),ks(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var k=s.dgst;s=k,i=Error(c(419)),i.stack="",i.digest=s,rl({value:i,source:null,stack:null}),t=Kr(e,t,a)}else if(Xe||ji(e,t,a,!1),s=(a&e.childLanes)!==0,Xe||s){if(s=Me,s!==null&&(i=uc(s,a),i!==0&&i!==b.retryLane))throw b.retryLane=i,Ka(e,i),ft(s,e,i),Yr;Es(f)||Jn(),t=Kr(e,t,a)}else Es(f)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,_e=_t(f.nextSibling),Ie=t,ye=!0,ya=null,Mt=!1,e!==null&&ou(t,e),t=Zr(t,i.children),t.flags|=4096);return t}return l?(ka(),f=i.fallback,l=t.mode,b=e.child,k=b.sibling,i=Pt(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,k!==null?f=Pt(k,f):(f=Ja(f,l,a,null),f.flags|=2),f.return=t,i.return=t,i.sibling=f,t.child=i,bl(null,i),i=t.child,f=e.child.memoizedState,f===null?f=Xr(a):(l=f.cachePool,l!==null?(b=Ge._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=fu(),f={baseLanes:f.baseLanes|a,cachePool:l}),i.memoizedState=f,i.childLanes=Vr(e,s,a),t.memoizedState=Qr,bl(e.child,i)):(Ea(t),a=e.child,e=a.sibling,a=Pt(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Zr(e,t){return t=Ln({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ln(e,t){return e=bt(22,e,null,t),e.lanes=0,e}function Kr(e,t,a){return ti(t,e.child,null,a),e=Zr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nd(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sr(e.return,t,a)}function Jr(e,t,a,i,l,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=a,s.tailMode=l,s.treeForkCount=o)}function Ed(e,t,a){var i=t.pendingProps,l=i.revealOrder,o=i.tail;i=i.children;var s=qe.current,f=(s&2)!==0;if(f?(s=s&1|2,t.flags|=128):s&=1,q(qe,s),et(e,t,i,a),i=ye?ol:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,a,t);else if(e.tag===19)Nd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&kn(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Jr(t,!1,l,a,o,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kn(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Jr(t,!0,a,null,o,i);break;case"together":Jr(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function na(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ji(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Pt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Pt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function $r(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bn(e)))}function xh(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),wa(t,Ge,e.memoizedState.cache),$a();break;case 27:case 5:nt(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yr(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ea(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Sd(e,t,a):(Ea(t),e=na(e,t,a),e!==null?e.sibling:null);Ea(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ji(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Ed(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),q(qe,qe.current),i)break;return null;case 22:return t.lanes=0,vd(e,t,a,t.pendingProps);case 24:wa(t,Ge,e.memoizedState.cache)}return na(e,t,a)}function kd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!$r(e,a)&&(t.flags&128)===0)return Xe=!1,xh(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,ye&&(t.flags&1048576)!==0&&nu(t,ol,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")er(e)?(i=ii(e,i),t.tag=1,t=wd(null,t,e,i,a)):(t.tag=0,t=Gr(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===pe){t.tag=11,t=hd(null,t,e,i,a);break e}else if(l===ee){t.tag=14,t=gd(null,t,e,i,a);break e}}throw t=$(e)||e,Error(c(306,t,""))}}return t;case 0:return Gr(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=ii(i,t.pendingProps),wd(e,t,i,l,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,hr(e,t),ml(t,i,null,a);var s=t.memoizedState;if(i=s.cache,wa(t,Ge,i),i!==o.cache&&cr(t,[Ge],a,!0),pl(),i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=jd(e,t,i,a);break e}else if(i!==l){l=Tt(Error(c(424)),t),rl(l),t=jd(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=_t(e.firstChild),Ie=t,ye=!0,ya=null,Mt=!0,a=vu(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($a(),i===l){t=na(e,t,a);break e}et(e,t,i,a)}t=t.child}return t;case 26:return Hn(e,t),e===null?(a=Lf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,i=to(ae.current).createElement(a),i[We]=t,i[ot]=e,tt(i,a,e),$e(i),t.stateNode=i):t.memoizedState=Lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&ye&&(i=t.stateNode=Uf(t.type,t.pendingProps,ae.current),Ie=t,Mt=!0,l=_e,Ra(t.type)?(As=l,_e=_t(i.firstChild)):_e=l),et(e,t,t.pendingProps.children,a),Hn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((l=i=_e)&&(i=Kh(i,t.type,t.pendingProps,Mt),i!==null?(t.stateNode=i,Ie=t,_e=_t(i.firstChild),Mt=!1,l=!0):l=!1),l||za(t)),nt(t),l=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,js(l,o)?i=null:s!==null&&js(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=wr(e,t,sh,null,null,a),_l._currentValue=l),Hn(e,t),et(e,t,i,a),t.child;case 6:return e===null&&ye&&((e=a=_e)&&(a=Jh(a,t.pendingProps,Mt),a!==null?(t.stateNode=a,Ie=t,_e=null,e=!0):e=!1),e||za(t)),null;case 13:return Sd(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ti(t,null,i,a):et(e,t,i,a),t.child;case 11:return hd(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,wa(t,t.type,i.value),et(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,Wa(t),l=Pe(l),i=i(l),t.flags|=1,et(e,t,i,a),t.child;case 14:return gd(e,t,t.type,t.pendingProps,a);case 15:return xd(e,t,t.type,t.pendingProps,a);case 19:return Ed(e,t,a);case 31:return gh(e,t,a);case 22:return vd(e,t,a,t.pendingProps);case 24:return Wa(t),i=Pe(Ge),e===null?(l=fr(),l===null&&(l=Me,o=ur(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:i,cache:l},mr(t),wa(t,Ge,l)):((e.lanes&a)!==0&&(hr(e,t),ml(t,null,null,a),pl()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),wa(t,Ge,i)):(i=o.cache,wa(t,Ge,i),i!==l.cache&&cr(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function oa(e){e.flags|=4}function Fr(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ef())e.flags|=8192;else throw ei=jn,pr}else e.flags&=-16777217}function Ad(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xf(t))if(ef())e.flags|=8192;else throw ei=jn,pr}function qn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rc():536870912,e.lanes|=t,Ri|=t)}function yl(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function vh(e,t,a){var i=t.pendingProps;switch(lr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),aa(Ge),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wi(t)?oa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,or())),Re(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(oa(t),o!==null?(Re(t),Ad(t,o)):(Re(t),Fr(t,l,null,i,a))):o?o!==e.memoizedState?(oa(t),Re(t),Ad(t,o)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&oa(t),Re(t),Fr(t,l,e,i,a)),null;case 27:if(pt(t),a=ae.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&oa(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Re(t),null}e=Q.current,wi(t)?ru(t):(e=Uf(l,i,a),t.stateNode=e,oa(t))}return Re(t),null;case 5:if(pt(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&oa(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Re(t),null}if(o=Q.current,wi(t))ru(t);else{var s=to(ae.current);switch(o){case 1:o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=s.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?s.createElement(l,{is:i.is}):s.createElement(l)}}o[We]=t,o[ot]=i;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;e:switch(tt(o,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&oa(t)}}return Re(t),Fr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&oa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,wi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=Ie,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Nf(e.nodeValue,a)),e||za(t,!0)}else e=to(e).createTextNode(i),e[We]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=wi(t),a!==null){if(e===null){if(!i)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[We]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=wi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[We]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),l=!1}else l=or(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),qn(t,t.updateQueue),Re(t),null);case 4:return be(),e===null&&vs(t.stateNode.containerInfo),Re(t),null;case 10:return aa(t.type),Re(t),null;case 19:if(D(qe),i=t.memoizedState,i===null)return Re(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)yl(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=kn(e),o!==null){for(t.flags|=128,yl(i,!1),e=o.updateQueue,t.updateQueue=e,qn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)au(a,e),a=a.sibling;return q(qe,qe.current&1|2),ye&&ea(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ht()>Vn&&(t.flags|=128,l=!0,yl(i,!1),t.lanes=4194304)}else{if(!l)if(e=kn(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,qn(t,e),yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ye)return Re(t),null}else 2*ht()-i.renderingStartTime>Vn&&a!==536870912&&(t.flags|=128,l=!0,yl(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ht(),e.sibling=null,a=qe.current,q(qe,l?a&1|2:a&1),ye&&ea(t,i.treeForkCount),e):(Re(t),null);case 22:case 23:return zt(t),br(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&qn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&D(Ia),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),aa(Ge),Re(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function bh(e,t){switch(lr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(Ge),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pt(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(c(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(qe),null;case 4:return be(),null;case 10:return aa(t.type),null;case 22:case 23:return zt(t),br(),e!==null&&D(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(Ge),null;case 25:return null;default:return null}}function Td(e,t){switch(lr(t),t.tag){case 3:aa(Ge),be();break;case 26:case 27:case 5:pt(t);break;case 4:be();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:D(qe);break;case 10:aa(t.type);break;case 22:case 23:zt(t),br(),e!==null&&D(Ia);break;case 24:aa(Ge)}}function zl(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var o=a.create,s=a.inst;i=o(),s.destroy=i}a=a.next}while(a!==l)}}catch(f){ke(t,t.return,f)}}function Aa(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var s=i.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,l=t;var b=a,k=f;try{k()}catch(O){ke(l,b,O)}}}i=i.next}while(i!==o)}}catch(O){ke(t,t.return,O)}}function Cd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{yu(t,a)}catch(i){ke(e,e.return,i)}}}function Od(e,t,a){a.props=ii(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ke(e,t,i)}}function wl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){ke(e,t,l)}}function Zt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){ke(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ke(e,t,l)}else a.current=null}function Md(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){ke(e,e.return,l)}}function Wr(e,t,a){try{var i=e.stateNode;Yh(i,e.type,a,t),i[ot]=t}catch(l){ke(e,e.return,l)}}function Dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Ir(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pr(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Wt));else if(i!==4&&(i===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Pr(e,t,a),e=e.sibling;e!==null;)Pr(e,t,a),e=e.sibling}function Yn(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yn(e,t,a),e=e.sibling;e!==null;)Yn(e,t,a),e=e.sibling}function _d(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,i,a),t[We]=e,t[ot]=a}catch(o){ke(e,e.return,o)}}var ra=!1,Ve=!1,es=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function yh(e,t){if(e=e.containerInfo,zs=so,e=Kc(e),Ko(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var s=0,f=-1,b=-1,k=0,O=0,R=e,A=null;t:for(;;){for(var T;R!==a||l!==0&&R.nodeType!==3||(f=s+l),R!==o||i!==0&&R.nodeType!==3||(b=s+i),R.nodeType===3&&(s+=R.nodeValue.length),(T=R.firstChild)!==null;)A=R,R=T;for(;;){if(R===e)break t;if(A===a&&++k===l&&(f=s),A===o&&++O===i&&(b=s),(T=R.nextSibling)!==null)break;R=A,A=R.parentNode}R=T}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(ws={focusedElem:e,selectionRange:a},so=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var X=ii(a.type,l);e=i.getSnapshotBeforeUpdate(X,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(te){ke(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ns(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ns(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Ud(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),i&4&&zl(5,a);break;case 1:if(ca(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ke(a,a.return,s)}else{var l=ii(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ke(a,a.return,s)}}i&64&&Cd(a),i&512&&wl(a,a.return);break;case 3:if(ca(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{yu(e,t)}catch(s){ke(a,a.return,s)}}break;case 27:t===null&&i&4&&_d(a);case 26:case 5:ca(e,a),t===null&&i&4&&Md(a),i&512&&wl(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),i&4&&Ld(e,a);break;case 13:ca(e,a),i&4&&qd(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Th.bind(null,a),$h(e,a))));break;case 22:if(i=a.memoizedState!==null||ra,!i){t=t!==null&&t.memoizedState!==null||Ve,l=ra;var o=Ve;ra=i,(Ve=t)&&!o?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),ra=l,Ve=o}break;case 30:break;default:ca(e,a)}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Co(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,st=!1;function sa(e,t,a){for(a=a.child;a!==null;)Hd(e,t,a),a=a.sibling}function Hd(e,t,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 26:Ve||Zt(a,t),sa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Zt(a,t);var i=Ue,l=st;Ra(a.type)&&(Ue=a.stateNode,st=!1),sa(e,t,a),Ol(a.stateNode),Ue=i,st=l;break;case 5:Ve||Zt(a,t);case 6:if(i=Ue,l=st,Ue=null,sa(e,t,a),Ue=i,st=l,Ue!==null)if(st)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(o){ke(a,t,o)}else try{Ue.removeChild(a.stateNode)}catch(o){ke(a,t,o)}break;case 18:Ue!==null&&(st?(e=Ue,Of(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qi(e)):Of(Ue,a.stateNode));break;case 4:i=Ue,l=st,Ue=a.stateNode.containerInfo,st=!0,sa(e,t,a),Ue=i,st=l;break;case 0:case 11:case 14:case 15:Aa(2,a,t),Ve||Aa(4,a,t),sa(e,t,a);break;case 1:Ve||(Zt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Od(a,t,i)),sa(e,t,a);break;case 21:sa(e,t,a);break;case 22:Ve=(i=Ve)||a.memoizedState!==null,sa(e,t,a),Ve=i;break;default:sa(e,t,a)}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qi(e)}catch(a){ke(t,t.return,a)}}}function qd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qi(e)}catch(a){ke(t,t.return,a)}}function zh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rd),t;default:throw Error(c(435,e.tag))}}function Gn(e,t){var a=zh(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=Ch.bind(null,e,i);i.then(l,l)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],o=e,s=t,f=s;e:for(;f!==null;){switch(f.tag){case 27:if(Ra(f.type)){Ue=f.stateNode,st=!1;break e}break;case 5:Ue=f.stateNode,st=!1;break e;case 3:case 4:Ue=f.stateNode.containerInfo,st=!0;break e}f=f.return}if(Ue===null)throw Error(c(160));Hd(o,s,l),Ue=null,st=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Yd(t,e),t=t.sibling}var qt=null;function Yd(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ut(e),i&4&&(Aa(3,e,e.return),zl(3,e),Aa(5,e,e.return));break;case 1:ct(t,e),ut(e),i&512&&(Ve||a===null||Zt(a,a.return)),i&64&&ra&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=qt;if(ct(t,e),ut(e),i&512&&(Ve||a===null||Zt(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[$i]||o[We]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),tt(o,i,a),o[We]=e,$e(o),i=o;break e;case"link":var s=Gf("link","href",l).get(i+(a.href||""));if(s){for(var f=0;f<s.length;f++)if(o=s[f],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(f,1);break t}}o=l.createElement(i),tt(o,i,a),l.head.appendChild(o);break;case"meta":if(s=Gf("meta","content",l).get(i+(a.content||""))){for(f=0;f<s.length;f++)if(o=s[f],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(f,1);break t}}o=l.createElement(i),tt(o,i,a),l.head.appendChild(o);break;default:throw Error(c(468,i))}o[We]=e,$e(o),i=o}e.stateNode=i}else Qf(l,e.type,e.stateNode);else e.stateNode=Yf(l,i,e.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?Qf(l,e.type,e.stateNode):Yf(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Wr(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ut(e),i&512&&(Ve||a===null||Zt(a,a.return)),a!==null&&i&4&&Wr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ut(e),i&512&&(Ve||a===null||Zt(a,a.return)),e.flags&32){l=e.stateNode;try{fi(l,"")}catch(X){ke(e,e.return,X)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Wr(e,l,a!==null?a.memoizedProps:l)),i&1024&&(es=!0);break;case 6:if(ct(t,e),ut(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(X){ke(e,e.return,X)}}break;case 3:if(lo=null,l=qt,qt=ao(t.containerInfo),ct(t,e),qt=l,ut(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(X){ke(e,e.return,X)}es&&(es=!1,Gd(e));break;case 4:i=qt,qt=ao(e.stateNode.containerInfo),ct(t,e),ut(e),qt=i;break;case 12:ct(t,e),ut(e);break;case 31:ct(t,e),ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gn(e,i)));break;case 13:ct(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xn=ht()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gn(e,i)));break;case 22:l=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,k=ra,O=Ve;if(ra=k||l,Ve=O||b,ct(t,e),Ve=O,ra=k,ut(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||b||ra||Ve||li(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(o=b.stateNode,l)s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=b.stateNode;var R=b.memoizedProps.style,A=R!=null&&R.hasOwnProperty("display")?R.display:null;f.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(X){ke(b,b.return,X)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(X){ke(b,b.return,X)}}}else if(t.tag===18){if(a===null){b=t;try{var T=b.stateNode;l?Mf(T,!0):Mf(b.stateNode,!1)}catch(X){ke(b,b.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Gn(e,a))));break;case 19:ct(t,e),ut(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gn(e,i)));break;case 30:break;case 21:break;default:ct(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Dd(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,o=Ir(e);Yn(e,o,l);break;case 5:var s=a.stateNode;a.flags&32&&(fi(s,""),a.flags&=-33);var f=Ir(e);Yn(e,f,s);break;case 3:case 4:var b=a.stateNode.containerInfo,k=Ir(e);Pr(e,k,b);break;default:throw Error(c(161))}}catch(O){ke(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Gd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ud(e,t.alternate,t),t=t.sibling}function li(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),li(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Od(t,t.return,a),li(t);break;case 27:Ol(t.stateNode);case 26:case 5:Zt(t,t.return),li(t);break;case 22:t.memoizedState===null&&li(t);break;case 30:li(t);break;default:li(t)}e=e.sibling}}function ua(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,s=o.flags;switch(o.tag){case 0:case 11:case 15:ua(l,o,a),zl(4,o);break;case 1:if(ua(l,o,a),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(k){ke(i,i.return,k)}if(i=o,l=i.updateQueue,l!==null){var f=i.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)bu(b[l],f)}catch(k){ke(i,i.return,k)}}a&&s&64&&Cd(o),wl(o,o.return);break;case 27:_d(o);case 26:case 5:ua(l,o,a),a&&i===null&&s&4&&Md(o),wl(o,o.return);break;case 12:ua(l,o,a);break;case 31:ua(l,o,a),a&&s&4&&Ld(l,o);break;case 13:ua(l,o,a),a&&s&4&&qd(l,o);break;case 22:o.memoizedState===null&&ua(l,o,a),wl(o,o.return);break;case 30:break;default:ua(l,o,a)}t=t.sibling}}function ts(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sl(a))}function as(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e))}function Yt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qd(e,t,a,i),t=t.sibling}function Qd(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,a,i),l&2048&&zl(9,t);break;case 1:Yt(e,t,a,i);break;case 3:Yt(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sl(e)));break;case 12:if(l&2048){Yt(e,t,a,i),e=t.stateNode;try{var o=t.memoizedProps,s=o.id,f=o.onPostCommit;typeof f=="function"&&f(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){ke(t,t.return,b)}}else Yt(e,t,a,i);break;case 31:Yt(e,t,a,i);break;case 13:Yt(e,t,a,i);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState!==null?o._visibility&2?Yt(e,t,a,i):jl(e,t):o._visibility&2?Yt(e,t,a,i):(o._visibility|=2,Mi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ts(s,t);break;case 24:Yt(e,t,a,i),l&2048&&as(t.alternate,t);break;default:Yt(e,t,a,i)}}function Mi(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,s=t,f=a,b=i,k=s.flags;switch(s.tag){case 0:case 11:case 15:Mi(o,s,f,b,l),zl(8,s);break;case 23:break;case 22:var O=s.stateNode;s.memoizedState!==null?O._visibility&2?Mi(o,s,f,b,l):jl(o,s):(O._visibility|=2,Mi(o,s,f,b,l)),l&&k&2048&&ts(s.alternate,s);break;case 24:Mi(o,s,f,b,l),l&&k&2048&&as(s.alternate,s);break;default:Mi(o,s,f,b,l)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:jl(a,i),l&2048&&ts(i.alternate,i);break;case 24:jl(a,i),l&2048&&as(i.alternate,i);break;default:jl(a,i)}t=t.sibling}}var Sl=8192;function Di(e,t,a){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)Xd(e,t,a),e=e.sibling}function Xd(e,t,a){switch(e.tag){case 26:Di(e,t,a),e.flags&Sl&&e.memoizedState!==null&&rg(a,qt,e.memoizedState,e.memoizedProps);break;case 5:Di(e,t,a);break;case 3:case 4:var i=qt;qt=ao(e.stateNode.containerInfo),Di(e,t,a),qt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,Di(e,t,a),Sl=i):Di(e,t,a));break;default:Di(e,t,a)}}function Vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Fe=i,Kd(i,e)}Vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zd(e),e=e.sibling}function Zd(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qn(e)):Nl(e);break;default:Nl(e)}}function Qn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Fe=i,Kd(i,e)}Vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),Qn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Qn(t));break;default:Qn(t)}e=e.sibling}}function Kd(e,t){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:Aa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:sl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Fe=i;else e:for(a=e;Fe!==null;){i=Fe;var l=i.sibling,o=i.return;if(Bd(i),i===a){Fe=null;break e}if(l!==null){l.return=o,Fe=l;break e}Fe=o}}}var wh={getCacheForType:function(e){var t=Pe(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(Ge).controller.signal}},jh=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Me=null,de=null,ge=0,Ee=0,wt=null,Ta=!1,_i=!1,is=!1,da=0,Le=0,Ca=0,ni=0,ls=0,jt=0,Ri=0,El=null,dt=null,ns=!1,Xn=0,Jd=0,Vn=1/0,Zn=null,Oa=null,Ke=0,Ma=null,Ui=null,fa=0,os=0,rs=null,$d=null,kl=0,ss=null;function St(){return(Ne&2)!==0&&ge!==0?ge&-ge:C.T!==null?ms():dc()}function Fd(){if(jt===0)if((ge&536870912)===0||ye){var e=Pl;Pl<<=1,(Pl&3932160)===0&&(Pl=262144),jt=e}else jt=536870912;return e=yt.current,e!==null&&(e.flags|=32),jt}function ft(e,t,a){(e===Me&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Bi(e,0),Da(e,ge,jt,!1)),Ji(e,a),((Ne&2)===0||e!==Me)&&(e===Me&&((Ne&2)===0&&(ni|=a),Le===4&&Da(e,ge,jt,!1)),Kt(e))}function Wd(e,t,a){if((Ne&6)!==0)throw Error(c(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ki(e,t),l=i?Eh(e,t):us(e,t,!0),o=i;do{if(l===0){_i&&!i&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Sh(a)){l=us(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var f=e;l=El;var b=f.current.memoizedState.isDehydrated;if(b&&(Bi(f,s).flags|=256),s=us(f,s,!1),s!==2){if(is&&!b){f.errorRecoveryDisabledLanes|=o,ni|=o,l=4;break e}o=dt,dt=l,o!==null&&(dt===null?dt=o:dt.push.apply(dt,o))}l=s}if(o=!1,l!==2)continue}}if(l===1){Bi(e,0),Da(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Da(i,t,jt,!Ta);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Xn+300-ht(),10<l)){if(Da(i,t,jt,!Ta),tn(i,0,!0)!==0)break e;fa=t,i.timeoutHandle=Tf(Id.bind(null,i,a,dt,Zn,ns,t,jt,ni,Ri,Ta,o,"Throttled",-0,0),l);break e}Id(i,a,dt,Zn,ns,t,jt,ni,Ri,Ta,o,null,-0,0)}}break}while(!0);Kt(e)}function Id(e,t,a,i,l,o,s,f,b,k,O,R,A,T){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Xd(t,o,R);var X=(o&62914560)===o?Xn-ht():(o&4194048)===o?Jd-ht():0;if(X=sg(R,X),X!==null){fa=o,e.cancelPendingCommit=X(rf.bind(null,e,t,o,a,i,l,s,f,b,O,R,null,A,T)),Da(e,o,s,!k);return}}rf(e,t,o,a,i,l,s,f,b)}function Sh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],o=l.getSnapshot;l=l.value;try{if(!vt(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,i){t&=~ls,t&=~ni,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-xt(l),s=1<<o;i[o]=-1,l&=~s}a!==0&&sc(e,a,t)}function Kn(){return(Ne&6)===0?(Al(0),!1):!0}function cs(){if(de!==null){if(Ee===0)var e=de.return;else e=de,ta=Fa=null,Nr(e),ki=null,ul=0,e=de;for(;e!==null;)Td(e.alternate,e),e=e.return;de=null}}function Bi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Xh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,cs(),Me=e,de=a=Pt(e.current,null),ge=t,Ee=0,wt=null,Ta=!1,_i=Ki(e,t),is=!1,Ri=jt=ls=ni=Ca=Le=0,dt=El=null,ns=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-xt(i),o=1<<l;t|=e[l],i&=~o}return da=t,mn(),a}function Pd(e,t){oe=null,C.H=vl,t===Ei||t===wn?(t=hu(),Ee=3):t===pr?(t=hu(),Ee=4):Ee=t===Yr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,de===null&&(Le=1,Un(e,Tt(t,e.current)))}function ef(){var e=yt.current;return e===null?!0:(ge&4194048)===ge?Dt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Dt:!1}function tf(){var e=C.H;return C.H=vl,e===null?vl:e}function af(){var e=C.A;return C.A=wh,e}function Jn(){Le=4,Ta||(ge&4194048)!==ge&&yt.current!==null||(_i=!0),(Ca&134217727)===0&&(ni&134217727)===0||Me===null||Da(Me,ge,jt,!1)}function us(e,t,a){var i=Ne;Ne|=2;var l=tf(),o=af();(Me!==e||ge!==t)&&(Zn=null,Bi(e,t)),t=!1;var s=Le;e:do try{if(Ee!==0&&de!==null){var f=de,b=wt;switch(Ee){case 8:cs(),s=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var k=Ee;if(Ee=0,wt=null,Hi(e,f,b,k),a&&_i){s=0;break e}break;default:k=Ee,Ee=0,wt=null,Hi(e,f,b,k)}}Nh(),s=Le;break}catch(O){Pd(e,O)}while(!0);return t&&e.shellSuspendCounter++,ta=Fa=null,Ne=i,C.H=l,C.A=o,de===null&&(Me=null,ge=0,mn()),s}function Nh(){for(;de!==null;)lf(de)}function Eh(e,t){var a=Ne;Ne|=2;var i=tf(),l=af();Me!==e||ge!==t?(Zn=null,Vn=ht()+500,Bi(e,t)):_i=Ki(e,t);e:do try{if(Ee!==0&&de!==null){t=de;var o=wt;t:switch(Ee){case 1:Ee=0,wt=null,Hi(e,t,o,1);break;case 2:case 9:if(pu(o)){Ee=0,wt=null,nf(t);break}t=function(){Ee!==2&&Ee!==9||Me!==e||(Ee=7),Kt(e)},o.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:pu(o)?(Ee=0,wt=null,nf(t)):(Ee=0,wt=null,Hi(e,t,o,7));break;case 5:var s=null;switch(de.tag){case 26:s=de.memoizedState;case 5:case 27:var f=de;if(s?Xf(s):f.stateNode.complete){Ee=0,wt=null;var b=f.sibling;if(b!==null)de=b;else{var k=f.return;k!==null?(de=k,$n(k)):de=null}break t}}Ee=0,wt=null,Hi(e,t,o,5);break;case 6:Ee=0,wt=null,Hi(e,t,o,6);break;case 8:cs(),Le=6;break e;default:throw Error(c(462))}}kh();break}catch(O){Pd(e,O)}while(!0);return ta=Fa=null,C.H=i,C.A=l,Ne=a,de!==null?0:(Me=null,ge=0,mn(),Le)}function kh(){for(;de!==null&&!Fp();)lf(de)}function lf(e){var t=kd(e.alternate,e,da);e.memoizedProps=e.pendingProps,t===null?$n(e):de=t}function nf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=zd(a,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=zd(a,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:Nr(t);default:Td(a,t),t=de=au(t,da),t=kd(a,t,da)}e.memoizedProps=e.pendingProps,t===null?$n(e):de=t}function Hi(e,t,a,i){ta=Fa=null,Nr(t),ki=null,ul=0;var l=t.return;try{if(hh(e,l,t,a,ge)){Le=1,Un(e,Tt(a,e.current)),de=null;return}}catch(o){if(l!==null)throw de=l,o;Le=1,Un(e,Tt(a,e.current)),de=null;return}t.flags&32768?(ye||i===1?e=!0:_i||(ge&536870912)!==0?e=!1:(Ta=e=!0,(i===2||i===9||i===3||i===6)&&(i=yt.current,i!==null&&i.tag===13&&(i.flags|=16384))),of(t,e)):$n(t)}function $n(e){var t=e;do{if((t.flags&32768)!==0){of(t,Ta);return}e=t.return;var a=vh(t.alternate,t,da);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Le===0&&(Le=5)}function of(e,t){do{var a=bh(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Le=6,de=null}function rf(e,t,a,i,l,o,s,f,b){e.cancelPendingCommit=null;do Fn();while(Ke!==0);if((Ne&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Io,om(e,a,o,s,f,b),e===Me&&(de=Me=null,ge=0),Ui=t,Ma=e,fa=a,os=o,rs=l,$d=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Oh(Wl,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=C.T,C.T=null,l=Y.p,Y.p=2,s=Ne,Ne|=4;try{yh(e,t,a)}finally{Ne=s,Y.p=l,C.T=i}}Ke=1,sf(),cf(),uf()}}function sf(){if(Ke===1){Ke=0;var e=Ma,t=Ui,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var i=Y.p;Y.p=2;var l=Ne;Ne|=4;try{Yd(t,e);var o=ws,s=Kc(e.containerInfo),f=o.focusedElem,b=o.selectionRange;if(s!==f&&f&&f.ownerDocument&&Zc(f.ownerDocument.documentElement,f)){if(b!==null&&Ko(f)){var k=b.start,O=b.end;if(O===void 0&&(O=k),"selectionStart"in f)f.selectionStart=k,f.selectionEnd=Math.min(O,f.value.length);else{var R=f.ownerDocument||document,A=R&&R.defaultView||window;if(A.getSelection){var T=A.getSelection(),X=f.textContent.length,te=Math.min(b.start,X),Oe=b.end===void 0?te:Math.min(b.end,X);!T.extend&&te>Oe&&(s=Oe,Oe=te,te=s);var j=Vc(f,te),z=Vc(f,Oe);if(j&&z&&(T.rangeCount!==1||T.anchorNode!==j.node||T.anchorOffset!==j.offset||T.focusNode!==z.node||T.focusOffset!==z.offset)){var N=R.createRange();N.setStart(j.node,j.offset),T.removeAllRanges(),te>Oe?(T.addRange(N),T.extend(z.node,z.offset)):(N.setEnd(z.node,z.offset),T.addRange(N))}}}}for(R=[],T=f;T=T.parentNode;)T.nodeType===1&&R.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<R.length;f++){var M=R[f];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}so=!!zs,ws=zs=null}finally{Ne=l,Y.p=i,C.T=a}}e.current=t,Ke=2}}function cf(){if(Ke===2){Ke=0;var e=Ma,t=Ui,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var i=Y.p;Y.p=2;var l=Ne;Ne|=4;try{Ud(e,t.alternate,t)}finally{Ne=l,Y.p=i,C.T=a}}Ke=3}}function uf(){if(Ke===4||Ke===3){Ke=0,Wp();var e=Ma,t=Ui,a=fa,i=$d;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,Ui=Ma=null,df(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Oa=null),Ao(a),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=C.T,l=Y.p,Y.p=2,C.T=null;try{for(var o=e.onRecoverableError,s=0;s<i.length;s++){var f=i[s];o(f.value,{componentStack:f.stack})}}finally{C.T=t,Y.p=l}}(fa&3)!==0&&Fn(),Kt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ss?kl++:(kl=0,ss=e):kl=0,Al(0)}}function df(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sl(t)))}function Fn(){return sf(),cf(),uf(),ff()}function ff(){if(Ke!==5)return!1;var e=Ma,t=os;os=0;var a=Ao(fa),i=C.T,l=Y.p;try{Y.p=32>a?32:a,C.T=null,a=rs,rs=null;var o=Ma,s=fa;if(Ke=0,Ui=Ma=null,fa=0,(Ne&6)!==0)throw Error(c(331));var f=Ne;if(Ne|=4,Zd(o.current),Qd(o,o.current,s,a),Ne=f,Al(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Zi,o)}catch{}return!0}finally{Y.p=l,C.T=i,df(e,t)}}function pf(e,t,a){t=Tt(a,t),t=qr(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(Ji(e,2),Kt(e))}function ke(e,t,a){if(e.tag===3)pf(e,e,a);else for(;t!==null;){if(t.tag===3){pf(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){e=Tt(a,e),a=pd(2),i=Na(t,a,2),i!==null&&(md(a,i,t,e),Ji(i,2),Kt(i));break}}t=t.return}}function ds(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new jh;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(is=!0,l.add(a),e=Ah.bind(null,e,t,a),t.then(e,e))}function Ah(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(ge&a)===a&&(Le===4||Le===3&&(ge&62914560)===ge&&300>ht()-Xn?(Ne&2)===0&&Bi(e,0):ls|=a,Ri===ge&&(Ri=0)),Kt(e)}function mf(e,t){t===0&&(t=rc()),e=Ka(e,t),e!==null&&(Ji(e,t),Kt(e))}function Th(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),mf(e,a)}function Ch(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),mf(e,a)}function Oh(e,t){return So(e,t)}var Wn=null,Li=null,fs=!1,In=!1,ps=!1,_a=0;function Kt(e){e!==Li&&e.next===null&&(Li===null?Wn=Li=e:Li=Li.next=e),In=!0,fs||(fs=!0,Dh())}function Al(e,t){if(!ps&&In){ps=!0;do for(var a=!1,i=Wn;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var s=i.suspendedLanes,f=i.pingedLanes;o=(1<<31-xt(42|e)+1)-1,o&=l&~(s&~f),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,vf(i,o))}else o=ge,o=tn(i,i===Me?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Ki(i,o)||(a=!0,vf(i,o));i=i.next}while(a);ps=!1}}function Mh(){hf()}function hf(){In=fs=!1;var e=0;_a!==0&&Qh()&&(e=_a);for(var t=ht(),a=null,i=Wn;i!==null;){var l=i.next,o=gf(i,t);o===0?(i.next=null,a===null?Wn=l:a.next=l,l===null&&(Li=a)):(a=i,(e!==0||(o&3)!==0)&&(In=!0)),i=l}Ke!==0&&Ke!==5||Al(e),_a!==0&&(_a=0)}function gf(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var s=31-xt(o),f=1<<s,b=l[s];b===-1?((f&a)===0||(f&i)!==0)&&(l[s]=nm(f,t)):b<=t&&(e.expiredLanes|=f),o&=~f}if(t=Me,a=ge,a=tn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&No(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ki(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&No(i),Ao(a)){case 2:case 8:a=nc;break;case 32:a=Wl;break;case 268435456:a=oc;break;default:a=Wl}return i=xf.bind(null,e),a=So(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&No(i),e.callbackPriority=2,e.callbackNode=null,2}function xf(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fn()&&e.callbackNode!==a)return null;var i=ge;return i=tn(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Wd(e,i,t),gf(e,ht()),e.callbackNode!=null&&e.callbackNode===a?xf.bind(null,e):null)}function vf(e,t){if(Fn())return null;Wd(e,t,!0)}function Dh(){Vh(function(){(Ne&6)!==0?So(lc,Mh):hf()})}function ms(){if(_a===0){var e=Si;e===0&&(e=Il,Il<<=1,(Il&261888)===0&&(Il=256)),_a=e}return _a}function bf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:on(""+e)}function yf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function _h(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var o=bf((l[ot]||null).action),s=i.submitter;s&&(t=(t=s[ot]||null)?bf(t.formAction):s.getAttribute("formAction"),t!==null&&(o=t,s=null));var f=new un("action","action",null,i,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_a!==0){var b=s?yf(l,s):new FormData(l);_r(a,{pending:!0,data:b,method:l.method,action:o},null,b)}}else typeof o=="function"&&(f.preventDefault(),b=s?yf(l,s):new FormData(l),_r(a,{pending:!0,data:b,method:l.method,action:o},o,b))},currentTarget:l}]})}}for(var hs=0;hs<Wo.length;hs++){var gs=Wo[hs],Rh=gs.toLowerCase(),Uh=gs[0].toUpperCase()+gs.slice(1);Lt(Rh,"on"+Uh)}Lt(Fc,"onAnimationEnd"),Lt(Wc,"onAnimationIteration"),Lt(Ic,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Im,"onTransitionRun"),Lt(Pm,"onTransitionStart"),Lt(eh,"onTransitionCancel"),Lt(Pc,"onTransitionEnd"),ui("onMouseEnter",["mouseout","mouseover"]),ui("onMouseLeave",["mouseout","mouseover"]),ui("onPointerEnter",["pointerout","pointerover"]),ui("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function zf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var f=i[s],b=f.instance,k=f.currentTarget;if(f=f.listener,b!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=k;try{o(l)}catch(O){pn(O)}l.currentTarget=null,o=b}else for(s=0;s<i.length;s++){if(f=i[s],b=f.instance,k=f.currentTarget,f=f.listener,b!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=k;try{o(l)}catch(O){pn(O)}l.currentTarget=null,o=b}}}}function fe(e,t){var a=t[To];a===void 0&&(a=t[To]=new Set);var i=e+"__bubble";a.has(i)||(wf(t,e,2,!1),a.add(i))}function xs(e,t,a){var i=0;t&&(i|=4),wf(a,e,i,t)}var Pn="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[Pn]){e[Pn]=!0,mc.forEach(function(a){a!=="selectionchange"&&(Bh.has(a)||xs(a,!1,e),xs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pn]||(t[Pn]=!0,xs("selectionchange",!1,t))}}function wf(e,t,a,i){switch(Wf(t)){case 2:var l=dg;break;case 8:l=fg;break;default:l=Ds}a=l.bind(null,t,a,e),l=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function bs(e,t,a,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var f=i.stateNode.containerInfo;if(f===l)break;if(s===4)for(s=i.return;s!==null;){var b=s.tag;if((b===3||b===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;f!==null;){if(s=ri(f),s===null)return;if(b=s.tag,b===5||b===6||b===26||b===27){i=o=s;continue e}f=f.parentNode}}i=i.return}Ec(function(){var k=o,O=Uo(a),R=[];e:{var A=eu.get(e);if(A!==void 0){var T=un,X=e;switch(e){case"keypress":if(sn(a)===0)break e;case"keydown":case"keyup":T=Cm;break;case"focusin":X="focus",T=Go;break;case"focusout":X="blur",T=Go;break;case"beforeblur":case"afterblur":T=Go;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Dm;break;case Fc:case Wc:case Ic:T=zm;break;case Pc:T=Rm;break;case"scroll":case"scrollend":T=gm;break;case"wheel":T=Bm;break;case"copy":case"cut":case"paste":T=jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Oc;break;case"toggle":case"beforetoggle":T=Lm}var te=(t&4)!==0,Oe=!te&&(e==="scroll"||e==="scrollend"),j=te?A!==null?A+"Capture":null:A;te=[];for(var z=k,N;z!==null;){var M=z;if(N=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||N===null||j===null||(M=Wi(z,j),M!=null&&te.push(Cl(z,M,N))),Oe)break;z=z.return}0<te.length&&(A=new T(A,X,null,a,O),R.push({event:A,listeners:te}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",A&&a!==Ro&&(X=a.relatedTarget||a.fromElement)&&(ri(X)||X[oi]))break e;if((T||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,T?(X=a.relatedTarget||a.toElement,T=k,X=X?ri(X):null,X!==null&&(Oe=m(X),te=X.tag,X!==Oe||te!==5&&te!==27&&te!==6)&&(X=null)):(T=null,X=k),T!==X)){if(te=Tc,M="onMouseLeave",j="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(te=Oc,M="onPointerLeave",j="onPointerEnter",z="pointer"),Oe=T==null?A:Fi(T),N=X==null?A:Fi(X),A=new te(M,z+"leave",T,a,O),A.target=Oe,A.relatedTarget=N,M=null,ri(O)===k&&(te=new te(j,z+"enter",X,a,O),te.target=N,te.relatedTarget=Oe,M=te),Oe=M,T&&X)t:{for(te=Hh,j=T,z=X,N=0,M=j;M;M=te(M))N++;M=0;for(var W=z;W;W=te(W))M++;for(;0<N-M;)j=te(j),N--;for(;0<M-N;)z=te(z),M--;for(;N--;){if(j===z||z!==null&&j===z.alternate){te=j;break t}j=te(j),z=te(z)}te=null}else te=null;T!==null&&jf(R,A,T,te,!1),X!==null&&Oe!==null&&jf(R,Oe,X,te,!0)}}e:{if(A=k?Fi(k):window,T=A.nodeName&&A.nodeName.toLowerCase(),T==="select"||T==="input"&&A.type==="file")var je=Lc;else if(Bc(A))if(qc)je=$m;else{je=Km;var K=Zm}else T=A.nodeName,!T||T.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?k&&_o(k.elementType)&&(je=Lc):je=Jm;if(je&&(je=je(e,k))){Hc(R,je,a,O);break e}K&&K(e,A,k),e==="focusout"&&k&&A.type==="number"&&k.memoizedProps.value!=null&&Do(A,"number",A.value)}switch(K=k?Fi(k):window,e){case"focusin":(Bc(K)||K.contentEditable==="true")&&(gi=K,Jo=k,nl=null);break;case"focusout":nl=Jo=gi=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,Jc(R,a,O);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":Jc(R,a,O)}var se;if(Xo)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else hi?Rc(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Mc&&a.locale!=="ko"&&(hi||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&hi&&(se=kc()):(va=O,Lo="value"in va?va.value:va.textContent,hi=!0)),K=eo(k,xe),0<K.length&&(xe=new Cc(xe,e,null,a,O),R.push({event:xe,listeners:K}),se?xe.data=se:(se=Uc(a),se!==null&&(xe.data=se)))),(se=Ym?Gm(e,a):Qm(e,a))&&(xe=eo(k,"onBeforeInput"),0<xe.length&&(K=new Cc("onBeforeInput","beforeinput",null,a,O),R.push({event:K,listeners:xe}),K.data=se)),_h(R,e,k,a,O)}zf(R,t)})}function Cl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function eo(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Wi(e,a),l!=null&&i.unshift(Cl(e,l,o)),l=Wi(e,t),l!=null&&i.push(Cl(e,l,o))),e.tag===3)return i;e=e.return}return[]}function Hh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jf(e,t,a,i,l){for(var o=t._reactName,s=[];a!==null&&a!==i;){var f=a,b=f.alternate,k=f.stateNode;if(f=f.tag,b!==null&&b===i)break;f!==5&&f!==26&&f!==27||k===null||(b=k,l?(k=Wi(a,o),k!=null&&s.unshift(Cl(a,k,b))):l||(k=Wi(a,o),k!=null&&s.push(Cl(a,k,b)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Lh=/\r\n?/g,qh=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(Lh,`
`).replace(qh,"")}function Nf(e,t){return t=Sf(t),Sf(e)===t}function Ce(e,t,a,i,l,o){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||fi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&fi(e,""+i);break;case"className":ln(e,"class",i);break;case"tabIndex":ln(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ln(e,a,i);break;case"style":Sc(e,i,o);break;case"data":if(t!=="object"){ln(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=on(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ce(e,t,"name",l.name,l,null),Ce(e,t,"formEncType",l.formEncType,l,null),Ce(e,t,"formMethod",l.formMethod,l,null),Ce(e,t,"formTarget",l.formTarget,l,null)):(Ce(e,t,"encType",l.encType,l,null),Ce(e,t,"method",l.method,l,null),Ce(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=on(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Wt);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=on(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":fe("beforetoggle",e),fe("toggle",e),an(e,"popover",i);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":an(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mm.get(a)||a,an(e,a,i))}}function ys(e,t,a,i,l,o){switch(a){case"style":Sc(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?fi(e,i):(typeof i=="number"||typeof i=="bigint")&&fi(e,""+i);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[ot]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):an(e,a,i)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var i=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];if(s!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ce(e,t,o,s,a,null)}}l&&Ce(e,t,"srcSet",a.srcSet,a,null),i&&Ce(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var f=o=s=l=null,b=null,k=null;for(i in a)if(a.hasOwnProperty(i)){var O=a[i];if(O!=null)switch(i){case"name":l=O;break;case"type":s=O;break;case"checked":b=O;break;case"defaultChecked":k=O;break;case"value":o=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:Ce(e,t,i,O,a,null)}}yc(e,o,f,b,k,s,l,!1);return;case"select":fe("invalid",e),i=s=o=null;for(l in a)if(a.hasOwnProperty(l)&&(f=a[l],f!=null))switch(l){case"value":o=f;break;case"defaultValue":s=f;break;case"multiple":i=f;default:Ce(e,t,l,f,a,null)}t=o,a=s,e.multiple=!!i,t!=null?di(e,!!i,t,!1):a!=null&&di(e,!!i,a,!0);return;case"textarea":fe("invalid",e),o=l=i=null;for(s in a)if(a.hasOwnProperty(s)&&(f=a[s],f!=null))switch(s){case"value":i=f;break;case"defaultValue":l=f;break;case"children":o=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:Ce(e,t,s,f,a,null)}wc(e,i,l,o);return;case"option":for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null)&&(b==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ce(e,t,b,i,a,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(i=0;i<Tl.length;i++)fe(Tl[i],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(i=a[k],i!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ce(e,t,k,i,a,null)}return;default:if(_o(t)){for(O in a)a.hasOwnProperty(O)&&(i=a[O],i!==void 0&&ys(e,t,O,i,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(i=a[f],i!=null&&Ce(e,t,f,i,a,null))}function Yh(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,s=null,f=null,b=null,k=null,O=null;for(T in a){var R=a[T];if(a.hasOwnProperty(T)&&R!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":b=R;default:i.hasOwnProperty(T)||Ce(e,t,T,null,i,R)}}for(var A in i){var T=i[A];if(R=a[A],i.hasOwnProperty(A)&&(T!=null||R!=null))switch(A){case"type":o=T;break;case"name":l=T;break;case"checked":k=T;break;case"defaultChecked":O=T;break;case"value":s=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:T!==R&&Ce(e,t,A,T,i,R)}}Mo(e,s,f,b,k,O,o,l);return;case"select":T=s=f=A=null;for(o in a)if(b=a[o],a.hasOwnProperty(o)&&b!=null)switch(o){case"value":break;case"multiple":T=b;default:i.hasOwnProperty(o)||Ce(e,t,o,null,i,b)}for(l in i)if(o=i[l],b=a[l],i.hasOwnProperty(l)&&(o!=null||b!=null))switch(l){case"value":A=o;break;case"defaultValue":f=o;break;case"multiple":s=o;default:o!==b&&Ce(e,t,l,o,i,b)}t=f,a=s,i=T,A!=null?di(e,!!a,A,!1):!!i!=!!a&&(t!=null?di(e,!!a,t,!0):di(e,!!a,a?[]:"",!1));return;case"textarea":T=A=null;for(f in a)if(l=a[f],a.hasOwnProperty(f)&&l!=null&&!i.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ce(e,t,f,null,i,l)}for(s in i)if(l=i[s],o=a[s],i.hasOwnProperty(s)&&(l!=null||o!=null))switch(s){case"value":A=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Ce(e,t,s,l,i,o)}zc(e,A,T);return;case"option":for(var X in a)A=a[X],a.hasOwnProperty(X)&&A!=null&&!i.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:Ce(e,t,X,null,i,A));for(b in i)A=i[b],T=a[b],i.hasOwnProperty(b)&&A!==T&&(A!=null||T!=null)&&(b==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ce(e,t,b,A,i,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)A=a[te],a.hasOwnProperty(te)&&A!=null&&!i.hasOwnProperty(te)&&Ce(e,t,te,null,i,A);for(k in i)if(A=i[k],T=a[k],i.hasOwnProperty(k)&&A!==T&&(A!=null||T!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ce(e,t,k,A,i,T)}return;default:if(_o(t)){for(var Oe in a)A=a[Oe],a.hasOwnProperty(Oe)&&A!==void 0&&!i.hasOwnProperty(Oe)&&ys(e,t,Oe,void 0,i,A);for(O in i)A=i[O],T=a[O],!i.hasOwnProperty(O)||A===T||A===void 0&&T===void 0||ys(e,t,O,A,i,T);return}}for(var j in a)A=a[j],a.hasOwnProperty(j)&&A!=null&&!i.hasOwnProperty(j)&&Ce(e,t,j,null,i,A);for(R in i)A=i[R],T=a[R],!i.hasOwnProperty(R)||A===T||A==null&&T==null||Ce(e,t,R,A,i,T)}function Ef(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],o=l.transferSize,s=l.initiatorType,f=l.duration;if(o&&f&&Ef(s)){for(s=0,f=l.responseEnd,i+=1;i<a.length;i++){var b=a[i],k=b.startTime;if(k>f)break;var O=b.transferSize,R=b.initiatorType;O&&Ef(R)&&(b=b.responseEnd,s+=O*(b<f?1:(f-k)/(b-k)))}if(--i,t+=8*(o+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zs=null,ws=null;function to(e){return e.nodeType===9?e:e.ownerDocument}function kf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Af(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=null;function Qh(){var e=window.event;return e&&e.type==="popstate"?e===Ss?!1:(Ss=e,!0):(Ss=null,!1)}var Tf=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(e){return Cf.resolve(null).then(e).catch(Zh)}:Tf;function Zh(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Of(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),Qi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Ol(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ol(a);for(var o=a.firstChild;o;){var s=o.nextSibling,f=o.nodeName;o[$i]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=s}}else a==="body"&&Ol(e.ownerDocument.body);a=l}while(a);Qi(t)}function Mf(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Ns(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ns(a),Co(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kh(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[$i])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function Jh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Df(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Es(e){return e.data==="$?"||e.data==="$~"}function ks(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $h(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var As=null;function _f(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Uf(e,t,a){switch(t=to(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ol(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Co(e)}var Rt=new Map,Bf=new Set;function ao(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=Y.d;Y.d={f:Fh,r:Wh,D:Ih,C:Ph,L:eg,m:tg,X:ig,S:ag,M:lg};function Fh(){var e=pa.f(),t=Kn();return e||t}function Wh(e){var t=si(e);t!==null&&t.tag===5&&t.type==="form"?Pu(t):pa.r(e)}var qi=typeof document>"u"?null:document;function Hf(e,t,a){var i=qi;if(i&&typeof t=="string"&&t){var l=kt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Bf.has(l)||(Bf.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),tt(t,"link",e),$e(t),i.head.appendChild(t)))}}function Ih(e){pa.D(e),Hf("dns-prefetch",e,null)}function Ph(e,t){pa.C(e,t),Hf("preconnect",e,t)}function eg(e,t,a){pa.L(e,t,a);var i=qi;if(i&&e&&t){var l='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+kt(a.imageSizes)+'"]')):l+='[href="'+kt(e)+'"]';var o=l;switch(t){case"style":o=Yi(e);break;case"script":o=Gi(e)}Rt.has(o)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Rt.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Ml(o))||t==="script"&&i.querySelector(Dl(o))||(t=i.createElement("link"),tt(t,"link",e),$e(t),i.head.appendChild(t)))}}function tg(e,t){pa.m(e,t);var a=qi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+kt(i)+'"][href="'+kt(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Gi(e)}if(!Rt.has(o)&&(e=y({rel:"modulepreload",href:e},t),Rt.set(o,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(o)))return}i=a.createElement("link"),tt(i,"link",e),$e(i),a.head.appendChild(i)}}}function ag(e,t,a){pa.S(e,t,a);var i=qi;if(i&&e){var l=ci(i).hoistableStyles,o=Yi(e);t=t||"default";var s=l.get(o);if(!s){var f={loading:0,preload:null};if(s=i.querySelector(Ml(o)))f.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Rt.get(o))&&Ts(e,a);var b=s=i.createElement("link");$e(b),tt(b,"link",e),b._p=new Promise(function(k,O){b.onload=k,b.onerror=O}),b.addEventListener("load",function(){f.loading|=1}),b.addEventListener("error",function(){f.loading|=2}),f.loading|=4,io(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:f},l.set(o,s)}}}function ig(e,t){pa.X(e,t);var a=qi;if(a&&e){var i=ci(a).hoistableScripts,l=Gi(e),o=i.get(l);o||(o=a.querySelector(Dl(l)),o||(e=y({src:e,async:!0},t),(t=Rt.get(l))&&Cs(e,t),o=a.createElement("script"),$e(o),tt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function lg(e,t){pa.M(e,t);var a=qi;if(a&&e){var i=ci(a).hoistableScripts,l=Gi(e),o=i.get(l);o||(o=a.querySelector(Dl(l)),o||(e=y({src:e,async:!0,type:"module"},t),(t=Rt.get(l))&&Cs(e,t),o=a.createElement("script"),$e(o),tt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function Lf(e,t,a,i){var l=(l=ae.current)?ao(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Yi(a.href),a=ci(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yi(a.href);var o=ci(l).hoistableStyles,s=o.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=l.querySelector(Ml(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Rt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rt.set(e,a),o||ng(l,e,a,s.state))),t&&i===null)throw Error(c(528,""));return s}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gi(a),a=ci(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Yi(e){return'href="'+kt(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function qf(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function ng(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),tt(t,"link",a),$e(t),e.head.appendChild(t))}function Gi(e){return'[src="'+kt(e)+'"]'}function Dl(e){return"script[async]"+e}function Yf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(i)return t.instance=i,$e(i),i;var l=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),tt(i,"style",l),io(i,a.precedence,e),t.instance=i;case"stylesheet":l=Yi(a.href);var o=e.querySelector(Ml(l));if(o)return t.state.loading|=4,t.instance=o,$e(o),o;i=qf(a),(l=Rt.get(l))&&Ts(i,l),o=(e.ownerDocument||e).createElement("link"),$e(o);var s=o;return s._p=new Promise(function(f,b){s.onload=f,s.onerror=b}),tt(o,"link",i),t.state.loading|=4,io(o,a.precedence,e),t.instance=o;case"script":return o=Gi(a.src),(l=e.querySelector(Dl(o)))?(t.instance=l,$e(l),l):(i=a,(l=Rt.get(o))&&(i=y({},a),Cs(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),$e(l),tt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,io(i,a.precedence,e));return t.instance}function io(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,s=0;s<i.length;s++){var f=i[s];if(f.dataset.precedence===t)o=f;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lo=null;function Gf(e,t,a){if(lo===null){var i=new Map,l=lo=new Map;l.set(a,i)}else l=lo,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[$i]||o[We]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var s=o.getAttribute(t)||"";s=e+s;var f=i.get(s);f?f.push(o):i.set(s,[o])}}return i}function Qf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function og(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Xf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rg(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Yi(i.href),o=t.querySelector(Ml(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=no.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,$e(o);return}o=t.ownerDocument||t,i=qf(i),(l=Rt.get(l))&&Ts(i,l),o=o.createElement("link"),$e(o);var s=o;s._p=new Promise(function(f,b){s.onload=f,s.onerror=b}),tt(o,"link",i),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=no.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Os=0;function sg(e,t){return e.stylesheets&&e.count===0&&ro(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&ro(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Os===0&&(Os=62500*Gh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ro(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Os?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function no(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ro(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oo=null;function ro(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oo=new Map,t.forEach(cg,e),oo=null,no.call(e))}function cg(e,t){if(!(t.state.loading&4)){var a=oo.get(e);if(a)var i=a.get(null);else{a=new Map,oo.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var s=l[o];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),i=s)}i&&a.set(null,i)}l=t.instance,s=l.getAttribute("data-precedence"),o=a.get(s)||i,o===i&&a.set(null,l),a.set(s,l),this.count++,i=no.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var _l={$$typeof:J,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ug(e,t,a,i,l,o,s,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.hiddenUpdates=Eo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Vf(e,t,a,i,l,o,s,f,b,k,O,R){return e=new ug(e,t,a,s,b,k,O,R,f),t=1,o===!0&&(t|=24),o=bt(3,null,null,t),e.current=o,o.stateNode=e,t=ur(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:t},mr(o),e}function Zf(e){return e?(e=bi,e):bi}function Kf(e,t,a,i,l,o){l=Zf(l),i.context===null?i.context=l:i.pendingContext=l,i=Sa(t),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Na(e,i,t),a!==null&&(ft(a,e,t),fl(a,e,t))}function Jf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ms(e,t){Jf(e,t),(e=e.alternate)&&Jf(e,t)}function $f(e){if(e.tag===13||e.tag===31){var t=Ka(e,67108864);t!==null&&ft(t,e,67108864),Ms(e,67108864)}}function Ff(e){if(e.tag===13||e.tag===31){var t=St();t=ko(t);var a=Ka(e,t);a!==null&&ft(a,e,t),Ms(e,t)}}var so=!0;function dg(e,t,a,i){var l=C.T;C.T=null;var o=Y.p;try{Y.p=2,Ds(e,t,a,i)}finally{Y.p=o,C.T=l}}function fg(e,t,a,i){var l=C.T;C.T=null;var o=Y.p;try{Y.p=8,Ds(e,t,a,i)}finally{Y.p=o,C.T=l}}function Ds(e,t,a,i){if(so){var l=_s(i);if(l===null)bs(e,t,i,co,a),If(e,i);else if(mg(l,e,t,a,i))i.stopPropagation();else if(If(e,i),t&4&&-1<pg.indexOf(e)){for(;l!==null;){var o=si(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var s=Ga(o.pendingLanes);if(s!==0){var f=o;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var b=1<<31-xt(s);f.entanglements[1]|=b,s&=~b}Kt(o),(Ne&6)===0&&(Vn=ht()+500,Al(0))}}break;case 31:case 13:f=Ka(o,2),f!==null&&ft(f,o,2),Kn(),Ms(o,2)}if(o=_s(i),o===null&&bs(e,t,i,co,a),o===l)break;l=o}l!==null&&i.stopPropagation()}else bs(e,t,i,null,a)}}function _s(e){return e=Uo(e),Rs(e)}var co=null;function Rs(e){if(co=null,e=ri(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=v(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return co=e,null}function Wf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ip()){case lc:return 2;case nc:return 8;case Wl:case Pp:return 32;case oc:return 268435456;default:return 32}default:return 32}}var Us=!1,Ua=null,Ba=null,Ha=null,Rl=new Map,Ul=new Map,La=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function If(e,t){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Rl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function Bl(e,t,a,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=si(t),t!==null&&$f(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function mg(e,t,a,i,l){switch(t){case"focusin":return Ua=Bl(Ua,e,t,a,i,l),!0;case"dragenter":return Ba=Bl(Ba,e,t,a,i,l),!0;case"mouseover":return Ha=Bl(Ha,e,t,a,i,l),!0;case"pointerover":var o=l.pointerId;return Rl.set(o,Bl(Rl.get(o)||null,e,t,a,i,l)),!0;case"gotpointercapture":return o=l.pointerId,Ul.set(o,Bl(Ul.get(o)||null,e,t,a,i,l)),!0}return!1}function Pf(e){var t=ri(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,fc(e.priority,function(){Ff(a)});return}}else if(t===31){if(t=v(a),t!==null){e.blockedOn=t,fc(e.priority,function(){Ff(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_s(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Ro=i,a.target.dispatchEvent(i),Ro=null}else return t=si(a),t!==null&&$f(t),e.blockedOn=a,!1;t.shift()}return!0}function ep(e,t,a){uo(e)&&a.delete(t)}function hg(){Us=!1,Ua!==null&&uo(Ua)&&(Ua=null),Ba!==null&&uo(Ba)&&(Ba=null),Ha!==null&&uo(Ha)&&(Ha=null),Rl.forEach(ep),Ul.forEach(ep)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hg)))}var po=null;function tp(e){po!==e&&(po=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){po===e&&(po=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Rs(i||a)===null)continue;break}var o=si(a);o!==null&&(e.splice(t,3),t-=3,_r(o,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Qi(e){function t(b){return fo(b,e)}Ua!==null&&fo(Ua,e),Ba!==null&&fo(Ba,e),Ha!==null&&fo(Ha,e),Rl.forEach(t),Ul.forEach(t);for(var a=0;a<La.length;a++){var i=La[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Pf(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],o=a[i+1],s=l[ot]||null;if(typeof o=="function")s||tp(a);else if(s){var f=null;if(o&&o.hasAttribute("formAction")){if(l=o,s=o[ot]||null)f=s.formAction;else if(Rs(l)!==null)continue}else f=s.action;typeof f=="function"?a[i+1]=f:(a.splice(i,3),i-=3),tp(a)}}}function ap(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Bs(e){this._internalRoot=e}mo.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=St();Kf(a,i,e,t,null,null)},mo.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kf(e.current,2,null,e,null,null),Kn(),t[oi]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=dc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<La.length&&t!==0&&t<La[a].priority;a++);La.splice(a,0,e),a===0&&Pf(e)}};var ip=d.version;if(ip!=="19.2.4")throw Error(c(527,ip,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var gg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Zi=ho.inject(gg),gt=ho}catch{}}return Ll.createRoot=function(e,t){if(!u(e))throw Error(c(299));var a=!1,i="",l=cd,o=ud,s=dd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Vf(e,1,!1,null,null,a,i,null,l,o,s,ap),e[oi]=t.current,vs(e),new Bs(t)},Ll.hydrateRoot=function(e,t,a){if(!u(e))throw Error(c(299));var i=!1,l="",o=cd,s=ud,f=dd,b=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=Vf(e,1,!0,t,a??null,i,l,b,o,s,f,ap),t.context=Zf(null),a=t.current,i=St(),i=ko(i),l=Sa(i),l.callback=null,Na(a,l,i),a=i,t.current.lanes=a,Ji(t,a),Kt(t),e[oi]=t.current,vs(e),new mo(t)},Ll.version="19.2.4",Ll}var pp;function kg(){if(pp)return qs.exports;pp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),qs.exports=Eg(),qs.exports}var Ag=kg();var mp="popstate";function hp(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Tg(r={}){function d(c,u){let m=u.state?.masked,{pathname:h,search:v,hash:x}=m||c.location;return Js("",{pathname:h,search:v,hash:x},u.state&&u.state.usr||null,u.state&&u.state.key||"default",m?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function p(c,u){return typeof u=="string"?u:Xl(u)}return Og(d,p,null,r)}function Be(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function $t(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Cg(){return Math.random().toString(36).substring(2,10)}function gp(r,d){return{usr:r.state,key:r.key,idx:d,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Js(r,d,p=null,c,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?Xi(d):d,state:p,key:d&&d.key||c||Cg(),unstable_mask:u}}function Xl({pathname:r="/",search:d="",hash:p=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),p&&p!=="#"&&(r+=p.charAt(0)==="#"?p:"#"+p),r}function Xi(r){let d={};if(r){let p=r.indexOf("#");p>=0&&(d.hash=r.substring(p),r=r.substring(0,p));let c=r.indexOf("?");c>=0&&(d.search=r.substring(c),r=r.substring(0,c)),r&&(d.pathname=r)}return d}function Og(r,d,p,c={}){let{window:u=document.defaultView,v5Compat:m=!1}=c,h=u.history,v="POP",x=null,g=S();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function S(){return(h.state||{idx:null}).idx}function y(){v="POP";let U=S(),V=U==null?null:U-g;g=U,x&&x({action:v,location:H.location,delta:V})}function _(U,V){v="PUSH";let P=hp(U)?U:Js(H.location,U,V);g=S()+1;let J=gp(P,g),pe=H.createHref(P.unstable_mask||P);try{h.pushState(J,"",pe)}catch(ze){if(ze instanceof DOMException&&ze.name==="DataCloneError")throw ze;u.location.assign(pe)}m&&x&&x({action:v,location:H.location,delta:1})}function B(U,V){v="REPLACE";let P=hp(U)?U:Js(H.location,U,V);g=S();let J=gp(P,g),pe=H.createHref(P.unstable_mask||P);h.replaceState(J,"",pe),m&&x&&x({action:v,location:H.location,delta:0})}function L(U){return Mg(U)}let H={get action(){return v},get location(){return r(u,h)},listen(U){if(x)throw new Error("A history only accepts one active listener");return u.addEventListener(mp,y),x=U,()=>{u.removeEventListener(mp,y),x=null}},createHref(U){return d(u,U)},createURL:L,encodeLocation(U){let V=L(U);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:_,replace:B,go(U){return h.go(U)}};return H}function Mg(r,d=!1){let p="http://localhost";typeof window<"u"&&(p=window.location.origin!=="null"?window.location.origin:window.location.href),Be(p,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Xl(r);return c=c.replace(/ $/,"%20"),!d&&c.startsWith("//")&&(c=p+c),new URL(c,p)}function Ap(r,d,p="/"){return Dg(r,d,p,!1)}function Dg(r,d,p,c){let u=typeof d=="string"?Xi(d):d,m=ma(u.pathname||"/",p);if(m==null)return null;let h=Tp(r);_g(h);let v=null;for(let x=0;v==null&&x<h.length;++x){let g=Vg(m);v=Qg(h[x],g,c)}return v}function Tp(r,d=[],p=[],c="",u=!1){let m=(h,v,x=u,g)=>{let S={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(c)&&x)return;Be(S.relativePath.startsWith(c),`Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(c.length)}let y=Jt([c,S.relativePath]),_=p.concat(S);h.children&&h.children.length>0&&(Be(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Tp(h.children,d,_,y,x)),!(h.path==null&&!h.index)&&d.push({path:y,score:Yg(y,h.index),routesMeta:_})};return r.forEach((h,v)=>{if(h.path===""||!h.path?.includes("?"))m(h,v);else for(let x of Cp(h.path))m(h,v,!0,x)}),d}function Cp(r){let d=r.split("/");if(d.length===0)return[];let[p,...c]=d,u=p.endsWith("?"),m=p.replace(/\?$/,"");if(c.length===0)return u?[m,""]:[m];let h=Cp(c.join("/")),v=[];return v.push(...h.map(x=>x===""?m:[m,x].join("/"))),u&&v.push(...h),v.map(x=>r.startsWith("/")&&x===""?"/":x)}function _g(r){r.sort((d,p)=>d.score!==p.score?p.score-d.score:Gg(d.routesMeta.map(c=>c.childrenIndex),p.routesMeta.map(c=>c.childrenIndex)))}var Rg=/^:[\w-]+$/,Ug=3,Bg=2,Hg=1,Lg=10,qg=-2,xp=r=>r==="*";function Yg(r,d){let p=r.split("/"),c=p.length;return p.some(xp)&&(c+=qg),d&&(c+=Bg),p.filter(u=>!xp(u)).reduce((u,m)=>u+(Rg.test(m)?Ug:m===""?Hg:Lg),c)}function Gg(r,d){return r.length===d.length&&r.slice(0,-1).every((c,u)=>c===d[u])?r[r.length-1]-d[d.length-1]:0}function Qg(r,d,p=!1){let{routesMeta:c}=r,u={},m="/",h=[];for(let v=0;v<c.length;++v){let x=c[v],g=v===c.length-1,S=m==="/"?d:d.slice(m.length)||"/",y=yo({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},S),_=x.route;if(!y&&g&&p&&!c[c.length-1].route.index&&(y=yo({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},S)),!y)return null;Object.assign(u,y.params),h.push({params:u,pathname:Jt([m,y.pathname]),pathnameBase:$g(Jt([m,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(m=Jt([m,y.pathnameBase]))}return h}function yo(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[p,c]=Xg(r.path,r.caseSensitive,r.end),u=d.match(p);if(!u)return null;let m=u[0],h=m.replace(/(.)\/+$/,"$1"),v=u.slice(1);return{params:c.reduce((g,{paramName:S,isOptional:y},_)=>{if(S==="*"){let L=v[_]||"";h=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const B=v[_];return y&&!B?g[S]=void 0:g[S]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:h,pattern:r}}function Xg(r,d=!1,p=!0){$t(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,x,g,S)=>{if(c.push({paramName:v,isOptional:x!=null}),x){let y=S.charAt(g+h.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):p?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,d?void 0:"i"),c]}function Vg(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return $t(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function ma(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let p=d.endsWith("/")?d.length-1:d.length,c=r.charAt(p);return c&&c!=="/"?null:r.slice(p)||"/"}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Kg(r,d="/"){let{pathname:p,search:c="",hash:u=""}=typeof r=="string"?Xi(r):r,m;return p?(p=p.replace(/\/\/+/g,"/"),p.startsWith("/")?m=vp(p.substring(1),"/"):m=vp(p,d)):m=d,{pathname:m,search:Fg(c),hash:Wg(u)}}function vp(r,d){let p=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?p.length>1&&p.pop():u!=="."&&p.push(u)}),p.length>1?p.join("/"):"/"}function Xs(r,d,p,c){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${p}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jg(r){return r.filter((d,p)=>p===0||d.route.path&&d.route.path.length>0)}function Op(r){let d=Jg(r);return d.map((p,c)=>c===d.length-1?p.pathname:p.pathnameBase)}function Ws(r,d,p,c=!1){let u;typeof r=="string"?u=Xi(r):(u={...r},Be(!u.pathname||!u.pathname.includes("?"),Xs("?","pathname","search",u)),Be(!u.pathname||!u.pathname.includes("#"),Xs("#","pathname","hash",u)),Be(!u.search||!u.search.includes("#"),Xs("#","search","hash",u)));let m=r===""||u.pathname==="",h=m?"/":u.pathname,v;if(h==null)v=p;else{let y=d.length-1;if(!c&&h.startsWith("..")){let _=h.split("/");for(;_[0]==="..";)_.shift(),y-=1;u.pathname=_.join("/")}v=y>=0?d[y]:"/"}let x=Kg(u,v),g=h&&h!=="/"&&h.endsWith("/"),S=(m||h===".")&&p.endsWith("/");return!x.pathname.endsWith("/")&&(g||S)&&(x.pathname+="/"),x}var Jt=r=>r.join("/").replace(/\/\/+/g,"/"),$g=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Fg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Wg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Ig=class{constructor(r,d,p,c=!1){this.status=r,this.statusText=d||"",this.internal=c,p instanceof Error?(this.data=p.toString(),this.error=p):this.data=p}};function Pg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function e0(r){return r.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Mp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dp(r,d){let p=r;if(typeof p!="string"||!Zg.test(p))return{absoluteURL:void 0,isExternal:!1,to:p};let c=p,u=!1;if(Mp)try{let m=new URL(window.location.href),h=p.startsWith("//")?new URL(m.protocol+p):new URL(p),v=ma(h.pathname,d);h.origin===m.origin&&v!=null?p=v+h.search+h.hash:u=!0}catch{$t(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:u,to:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _p=["POST","PUT","PATCH","DELETE"];new Set(_p);var t0=["GET",..._p];new Set(t0);var Vi=E.createContext(null);Vi.displayName="DataRouter";var zo=E.createContext(null);zo.displayName="DataRouterState";var a0=E.createContext(!1),Rp=E.createContext({isTransitioning:!1});Rp.displayName="ViewTransition";var i0=E.createContext(new Map);i0.displayName="Fetchers";var l0=E.createContext(null);l0.displayName="Await";var Bt=E.createContext(null);Bt.displayName="Navigation";var Zl=E.createContext(null);Zl.displayName="Location";var ha=E.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Is=E.createContext(null);Is.displayName="RouteError";var Up="REACT_ROUTER_ERROR",n0="REDIRECT",o0="ROUTE_ERROR_RESPONSE";function r0(r){if(r.startsWith(`${Up}:${n0}:{`))try{let d=JSON.parse(r.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function s0(r){if(r.startsWith(`${Up}:${o0}:{`))try{let d=JSON.parse(r.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Ig(d.status,d.statusText,d.data)}catch{}}function c0(r,{relative:d}={}){Be(Kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:p,navigator:c}=E.useContext(Bt),{hash:u,pathname:m,search:h}=Jl(r,{relative:d}),v=m;return p!=="/"&&(v=m==="/"?p:Jt([p,m])),c.createHref({pathname:v,search:h,hash:u})}function Kl(){return E.useContext(Zl)!=null}function Ht(){return Be(Kl(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Zl).location}var Bp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hp(r){E.useContext(Bt).static||E.useLayoutEffect(r)}function u0(){let{isDataRoute:r}=E.useContext(ha);return r?j0():d0()}function d0(){Be(Kl(),"useNavigate() may be used only in the context of a <Router> component.");let r=E.useContext(Vi),{basename:d,navigator:p}=E.useContext(Bt),{matches:c}=E.useContext(ha),{pathname:u}=Ht(),m=JSON.stringify(Op(c)),h=E.useRef(!1);return Hp(()=>{h.current=!0}),E.useCallback((x,g={})=>{if($t(h.current,Bp),!h.current)return;if(typeof x=="number"){p.go(x);return}let S=Ws(x,JSON.parse(m),u,g.relative==="path");r==null&&d!=="/"&&(S.pathname=S.pathname==="/"?d:Jt([d,S.pathname])),(g.replace?p.replace:p.push)(S,g.state,g)},[d,p,m,u,r])}E.createContext(null);function Jl(r,{relative:d}={}){let{matches:p}=E.useContext(ha),{pathname:c}=Ht(),u=JSON.stringify(Op(p));return E.useMemo(()=>Ws(r,JSON.parse(u),c,d==="path"),[r,u,c,d])}function f0(r,d){return Lp(r,d)}function Lp(r,d,p){Be(Kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=E.useContext(Bt),{matches:u}=E.useContext(ha),m=u[u.length-1],h=m?m.params:{},v=m?m.pathname:"/",x=m?m.pathnameBase:"/",g=m&&m.route;{let U=g&&g.path||"";Yp(v,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let S=Ht(),y;if(d){let U=typeof d=="string"?Xi(d):d;Be(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=S;let _=y.pathname||"/",B=_;if(x!=="/"){let U=x.replace(/^\//,"").split("/");B="/"+_.replace(/^\//,"").split("/").slice(U.length).join("/")}let L=Ap(r,{pathname:B});$t(g||L!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),$t(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=x0(L&&L.map(U=>Object.assign({},U,{params:Object.assign({},h,U.params),pathname:Jt([x,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Jt([x,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),u,p);return d&&H?E.createElement(Zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},H):H}function p0(){let r=w0(),d=Pg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),p=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:m},"ErrorBoundary")," or"," ",E.createElement("code",{style:m},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},d),p?E.createElement("pre",{style:u},p):null,h)}var m0=E.createElement(p0,null),qp=class extends E.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.onError?this.props.onError(r,d):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const p=s0(r.digest);p&&(r=p)}let d=r!==void 0?E.createElement(ha.Provider,{value:this.props.routeContext},E.createElement(Is.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?E.createElement(h0,{error:r},d):d}};qp.contextType=a0;var Vs=new WeakMap;function h0({children:r,error:d}){let{basename:p}=E.useContext(Bt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let c=r0(d.digest);if(c){let u=Vs.get(d);if(u)throw u;let m=Dp(c.location,p);if(Mp&&!Vs.get(d))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Vs.set(d,h),h}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function g0({routeContext:r,match:d,children:p}){let c=E.useContext(Vi);return c&&c.static&&c.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=d.route.id),E.createElement(ha.Provider,{value:r},p)}function x0(r,d=[],p){let c=p?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(d.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let u=r,m=c?.errors;if(m!=null){let S=u.findIndex(y=>y.route.id&&m?.[y.route.id]!==void 0);Be(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),u=u.slice(0,Math.min(u.length,S+1))}let h=!1,v=-1;if(p&&c){h=c.renderFallback;for(let S=0;S<u.length;S++){let y=u[S];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(v=S),y.route.id){let{loaderData:_,errors:B}=c,L=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!B||B[y.route.id]===void 0);if(y.route.lazy||L){p.isStatic&&(h=!0),v>=0?u=u.slice(0,v+1):u=[u[0]];break}}}}let x=p?.onError,g=c&&x?(S,y)=>{x(S,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:e0(c.matches),errorInfo:y})}:void 0;return u.reduceRight((S,y,_)=>{let B,L=!1,H=null,U=null;c&&(B=m&&y.route.id?m[y.route.id]:void 0,H=y.route.errorElement||m0,h&&(v<0&&_===0?(Yp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,U=null):v===_&&(L=!0,U=y.route.hydrateFallbackElement||null)));let V=d.concat(u.slice(0,_+1)),P=()=>{let J;return B?J=H:L?J=U:y.route.Component?J=E.createElement(y.route.Component,null):y.route.element?J=y.route.element:J=S,E.createElement(g0,{match:y,routeContext:{outlet:S,matches:V,isDataRoute:c!=null},children:J})};return c&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?E.createElement(qp,{location:c.location,revalidation:c.revalidation,component:H,error:B,children:P(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:g}):P()},null)}function Ps(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v0(r){let d=E.useContext(Vi);return Be(d,Ps(r)),d}function b0(r){let d=E.useContext(zo);return Be(d,Ps(r)),d}function y0(r){let d=E.useContext(ha);return Be(d,Ps(r)),d}function ec(r){let d=y0(r),p=d.matches[d.matches.length-1];return Be(p.route.id,`${r} can only be used on routes that contain a unique "id"`),p.route.id}function z0(){return ec("useRouteId")}function w0(){let r=E.useContext(Is),d=b0("useRouteError"),p=ec("useRouteError");return r!==void 0?r:d.errors?.[p]}function j0(){let{router:r}=v0("useNavigate"),d=ec("useNavigate"),p=E.useRef(!1);return Hp(()=>{p.current=!0}),E.useCallback(async(u,m={})=>{$t(p.current,Bp),p.current&&(typeof u=="number"?await r.navigate(u):await r.navigate(u,{fromRouteId:d,...m}))},[r,d])}var bp={};function Yp(r,d,p){!d&&!bp[r]&&(bp[r]=!0,$t(!1,p))}E.memo(S0);function S0({routes:r,future:d,state:p,isStatic:c,onError:u}){return Lp(r,void 0,{state:p,isStatic:c,onError:u})}function Ut(r){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function N0({basename:r="/",children:d=null,location:p,navigationType:c="POP",navigator:u,static:m=!1,unstable_useTransitions:h}){Be(!Kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=r.replace(/^\/*/,"/"),x=E.useMemo(()=>({basename:v,navigator:u,static:m,unstable_useTransitions:h,future:{}}),[v,u,m,h]);typeof p=="string"&&(p=Xi(p));let{pathname:g="/",search:S="",hash:y="",state:_=null,key:B="default",unstable_mask:L}=p,H=E.useMemo(()=>{let U=ma(g,v);return U==null?null:{location:{pathname:U,search:S,hash:y,state:_,key:B,unstable_mask:L},navigationType:c}},[v,g,S,y,_,B,c,L]);return $t(H!=null,`<Router basename="${v}"> is not able to match the URL "${g}${S}${y}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:E.createElement(Bt.Provider,{value:x},E.createElement(Zl.Provider,{children:d,value:H}))}function E0({children:r,location:d}){return f0($s(r),d)}function $s(r,d=[]){let p=[];return E.Children.forEach(r,(c,u)=>{if(!E.isValidElement(c))return;let m=[...d,u];if(c.type===E.Fragment){p.push.apply(p,$s(c.props.children,m));return}Be(c.type===Ut,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=$s(c.props.children,m)),p.push(h)}),p}var xo="get",vo="application/x-www-form-urlencoded";function wo(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function k0(r){return wo(r)&&r.tagName.toLowerCase()==="button"}function A0(r){return wo(r)&&r.tagName.toLowerCase()==="form"}function T0(r){return wo(r)&&r.tagName.toLowerCase()==="input"}function C0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function O0(r,d){return r.button===0&&(!d||d==="_self")&&!C0(r)}var go=null;function M0(){if(go===null)try{new FormData(document.createElement("form"),0),go=!1}catch{go=!0}return go}var D0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zs(r){return r!=null&&!D0.has(r)?($t(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vo}"`),null):r}function _0(r,d){let p,c,u,m,h;if(A0(r)){let v=r.getAttribute("action");c=v?ma(v,d):null,p=r.getAttribute("method")||xo,u=Zs(r.getAttribute("enctype"))||vo,m=new FormData(r)}else if(k0(r)||T0(r)&&(r.type==="submit"||r.type==="image")){let v=r.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||v.getAttribute("action");if(c=x?ma(x,d):null,p=r.getAttribute("formmethod")||v.getAttribute("method")||xo,u=Zs(r.getAttribute("formenctype"))||Zs(v.getAttribute("enctype"))||vo,m=new FormData(v,r),!M0()){let{name:g,type:S,value:y}=r;if(S==="image"){let _=g?`${g}.`:"";m.append(`${_}x`,"0"),m.append(`${_}y`,"0")}else g&&m.append(g,y)}}else{if(wo(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');p=xo,c=null,u=vo,h=r}return m&&u==="text/plain"&&(h=m,m=void 0),{action:c,method:p.toLowerCase(),encType:u,formData:m,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tc(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function R0(r,d,p,c){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return p?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${c}`:u.pathname=`${u.pathname}.${c}`:u.pathname==="/"?u.pathname=`_root.${c}`:d&&ma(u.pathname,d)==="/"?u.pathname=`${d.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function U0(r,d){if(r.id in d)return d[r.id];try{let p=await import(r.module);return d[r.id]=p,p}catch(p){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(p),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function B0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function H0(r,d,p){let c=await Promise.all(r.map(async u=>{let m=d.routes[u.route.id];if(m){let h=await U0(m,p);return h.links?h.links():[]}return[]}));return G0(c.flat(1).filter(B0).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function yp(r,d,p,c,u,m){let h=(x,g)=>p[g]?x.route.id!==p[g].route.id:!0,v=(x,g)=>p[g].pathname!==x.pathname||p[g].route.path?.endsWith("*")&&p[g].params["*"]!==x.params["*"];return m==="assets"?d.filter((x,g)=>h(x,g)||v(x,g)):m==="data"?d.filter((x,g)=>{let S=c.routes[x.route.id];if(!S||!S.hasLoader)return!1;if(h(x,g)||v(x,g))return!0;if(x.route.shouldRevalidate){let y=x.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:p[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function L0(r,d,{includeHydrateFallback:p}={}){return q0(r.map(c=>{let u=d.routes[c.route.id];if(!u)return[];let m=[u.module];return u.clientActionModule&&(m=m.concat(u.clientActionModule)),u.clientLoaderModule&&(m=m.concat(u.clientLoaderModule)),p&&u.hydrateFallbackModule&&(m=m.concat(u.hydrateFallbackModule)),u.imports&&(m=m.concat(u.imports)),m}).flat(1))}function q0(r){return[...new Set(r)]}function Y0(r){let d={},p=Object.keys(r).sort();for(let c of p)d[c]=r[c];return d}function G0(r,d){let p=new Set;return new Set(d),r.reduce((c,u)=>{let m=JSON.stringify(Y0(u));return p.has(m)||(p.add(m),c.push({key:m,link:u})),c},[])}function Gp(){let r=E.useContext(Vi);return tc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Q0(){let r=E.useContext(zo);return tc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ac=E.createContext(void 0);ac.displayName="FrameworkContext";function Qp(){let r=E.useContext(ac);return tc(r,"You must render this element inside a <HydratedRouter> element"),r}function X0(r,d){let p=E.useContext(ac),[c,u]=E.useState(!1),[m,h]=E.useState(!1),{onFocus:v,onBlur:x,onMouseEnter:g,onMouseLeave:S,onTouchStart:y}=d,_=E.useRef(null);E.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let H=V=>{V.forEach(P=>{h(P.isIntersecting)})},U=new IntersectionObserver(H,{threshold:.5});return _.current&&U.observe(_.current),()=>{U.disconnect()}}},[r]),E.useEffect(()=>{if(c){let H=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(H)}}},[c]);let B=()=>{u(!0)},L=()=>{u(!1),h(!1)};return p?r!=="intent"?[m,_,{}]:[m,_,{onFocus:ql(v,B),onBlur:ql(x,L),onMouseEnter:ql(g,B),onMouseLeave:ql(S,L),onTouchStart:ql(y,B)}]:[!1,_,{}]}function ql(r,d){return p=>{r&&r(p),p.defaultPrevented||d(p)}}function V0({page:r,...d}){let{router:p}=Gp(),c=E.useMemo(()=>Ap(p.routes,r,p.basename),[p.routes,r,p.basename]);return c?E.createElement(K0,{page:r,matches:c,...d}):null}function Z0(r){let{manifest:d,routeModules:p}=Qp(),[c,u]=E.useState([]);return E.useEffect(()=>{let m=!1;return H0(r,d,p).then(h=>{m||u(h)}),()=>{m=!0}},[r,d,p]),c}function K0({page:r,matches:d,...p}){let c=Ht(),{future:u,manifest:m,routeModules:h}=Qp(),{basename:v}=Gp(),{loaderData:x,matches:g}=Q0(),S=E.useMemo(()=>yp(r,d,g,m,c,"data"),[r,d,g,m,c]),y=E.useMemo(()=>yp(r,d,g,m,c,"assets"),[r,d,g,m,c]),_=E.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let H=new Set,U=!1;if(d.forEach(P=>{let J=m.routes[P.route.id];!J||!J.hasLoader||(!S.some(pe=>pe.route.id===P.route.id)&&P.route.id in x&&h[P.route.id]?.shouldRevalidate||J.hasClientLoader?U=!0:H.add(P.route.id))}),H.size===0)return[];let V=R0(r,v,u.unstable_trailingSlashAwareDataRequests,"data");return U&&H.size>0&&V.searchParams.set("_routes",d.filter(P=>H.has(P.route.id)).map(P=>P.route.id).join(",")),[V.pathname+V.search]},[v,u.unstable_trailingSlashAwareDataRequests,x,c,m,S,d,r,h]),B=E.useMemo(()=>L0(y,m),[y,m]),L=Z0(y);return E.createElement(E.Fragment,null,_.map(H=>E.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...p})),B.map(H=>E.createElement("link",{key:H,rel:"modulepreload",href:H,...p})),L.map(({key:H,link:U})=>E.createElement("link",{key:H,nonce:p.nonce,...U,crossOrigin:U.crossOrigin??p.crossOrigin})))}function J0(...r){return d=>{r.forEach(p=>{typeof p=="function"?p(d):p!=null&&(p.current=d)})}}var $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$0&&(window.__reactRouterVersion="7.13.1")}catch{}function F0({basename:r,children:d,unstable_useTransitions:p,window:c}){let u=E.useRef();u.current==null&&(u.current=Tg({window:c,v5Compat:!0}));let m=u.current,[h,v]=E.useState({action:m.action,location:m.location}),x=E.useCallback(g=>{p===!1?v(g):E.startTransition(()=>v(g))},[p]);return E.useLayoutEffect(()=>m.listen(x),[m,x]),E.createElement(N0,{basename:r,children:d,location:h.location,navigationType:h.action,navigator:m,unstable_useTransitions:p})}var Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gt=E.forwardRef(function({onClick:d,discover:p="render",prefetch:c="none",relative:u,reloadDocument:m,replace:h,unstable_mask:v,state:x,target:g,to:S,preventScrollReset:y,viewTransition:_,unstable_defaultShouldRevalidate:B,...L},H){let{basename:U,navigator:V,unstable_useTransitions:P}=E.useContext(Bt),J=typeof S=="string"&&Xp.test(S),pe=Dp(S,U);S=pe.to;let ze=c0(S,{relative:u}),ce=Ht(),ee=null;if(v){let ue=Ws(v,[],ce.unstable_mask?ce.unstable_mask.pathname:"/",!0);U!=="/"&&(ue.pathname=ue.pathname==="/"?U:Jt([U,ue.pathname])),ee=V.createHref(ue)}let[le,Ae,Ze]=X0(c,L),Z=ex(S,{replace:h,unstable_mask:v,state:x,target:g,preventScrollReset:y,relative:u,viewTransition:_,unstable_defaultShouldRevalidate:B,unstable_useTransitions:P});function G(ue){d&&d(ue),ue.defaultPrevented||Z(ue)}let re=!(pe.isExternal||m),$=E.createElement("a",{...L,...Ze,href:(re?ee:void 0)||pe.absoluteURL||ze,onClick:re?G:d,ref:J0(H,Ae),target:g,"data-discover":!J&&p==="render"?"true":void 0});return le&&!J?E.createElement(E.Fragment,null,$,E.createElement(V0,{page:ze})):$});Gt.displayName="Link";var W0=E.forwardRef(function({"aria-current":d="page",caseSensitive:p=!1,className:c="",end:u=!1,style:m,to:h,viewTransition:v,children:x,...g},S){let y=Jl(h,{relative:g.relative}),_=Ht(),B=E.useContext(zo),{navigator:L,basename:H}=E.useContext(Bt),U=B!=null&&nx(y)&&v===!0,V=L.encodeLocation?L.encodeLocation(y).pathname:y.pathname,P=_.pathname,J=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;p||(P=P.toLowerCase(),J=J?J.toLowerCase():null,V=V.toLowerCase()),J&&H&&(J=ma(J,H)||J);const pe=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let ze=P===V||!u&&P.startsWith(V)&&P.charAt(pe)==="/",ce=J!=null&&(J===V||!u&&J.startsWith(V)&&J.charAt(V.length)==="/"),ee={isActive:ze,isPending:ce,isTransitioning:U},le=ze?d:void 0,Ae;typeof c=="function"?Ae=c(ee):Ae=[c,ze?"active":null,ce?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let Ze=typeof m=="function"?m(ee):m;return E.createElement(Gt,{...g,"aria-current":le,className:Ae,ref:S,style:Ze,to:h,viewTransition:v},typeof x=="function"?x(ee):x)});W0.displayName="NavLink";var I0=E.forwardRef(({discover:r="render",fetcherKey:d,navigate:p,reloadDocument:c,replace:u,state:m,method:h=xo,action:v,onSubmit:x,relative:g,preventScrollReset:S,viewTransition:y,unstable_defaultShouldRevalidate:_,...B},L)=>{let{unstable_useTransitions:H}=E.useContext(Bt),U=ix(),V=lx(v,{relative:g}),P=h.toLowerCase()==="get"?"get":"post",J=typeof v=="string"&&Xp.test(v),pe=ze=>{if(x&&x(ze),ze.defaultPrevented)return;ze.preventDefault();let ce=ze.nativeEvent.submitter,ee=ce?.getAttribute("formmethod")||h,le=()=>U(ce||ze.currentTarget,{fetcherKey:d,method:ee,navigate:p,replace:u,state:m,relative:g,preventScrollReset:S,viewTransition:y,unstable_defaultShouldRevalidate:_});H&&p!==!1?E.startTransition(()=>le()):le()};return E.createElement("form",{ref:L,method:P,action:V,onSubmit:c?x:pe,...B,"data-discover":!J&&r==="render"?"true":void 0})});I0.displayName="Form";function P0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vp(r){let d=E.useContext(Vi);return Be(d,P0(r)),d}function ex(r,{target:d,replace:p,unstable_mask:c,state:u,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:x,unstable_useTransitions:g}={}){let S=u0(),y=Ht(),_=Jl(r,{relative:h});return E.useCallback(B=>{if(O0(B,d)){B.preventDefault();let L=p!==void 0?p:Xl(y)===Xl(_),H=()=>S(r,{replace:L,unstable_mask:c,state:u,preventScrollReset:m,relative:h,viewTransition:v,unstable_defaultShouldRevalidate:x});g?E.startTransition(()=>H()):H()}},[y,S,_,p,c,u,d,r,m,h,v,x,g])}var tx=0,ax=()=>`__${String(++tx)}__`;function ix(){let{router:r}=Vp("useSubmit"),{basename:d}=E.useContext(Bt),p=z0(),c=r.fetch,u=r.navigate;return E.useCallback(async(m,h={})=>{let{action:v,method:x,encType:g,formData:S,body:y}=_0(m,d);if(h.navigate===!1){let _=h.fetcherKey||ax();await c(_,p,h.action||v,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:S,body:y,formMethod:h.method||x,formEncType:h.encType||g,flushSync:h.flushSync})}else await u(h.action||v,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:S,body:y,formMethod:h.method||x,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:p,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,u,d,p])}function lx(r,{relative:d}={}){let{basename:p}=E.useContext(Bt),c=E.useContext(ha);Be(c,"useFormAction must be used inside a RouteContext");let[u]=c.matches.slice(-1),m={...Jl(r||".",{relative:d})},h=Ht();if(r==null){m.search=h.search;let v=new URLSearchParams(m.search),x=v.getAll("index");if(x.some(S=>S==="")){v.delete("index"),x.filter(y=>y).forEach(y=>v.append("index",y));let S=v.toString();m.search=S?`?${S}`:""}}return(!r||r===".")&&u.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),p!=="/"&&(m.pathname=m.pathname==="/"?p:Jt([p,m.pathname])),Xl(m)}function nx(r,{relative:d}={}){let p=E.useContext(Rp);Be(p!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Vp("useViewTransitionState"),u=Jl(r,{relative:d});if(!p.isTransitioning)return!1;let m=ma(p.currentLocation.pathname,c)||p.currentLocation.pathname,h=ma(p.nextLocation.pathname,c)||p.nextLocation.pathname;return yo(u.pathname,h)!=null||yo(u.pathname,m)!=null}const ox=({title:r,options:d,align:p="left",isOpen:c,onToggle:u,onClose:m})=>{const h=E.useRef(null);E.useEffect(()=>{if(!c)return;const x=g=>{h.current&&!h.current.contains(g.target)&&m()};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[c,m]);const v=(x,g)=>{if(g.startsWith("#")){x.preventDefault();const S=document.getElementById(g.slice(1));S&&S.scrollIntoView({behavior:"smooth",block:"start"})}m()};return n.jsxs("li",{style:{position:"relative",listStyle:"none"},ref:h,children:[n.jsxs("button",{className:`nav-trigger${c?" open":""}`,onClick:u,"aria-expanded":c,"aria-haspopup":"true",children:[r,n.jsx("svg",{className:"chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:n.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),c&&n.jsx("div",{className:`dropdown${p==="right"?" align-right":""}`,role:"menu",children:d.map(({label:x,href:g})=>g.startsWith("#")?n.jsx("button",{className:"drop-item",role:"menuitem",onClick:y=>v(y,g),children:x},x):n.jsx(Gt,{to:g,className:"drop-item",role:"menuitem",onClick:m,children:x},x))})]})},Zp="/assets/LOGO-B1uxM8HU.png",zp=[{code:"it",flag:"🇮🇹",label:"Italiano"},{code:"en",flag:"🇬🇧",label:"Inglese"},{code:"zh",flag:"🇨🇳",label:"Cinese"}],rx=({isOpen:r,onToggle:d,onClose:p})=>{const[c,u]=E.useState("it"),m=E.useRef(null),h=zp.find(v=>v.code===c);return E.useEffect(()=>{if(!r)return;const v=x=>{m.current&&!m.current.contains(x.target)&&p()};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[r,p]),n.jsxs("div",{style:{position:"relative"},ref:m,children:[n.jsxs("button",{className:"lang-btn",onClick:d,"aria-label":"Seleziona lingua",children:[n.jsx("span",{children:h.code.toUpperCase()}),n.jsx("svg",{style:{width:11,height:11,opacity:.5,transition:"transform 0.2s",transform:r?"rotate(180deg)":"none"},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:n.jsx("path",{d:"M6 9l6 6 6-6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),r&&n.jsx("div",{className:"dropdown align-right",style:{minWidth:150},role:"menu",children:zp.map(v=>n.jsxs("button",{className:`lang-item${c===v.code?" sel":""}`,onClick:()=>{u(v.code),p()},role:"menuitem",children:[n.jsx("span",{children:v.flag}),n.jsx("span",{children:v.label}),c===v.code&&n.jsx("span",{className:"lang-check",children:"✓"})]},v.code))})]})},sx=()=>{const[r,d]=E.useState(null),[p,c]=E.useState(!1),[u,m]=E.useState(!1),{pathname:h}=Ht(),v=[{title:"Homepage",align:"left",options:[{label:"Chi siamo",href:h==="/"?"#chi-siamo":"/#chi-siamo"},{label:"Visione",href:h==="/"?"#visione":"/#visione"},{label:"Missione",href:h==="/"?"#missione":"/#missione"},{label:"Valori",href:h==="/"?"#valori":"/#valori"},{label:"Rete internazionale",href:h==="/"?"#rete-internazionale":"/#rete-internazionale"}]},{title:"Prodotti",align:"left",options:[{label:"ProLine Analytics",href:"/prodotti#proline"},{label:"OptimAI",href:"/prodotti#optimai"},{label:"Piattaforme Agentiche",href:"/prodotti#agentiche"},{label:"Sviluppi Custom",href:"/prodotti#custom"},{label:"Hardware",href:"/prodotti#hardware"}]},{title:"Industrie",align:"left",options:[{label:"Automotive",href:"/industrie#automotive"},{label:"Industriale",href:"/industrie#industriale"},{label:"Agromeccanica",href:"/industrie#agromeccanica"},{label:"Nautico",href:"/industrie#nautico"},{label:"PMI",href:"/industrie#pmi"}]},{title:"Contatti",align:"right",options:[{label:"Contatti",href:"/contatti"},{label:"Collaborazioni & Carriere",href:"/contatti"}]}];E.useEffect(()=>{const S=()=>m(window.scrollY>10);return window.addEventListener("scroll",S,{passive:!0}),()=>window.removeEventListener("scroll",S)},[]),E.useEffect(()=>{const S=y=>{y.key==="Escape"&&(d(null),c(!1))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[]);const x=S=>d(y=>y===S?null:S),g=()=>d(null);return n.jsxs(n.Fragment,{children:[r!==null&&n.jsx("div",{className:"overlay",onClick:g}),n.jsx("nav",{className:`navbar${u?" scrolled":""}`,role:"navigation","aria-label":"Navigazione principale",children:n.jsxs("div",{className:"navbar-inner",children:[n.jsx("a",{href:"/",className:"logo","aria-label":"Home",children:n.jsx("img",{src:Zp,alt:"BluMentis",style:{height:"clamp(44px, 8vw, 70px)",width:"auto",display:"block",objectFit:"contain"}})}),n.jsx("ul",{className:"nav-links",children:v.map((S,y)=>n.jsx(ox,{title:S.title,options:S.options,align:S.align,isOpen:r===y,onToggle:()=>x(y),onClose:g},S.title))}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[n.jsx(rx,{isOpen:r==="lang",onToggle:()=>x("lang"),onClose:g}),n.jsxs("button",{className:`hamburger${p?" open":""}`,onClick:()=>c(S=>!S),"aria-label":p?"Chiudi menu":"Apri menu","aria-expanded":p,children:[n.jsx("span",{className:"ham"}),n.jsx("span",{className:"ham"}),n.jsx("span",{className:"ham"})]})]})]})}),p&&n.jsx("div",{className:"mobile-menu",role:"dialog","aria-label":"Menu mobile",children:v.map(S=>n.jsxs("div",{className:"mob-section",children:[n.jsx("div",{className:"mob-title",children:S.title}),S.options.map(y=>n.jsx(Gt,{to:y.href,className:"mob-item",onClick:()=>c(!1),children:y.label},y.label))]},S.title))})]})};var bo={exports:{}},cx=bo.exports,wp;function ux(){return wp||(wp=1,(function(r,d){(function(p,c){r.exports=c()})(cx,function(){return(function(p){function c(m){if(u[m])return u[m].exports;var h=u[m]={exports:{},id:m,loaded:!1};return p[m].call(h.exports,h,h.exports,c),h.loaded=!0,h.exports}var u={};return c.m=p,c.c=u,c.p="dist/",c(0)})([function(p,c,u){function m($){return $&&$.__esModule?$:{default:$}}var h=Object.assign||function($){for(var ue=1;ue<arguments.length;ue++){var C=arguments[ue];for(var Y in C)Object.prototype.hasOwnProperty.call(C,Y)&&($[Y]=C[Y])}return $},v=u(1),x=(m(v),u(6)),g=m(x),S=u(7),y=m(S),_=u(8),B=m(_),L=u(9),H=m(L),U=u(10),V=m(U),P=u(11),J=m(P),pe=u(14),ze=m(pe),ce=[],ee=!1,le={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},Ae=function(){var $=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if($&&(ee=!0),ee)return ce=(0,J.default)(ce,le),(0,V.default)(ce,le.once),ce},Ze=function(){ce=(0,ze.default)(),Ae()},Z=function(){ce.forEach(function($,ue){$.node.removeAttribute("data-aos"),$.node.removeAttribute("data-aos-easing"),$.node.removeAttribute("data-aos-duration"),$.node.removeAttribute("data-aos-delay")})},G=function($){return $===!0||$==="mobile"&&H.default.mobile()||$==="phone"&&H.default.phone()||$==="tablet"&&H.default.tablet()||typeof $=="function"&&$()===!0},re=function($){le=h(le,$),ce=(0,ze.default)();var ue=document.all&&!window.atob;return G(le.disable)||ue?Z():(le.disableMutationObserver||B.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),le.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",le.easing),document.querySelector("body").setAttribute("data-aos-duration",le.duration),document.querySelector("body").setAttribute("data-aos-delay",le.delay),le.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?Ae(!0):le.startEvent==="load"?window.addEventListener(le.startEvent,function(){Ae(!0)}):document.addEventListener(le.startEvent,function(){Ae(!0)}),window.addEventListener("resize",(0,y.default)(Ae,le.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(Ae,le.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,V.default)(ce,le.once)},le.throttleDelay)),le.disableMutationObserver||B.default.ready("[data-aos]",Ze),ce)};p.exports={init:re,refresh:Ae,refreshHard:Ze}},function(p,c){},,,,,function(p,c){(function(u){function m(G,re,$){function ue(he){var Je=Q,Nt=I;return Q=I=void 0,nt=he,ie=G.apply(Nt,Je)}function C(he){return nt=he,ve=setTimeout(me,re),pt?ue(he):ie}function Y(he){var Je=he-be,Nt=he-nt,Fl=re-Je;return mt?Ze(Fl,ae-Nt):Fl}function F(he){var Je=he-be,Nt=he-nt;return be===void 0||Je>=re||Je<0||mt&&Nt>=ae}function me(){var he=Z();return F(he)?we(he):void(ve=setTimeout(me,Y(he)))}function we(he){return ve=void 0,De&&Q?ue(he):(Q=I=void 0,ie)}function w(){ve!==void 0&&clearTimeout(ve),nt=0,Q=be=I=ve=void 0}function D(){return ve===void 0?ie:we(Z())}function q(){var he=Z(),Je=F(he);if(Q=arguments,I=this,be=he,Je){if(ve===void 0)return C(be);if(mt)return ve=setTimeout(me,re),ue(be)}return ve===void 0&&(ve=setTimeout(me,re)),ie}var Q,I,ae,ie,ve,be,nt=0,pt=!1,mt=!1,De=!0;if(typeof G!="function")throw new TypeError(_);return re=S(re)||0,v($)&&(pt=!!$.leading,mt="maxWait"in $,ae=mt?Ae(S($.maxWait)||0,re):ae,De="trailing"in $?!!$.trailing:De),q.cancel=w,q.flush=D,q}function h(G,re,$){var ue=!0,C=!0;if(typeof G!="function")throw new TypeError(_);return v($)&&(ue="leading"in $?!!$.leading:ue,C="trailing"in $?!!$.trailing:C),m(G,re,{leading:ue,maxWait:re,trailing:C})}function v(G){var re=typeof G>"u"?"undefined":y(G);return!!G&&(re=="object"||re=="function")}function x(G){return!!G&&(typeof G>"u"?"undefined":y(G))=="object"}function g(G){return(typeof G>"u"?"undefined":y(G))=="symbol"||x(G)&&le.call(G)==L}function S(G){if(typeof G=="number")return G;if(g(G))return B;if(v(G)){var re=typeof G.valueOf=="function"?G.valueOf():G;G=v(re)?re+"":re}if(typeof G!="string")return G===0?G:+G;G=G.replace(H,"");var $=V.test(G);return $||P.test(G)?J(G.slice(2),$?2:8):U.test(G)?B:+G}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},_="Expected a function",B=NaN,L="[object Symbol]",H=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,P=/^0o[0-7]+$/i,J=parseInt,pe=(typeof u>"u"?"undefined":y(u))=="object"&&u&&u.Object===Object&&u,ze=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,ce=pe||ze||Function("return this")(),ee=Object.prototype,le=ee.toString,Ae=Math.max,Ze=Math.min,Z=function(){return ce.Date.now()};p.exports=h}).call(c,(function(){return this})())},function(p,c){(function(u){function m(Z,G,re){function $(De){var he=q,Je=Q;return q=Q=void 0,be=De,ae=Z.apply(Je,he)}function ue(De){return be=De,ie=setTimeout(F,G),nt?$(De):ae}function C(De){var he=De-ve,Je=De-be,Nt=G-he;return pt?Ae(Nt,I-Je):Nt}function Y(De){var he=De-ve,Je=De-be;return ve===void 0||he>=G||he<0||pt&&Je>=I}function F(){var De=Ze();return Y(De)?me(De):void(ie=setTimeout(F,C(De)))}function me(De){return ie=void 0,mt&&q?$(De):(q=Q=void 0,ae)}function we(){ie!==void 0&&clearTimeout(ie),be=0,q=ve=Q=ie=void 0}function w(){return ie===void 0?ae:me(Ze())}function D(){var De=Ze(),he=Y(De);if(q=arguments,Q=this,ve=De,he){if(ie===void 0)return ue(ve);if(pt)return ie=setTimeout(F,G),$(ve)}return ie===void 0&&(ie=setTimeout(F,G)),ae}var q,Q,I,ae,ie,ve,be=0,nt=!1,pt=!1,mt=!0;if(typeof Z!="function")throw new TypeError(y);return G=g(G)||0,h(re)&&(nt=!!re.leading,pt="maxWait"in re,I=pt?le(g(re.maxWait)||0,G):I,mt="trailing"in re?!!re.trailing:mt),D.cancel=we,D.flush=w,D}function h(Z){var G=typeof Z>"u"?"undefined":S(Z);return!!Z&&(G=="object"||G=="function")}function v(Z){return!!Z&&(typeof Z>"u"?"undefined":S(Z))=="object"}function x(Z){return(typeof Z>"u"?"undefined":S(Z))=="symbol"||v(Z)&&ee.call(Z)==B}function g(Z){if(typeof Z=="number")return Z;if(x(Z))return _;if(h(Z)){var G=typeof Z.valueOf=="function"?Z.valueOf():Z;Z=h(G)?G+"":G}if(typeof Z!="string")return Z===0?Z:+Z;Z=Z.replace(L,"");var re=U.test(Z);return re||V.test(Z)?P(Z.slice(2),re?2:8):H.test(Z)?_:+Z}var S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},y="Expected a function",_=NaN,B="[object Symbol]",L=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,V=/^0o[0-7]+$/i,P=parseInt,J=(typeof u>"u"?"undefined":S(u))=="object"&&u&&u.Object===Object&&u,pe=(typeof self>"u"?"undefined":S(self))=="object"&&self&&self.Object===Object&&self,ze=J||pe||Function("return this")(),ce=Object.prototype,ee=ce.toString,le=Math.max,Ae=Math.min,Ze=function(){return ze.Date.now()};p.exports=m}).call(c,(function(){return this})())},function(p,c){function u(S){var y=void 0,_=void 0;for(y=0;y<S.length;y+=1)if(_=S[y],_.dataset&&_.dataset.aos||_.children&&u(_.children))return!0;return!1}function m(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function h(){return!!m()}function v(S,y){var _=window.document,B=m(),L=new B(x);g=y,L.observe(_.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function x(S){S&&S.forEach(function(y){var _=Array.prototype.slice.call(y.addedNodes),B=Array.prototype.slice.call(y.removedNodes),L=_.concat(B);if(u(L))return g()})}Object.defineProperty(c,"__esModule",{value:!0});var g=function(){};c.default={isSupported:h,ready:v}},function(p,c){function u(_,B){if(!(_ instanceof B))throw new TypeError("Cannot call a class as a function")}function m(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var h=(function(){function _(B,L){for(var H=0;H<L.length;H++){var U=L[H];U.enumerable=U.enumerable||!1,U.configurable=!0,"value"in U&&(U.writable=!0),Object.defineProperty(B,U.key,U)}}return function(B,L,H){return L&&_(B.prototype,L),H&&_(B,H),B}})(),v=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,x=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,S=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=(function(){function _(){u(this,_)}return h(_,[{key:"phone",value:function(){var B=m();return!(!v.test(B)&&!x.test(B.substr(0,4)))}},{key:"mobile",value:function(){var B=m();return!(!g.test(B)&&!S.test(B.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),_})();c.default=new y},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var u=function(h,v,x){var g=h.node.getAttribute("data-aos-once");v>h.position?h.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!x&&g!=="true")&&h.node.classList.remove("aos-animate")},m=function(h,v){var x=window.pageYOffset,g=window.innerHeight;h.forEach(function(S,y){u(S,g+x,v)})};c.default=m},function(p,c,u){function m(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(c,"__esModule",{value:!0});var h=u(12),v=m(h),x=function(g,S){return g.forEach(function(y,_){y.node.classList.add("aos-init"),y.position=(0,v.default)(y.node,S.offset)}),g};c.default=x},function(p,c,u){function m(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(c,"__esModule",{value:!0});var h=u(13),v=m(h),x=function(g,S){var y=0,_=0,B=window.innerHeight,L={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(L.offset&&!isNaN(L.offset)&&(_=parseInt(L.offset)),L.anchor&&document.querySelectorAll(L.anchor)&&(g=document.querySelectorAll(L.anchor)[0]),y=(0,v.default)(g).top,L.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=g.offsetHeight/2;break;case"bottom-bottom":y+=g.offsetHeight;break;case"top-center":y+=B/2;break;case"bottom-center":y+=B/2+g.offsetHeight;break;case"center-center":y+=B/2+g.offsetHeight/2;break;case"top-top":y+=B;break;case"bottom-top":y+=g.offsetHeight+B;break;case"center-top":y+=g.offsetHeight/2+B}return L.anchorPlacement||L.offset||isNaN(S)||(_=S),y+_};c.default=x},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var u=function(m){for(var h=0,v=0;m&&!isNaN(m.offsetLeft)&&!isNaN(m.offsetTop);)h+=m.offsetLeft-(m.tagName!="BODY"?m.scrollLeft:0),v+=m.offsetTop-(m.tagName!="BODY"?m.scrollTop:0),m=m.offsetParent;return{top:v,left:h}};c.default=u},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var u=function(m){return m=m||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(m,function(h){return{node:h}})};c.default=u}])})})(bo)),bo.exports}var dx=ux();const $l=vg(dx);const Kp=(...r)=>r.filter((d,p,c)=>!!d&&d.trim()!==""&&c.indexOf(d)===p).join(" ").trim();const fx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const px=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,p,c)=>c?c.toUpperCase():p.toLowerCase());const jp=r=>{const d=px(r);return d.charAt(0).toUpperCase()+d.slice(1)};var mx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const hx=r=>{for(const d in r)if(d.startsWith("aria-")||d==="role"||d==="title")return!0;return!1};const gx=E.forwardRef(({color:r="currentColor",size:d=24,strokeWidth:p=2,absoluteStrokeWidth:c,className:u="",children:m,iconNode:h,...v},x)=>E.createElement("svg",{ref:x,...mx,width:d,height:d,stroke:r,strokeWidth:c?Number(p)*24/Number(d):p,className:Kp("lucide",u),...!m&&!hx(v)&&{"aria-hidden":"true"},...v},[...h.map(([g,S])=>E.createElement(g,S)),...Array.isArray(m)?m:[m]]));const it=(r,d)=>{const p=E.forwardRef(({className:c,...u},m)=>E.createElement(gx,{ref:m,iconNode:d,className:Kp(`lucide-${fx(jp(r))}`,`lucide-${r}`,c),...u}));return p.displayName=jp(r),p};const xx=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],vx=it("bot",xx);const bx=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],yx=it("building",bx);const zx=[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]],wx=it("chart-network",zx);const jx=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],Sx=it("computer",jx);const Nx=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ex=it("eye",Nx);const kx=[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]],Ax=it("folder-code",kx);const Tx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Cx=it("globe",Tx);const Ox=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],Mx=it("handshake",Ox);const Dx=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],_x=it("leaf",Dx);const Rx=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Sp=it("lightbulb",Rx);const Ux=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Bx=it("linkedin",Ux);const Hx=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Lx=it("scale",Hx);const qx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Yx=it("shield-check",qx);const Gx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qx=it("star",Gx);const Xx=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],Vx=it("telescope",Xx);const Zx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Kx=it("users",Zx),Np={it:{claim:n.jsxs(n.Fragment,{children:["Intelligenza artificiale applicata all'industria.",n.jsx("br",{}),"Dove l'innovazione incontra l'esperienza."]}),azienda:"Azienda",prodotti:"Prodotti",contatti:"Contatti",sediTitle:"Sedi",sedeLegale:"Sede Legale",sedeOperativa:"Sedi Operative",pec:"PEC",tel:"Tel",cf:"C.F./P.IVA",privacy:"Privacy Policy",cookie:"Cookie Policy",address_legale:n.jsx(n.Fragment,{children:"Corso Garibaldi, 80 – 55049 Viareggio (LU), Italia"}),address_ops:[n.jsx(n.Fragment,{children:"Corso Garibaldi, 80 – 55049 Viareggio (LU), Italia"}),n.jsxs(n.Fragment,{children:["Second Floor, No. 979, Yunhan Road,",n.jsx("br",{}),"Lingang New Area, Shanghai, Cina"]})]},en:{claim:n.jsxs(n.Fragment,{children:["Artificial intelligence applied to industry.",n.jsx("br",{}),"Where innovation meets experience."]}),azienda:"Company",prodotti:"Products",contatti:"Contacts",sediTitle:"Offices",sedeLegale:"Registered Office",sedeOperativa:"Operative Headquarters",pec:"Certified Email",tel:"Tel",cf:"VAT Number",privacy:"Privacy Policy",cookie:"Cookie Policy",address_legale:n.jsx(n.Fragment,{children:"Corso Garibaldi, 80 – 55049 Viareggio (LU), Italy"}),address_ops:[n.jsx(n.Fragment,{children:"Corso Garibaldi, 80 – 55049 Viareggio (LU), Italy"}),n.jsxs(n.Fragment,{children:["Second Floor, No. 979, Yunhan Road,",n.jsx("br",{}),"Lingang New Area, Shanghai, China"]})]},zh:{claim:n.jsxs(n.Fragment,{children:["人工智能应用于工业领域。",n.jsx("br",{}),"创新与经验的交汇之处。"]}),azienda:"公司",prodotti:"产品",contatti:"联系方式",sediTitle:"办公室",sedeLegale:"注册办公室",sedeOperativa:"运营总部",pec:"认证Email",tel:"电话",cf:"增值税号码",privacy:"隐私政策",cookie:"Cookie政策",address_legale:n.jsx(n.Fragment,{children:"Corso Garibaldi, 80 – 55049 Viareggio (LU), 意大利"}),address_ops:[n.jsx(n.Fragment,{children:"Corso Garibaldi, 80 – 55049 Viareggio (LU), 意大利"}),n.jsxs(n.Fragment,{children:["中国（上海）自由贸易试验区",n.jsx("br",{}),"临港新片区云汉路979号2楼"]})]}},Jx=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .ft-root {
    background: #080808;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    border-top: 1px solid #1A1A1A;
  }

  /* ── TOP ROW ── */
  .ft-top {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 48px;
    padding: 72px 10% 56px;
    border-bottom: 1px solid #141414;
  }

  /* ── BRAND ── */
  .ft-brand-logo {
    display: block;
    margin-bottom: 16px;
    width: fit-content;
    text-decoration: none;
  }
  .ft-brand-logo img {
    height: 76px;
    width: auto;
    display: block;
    object-fit: contain;
  }
  .ft-brand-claim {
    font-size: 13px;
    line-height: 1.8;
    color: #555;
    font-weight: 300;
    max-width: 260px;
    margin-bottom: 24px;
  }
  .ft-brand-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .ft-brand-badges { display: flex; gap: 8px; flex-wrap: wrap; }
  .ft-badge {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px 12px;
    border: 1px solid #1E1E1E;
    border-radius: 100px;
    color: #444;
  }

  /* LinkedIn icon */
  .ft-linkedin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: 1px solid #1E1E1E;
    border-radius: 8px;
    color: #444;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
    flex-shrink: 0;
  }
  .ft-linkedin:hover {
    border-color: #0A66C2;
    color: #0A66C2;
    background: #0A66C21A;
  }

  /* ── LANG SWITCH ── */
  .ft-lang-switch {
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
  }
  .ft-lang-btn {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 1px solid #1E1E1E;
    border-radius: 100px;
    color: #444;
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.15s;
  }
  .ft-lang-btn:hover { color: #888; border-color: #333; }
  .ft-lang-btn.active { border-color: #E63946; color: #E63946; background: #E6394611; }

  /* ── COLS ── */
  .ft-col-title {
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #141414;
  }
  .ft-col-links { display: flex; flex-direction: column; gap: 10px; }
  .ft-link {
    font-size: 14px;
    color: #666;
    text-decoration: none;
    font-weight: 300;
    transition: color 0.2s;
    width: fit-content;
  }
  .ft-link:hover { color: #F0EDE8; }
  .ft-link-accent {
    font-size: 14px;
    color: #E63946;
    text-decoration: none;
    font-weight: 300;
    transition: opacity 0.2s;
    width: fit-content;
  }
  .ft-link-accent:hover { opacity: 0.7; }

  /* ── SEDI ── */
  .ft-sedi {
    padding: 40px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    border-bottom: 1px solid #141414;
  }
  .ft-sede-block { display: flex; flex-direction: column; gap: 20px; }
  .ft-sede-item {}
  .ft-sede-flag {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #E63946;
    margin-bottom: 8px;
  }
  .ft-sede-address {
    font-size: 13px;
    line-height: 1.8;
    color: #555;
    font-weight: 300;
  }

  /* ── BOTTOM ── */
  .ft-bottom {
    padding: 24px 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .ft-legal-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .ft-legal-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
    align-items: center;
  }
  .ft-legal-item { font-size: 12px; color: #333; font-weight: 300; }
  .ft-legal-item a {
    color: #444;
    text-decoration: none;
    transition: color 0.2s;
  }
  .ft-legal-item a:hover { color: #888; }
  .ft-legal-dot { font-size: 12px; color: #222; }
  .ft-legal-sub  { font-size: 11px; color: #222; font-weight: 300; }

  .ft-policy-links { display: flex; align-items: center; gap: 20px; }
  .ft-policy-link {
    font-size: 11px;
    color: #333;
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  .ft-policy-link:hover { color: #666; }
  .ft-policy-sep { width: 1px; height: 10px; background: #222; }

  @media (max-width: 900px) {
    .ft-top { grid-template-columns: 1fr 1fr; padding: 56px 6% 48px; gap: 36px; }
    .ft-brand-col { grid-column: 1 / -1; }
    .ft-sedi { padding: 36px 6%; gap: 32px; }
    .ft-bottom { padding: 20px 6%; flex-direction: column; align-items: flex-start; gap: 16px; }
  }
  @media (max-width: 560px) {
    .ft-top { grid-template-columns: 1fr; }
    .ft-sedi { grid-template-columns: 1fr; }
    .ft-policy-links { flex-wrap: wrap; gap: 12px; }
  }
    @media (max-width: 900px) {
  .ft-top {
    grid-template-columns: 1fr 1fr;
    padding: 48px 6% 40px;
    gap: 32px;
  }
  .ft-brand-col { grid-column: 1 / -1; }
  .ft-sedi { padding: 32px 6%; gap: 24px; }
  .ft-bottom {
    padding: 20px 6%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .ft-top {
    grid-template-columns: 1fr;
    padding: 40px 5% 32px;
    gap: 28px;
  }
  .ft-brand-logo img { height: 56px; }
  .ft-brand-claim { font-size: 12px; }
  .ft-brand-badges { gap: 6px; }
  .ft-badge { font-size: 9px; padding: 4px 10px; }

  .ft-col-title { font-size: 9px; }
  .ft-link, .ft-link-accent { font-size: 13px; }

  .ft-sedi {
    grid-template-columns: 1fr;
    padding: 28px 5%;
    gap: 20px;
  }
  .ft-sede-address { font-size: 12px; }

  .ft-bottom { padding: 18px 5%; gap: 14px; }
  .ft-legal-row { gap: 4px 12px; }
  .ft-legal-item { font-size: 11px; }
  .ft-legal-dot { display: none; }
  .ft-legal-sub { font-size: 10px; }

  .ft-policy-links {
    flex-wrap: wrap;
    gap: 10px;
  }
  .ft-policy-sep { display: none; }
  .ft-policy-link { font-size: 11px; }
}
`,Qt=({lang:r="it"})=>{const d=new Date().getFullYear(),[p,c]=E.useState(r),u=Np[p]||Np.it;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:Jx}),n.jsxs("footer",{className:"ft-root",children:[n.jsxs("div",{className:"ft-top",children:[n.jsxs("div",{className:"ft-brand-col",children:[n.jsx("div",{className:"ft-lang-switch",children:["it","en","zh"].map(m=>n.jsx("button",{className:`ft-lang-btn${p===m?" active":""}`,onClick:()=>c(m),children:m==="it"?"ITA":m==="en"?"ENG":"中文"},m))}),n.jsx("a",{href:"/",className:"ft-brand-logo",children:n.jsx("img",{src:Zp,alt:"BluMentis"})}),n.jsx("p",{className:"ft-brand-claim",children:u.claim}),n.jsxs("div",{className:"ft-brand-bottom",children:[n.jsxs("div",{className:"ft-brand-badges",children:[n.jsx("span",{className:"ft-badge",children:"GDPR Compliant"}),n.jsx("span",{className:"ft-badge",children:"ISO Ready"}),n.jsx("span",{className:"ft-badge",children:"Made in Italy"})]}),n.jsx("a",{href:"https://www.linkedin.com/company/blumentis",target:"_blank",rel:"noreferrer",className:"ft-linkedin","aria-label":"BluMentis su LinkedIn",children:n.jsx(Bx,{size:16})})]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"ft-col-title",children:u.azienda}),n.jsxs("div",{className:"ft-col-links",children:[n.jsx("a",{href:"/#chi-siamo",className:"ft-link",children:"Chi siamo"}),n.jsx("a",{href:"/#visione",className:"ft-link",children:"Visione"}),n.jsx("a",{href:"/#missione",className:"ft-link",children:"Missione"}),n.jsx("a",{href:"/#valori",className:"ft-link",children:"Valori"}),n.jsx("a",{href:"/#rete-internazionale",className:"ft-link",children:"Rete internazionale"})]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"ft-col-title",children:u.prodotti}),n.jsxs("div",{className:"ft-col-links",children:[n.jsx("a",{href:"/prodotti#proline",className:"ft-link",children:"ProLine Analytics"}),n.jsx("a",{href:"/prodotti#optimai",className:"ft-link",children:"OptimAI"}),n.jsx("a",{href:"/prodotti#agentiche",className:"ft-link",children:"Piattaforme Agentiche"}),n.jsx("a",{href:"/prodotti#custom",className:"ft-link",children:"Sviluppi Custom"}),n.jsx("a",{href:"/prodotti#hardware",className:"ft-link",children:"Hardware"})]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"ft-col-title",children:u.contatti}),n.jsxs("div",{className:"ft-col-links",children:[n.jsx("a",{href:"mailto:blumentis@pec.it",className:"ft-link-accent",children:"blumentis@pec.it"}),n.jsx("a",{href:"tel:+390584148124",className:"ft-link",children:"+39 0584 1481242"}),n.jsx("a",{href:"/contatti",className:"ft-link",style:{marginTop:8},children:"Scrivici →"}),n.jsx("a",{href:"/carriere",className:"ft-link",children:"Carriere & Tesi"})]})]})]}),n.jsxs("div",{className:"ft-sedi",children:[n.jsx("div",{className:"ft-sede-block",children:n.jsxs("div",{className:"ft-sede-item",children:[n.jsxs("div",{className:"ft-sede-flag",children:["🇮🇹 ",u.sedeLegale]}),n.jsx("div",{className:"ft-sede-address",children:u.address_legale})]})}),n.jsxs("div",{className:"ft-sede-block",children:[n.jsxs("div",{className:"ft-sede-flag",children:[" ",u.sedeOperativa]}),u.address_ops.map((m,h)=>n.jsx("div",{className:"ft-sede-item",children:n.jsx("div",{className:"ft-sede-address",children:m})},h))]})]}),n.jsxs("div",{className:"ft-bottom",children:[n.jsxs("div",{className:"ft-legal-block",children:[n.jsxs("div",{className:"ft-legal-row",children:[n.jsx("span",{className:"ft-legal-item",children:"BluMentis s.r.l."}),n.jsx("span",{className:"ft-legal-dot",children:"·"}),n.jsxs("span",{className:"ft-legal-item",children:[u.cf,": IT02694850468"]}),n.jsx("span",{className:"ft-legal-dot",children:"·"}),n.jsxs("span",{className:"ft-legal-item",children:[u.pec,": ",n.jsx("a",{href:"mailto:blumentis@pec.it",children:"blumentis@pec.it"})]}),n.jsx("span",{className:"ft-legal-dot",children:"·"}),n.jsxs("span",{className:"ft-legal-item",children:[u.tel,": ",n.jsx("a",{href:"tel:+390584148124",children:"+39 0584 1481242"})]})]}),n.jsxs("div",{className:"ft-legal-sub",children:["© ",d," BluMentis s.r.l. Tutti i diritti riservati."]})]}),n.jsxs("div",{className:"ft-policy-links",children:[n.jsx("a",{href:"/privacy",className:"ft-policy-link",children:u.privacy}),n.jsx("div",{className:"ft-policy-sep"}),n.jsx("a",{href:"/cookie",className:"ft-policy-link",children:u.cookie}),n.jsx("div",{className:"ft-policy-sep"}),n.jsx("a",{href:"https://www.blumentis.ai",className:"ft-policy-link",target:"_blank",rel:"noreferrer",children:"blumentis.ai ↗"})]})]})]})]})},$x=[{id:"chi-siamo",eyebrow:"Chi siamo",title:"Imprenditori dietro alle soluzioni",accent:"orange",body:"Imprenditori con una lunga storia nel panorama industriale italiano e una rete internazionale consolidata, uniti alla energia e alla visione di una nuova generazione. Questa è la nostra formula: esperienza che guida, gioventù che innova. Un equilibrio raro, che ci permette di muoverci veloci senza perdere solidità.",highlight:"Radici solide. Visione nel futuro.",icon:n.jsx(yx,{}),layout:"text-left",visual:{stat:"5+",desc:"Settori industriali in cui abbiamo operato"}},{id:"visione",eyebrow:"Il nostro orizzonte",title:"Visione",accent:"blue",body:"L'Intelligenza Artificiale non è il futuro — è il presente. Crediamo che ogni azienda, grande o piccola, possa trasformare il proprio modo di lavorare grazie a questa innovazione. Costruiamo tecnologie che non complicano, ma semplificano — dando alle imprese gli strumenti per crescere più velocemente, decidere meglio e competere ad armi pari con i grandi player del mercato.",highlight:"La tecnologia che lavora per te, non al posto tuo.",icon:n.jsx(Vx,{}),layout:"text-right",visual:{stat:"3×",desc:"Aumento della velocità di crescita delle aziende che scelgono l'AI oggi"}},{id:"missione",eyebrow:"Cosa facciamo ogni giorno",title:"Missione",accent:"orange",body:"Diffondiamo soluzioni innovative e sostenibili all'interno delle aziende che vogliono cavalcare il progresso tecnologico e restare competitive in un mercato in continua evoluzione.",highlight:"Dall'idea al mercato.",icon:n.jsx(Sp,{}),layout:"text-left",visual:{stat:"70%",desc:"Dei task a basso valore aggiunto può essere automatizzato"}},{id:"valori",eyebrow:"I principi che ci guidano",title:"Valori",accent:"blue",layout:"values-grid",values:[{icon:n.jsx(Qx,{size:18}),label:"Qualità",desc:"Impegno per standard elevati in ogni fase dello sviluppo, dal codice al prodotto finale."},{icon:n.jsx(Yx,{size:18}),label:"Sicurezza",desc:"Garantiamo affidabilità e protezione dei dati, prevenendo vulnerabilità e operando in piena conformità con le normative europee sull'AI."},{icon:n.jsx(Kx,{size:18}),label:"Inclusività",desc:"Progettare soluzioni AI accessibili e fruibili da tutti, indipendentemente da background o abilità."},{icon:n.jsx(Lx,{size:18}),label:"Etica",desc:"Sviluppiamo e implementiamo l'AI in modo responsabile, rispettando i diritti umani e minimizzando l'impatto negativo sulla società e sull'ambiente."},{icon:n.jsx(Sp,{size:18}),label:"Innovazione",desc:"Ricerchiamo costantemente soluzioni all'avanguardia per superare le sfide attuali e migliorare le performance delle tecnologie che sviluppiamo."},{icon:n.jsx(Ex,{size:18}),label:"Trasparenza",desc:"Garantiamo che clienti e utenti comprendano come le nostre tecnologie funzionano e quali implicazioni hanno per loro."},{icon:n.jsx(Mx,{size:18}),label:"Collaborazione",desc:"Lavoriamo con aziende, istituzioni accademiche e organizzazioni per condividere conoscenze e best practice, costruendo soluzioni più robuste insieme."},{icon:n.jsx(_x,{size:18}),label:"Sostenibilità",desc:"Riduciamo l'impatto ambientale delle nostre tecnologie, ottimizzando l'uso delle risorse e contribuendo al benessere collettivo."}]},{id:"rete-internazionale",eyebrow:"La nostra presenza",title:"Rete internazionale",accent:"orange",body:"Operiamo su scala internazionale con una presenza consolidata in Asia, dove collaboriamo con partner strategici in Cina — mercato in cui siamo già fornitori attivi per player di primo livello nel settore automotive. Una rete commerciale e tecnologica costruita nel tempo, che ci permette di muoverci dove il futuro dell'industria si sta già scrivendo.",icon:n.jsx(Cx,{}),layout:"text-right",visual:{stat:"20+",desc:"Anni di presenza dei nostri founder in Asia"},countries:["🇮🇹 Italia","🇨🇳 Cina"]}],Fx=`
  .cs-section-anchor { scroll-margin-top: 80px; }

  .cs-page {
    padding-top: 64px;
    background: var(--bg-base);
    min-height: 100vh;
  }

  /* ── HERO ── */
  .cs-hero {
    position: relative;
    padding: 5rem 1.5rem 4rem;
    overflow: hidden;
    border-bottom: 1px solid var(--bg-border);
  }

  .cs-hero-waves {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    mask-image:
      linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(90deg,  transparent 0%, black 8%,  black 92%, transparent 100%);
    mask-composite: intersect;
    -webkit-mask-image:
      linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(90deg,  transparent 0%, black 8%,  black 92%, transparent 100%);
    -webkit-mask-composite: source-in;
  }

  .cs-wave-track {
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    display: flex;
    will-change: transform;
  }

  .cs-wave-track svg {
    flex-shrink: 0;
    height: 100%;
    width: auto;
    display: block;
  }

  .cs-wave-track.t1 { animation: wave-scroll 32s linear infinite;         opacity: 0.13; top:  0%;  }
  .cs-wave-track.t2 { animation: wave-scroll 50s linear infinite reverse; opacity: 0.09; top:  8%;  }
  .cs-wave-track.t3 { animation: wave-scroll 22s linear infinite;         opacity: 0.07; top: -6%;  }

  @keyframes wave-scroll {
    0%   { transform: translate3d(0,    0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }

  .cs-hero-inner {
    position: relative; z-index: 1;
    max-width: 800px; margin: 0 auto; text-align: center;
  }
  .cs-hero-title {
    font-size: clamp(2.5rem, 3vw, 4rem);
    font-weight: 800; line-height: 1.05;
    letter-spacing: -0.035em;
    margin-bottom: 1.25rem;
  }
  .cs-hero-sub {
    font-size: 1.125rem; line-height: 1.75;
    color: var(--text-secondary);
    max-width: 520px; margin: 0 auto;
  }

  /* ── CONTENT ── */
  .cs-content {
    max-width: 1100px; margin: 0 auto;
    padding: 0 1.5rem 6rem;
  }

  /* ── SEZIONE ── */
  .cs-section {
    padding: 5rem 0;
    border-bottom: 1px solid var(--bg-border);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .cs-section:last-child { border-bottom: none; }
  .cs-section.reverse { direction: rtl; }
  .cs-section.reverse > * { direction: ltr; }
  @media (max-width: 768px) {
    .cs-section, .cs-section.reverse {
      grid-template-columns: 1fr;
      direction: ltr;
      gap: 2.5rem;
      padding: 3.5rem 0;
    }
  }
  .cs-section.values-layout { grid-template-columns: 1fr; gap: 3rem; }

  /* ── TESTO ── */
  .cs-eyebrow {
    font-size: 0.6875rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .cs-eyebrow.orange { color: oklch(78% 0.18 50); }
  .cs-eyebrow.blue   { color: oklch(75% 0.18 240); }

  .cs-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 700; line-height: 1.15;
    letter-spacing: -0.025em;
    margin-bottom: 1.25rem;
  }
  .cs-body {
    font-size: 1.2rem; line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }
  .cs-highlight {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    font-size: 0.9375rem; font-weight: 500; line-height: 1.5;
  }
  .cs-highlight.orange {
    background: oklch(68% 0.26 50 / 0.08);
    border: 1px solid oklch(68% 0.26 50 / 0.20);
    color: oklch(82% 0.14 50);
  }
  .cs-highlight.blue {
    background: oklch(63% 0.24 240 / 0.08);
    border: 1px solid oklch(63% 0.24 240 / 0.20);
    color: oklch(80% 0.14 240);
  }

  /* ── VISUAL BOX ── */
  .cs-visual { display: flex; align-items: center; justify-content: center; }
  .cs-visual-box {
    width: 100%; max-width: 380px;
    background: var(--bg-surface);
    border: 1px solid var(--bg-border);
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 0 12px 40px oklch(0% 0 0 / 0.4);
    position: relative; overflow: hidden;
  }
  .cs-visual-box::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  }
  .cs-visual-box.orange::before { background: linear-gradient(90deg, transparent, oklch(68% 0.26 50), transparent); }
  .cs-visual-box.blue::before   { background: linear-gradient(90deg, transparent, oklch(63% 0.24 240), transparent); }

  .cs-visual-icon  { margin-bottom: 1.25rem; display: block; color: var(--text-muted); }
  .cs-visual-stat  { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 0.375rem; }
  .cs-visual-stat.orange { color: oklch(68% 0.26 50); }
  .cs-visual-stat.blue   { color: oklch(63% 0.24 240); }
  .cs-visual-desc  { font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; }
  .section-number  {
    font-family: 'Syne', sans-serif; font-size: 5rem; font-weight: 800;
    color: oklch(22% 0.010 30);
    position: absolute; top: 1rem; right: 1rem;
    pointer-events: none; user-select: none; line-height: 1;
  }

  /* ── VALORI ── */
  .values-header { max-width: 560px; }
  .values-supertitle {
    font-size: 0.6875rem; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--text-muted);
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }
  .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr; } }

  .value-card {
    background: var(--bg-surface);
    border: 1px solid var(--bg-border);
    border-radius: 0.875rem;
    padding: 1.5rem;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .value-card:hover {
    border-color: oklch(42% 0.008 30);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px oklch(0% 0 0 / 0.3);
  }
  .value-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: oklch(68% 0.26 50 / 0.10);
    border: 1px solid oklch(68% 0.26 50 / 0.20);
    display: flex; align-items: center; justify-content: center;
    color: oklch(78% 0.18 50);
    margin-bottom: 1rem;
  }
  .value-label { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
  .value-desc  { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65; }

  /* ── PAESI ── */
  .countries-grid { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-top: 1.25rem; }
  .country-chip {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.4rem 0.875rem;
    background: var(--bg-raised); border: 1px solid var(--bg-border);
    border-radius: 999px; font-size: 0.875rem; color: var(--text-secondary);
    transition: all 0.15s;
  }
  .country-chip:hover { border-color: oklch(68% 0.26 50 / 0.4); color: var(--text-primary); }
  /* ── MOBILE ── */
@media (max-width: 640px) {

  /* Hero */
  .cs-hero {
    padding: 3.5rem 1.25rem 2.5rem;
  }
  .cs-hero-title {
    font-size: 1.75rem;
    letter-spacing: -0.02em;
  }
  .cs-hero-sub {
    font-size: 1rem;
  }

  /* Sezioni */
  .cs-content {
    padding: 0 1.25rem 4rem;
  }
  .cs-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
  }
  .cs-section.reverse {
    direction: ltr;
  }

  /* Visual box */
  .cs-visual-box {
    max-width: 100%;
    padding: 1.5rem;
  }
  .cs-visual-stat {
    font-size: 2.25rem;
  }
  .section-number {
    font-size: 3.5rem;
  }

  /* Testo */
  .cs-title {
    font-size: 1.5rem;
  }
  .cs-body {
    font-size: 1rem;
  }

  /* Valori */
  .values-grid {
    grid-template-columns: 1fr;
  }
  .value-card {
    padding: 1.25rem;
  }

  /* Paesi */
  .countries-grid {
    gap: 0.5rem;
  }
  .country-chip {
    font-size: 0.8125rem;
  }
}

@media (min-width: 641px) and (max-width: 900px) {
  .cs-section {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .cs-visual-box {
    max-width: 320px;
  }
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
`,Ks=({className:r,count:d,spacing:p,amplitude:c,period:u,strokeWidth:m,reverse:h=!1})=>{const v=d*p+c*2+20,x=2880,g=(_,B=0)=>{const L=Math.ceil(x/u)+2,H=u*.33,U=[];for(let V=-1;V<=L;V++){const P=V*u+B,J=P+u/2,pe=P+u;V===-1&&U.push(`M ${P},${_}`),U.push(`C ${P+H},${_-c} ${J-H},${_-c} ${J},${_}`),U.push(`C ${J+H},${_+c} ${pe-H},${_+c} ${pe},${_}`)}return U.join(" ")},S=Array.from({length:d},(_,B)=>{const L=c+10+B*p,H=B/d*u*-.5;return n.jsx("path",{d:g(L,H),stroke:"oklch(72% 0 0)",strokeWidth:m,fill:"none",strokeLinecap:"round"},B)}),y=n.jsx("svg",{viewBox:`0 0 ${x} ${v}`,height:v,width:x,xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:S},"s");return n.jsxs("div",{className:`cs-wave-track ${r}`,style:h?{animationDirection:"reverse"}:{},children:[y,y]})},Wx=()=>(E.useEffect(()=>{$l.init({duration:700,easing:"ease-out-cubic",once:!0,offset:60})},[]),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:Fx}),n.jsxs("div",{className:"cs-page",children:[n.jsxs("div",{className:"cs-hero",children:[n.jsxs("div",{className:"cs-hero-waves",children:[n.jsx(Ks,{className:"t1",count:4,spacing:38,amplitude:10,period:700,strokeWidth:.6}),n.jsx(Ks,{className:"t2",count:3,spacing:52,amplitude:14,period:1100,strokeWidth:.7,reverse:!0}),n.jsx(Ks,{className:"t3",count:3,spacing:45,amplitude:7,period:500,strokeWidth:.5})]}),n.jsxs("div",{className:"cs-hero-inner",children:[n.jsx("h1",{className:"cs-hero-title","data-aos":"fade-up","data-aos-delay":"100",children:"Conosciamo le tue sfide. Perché le abbiamo vissute in prima persona."}),n.jsxs("p",{className:"cs-hero-sub","data-aos":"fade-up","data-aos-delay":"200",children:["Non consulenti. Non teorici.",n.jsx("br",{})," Siamo imprenditori che costruiscono tecnologia per chi fa impresa."]})]})]}),n.jsx("div",{className:"cs-content",children:$x.map((r,d)=>{if(r.layout==="values-grid")return n.jsxs("div",{id:r.id,className:"cs-section values-layout cs-section-anchor",children:[n.jsxs("div",{className:"values-header","data-aos":"fade-up",children:[n.jsx("div",{className:`cs-eyebrow ${r.accent}`,children:r.eyebrow}),n.jsx("h2",{className:"cs-title",children:r.title}),n.jsx("p",{className:"values-supertitle",children:"Il riferimento nel nostro lavoro"})]}),n.jsx("div",{className:"values-grid",children:r.values.map((v,x)=>n.jsxs("div",{className:"value-card","data-aos":"fade-up","data-aos-delay":x%4*80,children:[n.jsxs("div",{className:"flex items-center gap-3",style:{marginBottom:"0.75rem"},children:[n.jsx("div",{className:"value-icon",children:v.icon}),n.jsx("div",{className:"value-label",children:v.label})]}),n.jsx("p",{className:"value-desc",children:v.desc})]},v.label))})]},r.id);const p=r.layout==="text-right",c=p?"fade-right":"fade-left",u=p?"fade-left":"fade-right",m=n.jsxs("div",{"data-aos":c,"data-aos-delay":"100",children:[n.jsx("div",{className:`cs-eyebrow ${r.accent}`,children:r.eyebrow}),n.jsx("h2",{className:"cs-title",children:r.title}),r.body&&n.jsx("p",{className:"cs-body",children:r.body}),r.highlight&&n.jsxs("div",{className:`cs-highlight ${r.accent}`,children:[n.jsx("span",{style:{flexShrink:0},children:r.accent==="orange"?"⚡":"✦"}),r.highlight]}),r.countries&&n.jsx("div",{className:"countries-grid",children:r.countries.map(v=>n.jsx("span",{className:"country-chip",children:v},v))})]}),h=n.jsx("div",{className:"cs-visual","data-aos":u,"data-aos-delay":"200",children:n.jsxs("div",{className:`cs-visual-box ${r.accent}`,children:[n.jsx("span",{className:"cs-visual-icon",children:r.icon}),n.jsx("div",{className:`cs-visual-stat ${r.accent}`,children:r.visual.stat}),n.jsx("p",{className:"cs-visual-desc",children:r.visual.desc}),n.jsxs("div",{className:"section-number",children:["0",d+1]})]})});return n.jsx("div",{id:r.id,className:`cs-section cs-section-anchor${p?" reverse":""}`,children:p?n.jsxs(n.Fragment,{children:[h,m]}):n.jsxs(n.Fragment,{children:[m,h]})},r.id)})}),n.jsx(Qt,{})]})]})),Ix=({product:r,isActive:d})=>n.jsxs("div",{className:`card${d?" card--active":""}`,"data-accent":r.accentClass,"data-label":r.category,children:[n.jsxs("div",{className:"imgBox",children:[n.jsx("span",{className:"card-icon",children:r.icon}),n.jsx("span",{className:"card-cat-badge",children:r.category})]}),n.jsxs("div",{className:"contentBox",children:[n.jsxs("div",{className:"contentBox__text",children:[n.jsx("h3",{children:r.name}),n.jsx("p",{className:"card-tagline",children:r.tagline})]}),n.jsx(Gt,{to:`/prodotti/${r.id}`,className:"buy",children:"Scopri di più →"})]})]}),Yl=[{id:"proline",shortName:"ProLine",name:"ProLine Analytics",category:"Software",accent:"orange",accentClass:"orange",tagline:"Controllo totale. Qualità garantita.",description:"ProLine Analytics elabora e analizza i dati provenienti dalle linee di assemblaggio in tempo reale, offrendo visibilità completa sui processi e identificando potenziali rischi prima che si concretizzino in prodotti non conformi. Progettato per processi produttivi che richiedono controllo qualitativo rigoroso.",features:["On-premise","Dashboard real-time","Multi-utente","Multi-dispositivo","Integrazione MES"],stats:[{value:"1000+",label:"Prodotti confrontati"},{value:"100%",label:"Tracciabilità prodotti"},{value:"<30s",label:"Rilevamento anomalie"}],icon:n.jsx(Ax,{}),badge:"Più usato",href:"/prodotti/proline"},{id:"optimai",name:"OptimAI",shortName:"OptimAI",category:"Tecnologia AI embedded ",accent:"blue",accentClass:"blue",tagline:"Ottimizzazione dinamica basata su reti neurali",description:"OptimAI è un algoritmo a rete neurale artificiale che si integra direttamente a bordo di macchine e dispositivi, ottimizzando il funzionamento in tempo reale senza necessità di connessione Internet. Gestisce simultaneamente numerose variabili in continua evoluzione, scegliendo in ogni momento la decisione migliore per le condizioni operative e ambientali del momento. ",features:["Integrazione onboard","Funzionamento offline"," ANN allenata con tecniche di Reinforcement Learning","Training su Digital Twin del tuo dispositivo","Tempi di messa in opera ridotti"],stats:[{value:"100%",label:"Dati elaborati in locale "},{value:"0 ms",label:"Latenza di rete richiesta "},{value:"50+",label:" Variabili gestite in parallelo"}],icon:n.jsx(wx,{}),badge:"Innovativo",href:"/prodotti/optimai"},{id:"agentiche",name:"Piattaforme Agentiche",shortName:"Agentiche",category:"SonIA | OlivIA ",accent:"orange",accentClass:"teal",tagline:"Assistenti al lavoro. Tu al valore aggiunto. ",description:"Le organizzazioni che crescono più velocemente hanno una cosa in comune: processi che funzionano da soli. Le nostre piattaforme agentiche portano intelligenza autonoma dentro le tue operation riducendo costi, errori e tempi di risposta  così i tuoi processi complessi si automatizzano e le tue persone si concentrano su ciò che crea valore. ",features:["Orchestrazione multi-agente","Memoria e contesto persistente","Integrazione sistemi aziendali","Tempi di messa in opera minimi"," Residente su cloud privato aziendale "],stats:[{value:"70%",label:"Riduzione attività manuali "},{value:"24/7 ",label:"Operatività continua "},{value:"< 1 gg ",label:"Tempo di onboarding "}],icon:n.jsx(vx,{}),badge:"Flessibili",href:"/prodotti#agentiche"},{id:"custom",name:"Sviluppi Custom",shortName:"Custom",category:"Diamo forma alle tue idee ",accent:"blue",accentClass:"gold",tagline:"La tua visione. La nostra tecnologia. ",description:"Sviluppiamo soluzioni personalizzate in collaborazione con i nostri clienti — con costi accessibili quando il progetto si  allinea alla nostra visione tecnologica, e con condizioni concordate ad hoc per sviluppi esclusivi ad alto grado di personalizzazione.Non vendiamo ore. Costruiamo insieme prodotti che durano. ",features:["Sviluppo congiunto con il cliente ","Tecnologia AI altamente personalizzata","Sviluppo esclusivo disponibile"," Integrazione con sistemi esistenti "],stats:[{value:"2",label:"Modalità di collaborazione"},{value:"AI",label:"Native by design"},{value:"100%",label:"Personalizzato"}],icon:"🔧",badge:"Su richiesta",href:"/prodotti/custom"},{id:"hardware",name:"Hardware",shortName:"Hardware",category:"Hardware & Supply Chain ",accent:"orange",accentClass:"steel",tagline:"Il componente giusto. Dove serve. Quando serve. ",description:"Grazie a connessioni ventennali con fornitori selezionati in Europa, Asia e con un focus privilegiato sulla Cina, offriamo fornitura di hardware industriale ad alto contenuto tecnologico  a costi competitivi e con qualità garantita. Un interlocutore unico per approvvigionamenti complessi, con esperienza diretta nei settori automotive, agromeccanica e altri. ",features:["Rete di fornitori consolidata","Supporto hardware alle nostre tecnologie ","Costi competitivi","Su richiesta e su misura"],stats:[{value:"20+",label:"Anni di connessioni internazionali "},{value:"3+",label:"Continenti coperti"},{value:"100%",label:"Qualità verificata "}],icon:n.jsx(Sx,{}),badge:"Disponibile",href:"/prodotti/hardware"}],Px=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .pr-page { padding-top: 64px; background: var(--bg-base); min-height: 100vh; }

  /* ── HERO ── */
  .pr-hero {
    position: relative; padding: 5rem 1.5rem 4rem;
    overflow: hidden; border-bottom: 1px solid var(--bg-border);
  }

  .pr-hero::before {
    content: "PRODOTTI";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: white;
    opacity: 3%;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }
    .pr-tab.active.teal       { color: oklch(78% 0.14 185); border-color: oklch(66% 0.18 185); }
.pr-cat-label.teal        { color: oklch(78% 0.14 185); }
.pr-stat-val.teal         { color: oklch(66% 0.18 185); }
.pr-check.teal            { background: oklch(66% 0.18 185 / 0.12); border: 1px solid oklch(66% 0.18 185 / 0.30); color: oklch(66% 0.18 185); }
.pr-other-cat.teal        { background: oklch(66% 0.18 185 / 0.12); color: oklch(78% 0.14 185); }
.pr-count-val.teal        { color: oklch(66% 0.18 185); }
.pr-eyebrow.teal          { background: oklch(66% 0.18 185 / 0.10); border-color: oklch(66% 0.18 185 / 0.22); color: oklch(78% 0.14 185); }
/* ── GOLD ── */
.pr-tab.active.gold       { color: oklch(74% 0.11 80); border-color: oklch(62% 0.14 80); }
.pr-cat-label.gold        { color: oklch(74% 0.11 80); }
.pr-stat-val.gold         { color: oklch(62% 0.14 80); }
.pr-check.gold            { background: oklch(62% 0.14 80 / 0.12); border: 1px solid oklch(62% 0.14 80 / 0.30); color: oklch(62% 0.14 80); }
.pr-other-cat.gold        { background: oklch(62% 0.14 80 / 0.12); color: oklch(74% 0.11 80); }

/* ── STEEL ── */
.pr-tab.active.steel      { color: oklch(72% 0.06 220); border-color: oklch(58% 0.08 220); }
.pr-cat-label.steel       { color: oklch(72% 0.06 220); }
.pr-stat-val.steel        { color: oklch(58% 0.08 220); }
.pr-check.steel           { background: oklch(58% 0.08 220 / 0.12); border: 1px solid oklch(58% 0.08 220 / 0.30); color: oklch(58% 0.08 220); }
.pr-other-cat.steel       { background: oklch(58% 0.08 220 / 0.12); color: oklch(72% 0.06 220); }

  .pr-hero-inner {
    position: relative; z-index: 1; max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  }
  @media (max-width: 768px) { .pr-hero-inner { grid-template-columns: 1fr; gap: 2.5rem; } }

  .pr-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.3rem 0.875rem;
    background: oklch(68% 0.26 50 / 0.10); border: 1px solid oklch(68% 0.26 50 / 0.22);
    border-radius: 999px; font-size: 0.8rem; font-weight: 500; color: oklch(78% 0.18 50);
    margin-bottom: 1.25rem;
  }

  .pr-hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.5rem);
    font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1.25rem;
  }
  .pr-hero-title .line { display: block; }
  .pr-hero-title .accent {
    background: linear-gradient(135deg, oklch(78% 0.22 50), oklch(60% 0.22 255));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pr-hero-sub {
    font-size: 1.0625rem; line-height: 1.75;
    color: var(--text-secondary); max-width: 460px;
  }

  .pr-count-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
    background: var(--bg-border); border: 1px solid var(--bg-border);
    border-radius: 1rem; overflow: hidden;
  }
  .pr-count-cell {
    background: var(--bg-surface); padding: 1.5rem 1rem;
    text-align: center; transition: background 0.2s;
  }
  .pr-count-cell:hover { background: var(--bg-raised); }
  .pr-count-val {
    font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800;
    line-height: 1; margin-bottom: 0.4rem;
  }
  .pr-count-val.orange { color: oklch(68% 0.26 50); }
  .pr-count-val.blue   { color: oklch(60% 0.22 255); }
  .pr-count-label { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; }

  /* ── TAB NAV sticky ── */
  .pr-tabs-wrap {
    position: sticky; top: 64px; z-index: 50;
    background: oklch(13% 0.008 30 / 0.92); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--bg-border);
  }
  .pr-tabs {
   margin: 0 auto; padding: 0 1.5rem;
    display: flex; overflow-x: auto; scrollbar-width: none;
  }
  .pr-tabs::-webkit-scrollbar { display: none; }

  .pr-tab {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 1rem 1.25rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 450;
    color: var(--text-muted); background: none; border: none;
    border-bottom: 2px solid transparent; cursor: pointer; white-space: nowrap;
    transition: color 0.15s, border-color 0.15s; margin-bottom: -1px;
  }
  .pr-tab:hover { color: var(--text-secondary); }
  .pr-tab.active.orange { color: oklch(78% 0.18 50); border-color: oklch(68% 0.26 50); }
  .pr-tab.active.blue   { color: oklch(75% 0.18 240); border-color: oklch(60% 0.22 255); }
  .pr-tab-icon { font-size: 1rem; }
  .pr-tab-badge {
    font-size: 0.6rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    padding: 0.1rem 0.4rem; border-radius: 999px;
    background: oklch(68% 0.26 50 / 0.15); color: oklch(78% 0.18 50);
    border: 1px solid oklch(68% 0.26 50 / 0.25);
  }

  /* ── CONTENT ── */
  .pr-content { max-width: 1100px; margin: 0 auto; padding: 4rem 1.5rem 6rem; }

  .pr-featured {
    display: grid; grid-template-columns: auto 1fr; gap: 4rem; align-items: start;
    margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid var(--bg-border);
  }
  @media (max-width: 768px) { .pr-featured { grid-template-columns: 1fr; gap: 2.5rem; } }
  @media (max-width: 768px) { .pr-featured .card { width: 100%; max-width: 320px; margin: 0 auto; } }

  .pr-cat-label {
    font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.12em;
    text-transform: uppercase; margin-bottom: 0.875rem;
  }
  .pr-cat-label.orange { color: oklch(78% 0.18 50); }
  .pr-cat-label.blue   { color: oklch(75% 0.18 240); }

  .pr-product-title {
    font-family: 'Syne', sans-serif; font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 0.5rem;
  }
  .pr-tagline { font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem; }
  .pr-desc { font-size: 1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 2rem; }

  .pr-stats { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
  .pr-stat {
    background: var(--bg-raised); border: 1px solid var(--bg-border);
    border-radius: 0.75rem; padding: 0.875rem 1.25rem; text-align: center; min-width: 80px;
  }
  .pr-stat-val {
    font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800;
    line-height: 1; margin-bottom: 0.2rem;
  }
  .pr-stat-val.orange { color: oklch(68% 0.26 50); }
  .pr-stat-val.blue   { color: oklch(60% 0.22 255); }
  .pr-stat-lbl { font-size: 0.7rem; color: var(--text-muted); font-weight: 500; letter-spacing: 0.04em; }

  .pr-features { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem; }
  .pr-feature {
    display: flex; align-items: center; gap: 0.625rem;
    font-size: 0.9rem; color: var(--text-secondary);
  }
  .pr-check {
    width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.65rem; font-weight: 700;
  }
  .pr-check.orange {
    background: oklch(68% 0.26 50 / 0.12); border: 1px solid oklch(68% 0.26 50 / 0.3);
    color: oklch(68% 0.26 50);
  }
  .pr-check.blue {
    background: oklch(60% 0.22 255 / 0.12); border: 1px solid oklch(60% 0.22 255 / 0.3);
    color: oklch(60% 0.22 255);
  }

  /* ── SCOPRI DI PIÙ button ── */
  .pr-scopri-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem; border-radius: 0.75rem;
  font-weight: 700; font-size: 0.9rem;
  text-decoration: none; transition: 0.22s;
}
.pr-scopri-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--btn-glow);
}

  /* ── ALTRI ── */
  .pr-others-label {
    font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 600;
    color: var(--text-muted); letter-spacing: 0.06em; text-transform: uppercase;
    margin-bottom: 1.25rem;
  }
  .pr-others-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem;
  }

  .pr-other-card {
    background: var(--bg-surface); border: 1px solid var(--bg-border);
    border-radius: 0.875rem; padding: 1.25rem; cursor: pointer; text-align: left;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    display: flex; flex-direction: column; gap: 0.625rem;
  }
  .pr-other-card:hover {
    border-color: oklch(42% 0.008 30); transform: translateY(-2px);
    box-shadow: 0 8px 24px oklch(0% 0 0 / 0.3);
  }

  .pr-other-top { display: flex; align-items: center; justify-content: space-between; }
  .pr-other-icon { font-size: 1.375rem; }
  .pr-other-cat {
    font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 0.15rem 0.5rem; border-radius: 999px;
  }
  .pr-other-cat.orange { background: oklch(68% 0.26 50 / 0.12); color: oklch(78% 0.18 50); }
  .pr-other-cat.blue   { background: oklch(60% 0.22 255 / 0.12); color: oklch(75% 0.18 240); }
  .pr-other-name { font-family: 'Syne', sans-serif; font-size: 0.9375rem; font-weight: 600; }
  .pr-other-tagline { font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5; }
  .pr-other-arrow { color: var(--text-muted); font-size: 0.8125rem; margin-top: auto; }
  @media (max-width: 768px) {
  .pr-hero {
    padding: 3rem 1.25rem 2.5rem;
  }

  .pr-count-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .pr-count-val { font-size: 1.4rem; }
  .pr-count-label { font-size: 0.6rem; }

  .pr-tab {
    padding: 0.75rem 0.875rem;
    font-size: 0.75rem;
    gap: 0.35rem;
  }
  .pr-tab-badge { display: none; }
  .pr-tab-icon { font-size: 0.875rem; }

  .pr-content {
    padding: 2rem 1.25rem 4rem;
  }

  .pr-featured {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .pr-stats {
    gap: 0.75rem;
  }
  .pr-stat {
    padding: 0.75rem 1rem;
    min-width: 70px;
  }
  .pr-stat-val { font-size: 1.25rem; }

  .pr-others-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .pr-other-card {
    padding: 1rem;
  }

  .pr-scopri-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 420px) {
  .pr-others-grid {
    grid-template-columns: 1fr;
  }
}
  @media (max-width: 768px) {
  .pr-tabs {
    padding: 0 0.75rem;
    gap: 0;
  }

  .pr-tab {
    padding: 0.75rem 0.625rem;
    font-size: 0.7rem;
    gap: 0.25rem;
    flex-direction: column;
    align-items: center;
    min-width: 64px;
    text-align: center;
    line-height: 1.2;
  }

  .pr-tab-badge {
    display: none;
  }

  .pr-tab-icon {
    font-size: 1.1rem;
  }
}
  .pr-tab-name-short { display: none; }

@media (max-width: 768px) {
  .pr-tab-name-full  { display: none; }
  .pr-tab-name-short { display: block; }
}
`,ev=()=>{const[r,d]=E.useState(0),{hash:p}=Ht();E.useEffect(()=>{const h=p.replace("#",""),v=Yl.findIndex(x=>x.id===h);v!==-1&&d(v)},[p]),E.useEffect(()=>{$l.init({duration:650,easing:"ease-out-cubic",once:!0,offset:60})},[]);const c=Yl[r],u=Yl.filter((h,v)=>v!==r),m=h=>h==="orange"||h==="oklch(68% 0.26 50)"?{bg:"oklch(68% 0.26 50)",glow:"oklch(68% 0.26 50 / 0.25)",text:"#0d0f14"}:h==="blue"||h==="oklch(60% 0.22 255)"?{bg:"oklch(60% 0.22 255)",glow:"oklch(60% 0.22 255 / 0.25)",text:"#0d0f14"}:h==="teal"||h==="oklch(66% 0.18 185)"?{bg:"oklch(66% 0.18 185)",glow:"oklch(66% 0.18 185 / 0.25)",text:"#080b10"}:h==="gold"||h==="oklch(62% 0.14 80)"?{bg:"oklch(62% 0.14 80)",glow:"oklch(62% 0.14 80 / 0.25)",text:"#0b0c09"}:h==="steel"||h==="oklch(58% 0.08 220)"?{bg:"oklch(58% 0.08 220)",glow:"oklch(58% 0.08 220 / 0.25)",text:"#09090b"}:{bg:"oklch(68% 0.26 50)",glow:"oklch(68% 0.26 50 / 0.25)",text:"#0d0f14"};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:Px}),n.jsxs("div",{className:"pr-page",children:[n.jsx("div",{className:"pr-hero",children:n.jsxs("div",{className:"pr-hero-inner",children:[n.jsxs("div",{"data-aos":"fade-right",children:[n.jsxs("div",{className:"pr-eyebrow",children:[n.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"oklch(68% 0.26 50)",display:"inline-block"}}),"Le nostre soluzioni"]}),n.jsxs("h1",{className:"pr-hero-title",children:[n.jsx("span",{className:"line",children:"Tecnologia che lavora."}),n.jsx("span",{className:"line",children:"Risultati concreti."}),n.jsx("span",{className:"line accent",children:"Benefici misurabili."})]}),n.jsx("p",{className:"pr-hero-sub",children:"Prodotti costruiti su casi d'uso reali, pensati per generare valore dal primo giorno."})]}),n.jsx("div",{"data-aos":"fade-left","data-aos-delay":"150",children:n.jsx("div",{className:"pr-count-grid",children:[{val:"5",label:"Aree di soluzione",color:"orange"},{val:"25+",label:"Use case coperti",color:"blue"},{val:"48h",label:"Dall'accordo all'uso",color:"orange"}].map(({val:h,label:v,color:x})=>n.jsxs("div",{className:"pr-count-cell",children:[n.jsx("div",{className:`pr-count-val ${x}`,children:h}),n.jsx("div",{className:"pr-count-label",children:v})]},v))})})]})}),n.jsx("div",{className:"pr-tabs-wrap",children:n.jsx("div",{className:"pr-tabs",role:"tablist",children:Yl.map((h,v)=>n.jsxs("button",{role:"tab","aria-selected":r===v,className:`pr-tab${r===v?` active ${h.accentClass}`:""}`,onClick:()=>d(v),children:[n.jsx("span",{className:"pr-tab-icon",children:h.icon}),n.jsx("span",{className:"pr-tab-name-full",children:h.name}),n.jsx("span",{className:"pr-tab-name-short",children:h.shortName}),h.badge&&n.jsx("span",{className:"pr-tab-badge",children:h.badge})]},h.id))})}),n.jsxs("div",{className:"pr-content",children:[n.jsxs("div",{className:"pr-featured","data-aos":"fade-up",children:[n.jsx(Ix,{product:c,isActive:!0,onClick:()=>{}}),n.jsxs("div",{className:"pr-text-col",children:[n.jsx("div",{className:`pr-cat-label ${c.accentClass}`,children:c.category}),n.jsx("h2",{className:"pr-product-title",children:c.name}),n.jsx("p",{className:"pr-tagline",children:c.tagline}),n.jsx("p",{className:"pr-desc",children:c.description}),n.jsx("div",{className:"pr-stats",children:c.stats.map(({value:h,label:v})=>n.jsxs("div",{className:"pr-stat",children:[n.jsx("div",{className:`pr-stat-val ${c.accentClass}`,children:h}),n.jsx("div",{className:"pr-stat-lbl",children:v})]},v))}),n.jsx("div",{className:"pr-features",children:c.features.map(h=>n.jsxs("div",{className:"pr-feature",children:[n.jsx("span",{className:`pr-check ${c.accentClass}`,children:"✓"}),h]},h))}),(()=>{const{bg:h,glow:v,text:x}=m(c.accentClass);return n.jsx(Gt,{to:`/prodotti/${c.id}`,className:"pr-scopri-btn",style:{background:h,color:x,"--btn-glow":v},children:"Scopri di più →"})})()]})]}),n.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"100",children:[n.jsx("div",{className:"pr-others-label",children:"Esplora anche"}),n.jsx("div",{className:"pr-others-grid",children:u.map(h=>n.jsxs("button",{className:"pr-other-card",onClick:()=>{d(Yl.indexOf(h)),window.scrollTo({top:0,behavior:"smooth"})},children:[n.jsxs("div",{className:"pr-other-top",children:[n.jsx("span",{className:"pr-other-icon",children:h.icon}),n.jsx("span",{className:`pr-other-cat ${h.accentClass}`,children:h.category})]}),n.jsx("div",{className:"pr-other-name",children:h.name}),n.jsx("div",{className:"pr-other-tagline",children:h.tagline}),n.jsx("div",{className:"pr-other-arrow",children:"Scopri →"})]},h.id))})]})]},c.id),n.jsx(Qt,{})]})]})},Ya=[{id:1,name:"Automotive",icon:"🏭",description:"Esperienza produttiva in stabilimenti e linee di assemblaggio.",text:"L'automotive è il settore da cui tutto è partito. Abbiamo maturato un'esperienza solida e profonda all'interno di stabilimenti produttivi e linee di assemblaggio, dove la qualità del dato e la velocità di reazione fanno la differenza tra efficienza e fermo macchina. Ogni secondo conta. Ogni dato conta.",accent:"#E63946"},{id:2,name:"Industriale",icon:"⚙️",description:"Soluzioni per linee di processo e ottimizzazione dei flussi.",text:"Dall'automotive abbiamo naturalmente esteso il nostro perimetro verso altri settori manifatturieri. Produzioni diverse per mercato e prodotto, ma accomunate dalla stessa complessità operativa: linee di processo, controllo qualità, gestione dei dati di produzione, ottimizzazione dei flussi.",accent:"#2A9D8F"},{id:3,name:"Agromeccanica",icon:"🌾",description:"Trasformiamo macchine tradizionali in sistemi intelligenti.",text:"L'agromeccanica rappresenta uno dei fronti più interessanti su cui stiamo lavorando. Operiamo sia nella filiera dei componenti, sia integrando tecnologie AI direttamente sui macchinari. Tradizione e innovazione si incontrano nel campo.",accent:"#F4A261"},{id:4,name:"Nautico",icon:"⚓",description:"Tecnologie AI per cantieristica e nautica di eccellenza.",text:"Siamo persone di mondo, con un network internazionale consolidato. Il nostro cuore batte a Viareggio, uno dei poli di riferimento più importanti a livello globale per la cantieristica e la nautica di eccellenza. Il mare chiama, noi rispondiamo con intelligenza.",accent:"#457B9D"},{id:5,name:"PMI",icon:"🏢",description:"AI accessibile per piccole e medie imprese.",text:"Le piccole e medie imprese sono la spina dorsale dell'economia italiana. Una piccola impresa dotata degli strumenti giusti può eliminare inefficienze, automatizzare attività ripetitive e liberare il personale per concentrarsi su ciò che crea davvero valore.",accent:"#8338EC"}],tv=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ind-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding-top: 64px;
    overflow-x: hidden;
  }

  /* HERO */
  .ind-hero {
    padding: 80px 10% 64px;
    position: relative;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .ind-hero::before {
    content: "INDUSTRIE";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: #111;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }

  .ind-hero-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: var(--accent, #E63946); margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .ind-hero-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: var(--accent, #E63946); }

  .ind-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px; max-width: 700px; position: relative;
  }
  .ind-hero-sub {
    font-size: 16px; color: #7A7470; font-weight: 300;
    max-width: 500px; line-height: 1.7; margin-top: 16px; position: relative;
  }

  /* TABS */
  .ind-tabs {
    display: flex; gap: 4px; padding: 32px 10% 0;
    flex-wrap: wrap; width: 100%;
  }

  .ind-tab {
    padding: 8px 20px; border-radius: 100px;
    border: 1px solid #222; background: transparent;
    color: #666; cursor: pointer; font-size: 13px;
    font-family: 'DM Sans', sans-serif; letter-spacing: 0.5px;
    transition: all 0.25s;
  }
  .ind-tab.active {
    background: var(--accent); border-color: var(--accent);
    color: #0D0D0D; font-weight: 500;
  }

  /* PROGRESS */
  .ind-progress {
    width: 100%; height: 2px; background: #1A1A1A;
    margin: 24px 0 0; overflow: hidden;
  }
  .ind-progress__fill {
    height: 100%; background: var(--accent);
    transition: width 0.55s cubic-bezier(0.77, 0, 0.175, 1), background 0.4s;
  }

  /* SLIDER */
  .ind-slider-outer { width: 100%; position: relative; }
  .ind-track-wrap { overflow: hidden; }
  .ind-track { display: flex; transition: transform 0.55s cubic-bezier(0.77, 0, 0.175, 1); }

  /* CARD */
  .ind-card {
    min-width: 100%;
    background: #0F0F0F;
    border-bottom: 1px solid #1A1A1A;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 460px;
  }

  .ind-card__left {
    padding: 64px 10%;
    display: flex; flex-direction: column; justify-content: space-between;
    border-right: 1px solid #1A1A1A; position: relative;
  }

  .ind-card__icon { font-size: 56px; line-height: 1; margin-bottom: 32px; }

  .ind-card__num {
    font-family: 'Bebas Neue', sans-serif; font-size: 120px;
    line-height: 1; color: #161616;
    position: absolute; bottom: -10px; right: 20px;
    user-select: none; pointer-events: none;
  }

  .ind-card__name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(40px, 5vw, 72px);
    line-height: 1; letter-spacing: 1px; color: var(--accent);
  }

  .ind-card__desc { font-size: 14px; color: #666; font-weight: 300; margin-top: 10px; line-height: 1.6; }

  .ind-card__right {
    padding: 64px 10%;
    display: flex; flex-direction: column; justify-content: center;
  }

  .ind-card__text { font-size: 16px; line-height: 1.85; color: #C0BAB2; font-weight: 300; }

  .ind-card__cta {
    margin-top: 36px;
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--accent); border: 1px solid var(--accent);
    padding: 12px 24px; border-radius: 100px; cursor: pointer;
    width: fit-content; transition: background 0.2s, color 0.2s;
    background: transparent; font-family: 'DM Sans', sans-serif;
  }
  .ind-card__cta:hover { background: var(--accent); color: #0D0D0D; }

  /* CONTROLS */
  .ind-controls {
    display: flex; align-items: center; justify-content: center;
    gap: 20px; padding: 40px 10%;
    border-bottom: 1px solid #1A1A1A;
  }

  .ind-btn {
    width: 48px; height: 48px; border-radius: 50%;
    border: 1px solid #222; background: #161616; color: #F0EDE8;
    cursor: pointer; font-size: 20px;
    display: flex; align-items: center; justify-content: center;
    transition: border-color 0.2s, background 0.2s;
  }
  .ind-btn:hover { border-color: var(--accent); background: #222; }

  .ind-dots { display: flex; gap: 8px; align-items: center; }

  .ind-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #333; cursor: pointer;
    transition: background 0.3s, width 0.3s;
  }
  .ind-dot.active { background: var(--accent); width: 24px; border-radius: 3px; }

  @media (max-width: 700px) {
    .ind-card { grid-template-columns: 1fr; }
    .ind-card__left { border-right: none; border-bottom: 1px solid #1A1A1A; padding: 48px 6%; }
    .ind-card__right { padding: 48px 6%; }
    .ind-card__num { display: none; }
    .ind-hero { padding: 72px 6% 48px; }
    .ind-tabs { padding: 24px 6% 0; }
    .ind-controls { padding: 32px 6%; }
  }
`;function av(){const[r,d]=E.useState(0),{hash:p}=Ht();E.useEffect(()=>{const v=p.replace("#",""),x=Ya.findIndex(g=>g.name.toLowerCase()===v);x!==-1&&d(x)},[p]);const c=E.useRef(null),u=Ya[r].accent;E.useEffect(()=>{$l.init({duration:700,easing:"ease-out-cubic",once:!0,offset:60})},[]);const m=v=>{d((v+Ya.length)%Ya.length)};E.useEffect(()=>{c.current&&(c.current.style.transform=`translateX(-${r*100}%)`)},[r]);const h=(r+1)/Ya.length*100;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:tv}),n.jsxs("div",{className:"ind-root",style:{"--accent":u},children:[n.jsxs("section",{className:"ind-hero",children:[n.jsx("p",{className:"ind-hero-kicker","data-aos":"fade-right",children:"I nostri settori"}),n.jsx("h1",{className:"ind-hero-title","data-aos":"fade-up","data-aos-delay":"100",children:"Portiamo l'AI dove serve davvero"}),n.jsx("p",{className:"ind-hero-sub","data-aos":"fade-up","data-aos-delay":"200",children:"Dall'automotive alla nautica, dall'agromeccanica alle PMI. Settori diversi, stessa visione: dati e intelligenza al servizio del processo."})]}),n.jsx("div",{className:"ind-tabs","data-aos":"fade-up","data-aos-delay":"100",children:Ya.map((v,x)=>n.jsx("button",{className:`ind-tab${x===r?" active":""}`,onClick:()=>m(x),style:x===r?{"--accent":v.accent}:{},children:v.name},v.id))}),n.jsx("div",{className:"ind-progress",children:n.jsx("div",{className:"ind-progress__fill",style:{width:`${h}%`}})}),n.jsx("div",{className:"ind-slider-outer","data-aos":"fade-up","data-aos-delay":"150",children:n.jsx("div",{className:"ind-track-wrap",children:n.jsx("div",{className:"ind-track",ref:c,children:Ya.map(v=>n.jsxs("div",{className:"ind-card",style:{"--accent":v.accent},children:[n.jsxs("div",{className:"ind-card__left",children:[n.jsxs("div",{children:[n.jsx("div",{className:"ind-card__icon",children:v.icon}),n.jsx("div",{className:"ind-card__name",children:v.name}),n.jsx("div",{className:"ind-card__desc",children:v.description})]}),n.jsxs("div",{className:"ind-card__num",children:["0",v.id]})]}),n.jsxs("div",{className:"ind-card__right",children:[n.jsx("p",{className:"ind-card__text",children:v.text}),n.jsx("button",{className:"ind-card__cta",children:"Scopri di più →"})]})]},v.id))})})}),n.jsxs("div",{className:"ind-controls","data-aos":"fade-up","data-aos-delay":"200",children:[n.jsx("button",{className:"ind-btn",onClick:()=>m(r-1),children:"‹"}),n.jsx("div",{className:"ind-dots",children:Ya.map((v,x)=>n.jsx("div",{className:`ind-dot${x===r?" active":""}`,style:x===r?{background:u}:{},onClick:()=>m(x)},x))}),n.jsx("button",{className:"ind-btn",onClick:()=>m(r+1),children:"›"})]}),n.jsx(Qt,{})]})]})}const Vl={_origin:"https://api.emailjs.com"},iv=(r,d="https://api.emailjs.com")=>{Vl._userID=r,Vl._origin=d},Jp=(r,d,p)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!d)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!p)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ep{constructor(d){this.status=d.status,this.text=d.responseText}}const $p=(r,d,p={})=>new Promise((c,u)=>{const m=new XMLHttpRequest;m.addEventListener("load",({target:h})=>{const v=new Ep(h);v.status===200||v.text==="OK"?c(v):u(v)}),m.addEventListener("error",({target:h})=>{u(new Ep(h))}),m.open("POST",Vl._origin+r,!0),Object.keys(p).forEach(h=>{m.setRequestHeader(h,p[h])}),m.send(d)}),lv=(r,d,p,c)=>{const u=c||Vl._userID;return Jp(u,r,d),$p("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:u,service_id:r,template_id:d,template_params:p}),{"Content-type":"application/json"})},nv=r=>{let d;if(typeof r=="string"?d=document.querySelector(r):d=r,!d||d.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return d},ov=(r,d,p,c)=>{const u=c||Vl._userID,m=nv(p);Jp(u,r,d);const h=new FormData(m);return h.append("lib_version","3.2.0"),h.append("service_id",r),h.append("template_id",d),h.append("user_id",u),$p("/api/v1.0/email/send-form",h)},rv={init:iv,send:lv,sendForm:ov},sv=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ct-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    padding-top: 64px;
  }

  .ct-hero {
    padding: 80px 10% 64px;
    position: relative;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .ct-hero::before {
    content: "CONTATTI";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(80px, 18vw, 240px);
    color: #111;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }

  .ct-hero-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px; position: relative;
    display: flex; align-items: center; gap: 10px;
  }
  .ct-hero-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .ct-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 88px);
    line-height: 1; letter-spacing: 1px; max-width: 700px; position: relative;
  }
  .ct-hero-title em {
    font-style: italic; color: #E63946;
    font-family: 'DM Sans', sans-serif; font-weight: 300;
    font-size: 0.55em; display: block; letter-spacing: 0; margin-top: 8px; line-height: 1.5;
  }

  .ct-body { display: grid; grid-template-columns: 1fr 1fr; min-height: 70vh; }

  .ct-info {
    padding: 72px 10%; border-right: 1px solid #1A1A1A;
    display: flex; flex-direction: column; gap: 56px;
  }

  .ct-info-label {
    font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
    color: #555; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
  }
  .ct-info-label::after { content: ""; flex: 1; height: 1px; background: #1E1E1E; }

  .ct-sede-country { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #E63946; margin-bottom: 6px; }
  .ct-sede-address { font-size: 15px; line-height: 1.7; color: #9A9390; font-weight: 300; margin-bottom: 24px; }

  .ct-contact-item {
    display: flex; align-items: center; gap: 14px; margin-bottom: 14px;
    text-decoration: none; color: #C0BAB2; font-size: 15px; font-weight: 300;
    transition: color 0.2s; width: fit-content;
  }
  .ct-contact-item:hover { color: #E63946; }

  .ct-contact-icon {
    width: 36px; height: 36px; border: 1px solid #222; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; flex-shrink: 0; transition: border-color 0.2s;
  }
  .ct-contact-item:hover .ct-contact-icon { border-color: #E63946; }

  .ct-form-col { padding: 72px 10%; display: flex; flex-direction: column; }
  .ct-form-heading { margin-bottom: 48px; }
  .ct-form-kicker { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #555; margin-bottom: 12px; }
  .ct-form-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px, 3vw, 42px); letter-spacing: 1px; line-height: 1.1; }

  .ct-form { display: flex; flex-direction: column; gap: 0; flex: 1; }

  .ct-field { position: relative; border-bottom: 1px solid #1E1E1E; transition: border-color 0.25s; }
  .ct-field:focus-within { border-color: #E63946; }

  .ct-field label {
    display: block; font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; padding-top: 24px; margin-bottom: 6px; transition: color 0.25s;
  }
  .ct-field:focus-within label { color: #E63946; }

  .ct-field input, .ct-field textarea, .ct-field select {
    width: 100%; background: transparent; border: none; outline: none;
    color: #F0EDE8; font-family: 'DM Sans', sans-serif; font-size: 15px;
    font-weight: 300; padding-bottom: 20px; resize: none;
    appearance: none; -webkit-appearance: none;
  }
  .ct-field select option { background: #161616; color: #F0EDE8; }
  .ct-field select { cursor: pointer; }
  .ct-field textarea { min-height: 100px; }
  .ct-field input::placeholder, .ct-field textarea::placeholder { color: #333; }

  .ct-select-wrap { position: relative; }
  .ct-select-wrap::after { content: "↓"; position: absolute; right: 0; bottom: 20px; color: #444; pointer-events: none; font-size: 14px; }

  .ct-privacy { margin-top: 24px; display: flex; align-items: flex-start; gap: 12px; cursor: pointer; }

  .ct-checkbox {
    width: 18px; height: 18px; border: 1px solid #333; border-radius: 3px;
    flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center;
    transition: border-color 0.2s, background 0.2s; cursor: pointer;
  }
  .ct-checkbox.checked { background: #E63946; border-color: #E63946; }
  .ct-privacy-text { font-size: 12px; color: #555; line-height: 1.6; font-weight: 300; }
  .ct-privacy-text a { color: #E63946; text-decoration: none; }

  .ct-submit-row { margin-top: 36px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }

  .ct-submit {
    display: inline-flex; align-items: center; gap: 12px;
    background: #E63946; color: #0D0D0D; border: none;
    padding: 16px 36px; font-family: 'DM Sans', sans-serif;
    font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
    font-weight: 500; border-radius: 100px; cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
  }
  .ct-submit:hover { opacity: 0.85; transform: translateY(-1px); }
  .ct-submit:active { transform: translateY(0); }
  .ct-submit:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .ct-submit-note { font-size: 11px; color: #333; letter-spacing: 0.5px; line-height: 1.5; }

  .ct-success {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    gap: 16px; animation: fadeUp 0.5s ease forwards;
  }
  .ct-success-icon {
    width: 64px; height: 64px; border-radius: 50%; border: 1px solid #E63946;
    display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 8px;
  }
  .ct-success-title { font-family: 'Bebas Neue', sans-serif; font-size: 36px; letter-spacing: 1px; }
  .ct-success-text { font-size: 15px; color: #7A7470; font-weight: 300; max-width: 320px; line-height: 1.7; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .ct-highlight-blocks { display: flex; flex-direction: column; gap: 1px; background: #1A1A1A; }

  .ct-highlight {
    background: #0D0D0D; padding: 48px 10%;
    display: grid; grid-template-columns: auto 1fr; gap: 32px;
    align-items: start; transition: background 0.25s;
  }
  .ct-highlight:hover { background: #111; }

  .ct-highlight-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: #1E1E1E; line-height: 1; padding-top: 4px; min-width: 44px; }
  .ct-highlight-title { font-family: 'Bebas Neue', sans-serif; font-size: 26px; letter-spacing: 1px; color: #F0EDE8; margin-bottom: 10px; }
  .ct-highlight-text { font-size: 14px; line-height: 1.8; color: #7A7470; font-weight: 300; }

  .ct-highlight-cta {
    margin-top: 16px; display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
    color: #E63946; text-decoration: none; padding-bottom: 2px;
    border-bottom: 1px solid #E63946; transition: opacity 0.2s;
  }
  .ct-highlight-cta:hover { opacity: 0.7; }

  @media (max-width: 900px) {
    .ct-body { grid-template-columns: 1fr; }
    .ct-info { border-right: none; border-bottom: 1px solid #1A1A1A; padding: 56px 6%; }
    .ct-form-col { padding: 56px 6%; }
    .ct-hero { padding: 80px 6% 56px; }
    .ct-highlight { padding: 36px 6%; }
  }
    @media (max-width: 640px) {
  /* Hero */
  .ct-hero {
    padding: 56px 5% 40px;
  }
  .ct-hero-title {
    font-size: clamp(32px, 10vw, 52px);
  }
  .ct-hero-title em {
    font-size: 0.65em;
  }

  /* Body: colonna singola */
  .ct-body {
    grid-template-columns: 1fr;
  }
  .ct-info {
    border-right: none;
    border-bottom: 1px solid #1A1A1A;
    padding: 40px 5%;
    gap: 36px;
  }
  .ct-form-col {
    padding: 40px 5%;
  }

  /* Form */
  .ct-field label {
    padding-top: 18px;
    font-size: 9px;
  }
  .ct-field input,
  .ct-field textarea,
  .ct-field select {
    font-size: 14px;
    padding-bottom: 14px;
  }
  .ct-form-title {
    font-size: clamp(22px, 7vw, 32px);
  }

  /* Submit row */
  .ct-submit-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .ct-submit {
    width: 100%;
    justify-content: center;
  }
  .ct-submit-note {
    font-size: 10px;
  }

  /* Highlight blocks */
  .ct-highlight {
    padding: 32px 5%;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .ct-highlight-num {
    font-size: 32px;
  }
  .ct-highlight-title {
    font-size: 20px;
  }
  .ct-highlight-text {
    font-size: 13px;
  }

  /* Contatti diretti */
  .ct-contact-item {
    font-size: 13px;
  }
  .ct-contact-icon {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
}
`,kp=["Seleziona un argomento","Informazioni generali","Demo prodotto","Proposta di partnership","Opportunità di tesi / stage","Candidatura spontanea","Idea o progetto innovativo","Altro"];function cv(){const[r,d]=E.useState({nome:"",email:"",azienda:"",tipo:"",messaggio:""}),[p,c]=E.useState(!1),[u,m]=E.useState(!1),[h,v]=E.useState(!1);E.useEffect(()=>{$l.init({duration:700,easing:"ease-out-cubic",once:!0,offset:60})},[]);const x=y=>_=>d(B=>({...B,[y]:_.target.value})),g=y=>{y.preventDefault(),p&&(v(!0),rv.send("SERVICE_ID","TEMPLATE_ID",{nome:r.nome,email:r.email,azienda:r.azienda,tipo:r.tipo,messaggio:r.messaggio},"PUBLIC_KEY").then(()=>{v(!1),m(!0)}).catch(()=>{v(!1),alert("Errore invio")}))},S=r.nome&&r.email&&r.messaggio&&p;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:sv}),n.jsxs("div",{className:"ct-root",children:[n.jsxs("section",{className:"ct-hero",children:[n.jsx("p",{className:"ct-hero-kicker","data-aos":"fade-right",children:"Parliamo"}),n.jsxs("h1",{className:"ct-hero-title","data-aos":"fade-up","data-aos-delay":"100",children:["Inizia la conversazione",n.jsx("em",{children:"Crediamo nel potere del dialogo e della collaborazione."})]})]}),n.jsxs("div",{className:"ct-body",children:[n.jsxs("div",{className:"ct-info",children:[n.jsxs("div",{"data-aos":"fade-right","data-aos-delay":"100",children:[n.jsx("div",{className:"ct-info-label",children:"Sedi operative"}),n.jsx("div",{className:"ct-sede-country",children:"🇮🇹 Italia"}),n.jsxs("div",{className:"ct-sede-address",children:["Corso Garibaldi, 80",n.jsx("br",{}),"55049 Viareggio (LU)"]}),n.jsx("div",{className:"ct-sede-country",children:"🇨🇳 Cina"}),n.jsxs("div",{className:"ct-sede-address",children:["Second Floor, No. 979, Yunhan Road,",n.jsx("br",{}),"Lingang New Area, Shanghai, Cina"]})]}),n.jsxs("div",{"data-aos":"fade-right","data-aos-delay":"200",children:[n.jsx("div",{className:"ct-info-label",children:"Contatti diretti"}),n.jsxs("a",{href:"mailto:info@blumentis.ai",className:"ct-contact-item",children:[n.jsx("span",{className:"ct-contact-icon",children:"✉"}),"info@blumentis.ai"]}),n.jsxs("a",{href:"tel:+390584148124",className:"ct-contact-item",children:[n.jsx("span",{className:"ct-contact-icon",children:"↗"}),"+39 0584 1481242"]})]})]}),n.jsxs("div",{className:"ct-form-col","data-aos":"fade-left","data-aos-delay":"150",children:[n.jsxs("div",{className:"ct-form-heading",children:[n.jsx("div",{className:"ct-form-kicker",children:"Modulo di contatto"}),n.jsx("h2",{className:"ct-form-title",children:"Scrivici, rispondiamo a tutto"})]}),u?n.jsxs("div",{className:"ct-success",children:[n.jsx("div",{className:"ct-success-icon",children:"✓"}),n.jsx("div",{className:"ct-success-title",children:"Messaggio inviato"}),n.jsx("p",{className:"ct-success-text",children:"Grazie per averci contattato. Il nostro team ti risponderà al più presto."})]}):n.jsxs("form",{className:"ct-form",onSubmit:g,children:[n.jsxs("div",{className:"ct-field",children:[n.jsx("label",{children:"Nome e cognome *"}),n.jsx("input",{type:"text",value:r.nome,onChange:x("nome")})]}),n.jsxs("div",{className:"ct-field",children:[n.jsx("label",{children:"Email *"}),n.jsx("input",{type:"email",value:r.email,onChange:x("email")})]}),n.jsxs("div",{className:"ct-field",children:[n.jsx("label",{children:"Azienda / Ente"}),n.jsx("input",{type:"text",value:r.azienda,onChange:x("azienda")})]}),n.jsxs("div",{className:"ct-field",children:[n.jsx("label",{children:"Argomento"}),n.jsx("div",{className:"ct-select-wrap",children:n.jsx("select",{value:r.tipo,onChange:x("tipo"),children:kp.map(y=>n.jsx("option",{value:y===kp[0]?"":y,children:y},y))})})]}),n.jsxs("div",{className:"ct-field",children:[n.jsx("label",{children:"Messaggio *"}),n.jsx("textarea",{placeholder:"Raccontaci il tuo progetto o la tua idea...",value:r.messaggio,onChange:x("messaggio")})]}),n.jsxs("div",{className:"ct-privacy",onClick:()=>c(y=>!y),children:[n.jsx("div",{className:`ct-checkbox${p?" checked":""}`,children:p&&n.jsx("span",{style:{color:"#fff",fontSize:12},children:"✓"})}),n.jsxs("p",{className:"ct-privacy-text",children:["Ho letto e accetto la ",n.jsx("a",{href:"/privacy",children:"Privacy Policy"}),". Acconsento al trattamento dei miei dati personali da parte di BluMentis s.r.l."]})]}),n.jsx("div",{className:"ct-submit-row",children:n.jsxs("button",{className:"ct-submit",type:"submit",disabled:!S||h,children:[h?"Invio…":"Invia messaggio"," ",!h&&"→"]})})]})]})]}),n.jsxs("div",{className:"ct-highlight-blocks",children:[n.jsxs("div",{className:"ct-highlight","data-aos":"fade-up",children:[n.jsx("div",{className:"ct-highlight-num",children:"01"}),n.jsxs("div",{children:[n.jsx("div",{className:"ct-highlight-title",children:"Hai un'idea in mente?"}),n.jsx("p",{className:"ct-highlight-text",children:"Rappresentiamo un'opportunità per innovatori e inventori. Se hai in mente un'idea o un progetto brillante, siamo pronti ad ascoltarti. Condividi la tua visione con noi e insieme valuteremo come trasformarla in realtà."}),n.jsx("a",{href:"mailto:info@blumentis.ai?subject=Idea progetto",className:"ct-highlight-cta",children:"Condividi la tua idea →"})]})]}),n.jsxs("div",{className:"ct-highlight","data-aos":"fade-up","data-aos-delay":"100",children:[n.jsx("div",{className:"ct-highlight-num",children:"02"}),n.jsxs("div",{children:[n.jsx("div",{className:"ct-highlight-title",children:"Carriere, tesi e formazione"}),n.jsx("p",{className:"ct-highlight-text",children:"Libera il tuo potenziale. In BluMentis ci dedichiamo a nutrire la prossima generazione di pionieri dell'intelligenza artificiale. Unisciti al nostro team come stagista, esplora le opportunità di tesi o inizia la tua carriera con noi."}),n.jsx("a",{href:"/carriere",className:"ct-highlight-cta",children:"Esplora le opportunità →"})]})]})]}),n.jsx(Qt,{})]})]})}const uv=new Date,dv=uv.toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"}),fv=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .pp-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding-top: 64px;
  }

  .pp-hero {
    position: relative;
    padding: 80px 10% 64px;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .pp-hero::before {
    content: "PRIVACY";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: #111;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }

  .pp-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .pp-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .pp-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px;
    position: relative; margin-bottom: 16px;
  }

  .pp-updated {
    font-size: 12px; color: #444; font-weight: 300;
    letter-spacing: 1px; position: relative;
  }
  .pp-updated span { color: #E63946; }

  .pp-body {
    max-width: 780px;
    margin: 0 auto;
    padding: 64px 10% 80px;
  }

  .pp-section { margin-bottom: 56px; }

  .pp-section-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 12px;
    display: flex; align-items: center; gap: 10px;
  }
  .pp-section-num::after { content: ""; flex: 1; height: 1px; background: #1A1A1A; }

  .pp-section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(22px, 3vw, 32px);
    letter-spacing: 1px; color: #F0EDE8;
    margin-bottom: 16px; line-height: 1.1;
  }

  .pp-section-text {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
  }

  .pp-section-text a {
    color: #E63946; text-decoration: none;
    border-bottom: 1px solid #E6394633;
    transition: border-color 0.2s;
  }
  .pp-section-text a:hover { border-color: #E63946; }

  .pp-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, #1A1A1A 20%, #1A1A1A 80%, transparent);
    margin: 56px 0;
  }

  .pp-contact-box {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 32px 36px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
    margin-top: 56px;
  }

  .pp-contact-label {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; margin-bottom: 8px;
  }
  .pp-contact-email {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px; color: #E63946; letter-spacing: 1px;
    text-decoration: none; transition: opacity 0.2s;
  }
  .pp-contact-email:hover { opacity: 0.7; }

  .pp-contact-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px; border-radius: 100px;
    border: 1px solid #E63946; color: #E63946;
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    text-decoration: none; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, color 0.2s; white-space: nowrap;
  }
  .pp-contact-cta:hover { background: #E63946; color: #0D0D0D; }

  @media (max-width: 768px) {
    .pp-hero { padding: 72px 6% 48px; }
    .pp-body { padding: 48px 6% 64px; }
    .pp-contact-box { flex-direction: column; align-items: flex-start; }
  }
`,pv=[{num:"01",title:"Information We Collect",text:"We may collect personal information such as your name, email address, contact details, and other relevant information when you sign up for our newsletter, request information, or use our services. We may also collect non-personal data related to your website interactions and browsing activities for analytical purposes."},{num:"02",title:"Use of Information",text:"We use the collected information to provide you with the requested services, respond to your inquiries, and inform you about updates or new services that may be of interest to you. We may also use non-personal data to analyze website traffic and improve our website and services."},{num:"03",title:"Sharing of Information",text:"We do not sell, trade, or rent your personal information to third parties. We may share your personal information with trusted third-party service providers who assist us in operating our website, providing services, or for legal compliance purposes. These third parties are required to maintain the confidentiality of your information and are prohibited from using it for any other purpose."},{num:"04",title:"Data Security",text:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or misuse. However, please note that no data transmission over the internet or storage system can be guaranteed to be 100% secure."},{num:"05",title:"Third-Party Links",text:"Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those external websites or services, and we cannot control or be held responsible for their privacy practices. We encourage you to review the privacy policies of those third parties before providing any personal information."},{num:"06",title:"Cookies & Tracking Technologies",text:"Our website uses cookies and other tracking technologies to enhance your experience and provide relevant content. You can find more information about our use of cookies and how to manage them in our Cookie Policy."},{num:"07",title:"Your Rights",text:"You have the right to access, update, or request the deletion of your personal information. If you have any questions or concerns about our Privacy Policy or the personal information we hold about you, please contact us at admin.blumentis@blumentis.ai."}],mv=()=>n.jsxs(n.Fragment,{children:[n.jsx("style",{children:fv}),n.jsxs("div",{className:"pp-root",children:[n.jsxs("div",{className:"pp-hero",children:[n.jsx("p",{className:"pp-kicker",children:"Legal"}),n.jsx("h1",{className:"pp-hero-title",children:"Privacy Policy"}),n.jsxs("p",{className:"pp-updated",children:["Last updated: ",n.jsx("span",{children:dv})]})]}),n.jsxs("div",{className:"pp-body",children:[n.jsx("div",{className:"pp-section",style:{marginBottom:48},children:n.jsx("p",{className:"pp-section-text",children:"At BluMentis, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, and secure the personal data you provide when using our website and services. By accessing our website, you consent to the data practices described in this policy."})}),n.jsx("div",{className:"pp-divider"}),pv.map(r=>n.jsxs("div",{className:"pp-section",children:[n.jsx("div",{className:"pp-section-num",children:r.num}),n.jsx("h2",{className:"pp-section-title",children:r.title}),n.jsx("p",{className:"pp-section-text",children:r.text})]},r.num)),n.jsxs("div",{className:"pp-contact-box",children:[n.jsxs("div",{children:[n.jsx("div",{className:"pp-contact-label",children:"Questions or concerns?"}),n.jsx("a",{href:"mailto:admin.blumentis@blumentis.ai",className:"pp-contact-email",children:"admin.blumentis@blumentis.ai"})]}),n.jsx("a",{href:"mailto:admin.blumentis@blumentis.ai",className:"pp-contact-cta",children:"Contact us →"})]})]}),n.jsx(Qt,{})]})]}),hv=new Date,gv=hv.toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"}),xv=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .cp-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding-top: 64px;
  }

  .cp-hero {
    position: relative;
    padding: 80px 10% 64px;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .cp-hero::before {
    content: "COOKIES";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: #111;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }

  .cp-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .cp-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .cp-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px;
    position: relative; margin-bottom: 16px;
  }

  .cp-updated {
    font-size: 12px; color: #444; font-weight: 300;
    letter-spacing: 1px; position: relative;
  }
  .cp-updated span { color: #E63946; }

  .cp-body {
    max-width: 780px;
    margin: 0 auto;
    padding: 64px 10% 80px;
  }

  .cp-intro {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
    margin-bottom: 56px;
  }

  .cp-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, #1A1A1A 20%, #1A1A1A 80%, transparent);
    margin: 48px 0;
  }

  .cp-cookie-types { display: flex; flex-direction: column; gap: 2px; margin-bottom: 56px; }

  .cp-cookie-card {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 10px;
    padding: 28px 32px;
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 0 24px;
    align-items: start;
    transition: border-color 0.2s;
  }
  .cp-cookie-card:hover { border-color: #222; }

  .cp-cookie-index {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px; line-height: 1;
    color: #E63946; padding-top: 2px;
  }

  .cp-cookie-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px; letter-spacing: 1px;
    color: #F0EDE8; margin-bottom: 8px;
  }

  .cp-cookie-text {
    font-size: 14px; line-height: 1.8;
    color: #666; font-weight: 300;
  }

  .cp-section { margin-bottom: 48px; }

  .cp-section-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 12px;
    display: flex; align-items: center; gap: 10px;
  }
  .cp-section-num::after { content: ""; flex: 1; height: 1px; background: #1A1A1A; }

  .cp-section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(22px, 3vw, 32px);
    letter-spacing: 1px; color: #F0EDE8;
    margin-bottom: 16px;
  }

  .cp-section-text {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
  }

  .cp-section-text a {
    color: #E63946; text-decoration: none;
    border-bottom: 1px solid #E6394633;
    transition: border-color 0.2s;
  }
  .cp-section-text a:hover { border-color: #E63946; }

  .cp-contact-box {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 32px 36px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
    margin-top: 56px;
  }

  .cp-contact-label {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; margin-bottom: 8px;
  }
  .cp-contact-email {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px; color: #E63946; letter-spacing: 1px;
    text-decoration: none; transition: opacity 0.2s;
  }
  .cp-contact-email:hover { opacity: 0.7; }

  .cp-contact-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px; border-radius: 100px;
    border: 1px solid #E63946; color: #E63946;
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    text-decoration: none; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, color 0.2s; white-space: nowrap;
  }
  .cp-contact-cta:hover { background: #E63946; color: #0D0D0D; }

  .cp-consent-bar {
    background: #0F0F0F;
    border: 1px solid #1A1A1A;
    border-radius: 10px;
    padding: 20px 28px;
    margin-top: 40px;
    font-size: 13px;
    color: #555;
    line-height: 1.7;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .cp-hero { padding: 72px 6% 48px; }
    .cp-body { padding: 48px 6% 64px; }
    .cp-cookie-card { grid-template-columns: 1fr; gap: 8px; }
    .cp-contact-box { flex-direction: column; align-items: flex-start; }
  }
`,vv=[{title:"Essential Cookies",text:"Strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions."},{title:"Analytics Cookies",text:"We use analytics cookies to collect information about how users interact with our website. This data is compiled into anonymous reports to help us improve the site — including visitor counts, traffic sources, and page activity."},{title:"Advertising Cookies",text:"Used to deliver relevant advertising content based on your interests. They may track browsing activity across different websites and enable us to measure the effectiveness of our advertising campaigns."},{title:"Social Media Cookies",text:"These cookies are set when you share content or interact with social media features on our website. The social network will record that you have engaged with specific content on our site."}],bv=()=>n.jsxs(n.Fragment,{children:[n.jsx("style",{children:xv}),n.jsxs("div",{className:"cp-root",children:[n.jsxs("div",{className:"cp-hero",children:[n.jsx("p",{className:"cp-kicker",children:"Legal"}),n.jsx("h1",{className:"cp-hero-title",children:"Cookie Policy"}),n.jsxs("p",{className:"cp-updated",children:["Last updated: ",n.jsx("span",{children:gv})]})]}),n.jsxs("div",{className:"cp-body",children:[n.jsx("p",{className:"cp-intro",children:"Our website uses cookies to enhance your browsing experience. Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to website owners."}),n.jsx("div",{className:"cp-section-num",children:"Types of Cookies We Use"}),n.jsx("div",{className:"cp-cookie-types",children:vv.map((r,d)=>n.jsxs("div",{className:"cp-cookie-card",children:[n.jsxs("div",{className:"cp-cookie-index",children:["0",d+1]}),n.jsxs("div",{children:[n.jsx("div",{className:"cp-cookie-title",children:r.title}),n.jsx("p",{className:"cp-cookie-text",children:r.text})]})]},r.title))}),n.jsx("div",{className:"cp-divider"}),n.jsxs("div",{className:"cp-section",children:[n.jsx("div",{className:"cp-section-num",children:"Managing Cookies"}),n.jsx("h2",{className:"cp-section-title",children:"How to Control Your Cookies"}),n.jsx("p",{className:"cp-section-text",children:"You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible. Most web browsers automatically accept cookies, but you can choose to accept or reject them through your browser's settings or preferences menu. You may also delete cookies from your device at any time."})]}),n.jsxs("div",{className:"cp-section",children:[n.jsx("div",{className:"cp-section-num",children:"Third-Party Cookies"}),n.jsx("h2",{className:"cp-section-title",children:"Partners & Affiliates"}),n.jsx("p",{className:"cp-section-text",children:"Please note that our partners and affiliates may also use cookies on our website. We do not have direct control over these third-party cookies. We encourage you to review their respective privacy policies for more information on how they handle your data."})]}),n.jsx("div",{className:"cp-consent-bar",children:"By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy."}),n.jsxs("div",{className:"cp-contact-box",children:[n.jsxs("div",{children:[n.jsx("div",{className:"cp-contact-label",children:"Questions about cookies?"}),n.jsx("a",{href:"mailto:admin.blumentis@blumentis.ai",className:"cp-contact-email",children:"admin.blumentis@blumentis.ai"})]}),n.jsx("a",{href:"mailto:admin.blumentis@blumentis.ai",className:"cp-contact-cta",children:"Contact us →"})]})]}),n.jsx(Qt,{})]})]}),yv="/assets/proline-Y3BWNvYa.mp4",zv=`
  .pla-root {
    --orange:      oklch(68% 0.26 50);
    --orange-dim:  oklch(68% 0.26 50 / 0.12);
    --orange-bdr:  oklch(68% 0.26 50 / 0.28);
    --orange-glow: oklch(68% 0.26 50 / 0.22);
    --orange-hi:   oklch(78% 0.18 50);
    --bg:          var(--bg-base,    #0d0f14);
    --surface:     var(--bg-surface, #13161e);
    --raised:      var(--bg-raised,  #1a1e28);
    --border:      var(--bg-border,  rgba(255,255,255,.07));
    --text:        var(--text-primary,   #f0f2f7);
    --text-2:      var(--text-secondary, #9aa3b8);
    --text-3:      var(--text-muted,     #5c6478);
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.38);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .pla-root *, .pla-root *::before, .pla-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .pla-root h1,.pla-root h2,.pla-root h3,.pla-root h4 { font-family: 'Syne', sans-serif; }

  /* ── TRUSTED BY ── */
  .pla-trusted {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 32px 20px;
  }
  .pla-trusted-label {
    text-align: center; font-size: 11px; font-weight: 600;
    letter-spacing: .14em; text-transform: uppercase;
    color: var(--text-3); margin-bottom: 20px;
  }
  .pla-trusted-track {
    display: flex; gap: 24px;
    justify-content: center; align-items: center;
    flex-wrap: wrap;
  }
  .pla-logo-pill {
    display: flex; align-items: center; gap: 10px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 12px; padding: 12px 22px;
    white-space: nowrap; transition: border-color .22s;
    cursor: default;
  }
  .pla-logo-pill:hover { border-color: var(--orange-bdr); }
  .pla-logo-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 15px;
  }
  .pla-logo-name { font-size: 13px; font-weight: 600; color: var(--text-2); }

  /* ── HERO ── */
  .pla-hero {
    position: relative;
    height: 100vh; min-height: 680px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    overflow: hidden; text-align: center;
  }
  .pla-hero-video {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover; z-index: 0;
    margin-top: 70px;
  }
  .pla-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(13,15,20,.88) 0%, oklch(18% 0.12 50 / 0.72) 60%, rgba(13,15,20,.92) 100%);
    z-index: 1;
  }
  .pla-hero-overlay::after {
    content: "";
    position: absolute; bottom: 0; left: 0; right: 0; height: 220px;
    background: linear-gradient(to bottom, transparent, rgba(13,15,20,.95));
  }
  .pla-hero-content {
    position: relative; z-index: 2;
    color: white; padding: 0 20px; max-width: 820px;
    display: flex; flex-direction: column; align-items: center;
  }
  .pla-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
    backdrop-filter: blur(8px);
  }
  .pla-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
    animation: dotPulse 2s ease-in-out infinite;
  }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
  .pla-hero-title {
    font-size: clamp(40px, 6.5vw, 76px);
    font-weight: 800; line-height: 1.06; margin-bottom: 10px; letter-spacing: -0.025em;
  }
  .pla-hero-subtitle {
    font-size: clamp(20px, 2.8vw, 30px);
    font-weight: 700; letter-spacing: -0.01em; margin-bottom: 22px;
    font-family: 'Syne', sans-serif;
  }
  .pla-hero-title .pla-accent, .pla-hero-subtitle .pla-accent {
    background: linear-gradient(135deg, var(--orange-hi), oklch(62% 0.24 50));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .pla-hero-sub {
    font-size: 17px; opacity: .72; max-width: 540px; margin: 0 auto 36px;
    line-height: 1.75; font-weight: 300;
  }
  .pla-hero-stats {
    position: relative; z-index: 2;
    display: flex; gap: 16px; margin-top: 52px; flex-wrap: wrap; justify-content: center;
  }
  .pla-hero-stat {
    background: rgba(13,15,20,.65);
    border: 1px solid rgba(255,255,255,.11);
    backdrop-filter: blur(14px);
    border-radius: 18px; padding: 20px 32px;
    text-align: center; min-width: 136px; transition: .28s;
  }
  .pla-hero-stat:hover { border-color: var(--orange-bdr); background: rgba(13,15,20,.80); transform: translateY(-3px); }
  .pla-hero-stat-val {
    display: block;
    font-size: 30px; font-weight: 800; font-family: 'Syne', sans-serif;
    color: var(--orange); line-height: 1;
  }
  .pla-hero-stat-lbl {
    display: block;
    font-size: 12px; color: rgba(255,255,255,.48);
    margin-top: 6px; letter-spacing: .04em;
  }

  /* ── PAGE ── */
  .pla-page { max-width: 1100px; margin: 0 auto; padding: 80px 32px; }

  /* ── SECTION HEAD ── */
  .pla-head { margin-bottom: 48px; }
  .pla-head h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -0.025em; }
  .pla-head h2 .pla-accent { color: var(--orange); }
  .pla-bar {
    width: 100px; height: 4px; margin-top: 14px; border-radius: 99px;
    background: linear-gradient(90deg, var(--orange), oklch(62% 0.24 50 / 0.35));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100% { opacity:1; } 50% { opacity:.32; } }

  /* ── DIVIDER ── */
  .pla-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── STATS ── */
  .pla-stats { display: flex; gap: 18px; margin-bottom: 64px; flex-wrap: wrap; }
  .pla-stat {
    width: 170px; height: 140px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; box-shadow: var(--shadow);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: .28s; cursor: default;
  }
  .pla-stat:hover { transform: translateY(-5px); border-color: var(--orange-bdr); box-shadow: 0 18px 40px rgba(0,0,0,.5); }
  .pla-stat-val { font-size: 34px; font-weight: 800; font-family: 'Syne', sans-serif; color: var(--orange); }
  .pla-stat-lbl { color: var(--text-3); margin-top: 6px; font-size: 13px; }

  /* ── PER CHI ── */
  .pla-perchi { display: flex; gap: 60px; margin-top: 32px; flex-wrap: wrap; }
  .pla-perchi-text { max-width: 420px; color: var(--text-2); line-height: 1.8; font-size: 15px; }
  .pla-checks { display: flex; flex-direction: column; gap: 14px; }
  .pla-check { display: flex; align-items: center; gap: 10px; font-weight: 500; color: var(--text); }
  .pla-check-ico {
    width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange); display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700;
  }

  /* ── PILLS ── */
  .pla-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 44px; }
  .pla-pill {
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi); padding: 9px 18px; border-radius: 10px;
    font-weight: 500; font-size: 13px; opacity: 0;
    animation: fadeUpLoop 4s ease infinite;
  }
  @keyframes fadeUpLoop {
    0%   { opacity:0; transform:translateY(22px); }
    20%  { opacity:1; transform:translateY(0); }
    80%  { opacity:1; transform:translateY(0); }
    100% { opacity:0; transform:translateY(-18px); }
  }
  .pla-d1{animation-delay:0s;} .pla-d2{animation-delay:.5s;} .pla-d3{animation-delay:1s;}
  .pla-d4{animation-delay:1.5s;} .pla-d5{animation-delay:2s;}

  /* ── STEPS ── */
  .pla-steps { display: flex; align-items: center; gap: 28px; margin-top: 40px; flex-wrap: wrap; }
  .pla-step-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 40px; width: 450px; min-width: 300px;
    box-shadow: var(--shadow); transition: .38s;
  }
  .pla-step-card:hover { border-color: var(--orange-bdr); }
  .pla-step-num { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--orange); margin-bottom: 10px; }
  .pla-step-title { font-size: 24px; font-weight: 800; margin-bottom: 14px; color: var(--text); }
  .pla-step-desc { color: var(--text-2); line-height: 1.75; font-size: 15px; }
  .pla-dots { display: flex; gap: 8px; margin-top: 28px; }
  .pla-dot {
    width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: .28s;
    background: var(--raised); border: 1px solid var(--border);
  }
  .pla-dot.active { background: var(--orange); border-color: var(--orange); transform: scale(1.35); }
  .pla-next-btn {
    background: var(--orange); color: #0d0f14;
    border: none; padding: 14px 22px; border-radius: var(--radius);
    font-size: 15px; font-weight: 700; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; white-space: nowrap;
  }
  .pla-next-btn:hover { filter: brightness(1.1); transform: translateX(3px); }

  /* ── BENEFITS ── */
  .pla-benefits {
    list-style: none; display: flex; flex-direction: column; gap: 0;
    width: 460px;
  }
  .pla-benefits li {
    background: var(--surface); border: 1px solid var(--border);
    padding: 22px 24px; border-radius: var(--radius);
    position: relative; cursor: pointer; transition: .22s;
  }
  .pla-benefits li h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
  .pla-benefits li p  { font-size: 13px; color: var(--text-3); }
  .pla-benefits li:hover { border-color: oklch(68% 0.26 50 / 0.40); background: oklch(68% 0.26 50 / 0.08); }
  .pla-benefit-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .pla-benefit-arrow { color: var(--text-3); font-size: 11px; flex-shrink: 0; margin-top: 2px; transition: .2s; }
  .pla-benefit-detail {
    font-size: 13px; color: var(--text-2); line-height: 1.7;
    margin-top: 10px; padding-top: 10px;
    border-top: 1px solid var(--border);
    animation: fadeInDetail .2s ease;
  }
  @keyframes fadeInDetail { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  /* Bolla desktop */
  .pla-benefits li .pla-bubble {
    position: absolute; left: calc(100% + 18px); top: 50%; transform: translateY(-50%) scale(0.85);
    width: 260px; background: oklch(68% 0.26 50 / 0.13);
    border: 1px solid oklch(68% 0.26 50 / 0.40); border-radius: 16px;
    padding: 20px 22px; pointer-events: none;
    opacity: 0; transition: opacity .22s, transform .28s cubic-bezier(.34,1.56,.64,1);
    z-index: 10;
  }
  .pla-benefits li:hover .pla-bubble { opacity: 1; transform: translateY(-50%) scale(1); }
  .pla-bubble::before {
    content: ""; position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
    border: 8px solid transparent; border-right-color: oklch(68% 0.26 50 / 0.40);
  }
  .pla-bubble h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800; color: oklch(78% 0.18 50); margin-bottom: 8px; }
  .pla-bubble p  { font-size: 13px; color: #9aa3b8; line-height: 1.7; }

  /* ── SPEC CARDS ── */
  .pla-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .pla-spec-card {
    background: var(--surface); border: 1px solid var(--border);
    padding: 24px; border-radius: 20px; box-shadow: var(--shadow); transition: .32s;
  }
  .pla-spec-card:hover { border-color: var(--orange-bdr); }
  .pla-spec-btn {
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi); padding: 10px 16px; border-radius: 10px;
    font-weight: 700; font-size: 13px; cursor: pointer; width: 100%; text-align: left;
    font-family: 'DM Sans', sans-serif;
  }
  .pla-spec-tree {
    position: relative; margin-top: 18px; padding-left: 26px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .pla-spec-tree::before {
    content: ""; position: absolute; left: 8px; top: 0; bottom: 0;
    width: 2px; background: var(--border);
  }
  .pla-spec-item {
    position: relative; background: var(--raised); border: 1px solid var(--border);
    padding: 10px 14px; border-radius: 10px; font-size: 13px; color: var(--text-2);
    opacity: 1; transform: translateX(-28px); transition: .42s;
  }
  .pla-spec-item::before {
    content: ""; position: absolute; left: -20px; top: 50%; transform: translateY(-50%);
    width: 7px; height: 7px; border-radius: 50%; background: var(--orange);
  }
  .pla-spec-card:hover .pla-spec-item { opacity: 1; transform: translateX(0); }
  .pla-spec-card:hover .pla-spec-item:nth-child(1) { transition-delay: .07s; }
  .pla-spec-card:hover .pla-spec-item:nth-child(2) { transition-delay: .2s; }
  .pla-spec-card:hover .pla-spec-item:nth-child(3) { transition-delay: .34s; }

  /* ── CTA ── */
  .pla-cta {
    background: linear-gradient(135deg, #0a0c12 0%, oklch(16% 0.1 50) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 100px 20px; margin-top: 80px;
  }
  .pla-cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
  .pla-cta-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
  .pla-cta-title .pla-accent { color: var(--orange); }
  .pla-cta-sub { opacity: .72; margin-bottom: 38px; line-height: 1.75; font-size: 15px; }
  .pla-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .pla-cta-primary {
    background: var(--orange); color: #0d0f14;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .pla-cta-primary:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 8px 24px var(--orange-glow); }
  .pla-cta-secondary {
    background: transparent; color: white;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .pla-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }

  /* ── FOOTER ── */
  .pla-footer {
    background: #07080d; border-top: 1px solid rgba(255,255,255,.05);
    padding: 60px 32px 36px; color: var(--text-3);
  }
  .pla-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .pla-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .pla-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 300px; }
  .pla-footer-tag {
    display: inline-block; margin-top: 14px;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 999px;
  }
  .pla-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .pla-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .pla-footer-links a:hover { color: var(--orange-hi); }
  .pla-footer-bottom {
    max-width: 1100px; margin: 32px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .pla-hero { min-height: 100svh; }
    .pla-hero-stats { gap: 10px; margin-top: 32px; }
    .pla-hero-stat { padding: 12px 16px; min-width: 90px; }
    .pla-hero-stat-val { font-size: 20px; }

    .pla-steps { flex-direction: column; align-items: stretch; gap: 16px; }
    .pla-step-card { width: 100%; min-width: unset; padding: 24px 20px; }
    .pla-next-btn { width: 100%; text-align: center; }

    .pla-benefits { width: 100%; }
    .pla-benefits li .pla-bubble { display: none; }

    .pla-specs { grid-template-columns: 1fr; }
    .pla-perchi { flex-direction: column; }
    .pla-stats { justify-content: center; }
    .pla-stat { width: calc(50% - 9px); height: 110px; }
    .pla-stat-val { font-size: 26px; }

    .pla-page { padding: 60px 20px; }

    .pla-cta { padding: 64px 20px; }
    .pla-cta-btns { flex-direction: column; align-items: center; }
    .pla-cta-primary, .pla-cta-secondary { width: 100%; text-align: center; }

    .pla-footer-inner { grid-template-columns: 1fr; }
    .pla-footer-links { align-items: flex-start; }
    .pla-footer-bottom { flex-direction: column; gap: 4px; }
    .pla-trusted-track { gap: 12px; }
  }
`,Gl=[{label:"STEP 1",title:"CONFIGURAZIONE",desc:"Crei la rappresentazione digitale del tuo processo produttivo (Digital Twin)."},{label:"STEP 2",title:"CONNESSIONE",desc:"Colleghi le sorgenti dati: MES, Excel, CSV, MDF e altri. Nessun dato esce dall'impianto."},{label:"STEP 3",title:"MONITORAGGIO",desc:"Il sistema calcola in tempo reale Cp/Cpk e altri indicatori chiave, rileva anomalie e attiva gli alert configurati."},{label:"STEP 4",title:"OTTIMIZZAZIONE",desc:"Analizza i trend, monitora processi presso i fornitori. Riduce fermi, rilavorazioni e scarti."}],wv=[{title:"Maggiore consapevolezza",desc:"Analisi avanzata dei dati",detail:"Dashboard intuitive ti danno una visione completa e immediata della qualità produttiva."},{title:"Qualità predittiva",desc:"Previeni le non conformità",detail:"Rileva le derive di processo prima che diventino difetti. Mantieni Cp/Cpk e altri indicatori sempre nei target."},{title:"Riduzione costi",desc:"Meno fermi e rilavorazioni",detail:"Meno scarti, meno rilavorazioni, meno fermi macchina. ROI misurabile già nei primi mesi."},{title:"Resi ridotti al minimo",desc:"Prodotti centrati sui target",detail:"Prodotti più stabili significano meno resi e reclami post-vendita."},{title:"Stabilità processo",desc:"Monitoraggio continuo",detail:"Controllo 24/7 con alert configurabili. Ogni anomalia notificata in tempo reale."},{title:"Flessibilità",desc:"Adattamento immediato",detail:"Nuovi prodotti, nuove linee, nuovi fornitori: pronto in pochi minuti senza riconfigurazioni."}];function jv(){const[r,d]=E.useState(0),[p,c]=E.useState(null),[u,m]=E.useState(window.innerWidth<=768);return E.useEffect(()=>{function h(){m(window.innerWidth<=768)}return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),n.jsxs("div",{className:"pla-root",children:[n.jsx("style",{children:zv}),n.jsxs("section",{className:"pla-hero",children:[n.jsx("video",{className:"pla-hero-video",src:yv,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),n.jsx("div",{className:"pla-hero-overlay"}),n.jsxs("div",{className:"pla-hero-content",children:[n.jsxs("div",{className:"pla-hero-badge",children:[n.jsx("span",{className:"pla-badge-dot"}),"Quality Intelligence Platform"]}),n.jsx("h1",{className:"pla-hero-title",children:"ProLine Analytics"}),n.jsxs("p",{className:"pla-hero-subtitle",children:["Controllo totale. ",n.jsx("span",{className:"pla-accent",children:"Qualità garantita."})]}),n.jsx("p",{className:"pla-hero-sub",children:"La soluzione software specialistica per il controllo accurato del processo produttivo. Monitora, previene, traccia."})]}),n.jsx("div",{className:"pla-hero-stats",children:[{val:"< 30s",lbl:"Latenza rilevamento"},{val:"100%",lbl:"Tracciabilità"},{val:"24/7",lbl:"Monitoraggio"}].map(h=>n.jsxs("div",{className:"pla-hero-stat",children:[n.jsx("span",{className:"pla-hero-stat-val",children:h.val}),n.jsx("span",{className:"pla-hero-stat-lbl",children:h.lbl})]},h.lbl))})]}),(()=>{const h=[{icon:"🏭",name:"PLB"},{icon:"⚙️",name:"CSMIC"}];return n.jsxs("div",{className:"pla-trusted",children:[n.jsx("div",{className:"pla-trusted-label",children:"Già scelto da"}),n.jsx("div",{className:"pla-trusted-track",children:h.map((v,x)=>n.jsxs("div",{className:"pla-logo-pill",children:[n.jsx("div",{className:"pla-logo-icon",children:v.icon}),n.jsx("span",{className:"pla-logo-name",children:v.name})]},x))})]})})(),n.jsxs("div",{className:"pla-page",children:[n.jsxs("div",{className:"pla-head",children:[n.jsxs("h2",{children:["Per chi è ",n.jsx("span",{className:"pla-accent",children:"ProLine Analytics"}),"?"]}),n.jsx("div",{className:"pla-bar"})]}),n.jsxs("div",{className:"pla-perchi",children:[n.jsx("p",{className:"pla-perchi-text",children:"Progettato per ambienti produttivi dove la qualità non ammette compromessi. Ideale per settori automotive, elettronica, industriale e altri."}),n.jsx("div",{className:"pla-checks",children:["On-premise","Dashboard real-time","Multi-utente","Multi-dispositivo","Alert intelligenti e personalizzabili"].map(h=>n.jsxs("div",{className:"pla-check",children:[n.jsx("span",{className:"pla-check-ico",children:"✓"}),n.jsx("span",{children:h})]},h))})]}),n.jsx("div",{className:"pla-pills",children:[["Monitoraggio Real-time","pla-d1"],["Controllo Qualità","pla-d2"],["100% Tracciabilità","pla-d3"],["Alert & Notifiche personalizzabili","pla-d4"],["Configurazione su misura","pla-d5"]].map(([h,v])=>n.jsx("div",{className:`pla-pill ${v}`,children:h},h))})]}),n.jsx("hr",{className:"pla-divider"}),n.jsxs("div",{className:"pla-page",children:[n.jsx("div",{className:"pla-head",children:n.jsxs("h2",{children:["Come ",n.jsx("span",{className:"pla-accent",children:"funziona?"})]})}),n.jsxs("div",{className:"pla-steps",children:[n.jsxs("div",{className:"pla-step-card",children:[n.jsx("div",{className:"pla-step-num",children:Gl[r].label}),n.jsx("h3",{className:"pla-step-title",children:Gl[r].title}),n.jsx("p",{className:"pla-step-desc",children:Gl[r].desc}),n.jsx("div",{className:"pla-dots",children:Gl.map((h,v)=>n.jsx("div",{className:`pla-dot${v===r?" active":""}`,onClick:()=>d(v)},v))})]}),n.jsx("button",{className:"pla-next-btn",onClick:()=>d(h=>(h+1)%Gl.length),children:"Prossimo →"})]})]}),n.jsx("hr",{className:"pla-divider"}),n.jsxs("div",{className:"pla-page",children:[n.jsx("div",{className:"pla-head",children:n.jsxs("h2",{children:["Benefici ",n.jsx("span",{className:"pla-accent",children:"Concreti"})]})}),n.jsx("ul",{className:"pla-benefits",children:wv.map((h,v)=>n.jsxs("li",{onClick:()=>c(p===v?null:v),children:[n.jsxs("div",{className:"pla-benefit-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:h.title}),n.jsx("p",{children:h.desc})]}),u&&n.jsx("span",{className:"pla-benefit-arrow",children:p===v?"▲":"▼"})]}),n.jsxs("div",{className:"pla-bubble",children:[n.jsx("h4",{children:h.title}),n.jsx("p",{children:h.detail})]}),p===v&&n.jsx("div",{className:"pla-benefit-detail",children:h.detail})]},h.title))})]}),n.jsx("hr",{className:"pla-divider"}),n.jsxs("div",{className:"pla-page",children:[n.jsx("div",{className:"pla-head",children:n.jsxs("h2",{children:["Specifiche ",n.jsx("span",{className:"pla-accent",children:"Tecniche"})]})}),n.jsx("div",{className:"pla-specs",children:[{title:"Monitoraggio in tempo reale ▼",items:["Calcolo giornaliero indici Cp/Cpk","Indice qualità, Nelson Rules live","Rilevamento anomalie automatico"]},{title:"Controllo qualità avanzato ▼",items:["Identificazione componenti non conformi","Analisi completa dati EOL","Verifica conformità fornitori"]},{title:"Tracciabilità completa ▼",items:["Ogni seriale tracciato","Confronto con 500 unità precedenti e successive","Storia completa componenti"]},{title:"Alert e notifiche ▼",items:["Metriche personalizzate","Livelli gravità allarme / warning","Registrazione interventi per storico completo"]},{title:"Integrazione ▼",items:["Connessione MES locale (read-only)","Importazione CSV, Excel, MDF","Modalità ibrida disponibile"]},{title:"Sicurezza ▼",items:["Dati on-premise","Nessun accesso esterno","Conformità normative"]}].map(h=>n.jsxs("div",{className:"pla-spec-card",children:[n.jsx("button",{className:"pla-spec-btn",children:h.title}),n.jsx("ul",{className:"pla-spec-tree",children:h.items.map(v=>n.jsx("li",{className:"pla-spec-item",children:v},v))})]},h.title))})]}),n.jsx("section",{className:"pla-cta",children:n.jsxs("div",{className:"pla-cta-inner",children:[n.jsxs("h2",{className:"pla-cta-title",children:["Pronto a trasformare il tuo",n.jsx("br",{}),n.jsx("span",{className:"pla-accent",children:"processo produttivo?"})]}),n.jsxs("p",{className:"pla-cta-sub",children:["Richiedi una demo personalizzata e scopri come"," ",n.jsx("strong",{children:"ProLine Analytics"})," può migliorare la qualità e ridurre i costi della tua produzione."]}),n.jsxs("div",{className:"pla-cta-btns",children:[n.jsx("button",{className:"pla-cta-primary",children:"Richiedi Demo"}),n.jsx("button",{className:"pla-cta-secondary",children:"Scarica Brochure"})]})]})}),n.jsxs("footer",{className:"pla-footer",children:[n.jsxs("div",{className:"pla-footer-inner",children:[n.jsxs("div",{className:"pla-footer-brand",children:[n.jsx("h3",{children:"ProLine Analytics"}),n.jsx("p",{children:"Quality Intelligence Platform per ambienti produttivi che non accettano compromessi sulla qualità dei propri processi."}),n.jsx("span",{className:"pla-footer-tag",children:"On-premise · 24/7 · Made in Italy"})]}),n.jsxs("div",{className:"pla-footer-links",children:[n.jsx("a",{href:"#",children:"↓ Scarica Brochure PDF"}),n.jsx("a",{href:"#",children:"Privacy Policy"}),n.jsx("a",{href:"#",children:"Contatti"})]})]}),n.jsxs("div",{className:"pla-footer-bottom",children:[n.jsxs("span",{children:["© ",new Date().getFullYear()," ProLine Analytics. Tutti i diritti riservati."]}),n.jsx("span",{children:"Made in Italy 🇮🇹"})]})]}),n.jsx(Qt,{})]})}const Sv="/assets/optimal-CdnoLY8o.mp4",Nv=`
  /* ── TRUSTED BY (shared styles) ── */
  .pla-trusted {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 32px 20px;
  }
  .pla-trusted-label {
    text-align: center; font-size: 11px; font-weight: 600;
    letter-spacing: .14em; text-transform: uppercase;
    color: var(--text-3); margin-bottom: 20px;
  }
  .pla-trusted-track {
    display: flex; gap: 24px;
    justify-content: center; align-items: center;
    flex-wrap: wrap;
  }
  .pla-logo-pill {
    display: flex; align-items: center; gap: 10px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 12px; padding: 12px 22px;
    white-space: nowrap; transition: border-color .22s; cursor: default;
  }
  .pla-logo-pill:hover { border-color: var(--blue-bdr); }
  .pla-logo-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    display: flex; align-items: center; justify-content: center; font-size: 15px;
  }
  .pla-logo-name { font-size: 13px; font-weight: 600; color: var(--text-2); }

  .opa-root {
    --blue:      oklch(62% 0.22 240);
    --blue-dim:  oklch(62% 0.22 240 / 0.12);
    --blue-bdr:  oklch(62% 0.22 240 / 0.30);
    --blue-glow: oklch(62% 0.22 240 / 0.24);
    --blue-hi:   oklch(74% 0.16 240);
    --cyan:      oklch(74% 0.18 200);
    --bg:          var(--bg-base,    #080c14);
    --surface:     var(--bg-surface, #0e1420);
    --raised:      var(--bg-raised,  #141c2c);
    --border:      var(--bg-border,  rgba(255,255,255,.07));
    --text:        var(--text-primary,   #eef2fa);
    --text-2:      var(--text-secondary, #8fa3c0);
    --text-3:      var(--text-muted,     #4a5e78);
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.45);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .opa-root *, .opa-root *::before, .opa-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .opa-root h1,.opa-root h2,.opa-root h3,.opa-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .opa-hero {
    position: relative;
    height: 100vh; min-height: 620px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; text-align: center;
  }
  .opa-hero-video {
    margin-top: 70px;
    position: absolute; inset: 0;
    width: 100%; height: 80%; object-fit: cover; z-index: 0;
  }
  .opa-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(8,12,20,.92) 0%, oklch(16% 0.14 240 / 0.65) 100%);
    z-index: 1;
  }
  .opa-hero-content {
    position: relative; z-index: 2;
    color: white; padding: 0 20px; max-width: 820px;
  }
  .opa-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 26px;
    backdrop-filter: blur(8px);
  }
  .opa-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--blue);
    animation: badgePulse 2s ease-in-out infinite;
  }
  @keyframes badgePulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.5;transform:scale(1.5);} }
  .opa-hero-title {
    font-size: clamp(42px, 6.5vw, 78px);
    font-weight: 800; line-height: 1.05; margin-bottom: 22px; letter-spacing: -0.025em;
  }
  .opa-hero-title .opa-accent {
    background: linear-gradient(135deg, var(--blue-hi), var(--cyan));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .opa-hero-sub {
    font-size: 18px; opacity: .72; max-width: 560px; margin: 0 auto 38px;
    line-height: 1.75; font-weight: 300;
  }

  /* ── PAGE ── */
  .opa-page { max-width: 1100px; margin: 0 auto; padding: 80px 32px; }

  /* ── SECTION HEAD ── */
  .opa-head { margin-bottom: 48px; }
  .opa-head h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -0.025em; }
  .opa-head h2 .opa-accent { color: var(--blue-hi); }
  .opa-bar {
    width: 100px; height: 4px; margin-top: 14px; border-radius: 99px;
    background: linear-gradient(90deg, var(--blue), oklch(62% 0.22 240 / 0.30));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100% { opacity:1; } 50% { opacity:.28; } }

  /* ── DIVIDER ── */
  .opa-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── STATS ── */
  .opa-stats { display: flex; gap: 18px; margin-bottom: 64px; flex-wrap: wrap; }
  .opa-stat {
    width: 300px; height: 200px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; box-shadow: var(--shadow);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: .28s; cursor: default;
  }
  .opa-stat:hover { transform: translateY(-5px); border-color: var(--blue-bdr); box-shadow: 0 18px 40px rgba(0,0,0,.55); }
  .opa-stat-val { font-size: 30px; font-weight: 800; font-family: 'Syne', sans-serif; color: var(--blue-hi); }
  .opa-stat-lbl { color: var(--text-3); margin-top: 6px; font-size: 13px; text-align: center; padding: 0 8px; }

  /* ── PER CHI ── */
  .opa-perchi { display: flex; gap: 60px; margin-top: 32px; flex-wrap: wrap; }
  .opa-perchi-text { max-width: 420px; color: var(--text-2); line-height: 1.8; font-size: 15px; }
  .opa-checks { display: flex; flex-direction: column; gap: 14px; }
  .opa-check { display: flex; align-items: center; gap: 10px; font-weight: 500; color: var(--text); }
  .opa-check-ico {
    width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700;
  }

  /* ── PILLS ── */
  .opa-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 44px; }
  .opa-pill {
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); padding: 9px 18px; border-radius: 10px;
    font-weight: 500; font-size: 13px; opacity: 0;
    animation: fadeUpLoop 4s ease infinite;
  }
  @keyframes fadeUpLoop {
    0%   { opacity:0; transform:translateY(22px); }
    20%  { opacity:1; transform:translateY(0); }
    80%  { opacity:1; transform:translateY(0); }
    100% { opacity:0; transform:translateY(-18px); }
  }
  .opa-d1{animation-delay:0s;} .opa-d2{animation-delay:.5s;} .opa-d3{animation-delay:1s;}
  .opa-d4{animation-delay:1.5s;} .opa-d5{animation-delay:2s;}

  /* ── STEPS ── */
  .opa-steps { display: flex; align-items: center; gap: 28px; margin-top: 40px; flex-wrap: wrap; }
  .opa-step-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 40px; width: 450px; min-width: 300px;
    box-shadow: var(--shadow); transition: .38s;
  }
  .opa-step-card:hover { border-color: var(--blue-bdr); }
  .opa-step-num { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--blue-hi); margin-bottom: 10px; }
  .opa-step-title { font-size: 24px; font-weight: 800; margin-bottom: 14px; color: var(--text); }
  .opa-step-desc { color: var(--text-2); line-height: 1.75; font-size: 15px; }
  .opa-dots { display: flex; gap: 8px; margin-top: 28px; }
  .opa-dot {
    width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: .28s;
    background: var(--raised); border: 1px solid var(--border);
  }
  .opa-dot.active { background: var(--blue); border-color: var(--blue); transform: scale(1.35); }
  .opa-next-btn {
    background: var(--blue); color: #080c14;
    border: none; padding: 14px 22px; border-radius: var(--radius);
    font-size: 15px; font-weight: 700; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; white-space: nowrap;
  }
  .opa-next-btn:hover { filter: brightness(1.12); transform: translateX(3px); }

  /* ── BENEFITS ── */
  .opa-benefits {
    list-style: none; display: flex; flex-direction: column; gap: 0;
    width: 460px;
  }
  .opa-benefits li {
    background: var(--surface); border: 1px solid var(--border);
    padding: 22px 24px; border-radius: var(--radius);
    position: relative; cursor: pointer; transition: .22s;
  }
  .opa-benefits li h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
  .opa-benefits li p  { font-size: 13px; color: var(--text-3); }
  .opa-benefits li:hover { border-color: oklch(62% 0.22 240 / 0.40); background: oklch(62% 0.22 240 / 0.08); }
  .opa-benefit-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .opa-benefit-arrow { color: var(--text-3); font-size: 11px; flex-shrink: 0; margin-top: 2px; transition: .2s; }
  .opa-benefit-detail {
    font-size: 13px; color: var(--text-2); line-height: 1.7;
    margin-top: 10px; padding-top: 10px;
    border-top: 1px solid var(--border);
    animation: fadeInDetail .2s ease;
  }
  @keyframes fadeInDetail { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  /* Bolla desktop */
  .opa-benefits li .opa-bubble {
    position: absolute; left: calc(100% + 18px); top: 50%; transform: translateY(-50%) scale(0.85);
    width: 260px; background: oklch(62% 0.22 240 / 0.13);
    border: 1px solid oklch(62% 0.22 240 / 0.40); border-radius: 16px;
    padding: 20px 22px; pointer-events: none;
    opacity: 0; transition: opacity .22s, transform .28s cubic-bezier(.34,1.56,.64,1);
    z-index: 10;
  }
  .opa-benefits li:hover .opa-bubble { opacity: 1; transform: translateY(-50%) scale(1); }
  .opa-bubble::before {
    content: ""; position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
    border: 8px solid transparent; border-right-color: oklch(62% 0.22 240 / 0.40);
  }
  .opa-bubble h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800; color: var(--blue-hi); margin-bottom: 8px; }
  .opa-bubble p  { font-size: 13px; color: #8fa3c0; line-height: 1.7; }

  /* ── USE CASES ── */
  .opa-cases { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
  .opa-case {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px; transition: .28s;
  }
  .opa-case:hover { border-color: var(--blue-bdr); transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,0,0,.45); }
  .opa-case-icon {
    width: 40px; height: 40px; border-radius: 12px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; margin-bottom: 14px;
  }
  .opa-case h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .opa-case p  { font-size: 13px; color: var(--text-3); line-height: 1.65; }

  /* ── SPEC CARDS ── */
  .opa-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .opa-spec-card {
    background: var(--surface); border: 1px solid var(--border);
    padding: 24px; border-radius: 20px; box-shadow: var(--shadow); transition: .32s;
  }
  .opa-spec-card:hover { border-color: var(--blue-bdr); }
  .opa-spec-btn {
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); padding: 10px 16px; border-radius: 10px;
    font-weight: 700; font-size: 13px; cursor: pointer; width: 100%; text-align: left;
    font-family: 'DM Sans', sans-serif;
  }
  .opa-spec-tree {
    position: relative; margin-top: 18px; padding-left: 26px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .opa-spec-tree::before {
    content: ""; position: absolute; left: 8px; top: 0; bottom: 0;
    width: 2px; background: var(--border);
  }
  .opa-spec-item {
    position: relative; background: var(--raised); border: 1px solid var(--border);
    padding: 10px 14px; border-radius: 10px; font-size: 13px; color: var(--text-2);
    opacity: 1; transform: translateX(-28px); transition: .42s;
  }
  .opa-spec-item::before {
    content: ""; position: absolute; left: -20px; top: 50%; transform: translateY(-50%);
    width: 7px; height: 7px; border-radius: 50%; background: var(--blue);
  }
  .opa-spec-card:hover .opa-spec-item { opacity: 1; transform: translateX(0); }
  .opa-spec-card:hover .opa-spec-item:nth-child(1) { transition-delay: .07s; }
  .opa-spec-card:hover .opa-spec-item:nth-child(2) { transition-delay: .2s; }
  .opa-spec-card:hover .opa-spec-item:nth-child(3) { transition-delay: .34s; }

  /* ── FAQ ── */
  .opa-faq { display: flex; flex-direction: column; gap: 12px; }
  .opa-faq-item {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); overflow: hidden; transition: .22s;
  }
  .opa-faq-item:hover { border-color: var(--blue-bdr); }
  .opa-faq-q {
    width: 100%; background: none; border: none; color: var(--text);
    padding: 20px 24px; text-align: left; font-family: 'DM Sans', sans-serif;
    font-size: 15px; font-weight: 600; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
  }
  .opa-faq-arrow { color: var(--blue-hi); font-size: 18px; transition: .28s; flex-shrink: 0; }
  .opa-faq-item.open .opa-faq-arrow { transform: rotate(180deg); }
  .opa-faq-a {
    max-height: 0; overflow: hidden; transition: max-height .35s ease, padding .25s;
    padding: 0 24px; color: var(--text-2); font-size: 14px; line-height: 1.75;
  }
  .opa-faq-item.open .opa-faq-a { max-height: 200px; padding: 0 24px 20px; }

  /* ── CTA ── */
  .opa-cta {
    background: linear-gradient(135deg, #060910 0%, oklch(14% 0.12 240) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 100px 20px; margin-top: 80px;
  }
  .opa-cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
  .opa-cta-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
  .opa-cta-title .opa-accent { color: var(--blue-hi); }
  .opa-cta-sub { opacity: .72; margin-bottom: 38px; line-height: 1.75; font-size: 15px; }
  .opa-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .opa-cta-primary {
    background: var(--blue); color: #080c14;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .opa-cta-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--blue-glow); }
  .opa-cta-secondary {
    background: transparent; color: white;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center;
  }
  .opa-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }

  /* ── FOOTER ── */
  .opa-footer {
    background: #040608; border-top: 1px solid rgba(255,255,255,.05);
    padding: 60px 32px 36px; color: var(--text-3);
  }
  .opa-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .opa-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .opa-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 300px; }
  .opa-footer-tag {
    display: inline-block; margin-top: 14px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 999px;
  }
  .opa-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .opa-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .opa-footer-links a:hover { color: var(--blue-hi); }
  .opa-footer-bottom {
    max-width: 1100px; margin: 32px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .opa-cases { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 700px) {
    .opa-hero { min-height: 100svh; }
    .opa-hero-sub { font-size: 15px; }

    .opa-stats { flex-direction: column; gap: 10px; }
    .opa-stat { width: 100%; height: auto; padding: 20px; flex-direction: row; justify-content: flex-start; gap: 16px; }
    .opa-stat-val { font-size: 24px; }

    .opa-steps { flex-direction: column; align-items: stretch; gap: 16px; }
    .opa-step-card { width: 100%; min-width: unset; padding: 24px 20px; }
    .opa-next-btn { width: 100%; text-align: center; }

    .opa-benefits { width: 100%; }
    .opa-benefits li .opa-bubble { display: none; }

    .opa-specs { grid-template-columns: 1fr; }
    .opa-cases { grid-template-columns: 1fr; }
    .opa-perchi { flex-direction: column; }
    .opa-page { padding: 60px 20px; }

    .opa-faq-q { font-size: 14px; padding: 16px 18px; }
    .opa-faq-a { padding: 0 18px; }
    .opa-faq-item.open .opa-faq-a { padding: 0 18px 16px; }

    .opa-cta { padding: 64px 20px; }
    .opa-cta-btns { flex-direction: column; align-items: center; }
    .opa-cta-primary, .opa-cta-secondary { width: 100%; text-align: center; justify-content: center; }

    .opa-footer-inner { grid-template-columns: 1fr; }
    .opa-footer-links { align-items: flex-start; }
    .opa-footer-bottom { flex-direction: column; gap: 4px; }
  }
`,Ql=[{label:"STEP 1",title:"DEFINIZIONE",desc:"Il cliente identifica cosa vuole ottimizzare e fornisce le funzioni che descrivono l'evoluzione delle variabili del sistema."},{label:"STEP 2",title:"PROGETTAZIONE",desc:"Il team traduce i requisiti in parametri tecnici, progettando e addestrando una ANN su misura tramite Reinforcement Learning su Digital Twin."},{label:"STEP 3",title:"INTEGRAZIONE",desc:"OptimAl viene installato a bordo su un piccolo computer di bordo, leggero e facilmente integrabile. I sensori raccolgono i dati in tempo reale."},{label:"STEP 4",title:"OTTIMIZZAZIONE",desc:"L'algoritmo lavora in autonomia senza necessità di connessione Internet: legge le variabili istante per istante e prende la decisione ottimale in tempo reale, continuamente."}],Ev=[{title:"Prestazioni al massimo",desc:"Sempre al limite ottimale possibile",detail:"Il sistema si adatta in tempo reale alle condizioni operative e ambientali, lavorando sempre al punto di ottimo senza intervento umano."},{title:"Obiettivi multipli",desc:"Tutti sotto controllo simultaneamente",detail:"Riduci consumi, emissioni e costi operativi senza rinunciare alle prestazioni. OptimAl bilancia tutti i parametri in ogni istante."},{title:"Sicurezza dei dati",desc:"Elaborazione 100% locale",detail:"Nessun dato viene trasmesso all'esterno. Elaborazione completamente onboard, piena conformità normativa garantita."},{title:"AI trasparente",desc:"Auditabile e tracciabile",detail:"Ogni decisione dell'algoritmo è tracciata e consultabile nella dashboard dedicata, in linea con i requisiti dell'AI Act europeo."},{title:"Integrazione semplice",desc:"Hardware compatto e non invasivo",detail:"Richiede solo un Single Board Computer leggero. Il team BluMentis supporta il cliente in tutte le fasi di installazione."}],kv=[{q:"I dati vengono trasmessi all'esterno?",a:"No. OptimAl elabora tutti i dati interamente in locale, a bordo del dispositivo. Nessuna connessione Internet richiesta, nessun dato condiviso con terzi."},{q:"Che hardware serve per installare OptimAl?",a:"Un piccolo computer di bordo compatto e leggero, facilmente integrabile su macchine e dispositivi (Single Board Computer). BluMentis fornisce supporto tecnico dedicato."},{q:"Posso scegliere io cosa ottimizzare?",a:"Sì. Sei tu a definire i parametri e gli obiettivi di ottimizzazione. Il team di BluMentis li traduce nella progettazione della rete neurale richiesta per il tuo caso."},{q:"Quanto tempo richiede la messa in opera?",a:"I tempi dipendono dalla complessità del sistema. Grazie al training su Digital Twin e al simulatore proprietario, i tempi di adattamento sono ridotti al minimo."},{q:"È conforme all'AI Act?",a:"Sì. OptimAl è progettato nel rispetto dell'AI Act europeo e delle normative vigenti in materia di intelligenza artificiale."}];function Av(){const[r,d]=E.useState(0),[p,c]=E.useState(null),[u,m]=E.useState(null),[h,v]=E.useState(window.innerWidth<=768);return E.useEffect(()=>{function x(){v(window.innerWidth<=768)}return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),n.jsxs("div",{className:"opa-root",children:[n.jsx("style",{children:Nv}),n.jsxs("section",{className:"opa-hero",children:[n.jsx("video",{className:"opa-hero-video",src:Sv,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),n.jsx("div",{className:"opa-hero-overlay"}),n.jsxs("div",{className:"opa-hero-content",children:[n.jsxs("div",{className:"opa-hero-badge",children:[n.jsx("span",{className:"opa-badge-dot"}),"AI Embedded · Real-time Optimization"]}),n.jsxs("h1",{className:"opa-hero-title",children:["Decisioni ottimali.",n.jsx("br",{}),n.jsx("span",{className:"opa-accent",children:"In ogni istante."})]}),n.jsx("p",{className:"opa-hero-sub",children:"L'algoritmo AI embedded che ottimizza in tempo reale il funzionamento di macchine e dispositivi, gestendo simultaneamente tutte le variabili in gioco — in modo continuo, autonomo e sicuro."})]})]}),(()=>{const x=[{icon:"🏭",name:"Barbieri Group"}];return n.jsxs("div",{className:"pla-trusted",children:[n.jsx("div",{className:"pla-trusted-label",children:"Già scelto da"}),n.jsx("div",{className:"pla-trusted-track",children:x.map((g,S)=>n.jsxs("div",{className:"pla-logo-pill",children:[n.jsx("div",{className:"pla-logo-icon",children:g.icon}),n.jsx("span",{className:"pla-logo-name",children:g.name})]},S))})]})})(),n.jsxs("div",{className:"opa-page",children:[n.jsx("div",{className:"opa-stats",children:[{val:"100%",lbl:"Dati elaborati in locale"},{val:"Real-time",lbl:"Decisioni istante per istante"},{val:"50+",lbl:"Variabili gestite simultaneamente"}].map(x=>n.jsxs("div",{className:"opa-stat",children:[n.jsx("span",{className:"opa-stat-val",children:x.val}),n.jsx("span",{className:"opa-stat-lbl",children:x.lbl})]},x.lbl))}),n.jsxs("div",{className:"opa-head",children:[n.jsxs("h2",{children:["Per chi è ",n.jsx("span",{className:"opa-accent",children:"OptimAl"}),"?"]}),n.jsx("div",{className:"opa-bar"})]}),n.jsxs("div",{className:"opa-perchi",children:[n.jsx("p",{className:"opa-perchi-text",children:"Progettato per sistemi complessi in cui le variabili in gioco sono numerose, la funzione da ottimizzare è troppo articolata per un approccio tradizionale e impossibile da gestire manualmente in tempo reale."}),n.jsx("div",{className:"opa-checks",children:["Funzionamento completamente offline","Integrazione onboard su hardware leggero","Decisioni trasparenti e tracciabili","Parametri di ottimizzazione definiti dal cliente","Conforme AI Act e normative vigenti"].map(x=>n.jsxs("div",{className:"opa-check",children:[n.jsx("span",{className:"opa-check-ico",children:"✓"}),n.jsx("span",{children:x})]},x))})]}),n.jsx("div",{className:"opa-pills",children:[["Ottimizzazione Real-time","opa-d1"],["100% Locale","opa-d2"],["AI Trasparente","opa-d3"],["AI Act Compliant","opa-d4"],["Multi-obiettivo","opa-d5"]].map(([x,g])=>n.jsx("div",{className:`opa-pill ${g}`,children:x},x))})]}),n.jsx("hr",{className:"opa-divider"}),n.jsxs("div",{className:"opa-page",children:[n.jsx("div",{className:"opa-head",children:n.jsxs("h2",{children:["Come ",n.jsx("span",{className:"opa-accent",children:"funziona?"})]})}),n.jsxs("div",{className:"opa-steps",children:[n.jsxs("div",{className:"opa-step-card",children:[n.jsx("div",{className:"opa-step-num",children:Ql[r].label}),n.jsx("h3",{className:"opa-step-title",children:Ql[r].title}),n.jsx("p",{className:"opa-step-desc",children:Ql[r].desc}),n.jsx("div",{className:"opa-dots",children:Ql.map((x,g)=>n.jsx("div",{className:`opa-dot${g===r?" active":""}`,onClick:()=>d(g)},g))})]}),n.jsx("button",{className:"opa-next-btn",onClick:()=>d(x=>(x+1)%Ql.length),children:"Prossimo →"})]})]}),n.jsx("hr",{className:"opa-divider"}),n.jsxs("div",{className:"opa-page",children:[n.jsx("div",{className:"opa-head",children:n.jsxs("h2",{children:["Benefici ",n.jsx("span",{className:"opa-accent",children:"Concreti"})]})}),n.jsx("ul",{className:"opa-benefits",children:Ev.map((x,g)=>n.jsxs("li",{onClick:()=>m(u===g?null:g),children:[n.jsxs("div",{className:"opa-benefit-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:x.title}),n.jsx("p",{children:x.desc})]}),h&&n.jsx("span",{className:"opa-benefit-arrow",children:u===g?"▲":"▼"})]}),n.jsxs("div",{className:"opa-bubble",children:[n.jsx("h4",{children:x.title}),n.jsx("p",{children:x.detail})]}),u===g&&n.jsx("div",{className:"opa-benefit-detail",children:x.detail})]},x.title))})]}),n.jsx("hr",{className:"opa-divider"}),n.jsxs("div",{className:"opa-page",children:[n.jsx("div",{className:"opa-head",children:n.jsxs("h2",{children:["Casi d'",n.jsx("span",{className:"opa-accent",children:"uso"})]})}),n.jsx("div",{className:"opa-cases",children:[{icon:"⚡",title:"Motori ibridi ed elettrici",desc:"Ottimizzazione della gestione energetica e delle prestazioni in tempo reale."},{icon:"🌡",title:"Climatizzazione ambienti chiusi",desc:"Controllo continuo di temperatura, umidità e consumo energetico."},{icon:"⛽",title:"Ottimizzazione combustibile",desc:"Riduzione dei consumi e delle emissioni su motori termici e sistemi di propulsione."},{icon:"🏭",title:"Ottimizzazione energetica industriale",desc:"Gestione efficiente di impianti e macchinari con molte variabili operative."},{icon:"🔩",title:"Macchinari su misura",desc:"Qualsiasi sistema con numerose variabili da controllare e una funzione obiettivo complessa."},{icon:"📡",title:"Sistemi di controllo embedded",desc:"Integrazione diretta su hardware compatto per applicazioni IoT e dispositivi autonomi."}].map(x=>n.jsxs("div",{className:"opa-case",children:[n.jsx("div",{className:"opa-case-icon",children:x.icon}),n.jsx("h3",{children:x.title}),n.jsx("p",{children:x.desc})]},x.title))})]}),n.jsx("hr",{className:"opa-divider"}),n.jsxs("div",{className:"opa-page",children:[n.jsx("div",{className:"opa-head",children:n.jsxs("h2",{children:["Dettagli ",n.jsx("span",{className:"opa-accent",children:"Tecnici"})]})}),n.jsx("div",{className:"opa-specs",children:[{title:"Algoritmo ▼",items:["Rete neurale artificiale complessa","Progettata su specifiche del cliente","Parametrizzata dal team AI BluMentis"]},{title:"Training ▼",items:["Reinforcement Learning","Digital Twin del dispositivo","Simulatore proprietario BluMentis"]},{title:"Hardware richiesto ▼",items:["Single Board Computer compatto","Nessun requisito computazionale elevato","Installazione supportata da BluMentis"]},{title:"Acquisizione dati ▼",items:["Lettura real-time via sensori","Non necessaria connessione Internet","Latenza minima garantita"]},{title:"Sicurezza ▼",items:["Elaborazione 100% locale","Nessun dato trasmesso all'esterno","Conforme normative vigenti"]},{title:"Conformità normativa ▼",items:["Progettato secondo AI Act europeo","Normative di settore applicabili","Decisioni auditabili e tracciabili"]}].map(x=>n.jsxs("div",{className:"opa-spec-card",children:[n.jsx("button",{className:"opa-spec-btn",children:x.title}),n.jsx("ul",{className:"opa-spec-tree",children:x.items.map(g=>n.jsx("li",{className:"opa-spec-item",children:g},g))})]},x.title))})]}),n.jsx("hr",{className:"opa-divider"}),n.jsxs("div",{className:"opa-page",children:[n.jsx("div",{className:"opa-head",children:n.jsxs("h2",{children:["Domande ",n.jsx("span",{className:"opa-accent",children:"frequenti"})]})}),n.jsx("div",{className:"opa-faq",children:kv.map((x,g)=>n.jsxs("div",{className:`opa-faq-item${p===g?" open":""}`,children:[n.jsxs("button",{className:"opa-faq-q",onClick:()=>c(p===g?null:g),children:[n.jsx("span",{children:x.q}),n.jsx("span",{className:"opa-faq-arrow",children:"▾"})]}),n.jsx("div",{className:"opa-faq-a",children:x.a})]},x.q))})]}),n.jsx("section",{className:"opa-cta",children:n.jsxs("div",{className:"opa-cta-inner",children:[n.jsxs("h2",{className:"opa-cta-title",children:["Vuoi ottimizzare le prestazioni",n.jsx("br",{}),n.jsx("span",{className:"opa-accent",children:"del tuo sistema?"})]}),n.jsxs("p",{className:"opa-cta-sub",children:["Contattaci per scoprire come ",n.jsx("strong",{children:"OptimAl"})," può essere integrato nel tuo dispositivo o macchinario. Il team di BluMentis analizzerà il tuo caso d'uso e ti proporrà la soluzione più idonea."]}),n.jsxs("div",{className:"opa-cta-btns",children:[n.jsx("button",{className:"opa-cta-primary",children:"Richiedi una Consulenza"}),n.jsx(Gt,{to:"/contatti",className:"opa-cta-secondary",children:"Contattaci"})]})]})}),n.jsxs("footer",{className:"opa-footer",children:[n.jsxs("div",{className:"opa-footer-inner",children:[n.jsxs("div",{className:"opa-footer-brand",children:[n.jsx("h3",{children:"OptimAl"}),n.jsx("p",{children:"Algoritmo AI embedded per l'ottimizzazione continua e autonoma di macchine e dispositivi complessi, in tempo reale."}),n.jsx("span",{className:"opa-footer-tag",children:"Offline · Real-time · AI Act Compliant"})]}),n.jsxs("div",{className:"opa-footer-links",children:[n.jsx("a",{href:"#",children:"↓ Scarica Brochure PDF"}),n.jsx("a",{href:"#",children:"Privacy Policy"}),n.jsx("a",{href:"#",children:"Contatti"})]})]}),n.jsxs("div",{className:"opa-footer-bottom",children:[n.jsxs("span",{children:["© ",new Date().getFullYear()," OptimAl · BluMentis. Tutti i diritti riservati."]}),n.jsx("span",{children:"Made in Italy 🇮🇹"})]})]}),n.jsx(Qt,{})]})}const Tv=`
  .aga-root {
    --teal:      oklch(66% 0.18 185);
    --teal-dim:  oklch(66% 0.18 185 / 0.12);
    --teal-bdr:  oklch(66% 0.18 185 / 0.30);
    --teal-glow: oklch(66% 0.18 185 / 0.24);
    --teal-hi:   oklch(78% 0.14 185);
    --violet:    oklch(65% 0.20 290);
    --bg:        #080b10;
    --surface:   #0d1118;
    --raised:    #121820;
    --border:    rgba(255,255,255,.07);
    --text:      #edf2f7;
    --text-2:    #8ba0b8;
    --text-3:    #475a70;
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.42);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .aga-root *, .aga-root *::before, .aga-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .aga-root h1,.aga-root h2,.aga-root h3,.aga-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .aga-hero {
    padding: 120px 32px 90px;
    text-align: center; position: relative; overflow: hidden;
  }
  .aga-hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 65% 50% at 50% 0%, oklch(66% 0.18 185 / 0.09) 0%, transparent 68%);
    pointer-events: none;
  }
  .aga-hero-content {
    position: relative; z-index: 2;
    color: white; padding: 0 20px; max-width: 860px;
    margin: 0 auto;
    display: flex; flex-direction: column; align-items: center;
  }
  .aga-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
    backdrop-filter: blur(8px);
  }
  .aga-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--teal);
    animation: dotPulse 2s ease-in-out infinite;
  }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }
  .aga-hero-title {
    font-size: clamp(38px, 6vw, 72px);
    font-weight: 800; line-height: 1.06; margin-bottom: 10px; letter-spacing: -0.025em;
  }
  .aga-hero-subtitle {
    font-size: clamp(18px, 2.6vw, 28px);
    font-weight: 700; letter-spacing: -0.01em; margin-bottom: 22px;
    font-family: 'Syne', sans-serif;
  }
  .aga-accent {
    background: linear-gradient(135deg, var(--teal-hi), var(--violet));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .aga-hero-sub {
    font-size: 16px; opacity: .70; max-width: 600px; margin: 0 auto 36px;
    line-height: 1.8; font-weight: 300;
  }
  .aga-hero-stats {
    position: relative; z-index: 2;
    display: flex; gap: 16px; margin-top: 52px; flex-wrap: wrap; justify-content: center;
  }
  .aga-hero-stat {
    background: rgba(8,11,16,.65); border: 1px solid rgba(255,255,255,.11);
    backdrop-filter: blur(14px); border-radius: 18px;
    padding: 20px 32px; text-align: center; min-width: 136px; transition: .28s;
  }
  .aga-hero-stat:hover { border-color: var(--teal-bdr); background: rgba(8,11,16,.82); transform: translateY(-3px); }
  .aga-hero-stat-val {
    display: block; font-size: 30px; font-weight: 800;
    font-family: 'Syne', sans-serif; color: var(--teal); line-height: 1;
  }
  .aga-hero-stat-lbl {
    display: block; font-size: 12px; color: rgba(255,255,255,.46); margin-top: 6px; letter-spacing: .04em;
  }

  /* ── PAGE ── */
  .aga-page { max-width: 1100px; margin: 0 auto; padding: 80px 32px; }

  /* ── SECTION HEAD ── */
  .aga-head { margin-bottom: 48px; }
  .aga-head h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -0.025em; }
  .aga-head h2 .aga-accent { -webkit-text-fill-color: unset; background: none; color: var(--teal-hi); }
  .aga-bar {
    width: 100px; height: 4px; margin-top: 14px; border-radius: 99px;
    background: linear-gradient(90deg, var(--teal), oklch(66% 0.18 185 / 0.25));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100%{opacity:1;} 50%{opacity:.28;} }

  /* ── DIVIDER ── */
  .aga-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── STEPS ── */
  .aga-steps-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 8px;
  }
  .aga-step {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; padding: 32px 28px; transition: .28s; position: relative; overflow: hidden;
  }
  .aga-step::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--teal), var(--violet));
    opacity: 0; transition: .28s;
  }
  .aga-step:hover { border-color: var(--teal-bdr); transform: translateY(-3px); box-shadow: var(--shadow); }
  .aga-step:hover::before { opacity: 1; }
  .aga-step-num {
    font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
    color: var(--teal); margin-bottom: 12px; display: block;
  }
  .aga-step h3 { font-size: 18px; font-weight: 800; margin-bottom: 10px; color: var(--text); }
  .aga-step p  { font-size: 14px; color: var(--text-2); line-height: 1.75; }
  .aga-step-tag {
    display: inline-block; margin-top: 14px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .08em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px;
  }

  /* ── FEATURES GRID ── */
  .aga-features { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
  .aga-feature {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px; transition: .28s; position: relative; overflow: hidden;
  }
  .aga-feature:hover { border-color: var(--teal-bdr); transform: translateY(-4px); box-shadow: var(--shadow); }
  .aga-feature-icon {
    width: 42px; height: 42px; border-radius: 12px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; margin-bottom: 16px;
  }
  .aga-feature h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .aga-feature p  { font-size: 13px; color: var(--text-3); line-height: 1.7; }
  .aga-feature-tag {
    display: inline-block; margin-top: 12px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); font-size: 11px; padding: 3px 10px; border-radius: 999px;
  }

  /* ── SOLUTIONS ── */
  .aga-solutions { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .aga-solution {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 36px 32px; transition: .32s; position: relative; overflow: hidden;
  }
  .aga-solution::after {
    content: ""; position: absolute; inset: 0; border-radius: 22px;
    background: linear-gradient(135deg, oklch(66% 0.18 185 / 0.06) 0%, oklch(65% 0.20 290 / 0.06) 100%);
    opacity: 0; transition: .32s;
  }
  .aga-solution:hover { border-color: var(--teal-bdr); transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,.5); }
  .aga-solution:hover::after { opacity: 1; }
  .aga-solution-name {
    font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800;
    margin-bottom: 4px; letter-spacing: -0.02em;
  }
  .aga-solution-name .aga-accent { -webkit-text-fill-color: unset; background: none; color: var(--teal-hi); }
  .aga-solution-role {
    font-size: 13px; font-weight: 600; color: var(--teal); text-transform: uppercase;
    letter-spacing: .1em; margin-bottom: 16px; display: block;
  }
  .aga-solution p { font-size: 14px; color: var(--text-2); line-height: 1.75; margin-bottom: 20px; }
  .aga-solution-checks { display: flex; flex-direction: column; gap: 10px; }
  .aga-sol-check { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text); }
  .aga-sol-check-ico {
    width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal); display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700;
  }

  /* ── BENEFITS ── */
  .aga-benefits {
    list-style: none; display: flex; flex-direction: column; gap: 0; width: 460px;
  }
  .aga-benefits li {
    background: var(--surface); border: 1px solid var(--border);
    padding: 22px 24px; border-radius: var(--radius);
    position: relative; cursor: pointer; transition: .22s;
  }
  .aga-benefits li h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
  .aga-benefits li p  { font-size: 13px; color: var(--text-3); }
  .aga-benefits li:hover { border-color: oklch(66% 0.18 185 / 0.40); background: oklch(66% 0.18 185 / 0.07); }
  .aga-benefit-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .aga-benefit-arrow { color: var(--text-3); font-size: 11px; flex-shrink: 0; margin-top: 2px; }
  .aga-benefit-detail {
    font-size: 13px; color: var(--text-2); line-height: 1.7;
    margin-top: 10px; padding-top: 10px;
    border-top: 1px solid var(--border);
    animation: fadeInDetail .2s ease;
  }
  @keyframes fadeInDetail { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  /* Bolla desktop */
  .aga-benefits li .aga-bubble {
    position: absolute; left: calc(100% + 18px); top: 50%; transform: translateY(-50%) scale(0.85);
    width: 260px; background: oklch(66% 0.18 185 / 0.12);
    border: 1px solid oklch(66% 0.18 185 / 0.38); border-radius: 16px;
    padding: 20px 22px; pointer-events: none;
    opacity: 0; transition: opacity .22s, transform .28s cubic-bezier(.34,1.56,.64,1); z-index: 10;
  }
  .aga-benefits li:hover .aga-bubble { opacity: 1; transform: translateY(-50%) scale(1); }
  .aga-bubble::before {
    content: ""; position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
    border: 8px solid transparent; border-right-color: oklch(66% 0.18 185 / 0.38);
  }
  .aga-bubble h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800; color: var(--teal-hi); margin-bottom: 8px; }
  .aga-bubble p  { font-size: 13px; color: #8ba0b8; line-height: 1.7; }

  /* ── SPEC TABLE ── */
  .aga-spec-table { width: 100%; border-collapse: collapse; }
  .aga-spec-table tr { border-bottom: 1px solid var(--border); transition: .18s; }
  .aga-spec-table tr:last-child { border-bottom: none; }
  .aga-spec-table tr:hover { background: oklch(66% 0.18 185 / 0.05); }
  .aga-spec-table td { padding: 18px 20px; font-size: 14px; }
  .aga-spec-table td:first-child { color: var(--text-3); font-weight: 600; width: 220px; text-transform: uppercase; font-size: 12px; letter-spacing: .06em; }
  .aga-spec-table td:last-child { color: var(--text); }
  .aga-spec-wrap {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; overflow: hidden; box-shadow: var(--shadow);
  }

  /* ── CTA ── */
  .aga-cta {
    background: linear-gradient(135deg, #050709 0%, oklch(14% 0.12 185) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 100px 20px; margin-top: 80px;
  }
  .aga-cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
  .aga-cta-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
  .aga-cta-title .aga-accent { -webkit-text-fill-color: unset; background: none; color: var(--teal-hi); }
  .aga-cta-sub { opacity: .70; margin-bottom: 38px; line-height: 1.8; font-size: 15px; }
  .aga-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .aga-cta-primary {
    background: var(--teal); color: #080b10;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .aga-cta-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--teal-glow); }

  /* ── PILLS ── */
  .aga-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 44px; }
  .aga-pill {
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); padding: 9px 18px; border-radius: 10px;
    font-weight: 500; font-size: 13px; opacity: 0;
    animation: fadeUpLoop 4s ease infinite;
  }
  @keyframes fadeUpLoop {
    0%   { opacity:0; transform:translateY(22px); }
    20%  { opacity:1; transform:translateY(0); }
    80%  { opacity:1; transform:translateY(0); }
    100% { opacity:0; transform:translateY(-18px); }
  }
  .aga-d1{animation-delay:0s;} .aga-d2{animation-delay:.5s;} .aga-d3{animation-delay:1s;}
  .aga-d4{animation-delay:1.5s;} .aga-d5{animation-delay:2s;}

  /* ── FOOTER ── */
  .aga-footer {
    background: #03050a; border-top: 1px solid rgba(255,255,255,.05);
    padding: 60px 32px 36px; color: var(--text-3);
  }
  .aga-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .aga-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .aga-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 300px; }
  .aga-footer-tag {
    display: inline-block; margin-top: 14px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .aga-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .aga-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .aga-footer-links a:hover { color: var(--teal-hi); }
  .aga-footer-bottom {
    max-width: 1100px; margin: 32px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .aga-features { grid-template-columns: 1fr 1fr; }
    .aga-solutions { grid-template-columns: 1fr; }
  }
  @media (max-width: 700px) {
    .aga-hero { padding: 80px 20px 60px; }
    .aga-hero-stats { margin-top: 32px; gap: 10px; }
    .aga-hero-stat { padding: 12px 16px; min-width: 90px; }
    .aga-hero-stat-val { font-size: 20px; }

    .aga-steps-grid { grid-template-columns: 1fr; }
    .aga-features { grid-template-columns: 1fr; }

    .aga-benefits { width: 100%; }
    .aga-benefits li .aga-bubble { display: none; }

    .aga-solutions { grid-template-columns: 1fr; }
    .aga-solution { padding: 24px 20px; }
    .aga-solution-name { font-size: 24px; }

    .aga-spec-table td { padding: 14px 12px; font-size: 13px; }
    .aga-spec-table td:first-child { width: 110px; font-size: 11px; }

    .aga-page { padding: 60px 20px; }

    .aga-cta { padding: 64px 20px; }
    .aga-cta-btns { flex-direction: column; align-items: center; }
    .aga-cta-primary { width: 100%; }

    .aga-footer-inner { grid-template-columns: 1fr; }
    .aga-footer-links { align-items: flex-start; }
    .aga-footer-bottom { flex-direction: column; gap: 4px; }
  }
`,Cv=[{title:"Meno lavoro manuale",desc:"Fino al 70% in meno",detail:"Le attività ripetitive vengono gestite autonomamente dagli agenti, liberando il tuo team per compiti ad alto valore."},{title:"Operatività continua",desc:"H24, 365 giorni",detail:"Gli agenti non dormono. Coprono ogni richiesta su tutti i canali, in qualsiasi fuso orario e lingua."},{title:"Errori ridotti",desc:"Conoscenza sempre aggiornata",detail:"Solo contenuti approvati vengono usati nelle risposte. Zero informazioni non autorizzate o obsolete."},{title:"Onboarding rapidissimo",desc:"Operativo in breve tempo",detail:"Grazie all'architettura modulare, la piattaforma si configura e si mette in produzione in tempi record."},{title:"Dati al sicuro",desc:"Cloud privato aziendale",detail:"Nessun dato esce dal tuo perimetro. Architettura isolata, conforme alle normative sulla privacy."},{title:"Migliora nel tempo",desc:"Apprendimento continuo",detail:"Ogni interazione arricchisce la knowledge base. Il sistema diventa più preciso e autonomo ad ogni ciclo."}];function Ov(){const[r,d]=E.useState(null),[p,c]=E.useState(window.innerWidth<=768);return E.useEffect(()=>{function u(){c(window.innerWidth<=768)}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),n.jsxs("div",{className:"aga-root",children:[n.jsx("style",{children:Tv}),n.jsxs("section",{className:"aga-hero",children:[n.jsxs("div",{className:"aga-hero-content",children:[n.jsxs("div",{className:"aga-hero-badge",children:[n.jsx("span",{className:"aga-badge-dot"}),"SonIA · OlivIA — Piattaforme Agentiche"]}),n.jsx("h1",{className:"aga-hero-title",children:"Piattaforme Agentiche"}),n.jsxs("p",{className:"aga-hero-subtitle",children:["Assistenti al lavoro. ",n.jsx("span",{className:"aga-accent",children:"Tu al valore aggiunto."})]}),n.jsx("p",{className:"aga-hero-sub",children:"Le organizzazioni che crescono più velocemente hanno una cosa in comune: processi che funzionano da soli. Le nostre piattaforme portano intelligenza autonoma dentro le tue operation — riducendo costi, errori e tempi di risposta."})]}),n.jsx("div",{className:"aga-hero-stats",children:[{val:"70%",lbl:"Riduzione attività manuali"},{val:"24/7",lbl:"Operatività continua"},{val:"< 1 gg",lbl:"Tempo di onboarding"}].map(u=>n.jsxs("div",{className:"aga-hero-stat",children:[n.jsx("span",{className:"aga-hero-stat-val",children:u.val}),n.jsx("span",{className:"aga-hero-stat-lbl",children:u.lbl})]},u.lbl))})]}),n.jsxs("div",{className:"aga-page",children:[n.jsxs("div",{className:"aga-head",children:[n.jsxs("h2",{children:["Come ",n.jsx("span",{className:"aga-accent",children:"funziona"}),"?"]}),n.jsx("div",{className:"aga-bar"})]}),n.jsx("div",{className:"aga-steps-grid",children:[{num:"01",title:"Apprendimento",desc:"La piattaforma assimila documentazione e dati aziendali, costruendo una base di conoscenza approvata e verificata.",tag:null},{num:"02",title:"Integrazione",desc:"Si connette ai tuoi sistemi aziendali — SW gestionali, sistemi di ticketing — e opera direttamente nei flussi esistenti.",tag:"Su richiesta"},{num:"03",title:"Operatività",desc:"Gli agenti gestiscono richieste h24, in qualsiasi lingua, su tutti i canali. Se necessario, coinvolgono il tuo personale.",tag:null},{num:"04",title:"Miglioramento",desc:"Ogni interazione arricchisce la conoscenza della piattaforma. Il sistema diventa più preciso nel tempo.",tag:null}].map(u=>n.jsxs("div",{className:"aga-step",children:[n.jsx("span",{className:"aga-step-num",children:u.num}),n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.desc}),u.tag&&n.jsx("span",{className:"aga-step-tag",children:u.tag})]},u.num))})]}),n.jsx("hr",{className:"aga-divider"}),n.jsxs("div",{className:"aga-page",children:[n.jsx("div",{className:"aga-head",children:n.jsxs("h2",{children:["Funzionalità ",n.jsx("span",{className:"aga-accent",children:"principali"})]})}),n.jsx("div",{className:"aga-features",children:[{icon:"🤝",title:"Orchestrazione multi-agente",desc:"Più agenti collaborano in parallelo per gestire scenari complessi e ad alto volume.",tag:null},{icon:"✅",title:"Contenuti approvati",desc:"Ogni informazione viene validata prima di essere memorizzata. Nessuna risposta non autorizzata.",tag:null},{icon:"↗",title:"Escalation intelligente",desc:"Quando l'agente non conosce la risposta, coinvolge il personale competente e apprende dall'interazione.",tag:null},{icon:"🌐",title:"Multilingua nativo",desc:"Comprende e risponde in qualsiasi lingua, adattandosi automaticamente all'interlocutore.",tag:null},{icon:"🔗",title:"Integrazione sistemi aziendali",desc:"Si connette ai software esistenti per eseguire azioni concrete: ordini, offerte, notifiche.",tag:"Su richiesta"},{icon:"🔒",title:"Sicurezza e privacy",desc:"Dati residenti su cloud privato aziendale. Le informazioni non escono mai dal tuo perimetro.",tag:null}].map(u=>n.jsxs("div",{className:"aga-feature",children:[n.jsx("div",{className:"aga-feature-icon",children:u.icon}),n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.desc}),u.tag&&n.jsx("span",{className:"aga-feature-tag",children:u.tag})]},u.title))}),n.jsx("div",{className:"aga-pills",children:[["Autonomia operativa","aga-d1"],["Zero downtime","aga-d2"],["Privacy garantita","aga-d3"],["Multilingua","aga-d4"],["Apprendimento continuo","aga-d5"]].map(([u,m])=>n.jsx("div",{className:`aga-pill ${m}`,children:u},u))})]}),n.jsx("hr",{className:"aga-divider"}),n.jsxs("div",{className:"aga-page",children:[n.jsx("div",{className:"aga-head",children:n.jsxs("h2",{children:["Soluzioni ",n.jsx("span",{className:"aga-accent",children:"disponibili"})]})}),n.jsx("div",{className:"aga-solutions",children:[{name:"Son",accent:"IA",role:"Assistenza clienti & ticketing",desc:"Gestisce richieste, smista ticket e risolve problemi in autonomia — h24, su tutti i canali.",checks:["Risposta immediata sullo stesso canale","Escalation automatica al team interno","Apprendimento continuo dai casi risolti"]},{name:"Oliv",accent:"IA",role:"Knowledge base intelligente",desc:"Trasforma la conoscenza aziendale in un patrimonio accessibile, sempre aggiornato e verificato.",checks:["Contenuti approvati e validati","Ricerca semantica avanzata","Predisposizione documentazione in automatico"]}].map(u=>n.jsxs("div",{className:"aga-solution",children:[n.jsxs("div",{className:"aga-solution-name",children:[u.name,n.jsx("span",{className:"aga-accent",children:u.accent})]}),n.jsx("span",{className:"aga-solution-role",children:u.role}),n.jsx("p",{children:u.desc}),n.jsx("div",{className:"aga-solution-checks",children:u.checks.map(m=>n.jsxs("div",{className:"aga-sol-check",children:[n.jsx("span",{className:"aga-sol-check-ico",children:"✓"}),n.jsx("span",{children:m})]},m))})]},u.name))})]}),n.jsx("hr",{className:"aga-divider"}),n.jsxs("div",{className:"aga-page",children:[n.jsx("div",{className:"aga-head",children:n.jsxs("h2",{children:["Benefici ",n.jsx("span",{className:"aga-accent",children:"concreti"})]})}),n.jsx("ul",{className:"aga-benefits",children:Cv.map((u,m)=>n.jsxs("li",{onClick:()=>d(r===m?null:m),children:[n.jsxs("div",{className:"aga-benefit-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.desc})]}),p&&n.jsx("span",{className:"aga-benefit-arrow",children:r===m?"▲":"▼"})]}),n.jsxs("div",{className:"aga-bubble",children:[n.jsx("h4",{children:u.title}),n.jsx("p",{children:u.detail})]}),r===m&&n.jsx("div",{className:"aga-benefit-detail",children:u.detail})]},u.title))})]}),n.jsx("hr",{className:"aga-divider"}),n.jsxs("div",{className:"aga-page",children:[n.jsx("div",{className:"aga-head",children:n.jsxs("h2",{children:["Specifiche ",n.jsx("span",{className:"aga-accent",children:"tecniche"})]})}),n.jsx("div",{className:"aga-spec-wrap",children:n.jsx("table",{className:"aga-spec-table",children:n.jsx("tbody",{children:[["Deployment","Cloud privato aziendale"],["Disponibilità","24/7 · 365 giorni"],["Lingue","Tutte — risposta nella lingua dell'utente"],["Canali","WhatsApp, Email, Sito web (su richiesta)"],["Integrazioni","SW aziendali, API custom — su richiesta"],["Sicurezza","Dati isolati · Nessun accesso esterno"]].map(([u,m])=>n.jsxs("tr",{children:[n.jsx("td",{children:u}),n.jsx("td",{children:m})]},u))})})})]}),n.jsx("section",{className:"aga-cta",children:n.jsxs("div",{className:"aga-cta-inner",children:[n.jsxs("h2",{className:"aga-cta-title",children:["Pronto a innovare la tua azienda",n.jsx("br",{}),n.jsx("span",{className:"aga-accent",children:"con assistenti virtuali?"})]}),n.jsx("p",{className:"aga-cta-sub",children:"Richiedi una demo personalizzata e scopri quale piattaforma agentica si adatta meglio ai tuoi processi."}),n.jsx("div",{className:"aga-cta-btns",children:n.jsx("button",{className:"aga-cta-primary",children:"Richiedi una Demo"})})]})}),n.jsxs("footer",{className:"aga-footer",children:[n.jsxs("div",{className:"aga-footer-inner",children:[n.jsxs("div",{className:"aga-footer-brand",children:[n.jsx("h3",{children:"Piattaforme Agentiche"}),n.jsx("p",{children:"SonIA e OlivIA — intelligenza autonoma dentro le tue operation, per processi che funzionano da soli."}),n.jsx("span",{className:"aga-footer-tag",children:"Cloud Privato · 24/7 · Made in Italy"})]}),n.jsxs("div",{className:"aga-footer-links",children:[n.jsx("a",{href:"#",children:"↓ Scarica Brochure PDF"}),n.jsx("a",{href:"#",children:"Privacy Policy"}),n.jsx("a",{href:"#",children:"Contatti"})]})]}),n.jsxs("div",{className:"aga-footer-bottom",children:[n.jsxs("span",{children:["© ",new Date().getFullYear()," BluMentis. Tutti i diritti riservati."]}),n.jsx("span",{children:"Made in Italy 🇮🇹"})]})]}),n.jsx(Qt,{})]})}const Mv=`
  .svc-root {
    --gold:      oklch(62% 0.14 80);
    --gold-dim:  oklch(62% 0.14 80 / 0.13);
    --gold-bdr:  oklch(62% 0.14 80 / 0.32);
    --gold-glow: oklch(62% 0.14 80 / 0.22);
    --gold-hi:   oklch(74% 0.11 80);
    --bg:        #0b0c09;
    --surface:   #111209;
    --raised:    #181a10;
    --border:    rgba(255,255,255,.07);
    --text:      #f0ede6;
    --text-2:    #9a9585;
    --text-3:    #565044;
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.42);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .svc-root *, .svc-root *::before, .svc-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .svc-root h1,.svc-root h2,.svc-root h3,.svc-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .svc-hero {
    padding: 120px 32px 90px;
    text-align: center; position: relative; overflow: hidden;
  }
  .svc-hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 55% at 50% 0%, oklch(62% 0.14 80 / 0.10) 0%, transparent 70%);
    pointer-events: none;
  }
  .svc-hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
  .svc-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
  }
  .svc-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: dotPulse 2s ease-in-out infinite; }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }
  .svc-hero h1 {
    font-size: clamp(38px, 6vw, 68px); font-weight: 800;
    line-height: 1.06; letter-spacing: -0.025em; margin-bottom: 16px;
  }
  .svc-accent {
    background: linear-gradient(135deg, var(--gold-hi), oklch(58% 0.16 60));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .svc-hero-sub {
    font-size: 17px; color: var(--text-2); line-height: 1.8; max-width: 580px;
    margin: 0 auto 40px; font-weight: 300;
  }
  .svc-hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .svc-btn-primary {
    background: var(--gold); color: #0b0c09;
    padding: 14px 30px; border-radius: var(--radius);
    font-weight: 700; font-size: 15px; border: none; cursor: pointer;
    transition: .22s; font-family: 'DM Sans', sans-serif;
  }
  .svc-btn-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--gold-glow); }
  .svc-btn-ghost {
    background: transparent; color: var(--text);
    padding: 14px 30px; border-radius: var(--radius); font-weight: 500; font-size: 15px;
    border: 2px solid rgba(255,255,255,.20); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif;
  }
  .svc-btn-ghost:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.45); }

  /* ── PAGE ── */
  .svc-page { max-width: 1000px; margin: 0 auto; padding: 72px 32px; }

  /* ── SECTION HEAD ── */
  .svc-head { margin-bottom: 44px; }
  .svc-head h2 { font-size: clamp(26px, 3.6vw, 40px); font-weight: 800; letter-spacing: -0.025em; }
  .svc-head h2 .svc-accent { -webkit-text-fill-color: unset; background: none; color: var(--gold-hi); }
  .svc-bar {
    width: 80px; height: 4px; margin-top: 12px; border-radius: 99px;
    background: linear-gradient(90deg, var(--gold), oklch(62% 0.14 80 / 0.22));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100%{opacity:1;} 50%{opacity:.28;} }

  /* ── DIVIDER ── */
  .svc-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── MODELLI ── */
  .svc-models { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .svc-model {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 36px 32px; transition: .32s; position: relative; overflow: hidden;
  }
  .svc-model::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold), oklch(58% 0.16 60));
    opacity: 0; transition: .32s;
  }
  .svc-model:hover { border-color: var(--gold-bdr); transform: translateY(-4px); box-shadow: var(--shadow); }
  .svc-model:hover::before { opacity: 1; }
  .svc-model-tag {
    display: inline-block; margin-bottom: 8px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold-hi); font-size: 10px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .svc-model h3 { font-size: 20px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
  .svc-model-sub { font-size: 13px; color: var(--gold-hi); margin-bottom: 18px; font-weight: 500; }
  .svc-model p { font-size: 14px; color: var(--text-2); line-height: 1.78; margin-bottom: 22px; }
  .svc-model-checks { display: flex; flex-direction: column; gap: 10px; }
  .svc-model-check { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text); }
  .svc-model-check-ico {
    width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold); display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700;
  }

  /* ── PROCESSO ── */
  .svc-process { display: flex; flex-direction: column; gap: 0; position: relative; }
  .svc-process::before {
    content: ""; position: absolute; left: 19px; top: 0; bottom: 0;
    width: 2px; background: linear-gradient(to bottom, var(--gold-bdr), transparent);
  }
  .svc-proc-step { display: flex; gap: 24px; align-items: flex-start; padding-bottom: 36px; position: relative; }
  .svc-proc-step:last-child { padding-bottom: 0; }
  .svc-proc-num {
    width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
    background: var(--surface); border: 1px solid var(--gold-bdr);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800;
    color: var(--gold); z-index: 1; position: relative;
    transition: .28s;
  }
  .svc-proc-step:hover .svc-proc-num { background: var(--gold-dim); border-color: var(--gold); }
  .svc-proc-body { padding-top: 8px; }
  .svc-proc-body h3 { font-size: 17px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
  .svc-proc-body p { font-size: 14px; color: var(--text-2); line-height: 1.75; }

  /* ── CTA ── */
  .svc-cta {
    background: linear-gradient(135deg, #070808 0%, oklch(14% 0.09 80) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 90px 20px; margin-top: 80px;
  }
  .svc-cta-inner { max-width: 680px; margin: 0 auto; text-align: center; }
  .svc-cta-title { font-size: clamp(24px, 3.8vw, 38px); font-weight: 800; margin-bottom: 16px; letter-spacing: -0.02em; }
  .svc-cta-title .svc-accent { -webkit-text-fill-color: unset; background: none; color: var(--gold-hi); }
  .svc-cta-sub { opacity: .68; margin-bottom: 36px; line-height: 1.8; font-size: 15px; }
  .svc-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .svc-cta-primary {
    background: var(--gold); color: #0b0c09;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .svc-cta-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--gold-glow); }
  .svc-cta-secondary {
    background: transparent; color: white; padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .svc-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }

  /* ── FOOTER ── */
  .svc-footer {
    background: #050606; border-top: 1px solid rgba(255,255,255,.05);
    padding: 56px 32px 32px; color: var(--text-3);
  }
  .svc-footer-inner {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .svc-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .svc-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 280px; }
  .svc-footer-tag {
    display: inline-block; margin-top: 12px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .svc-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .svc-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .svc-footer-links a:hover { color: var(--gold-hi); }
  .svc-footer-bottom {
    max-width: 1000px; margin: 28px auto 0; padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .38;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .svc-models { grid-template-columns: 1fr; }
    .svc-page { padding: 56px 20px; }
    .svc-footer-inner { grid-template-columns: 1fr; }
    .svc-footer-links { align-items: flex-start; }
    .svc-hero { padding: 100px 20px 72px; }
  }
    @media (max-width: 700px) {
  .svc-hero { padding: 80px 20px 60px; }
  .svc-hero h1 { font-size: clamp(30px, 8vw, 48px); }
  .svc-hero-sub { font-size: 14px; }
  .svc-hero-cta { flex-direction: column; }
  .svc-btn-primary, .svc-btn-ghost { width: 100%; text-align: center; }

  .svc-models { grid-template-columns: 1fr; }
  .svc-model { padding: 24px 20px; }

  .svc-page { padding: 48px 16px; }

  .svc-cta { padding: 56px 16px; }
  .svc-cta-btns { flex-direction: column; align-items: center; }
  .svc-cta-primary, .svc-cta-secondary { width: 100%; text-align: center; justify-content: center; }

  .svc-footer-inner { grid-template-columns: 1fr; }
  .svc-footer-links { align-items: flex-start; }
  .svc-footer-bottom { flex-direction: column; gap: 4px; }
}
`,Dv=[{n:"01",title:"Ascolto",desc:"Capiamo il tuo problema, il contesto e gli obiettivi di business. Nessuna soluzione standard — partiamo da ciò che conta davvero per te."},{n:"02",title:"Proposta",desc:"Definiamo insieme il modello di collaborazione più adatto e la soluzione tecnica. Trasparenza totale su tempi, costi e architettura."},{n:"03",title:"Sviluppo",desc:"Costruiamo in modo iterativo, con il cliente coinvolto in ogni fase chiave. Nessuna sorpresa a fine progetto."},{n:"04",title:"Rilascio",desc:"Consegna, integrazione nei sistemi esistenti e supporto post-lancio. Siamo presenti anche dopo il go-live."}];function _v(){return n.jsxs("div",{className:"svc-root",children:[n.jsx("style",{children:Mv}),n.jsx("section",{className:"svc-hero",children:n.jsxs("div",{className:"svc-hero-inner",children:[n.jsxs("div",{className:"svc-hero-badge",children:[n.jsx("span",{className:"svc-badge-dot"}),"Sviluppo su misura · AI Custom"]}),n.jsxs("h1",{children:["Diamo forma",n.jsx("br",{}),n.jsx("span",{className:"svc-accent",children:"alle tue idee"})]}),n.jsx("p",{className:"svc-hero-sub",children:"Hai un'idea che nessun prodotto standard riesce a soddisfare? Lavoriamo insieme per trasformarla in una soluzione AI concreta — con tempi rapidi, costi calibrati e una tecnologia costruita per durare."}),n.jsxs("div",{className:"svc-hero-cta",children:[n.jsx(Gt,{to:"/contatti",className:"svc-btn-primary",children:"Raccontaci il tuo progetto"}),n.jsx("a",{href:"#come-lavoriamo",className:"svc-btn-ghost",children:"Scopri come lavoriamo"})]})]})}),n.jsx("hr",{className:"svc-divider"}),n.jsxs("div",{className:"svc-page ",id:"come-lavoriamo",children:[n.jsxs("div",{className:"svc-head",children:[n.jsxs("h2",{children:["Due modelli di ",n.jsx("span",{className:"svc-accent",children:"collaborazione"})]}),n.jsx("div",{className:"svc-bar"})]}),n.jsx("div",{className:"svc-models",children:[{tag:"Co-sviluppo allineato",title:"La tua visione, la nostra roadmap",sub:"Costi altamente competitivi",desc:"Il progetto si sviluppa nella direzione della nostra visione tecnologica. Il cliente beneficia di costi ridotti grazie alla condivisione della roadmap.",checks:["Tempi di sviluppo più rapidi","Roadmap condivisa","Investimento ottimizzato"]},{tag:"Sviluppo esclusivo",title:"Una soluzione solo tua",sub:"Unicità garantita, dedicato a te",desc:"Per progetti ad alto grado di personalizzazione e con vincolo di unicità. La soluzione è sviluppata esclusivamente per te, con condizioni concordate ad hoc.",checks:["Sviluppo riservato al cliente","Massima personalizzazione","Unicità dell'architettura"]}].map(r=>n.jsxs("div",{className:"svc-model",children:[n.jsx("span",{className:"svc-model-tag",children:r.tag}),n.jsx("h3",{children:r.title}),n.jsx("div",{className:"svc-model-sub",children:r.sub}),n.jsx("p",{children:r.desc}),n.jsx("div",{className:"svc-model-checks",children:r.checks.map(d=>n.jsxs("div",{className:"svc-model-check",children:[n.jsx("span",{className:"svc-model-check-ico",children:"✓"}),n.jsx("span",{children:d})]},d))})]},r.tag))})]}),n.jsx("hr",{className:"svc-divider"}),n.jsxs("div",{className:"svc-page",children:[n.jsxs("div",{className:"svc-head",children:[n.jsxs("h2",{children:["Come ",n.jsx("span",{className:"svc-accent",children:"lavoriamo insieme"})]}),n.jsx("div",{className:"svc-bar"})]}),n.jsx("div",{className:"svc-process",children:Dv.map(r=>n.jsxs("div",{className:"svc-proc-step",children:[n.jsx("div",{className:"svc-proc-num",children:r.n}),n.jsxs("div",{className:"svc-proc-body",children:[n.jsx("h3",{children:r.title}),n.jsx("p",{children:r.desc})]})]},r.n))})]}),n.jsx("section",{className:"svc-cta",children:n.jsxs("div",{className:"svc-cta-inner",children:[n.jsxs("h2",{className:"svc-cta-title",children:["Hai un progetto in mente?",n.jsx("br",{}),n.jsx("span",{className:"svc-accent",children:"Raccontacelo."})]}),n.jsx("p",{className:"svc-cta-sub",children:"Valutiamo insieme la soluzione più adatta — senza impegno. Il team di BluMentis è pronto ad ascoltarti."}),n.jsxs("div",{className:"svc-cta-btns",children:[n.jsx(Gt,{to:"/contatti",className:"svc-cta-primary",children:"Parliamone"}),n.jsx("button",{className:"svc-cta-secondary",children:"↓ Scarica Brochure PDF"})]})]})}),n.jsxs("footer",{className:"svc-footer",children:[n.jsxs("div",{className:"svc-footer-inner",children:[n.jsxs("div",{className:"svc-footer-brand",children:[n.jsx("h3",{children:"Sviluppo Custom · BluMentis"}),n.jsx("p",{children:"La tua visione. La nostra tecnologia. Soluzioni AI su misura costruite per durare."}),n.jsx("span",{className:"svc-footer-tag",children:"Su misura · Iterativo · Made in Italy"})]}),n.jsxs("div",{className:"svc-footer-links",children:[n.jsx("a",{href:"#",children:"↓ Scarica Brochure PDF"}),n.jsx("a",{href:"#",children:"Privacy Policy"}),n.jsx("a",{href:"#",children:"Contatti"})]})]}),n.jsxs("div",{className:"svc-footer-bottom",children:[n.jsxs("span",{children:["© ",new Date().getFullYear()," BluMentis. Tutti i diritti riservati."]}),n.jsx("span",{children:"Made in Italy 🇮🇹"})]})]}),n.jsx(Qt,{})]})}const Rv=`
  .hw-root {
    --steel:      oklch(58% 0.08 220);
    --steel-dim:  oklch(58% 0.08 220 / 0.12);
    --steel-bdr:  oklch(58% 0.08 220 / 0.30);
    --steel-glow: oklch(58% 0.08 220 / 0.20);
    --steel-hi:   oklch(72% 0.06 220);
    --accent2:    oklch(64% 0.12 160);
    --bg:         #09090b;
    --surface:    #0f0f12;
    --raised:     #161619;
    --border:     rgba(255,255,255,.07);
    --text:       #eceef2;
    --text-2:     #8a8f9e;
    --text-3:     #4a4f5e;
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.44);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .hw-root *, .hw-root *::before, .hw-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .hw-root h1,.hw-root h2,.hw-root h3,.hw-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .hw-hero {
    padding: 120px 32px 90px;
    text-align: center; position: relative; overflow: hidden;
  }
  .hw-hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 65% 50% at 50% 0%, oklch(58% 0.08 220 / 0.09) 0%, transparent 68%);
    pointer-events: none;
  }
  .hw-hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
  .hw-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--steel-dim); border: 1px solid var(--steel-bdr);
    color: var(--steel-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
  }
  .hw-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--steel); animation: dotPulse 2s ease-in-out infinite; }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.22;} }
  .hw-hero h1 {
    font-size: clamp(36px, 5.8vw, 66px); font-weight: 800;
    line-height: 1.06; letter-spacing: -0.025em; margin-bottom: 14px;
  }
  .hw-accent {
    background: linear-gradient(135deg, var(--steel-hi), var(--accent2));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hw-hero-sub {
    font-size: 16px; color: var(--text-2); line-height: 1.82; max-width: 600px;
    margin: 0 auto 40px; font-weight: 300;
  }
  .hw-hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .hw-btn-primary {
    background: var(--steel); color: #09090b;
    padding: 14px 30px; border-radius: var(--radius);
    font-weight: 700; font-size: 15px; border: none; cursor: pointer;
    transition: .22s; font-family: 'DM Sans', sans-serif;
  }
  .hw-btn-primary:hover { filter: brightness(1.15); transform: translateY(-2px); box-shadow: 0 8px 24px var(--steel-glow); }
  .hw-btn-ghost {
    background: transparent; color: var(--text);
    padding: 14px 30px; border-radius: var(--radius); font-weight: 500; font-size: 15px;
    border: 2px solid rgba(255,255,255,.18); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif;
  }
  .hw-btn-ghost:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.42); }

  /* ── PAGE ── */
  .hw-page { max-width: 1000px; margin: 0 auto; padding: 72px 32px; }

  /* ── SECTION HEAD ── */
  .hw-head { margin-bottom: 44px; }
  .hw-head h2 { font-size: clamp(24px, 3.4vw, 38px); font-weight: 800; letter-spacing: -0.025em; }
  .hw-head h2 .hw-accent { -webkit-text-fill-color: unset; background: none; color: var(--steel-hi); }
  .hw-bar {
    width: 80px; height: 4px; margin-top: 12px; border-radius: 99px;
    background: linear-gradient(90deg, var(--steel), oklch(58% 0.08 220 / 0.20));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }

  /* ── DIVIDER ── */
  .hw-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── INTRO TEXT ── */
  .hw-intro { max-width: 720px; }
  .hw-intro p {
    font-size: 15px; color: var(--text-2); line-height: 1.85; margin-bottom: 22px;
  }
  .hw-intro p:last-child { margin-bottom: 0; }
  .hw-intro strong { color: var(--text); font-weight: 600; }
  .hw-intro-highlight {
    margin-top: 28px;
    background: var(--surface); border: 1px solid var(--steel-bdr);
    border-left: 3px solid var(--steel); border-radius: 0 var(--radius) var(--radius) 0;
    padding: 20px 24px;
  }
  .hw-intro-highlight p { margin-bottom: 0; color: var(--text-2); font-size: 14px; }
  .hw-intro-highlight strong { color: var(--steel-hi); }

  /* ── SETTORI ── */
  .hw-sectors { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
  .hw-sector {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px; transition: .28s; position: relative; overflow: hidden;
  }
  .hw-sector::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--steel), var(--accent2));
    opacity: 0; transition: .28s;
  }
  .hw-sector:hover { border-color: var(--steel-bdr); transform: translateY(-4px); box-shadow: var(--shadow); }
  .hw-sector:hover::before { opacity: 1; }
  .hw-sector h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--text); }
  .hw-sector p  { font-size: 13px; color: var(--text-3); line-height: 1.72; }

  /* ── PERCHÉ ── */
  .hw-why { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .hw-why-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 26px; transition: .26s;
  }
  .hw-why-card:hover { border-color: var(--steel-bdr); background: oklch(58% 0.08 220 / 0.06); }
  .hw-why-icon {
    width: 38px; height: 38px; border-radius: 10px;
    background: var(--steel-dim); border: 1px solid var(--steel-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 17px; margin-bottom: 14px;
  }
  .hw-why-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .hw-why-card p  { font-size: 13px; color: var(--text-3); line-height: 1.72; }
  .hw-why-ai {
    border-color: var(--steel-bdr);
    background: linear-gradient(135deg, oklch(58% 0.08 220 / 0.08), oklch(64% 0.12 160 / 0.06));
  }
  .hw-why-ai h3 { color: var(--steel-hi); }

  /* ── CTA ── */
  .hw-cta {
    background: linear-gradient(135deg, #060608 0%, oklch(13% 0.06 220) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 88px 20px; margin-top: 80px;
    text-align: center;
  }
  .hw-cta-inner { max-width: 640px; margin: 0 auto; }
  .hw-cta-title { font-size: clamp(22px, 3.5vw, 36px); font-weight: 800; margin-bottom: 14px; letter-spacing: -0.02em; }
  .hw-cta-title .hw-accent { -webkit-text-fill-color: unset; background: none; color: var(--steel-hi); }
  .hw-cta-sub { opacity: .66; margin-bottom: 34px; line-height: 1.8; font-size: 15px; }
  .hw-cta-btn {
    background: var(--steel); color: #09090b;
    padding: 14px 32px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
    display: inline-block;
  }
  .hw-cta-btn:hover { filter: brightness(1.14); transform: translateY(-2px); box-shadow: 0 8px 24px var(--steel-glow); }

  /* ── FOOTER ── */
  .hw-footer {
    background: #040406; border-top: 1px solid rgba(255,255,255,.05);
    padding: 56px 32px 32px; color: var(--text-3);
  }
  .hw-footer-inner {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .hw-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .hw-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 280px; }
  .hw-footer-tag {
    display: inline-block; margin-top: 12px;
    background: var(--steel-dim); border: 1px solid var(--steel-bdr);
    color: var(--steel-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .hw-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .hw-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .hw-footer-links a:hover { color: var(--steel-hi); }
  .hw-footer-bottom {
    max-width: 1000px; margin: 26px auto 0; padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .36;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 760px) {
    .hw-sectors { grid-template-columns: 1fr; }
    .hw-why { grid-template-columns: 1fr; }
    .hw-page { padding: 56px 20px; }
    .hw-footer-inner { grid-template-columns: 1fr; }
    .hw-footer-links { align-items: flex-start; }
    .hw-hero { padding: 100px 20px 70px; }
  }
    @media (max-width: 700px) {
  .hw-hero { padding: 80px 20px 60px; }
  .hw-hero h1 { font-size: clamp(28px, 8vw, 44px); }
  .hw-hero-sub { font-size: 14px; }
  .hw-hero-cta { flex-direction: column; }
  .hw-btn-primary { width: 100%; }

  .hw-sectors { grid-template-columns: 1fr; }
  .hw-why { grid-template-columns: 1fr; }
  .hw-page { padding: 48px 16px; }

  .hw-cta { padding: 56px 16px; }
  .hw-cta-btn { width: 100%; }

  .hw-footer-inner { grid-template-columns: 1fr; }
  .hw-footer-links { align-items: flex-start; }
  .hw-footer-bottom { flex-direction: column; gap: 4px; }
}
`;function Uv(){return n.jsxs("div",{className:"hw-root",children:[n.jsx("style",{children:Rv}),n.jsx("section",{className:"hw-hero",children:n.jsxs("div",{className:"hw-hero-inner",children:[n.jsxs("div",{className:"hw-hero-badge",children:[n.jsx("span",{className:"hw-badge-dot"}),"Hardware & Supply Chain"]}),n.jsxs("h1",{children:["Il componente giusto.",n.jsx("br",{}),n.jsx("span",{className:"hw-accent",children:"Dove serve. Quando serve."})]}),n.jsx("p",{className:"hw-hero-sub",children:"Trovare hardware industriale di qualità, a prezzi competitivi e con fornitori affidabili non è semplice. Noi lo facciamo da oltre vent'anni — con una rete diretta in Europa, Cina e nel resto del mondo, costruita sui rapporti personali dei nostri fondatori."}),n.jsx("div",{className:"hw-hero-cta",children:n.jsx(Gt,{to:"/contatti",className:"hw-btn-primary",children:" Hai un'esigenza? Scrivici"})})]})}),n.jsx("hr",{className:"hw-divider"}),n.jsxs("div",{className:"hw-page",children:[n.jsxs("div",{className:"hw-head",children:[n.jsx("h2",{children:"Componenti Hardware"}),n.jsx("div",{className:"hw-bar"})]}),n.jsxs("div",{className:"hw-intro",children:[n.jsxs("p",{children:["I nostri fondatori hanno costruito nel tempo una ",n.jsx("strong",{children:"rete commerciale internazionale solida e diversificata"}),". Oggi quella rete è al servizio di forniture per i nostri clienti — con un focus su automotive e agromeccanica, e la capacità di operare su un ampio ventaglio di componenti industriali."]}),n.jsx("div",{className:"hw-intro-highlight",children:n.jsxs("p",{children:["Recentemente abbiamo intrapreso un nuovo percorso che ci entusiasma particolarmente:",n.jsx("strong",{children:" soluzioni integrate che combinano hardware selezionato e software AI proprietario"})," — prodotti ad alto impatto tecnologico che renderemo disponibili nei prossimi mesi.",n.jsx("br",{})," ",n.jsx("span",{className:"mt-10",children:n.jsx("strong",{children:"Non perderti le prossime novità!"})})]})})]})]}),n.jsx("hr",{className:"hw-divider"}),n.jsxs("div",{className:"hw-page",children:[n.jsxs("div",{className:"hw-head",children:[n.jsxs("h2",{children:["Settori di ",n.jsx("span",{className:"hw-accent",children:"riferimento"})]}),n.jsx("div",{className:"hw-bar"})]}),n.jsx("div",{className:"hw-sectors",children:[{title:"Automotive",desc:"Componentistica e hardware per linee di produzione, testing e sistemi embedded nel settore automotive."},{title:"Agromeccanica",desc:"Hardware dedicato a macchine agricole e sistemi di automazione per il settore agromeccanico."},{title:"Altri settori",desc:"La nostra rete copre un'ampia gamma di categorie merceologiche. Se hai un'esigenza specifica, contattaci."}].map(r=>n.jsxs("div",{className:"hw-sector",children:[n.jsx("h3",{children:r.title}),n.jsx("p",{children:r.desc})]},r.title))})]}),n.jsx("hr",{className:"hw-divider"}),n.jsxs("div",{className:"hw-page",children:[n.jsxs("div",{className:"hw-head",children:[n.jsxs("h2",{children:["Perché ",n.jsx("span",{className:"hw-accent",children:"sceglierci"})]}),n.jsx("div",{className:"hw-bar"})]}),n.jsx("div",{className:"hw-why",children:[{icon:"🤝",title:"Connessioni dirette",desc:"Rapporti personali ventennali con fornitori selezionati in Europa, Cina e nel resto del mondo. Nessun intermediario.",ai:!1},{icon:"✅",title:"Qualità verificata",desc:"Ogni fornitore è selezionato per standard tecnologici elevati e affidabilità consolidata nel tempo.",ai:!1},{icon:"💰",title:"Costi competitivi",desc:"L'accesso diretto ai mercati di produzione ci permette di offrire condizioni difficilmente replicabili sul mercato.",ai:!1},{icon:"🤖",title:"Integrazione AI",desc:"L'hardware può essere selezionato e configurato per supportare direttamente le nostre tecnologie.",ai:!0}].map(r=>n.jsxs("div",{className:`hw-why-card${r.ai?" hw-why-ai":""}`,children:[n.jsx("div",{className:"hw-why-icon",children:r.icon}),n.jsx("h3",{children:r.title}),n.jsx("p",{children:r.desc})]},r.title))})]}),n.jsx("section",{className:"hw-cta",children:n.jsxs("div",{className:"hw-cta-inner",children:[n.jsxs("h2",{className:"hw-cta-title",children:["Hai un'esigenza",n.jsx("br",{}),n.jsx("span",{className:"hw-accent",children:"di fornitura?"})]}),n.jsx("p",{className:"hw-cta-sub",children:"Raccontaci cosa ti serve. Valutiamo insieme tempi, specifiche e condizioni — senza impegno."}),n.jsx(Gt,{className:"hw-cta-btn",to:"/contatti",children:"Contattaci"})]})}),n.jsxs("footer",{className:"hw-footer",children:[n.jsxs("div",{className:"hw-footer-inner",children:[n.jsxs("div",{className:"hw-footer-brand",children:[n.jsx("h3",{children:"Hardware & Supply Chain"}),n.jsx("p",{children:"Rete diretta internazionale per forniture hardware industriali ad alto contenuto tecnologico. Da oltre vent'anni."}),n.jsx("span",{className:"hw-footer-tag",children:"Europa · Cina · Worldwide"})]}),n.jsxs("div",{className:"hw-footer-links",children:[n.jsx("a",{href:"#",children:"Cookie policy"}),n.jsx("a",{href:"#",children:"Privacy Policy"}),n.jsx("a",{href:"#",children:"Contatti"})]})]}),n.jsxs("div",{className:"hw-footer-bottom",children:[n.jsxs("span",{children:["© ",new Date().getFullYear()," BluMentis. Tutti i diritti riservati."]}),n.jsx("span",{children:"Made in Italy 🇮🇹"})]})]}),n.jsx(Qt,{})]})}const Bv=()=>{const{hash:r,pathname:d}=Ht();return E.useEffect(()=>{if(!r){window.scrollTo(0,0);return}const p=setTimeout(()=>{const c=document.getElementById(r.slice(1));c&&c.scrollIntoView({behavior:"smooth",block:"start"})},100);return()=>clearTimeout(p)},[r,d]),null},Hv=()=>n.jsxs("div",{className:"min-h-screen w-full overflow-x-hidden",children:["      ",n.jsx(sx,{}),n.jsx(Bv,{}),n.jsxs(E0,{children:[n.jsx(Ut,{path:"/",element:n.jsx(Wx,{})}),n.jsx(Ut,{path:"/prodotti",element:n.jsx(ev,{})}),n.jsx(Ut,{path:"/prodotti/proline",element:n.jsx(jv,{})}),n.jsx(Ut,{path:"/prodotti/optimai",element:n.jsx(Av,{})}),n.jsx(Ut,{path:"/prodotti/agentiche",element:n.jsx(Ov,{})}),n.jsx(Ut,{path:"/prodotti/custom",element:n.jsx(_v,{})}),n.jsx(Ut,{path:"/prodotti/hardware",element:n.jsx(Uv,{})}),n.jsx(Ut,{path:"/industrie",element:n.jsx(av,{})}),n.jsx(Ut,{path:"/contatti",element:n.jsx(cv,{})}),n.jsx(Ut,{path:"/privacy",element:n.jsx(mv,{})}),n.jsx(Ut,{path:"/cookie",element:n.jsx(bv,{})})]})]});$l.init({duration:700,easing:"ease-out-cubic",once:!0,offset:80});Ag.createRoot(document.getElementById("root")).render(n.jsx(E.StrictMode,{children:n.jsx(F0,{children:n.jsx(Hv,{})})}));
