(self["webpackChunkcell"]=self["webpackChunkcell"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),o=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw i("Can't set "+o(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),o=n(30),i=n(3070).f,a=r("unscopables"),s=Array.prototype;void 0==s[a]&&i(s,a,{configurable:!0,value:o(null)}),e.exports=function(e){s[a][e]=!0}},5787:function(e,t,n){var r=n(7976),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw o("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,o,i,a=n(3013),s=n(9781),l=n(7854),u=n(614),c=n(111),d=n(2597),h=n(648),f=n(6330),p=n(8880),v=n(8052),m=n(3070).f,g=n(7976),y=n(9518),b=n(7674),w=n(5112),_=n(9711),k=n(9909),S=k.enforce,x=k.get,C=l.Int8Array,T=C&&C.prototype,E=l.Uint8ClampedArray,A=E&&E.prototype,I=C&&y(C),O=T&&y(T),F=Object.prototype,M=l.TypeError,D=w("toStringTag"),P=_("TYPED_ARRAY_TAG"),q="TypedArrayConstructor",R=a&&!!b&&"Opera"!==h(l.opera),N=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},$=function(e){if(!c(e))return!1;var t=h(e);return"DataView"===t||d(L,t)||d(V,t)},B=function(e){var t=y(e);if(c(t)){var n=x(t);return n&&d(n,q)?n[q]:B(t)}},j=function(e){if(!c(e))return!1;var t=h(e);return d(L,t)||d(V,t)},z=function(e){if(j(e))return e;throw M("Target is not a typed array")},H=function(e){if(u(e)&&(!b||g(I,e)))return e;throw M(f(e)+" is not a typed array constructor")},U=function(e,t,n,r){if(s){if(n)for(var o in L){var i=l[o];if(i&&d(i.prototype,e))try{delete i.prototype[e]}catch(a){try{i.prototype[e]=t}catch(u){}}}O[e]&&!n||v(O,e,n?t:R&&T[e]||t,r)}},Y=function(e,t,n){var r,o;if(s){if(b){if(n)for(r in L)if(o=l[r],o&&d(o,e))try{delete o[e]}catch(i){}if(I[e]&&!n)return;try{return v(I,e,n?t:R&&I[e]||t)}catch(i){}}for(r in L)o=l[r],!o||o[e]&&!n||v(o,e,t)}};for(r in L)o=l[r],i=o&&o.prototype,i?S(i)[q]=o:R=!1;for(r in V)o=l[r],i=o&&o.prototype,i&&(S(i)[q]=o);if((!R||!u(I)||I===Function.prototype)&&(I=function(){throw M("Incorrect invocation")},R))for(r in L)l[r]&&b(l[r],I);if((!R||!O||O===F)&&(O=I.prototype,R))for(r in L)l[r]&&b(l[r].prototype,O);if(R&&y(A)!==O&&b(A,O),s&&!d(O,D))for(r in N=!0,m(O,D,{get:function(){return c(this)?this[P]:void 0}}),L)l[r]&&p(l[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:R,TYPED_ARRAY_TAG:N&&P,aTypedArray:z,aTypedArrayConstructor:H,exportTypedArrayMethod:U,exportTypedArrayStaticMethod:Y,getTypedArrayConstructor:B,isView:$,isTypedArray:j,TypedArray:I,TypedArrayPrototype:O}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var s,l=r(t),u=i(l),c=o(a,u);if(e&&n!=n){while(u>c)if(s=l[c++],s!=s)return!0}else for(;u>c;c++)if((e||c in l)&&l[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},9671:function(e,t,n){var r=n(9974),o=n(8361),i=n(7908),a=n(6244),s=function(e){var t=1==e;return function(n,s,l){var u,c,d=i(n),h=o(d),f=r(s,l),p=a(h);while(p-- >0)if(u=h[p],c=f(u,p,d),c)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:s(0),findLastIndex:s(1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112),s=a("toStringTag"),l=Object,u="Arguments"==i(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=l(e),s))?n:u?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t,n){for(var s=o(t),l=a.f,u=i.f,c=0;c<s.length;c++){var d=s[c];r(e,d)||n&&r(n,d)||l(e,d,u(t,d))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),o=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},8052:function(e,t,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);e.exports=function(e,t,n,s){s||(s={});var l=s.enumerable,u=void 0!==s.name?s.name:t;if(r(n)&&i(n,u,s),s.global)l?e[t]=n:a(t,n);else{try{s.unsafe?e[t]&&(l=!0):delete e[t]}catch(c){}l?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),s=i.process,l=i.Deno,u=s&&s.versions||l&&l.version,c=u&&u.v8;c&&(r=c.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),o=Error,i=r("".replace),a=function(e){return String(o(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,l=s.test(a);e.exports=function(e,t){if(l&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,s,"");return e}},2914:function(e,t,n){var r=n(7293),o=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),s=n(3072),l=n(9920),u=n(4705);e.exports=function(e,t){var n,c,d,h,f,p,v=e.target,m=e.global,g=e.stat;if(c=m?r:g?r[v]||s(v,{}):(r[v]||{}).prototype,c)for(d in t){if(f=t[d],e.dontCallGetSet?(p=o(c,d),h=p&&p.value):h=c[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;l(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),a(c,d,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.apply,a=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?a.bind(i):function(){return a.apply(i,arguments)})},9974:function(e,t,n){var r=n(1702),o=n(9662),i=n(4374),a=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?a(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=o(i,"name"),l=s&&"something"===function(){}.name,u=s&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.bind,a=o.call,s=r&&i.bind(a,a);e.exports=r?function(e){return e&&s(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,s=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?s(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),o=n(111),i=n(7674);e.exports=function(e,t,n){var a,s;return i&&r(a=t.constructor)&&a!==n&&o(s=a.prototype)&&s!==n.prototype&&i(e,s),e}},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},8340:function(e,t,n){var r=n(111),o=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&o(e,"cause",t.cause)}},9909:function(e,t,n){var r,o,i,a=n(4811),s=n(7854),l=n(1702),u=n(111),c=n(8880),d=n(2597),h=n(5465),f=n(6200),p=n(3501),v="Object already initialized",m=s.TypeError,g=s.WeakMap,y=function(e){return i(e)?o(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(a||h.state){var w=h.state||(h.state=new g),_=l(w.get),k=l(w.has),S=l(w.set);r=function(e,t){if(k(w,e))throw m(v);return t.facade=e,S(w,e,t),t},o=function(e){return _(w,e)||{}},i=function(e){return k(w,e)}}else{var x=f("state");p[x]=!0,r=function(e,t){if(d(e,x))throw m(v);return t.facade=e,c(e,x,t),t},o=function(e){return d(e,x)?e[x]:{}},i=function(e){return d(e,x)}}e.exports={set:r,get:o,has:i,enforce:y,getterFor:b}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=l[s(e)];return n==c||n!=u&&(o(t)?r(t):!!t)},s=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),s=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,s(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),o=n(614),i=n(2597),a=n(9781),s=n(6530).CONFIGURABLE,l=n(2788),u=n(9909),c=u.enforce,d=u.get,h=Object.defineProperty,f=a&&!r((function(){return 8!==h((function(){}),"length",{value:8}).length})),p=String(String).split("String"),v=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||s&&e.name!==t)&&(a?h(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&i(n,"arity")&&e.length!==n.arity&&h(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?a&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=c(e);return i(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=v((function(){return o(this)&&d(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},30:function(e,t,n){var r,o=n(9670),i=n(6048),a=n(748),s=n(3501),l=n(490),u=n(317),c=n(6200),d=">",h="<",f="prototype",p="script",v=c("IE_PROTO"),m=function(){},g=function(e){return h+p+d+e+h+"/"+p+d},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=a.length;while(e--)delete w[f][a[e]];return w()};s[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[v]=e):n=w(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),s=n(5656),l=n(1956);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);var n,r=s(t),o=l(t),u=o.length,c=0;while(u>c)i.f(e,n=o[c++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),s=n(4948),l=TypeError,u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?i?function(e,t,n){if(a(e),t=s(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=s(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),s=n(5656),l=n(4948),u=n(2597),c=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=s(e),t=l(t),c)try{return d(e,t)}catch(n){}if(u(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),o=n(614),i=n(7908),a=n(6200),s=n(8544),l=a("IE_PROTO"),u=Object,c=u.prototype;e.exports=s?u.getPrototypeOf:function(e){var t=i(e);if(r(t,l))return t[l];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?c:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,s=n(3501),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,c=[];for(n in r)!o(s,n)&&o(r,n)&&l(c,n);while(t.length>u)o(r,n=t[u++])&&(~a(c,n)||l(c,n));return c}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),o=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;e.exports=function(e,t){var n,s;if("string"===t&&o(n=e.toString)&&!i(s=r(n,e)))return s;if(o(n=e.valueOf)&&!i(s=r(n,e)))return s;if("string"!==t&&o(n=e.toString)&&!i(s=r(n,e)))return s;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),s=n(9670),l=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=a.f;return n?l(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},4590:function(e,t,n){var r=n(3002),o=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw o("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),o=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw o("The argument can't be less than 0");return t}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),s=n(2140),l=n(5112),u=TypeError,c=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,c);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),s=n(6293),l=n(3307),u=o("wks"),c=r.Symbol,d=c&&c["for"],h=l?c:c&&c.withoutSetter||a;e.exports=function(e){if(!i(u,e)||!s&&"string"!=typeof u[e]){var t="Symbol."+e;s&&i(c,e)?u[e]=c[e]:u[e]=l&&d?d(t):h(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),o=n(2597),i=n(8880),a=n(7976),s=n(7674),l=n(9920),u=n(2626),c=n(9587),d=n(6277),h=n(8340),f=n(1060),p=n(2914),v=n(9781),m=n(1913);e.exports=function(e,t,n,g){var y="stackTraceLimit",b=g?2:1,w=e.split("."),_=w[w.length-1],k=r.apply(null,w);if(k){var S=k.prototype;if(!m&&o(S,"cause")&&delete S.cause,!n)return k;var x=r("Error"),C=t((function(e,t){var n=d(g?t:e,void 0),r=g?new k(e):new k;return void 0!==n&&i(r,"message",n),p&&i(r,"stack",f(r.stack,2)),this&&a(S,this)&&c(r,this,C),arguments.length>b&&h(r,arguments[b]),r}));if(C.prototype=S,"Error"!==_?s?s(C,x):l(C,x,{name:!0}):v&&y in k&&(u(C,k,y),u(C,k,"prepareStackTrace")),l(C,k),!m)try{S.name!==_&&i(S,"name",_),S.constructor=C}catch(T){}return C}}},2262:function(e,t,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),a=n(9303),s=n(1223);r({target:"Array",proto:!0},{at:function(e){var t=o(this),n=i(t),r=a(e),s=r>=0?r:n+r;return s<0||s>=n?void 0:t[s]}}),s("at")},6699:function(e,t,n){"use strict";var r=n(2109),o=n(1318).includes,i=n(7293),a=n(1223),s=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:s},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},1703:function(e,t,n){var r=n(2109),o=n(7854),i=n(2104),a=n(9191),s="WebAssembly",l=o[s],u=7!==Error("e",{cause:7}).cause,c=function(e,t){var n={};n[e]=a(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},d=function(e,t){if(l&&l[e]){var n={};n[e]=a(s+"."+e,t,u),r({target:s,stat:!0,constructor:!0,arity:1,forced:u},n)}};c("Error",(function(e){return function(t){return i(e,this,arguments)}})),c("EvalError",(function(e){return function(t){return i(e,this,arguments)}})),c("RangeError",(function(e){return function(t){return i(e,this,arguments)}})),c("ReferenceError",(function(e){return function(t){return i(e,this,arguments)}})),c("SyntaxError",(function(e){return function(t){return i(e,this,arguments)}})),c("TypeError",(function(e){return function(t){return i(e,this,arguments)}})),c("URIError",(function(e){return function(t){return i(e,this,arguments)}})),d("CompileError",(function(e){return function(t){return i(e,this,arguments)}})),d("LinkError",(function(e){return function(t){return i(e,this,arguments)}})),d("RuntimeError",(function(e){return function(t){return i(e,this,arguments)}}))},2087:function(e,t,n){var r=n(7854),o=n(9781),i=n(7045),a=n(7066),s=n(7293),l=r.RegExp,u=l.prototype,c=o&&s((function(){var e=!0;try{l(".","d")}catch(c){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);var s=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return s!==r||n!==r}));c&&i(u,"flags",{configurable:!0,get:a})},4506:function(e,t,n){"use strict";var r=n(2109),o=n(1702),i=n(4488),a=n(9303),s=n(1340),l=n(7293),u=o("".charAt),c=l((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:c},{at:function(e){var t=s(i(this)),n=t.length,r=a(e),o=r>=0?r:n+r;return o<0||o>=n?void 0:u(t,o)}})},8675:function(e,t,n){"use strict";var r=n(260),o=n(6244),i=n(9303),a=r.aTypedArray,s=r.exportTypedArrayMethod;s("at",(function(e){var t=a(this),n=o(t),r=i(e),s=r>=0?r:n+r;return s<0||s>=n?void 0:t[s]}))},2958:function(e,t,n){"use strict";var r=n(260),o=n(9671).findLastIndex,i=r.aTypedArray,a=r.exportTypedArrayMethod;a("findLastIndex",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),o=n(9671).findLast,i=r.aTypedArray,a=r.exportTypedArrayMethod;a("findLast",(function(e){return o(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),o=n(6916),i=n(260),a=n(6244),s=n(4590),l=n(7908),u=n(7293),c=r.RangeError,d=r.Int8Array,h=d&&d.prototype,f=h&&h.set,p=i.aTypedArray,v=i.exportTypedArrayMethod,m=!u((function(){var e=new Uint8ClampedArray(2);return o(f,e,{length:1,0:3},1),3!==e[1]})),g=m&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new d(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));v("set",(function(e){p(this);var t=s(arguments.length>1?arguments[1]:void 0,1),n=l(e);if(m)return o(f,this,n,t);var r=this.length,i=a(n),u=0;if(i+t>r)throw c("Wrong length");while(u<i)this[t+u]=n[u++]}),!m||g)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},2801:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),a=n(9114),s=n(3070).f,l=n(2597),u=n(5787),c=n(9587),d=n(6277),h=n(3678),f=n(1060),p=n(9781),v=n(1913),m="DOMException",g=i("Error"),y=i(m),b=function(){u(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=g(t);return o.name=m,s(r,"stack",a(1,f(o.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,_="stack"in g(m),k="stack"in new y(1,2),S=y&&p&&Object.getOwnPropertyDescriptor(o,m),x=!!S&&!(S.writable&&S.configurable),C=_&&!x&&!k;r({global:!0,constructor:!0,forced:v||C},{DOMException:C?b:y});var T=i(m),E=T.prototype;if(E.constructor!==T)for(var A in v||s(E,"constructor",a(1,T)),h)if(l(h,A)){var I=h[A],O=I.s;l(T,O)||s(T,O,a(6,I.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return u},L:function(){return s},LL:function(){return b},ZR:function(){return y},b$:function(){return f},eu:function(){return m},hl:function(){return v},m9:function(){return M},ne:function(){return A},pd:function(){return E},ru:function(){return h},tV:function(){return l},uI:function(){return d},vZ:function(){return S},w1:function(){return p},xO:function(){return C},xb:function(){return k},z$:function(){return c},zd:function(){return T}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],a=e[n++],s=e[n++],l=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,a=i?e[o+1]:0,s=o+2<e.length,l=s?e[o+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let d=(15&a)<<2|l>>6,h=63&l;s||(h=64,i||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,a=i?n[e.charAt(o)]:0;++o;const s=o<e.length,l=s?n[e.charAt(o)]:64;++o;const u=o<e.length,c=u?n[e.charAt(o)]:64;if(++o,null==t||null==a||null==l||null==c)throw Error();const d=t<<2|a>>4;if(r.push(d),64!==l){const e=a<<4&240|l>>2;if(r.push(e),64!==c){const e=l<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=r(e);return i.encodeByteArray(t,!0)},s=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g="FirebaseError";class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=g,Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?w(o,n):"Error",a=`${this.serviceName}: ${i} (${r}).`,s=new y(r,a,n);return s}}function w(e,t){return e.replace(_,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function S(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(x(n)&&x(i)){if(!S(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function x(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function T(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function E(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const n=new I(e,t);return n.subscribe.bind(n)}class I{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=O(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function O(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return e&&e._delegate?e._delegate:e}},579:function(e,t,n){"use strict";
/**
  * vee-validate v4.6.9
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function r(e){return"function"===typeof e}n.d(t,{NC:function(){return u},i_:function(){return c}});const o=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e);function i(e,t){return e.replace(/(\d:)?{([^}]+)}/g,(function(e,n,r){if(!n||!t.params)return r in t?t[r]:t.params&&r in t.params?t.params[r]:`{${r}}`;if(!Array.isArray(t.params))return r in t.params?t.params[r]:`{${r}}`;const o=Number(n.replace(":",""));return o in t.params?t.params[o]:`${n}{${r}}`}))}function a(e,t){return Object.keys(t).forEach((n=>{if(o(t[n]))return e[n]||(e[n]={}),void a(e[n],t[n]);e[n]=t[n]})),e}class s{constructor(e,t){this.container={},this.locale=e,this.merge(t)}resolve(e){return this.format(this.locale,e)}getLocaleDefault(e,t){var n,r,o,i,a;return(null===(o=null===(r=null===(n=this.container[e])||void 0===n?void 0:n.fields)||void 0===r?void 0:r[t])||void 0===o?void 0:o._default)||(null===(a=null===(i=this.container[e])||void 0===i?void 0:i.messages)||void 0===a?void 0:a._default)}format(e,t){var n,o,a,s,l,u,c,d;let h;const{field:f,rule:p,form:v}=t,m=null!==(a=null===(o=null===(n=this.container[e])||void 0===n?void 0:n.names)||void 0===o?void 0:o[f])&&void 0!==a?a:f;return p?(h=(null===(u=null===(l=null===(s=this.container[e])||void 0===s?void 0:s.fields)||void 0===l?void 0:l[f])||void 0===u?void 0:u[p.name])||(null===(d=null===(c=this.container[e])||void 0===c?void 0:c.messages)||void 0===d?void 0:d[p.name]),h||(h=this.getLocaleDefault(e,f)||`${m} is not valid`),r(h)?h(t):i(h,Object.assign(Object.assign({},v),{field:m,params:p.params}))):(h=this.getLocaleDefault(e,f)||`${m} is not valid`,r(h)?h(t):i(h,Object.assign(Object.assign({},v),{field:m})))}merge(e){a(this.container,e)}}let l;function u(e,t){l||(l=new s("en",{}));const n=e=>l.resolve(e);return"string"===typeof e?(l.locale=e,t&&l.merge({[e]:t}),n):(l.merge(e),n)}function c(e){l.locale=e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return i},Fl:function(){return Ye},IU:function(){return Ae},Jd:function(){return S},PG:function(){return xe},SU:function(){return Ve},Um:function(){return _e},Vh:function(){return ze},WL:function(){return Be},X$:function(){return E},X3:function(){return Ee},XI:function(){return Re},Xl:function(){return Ie},dq:function(){return Pe},iH:function(){return qe},j:function(){return C},lk:function(){return x},qj:function(){return we},qq:function(){return b},yT:function(){return Te}});var r=n(7139);let o;class i{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&o&&(this.parent=o,this.index=(o.scopes||(o.scopes=[])).push(this)-1)}run(e){if(this.active){const t=o;try{return o=this,e()}finally{o=t}}else 0}on(){o=this}off(){o=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t=o){t&&t.active&&t.effects.push(e)}const s=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&p)>0,u=e=>(e.n&p)>0,c=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];l(o)&&!u(o)?o.delete(e):t[n++]=o,o.w&=~p,o.n&=~p}t.length=n}},h=new WeakMap;let f=0,p=1;const v=30;let m;const g=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=m,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,_=!0,p=1<<++f,f<=v?c(this):w(this),this.fn()}finally{f<=v&&d(this),p=1<<--f,m=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const k=[];function S(){k.push(_),_=!1}function x(){const e=k.pop();_=void 0===e||e}function C(e,t,n){if(_&&m){let t=h.get(e);t||h.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=s());const o=void 0;T(r,o)}}function T(e,t){let n=!1;f<=v?u(e)||(e.n|=p,n=!l(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function E(e,t,n,o,i,a){const l=h.get(e);if(!l)return;let u=[];if("clear"===t)u=[...l.values()];else if("length"===n&&(0,r.kJ)(e))l.forEach(((e,t)=>{("length"===t||t>=o)&&u.push(e)}));else switch(void 0!==n&&u.push(l.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(l.get("length")):(u.push(l.get(g)),(0,r._N)(e)&&u.push(l.get(y)));break;case"delete":(0,r.kJ)(e)||(u.push(l.get(g)),(0,r._N)(e)&&u.push(l.get(y)));break;case"set":(0,r._N)(e)&&u.push(l.get(g));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(s(e))}}function A(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&I(r,t);for(const r of n)r.computed||I(r,t)}function I(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),F=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),M=N(),D=N(!1,!0),P=N(!0),q=R();function R(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,o=this.length;t<o;t++)C(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ae(this)[t].apply(this,e);return x(),n}})),e}function N(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_isShallow"===o)return t;if("__v_raw"===o&&i===(e?t?ge:me:t?ve:pe).get(n))return n;const a=(0,r.kJ)(n);if(!e&&a&&(0,r.RI)(q,o))return Reflect.get(q,o,i);const s=Reflect.get(n,o,i);return((0,r.yk)(o)?F.has(o):O(o))?s:(e||C(n,"get",o),t?s:Pe(s)?a&&(0,r.S0)(o)?s:s.value:(0,r.Kn)(s)?e?ke(s):we(s):s)}}const L=$(),V=$(!0);function $(e=!1){return function(t,n,o,i){let a=t[n];if(Ce(a)&&Pe(a)&&!Pe(o))return!1;if(!e&&(Te(o)||Ce(o)||(a=Ae(a),o=Ae(o)),!(0,r.kJ)(t)&&Pe(a)&&!Pe(o)))return a.value=o,!0;const s=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,o,i);return t===Ae(i)&&(s?(0,r.aU)(o,a)&&E(t,"set",n,o,a):E(t,"add",n,o)),l}}function B(e,t){const n=(0,r.RI)(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&E(e,"delete",t,void 0,o),i}function j(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&F.has(t)||C(e,"has",t),n}function z(e){return C(e,"iterate",(0,r.kJ)(e)?"length":g),Reflect.ownKeys(e)}const H={get:M,set:L,deleteProperty:B,has:j,ownKeys:z},U={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=(0,r.l7)({},H,{get:D,set:V}),W=e=>e,Q=e=>Reflect.getPrototypeOf(e);function K(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Ae(e),i=Ae(t);n||(t!==i&&C(o,"get",t),C(o,"get",i));const{has:a}=Q(o),s=r?W:n?Fe:Oe;return a.call(o,t)?s(e.get(t)):a.call(o,i)?s(e.get(i)):void(e!==o&&e.get(t))}function G(e,t=!1){const n=this["__v_raw"],r=Ae(n),o=Ae(e);return t||(e!==o&&C(r,"has",e),C(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function J(e,t=!1){return e=e["__v_raw"],!t&&C(Ae(e),"iterate",g),Reflect.get(e,"size",e)}function X(e){e=Ae(e);const t=Ae(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),E(t,"add",e,e)),this}function Z(e,t){t=Ae(t);const n=Ae(this),{has:o,get:i}=Q(n);let a=o.call(n,e);a||(e=Ae(e),a=o.call(n,e));const s=i.call(n,e);return n.set(e,t),a?(0,r.aU)(t,s)&&E(n,"set",e,t,s):E(n,"add",e,t),this}function ee(e){const t=Ae(this),{has:n,get:r}=Q(t);let o=n.call(t,e);o||(e=Ae(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,a=t.delete(e);return o&&E(t,"delete",e,void 0,i),a}function te(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&E(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const o=this,i=o["__v_raw"],a=Ae(i),s=t?W:e?Fe:Oe;return!e&&C(a,"iterate",g),i.forEach(((e,t)=>n.call(r,s(e),s(t),o)))}}function re(e,t,n){return function(...o){const i=this["__v_raw"],a=Ae(i),s=(0,r._N)(a),l="entries"===e||e===Symbol.iterator&&s,u="keys"===e&&s,c=i[e](...o),d=n?W:t?Fe:Oe;return!t&&C(a,"iterate",u?y:g),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:l?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return K(this,e)},get size(){return J(this)},has:G,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return K(this,e,!1,!0)},get size(){return J(this)},has:G,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return K(this,e,!0)},get size(){return J(this,!0)},has(e){return G.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ne(!0,!1)},r={get(e){return K(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return G.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ne(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{e[o]=re(o,!1,!1),n[o]=re(o,!0,!1),t[o]=re(o,!1,!0),r[o]=re(o,!0,!0)})),[e,n,t,r]}const[ae,se,le,ue]=ie();function ce(e,t){const n=t?e?ue:le:e?se:ae;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get((0,r.RI)(n,o)&&o in t?n:t,o,i)}const de={get:ce(!1,!1)},he={get:ce(!1,!0)},fe={get:ce(!0,!1)};const pe=new WeakMap,ve=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return Ce(e)?e:Se(e,!1,H,de,pe)}function _e(e){return Se(e,!1,Y,he,ve)}function ke(e){return Se(e,!0,U,fe,me)}function Se(e,t,n,o,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const a=i.get(e);if(a)return a;const s=be(e);if(0===s)return e;const l=new Proxy(e,2===s?o:n);return i.set(e,l),l}function xe(e){return Ce(e)?xe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ce(e){return!(!e||!e["__v_isReadonly"])}function Te(e){return!(!e||!e["__v_isShallow"])}function Ee(e){return xe(e)||Ce(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ie(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Kn)(e)?we(e):e,Fe=e=>(0,r.Kn)(e)?ke(e):e;function Me(e){_&&m&&(e=Ae(e),T(e.dep||(e.dep=s())))}function De(e,t){e=Ae(e),e.dep&&A(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function qe(e){return Ne(e,!1)}function Re(e){return Ne(e,!0)}function Ne(e,t){return Pe(e)?e:new Le(e,t)}class Le{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Oe(e)}get value(){return Me(this),this._value}set value(e){const t=this.__v_isShallow||Te(e)||Ce(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Oe(e),De(this,e))}}function Ve(e){return Pe(e)?e.value:e}const $e={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Pe(o)&&!Pe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return xe(e)?e:new Proxy(e,$e)}class je{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ze(e,t,n){const r=e[t];return Pe(r)?r:new je(e,t,n)}var He;class Ue{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[He]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,De(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Me(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ye(e,t,n=!1){let o,i;const a=(0,r.mf)(e);a?(o=e,i=r.dG):(o=e.get,i=e.set);const s=new Ue(o,i,a||!i,n);return s}He="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return f},Ah:function(){return Ne},Cn:function(){return z},FN:function(){return Rn},Fl:function(){return tr},HY:function(){return en},JJ:function(){return Z},Jd:function(){return Re},Ko:function(){return Xe},LL:function(){return Qe},Ob:function(){return ke},P$:function(){return de},Q2:function(){return Ke},Q6:function(){return ge},U2:function(){return fe},Uk:function(){return xn},Us:function(){return Bt},WI:function(){return Ze},Wm:function(){return wn},Xn:function(){return Pe},Y3:function(){return C},Y8:function(){return le},YP:function(){return re},ZK:function(){return a},_:function(){return bn},aZ:function(){return ye},bv:function(){return De},dD:function(){return j},dG:function(){return On},dl:function(){return xe},f3:function(){return ee},h:function(){return nr},iD:function(){return hn},ic:function(){return qe},j4:function(){return fn},kq:function(){return Tn},lR:function(){return Zt},m0:function(){return te},mx:function(){return tt},nK:function(){return me},se:function(){return Ce},uE:function(){return Cn},up:function(){return Ye},w5:function(){return H},wF:function(){return Me},wg:function(){return sn},wy:function(){return je}});n(6699),n(1703);var r=n(4870),o=n(7139);const i=[];function a(e,...t){(0,r.Jd)();const n=i.length?i[i.length-1].component:null,o=n&&n.appContext.config.warnHandler,a=s();if(o)h(o,n,11,[e+t.join(""),n&&n.proxy,a.map((({vnode:e})=>`at <${Zn(n,e.type)}>`)).join("\n"),a]);else{const n=[`[Vue warn]: ${e}`,...t];a.length&&n.push("\n",...l(a)),console.warn(...n)}(0,r.lk)()}function s(){let e=i[i.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function l(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...u(e))})),t}function u({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,o=` at <${Zn(e.component,e.type,r)}`,i=">"+n;return e.props?[o,...c(e.props),i]:[o+i]}function c(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...d(n,e[n]))})),n.length>3&&t.push(" ..."),t}function d(e,t,n){return(0,o.HD)(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:(0,r.dq)(t)?(t=d(e,(0,r.IU)(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):(0,o.mf)(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=(0,r.IU)(t),n?t:[`${e}=`,t])}function h(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){p(i,t,n)}return o}function f(e,t,n,r){if((0,o.mf)(e)){const i=h(e,t,n,r);return i&&(0,o.tI)(i)&&i.catch((e=>{p(e,t,n)})),i}const i=[];for(let o=0;o<e.length;o++)i.push(f(e[o],t,n,r));return i}function p(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void h(a,null,10,[e,o,i])}v(e,n,o,r)}function v(e,t,n,r=!0){console.error(e)}let m=!1,g=!1;const y=[];let b=0;const w=[];let _=null,k=0;const S=Promise.resolve();let x=null;function C(e){const t=x||S;return e?t.then(this?e.bind(this):e):t}function T(e){let t=b+1,n=y.length;while(t<n){const r=t+n>>>1,o=D(y[r]);o<e?t=r+1:n=r}return t}function E(e){y.length&&y.includes(e,m&&e.allowRecurse?b+1:b)||(null==e.id?y.push(e):y.splice(T(e.id),0,e),A())}function A(){m||g||(g=!0,x=S.then(q))}function I(e){const t=y.indexOf(e);t>b&&y.splice(t,1)}function O(e){(0,o.kJ)(e)?w.push(...e):_&&_.includes(e,e.allowRecurse?k+1:k)||w.push(e),A()}function F(e,t=(m?b+1:0)){for(0;t<y.length;t++){const e=y[t];e&&e.pre&&(y.splice(t,1),t--,e())}}function M(e){if(w.length){const e=[...new Set(w)];if(w.length=0,_)return void _.push(...e);for(_=e,_.sort(((e,t)=>D(e)-D(t))),k=0;k<_.length;k++)_[k]();_=null,k=0}}const D=e=>null==e.id?1/0:e.id,P=(e,t)=>{const n=D(e)-D(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function q(e){g=!1,m=!0,y.sort(P);o.dG;try{for(b=0;b<y.length;b++){const e=y[b];e&&!1!==e.active&&h(e,null,14)}}finally{b=0,y.length=0,M(e),m=!1,x=null,(y.length||w.length)&&q(e)}}new Set;new Map;function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||o.kT;let i=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const e=`${"modelValue"===s?"model":s}Modifiers`,{number:t,trim:a}=r[e]||o.kT;a&&(i=n.map((e=>e.trim()))),t&&(i=n.map(o.He))}let l;let u=r[l=(0,o.hR)(t)]||r[l=(0,o.hR)((0,o._A)(t))];!u&&a&&(u=r[l=(0,o.hR)((0,o.rs)(t))]),u&&f(u,e,6,i);const c=r[l+"Once"];if(c){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,f(c,e,6,i)}}function N(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const a=e.emits;let s={},l=!1;if(!(0,o.mf)(e)){const r=e=>{const n=N(e,t,!0);n&&(l=!0,(0,o.l7)(s,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||l?((0,o.kJ)(a)?a.forEach((e=>s[e]=null)):(0,o.l7)(s,a),(0,o.Kn)(e)&&r.set(e,s),s):((0,o.Kn)(e)&&r.set(e,null),null)}function L(e,t){return!(!e||!(0,o.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,o.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,o.RI)(e,(0,o.rs)(t))||(0,o.RI)(e,t))}let V=null,$=null;function B(e){const t=V;return V=e,$=e&&e.type.__scopeId||null,t}function j(e){$=e}function z(){$=null}function H(e,t=V,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&cn(-1);const o=B(t),i=e(...n);return B(o),r._d&&cn(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[s],slots:l,attrs:u,emit:c,render:d,renderCache:h,data:f,setupState:v,ctx:m,inheritAttrs:g}=e;let y,b;const w=B(e);try{if(4&n.shapeFlag){const e=i||r;y=En(d.call(e,e,h,a,v,f,m)),b=u}else{const e=t;0,y=En(e.length>1?e(a,{attrs:u,slots:l,emit:c}):e(a,null)),b=t.props?u:Y(u)}}catch(k){on.length=0,p(k,e,1),y=wn(nn)}let _=y;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(s&&e.some(o.tR)&&(b=W(b,s)),_=Sn(_,b))}return n.dirs&&(_=Sn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,B(w),y}const Y=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,o.F7)(n))&&((t||(t={}))[n]=e[n]);return t},W=(e,t)=>{const n={};for(const r in e)(0,o.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Q(e,t,n){const{props:r,children:o,component:i}=e,{props:a,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!o&&!s||s&&s.$stable)||r!==a&&(r?!a||K(r,a,u):!!a);if(1024&l)return!0;if(16&l)return r?K(r,a,u):!!a;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(a[n]!==r[n]&&!L(u,n))return!0}}return!1}function K(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!L(n,i))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const J=e=>e.__isSuspense;function X(e,t){t&&t.pendingBranch?(0,o.kJ)(e)?t.effects.push(...e):t.effects.push(e):O(e)}function Z(e,t){if(qn){let n=qn.provides;const r=qn.parent&&qn.parent.provides;r===n&&(n=qn.provides=Object.create(r)),n[e]=t}else 0}function ee(e,t,n=!1){const r=qn||V;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,o.mf)(t)?t.call(r.proxy):t}else 0}function te(e,t){return oe(e,null,t)}const ne={};function re(e,t,n){return oe(e,t,n)}function oe(e,t,{immediate:n,deep:i,flush:a,onTrack:s,onTrigger:l}=o.kT){const u=qn;let c,d,p=!1,v=!1;if((0,r.dq)(e)?(c=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(c=()=>e,i=!0):(0,o.kJ)(e)?(v=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),c=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?se(e):(0,o.mf)(e)?h(e,u,2):void 0))):c=(0,o.mf)(e)?t?()=>h(e,u,2):()=>{if(!u||!u.isUnmounted)return d&&d(),f(e,u,3,[m])}:o.dG,t&&i){const e=c;c=()=>se(e())}let m=e=>{d=w.onStop=()=>{h(e,u,4)}};if(jn)return m=o.dG,t?n&&f(t,u,3,[c(),v?[]:void 0,m]):c(),o.dG;let g=v?[]:ne;const y=()=>{if(w.active)if(t){const e=w.run();(i||p||(v?e.some(((e,t)=>(0,o.aU)(e,g[t]))):(0,o.aU)(e,g)))&&(d&&d(),f(t,u,3,[e,g===ne?void 0:g,m]),g=e)}else w.run()};let b;y.allowRecurse=!!t,"sync"===a?b=y:"post"===a?b=()=>$t(y,u&&u.suspense):(y.pre=!0,u&&(y.id=u.uid),b=()=>E(y));const w=new r.qq(c,b);return t?n?y():g=w.run():"post"===a?$t(w.run.bind(w),u&&u.suspense):w.run(),()=>{w.stop(),u&&u.scope&&(0,o.Od)(u.scope.effects,w)}}function ie(e,t,n){const r=this.proxy,i=(0,o.HD)(e)?e.includes(".")?ae(r,e):()=>r[e]:e.bind(r,r);let a;(0,o.mf)(t)?a=t:(a=t.handler,n=t);const s=qn;Nn(this);const l=oe(i,a.bind(r),n);return s?Nn(s):Ln(),l}function ae(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function se(e,t){if(!(0,o.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))se(e.value,t);else if((0,o.kJ)(e))for(let n=0;n<e.length;n++)se(e[n],t);else if((0,o.DM)(e)||(0,o._N)(e))e.forEach((e=>{se(e,t)}));else if((0,o.PO)(e))for(const n in e)se(e[n],t);return e}function le(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De((()=>{e.isMounted=!0})),Re((()=>{e.isUnmounting=!0})),e}const ue=[Function,Array],ce={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ue,onEnter:ue,onAfterEnter:ue,onEnterCancelled:ue,onBeforeLeave:ue,onLeave:ue,onAfterLeave:ue,onLeaveCancelled:ue,onBeforeAppear:ue,onAppear:ue,onAfterAppear:ue,onAppearCancelled:ue},setup(e,{slots:t}){const n=Rn(),o=le();let i;return()=>{const a=t.default&&ge(t.default(),!0);if(!a||!a.length)return;let s=a[0];if(a.length>1){let e=!1;for(const t of a)if(t.type!==nn){0,s=t,e=!0;break}}const l=(0,r.IU)(e),{mode:u}=l;if(o.isLeaving)return pe(s);const c=ve(s);if(!c)return pe(s);const d=fe(c,l,o,n);me(c,d);const h=n.subTree,f=h&&ve(h);let p=!1;const{getTransitionKey:v}=c.type;if(v){const e=v();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==nn&&(!vn(c,f)||p)){const e=fe(f,l,o,n);if(me(f,e),"out-in"===u)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,n.update()},pe(s);"in-out"===u&&c.type!==nn&&(e.delayLeave=(e,t,n)=>{const r=he(o,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return s}}},de=ce;function he(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function fe(e,t,n,r){const{appear:i,mode:a,persisted:s=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),k=he(n,e),S=(e,t)=>{e&&f(e,r,9,t)},x=(e,t)=>{const n=t[1];S(e,t),(0,o.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:a,persisted:s,beforeEnter(t){let r=l;if(!n.isMounted){if(!i)return;r=g||l}t._leaveCb&&t._leaveCb(!0);const o=k[_];o&&vn(e,o)&&o.el._leaveCb&&o.el._leaveCb(),S(r,[t])},enter(e){let t=u,r=c,o=d;if(!n.isMounted){if(!i)return;t=y||u,r=b||c,o=w||d}let a=!1;const s=e._enterCb=t=>{a||(a=!0,S(t?o:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?x(t,[e,s]):s()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();S(h,[t]);let i=!1;const a=t._leaveCb=n=>{i||(i=!0,r(),S(n?m:v,[t]),t._leaveCb=void 0,k[o]===e&&delete k[o])};k[o]=e,p?x(p,[t,a]):a()},clone(e){return fe(e,t,n,r)}};return C}function pe(e){if(we(e))return e=Sn(e),e.children=null,e}function ve(e){return we(e)?e.children?e.children[0]:void 0:e}function me(e,t){6&e.shapeFlag&&e.component?me(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ge(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let a=e[i];const s=null==n?a.key:String(n)+String(null!=a.key?a.key:i);a.type===en?(128&a.patchFlag&&o++,r=r.concat(ge(a.children,t,s))):(t||a.type!==nn)&&r.push(null!=s?Sn(a,{key:s}):a)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ye(e){return(0,o.mf)(e)?{setup:e,name:e.name}:e}const be=e=>!!e.type.__asyncLoader;const we=e=>e.type.__isKeepAlive,_e={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Rn(),r=n.ctx;if(!r.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const i=new Map,a=new Set;let s=null;const l=n.suspense,{renderer:{p:u,m:c,um:d,o:{createElement:h}}}=r,f=h("div");function p(e){Ae(e),d(e,n,l,!0)}function v(e){i.forEach(((t,n)=>{const r=Xn(t.type);!r||e&&e(r)||m(n)}))}function m(e){const t=i.get(e);s&&t.type===s.type?s&&Ae(s):p(t),i.delete(e),a.delete(e)}r.activate=(e,t,n,r,i)=>{const a=e.component;c(e,t,n,0,l),u(a.vnode,e,t,n,a,l,r,e.slotScopeIds,i),$t((()=>{a.isDeactivated=!1,a.a&&(0,o.ir)(a.a);const t=e.props&&e.props.onVnodeMounted;t&&Fn(t,a.parent,e)}),l)},r.deactivate=e=>{const t=e.component;c(e,f,null,1,l),$t((()=>{t.da&&(0,o.ir)(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&Fn(n,t.parent,e),t.isDeactivated=!0}),l)},re((()=>[e.include,e.exclude]),(([e,t])=>{e&&v((t=>Se(e,t))),t&&v((e=>!Se(t,e)))}),{flush:"post",deep:!0});let g=null;const y=()=>{null!=g&&i.set(g,Ie(n.subTree))};return De(y),qe(y),Re((()=>{i.forEach((e=>{const{subTree:t,suspense:r}=n,o=Ie(t);if(e.type!==o.type)p(e);else{Ae(o);const e=o.component.da;e&&$t(e,r)}}))})),()=>{if(g=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return s=null,n;if(!pn(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return s=null,r;let o=Ie(r);const l=o.type,u=Xn(be(o)?o.type.__asyncResolved||{}:l),{include:c,exclude:d,max:h}=e;if(c&&(!u||!Se(c,u))||d&&u&&Se(d,u))return s=o,r;const f=null==o.key?l:o.key,p=i.get(f);return o.el&&(o=Sn(o),128&r.shapeFlag&&(r.ssContent=o)),g=f,p?(o.el=p.el,o.component=p.component,o.transition&&me(o,o.transition),o.shapeFlag|=512,a.delete(f),a.add(f)):(a.add(f),h&&a.size>parseInt(h,10)&&m(a.values().next().value)),o.shapeFlag|=256,s=o,J(r.type)?r:o}}},ke=_e;function Se(e,t){return(0,o.kJ)(e)?e.some((e=>Se(e,t))):(0,o.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function xe(e,t){Te(e,"a",t)}function Ce(e,t){Te(e,"da",t)}function Te(e,t,n=qn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Oe(t,r,n),n){let e=n.parent;while(e&&e.parent)we(e.parent.vnode)&&Ee(r,t,n,e),e=e.parent}}function Ee(e,t,n,r){const i=Oe(t,e,r,!0);Ne((()=>{(0,o.Od)(r[t],i)}),n)}function Ae(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Oe(e,t,n=qn,o=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.Jd)(),Nn(n);const i=f(t,n,e,o);return Ln(),(0,r.lk)(),i});return o?i.unshift(a):i.push(a),a}}const Fe=e=>(t,n=qn)=>(!jn||"sp"===e)&&Oe(e,t,n),Me=Fe("bm"),De=Fe("m"),Pe=Fe("bu"),qe=Fe("u"),Re=Fe("bum"),Ne=Fe("um"),Le=Fe("sp"),Ve=Fe("rtg"),$e=Fe("rtc");function Be(e,t=qn){Oe("ec",e,t)}function je(e,t){const n=V;if(null===n)return e;const r=Kn(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[e,n,s,l=o.kT]=t[a];(0,o.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&se(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:s,modifiers:l})}return e}function ze(e,t,n,o){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const l=i[s];a&&(l.oldValue=a[s].value);let u=l.dir[o];u&&((0,r.Jd)(),f(u,n,8,[e.el,l,e,t]),(0,r.lk)())}}const He="components",Ue="directives";function Ye(e,t){return Ge(He,e,!0,t)||e}const We=Symbol();function Qe(e){return(0,o.HD)(e)?Ge(He,e,!1)||e:e||We}function Ke(e){return Ge(Ue,e)}function Ge(e,t,n=!0,r=!1){const i=V||qn;if(i){const n=i.type;if(e===He){const e=Xn(n,!1);if(e&&(e===t||e===(0,o._A)(t)||e===(0,o.kC)((0,o._A)(t))))return n}const a=Je(i[e]||n[e],t)||Je(i.appContext[e],t);return!a&&r?n:a}}function Je(e,t){return e&&(e[t]||e[(0,o._A)(t)]||e[(0,o.kC)((0,o._A)(t))])}function Xe(e,t,n,r){let i;const a=n&&n[r];if((0,o.kJ)(e)||(0,o.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,a&&a[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if((0,o.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function Ze(e,t,n={},r,o){if(V.isCE||V.parent&&be(V.parent)&&V.parent.isCE)return wn("slot","default"===t?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),sn();const a=i&&et(i(n)),s=fn(en,{key:n.key||a&&a.key||`_${t}`},a||(r?r():[]),a&&1===e._?64:-2);return!o&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function et(e){return e.some((e=>!pn(e)||e.type!==nn&&!(e.type===en&&!et(e.children))))?e:null}function tt(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,o.hR)(r)]=e[r];return n}const nt=e=>e?Vn(e)?Kn(e)||e.proxy:nt(e.parent):null,rt=(0,o.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nt(e.parent),$root:e=>nt(e.root),$emit:e=>e.emit,$options:e=>ct(e),$forceUpdate:e=>e.f||(e.f=()=>E(e.update)),$nextTick:e=>e.n||(e.n=C.bind(e.proxy)),$watch:e=>ie.bind(e)}),ot={get({_:e},t){const{ctx:n,setupState:i,data:a,props:s,accessCache:l,type:u,appContext:c}=e;let d;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return s[t]}else{if(i!==o.kT&&(0,o.RI)(i,t))return l[t]=1,i[t];if(a!==o.kT&&(0,o.RI)(a,t))return l[t]=2,a[t];if((d=e.propsOptions[0])&&(0,o.RI)(d,t))return l[t]=3,s[t];if(n!==o.kT&&(0,o.RI)(n,t))return l[t]=4,n[t];it&&(l[t]=0)}}const h=rt[t];let f,p;return h?("$attrs"===t&&(0,r.j)(e,"get",t),h(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==o.kT&&(0,o.RI)(n,t)?(l[t]=4,n[t]):(p=c.config.globalProperties,(0,o.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return i!==o.kT&&(0,o.RI)(i,t)?(i[t]=n,!0):r!==o.kT&&(0,o.RI)(r,t)?(r[t]=n,!0):!(0,o.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(a[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let l;return!!n[s]||e!==o.kT&&(0,o.RI)(e,s)||t!==o.kT&&(0,o.RI)(t,s)||(l=a[0])&&(0,o.RI)(l,s)||(0,o.RI)(r,s)||(0,o.RI)(rt,s)||(0,o.RI)(i.config.globalProperties,s)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,o.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let it=!0;function at(e){const t=ct(e),n=e.proxy,i=e.ctx;it=!1,t.beforeCreate&&lt(t.beforeCreate,e,"bc");const{data:a,computed:s,methods:l,watch:u,provide:c,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:k,render:S,renderTracked:x,renderTriggered:C,errorCaptured:T,serverPrefetch:E,expose:A,inheritAttrs:I,components:O,directives:F,filters:M}=t,D=null;if(d&&st(d,i,D,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,o.mf)(e)&&(i[r]=e.bind(n))}if(a){0;const t=a.call(n,n);0,(0,o.Kn)(t)&&(e.data=(0,r.qj)(t))}if(it=!0,s)for(const r in s){const e=s[r],t=(0,o.mf)(e)?e.bind(n,n):(0,o.mf)(e.get)?e.get.bind(n,n):o.dG;0;const a=!(0,o.mf)(e)&&(0,o.mf)(e.set)?e.set.bind(n):o.dG,l=tr({get:t,set:a});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(u)for(const r in u)ut(u[r],i,n,r);if(c){const e=(0,o.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Z(t,e[t])}))}function P(e,t){(0,o.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&lt(h,e,"c"),P(Me,f),P(De,p),P(Pe,v),P(qe,m),P(xe,g),P(Ce,y),P(Be,T),P($e,x),P(Ve,C),P(Re,w),P(Ne,k),P(Le,E),(0,o.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===o.dG&&(e.render=S),null!=I&&(e.inheritAttrs=I),O&&(e.components=O),F&&(e.directives=F)}function st(e,t,n=o.dG,i=!1){(0,o.kJ)(e)&&(e=vt(e));for(const a in e){const n=e[a];let s;s=(0,o.Kn)(n)?"default"in n?ee(n.from||a,n.default,!0):ee(n.from||a):ee(n),(0,r.dq)(s)&&i?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[a]=s}}function lt(e,t,n){f((0,o.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ut(e,t,n,r){const i=r.includes(".")?ae(n,r):()=>n[r];if((0,o.HD)(e)){const n=t[e];(0,o.mf)(n)&&re(i,n)}else if((0,o.mf)(e))re(i,e.bind(n));else if((0,o.Kn)(e))if((0,o.kJ)(e))e.forEach((e=>ut(e,t,n,r)));else{const r=(0,o.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,o.mf)(r)&&re(i,r,e)}else 0}function ct(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,l=a.get(t);let u;return l?u=l:i.length||n||r?(u={},i.length&&i.forEach((e=>dt(u,e,s,!0))),dt(u,t,s)):u=t,(0,o.Kn)(t)&&a.set(t,u),u}function dt(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&dt(e,i,n,!0),o&&o.forEach((t=>dt(e,t,n,!0)));for(const a in t)if(r&&"expose"===a);else{const r=ht[a]||n&&n[a];e[a]=r?r(e[a],t[a]):t[a]}return e}const ht={data:ft,props:gt,emits:gt,methods:gt,computed:gt,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:gt,directives:gt,watch:yt,provide:ft,inject:pt};function ft(e,t){return t?e?function(){return(0,o.l7)((0,o.mf)(e)?e.call(this,this):e,(0,o.mf)(t)?t.call(this,this):t)}:t:e}function pt(e,t){return gt(vt(e),vt(t))}function vt(e){if((0,o.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mt(e,t){return e?[...new Set([].concat(e,t))]:t}function gt(e,t){return e?(0,o.l7)((0,o.l7)(Object.create(null),e),t):t}function yt(e,t){if(!e)return t;if(!t)return e;const n=(0,o.l7)(Object.create(null),e);for(const r in t)n[r]=mt(e[r],t[r]);return n}function bt(e,t,n,i=!1){const a={},s={};(0,o.Nj)(s,mn,1),e.propsDefaults=Object.create(null),_t(e,t,a,s);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);n?e.props=i?a:(0,r.Um)(a):e.type.props?e.props=a:e.props=s,e.attrs=s}function wt(e,t,n,i){const{props:a,attrs:s,vnode:{patchFlag:l}}=e,u=(0,r.IU)(a),[c]=e.propsOptions;let d=!1;if(!(i||l>0)||16&l){let r;_t(e,t,a,s)&&(d=!0);for(const i in u)t&&((0,o.RI)(t,i)||(r=(0,o.rs)(i))!==i&&(0,o.RI)(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(a[i]=kt(c,u,i,void 0,e,!0)):delete a[i]);if(s!==u)for(const e in s)t&&(0,o.RI)(t,e)||(delete s[e],d=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(L(e.emitsOptions,i))continue;const l=t[i];if(c)if((0,o.RI)(s,i))l!==s[i]&&(s[i]=l,d=!0);else{const t=(0,o._A)(i);a[t]=kt(c,u,t,l,e,!1)}else l!==s[i]&&(s[i]=l,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function _t(e,t,n,i){const[a,s]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,o.Gg)(r))continue;const c=t[r];let d;a&&(0,o.RI)(a,d=(0,o._A)(r))?s&&s.includes(d)?(l||(l={}))[d]=c:n[d]=c:L(e.emitsOptions,r)||r in i&&c===i[r]||(i[r]=c,u=!0)}if(s){const t=(0,r.IU)(n),i=l||o.kT;for(let r=0;r<s.length;r++){const l=s[r];n[l]=kt(a,t,l,i[l],e,!(0,o.RI)(i,l))}}return u}function kt(e,t,n,r,i,a){const s=e[n];if(null!=s){const e=(0,o.RI)(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&(0,o.mf)(e)){const{propsDefaults:o}=i;n in o?r=o[n]:(Nn(i),r=o[n]=e.call(null,t),Ln())}else r=e}s[0]&&(a&&!e?r=!1:!s[1]||""!==r&&r!==(0,o.rs)(n)||(r=!0))}return r}function St(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},l=[];let u=!1;if(!(0,o.mf)(e)){const r=e=>{u=!0;const[n,r]=St(e,t,!0);(0,o.l7)(s,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!u)return(0,o.Kn)(e)&&r.set(e,o.Z6),o.Z6;if((0,o.kJ)(a))for(let d=0;d<a.length;d++){0;const e=(0,o._A)(a[d]);xt(e)&&(s[e]=o.kT)}else if(a){0;for(const e in a){const t=(0,o._A)(e);if(xt(t)){const n=a[e],r=s[t]=(0,o.kJ)(n)||(0,o.mf)(n)?{type:n}:n;if(r){const e=Et(Boolean,r.type),n=Et(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,o.RI)(r,"default"))&&l.push(t)}}}}const c=[s,l];return(0,o.Kn)(e)&&r.set(e,c),c}function xt(e){return"$"!==e[0]}function Ct(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Tt(e,t){return Ct(e)===Ct(t)}function Et(e,t){return(0,o.kJ)(t)?t.findIndex((t=>Tt(t,e))):(0,o.mf)(t)&&Tt(t,e)?0:-1}const At=e=>"_"===e[0]||"$stable"===e,It=e=>(0,o.kJ)(e)?e.map(En):[En(e)],Ot=(e,t,n)=>{if(t._n)return t;const r=H(((...e)=>It(t(...e))),n);return r._c=!1,r},Ft=(e,t,n)=>{const r=e._ctx;for(const i in e){if(At(i))continue;const n=e[i];if((0,o.mf)(n))t[i]=Ot(i,n,r);else if(null!=n){0;const e=It(n);t[i]=()=>e}}},Mt=(e,t)=>{const n=It(t);e.slots.default=()=>n},Dt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,o.Nj)(t,"_",n)):Ft(t,e.slots={})}else e.slots={},t&&Mt(e,t);(0,o.Nj)(e.slots,mn,1)},Pt=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=o.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?a=!1:((0,o.l7)(i,t),n||1!==e||delete i._):(a=!t.$stable,Ft(t,i)),s=t}else t&&(Mt(e,t),s={default:1});if(a)for(const o in i)At(o)||o in s||delete i[o]};function qt(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rt=0;function Nt(e,t){return function(n,r=null){(0,o.mf)(n)||(n=Object.assign({},n)),null==r||(0,o.Kn)(r)||(r=null);const i=qt(),a=new Set;let s=!1;const l=i.app={_uid:Rt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:rr,get config(){return i.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,o.mf)(e.install)?(a.add(e),e.install(l,...t)):(0,o.mf)(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(o,a,u){if(!s){0;const c=wn(n,r);return c.appContext=i,a&&t?t(c,o):e(c,o,u),s=!0,l._container=o,o.__vue_app__=l,Kn(c.component)||c.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l}};return l}}function Lt(e,t,n,i,a=!1){if((0,o.kJ)(e))return void e.forEach(((e,r)=>Lt(e,t&&((0,o.kJ)(t)?t[r]:t),n,i,a)));if(be(i)&&!a)return;const s=4&i.shapeFlag?Kn(i.component)||i.component.proxy:i.el,l=a?null:s,{i:u,r:c}=e;const d=t&&t.r,f=u.refs===o.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==c&&((0,o.HD)(d)?(f[d]=null,(0,o.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,o.mf)(c))h(c,u,12,[l,f]);else{const t=(0,o.HD)(c),i=(0,r.dq)(c);if(t||i){const r=()=>{if(e.f){const n=t?f[c]:c.value;a?(0,o.kJ)(n)&&(0,o.Od)(n,s):(0,o.kJ)(n)?n.includes(s)||n.push(s):t?(f[c]=[s],(0,o.RI)(p,c)&&(p[c]=f[c])):(c.value=[s],e.k&&(f[e.k]=c.value))}else t?(f[c]=l,(0,o.RI)(p,c)&&(p[c]=l)):i&&(c.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,$t(r,n)):r()}else 0}}function Vt(){}const $t=X;function Bt(e){return jt(e)}function jt(e,t){Vt();const n=(0,o.E9)();n.__VUE__=!0;const{insert:i,remove:a,patchProp:s,createElement:l,createText:u,createComment:c,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:v=o.dG,cloneNode:m,insertStaticContent:g}=e,y=(e,t,n,r=null,o=null,i=null,a=!1,s=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!vn(e,t)&&(r=Z(e),Y(e,o,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:u,ref:c,shapeFlag:d}=t;switch(u){case tn:b(e,t,n,r);break;case nn:w(e,t,n,r);break;case rn:null==e&&_(t,n,r,a);break;case en:q(e,t,n,r,o,i,a,s,l);break;default:1&d?x(e,t,n,r,o,i,a,s,l):6&d?R(e,t,n,r,o,i,a,s,l):(64&d||128&d)&&u.process(e,t,n,r,o,i,a,s,l,te)}null!=c&&o&&Lt(c,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=c(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},k=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=p(e),i(e,n,r),e=o;i(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),a(e),e=n;a(t)},x=(e,t,n,r,o,i,a,s,l)=>{a=a||"svg"===t.type,null==e?C(t,n,r,o,i,a,s,l):O(e,t,o,i,a,s,l)},C=(e,t,n,r,a,u,c,d)=>{let f,p;const{type:v,props:g,shapeFlag:y,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==m&&-1===w)f=e.el=m(e.el);else{if(f=e.el=l(e.type,u,g&&g.is,g),8&y?h(f,e.children):16&y&&A(e.children,f,null,r,a,u&&"foreignObject"!==v,c,d),_&&ze(e,null,r,"created"),g){for(const t in g)"value"===t||(0,o.Gg)(t)||s(f,t,null,g[t],u,e.children,r,a,X);"value"in g&&s(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Fn(p,r,e)}T(f,e,e.scopeId,c,r)}_&&ze(e,null,r,"beforeMount");const k=(!a||a&&!a.pendingBranch)&&b&&!b.persisted;k&&b.beforeEnter(f),i(f,t,n),((p=g&&g.onVnodeMounted)||k||_)&&$t((()=>{p&&Fn(p,r,e),k&&b.enter(f),_&&ze(e,null,r,"mounted")}),a)},T=(e,t,n,r,o)=>{if(n&&v(e,n),r)for(let i=0;i<r.length;i++)v(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;T(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},A=(e,t,n,r,o,i,a,s,l=0)=>{for(let u=l;u<e.length;u++){const l=e[u]=s?An(e[u]):En(e[u]);y(null,l,t,n,r,o,i,a,s)}},O=(e,t,n,r,i,a,l)=>{const u=t.el=e.el;let{patchFlag:c,dynamicChildren:d,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||o.kT,v=t.props||o.kT;let m;n&&zt(n,!1),(m=v.onVnodeBeforeUpdate)&&Fn(m,n,t,e),f&&ze(t,e,n,"beforeUpdate"),n&&zt(n,!0);const g=i&&"foreignObject"!==t.type;if(d?D(e.dynamicChildren,d,u,n,r,g,a):l||B(e,t,u,null,n,r,g,a,!1),c>0){if(16&c)P(u,t,p,v,n,r,i);else if(2&c&&p.class!==v.class&&s(u,"class",null,v.class,i),4&c&&s(u,"style",p.style,v.style,i),8&c){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],l=p[a],c=v[a];c===l&&"value"!==a||s(u,a,l,c,i,e.children,n,r,X)}}1&c&&e.children!==t.children&&h(u,t.children)}else l||null!=d||P(u,t,p,v,n,r,i);((m=v.onVnodeUpdated)||f)&&$t((()=>{m&&Fn(m,n,t,e),f&&ze(t,e,n,"updated")}),r)},D=(e,t,n,r,o,i,a)=>{for(let s=0;s<t.length;s++){const l=e[s],u=t[s],c=l.el&&(l.type===en||!vn(l,u)||70&l.shapeFlag)?f(l.el):n;y(l,u,c,null,r,o,i,a,!0)}},P=(e,t,n,r,i,a,l)=>{if(n!==r){for(const u in r){if((0,o.Gg)(u))continue;const c=r[u],d=n[u];c!==d&&"value"!==u&&s(e,u,d,c,l,t.children,i,a,X)}if(n!==o.kT)for(const u in n)(0,o.Gg)(u)||u in r||s(e,u,n[u],null,l,t.children,i,a,X);"value"in r&&s(e,"value",n.value,r.value)}},q=(e,t,n,r,o,a,s,l,c)=>{const d=t.el=e?e.el:u(""),h=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:v}=t;v&&(l=l?l.concat(v):v),null==e?(i(d,n,r),i(h,n,r),A(t.children,n,h,o,a,s,l,c)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,o,a,s,l),(null!=t.key||o&&t===o.subTree)&&Ht(e,t,!0)):B(e,t,n,h,o,a,s,l,c)},R=(e,t,n,r,o,i,a,s,l)=>{t.slotScopeIds=s,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,a,l):N(t,n,r,o,i,a,l):L(e,t,l)},N=(e,t,n,r,o,i,a)=>{const s=e.component=Pn(e,r,o);if(we(e)&&(s.ctx.renderer=te),zn(s),s.asyncDep){if(o&&o.registerDep(s,V),!e.el){const e=s.subTree=wn(nn);w(null,e,t,n)}}else V(s,e,t,n,o,i,a)},L=(e,t,n)=>{const r=t.component=e.component;if(Q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,i,a,s,l)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:u,vnode:c}=e,d=n;0,zt(e,!1),n?(n.el=c.el,$(e,n,l)):n=c,r&&(0,o.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Fn(t,u,n,c),zt(e,!0);const h=U(e);0;const p=e.subTree;e.subTree=h,y(p,h,f(p.el),Z(p),e,a,s),n.el=h.el,null===d&&G(e,h.el),i&&$t(i,a),(t=n.props&&n.props.onVnodeUpdated)&&$t((()=>Fn(t,u,n,c)),a)}else{let r;const{el:l,props:u}=t,{bm:c,m:d,parent:h}=e,f=be(t);if(zt(e,!1),c&&(0,o.ir)(c),!f&&(r=u&&u.onVnodeBeforeMount)&&Fn(r,h,t),zt(e,!0),l&&re){const n=()=>{e.subTree=U(e),re(l,e.subTree,e,a,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,y(null,r,n,i,e,a,s),t.el=r.el}if(d&&$t(d,a),!f&&(r=u&&u.onVnodeMounted)){const e=t;$t((()=>Fn(r,h,e)),a)}(256&t.shapeFlag||h&&be(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&$t(e.a,a),e.isMounted=!0,t=n=i=null}},c=e.effect=new r.qq(u,(()=>E(d)),e.scope),d=e.update=()=>c.run();d.id=e.uid,zt(e,!0),d()},$=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,wt(e,t.props,o,n),Pt(e,t.children,n),(0,r.Jd)(),F(),(0,r.lk)()},B=(e,t,n,r,o,i,a,s,l=!1)=>{const u=e&&e.children,c=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,d,n,r,o,i,a,s,l);if(256&f)return void j(u,d,n,r,o,i,a,s,l)}8&p?(16&c&&X(u,o,i),d!==u&&h(n,d)):16&c?16&p?z(u,d,n,r,o,i,a,s,l):X(u,o,i,!0):(8&c&&h(n,""),16&p&&A(d,n,r,o,i,a,s,l))},j=(e,t,n,r,i,a,s,l,u)=>{e=e||o.Z6,t=t||o.Z6;const c=e.length,d=t.length,h=Math.min(c,d);let f;for(f=0;f<h;f++){const r=t[f]=u?An(t[f]):En(t[f]);y(e[f],r,n,null,i,a,s,l,u)}c>d?X(e,i,a,!0,!1,h):A(t,n,r,i,a,s,l,u,h)},z=(e,t,n,r,i,a,s,l,u)=>{let c=0;const d=t.length;let h=e.length-1,f=d-1;while(c<=h&&c<=f){const r=e[c],o=t[c]=u?An(t[c]):En(t[c]);if(!vn(r,o))break;y(r,o,n,null,i,a,s,l,u),c++}while(c<=h&&c<=f){const r=e[h],o=t[f]=u?An(t[f]):En(t[f]);if(!vn(r,o))break;y(r,o,n,null,i,a,s,l,u),h--,f--}if(c>h){if(c<=f){const e=f+1,o=e<d?t[e].el:r;while(c<=f)y(null,t[c]=u?An(t[c]):En(t[c]),n,o,i,a,s,l,u),c++}}else if(c>f)while(c<=h)Y(e[c],i,a,!0),c++;else{const p=c,v=c,m=new Map;for(c=v;c<=f;c++){const e=t[c]=u?An(t[c]):En(t[c]);null!=e.key&&m.set(e.key,c)}let g,b=0;const w=f-v+1;let _=!1,k=0;const S=new Array(w);for(c=0;c<w;c++)S[c]=0;for(c=p;c<=h;c++){const r=e[c];if(b>=w){Y(r,i,a,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(g=v;g<=f;g++)if(0===S[g-v]&&vn(r,t[g])){o=g;break}void 0===o?Y(r,i,a,!0):(S[o-v]=c+1,o>=k?k=o:_=!0,y(r,t[o],n,null,i,a,s,l,u),b++)}const x=_?Ut(S):o.Z6;for(g=x.length-1,c=w-1;c>=0;c--){const e=v+c,o=t[e],h=e+1<d?t[e+1].el:r;0===S[c]?y(null,o,n,h,i,a,s,l,u):_&&(g<0||c!==x[g]?H(o,n,h,2):g--)}}},H=(e,t,n,r,o=null)=>{const{el:a,type:s,transition:l,children:u,shapeFlag:c}=e;if(6&c)return void H(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void s.move(e,t,n,te);if(s===en){i(a,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void i(e.anchor,t,n)}if(s===rn)return void k(e,t,n);const d=2!==r&&1&c&&l;if(d)if(0===r)l.beforeEnter(a),i(a,t,n),$t((()=>l.enter(a)),o);else{const{leave:e,delayLeave:r,afterLeave:o}=l,s=()=>i(a,t,n),u=()=>{e(a,(()=>{s(),o&&o()}))};r?r(a,s,u):u()}else i(a,t,n)},Y=(e,t,n,r=!1,o=!1)=>{const{type:i,props:a,ref:s,children:l,dynamicChildren:u,shapeFlag:c,patchFlag:d,dirs:h}=e;if(null!=s&&Lt(s,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&h,p=!be(e);let v;if(p&&(v=a&&a.onVnodeBeforeUnmount)&&Fn(v,t,e),6&c)J(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&ze(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,o,te,r):u&&(i!==en||d>0&&64&d)?X(u,t,n,!1,!0):(i===en&&384&d||!o&&16&c)&&X(l,t,n),r&&W(e)}(p&&(v=a&&a.onVnodeUnmounted)||f)&&$t((()=>{v&&Fn(v,t,e),f&&ze(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===en)return void K(n,r);if(t===rn)return void S(e);const i=()=>{a(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,a=()=>t(n,i);r?r(e.el,i,a):a()}else i()},K=(e,t)=>{let n;while(e!==t)n=p(e),a(e),e=n;a(t)},J=(e,t,n)=>{const{bum:r,scope:i,update:a,subTree:s,um:l}=e;r&&(0,o.ir)(r),i.stop(),a&&(a.active=!1,Y(s,e,t,n)),l&&$t(l,t),$t((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,o=!1,i=0)=>{for(let a=i;a<e.length;a++)Y(e[a],t,n,r,o)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),F(),M(),t._vnode=e},te={p:y,um:Y,m:H,r:W,mt:N,mc:A,pc:B,pbc:D,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:Nt(ee,ne)}}function zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ht(e,t,n=!1){const r=e.children,i=t.children;if((0,o.kJ)(r)&&(0,o.kJ)(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=An(i[o]),t.el=e.el),n||Ht(e,t))}}function Ut(e){const t=e.slice(),n=[0];let r,o,i,a,s;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}i=0,a=n.length-1;while(i<a)s=i+a>>1,e[n[s]]<l?i=s+1:a=s;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,a=n[i-1];while(i-- >0)n[i]=a,a=t[a];return n}const Yt=e=>e.__isTeleport,Wt=e=>e&&(e.disabled||""===e.disabled),Qt=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,Kt=(e,t)=>{const n=e&&e.to;if((0,o.HD)(n)){if(t){const e=t(n);return e}return null}return n},Gt={__isTeleport:!0,process(e,t,n,r,o,i,a,s,l,u){const{mc:c,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:v,createComment:m}}=u,g=Wt(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=v(""),u=t.anchor=v("");f(e,n,r),f(u,n,r);const d=t.target=Kt(t.props,p),h=t.targetAnchor=v("");d&&(f(h,d),a=a||Qt(d));const m=(e,t)=>{16&y&&c(b,e,t,o,i,a,s,l)};g?m(n,u):d&&m(d,h)}else{t.el=e.el;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,v=Wt(e.props),m=v?n:c,y=v?r:f;if(a=a||Qt(c),w?(h(e.dynamicChildren,w,m,o,i,a,s),Ht(e,t,!0)):l||d(e,t,m,y,o,i,a,s,!1),g)v||Jt(t,n,r,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Kt(t.props,p);e&&Jt(t,e,null,u,0)}else v&&Jt(t,c,f,u,1)}},remove(e,t,n,r,{um:o,o:{remove:i}},a){const{shapeFlag:s,children:l,anchor:u,targetAnchor:c,target:d,props:h}=e;if(d&&i(c),(a||!Wt(h))&&(i(u),16&s))for(let f=0;f<l.length;f++){const e=l[f];o(e,t,n,!0,!!e.dynamicChildren)}},move:Jt,hydrate:Xt};function Jt(e,t,n,{o:{insert:r},m:o},i=2){0===i&&r(e.targetAnchor,t,n);const{el:a,anchor:s,shapeFlag:l,children:u,props:c}=e,d=2===i;if(d&&r(a,t,n),(!d||Wt(c))&&16&l)for(let h=0;h<u.length;h++)o(u[h],t,n,2);d&&r(s,t,n)}function Xt(e,t,n,r,o,i,{o:{nextSibling:a,parentNode:s,querySelector:l}},u){const c=t.target=Kt(t.props,l);if(c){const l=c._lpa||c.firstChild;if(16&t.shapeFlag)if(Wt(t.props))t.anchor=u(a(e),t,s(e),n,r,o,i),t.targetAnchor=l;else{t.anchor=a(e);let s=l;while(s)if(s=a(s),s&&8===s.nodeType&&"teleport anchor"===s.data){t.targetAnchor=s,c._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(l,t,c,n,r,o,i)}}return t.anchor&&a(t.anchor)}const Zt=Gt,en=Symbol(void 0),tn=Symbol(void 0),nn=Symbol(void 0),rn=Symbol(void 0),on=[];let an=null;function sn(e=!1){on.push(an=e?null:[])}function ln(){on.pop(),an=on[on.length-1]||null}let un=1;function cn(e){un+=e}function dn(e){return e.dynamicChildren=un>0?an||o.Z6:null,ln(),un>0&&an&&an.push(e),e}function hn(e,t,n,r,o,i){return dn(bn(e,t,n,r,o,i,!0))}function fn(e,t,n,r,o){return dn(wn(e,t,n,r,o,!0))}function pn(e){return!!e&&!0===e.__v_isVNode}function vn(e,t){return e.type===t.type&&e.key===t.key}const mn="__vInternal",gn=({key:e})=>null!=e?e:null,yn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,o.HD)(e)||(0,r.dq)(e)||(0,o.mf)(e)?{i:V,r:e,k:t,f:!!n}:e:null;function bn(e,t=null,n=null,r=0,i=null,a=(e===en?0:1),s=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gn(t),ref:t&&yn(t),scopeId:$,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(In(u,n),128&a&&e.normalize(u)):n&&(u.shapeFlag|=(0,o.HD)(n)?8:16),un>0&&!s&&an&&(u.patchFlag>0||6&a)&&32!==u.patchFlag&&an.push(u),u}const wn=_n;function _n(e,t=null,n=null,i=0,a=null,s=!1){if(e&&e!==We||(e=nn),pn(e)){const r=Sn(e,t,!0);return n&&In(r,n),un>0&&!s&&an&&(6&r.shapeFlag?an[an.indexOf(e)]=r:an.push(r)),r.patchFlag|=-2,r}if(er(e)&&(e=e.__vccOpts),t){t=kn(t);let{class:e,style:n}=t;e&&!(0,o.HD)(e)&&(t.class=(0,o.C_)(e)),(0,o.Kn)(n)&&((0,r.X3)(n)&&!(0,o.kJ)(n)&&(n=(0,o.l7)({},n)),t.style=(0,o.j5)(n))}const l=(0,o.HD)(e)?1:J(e)?128:Yt(e)?64:(0,o.Kn)(e)?4:(0,o.mf)(e)?2:0;return bn(e,t,n,i,a,l,s,!0)}function kn(e){return e?(0,r.X3)(e)||mn in e?(0,o.l7)({},e):e:null}function Sn(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:s}=e,l=t?On(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&gn(l),ref:t&&t.ref?n&&i?(0,o.kJ)(i)?i.concat(yn(t)):[i,yn(t)]:yn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==en?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sn(e.ssContent),ssFallback:e.ssFallback&&Sn(e.ssFallback),el:e.el,anchor:e.anchor};return u}function xn(e=" ",t=0){return wn(tn,null,e,t)}function Cn(e,t){const n=wn(rn,null,e);return n.staticCount=t,n}function Tn(e="",t=!1){return t?(sn(),fn(nn,null,e)):wn(nn,null,e)}function En(e){return null==e||"boolean"===typeof e?wn(nn):(0,o.kJ)(e)?wn(en,null,e.slice()):"object"===typeof e?An(e):wn(tn,null,String(e))}function An(e){return null===e.el||e.memo?e:Sn(e)}function In(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,o.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),In(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||mn in t?3===r&&V&&(1===V.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=V}}else(0,o.mf)(t)?(t={default:t,_ctx:V},n=32):(t=String(t),64&r?(n=16,t=[xn(t)]):n=8);e.children=t,e.shapeFlag|=n}function On(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,o.C_)([t.class,r.class]));else if("style"===e)t.style=(0,o.j5)([t.style,r.style]);else if((0,o.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,o.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Fn(e,t,n,r=null){f(e,t,7,[n,r])}const Mn=qt();let Dn=0;function Pn(e,t,n){const i=e.type,a=(t?t.appContext:e.appContext)||Mn,s={uid:Dn++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:St(i,a),emitsOptions:N(i,a),emit:null,emitted:null,propsDefaults:o.kT,inheritAttrs:i.inheritAttrs,ctx:o.kT,data:o.kT,props:o.kT,attrs:o.kT,slots:o.kT,refs:o.kT,setupState:o.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=R.bind(null,s),e.ce&&e.ce(s),s}let qn=null;const Rn=()=>qn||V,Nn=e=>{qn=e,e.scope.on()},Ln=()=>{qn&&qn.scope.off(),qn=null};function Vn(e){return 4&e.vnode.shapeFlag}let $n,Bn,jn=!1;function zn(e,t=!1){jn=t;const{props:n,children:r}=e.vnode,o=Vn(e);bt(e,n,o,t),Dt(e,r);const i=o?Hn(e,t):void 0;return jn=!1,i}function Hn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ot));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Qn(e):null;Nn(e),(0,r.Jd)();const a=h(i,e,0,[e.props,n]);if((0,r.lk)(),Ln(),(0,o.tI)(a)){if(a.then(Ln,Ln),t)return a.then((n=>{Un(e,n,t)})).catch((t=>{p(t,e,0)}));e.asyncDep=a}else Un(e,a,t)}else Yn(e,t)}function Un(e,t,n){(0,o.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,o.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Yn(e,n)}function Yn(e,t,n){const i=e.type;if(!e.render){if(!t&&$n&&!i.render){const t=i.template||ct(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:s}=i,l=(0,o.l7)((0,o.l7)({isCustomElement:n,delimiters:a},r),s);i.render=$n(t,l)}}e.render=i.render||o.dG,Bn&&Bn(e)}Nn(e),(0,r.Jd)(),at(e),(0,r.lk)(),Ln()}function Wn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Qn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Wn(e))},slots:e.slots,emit:e.emit,expose:t}}function Kn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in rt?rt[n](e):void 0}}))}const Gn=/(?:^|[-_])(\w)/g,Jn=e=>e.replace(Gn,(e=>e.toUpperCase())).replace(/[-_]/g,"");function Xn(e,t=!0){return(0,o.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Zn(e,t,n=!1){let r=Xn(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Jn(r):n?"App":"Anonymous"}function er(e){return(0,o.mf)(e)&&"__vccOpts"in e}const tr=(e,t)=>(0,r.Fl)(e,t,jn);function nr(e,t,n){const r=arguments.length;return 2===r?(0,o.Kn)(t)&&!(0,o.kJ)(t)?pn(t)?wn(e,null,[t]):wn(e,t):wn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&pn(n)&&(n=[n]),wn(e,t,n))}Symbol("");const rr="3.2.39"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return he},W3:function(){return oe},iM:function(){return de},ri:function(){return ge},uT:function(){return L}});n(6699);var r=n(7139),o=n(3396),i=n(4870);const a="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,l=s&&s.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?s.createElementNS(a,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const o=l.content;if(r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const o=e.style,i=(0,r.HD)(n);if(n&&!i){for(const e in n)f(o,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(o,e,"")}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const h=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=m(e,t);h.test(n)?e.setProperty((0,r.rs)(o),n.replace(h,""),"important"):e[o]=n}}const p=["Webkit","Moz","ms"],v={};function m(e,t){const n=v[t];if(n)return n;let o=(0,r._A)(t);if("filter"!==o&&o in e)return v[t]=o;o=(0,r.kC)(o);for(let r=0;r<p.length;r++){const n=p[r]+o;if(n in e)return v[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const o=(0,r.Pq)(t);null==n||o&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function b(e,t,n,o,i,a,s){if("innerHTML"===t||"textContent"===t)return o&&s(o,i,a),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?n=(0,r.yA)(n):null==n&&"string"===o?(n="",l=!0):"number"===o&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}const[w,_]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let k=0;const S=Promise.resolve(),x=()=>{k=0},C=()=>k||(S.then(x),k=w());function T(e,t,n,r){e.addEventListener(t,n,r)}function E(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,o=null){const i=e._vei||(e._vei={}),a=i[t];if(r&&a)a.value=r;else{const[n,s]=O(t);if(r){const a=i[t]=F(r,o);T(e,n,a,s)}else a&&(E(e,n,a,s),i[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function O(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}function F(e,t){const n=e=>{const r=e.timeStamp||w();(_||r>=n.attached-1)&&(0,o.$d)(M(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function M(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const D=/^on[a-z]/,P=(e,t,n,o,i=!1,a,s,l,u)=>{"class"===t?c(e,o,i):"style"===t?d(e,n,o):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,o,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):q(e,t,o,i))?b(e,t,o,a,s,l,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),y(e,t,o,i))};function q(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&D.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!D.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const R="transition",N="animation",L=(e,{slots:t})=>(0,o.h)(o.P$,z(e),t);L.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$=L.props=(0,r.l7)({},o.P$.props,V),B=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function z(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:c=s,appearToClass:d=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=H(i),m=v&&v[0],g=v&&v[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:k,onBeforeAppear:S=y,onAppear:x=b,onAppearCancelled:C=w}=t,T=(e,t,n)=>{W(e,t?d:l),W(e,t?c:s),n&&n()},E=(e,t)=>{e._isLeaving=!1,W(e,h),W(e,p),W(e,f),t&&t()},A=e=>(t,n)=>{const r=e?x:b,i=()=>T(t,e,n);B(r,[t,i]),Q((()=>{W(t,e?u:a),Y(t,e?d:l),j(r)||G(t,o,m,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){B(y,[e]),Y(e,a),Y(e,s)},onBeforeAppear(e){B(S,[e]),Y(e,u),Y(e,c)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>E(e,t);Y(e,h),ee(),Y(e,f),Q((()=>{e._isLeaving&&(W(e,h),Y(e,p),j(_)||G(e,o,g,n))})),B(_,[e,n])},onEnterCancelled(e){T(e,!1),B(w,[e])},onAppearCancelled(e){T(e,!0),B(C,[e])},onLeaveCancelled(e){E(e),B(k,[e])}})}function H(e){if(null==e)return null;if((0,r.Kn)(e))return[U(e.enter),U(e.leave)];{const t=U(e);return[t,t]}}function U(e){const t=(0,r.He)(e);return t}function Y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Q(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let K=0;function G(e,t,n,r){const o=e._endId=++K,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:a,timeout:s,propCount:l}=J(e,t);if(!a)return r();const u=a+"end";let c=0;const d=()=>{e.removeEventListener(u,h),i()},h=t=>{t.target===e&&++c>=l&&d()};setTimeout((()=>{c<l&&d()}),s+1),e.addEventListener(u,h)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(R+"Delay"),i=r(R+"Duration"),a=X(o,i),s=r(N+"Delay"),l=r(N+"Duration"),u=X(s,l);let c=null,d=0,h=0;t===R?a>0&&(c=R,d=a,h=i.length):t===N?u>0&&(c=N,d=u,h=l.length):(d=Math.max(a,u),c=d>0?a>u?R:N:null,h=c?c===R?i.length:l.length:0);const f=c===R&&/\b(transform|all)(,|$)/.test(n[R+"Property"]);return{type:c,timeout:d,propCount:h,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Z(t)+Z(e[n]))))}function Z(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},$,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,o.FN)(),r=(0,o.Y8)();let a,s;return(0,o.ic)((()=>{if(!a.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!le(a[0].el,n.vnode.el,t))return;a.forEach(ie),a.forEach(ae);const r=a.filter(se);ee(),r.forEach((e=>{const n=e.el,r=n.style;Y(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const o=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",o),n._moveCb=null,W(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const l=(0,i.IU)(e),u=z(l);let c=l.tag||o.HY;a=s,s=t.default?(0,o.Q6)(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&(0,o.nK)(t,(0,o.U2)(t,u,r,n))}if(a)for(let e=0;e<a.length;e++){const t=a[e];(0,o.nK)(t,(0,o.U2)(t,u,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,o.Wm)(c,null,s)}}},oe=re;function ie(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ae(e){ne.set(e,e.el.getBoundingClientRect())}function se(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${o}px)`,t.transitionDuration="0s",e}}function le(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const o=1===t.nodeType?t:t.parentNode;o.appendChild(r);const{hasTransform:i}=J(r);return o.removeChild(r),i}const ue=["ctrl","shift","alt","meta"],ce={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ue.some((n=>e[`${n}Key`]&&!t.includes(n)))},de=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ce[t[e]];if(r&&r(n,t))return}return e(n,...r)},he={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):fe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),fe(e,!0),r.enter(e)):r.leave(e,(()=>{fe(e,!1)})):fe(e,t))},beforeUnmount(e,{value:t}){fe(e,t)}};function fe(e,t){e.style.display=t?e._vod:"none"}const pe=(0,r.l7)({patchProp:P},u);let ve;function me(){return ve||(ve=(0,o.Us)(pe))}const ge=(...e)=>{const t=me().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=ye(e);if(!o)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function ye(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return M},E9:function(){return re},F7:function(){return x},Gg:function(){return H},HD:function(){return q},He:function(){return te},Kn:function(){return N},NO:function(){return k},Nj:function(){return ee},Od:function(){return E},PO:function(){return j},Pq:function(){return s},RI:function(){return I},S0:function(){return z},W7:function(){return B},WV:function(){return v},Z6:function(){return w},_A:function(){return W},_N:function(){return F},aU:function(){return X},dG:function(){return _},e1:function(){return i},fY:function(){return r},hR:function(){return J},hq:function(){return m},ir:function(){return Z},j5:function(){return u},kC:function(){return G},kJ:function(){return O},kT:function(){return b},l7:function(){return T},mf:function(){return P},rs:function(){return K},tI:function(){return L},tR:function(){return C},yA:function(){return l},yk:function(){return R},zw:function(){return g}});const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);const a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s=r(a);function l(e){return!!e||""===e}function u(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=q(r)?h(r):u(r);if(o)for(const e in o)t[e]=o[e]}return t}return q(e)||N(e)?e:void 0}const c=/;(?![^(]*\))/g,d=/:(.+)/;function h(e){const t={};return e.split(c).forEach((e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(q(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(N(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=v(e[r],t[r]);return n}function v(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return e===t;if(n=O(e),r=O(t),n||r)return!(!n||!r)&&p(e,t);if(n=N(e),r=N(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!v(e[n],t[n]))return!1}}return String(e)===String(t)}function m(e,t){return e.findIndex((e=>v(e,t)))}const g=e=>q(e)?e:null==e?"":O(e)||N(e)&&(e.toString===V||!P(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):F(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!N(t)||O(t)||j(t)?t:String(t),b={},w=[],_=()=>{},k=()=>!1,S=/^on[^a-z]/,x=e=>S.test(e),C=e=>e.startsWith("onUpdate:"),T=Object.assign,E=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,I=(e,t)=>A.call(e,t),O=Array.isArray,F=e=>"[object Map]"===$(e),M=e=>"[object Set]"===$(e),D=e=>"[object Date]"===$(e),P=e=>"function"===typeof e,q=e=>"string"===typeof e,R=e=>"symbol"===typeof e,N=e=>null!==e&&"object"===typeof e,L=e=>N(e)&&P(e.then)&&P(e.catch),V=Object.prototype.toString,$=e=>V.call(e),B=e=>$(e).slice(8,-1),j=e=>"[object Object]"===$(e),z=e=>q(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Y=/-(\w)/g,W=U((e=>e.replace(Y,((e,t)=>t?t.toUpperCase():"")))),Q=/\B([A-Z])/g,K=U((e=>e.replace(Q,"-$1").toLowerCase())),G=U((e=>e.charAt(0).toUpperCase()+e.slice(1))),J=U((e=>e?`on${G(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),o="firebase",i="9.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(o,i,"app")},2336:function(e,t,n){"use strict";n.d(t,{Xb:function(){return lt},v0:function(){return cr},Aj:function(){return ct},e5:function(){return ut},w7:function(){return dt}});n(1703),n(6699);var r=n(223),o=n(7077);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var a=n(5168),s=n(7142);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=l,c=new r.LL("auth","Firebase",l()),d=new a.Yd("@firebase/auth");function h(e,...t){d.logLevel<=a["in"].ERROR&&d.error(`Auth (${o.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.LL("auth","Firebase",o);return i.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(e){b(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=(0,o.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.vZ)(o,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function q(e,t,n,o,i={}){return R(e,i,(async()=>{let i={},a={};o&&("GET"===t?a=o:i={body:JSON.stringify(o)});const s=(0,r.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),F.fetch()(L(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))}))}async function R(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},M),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw $(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw $(e,"user-disabled",i);const s=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw v(e,s,a);f(e,s)}}catch(i){if(i instanceof r.ZR)throw i;f(e,"network-request-failed")}}async function N(e,t,n,r,o={}){const i=await q(e,t,n,r,o);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function L(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?O(e.config,o):`${e.config.apiScheme}://${o}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return q(e,"POST","/v1/accounts:delete",t)}async function j(e,t){return q(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.m9)(e),o=await n.getIdToken(t),i=Y(o);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:o,authTime:z(U(i.auth_time)),issuedAtTime:z(U(i.iat)),expirationTime:z(U(i.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function U(e){return 1e3*Number(e)}function Y(e){var t;const[n,o,i]=e.split(".");if(void 0===n||void 0===o||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(o);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(a){return h("Caught error parsing JWT payload as JSON",null===(t=a)||void 0===t?void 0:t.toString()),null}}function W(e){const t=Y(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.ZR&&K(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function K({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),o=await Q(e,j(n,{idToken:r}));g(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],s=ee(e.providerData,a),l=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),c=!!l&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Z(e){const t=(0,r.m9)(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await R(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,a=L(e,o,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(a,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(g("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new J(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Q(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Q(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,a,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,v=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:k,stsTokenManager:S}=t;g(b&&S,e,"internal-error");const x=re.fromJSON(this.name,S);g("string"===typeof b,e,"internal-error"),oe(c,e.name),oe(d,e.name),g("boolean"===typeof w,e,"internal-error"),g("boolean"===typeof _,e,"internal-error"),oe(h,e.name),oe(f,e.name),oe(p,e.name),oe(v,e.name),oe(m,e.name),oe(y,e.name);const C=new ie({uid:b,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:x,createdAt:m,lastLoginAt:y});return k&&Array.isArray(k)&&(C.providerData=k.map((e=>Object.assign({},e)))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const se=ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,o),this.fullPersistenceKey=le("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(se),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||_(se);const i=le(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(a=n),o=u;break}}catch(l){}const s=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&s.length?(o=s[0],a&&await o._set(i,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(l){}}))),new ue(o,e,n)):new ue(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function ke(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=ce((0,r.z$)());break;case"Worker":n=`${ce((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(o){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ee(this),this.idTokenSubscription=new Ee(this),this.beforeStateQueue=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==i||!(null===a||void 0===a?void 0:a.user)||(r=a.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await X(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Te(e){return(0,r.m9)(e)}class Ee{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return q(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fe(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function Me(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Ae{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new De(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new De(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Oe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ie(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="http://localhost";class Re extends Ae{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Re(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Re(n,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:qe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return q(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function Le(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function Ve(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const $e={["USER_NOT_FOUND"]:"user-not-found"};async function Be(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),$e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Ae{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Le(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ve(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Be(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,o=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=o?(0,r.zd)((0,r.pd)(o))["link"]:null;return i||o||n||t||e}class Ue{constructor(e){var t,n,o,i,a,s;const l=(0,r.zd)((0,r.pd)(e)),u=null!==(t=l["apiKey"])&&void 0!==t?t:null,c=null!==(n=l["oobCode"])&&void 0!==n?n:null,d=ze(null!==(o=l["mode"])&&void 0!==o?o:null);g(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=l["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=He(e);try{return new Ue(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return De._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ue.parseLink(t);return g(n,"argument-error"),De._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Qe{constructor(){super("facebook.com")}static credential(e){return Re._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends Qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Re._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ge.credential(t,n)}catch(r){return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com",Ge.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Qe{constructor(){super("github.com")}static credential(e){return Re._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Qe{constructor(){super("twitter.com")}static credential(e,t){return Re._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t){return N(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=tt(n),a=new et({user:o,providerId:i,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends r.ZR{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r=await Q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){var r;const{auth:o}=e,i="reauthenticate";try{const r=await Q(e,rt(o,i,t,e),n);g(r.idToken,o,"internal-error");const a=Y(r.idToken);g(a,o,"internal-error");const{sub:s}=a;return g(e.uid===s,o,"user-mismatch"),et._forOperation(e,i,r)}catch(a){throw"auth/user-not-found"===(null===(r=a)||void 0===r?void 0:r.code)&&f(o,"user-mismatch"),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t,n=!1){const r="signIn",o=await rt(e,r,t),i=await et._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function st(e,t){return at(Te(e),t)}async function lt(e,t,n){const r=Te(e),o=await Ze(r,{returnSecureToken:!0,email:t,password:n}),i=await et._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(i.user),i}function ut(e,t,n){return st((0,r.m9)(e),Ye.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t,n,o){return(0,r.m9)(e).onAuthStateChanged(t,n,o)}function dt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function ft(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const pt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){const e=(0,r.z$)();return he(e)||ye(e)}const gt=1e3,yt=10;class bt extends vt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mt()&&ke(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);we()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bt.type="LOCAL";const wt=bt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends vt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_t.type="SESSION";const kt=_t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new xt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map((async e=>e(t.origin,o))),s=await St(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((a,s)=>{const l=Ct("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),a(t.data.response);break;default:clearTimeout(u),clearTimeout(o),s(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function At(e){Et().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return"undefined"!==typeof Et()["WorkerGlobalScope"]&&"function"===typeof Et()["importScripts"]}async function Ot(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ft(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Mt(){return It()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="firebaseLocalStorageDb",Pt=1,qt="firebaseLocalStorage",Rt="fbase_key";class Nt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lt(e,t){return e.transaction([qt],t?"readwrite":"readonly").objectStore(qt)}function Vt(){const e=indexedDB.deleteDatabase(Dt);return new Nt(e).toPromise()}function $t(){const e=indexedDB.open(Dt,Pt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(qt,{keyPath:Rt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(qt)?t(n):(n.close(),await Vt(),t(await $t()))}))}))}async function Bt(e,t,n){const r=Lt(e,!0).put({[Rt]:t,value:n});return new Nt(r).toPromise()}async function jt(e,t){const n=Lt(e,!1).get(t),r=await new Nt(n).toPromise();return void 0===r?null:r.value}function zt(e,t){const n=Lt(e,!0).delete(t);return new Nt(n).toPromise()}const Ht=800,Ut=3;class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await $t()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ut)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return It()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xt._getInstance(Mt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ot(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ft()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $t();return await Bt(e,pt,"1"),await zt(e,pt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Bt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>zt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lt(e,!1).getAll();return new Nt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Wt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function Kt(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Gt().appendChild(r)}))}function Xt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xt("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="recaptcha";async function en(e,t,n){var r;const o=await n.verify();try{let i;if(g("string"===typeof o,e,"argument-error"),g(n.type===Zt,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){g("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;g(n,e,"missing-multi-factor-info");const a=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Ne(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e){this.providerId=tn.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return en(this.auth,e,(0,r.m9)(t))}static credential(e,t){return je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tn.credentialFromTaggedObject(t)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t){return t?_(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class rn extends Ae{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function on(e){return at(e.auth,new rn(e),e.bypassAuthState)}function an(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new rn(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ot(n,new rn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:a}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return on;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new I(2e3,1e4);class cn extends ln{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Ct();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,un.get())};e()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn="pendingRedirect",hn=new Map;class fn extends ln{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(e,t){const n=gn(t),r=mn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function vn(e,t){hn.set(e._key(),t)}function mn(e){return _(e._redirectPersistence)}function gn(e){return le(dn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t,n=!1){const r=Te(e),o=nn(r,t),i=new fn(r,o,n),a=await i.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class wn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Sn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!kn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(e))}saveEventToCache(e){this.cachedEventUids.add(_n(e)),this.lastProcessedEventTime=Date.now()}}function _n(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function kn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Sn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t={}){return q(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function En(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xn(e);for(const r of t)try{if(An(r))return}catch(n){}f(e,"unauthorized-domain")}function An(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Tn.test(n))return!1;if(Cn.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new I(3e4,6e4);function On(){const e=Et().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Fn(e){return new Promise(((t,n)=>{var r,o,i;function a(){On(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{On(),n(p(e,"network-request-failed"))},timeout:In.get()})}if(null===(o=null===(r=Et().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Et().gapi)||void 0===i?void 0:i.load)){const t=Xt("iframefcb");return Et()[t]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},Jt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw Mn=null,e}))}let Mn=null;function Dn(e){return Mn=Mn||Fn(e),Mn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new I(5e3,15e3),qn="__/auth/iframe",Rn="emulator/auth/iframe",Nn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ln=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Rn):`https://${e.config.authDomain}/${qn}`,i={apiKey:t.apiKey,appName:e.name,v:o.Jn},a=Ln.get(e.config.apiHost);a&&(i.eid=a);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function $n(e){const t=await Dn(e),n=Et().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Vn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=Et().setTimeout((()=>{r(o)}),Pn.get());function a(){Et().clearTimeout(i),n(t)}t.ping(a).then(a,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jn=500,zn=600,Hn="_blank",Un="http://localhost";class Yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Wn(e,t,n,o=jn,i=zn){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-o)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Bn),{width:o.toString(),height:i.toString(),top:a,left:s}),c=(0,r.z$)().toLowerCase();n&&(l=fe(c)?Hn:n),de(c)&&(t=t||Un,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(c)&&"_self"!==l)return Qn(t||"",l),new Yn(null);const h=window.open(t||"",l,d);g(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Yn(h)}function Qn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="__/auth/handler",Gn="emulator/auth/handler";function Jn(e,t,n,i,a,s){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.Jn,eventId:a};if(t instanceof We){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))l[e]=t}if(t instanceof Qe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Xn(e)}?${(0,r.xO)(u).slice(1)}`}function Xn({config:e}){return e.emulator?O(e,Gn):`https://${e.authDomain}/${Kn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kt,this._completeRedirectFn=yn,this._overrideRedirectResult=vn}async _openPopup(e,t,n,r){var o;b(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Jn(e,t,n,x(),r);return Wn(e,i,Ct())}async _openRedirect(e,t,n,r){return await this._originValidation(e),At(Jn(e,t,n,x(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await $n(e),n=new wn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zn,{type:Zn},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==o&&t(!!o),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=En(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||he()||ye()}}const tr=er;class nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rr(e)}_finalizeEnroll(e,t,n){return ft(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class or{constructor(){}static assertion(e){return rr._fromCredential(e)}}or.FACTOR_ID="phone";var ir="@firebase/auth",ar="0.20.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(e){(0,o.Xd)(new s.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:a}=r.options;return((t,r)=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},s=new Ce(t,r,o);return S(s,n),s})(r,o)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.Xd)(new s.wA("auth-internal",(e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new sr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(ir,ar,lr(e)),(0,o.KN)(ir,ar,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e=(0,o.Mq)()){const t=(0,o.qX)(e,"auth");return t.isInitialized()?t.getImmediate():k(e,{popupRedirectResolver:tr,persistence:[Wt,wt,kt]})}ur("Browser")},6035:function(e,t,n){"use strict";n.d(t,{ET:function(){return Sd},hJ:function(){return mc},oe:function(){return kd},JU:function(){return gc},QT:function(){return gd},PL:function(){return bd},ad:function(){return _c},b9:function(){return dd},cf:function(){return xd},Xo:function(){return ud},IO:function(){return id},pl:function(){return wd},r7:function(){return _d},ar:function(){return sd}});n(1703),n(8675),n(3462),n(7380),n(1118),n(2262),n(4506),n(2801),n(6699);var r,o=n(7077),i=n(7142),a=n(5168),s=n(223),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},c=c||{},d=l||self;function h(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function v(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function k(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function S(){this.s=this.s,this.o=this.o}var x=0,C={};S.prototype.s=!1,S.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=x)){var e=v(this);delete C[e]}},S.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function E(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function A(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let o=0;o<r;o++)e[n+o]=t[o]}else e.push(t)}}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",h,t),d.removeEventListener("test",h,t)}catch(n){}return e}();function F(e){return/^[\s\xa0]*$/.test(e)}var M=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return e<t?-1:e>t?1:0}function P(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function q(e){return-1!=P().indexOf(e)}function R(e){return R[" "](e),e}function N(e){var t=G;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}R[" "]=h;var L,V=q("Opera"),$=q("Trident")||q("MSIE"),B=q("Edge"),j=B||$,z=q("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!q("Edge"))&&!(q("Trident")||q("MSIE"))&&!q("Edge"),H=-1!=P().toLowerCase().indexOf("webkit")&&!q("Edge");function U(){var e=d.document;return e?e.documentMode:void 0}e:{var Y="",W=function(){var e=P();return z?/rv:([^\);]+)(\)|;)/.exec(e):B?/Edge\/([\d\.]+)/.exec(e):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):H?/WebKit\/(\S+)/.exec(e):V?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(W&&(Y=W?W[1]:""),$){var Q=U();if(null!=Q&&Q>parseFloat(Y)){L=String(Q);break e}}L=Y}var K,G={};function J(){return N((function(){let e=0;const t=M(String(L)).split("."),n=M("9").split("."),r=Math.max(t.length,n.length);for(let a=0;0==e&&a<r;a++){var o=t[a]||"",i=n[a]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==o[0].length&&0==i[0].length)break;e=D(0==o[1].length?0:parseInt(o[1],10),0==i[1].length?0:parseInt(i[1],10))||D(0==o[2].length,0==i[2].length)||D(o[2],i[2]),o=o[3],i=i[3]}while(0==e)}return 0<=e}))}if(d.document&&$){var X=U();K=X||(parseInt(L,10)||void 0)}else K=void 0;var Z=K;function ee(e,t){if(I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){e:{try{R(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.X.h.call(this)}}k(ee,I);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),re=0;function oe(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=o,this.key=++re,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ae(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function se(e){const t={};for(const n in e)t[n]=e[n];return t}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){let n,r;for(let o=1;o<arguments.length;o++){for(n in r=arguments[o],r)e[n]=r[n];for(let t=0;t<le.length;t++)n=le[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function de(e,t){var n=t.type;if(n in e.g){var r,o=e.g[n],i=T(o,t);(r=0<=i)&&Array.prototype.splice.call(o,i,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var o=0;o<e.length;++o){var i=e[o];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==r)return o}return-1}ce.prototype.add=function(e,t,n,r,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var a=he(e,t,r,o);return-1<a?(t=e[a],n||(t.ea=!1)):(t=new oe(t,this.src,i,!!r,o),t.ea=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function ve(e,t,n,r,o){if(r&&r.once)return ye(e,t,n,r,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ve(e,t[i],n,r,o);return null}return n=Ce(n),e&&e[ne]?e.N(t,n,p(r)?!!r.capture:!!r,o):me(e,t,n,!1,r,o)}function me(e,t,n,r,o,i){if(!t)throw Error("Invalid event type");var a=p(o)?!!o.capture:!!o,s=Se(e);if(s||(e[fe]=s=new ce(e)),n=s.add(t,n,r,a,i),n.proxy)return n;if(r=ge(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)O||(o=a),void 0===o&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ge(){function e(n){return t.call(e.src,e.listener,n)}const t=ke;return e}function ye(e,t,n,r,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ye(e,t[i],n,r,o);return null}return n=Ce(n),e&&e[ne]?e.O(t,n,p(r)?!!r.capture:!!r,o):me(e,t,n,!0,r,o)}function be(e,t,n,r,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)be(e,t[i],n,r,o);else r=p(r)?!!r.capture:!!r,n=Ce(n),e&&e[ne]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=he(i,n,r,o),-1<n&&(ie(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Se(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,o)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ne])de(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Se(t))?(de(n,e),0==n.h&&(n.src=null,t[fe]=null)):ie(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function ke(e,t){if(e.ba)e=!0;else{t=new ee(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&we(e),e=n.call(r,t)}return e}function Se(e){return e=e[fe],e instanceof ce?e:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(e){return"function"===typeof e?e:(e[xe]||(e[xe]=function(t){return e.handleEvent(t)}),e[xe])}function Te(){S.call(this),this.i=new ce(this),this.P=this,this.I=null}function Ee(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var o=t;t=new I(r,e),ue(t,o)}if(o=!0,n)for(var i=n.length-1;0<=i;i--){var a=t.g=n[i];o=Ae(a,r,!0,t)&&o}if(a=t.g=e,o=Ae(a,r,!0,t)&&o,o=Ae(a,r,!1,t)&&o,n)for(i=0;i<n.length;i++)a=t.g=n[i],o=Ae(a,r,!1,t)&&o}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var a=t[i];if(a&&!a.ba&&a.capture==n){var s=a.listener,l=a.ha||a.src;a.ea&&de(e.i,a),o=!1!==s.call(l,r)&&o}}return o&&!r.defaultPrevented}k(Te,S),Te.prototype[ne]=!0,Te.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Te.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Te.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ie=d.JSON.stringify;function Oe(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Fe{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function qe(e){d.setTimeout((()=>{throw e}),0)}function Re(e,t){Me||Ne(),Le||(Me(),Le=!0),Ve.add(e,t)}function Ne(){var e=d.Promise.resolve(void 0);Me=function(){e.then($e)}}var Le=!1,Ve=new Fe;function $e(){for(var e;e=Oe();){try{e.h.call(e.g)}catch(n){qe(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1}function Be(e,t){Te.call(this),this.h=e||1,this.g=t||d,this.j=w(this.kb,this),this.l=Date.now()}function je(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function ze(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function He(e){e.g=ze((()=>{e.g=null,e.i&&(e.i=!1,He(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}k(Be,Te),r=Be.prototype,r.ca=!1,r.R=null,r.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ee(this,"tick"),this.ca&&(je(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.X.M.call(this),je(this),delete this.g};class Ue extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:He(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(e){S.call(this),this.h=e,this.g={}}k(Ye,S);var We=[];function Qe(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var o=0;o<n.length;o++){var i=ve(t,n[o],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ke(e){ae(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Ge(){this.g=!0}function Je(e,t,n,r,o,i){e.info((function(){if(e.g)if(i)for(var a="",s=i.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");a=2<=d.length&&"type"==d[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+"\n"+n+"\n"+a}))}function Xe(e,t,n,r,o,i,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+"\n"+n+"\n"+i+" "+a}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var a=1;a<o.length;a++)o[a]=""}}}return Ie(n)}catch(s){return t}}Ye.prototype.M=function(){Ye.X.M.call(this),Ke(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ge.prototype.Aa=function(){this.g=!1},Ge.prototype.info=function(){};var nt={},rt=null;function ot(){return rt=rt||new Te}function it(e){I.call(this,nt.Oa,e)}function at(e){const t=ot();Ee(t,new it(t,e))}function st(e,t){I.call(this,nt.STAT_EVENT,e),this.stat=t}function lt(e){const t=ot();Ee(t,new st(t,e))}function ut(e,t){I.call(this,nt.Pa,e),this.size=t}function ct(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}nt.Oa="serverreachability",k(it,I),nt.STAT_EVENT="statevent",k(st,I),nt.Pa="timingevent",k(ut,I);var dt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},ht={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function vt(){}ft.prototype.h=null;var mt,gt={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function yt(){I.call(this,"d")}function bt(){I.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ye(this),this.O=St,e=j?125:void 0,this.T=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}k(yt,I),k(bt,I),k(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var St=45e3,xt={},Ct={};function Tt(e,t,n){e.K=1,e.v=Qt(zt(t)),e.s=n,e.P=!0,Et(e,null)}function Et(e,t){e.F=Date.now(),Ft(e),e.A=zt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),ln(n.i,"t",r),e.C=0,n=e.l.H,e.h=new kt,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Ue(w(e.Ka,e,e.g),e.N)),Qe(e.S,e.g,"readystatechange",e.hb),t=e.H?se(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),at(1),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function It(e,t,n){let r,o=!0;for(;!e.I&&e.C<n.length;){if(r=Ot(e,n),r==Ct){4==t&&(e.o=4,lt(14),o=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==xt){e.o=4,lt(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),o=!1;break}Ze(e.j,e.m,r,null),Rt(e,r)}At(e)&&r!=Ct&&r!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,lt(16),o=!1),e.i=e.i&&o,o?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),or(t),t.K=!0,lt(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),qt(e),Pt(e))}function Ot(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ct:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1,r+n>t.length?Ct:(t=t.substr(r,n),e.C=r+n,t)))}function Ft(e){e.V=Date.now()+e.O,Mt(e,e.O)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ct(w(e.fb,e),t)}function Dt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||sr(e.l,e)}function qt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,je(e.T),Ke(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||mn(n.h,e)))if(!e.J&&mn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var o=r;if(0==o[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ar(n),Kn(n)}rr(n),lt(18)}}else n.Ba=o[1],0<n.Ba-n.T&&37500>o[2]&&n.L&&0==n.A&&!n.v&&(n.v=ct(w(n.bb,n),6e3));if(1>=vn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ur(n,11)}else if((e.J||n.g==e)&&ar(n),!F(t))for(o=n.Fa.g.parse(t),t=0;t<o.length;t++){let u=o[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const o=u[4];null!=o&&(n.Ca=o,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(gn(i,i.h),i.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Wt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var a=e;if(r.sa=dr(r,r.H?r.ka:null,r.V),a.J){yn(r.h,a);var s=a,l=r.J;l&&s.setTimeout(l),s.B&&(Dt(s),Ft(s)),r.g=a}else nr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Qn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}at(4)}catch(u){}}function Nt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Lt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Lt(e),r=Nt(e),o=r.length,i=0;i<o;i++)t.call(void 0,r[i],n&&n[i],e)}r=_t.prototype,r.setTimeout=function(e){this.O=e},r.hb=function(e){e=e.target;const t=this.L;t&&3==jn(e)?t.l():this.Ka(e)},r.Ka=function(e){try{if(e==this.g)e:{const c=jn(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(3!=c||j||this.g&&(this.h.h||this.g.fa()||zn(this.g)))){this.I||4!=c||7==t||at(8==t||0>=h?3:2),Dt(this);var n=this.g.aa();this.Y=n;t:if(At(this)){var r=zn(this.g);e="";var o=r.length,i=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){qt(this),Pt(this);var a="";break t}this.h.i=new d.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==o-1});r.splice(0,o),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var s,l=this.g;if((s=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(s)){var u=s;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,lt(12),qt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rt(this,n)}this.P?(It(this,c,a),j&&this.i&&3==c&&(Qe(this.S,this.T,"tick",this.gb),this.T.start())):(Ze(this.j,this.m,a,null),Rt(this,a)),4==c&&qt(this),this.i&&!this.I&&(4==c?sr(this.l,this):(this.i=!1,Ft(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),qt(this),Pt(this)}}}catch(c){}},r.gb=function(){if(this.g){var e=jn(this.g),t=this.g.fa();this.C<t.length&&(Dt(this),It(this,e,t),this.i&&4!=e&&Ft(this))}},r.cancel=function(){this.I=!0,qt(this)},r.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(et(this.j,this.A),2!=this.K&&(at(3),lt(17)),qt(this),this.o=2,Pt(this)):Mt(this,this.V-e)};var $t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var i=e[n].substring(0,r);o=e[n].substring(r+1)}else i=e[n];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=void 0!==t?t:e.h,Ht(this,e.j),this.s=e.s,this.g=e.g,Ut(this,e.m),this.l=e.l,t=e.i;var n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Yt(this,n),this.o=e.o}else e&&(n=String(e).match($t))?(this.h=!!t,Ht(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),Ut(this,n[4]),this.l=Kt(n[5]||"",!0),Yt(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!t,this.i=new rn(null,this.h))}function zt(e){return new jt(e)}function Ht(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Yt(e,t,n){t instanceof rn?(e.i=t,cn(e.i,e.h)):(n||(t=Gt(t,tn)),e.i=new rn(t,e.h))}function Wt(e,t,n){e.i.set(t,n)}function Qt(e){return Wt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Gt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Gt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Gt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Gt(n,"/"==n.charAt(0)?en:Zt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Gt(n,nn)),e.join("")};var Xt=/[#\/\?@]/g,Zt=/[#\?:]/g,en=/[#\?]/g,tn=/[#\?@]/g,nn=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function on(e){e.g||(e.g=new Map,e.h=0,e.i&&Bt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function an(e,t){on(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sn(e,t){return on(e),t=un(e,t),e.g.has(t)}function ln(e,t,n){an(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),E(n)),e.h+=n.length)}function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cn(e,t){t&&!e.j&&(on(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(an(this,t),ln(this,n,e))}),e)),e.j=t}r=rn.prototype,r.add=function(e,t){on(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){on(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){on(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const o=e[r];for(let e=0;e<o.length;e++)n.push(t[r])}return n},r.W=function(e){on(this);let t=[];if("string"===typeof e)sn(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return on(this),this.i=null,e=un(this,e),sn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var dn=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||fn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ga&&d.g.Ga()&&d.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function vn(e){return e.h?1:e.g?e.g.size:0}function mn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function gn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function bn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return E(e.i)}function wn(){}function _n(){this.g=new wn}function kn(e,t,n){const r=n||"";try{Vt(e,(function(e,n){let o=e;p(e)&&(o=Ie(e)),t.push(r+n+"="+encodeURIComponent(o))}))}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function Sn(e,t){const n=new Ge;if(d.Image){const r=new Image;r.onload=_(xn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(xn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(xn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(xn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function xn(e,t,n,r,o){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,o(r)}catch(i){}}function Cn(e){this.l=e.$b||null,this.j=e.ib||!1}function Tn(e,t){Te.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},k(Cn,ft),Cn.prototype.g=function(){return new Tn(this.l,this.j)},Cn.prototype.i=function(e){return function(){return e}}({}),k(Tn,Te);var En=0;function An(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,On(e)}function On(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Tn.prototype,r.open=function(e,t){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,On(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=En},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;An(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):On(this),3==this.readyState&&An(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,In(this))},r.Ta=function(e){this.g&&(this.response=e,In(this))},r.ga=function(){this.g&&In(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Fn=d.JSON.parse;function Mn(e){Te.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}k(Mn,Te);var Dn="",Pn=/^https?$/i,qn=["POST","PUT"];function Rn(e){return $&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Nn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ln(e),$n(e)}function Ln(e){e.D||(e.D=!0,Ee(e,"complete"),Ee(e,"error"))}function Vn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=jn(e)||2!=e.aa()))if(e.v&&4==jn(e))ze(e.Ha,0,e);else if(Ee(e,"readystatechange"),4==jn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var o=String(e.H).match($t)[1]||null;if(!o&&d.self&&d.self.location){var i=d.self.location.protocol;o=i.substr(0,i.length-1)}r=!Pn.test(o?o.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var a=2<jn(e)?e.g.statusText:""}catch(s){a=""}e.j=a+" ["+e.aa()+"]",Ln(e)}}finally{$n(e)}}}function $n(e,t){if(e.g){Bn(e);const r=e.g,o=e.C[0]?h:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=o}catch(n){}}}function Bn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function zn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ir){return null}}function Hn(e){let t="";return ae(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Un(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Hn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Wt(e,t,n))}function Yn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wn(e){this.Ca=0,this.i=[],this.j=new Ge,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Yn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Yn("baseRetryDelayMs",5e3,e),this.ab=Yn("retryDelaySeedMs",1e4,e),this.Za=Yn("forwardChannelMaxRetries",2,e),this.ta=Yn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new _n,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Qn(e){if(Gn(e),3==e.G){var t=e.U++,n=zt(e.F);Wt(n,"SID",e.I),Wt(n,"RID",t),Wt(n,"TYPE","terminate"),er(e,n),t=new _t(e,e.j,t,void 0),t.K=2,t.v=Qt(zt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ft(t)}cr(e)}function Kn(e){e.g&&(or(e),e.g.cancel(),e.g=null)}function Gn(e){Kn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ar(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Jn(e){pn(e.h)||e.m||(e.m=!0,Re(e.Ja,e),e.C=0)}function Xn(e,t){return!(vn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Ya?0:e.Za))&&(e.m=ct(w(e.Ja,e,t),lr(e,e.C)),e.C++,!0))}function Zn(e,t){var n;n=t?t.m:e.U++;const r=zt(e.F);Wt(r,"SID",e.I),Wt(r,"RID",n),Wt(r,"AID",e.T),er(e,r),e.o&&e.s&&Un(r,e.o,e.s),n=new _t(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=tr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),gn(e.h,n),Tt(n,r,t)}function er(e,t){e.ia&&ae(e.ia,(function(e,n){Wt(t,n,e)})),e.l&&Vt({},(function(e,n){Wt(t,n,e)}))}function tr(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Qa,e.l,e):null;e:{var o=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=o[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let a=0;a<n;a++){let n=o[a].h;const s=o[a].g;if(n-=t,0>n)t=Math.max(0,o[a].h-100),i=!1;else try{kn(s,e,"req"+n+"_")}catch(Vr){r&&r(s)}}if(i){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nr(e){e.g||e.u||(e.Z=1,Re(e.Ia,e),e.A=0)}function rr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ct(w(e.Ia,e),lr(e,e.A)),e.A++,!0)}function or(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new _t(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=zt(e.sa);Wt(t,"RID","rpc"),Wt(t,"SID",e.I),Wt(t,"CI",e.L?"0":"1"),Wt(t,"AID",e.T),Wt(t,"TYPE","xmlhttp"),er(e,t),e.o&&e.s&&Un(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Qt(zt(t)),n.s=null,n.P=!0,Et(n,e)}function ar(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function sr(e,t){var n=null;if(e.g==t){ar(e),or(e),e.g=null;var r=2}else{if(!mn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var o=e.C;r=ot(),Ee(r,new ut(r,n,t,o)),Jn(e)}else nr(e);else if(o=t.o,3==o||0==o&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&rr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),o){case 1:ur(e,5);break;case 4:ur(e,10);break;case 3:ur(e,6);break;default:ur(e,2)}}function lr(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function ur(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=w(e.jb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Ht(n,"https"),Qt(n)),Sn(n.toString(),r)}else lt(2);e.G=0,e.l&&e.l.va(t),cr(e),Gn(e)}function cr(e){if(e.G=0,e.la=[],e.l){const t=bn(e.h);0==t.length&&0==e.i.length||(A(e.la,t),A(e.la,e.i),e.h.i.length=0,E(e.i),e.i.length=0),e.l.ua()}}function dr(e,t,n){var r=n instanceof jt?zt(n):new jt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ut(r,r.m);else{var o=d.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new jt(null,void 0);r&&Ht(i,r),t&&(i.g=t),o&&Ut(i,o),n&&(i.l=n),r=i}return n=e.D,t=e.za,n&&t&&Wt(r,n,t),Wt(r,"VER",e.ma),er(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Mn(new Cn({ib:!0})):new Mn(e.ra),t.L=e.H,t}function fr(){}function pr(){if($&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function vr(e,t){Te.call(this),this.g=new Wn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!F(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!F(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function mr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gr(){bt.call(this),this.status=1}function yr(e){this.g=e}r=Mn.prototype,r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?pt(this.u):pt(mt),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Nn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=d.FormData&&e instanceof d.FormData,!(0<=T(qn,t))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,s]of n)this.g.setRequestHeader(a,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=Rn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=ze(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Nn(this,i)}},r.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),$n(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Mn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Vn(this):this.eb())},r.eb=function(){Vn(this)},r.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fn(t)}},r.Ea=function(){return this.m},r.Na=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Wn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const o=new _t(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=se(i),ue(i,this.S)):i=this.S),null!==this.o||this.N||(o.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tr(this,o,t),n=zt(this.F),Wt(n,"RID",e),Wt(n,"CVER",22),this.D&&Wt(n,"X-HTTP-Session-Id",this.D),er(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Hn(i)))+"&"+t:this.o&&Un(n,this.o,i)),gn(this.h,o),this.Xa&&Wt(n,"TYPE","init"),this.O?(Wt(n,"$req",t),Wt(n,"SID","null"),o.Z=!0,Tt(o,n,null)):Tt(o,n,t),this.G=2}}else 3==this.G&&(e?Zn(this,e):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ct(w(this.cb,this),e)}},r.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),Kn(this),ir(this))},r.bb=function(){null!=this.v&&(this.v=null,Kn(this),rr(this),lt(19))},r.jb=function(e){e?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Qa=function(){},pr.prototype.g=function(e,t){return new vr(e,t)},k(vr,Te),vr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;lt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=dr(e,null,e.V),Jn(e)},vr.prototype.close=function(){Qn(this.g)},vr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ie(e),e=n);t.i.push(new dn(t.$a++,e)),3==t.G&&Jn(t)},vr.prototype.M=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,vr.X.M.call(this)},k(mr,yt),k(gr,bt),k(yr,fr),yr.prototype.xa=function(){Ee(this.g,"a")},yr.prototype.wa=function(e){Ee(this.g,new mr(e))},yr.prototype.va=function(e){Ee(this.g,new gr(e))},yr.prototype.ua=function(){Ee(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,vr.prototype.send=vr.prototype.u,vr.prototype.open=vr.prototype.m,vr.prototype.close=vr.prototype.close,dt.NO_ERROR=0,dt.TIMEOUT=8,dt.HTTP_ERROR=6,ht.COMPLETE="complete",vt.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Te.prototype.listen=Te.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.Na,Mn.prototype.getLastErrorCode=Mn.prototype.Ea,Mn.prototype.getStatus=Mn.prototype.aa,Mn.prototype.getResponseJson=Mn.prototype.Ra,Mn.prototype.getResponseText=Mn.prototype.fa,Mn.prototype.send=Mn.prototype.da;var br=u.createWebChannelTransport=function(){return new pr},wr=u.getStatEventTarget=function(){return ot()},_r=u.ErrorCode=dt,kr=u.EventType=ht,Sr=u.Event=nt,xr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Cr=u.FetchXmlHttpFactory=Cn,Tr=u.WebChannel=vt,Er=u.XhrIo=Mn;const Ar="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ir.UNAUTHENTICATED=new Ir(null),Ir.GOOGLE_CREDENTIALS=new Ir("google-credentials-uid"),Ir.FIRST_PARTY=new Ir("first-party-uid"),Ir.MOCK_USER=new Ir("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Or="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new a.Yd("@firebase/firestore");function Mr(){return Fr.logLevel}function Dr(e,...t){if(Fr.logLevel<=a["in"].DEBUG){const n=t.map(Rr);Fr.debug(`Firestore (${Or}): ${e}`,...n)}}function Pr(e,...t){if(Fr.logLevel<=a["in"].ERROR){const n=t.map(Rr);Fr.error(`Firestore (${Or}): ${e}`,...n)}}function qr(e,...t){if(Fr.logLevel<=a["in"].WARN){const n=t.map(Rr);Fr.warn(`Firestore (${Or}): ${e}`,...n)}}function Rr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e="Unexpected state"){const t=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+e;throw Pr(t),new Error(t)}function Lr(e,t){e||Nr()}function Vr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends s.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ir.UNAUTHENTICATED)))}shutdown(){}}class Ur{constructor(e){this.t=e,this.currentUser=Ir.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let o=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new jr,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new jr)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Lr("string"==typeof t.accessToken),new zr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Lr(null===e||"string"==typeof e),new Ir(e)}}class Yr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Ir.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Lr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Yr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ir.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Lr("string"==typeof e.token),this.A=e.token,new Qr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Gr(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function Xr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Br($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Br($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Br($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Br($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return eo.fromMillis(Date.now())}static fromDate(e){return eo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new eo(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xr(this.nanoseconds,e.nanoseconds):Xr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.timestamp=e}static fromTimestamp(e){return new to(e)}static min(){return new to(new eo(0,0))}static max(){return new to(new eo(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n){void 0===t?t=0:t>e.length&&Nr(),void 0===n?n=e.length-t:n>e.length-t&&Nr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===no.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),o=t.get(r);if(n<o)return-1;if(n>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ro extends no{construct(e,t,n){return new ro(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Br($r.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ro(t)}static emptyPath(){return new ro([])}}const oo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class io extends no{construct(e,t,n){return new io(e,t,n)}static isValidIdentifier(e){return oo.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),io.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new io(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(0===n.length)throw new Br($r.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Br($r.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Br($r.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(o(),r++)}if(o(),i)throw new Br($r.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new io(t)}static emptyPath(){return new io([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.path=e}static fromPath(e){return new ao(ro.fromString(e))}static fromName(e){return new ao(ro.fromString(e).popFirst(5))}static empty(){return new ao(ro.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ro.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ro.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ao(new ro(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}so.UNKNOWN_ID=-1;function lo(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,o=to.fromTimestamp(1e9===r?new eo(n+1,0):new eo(n,r));return new co(o,ao.empty(),t)}function uo(e){return new co(e.readTime,e.key,-1)}class co{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new co(to.min(),ao.empty(),-1)}static max(){return new co(to.max(),ao.empty(),-1)}}function ho(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ao.comparator(e.documentKey,t.documentKey),0!==n?n:Xr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class po{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(e){if(e.code!==$r.FAILED_PRECONDITION||e.message!==fo)throw e;Dr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Nr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mo(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mo?t:mo.resolve(t)}catch(e){return mo.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mo.reject(t)}static resolve(e){return new mo(((t,n)=>{t(e)}))}static reject(e){return new mo(((t,n)=>{n(e)}))}static waitFor(e){return new mo(((t,n)=>{let r=0,o=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++o,i&&o===r&&t()}),(e=>n(e)))})),i=!0,o===r&&t()}))}static or(e){let t=mo.resolve(!1);for(const n of e)t=t.next((e=>e?mo.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new mo(((n,r)=>{const o=e.length,i=new Array(o);let a=0;for(let s=0;s<o;s++){const l=s;t(e[l]).next((e=>{i[l]=e,++a,a===o&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new mo(((n,r)=>{const o=()=>{!0===e()?t().next((()=>{o()}),r):n()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _o(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yo.at=-1;class ko{constructor(e,t){this.comparator=e,this.root=t||xo.EMPTY}insert(e,t){return new ko(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xo.BLACK,null,null))}remove(e){return new ko(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xo{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=null!=n?n:xo.RED,this.left=null!=r?r:xo.EMPTY,this.right=null!=o?o:xo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new xo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===o?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return xo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Nr();if(this.right.isRed())throw Nr();const e=this.left.check();if(e!==this.right.check())throw Nr();return e+(this.isRed()?0:1)}}xo.EMPTY=null,xo.RED=!0,xo.BLACK=!1,xo.EMPTY=new class{constructor(){this.size=0}get key(){throw Nr()}get value(){throw Nr()}get color(){throw Nr()}get left(){throw Nr()}get right(){throw Nr()}copy(e,t,n,r,o){return this}insert(e,t,n){return new xo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(e){this.comparator=e,this.data=new ko(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new To(this.data.getIterator())}getIteratorFrom(e){return new To(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Co))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Co(this.comparator);return t.data=e,t}}class To{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(e){this.fields=e,e.sort(io.comparator)}static empty(){return new Eo([])}unionWith(e){let t=new Co(io.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Eo(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ao(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ao(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ao.EMPTY_BYTE_STRING=new Ao("");const Io=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oo(e){if(Lr(!!e),"string"==typeof e){let t=0;const n=Io.exec(e);if(Lr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Fo(e.seconds),nanos:Fo(e.nanos)}}function Fo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Mo(e){return"string"==typeof e?Ao.fromBase64String(e):Ao.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Po(e){const t=e.mapValue.fields.__previous_value__;return Do(t)?Po(t):t}function qo(e){const t=Oo(e.mapValue.fields.__local_write_time__.timestampValue);return new eo(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,n,r,o,i,a,s){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=s}}class No{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new No("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}function Lo(e){return null==e}function Vo(e){return 0===e&&1/e==-1/0}function $o(e){return"number"==typeof e&&Number.isInteger(e)&&!Vo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Do(e)?4:ni(e)?9007199254740991:10:Nr()}function zo(e,t){if(e===t)return!0;const n=jo(e);if(n!==jo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qo(e).isEqual(qo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Oo(e.timestampValue),r=Oo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Mo(e.bytesValue).isEqual(Mo(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Fo(e.geoPointValue.latitude)===Fo(t.geoPointValue.latitude)&&Fo(e.geoPointValue.longitude)===Fo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Fo(e.integerValue)===Fo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Fo(e.doubleValue),r=Fo(t.doubleValue);return n===r?Vo(n)===Vo(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],zo);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bo(n)!==bo(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!zo(n[o],r[o])))return!1;return!0}(e,t);default:return Nr()}}function Ho(e,t){return void 0!==(e.values||[]).find((e=>zo(e,t)))}function Uo(e,t){if(e===t)return 0;const n=jo(e),r=jo(t);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Fo(e.integerValue||e.doubleValue),r=Fo(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Yo(e.timestampValue,t.timestampValue);case 4:return Yo(qo(e),qo(t));case 5:return Xr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Mo(e),r=Mo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let o=0;o<n.length&&o<r.length;o++){const e=Xr(n[o],r[o]);if(0!==e)return e}return Xr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xr(Fo(e.latitude),Fo(t.latitude));return 0!==n?n:Xr(Fo(e.longitude),Fo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const e=Uo(n[o],r[o]);if(e)return e}return Xr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Bo.mapValue&&t===Bo.mapValue)return 0;if(e===Bo.mapValue)return 1;if(t===Bo.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),o=t.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){const e=Xr(r[a],i[a]);if(0!==e)return e;const t=Uo(n[r[a]],o[i[a]]);if(0!==t)return t}return Xr(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Nr()}}function Yo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xr(e,t);const n=Oo(e),r=Oo(t),o=Xr(n.seconds,r.seconds);return 0!==o?o:Xr(n.nanos,r.nanos)}function Wo(e){return Qo(e)}function Qo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Oo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Mo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ao.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${Qo(e.fields[o])}`;return n+"}"}(e.mapValue):Nr();var t,n}function Ko(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Go(e){return!!e&&"integerValue"in e}function Jo(e){return!!e&&"arrayValue"in e}function Xo(e){return!!e&&"nullValue"in e}function Zo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ei(e){return!!e&&"mapValue"in e}function ti(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wo(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ti(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ti(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ni(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri{constructor(e){this.value=e}static empty(){return new ri({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(t)}setAll(e){let t=io.emptyPath(),n={},r=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=o.popLast()}e?n[o.lastSegment()]=ti(e):r.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ei(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){wo(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ri(ti(this.value))}}function oi(e){const t=[];return wo(e.fields,((e,n)=>{const r=new io([e]);if(ei(n)){const e=oi(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Eo(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ii{constructor(e,t,n,r,o,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=o,this.documentState=i}static newInvalidDocument(e){return new ii(e,0,to.min(),to.min(),ri.empty(),0)}static newFoundDocument(e,t,n){return new ii(e,1,t,to.min(),n,0)}static newNoDocument(e,t){return new ii(e,2,t,to.min(),ri.empty(),0)}static newUnknownDocument(e,t){return new ii(e,3,t,to.min(),ri.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ri.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ri.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=to.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ii&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ii(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t=null,n=[],r=[],o=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=a,this.ht=null}}function si(e,t=null,n=[],r=[],o=null,i=null,a=null){return new ai(e,t,n,r,o,i,a)}function li(e){const t=Vr(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Wo(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Lo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Wo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Wo(e))).join(",")),t.ht=e}return t.ht}function ui(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Wo(t.value)}`;var t})).join(", ")}]`),Lo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Wo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Wo(e))).join(",")),`Target(${t})`}function ci(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let o=0;o<e.orderBy.length;o++)if(!Si(e.orderBy[o],t.orderBy[o]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let o=0;o<e.filters.length;o++)if(n=e.filters[o],r=t.filters[o],n.op!==r.op||!n.field.isEqual(r.field)||!zo(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ci(e.startAt,t.startAt)&&Ci(e.endAt,t.endAt)}function di(e){return ao.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class hi extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new fi(e,t,n):"array-contains"===t?new gi(e,n):"in"===t?new yi(e,n):"not-in"===t?new bi(e,n):"array-contains-any"===t?new wi(e,n):new hi(e,t,n)}static lt(e,t,n){return"in"===t?new pi(e,n):new vi(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(Uo(t,this.value)):null!==t&&jo(this.value)===jo(t)&&this.ft(Uo(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Nr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fi extends hi{constructor(e,t,n){super(e,t,n),this.key=ao.fromName(n.referenceValue)}matches(e){const t=ao.comparator(e.key,this.key);return this.ft(t)}}class pi extends hi{constructor(e,t){super(e,"in",t),this.keys=mi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class vi extends hi{constructor(e,t){super(e,"not-in",t),this.keys=mi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function mi(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ao.fromName(e.referenceValue)))}class gi extends hi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jo(t)&&Ho(t.arrayValue,this.value)}}class yi extends hi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ho(this.value.arrayValue,t)}}class bi extends hi{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ho(this.value.arrayValue,t)}}class wi extends hi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ho(this.value.arrayValue,e)))}}class _i{constructor(e,t){this.position=e,this.inclusive=t}}class ki{constructor(e,t="asc"){this.field=e,this.dir=t}}function Si(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function xi(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const i=t[o],a=e.position[o];if(r=i.field.isKeyField()?ao.comparator(ao.fromName(a.referenceValue),n.key):Uo(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ci(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!zo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t=null,n=[],r=[],o=null,i="F",a=null,s=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=a,this.endAt=s,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ei(e,t,n,r,o,i,a,s){return new Ti(e,t,n,r,o,i,a,s)}function Ai(e){return new Ti(e)}function Ii(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Oi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fi(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Mi(e){return null!==e.collectionGroup}function Di(e){const t=Vr(e);if(null===t._t){t._t=[];const e=Fi(t),n=Oi(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new ki(e)),t._t.push(new ki(io.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new ki(io.keyField(),e))}}}return t._t}function Pi(e){const t=Vr(e);if(!t.wt)if("F"===t.limitType)t.wt=si(t.path,t.collectionGroup,Di(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const o of Di(t)){const t="desc"===o.dir?"asc":"desc";e.push(new ki(o.field,t))}const n=t.endAt?new _i(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _i(t.startAt.position,t.startAt.inclusive):null;t.wt=si(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function qi(e,t,n){return new Ti(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ri(e,t){return ci(Pi(e),Pi(t))&&e.limitType===t.limitType}function Ni(e){return`${li(Pi(e))}|lt:${e.limitType}`}function Li(e){return`Query(target=${ui(Pi(e))}; limitType=${e.limitType})`}function Vi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ao.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Di(e),t))&&!(e.endAt&&!function(e,t,n){const r=xi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Di(e),t))}(e,t)}function $i(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Bi(e){return(t,n)=>{let r=!1;for(const o of Di(e)){const e=ji(o,t,n);if(0!==e)return e;r=r||o.field.isKeyField()}return 0}}function ji(e,t,n){const r=e.field.isKeyField()?ao.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),o=n.data.field(e);return null!==r&&null!==o?Uo(r,o):Nr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Nr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(t)?"-0":t}}function Hi(e){return{integerValue:""+e}}function Ui(e,t){return $o(t)?Hi(t):zi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this._=void 0}}function Wi(e,t,n){return e instanceof Gi?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ji?Xi(e,t):e instanceof Zi?ea(e,t):function(e,t){const n=Ki(e,t),r=na(n)+na(e.yt);return Go(n)&&Go(e.yt)?Hi(r):zi(e.It,r)}(e,t)}function Qi(e,t,n){return e instanceof Ji?Xi(e,t):e instanceof Zi?ea(e,t):n}function Ki(e,t){return e instanceof ta?Go(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Gi extends Yi{}class Ji extends Yi{constructor(e){super(),this.elements=e}}function Xi(e,t){const n=ra(t);for(const r of e.elements)n.some((e=>zo(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Zi extends Yi{constructor(e){super(),this.elements=e}}function ea(e,t){let n=ra(t);for(const r of e.elements)n=n.filter((e=>!zo(e,r)));return{arrayValue:{values:n}}}class ta extends Yi{constructor(e,t){super(),this.It=e,this.yt=t}}function na(e){return Fo(e.integerValue||e.doubleValue)}function ra(e){return Jo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ji&&t instanceof Ji||e instanceof Zi&&t instanceof Zi?Zr(e.elements,t.elements,zo):e instanceof ta&&t instanceof ta?zo(e.yt,t.yt):e instanceof Gi&&t instanceof Gi}(e.transform,t.transform)}class ia{constructor(e,t){this.version=e,this.transformResults=t}}class aa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new aa}static exists(e){return new aa(void 0,e)}static updateTime(e){return new aa(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class la{}function ua(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ba(e.key,aa.none()):new pa(e.key,e.data,aa.none());{const n=e.data,r=ri.empty();let o=new Co(io.comparator);for(let e of t.fields)if(!o.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),o=o.add(e)}return new va(e.key,r,new Eo(o.toArray()),aa.none())}}function ca(e,t,n){e instanceof pa?function(e,t,n){const r=e.value.clone(),o=ga(e.fieldTransforms,t,n.transformResults);r.setAll(o),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof va?function(e,t,n){if(!sa(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ga(e.fieldTransforms,t,n.transformResults),o=t.data;o.setAll(ma(e)),o.setAll(r),t.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function da(e,t,n,r){return e instanceof pa?function(e,t,n,r){if(!sa(e.precondition,t))return n;const o=e.value.clone(),i=ya(e.fieldTransforms,r,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,n,r):e instanceof va?function(e,t,n,r){if(!sa(e.precondition,t))return n;const o=ya(e.fieldTransforms,r,t),i=t.data;return i.setAll(ma(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return sa(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ha(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),o=Ki(r.transform,e||null);null!=o&&(null===n&&(n=ri.empty()),n.set(r.field,o))}return n||null}function fa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>oa(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class pa extends la{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class va extends la{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ma(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ga(e,t,n){const r=new Map;Lr(e.length===n.length);for(let o=0;o<n.length;o++){const i=e[o],a=i.transform,s=t.data.field(i.field);r.set(i.field,Qi(a,s,n[o]))}return r}function ya(e,t,n){const r=new Map;for(const o of e){const e=o.transform,i=n.data.field(o.field);r.set(o.field,Wi(e,i,t))}return r}class ba extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wa extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ka,Sa;function xa(e){switch(e){default:return Nr();case $r.CANCELLED:case $r.UNKNOWN:case $r.DEADLINE_EXCEEDED:case $r.RESOURCE_EXHAUSTED:case $r.INTERNAL:case $r.UNAVAILABLE:case $r.UNAUTHENTICATED:return!1;case $r.INVALID_ARGUMENT:case $r.NOT_FOUND:case $r.ALREADY_EXISTS:case $r.PERMISSION_DENIED:case $r.FAILED_PRECONDITION:case $r.ABORTED:case $r.OUT_OF_RANGE:case $r.UNIMPLEMENTED:case $r.DATA_LOSS:return!0}}function Ca(e){if(void 0===e)return Pr("GRPC error has no .code"),$r.UNKNOWN;switch(e){case ka.OK:return $r.OK;case ka.CANCELLED:return $r.CANCELLED;case ka.UNKNOWN:return $r.UNKNOWN;case ka.DEADLINE_EXCEEDED:return $r.DEADLINE_EXCEEDED;case ka.RESOURCE_EXHAUSTED:return $r.RESOURCE_EXHAUSTED;case ka.INTERNAL:return $r.INTERNAL;case ka.UNAVAILABLE:return $r.UNAVAILABLE;case ka.UNAUTHENTICATED:return $r.UNAUTHENTICATED;case ka.INVALID_ARGUMENT:return $r.INVALID_ARGUMENT;case ka.NOT_FOUND:return $r.NOT_FOUND;case ka.ALREADY_EXISTS:return $r.ALREADY_EXISTS;case ka.PERMISSION_DENIED:return $r.PERMISSION_DENIED;case ka.FAILED_PRECONDITION:return $r.FAILED_PRECONDITION;case ka.ABORTED:return $r.ABORTED;case ka.OUT_OF_RANGE:return $r.OUT_OF_RANGE;case ka.UNIMPLEMENTED:return $r.UNIMPLEMENTED;case ka.DATA_LOSS:return $r.DATA_LOSS;default:return Nr()}}(Sa=ka||(ka={}))[Sa.OK=0]="OK",Sa[Sa.CANCELLED=1]="CANCELLED",Sa[Sa.UNKNOWN=2]="UNKNOWN",Sa[Sa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sa[Sa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sa[Sa.NOT_FOUND=5]="NOT_FOUND",Sa[Sa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sa[Sa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sa[Sa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sa[Sa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sa[Sa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sa[Sa.ABORTED=10]="ABORTED",Sa[Sa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sa[Sa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sa[Sa.INTERNAL=13]="INTERNAL",Sa[Sa.UNAVAILABLE=14]="UNAVAILABLE",Sa[Sa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,o]of n)if(this.equalsFn(r,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wo(this.inner,((t,n)=>{for(const[r,o]of n)e(r,o)}))}isEmpty(){return _o(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new ko(ao.comparator);function Aa(){return Ea}const Ia=new ko(ao.comparator);function Oa(...e){let t=Ia;for(const n of e)t=t.insert(n.key,n);return t}function Fa(e){let t=Ia;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ma(){return Pa()}function Da(){return Pa()}function Pa(){return new Ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}const qa=new ko(ao.comparator),Ra=new Co(ao.comparator);function Na(...e){let t=Ra;for(const n of e)t=t.add(n);return t}const La=new Co(Xr);function Va(){return La}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Ba.createSynthesizedTargetChangeForCurrentChange(e,t)),new $a(to.min(),n,Va(),Aa(),Na())}}class Ba{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ba(Ao.EMPTY_BYTE_STRING,t,Na(),Na(),Na())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class za{constructor(e,t){this.targetId=e,this.At=t}}class Ha{constructor(e,t,n=Ao.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ua{constructor(){this.Rt=0,this.bt=Qa(),this.Pt=Ao.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Na(),t=Na(),n=Na();return this.bt.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Nr()}})),new Ba(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=Qa()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ya{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Aa(),this.qt=Wa(),this.Kt=new Co(Xr)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Nr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(di(e))if(0===n){const n=new ao(e.path);this.jt(t,n,ii.newNoDocument(n,to.min()))}else Lr(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const o=this.Xt(r);if(o){if(n.current&&di(o.target)){const t=new ao(o.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,ii.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=Na();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new $a(e,t,this.Kt,this.Ut,n);return this.Ut=Aa(),this.qt=Wa(),this.Kt=new Co(Xr),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Mt(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let t=this.Lt.get(e);return t||(t=new Ua,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Co(Xr),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Dr("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Ua),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Wa(){return new ko(ao.comparator)}function Qa(){return new ko(ao.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ga=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Ja{constructor(e,t){this.databaseId=e,this.gt=t}}function Xa(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Za(e,t){return e.gt?t.toBase64():t.toUint8Array()}function es(e,t){return Xa(e,t.toTimestamp())}function ts(e){return Lr(!!e),to.fromTimestamp(function(e){const t=Oo(e);return new eo(t.seconds,t.nanos)}(e))}function ns(e,t){return function(e){return new ro(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function rs(e){const t=ro.fromString(e);return Lr(Ts(t)),t}function os(e,t){return ns(e.databaseId,t.path)}function is(e,t){const n=rs(t);if(n.get(1)!==e.databaseId.projectId)throw new Br($r.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Br($r.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ao(us(n))}function as(e,t){return ns(e.databaseId,t)}function ss(e){const t=rs(e);return 4===t.length?ro.emptyPath():us(t)}function ls(e){return new ro(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function us(e){return Lr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function cs(e,t,n){return{name:os(e,t),fields:n.value.mapValue.fields}}function ds(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Nr()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],i=function(e,t){return e.gt?(Lr(void 0===t||"string"==typeof t),Ao.fromBase64String(t||"")):(Lr(void 0===t||t instanceof Uint8Array),Ao.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,s=a&&function(e){const t=void 0===e.code?$r.UNKNOWN:Ca(e.code);return new Br(t,e.message||"")}(a);n=new Ha(r,o,i,s||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=is(e,r.document.name),i=ts(r.document.updateTime),a=new ri({mapValue:{fields:r.document.fields}}),s=ii.newFoundDocument(o,i,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ja(l,u,s.key,s)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=is(e,r.document),i=r.readTime?ts(r.readTime):to.min(),a=ii.newNoDocument(o,i),s=r.removedTargetIds||[];n=new ja([],s,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=is(e,r.document),i=r.removedTargetIds||[];n=new ja([],i,o,null)}else{if(!("filter"in t))return Nr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,o=new _a(r),i=e.targetId;n=new za(i,o)}}return n}function hs(e,t){let n;if(t instanceof pa)n={update:cs(e,t.key,t.value)};else if(t instanceof ba)n={delete:os(e,t.key)};else if(t instanceof va)n={update:cs(e,t.key,t.data),updateMask:Cs(t.fieldMask)};else{if(!(t instanceof wa))return Nr();n={verify:os(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Gi)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ji)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Zi)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ta)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Nr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:es(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Nr()}(e,t.precondition)),n}function fs(e,t){return e&&e.length>0?(Lr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ts(e.updateTime):ts(t);return n.isEqual(to.min())&&(n=ts(t)),new ia(n,e.transformResults||[])}(e,t)))):[]}function ps(e,t){return{documents:[as(e,t.path)]}}function vs(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=as(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=as(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Zo(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NAN"}};if(Xo(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Zo(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NOT_NAN"}};if(Xo(e.value))return{unaryFilter:{field:_s(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(e.field),op:ws(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);o&&(n.structuredQuery.where=o);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:_s(e.field),direction:bs(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const a=function(e,t){return e.gt||Lo(t)?t:{value:t}}(e,t.limit);var s;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(s=t.startAt).inclusive,values:s.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ms(e){let t=ss(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Lr(1===r);const e=n.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=ys(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>function(e){return new ki(ks(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let s=null;n.limit&&(s=function(e){let t;return t="object"==typeof e?e.value:e,Lo(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new _i(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new _i(n,t)}(n.endAt)),Ei(t,o,a,i,s,"F",l,u)}function gs(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Nr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ys(e){return e?void 0!==e.unaryFilter?[xs(e)]:void 0!==e.fieldFilter?[Ss(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>ys(e))).reduce(((e,t)=>e.concat(t))):Nr():[]}function bs(e){return Ka[e]}function ws(e){return Ga[e]}function _s(e){return{fieldPath:e.canonicalString()}}function ks(e){return io.fromServerFormat(e.fieldPath)}function Ss(e){return hi.create(ks(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Nr()}}(e.fieldFilter.op),e.fieldFilter.value)}function xs(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ks(e.unaryFilter.field);return hi.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ks(e.unaryFilter.field);return hi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ks(e.unaryFilter.field);return hi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(e.unaryFilter.field);return hi.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Nr()}}function Cs(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ts(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],As=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Is=As;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ca(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=da(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=da(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Da();return this.mutations.forEach((r=>{const o=e.get(r.key),i=o.overlayedDocument;let a=this.applyToLocalView(i,o.mutatedFields);a=t.has(r.key)?null:a;const s=ua(i,a);null!==s&&n.set(r.key,s),i.isValidDocument()||i.convertToNoDocument(to.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Na())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>fa(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>fa(e,t)))}}class Fs{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Lr(e.mutations.length===n.length);let r=qa;const o=e.mutations;for(let i=0;i<o.length;i++)r=r.insert(o[i].key,n[i].version);return new Fs(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n,r,o=to.min(),i=to.min(),a=Ao.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new Ds(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.re=e}}function qs(e){const t=ms({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qi(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Fo(e.integerValue));else if("doubleValue"in e){const n=Fo(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),Vo(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Mo(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?ni(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Nr()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const r of Object.keys(n))this._e(r,t),this.ae(n[r],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const r of n)this.ae(r,t)}ge(e,t){this.le(t,37),ao.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}Rs.Te=new Rs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(){this.Ye=new Ls}addToCollectionParentIndex(e,t){return this.Ye.add(t),mo.resolve()}getCollectionParents(e,t){return mo.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return mo.resolve()}deleteFieldIndex(e,t){return mo.resolve()}getDocumentsMatchingTarget(e,t){return mo.resolve(null)}getIndexType(e,t){return mo.resolve(0)}getFieldIndexes(e,t){return mo.resolve([])}getNextCollectionGroupToUpdate(e){return mo.resolve(null)}getMinOffset(e,t){return mo.resolve(co.min())}getMinOffsetFromCollectionGroup(e,t){return mo.resolve(co.min())}updateCollectionGroup(e,t,n){return mo.resolve()}updateIndexEntries(e,t){return mo.resolve()}}class Ls{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Co(ro.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Co(ro.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Vs{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Vs(e,Vs.DEFAULT_COLLECTION_PERCENTILE,Vs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vs.DEFAULT_COLLECTION_PERCENTILE=10,Vs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vs.DEFAULT=new Vs(41943040,Vs.DEFAULT_COLLECTION_PERCENTILE,Vs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vs.DISABLED=new Vs(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new $s(0)}static vn(){return new $s(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(){this.changes=new Ta((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ii.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&da(n.mutation,e,Eo.empty(),eo.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Na()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Na()){const r=Ma();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Oa();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ma();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Na())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let o=Aa();const i=Pa(),a=Pa();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof va)?o=o.insert(t.key,t):void 0!==a&&(i.set(t.key,a.mutation.getFieldMask()),da(a.mutation,t,a.mutation.getFieldMask(),eo.now()))})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new js(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Pa();let r=new ko(((e,t)=>e-t)),o=Na();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||Eo.empty();a=o.applyToLocalView(i,a),n.set(e,a);const s=(r.get(o.batchId)||Na()).add(e);r=r.insert(o.batchId,s)}))})).next((()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),s=r.key,l=r.value,u=Da();l.forEach((e=>{if(!o.has(e)){const r=ua(t.get(e),n.get(e));null!==r&&u.set(e,r),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,s,u))}return mo.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ao.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mi(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((o=>{const i=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):mo.resolve(Ma());let a=-1,s=o;return i.next((t=>mo.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),o.get(t)?mo.resolve():this.getBaseDocument(e,t,n).next((e=>{s=s.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,s,t,Na()))).next((e=>({batchId:a,changes:Fa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ao(t)).next((e=>{let t=Oa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let o=Oa();return this.indexManager.getCollectionParents(e,r).next((i=>mo.forEach(i,(i=>{const a=function(e,t){return new Ti(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n).next((e=>{e.forEach(((e,t)=>{o=o.insert(e,t)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((o=>(r=o,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,ii.newInvalidDocument(n)))}));let n=Oa();return r.forEach(((r,o)=>{const i=e.get(r);void 0!==i&&da(i.mutation,o,Eo.empty(),eo.now()),Vi(t,o)&&(n=n.insert(r,o))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):mo.resolve(ii.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return mo.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ts(n.createTime)}),mo.resolve()}getNamedQuery(e,t){return mo.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:qs(e.bundledQuery),readTime:ts(e.readTime)}}(t)),mo.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.overlays=new ko(ao.comparator),this.es=new Map}getOverlay(e,t){return mo.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ma();return mo.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),mo.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),mo.resolve()}getOverlaysForCollection(e,t,n){const r=Ma(),o=t.length+1,i=new ao(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>n&&r.set(e.getKey(),e)}return mo.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new ko(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=o.get(e.largestBatchId);null===t&&(t=Ma(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Ma(),s=o.getIterator();for(;s.hasNext();)if(s.getNext().value.forEach(((e,t)=>a.set(e,t))),a.size()>=r)break;return mo.resolve(a)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ms(t,n));let o=this.es.get(t);void 0===o&&(o=Na(),this.es.set(t,o)),this.es.set(t,o.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.ns=new Co(Ws.ss),this.rs=new Co(Ws.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Ws(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Ws(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new ao(new ro([])),n=new Ws(t,e),r=new Ws(t,e+1),o=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),o.push(e.key)})),o}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new ao(new ro([])),n=new Ws(t,e),r=new Ws(t,e+1);let o=Na();return this.rs.forEachInRange([n,r],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new Ws(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ws{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return ao.comparator(e.key,t.key)||Xr(e._s,t._s)}static os(e,t){return Xr(e._s,t._s)||ao.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Co(Ws.ss)}checkEmpty(e){return mo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Os(o,t,n,r);this.mutationQueue.push(i);for(const a of r)this.gs=this.gs.add(new Ws(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return mo.resolve(i)}lookupMutationBatch(e,t){return mo.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),o=r<0?0:r;return mo.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return mo.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return mo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ws(t,0),r=new Ws(t,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);o.push(t)})),mo.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Co(Xr);return t.forEach((e=>{const t=new Ws(e,0),r=new Ws(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),mo.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;ao.isDocumentKey(o)||(o=o.child(""));const i=new Ws(new ao(o),0);let a=new Co(Xr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)}),i),mo.resolve(this.Is(a))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Lr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mo.forEach(t.mutations,(r=>{const o=new Ws(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Ws(t,0),r=this.gs.firstAfterOrEqual(n);return mo.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,mo.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.Es=e,this.docs=new ko(ao.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,i=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mo.resolve(n?n.document.mutableCopy():ii.newInvalidDocument(t))}getEntries(e,t){let n=Aa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ii.newInvalidDocument(e))})),mo.resolve(n)}getAllFromCollection(e,t,n){let r=Aa();const o=new ao(t.child("")),i=this.docs.getIteratorFrom(o);for(;i.hasNext();){const{key:e,value:{document:o}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||ho(uo(o),n)<=0||(r=r.insert(o.key,o.mutableCopy()))}return mo.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Nr()}As(e,t){return mo.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Gs(this)}getSize(e){return mo.resolve(this.size)}}class Gs extends Bs{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),mo.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.persistence=e,this.Rs=new Ta((e=>li(e)),ci),this.lastRemoteSnapshotVersion=to.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ys,this.targetCount=0,this.vs=$s.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),mo.resolve()}getLastRemoteSnapshotVersion(e){return mo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mo.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),mo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),mo.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new $s(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,mo.resolve()}updateTargetData(e,t){return this.Dn(t),mo.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,mo.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.Rs.forEach(((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(i),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),mo.waitFor(o).next((()=>r))}getTargetCount(e){return mo.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return mo.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),mo.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((t=>{o.push(r.markPotentiallyOrphaned(e,t))})),mo.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),mo.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return mo.resolve(n)}containsKey(e,t){return mo.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new yo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Js(this),this.indexManager=new Ns,this.remoteDocumentCache=function(e){return new Ks(e)}((e=>this.referenceDelegate.xs(e))),this.It=new Ps(t),this.Ns=new Hs(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Us,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Qs(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Dr("MemoryPersistence","Starting transaction:",e);const r=new Zs(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Ms(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return mo.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class Zs extends po{constructor(e){super(),this.currentSequenceNumber=e}}class el{constructor(e){this.persistence=e,this.Fs=new Ys,this.$s=null}static Bs(e){return new el(e)}get Ls(){if(this.$s)return this.$s;throw Nr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),mo.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),mo.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),mo.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Ms(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mo.forEach(this.Ls,(n=>{const r=ao.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,to.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return mo.or([()=>mo.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Na(),r=Na();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new tl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((o=>o||this.Mi(e,t,r,n))).next((n=>n||this.Oi(e,t)))}ki(e,t){if(Ii(t))return mo.resolve(null);let n=Pi(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=qi(t,null,"F"),n=Pi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=Na(...r);return this.Ni.getDocuments(e,o).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.Fi(t,r);return this.$i(t,i,o,n.readTime)?this.ki(e,qi(t,null,"F")):this.Bi(e,i,t,n)}))))})))))}Mi(e,t,n,r){return Ii(t)||r.isEqual(to.min())?this.Oi(e,t):this.Ni.getDocuments(e,n).next((o=>{const i=this.Fi(t,o);return this.$i(t,i,n,r)?this.Oi(e,t):(Mr()<=a["in"].DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Li(t)),this.Bi(e,i,t,lo(r,-1)))}))}Fi(e,t){let n=new Co(Bi(e));return t.forEach(((t,r)=>{Vi(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Oi(e,t){return Mr()<=a["in"].DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",Li(t)),this.Ni.getDocumentsMatchingQuery(e,t,co.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new ko(Xr),this.qi=new Ta((e=>li(e)),ci),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zs(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function ol(e,t,n,r){return new rl(e,t,n,r)}async function il(e,t){const n=Vr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((o=>(r=o,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let a=Na();for(const e of r){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({ji:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function al(e,t){const n=Vr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),o=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const o=n.batch,i=o.keys();let a=mo.resolve();return i.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Lr(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(n,e,t,o).next((()=>o.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Na();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function sl(e){const t=Vr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function ll(e,t){const n=Vr(e),r=t.snapshotVersion;let o=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});o=n.Ui;const a=[];t.targetChanges.forEach(((i,s)=>{const l=o.get(s);if(!l)return;a.push(n.Cs.removeMatchingKeys(e,i.removedDocuments,s).next((()=>n.Cs.addMatchingKeys(e,i.addedDocuments,s))));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(s)?u=u.withResumeToken(Ao.EMPTY_BYTE_STRING,to.min()).withLastLimboFreeSnapshotVersion(to.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),o=o.insert(s,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,i)&&a.push(n.Cs.updateTargetData(e,u))}));let s=Aa(),l=Na();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(ul(e,i,t.documentUpdates).next((e=>{s=e.Wi,l=e.zi}))),!r.isEqual(to.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return mo.waitFor(a).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,s,l))).next((()=>s))})).then((e=>(n.Ui=o,e)))}function ul(e,t,n){let r=Na(),o=Na();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Aa();return n.forEach(((n,i)=>{const a=e.get(n);i.isFoundDocument()!==a.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(to.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",i.version)})),{Wi:r,zi:o}}))}function cl(e,t){const n=Vr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function dl(e,t){const n=Vr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((o=>o?(r=o,mo.resolve(r)):n.Cs.allocateTargetId(e).next((o=>(r=new Ds(t,o,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function hl(e,t,n){const r=Vr(e),o=r.Ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,o)))}catch(e){if(!go(e))throw e;Dr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(o.target)}function fl(e,t,n){const r=Vr(e);let o=to.min(),i=Na();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Vr(e),o=r.qi.get(n);return void 0!==o?mo.resolve(r.Ui.get(o)):r.Cs.getTargetData(t,n)}(r,e,Pi(t)).next((t=>{if(t)return o=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?o:to.min(),n?i:Na()))).next((e=>(pl(r,$i(t),e),{documents:e,Hi:i})))))}function pl(e,t,n){let r=to.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class vl{constructor(){this.activeTargetIds=Va()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ml{constructor(){this.Lr=new vl,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new vl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,o){const i=this.ao(e,t);Dr("RestConnection","Sending: ",i,n);const a={};return this.ho(a,r,o),this.lo(e,i,a,n).then((e=>(Dr("RestConnection","Received: ",e),e)),(t=>{throw qr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}fo(e,t,n,r,o,i){return this.co(e,t,n,r,o)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Or,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=bl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){return new Promise(((o,i)=>{const a=new Er;a.listenOnce(kr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case _r.NO_ERROR:const t=a.getResponseJson();Dr("Connection","XHR received:",JSON.stringify(t)),o(t);break;case _r.TIMEOUT:Dr("Connection",'RPC "'+e+'" timed out'),i(new Br($r.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=a.getStatus();if(Dr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){const e=a.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values($r).indexOf(t)>=0?t:$r.UNKNOWN}(e.status);i(new Br(t,e.message))}else i(new Br($r.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new Br($r.UNAVAILABLE,"Connection failed."));break;default:Nr()}}finally{Dr("Connection",'RPC "'+e+'" completed.')}}));const s=JSON.stringify(r);a.send(t,"POST",s,n,15)}))}_o(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=br(),i=wr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Cr({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const s=r.join("");Dr("Connection","Creating WebChannel: "+s,a);const l=o.createWebChannel(s,a);let u=!1,c=!1;const d=new wl({Hr:e=>{c?Dr("Connection","Not sending because WebChannel is closed:",e):(u||(Dr("Connection","Opening WebChannel transport."),l.open(),u=!0),Dr("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(l,Tr.EventType.OPEN,(()=>{c||Dr("Connection","WebChannel transport opened.")})),h(l,Tr.EventType.CLOSE,(()=>{c||(c=!0,Dr("Connection","WebChannel transport closed"),d.io())})),h(l,Tr.EventType.ERROR,(e=>{c||(c=!0,qr("Connection","WebChannel transport errored:",e),d.io(new Br($r.UNAVAILABLE,"The operation could not be completed")))})),h(l,Tr.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Lr(!!n);const r=n,o=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(o){Dr("Connection","WebChannel received error:",o);const e=o.status;let t=function(e){const t=ka[e];if(void 0!==t)return Ca(t)}(e),n=o.message;void 0===t&&(t=$r.INTERNAL,n="Unknown error status: "+e+" with message "+o.message),c=!0,d.io(new Br(t,n)),l.close()}else Dr("Connection","WebChannel received:",n),d.ro(n)}})),h(i,Sr.STAT_EVENT,(e=>{e.stat===xr.PROXY?Dr("Connection","Detected buffering proxy"):e.stat===xr.NOPROXY&&Dr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(e){return new Ja(e,!0)}class xl{constructor(e,t,n=1e3,r=1.5,o=6e4){this.Hs=e,this.timerId=t,this.wo=n,this.mo=r,this.yo=o,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,n,r,o,i,a,s){this.Hs=e,this.Po=n,this.vo=r,this.Vo=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=s,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new xl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===$r.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):t&&t.code===$r.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Br($r.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(e){return Dr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tl extends Cl{constructor(e,t,n,r,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.It=o}jo(e,t){return this.Vo._o("Listen",e,t)}onMessage(e){this.xo.reset();const t=ds(this.It,e),n=function(e){if(!("targetChange"in e))return to.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?to.min():t.readTime?ts(t.readTime):to.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ls(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=di(r)?{documents:ps(e,r)}:{query:vs(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Za(e,t.resumeToken):t.snapshotVersion.compareTo(to.min())>0&&(n.readTime=Xa(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=gs(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ls(this.It),t.removeTarget=e,this.Bo(t)}}class El extends Cl{constructor(e,t,n,r,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.It=o,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.Vo._o("Write",e,t)}onMessage(e){if(Lr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=fs(e.writeResults,e.commitTime),n=ts(e.commitTime);return this.listener.Zo(n,t)}return Lr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ls(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>hs(this.It,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Vo=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Br($r.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.Vo.co(e,t,n,r,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br($r.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.Vo.fo(e,t,n,o,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br($r.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Il{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Pr(t),this.ou=!1):Dr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.qr((e=>{n.enqueueAndForget((async()=>{Vl(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Vr(e);t._u.add(4),await Ml(t),t.gu.set("Unknown"),t._u.delete(4),await Fl(t)}(this))}))})),this.gu=new Il(n,r)}}async function Fl(e){if(Vl(e))for(const t of e.wu)await t(!0)}async function Ml(e){for(const t of e.wu)await t(!1)}function Dl(e,t){const n=Vr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Ll(n)?Nl(n):ru(n).ko()&&ql(n,t))}function Pl(e,t){const n=Vr(e),r=ru(n);n.du.delete(t),r.ko()&&Rl(n,t),0===n.du.size&&(r.ko()?r.Fo():Vl(n)&&n.gu.set("Unknown"))}function ql(e,t){e.yu.Ot(t.targetId),ru(e).zo(t)}function Rl(e,t){e.yu.Ot(t),ru(e).Ho(t)}function Nl(e){e.yu=new Ya({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ru(e).start(),e.gu.uu()}function Ll(e){return Vl(e)&&!ru(e).No()&&e.du.size>0}function Vl(e){return 0===Vr(e)._u.size}function $l(e){e.yu=void 0}async function Bl(e){e.du.forEach(((t,n)=>{ql(e,t)}))}async function jl(e,t){$l(e),Ll(e)?(e.gu.hu(t),Nl(e)):e.gu.set("Unknown")}async function zl(e,t,n){if(e.gu.set("Online"),t instanceof Ha&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Hl(e,n)}else if(t instanceof ja?e.yu.Gt(t):t instanceof za?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(to.min()))try{const t=await sl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const o=e.du.get(r);o&&e.du.set(r,o.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ao.EMPTY_BYTE_STRING,n.snapshotVersion)),Rl(e,t);const r=new Ds(n.target,t,1,n.sequenceNumber);ql(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Dr("RemoteStore","Failed to raise snapshot:",t),await Hl(e,t)}}async function Hl(e,t,n){if(!go(t))throw t;e._u.add(1),await Ml(e),e.gu.set("Offline"),n||(n=()=>sl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Fl(e)}))}function Ul(e,t){return t().catch((n=>Hl(e,n,t)))}async function Yl(e){const t=Vr(e),n=ou(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Wl(t);)try{const e=await cl(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Ql(t,e)}catch(e){await Hl(t,e)}Kl(t)&&Gl(t)}function Wl(e){return Vl(e)&&e.fu.length<10}function Ql(e,t){e.fu.push(t);const n=ou(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Kl(e){return Vl(e)&&!ou(e).No()&&e.fu.length>0}function Gl(e){ou(e).start()}async function Jl(e){ou(e).eu()}async function Xl(e){const t=ou(e);for(const n of e.fu)t.Xo(n.mutations)}async function Zl(e,t,n){const r=e.fu.shift(),o=Fs.from(r,t,n);await Ul(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await Yl(e)}async function eu(e,t){t&&ou(e).Yo&&await async function(e,t){if(n=t.code,xa(n)&&n!==$r.ABORTED){const n=e.fu.shift();ou(e).Oo(),await Ul(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Yl(e)}var n}(e,t),Kl(e)&&Gl(e)}async function tu(e,t){const n=Vr(e);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const r=Vl(n);n._u.add(3),await Ml(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Fl(n)}async function nu(e,t){const n=Vr(e);t?(n._u.delete(2),await Fl(n)):t||(n._u.add(2),await Ml(n),n.gu.set("Unknown"))}function ru(e){return e.pu||(e.pu=function(e,t,n){const r=Vr(e);return r.su(),new Tl(t,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Bl.bind(null,e),Zr:jl.bind(null,e),Wo:zl.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),Ll(e)?Nl(e):e.gu.set("Unknown")):(await e.pu.stop(),$l(e))}))),e.pu}function ou(e){return e.Iu||(e.Iu=function(e,t,n){const r=Vr(e);return r.su(),new El(t,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:Jl.bind(null,e),Zr:eu.bind(null,e),tu:Xl.bind(null,e),Zo:Zl.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Oo(),await Yl(e)):(await e.Iu.stop(),e.fu.length>0&&(Dr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class iu{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,o){const i=Date.now()+n,a=new iu(e,t,i,r,o);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br($r.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(e,t){if(Pr("AsyncQueue",`${t}: ${e}`),go(e))return new Br($r.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ao.comparator(t.key,n.key):(e,t)=>ao.comparator(e.key,t.key),this.keyedMap=Oa(),this.sortedSet=new ko(this.comparator)}static emptySet(e){return new su(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof su))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new su;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Tu=new ko(ao.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Nr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class uu{constructor(e,t,n,r,o,i,a,s){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=s}static fromInitialDocuments(e,t,n,r){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new uu(e,t,su.emptySet(t),o,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ri(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Au=void 0,this.listeners=[]}}class du{constructor(){this.queries=new Ta((e=>Ni(e)),Ri),this.onlineState="Unknown",this.Ru=new Set}}async function hu(e,t){const n=Vr(e),r=t.query;let o=!1,i=n.queries.get(r);if(i||(o=!0,i=new cu),o)try{i.Au=await n.onListen(r)}catch(e){const n=au(e,`Initialization of query '${Li(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&mu(n)}async function fu(e,t){const n=Vr(e),r=t.query;let o=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),o=0===i.listeners.length)}if(o)return n.queries.delete(r),n.onUnlisten(r)}function pu(e,t){const n=Vr(e);let r=!1;for(const o of t){const e=o.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(o)&&(r=!0);t.Au=o}}r&&mu(n)}function vu(e,t,n){const r=Vr(e),o=r.queries.get(t);if(o)for(const i of o.listeners)i.onError(n);r.queries.delete(t)}function mu(e){e.Ru.forEach((e=>{e.next()}))}class gu{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new uu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=uu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(e){this.key=e}}class bu{constructor(e){this.key=e}}class wu{constructor(e,t){this.query=e,this.Lu=t,this.Uu=null,this.current=!1,this.qu=Na(),this.mutatedKeys=Na(),this.Ku=Bi(e),this.Gu=new su(this.Ku)}get Qu(){return this.Lu}ju(e,t){const n=t?t.Wu:new lu,r=t?t.Gu:this.Gu;let o=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1;const s="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Vi(this.query,t)?t:null,d=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.zu(u,c)||(n.track({type:2,doc:c}),f=!0,(s&&this.Ku(c,s)>0||l&&this.Ku(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(s||l)&&(a=!0)),f&&(c?(i=i.add(c),o=h?o.add(e):o.delete(e)):(i=i.delete(e),o=o.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),o=o.delete(e.key),n.track({type:1,doc:e})}return{Gu:i,Wu:n,$i:a,mutatedKeys:o}}zu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const o=e.Wu.Eu();o.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Nr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const i=t?this.Ju():[],a=0===this.qu.size&&this.current?1:0,s=a!==this.Uu;return this.Uu=a,0!==o.length||s?{snapshot:new uu(this.query,e.Gu,r,o,e.mutatedKeys,0===a,s,!1),Yu:i}:{Yu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new lu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Na(),this.Gu.forEach((e=>{this.Xu(e.key)&&(this.qu=this.qu.add(e.key))}));const t=[];return e.forEach((e=>{this.qu.has(e)||t.push(new bu(e))})),this.qu.forEach((n=>{e.has(n)||t.push(new yu(n))})),t}Zu(e){this.Lu=e.Hi,this.qu=Na();const t=this.ju(e.documents);return this.applyChanges(t,!0)}tc(){return uu.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class _u{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ku{constructor(e){this.key=e,this.ec=!1}}class Su{constructor(e,t,n,r,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.nc={},this.sc=new Ta((e=>Ni(e)),Ri),this.ic=new Map,this.rc=new Set,this.oc=new ko(ao.comparator),this.uc=new Map,this.cc=new Ys,this.ac={},this.hc=new Map,this.lc=$s.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function xu(e,t){const n=zu(e);let r,o;const i=n.sc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),o=i.view.tc();else{const e=await dl(n.localStore,Pi(t));n.isPrimaryClient&&Dl(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,o=await Cu(n,t,r,"current"===i)}return o}async function Cu(e,t,n,r){e.dc=(t,n,r)=>async function(e,t,n,r){let o=t.view.ju(n);o.$i&&(o=await fl(e.localStore,t.query,!1).then((({documents:e})=>t.view.ju(e,o))));const i=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(o,e.isPrimaryClient,i);return Nu(e,t.targetId,a.Yu),a.snapshot}(e,t,n,r);const o=await fl(e.localStore,t,!0),i=new wu(t,o.Hi),a=i.ju(o.documents),s=Ba.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=i.applyChanges(a,e.isPrimaryClient,s);Nu(e,n,l.Yu);const u=new _u(t,n,i);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),l.snapshot}async function Tu(e,t){const n=Vr(e),r=n.sc.get(t),o=n.ic.get(r.targetId);if(o.length>1)return n.ic.set(r.targetId,o.filter((e=>!Ri(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Pl(n.remoteStore,r.targetId),qu(n,r.targetId)})).catch(vo)):(qu(n,r.targetId),await hl(n.localStore,r.targetId,!0))}async function Eu(e,t,n){const r=Hu(e);try{const e=await function(e,t){const n=Vr(e),r=eo.now(),o=t.reduce(((e,t)=>e.add(t.key)),Na());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let s=Aa(),l=Na();return n.Gi.getEntries(e,o).next((e=>{s=e,s.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,s))).next((o=>{i=o;const a=[];for(const e of t){const t=ha(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new va(e.key,t,oi(t.value.mapValue),aa.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:Fa(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new ko(Xr)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await $u(r,e.changes),await Yl(r.remoteStore)}catch(e){const t=au(e,"Failed to persist write");n.reject(t)}}async function Au(e,t){const n=Vr(e);try{const e=await ll(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(Lr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?Lr(r.ec):e.removedDocuments.size>0&&(Lr(r.ec),r.ec=!1))})),await $u(n,e,t)}catch(e){await vo(e)}}function Iu(e,t,n){const r=Vr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const o=r.view.bu(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const n=Vr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const o of n.listeners)o.bu(t)&&(r=!0)})),r&&mu(n)}(r.eventManager,t),e.length&&r.nc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ou(e,t,n){const r=Vr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.uc.get(t),i=o&&o.key;if(i){let e=new ko(ao.comparator);e=e.insert(i,ii.newNoDocument(i,to.min()));const n=Na().add(i),o=new $a(to.min(),new Map,new Co(Xr),e,n);await Au(r,o),r.oc=r.oc.remove(i),r.uc.delete(t),Vu(r)}else await hl(r.localStore,t,!1).then((()=>qu(r,t,n))).catch(vo)}async function Fu(e,t){const n=Vr(e),r=t.batch.batchId;try{const e=await al(n.localStore,t);Pu(n,r,null),Du(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $u(n,e)}catch(e){await vo(e)}}async function Mu(e,t,n){const r=Vr(e);try{const e=await function(e,t){const n=Vr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Lr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Pu(r,t,n),Du(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await $u(r,e)}catch(n){await vo(n)}}function Du(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Pu(e,t,n){const r=Vr(e);let o=r.ac[r.currentUser.toKey()];if(o){const e=o.get(t);e&&(n?e.reject(n):e.resolve(),o=o.remove(t)),r.ac[r.currentUser.toKey()]=o}}function qu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc._c(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach((t=>{e.cc.containsKey(t)||Ru(e,t)}))}function Ru(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Pl(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Vu(e))}function Nu(e,t,n){for(const r of n)r instanceof yu?(e.cc.addReference(r.key,t),Lu(e,r)):r instanceof bu?(Dr("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||Ru(e,r.key)):Nr()}function Lu(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(Dr("SyncEngine","New document in limbo: "+n),e.rc.add(r),Vu(e))}function Vu(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new ao(ro.fromString(t)),r=e.lc.next();e.uc.set(r,new ku(n)),e.oc=e.oc.insert(n,r),Dl(e.remoteStore,new Ds(Pi(Ai(n.path)),r,2,yo.at))}}async function $u(e,t,n){const r=Vr(e),o=[],i=[],a=[];r.sc.isEmpty()||(r.sc.forEach(((e,s)=>{a.push(r.dc(s,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(s.targetId,e.fromCache?"not-current":"current"),o.push(e);const t=tl.Ci(s.targetId,e);i.push(t)}})))})),await Promise.all(a),r.nc.Wo(o),await async function(e,t){const n=Vr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mo.forEach(t,(t=>mo.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>mo.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!go(e))throw e;Dr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,o)}}}(r.localStore,i))}async function Bu(e,t){const n=Vr(e);if(!n.currentUser.isEqual(t)){Dr("SyncEngine","User change. New user:",t.toKey());const e=await il(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new Br($r.CANCELLED,t))}))})),e.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await $u(n,e.ji)}}function ju(e,t){const n=Vr(e),r=n.uc.get(t);if(r&&r.ec)return Na().add(r.key);{let e=Na();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}function zu(e){const t=Vr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Au.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ju.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ou.bind(null,t),t.nc.Wo=pu.bind(null,t.eventManager),t.nc._c=vu.bind(null,t.eventManager),t}function Hu(e){const t=Vr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mu.bind(null,t),t}class Uu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Sl(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,t){return null}Tc(e,t){return null}yc(e){return ol(this.persistence,new nl,e.initialUser,this.It)}gc(e){return new Xs(el.Bs,this.It)}mc(e){return new ml}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Iu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bu.bind(null,this.syncEngine),await nu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new du}createDatastore(e){const t=Sl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new _l(r));var r;return function(e,t,n,r){return new Al(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,o=e=>Iu(this.syncEngine,e,0),i=yl.C()?new yl:new gl,new Ol(t,n,r,o,i);var t,n,r,o,i}createSyncEngine(e,t){return function(e,t,n,r,o,i,a){const s=new Su(e,t,n,r,o,i);return a&&(s.fc=!0),s}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Vr(e);Dr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Ml(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qu{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ir.UNAUTHENTICATED,this.clientId=Jr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Dr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Dr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br($r.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=au(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ku(e,t){e.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await il(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Gu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Ju(e);Dr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>tu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>tu(t.remoteStore,n))),e.onlineComponents=t}async function Ju(e){return e.offlineComponents||(Dr("FirestoreClient","Using default OfflineComponentProvider"),await Ku(e,new Uu)),e.offlineComponents}async function Xu(e){return e.onlineComponents||(Dr("FirestoreClient","Using default OnlineComponentProvider"),await Gu(e,new Yu)),e.onlineComponents}function Zu(e){return Xu(e).then((e=>e.syncEngine))}async function ec(e){const t=await Xu(e),n=t.eventManager;return n.onListen=xu.bind(null,t.syncEngine),n.onUnlisten=Tu.bind(null,t.syncEngine),n}function tc(e,t,n={}){const r=new jr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Wu({next:i=>{t.enqueueAndForget((()=>fu(e,a)));const s=i.docs.has(n);!s&&i.fromCache?o.reject(new Br($r.UNAVAILABLE,"Failed to get document because the client is offline.")):s&&i.fromCache&&r&&"server"===r.source?o.reject(new Br($r.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(i)},error:e=>o.reject(e)}),a=new gu(Ai(n.path),i,{includeMetadataChanges:!0,Nu:!0});return hu(e,a)}(await ec(e),e.asyncQueue,t,n,r))),r.promise}function nc(e,t,n={}){const r=new jr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Wu({next:n=>{t.enqueueAndForget((()=>fu(e,a))),n.fromCache&&"server"===r.source?o.reject(new Br($r.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(n)},error:e=>o.reject(e)}),a=new gu(n,i,{includeMetadataChanges:!0,Nu:!0});return hu(e,a)}(await ec(e),e.asyncQueue,t,n,r))),r.promise}const rc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e,t,n){if(!n)throw new Br($r.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ic(e,t,n,r){if(!0===t&&!0===r)throw new Br($r.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ac(e){if(!ao.isDocumentKey(e))throw new Br($r.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sc(e){if(ao.isDocumentKey(e))throw new Br($r.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Nr()}function uc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Br($r.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lc(e);throw new Br($r.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function cc(e,t){if(t<=0)throw new Br($r.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Br($r.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Br($r.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ic("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br($r.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Br($r.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Hr;switch(e.type){case"gapi":const t=e.client;return new Wr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Br($r.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=rc.get(e);t&&(Dr("ComponentProvider","Removing Datastore"),rc.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fc(this.firestore,e,this._key)}}class pc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new pc(this.firestore,e,this._query)}}class vc extends pc{constructor(e,t,n){super(e,t,Ai(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fc(this.firestore,null,new ao(e))}withConverter(e){return new vc(this.firestore,e,this._path)}}function mc(e,t,...n){if(e=(0,s.m9)(e),oc("collection","path",t),e instanceof hc){const r=ro.fromString(t,...n);return sc(r),new vc(e,null,r)}{if(!(e instanceof fc||e instanceof vc))throw new Br($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ro.fromString(t,...n));return sc(r),new vc(e.firestore,null,r)}}function gc(e,t,...n){if(e=(0,s.m9)(e),1===arguments.length&&(t=Jr.R()),oc("doc","path",t),e instanceof hc){const r=ro.fromString(t,...n);return ac(r),new fc(e,null,new ao(r))}{if(!(e instanceof fc||e instanceof vc))throw new Br($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ro.fromString(t,...n));return ac(r),new fc(e.firestore,e instanceof vc?e.converter:null,new ao(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new xl(this,"async_queue_retry"),this.jc=()=>{const e=kl();e&&Dr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};const e=kl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const t=kl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise((()=>{}));const t=new jr;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Bc.push(e),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(k){if(!go(k))throw k;Dr("AsyncQueue","Operation failed with retryable error: "+k)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(e){const t=this.$c.then((()=>(this.Kc=!0,e().catch((e=>{this.qc=e,this.Kc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Pr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Kc=!1,e))))));return this.$c=t,t}enqueueAfterDelay(e,t,n){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);const r=iu.createAndSchedule(this,e,t,n,(e=>this.Jc(e)));return this.Uc.push(r),r}Wc(){this.qc&&Nr()}verifyOperationInProgress(){}async Yc(){let e;do{e=this.$c,await e}while(e!==this.$c)}Xc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()}))}ta(e){this.Qc.push(e)}Jc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function bc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class wc extends hc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new yc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Sc(this),this._firestoreClient.terminate()}}function _c(e,t){const n="object"==typeof e?e:(0,o.Mq)(),r="string"==typeof e?e:t||"(default)";return(0,o.qX)(n,"firestore").getImmediate({identifier:r})}function kc(e){return e._firestoreClient||Sc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Sc(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ro(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Qu(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Br($r.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new io(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cc(Ao.fromBase64String(e))}catch(e){throw new Br($r.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Cc(Ao.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Br($r.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Br($r.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xr(this._lat,e._lat)||Xr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=/^__.*__$/;class Ic{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new va(e,this.data,this.fieldMask,t,this.fieldTransforms):new pa(e,this.data,t,this.fieldTransforms)}}class Oc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new va(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Nr()}}class Mc{constructor(e,t,n,r,o,i){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===o&&this.ea(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.oa(e),r}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Wc(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(0===e.length)throw this.aa("Document fields must not be empty");if(Fc(this.na)&&Ac.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class Dc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Sl(e)}fa(e,t,n,r=!1){return new Mc({na:e,methodName:t,la:n,path:io.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Pc(e){const t=e._freezeSettings(),n=Sl(e._databaseId);return new Dc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function qc(e,t,n,r,o,i={}){const a=e.fa(i.merge||i.mergeFields?2:0,t,n,o);zc("Data must be an object, but it was:",a,r);const s=Bc(r,a);let l,u;if(i.merge)l=new Eo(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const o=Hc(t,r,n);if(!a.contains(o))throw new Br($r.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);Qc(e,o)||e.push(o)}l=new Eo(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new Ic(new ri(s),l,u)}class Rc extends Tc{_toFieldTransform(e){if(2!==e.na)throw 1===e.na?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rc}}function Nc(e,t,n,r){const o=e.fa(1,t,n);zc("Data must be an object, but it was:",o,r);const i=[],a=ri.empty();wo(r,((e,r)=>{const l=Yc(t,e,n);r=(0,s.m9)(r);const u=o.ua(l);if(r instanceof Rc)i.push(l);else{const e=$c(r,u);null!=e&&(i.push(l),a.set(l,e))}}));const l=new Eo(i);return new Oc(a,l,o.fieldTransforms)}function Lc(e,t,n,r,o,i){const a=e.fa(1,t,n),l=[Hc(t,r,n)],u=[o];if(i.length%2!=0)throw new Br($r.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<i.length;s+=2)l.push(Hc(t,i[s])),u.push(i[s+1]);const c=[],d=ri.empty();for(let f=l.length-1;f>=0;--f)if(!Qc(c,l[f])){const e=l[f];let t=u[f];t=(0,s.m9)(t);const n=a.ua(e);if(t instanceof Rc)c.push(e);else{const r=$c(t,n);null!=r&&(c.push(e),d.set(e,r))}}const h=new Eo(c);return new Oc(d,h,a.fieldTransforms)}function Vc(e,t,n,r=!1){return $c(n,e.fa(r?4:3,t))}function $c(e,t){if(jc(e=(0,s.m9)(e)))return zc("Unsupported field value:",t,e),Bc(e,t);if(e instanceof Tc)return function(e,t){if(!Fc(t.na))throw t.aa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.aa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&4!==t.na)throw t.aa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const o of e){let e=$c(o,t.ca(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,s.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ui(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=eo.fromDate(e);return{timestampValue:Xa(t.It,n)}}if(e instanceof eo){const n=new eo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Xa(t.It,n)}}if(e instanceof Ec)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Cc)return{bytesValue:Za(t.It,e._byteString)};if(e instanceof fc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ns(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.aa(`Unsupported field value: ${lc(e)}`)}(e,t)}function Bc(e,t){const n={};return _o(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wo(e,((e,r)=>{const o=$c(r,t.ia(e));null!=o&&(n[e]=o)})),{mapValue:{fields:n}}}function jc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof eo||e instanceof Ec||e instanceof Cc||e instanceof fc||e instanceof Tc)}function zc(e,t,n){if(!jc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=lc(n);throw"an object"===r?t.aa(e+" a custom object"):t.aa(e+" "+r)}}function Hc(e,t,n){if((t=(0,s.m9)(t))instanceof xc)return t._internalPath;if("string"==typeof t)return Yc(e,t);throw Wc("Field path arguments must be of type string or ",e,!1,void 0,n)}const Uc=new RegExp("[~\\*/\\[\\]]");function Yc(e,t,n){if(t.search(Uc)>=0)throw Wc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xc(...t.split("."))._internalPath}catch(r){throw Wc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wc(e,t,n,r,o){const i=r&&!r.isEmpty(),a=void 0!==o;let s=`Function ${t}() called with invalid data`;n&&(s+=" (via `toFirestore()`)"),s+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${o}`),l+=")"),new Br($r.INVALID_ARGUMENT,s+e+l)}function Qc(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new fc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Gc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Gc extends Kc{data(){return super.data()}}function Jc(e,t){return"string"==typeof t?Yc(e,t):t instanceof xc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zc extends Kc{constructor(e,t,n,r,o,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Jc("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ed extends Zc{data(e={}){return super.data(e)}}class td{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Xc(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ed(this._firestore,this._userDataWriter,n.key,n,new Xc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Br($r.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new ed(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Xc(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ed(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Xc(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:nd(t.type),doc:r,oldIndex:o,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Nr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rd(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Br($r.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class od{}function id(e,...t){for(const n of t)e=n._apply(e);return e}class ad extends od{constructor(e,t,n){super(),this.wa=e,this.ma=t,this.ga=n,this.type="where"}_apply(e){const t=Pc(e.firestore),n=function(e,t,n,r,o,i,a){let s;if(o.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Br($r.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){fd(a,i);const t=[];for(const n of a)t.push(hd(r,e,n));s={arrayValue:{values:t}}}else s=hd(r,e,a)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||fd(a,i),s=Vc(n,t,a,"in"===i||"not-in"===i);const l=hi.create(o,i,s);return function(e,t){if(t.dt()){const n=Fi(e);if(null!==n&&!n.isEqual(t.field))throw new Br($r.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Oi(e);null!==r&&pd(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Br($r.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Br($r.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,"where",t,e.firestore._databaseId,this.wa,this.ma,this.ga);return new pc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ti(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function sd(e,t,n){const r=t,o=Jc("where",e);return new ad(o,r,n)}class ld extends od{constructor(e,t){super(),this.wa=e,this.ya=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Br($r.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Br($r.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ki(t,n);return function(e,t){if(null===Oi(e)){const n=Fi(e);null!==n&&pd(e,n,t.field)}}(e,r),r}(e._query,this.wa,this.ya);return new pc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ti(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ud(e,t="asc"){const n=t,r=Jc("orderBy",e);return new ld(r,n)}class cd extends od{constructor(e,t,n){super(),this.type=e,this.pa=t,this.Ia=n}_apply(e){return new pc(e.firestore,e.converter,qi(e._query,this.pa,this.Ia))}}function dd(e){return cc("limit",e),new cd("limit",e,"F")}function hd(e,t,n){if("string"==typeof(n=(0,s.m9)(n))){if(""===n)throw new Br($r.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mi(t)&&-1!==n.indexOf("/"))throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ro.fromString(n));if(!ao.isDocumentKey(r))throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ko(e,new ao(r))}if(n instanceof fc)return Ko(e,n._key);throw new Br($r.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lc(n)}.`)}function fd(e,t){if(!Array.isArray(e)||0===e.length)throw new Br($r.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Br($r.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function pd(e,t,n){if(!n.isEqual(t))throw new Br($r.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vd{convertValue(e,t="none"){switch(jo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Nr()}}convertObject(e,t){const n={};return wo(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ec(Fo(e.latitude),Fo(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Po(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const t=Oo(e);return new eo(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ro.fromString(e);Lr(Ts(n));const r=new No(n.get(1),n.get(3)),o=new ao(n.popFirst(5));return r.isEqual(t)||Pr(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gd(e){e=uc(e,fc);const t=uc(e.firestore,wc);return tc(kc(t),e._key).then((n=>Td(t,e,n)))}class yd extends vd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cc(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fc(this.firestore,null,t)}}function bd(e){e=uc(e,pc);const t=uc(e.firestore,wc),n=kc(t),r=new yd(t);return rd(e._query),nc(n,e._query).then((n=>new td(t,r,e,n)))}function wd(e,t,n){e=uc(e,fc);const r=uc(e.firestore,wc),o=md(e.converter,t,n);return Cd(r,[qc(Pc(r),"setDoc",e._key,o,null!==e.converter,n).toMutation(e._key,aa.none())])}function _d(e,t,n,...r){e=uc(e,fc);const o=uc(e.firestore,wc),i=Pc(o);let a;return a="string"==typeof(t=(0,s.m9)(t))||t instanceof xc?Lc(i,"updateDoc",e._key,t,n,r):Nc(i,"updateDoc",e._key,t),Cd(o,[a.toMutation(e._key,aa.exists(!0))])}function kd(e){return Cd(uc(e.firestore,wc),[new ba(e._key,aa.none())])}function Sd(e,t){const n=uc(e.firestore,wc),r=gc(e),o=md(e.converter,t);return Cd(n,[qc(Pc(e.firestore),"addDoc",r._key,o,null!==e.converter,{}).toMutation(r._key,aa.exists(!1))]).then((()=>r))}function xd(e,...t){var n,r,o;e=(0,s.m9)(e);let i={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||bc(t[a])||(i=t[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges};if(bc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(o=e.complete)||void 0===o?void 0:o.bind(e)}let u,c,d;if(e instanceof fc)c=uc(e.firestore,wc),d=Ai(e._key.path),u={next:n=>{t[a]&&t[a](Td(c,e,n))},error:t[a+1],complete:t[a+2]};else{const n=uc(e,pc);c=uc(n.firestore,wc),d=n._query;const r=new yd(c);u={next:e=>{t[a]&&t[a](new td(c,r,n,e))},error:t[a+1],complete:t[a+2]},rd(e._query)}return function(e,t,n,r){const o=new Wu(r),i=new gu(t,o,n);return e.asyncQueue.enqueueAndForget((async()=>hu(await ec(e),i))),()=>{o.Rc(),e.asyncQueue.enqueueAndForget((async()=>fu(await ec(e),i)))}}(kc(c),d,l,u)}function Cd(e,t){return function(e,t){const n=new jr;return e.asyncQueue.enqueueAndForget((async()=>Eu(await Zu(e),t,n))),n.promise}(kc(e),t)}function Td(e,t,n){const r=n.docs.get(t._key),o=new yd(e);return new Zc(e,o,t._key,r,new Xc(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Or=e}(o.Jn),(0,o.Xd)(new i.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const o=e.getProvider("app").getImmediate(),i=new wc(new Ur(e.getProvider("auth-internal")),new Kr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Br($r.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(o,n),o);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(Ar,"3.5.0",e),(0,o.KN)(Ar,"3.5.0","esm2017")}()},1992:function(e,t,n){"use strict";n.d(t,{oq:function(){return Tt},Jt:function(){return Ct},cF:function(){return At},aF:function(){return xt},iH:function(){return Et},B0:function(){return St}});n(2801),n(8675),n(3462),n(7380),n(1118),n(6699),n(1703);var r=n(7077),o=n(223),i=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",s="storageBucket",l=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends o.ZR{constructor(e,t){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function h(){const e="An unknown error occurred, please check the error payload for server response.";return new c("unknown",e)}function f(e){return new c("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new c("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new c("unauthenticated",e)}function m(){return new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function g(e){return new c("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new c("canceled","User canceled the upload/download.")}function w(e){return new c("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function k(){return new c("no-default-bucket","No default bucket found. Did you set the '"+s+"' property when initializing the app?")}function S(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function x(){return new c("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function C(){return new c("no-download-url","The given file does not have any download URLs.")}function T(e){return new c("invalid-argument",e)}function E(){return new c("app-deleted","The Firebase app was deleted.")}function A(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function I(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function O(e){throw new c("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=F.makeFromUrl(e,t)}catch(r){return new F(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const i="(/(.*))?$",s=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const c="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${c}/b/${r}/o${h}`,"i"),p={bucket:1,path:3},v=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",g=new RegExp(`^https?://${v}/${r}/${m}`,"i"),y={bucket:1,path:2},b=[{regex:s,indices:l,postModify:o},{regex:f,indices:p,postModify:u},{regex:g,indices:y,postModify:u}];for(let a=0;a<b.length;a++){const t=b[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new F(e,o),t.postModify(n);break}}if(null==n)throw w(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t,n){let r=1,o=null,i=null,a=!1,s=0;function l(){return 2===s}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function d(t){o=setTimeout((()=>{o=null,e(f,l())}),t)}function h(){i&&clearTimeout(i)}function f(e,...t){if(u)return void h();if(e)return h(),void c.call(null,e,...t);const n=l()||a;if(n)return h(),void c.call(null,e,...t);let o;r<64&&(r*=2),1===s?(s=2,o=0):o=1e3*(r+Math.random()),d(o)}let p=!1;function v(e){p||(p=!0,h(),u||(null!==o?(e||(s=2),clearTimeout(o),d(0)):e||(s=1)))}return d(0),i=setTimeout((()=>{a=!0,v(!0)}),n),v}function P(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return void 0!==e}function R(e){return"function"===typeof e}function N(e){return"object"===typeof e&&!Array.isArray(e)}function L(e){return"string"===typeof e||e instanceof String}function V(e){return $()&&e instanceof Blob}function $(){return"undefined"!==typeof Blob}function B(e,t,n,r){if(r<t)throw T(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw T(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function z(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(e,t,n,r,o,i,a,s,l,u,c){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=s,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new Y(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===H.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===H.ABORT;return void e(!1,new Y(!1,null,t))}const i=-1!==this.successCodes_.indexOf(o);e(!0,new Y(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());q(e)?n(e):n()}catch(i){r(i)}else if(null!==o){const e=h();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){const e=this.appDelete_?E():b();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new Y(!1,null,!0)):this.backoffId_=D(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||o}}class Y{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function W(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function K(e,t){t&&(e["X-Firebase-GMPID"]=t)}function G(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function J(e,t,n,r,o,i){const a=z(e.urlParams),s=e.url+a,l=Object.assign({},e.headers);return K(l,t),W(l,n),Q(l,i),G(l,r),new U(s,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...e){const t=X();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if($())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ee(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,t){this.data=e,this.contentType=t||null}}function oe(e,t){switch(e){case ne.RAW:return new re(ie(t));case ne.BASE64:case ne.BASE64URL:return new re(se(e,t));case ne.DATA_URL:return new re(ue(t),ce(t))}throw h()}function ie(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const o=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(o){const o=r,i=e.charCodeAt(++n);r=65536|(1023&o)<<10|1023&i,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ae(e){let t;try{t=decodeURIComponent(e)}catch(n){throw I(ne.DATA_URL,"Malformed data URL.")}return ie(t)}function se(e,t){switch(e){case ne.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw I(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ne.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw I(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=te(t)}catch(o){throw I(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class le{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw I(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=de(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ue(e){const t=new le(e);return t.base64?se(ne.BASE64,t.rest):ae(t.rest)}function ce(e){const t=new le(e);return t.contentType}function de(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){let n=0,r="";V(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(V(this.data_)){const n=this.data_,r=ee(n,e,t);return null===r?null:new he(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new he(n,!0)}}static getBlob(...e){if($()){const t=e.map((e=>e instanceof he?e.data_:e));return new he(Z.apply(null,t))}{const t=e.map((e=>L(e)?oe(ne.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]})),new he(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return N(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ve(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function me(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ge}}let be=null;function we(e){return!L(e)||e.length<2?e:me(e)}function _e(){if(be)return be;const e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const o=new ye("size");return o.xform=r,e.push(o),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),be=e,be}function ke(e,t){function n(){const n=e["bucket"],r=e["fullPath"],o=new F(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Se(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return ke(r,e),r}function xe(e,t,n){const r=fe(t);if(null===r)return null;const o=r;return Se(e,o,n)}function Ce(e,t,n,r){const o=fe(t);if(null===o)return null;if(!L(o["downloadTokens"]))return null;const i=o["downloadTokens"];if(0===i.length)return null;const a=encodeURIComponent,s=i.split(","),l=s.map((t=>{const o=e["bucket"],i=e["fullPath"],s="/b/"+a(o)+"/o/"+a(i),l=j(s,n,r),u=z({alt:"media",token:t});return l+u}));return l[0]}function Te(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="prefixes",Ae="items";function Ie(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Ee])for(const o of n[Ee]){const n=o.replace(/\/$/,""),i=e._makeStorageReference(new F(t,n));r.prefixes.push(i)}if(n[Ae])for(const o of n[Ae]){const n=e._makeStorageReference(new F(t,o["name"]));r.items.push(n)}return r}function Oe(e,t,n){const r=fe(n);if(null===r)return null;const o=r;return Ie(e,t,o)}class Fe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){if(!e)throw h()}function De(e,t){function n(n,r){const o=xe(e,r,t);return Me(null!==o),o}return n}function Pe(e,t){function n(n,r){const o=Oe(e,t,r);return Me(null!==o),o}return n}function qe(e,t){function n(n,r){const o=xe(e,r,t);return Me(null!==o),Ce(o,r,e.host,e._protocol)}return n}function Re(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?m():v():402===t.getStatus()?p(e.bucket):403===t.getStatus()?g(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Ne(e){const t=Re(e);function n(n,r){let o=t(n,r);return 404===n.getStatus()&&(o=f(e.path)),o.serverResponse=r.serverResponse,o}return n}function Le(e,t,n){const r=t.fullServerUrl(),o=j(r,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,s=new Fe(o,i,De(e,n),a);return s.errorHandler=Ne(t),s}function Ve(e,t,n,r,o){const i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",n&&n.length>0&&(i["delimiter"]=n),r&&(i["pageToken"]=r),o&&(i["maxResults"]=o);const a=t.bucketOnlyServerUrl(),s=j(a,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,c=new Fe(s,l,Pe(e,t.bucket),u);return c.urlParams=i,c.errorHandler=Re(t),c}function $e(e,t,n){const r=t.fullServerUrl(),o=j(r,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,s=new Fe(o,i,qe(e,n),a);return s.errorHandler=Ne(t),s}function Be(e,t){const n=t.fullServerUrl(),r=j(n,e.host,e._protocol),o="DELETE",i=e.maxOperationRetryTime;function a(e,t){}const s=new Fe(r,o,a,i);return s.successCodes=[200,204],s.errorHandler=Ne(t),s}function je(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function ze(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=je(null,t)),r}function He(e,t,n,r,o){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=s();a["Content-Type"]="multipart/related; boundary="+l;const u=ze(t,r,o),c=Te(u,n),d="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+l+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",h="\r\n--"+l+"--",f=he.getBlob(d,r,h);if(null===f)throw S();const p={name:u["fullPath"]},v=j(i,e.host,e._protocol),m="POST",g=e.maxUploadRetryTime,y=new Fe(v,m,De(e,n),g);return y.urlParams=p,y.headers=a,y.body=f.uploadData(),y.errorHandler=Re(t),y}class Ue{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ye(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){Me(!1)}const r=t||["active"];return Me(!!n&&-1!==r.indexOf(n)),n}function We(e,t,n,r,o){const i=t.bucketOnlyServerUrl(),a=ze(t,r,o),s={name:a["fullPath"]},l=j(i,e.host,e._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},d=Te(a,n),h=e.maxUploadRetryTime;function f(e){let t;Ye(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Me(!1)}return Me(L(t)),t}const p=new Fe(l,u,f,h);return p.urlParams=s,p.headers=c,p.body=d,p.errorHandler=Re(t),p}function Qe(e,t,n,r){const o={"X-Goog-Upload-Command":"query"};function i(e){const t=Ye(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Me(!1)}n||Me(!1);const o=Number(n);return Me(!isNaN(o)),new Ue(o,r.size(),"final"===t)}const a="POST",s=e.maxUploadRetryTime,l=new Fe(n,a,i,s);return l.headers=o,l.errorHandler=Re(t),l}const Ke=262144;function Ge(e,t,n,r,o,i,a,s){const l=new Ue(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw x();const u=l.total-l.current;let c=u;o>0&&(c=Math.min(c,o));const d=l.current,h=d+c,f=c===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(d,h);if(null===v)throw S();function m(e,n){const o=Ye(e,["active","final"]),a=l.current+c,s=r.size();let u;return u="final"===o?De(t,i)(e,n):null,new Ue(a,s,"final"===o,u)}const g="POST",y=t.maxUploadRetryTime,b=new Fe(n,g,m,y);return b.headers=p,b.body=v.uploadData(),b.progressCallback=s||null,b.errorHandler=Re(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xe(e){switch(e){case"running":case"pausing":case"canceling":return Je.RUNNING;case"paused":return Je.PAUSED;case"success":return Je.SUCCESS;case"canceled":return Je.CANCELED;case"error":return Je.ERROR;default:return Je.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,n){const r=R(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=null;class nt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=H.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=H.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class rt extends nt{initXhr(){this.xhr_.responseType="text"}}function ot(){return tt?tt():new rt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=_e(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=We(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ot,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=Qe(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,ot,t,n);this._request=o,o.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Ke*this._chunkMultiplier,t=new Ue(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let i;try{i=Ge(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(s){return this._error=s,void this._transition("error")}const a=this._ref.storage._makeRequest(i,ot,r,o);this._request=a,a.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=Ke*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=Le(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ot,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=He(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ot,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=b(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const o=new Ze(t||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Xe(this._state)){case Je.SUCCESS:et(this._resolve.bind(null,this.snapshot))();break;case Je.CANCELED:case Je.ERROR:const t=this._reject;et(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Xe(this._state);switch(t){case Je.RUNNING:case Je.PAUSED:e.next&&et(e.next.bind(e,this.snapshot))();break;case Je.SUCCESS:e.complete&&et(e.complete.bind(e))();break;case Je.CANCELED:case Je.ERROR:e.error&&et(e.error.bind(e,this._error))();break;default:e.error&&et(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this._service=e,this._location=t instanceof F?t:F.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new at(e,t)}get root(){const e=new F(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return me(this._location.path)}get storage(){return this._service}get parent(){const e=pe(this._location.path);if(null===e)return null;const t=new F(this._location.bucket,e);return new at(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw A(e)}}function st(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new it(e,new he(t),n)}function lt(e){const t={prefixes:[],items:[]};return ut(e,t).then((()=>t))}async function ut(e,t,n){const r={pageToken:n},o=await ct(e,r);t.prefixes.push(...o.prefixes),t.items.push(...o.items),null!=o.nextPageToken&&await ut(e,t,o.nextPageToken)}function ct(e,t){null!=t&&"number"===typeof t.maxResults&&B("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Ve(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,ot)}function dt(e){e._throwIfRoot("getDownloadURL");const t=$e(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,ot).then((e=>{if(null===e)throw C();return e}))}function ht(e){e._throwIfRoot("deleteObject");const t=Be(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ot)}function ft(e,t){const n=ve(e._location.path,t),r=new F(e._location.bucket,n);return new at(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){return/^[A-Za-z]+:\/\//.test(e)}function vt(e,t){return new at(e,t)}function mt(e,t){if(e instanceof bt){const n=e;if(null==n._bucket)throw k();const r=new at(n,n._bucket);return null!=t?mt(r,t):r}return void 0!==t?ft(e,t):e}function gt(e,t){if(t&&pt(t)){if(e instanceof bt)return vt(e,t);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return mt(e,t)}function yt(e,t){const n=null===t||void 0===t?void 0:t[s];return null==n?null:F.makeFromBucketSpec(n,e)}class bt{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?F.makeFromBucketSpec(r,this._host):yt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=F.makeFromBucketSpec(this._url,e):this._bucket=yt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){B("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){B("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new at(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new M(E());{const o=J(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const wt="@firebase/storage",_t="0.9.9",kt="storage";function St(e,t,n){return e=(0,o.m9)(e),st(e,t,n)}function xt(e){return e=(0,o.m9)(e),lt(e)}function Ct(e){return e=(0,o.m9)(e),dt(e)}function Tt(e){return e=(0,o.m9)(e),ht(e)}function Et(e,t){return e=(0,o.m9)(e),gt(e,t)}function At(e=(0,r.Mq)(),t){e=(0,o.m9)(e);const n=(0,r.qX)(e,kt),i=n.getImmediate({identifier:t});return i}function It(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new bt(n,o,i,t,r.Jn)}function Ot(){(0,r.Xd)(new i.wA(kt,It,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(wt,_t,""),(0,r.KN)(wt,_t,"esm2017")}Ot()},9341:function(e,t,n){"use strict";n.d(t,{z6z:function(){return uf}});n(6699),n(1703),n(2087),n(8675),n(3462),n(7380),n(1118);var r=n(4870),o=n(9242),i=n(3396);
/*!
 * Quasar Framework v2.8.4
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
/**
  * vee-validate v4.6.9
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function i(e){return"function"===typeof e}function a(e){return null===e||void 0===e}const s=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e);function l(e){return Number(e)>=0}function u(e){const t=parseFloat(e);return isNaN(t)?e:t}const c={};function d(e){return c[e]}const h=Symbol("vee-validate-form"),f=Symbol("vee-validate-field-instance"),p=Symbol("Default empty value");function v(e){return i(e)&&!!e.__locatorRef}function m(e){return!!e&&i(e.validate)}function g(e){return"checkbox"===e||"radio"===e}function y(e){return s(e)||Array.isArray(e)}function b(e){return Array.isArray(e)?0===e.length:s(e)&&0===Object.keys(e).length}function w(e){return/^\[.+\]$/i.test(e)}function _(e){return k(e)&&e.multiple}function k(e){return"SELECT"===e.tagName}function S(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return"select"===e&&"multiple"in t&&n}function x(e,t){return!S(e,t)&&"file"!==t.type&&!g(t.type)}function C(e){return T(e)&&e.target&&"submit"in e.target}function T(e){return!!e&&(!!("undefined"!==typeof Event&&i(Event)&&e instanceof Event)||!(!e||!e.srcElement))}function E(e,t){return t in e&&e[t]!==p}function A(e,t){if(e===t)return!0;if(e&&t&&"object"===typeof e&&"object"===typeof t){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;0!==r--;)if(!A(e[r],t[r]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;for(r of e.entries())if(!A(r[1],t.get(r[0])))return!1;return!0}if(e instanceof File&&t instanceof File)return e.size===t.size&&(e.name===t.name&&(e.lastModified===t.lastModified&&e.type===t.type));if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;0!==r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!==r--;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!==r--;){var i=o[r];if(!A(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}var I=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!==o--;){var a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n};function O(e){return w(e)?e.replace(/\[|\]/gi,""):e}function F(e,t,n){if(!e)return n;if(w(t))return e[O(t)];const r=(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce(((e,t)=>y(e)&&t in e?e[t]:n),e);return r}function M(e,t,n){if(w(t))return void(e[O(t)]=n);const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let o=e;for(let i=0;i<r.length;i++){if(i===r.length-1)return void(o[r[i]]=n);r[i]in o&&!a(o[r[i]])||(o[r[i]]=l(r[i+1])?[]:{}),o=o[r[i]]}}function D(e,t){Array.isArray(e)&&l(t)?e.splice(Number(t),1):s(e)&&delete e[t]}function P(e,t){if(w(t))return void delete e[O(t)];const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let i=0;i<n.length;i++){if(i===n.length-1){D(r,n[i]);break}if(!(n[i]in r)||a(r[n[i]]))break;r=r[n[i]]}const o=n.map(((t,r)=>F(e,n.slice(0,r).join("."))));for(let i=o.length-1;i>=0;i--)b(o[i])&&(0!==i?D(o[i-1],n[i-1]):D(e,n[0]))}function q(e){return Object.keys(e)}function R(e,t){const n=(0,r.FN)();return(null===n||void 0===n?void 0:n.provides[e])||(0,r.f3)(e,t)}function N(e){(0,r.ZK)(`[vee-validate]: ${e}`)}function L(e,t,n){if(Array.isArray(e)){const n=[...e],r=n.findIndex((e=>I(e,t)));return r>=0?n.splice(r,1):n.push(t),n}return I(e,t)?n:t}function V(e,t){let n,r;return function(...o){const i=this;return n||(n=!0,setTimeout((()=>n=!1),t),r=e.apply(i,o)),r}}function $(e,t=0){let n=null,r=[];return function(...o){return n&&window.clearTimeout(n),n=window.setTimeout((()=>{const t=e(...o);r.forEach((e=>e(t))),r=[]}),t),new Promise((e=>r.push(e)))}}function B(e,t){return s(t)&&t.number?u(e):e}function j(e,t){let n;return async function(...r){const o=e(...r);n=o;const i=await o;return o!==n||(n=void 0,t(i,r)),i}}const z=(e,t,n)=>t.slots.default?"string"!==typeof e&&e?{default:()=>{var e,r;return null===(r=(e=t.slots).default)||void 0===r?void 0:r.call(e,n())}}:t.slots.default(n()):t.slots.default;function H(e){if(U(e))return e._value}function U(e){return"_value"in e}function Y(e){if(!T(e))return e;const t=e.target;if(g(t.type)&&U(t))return H(t);if("file"===t.type&&t.files){const e=Array.from(t.files);return t.multiple?e:e[0]}if(_(t))return Array.from(t.options).filter((e=>e.selected&&!e.disabled)).map(H);if(k(t)){const e=Array.from(t.options).find((e=>e.selected));return e?H(e):t.value}return t.value}function W(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?s(e)&&e._$$isNormalized?e:s(e)?Object.keys(e).reduce(((t,n)=>{const r=Q(e[n]);return!1!==e[n]&&(t[n]=K(r)),t}),t):"string"!==typeof e?t:e.split("|").reduce(((e,t)=>{const n=G(t);return n.name?(e[n.name]=K(n.params),e):e}),t):t}function Q(e){return!0===e?[]:Array.isArray(e)||s(e)?e:[e]}function K(e){const t=e=>"string"===typeof e&&"@"===e[0]?J(e.slice(1)):e;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce(((n,r)=>(n[r]=t(e[r]),n)),{})}const G=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function J(e){const t=t=>{const n=F(t,e)||t[e];return n};return t.__locatorRef=e,t}function X(e){return Array.isArray(e)?e.filter(v):q(e).filter((t=>v(e[t]))).map((t=>e[t]))}const Z={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let ee=Object.assign({},Z);const te=()=>ee,ne=e=>{ee=Object.assign(Object.assign({},ee),e)},re=ne;async function oe(e,t,n={}){const r=null===n||void 0===n?void 0:n.bails,o={name:(null===n||void 0===n?void 0:n.name)||"{field}",rules:t,bails:null===r||void 0===r||r,formData:(null===n||void 0===n?void 0:n.values)||{}},i=await ie(o,e),a=i.errors;return{errors:a,valid:!a.length}}async function ie(e,t){if(m(e.rules))return ae(t,e.rules,{bails:e.bails});if(i(e.rules)||Array.isArray(e.rules)){const n={field:e.name,form:e.formData,value:t},r=Array.isArray(e.rules)?e.rules:[e.rules],o=r.length,i=[];for(let a=0;a<o;a++){const o=r[a],s=await o(t,n),l="string"!==typeof s&&s;if(l)continue;const u="string"===typeof s?s:le(n);if(i.push(u),e.bails)return{errors:i}}return{errors:i}}const n=Object.assign(Object.assign({},e),{rules:W(e.rules)}),r=[],o=Object.keys(n.rules),a=o.length;for(let i=0;i<a;i++){const a=o[i],s=await se(n,t,{name:a,params:n.rules[a]});if(s.error&&(r.push(s.error),e.bails))return{errors:r}}return{errors:r}}async function ae(e,t,n){var r;const o=await t.validate(e,{abortEarly:null===(r=n.bails)||void 0===r||r}).then((()=>[])).catch((e=>{if("ValidationError"===e.name)return e.errors;throw e}));return{errors:o}}async function se(e,t,n){const r=d(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const o=ue(n.params,e.formData),i={field:e.name,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:o})},a=await r(t,o,i);return"string"===typeof a?{error:a}:{error:a?void 0:le(i)}}function le(e){const t=te().generateMessage;return t?t(e):"Field is invalid"}function ue(e,t){const n=e=>v(e)?e(t):e;return Array.isArray(e)?e.map(n):Object.keys(e).reduce(((t,r)=>(t[r]=n(e[r]),t)),{})}async function ce(e,t){const n=await e.validate(t,{abortEarly:!1}).then((()=>[])).catch((e=>{if("ValidationError"!==e.name)throw e;return e.inner||[]})),r={},o={};for(const i of n){const e=i.errors;r[i.path]={valid:!e.length,errors:e},e.length&&(o[i.path]=e[0])}return{valid:!n.length,results:r,errors:o}}async function de(e,t,n){const r=q(e),o=r.map((async r=>{var o,i,a;const s=await oe(F(t,r),e[r],{name:(null===(o=null===n||void 0===n?void 0:n.names)||void 0===o?void 0:o[r])||r,values:t,bails:null===(a=null===(i=null===n||void 0===n?void 0:n.bailsMap)||void 0===i?void 0:i[r])||void 0===a||a});return Object.assign(Object.assign({},s),{path:r})}));let i=!0;const a=await Promise.all(o),s={},l={};for(const u of a)s[u.path]={valid:u.valid,errors:u.errors},u.valid||(i=!1,l[u.path]=u.errors[0]);return{valid:i,results:s,errors:l}}function he(e,t,n){"object"===typeof n.value&&(n.value=fe(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function fe(e){if("object"!==typeof e)return e;var t,n,r,o=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?r=Object.create(e.__proto__||null):"[object Array]"===i?r=Array(e.length):"[object Set]"===i?(r=new Set,e.forEach((function(e){r.add(fe(e))}))):"[object Map]"===i?(r=new Map,e.forEach((function(e,t){r.set(fe(t),fe(e))}))):"[object Date]"===i?r=new Date(+e):"[object RegExp]"===i?r=new RegExp(e.source,e.flags):"[object DataView]"===i?r=new e.constructor(fe(e.buffer)):"[object ArrayBuffer]"===i?r=e.slice(0):"Array]"===i.slice(-6)&&(r=new e.constructor(e)),r){for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)he(r,n[o],Object.getOwnPropertyDescriptor(e,n[o]));for(o=0,n=Object.getOwnPropertyNames(e);o<n.length;o++)Object.hasOwnProperty.call(r,t=n[o])&&r[t]===e[t]||he(r,t,Object.getOwnPropertyDescriptor(e,t))}return r||e}let pe=0;function ve(e,t){const{value:n,initialValue:r,setInitialValue:o}=me(e,t.modelValue,!t.standalone),{errorMessage:i,errors:a,setErrors:s}=ye(e,!t.standalone),l=ge(n,r,a),u=pe>=Number.MAX_SAFE_INTEGER?0:++pe;function c(e){var t;"value"in e&&(n.value=e.value),"errors"in e&&s(e.errors),"touched"in e&&(l.touched=null!==(t=e.touched)&&void 0!==t?t:l.touched),"initialValue"in e&&o(e.initialValue)}return{id:u,path:e,value:n,initialValue:r,meta:l,errors:a,errorMessage:i,setState:c}}function me(e,t,n=!0){const i=!0===n?R(h,void 0):void 0,a=(0,o.iH)((0,o.SU)(t));function s(){return i?F(i.meta.value.initialValues,(0,o.SU)(e),(0,o.SU)(a)):(0,o.SU)(a)}function l(t){i?i.stageInitialValue((0,o.SU)(e),t,!0):a.value=t}const u=(0,r.Fl)(s);if(!i){const e=(0,o.iH)(s());return{value:e,initialValue:u,setInitialValue:l}}const c=t?(0,o.SU)(t):F(i.values,(0,o.SU)(e),(0,o.SU)(u));i.stageInitialValue((0,o.SU)(e),c,!0);const d=(0,r.Fl)({get(){return F(i.values,(0,o.SU)(e))},set(t){i.setFieldValue((0,o.SU)(e),t)}});return{value:d,initialValue:u,setInitialValue:l}}function ge(e,t,n){const i=(0,o.qj)({touched:!1,pending:!1,valid:!0,validated:!!(0,o.SU)(n).length,initialValue:(0,r.Fl)((()=>(0,o.SU)(t))),dirty:(0,r.Fl)((()=>!A((0,o.SU)(e),(0,o.SU)(t))))});return(0,r.YP)(n,(e=>{i.valid=!e.length}),{immediate:!0,flush:"sync"}),i}function ye(e,t){const n=t?R(h,void 0):void 0;function i(e){return e?Array.isArray(e)?e:[e]:[]}if(!n){const e=(0,o.iH)([]);return{errors:e,errorMessage:(0,r.Fl)((()=>e.value[0])),setErrors:t=>{e.value=i(t)}}}const a=(0,r.Fl)((()=>n.errorBag.value[(0,o.SU)(e)]||[]));return{errors:a,errorMessage:(0,r.Fl)((()=>a.value[0])),setErrors:t=>{n.setFieldErrorBag((0,o.SU)(e),i(t))}}}let be;V((()=>{setTimeout((async()=>{await(0,r.Y3)(),null===be||void 0===be||be.sendInspectorState(we),null===be||void 0===be||be.sendInspectorTree(we)}),100)}),100);const we="vee-validate-inspector";function _e(e,t,n){return g(null===n||void 0===n?void 0:n.type)?Ce(e,t,n):ke(e,t,n)}function ke(e,t,n){const{initialValue:a,validateOnMount:s,bails:l,type:u,checkedValue:c,label:d,validateOnValueUpdate:p,uncheckedValue:v,standalone:g,keepValueOnUnmount:y,modelPropName:b,syncVModel:w}=Se((0,o.SU)(e),n),_=g?void 0:R(h);let k=!1;const{id:S,value:x,initialValue:C,meta:T,setState:E,errors:I,errorMessage:O}=ve(e,{modelValue:a,standalone:g});w&&Te({value:x,prop:b,handleChange:V});const M=()=>{T.touched=!0},D=(0,r.Fl)((()=>{let n=(0,o.SU)(t);const r=(0,o.SU)(null===_||void 0===_?void 0:_.schema);return r&&!m(r)&&(n=xe(r,(0,o.SU)(e))||n),m(n)||i(n)||Array.isArray(n)?n:W(n)}));async function P(t){var n,r;return(null===_||void 0===_?void 0:_.validateSchema)?null!==(n=(await _.validateSchema(t)).results[(0,o.SU)(e)])&&void 0!==n?n:{valid:!0,errors:[]}:oe(x.value,D.value,{name:(0,o.SU)(d)||(0,o.SU)(e),values:null!==(r=null===_||void 0===_?void 0:_.values)&&void 0!==r?r:{},bails:l})}const q=j((async()=>(T.pending=!0,T.validated=!0,P("validated-only"))),(e=>(k&&(e.valid=!0,e.errors=[]),E({errors:e.errors}),T.pending=!1,e))),N=j((async()=>P("silent")),(e=>(k&&(e.valid=!0),T.valid=e.valid,e)));function L(e){return"silent"===(null===e||void 0===e?void 0:e.mode)?N():q()}function V(e,t=!0){const n=Y(e);x.value=n,!p&&t&&q()}function $(e){T.touched=e}let B;(0,r.bv)((()=>{if(s)return q();_&&_.validateSchema||N()}));let z=fe(x.value);function H(){B=(0,r.YP)(x,((e,t)=>{if(A(e,t)&&A(e,z))return;const n=p?q:N;n(),z=fe(e)}),{deep:!0})}function U(e){var t;null===B||void 0===B||B();const n=e&&"value"in e?e.value:C.value;E({value:fe(n),initialValue:fe(n),touched:null!==(t=null===e||void 0===e?void 0:e.touched)&&void 0!==t&&t,errors:(null===e||void 0===e?void 0:e.errors)||[]}),T.pending=!1,T.validated=!1,N(),(0,r.Y3)((()=>{H()}))}function Q(e){x.value=e}function K(e){E({errors:Array.isArray(e)?e:[e]})}H();const G={id:S,name:e,label:d,value:x,meta:T,errors:I,errorMessage:O,type:u,checkedValue:c,uncheckedValue:v,bails:l,keepValueOnUnmount:y,resetField:U,handleReset:()=>U(),validate:L,handleChange:V,handleBlur:M,setState:E,setTouched:$,setErrors:K,setValue:Q};if((0,r.JJ)(f,G),(0,o.dq)(t)&&"function"!==typeof(0,o.SU)(t)&&(0,r.YP)(t,((e,t)=>{A(e,t)||(T.validated?q():N())}),{deep:!0}),!_)return G;_.register(G),(0,r.Jd)((()=>{k=!0,_.unregister(G)}));const J=(0,r.Fl)((()=>{const e=D.value;return!e||i(e)||m(e)||Array.isArray(e)?{}:Object.keys(e).reduce(((t,n)=>{const r=X(e[n]).map((e=>e.__locatorRef)).reduce(((e,t)=>{const n=F(_.values,t)||_.values[t];return void 0!==n&&(e[t]=n),e}),{});return Object.assign(t,r),t}),{})}));return(0,r.YP)(J,((e,t)=>{if(!Object.keys(e).length)return;const n=!A(e,t);n&&(T.validated?q():N())})),G}function Se(e,t){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0,standalone:!1,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0});if(!t)return n();const r="valueProp"in t?t.valueProp:t.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{checkedValue:r})}function xe(e,t){if(e)return e[t]}function Ce(e,t,n){const i=(null===n||void 0===n?void 0:n.standalone)?void 0:R(h),a=null===n||void 0===n?void 0:n.checkedValue,s=null===n||void 0===n?void 0:n.uncheckedValue;function l(e){const t=e.handleChange,n=(0,r.Fl)((()=>{const t=(0,o.SU)(e.value),n=(0,o.SU)(a);return Array.isArray(t)?t.findIndex((e=>A(e,n)))>=0:A(n,t)}));function l(r,l=!0){var u;if(n.value===(null===(u=null===r||void 0===r?void 0:r.target)||void 0===u?void 0:u.checked))return void(l&&e.validate());let c=Y(r);i||(c=L((0,o.SU)(e.value),(0,o.SU)(a),(0,o.SU)(s))),t(c,l)}return Object.assign(Object.assign({},e),{checked:n,checkedValue:a,uncheckedValue:s,handleChange:l})}return l(ke(e,t,n))}function Te({prop:e,value:t,handleChange:n}){const o=(0,r.FN)();if(!o)return void 0;const i=e||"modelValue",a=`update:${i}`;i in o.props&&((0,r.YP)(t,(e=>{A(e,Ee(o,i))||o.emit(a,e)})),(0,r.YP)((()=>Ee(o,i)),(e=>{if(e===p&&void 0===t.value)return;const r=e===p?void 0:e;A(r,B(t.value,o.props.modelModifiers))||n(r)})))}function Ee(e,t){return e.props[t]}const Ae=(0,r.aZ)({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>te().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:p},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,t){const n=(0,o.Vh)(e,"rules"),i=(0,o.Vh)(e,"name"),a=(0,o.Vh)(e,"label"),s=(0,o.Vh)(e,"uncheckedValue"),l=(0,o.Vh)(e,"keepValue"),{errors:u,value:c,errorMessage:d,validate:h,handleChange:f,handleBlur:p,setTouched:v,resetField:m,handleReset:y,meta:b,checked:w,setErrors:_}=_e(i,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:Fe(e,t),checkedValue:t.attrs.value,uncheckedValue:s,label:a,validateOnValueUpdate:!1,keepValueOnUnmount:l}),k=function(e,n=!0){f(e,n),t.emit("update:modelValue",c.value)},S=e=>{g(t.attrs.type)||(c.value=Y(e))},C=function(e){S(e),t.emit("update:modelValue",c.value)},T=(0,r.Fl)((()=>{const{validateOnInput:n,validateOnChange:r,validateOnBlur:o,validateOnModelUpdate:i}=Oe(e),a=[p,t.attrs.onBlur,o?h:void 0].filter(Boolean),s=[e=>k(e,n),t.attrs.onInput].filter(Boolean),l=[e=>k(e,r),t.attrs.onChange].filter(Boolean),u={name:e.name,onBlur:a,onInput:s,onChange:l,"onUpdate:modelValue":e=>k(e,i)};g(t.attrs.type)&&w&&(u.checked=w.value);const d=Ie(e,t);return x(d,t.attrs)&&(u.value=c.value),u}));function E(){return{field:T.value,value:c.value,meta:b,errors:u.value,errorMessage:d.value,validate:h,resetField:m,handleChange:k,handleInput:C,handleReset:y,handleBlur:p,setTouched:v,setErrors:_}}return t.expose({setErrors:_,setTouched:v,reset:m,validate:h,handleChange:f}),()=>{const n=(0,r.LL)(Ie(e,t)),o=z(n,t,E);return n?(0,r.h)(n,Object.assign(Object.assign({},t.attrs),T.value),o):o}}});function Ie(e,t){let n=e.as||"";return e.as||t.slots.default||(n="input"),n}function Oe(e){var t,n,r,o;const{validateOnInput:i,validateOnChange:a,validateOnBlur:s,validateOnModelUpdate:l}=te();return{validateOnInput:null!==(t=e.validateOnInput)&&void 0!==t?t:i,validateOnChange:null!==(n=e.validateOnChange)&&void 0!==n?n:a,validateOnBlur:null!==(r=e.validateOnBlur)&&void 0!==r?r:s,validateOnModelUpdate:null!==(o=e.validateOnModelUpdate)&&void 0!==o?o:l}}function Fe(e,t){return g(t.attrs.type)?E(e,"modelValue")?e.modelValue:void 0:E(e,"modelValue")?e.modelValue:t.attrs.value}const Me=Ae;let De=0;function Pe(e){var t;const n=De++;let i=!1;const a=(0,o.iH)({}),s=(0,o.iH)(!1),l=(0,o.iH)(0),u=[],c=(0,o.qj)(fe((0,o.SU)(null===e||void 0===e?void 0:e.initialValues)||{})),{errorBag:d,setErrorBag:f,setFieldErrorBag:p}=Ne(null===e||void 0===e?void 0:e.initialErrors),v=(0,r.Fl)((()=>q(d.value).reduce(((e,t)=>{const n=d.value[t];return n&&n.length&&(e[t]=n[0]),e}),{})));function g(e){const t=a.value[e];return Array.isArray(t)?t[0]:t}function y(e){return!!a.value[e]}const w=(0,r.Fl)((()=>q(a.value).reduce(((e,t)=>{const n=g(t);return n&&(e[t]=(0,o.SU)(n.label||n.name)||""),e}),{}))),_=(0,r.Fl)((()=>q(a.value).reduce(((e,t)=>{var n;const r=g(t);return r&&(e[t]=null===(n=r.bails)||void 0===n||n),e}),{}))),k=Object.assign({},(null===e||void 0===e?void 0:e.initialErrors)||{}),S=null!==(t=null===e||void 0===e?void 0:e.keepValuesOnUnmount)&&void 0!==t&&t,{initialValues:x,originalInitialValues:T,setInitialValues:E}=Re(a,c,null===e||void 0===e?void 0:e.initialValues),I=qe(a,c,T,v),O=null===e||void 0===e?void 0:e.validationSchema,D=$(he,5),R=$(he,5),N=j((async e=>"silent"===await e?D():R()),((e,[t])=>{const n=V.fieldsByPath.value||{},r=q(V.errorBag.value),o=[...new Set([...q(e.results),...q(n),...r])];return o.reduce(((r,o)=>{const i=n[o],a=(e.results[o]||{errors:[]}).errors,s={errors:a,valid:!a.length};if(r.results[o]=s,s.valid||(r.errors[o]=s.errors[0]),!i)return U(o,a),r;if(z(i,(e=>e.meta.valid=s.valid)),"silent"===t)return r;const l=Array.isArray(i)?i.some((e=>e.meta.validated)):i.meta.validated;return"validated-only"!==t||l?(z(i,(e=>e.setState({errors:s.errors}))),r):r}),{valid:e.valid,results:{},errors:{}})})),V={formId:n,fieldsByPath:a,values:c,errorBag:d,errors:v,schema:O,submitCount:l,meta:I,isSubmitting:s,fieldArrays:u,keepValuesOnUnmount:S,validateSchema:(0,o.SU)(O)?N:void 0,validate:oe,register:ne,unregister:re,setFieldErrorBag:p,validateField:ie,setFieldValue:W,setValues:Q,setErrors:Y,setFieldError:U,setFieldTouched:J,setTouched:X,resetForm:Z,handleSubmit:ae,stageInitialValue:ue,unsetInitialValue:le,setFieldInitialValue:se,useFieldModel:G};function B(e){return Array.isArray(e)}function z(e,t){return Array.isArray(e)?e.forEach(t):t(e)}function H(e){Object.values(a.value).forEach((t=>{t&&z(t,e)}))}function U(e,t){p(e,t)}function Y(e){f(e)}function W(e,t,{force:n}={force:!1}){var r;const s=a.value[e],l=fe(t);if(!s)return void M(c,e,l);if(B(s)&&"checkbox"===(null===(r=s[0])||void 0===r?void 0:r.type)&&!Array.isArray(t)){const n=fe(L(F(c,e)||[],t,void 0));return void M(c,e,n)}let u=t;B(s)||"checkbox"!==s.type||n||i||(u=fe(L(F(c,e),t,(0,o.SU)(s.uncheckedValue)))),M(c,e,u)}function Q(e){q(c).forEach((e=>{delete c[e]})),q(e).forEach((t=>{W(t,e[t])})),u.forEach((e=>e&&e.reset()))}function K(e){const{value:t}=me(e);return(0,r.YP)(t,(()=>{y((0,o.SU)(e))||oe({mode:"validated-only"})}),{deep:!0}),t}function G(e){return Array.isArray(e)?e.map(K):K(e)}function J(e,t){const n=a.value[e];n&&z(n,(e=>e.setTouched(t)))}function X(e){q(e).forEach((t=>{J(t,!!e[t])}))}function Z(e){i=!0,H((e=>e.resetField())),(null===e||void 0===e?void 0:e.values)?(E(e.values),Q(null===e||void 0===e?void 0:e.values)):(E(T.value),Q(T.value)),(null===e||void 0===e?void 0:e.touched)&&X(e.touched),Y((null===e||void 0===e?void 0:e.errors)||{}),l.value=(null===e||void 0===e?void 0:e.submitCount)||0,(0,r.Y3)((()=>{i=!1}))}function ee(e,t){const n=(0,o.Xl)(e),r=t;if(!a.value[r])return void(a.value[r]=n);const i=a.value[r];i&&!Array.isArray(i)&&(a.value[r]=[i]),a.value[r]=[...a.value[r],n]}function te(e,t){const n=t,r=a.value[n];if(r)if(B(r)||e.id!==r.id){if(B(r)){const t=r.findIndex((t=>t.id===e.id));if(-1===t)return;r.splice(t,1),r.length||delete a.value[n]}}else delete a.value[n]}function ne(e){const t=(0,o.SU)(e.name);ee(e,t),(0,o.dq)(e.name)&&(0,r.YP)(e.name,(async(t,n)=>{await(0,r.Y3)(),te(e,n),ee(e,t),(v.value[n]||v.value[t])&&(U(n,void 0),ie(t)),await(0,r.Y3)(),y(n)||P(c,n)}));const n=(0,o.SU)(e.errorMessage);n&&(null===k||void 0===k?void 0:k[t])!==n&&ie(t),delete k[t]}function re(e){const t=(0,o.SU)(e.name),n=a.value[t],i=!!n&&B(n);te(e,t),(0,r.Y3)((()=>{var r;const s=null!==(r=(0,o.SU)(e.keepValueOnUnmount))&&void 0!==r?r:(0,o.SU)(S),l=F(c,t),u=i&&(n===a.value[t]||!a.value[t]);if(u&&Array.isArray(l)&&!s){const n=l.findIndex((t=>A(t,(0,o.SU)(e.checkedValue))));if(n>-1){const e=[...l];e.splice(n,1),W(t,e,{force:!0})}}if(!y(t)){if(U(t,void 0),s)return;if(i&&!b(F(c,t)))return;P(c,t)}}))}async function oe(e){if(H((e=>e.meta.validated=!0)),V.validateSchema)return V.validateSchema((null===e||void 0===e?void 0:e.mode)||"force");const t=await Promise.all(Object.values(a.value).map((t=>{const n=Array.isArray(t)?t[0]:t;return n?n.validate(e).then((e=>({key:(0,o.SU)(n.name),valid:e.valid,errors:e.errors}))):Promise.resolve({key:"",valid:!0,errors:[]})}))),n={},r={};for(const o of t)n[o.key]={valid:o.valid,errors:o.errors},o.errors.length&&(r[o.key]=o.errors[0]);return{valid:t.every((e=>e.valid)),results:n,errors:r}}async function ie(e){const t=a.value[e];return t?Array.isArray(t)?t.map((e=>e.validate()))[0]:t.validate():((0,r.ZK)(`field with name ${e} was not found`),Promise.resolve({errors:[],valid:!0}))}function ae(e,t){return function(n){return n instanceof Event&&(n.preventDefault(),n.stopPropagation()),X(q(a.value).reduce(((e,t)=>(e[t]=!0,e)),{})),s.value=!0,l.value++,oe().then((r=>{if(r.valid&&"function"===typeof e)return e(fe(c),{evt:n,setErrors:Y,setFieldError:U,setTouched:X,setFieldTouched:J,setValues:Q,setFieldValue:W,resetForm:Z});r.valid||"function"!==typeof t||t({values:fe(c),evt:n,errors:r.errors,results:r.results})})).then((e=>(s.value=!1,e)),(e=>{throw s.value=!1,e}))}}function se(e,t){M(x.value,e,fe(t))}function le(e){P(x.value,e)}function ue(t,n,r=!1){M(c,t,n),se(t,n),r&&!(null===e||void 0===e?void 0:e.initialValues)&&M(T.value,t,fe(n))}async function he(){const e=(0,o.SU)(O);if(!e)return{valid:!0,results:{},errors:{}};const t=m(e)?await ce(e,c):await de(e,c,{names:w.value,bailsMap:_.value});return t}const pe=ae(((e,{evt:t})=>{C(t)&&t.target.submit()}));return(0,r.bv)((()=>{(null===e||void 0===e?void 0:e.initialErrors)&&Y(e.initialErrors),(null===e||void 0===e?void 0:e.initialTouched)&&X(e.initialTouched),(null===e||void 0===e?void 0:e.validateOnMount)?oe():V.validateSchema&&V.validateSchema("silent")})),(0,o.dq)(O)&&(0,r.YP)(O,(()=>{var e;null===(e=V.validateSchema)||void 0===e||e.call(V,"validated-only")})),(0,r.JJ)(h,V),{errors:v,meta:I,values:c,isSubmitting:s,submitCount:l,validate:oe,validateField:ie,handleReset:()=>Z(),resetForm:Z,handleSubmit:ae,submitForm:pe,setFieldError:U,setErrors:Y,setFieldValue:W,setValues:Q,setFieldTouched:J,setTouched:X,useFieldModel:G}}function qe(e,t,n,i){const a={touched:"some",pending:"some",valid:"every"},s=(0,r.Fl)((()=>!A(t,(0,o.SU)(n))));function l(){const t=Object.values(e.value).flat(1).filter(Boolean);return q(a).reduce(((e,n)=>{const r=a[n];return e[n]=t[r]((e=>e.meta[n])),e}),{})}const u=(0,o.qj)(l());return(0,r.m0)((()=>{const e=l();u.touched=e.touched,u.valid=e.valid,u.pending=e.pending})),(0,r.Fl)((()=>Object.assign(Object.assign({initialValues:(0,o.SU)(n)},u),{valid:u.valid&&!q(i.value).length,dirty:s.value})))}function Re(e,t,n){const i=(0,o.iH)(fe((0,o.SU)(n))||{}),a=(0,o.iH)(fe((0,o.SU)(n))||{});function s(n,r=!1){i.value=fe(n),a.value=fe(n),r&&q(e.value).forEach((n=>{const r=e.value[n],o=Array.isArray(r)?r.some((e=>e.meta.touched)):null===r||void 0===r?void 0:r.meta.touched;if(!r||o)return;const a=F(i.value,n);M(t,n,fe(a))}))}return(0,o.dq)(n)&&(0,r.YP)(n,(e=>{s(e,!0)}),{deep:!0}),{initialValues:i,originalInitialValues:a,setInitialValues:s}}function Ne(e){const t=(0,o.iH)({});function n(e){return Array.isArray(e)?e:e?[e]:[]}function r(e,r){r?t.value[e]=n(r):delete t.value[e]}function i(e){t.value=q(e).reduce(((t,r)=>{const o=e[r];return o&&(t[r]=n(o)),t}),{})}return e&&i(e),{errorBag:t,setErrorBag:i,setFieldErrorBag:r}}const Le=(0,r.aZ)({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,t){const n=(0,o.Vh)(e,"initialValues"),i=(0,o.Vh)(e,"validationSchema"),a=(0,o.Vh)(e,"keepValues"),{errors:s,values:l,meta:u,isSubmitting:c,submitCount:d,validate:h,validateField:f,handleReset:p,resetForm:v,handleSubmit:m,setErrors:g,setFieldError:y,setFieldValue:b,setValues:w,setFieldTouched:_,setTouched:k}=Pe({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:a}),S=m(((e,{evt:t})=>{C(t)&&t.target.submit()}),e.onInvalidSubmit),x=e.onSubmit?m(e.onSubmit,e.onInvalidSubmit):S;function E(e){T(e)&&e.preventDefault(),p(),"function"===typeof t.attrs.onReset&&t.attrs.onReset()}function A(t,n){const r="function"!==typeof t||n?n:t;return m(r,e.onInvalidSubmit)(t)}function I(){return{meta:u.value,errors:s.value,values:l,isSubmitting:c.value,submitCount:d.value,validate:h,validateField:f,handleSubmit:A,handleReset:p,submitForm:S,setErrors:g,setFieldError:y,setFieldValue:b,setValues:w,setFieldTouched:_,setTouched:k,resetForm:v}}return t.expose({setFieldError:y,setErrors:g,setFieldValue:b,setValues:w,setFieldTouched:_,setTouched:k,resetForm:v,validate:h,validateField:f}),function(){const n="form"===e.as?e.as:(0,r.LL)(e.as),o=z(n,t,I);if(!e.as)return o;const i="form"===e.as?{novalidate:!0}:{};return(0,r.h)(n,Object.assign(Object.assign(Object.assign({},i),t.attrs),{onSubmit:x,onReset:E}),o)}}}),Ve=Le;function $e(e){const t=R(h,void 0),n=(0,o.iH)([]),i=()=>{},s={fields:n,remove:i,push:i,swap:i,insert:i,update:i,replace:i,prepend:i,move:i};if(!t)return N("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),s;if(!(0,o.SU)(e))return N("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),s;const l=t.fieldArrays.find((t=>(0,o.SU)(t.path)===(0,o.SU)(e)));if(l)return l;let u=0;function c(){const r=F(null===t||void 0===t?void 0:t.values,(0,o.SU)(e),[])||[];n.value=r.map(f),d()}function d(){const e=n.value.length;for(let t=0;t<e;t++){const r=n.value[t];r.isFirst=0===t,r.isLast=t===e-1}}function f(i){const a=u++,s={key:a,value:(0,r.Fl)({get(){const r=F(null===t||void 0===t?void 0:t.values,(0,o.SU)(e),[])||[],s=n.value.findIndex((e=>e.key===a));return-1===s?i:r[s]},set(e){const t=n.value.findIndex((e=>e.key===a));-1!==t?b(t,e):N("Attempting to update a non-existent array item")}}),isFirst:!1,isLast:!1};return s}function p(r){const i=(0,o.SU)(e),a=F(null===t||void 0===t?void 0:t.values,i);if(!a||!Array.isArray(a))return;const s=[...a];s.splice(r,1),null===t||void 0===t||t.unsetInitialValue(i+`[${r}]`),null===t||void 0===t||t.setFieldValue(i,s),n.value.splice(r,1),d()}function v(r){const i=(0,o.SU)(e),s=F(null===t||void 0===t?void 0:t.values,i),l=a(s)?[]:s;if(!Array.isArray(l))return;const u=[...l];u.push(r),null===t||void 0===t||t.stageInitialValue(i+`[${u.length-1}]`,r),null===t||void 0===t||t.setFieldValue(i,u),n.value.push(f(r)),d()}function m(r,i){const a=(0,o.SU)(e),s=F(null===t||void 0===t?void 0:t.values,a);if(!Array.isArray(s)||!(r in s)||!(i in s))return;const l=[...s],u=[...n.value],c=l[r];l[r]=l[i],l[i]=c;const h=u[r];u[r]=u[i],u[i]=h,null===t||void 0===t||t.setFieldValue(a,l),n.value=u,d()}function g(r,i){const a=(0,o.SU)(e),s=F(null===t||void 0===t?void 0:t.values,a);if(!Array.isArray(s)||s.length<r)return;const l=[...s],u=[...n.value];l.splice(r,0,i),u.splice(r,0,f(i)),null===t||void 0===t||t.setFieldValue(a,l),n.value=u,d()}function y(n){const r=(0,o.SU)(e);null===t||void 0===t||t.setFieldValue(r,n),c()}function b(n,r){const i=(0,o.SU)(e),a=F(null===t||void 0===t?void 0:t.values,i);!Array.isArray(a)||a.length-1<n||null===t||void 0===t||t.setFieldValue(`${i}[${n}]`,r)}function w(r){const i=(0,o.SU)(e),s=F(null===t||void 0===t?void 0:t.values,i),l=a(s)?[]:s;if(!Array.isArray(l))return;const u=[r,...l];null===t||void 0===t||t.stageInitialValue(i+`[${u.length-1}]`,r),null===t||void 0===t||t.setFieldValue(i,u),n.value.unshift(f(r)),d()}function _(r,i){const s=(0,o.SU)(e),l=F(null===t||void 0===t?void 0:t.values,s),u=a(l)?[]:[...l];if(!Array.isArray(l)||!(r in l)||!(i in l))return;const c=[...n.value],h=c[r];c.splice(r,1),c.splice(i,0,h);const f=u[r];u.splice(r,1),u.splice(i,0,f),null===t||void 0===t||t.setFieldValue(s,u),n.value=c,d()}c();const k={fields:n,remove:p,push:v,swap:m,insert:g,update:b,replace:y,prepend:w,move:_};return t.fieldArrays.push(Object.assign({path:e,reset:c},k)),(0,r.Jd)((()=>{const n=t.fieldArrays.findIndex((t=>(0,o.SU)(t.path)===(0,o.SU)(e)));n>=0&&t.fieldArrays.splice(n,1)})),k}(0,r.aZ)({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(e,t){const{push:n,remove:r,swap:i,insert:a,replace:s,update:l,prepend:u,move:c,fields:d}=$e((0,o.Vh)(e,"name"));function h(){return{fields:d.value,push:n,remove:r,swap:i,insert:a,update:l,replace:s,prepend:u,move:c}}return t.expose({push:n,remove:r,swap:i,insert:a,update:l,replace:s,prepend:u,move:c}),()=>{const e=z(void 0,t,h);return e}}});const Be=(0,r.aZ)({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=(0,r.f3)(h,void 0),o=(0,r.Fl)((()=>null===n||void 0===n?void 0:n.errors.value[e.name]));function i(){return{message:o.value}}return()=>{if(!o.value)return;const n=e.as?(0,r.LL)(e.as):e.as,a=z(n,t,i),s=Object.assign({role:"alert"},t.attrs);return n||!Array.isArray(a)&&a||!(null===a||void 0===a?void 0:a.length)?!Array.isArray(a)&&a||(null===a||void 0===a?void 0:a.length)?(0,r.h)(n,s,a):(0,r.h)(n||"span",s,o.value):a}}}),je=Be},6112:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});n(1703);var r=n(3396),o=n(4870);
/*!
 * Vue-Lazyload.js v3.0.0-rc.1
 * (c) 2022 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function i(e,t){return t={exports:{}},e(t,t.exports),t.exports}var a=i((function(e){const t=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols;function o(e){return"function"===typeof e||"[object Object]"===t.call(e)||Array.isArray(e)}e.exports=(e,...t)=>{if(!o(e))throw new TypeError("expected the first argument to be an object");if(0===t.length||"function"!==typeof Symbol||"function"!==typeof r)return e;for(let o of t){let t=r(o);for(let r of t)n.call(o,r)&&(e[r]=o[r])}return e}})),s=Object.freeze({__proto__:null,default:a,__moduleExports:a}),l=s&&a||s,u=i((function(e){const t=Object.prototype.toString,n=e=>"__proto__"!==e&&"constructor"!==e&&"prototype"!==e,r=e.exports=(e,...t)=>{let a=0;for(i(e)&&(e=t[a++]),e||(e={});a<t.length;a++)if(o(t[a])){for(const i of Object.keys(t[a]))n(i)&&(o(e[i])&&o(t[a][i])?r(e[i],t[a][i]):e[i]=t[a][i]);l(e,t[a])}return e};function o(e){return"function"===typeof e||"[object Object]"===t.call(e)}function i(e){return"object"===typeof e?null===e:"function"!==typeof e}}));const c="undefined"!==typeof window&&null!==window,d=h();function h(){return!!(c&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}const f={event:"event",observer:"observer"};function p(e,t){if(!e.length)return;const n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}function v(e,t){if("IMG"!==e.tagName||!e.getAttribute("data-srcset"))return"";let n=e.getAttribute("data-srcset").trim().split(",");const r=[],o=e.parentNode,i=o.offsetWidth*t;let a,s,l;n.forEach((e=>{e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,l=99999):(s=e.substr(0,a),l=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([l,s])})),r.sort(((e,t)=>{if(e[0]<t[0])return 1;if(e[0]>t[0])return-1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0}));let u,c="";for(let d=0;d<r.length;d++){u=r[d],c=u[1];const e=r[d+1];if(e&&e[0]<i){c=u[1];break}if(!e){c=u[1];break}}return c}const m=(e=1)=>c&&window.devicePixelRatio||e;function g(){if(!c)return!1;let e=!0;function t(e,t){const n={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},r=new Image;r.onload=function(){const e=r.width>0&&r.height>0;t(e)},r.onerror=function(){t(!1)},r.src="data:image/webp;base64,"+n[e]}return t("lossy",(t=>{e=t})),t("lossless",(t=>{e=t})),t("alpha",(t=>{e=t})),t("animation",(t=>{e=t})),e}function y(e,t){let n=null,r=0;return function(){if(n)return;const o=Date.now()-r,i=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(i,a)};o>=t?s():n=setTimeout(s,t)}}function b(){if(!c)return!1;let e=!1;try{const t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",T,t)}catch(t){}return e}const w=b(),_={on(e,t,n,r=!1){w?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off(e,t,n,r=!1){e.removeEventListener(t,n,r)}},k=(e,t,n)=>{let r=new Image;if(!e||!e.src){const e=new Error("image src is required");return n(e)}e.cors&&(r.crossOrigin=e.cors),r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r=null},r.onerror=function(e){n(e)}},S=(e,t)=>"undefined"!==typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t],x=e=>S(e,"overflow")+S(e,"overflowY")+S(e,"overflowX"),C=e=>{if(!c)return;if(!(e instanceof Element))return window;let t=e;while(t){if(t===document.body||t===document.documentElement)break;if(!t.parentNode)break;if(/(scroll|auto)/.test(x(t)))return t;t=t.parentNode}return window};function T(){}class E{constructor(e){this.max=e||100,this._caches=[]}has(e){return this._caches.indexOf(e)>-1}add(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class A{constructor(e,t,n,r,o,i,a,s,l,u){this.el=e,this.src=t,this.error=n,this.loading=r,this.bindType=o,this.attempt=0,this.cors=s,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.rect={},this.$parent=i,this.elRenderer=l,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(e){this.performanceData[e]=Date.now()}update(e){const t=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),t!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const e in this.options.filter)this.options.filter[e](this,this.options)}renderLoading(e){this.state.loading=!0,k({src:this.loading,cors:this.cors},(()=>{this.render("loading",!1),this.state.loading=!1,e()}),(()=>{e(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)}))}load(e=T){return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),void e()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e()):void this.renderLoading((()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),k({src:this.src,cors:this.cors},(t=>{this.naturalHeight=t.naturalHeight,this.naturalWidth=t.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),e()}),(e=>{!this.options.silent&&console.error(e),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)}))}))}render(e,t){this.elRenderer(this,e,t)}performance(){let e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const I="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",O=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],F={rootMargin:"0px",threshold:0};class M{constructor({preLoad:e,error:t,throttleWait:n,preLoadTop:r,dispatchEvent:o,loading:i,attempt:a,silent:s=!0,scale:l,listenEvents:u,filter:c,adapter:d,observer:h,observerOptions:p}){this.version='"3.0.0-rc.1"',this.lazyContainerMananger=null,this.mode=f.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:s,dispatchEvent:!!o,throttleWait:n||200,preLoad:e||1.3,preLoadTop:r||0,error:t||I,loading:i||I,attempt:a||3,scale:l||m(l),listenEvents:u||O,supportWebp:g(),filter:c||{},adapter:d||{},observer:!!h,observerOptions:p||F},this._initEvent(),this._imageCache=new E(200),this.lazyLoadHandler=y(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?f.observer:f.event)}performance(){const e=[];return this.ListenerQueue.map((t=>e.push(t.performance()))),e}addLazyBox(e){this.ListenerQueue.push(e),c&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}add(e,t,n){if(this.ListenerQueue.some((t=>t.el===e)))return this.update(e,t),(0,r.Y3)(this.lazyLoadHandler);let{src:o,loading:i,error:a,cors:s}=this._valueFormatter(t.value);(0,r.Y3)((()=>{o=v(e,this.options.scale)||o,this._observer&&this._observer.observe(e);const n=Object.keys(t.modifiers)[0];let l;n&&(l=t.instance.$refs[n],l=l?l.el||l:document.getElementById(n)),l||(l=C(e));const u=new A(e,o,a,i,t.arg,l,this.options,s,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),c&&(this._addListenerTarget(window),this._addListenerTarget(l)),(0,r.Y3)(this.lazyLoadHandler)}))}update(e,t,n){let{src:o,loading:i,error:a}=this._valueFormatter(t.value);o=v(e,this.options.scale)||o;const s=this.ListenerQueue.find((t=>t.el===e));s?s.update({src:o,loading:i,error:a}):"loaded"===e.getAttribute("lazy")&&e.dataset.src===o||this.add(e,t,n),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),(0,r.Y3)(this.lazyLoadHandler)}remove(e){if(!e)return;this._observer&&this._observer.unobserve(e);const t=this.ListenerQueue.find((t=>t.el===e));t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),p(this.ListenerQueue,t),t.$destroy&&t.$destroy())}removeComponent(e){e&&(p(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}setMode(e){d||e!==f.observer||(e=f.event),this.mode=e,e===f.event?(this._observer&&(this.ListenerQueue.forEach((e=>{this._observer.unobserve(e.el)})),this._observer=null),this.TargetQueue.forEach((e=>{this._initListen(e.el,!0)}))):(this.TargetQueue.forEach((e=>{this._initListen(e.el,!1)})),this._initIntersectionObserver())}_addListenerTarget(e){if(!e)return;let t=this.TargetQueue.find((t=>t.el===e));return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===f.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}_removeListenerTarget(e){this.TargetQueue.forEach(((t,n)=>{t.el===e&&(t.childrenCount--,t.childrenCount||(this._initListen(t.el,!1),this.TargetQueue.splice(n,1),t=null))}))}_initListen(e,t){this.options.listenEvents.forEach((n=>_[t?"on":"off"](e,n,this.lazyLoadHandler)))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,t)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(t)},this.$once=(e,t)=>{const n=this;function r(){n.$off(e,r),t.apply(n,arguments)}this.$on(e,r)},this.$off=(e,t)=>{if(t)p(this.Event.listeners[e],t);else{if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0}},this.$emit=(e,t,n)=>{this.Event.listeners[e]&&this.Event.listeners[e].forEach((e=>e(t,n)))}}_lazyLoadHandler(){const e=[];this.ListenerQueue.forEach(((t,n)=>{t.el&&t.el.parentNode&&!t.state.loaded||e.push(t);const r=t.checkInView();r&&(t.state.loaded||t.load())})),e.forEach((e=>{p(this.ListenerQueue,e),e.$destroy&&e.$destroy()}))}_initIntersectionObserver(){d&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((e=>{this._observer.observe(e.el)})))}_observerHandler(e){e.forEach((e=>{e.isIntersecting&&this.ListenerQueue.forEach((t=>{if(t.el===e.target){if(t.state.loaded)return this._observer.unobserve(t.el);t.load()}}))}))}_elRenderer(e,t,n){if(!e.el)return;const{el:r,bindType:o}=e;let i;switch(t){case"loading":i=e.loading;break;case"error":i=e.error;break;default:i=e.src;break}if(o?r.style[o]='url("'+i+'")':r.getAttribute("src")!==i&&r.setAttribute("src",i),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){const n=new CustomEvent(t,{detail:e});r.dispatchEvent(n)}}_valueFormatter(e){return"object"===typeof e?(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),{src:e.src,loading:e.loading||this.options.loading,error:e.error||this.options.error,cors:this.options.cors}):{src:e,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const D=(e,t)=>{let n=(0,o.qj)({});const r=()=>{n=e.value.getBoundingClientRect()},i=()=>(r(),c&&n.top<window.innerHeight*t&&n.bottom>0&&n.left<window.innerWidth*t&&n.right>0);return{rect:n,checkInView:i}};var P=e=>(0,r.aZ)({props:{tag:{type:String,default:"div"}},emits:["show"],setup(t,{emit:n,slots:i}){const a=(0,o.iH)(),s=(0,o.qj)({loaded:!1,error:!1,attempt:0}),l=(0,o.iH)(!1),{rect:u,checkInView:c}=D(a,e.options.preLoad),d=()=>{l.value=!0,s.loaded=!0,n("show",l.value)},h=(0,r.Fl)((()=>({el:a.value,rect:u,checkInView:c,load:d,state:s})));return(0,r.bv)((()=>{e.addLazyBox(h.value),e.lazyLoadHandler()})),(0,r.Ah)((()=>{e.removeComponent(h.value)})),()=>{var e;return(0,r.Wm)(t.tag,{ref:a},[l.value&&(null===(e=i.default)||void 0===e?void 0:e.call(i))])}}});class q{constructor(e){this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}bind(e,t,n){const r=new N(e,t,n,this.lazy);this._queue.push(r)}update(e,t,n){const r=this._queue.find((t=>t.el===e));r&&r.update(e,t)}unbind(e,t,n){const r=this._queue.find((t=>t.el===e));r&&(r.clear(),p(this._queue,r))}}const R={selector:"img",error:"",loading:""};class N{constructor(e,t,n,r){this.el=e,this.vnode=n,this.binding=t,this.options={},this.lazy=r,this._queue=[],this.update(e,t)}update(e,t){this.el=e,this.options=u({},R,t.value);const n=this.getImgs();n.forEach((e=>{this.lazy.add(e,u({},this.binding,{value:{src:e.getAttribute("data-src")||e.dataset.src,error:e.getAttribute("data-error")||e.dataset.error||this.options.error,loading:e.getAttribute("data-loading")||e.dataset.loading||this.options.loading}}),this.vnode)}))}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){const e=this.getImgs();e.forEach((e=>this.lazy.remove(e))),this.vnode=null,this.binding=null,this.lazy=null}}var L=e=>(0,r.aZ)({setup(t,{slots:n}){const i=(0,o.iH)(),a=(0,o.qj)({src:"",error:"",loading:"",attempt:e.options.attempt}),s=(0,o.qj)({loaded:!1,error:!1,attempt:0}),{rect:l,checkInView:u}=D(i,e.options.preLoad),c=(0,o.iH)(""),d=(t=T)=>{if(s.attempt>a.attempt-1&&s.error)return e.options.silent||console.log(`VueLazyload log: ${a.src} tried too more than ${a.attempt} times`),t();const n=a.src;k({src:n},(({src:e})=>{c.value=e,s.loaded=!0}),(()=>{s.attempt++,c.value=a.error,s.error=!0}))},h=(0,r.Fl)((()=>({el:i.value,rect:l,checkInView:u,load:d,state:s})));(0,r.bv)((()=>{e.addLazyBox(h.value),e.lazyLoadHandler()})),(0,r.Ah)((()=>{e.removeComponent(h.value)}));const f=()=>{const{src:n,loading:r,error:o}=e._valueFormatter(t.src);s.loaded=!1,a.src=n,a.error=o,a.loading=r,c.value=a.loading};return(0,r.YP)((()=>t.src),(()=>{f(),e.addLazyBox(h.value),e.lazyLoadHandler()}),{immediate:!0}),()=>{var e;return(0,r.Wm)(t.tag||"img",{src:c.value,ref:i},[null===(e=n.default)||void 0===e?void 0:e.call(n)])}}}),V={install(e,t={}){const n=new M(t),r=new q(n),o=Number(e.version.split(".")[0]);if(o<3)return new Error("Vue version at least 3.0");e.config.globalProperties.$Lazyload=n,e.provide("Lazyload",n),t.lazyComponent&&e.component("lazy-component",P(n)),t.lazyImage&&e.component("lazy-image",L(n)),e.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),e.directive("lazy-container",{beforeMount:r.bind.bind(r),updated:r.update.bind(r),unmounted:r.unbind.bind(r)})}}},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},678:function(e,t,n){"use strict";n.d(t,{PO:function(){return U},p7:function(){return tt}});n(6699),n(1703);var r=n(3396),o=n(4870);
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,a=e=>i?Symbol(e):"_vr_"+e,s=a("rvlm"),l=a("rvd"),u=a("r"),c=a("rl"),d=a("rvl"),h="undefined"!==typeof window;function f(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function v(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const m=()=>{};const g=/\/$/,y=e=>e.replace(g,"");function b(e,t,n="/"){let r,o={},i="",a="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),o=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=E(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:o,hash:a}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function k(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&S(t.matched[r],n.matched[o])&&x(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function S(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function x(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!C(e[n],t[n]))return!1;return!0}function C(e,t){return Array.isArray(e)?T(e,t):Array.isArray(t)?T(t,e):e===t}function T(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function E(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,a=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==a&&"."!==i){if(".."!==i)break;a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var A,I;(function(e){e["pop"]="pop",e["push"]="push"})(A||(A={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(I||(I={}));function O(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const F=/^[^#]+#/;function M(e,t){return e.replace(F,"#")+t}function D(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function q(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=D(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function L(e,t){N.set(e,t)}function V(e){const t=N.get(e);return N.delete(e),t}let $=()=>location.protocol+"//"+location.host;function B(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const a=_(n,e);return a+r+o}function j(e,t,n,r){let o=[],i=[],a=null;const s=({state:i})=>{const s=B(e,location),l=n.value,u=t.value;let c=0;if(i){if(n.value=s,t.value=i,a&&a===l)return void(a=null);c=u?i.position-u.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:c,type:A.pop,direction:c?c>0?I.forward:I.back:I.unknown})}))};function l(){a=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function c(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:d}}function z(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function H(e){const{history:t,location:n}=window,r={value:B(e,n)},o={value:t.state};function i(r,i,a){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:$()+e+r;try{t[a?"replaceState":"pushState"](i,"",l),o.value=i}catch(u){console.error(u),n[a?"replace":"assign"](l)}}function a(e,n){const a=p({},t.state,z(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,a,!0),r.value=e}function s(e,n){const a=p({},o.value,t.state,{forward:e,scroll:P()});i(a.current,a,!0);const s=p({},z(r.value,e,null),{position:a.position+1},n);i(e,s,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:a}}function U(e){e=O(e);const t=H(e),n=j(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=p({location:"",base:e,go:r,createHref:M.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Y(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const Q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=a("nf");var G;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(G||(G={}));function J(e,t){return p(new Error,{type:e,[K]:!0},t)}function X(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let t=0;t<c.length;t++){const r=c[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(te,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:s,regexp:l}=r;i.push({name:e,repeatable:n,optional:s});const d=l||Z;if(d!==Z){a+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(h=s&&c.length<2?`(?:/${h})`:"/"+h),s&&(h+="?"),o+=h,a+=20,s&&(a+=-8),n&&(a+=-20),".*"===d&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function s(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:a,optional:s}=e,l=i in t?t[i]:"";if(Array.isArray(l)&&!a)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!s)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:a,score:r,keys:i,parse:s,stringify:l}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function oe(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=re(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const ie={type:0,value:""},ae=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let s,l=0,u="",c="";function d(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),u="")}function h(){u+=s}while(l<e.length)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(u&&d(),a()):":"===s?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===s?n=2:ae.test(s)?h():(d(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==c[c.length-1]?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:d(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),o}function le(e,t,n){const r=ne(se(e.path),n);const o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ue(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,s=de(e);s.aliasOf=r&&r.record;const u=ve(t,e),c=[s];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)c.push(p({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let d,h;for(const t of c){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(d=le(t,n,u),r?r.alias.push(d):(h=h||d,h!==d&&h.alias.push(d),o&&e.name&&!fe(d)&&a(e.name)),"children"in s){const e=s.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,l(d)}return h?()=>{a(h)}:m}function a(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(){return n}function l(e){let t=0;while(t<n.length&&oe(e,n[t])>=0&&(e.record.path!==n[t].record.path||!me(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,a,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw J(1,{location:e});a=o.record.name,s=p(ce(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=o.stringify(s)}else if("path"in e)i=e.path,o=n.find((e=>e.re.test(i))),o&&(s=o.parse(i),a=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw J(1,{location:e,currentLocation:t});a=o.record.name,s=p({},t.params,e.params),i=o.stringify(s)}const l=[];let u=o;while(u)l.unshift(u.record),u=u.parent;return{name:a,path:i,params:s,matched:l,meta:pe(l)}}return t=ve({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:u,removeRoute:a,getRoutes:s,getRecordMatcher:o}}function ce(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ve(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function me(e,t){return t.children.some((t=>t===e||me(e,t)))}const ge=/#/g,ye=/&/g,be=/\//g,we=/=/g,_e=/\?/g,ke=/\+/g,Se=/%5B/g,xe=/%5D/g,Ce=/%5E/g,Te=/%60/g,Ee=/%7B/g,Ae=/%7C/g,Ie=/%7D/g,Oe=/%20/g;function Fe(e){return encodeURI(""+e).replace(Ae,"|").replace(Se,"[").replace(xe,"]")}function Me(e){return Fe(e).replace(Ee,"{").replace(Ie,"}").replace(Ce,"^")}function De(e){return Fe(e).replace(ke,"%2B").replace(Oe,"+").replace(ge,"%23").replace(ye,"%26").replace(Te,"`").replace(Ee,"{").replace(Ie,"}").replace(Ce,"^")}function Pe(e){return De(e).replace(we,"%3D")}function qe(e){return Fe(e).replace(ge,"%23").replace(_e,"%3F")}function Re(e){return null==e?"":qe(e).replace(be,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ke," "),n=e.indexOf("="),i=Ne(n<0?e:e.slice(0,n)),a=n<0?null:Ne(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(a)}else t[i]=a}return t}function Ve(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map((e=>e&&De(e))):[r&&De(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function $e(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function je(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,s)=>{const l=e=>{!1===e?s(J(4,{from:n,to:t})):e instanceof Error?s(e):Y(e)?s(J(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),a())},u=e.call(r&&r.instances[o],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch((e=>s(e)))}))}function ze(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(He(a)){const s=a.__vccOpts||a,l=s[t];l&&o.push(je(l,n,r,i,e))}else{let s=a();0,o.push((()=>s.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=f(o)?o.default:o;i.components[e]=a;const s=a.__vccOpts||a,l=s[t];return l&&je(l,n,r,i,e)()}))))}}return o}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ue(e){const t=(0,r.f3)(u),n=(0,r.f3)(c),i=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),a=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const a=o.findIndex(S.bind(null,r));if(a>-1)return a;const s=Ge(e[t-2]);return t>1&&Ge(r)===s&&o[o.length-1].path!==s?o.findIndex(S.bind(null,e[t-2])):a})),s=(0,r.Fl)((()=>a.value>-1&&Ke(n.params,i.value.params))),l=(0,r.Fl)((()=>a.value>-1&&a.value===n.matched.length-1&&x(n.params,i.value.params)));function d(n={}){return Qe(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(m):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:s,isExactActive:l,navigate:d}}const Ye=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=(0,o.qj)(Ue(e)),{options:i}=(0,r.f3)(u),a=(0,r.Fl)((()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),We=Ye;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(d),a=(0,r.Fl)((()=>e.route||i.value)),u=(0,r.f3)(l,0),c=(0,r.Fl)((()=>a.value.matched[u]));(0,r.JJ)(l,u+1),(0,r.JJ)(s,c),(0,r.JJ)(d,a);const h=(0,o.iH)();return(0,r.YP)((()=>[h.value,c.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&S(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=a.value,i=c.value,s=i&&i.components[e.name],l=e.name;if(!s)return Ze(n.default,{Component:s,route:o});const u=i.props[e.name],d=u?!0===u?o.params:"function"===typeof u?u(o):u:null,f=e=>{e.component.isUnmounted&&(i.instances[l]=null)},v=(0,r.h)(s,p({},d,t,{onVnodeUnmounted:f,ref:h}));return Ze(n.default,{Component:v,route:o})||v}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||Le,i=e.stringifyQuery||Ve,a=e.history;const s=Be(),l=Be(),f=Be(),g=(0,o.XI)(Q);let y=Q;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=v.bind(null,(e=>""+e)),S=v.bind(null,Re),x=v.bind(null,Ne);function C(e,n){let r,o;return W(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function I(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=p({},r||g.value),"string"===typeof e){const o=b(n,e,r.path),i=t.resolve({path:o.path},r),s=a.createHref(o.fullPath);return p(o,i,{params:x(i.params),hash:Ne(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in e)o=p({},e,{path:b(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];o=p({},e,{params:S(e.params)}),r.params=S(r.params)}const s=t.resolve(o,r),l=e.hash||"";s.params=_(x(s.params));const u=w(i,p({},e,{hash:Me(l),path:s.path})),c=a.createHref(u);return p({fullPath:u,hash:l,query:i===Ve?$e(e.query):e.query||{}},s,{redirectedFrom:void 0,href:c})}function F(e){return"string"===typeof e?b(n,e,g.value.path):p({},e)}function M(e,t){if(y!==e)return J(8,{from:t,to:e})}function D(e){return B(e)}function N(e){return D(p(F(e),{replace:!0}))}function $(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=F(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function B(e,t){const n=y=O(e),r=g.value,o=e.state,a=e.force,s=!0===e.replace,l=$(n);if(l)return B(p(F(l),{state:o,force:a,replace:s}),t||n);const u=n;let c;return u.redirectedFrom=t,!a&&k(i,r,n)&&(c=J(16,{to:u,from:r}),oe(r,r,!0,!1)),(c?Promise.resolve(c):z(u,r)).catch((e=>X(e)?X(e,2)?e:re(e):te(e,u,r))).then((e=>{if(e){if(X(e,2))return B(p(F(e.to),{state:o,force:a,replace:s}),t||u)}else e=U(u,r,!0,s,o);return H(u,r,e),e}))}function j(e,t){const n=M(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e,t){let n;const[r,o,i]=rt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(je(r,e,t))}));const a=j.bind(null,e,t);return n.push(a),nt(n).then((()=>{n=[];for(const r of s.list())n.push(je(r,e,t));return n.push(a),nt(n)})).then((()=>{n=ze(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(je(r,e,t))}));return n.push(a),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(je(o,e,t));else n.push(je(r.beforeEnter,e,t));return n.push(a),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(i,"beforeRouteEnter",e,t),n.push(a),nt(n)))).then((()=>{n=[];for(const r of l.list())n.push(je(r,e,t));return n.push(a),nt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function H(e,t,n){for(const r of f.list())r(e,t,n)}function U(e,t,n,r,o){const i=M(e,t);if(i)return i;const s=t===Q,l=h?history.state:{};n&&(r||s?a.replace(e.fullPath,p({scroll:s&&l&&l.scroll},o)):a.push(e.fullPath,o)),g.value=e,oe(e,t,n,s),re()}let Y;function K(){Y=a.listen(((e,t,n)=>{const r=O(e),o=$(r);if(o)return void B(p(o,{replace:!0}),r).catch(m);y=r;const i=g.value;h&&L(R(i.fullPath,n.delta),P()),z(r,i).catch((e=>X(e,12)?e:X(e,2)?(B(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===A.pop&&a.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&a.go(-n.delta,!1),te(e,r,i)))).then((e=>{e=e||U(r,i,!1),e&&(n.delta?a.go(-n.delta,!1):n.type===A.pop&&X(e,20)&&a.go(-1,!1)),H(r,i,e)})).catch(m)}))}let G,Z=Be(),ee=Be();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return G&&g.value!==Q?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function re(e){return G||(G=!e,K(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function oe(t,n,o,i){const{scrollBehavior:a}=e;if(!h||!a)return Promise.resolve();const s=!o&&V(R(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,s))).then((e=>e&&q(e))).catch((e=>te(e,t,n)))}const ie=e=>a.go(e);let ae;const se=new Set,le={currentRoute:g,addRoute:C,removeRoute:T,hasRoute:I,getRoutes:E,resolve:O,options:e,push:D,replace:N,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:l.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(g)}),h&&!ae&&g.value===Q&&(ae=!0,D(a.location).catch((e=>{0})));const n={};for(const o in Q)n[o]=(0,r.Fl)((()=>g.value[o]));e.provide(u,t),e.provide(c,(0,o.qj)(n)),e.provide(d,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(y=Q,Y&&Y(),g.value=Q,ae=!1,G=!1),i()}}};return le}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const i=t.matched[a];i&&(e.matched.find((e=>S(e,i)))?r.push(i):n.push(i));const s=e.matched[a];s&&(t.matched.find((e=>S(e,s)))||o.push(s))}return[n,r,o]}},6553:function(e,t,n){n(6699),function(t,n){e.exports=n()}(0,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof n.g?n.g:"undefined"!=typeof self?self:{},t={exports:{}};t.exports=function(){const e=e=>{const t=[];for(let n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},t=e=>e.charAt(0).toUpperCase()+e.slice(1),n=e=>Array.prototype.slice.call(e),r=e=>{},o=e=>{},i=[],a=e=>{i.includes(e)||(i.push(e),r(e))},s=(e,t)=>{a('"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'))},l=e=>"function"==typeof e?e():e,u=e=>e&&"function"==typeof e.toPromise,c=e=>u(e)?e.toPromise():Promise.resolve(e),d=e=>e&&Promise.resolve(e)===e,h={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},f=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],p={},v=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],m=e=>Object.prototype.hasOwnProperty.call(h,e),g=e=>-1!==f.indexOf(e),y=e=>p[e],b=e=>{m(e)||r('Unknown parameter "'.concat(e,'"'))},w=e=>{v.includes(e)&&r('The parameter "'.concat(e,'" is incompatible with toasts'))},_=e=>{y(e)&&s(e,y(e))},k=e=>{!e.backdrop&&e.allowOutsideClick&&r('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e)b(t),e.toast&&w(t),_(t)},S="swal2-",x=e=>{const t={};for(const n in e)t[e[n]]=S+e[n];return t},C=x(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),T=x(["success","warning","info","question","error"]),E=()=>document.body.querySelector(".".concat(C.container)),A=e=>{const t=E();return t?t.querySelector(e):null},I=e=>A(".".concat(e)),O=()=>I(C.popup),F=()=>I(C.icon),M=()=>I(C.title),D=()=>I(C["html-container"]),P=()=>I(C.image),q=()=>I(C["progress-steps"]),R=()=>I(C["validation-message"]),N=()=>A(".".concat(C.actions," .").concat(C.confirm)),L=()=>A(".".concat(C.actions," .").concat(C.deny)),V=()=>I(C["input-label"]),$=()=>A(".".concat(C.loader)),B=()=>A(".".concat(C.actions," .").concat(C.cancel)),j=()=>I(C.actions),z=()=>I(C.footer),H=()=>I(C["timer-progress-bar"]),U=()=>I(C.close),Y='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',W=()=>{const t=n(O().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((e,t)=>{const n=parseInt(e.getAttribute("tabindex")),r=parseInt(t.getAttribute("tabindex"));return n>r?1:n<r?-1:0})),r=n(O().querySelectorAll(Y)).filter((e=>"-1"!==e.getAttribute("tabindex")));return e(t.concat(r)).filter((e=>fe(e)))},Q=()=>!Z(document.body,C["toast-shown"])&&!Z(document.body,C["no-backdrop"]),K=()=>O()&&Z(O(),C.toast),G=()=>O().hasAttribute("data-loading"),J={previousBodyPadding:null},X=(e,t)=>{if(e.textContent="",t){const r=(new DOMParser).parseFromString(t,"text/html");n(r.querySelector("head").childNodes).forEach((t=>{e.appendChild(t)})),n(r.querySelector("body").childNodes).forEach((t=>{e.appendChild(t)}))}},Z=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let r=0;r<n.length;r++)if(!e.classList.contains(n[r]))return!1;return!0},ee=(e,t)=>{n(e.classList).forEach((n=>{Object.values(C).includes(n)||Object.values(T).includes(n)||Object.values(t.showClass).includes(n)||e.classList.remove(n)}))},te=(e,t,n)=>{if(ee(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return r("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));ie(e,t.customClass[n])}},ne=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(C.popup," > .").concat(C[t]));case"checkbox":return e.querySelector(".".concat(C.popup," > .").concat(C.checkbox," input"));case"radio":return e.querySelector(".".concat(C.popup," > .").concat(C.radio," input:checked"))||e.querySelector(".".concat(C.popup," > .").concat(C.radio," input:first-child"));case"range":return e.querySelector(".".concat(C.popup," > .").concat(C.range," input"));default:return e.querySelector(".".concat(C.popup," > .").concat(C.input))}},re=e=>{if(e.focus(),"file"!==e.type){const t=e.value;e.value="",e.value=t}},oe=(e,t,n)=>{e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{n?e.classList.add(t):e.classList.remove(t)})):n?e.classList.add(t):e.classList.remove(t)})))},ie=(e,t)=>{oe(e,t,!0)},ae=(e,t)=>{oe(e,t,!1)},se=(e,t)=>{const r=n(e.childNodes);for(let n=0;n<r.length;n++)if(Z(r[n],t))return r[n]},le=(e,t,n)=>{n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},ue=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";e.style.display=t},ce=e=>{e.style.display="none"},de=(e,t,n,r)=>{const o=e.querySelector(t);o&&(o.style[n]=r)},he=(e,t,n)=>{t?ue(e,n):ce(e)},fe=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),pe=()=>!fe(N())&&!fe(L())&&!fe(B()),ve=e=>!!(e.scrollHeight>e.clientHeight),me=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||r>0},ge=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=H();fe(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout((()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"}),10))},ye=()=>{const e=H(),t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=t/parseInt(window.getComputedStyle(e).width)*100;e.style.removeProperty("transition"),e.style.width="".concat(n,"%")},be=()=>"undefined"==typeof window||"undefined"==typeof document,we=100,_e={},ke=()=>{_e.previousActiveElement&&_e.previousActiveElement.focus?(_e.previousActiveElement.focus(),_e.previousActiveElement=null):document.body&&document.body.focus()},Se=e=>new Promise((t=>{if(!e)return t();const n=window.scrollX,r=window.scrollY;_e.restoreFocusTimeout=setTimeout((()=>{ke(),t()}),we),window.scrollTo(n,r)})),xe='\n <div aria-labelledby="'.concat(C.title,'" aria-describedby="').concat(C["html-container"],'" class="').concat(C.popup,'" tabindex="-1">\n   <button type="button" class="').concat(C.close,'"></button>\n   <ul class="').concat(C["progress-steps"],'"></ul>\n   <div class="').concat(C.icon,'"></div>\n   <img class="').concat(C.image,'" />\n   <h2 class="').concat(C.title,'" id="').concat(C.title,'"></h2>\n   <div class="').concat(C["html-container"],'" id="').concat(C["html-container"],'"></div>\n   <input class="').concat(C.input,'" />\n   <input type="file" class="').concat(C.file,'" />\n   <div class="').concat(C.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(C.select,'"></select>\n   <div class="').concat(C.radio,'"></div>\n   <label for="').concat(C.checkbox,'" class="').concat(C.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(C.label,'"></span>\n   </label>\n   <textarea class="').concat(C.textarea,'"></textarea>\n   <div class="').concat(C["validation-message"],'" id="').concat(C["validation-message"],'"></div>\n   <div class="').concat(C.actions,'">\n     <div class="').concat(C.loader,'"></div>\n     <button type="button" class="').concat(C.confirm,'"></button>\n     <button type="button" class="').concat(C.deny,'"></button>\n     <button type="button" class="').concat(C.cancel,'"></button>\n   </div>\n   <div class="').concat(C.footer,'"></div>\n   <div class="').concat(C["timer-progress-bar-container"],'">\n     <div class="').concat(C["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Ce=()=>{const e=E();return!!e&&(e.remove(),ae([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]]),!0)},Te=()=>{_e.currentInstance.resetValidationMessage()},Ee=()=>{const e=O(),t=se(e,C.input),n=se(e,C.file),r=e.querySelector(".".concat(C.range," input")),o=e.querySelector(".".concat(C.range," output")),i=se(e,C.select),a=e.querySelector(".".concat(C.checkbox," input")),s=se(e,C.textarea);t.oninput=Te,n.onchange=Te,i.onchange=Te,a.onchange=Te,s.oninput=Te,r.oninput=()=>{Te(),o.value=r.value},r.onchange=()=>{Te(),r.nextSibling.value=r.value}},Ae=e=>"string"==typeof e?document.querySelector(e):e,Ie=e=>{const t=O();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},Oe=e=>{"rtl"===window.getComputedStyle(e).direction&&ie(E(),C.rtl)},Fe=e=>{const t=Ce();if(be())return void o("SweetAlert2 requires document to initialize");const n=document.createElement("div");n.className=C.container,t&&ie(n,C["no-transition"]),X(n,xe);const r=Ae(e.target);r.appendChild(n),Ie(e),Oe(r),Ee()},Me=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?De(e,t):e&&X(t,e)},De=(e,t)=>{e.jquery?Pe(t,e):X(t,e.toString())},Pe=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},qe=(()=>{if(be())return!1;const e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),Re=()=>{const e=document.createElement("div");e.className=C["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Ne=(e,t)=>{const n=j(),r=$();t.showConfirmButton||t.showDenyButton||t.showCancelButton?ue(n):ce(n),te(n,t,"actions"),Le(n,r,t),X(r,t.loaderHtml),te(r,t,"loader")};function Le(e,t,n){const r=N(),o=L(),i=B();$e(r,"confirm",n),$e(o,"deny",n),$e(i,"cancel",n),Ve(r,o,i,n),n.reverseButtons&&(n.toast?(e.insertBefore(i,r),e.insertBefore(o,r)):(e.insertBefore(i,t),e.insertBefore(o,t),e.insertBefore(r,t)))}function Ve(e,t,n,r){if(!r.buttonsStyling)return ae([e,t,n],C.styled);ie([e,t,n],C.styled),r.confirmButtonColor&&(e.style.backgroundColor=r.confirmButtonColor,ie(e,C["default-outline"])),r.denyButtonColor&&(t.style.backgroundColor=r.denyButtonColor,ie(t,C["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,ie(n,C["default-outline"]))}function $e(e,n,r){he(e,r["show".concat(t(n),"Button")],"inline-block"),X(e,r["".concat(n,"ButtonText")]),e.setAttribute("aria-label",r["".concat(n,"ButtonAriaLabel")]),e.className=C[n],te(e,r,"".concat(n,"Button")),ie(e,r["".concat(n,"ButtonClass")])}function Be(e,t){"string"==typeof t?e.style.background=t:t||ie([document.documentElement,document.body],C["no-backdrop"])}function je(e,t){t in C?ie(e,C[t]):(r('The "position" parameter is not valid, defaulting to "center"'),ie(e,C.center))}function ze(e,t){if(t&&"string"==typeof t){const n="grow-".concat(t);n in C&&ie(e,C[n])}}const He=(e,t)=>{const n=E();n&&(Be(n,t.backdrop),je(n,t.position),ze(n,t.grow),te(n,t,"container"))};var Ue={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Ye=["input","file","range","select","radio","checkbox","textarea"],We=(e,t)=>{const n=O(),r=Ue.innerParams.get(e),o=!r||t.input!==r.input;Ye.forEach((e=>{const r=C[e],i=se(n,r);Ge(e,t.inputAttributes),i.className=r,o&&ce(i)})),t.input&&(o&&Qe(t),Je(t))},Qe=e=>{if(!tt[e.input])return o('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=et(e.input),n=tt[e.input](t,e);ue(n),setTimeout((()=>{re(n)}))},Ke=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["type","value","style"].includes(n)||e.removeAttribute(n)}},Ge=(e,t)=>{const n=ne(O(),e);if(n){Ke(n);for(const e in t)n.setAttribute(e,t[e])}},Je=e=>{const t=et(e.input);e.customClass&&ie(t,e.customClass.input)},Xe=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Ze=(e,t,n)=>{if(n.inputLabel){e.id=C.input;const r=document.createElement("label"),o=C["input-label"];r.setAttribute("for",e.id),r.className=o,ie(r,n.customClass.inputLabel),r.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",r)}},et=e=>{const t=C[e]?C[e]:C.input;return se(O(),t)},tt={};tt.text=tt.email=tt.password=tt.number=tt.tel=tt.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:d(t.inputValue)||r('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),Ze(e,e,t),Xe(e,t),e.type=t.input,e),tt.file=(e,t)=>(Ze(e,e,t),Xe(e,t),e),tt.range=(e,t)=>{const n=e.querySelector("input"),r=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,r.value=t.inputValue,Ze(n,e,t),e},tt.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");X(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return Ze(e,e,t),e},tt.radio=e=>(e.textContent="",e),tt.checkbox=(e,t)=>{const n=ne(O(),"checkbox");n.value="1",n.id=C.checkbox,n.checked=Boolean(t.inputValue);const r=e.querySelector("span");return X(r,t.inputPlaceholder),e},tt.textarea=(e,t)=>{e.value=t.inputValue,Xe(e,t),Ze(e,e,t);const n=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);return setTimeout((()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(O()).width);new MutationObserver((()=>{const r=e.offsetWidth+n(e);O().style.width=r>t?"".concat(r,"px"):null})).observe(e,{attributes:!0,attributeFilter:["style"]})}})),e};const nt=(e,t)=>{const n=D();te(n,t,"htmlContainer"),t.html?(Me(t.html,n),ue(n,"block")):t.text?(n.textContent=t.text,ue(n,"block")):ce(n),We(e,t)},rt=(e,t)=>{const n=z();he(n,t.footer),t.footer&&Me(t.footer,n),te(n,t,"footer")},ot=(e,t)=>{const n=U();X(n,t.closeButtonHtml),te(n,t,"closeButton"),he(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},it=(e,t)=>{const n=Ue.innerParams.get(e),r=F();return n&&t.icon===n.icon?(ct(r,t),void at(r,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(T).indexOf(t.icon)?(o('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),ce(r)):(ue(r),ct(r,t),at(r,t),void ie(r,t.showClass.icon)):ce(r)},at=(e,t)=>{for(const n in T)t.icon!==n&&ae(e,T[n]);ie(e,T[t.icon]),dt(e,t),st(),te(e,t,"icon")},st=()=>{const e=O(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=t},lt='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',ut='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',ct=(e,t)=>{e.textContent="",t.iconHtml?X(e,ht(t.iconHtml)):"success"===t.icon?X(e,lt):"error"===t.icon?X(e,ut):X(e,ht({question:"?",warning:"!",info:"i"}[t.icon]))},dt=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])de(e,n,"backgroundColor",t.iconColor);de(e,".swal2-success-ring","borderColor",t.iconColor)}},ht=e=>'<div class="'.concat(C["icon-content"],'">').concat(e,"</div>"),ft=(e,t)=>{const n=P();if(!t.imageUrl)return ce(n);ue(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),le(n,"width",t.imageWidth),le(n,"height",t.imageHeight),n.className=C.image,te(n,t,"image")},pt=e=>{const t=document.createElement("li");return ie(t,C["progress-step"]),X(t,e),t},vt=e=>{const t=document.createElement("li");return ie(t,C["progress-step-line"]),e.progressStepsDistance&&(t.style.width=e.progressStepsDistance),t},mt=(e,t)=>{const n=q();if(!t.progressSteps||0===t.progressSteps.length)return ce(n);ue(n),n.textContent="",t.currentProgressStep>=t.progressSteps.length&&r("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(((e,r)=>{const o=pt(e);if(n.appendChild(o),r===t.currentProgressStep&&ie(o,C["active-progress-step"]),r!==t.progressSteps.length-1){const e=vt(t);n.appendChild(e)}}))},gt=(e,t)=>{const n=M();he(n,t.title||t.titleText,"block"),t.title&&Me(t.title,n),t.titleText&&(n.innerText=t.titleText),te(n,t,"title")},yt=(e,t)=>{const n=E(),r=O();t.toast?(le(n,"width",t.width),r.style.width="100%",r.insertBefore($(),F())):le(r,"width",t.width),le(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),ce(R()),bt(r,t)},bt=(e,t)=>{e.className="".concat(C.popup," ").concat(fe(e)?t.showClass.popup:""),t.toast?(ie([document.documentElement,document.body],C["toast-shown"]),ie(e,C.toast)):ie(e,C.modal),te(e,t,"popup"),"string"==typeof t.customClass&&ie(e,t.customClass),t.icon&&ie(e,C["icon-".concat(t.icon)])},wt=(e,t)=>{yt(e,t),He(e,t),mt(e,t),it(e,t),ft(e,t),gt(e,t),ot(e,t),nt(e,t),Ne(e,t),rt(e,t),"function"==typeof t.didRender&&t.didRender(O())},_t=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),kt=()=>{n(document.body.children).forEach((e=>{e===E()||e.contains(E())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}))},St=()=>{n(document.body.children).forEach((e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))},xt=["swal-title","swal-html","swal-footer"],Ct=e=>{const t="string"==typeof e.template?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return Mt(n),Object.assign(Tt(n),Et(n),At(n),It(n),Ot(n),Ft(n,xt))},Tt=e=>{const t={};return n(e.querySelectorAll("swal-param")).forEach((e=>{Dt(e,["name","value"]);const n=e.getAttribute("name"),r=e.getAttribute("value");"boolean"==typeof h[n]&&"false"===r&&(t[n]=!1),"object"==typeof h[n]&&(t[n]=JSON.parse(r))})),t},Et=e=>{const r={};return n(e.querySelectorAll("swal-button")).forEach((e=>{Dt(e,["type","color","aria-label"]);const n=e.getAttribute("type");r["".concat(n,"ButtonText")]=e.innerHTML,r["show".concat(t(n),"Button")]=!0,e.hasAttribute("color")&&(r["".concat(n,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(r["".concat(n,"ButtonAriaLabel")]=e.getAttribute("aria-label"))})),r},At=e=>{const t={},n=e.querySelector("swal-image");return n&&(Dt(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},It=e=>{const t={},n=e.querySelector("swal-icon");return n&&(Dt(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},Ot=e=>{const t={},r=e.querySelector("swal-input");r&&(Dt(r,["type","label","placeholder","value"]),t.input=r.getAttribute("type")||"text",r.hasAttribute("label")&&(t.inputLabel=r.getAttribute("label")),r.hasAttribute("placeholder")&&(t.inputPlaceholder=r.getAttribute("placeholder")),r.hasAttribute("value")&&(t.inputValue=r.getAttribute("value")));const o=e.querySelectorAll("swal-input-option");return o.length&&(t.inputOptions={},n(o).forEach((e=>{Dt(e,["value"]);const n=e.getAttribute("value"),r=e.innerHTML;t.inputOptions[n]=r}))),t},Ft=(e,t)=>{const n={};for(const r in t){const o=t[r],i=e.querySelector(o);i&&(Dt(i,[]),n[o.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Mt=e=>{const t=xt.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);n(e.children).forEach((e=>{const n=e.tagName.toLowerCase();-1===t.indexOf(n)&&r("Unrecognized element <".concat(n,">"))}))},Dt=(e,t)=>{n(e.attributes).forEach((n=>{-1===t.indexOf(n.name)&&r(['Unrecognized attribute "'.concat(n.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])}))};var Pt={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function qt(e){e.inputValidator||Object.keys(Pt).forEach((t=>{e.input===t&&(e.inputValidator=Pt[t])}))}function Rt(e){(!e.target||"string"==typeof e.target&&!document.querySelector(e.target)||"string"!=typeof e.target&&!e.target.appendChild)&&(r('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Nt(e){qt(e),e.showLoaderOnConfirm&&!e.preConfirm&&r("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),Rt(e),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),Fe(e)}class Lt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){const t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Vt=()=>{null===J.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(J.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(J.previousBodyPadding+Re(),"px"))},$t=()=>{null!==J.previousBodyPadding&&(document.body.style.paddingRight="".concat(J.previousBodyPadding,"px"),J.previousBodyPadding=null)},Bt=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!Z(document.body,C.iosfix)){const e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),ie(document.body,C.iosfix),zt(),jt()}},jt=()=>{const e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);if(t&&n&&!e.match(/CriOS/i)){const e=44;O().scrollHeight>window.innerHeight-e&&(E().style.paddingBottom="".concat(e,"px"))}},zt=()=>{const e=E();let t;e.ontouchstart=e=>{t=Ht(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},Ht=e=>{const t=e.target,n=E();return!(Ut(e)||Yt(e)||t!==n&&(ve(n)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||ve(D())&&D().contains(t)))},Ut=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,Yt=e=>e.touches&&e.touches.length>1,Wt=()=>{if(Z(document.body,C.iosfix)){const e=parseInt(document.body.style.top,10);ae(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}},Qt=10,Kt=e=>{const t=E(),n=O();"function"==typeof e.willOpen&&e.willOpen(n);const r=window.getComputedStyle(document.body).overflowY;Zt(t,n,e),setTimeout((()=>{Jt(t,n)}),Qt),Q()&&(Xt(t,e.scrollbarPadding,r),kt()),K()||_e.previousActiveElement||(_e.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout((()=>e.didOpen(n))),ae(t,C["no-transition"])},Gt=e=>{const t=O();if(e.target!==t)return;const n=E();t.removeEventListener(qe,Gt),n.style.overflowY="auto"},Jt=(e,t)=>{qe&&me(t)?(e.style.overflowY="hidden",t.addEventListener(qe,Gt)):e.style.overflowY="auto"},Xt=(e,t,n)=>{Bt(),t&&"hidden"!==n&&Vt(),setTimeout((()=>{e.scrollTop=0}))},Zt=(e,t,n)=>{ie(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),ue(t,"grid"),setTimeout((()=>{ie(t,n.showClass.popup),t.style.removeProperty("opacity")}),Qt),ie([document.documentElement,document.body],C.shown),n.heightAuto&&n.backdrop&&!n.toast&&ie([document.documentElement,document.body],C["height-auto"])},en=e=>{let t=O();t||new Hr,t=O();const n=$();K()?ce(F()):tn(t,e),ue(n),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},tn=(e,t)=>{const n=j(),r=$();!t&&fe(N())&&(t=N()),ue(n),t&&(ce(t),r.setAttribute("data-button-to-replace",t.className)),r.parentNode.insertBefore(r,t),ie([e,n],C.loading)},nn=(e,t)=>{"select"===t.input||"radio"===t.input?ln(e,t):["text","email","number","tel","textarea"].includes(t.input)&&(u(t.inputValue)||d(t.inputValue))&&(en(N()),un(e,t))},rn=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return on(n);case"radio":return an(n);case"file":return sn(n);default:return t.inputAutoTrim?n.value.trim():n.value}},on=e=>e.checked?1:0,an=e=>e.checked?e.value:null,sn=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,ln=(e,t)=>{const n=O(),r=e=>cn[t.input](n,dn(e),t);u(t.inputOptions)||d(t.inputOptions)?(en(N()),c(t.inputOptions).then((t=>{e.hideLoading(),r(t)}))):"object"==typeof t.inputOptions?r(t.inputOptions):o("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions))},un=(e,t)=>{const n=e.getInput();ce(n),c(t.inputValue).then((r=>{n.value="number"===t.input?parseFloat(r)||0:"".concat(r),ue(n),n.focus(),e.hideLoading()})).catch((t=>{o("Error in inputValue promise: ".concat(t)),n.value="",ue(n),n.focus(),e.hideLoading()}))},cn={select:(e,t,n)=>{const r=se(e,C.select),o=(e,t,r)=>{const o=document.createElement("option");o.value=r,X(o,t),o.selected=hn(r,n.inputValue),e.appendChild(o)};t.forEach((e=>{const t=e[0],n=e[1];if(Array.isArray(n)){const e=document.createElement("optgroup");e.label=t,e.disabled=!1,r.appendChild(e),n.forEach((t=>o(e,t[1],t[0])))}else o(r,n,t)})),r.focus()},radio:(e,t,n)=>{const r=se(e,C.radio);t.forEach((e=>{const t=e[0],o=e[1],i=document.createElement("input"),a=document.createElement("label");i.type="radio",i.name=C.radio,i.value=t,hn(t,n.inputValue)&&(i.checked=!0);const s=document.createElement("span");X(s,o),s.className=C.label,a.appendChild(i),a.appendChild(s),r.appendChild(a)}));const o=r.querySelectorAll("input");o.length&&o[0].focus()}},dn=e=>{const t=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(((e,n)=>{let r=e;"object"==typeof r&&(r=dn(r)),t.push([n,r])})):Object.keys(e).forEach((n=>{let r=e[n];"object"==typeof r&&(r=dn(r)),t.push([n,r])})),t},hn=(e,t)=>t&&t.toString()===e.toString(),fn=e=>{const t=Ue.innerParams.get(e);e.disableButtons(),t.input?mn(e,"confirm"):_n(e,!0)},pn=e=>{const t=Ue.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?mn(e,"deny"):yn(e,!1)},vn=(e,t)=>{e.disableButtons(),t(_t.cancel)},mn=(e,n)=>{const r=Ue.innerParams.get(e);if(!r.input)return o('The "input" parameter is needed to be set when using returnInputValueOn'.concat(t(n)));const i=rn(e,r);r.inputValidator?gn(e,i,n):e.getInput().checkValidity()?"deny"===n?yn(e,i):_n(e,i):(e.enableButtons(),e.showValidationMessage(r.validationMessage))},gn=(e,t,n)=>{const r=Ue.innerParams.get(e);e.disableInput(),Promise.resolve().then((()=>c(r.inputValidator(t,r.validationMessage)))).then((r=>{e.enableButtons(),e.enableInput(),r?e.showValidationMessage(r):"deny"===n?yn(e,t):_n(e,t)}))},yn=(e,t)=>{const n=Ue.innerParams.get(e||void 0);n.showLoaderOnDeny&&en(L()),n.preDeny?(Ue.awaitingPromise.set(e||void 0,!0),Promise.resolve().then((()=>c(n.preDeny(t,n.validationMessage)))).then((n=>{!1===n?e.hideLoading():e.closePopup({isDenied:!0,value:void 0===n?t:n})})).catch((t=>wn(e||void 0,t)))):e.closePopup({isDenied:!0,value:t})},bn=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},wn=(e,t)=>{e.rejectPromise(t)},_n=(e,t)=>{const n=Ue.innerParams.get(e||void 0);n.showLoaderOnConfirm&&en(),n.preConfirm?(e.resetValidationMessage(),Ue.awaitingPromise.set(e||void 0,!0),Promise.resolve().then((()=>c(n.preConfirm(t,n.validationMessage)))).then((n=>{fe(R())||!1===n?e.hideLoading():bn(e,void 0===n?t:n)})).catch((t=>wn(e||void 0,t)))):bn(e,t)},kn=(e,t,n)=>{Ue.innerParams.get(e).toast?Sn(e,t,n):(Tn(t),En(t),An(e,t,n))},Sn=(e,t,n)=>{t.popup.onclick=()=>{const t=Ue.innerParams.get(e);t&&(xn(t)||t.timer||t.input)||n(_t.close)}},xn=e=>e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton;let Cn=!1;const Tn=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(Cn=!0)}}},En=e=>{e.container.onmousedown=()=>{e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,(t.target===e.popup||e.popup.contains(t.target))&&(Cn=!0)}}},An=(e,t,n)=>{t.container.onclick=r=>{const o=Ue.innerParams.get(e);Cn?Cn=!1:r.target===t.container&&l(o.allowOutsideClick)&&n(_t.backdrop)}},In=()=>fe(O()),On=()=>N()&&N().click(),Fn=()=>L()&&L().click(),Mn=()=>B()&&B().click(),Dn=(e,t,n,r)=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),n.toast||(t.keydownHandler=t=>Nn(e,t,r),t.keydownTarget=n.keydownListenerCapture?window:O(),t.keydownListenerCapture=n.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Pn=(e,t,n)=>{const r=W();if(r.length)return(t+=n)===r.length?t=0:-1===t&&(t=r.length-1),r[t].focus();O().focus()},qn=["ArrowRight","ArrowDown"],Rn=["ArrowLeft","ArrowUp"],Nn=(e,t,n)=>{const r=Ue.innerParams.get(e);r&&(r.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?Ln(e,t,r):"Tab"===t.key?Vn(t,r):[...qn,...Rn].includes(t.key)?$n(t.key):"Escape"===t.key&&Bn(t,r,n))},Ln=(e,t,n)=>{if(l(n.allowEnterKey)&&!t.isComposing&&t.target&&e.getInput()&&t.target.outerHTML===e.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;On(),t.preventDefault()}},Vn=(e,t)=>{const n=e.target,r=W();let o=-1;for(let i=0;i<r.length;i++)if(n===r[i]){o=i;break}e.shiftKey?Pn(t,o,-1):Pn(t,o,1),e.stopPropagation(),e.preventDefault()},$n=e=>{if(![N(),L(),B()].includes(document.activeElement))return;const t=qn.includes(e)?"nextElementSibling":"previousElementSibling",n=document.activeElement[t];n instanceof HTMLElement&&n.focus()},Bn=(e,t,n)=>{l(t.allowEscapeKey)&&(e.preventDefault(),n(_t.esc))},jn=e=>"object"==typeof e&&e.jquery,zn=e=>e instanceof Element||jn(e),Hn=e=>{const t={};return"object"!=typeof e[0]||zn(e[0])?["title","html","icon"].forEach(((n,r)=>{const i=e[r];"string"==typeof i||zn(i)?t[n]=i:void 0!==i&&o("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(typeof i))})):Object.assign(t,e[0]),t};function Un(){const e=this;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new e(...n)}function Yn(e){class t extends(this){_main(t,n){return super._main(t,Object.assign({},e,n))}}return t}const Wn=()=>_e.timeout&&_e.timeout.getTimerLeft(),Qn=()=>{if(_e.timeout)return ye(),_e.timeout.stop()},Kn=()=>{if(_e.timeout){const e=_e.timeout.start();return ge(e),e}},Gn=()=>{const e=_e.timeout;return e&&(e.running?Qn():Kn())},Jn=e=>{if(_e.timeout){const t=_e.timeout.increase(e);return ge(t,!0),t}},Xn=()=>_e.timeout&&_e.timeout.isRunning();let Zn=!1;const er={};function tr(){er[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template"]=this,Zn||(document.body.addEventListener("click",nr),Zn=!0)}const nr=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in er){const n=t.getAttribute(e);if(n)return void er[e].fire({template:n})}};var rr=Object.freeze({isValidParameter:m,isUpdatableParameter:g,isDeprecatedParameter:y,argsToParams:Hn,isVisible:In,clickConfirm:On,clickDeny:Fn,clickCancel:Mn,getContainer:E,getPopup:O,getTitle:M,getHtmlContainer:D,getImage:P,getIcon:F,getInputLabel:V,getCloseButton:U,getActions:j,getConfirmButton:N,getDenyButton:L,getCancelButton:B,getLoader:$,getFooter:z,getTimerProgressBar:H,getFocusableElements:W,getValidationMessage:R,isLoading:G,fire:Un,mixin:Yn,showLoading:en,enableLoading:en,getTimerLeft:Wn,stopTimer:Qn,resumeTimer:Kn,toggleTimer:Gn,increaseTimer:Jn,isTimerRunning:Xn,bindClickHandler:tr});function or(){const e=Ue.innerParams.get(this);if(!e)return;const t=Ue.domCache.get(this);ce(t.loader),K()?e.icon&&ue(F()):ir(t),ae([t.popup,t.actions],C.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const ir=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ue(t[0],"inline-block"):pe()&&ce(e.actions)};function ar(e){const t=Ue.innerParams.get(e||this),n=Ue.domCache.get(e||this);return n?ne(n.popup,t.input):null}var sr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function lr(e,t,n,r){K()?yr(e,r):(Se(n).then((()=>yr(e,r))),_e.keydownTarget.removeEventListener("keydown",_e.keydownHandler,{capture:_e.keydownListenerCapture}),_e.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),Q()&&($t(),Wt(),St()),ur()}function ur(){ae([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"]])}function cr(e){e=vr(e);const t=sr.swalPromiseResolve.get(this),n=hr(this);this.isAwaitingPromise()?e.isDismissed||(pr(this),t(e)):n&&t(e)}function dr(){return!!Ue.awaitingPromise.get(this)}const hr=e=>{const t=O();if(!t)return!1;const n=Ue.innerParams.get(e);if(!n||Z(t,n.hideClass.popup))return!1;ae(t,n.showClass.popup),ie(t,n.hideClass.popup);const r=E();return ae(r,n.showClass.backdrop),ie(r,n.hideClass.backdrop),mr(e,t,n),!0};function fr(e){const t=sr.swalPromiseReject.get(this);pr(this),t&&t(e)}const pr=e=>{e.isAwaitingPromise()&&(Ue.awaitingPromise.delete(e),Ue.innerParams.get(e)||e._destroy())},vr=e=>void 0===e?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),mr=(e,t,n)=>{const r=E(),o=qe&&me(t);"function"==typeof n.willClose&&n.willClose(t),o?gr(e,t,r,n.returnFocus,n.didClose):lr(e,r,n.returnFocus,n.didClose)},gr=(e,t,n,r,o)=>{_e.swalCloseEventFinishedCallback=lr.bind(null,e,n,r,o),t.addEventListener(qe,(function(e){e.target===t&&(_e.swalCloseEventFinishedCallback(),delete _e.swalCloseEventFinishedCallback)}))},yr=(e,t)=>{setTimeout((()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()}))};function br(e,t,n){const r=Ue.domCache.get(e);t.forEach((e=>{r[e].disabled=n}))}function wr(e,t){if(!e)return!1;if("radio"===e.type){const n=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}function _r(){br(this,["confirmButton","denyButton","cancelButton"],!1)}function kr(){br(this,["confirmButton","denyButton","cancelButton"],!0)}function Sr(){return wr(this.getInput(),!1)}function xr(){return wr(this.getInput(),!0)}function Cr(e){const t=Ue.domCache.get(this),n=Ue.innerParams.get(this);X(t.validationMessage,e),t.validationMessage.className=C["validation-message"],n.customClass&&n.customClass.validationMessage&&ie(t.validationMessage,n.customClass.validationMessage),ue(t.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid",!0),r.setAttribute("aria-describedby",C["validation-message"]),re(r),ie(r,C.inputerror))}function Tr(){const e=Ue.domCache.get(this);e.validationMessage&&ce(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),ae(t,C.inputerror))}function Er(){return Ue.domCache.get(this).progressSteps}function Ar(e){const t=O(),n=Ue.innerParams.get(this);if(!t||Z(t,n.hideClass.popup))return r("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const o=Ir(e),i=Object.assign({},n,o);wt(this,i),Ue.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const Ir=e=>{const t={};return Object.keys(e).forEach((n=>{g(n)?t[n]=e[n]:r('Invalid parameter to update: "'.concat(n,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))})),t};function Or(){const e=Ue.domCache.get(this),t=Ue.innerParams.get(this);t?(e.popup&&_e.swalCloseEventFinishedCallback&&(_e.swalCloseEventFinishedCallback(),delete _e.swalCloseEventFinishedCallback),_e.deferDisposalTimer&&(clearTimeout(_e.deferDisposalTimer),delete _e.deferDisposalTimer),"function"==typeof t.didDestroy&&t.didDestroy(),Fr(this)):Mr(this)}const Fr=e=>{Mr(e),delete e.params,delete _e.keydownHandler,delete _e.keydownTarget,delete _e.currentInstance},Mr=e=>{e.isAwaitingPromise()?(Dr(Ue,e),Ue.awaitingPromise.set(e,!0)):(Dr(sr,e),Dr(Ue,e))},Dr=(e,t)=>{for(const n in e)e[n].delete(t)};var Pr=Object.freeze({hideLoading:or,disableLoading:or,getInput:ar,close:cr,isAwaitingPromise:dr,rejectPromise:fr,closePopup:cr,closeModal:cr,closeToast:cr,enableButtons:_r,disableButtons:kr,enableInput:Sr,disableInput:xr,showValidationMessage:Cr,resetValidationMessage:Tr,getProgressSteps:Er,update:Ar,_destroy:Or});let qr;class Rr{constructor(){if("undefined"==typeof window)return;qr=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:r,writable:!1,enumerable:!0,configurable:!0}});const o=this._main(this.params);Ue.promise.set(this,o)}_main(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};k(Object.assign({},t,e)),_e.currentInstance&&(_e.currentInstance._destroy(),Q()&&St()),_e.currentInstance=this;const n=Lr(e,t);Nt(n),Object.freeze(n),_e.timeout&&(_e.timeout.stop(),delete _e.timeout),clearTimeout(_e.restoreFocusTimeout);const r=Vr(this);return wt(this,n),Ue.innerParams.set(this,n),Nr(this,r,n)}then(e){return Ue.promise.get(this).then(e)}finally(e){return Ue.promise.get(this).finally(e)}}const Nr=(e,t,n)=>new Promise(((r,o)=>{const i=t=>{e.closePopup({isDismissed:!0,dismiss:t})};sr.swalPromiseResolve.set(e,r),sr.swalPromiseReject.set(e,o),t.confirmButton.onclick=()=>fn(e),t.denyButton.onclick=()=>pn(e),t.cancelButton.onclick=()=>vn(e,i),t.closeButton.onclick=()=>i(_t.close),kn(e,t,i),Dn(e,_e,n,i),nn(e,n),Kt(n),$r(_e,n,i),Br(t,n),setTimeout((()=>{t.container.scrollTop=0}))})),Lr=(e,t)=>{const n=Ct(e),r=Object.assign({},h,t,n,e);return r.showClass=Object.assign({},h.showClass,r.showClass),r.hideClass=Object.assign({},h.hideClass,r.hideClass),r},Vr=e=>{const t={popup:O(),container:E(),actions:j(),confirmButton:N(),denyButton:L(),cancelButton:B(),loader:$(),closeButton:U(),validationMessage:R(),progressSteps:q()};return Ue.domCache.set(e,t),t},$r=(e,t,n)=>{const r=H();ce(r),t.timer&&(e.timeout=new Lt((()=>{n("timer"),delete e.timeout}),t.timer),t.timerProgressBar&&(ue(r),te(r,t,"timerProgressBar"),setTimeout((()=>{e.timeout&&e.timeout.running&&ge(t.timer)}))))},Br=(e,t)=>{if(!t.toast)return l(t.allowEnterKey)?void(jr(e,t)||Pn(t,-1,1)):zr()},jr=(e,t)=>t.focusDeny&&fe(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&fe(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!fe(e.confirmButton)||(e.confirmButton.focus(),0)),zr=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};Object.assign(Rr.prototype,Pr),Object.assign(Rr,rr),Object.keys(Pr).forEach((e=>{Rr[e]=function(){if(qr)return qr[e](...arguments)}})),Rr.DismissReason=_t,Rr.version="11.4.0";const Hr=Rr;return Hr.default=Hr,Hr}(),void 0!==e&&e.Sweetalert2&&(e.swal=e.sweetAlert=e.Swal=e.SweetAlert=e.Sweetalert2);var r=t.exports;return class{static install(e,t={}){var n;const o=r.mixin(t),i=function(...e){return o.fire.call(o,...e)};Object.assign(i,r),Object.keys(r).filter((e=>"function"==typeof r[e])).forEach((e=>{i[e]=o[e].bind(o)})),(null==(n=e.config)?void 0:n.globalProperties)&&!e.config.globalProperties.$swal?(e.config.globalProperties.$swal=i,e.provide("$swal",i)):Object.prototype.hasOwnProperty.call(e,"$swal")||(e.prototype.$swal=i,e.swal=i)}}}))},65:function(e,t,n){"use strict";n.d(t,{MT:function(){return ee},nv:function(){return ae},Se:function(){return ie},OI:function(){return oe},rn:function(){return re}});n(1703),n(6699);var r=n(3396),o=n(4870);function i(){return a().__VUE_DEVTOOLS_GLOBAL_HOOK__}function a(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const s="function"===typeof Proxy,l="devtools-plugin:setup",u="plugin:settings:set";let c,d;function h(){var e;return void 0!==c||("undefined"!==typeof window&&window.performance?(c=!0,d=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(c=!0,d=n.g.perf_hooks.performance):c=!1),c}function f(){return h()?d.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const t=e.settings[a];n[a]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(i){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}o=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function v(e,t){const n=e,r=a(),o=i(),u=s&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,o):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else o.emit(l,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var m="store";function g(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function _(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function k(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;x(e,n,[],e._modules.root,!0),S(e,n,t)}function S(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,a={};g(i,(function(t,n){a[n]=w(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=(0,o.qj)({data:t}),e.strict&&O(e),r&&n&&e._withCommit((function(){r.data=null}))}function x(e,t,n,r,o){var i=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!i&&!o){var s=F(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){s[l]=r.state}))}var u=r.context=C(e,a,n);r.forEachMutation((function(t,n){var r=a+n;E(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:a+n,o=t.handler||t;A(e,r,o,u)})),r.forEachGetter((function(t,n){var r=a+n;I(e,r,t,u)})),r.forEachChild((function(r,i){x(e,t,n.concat(i),r,o)}))}function C(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=M(n,r,o),a=i.payload,s=i.options,l=i.type;return s&&s.root||(l=t+l),e.dispatch(l,a)},commit:r?e.commit:function(n,r,o){var i=M(n,r,o),a=i.payload,s=i.options,l=i.type;s&&s.root||(l=t+l),e.commit(l,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return T(e,t)}},state:{get:function(){return F(e.state,n)}}}),o}function T(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function E(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function A(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return b(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function I(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function O(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function F(e,t){return t.reduce((function(e,t){return e[t]}),e)}function M(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var D="vuex bindings",P="vuex:mutations",q="vuex:actions",R="vuex",N=0;function L(e,t){v({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:V}),n.addTimelineLayer({id:q,label:"Vuex Actions",color:V}),n.addInspector({id:R,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===R)if(n.filter){var r=[];U(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[H(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===R){var r=n.nodeId;T(t,r),n.state=Y(Q(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===R){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),t._withCommit((function(){n.set(t._state.data,o,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(R),n.sendInspectorState(R),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=N++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:q,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},o=Date.now()-e._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:q,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var V=8702998,$=6710886,B=16777215,j={label:"namespaced",textColor:B,backgroundColor:$};function z(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function H(e,t){return{id:t||"root",label:z(t),tags:e.namespaced?[j]:[],children:Object.keys(e._children).map((function(n){return H(e._children[n],t+n+"/")}))}}function U(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[j]:[]}),Object.keys(t._children).forEach((function(o){U(e,t._children[o],n,r+o+"/")}))}function Y(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=W(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?z(e):e,editable:!1,value:K((function(){return i[e]}))}}))}return o}function W(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=K((function(){return e[n]}))}else t[n]=K((function(){return e[n]}))})),t}function Q(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,o){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return o===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function K(e){try{return e()}catch(t){return t}}var G=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},G.prototype.addChild=function(e,t){this._children[e]=t},G.prototype.removeChild=function(e){delete this._children[e]},G.prototype.getChild=function(e){return this._children[e]},G.prototype.hasChild=function(e){return e in this._children},G.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},G.prototype.forEachChild=function(e){g(this._children,e)},G.prototype.forEachGetter=function(e){this._rawModule.getters&&g(this._rawModule.getters,e)},G.prototype.forEachAction=function(e){this._rawModule.actions&&g(this._rawModule.actions,e)},G.prototype.forEachMutation=function(e){this._rawModule.mutations&&g(this._rawModule.mutations,e)},Object.defineProperties(G.prototype,J);var X=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Z(e.concat(r),t.getChild(r),n.modules[r])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},X.prototype.update=function(e){Z([],this.root,e)},X.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var o=new G(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&g(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var i=this,a=this,s=a.dispatch,l=a.commit;this.dispatch=function(e,t){return s.call(i,e,t)},this.commit=function(e,t,n){return l.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;x(this,u,[],this._modules.root),S(this,u),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&L(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,o=M(e,t,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(e){e(a)}))})),this._subscribers.slice().forEach((function(e){return e(s,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=M(e,t),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(a,n.state)}))}catch(u){0}var l=s.length>1?Promise.all(s.map((function(e){return e(i)}))):s[0](i);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(a,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(a,n.state,e)}))}catch(u){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return _(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var o=this;return(0,r.YP)((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),x(this,this.state,e,this._modules.get(e),n.preserveState),S(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=F(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),k(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),k(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);var re=ue((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ce(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),oe=ue((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ce(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),ie=ue((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||ce(this.$store,"mapGetters",e))return this.$store.getters[o]},n[r].vuex=!0})),n})),ae=ue((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ce(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function se(e){return le(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function le(e){return Array.isArray(e)||y(e)}function ue(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ce(e,t,n){var r=e._modulesNamespaceMap[n];return r}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ve},qX:function(){return de},Xd:function(){return ce},Mq:function(){return ge},ZF:function(){return me},KN:function(){return ye}});var r=n(7142),o=n(5168),i=n(223);n(6699),n(2801);const a=(e,t)=>t.some((t=>e instanceof t));let s,l;function u(){return s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(k(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(S(this),t),k(d.get(this))}:function(...t){return k(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return f.set(r,t.sort?t.sort():[t]),k(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),a(e,u())?new Proxy(e,y):e)}function k(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const S=e=>v.get(e);function x(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=k(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(k(a.result),e.oldVersion,e.newVersion,k(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const C=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],E=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!C.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return E.set(t,i),i}b((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const F="@firebase/app",M="0.7.33",D=new o.Yd("@firebase/app"),P="@firebase/app-compat",q="@firebase/analytics-compat",R="@firebase/analytics",N="@firebase/app-check-compat",L="@firebase/app-check",V="@firebase/auth",$="@firebase/auth-compat",B="@firebase/database",j="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",U="@firebase/installations",Y="@firebase/installations-compat",W="@firebase/messaging",Q="@firebase/messaging-compat",K="@firebase/performance",G="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.10.0",ie="[DEFAULT]",ae={[F]:"fire-core",[P]:"fire-core-compat",[R]:"fire-analytics",[q]:"fire-analytics-compat",[L]:"fire-app-check",[N]:"fire-app-check-compat",[V]:"fire-auth",[$]:"fire-auth-compat",[B]:"fire-rtdb",[j]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[U]:"fire-iid",[Y]:"fire-iid-compat",[W]:"fire-fcm",[Q]:"fire-fcm-compat",[K]:"fire-perf",[G]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},se=new Map,le=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e){const t=e.name;if(le.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of se.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new i.LL("app","Firebase",he);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=oe;function me(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});const a=se.get(o);if(a){if((0,i.vZ)(e,a.options)&&(0,i.vZ)(n,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const s=new r.H0(o);for(const r of le.values())s.addComponent(r);const l=new pe(e,n,s);return se.set(o,l),l}function ge(e=ie){const t=se.get(e);if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=ae[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}ce(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",we=1,_e="firebase-heartbeat-store";let ke=null;function Se(){return ke||(ke=x(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),ke}async function xe(e){var t;try{const t=await Se();return t.transaction(_e).objectStore(_e).get(Te(e))}catch(n){if(n instanceof i.ZR)D.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ce(e,t){var n;try{const n=await Se(),r=n.transaction(_e,"readwrite"),o=r.objectStore(_e);return await o.put(t,Te(e)),r.done}catch(r){if(r instanceof i.ZR)D.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});D.warn(e.message)}}}function Te(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=1024,Ae=2592e6;class Ie{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Oe(),{heartbeatsToSend:t,unsentEntries:n}=Fe(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function Fe(e,t=Ee){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await xe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){ce(new r.wA("platform-logger",(e=>new I(e)),"PRIVATE")),ce(new r.wA("heartbeat",(e=>new Ie(e)),"PRIVATE")),ye(F,M,e),ye(F,M,"esm2017"),ye("fire-js","")}Pe("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return o}});n(1703);var r=n(223);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return o}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,s={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=s[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},7935:function(e){"use strict";e.exports=JSON.parse('{"code":"ru","messages":{"alpha":"Поле {field} может содержать только буквы","alpha_dash":"Поле {field} может содержать только буквы, цифры и дефис","alpha_num":"Поле {field} может содержать только буквы и цифры","alpha_spaces":"Поле {field} может содержать только буквы и пробелы","between":"Поле {field} должно быть между 0:{min} и 1:{max}","confirmed":"Поле {field} не совпадает Подтверждение","digits":"Поле {field} должно быть числовым и точно содержать 0:{length} цифры","dimensions":"Поле {field} должно быть 0:{width} пикселей на 1:{height} пикселей","email":"Поле {field} должно быть действительным электронным адресом","excluded":"Поле {field} должно быть допустимым значением","ext":"Поле {field} должно быть действительным файлом. ({args})","image":"Поле {field} должно быть изображением","one_of":"Поле {field} должно быть допустимым значением","integer":"Поле {field} должно быть целым числом","length":"Длина поля {field} должна быть 0:{length}","max":"Поле {field} не может быть более 0:{length} символов","max_value":"Поле {field} должно быть 0:{max} или менее","mimes":"Поле {field} должно иметь допустимый тип файла. ({args})","min":"Поле {field} должно быть не менее 0:{length} символов","min_value":"Поле {field} должно быть 0:{min} или больше","numeric":"Поле {field} должно быть числом","regex":"Поле {field} имеет ошибочный формат","required":"Поле {field} обязательно для заполнения","required_if":"Поле {field} обязательно для заполнения","size":"Поле {field} должно быть меньше, чем 0:{size}KB"}}')}}]);
//# sourceMappingURL=chunk-vendors.167168e3.js.map