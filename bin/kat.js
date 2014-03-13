/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.2.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.2",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+xt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function pt(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function ft(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",ft,"#"===e.firstChild.getAttribute("href")),ct(R,pt,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),p=bt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[bt(wt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}f.push(n)}return wt(f)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=Tt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,p,f=vt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");
try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);




/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * This file is used together with InternalFooter.js to enclose the files on deployment
 * in a function to limit the scope of the variables in this library
 */

(function(){
  "use strict";
/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * Defines a set of constants that can be used across the library
 */

//Where should FlancheJs be deployed?
var MAIN_NAMESPACE = window;

//Log levels for the logger
var LOG_LEVEL = {
  all    : 0,
  debug  : 1,
  info   : 2,
  warning: 3,
  none   : 4
};
/**
 * Keeps track of all the configurations that can be done for the library
 * @constructor
 */
var ConfigManager = {
  //The path to where the scripts that can be loaded by the importer reside
  //If not set (=null), it will try to guess.
  applicationPath         : null,
  //Identifier to be placed at the beginning of a property
  propertyIdentifier      : "$",
  //Identifier to be placed at the beginning of a private field
  internalIdentifier      : "_",
  //Identifier to be placed at the beginning of a getter function
  getIdentifier           : "get",
  //Identifier to be placed at the beginning of a setter function
  setIdentifier           : "set",
  //Classes for static objects will start with this
  objectInternalIdentifier: "___",
  //The keyword to mark a meta action executed before the original method
  beforeKeyword           : "before",
  //The keyword to mark a meta action executed after the original method
  afterKeyword            : "after",
  //The log level, each smaller level contains all the messages of the higher levels.
  logLevel                : LOG_LEVEL.debug,
  //the specs object that describes your class structure
  specs                   : null
};

ConfigManager.setApplicationPath = function (appPath) {
  this.applicationPath = appPath;
};

ConfigManager.getApplicationPath = function () {
  if (this.applicationPath === null) {
    var scripts = window.document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute("src").search("FlancheJs") != -1) {
        this.applicationPath = scripts[i].getAttribute("src").split("FlancheJs")[0];
      }
    }
    Util.log("No application path found, guessing: " + this.applicationPath + ". You can change it using FlancheJs.config.setApplicationPath().", LOG_LEVEL.warning);
  }
  return this.applicationPath;
};

ConfigManager.setPropertyIdentifier = function (propIdent) {
  this.propertyIdentifier = propIdent;
};

ConfigManager.getPropertyIdentifier = function () {
  return this.propertyIdentifier;
};

ConfigManager.setInternalIdentifier = function (internalIdentifier) {
  this.internalIdentifier = internalIdentifier;
};

ConfigManager.getInternalIdentifier = function () {
  return this.internalIdentifier;
};

ConfigManager.setGetIdentifier = function (getIdentifier) {
  this.getIdentifier = getIdentifier;
};

ConfigManager.getGetIdentifier = function () {
  return this.getIdentifier;
};

ConfigManager.setSetIdentifier = function (setIdentifier) {
  this.setIdentifier = setIdentifier;
};

ConfigManager.getSetIdentifier = function () {
  return this.setIdentifier;
};

ConfigManager.setObjectInternalIdentifier = function (objectInternalIdentifier) {
  this.objectInternalIdentifier = objectInternalIdentifier;
};

ConfigManager.getObjectInternalIdentifier = function () {
  return this.objectInternalIdentifier;
};

ConfigManager.setLogLevel = function (logLevel) {
  this.logLevel = logLevel;
};

ConfigManager.getLogLevel = function () {
  return this.logLevel;
};

ConfigManager.setSpecs = function (specs) {
  this.specs = specs;
};

ConfigManager.getSpecs = function () {
  return this.specs;
};/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * @description Defines a new Exception type in order to make it easier for clients to catch library exceptions
 * @constructor
 * @param {String} message the error message
 * @extends Error
 */

function FlancheJsException(message){
  this.message = message;
}
FlancheJsException.prototype.valueOf = FlancheJsException.prototype.toString = function () {
  return  this.name + ": " + this.message;
};

function BuildException(){
  FlancheJsException.apply(this, arguments);
}
BuildException.prototype = new FlancheJsException();
BuildException.prototype.constructor = BuildException;
BuildException.prototype.name = "BuildException";

function ImportException(message){
  FlancheJsException.apply(this, arguments);
}
ImportException.prototype = new FlancheJsException();
ImportException.prototype.constructor = ImportException;
ImportException.prototype.name = "ImportException";
/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * @description Utility functions for the library
 */
var Util = {
  /**
   * Adapted from: http://davidwalsh.name/javascript-clone
   * Performs a deep clone on the given object and returns the clone.
   * WARNING: This is a potential source of bugs as some object types might not be cloned properly
   *
   * @param {Object} src the object to be cloned
   * @return {Object}
   */
  clone: function(src){
    function mixin(dest, source, copyFunc){
      var name, s, i, empty = {};
      for(name in source){
        // the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
        // inherited from Object.prototype.   For example, if dest has a custom toString() method,
        // don't overwrite it with the toString() method that source inherited from Object.prototype
        s = source[name];
        if(!(name in dest) || (dest[name] !== s && (!(name in empty) || empty[name] !== s))){
          dest[name] = copyFunc ? copyFunc(s) : s;
        }
      }
      return dest;
    }

    if(!src || typeof src != "object" || Object.prototype.toString.call(src) === "[object Function]"){
      // null, undefined, any non-object, or function
      return src;  // anything
    }
    if(src.nodeType && "cloneNode" in src){
      // DOM Node
      return src.cloneNode(true); // Node
    }
    if(src instanceof Date){
      return new Date(src.getTime());  // Date
    }
    if(src instanceof RegExp){
      return new RegExp(src);
    }
    var r, i, l;
    if(src instanceof Array){
      // array
      r = [];
      for(i = 0, l = src.length; i < l; ++i){
        if(i in src){
          r.push(Util.clone(src[i]));
        }
      }
    } else{
      // generic objects
      r = src.constructor ? new src.constructor() : {};
    }
    return mixin(r, src, Util.clone);
  },

  /**
   * Determines if the variable exists by comparing it to undefined and null
   * @param {Object} variable any variable
   * @return {Boolean} true / false
   */
  exists: function(variable){
    if(variable === null || variable === undefined){
      return false;
    }
    return true;
  },

  /**
   * Merges the two given objects. The rules are the following:
   *  - obj1 is cloned, so no modification will be done upon it
   *  - if both obj1 and obj2 share a property name the more specific one is chosen (i.e. the hasOwnProperty(prop) == true)
   *  - if both obj1.prop and obj2.prop have the same specificity:
   *    - if forceOverride is set to true, obj2.prop is chosen
   *    - else obj1.prop is chosen
   * @return {Object} the merged object
   */
  merge: function(obj1, obj2, forceOverride){
    var newObj = null;
    if(!Util.exists(obj1)){
      newObj = Util.clone(obj2);
    }
    else if(!Util.exists(obj2)){
      newObj = Util.clone(obj1);
    }
    else{
      newObj = Util.clone(obj1);
      for(var index in obj2){
        if(newObj[index] === undefined){
          newObj[index] = Util.clone(obj2[index]);
        }
        else{
          if(!newObj.hasOwnProperty(index) && obj2.hasOwnProperty(index)){
            newObj[index] = obj2[index];
          }
          else if((newObj.hasOwnProperty(index) && obj2.hasOwnProperty(index)) ||
            (!newObj.hasOwnProperty(index) && !obj2.hasOwnProperty(index))){
            if(forceOverride){
              newObj[index] = Util.clone(obj2[index]);
            }
          }
        }
      }
    }
    return newObj;
  },

  /**
   * Empty function to be used as a default for inputs where a function is required
   */
  emptyFunction: function(){
  },

  /**
   * Replaces the first letter of the string to the upper case version of it
   * @param {String} string the string to which to apply
   * @return {String} the processed string
   */
  capitalizeFirstLetter: function(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Checks if the given namespace exists and creates it otherwise
   * @param {String} namespace the namespace name
   * @return {Object} a reference to the created namespace
   */
  createNamespace: function(namespace){
    var parts = namespace.split(".");
    var current = Util.getMainNamespace();
    if(parts.length > 0){
      for(var i = 0; i < parts.length; i++){
        var part = parts[i];
        if(!Util.exists(current[part])){
          current[part] = {};
        }
        current = current[part];
      }
    }
    return current;
  },

  /**
   * Returns the main namespace where objects are deployed (i.e. window for browser, exports for node.js)
   * @return {Object}
   */
  getMainNamespace: function(){
    return MAIN_NAMESPACE;
  },

  /**
   * Returns the index of the value in the given array
   * Adapated from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
   * @param  {Array} array the array to search in
   * @param  {Object} searchElement the element to search for
   * @return {Number} the index of the element
   */
  indexOf: function(array, searchElement /*, fromIndex */){
    "use strict";
    if(array == null){
      throw new TypeError();
    }
    var t = Object(array);
    var len = t.length >>> 0;
    if(len === 0){
      return -1;
    }
    var n = 0;
    if(arguments.length > 1){
      n = Number(arguments[1]);
      if(n != n){ // shortcut for verifying if it's NaN
        n = 0;
      } else if(n != 0 && n != Infinity && n != -Infinity){
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    if(n >= len){
      return -1;
    }
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for(; k < len; k++){
      if(k in t && t[k] === searchElement){
        return k;
      }
    }
    return -1;
  },

  /**
   * Logs a message to the console
   * @param {String} message the message to be sent
   * @param {Number} logLevel the importance level of the message (must be from LOG_LEVEL)
   */
  log: function(message, logLevel){
    if(!console){
      return;
    }
    var currentLogLevel = ConfigManager.getLogLevel();
    if(logLevel >= currentLogLevel){
      if(logLevel == LOG_LEVEL.warning){
        console.warn("[FJs]# " + message);
      }
      else{
        console.log("[FJs]# " + message);
      }
    }
  }


};

/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * Class for defining specification objects for javascript files created with
 * this framework
 * @param {String} objectName the name of the object for which the spec is written (e.g. class name)
 * @param {String} filePath the path to the file relative to ConfigManager.getApplicationPath
 * @param {Array} dependencies a list of specs that the file is dependent on
 * @constructor
 */
function Spec(objectName, filePath, dependencies){
  this.objectName = objectName;
  this.filePath = filePath;
  this.dependencies = dependencies || [];
}

/**
 * Adds a new dependency
 * @param {String} dependency the object name as listed in your specs object
 */
Spec.prototype.addDependency = function(dependency){
  this.dependencies.push(dependency);
};

/**
 * Removes a dependency from the list
 * @param {String} dependency the object name as listed in your specs object
 */
Spec.prototype.removeDependency = function(dependency){
  var remIndex = Util.indexOf(this.dependencies, dependency);
  this.dependencies.splice(remIndex, 1);
};

Spec.prototype.getDependencies = function(){
  return this.dependencies;
};

Spec.prototype.getObjectName = function(){
  return this.objectName;
};

Spec.prototype.getFilePath = function(){
  return this.filePath;
};
/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * Packaging system for retrieving the files in which the classes are stored
 * @param specs a hash of type {objectName : objectSpec}
 * @constructor
 */

function Importer(specs){
  if(!specs){
    throw new ImportException("No specs object could be found. Maybe you forgot to add it via FlancheJs.getConfig().setSpecs()");
  }
  this.specs = specs;
  this.collectedObjects = {};
}

Importer.prototype.import = function (objectName, callback, context) {
  this.collectFiles(objectName);
  this.importCollectedObjects(callback, context);
  this.collectedObjects = {};
};

Importer.prototype.collectFiles = function (objectName) {
  if (!Util.exists(this.collectedObjects[objectName])) {
    if (!Util.exists(this.specs[objectName])) {
      throw new ImportException("Could not find a suitable spec object for " + objectName + ". Make sure it is included in FlancheJs.config.getSpecs();");
    }
    var spec = this.specs[objectName];
    var deps = spec.getDependencies();
    for (var i = 0; i < deps.length; i++) {
      this.collectFiles(deps[i]);
    }
    this.collectedObjects[objectName] = objectName;
  }
};

Importer.prototype.importCollectedObjects = function(callback, context){
  var paths = [];
  for(var objectName in this.collectedObjects){
    if(this.collectedObjects.hasOwnProperty(objectName)){
      if(!Util.exists(this.specs[objectName])){
        throw new ImportException("No object name *" + objectName + "* found in the specs.");
      }
      var pathToFile = ConfigManager.getApplicationPath() + this.specs[objectName].getFilePath();
      paths.push(pathToFile);
    }
  }
  var realContext = Util.exists(context) ? context : window;
  this.loadScripts.js(paths, callback, null, realContext);
};/*jslint browser: true, eqeqeq: true, bitwise: true, newcap: true, immed: true, regexp: false */

/**
 LazyLoad makes it easy and painless to lazily load one or more external
 JavaScript or CSS files on demand either during or after the rendering of a web
 page.

 Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
 Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
 are not officially supported.

 Visit https://github.com/rgrove/lazyload/ for more info.

 Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
 All rights reserved.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the 'Software'), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @module lazyload
 @class LazyLoad
 @static
 @version 2.0.3 (git)
 */

Importer.prototype.loadScripts = (function(doc){
  // -- Private Variables ------------------------------------------------------

  // User agent and feature test information.
  var env,

  // Reference to the <head> element (populated lazily).
    head,

  // Requests currently in progress, if any.
    pending = {},

  // Number of times we've polled to check whether a pending stylesheet has
  // finished loading. If this gets too high, we're probably stalled.
    pollCount = 0,

  // Queued requests.
    queue = {css: [], js: []},

  // Reference to the browser's list of stylesheets.
    styleSheets = doc.styleSheets;

  // -- Private Methods --------------------------------------------------------

  /**
   Creates and returns an HTML element with the specified name and attributes.

   @method createNode
   @param {String} name element name
   @param {Object} attrs name/value mapping of element attributes
   @return {HTMLElement}
   @private
   */
  function createNode(name, attrs){
    var node = doc.createElement(name), attr;

    for(attr in attrs){
      if(attrs.hasOwnProperty(attr)){
        node.setAttribute(attr, attrs[attr]);
      }
    }

    return node;
  }

  /**
   Called when the current pending resource of the specified type has finished
   loading. Executes the associated callback (if any) and loads the next
   resource in the queue.

   @method finish
   @param {String} type resource type ('css' or 'js')
   @private
   */
  function finish(type){
    var p = pending[type],
      callback,
      urls;

    if(p){
      callback = p.callback;
      urls = p.urls;

      urls.shift();
      pollCount = 0;

      // If this is the last of the pending URLs, execute the callback and
      // start the next request in the queue (if any).
      if(!urls.length){
        callback && callback.call(p.context, p.obj);
        pending[type] = null;
        queue[type].length && load(type);
      }
    }
  }

  /**
   Populates the <code>env</code> variable with user agent and feature test
   information.

   @method getEnv
   @private
   */
  function getEnv(){
    var ua = navigator.userAgent;

    env = {
      // True if this browser supports disabling async mode on dynamically
      // created script nodes. See
      // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
      async: doc.createElement('script').async === true
    };

    (env.webkit = /AppleWebKit\//.test(ua))
      || (env.ie = /MSIE/.test(ua))
      || (env.opera = /Opera/.test(ua))
      || (env.gecko = /Gecko\//.test(ua))
    || (env.unknown = true);
  }

  /**
   Loads the specified resources, or the next resource of the specified type
   in the queue if no resources are specified. If a resource of the specified
   type is already being loaded, the new request will be queued until the
   first request has been finished.

   When an array of resource URLs is specified, those URLs will be loaded in
   parallel if it is possible to do so while preserving execution order. All
   browsers support parallel loading of CSS, but only Firefox and Opera
   support parallel loading of scripts. In other browsers, scripts will be
   queued and loaded one at a time to ensure correct execution order.

   @method load
   @param {String} type resource type ('css' or 'js')
   @param {String|Array} urls (optional) URL or array of URLs to load
   @param {Function} callback (optional) callback function to execute when the
   resource is loaded
   @param {Object} obj (optional) object to pass to the callback function
   @param {Object} context (optional) if provided, the callback function will
   be executed in this object's context
   @private
   */
  function load(type, urls, callback, obj, context){
    var _finish = function(){
        finish(type);
      },
      isCSS = type === 'css',
      nodes = [],
      i, len, node, p, pendingUrls, url;

    env || getEnv();

    if(urls){
      // If urls is a string, wrap it in an array. Otherwise assume it's an
      // array and create a copy of it so modifications won't be made to the
      // original.
      urls = typeof urls === 'string' ? [urls] : urls.concat();

      // Create a request object for each URL. If multiple URLs are specified,
      // the callback will only be executed after all URLs have been loaded.
      //
      // Sadly, Firefox and Opera are the only browsers capable of loading
      // scripts in parallel while preserving execution order. In all other
      // browsers, scripts must be loaded sequentially.
      //
      // All browsers respect CSS specificity based on the order of the link
      // elements in the DOM, regardless of the order in which the stylesheets
      // are actually downloaded.
      if(isCSS || env.async || env.gecko || env.opera){
        // Load in parallel.
        queue[type].push({
          urls    : urls,
          callback: callback,
          obj     : obj,
          context : context
        });
      } else{
        // Load sequentially.
        for(i = 0, len = urls.length; i < len; ++i){
          queue[type].push({
            urls    : [urls[i]],
            callback: i === len - 1 ? callback : null, // callback is only added to the last URL
            obj     : obj,
            context : context
          });
        }
      }
    }

    // If a previous load request of this type is currently in progress, we'll
    // wait our turn. Otherwise, grab the next item in the queue.
    if(pending[type] || !(p = pending[type] = queue[type].shift())){
      return;
    }

    head || (head = doc.head || doc.getElementsByTagName('head')[0]);
    pendingUrls = p.urls;

    for(i = 0, len = pendingUrls.length; i < len; ++i){
      url = pendingUrls[i];

      if(isCSS){
        node = env.gecko ? createNode('style') : createNode('link', {
          href: url,
          rel : 'stylesheet'
        });
      } else{
        node = createNode('script', {src: url});
        node.async = false;
      }

      node.className = 'lazyload';
      node.setAttribute('charset', 'utf-8');

      if(env.ie && !isCSS){
        node.onreadystatechange = function(){
          if(/loaded|complete/.test(node.readyState)){
            node.onreadystatechange = null;
            _finish();
          }
          else{
            throw new ImportException("Failed to import the requested file ( " + (node.src) ? node.src : node.href + " ).");
          }
        };
      } else if(isCSS && (env.gecko || env.webkit)){
        // Gecko and WebKit don't support the onload event on link nodes.
        if(env.webkit){
          // In WebKit, we can poll for changes to document.styleSheets to
          // figure out when stylesheets have loaded.
          p.urls[i] = node.href; // resolve relative URLs (or polling won't work)
          pollWebKit();
        } else{
          // In Gecko, we can import the requested URL into a <style> node and
          // poll for the existence of node.sheet.cssRules. Props to Zach
          // Leatherman for calling my attention to this technique.
          node.innerHTML = '@import "' + url + '";';
          pollGecko(node);
        }
      } else{
        node.onload = node.onerror = _finish;
      }

      nodes.push(node);
    }

    for(i = 0, len = nodes.length; i < len; ++i){
      head.appendChild(nodes[i]);
    }
  }

  /**
   Begins polling to determine when the specified stylesheet has finished loading
   in Gecko. Polling stops when all pending stylesheets have loaded or after 10
   seconds (to prevent stalls).

   Thanks to Zach Leatherman for calling my attention to the @import-based
   cross-domain technique used here, and to Oleg Slobodskoi for an earlier
   same-domain implementation. See Zach's blog for more details:
   http://www.zachleat.com/web/2010/07/29/load-css-dynamically/

   @method pollGecko
   @param {HTMLElement} node Style node to poll.
   @private
   */
  function pollGecko(node){
    var hasRules;

    try{
      // We don't really need to store this value or ever refer to it again, but
      // if we don't store it, Closure Compiler assumes the code is useless and
      // removes it.
      hasRules = !!node.sheet.cssRules;
    } catch(ex){
      // An exception means the stylesheet is still loading.
      pollCount += 1;

      if(pollCount < 200){
        setTimeout(function(){
          pollGecko(node);
        }, 50);
      } else{
        // We've been polling for 10 seconds and nothing's happened. Stop
        // polling and finish the pending requests to avoid blocking further
        // requests.
        hasRules && finish('css');
      }

      return;
    }

    // If we get here, the stylesheet has loaded.
    finish('css');
  }

  /**
   Begins polling to determine when pending stylesheets have finished loading
   in WebKit. Polling stops when all pending stylesheets have loaded or after 10
   seconds (to prevent stalls).

   @method pollWebKit
   @private
   */
  function pollWebKit(){
    var css = pending.css, i;

    if(css){
      i = styleSheets.length;

      // Look for a stylesheet matching the pending URL.
      while(--i >= 0){
        if(styleSheets[i].href === css.urls[0]){
          finish('css');
          break;
        }
      }

      pollCount += 1;

      if(css){
        if(pollCount < 200){
          setTimeout(pollWebKit, 50);
        } else{
          // We've been polling for 10 seconds and nothing's happened, which may
          // indicate that the stylesheet has been removed from the document
          // before it had a chance to load. Stop polling and finish the pending
          // request to prevent blocking further requests.
          finish('css');
        }
      }
    }
  }

  return {

    /**
     Requests the specified CSS URL or URLs and executes the specified
     callback (if any) when they have finished loading. If an array of URLs is
     specified, the stylesheets will be loaded in parallel and the callback
     will be executed after all stylesheets have finished loading.

     @method css
     @param {String|Array} urls CSS URL or array of CSS URLs to load
     @param {Function} callback (optional) callback function to execute when
     the specified stylesheets are loaded
     @param {Object} obj (optional) object to pass to the callback function
     @param {Object} context (optional) if provided, the callback function
     will be executed in this object's context
     @static
     */
    css: function(urls, callback, obj, context){
      load('css', urls, callback, obj, context);
    },

    /**
     Requests the specified JavaScript URL or URLs and executes the specified
     callback (if any) when they have finished loading. If an array of URLs is
     specified and the browser supports it, the scripts will be loaded in
     parallel and the callback will be executed after all scripts have
     finished loading.

     Currently, only Firefox and Opera support parallel loading of scripts while
     preserving execution order. In other browsers, scripts will be
     queued and loaded one at a time to ensure correct execution order.

     @method js
     @param {String|Array} urls JS URL or array of JS URLs to load
     @param {Function} callback (optional) callback function to execute when
     the specified scripts are loaded
     @param {Object} obj (optional) object to pass to the callback function
     @param {Object} context (optional) if provided, the callback function
     will be executed in this object's context
     @static
     */
    js: function(urls, callback, obj, context){
      load('js', urls, callback, obj, context);
    }

  };
})(window.document);/**
 * @description Simple object type to keep track the class metadata
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 * @constructor
 * @param {String} className the full name including the namespace
 * @param {Function} init the constructor of the class
 * @param {Object} extendedClass the class that is extended or null
 * @param {Array} traits an array of traits to implement or null
 * @param {Object} properties a map of properties to be defined or null
 * @param {Object} methods a map of the methods to be defined or null
 * @param {Object} internals a map of private variables to be defined or null
 * @param {Object} statics a map of properties to be preserved across the class
 * @param {Object} meta a map of actions to be executed in special cases (e.g. before an accessor for a property is
 * called)
 */
function ClassMetadata(className, init, extendedClass, traits, properties, methods, internals, statics, meta){
  this.className = className;
  this.init = init || Util.emptyFunction();
  this.extendedClass = extendedClass;
  this.traits = traits || [];
  this.properties = properties || {};
  this.methods = methods || {};
  this.internals = internals || {};
  this.statics = statics || {};
  this.meta = meta || {};
  this.buildFinalDefinition();
}

/**
 * This function merges all the definitions from the extended class and from the traits
 * into the class metadata.
 */
ClassMetadata.prototype.buildFinalDefinition = function(){
  if(Util.exists(this.extendedClass)){
    this.properties = Util.merge(this.properties, this.extendedClass.prototype.__meta__.properties);
    //this.methods = Util.merge(this.methods, this.extendedClass.__meta__.methods);
    this.internals = Util.merge(this.internals, this.extendedClass.prototype.__meta__.internals);
    this.statics = Util.merge(this.statics, this.extendedClass.prototype.__meta__.statics);
  }
  for(var i = 0; i < this.traits.length; i++){
    this.checkTraitNeeds(this.traits[i]);
    this.properties = Util.merge(this.properties, this.traits[i].properties);
    this.methods = Util.merge(this.methods, this.traits[i].methods);
    this.internals = Util.merge(this.internals, this.traits[i].internals);
    this.statics = Util.merge(this.statics, this.traits[i].statics);
  }
};

/**
 * Checks if the needs of the trait are fulfilled.
 * @param trait
 */
ClassMetadata.prototype.checkTraitNeeds = function(trait){
  for(var index in trait.needs){
    var isInMethod = this.methods[index] !== undefined && this.methods[index] instanceof trait.needs[index];
    var isInInternals = this.internals[index] !== undefined && this.internals[index] instanceof trait.needs[index];
    var isInProperties = this.properties[index] !== undefined && this.properties[index] instanceof trait.needs[index];
    if(!isInMethod && !isInInternals && !isInProperties){
      throw new BuildException("The trait that you're trying to implement requires that your class contain " +
        index.toString() + " of type " + trait.needs[index].toString()
      );
    }
  }
};

/**
 * @description Allows creation of classes based on the metadata supplied
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 * @constructor
 * @param {ClassMetadata} classMetadata the class metadata supplied
 */
function ClassMaker(classMetadata) {
  this.constrClass = null;
  this.classMetadata = classMetadata;
}

/**
 * Creates the initial class object
 */
ClassMaker.prototype.createClass = function () {
  var parts = this.classMetadata.className.split(".");
  var className = parts.pop();
  var container = Util.createNamespace(parts.join("."));

  container[className] = function builder() {
    var properties = this.__meta__.properties;
    var internals = this.__meta__.internals;
    for (var index in properties) {
      this[ConfigManager.getPropertyIdentifier() + index] = Util.clone(properties[index].value);
    }
    for (index in internals) {
      this[ConfigManager.getInternalIdentifier() + index] = Util.clone(internals[index]);
    }
    this.__meta__.init.apply(this, arguments);
  };

  this.constrClass = container[className];
};


/**
 * Builds the prototype for the new class based on the existing class
 * if so
 */
ClassMaker.prototype.buildPrototype = function () {
  if (Util.exists(this.classMetadata.extendedClass)) {
    this.constrClass.prototype = new this.classMetadata.extendedClass();
    this.constrClass.prototype.constructor = this.constrClass;

    this.constrClass.prototype.callParent = function () {
      this.__meta__.extendedClass.apply(this, arguments);
    };
  }
};

/**
 * Adds the metadata to the class prototype
 */
ClassMaker.prototype.buildClassMeta = function () {
  this.constrClass.prototype.__meta__ = this.classMetadata;
};

/**
 * Adds the properties to the class prototype and generates setters and
 * getters for each based on their readability / writability
 */
ClassMaker.prototype.buildProperties = function () {
  for (var index in this.classMetadata.properties) {
    var property = this.classMetadata.properties[index];
    this.constrClass.prototype[ConfigManager.getPropertyIdentifier() + index] = property.value;
    if (property.readable !== false) {
      var getter = this.getPropertyAccessor(index, property, "get");
      this.constrClass.prototype[ConfigManager.getGetIdentifier() + Util.capitalizeFirstLetter(index)] = getter;
    }
    if (property.writable !== false) {
      var setter = this.getPropertyAccessor(index, property, "set");
      this.constrClass.prototype[ConfigManager.getSetIdentifier() + Util.capitalizeFirstLetter(index)] = setter;
    }
  }
};

/**
 *
 * @param {String} propertyName the property name
 * @param {Object} property the actual property, containing any user supplied getter or setter
 * @param {String} accessorType either get or set
 * @return {Function} the accessor function
 */
ClassMaker.prototype.getPropertyAccessor = function (propertyName, property, accessorType) {
  var preAccessor = Util.exists(property[accessorType]) ? property[accessorType] : null;
  if(preAccessor === null && accessorType === "get"){
    preAccessor = function () {
      return this[ConfigManager.getPropertyIdentifier() + propertyName];
    };
  }
  else if(preAccessor === null && accessorType === "set"){
    preAccessor = function (value) {
      this[ConfigManager.getPropertyIdentifier() + propertyName] = value;
    };
  }
  var accessor,
    beforeAccessor = this.classMetadata.meta["after" + Util.capitalizeFirstLetter(accessorType)],
    afterAccessor = this.classMetadata.meta["before" + Util.capitalizeFirstLetter(accessorType)],
    hasBeforeAccessor = Util.exists(beforeAccessor),
    hasAfterAccessor = Util.exists(afterAccessor);

  if (!hasBeforeAccessor && !hasAfterAccessor) {
    accessor = preAccessor;
  }
  else if (hasBeforeAccessor && !hasAfterAccessor) {
    accessor = function () {
      beforeAccessor.apply(this, arguments);
      preAccessor.apply(this, arguments);
    }
  }
  else if (!hasBeforeAccessor && hasAfterAccessor) {
    accessor = function (value) {
      preAccessor.apply(this, arguments);
      afterAccessor.apply(this, arguments);
    }
  }
  else {
    accessor = function (value) {
      beforeAccessor.apply(this, arguments);
      preAccessor.apply(this, arguments);
      afterAccessor.apply(this, arguments);
    }
  }
  return accessor;
};

/**
 * Adds the methods to the class prototype
 */
ClassMaker.prototype.buildMethods = function () {
  for (var index in this.classMetadata.methods) {
    this.constrClass.prototype[index] = this.classMetadata.methods[index];
  }
};

/**
 * Adds the private members (internals) to the class prototype
 */
ClassMaker.prototype.buildInternals = function () {
  for (var index in this.classMetadata.internals) {
    this.constrClass.prototype[ConfigManager.getInternalIdentifier() + index] = this.classMetadata.internals[index];
  }
};

/**
 * Adds the static memebers to the class prototype and the class object
 */
ClassMaker.prototype.buildStatics = function () {
  for (var index in this.classMetadata.statics) {
    this.constrClass[index] = this.classMetadata.statics[index];
    this.constrClass.prototype[index] = this.classMetadata.statics[index];
  }
};

/**
 * Builds the class from the initial definition
 */
ClassMaker.prototype.buildClass = function () {
  this.createClass();
  this.buildPrototype();
  this.buildMethods();
  this.buildProperties();
  this.buildInternals();
  this.buildStatics();
  this.buildClassMeta();
};

/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * @description A traitmetadat object contains all the necesarry information to build a trait
 * @constructor
 * @param {String} traitName
 * @param {Array} traits
 * @param {Object} properties
 * @param {Object} methods
 * @param {Object} internals
 * @param {Object} statics
 * @constructor
 */
function TraitMetadata(traitName, traits, properties, methods, internals, statics){
  this.traitName = traitName;
  this.traits = traits || [];
  this.properties = properties || {};
  this.methods = methods || {};
  this.internals = internals || {};
  this.statics = statics || {};
  this.buildFinalDefinition();
}

/**
 * Transforms the initial metadata into a complete one by merging the definitions
 * of any traits that are implemented
 */
TraitMetadata.prototype.buildFinalDefinition = function(){
  if(Util.exists(this.traits)){
    for(var i = 0; i < this.traits.length; i++){
      this.properties = Util.merge(this.properties, this.traits[i].properties);
      this.methods = Util.merge(this.methods, this.traits[i].methods);
      this.internals = Util.merge(this.internals, this.traits[i].internals);
      this.statics = Util.merge(this.statics, this.traits[i].statics);
    }
  }
};

/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * @description Class for building traits that can be mixed with class definitions
 * @constructor
 * @param {TraitMetadata} traitMeta the trait definition
 */
function TraitMaker(traitMeta){
  this.traitMeta = traitMeta;
}

/**
 * Builds the trait according to the definitions given
 */
TraitMaker.prototype.buildTrait = function(){
  var parts = this.traitMeta.traitName.split(".");
  var traitName = parts.pop();
  var container = Util.createNamespace(parts.join("."));
  container[traitName] = this.traitMeta;
};


/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * @description Allows creation of objects (singletons) by creating a new class and instantiating
 * only one object.
 * @constructor
 * @param objectMeta
 */
function ObjectMaker(objectMeta){
  this.objectMeta = objectMeta;
}

/**
 * Builds the object according to the specifications
 */
ObjectMaker.prototype.buildObject = function(){
  var parts = this.objectMeta.className.split(".");
  var objectName = parts.pop();
  var container = Util.createNamespace(parts.join("."));
  this.objectMeta.className = ConfigManager.getObjectInternalIdentifier() + this.objectMeta.className;
  var classMaker = new ClassMaker(this.objectMeta);
  classMaker.buildClass();
  var current = Util.getMainNamespace()[ConfigManager.getObjectInternalIdentifier() + parts[0]];
  for(var i = 1; i < parts.length; i++){
    current = current[parts[i]];
  }
  container[objectName] = new current[objectName]();
};


/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * The public API that the library exposes.
 * @type {Object}
 */
MAIN_NAMESPACE.FlancheJs = {

  /**
   * Creates a class based on the given configuration
   * @see The README.md for more details
   * @param {String} className the name of the class
   * @param {Object} config configuration object as per docs
   */
  defineClass: function (className, config) {
    var meta = new ClassMetadata(className,
      config.init,
      config.extends,
      config.implements,
      config.properties,
      config.methods,
      config.internals,
      config.statics);
    var classMaker = new ClassMaker(meta);
    classMaker.buildClass();
  },

  /**
   * Defines a trait based on the given configuration
   * @param {String} traitName the name of the trait
   * @param {Object} config configuration object as per docs
   */
  defineTrait: function (traitName, config) {
    var traitMeta = new TraitMetadata(traitName, config.implements, config.properties, config.methods, config.internals, config.statics);
    var traitMaker = new TraitMaker(traitMeta);
    traitMaker.buildTrait();
  },

  /**
   * Defines a singleton object
   * @param {String} objectName the name of the object
   * @param {Object} config configuration object as per docs
   */
  defineObject: function (objectName, config) {
    var meta = new ClassMetadata(objectName,
      config.init,
      config.extends,
      config.implements,
      config.properties,
      config.methods,
      config.internals,
      config.statics,
      config.meta
    );
    var objectMaker = new ObjectMaker(meta);
    objectMaker.buildObject();
  },

  /**
   * Imports an object and executes the given callback when the object was loaded
   * @param {String} objectName the name of the object to load (e.g. a class or some trait)
   * @param {Function} callback the function to be executed once the object was loaded
   * @param {Object} context the value of the *this* variable inside the callback
   */
  import: function (objectName, callback, context) {
    var specs = ConfigManager.getSpecs();
    var importer = new Importer(specs);
    importer.import(objectName, callback, context);
  },

  /**
   * Allows for some options to be configured according to the needs of the user program
   * @see ConfigManager for more information on which options can be modified or check the docs
   */
  config    : ConfigManager,
  /**
   * Class for defining specification objects for javascript files created with
   * this framework
   * @param {String} objectName the name of the object for which the spec is written (e.g. class name)
   * @param {String} filePath the path to the file relative to ConfigManager.getApplicationPath
   * @param {Array} dependencies a list of specs that the file is dependent on
   */
  Spec      : Spec,
  /**
   * A list of exceptions that can be thrown during the construction or importing of the objects
   */
  exceptions: {
    /**
     * This exception is thrown when an error occurred in the building process (i.e. some wrong config option)
     */
    BuildException    : BuildException,
    /**
     * This exception is thrown when an import fails for some reason
     */
    ImportException   : ImportException,
    /**
     * Generic Exception from which all the exceptions in the class inherit
     */
    FlancheJsException: FlancheJsException
  }
};/**
 * Copyright (c) <2012> <S.C. Flanche Creative Labs SRL>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */

/**
 * This files is used together with InternalHeader.js to enclose the files on deployment
 * in a function to limit the scope of the variables in this library
 */
})();




(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);



/*
 * jQuery Pines Notify (pnotify) Plugin 1.2.0
 *
 * http://pinesframework.org/pnotify/
 * Copyright (c) 2009-2012 Hunter Perrin
 *
 * Triple license under the GPL, LGPL, and MPL:
 *	  http://www.gnu.org/licenses/gpl.html
 *	  http://www.gnu.org/licenses/lgpl.html
 *	  http://www.mozilla.org/MPL/MPL-1.1.html
 */
(function(d){var q,j,r,i=d(window),u={jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert",closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s",hi_menu:"ui-state-default ui-corner-bottom",hi_btn:"ui-state-default ui-corner-all",
hi_btnhov:"ui-state-hover",hi_hnd:"ui-icon ui-icon-grip-dotted-horizontal"},bootstrap:{container:"alert",notice:"",notice_icon:"icon-exclamation-sign",info:"alert-info",info_icon:"icon-info-sign",success:"alert-success",success_icon:"icon-ok-sign",error:"alert-error",error_icon:"icon-warning-sign",closer:"icon-remove",pin_up:"icon-pause",pin_down:"icon-play",hi_menu:"well",hi_btn:"btn",hi_btnhov:"",hi_hnd:"icon-chevron-down"}},s=function(){r=d("body");i=d(window);i.bind("resize",function(){j&&clearTimeout(j);
j=setTimeout(d.pnotify_position_all,10)})};document.body?s():d(s);d.extend({pnotify_remove_all:function(){var e=i.data("pnotify");e&&e.length&&d.each(e,function(){this.pnotify_remove&&this.pnotify_remove()})},pnotify_position_all:function(){j&&clearTimeout(j);j=null;var e=i.data("pnotify");e&&e.length&&(d.each(e,function(){var d=this.opts.stack;if(d)d.nextpos1=d.firstpos1,d.nextpos2=d.firstpos2,d.addpos2=0,d.animation=true}),d.each(e,function(){this.pnotify_position()}))},pnotify:function(e){var g,
a;typeof e!="object"?(a=d.extend({},d.pnotify.defaults),a.text=e):a=d.extend({},d.pnotify.defaults,e);for(var p in a)typeof p=="string"&&p.match(/^pnotify_/)&&(a[p.replace(/^pnotify_/,"")]=a[p]);if(a.before_init&&a.before_init(a)===false)return null;var k,o=function(a,c){b.css("display","none");var f=document.elementFromPoint(a.clientX,a.clientY);b.css("display","block");var e=d(f),g=e.css("cursor");b.css("cursor",g!="auto"?g:"default");if(!k||k.get(0)!=f)k&&(n.call(k.get(0),"mouseleave",a.originalEvent),
n.call(k.get(0),"mouseout",a.originalEvent)),n.call(f,"mouseenter",a.originalEvent),n.call(f,"mouseover",a.originalEvent);n.call(f,c,a.originalEvent);k=e},f=u[a.styling],b=d("<div />",{"class":"ui-pnotify "+a.addclass,css:{display:"none"},mouseenter:function(l){a.nonblock&&l.stopPropagation();a.mouse_reset&&g=="out"&&(b.stop(true),g="in",b.css("height","auto").animate({width:a.width,opacity:a.nonblock?a.nonblock_opacity:a.opacity},"fast"));a.nonblock&&b.animate({opacity:a.nonblock_opacity},"fast");
a.hide&&a.mouse_reset&&b.pnotify_cancel_remove();a.sticker&&!a.nonblock&&b.sticker.trigger("pnotify_icon").css("visibility","visible");a.closer&&!a.nonblock&&b.closer.css("visibility","visible")},mouseleave:function(l){a.nonblock&&l.stopPropagation();k=null;b.css("cursor","auto");a.nonblock&&g!="out"&&b.animate({opacity:a.opacity},"fast");a.hide&&a.mouse_reset&&b.pnotify_queue_remove();a.sticker_hover&&b.sticker.css("visibility","hidden");a.closer_hover&&b.closer.css("visibility","hidden");d.pnotify_position_all()},
mouseover:function(b){a.nonblock&&b.stopPropagation()},mouseout:function(b){a.nonblock&&b.stopPropagation()},mousemove:function(b){a.nonblock&&(b.stopPropagation(),o(b,"onmousemove"))},mousedown:function(b){a.nonblock&&(b.stopPropagation(),b.preventDefault(),o(b,"onmousedown"))},mouseup:function(b){a.nonblock&&(b.stopPropagation(),b.preventDefault(),o(b,"onmouseup"))},click:function(b){a.nonblock&&(b.stopPropagation(),o(b,"onclick"))},dblclick:function(b){a.nonblock&&(b.stopPropagation(),o(b,"ondblclick"))}});
b.opts=a;b.container=d("<div />",{"class":f.container+" ui-pnotify-container "+(a.type=="error"?f.error:a.type=="info"?f.info:a.type=="success"?f.success:f.notice)}).appendTo(b);a.cornerclass!=""&&b.container.removeClass("ui-corner-all").addClass(a.cornerclass);a.shadow&&b.container.addClass("ui-pnotify-shadow");b.pnotify_version="1.2.0";b.pnotify=function(l){var c=a;typeof l=="string"?a.text=l:a=d.extend({},a,l);for(var e in a)typeof e=="string"&&e.match(/^pnotify_/)&&(a[e.replace(/^pnotify_/,"")]=
a[e]);b.opts=a;a.cornerclass!=c.cornerclass&&b.container.removeClass("ui-corner-all").addClass(a.cornerclass);a.shadow!=c.shadow&&(a.shadow?b.container.addClass("ui-pnotify-shadow"):b.container.removeClass("ui-pnotify-shadow"));a.addclass===false?b.removeClass(c.addclass):a.addclass!==c.addclass&&b.removeClass(c.addclass).addClass(a.addclass);a.title===false?b.title_container.slideUp("fast"):a.title!==c.title&&(a.title_escape?b.title_container.text(a.title).slideDown(200):b.title_container.html(a.title).slideDown(200));
a.text===false?b.text_container.slideUp("fast"):a.text!==c.text&&(a.text_escape?b.text_container.text(a.text).slideDown(200):b.text_container.html(a.insert_brs?String(a.text).replace(/\n/g,"<br />"):a.text).slideDown(200));b.pnotify_history=a.history;b.pnotify_hide=a.hide;a.type!=c.type&&b.container.removeClass(f.error+" "+f.notice+" "+f.success+" "+f.info).addClass(a.type=="error"?f.error:a.type=="info"?f.info:a.type=="success"?f.success:f.notice);if(a.icon!==c.icon||a.icon===true&&a.type!=c.type)b.container.find("div.ui-pnotify-icon").remove(),
a.icon!==false&&d("<div />",{"class":"ui-pnotify-icon"}).append(d("<span />",{"class":a.icon===true?a.type=="error"?f.error_icon:a.type=="info"?f.info_icon:a.type=="success"?f.success_icon:f.notice_icon:a.icon})).prependTo(b.container);a.width!==c.width&&b.animate({width:a.width});a.min_height!==c.min_height&&b.container.animate({minHeight:a.min_height});a.opacity!==c.opacity&&b.fadeTo(a.animate_speed,a.opacity);!a.closer||a.nonblock?b.closer.css("display","none"):b.closer.css("display","block");
!a.sticker||a.nonblock?b.sticker.css("display","none"):b.sticker.css("display","block");b.sticker.trigger("pnotify_icon");a.sticker_hover?b.sticker.css("visibility","hidden"):a.nonblock||b.sticker.css("visibility","visible");a.closer_hover?b.closer.css("visibility","hidden"):a.nonblock||b.closer.css("visibility","visible");a.hide?c.hide||b.pnotify_queue_remove():b.pnotify_cancel_remove();b.pnotify_queue_position();return b};b.pnotify_position=function(a){var c=b.opts.stack;if(c){if(!c.nextpos1)c.nextpos1=
c.firstpos1;if(!c.nextpos2)c.nextpos2=c.firstpos2;if(!c.addpos2)c.addpos2=0;var d=b.css("display")=="none";if(!d||a){var f,e={},g;switch(c.dir1){case "down":g="top";break;case "up":g="bottom";break;case "left":g="right";break;case "right":g="left"}a=parseInt(b.css(g));isNaN(a)&&(a=0);if(typeof c.firstpos1=="undefined"&&!d)c.firstpos1=a,c.nextpos1=c.firstpos1;var h;switch(c.dir2){case "down":h="top";break;case "up":h="bottom";break;case "left":h="right";break;case "right":h="left"}f=parseInt(b.css(h));
isNaN(f)&&(f=0);if(typeof c.firstpos2=="undefined"&&!d)c.firstpos2=f,c.nextpos2=c.firstpos2;if(c.dir1=="down"&&c.nextpos1+b.height()>i.height()||c.dir1=="up"&&c.nextpos1+b.height()>i.height()||c.dir1=="left"&&c.nextpos1+b.width()>i.width()||c.dir1=="right"&&c.nextpos1+b.width()>i.width())c.nextpos1=c.firstpos1,c.nextpos2+=c.addpos2+(typeof c.spacing2=="undefined"?25:c.spacing2),c.addpos2=0;if(c.animation&&c.nextpos2<f)switch(c.dir2){case "down":e.top=c.nextpos2+"px";break;case "up":e.bottom=c.nextpos2+
"px";break;case "left":e.right=c.nextpos2+"px";break;case "right":e.left=c.nextpos2+"px"}else b.css(h,c.nextpos2+"px");switch(c.dir2){case "down":case "up":if(b.outerHeight(true)>c.addpos2)c.addpos2=b.height();break;case "left":case "right":if(b.outerWidth(true)>c.addpos2)c.addpos2=b.width()}if(c.nextpos1)if(c.animation&&(a>c.nextpos1||e.top||e.bottom||e.right||e.left))switch(c.dir1){case "down":e.top=c.nextpos1+"px";break;case "up":e.bottom=c.nextpos1+"px";break;case "left":e.right=c.nextpos1+"px";
break;case "right":e.left=c.nextpos1+"px"}else b.css(g,c.nextpos1+"px");(e.top||e.bottom||e.right||e.left)&&b.animate(e,{duration:500,queue:false});switch(c.dir1){case "down":case "up":c.nextpos1+=b.height()+(typeof c.spacing1=="undefined"?25:c.spacing1);break;case "left":case "right":c.nextpos1+=b.width()+(typeof c.spacing1=="undefined"?25:c.spacing1)}}}};b.pnotify_queue_position=function(a){j&&clearTimeout(j);a||(a=10);j=setTimeout(d.pnotify_position_all,a)};b.pnotify_display=function(){b.parent().length||
b.appendTo(r);a.before_open&&a.before_open(b)===false||(a.stack.push!="top"&&b.pnotify_position(true),a.animation=="fade"||a.animation.effect_in=="fade"?b.show().fadeTo(0,0).hide():a.opacity!=1&&b.show().fadeTo(0,a.opacity).hide(),b.animate_in(function(){a.after_open&&a.after_open(b);b.pnotify_queue_position();a.hide&&b.pnotify_queue_remove()}))};b.pnotify_remove=function(){if(b.timer)window.clearTimeout(b.timer),b.timer=null;a.before_close&&a.before_close(b)===false||b.animate_out(function(){a.after_close&&
a.after_close(b)===false||(b.pnotify_queue_position(),a.remove&&b.detach())})};b.animate_in=function(d){g="in";var c;c=typeof a.animation.effect_in!="undefined"?a.animation.effect_in:a.animation;c=="none"?(b.show(),d()):c=="show"?b.show(a.animate_speed,d):c=="fade"?b.show().fadeTo(a.animate_speed,a.opacity,d):c=="slide"?b.slideDown(a.animate_speed,d):typeof c=="function"?c("in",d,b):b.show(c,typeof a.animation.options_in=="object"?a.animation.options_in:{},a.animate_speed,d)};b.animate_out=function(d){g=
"out";var c;c=typeof a.animation.effect_out!="undefined"?a.animation.effect_out:a.animation;c=="none"?(b.hide(),d()):c=="show"?b.hide(a.animate_speed,d):c=="fade"?b.fadeOut(a.animate_speed,d):c=="slide"?b.slideUp(a.animate_speed,d):typeof c=="function"?c("out",d,b):b.hide(c,typeof a.animation.options_out=="object"?a.animation.options_out:{},a.animate_speed,d)};b.pnotify_cancel_remove=function(){b.timer&&window.clearTimeout(b.timer)};b.pnotify_queue_remove=function(){b.pnotify_cancel_remove();b.timer=
window.setTimeout(function(){b.pnotify_remove()},isNaN(a.delay)?0:a.delay)};b.closer=d("<div />",{"class":"ui-pnotify-closer",css:{cursor:"pointer",visibility:a.closer_hover?"hidden":"visible"},click:function(){b.pnotify_remove();b.sticker.css("visibility","hidden");b.closer.css("visibility","hidden")}}).append(d("<span />",{"class":f.closer})).appendTo(b.container);(!a.closer||a.nonblock)&&b.closer.css("display","none");b.sticker=d("<div />",{"class":"ui-pnotify-sticker",css:{cursor:"pointer",visibility:a.sticker_hover?
"hidden":"visible"},click:function(){a.hide=!a.hide;a.hide?b.pnotify_queue_remove():b.pnotify_cancel_remove();d(this).trigger("pnotify_icon")}}).bind("pnotify_icon",function(){d(this).children().removeClass(f.pin_up+" "+f.pin_down).addClass(a.hide?f.pin_up:f.pin_down)}).append(d("<span />",{"class":f.pin_up})).appendTo(b.container);(!a.sticker||a.nonblock)&&b.sticker.css("display","none");a.icon!==false&&d("<div />",{"class":"ui-pnotify-icon"}).append(d("<span />",{"class":a.icon===true?a.type=="error"?
f.error_icon:a.type=="info"?f.info_icon:a.type=="success"?f.success_icon:f.notice_icon:a.icon})).prependTo(b.container);b.title_container=d("<h4 />",{"class":"ui-pnotify-title"}).appendTo(b.container);a.title===false?b.title_container.hide():a.title_escape?b.title_container.text(a.title):b.title_container.html(a.title);b.text_container=d("<div />",{"class":"ui-pnotify-text"}).appendTo(b.container);a.text===false?b.text_container.hide():a.text_escape?b.text_container.text(a.text):b.text_container.html(a.insert_brs?
String(a.text).replace(/\n/g,"<br />"):a.text);typeof a.width=="string"&&b.css("width",a.width);typeof a.min_height=="string"&&b.container.css("min-height",a.min_height);b.pnotify_history=a.history;b.pnotify_hide=a.hide;var h=i.data("pnotify");if(h==null||typeof h!="object")h=[];h=a.stack.push=="top"?d.merge([b],h):d.merge(h,[b]);i.data("pnotify",h);a.stack.push=="top"&&b.pnotify_queue_position(1);a.after_init&&a.after_init(b);if(a.history){var m=i.data("pnotify_history");typeof m=="undefined"&&(m=
d("<div />",{"class":"ui-pnotify-history-container "+f.hi_menu,mouseleave:function(){m.animate({top:"-"+q+"px"},{duration:100,queue:false})}}).append(d("<div />",{"class":"ui-pnotify-history-header",text:"Redisplay"})).append(d("<button />",{"class":"ui-pnotify-history-all "+f.hi_btn,text:"All",mouseenter:function(){d(this).addClass(f.hi_btnhov)},mouseleave:function(){d(this).removeClass(f.hi_btnhov)},click:function(){d.each(h,function(){this.pnotify_history&&(this.is(":visible")?this.pnotify_hide&&
this.pnotify_queue_remove():this.pnotify_display&&this.pnotify_display())});return false}})).append(d("<button />",{"class":"ui-pnotify-history-last "+f.hi_btn,text:"Last",mouseenter:function(){d(this).addClass(f.hi_btnhov)},mouseleave:function(){d(this).removeClass(f.hi_btnhov)},click:function(){var a=-1,b;do{b=a==-1?h.slice(a):h.slice(a,a+1);if(!b[0])break;a--}while(!b[0].pnotify_history||b[0].is(":visible"));if(!b[0])return false;b[0].pnotify_display&&b[0].pnotify_display();return false}})).appendTo(r),
q=d("<span />",{"class":"ui-pnotify-history-pulldown "+f.hi_hnd,mouseenter:function(){m.animate({top:"0"},{duration:100,queue:false})}}).appendTo(m).offset().top+2,m.css({top:"-"+q+"px"}),i.data("pnotify_history",m))}a.stack.animation=false;b.pnotify_display();return b}});var t=/^on/,v=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,w=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,x=/^(scroll|resize|(un)?load|abort|error)$/,n=function(e,g){var a,e=e.toLowerCase();
document.createEvent&&this.dispatchEvent?(e=e.replace(t,""),e.match(v)?(d(this).offset(),a=document.createEvent("MouseEvents"),a.initMouseEvent(e,g.bubbles,g.cancelable,g.view,g.detail,g.screenX,g.screenY,g.clientX,g.clientY,g.ctrlKey,g.altKey,g.shiftKey,g.metaKey,g.button,g.relatedTarget)):e.match(w)?(a=document.createEvent("UIEvents"),a.initUIEvent(e,g.bubbles,g.cancelable,g.view,g.detail)):e.match(x)&&(a=document.createEvent("HTMLEvents"),a.initEvent(e,g.bubbles,g.cancelable)),a&&this.dispatchEvent(a)):
(e.match(t)||(e="on"+e),a=document.createEventObject(g),this.fireEvent(e,a))};d.pnotify.defaults={title:false,title_escape:false,text:false,text_escape:false,styling:"bootstrap",addclass:"",cornerclass:"",nonblock:false,nonblock_opacity:0.2,history:true,width:"300px",min_height:"16px",type:"notice",icon:true,animation:"fade",animate_speed:"slow",opacity:1,shadow:true,closer:true,closer_hover:true,sticker:true,sticker_hover:true,hide:true,delay:8E3,mouse_reset:true,remove:true,insert_brs:true,stack:{dir1:"down",
dir2:"left",push:"bottom",spacing1:25,spacing2:25}}})(jQuery);




(function(d,f,g,b){var e="tooltipster",c={animation:"fade",arrow:true,arrowColor:"",content:"",delay:200,fixedWidth:0,maxWidth:0,functionBefore:function(l,m){m()},functionReady:function(l,m){},functionAfter:function(l){},icon:"(?)",iconDesktop:false,iconTouch:false,iconTheme:".tooltipster-icon",interactive:false,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:true,position:"top",speed:350,timer:0,theme:".tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};function h(m,l){this.element=m;this.options=d.extend({},c,l);this._defaults=c;this._name=e;this.init()}function j(){return !!("ontouchstart" in f)}function a(){var l=g.body||g.documentElement;var n=l.style;var o="transition";if(typeof n[o]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1);for(var m=0;m<v.length;m++){if(typeof n[v[m]+o]=="string"){return true}}return false}var k=true;if(!a()){k=false}h.prototype={init:function(){var r=d(this.element);var n=this;var q=true;if((n.options.touchDevices==false)&&(j())){q=false}if(g.all&&!g.querySelector){q=false}if(q==true){if((this.options.iconDesktop==true)&&(!j())||((this.options.iconTouch==true)&&(j()))){var m=r.attr("title");r.removeAttr("title");var p=n.options.iconTheme;var o=d('<span class="'+p.replace(".","")+'" title="'+m+'">'+this.options.icon+"</span>");o.insertAfter(r);r.data("tooltipsterIcon",o);r=o}var l=d.trim(n.options.content).length>0?n.options.content:r.attr("title");r.data("tooltipsterContent",l);r.removeAttr("title");if((this.options.touchDevices==true)&&(j())){r.bind("touchstart",function(t,s){n.showTooltip()})}else{if(this.options.trigger=="hover"){r.on("mouseenter.tooltipster",function(){n.showTooltip()});if(this.options.interactive==true){r.on("mouseleave.tooltipster",function(){var t=r.data("tooltipster");var u=false;if((t!==b)&&(t!=="")){t.mouseenter(function(){u=true});t.mouseleave(function(){u=false});var s=setTimeout(function(){if(u==true){t.mouseleave(function(){n.hideTooltip()})}else{n.hideTooltip()}},n.options.interactiveTolerance)}else{n.hideTooltip()}})}else{r.on("mouseleave.tooltipster",function(){n.hideTooltip()})}}if(this.options.trigger=="click"){r.on("click.tooltipster",function(){if((r.data("tooltipster")=="")||(r.data("tooltipster")==b)){n.showTooltip()}else{n.hideTooltip()}})}}}},showTooltip:function(m){var n=d(this.element);var l=this;if(n.data("tooltipsterIcon")!==b){n=n.data("tooltipsterIcon")}if(!n.hasClass("tooltipster-disable")){if((d(".tooltipster-base").not(".tooltipster-dying").length>0)&&(l.options.onlyOne==true)){d(".tooltipster-base").not(".tooltipster-dying").not(n.data("tooltipster")).each(function(){d(this).addClass("tooltipster-kill");var o=d(this).data("origin");o.data("plugin_tooltipster").hideTooltip()})}n.clearQueue().delay(l.options.delay).queue(function(){l.options.functionBefore(n,function(){if((n.data("tooltipster")!==b)&&(n.data("tooltipster")!=="")){var w=n.data("tooltipster");if(!w.hasClass("tooltipster-kill")){var s="tooltipster-"+l.options.animation;w.removeClass("tooltipster-dying");if(k==true){w.clearQueue().addClass(s+"-show")}if(l.options.timer>0){var q=w.data("tooltipsterTimer");clearTimeout(q);q=setTimeout(function(){w.data("tooltipsterTimer",b);l.hideTooltip()},l.options.timer);w.data("tooltipsterTimer",q)}if((l.options.touchDevices==true)&&(j())){d("body").bind("touchstart",function(B){if(l.options.interactive==true){var D=d(B.target);var C=true;D.parents().each(function(){if(d(this).hasClass("tooltipster-base")){C=false}});if(C==true){l.hideTooltip();d("body").unbind("touchstart")}}else{l.hideTooltip();d("body").unbind("touchstart")}})}}}else{d("body").css("overflow-x","hidden");var x=n.data("tooltipsterContent");var u=l.options.theme;var y=u.replace(".","");var s="tooltipster-"+l.options.animation;var r="-webkit-transition-duration: "+l.options.speed+"ms; -webkit-animation-duration: "+l.options.speed+"ms; -moz-transition-duration: "+l.options.speed+"ms; -moz-animation-duration: "+l.options.speed+"ms; -o-transition-duration: "+l.options.speed+"ms; -o-animation-duration: "+l.options.speed+"ms; -ms-transition-duration: "+l.options.speed+"ms; -ms-animation-duration: "+l.options.speed+"ms; transition-duration: "+l.options.speed+"ms; animation-duration: "+l.options.speed+"ms;";var o=l.options.fixedWidth>0?"width:"+l.options.fixedWidth+"px;":"";var z=l.options.maxWidth>0?"max-width:"+l.options.maxWidth+"px;":"";var t=l.options.interactive==true?"pointer-events: auto;":"";var w=d('<div class="tooltipster-base '+y+" "+s+'" style="'+o+" "+z+" "+t+" "+r+'"><div class="tooltipster-content">'+x+"</div></div>");w.appendTo("body");n.data("tooltipster",w);w.data("origin",n);l.positionTooltip();l.options.functionReady(n,w);if(k==true){w.addClass(s+"-show")}else{w.css("display","none").removeClass(s).fadeIn(l.options.speed)}var A=x;var p=setInterval(function(){var B=n.data("tooltipsterContent");if(d("body").find(n).length==0){w.addClass("tooltipster-dying");l.hideTooltip()}else{if((A!==B)&&(B!=="")){A=B;w.find(".tooltipster-content").html(B);if(l.options.updateAnimation==true){if(a()){w.css({width:"","-webkit-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+l.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){w.removeClass("tooltipster-content-changing");setTimeout(function(){w.css({"-webkit-transition":l.options.speed+"ms","-moz-transition":l.options.speed+"ms","-o-transition":l.options.speed+"ms","-ms-transition":l.options.speed+"ms",transition:l.options.speed+"ms"})},l.options.speed)},l.options.speed)}else{w.fadeTo(l.options.speed,0.5,function(){w.fadeTo(l.options.speed,1)})}}l.positionTooltip()}}if((d("body").find(w).length==0)||(d("body").find(n).length==0)){clearInterval(p)}},200);if(l.options.timer>0){var q=setTimeout(function(){w.data("tooltipsterTimer",b);l.hideTooltip()},l.options.timer+l.options.speed);w.data("tooltipsterTimer",q)}if((l.options.touchDevices==true)&&(j())){d("body").bind("touchstart",function(B){if(l.options.interactive==true){var D=d(B.target);var C=true;D.parents().each(function(){if(d(this).hasClass("tooltipster-base")){C=false}});if(C==true){l.hideTooltip();d("body").unbind("touchstart")}}else{l.hideTooltip();d("body").unbind("touchstart")}})}w.mouseleave(function(){l.hideTooltip()})}});n.dequeue()})}},hideTooltip:function(m){var p=d(this.element);var l=this;if(p.data("tooltipsterIcon")!==b){p=p.data("tooltipsterIcon")}var o=p.data("tooltipster");if(o==b){o=d(".tooltipster-dying")}p.clearQueue();if((o!==b)&&(o!=="")){var q=o.data("tooltipsterTimer");if(q!==b){clearTimeout(q)}var n="tooltipster-"+l.options.animation;if(k==true){o.clearQueue().removeClass(n+"-show").addClass("tooltipster-dying").delay(l.options.speed).queue(function(){o.remove();p.data("tooltipster","");d("body").css("verflow-x","");l.options.functionAfter(p)})}else{o.clearQueue().addClass("tooltipster-dying").fadeOut(l.options.speed,function(){o.remove();p.data("tooltipster","");d("body").css("verflow-x","");l.options.functionAfter(p)})}}},positionTooltip:function(O){var A=d(this.element);var ab=this;if(A.data("tooltipsterIcon")!==b){A=A.data("tooltipsterIcon")}if((A.data("tooltipster")!==b)&&(A.data("tooltipster")!=="")){var ah=A.data("tooltipster");ah.css("width","");var ai=d(f).width();var B=A.outerWidth(false);var ag=A.outerHeight(false);var al=ah.outerWidth(false);var m=ah.innerWidth()+1;var M=ah.outerHeight(false);var aa=A.offset();var Z=aa.top;var u=aa.left;var y=b;if(A.is("area")){var T=A.attr("shape");var af=A.parent().attr("name");var P=d('img[usemap="#'+af+'"]');var n=P.offset().left;var L=P.offset().top;var W=A.attr("coords")!==b?A.attr("coords").split(","):b;if(T=="circle"){var N=parseInt(W[0]);var r=parseInt(W[1]);var D=parseInt(W[2]);ag=D*2;B=D*2;Z=L+r-D;u=n+N-D}else{if(T=="rect"){var N=parseInt(W[0]);var r=parseInt(W[1]);var q=parseInt(W[2]);var J=parseInt(W[3]);ag=J-r;B=q-N;Z=L+r;u=n+N}else{if(T=="poly"){var x=[];var ae=[];var H=0,G=0,ad=0,ac=0;var aj="even";for(i=0;i<W.length;i++){var F=parseInt(W[i]);if(aj=="even"){if(F>ad){ad=F;if(i==0){H=ad}}if(F<H){H=F}aj="odd"}else{if(F>ac){ac=F;if(i==1){G=ac}}if(F<G){G=F}aj="even"}}ag=ac-G;B=ad-H;Z=L+G;u=n+H}else{ag=P.outerHeight(false);B=P.outerWidth(false);Z=L;u=n}}}}if(ab.options.fixedWidth==0){ah.css({width:m+"px","padding-left":"0px","padding-right":"0px"})}var s=0,V=0;var X=parseInt(ab.options.offsetY);var Y=parseInt(ab.options.offsetX);var p="";function w(){var an=d(f).scrollLeft();if((s-an)<0){var am=s-an;s=an;ah.data("arrow-reposition",am)}if(((s+al)-an)>ai){var am=s-((ai+an)-al);s=(ai+an)-al;ah.data("arrow-reposition",am)}}function t(an,am){if(((Z-d(f).scrollTop()-M-X-12)<0)&&(am.indexOf("top")>-1)){ab.options.position=an;y=am}if(((Z+ag+M+12+X)>(d(f).scrollTop()+d(f).height()))&&(am.indexOf("bottom")>-1)){ab.options.position=an;y=am;V=(Z-M)-X-12}}if(ab.options.position=="top"){var Q=(u+al)-(u+B);s=(u+Y)-(Q/2);V=(Z-M)-X-12;w();t("bottom","top")}if(ab.options.position=="top-left"){s=u+Y;V=(Z-M)-X-12;w();t("bottom-left","top-left")}if(ab.options.position=="top-right"){s=(u+B+Y)-al;V=(Z-M)-X-12;w();t("bottom-right","top-right")}if(ab.options.position=="bottom"){var Q=(u+al)-(u+B);s=u-(Q/2)+Y;V=(Z+ag)+X+12;w();t("top","bottom")}if(ab.options.position=="bottom-left"){s=u+Y;V=(Z+ag)+X+12;w();t("top-left","bottom-left")}if(ab.options.position=="bottom-right"){s=(u+B+Y)-al;V=(Z+ag)+X+12;w();t("top-right","bottom-right")}if(ab.options.position=="left"){s=u-Y-al-12;myLeftMirror=u+Y+B+12;var K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X;if((s<0)&&((myLeftMirror+al)>ai)){var o=parseFloat(ah.css("border-width"))*2;var l=(al+s)-o;ah.css("width",l+"px");M=ah.outerHeight(false);s=u-Y-l-12-o;K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X}else{if(s<0){s=u+Y+B+12;ah.data("arrow-reposition","left")}}}if(ab.options.position=="right"){s=u+Y+B+12;myLeftMirror=u-Y-al-12;var K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X;if(((s+al)>ai)&&(myLeftMirror<0)){var o=parseFloat(ah.css("border-width"))*2;var l=(ai-s)-o;ah.css("width",l+"px");M=ah.outerHeight(false);K=(Z+M)-(Z+A.outerHeight(false));V=Z-(K/2)-X}else{if((s+al)>ai){s=u-Y-al-12;ah.data("arrow-reposition","right")}}}if(ab.options.arrow==true){var I="tooltipster-arrow-"+ab.options.position;if(ab.options.arrowColor.length<1){var R=ah.css("background-color")}else{var R=ab.options.arrowColor}var ak=ah.data("arrow-reposition");if(!ak){ak=""}else{if(ak=="left"){I="tooltipster-arrow-right";ak=""}else{if(ak=="right"){I="tooltipster-arrow-left";ak=""}else{ak="left:"+ak+"px;"}}}if((ab.options.position=="top")||(ab.options.position=="top-left")||(ab.options.position=="top-right")){var U=parseFloat(ah.css("border-bottom-width"));var z=ah.css("border-bottom-color")}else{if((ab.options.position=="bottom")||(ab.options.position=="bottom-left")||(ab.options.position=="bottom-right")){var U=parseFloat(ah.css("border-top-width"));var z=ah.css("border-top-color")}else{if(ab.options.position=="left"){var U=parseFloat(ah.css("border-right-width"));var z=ah.css("border-right-color")}else{if(ab.options.position=="right"){var U=parseFloat(ah.css("border-left-width"));var z=ah.css("border-left-color")}else{var U=parseFloat(ah.css("border-bottom-width"));var z=ah.css("border-bottom-color")}}}}if(U>1){U++}var E="";if(U!==0){var C="";var S="border-color: "+z+";";if(I.indexOf("bottom")!==-1){C="margin-top: -"+U+"px;"}else{if(I.indexOf("top")!==-1){C="margin-bottom: -"+U+"px;"}else{if(I.indexOf("left")!==-1){C="margin-right: -"+U+"px;"}else{if(I.indexOf("right")!==-1){C="margin-left: -"+U+"px;"}}}}E='<span class="tooltipster-arrow-border" style="'+C+" "+S+';"></span>'}ah.find(".tooltipster-arrow").remove();p='<div class="'+I+' tooltipster-arrow" style="'+ak+'">'+E+'<span style="border-color:'+R+';"></span></div>';ah.append(p)}ah.css({top:V+"px",left:s+"px"});if(y!==b){ab.options.position=y}}}};d.fn[e]=function(m){if(typeof m==="string"){var o=this;var l=arguments[1];if(o.data("plugin_tooltipster")==b){var n=o.find("*");o=d();n.each(function(){if(d(this).data("plugin_tooltipster")!==b){o.push(d(this))}})}o.each(function(){switch(m.toLowerCase()){case"show":d(this).data("plugin_tooltipster").showTooltip();break;case"hide":d(this).data("plugin_tooltipster").hideTooltip();break;case"disable":d(this).addClass("tooltipster-disable");break;case"enable":d(this).removeClass("tooltipster-disable");break;case"destroy":d(this).data("plugin_tooltipster").hideTooltip();d(this).data("plugin_tooltipster","").attr("title",o.data("tooltipsterContent")).data("tooltipsterContent","").data("plugin_tooltipster","").off("mouseenter.tooltipster mouseleave.tooltipster click.tooltipster");break;case"update":d(this).data("tooltipsterContent",l);break;case"reposition":d(this).data("plugin_tooltipster").positionTooltip();break}});return this}return this.each(function(){if(!d.data(this,"plugin_"+e)){d.data(this,"plugin_"+e,new h(this,m))}var p=d(this).data("plugin_tooltipster").options;if((p.iconDesktop==true)&&(!j())||((p.iconTouch==true)&&(j()))){var q=d(this).data("plugin_tooltipster");d(this).next().data("plugin_tooltipster",q)}})};if(j()){f.addEventListener("orientationchange",function(){if(d(".tooltipster-base").length>0){d(".tooltipster-base").each(function(){var l=d(this).data("origin");l.data("plugin_tooltipster").hideTooltip()})}},false)}d(f).on("resize.tooltipster",function(){var l=d(".tooltipster-base").data("origin");if((l!==null)&&(l!==b)){l.tooltipster("reposition")}})})(jQuery,window,document);



/**
 * bootbox.js v3.3.0
 *
 * http://bootboxjs.com/license.txt
 */
var bootbox=window.bootbox||function(a,b){function c(a,b){return"undefined"==typeof b&&(b=d),"string"==typeof m[b][a]?m[b][a]:b!=e?c(a,e):a}var d="en",e="en",f=!0,g="static",h="javascript:;",i="",j={},k={},l={};l.setLocale=function(a){for(var b in m)if(b==a)return d=a,void 0;throw new Error("Invalid locale: "+a)},l.addLocale=function(a,b){"undefined"==typeof m[a]&&(m[a]={});for(var c in b)m[a][c]=b[c]},l.setIcons=function(a){k=a,("object"!=typeof k||null===k)&&(k={})},l.setBtnClasses=function(a){j=a,("object"!=typeof j||null===j)&&(j={})},l.alert=function(){var a="",b=c("OK"),d=null;switch(arguments.length){case 1:a=arguments[0];break;case 2:a=arguments[0],"function"==typeof arguments[1]?d=arguments[1]:b=arguments[1];break;case 3:a=arguments[0],b=arguments[1],d=arguments[2];break;default:throw new Error("Incorrect number of arguments: expected 1-3")}return l.dialog(a,{label:b,icon:k.OK,"class":j.OK,callback:d},{onEscape:d||!0})},l.confirm=function(){var a="",b=c("CANCEL"),d=c("CONFIRM"),e=null;switch(arguments.length){case 1:a=arguments[0];break;case 2:a=arguments[0],"function"==typeof arguments[1]?e=arguments[1]:b=arguments[1];break;case 3:a=arguments[0],b=arguments[1],"function"==typeof arguments[2]?e=arguments[2]:d=arguments[2];break;case 4:a=arguments[0],b=arguments[1],d=arguments[2],e=arguments[3];break;default:throw new Error("Incorrect number of arguments: expected 1-4")}var f=function(){return"function"==typeof e?e(!1):void 0},g=function(){return"function"==typeof e?e(!0):void 0};return l.dialog(a,[{label:b,icon:k.CANCEL,"class":j.CANCEL,callback:f},{label:d,icon:k.CONFIRM,"class":j.CONFIRM,callback:g}],{onEscape:f})},l.prompt=function(){var a="",d=c("CANCEL"),e=c("CONFIRM"),f=null,g="";switch(arguments.length){case 1:a=arguments[0];break;case 2:a=arguments[0],"function"==typeof arguments[1]?f=arguments[1]:d=arguments[1];break;case 3:a=arguments[0],d=arguments[1],"function"==typeof arguments[2]?f=arguments[2]:e=arguments[2];break;case 4:a=arguments[0],d=arguments[1],e=arguments[2],f=arguments[3];break;case 5:a=arguments[0],d=arguments[1],e=arguments[2],f=arguments[3],g=arguments[4];break;default:throw new Error("Incorrect number of arguments: expected 1-5")}var h=a,i=b("<form></form>");i.append("<input class='input-block-level' autocomplete=off type=text value='"+g+"' />");var m=function(){return"function"==typeof f?f(null):void 0},n=function(){return"function"==typeof f?f(i.find("input[type=text]").val()):void 0},o=l.dialog(i,[{label:d,icon:k.CANCEL,"class":j.CANCEL,callback:m},{label:e,icon:k.CONFIRM,"class":j.CONFIRM,callback:n}],{header:h,show:!1,onEscape:m});return o.on("shown",function(){i.find("input[type=text]").focus(),i.on("submit",function(a){a.preventDefault(),o.find(".btn-primary").click()})}),o.modal("show"),o},l.dialog=function(c,d,e){function j(){var a=null;"function"==typeof e.onEscape&&(a=e.onEscape()),a!==!1&&x.modal("hide")}var k="",l=[];e||(e={}),"undefined"==typeof d?d=[]:"undefined"==typeof d.length&&(d=[d]);for(var m=d.length;m--;){var n=null,o=null,p=null,q="",r=null;if("undefined"==typeof d[m].label&&"undefined"==typeof d[m]["class"]&&"undefined"==typeof d[m].callback){var s=0,t=null;for(var u in d[m])if(t=u,++s>1)break;1==s&&"function"==typeof d[m][u]&&(d[m].label=t,d[m].callback=d[m][u])}"function"==typeof d[m].callback&&(r=d[m].callback),d[m]["class"]?p=d[m]["class"]:m==d.length-1&&d.length<=2&&(p="btn-primary"),d[m].link!==!0&&(p="btn "+p),n=d[m].label?d[m].label:"Option "+(m+1),d[m].icon&&(q="<i class='"+d[m].icon+"'></i> "),o=d[m].href?d[m].href:h,k="<a data-handler='"+m+"' class='"+p+"' href='"+o+"'>"+q+n+"</a>"+k,l[m]=r}var v=["<div class='bootbox modal' tabindex='-1' style='overflow:hidden;'>"];if(e.header){var w="";("undefined"==typeof e.headerCloseButton||e.headerCloseButton)&&(w="<a href='"+h+"' class='close'>&times;</a>"),v.push("<div class='modal-header'>"+w+"<h3>"+e.header+"</h3></div>")}v.push("<div class='modal-body'></div>"),k&&v.push("<div class='modal-footer'>"+k+"</div>"),v.push("</div>");var x=b(v.join("\n")),y="undefined"==typeof e.animate?f:e.animate;y&&x.addClass("fade");var z="undefined"==typeof e.classes?i:e.classes;return z&&x.addClass(z),x.find(".modal-body").html(c),x.on("keyup.dismiss.modal",function(a){27===a.which&&e.onEscape&&j("escape")}),x.on("click","a.close",function(a){a.preventDefault(),j("close")}),x.on("shown",function(){x.find("a.btn-primary:first").focus()}),x.on("hidden",function(a){a.target===this&&x.remove()}),x.on("click",".modal-footer a",function(a){var c=b(this).data("handler"),e=l[c],f=null;("undefined"==typeof c||"undefined"==typeof d[c].href)&&(a.preventDefault(),"function"==typeof e&&(f=e(a)),f!==!1&&x.modal("hide"))}),b("body").append(x),x.modal({backdrop:"undefined"==typeof e.backdrop?g:e.backdrop,keyboard:!1,show:!1}),x.on("show",function(){b(a).off("focusin.modal")}),("undefined"==typeof e.show||e.show===!0)&&x.modal("show"),x},l.modal=function(){var a,c,d,e={onEscape:null,keyboard:!0,backdrop:g};switch(arguments.length){case 1:a=arguments[0];break;case 2:a=arguments[0],"object"==typeof arguments[1]?d=arguments[1]:c=arguments[1];break;case 3:a=arguments[0],c=arguments[1],d=arguments[2];break;default:throw new Error("Incorrect number of arguments: expected 1-3")}return e.header=c,d="object"==typeof d?b.extend(e,d):e,l.dialog(a,[],d)},l.hideAll=function(){b(".bootbox").modal("hide")},l.animate=function(a){f=a},l.backdrop=function(a){g=a},l.classes=function(a){i=a};var m={br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return l}(document,window.jQuery);window.bootbox=bootbox;



!function(){"undefined"==typeof Math.sgn&&(Math.sgn=function(a){return 0==a?0:a>0?1:-1});var a={subtract:function(a,b){return{x:a.x-b.x,y:a.y-b.y}},dotProduct:function(a,b){return a.x*b.x+a.y*b.y},square:function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},scale:function(a,b){return{x:a.x*b,y:a.y*b}}},b=64,c=Math.pow(2,-b-1),d=function(b,c){for(var d=[],e=f(b,c),h=c.length-1,i=2*h-1,j=g(e,i,d,0),k=a.subtract(b,c[0]),m=a.square(k),n=0,o=0;j>o;o++){k=a.subtract(b,l(c,h,d[o],null,null));var p=a.square(k);m>p&&(m=p,n=d[o])}return k=a.subtract(b,c[h]),p=a.square(k),m>p&&(m=p,n=1),{location:n,distance:m}},e=function(a,b){var c=d(a,b);return{point:l(b,b.length-1,c.location,null,null),location:c.location}},f=function(b,c){for(var d=c.length-1,e=2*d-1,f=[],g=[],h=[],i=[],k=[[1,.6,.3,.1],[.4,.6,.6,.4],[.1,.3,.6,1]],l=0;d>=l;l++)f[l]=a.subtract(c[l],b);for(var l=0;d-1>=l;l++)g[l]=a.subtract(c[l+1],c[l]),g[l]=a.scale(g[l],3);for(var m=0;d-1>=m;m++)for(var n=0;d>=n;n++)h[m]||(h[m]=[]),h[m][n]=a.dotProduct(g[m],f[n]);for(l=0;e>=l;l++)i[l]||(i[l]=[]),i[l].y=0,i[l].x=parseFloat(l)/e;for(var o=d,p=d-1,q=0;o+p>=q;q++){var r=Math.max(0,q-p),s=Math.min(q,o);for(l=r;s>=l;l++)j=q-l,i[l+j].y+=h[j][l]*k[j][l]}return i},g=function(a,c,d,e){var f,j,m=[],n=[],o=[],p=[];switch(h(a,c)){case 0:return 0;case 1:if(e>=b)return d[0]=(a[0].x+a[c].x)/2,1;if(i(a,c))return d[0]=k(a,c),1}l(a,c,.5,m,n),f=g(m,c,o,e+1),j=g(n,c,p,e+1);for(var q=0;f>q;q++)d[q]=o[q];for(var q=0;j>q;q++)d[q+f]=p[q];return f+j},h=function(a,b){var c,d,e=0;c=d=Math.sgn(a[0].y);for(var f=1;b>=f;f++)c=Math.sgn(a[f].y),c!=d&&e++,d=c;return e},i=function(a,b){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;i=a[0].y-a[b].y,j=a[b].x-a[0].x,k=a[0].x*a[b].y-a[b].x*a[0].y;for(var t=max_distance_below=0,u=1;b>u;u++){var v=i*a[u].x+j*a[u].y+k;v>t?t=v:max_distance_below>v&&(max_distance_below=v)}return n=0,o=1,p=0,q=i,r=j,s=k-t,l=n*r-q*o,m=1/l,e=(o*s-r*p)*m,q=i,r=j,s=k-max_distance_below,l=n*r-q*o,m=1/l,f=(o*s-r*p)*m,g=Math.min(e,f),h=Math.max(e,f),d=h-g,c>d?1:0},k=function(a,b){var c=1,d=0,e=a[b].x-a[0].x,f=a[b].y-a[0].y,g=a[0].x-0,h=a[0].y-0,i=e*d-f*c,j=1/i,k=(e*h-f*g)*j;return 0+c*k},l=function(a,b,c,d,e){for(var f=[[]],g=0;b>=g;g++)f[0][g]=a[g];for(var h=1;b>=h;h++)for(var g=0;b-h>=g;g++)f[h]||(f[h]=[]),f[h][g]||(f[h][g]={}),f[h][g].x=(1-c)*f[h-1][g].x+c*f[h-1][g+1].x,f[h][g].y=(1-c)*f[h-1][g].y+c*f[h-1][g+1].y;if(null!=d)for(g=0;b>=g;g++)d[g]=f[g][0];if(null!=e)for(g=0;b>=g;g++)e[g]=f[b-g][g];return f[b][0]},m={},n=function(a){var b=m[a];if(!b){b=[];var c=function(){return function(b){return Math.pow(b,a)}},d=function(){return function(b){return Math.pow(1-b,a)}},e=function(a){return function(){return a}},f=function(){return function(a){return a}},g=function(){return function(a){return 1-a}},h=function(a){return function(b){for(var c=1,d=0;d<a.length;d++)c*=a[d](b);return c}};b.push(new c);for(var i=1;a>i;i++){for(var j=[new e(a)],k=0;a-i>k;k++)j.push(new f);for(var k=0;i>k;k++)j.push(new g);b.push(new h(j))}b.push(new d),m[a]=b}return b},o=function(a,b){for(var c=n(a.length-1),d=0,e=0,f=0;f<a.length;f++)d+=a[f].x*c[f](b),e+=a[f].y*c[f](b);return{x:d,y:e}},p=function(a,b){return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2))},q=function(a){return a[0].x==a[1].x&&a[0].y==a[1].y},r=function(a,b,c){if(q(a))return{point:a[0],location:b};for(var d=o(a,b),e=0,f=b,g=c>0?1:-1,h=null;e<Math.abs(c);)f+=.005*g,h=o(a,f),e+=p(h,d),d=h;return{point:h,location:f}},s=function(a){if(q(a))return 0;for(var b=o(a,0),c=0,d=0,e=1,f=null;1>d;)d+=.005*e,f=o(a,d),c+=p(f,b),b=f;return c},t=function(a,b,c){return r(a,b,c).point},u=function(a,b,c){return r(a,b,c).location},v=function(a,b){var c=o(a,b),d=o(a.slice(0,a.length-1),b),e=d.y-c.y,f=d.x-c.x;return 0==e?1/0:Math.atan(e/f)},w=function(a,b,c){var d=r(a,b,c);return d.location>1&&(d.location=1),d.location<0&&(d.location=0),v(a,d.location)},x=function(a,b,c,d){d=null==d?0:d;var e=r(a,b,d),f=v(a,e.location),g=Math.atan(-1/f),h=c/2*Math.sin(g),i=c/2*Math.cos(g);return[{x:e.point.x+i,y:e.point.y+h},{x:e.point.x-i,y:e.point.y-h}]};window.jsBezier={distanceFromCurve:d,gradientAtPoint:v,gradientAtPointAlongCurveFrom:w,nearestPointOnCurve:e,pointOnCurve:o,pointAlongCurveFrom:t,perpendicularToCurveAt:x,locationAlongCurveFrom:u,getLength:s}}(),function(){var a=function(a){return"[object Array]"===Object.prototype.toString.call(a)},b=function(a){return"[object Number]"===Object.prototype.toString.call(a)},c=function(a){return"string"==typeof a},d=function(a){return"boolean"==typeof a},e=function(a){return null==a},f=function(a){return null==a?!1:"[object Object]"===Object.prototype.toString.call(a)},g=function(a){return"[object Date]"===Object.prototype.toString.call(a)},h=function(a){return"[object Function]"===Object.prototype.toString.call(a)},i=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},j=function(b,c,d){return b=a(b)?b:[b.x,b.y],c=a(c)?c:[c.x,c.y],d(b,c)};jsPlumbUtil={isArray:a,isString:c,isBoolean:d,isNull:e,isObject:f,isDate:g,isFunction:h,isEmpty:i,isNumber:b,clone:function(b){if(c(b))return""+b;if(d(b))return!!b;if(g(b))return new Date(b.getTime());if(h(b))return b;if(a(b)){for(var e=[],i=0;i<b.length;i++)e.push(this.clone(b[i]));return e}if(f(b)){var j={};for(var k in b)j[k]=this.clone(b[k]);return j}return b},merge:function(b,e){var g=this.clone(b);for(var h in e)if(null==g[h]||c(e[h])||d(e[h]))g[h]=e[h];else if(a(e[h])){var i=[];a(g[h])&&i.push.apply(i,g[h]),i.push.apply(i,e[h]),g[h]=i}else if(f(e[h])){f(g[h])||(g[h]={});for(var j in e[h])g[h][j]=e[h][j]}return g},copyValues:function(a,b,c){for(var d=0;d<a.length;d++)c[a[d]]=b[a[d]]},functionChain:function(a,b,c){for(var d=0;d<c.length;d++){var e=c[d][0][c[d][1]].apply(c[d][0],c[d][2]);if(e===b)return e}return a},populate:function(b,d){var e=function(a){var b=a.match(/(\${.*?})/g);if(null!=b)for(var c=0;c<b.length;c++){var e=d[b[c].substring(2,b[c].length-1)];null!=e&&(a=a.replace(b[c],e))}return a},g=function(b){if(null!=b){if(c(b))return e(b);if(a(b)){for(var d=[],h=0;h<b.length;h++)d.push(g(b[h]));return d}if(f(b)){var i={};for(var j in b)i[j]=g(b[j]);return i}return b}};return g(b)},convertStyle:function(a,b){if("transparent"===a)return a;var c=a,d=function(a){return 1==a.length?"0"+a:a},e=function(a){return d(Number(a).toString(16))},f=/(rgb[a]?\()(.*)(\))/;if(a.match(f)){var g=a.match(f)[2].split(",");c="#"+e(g[0])+e(g[1])+e(g[2]),b||4!=g.length||(c+=e(g[3]))}return c},gradient:function(a,b){return j(a,b,function(a,b){return b[0]==a[0]?b[1]>a[1]?1/0:-1/0:b[1]==a[1]?b[0]>a[0]?0:-0:(b[1]-a[1])/(b[0]-a[0])})},normal:function(a,b){return-1/this.gradient(a,b)},lineLength:function(a,b){return j(a,b,function(a,b){return Math.sqrt(Math.pow(b[1]-a[1],2)+Math.pow(b[0]-a[0],2))})},segment:function(a,b){return j(a,b,function(a,b){return b[0]>a[0]?b[1]>a[1]?2:1:b[0]==a[0]?b[1]>a[1]?2:1:b[1]>a[1]?3:4})},theta:function(a,b){return j(a,b,function(a,b){var c=jsPlumbUtil.gradient(a,b),d=Math.atan(c),e=jsPlumbUtil.segment(a,b);return(4==e||3==e)&&(d+=Math.PI),0>d&&(d+=2*Math.PI),d})},intersects:function(a,b){var c=a.x,d=a.x+a.w,e=a.y,f=a.y+a.h,g=b.x,h=b.x+b.w,i=b.y,j=b.y+b.h;return g>=c&&d>=g&&i>=e&&f>=i||h>=c&&d>=h&&i>=e&&f>=i||g>=c&&d>=g&&j>=e&&f>=j||h>=c&&d>=g&&j>=e&&f>=j||c>=g&&h>=c&&e>=i&&j>=e||d>=g&&h>=d&&e>=i&&j>=e||c>=g&&h>=c&&f>=i&&j>=f||d>=g&&h>=c&&f>=i&&j>=f},segmentMultipliers:[null,[1,-1],[1,1],[-1,1],[-1,-1]],inverseSegmentMultipliers:[null,[-1,-1],[-1,1],[1,1],[1,-1]],pointOnLine:function(a,b,c){var d=jsPlumbUtil.gradient(a,b),e=jsPlumbUtil.segment(a,b),f=c>0?jsPlumbUtil.segmentMultipliers[e]:jsPlumbUtil.inverseSegmentMultipliers[e],g=Math.atan(d),h=Math.abs(c*Math.sin(g))*f[1],i=Math.abs(c*Math.cos(g))*f[0];return{x:a.x+i,y:a.y+h}},perpendicularLineTo:function(a,b,c){var d=jsPlumbUtil.gradient(a,b),e=Math.atan(-1/d),f=c/2*Math.sin(e),g=c/2*Math.cos(e);return[{x:b.x+g,y:b.y+f},{x:b.x-g,y:b.y-f}]},findWithFunction:function(a,b){if(a)for(var c=0;c<a.length;c++)if(b(a[c]))return c;return-1},clampToGrid:function(a,b,c,d,e){var f=function(a,b){var c=a%b,d=Math.floor(a/b),e=c>=b/2?1:0;return(d+e)*b};return[d||null==c?a:f(a,c[0]),e||null==c?b:f(b,c[1])]},indexOf:function(a,b){return jsPlumbUtil.findWithFunction(a,function(a){return a==b})},removeWithFunction:function(a,b){var c=jsPlumbUtil.findWithFunction(a,b);return c>-1&&a.splice(c,1),-1!=c},remove:function(a,b){var c=jsPlumbUtil.indexOf(a,b);return c>-1&&a.splice(c,1),-1!=c},addWithFunction:function(a,b,c){-1==jsPlumbUtil.findWithFunction(a,c)&&a.push(b)},addToList:function(a,b,c,d){var e=a[b];return null==e&&(e=[],a[b]=e),e[d?"unshift":"push"](c),e},extend:function(b,c,d,e){d=d||{},e=e||{},c=a(c)?c:[c];for(var f=0;f<c.length;f++)for(var g in c[f].prototype)c[f].prototype.hasOwnProperty(g)&&(b.prototype[g]=c[f].prototype[g]);var h=function(a){return function(){for(var b=0;b<c.length;b++)c[b].prototype[a]&&c[b].prototype[a].apply(this,arguments);return d[a].apply(this,arguments)}};for(var i in d)b.prototype[i]=h(i);return b},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)})},logEnabled:!0,log:function(){if(jsPlumbUtil.logEnabled&&"undefined"!=typeof console)try{var a=arguments[arguments.length-1];console.log(a)}catch(b){}},group:function(a){jsPlumbUtil.logEnabled&&"undefined"!=typeof console&&console.group(a)},groupEnd:function(a){jsPlumbUtil.logEnabled&&"undefined"!=typeof console&&console.groupEnd(a)},time:function(a){jsPlumbUtil.logEnabled&&"undefined"!=typeof console&&console.time(a)},timeEnd:function(a){jsPlumbUtil.logEnabled&&"undefined"!=typeof console&&console.timeEnd(a)},removeElement:function(a){null!=a&&null!=a.parentNode&&a.parentNode.removeChild(a)},removeElements:function(a){for(var b=0;b<a.length;b++)jsPlumbUtil.removeElement(a[b])},sizeElement:function(a,b,c,d,e){a&&(a.style.height=e+"px",a.height=e,a.style.width=d+"px",a.width=d,a.style.left=b+"px",a.style.top=c+"px")},wrap:function(a,b,c){return a=a||function(){},b=b||function(){},function(){var d=null;try{d=b.apply(this,arguments)}catch(e){jsPlumbUtil.log("jsPlumb function failed : "+e)}if(null==c||d!==c)try{d=a.apply(this,arguments)}catch(e){jsPlumbUtil.log("wrapped function failed : "+e)}return d}}},jsPlumbUtil.EventGenerator=function(){var a={},b=!1,c=["ready"];this.bind=function(b,c){return jsPlumbUtil.addToList(a,b,c,!0),this},this.fire=function(d,e,f){if(!b&&a[d]){var g=a[d].length,h=0,i=!1,j=null;if(!this.shouldFireEvent||this.shouldFireEvent(d,e,f))for(;!i&&g>h&&j!==!1;){if(-1!=jsPlumbUtil.findWithFunction(c,function(a){return a===d}))a[d][h](e,f);else try{j=a[d][h](e,f)}catch(k){jsPlumbUtil.log("jsPlumb: fire failed for event "+d+" : "+k)}h++,(null==a||null==a[d])&&(i=!0)}}return this},this.unbind=function(b){return b?delete a[b]:a={},this},this.getListener=function(b){return a[b]},this.setSuspendEvents=function(a){b=a},this.isSuspendEvents=function(){return b},this.cleanupListeners=function(){for(var b in a)a[b].splice(0),delete a[b]}},jsPlumbUtil.EventGenerator.prototype={cleanup:function(){this.cleanupListeners()}},Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e})}(),function(){var a=!!document.createElement("canvas").getContext,b=!!window.SVGAngle||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),c=function(){if(void 0===c.vml){var a=document.body.appendChild(document.createElement("div"));a.innerHTML='<v:shape id="vml_flag1" adj="1" />';var b=a.firstChild;null!=b&&null!=b.style?(b.style.behavior="url(#default#VML)",c.vml=b?"object"==typeof b.adj:!0):c.vml=!1,a.parentNode.removeChild(a)}return c.vml},d=function(a){var b={},c=[],d={},e={},f={};this.register=function(g){var h=jsPlumb.CurrentLibrary,i=h.getElementObject(g),j=a.getId(g),k=h.getOffset(i);b[j]||(b[j]=g,c.push(g),d[j]={});var l=function(b){if(b)for(var c=0;c<b.childNodes.length;c++)if(3!=b.childNodes[c].nodeType&&8!=b.childNodes[c].nodeType){var g=h.getElementObject(b.childNodes[c]),i=a.getId(b.childNodes[c],null,!0);if(i&&e[i]&&e[i]>0){var m=h.getOffset(g);d[j][i]={id:i,offset:{left:m.left-k.left,top:m.top-k.top}},f[i]=j}l(b.childNodes[c])}};l(g)},this.updateOffsets=function(b){var c=jsPlumb.CurrentLibrary,e=c.getElementObject(b),g=c.getDOMElement(e),h=a.getId(g),i=d[h],j=c.getOffset(e);if(i)for(var k in i){var l=c.getElementObject(k),m=c.getOffset(l);d[h][k]={id:k,offset:{left:m.left-j.left,top:m.top-j.top}},f[k]=h}},this.endpointAdded=function(c){var g=jsPlumb.CurrentLibrary,h=document.body,i=a.getId(c),j=g.getElementObject(c),k=jsPlumb.CurrentLibrary.getOffset(j),l=c.parentNode;for(e[i]=e[i]?e[i]+1:1;null!=l&&l!=h;){var m=a.getId(l,null,!0);if(m&&b[m]){var n=g.getElementObject(l),o=g.getOffset(n);null==d[m][i]&&(d[m][i]={id:i,offset:{left:k.left-o.left,top:k.top-o.top}},f[i]=m);break}l=l.parentNode}},this.endpointDeleted=function(a){if(e[a.elementId]&&(e[a.elementId]--,e[a.elementId]<=0))for(var b in d)d[b]&&(delete d[b][a.elementId],delete f[a.elementId])},this.changeId=function(a,b){d[b]=d[a],d[a]={},f[b]=f[a],f[a]=null},this.getElementsForDraggable=function(a){return d[a]},this.elementRemoved=function(a){var b=f[a];b&&(delete d[b][a],delete f[a])},this.reset=function(){b={},c=[],d={},e={}}};window.console||(window.console={time:function(){},timeEnd:function(){},group:function(){},groupEnd:function(){},log:function(){}}),window.jsPlumbAdapter={headless:!1,getAttribute:function(a,b){return a.getAttribute(b)},setAttribute:function(a,b,c){a.setAttribute(b,c)},appendToRoot:function(a){document.body.appendChild(a)},getRenderModes:function(){return["canvas","svg","vml"]},isRenderModeAvailable:function(d){return{canvas:a,svg:b,vml:c()}[d]},getDragManager:function(a){return new d(a)},setRenderMode:function(a){var b;if(a){a=a.toLowerCase();var c=this.isRenderModeAvailable("canvas"),d=this.isRenderModeAvailable("svg"),e=this.isRenderModeAvailable("vml");"svg"===a?d?b="svg":c?b="canvas":e&&(b="vml"):"canvas"===a&&c?b="canvas":e&&(b="vml")}return b}}}(),function(){var a=jsPlumbUtil,b=function(a,b){y.CurrentLibrary.addClass(d(a),b)},c=function(a,b){y.CurrentLibrary.removeClass(d(a),b)},d=function(a){return y.CurrentLibrary.getElementObject(a)},e=function(a){return y.CurrentLibrary.getDOMElement(a)},f=function(a,b){var c=y.CurrentLibrary.getOffset(d(a));if(null!=b){var e=b.getZoom();return{left:c.left/e,top:c.top/e}}return c},g=function(a){return y.CurrentLibrary.getSize(d(a))},h=function(){return""+(new Date).getTime()},i=function(a){if(a._jsPlumb.paintStyle&&a._jsPlumb.hoverPaintStyle){var b={};y.extend(b,a._jsPlumb.paintStyle),y.extend(b,a._jsPlumb.hoverPaintStyle),delete a._jsPlumb.hoverPaintStyle,b.gradient&&a._jsPlumb.paintStyle.fillStyle&&delete b.gradient,a._jsPlumb.hoverPaintStyle=b}},j=["click","dblclick","mouseenter","mouseout","mousemove","mousedown","mouseup","contextmenu"],k={mouseout:"mouseexit"},l=function(a,b,c,d){var e=a.getAttachedElements();if(e)for(var f=0,g=e.length;g>f;f++)d&&d==e[f]||e[f].setHover(b,!0,c)},m=function(a){return null==a?null:a.split(" ")},n=function(b,c,d){if(b.getDefaultType){for(var e=b.getTypeDescriptor(),f=a.merge({},b.getDefaultType()),g=0,h=b._jsPlumb.types.length;h>g;g++)f=a.merge(f,b._jsPlumb.instance.getType(b._jsPlumb.types[g],e));c&&(f=a.populate(f,c)),b.applyType(f,d),d||b.repaint()}},o=window.jsPlumbUIComponent=function(b){jsPlumbUtil.EventGenerator.apply(this,arguments);var c=this,d=arguments,e=c.idPrefix,f=e+(new Date).getTime(),g=y.CurrentLibrary;if(this._jsPlumb={instance:b._jsPlumb,parameters:b.parameters||{},paintStyle:null,hoverPaintStyle:null,paintStyleInUse:null,hover:!1,beforeDetach:b.beforeDetach,beforeDrop:b.beforeDrop,overlayPlacements:[],hoverClass:b.hoverClass||b._jsPlumb.Defaults.HoverClass||y.Defaults.HoverClass,types:[]},this.getId=function(){return f},b.events)for(var h in b.events)c.bind(h,b.events[h]);this.clone=function(){var a={};return this.constructor.apply(a,d),a}.bind(this),this.isDetachAllowed=function(b){var c=!0;if(this._jsPlumb.beforeDetach)try{c=this._jsPlumb.beforeDetach(b)}catch(d){a.log("jsPlumb: beforeDetach callback failed",d)}return c},this.isDropAllowed=function(b,c,d,e,f){var g=this._jsPlumb.instance.checkCondition("beforeDrop",{sourceId:b,targetId:c,scope:d,connection:e,dropEndpoint:f});if(this._jsPlumb.beforeDrop)try{g=this._jsPlumb.beforeDrop({sourceId:b,targetId:c,scope:d,connection:e,dropEndpoint:f})}catch(h){a.log("jsPlumb: beforeDrop callback failed",h)}return g};var i=[],l=function(a,b,c){i.push([a,b,c]),a.bind(b,c)},m=[],n=function(a,b,c){var d=k[c]||c,e=function(a){b.fire(d,b,a)};m.push([a,c,e]),g.bind(a,c,e)},o=function(a,b,c){k[b]||b,g.unbind(a,b,c)};this.bindListeners=function(a,b,c){l(a,"click",function(a,c){b.fire("click",b,c)}),l(a,"dblclick",function(a,c){b.fire("dblclick",b,c)}),l(a,"contextmenu",function(a,c){b.fire("contextmenu",b,c)}),l(a,"mouseenter",function(a,d){b.isHover()||(c(!0),b.fire("mouseenter",b,d))}),l(a,"mouseexit",function(a,d){b.isHover()&&(c(!1),b.fire("mouseexit",b,d))}),l(a,"mousedown",function(a,c){b.fire("mousedown",b,c)}),l(a,"mouseup",function(a,c){b.fire("mouseup",b,c)})},this.unbindListeners=function(){for(var a=0;a<i.length;a++){var b=i[a];b[0].unbind(b[1],b[2])}i=null},this.attachListeners=function(a,b){for(var c=0,d=j.length;d>c;c++)n(a,b,j[c])},this.detachListeners=function(){for(var a=0;a<m.length;a++)o(m[a][0],m[a][1],m[a][2]);m=null},this.reattachListenersForElement=function(a){if(arguments.length>1){for(var b=0,c=j.length;c>b;b++)o(a,j[b]);for(b=1,c=arguments.length;c>b;b++)this.attachListeners(a,arguments[b])}}};jsPlumbUtil.extend(o,jsPlumbUtil.EventGenerator,{getParameter:function(a){return this._jsPlumb.parameters[a]},setParameter:function(a,b){this._jsPlumb.parameters[a]=b},getParameters:function(){return this._jsPlumb.parameters},setParameters:function(a){this._jsPlumb.parameters=a},addClass:function(a){null!=this.canvas&&b(this.canvas,a)},removeClass:function(a){null!=this.canvas&&c(this.canvas,a)},setType:function(a,b,c){this._jsPlumb.types=m(a)||[],n(this,b,c)},getType:function(){return this._jsPlumb.types},reapplyTypes:function(a,b){n(this,a,b)},hasType:function(a){return-1!=jsPlumbUtil.indexOf(this._jsPlumb.types,a)},addType:function(a,b,c){var d=m(a),e=!1;if(null!=d){for(var f=0,g=d.length;g>f;f++)this.hasType(d[f])||(this._jsPlumb.types.push(d[f]),e=!0);e&&n(this,b,c)}},removeType:function(b,c){var d=m(b),e=!1,f=function(b){var c=a.indexOf(this._jsPlumb.types,b);return-1!=c?(this._jsPlumb.types.splice(c,1),!0):!1}.bind(this);if(null!=d){for(var g=0,h=d.length;h>g;g++)e=f(d[g])||e;e&&n(this,null,c)}},toggleType:function(a,b,c){var d=m(a);if(null!=d){for(var e=0,f=d.length;f>e;e++){var g=jsPlumbUtil.indexOf(this._jsPlumb.types,d[e]);-1!=g?this._jsPlumb.types.splice(g,1):this._jsPlumb.types.push(d[e])}n(this,b,c)}},applyType:function(a,b){if(this.setPaintStyle(a.paintStyle,b),this.setHoverPaintStyle(a.hoverPaintStyle,b),a.parameters)for(var c in a.parameters)this.setParameter(c,a.parameters[c])},setPaintStyle:function(a,b){this._jsPlumb.paintStyle=a,this._jsPlumb.paintStyleInUse=this._jsPlumb.paintStyle,i(this),b||this.repaint()},getPaintStyle:function(){return this._jsPlumb.paintStyle},setHoverPaintStyle:function(a,b){this._jsPlumb.hoverPaintStyle=a,i(this),b||this.repaint()},getHoverPaintStyle:function(){return this._jsPlumb.hoverPaintStyle},cleanup:function(){this.unbindListeners(),this.detachListeners()},destroy:function(){this.cleanupListeners(),this.clone=null,this._jsPlumb=null},isHover:function(){return this._jsPlumb.hover},setHover:function(a,b,c){var d=y.CurrentLibrary;!this._jsPlumb||this._jsPlumb.instance.currentlyDragging||this._jsPlumb.instance.isHoverSuspended()||(this._jsPlumb.hover=a,null!=this.canvas&&null!=this._jsPlumb.instance.hoverClass&&d[a?"addClass":"removeClass"](this.canvas,this._jsPlumb.instance.hoverClass),null!=this._jsPlumb.hoverPaintStyle&&(this._jsPlumb.paintStyleInUse=a?this._jsPlumb.hoverPaintStyle:this._jsPlumb.paintStyle,this._jsPlumb.instance.isSuspendDrawing()||(c=c||h(),this.repaint({timestamp:c,recalc:!1}))),this.getAttachedElements&&!b&&l(this,a,h(),this))}});var p="__label",q=function(a,b){for(var c=-1,d=0,e=a._jsPlumb.overlays.length;e>d;d++)if(b===a._jsPlumb.overlays[d].id){c=d;break}return c},r=function(a,b){var c={cssClass:b.cssClass,labelStyle:a.labelStyle,id:p,component:a,_jsPlumb:a._jsPlumb.instance},d=y.extend(c,b);return new(y.Overlays[a._jsPlumb.instance.getRenderMode()].Label)(d)},s=function(b,c){var d=null;if(a.isArray(c)){var e=c[0],f=y.extend({component:b,_jsPlumb:b._jsPlumb.instance},c[1]);3==c.length&&y.extend(f,c[2]),d=new(y.Overlays[b._jsPlumb.instance.getRenderMode()][e])(f)}else d=c.constructor==String?new(y.Overlays[b._jsPlumb.instance.getRenderMode()][c])({component:b,_jsPlumb:b._jsPlumb.instance}):c;b._jsPlumb.overlays.push(d)},t=function(a,b){var c=a.defaultOverlayKeys||[],d=b.overlays,e=function(b){return a._jsPlumb.instance.Defaults[b]||y.Defaults[b]||[]};d||(d=[]);for(var f=0,g=c.length;g>f;f++)d.unshift.apply(d,e(c[f]));return d},u=window.OverlayCapableJsPlumbUIComponent=function(a){o.apply(this,arguments),this._jsPlumb.overlays=[];var b=t(this,a);if(b)for(var c=0,d=b.length;d>c;c++)s(this,b[c]);if(a.label){var e=a.labelLocation||this.defaultLabelLocation||.5,f=a.labelStyle||this._jsPlumb.instance.Defaults.LabelStyle||y.Defaults.LabelStyle;this._jsPlumb.overlays.push(r(this,{label:a.label,location:e,labelStyle:f}))}};jsPlumbUtil.extend(u,o,{applyType:function(a,b){if(this.removeAllOverlays(b),a.overlays)for(var c=0,d=a.overlays.length;d>c;c++)this.addOverlay(a.overlays[c],!0)},setHover:function(a){if(this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged())for(var b=0,c=this._jsPlumb.overlays.length;c>b;b++)this._jsPlumb.overlays[b][a?"addClass":"removeClass"](this._jsPlumb.instance.hoverClass)},addOverlay:function(a,b){s(this,a),b||this.repaint()},getOverlay:function(a){var b=q(this,a);return b>=0?this._jsPlumb.overlays[b]:null},getOverlays:function(){return this._jsPlumb.overlays},hideOverlay:function(a){var b=this.getOverlay(a);b&&b.hide()},hideOverlays:function(){for(var a=0,b=this._jsPlumb.overlays.length;b>a;a++)this._jsPlumb.overlays[a].hide()},showOverlay:function(a){var b=this.getOverlay(a);b&&b.show()},showOverlays:function(){for(var a=0,b=this._jsPlumb.overlays.length;b>a;a++)this._jsPlumb.overlays[a].show()},removeAllOverlays:function(a){for(var b=0,c=this._jsPlumb.overlays.length;c>b;b++)this._jsPlumb.overlays[b].cleanup&&this._jsPlumb.overlays[b].cleanup();this._jsPlumb.overlays.splice(0,this._jsPlumb.overlays.length),a||this.repaint()},removeOverlay:function(a){var b=q(this,a);if(-1!=b){var c=this._jsPlumb.overlays[b];c.cleanup&&c.cleanup(),this._jsPlumb.overlays.splice(b,1)}},removeOverlays:function(){for(var a=0,b=arguments.length;b>a;a++)this.removeOverlay(arguments[a])},getLabel:function(){var a=this.getOverlay(p);return null!=a?a.getLabel():null},getLabelOverlay:function(){return this.getOverlay(p)},setLabel:function(a){var b=this.getOverlay(p);if(b)a.constructor==String||a.constructor==Function?b.setLabel(a):(a.label&&b.setLabel(a.label),a.location&&b.setLocation(a.location));else{var c=a.constructor==String||a.constructor==Function?{label:a}:a;b=r(this,c),this._jsPlumb.overlays.push(b)}this._jsPlumb.instance.isSuspendDrawing()||this.repaint()},cleanup:function(){for(var a=0;a<this._jsPlumb.overlays.length;a++)this._jsPlumb.overlays[a].cleanup(),this._jsPlumb.overlays[a].destroy();this._jsPlumb.overlays.splice(0)}});var v=0,w=function(){var a=v+1;return v++,a},x=window.jsPlumbInstance=function(i){this.Defaults={Anchor:"BottomCenter",Anchors:[null,null],ConnectionsDetachable:!0,ConnectionOverlays:[],Connector:"Bezier",Container:null,DoNotThrowErrors:!1,DragOptions:{},DropOptions:{},Endpoint:"Dot",EndpointOverlays:[],Endpoints:[null,null],EndpointStyle:{fillStyle:"#456"},EndpointStyles:[null,null],EndpointHoverStyle:null,EndpointHoverStyles:[null,null],HoverPaintStyle:null,LabelStyle:{color:"black"},LogEnabled:!1,Overlays:[],MaxConnections:1,PaintStyle:{lineWidth:8,strokeStyle:"#456"},ReattachConnections:!1,RenderMode:"svg",Scope:"jsPlumb_DefaultScope"},i&&y.extend(this.Defaults,i),this.logEnabled=this.Defaults.LogEnabled,this._connectionTypes={},this._endpointTypes={},jsPlumbUtil.EventGenerator.apply(this);var j=this,k=w(),l=j.bind,m={},n=1,p=function(a){var b=e(a);return{el:b,id:jsPlumbUtil.isString(a)&&null==b?a:bb(b)}};this.getInstanceIndex=function(){return k},this.setZoom=function(a,b){n=a,b&&j.repaintEverything()},this.getZoom=function(){return n};for(var q in this.Defaults)m[q]=this.Defaults[q];this.bind=function(a,b){"ready"===a&&s?b():l.apply(j,[a,b])},j.importDefaults=function(a){for(var b in a)j.Defaults[b]=a[b];return j},j.restoreDefaults=function(){return j.Defaults=y.extend({},m),j};var r=null,s=!1,t=[],u={},v={},x={},z={},A={},B={},C=!1,D=[],E=!1,F=null,G=this.Defaults.Scope,H=null,I=1,J=function(){return""+I++},K=function(a,b){j.Defaults.Container?y.CurrentLibrary.appendElement(a,j.Defaults.Container):b?y.CurrentLibrary.appendElement(a,b):jsPlumbAdapter.appendToRoot(a)},L=function(a){return a._nodes?a._nodes:a},M=function(a,b,c,d){if(!jsPlumbAdapter.headless&&!E){var e=bb(a),f=j.dragManager.getElementsForDraggable(e);null==c&&(c=h());var g=_({elId:e,offset:b,recalc:!1,timestamp:c});if(f)for(var i in f)_({elId:f[i].id,offset:{left:g.o.left+f[i].offset.left,top:g.o.top+f[i].offset.top},recalc:!1,timestamp:c});if(j.anchorManager.redraw(e,b,c,null,d),f)for(var k in f)j.anchorManager.redraw(f[k].id,b,c,f[k].offset,d,!0)}},N=function(b,c){var e,f,g=null;if(a.isArray(b)){g=[];for(var h=0,i=b.length;i>h;h++)e=d(b[h]),f=j.getAttribute(e,"id"),g.push(c(e,f))}else e=d(b),f=j.getAttribute(e,"id"),g=c(e,f);return g},O=function(a){return v[a]},P=function(d,e,f){if(!jsPlumbAdapter.headless){var g=null==e?!1:e,h=y.CurrentLibrary;if(g&&h.isDragSupported(d)&&!h.isAlreadyDraggable(d)){var i=f||j.Defaults.DragOptions||y.Defaults.DragOptions;i=y.extend({},i);var k=h.dragEvents.drag,l=h.dragEvents.stop,m=h.dragEvents.start;i[m]=a.wrap(i[m],function(){j.setHoverSuspended(!0),j.select({source:d}).addClass(j.elementDraggingClass+" "+j.sourceElementDraggingClass,!0),j.select({target:d}).addClass(j.elementDraggingClass+" "+j.targetElementDraggingClass,!0),j.setConnectionBeingDragged(!0)}),i[k]=a.wrap(i[k],function(){var a=h.getUIPosition(arguments,j.getZoom());M(d,a,null,!0),b(d,"jsPlumb_dragged")}),i[l]=a.wrap(i[l],function(){var a=h.getUIPosition(arguments,j.getZoom());M(d,a),c(d,"jsPlumb_dragged"),j.setHoverSuspended(!1),j.select({source:d}).removeClass(j.elementDraggingClass+" "+j.sourceElementDraggingClass,!0),j.select({target:d}).removeClass(j.elementDraggingClass+" "+j.targetElementDraggingClass,!0),j.setConnectionBeingDragged(!1)});var n=bb(d);B[n]=!0;var o=B[n];i.disabled=null==o?!1:!o,h.initDraggable(d,i,!1,j),j.dragManager.register(d)}}},Q=function(b,c){var d=y.extend({},b);if(c&&y.extend(d,c),d.source&&(d.source.endpoint?d.sourceEndpoint=d.source:d.source=e(d.source)),d.target&&(d.target.endpoint?d.targetEndpoint=d.target:d.target=e(d.target)),b.uuids&&(d.sourceEndpoint=O(b.uuids[0]),d.targetEndpoint=O(b.uuids[1])),d.sourceEndpoint&&d.sourceEndpoint.isFull())return a.log(j,"could not add connection; source endpoint is full"),void 0;if(d.targetEndpoint&&d.targetEndpoint.isFull())return a.log(j,"could not add connection; target endpoint is full"),void 0;if(!d.type&&d.sourceEndpoint&&(d.type=d.sourceEndpoint.connectionType),d.sourceEndpoint&&d.sourceEndpoint.connectorOverlays){d.overlays=d.overlays||[];for(var f=0,g=d.sourceEndpoint.connectorOverlays.length;g>f;f++)d.overlays.push(d.sourceEndpoint.connectorOverlays[f])}!d["pointer-events"]&&d.sourceEndpoint&&d.sourceEndpoint.connectorPointerEvents&&(d["pointer-events"]=d.sourceEndpoint.connectorPointerEvents);var h,i,k,l;if(d.target&&!d.target.endpoint&&!d.targetEndpoint&&!d.newConnection&&(h=bb(d.target),i=sb[h],k=tb[h],i)){if(!Db[h])return;i.isTarget=!0,l=null!=k?k:j.addEndpoint(d.target,i),ub[h]&&(tb[h]=l),d.targetEndpoint=l,l._doNotDeleteOnDetach=!1,l._deleteOnDetach=!0}if(d.source&&!d.source.endpoint&&!d.sourceEndpoint&&!d.newConnection&&(h=bb(d.source),i=xb[h],k=yb[h],i)){if(!Ab[h])return;l=null!=k?k:j.addEndpoint(d.source,i),zb[h]&&(yb[h]=l),d.sourceEndpoint=l,l._doNotDeleteOnDetach=!1,l._deleteOnDetach=!0}return d},R=function(a){var b=j.Defaults.ConnectionType||j.getDefaultConnectionType(),c=j.Defaults.EndpointType||y.Endpoint,d=y.CurrentLibrary.getParent;a.parent=a.container?a.container:a.sourceEndpoint?a.sourceEndpoint.parent:a.source.constructor==c?a.source.parent:d(a.source),a._jsPlumb=j,a.newConnection=R,a.newEndpoint=V,a.endpointsByUUID=v,a.endpointsByElement=u,a.finaliseConnection=S;var e=new b(a);return e.id="con_"+J(),T("click","click",e),T("dblclick","dblclick",e),T("contextmenu","contextmenu",e),e},S=function(a,b,c,d){if(b=b||{},a.suspendedEndpoint||t.push(a),(null==a.suspendedEndpoint||d)&&j.anchorManager.newConnection(a),M(a.source),!b.doNotFireConnectionEvent&&b.fireEvent!==!1){var e={connection:a,source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]};j.fire("connection",e,c)}},T=function(a,b,c){c.bind(a,function(a,d){j.fire(b,c,d)})},U=function(a){if(a.container)return a.container;var b=y.CurrentLibrary.getTagName(a.source),c=y.CurrentLibrary.getParent(a.source);return b&&"td"===b.toLowerCase()?y.CurrentLibrary.getParent(c):c},V=function(a){var b=j.Defaults.EndpointType||y.Endpoint,c=y.extend({},a);c.parent=U(c),c._jsPlumb=j,c.newConnection=R,c.newEndpoint=V,c.endpointsByUUID=v,c.endpointsByElement=u,c.finaliseConnection=S,c.fireDetachEvent=cb,c.floatingConnections=A,c.getParentFromParams=U,c.elementId=bb(c.source);var d=new b(c);return d.id="ep_"+J(),T("click","endpointClick",d),T("dblclick","endpointDblClick",d),T("contextmenu","contextmenu",d),jsPlumbAdapter.headless||j.dragManager.endpointAdded(c.source),d},W=function(a,b,c){var d=u[a];if(d&&d.length)for(var e=0,f=d.length;f>e;e++){for(var g=0,h=d[e].connections.length;h>g;g++){var i=b(d[e].connections[g]);if(i)return}c&&c(d[e])}},X=function(a,b){return N(a,function(a,c){B[c]=b,y.CurrentLibrary.isDragSupported(a)&&y.CurrentLibrary.setDraggable(a,b)})},Y=function(a,b,c){b="block"===b;var d=null;c&&(d=b?function(a){a.setVisible(!0,!0,!0)}:function(a){a.setVisible(!1,!0,!0)});var e=p(a);W(e.id,function(a){if(b&&c){var d=a.sourceId===e.id?1:0;a.endpoints[d].isVisible()&&a.setVisible(!0)}else a.setVisible(b)},d)},Z=function(a){return N(a,function(a,b){var c=null==B[b]?!1:B[b];return c=!c,B[b]=c,y.CurrentLibrary.setDraggable(a,c),c})},$=function(a,b){var c=null;b&&(c=function(a){var b=a.isVisible();a.setVisible(!b)}),W(a,function(a){var b=a.isVisible();a.setVisible(!b)},c)},_=function(a){var b,c=a.timestamp,e=a.recalc,h=a.offset,i=a.elId;return E&&!c&&(c=F),!e&&c&&c===z[i]?{o:a.offset||x[i],s:D[i]}:(e||!h?(b=d(i),null!=b&&(D[i]=g(b),x[i]=f(b,j),z[i]=c)):(x[i]=h,null==D[i]&&(b=d(i),null!=b&&(D[i]=g(b))),z[i]=c),x[i]&&!x[i].right&&(x[i].right=x[i].left+D[i][0],x[i].bottom=x[i].top+D[i][1],x[i].width=D[i][0],x[i].height=D[i][1],x[i].centerx=x[i].left+x[i].width/2,x[i].centery=x[i].top+x[i].height/2),{o:x[i],s:D[i]})},ab=function(a){var b=x[a];return b?{o:b,s:D[a]}:_({elId:a})},bb=function(a,b,c){if(jsPlumbUtil.isString(a))return a;if(null==a)return null;var d=jsPlumbAdapter.getAttribute(a,"id");return d&&"undefined"!==d||(2==arguments.length&&void 0!==arguments[1]?d=b:(1==arguments.length||3==arguments.length&&!arguments[2])&&(d="jsPlumb_"+k+"_"+J()),c||jsPlumbAdapter.setAttribute(a,"id",d)),d};this.setConnectionBeingDragged=function(a){C=a
},this.isConnectionBeingDragged=function(){return C},this.connectorClass="_jsPlumb_connector",this.hoverClass="_jsPlumb_hover",this.endpointClass="_jsPlumb_endpoint",this.endpointConnectedClass="_jsPlumb_endpoint_connected",this.endpointFullClass="_jsPlumb_endpoint_full",this.endpointDropAllowedClass="_jsPlumb_endpoint_drop_allowed",this.endpointDropForbiddenClass="_jsPlumb_endpoint_drop_forbidden",this.overlayClass="_jsPlumb_overlay",this.draggingClass="_jsPlumb_dragging",this.elementDraggingClass="_jsPlumb_element_dragging",this.sourceElementDraggingClass="_jsPlumb_source_element_dragging",this.targetElementDraggingClass="_jsPlumb_target_element_dragging",this.endpointAnchorClassPrefix="_jsPlumb_endpoint_anchor",this.hoverSourceClass="_jsPlumb_source_hover",this.hoverTargetClass="_jsPlumb_target_hover",this.dragSelectClass="_jsPlumb_drag_select",this.Anchors={},this.Connectors={canvas:{},svg:{},vml:{}},this.Endpoints={canvas:{},svg:{},vml:{}},this.Overlays={canvas:{},svg:{},vml:{}},this.ConnectorRenderers={},this.SVG="svg",this.CANVAS="canvas",this.VML="vml",this.addEndpoint=function(b,c,d){d=d||{};var f=y.extend({},d);y.extend(f,c),f.endpoint=f.endpoint||j.Defaults.Endpoint||y.Defaults.Endpoint,f.paintStyle=f.paintStyle||j.Defaults.EndpointStyle||y.Defaults.EndpointStyle,b=L(b);for(var g=[],h=a.isArray(b)||null!=b.length&&!a.isString(b)?b:[b],i=0,k=h.length;k>i;i++){var l=e(h[i]),m=bb(l);f.source=l,_({elId:m,timestamp:F});var n=V(f);f.parentAnchor&&(n.parentAnchor=f.parentAnchor),a.addToList(u,m,n);var o=x[m],p=D[m],q=n.anchor.compute({xy:[o.left,o.top],wh:p,element:n,timestamp:F}),r={anchorLoc:q,timestamp:F};E&&(r.recalc=!1),E||n.paint(r),g.push(n),n._doNotDeleteOnDetach=!0}return 1==g.length?g[0]:g},this.addEndpoints=function(b,c,d){for(var e=[],f=0,g=c.length;g>f;f++){var h=j.addEndpoint(b,c[f],d);a.isArray(h)?Array.prototype.push.apply(e,h):e.push(h)}return e},this.animate=function(b,c,e){e=e||{};var f=d(b),g=bb(b),h=y.CurrentLibrary.dragEvents.step,i=y.CurrentLibrary.dragEvents.complete;e[h]=a.wrap(e[h],function(){j.repaint(g)}),e[i]=a.wrap(e[i],function(){j.repaint(g)}),y.CurrentLibrary.animate(f,c,e)},this.checkCondition=function(b,c){var d=j.getListener(b),e=!0;if(d&&d.length>0)try{for(var f=0,g=d.length;g>f;f++)e=e&&d[f](c)}catch(h){a.log(j,"cannot check condition ["+b+"]"+h)}return e},this.checkASyncCondition=function(b,c,d,e){var f=j.getListener(b);if(f&&f.length>0)try{f[0](c,d,e)}catch(g){a.log(j,"cannot asynchronously check condition ["+b+"]"+g)}},this.connect=function(a,b){var c,d=Q(a,b);return d&&(c=R(d),S(c,d)),c},this.deleteEndpoint=function(a,b){var c=j.setSuspendDrawing(!0),d="string"==typeof a?v[a]:a;return d&&j.deleteObject({endpoint:d}),c||j.setSuspendDrawing(!1,b),j},this.deleteEveryEndpoint=function(){var a=j.setSuspendDrawing(!0);for(var b in u){var c=u[b];if(c&&c.length)for(var d=0,e=c.length;e>d;d++)j.deleteEndpoint(c[d],!0)}return u={},v={},j.anchorManager.reset(),j.dragManager.reset(),a||j.setSuspendDrawing(!1),j};var cb=function(a,b,c){var d=j.Defaults.ConnectionType||j.getDefaultConnectionType(),e=a.constructor==d,f=e?{connection:a,source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]}:a;b&&j.fire("connectionDetached",f,c),j.anchorManager.connectionDetached(f)};this.unregisterEndpoint=function(a){a._jsPlumb.uuid&&(v[a._jsPlumb.uuid]=null),j.anchorManager.deleteEndpoint(a);for(var b in u){var c=u[b];if(c){for(var d=[],e=0,f=c.length;f>e;e++)c[e]!=a&&d.push(c[e]);u[b]=d}u[b].length<1&&delete u[b]}},this.detach=function(){if(0!==arguments.length){var a=j.Defaults.ConnectionType||j.getDefaultConnectionType(),b=arguments[0].constructor==a,c=2==arguments.length?b?arguments[1]||{}:arguments[0]:arguments[0],d=c.fireEvent!==!1,f=c.forceDetach,g=b?arguments[0]:c.connection;if(g)(f||jsPlumbUtil.functionChain(!0,!1,[[g.endpoints[0],"isDetachAllowed",[g]],[g.endpoints[1],"isDetachAllowed",[g]],[g,"isDetachAllowed",[g]],[j,"checkCondition",["beforeDetach",g]]]))&&g.endpoints[0].detach(g,!1,!0,d);else{var h=y.extend({},c);if(h.uuids)O(h.uuids[0]).detachFrom(O(h.uuids[1]),d);else if(h.sourceEndpoint&&h.targetEndpoint)h.sourceEndpoint.detachFrom(h.targetEndpoint);else{var i=bb(e(h.source)),k=bb(e(h.target));W(i,function(a){(a.sourceId==i&&a.targetId==k||a.targetId==i&&a.sourceId==k)&&j.checkCondition("beforeDetach",a)&&a.endpoints[0].detach(a,!1,!0,d)})}}}},this.detachAllConnections=function(a,b){b=b||{},a=e(a);var c=bb(a),d=u[c];if(d&&d.length)for(var f=0,g=d.length;g>f;f++)d[f].detachAll(b.fireEvent!==!1);return j},this.detachEveryConnection=function(a){return a=a||{},j.doWhileSuspended(function(){for(var b in u){var c=u[b];if(c&&c.length)for(var d=0,e=c.length;e>d;d++)c[d].detachAll(a.fireEvent!==!1)}t.splice(0)}),j},this.deleteObject=function(a){var b={endpoints:{},connections:{},endpointCount:0,connectionCount:0},c=a.fireEvent!==!1,d=a.deleteAttachedObjects!==!1,e=function(a){if(null!=a&&null==b.connections[a.id]&&(a._jsPlumb&&a.setHover(!1),b.connections[a.id]=a,b.connectionCount++,d))for(var c=0;c<a.endpoints.length;c++)a.endpoints[c]._deleteOnDetach&&f(a.endpoints[c])},f=function(a){if(null!=a&&null==b.endpoints[a.id]&&(a._jsPlumb&&a.setHover(!1),b.endpoints[a.id]=a,b.endpointCount++,d))for(var c=0;c<a.connections.length;c++){var f=a.connections[c];e(f)}};a.connection?e(a.connection):f(a.endpoint);for(var g in b.connections){var h=b.connections[g];h.endpoints[0].detachFromConnection(h),h.endpoints[1].detachFromConnection(h),jsPlumbUtil.removeWithFunction(t,function(a){return h.id==a.id}),cb(h,c,a.originalEvent),h.cleanup(),h.destroy()}for(var i in b.endpoints){var k=b.endpoints[i];j.unregisterEndpoint(k),k.cleanup(),k.destroy()}return b},this.draggable=function(a,b){var c,d,f;if("object"==typeof a&&a.length)for(c=0,d=a.length;d>c;c++)f=e(a[c]),f&&P(f,!0,b);else if(a._nodes)for(c=0,d=a._nodes.length;d>c;c++)f=e(a._nodes[c]),f&&P(f,!0,b);else f=e(a),f&&P(f,!0,b);return j},this.extend=function(a,b){return y.CurrentLibrary.extend(a,b)};var db=function(a,b,c,d){for(var e=0,f=a.length;f>e;e++)a[e][b].apply(a[e],c);return d(a)},eb=function(a,b,c){for(var d=[],e=0,f=a.length;f>e;e++)d.push([a[e][b].apply(a[e],c),a[e]]);return d},fb=function(a,b,c){return function(){return db(a,b,arguments,c)}},gb=function(a,b){return function(){return eb(a,b,arguments)}},hb=function(a,b){var c=[];if(a)if("string"==typeof a){if("*"===a)return a;c.push(a)}else if(a=d(a),b)c=a;else for(var e=0,f=a.length;f>e;e++)c.push(p(a[e]).id);return c},ib=function(a,b,c){return"*"===a?!0:a.length>0?-1!=jsPlumbUtil.indexOf(a,b):!c};this.getConnections=function(a,b){a?a.constructor==String&&(a={scope:a}):a={};for(var c=a.scope||j.getDefaultScope(),d=hb(c,!0),e=hb(a.source),f=hb(a.target),g=!b&&d.length>1?{}:[],h=function(a,c){if(!b&&d.length>1){var e=g[a];null==e&&(e=g[a]=[]),e.push(c)}else g.push(c)},i=0,k=t.length;k>i;i++){var l=t[i];ib(d,l.scope)&&ib(e,l.sourceId)&&ib(f,l.targetId)&&h(l.scope,l)}return g};var jb=function(a,b){return function(c){for(var d=0,e=a.length;e>d;d++)c(a[d]);return b(a)}},kb=function(a){return function(b){return a[b]}},lb=function(a,b){var c,d,e={length:a.length,each:jb(a,b),get:kb(a)},f=["setHover","removeAllOverlays","setLabel","addClass","addOverlay","removeOverlay","removeOverlays","showOverlay","hideOverlay","showOverlays","hideOverlays","setPaintStyle","setHoverPaintStyle","setSuspendEvents","setParameter","setParameters","setVisible","repaint","addType","toggleType","removeType","removeClass","setType","bind","unbind"],g=["getLabel","getOverlay","isHover","getParameter","getParameters","getPaintStyle","getHoverPaintStyle","isVisible","hasType","getType","isSuspendEvents"];for(c=0,d=f.length;d>c;c++)e[f[c]]=fb(a,f[c],b);for(c=0,d=g.length;d>c;c++)e[g[c]]=gb(a,g[c]);return e},mb=function(a){var b=lb(a,mb);return y.CurrentLibrary.extend(b,{setDetachable:fb(a,"setDetachable",mb),setReattach:fb(a,"setReattach",mb),setConnector:fb(a,"setConnector",mb),detach:function(){for(var b=0,c=a.length;c>b;b++)j.detach(a[b])},isDetachable:gb(a,"isDetachable"),isReattach:gb(a,"isReattach")})},nb=function(a){var b=lb(a,nb);return y.CurrentLibrary.extend(b,{setEnabled:fb(a,"setEnabled",nb),setAnchor:fb(a,"setAnchor",nb),isEnabled:gb(a,"isEnabled"),detachAll:function(){for(var b=0,c=a.length;c>b;b++)a[b].detachAll()},remove:function(){for(var b=0,c=a.length;c>b;b++)j.deleteObject({endpoint:a[b]})}})};this.select=function(a){return a=a||{},a.scope=a.scope||"*",mb(a.connections||j.getConnections(a,!0))},this.selectEndpoints=function(a){a=a||{},a.scope=a.scope||"*";var b=!a.element&&!a.source&&!a.target,c=b?"*":hb(a.element),d=b?"*":hb(a.source),e=b?"*":hb(a.target),f=hb(a.scope,!0),g=[];for(var h in u){var i=ib(c,h,!0),j=ib(d,h,!0),k="*"!=d,l=ib(e,h,!0),m="*"!=e;if(i||j||l)a:for(var n=0,o=u[h].length;o>n;n++){var p=u[h][n];if(ib(f,p.scope,!0)){var q=k&&d.length>0&&!p.isSource,r=m&&e.length>0&&!p.isTarget;if(q||r)continue a;g.push(p)}}}return nb(g)},this.getAllConnections=function(){return t},this.getDefaultScope=function(){return G},this.getEndpoint=O,this.getEndpoints=function(a){return u[p(a).id]},this.getDefaultEndpointType=function(){return y.Endpoint},this.getDefaultConnectionType=function(){return y.Connection},this.getId=bb,this.getOffset=function(a){return x[a],_({elId:a})},this.getSelector=function(){return y.CurrentLibrary.getSelector.apply(null,arguments)},this.getSize=function(a){var b=D[a];return b||_({elId:a}),D[a]},this.appendElement=K;var ob=!1;this.isHoverSuspended=function(){return ob},this.setHoverSuspended=function(a){ob=a};var pb=function(a){return function(){return jsPlumbAdapter.isRenderModeAvailable(a)}};this.isCanvasAvailable=pb("canvas"),this.isSVGAvailable=pb("svg"),this.isVMLAvailable=pb("vml"),this.hide=function(a,b){return Y(a,"none",b),j},this.idstamp=J,this.connectorsInitialized=!1;var qb=[],rb=["canvas","svg","vml"];this.registerConnectorType=function(a,b){qb.push([a,b])},this.init=function(){var a=function(a,b,c){y.Connectors[a][b]=function(){c.apply(this,arguments),y.ConnectorRenderers[a].apply(this,arguments)},jsPlumbUtil.extend(y.Connectors[a][b],[c,y.ConnectorRenderers[a]])};if(!y.connectorsInitialized){for(var b=0;b<qb.length;b++)for(var c=0;c<rb.length;c++)a(rb[c],qb[b][1],qb[b][0]);y.connectorsInitialized=!0}s||(j.anchorManager=new y.AnchorManager({jsPlumbInstance:j}),j.setRenderMode(j.Defaults.RenderMode),s=!0,j.fire("ready",j))}.bind(this),this.log=r,this.jsPlumbUIComponent=o,this.makeAnchor=function(){var b=function(a,b){if(y.Anchors[a])return new y.Anchors[a](b);if(!j.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown anchor type '"+a+"'"}};if(0===arguments.length)return null;var c=arguments[0],d=arguments[1],e=arguments[2],f=null;if(c.compute&&c.getOrientation)return c;if("string"==typeof c)f=b(arguments[0],{elementId:d,jsPlumbInstance:j});else if(a.isArray(c))if(a.isArray(c[0])||a.isString(c[0]))if(2==c.length&&a.isString(c[0])&&a.isObject(c[1])){var g=y.extend({elementId:d,jsPlumbInstance:j},c[1]);f=b(c[0],g)}else f=new y.DynamicAnchor({anchors:c,selector:null,elementId:d,jsPlumbInstance:e});else{var h={x:c[0],y:c[1],orientation:c.length>=4?[c[2],c[3]]:[0,0],offsets:c.length>=6?[c[4],c[5]]:[0,0],elementId:d,jsPlumbInstance:e,cssClass:7==c.length?c[6]:null};f=new y.Anchor(h),f.clone=function(){return new y.Anchor(h)}}return f.id||(f.id="anchor_"+J()),f},this.makeAnchors=function(b,c,d){for(var e=[],f=0,g=b.length;g>f;f++)"string"==typeof b[f]?e.push(y.Anchors[b[f]]({elementId:c,jsPlumbInstance:d})):a.isArray(b[f])&&e.push(j.makeAnchor(b[f],c,d));return e},this.makeDynamicAnchor=function(a,b){return new y.DynamicAnchor({anchors:a,selector:b,elementId:null,jsPlumbInstance:j})};var sb={},tb={},ub={},vb={},wb=function(a,b){a.paintStyle=a.paintStyle||j.Defaults.EndpointStyles[b]||j.Defaults.EndpointStyle||y.Defaults.EndpointStyles[b]||y.Defaults.EndpointStyle,a.hoverPaintStyle=a.hoverPaintStyle||j.Defaults.EndpointHoverStyles[b]||j.Defaults.EndpointHoverStyle||y.Defaults.EndpointHoverStyles[b]||y.Defaults.EndpointHoverStyle,a.anchor=a.anchor||j.Defaults.Anchors[b]||j.Defaults.Anchor||y.Defaults.Anchors[b]||y.Defaults.Anchor,a.endpoint=a.endpoint||j.Defaults.Endpoints[b]||j.Defaults.Endpoint||y.Defaults.Endpoints[b]||y.Defaults.Endpoint},xb={},yb={},zb={},Ab={},Bb={},Cb={},Db={},Eb=function(a,b,c){for(var d=a.target||a.srcElement,e=!1,f=j.getSelector(b,c),g=0;g<f.length;g++)if(f[g]==d){e=!0;break}return e};this.makeTarget=function(b,c,e){var h=y.extend({_jsPlumb:j},e);y.extend(h,c),wb(h,1);var i=y.CurrentLibrary,k=h.scope||j.Defaults.Scope,l=!(h.deleteEndpointsOnDetach===!1),m=h.maxConnections||-1,n=h.onMaxConnections;_doOne=function(b){var c=p(b),e=c.id,q=new o(h),r=y.extend({},h.dropOptions||{});sb[e]=h,ub[e]=h.uniqueEndpoint,vb[e]=m,Db[e]=!0;var s=function(){j.currentlyDragging=!1;var a=y.CurrentLibrary.getDropEvent(arguments),b=j.select({target:e}).length,k=d(i.getDragObject(arguments)),m=j.getAttribute(k,"dragId"),o=j.getAttribute(k,"originalScope"),p=A[m],r=p.endpoints[0].isFloating()?0:1,s=p.endpoints[0];if(h.endpoint?y.extend({},h.endpoint):{},!Db[e]||vb[e]>0&&b>=vb[e])return n&&n({element:c.el,connection:p},a),!1;s.anchor.locked=!1,o&&i.setDragScope(k,o);var t=q.isDropAllowed(0===r?e:p.sourceId,0===r?p.targetId:e,p.scope,p,null);if(p.suspendedEndpoint&&(p[r?"targetId":"sourceId"]=p.suspendedEndpoint.elementId,p[r?"target":"source"]=p.suspendedEndpoint.element,p.endpoints[r]=p.suspendedEndpoint),t){var u=i.getElementObject(c.el),v=tb[e]||j.addEndpoint(u,h);if(h.uniqueEndpoint&&(tb[e]=v),v._doNotDeleteOnDetach=!1,v._deleteOnDetach=!0,null!=v.anchor.positionFinder){var w=i.getUIPosition(arguments,j.getZoom()),x=f(u,j),z=g(u),B=v.anchor.positionFinder(w,x,z,v.anchor.constructorParams);v.anchor.x=B[0],v.anchor.y=B[1]}p[r?"target":"source"]=v.element,p[r?"targetId":"sourceId"]=v.elementId,p.endpoints[r].detachFromConnection(p),p.endpoints[r]._deleteOnDetach&&(p.endpoints[r].deleteAfterDragStop=!0),v.addConnection(p),p.endpoints[r]=v,p.deleteEndpointsOnDetach=l,1==r?j.anchorManager.updateOtherEndpoint(p.sourceId,p.suspendedElementId,p.targetId,p):j.anchorManager.sourceChanged(p.suspendedEndpoint.elementId,p.sourceId,p),S(p,null,a)}else p.suspendedEndpoint&&(p.isReattach()?(p.setHover(!1),p.floatingAnchorIndex=null,p.suspendedEndpoint.addConnection(p),j.repaint(s.elementId)):s.detach(p,!1,!0,!0,a))},t=i.dragEvents.drop;r.scope=r.scope||k,r[t]=a.wrap(r[t],s),i.initDroppable(d(c.el),r,!0)},b=L(b);for(var q=b.length&&b.constructor!=String?b:[b],r=0,s=q.length;s>r;r++)_doOne(q[r]);return j},this.unmakeTarget=function(a,b){var c=p(a);return y.CurrentLibrary.destroyDroppable(c.el),b||(delete sb[c.id],delete ub[c.id],delete vb[c.id],delete Db[c.id]),j},this.makeSource=function(b,c,f){var g=y.extend({},f);y.extend(g,c),wb(g,0);var h=y.CurrentLibrary,i=g.maxConnections||-1,k=g.onMaxConnections,l=function(b){var c=b.id,f=d(b.el),l=function(){return null==g.parent?null:"parent"===g.parent?b.el.parentNode:e(g.parent)},m=null!=g.parent?j.getId(l()):c;xb[m]=g,zb[m]=g.uniqueEndpoint,Ab[m]=!0;var n=h.dragEvents.stop,o=h.dragEvents.drag,p=y.extend({},g.dragOptions||{}),q=p.drag,r=p.stop,s=null,u=!1;Cb[m]=i,p.scope=p.scope||g.scope,p[o]=a.wrap(p[o],function(){q&&q.apply(this,arguments),u=!1}),p[n]=a.wrap(p[n],function(){if(r&&r.apply(this,arguments),j.currentlyDragging=!1,null!=s._jsPlumb){h.unbind(s.canvas,"mousedown");var a=g.anchor||j.Defaults.Anchor,b=(s.anchor,s.connections[0]);if(s.setAnchor(j.makeAnchor(a,c,j),!0),g.parent){var d=l();if(d){var e=(s.elementId,g.container||j.Defaults.Container||y.Defaults.Container);s.setElement(d,e),s.endpointWillMoveAfterConnection=!1,b.previousConnection=null,jsPlumbUtil.removeWithFunction(t,function(a){return a.id===b.id}),j.anchorManager.connectionDetached({sourceId:b.sourceId,targetId:b.targetId,connection:b}),S(b)}}s.repaint(),j.repaint(s.elementId),j.repaint(b.targetId)}});var v=function(a){if(Ab[m]){if(g.filter){var b=h.getOriginalEvent(a),d=jsPlumbUtil.isString(g.filter)?Eb(b,f,g.filter):g.filter(b,f);if(d===!1)return}var e=j.select({source:m}).length;if(Cb[m]>=0&&e>=Cb[m])return k&&k({element:f,maxConnections:i},a),!1;var n=_({elId:c}).o,o=j.getZoom(),q=((a.pageX||a.page.x)/o-n.left)/n.width,r=((a.pageY||a.page.y)/o-n.top)/n.height,t=q,v=r;if(g.parent){var w=l(),x=bb(w);n=_({elId:x}).o,t=((a.pageX||a.page.x)-n.left)/n.width,v=((a.pageY||a.page.y)-n.top)/n.height}var z={};if(y.extend(z,g),z.isSource=!0,z.anchor=[q,r,0,0],z.parentAnchor=[t,v,0,0],z.dragOptions=p,g.parent){var A=z.container||j.Defaults.Container||y.Defaults.Container;z.container=A?A:y.CurrentLibrary.getParent(l())}s=j.addEndpoint(c,z),u=!0,s.endpointWillMoveAfterConnection=null!=g.parent,s.endpointWillMoveTo=g.parent?l():null,s._doNotDeleteOnDetach=!1,s._deleteOnDetach=!0;var B=function(){u&&(u=!1,j.deleteEndpoint(s))};j.registerListener(s.canvas,"mouseup",B),j.registerListener(f,"mouseup",B),h.trigger(s.canvas,"mousedown",a)}};j.registerListener(f,"mousedown",v),Bb[c]=v,g.filter&&jsPlumbUtil.isString(g.filter)&&h.setDragFilter(f,g.filter)};b=L(b);for(var m=b.length&&b.constructor!=String?b:[b],n=0,o=m.length;o>n;n++)l(p(m[n]));return j},this.unmakeSource=function(a,b){var c=p(a),d=Bb[c.id];return d&&j.unregisterListener(c.el,"mousedown",d),b||(delete xb[c.id],delete zb[c.id],delete Ab[c.id],delete Bb[c.id],delete Cb[c.id]),j},this.unmakeEverySource=function(){for(var a in Ab)j.unmakeSource(a,!0);xb={},zb={},Ab={},Bb={}},this.unmakeEveryTarget=function(){for(var a in Db)j.unmakeTarget(a,!0);return sb={},ub={},vb={},Db={},j};var Fb=function(b,c,d,e){var f="source"==b?Ab:Db;if(c=L(c),a.isString(c))f[c]=e?!f[c]:d;else if(c.length)for(var g=0,h=c.length;h>g;g++){var i=p(c[g]);f[i.id]=e?!f[i.id]:d}return j};this.toggleSourceEnabled=function(a){return Fb("source",a,null,!0),j.isSourceEnabled(a)},this.setSourceEnabled=function(a,b){return Fb("source",a,b)},this.isSource=function(a){return null!=Ab[p(a).id]},this.isSourceEnabled=function(a){return Ab[p(a).id]===!0},this.toggleTargetEnabled=function(a){return Fb("target",a,null,!0),j.isTargetEnabled(a)},this.isTarget=function(a){return null!=Db[p(a).id]},this.isTargetEnabled=function(a){return Db[p(a).id]===!0},this.setTargetEnabled=function(a,b){return Fb("target",a,b)},this.ready=function(a){j.bind("ready",a)},this.repaint=function(a,b,c){if("object"==typeof a&&a.length)for(var d=0,e=a.length;e>d;d++)M(a[d],b,c);else M(a,b,c);return j},this.repaintEverything=function(){var a=h();for(var b in u)M(b,null,a);return j},this.removeAllEndpoints=function(a,b){var c=function(a){var d,e,f=p(a),g=u[f.id];if(g)for(d=0,e=g.length;e>d;d++)j.deleteEndpoint(g[d]);if(delete u[f.id],b&&f.el&&3!=f.el.nodeType&&8!=f.el.nodeType)for(d=0,e=f.el.childNodes.length;e>d;d++)c(f.el.childNodes[d])};return c(a),j},this.remove=function(a,b){var c=p(a);j.doWhileSuspended(function(){j.removeAllEndpoints(c.id,!0),j.dragManager.elementRemoved(c.id),delete A[c.id],j.anchorManager.clearFor(c.id),j.anchorManager.removeFloatingConnection(c.id)},b===!1),c.el&&y.CurrentLibrary.removeElement(c.el)};var Gb={},Hb=function(){for(var a in Gb)for(var b=0,c=Gb[a].length;c>b;b++){var d=Gb[a][b];y.CurrentLibrary.unbind(d.el,d.event,d.listener)}Gb={}};this.registerListener=function(a,b,c){y.CurrentLibrary.bind(a,b,c),jsPlumbUtil.addToList(Gb,b,{el:a,event:b,listener:c})},this.unregisterListener=function(a,b,c){y.CurrentLibrary.unbind(a,b,c),jsPlumbUtil.removeWithFunction(Gb,function(a){return a.type==b&&a.listener==c})},this.reset=function(){j.deleteEveryEndpoint(),j.unbind(),sb={},tb={},ub={},vb={},xb={},yb={},zb={},Cb={},t.splice(0),Hb(),j.anchorManager.reset(),jsPlumbAdapter.headless||j.dragManager.reset()},this.setDefaultScope=function(a){return G=a,j},this.setDraggable=X,this.setId=function(a,b,c){var d;jsPlumbUtil.isString(a)?d=a:(a=e(a),d=j.getId(a));var f=j.getConnections({source:d,scope:"*"},!0),g=j.getConnections({target:d,scope:"*"},!0);b=""+b,c?a=e(b):(a=e(d),jsPlumbAdapter.setAttribute(a,"id",b)),u[b]=u[d]||[];for(var h=0,i=u[b].length;i>h;h++)u[b][h].setElementId(b),u[b][h].setReferenceElement(a);delete u[d],j.anchorManager.changeId(d,b),jsPlumbAdapter.headless||j.dragManager.changeId(d,b);var k=function(c,d,e){for(var f=0,g=c.length;g>f;f++)c[f].endpoints[d].setElementId(b),c[f].endpoints[d].setReferenceElement(a),c[f][e+"Id"]=b,c[f][e]=a};k(f,0,"source"),k(g,1,"target"),j.repaint(b)},this.setDebugLog=function(a){r=a},this.setSuspendDrawing=function(a,b){var c=E;return E=a,F=a?(new Date).getTime():null,b&&j.repaintEverything(),c},this.isSuspendDrawing=function(){return E},this.getSuspendedAt=function(){return F},this.doWhileSuspended=function(b,c){var d=j.isSuspendDrawing();d||j.setSuspendDrawing(!0);try{b()}catch(e){a.log("Function run while suspended failed",e)}d||j.setSuspendDrawing(!1,!c)},this.updateOffset=_,this.getOffset=function(a){return x[a]},this.getSize=function(a){return D[a]},this.getCachedData=ab,this.timestamp=h,this.setRenderMode=function(a){H=jsPlumbAdapter.setRenderMode(a);var b,c;if(H==y.CANVAS){var d=function(a){y.CurrentLibrary.bind(document,a,function(d){if(!j.currentlyDragging&&H==y.CANVAS){for(b=0,c=t.length;c>b;b++){var e=t[b].getConnector()[a](d);if(e)return}for(var f in u){var g=u[f];for(b=0,c=g.length;c>b;b++)if(g[b].endpoint[a]&&g[b].endpoint[a](d))return}}})};d("click"),d("dblclick"),d("mousemove"),d("mousedown"),d("mouseup"),d("contextmenu")}return H},this.getRenderMode=function(){return H},this.show=function(a,b){return Y(a,"block",b),j},this.getTestHarness=function(){return{endpointsByElement:u,endpointCount:function(a){var b=u[a];return b?b.length:0},connectionCount:function(a){a=a||G;var b=j.getConnections({scope:a});return b?b.length:0},getId:bb,makeAnchor:self.makeAnchor,makeDynamicAnchor:self.makeDynamicAnchor}},this.toggleVisible=$,this.toggleDraggable=Z,this.addListener=this.bind,this.adjustForParentOffsetAndScroll=function(a,b){var c=null,d=a;if("svg"===b.tagName.toLowerCase()&&b.parentNode?c=b.parentNode:b.offsetParent&&(c=b.offsetParent),null!=c){var e="body"===c.tagName.toLowerCase()?{left:0,top:0}:f(c,j),g="body"===c.tagName.toLowerCase()?{left:0,top:0}:{left:c.scrollLeft,top:c.scrollTop};d[0]=a[0]-e.left+g.left,d[1]=a[1]-e.top+g.top}return d},jsPlumbAdapter.headless||(j.dragManager=jsPlumbAdapter.getDragManager(j),j.recalculateOffsets=j.dragManager.updateOffsets)};jsPlumbUtil.extend(x,jsPlumbUtil.EventGenerator,{setAttribute:function(a,b,c){jsPlumbAdapter.setAttribute(a,b,c)},getAttribute:function(a,b){return jsPlumbAdapter.getAttribute(y.CurrentLibrary.getDOMElement(a),b)},registerConnectionType:function(a,b){this._connectionTypes[a]=y.extend({},b)},registerConnectionTypes:function(a){for(var b in a)this._connectionTypes[b]=y.extend({},a[b])},registerEndpointType:function(a,b){this._endpointTypes[a]=y.extend({},b)},registerEndpointTypes:function(a){for(var b in a)this._endpointTypes[b]=y.extend({},a[b])},getType:function(a,b){return"connection"===b?this._connectionTypes[a]:this._endpointTypes[a]},setIdChanged:function(a,b){this.setId(a,b,!0)}});var y=new x;"undefined"!=typeof window&&(window.jsPlumb=y),y.getInstance=function(a){var b=new x(a);return b.init(),b},"function"==typeof define&&(define("jsplumb",[],function(){return y}),define("jsplumbinstance",[],function(){return y.getInstance()})),"undefined"!=typeof exports&&(exports.jsPlumb=y)}(),function(){var a=function(a,b){var c=!1;return{drag:function(){if(c)return c=!1,!0;var d=jsPlumb.CurrentLibrary.getUIPosition(arguments,b.getZoom());a.element&&(jsPlumb.CurrentLibrary.setOffset(a.element,d),b.repaint(a.element,d))},stopDrag:function(){c=!0}}},b=function(a,b,c){var d=document.createElement("div");d.style.position="absolute",jsPlumb.CurrentLibrary.getElementObject(d),jsPlumb.CurrentLibrary.appendElement(d,b);var e=c.getId(d);c.updateOffset({elId:e}),a.id=e,a.element=d},c=function(a,b,c,d,e,f,g){var h=new jsPlumb.FloatingAnchor({reference:b,referenceCanvas:d,jsPlumbInstance:f});return g({paintStyle:a,endpoint:c,anchor:h,source:e,scope:"__floating"})},d=["connectorStyle","connectorHoverStyle","connectorOverlays","connector","connectionType","connectorClass","connectorHoverClass"],e=function(a,b){var c=0;if(null!=b)for(var d=0;d<a.connections.length;d++)if(a.connections[d].sourceId==b||a.connections[d].targetId==b){c=d;break}return a.connections[c]},f=function(a,b){return jsPlumbUtil.findWithFunction(b.connections,function(b){return b.id==a.id})};jsPlumb.Endpoint=function(g){var h=g._jsPlumb,i=jsPlumb.CurrentLibrary,j=(jsPlumbAdapter.getAttribute,i.getElementObject),k=i.getDOMElement,l=jsPlumbUtil,m=g.newConnection,n=g.newEndpoint,o=g.finaliseConnection,p=g.fireDetachEvent,q=g.floatingConnections;this.idPrefix="_jsplumb_e_",this.defaultLabelLocation=[.5,.5],this.defaultOverlayKeys=["Overlays","EndpointOverlays"],this.parent=g.parent,OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.getDefaultType=function(){return{parameters:{},scope:null,maxConnections:this._jsPlumb.instance.Defaults.MaxConnections,paintStyle:this._jsPlumb.instance.Defaults.EndpointStyle||jsPlumb.Defaults.EndpointStyle,endpoint:this._jsPlumb.instance.Defaults.Endpoint||jsPlumb.Defaults.Endpoint,hoverPaintStyle:this._jsPlumb.instance.Defaults.EndpointHoverStyle||jsPlumb.Defaults.EndpointHoverStyle,overlays:this._jsPlumb.instance.Defaults.EndpointOverlays||jsPlumb.Defaults.EndpointOverlays,connectorStyle:g.connectorStyle,connectorHoverStyle:g.connectorHoverStyle,connectorClass:g.connectorClass,connectorHoverClass:g.connectorHoverClass,connectorOverlays:g.connectorOverlays,connector:g.connector,connectorTooltip:g.connectorTooltip}},this._jsPlumb.enabled=!(g.enabled===!1),this._jsPlumb.visible=!0,this.element=k(g.source),this._jsPlumb.uuid=g.uuid,this._jsPlumb.floatingEndpoint=null;var r=null;this._jsPlumb.uuid&&(g.endpointsByUUID[this._jsPlumb.uuid]=this),this.elementId=g.elementId,this._jsPlumb.connectionCost=g.connectionCost,this._jsPlumb.connectionsDirected=g.connectionsDirected,this._jsPlumb.currentAnchorClass="",this._jsPlumb.events={};var s=function(){i.removeClass(this.element,h.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this.removeClass(h.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this._jsPlumb.currentAnchorClass=this.anchor.getCssClass(),this.addClass(h.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),i.addClass(this.element,h.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass)}.bind(this);this.setAnchor=function(a,b){return this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId),this.anchor=this._jsPlumb.instance.makeAnchor(a,this.elementId,h),s(),this.anchor.bind("anchorChanged",function(a){this.fire("anchorChanged",{endpoint:this,anchor:a}),s()}.bind(this)),b||this._jsPlumb.instance.repaint(this.elementId),this};var t=g.anchor?g.anchor:g.anchors?g.anchors:h.Defaults.Anchor||"Top";this.setAnchor(t,!0);var u=function(a){this.connections.length>0?this.connections[0].setHover(a,!1):this.setHover(a)}.bind(this);if(g._transient||this._jsPlumb.instance.anchorManager.add(this,this.elementId),this.setEndpoint=function(a){null!=this.endpoint&&(this.endpoint.cleanup(),this.endpoint.destroy());var b=function(a,b){var c=h.getRenderMode();if(jsPlumb.Endpoints[c][a])return new jsPlumb.Endpoints[c][a](b);if(!h.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown endpoint type '"+a+"'"}},c={_jsPlumb:this._jsPlumb.instance,cssClass:g.cssClass,parent:g.parent,container:g.container,tooltip:g.tooltip,connectorTooltip:g.connectorTooltip,endpoint:this};l.isString(a)?this.endpoint=b(a,c):l.isArray(a)?(c=l.merge(a[1],c),this.endpoint=b(a[0],c)):this.endpoint=a.clone(),jsPlumb.extend({},c),this.endpoint.clone=function(){return l.isString(a)?b(a,c):l.isArray(a)?(c=l.merge(a[1],c),b(a[0],c)):void 0}.bind(this),this.type=this.endpoint.type,this.bindListeners(this.endpoint,this,u)},this.setEndpoint(g.endpoint||h.Defaults.Endpoint||jsPlumb.Defaults.Endpoint||"Dot"),this.setPaintStyle(g.paintStyle||g.style||h.Defaults.EndpointStyle||jsPlumb.Defaults.EndpointStyle,!0),this.setHoverPaintStyle(g.hoverPaintStyle||h.Defaults.EndpointHoverStyle||jsPlumb.Defaults.EndpointHoverStyle,!0),this._jsPlumb.paintStyleInUse=this.getPaintStyle(),l.copyValues(d,g,this),this.isSource=g.isSource||!1,this.isTarget=g.isTarget||!1,this._jsPlumb.maxConnections=g.maxConnections||h.Defaults.MaxConnections,this.canvas=this.endpoint.canvas,this.addClass(h.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),i.addClass(this.element,h.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this.connections=g.connections||[],this.connectorPointerEvents=g["connector-pointer-events"],this.scope=g.scope||h.getDefaultScope(),this.timestamp=null,this.reattachConnections=g.reattach||h.Defaults.ReattachConnections,this.connectionsDetachable=h.Defaults.ConnectionsDetachable,(g.connectionsDetachable===!1||g.detachable===!1)&&(this.connectionsDetachable=!1),this.dragAllowedWhenFull=g.dragAllowedWhenFull||!0,g.onMaxConnections&&this.bind("maxConnections",g.onMaxConnections),this.addConnection=function(a){this.connections.push(a),this[(this.connections.length>0?"add":"remove")+"Class"](h.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](h.endpointFullClass)},this.detachFromConnection=function(a,b){b=null==b?f(a,this):b,b>=0&&(this.connections.splice(b,1),this[(this.connections.length>0?"add":"remove")+"Class"](h.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](h.endpointFullClass))},this.detach=function(a,b,c,d,e,g,i){var j=null==i?f(a,this):i,k=!1;return d=d!==!1,j>=0&&(c||a._forceDetach||a.isDetachable()&&a.isDetachAllowed(a)&&this.isDetachAllowed(a))&&(h.deleteObject({connection:a,fireEvent:!b&&d,originalEvent:e}),k=!0),k},this.detachAll=function(a,b){for(;this.connections.length>0;)this.detach(this.connections[0],!1,!0,a!==!1,b,this,0);return this},this.detachFrom=function(a,b,c){for(var d=[],e=0;e<this.connections.length;e++)(this.connections[e].endpoints[1]==a||this.connections[e].endpoints[0]==a)&&d.push(this.connections[e]);for(var f=0;f<d.length;f++)this.detach(d[f],!1,!0,b,c);return this},this.getElement=function(){return this.element},this.setElement=function(a){var b=this._jsPlumb.instance.getId(a),c=this.elementId;return l.removeWithFunction(g.endpointsByElement[this.elementId],function(a){return a.id==this.id}.bind(this)),this.element=k(a),this.elementId=h.getId(this.element),h.anchorManager.rehomeEndpoint(this,c,this.element),h.dragManager.endpointAdded(this.element),l.addToList(g.endpointsByElement,b,this),this},this.makeInPlaceCopy=function(){var a=this.anchor.getCurrentLocation({element:this}),b=this.anchor.getOrientation(this),c=this.anchor.getCssClass(),d={bind:function(){},compute:function(){return[a[0],a[1]]},getCurrentLocation:function(){return[a[0],a[1]]},getOrientation:function(){return b},getCssClass:function(){return c}};return n({anchor:d,source:this.element,paintStyle:this.getPaintStyle(),endpoint:g.hideOnDrag?"Blank":this.endpoint,_transient:!0,scope:this.scope})},this.isFloating=function(){return null!=this.anchor&&this.anchor.isFloating},this.connectorSelector=function(){var a=this.connections[0];return this.isTarget&&a?a:this.connections.length<this._jsPlumb.maxConnections||-1==this._jsPlumb.maxConnections?null:a},this.setStyle=this.setPaintStyle,this.paint=function(a){a=a||{};var b=a.timestamp,c=!(a.recalc===!1);if(!b||this.timestamp!==b){var d=h.updateOffset({elId:this.elementId,timestamp:b}),f=a.offset?a.offset.o:d.o;if(null!=f){var g=a.anchorPoint,i=a.connectorPaintStyle;if(null==g){var j=a.dimensions||d.s,k={xy:[f.left,f.top],wh:j,element:this,timestamp:b};if(c&&this.anchor.isDynamic&&this.connections.length>0){var l=e(this,a.elementWithPrecedence),m=l.endpoints[0]==this?1:0,n=0===m?l.sourceId:l.targetId,o=h.getCachedData(n),p=o.o,q=o.s;k.txy=[p.left,p.top],k.twh=q,k.tElement=l.endpoints[m]}g=this.anchor.compute(k)}this.endpoint.compute(g,this.anchor.getOrientation(this),this._jsPlumb.paintStyleInUse,i||this.paintStyleInUse),this.endpoint.paint(this._jsPlumb.paintStyleInUse,this.anchor),this.timestamp=b;
  for(var r=0;r<this._jsPlumb.overlays.length;r++){var s=this._jsPlumb.overlays[r];s.isVisible()&&(this._jsPlumb.overlayPlacements[r]=s.draw(this.endpoint,this._jsPlumb.paintStyleInUse),s.paint(this._jsPlumb.overlayPlacements[r]))}}}},this.repaint=this.paint,i.isDragSupported(this.element)&&(this.isSource||this.isTarget)){var v={id:null,element:null},w=null,x=!1,y=null,z=a(v,h),A=function(){w=this.connectorSelector();var a=!0;if(this.isEnabled()||(a=!1),null!=w||this.isSource||(a=!1),this.isSource&&this.isFull()&&!this.dragAllowedWhenFull&&(a=!1),null==w||w.isDetachable()||(a=!1),a===!1)return i.stopDrag&&i.stopDrag(),z.stopDrag(),!1;for(var d=0;d<this.connections.length;d++)this.connections[d].setHover(!1);this.addClass("endpointDrag"),h.setConnectionBeingDragged(!0),w&&!this.isFull()&&this.isSource&&(w=null),h.updateOffset({elId:this.elementId}),r=this.makeInPlaceCopy(),r.referenceEndpoint=this,r.paint(),b(v,this.parent,h);var e=j(r.canvas),f=jsPlumb.CurrentLibrary.getOffset(e,h),k=h.adjustForParentOffsetAndScroll([f.left,f.top],r.canvas),o=j(this.canvas);if(i.setOffset(v.element,{left:k[0],top:k[1]}),this.parentAnchor&&(this.anchor=h.makeAnchor(this.parentAnchor,this.elementId,h)),h.setAttribute(this.canvas,"dragId",v.id),h.setAttribute(this.canvas,"elId",this.elementId),this._jsPlumb.floatingEndpoint=c(this.getPaintStyle(),this.anchor,this.endpoint,this.canvas,v.element,h,n),this.canvas.style.visibility="hidden",null==w)this.anchor.locked=!0,this.setHover(!1,!1),w=m({sourceEndpoint:this,targetEndpoint:this._jsPlumb.floatingEndpoint,source:this.endpointWillMoveTo||this.element,target:v.element,anchors:[this.anchor,this._jsPlumb.floatingEndpoint.anchor],paintStyle:g.connectorStyle,hoverPaintStyle:g.connectorHoverStyle,connector:g.connector,overlays:g.connectorOverlays,type:this.connectionType,cssClass:this.connectorClass,hoverClass:this.connectorHoverClass}),w.addClass(h.draggingClass),this._jsPlumb.floatingEndpoint.addClass(h.draggingClass),h.fire("connectionDrag",w);else{x=!0,w.setHover(!1),H(e,!1,!0);var p=w.endpoints[0].id==this.id?0:1;w.floatingAnchorIndex=p,this.detachFromConnection(w);var s=jsPlumb.CurrentLibrary.getDragScope(o);h.setAttribute(this.canvas,"originalScope",s);var t=i.getDropScope(o);i.setDragScope(o,t),h.fire("connectionDrag",w),0===p?(y=[w.source,w.sourceId,o,s],w.source=v.element,w.sourceId=v.id):(y=[w.target,w.targetId,o,s],w.target=v.element,w.targetId=v.id),w.endpoints[0===p?1:0].anchor.locked=!0,w.suspendedEndpoint=w.endpoints[p],w.suspendedElement=w.endpoints[p].getElement(),w.suspendedElementId=w.endpoints[p].elementId,w.suspendedElementType=0===p?"source":"target",w.suspendedEndpoint.setHover(!1),this._jsPlumb.floatingEndpoint.referenceEndpoint=w.suspendedEndpoint,w.endpoints[p]=this._jsPlumb.floatingEndpoint,w.addClass(h.draggingClass),this._jsPlumb.floatingEndpoint.addClass(h.draggingClass)}q[v.id]=w,h.anchorManager.addFloatingConnection(v.id,w),l.addToList(g.endpointsByElement,v.id,this._jsPlumb.floatingEndpoint),h.currentlyDragging=!0}.bind(this),B=g.dragOptions||{},C=jsPlumb.extend({},i.defaultDragOptions),D=i.dragEvents.start,E=i.dragEvents.stop,F=i.dragEvents.drag;B=jsPlumb.extend(C,B),B.scope=B.scope||this.scope,B[D]=l.wrap(B[D],A,!1),B[F]=l.wrap(B[F],z.drag),B[E]=l.wrap(B[E],function(){h.setConnectionBeingDragged(!1);var a=i.getDropEvent(arguments),b=null==w.floatingAnchorIndex?1:w.floatingAnchorIndex;w.endpoints[0===b?1:0].anchor.locked=!1,w.removeClass(h.draggingClass),w.endpoints[b]==this._jsPlumb.floatingEndpoint&&x&&w.suspendedEndpoint&&(0===b?(w.source=y[0],w.sourceId=y[1]):(w.target=y[0],w.targetId=y[1]),i.setDragScope(y[2],y[3]),w.endpoints[b]=w.suspendedEndpoint,(w.isReattach()||w._forceReattach||w._forceDetach||!w.endpoints[0===b?1:0].detach(w,!1,!1,!0,a))&&(w.setHover(!1),w.floatingAnchorIndex=null,w._forceDetach=null,w._forceReattach=null,this._jsPlumb.floatingEndpoint.detachFromConnection(w),w.suspendedEndpoint.addConnection(w),h.repaint(y[1]))),h.remove(v.element,!1),h.remove(r.canvas,!1),this.deleteAfterDragStop?h.deleteObject({endpoint:this}):this._jsPlumb&&(this._jsPlumb.floatingEndpoint=null,this.canvas.style.visibility="visible",this.anchor.locked=!1,this.paint({recalc:!1})),h.fire("connectionDragStop",w),h.currentlyDragging=!1,w=null}.bind(this));var G=j(this.canvas);i.initDraggable(G,B,!0,h)}var H=function(a,b,c,d){if((this.isTarget||b)&&i.isDropSupported(this.element)){var e=g.dropOptions||h.Defaults.DropOptions||jsPlumb.Defaults.DropOptions;e=jsPlumb.extend({},e),e.scope=e.scope||this.scope;var f=i.dragEvents.drop,k=i.dragEvents.over,m=i.dragEvents.out,n=function(){this.removeClass(h.endpointDropAllowedClass),this.removeClass(h.endpointDropForbiddenClass);var a=i.getDropEvent(arguments),b=j(i.getDragObject(arguments)),c=h.getAttribute(b,"dragId"),e=(h.getAttribute(b,"elId"),h.getAttribute(b,"originalScope")),f=q[c],g=f.suspendedEndpoint&&(f.suspendedEndpoint.id==this.id||this.referenceEndpoint&&f.suspendedEndpoint.id==this.referenceEndpoint.id);if(g)return f._forceReattach=!0,void 0;if(null!=f){var k=null==f.floatingAnchorIndex?1:f.floatingAnchorIndex;e&&jsPlumb.CurrentLibrary.setDragScope(b,e);var l=null!=d?d.isEnabled():!0;if(this.isFull()&&this.fire("maxConnections",{endpoint:this,connection:f,maxConnections:this._jsPlumb.maxConnections},a),!this.isFull()&&(0!==k||this.isSource)&&(1!=k||this.isTarget)&&l){var m=!0;f.suspendedEndpoint&&f.suspendedEndpoint.id!=this.id&&(0===k?(f.source=f.suspendedEndpoint.element,f.sourceId=f.suspendedEndpoint.elementId):(f.target=f.suspendedEndpoint.element,f.targetId=f.suspendedEndpoint.elementId),f.isDetachAllowed(f)&&f.endpoints[k].isDetachAllowed(f)&&f.suspendedEndpoint.isDetachAllowed(f)&&h.checkCondition("beforeDetach",f)||(m=!1)),0===k?(f.source=this.element,f.sourceId=this.elementId):(f.target=this.element,f.targetId=this.elementId);var n=function(){f.floatingAnchorIndex=null},r=function(){f.endpoints[k].detachFromConnection(f),f.suspendedEndpoint&&f.suspendedEndpoint.detachFromConnection(f),f.endpoints[k]=this,this.addConnection(f);var b=this.getParameters();for(var c in b)f.setParameter(c,b[c]);if(f.suspendedEndpoint){var d=f.suspendedEndpoint.getElement(),e=f.suspendedEndpoint.elementId;p({source:0===k?d:f.source,target:1==k?d:f.target,sourceId:0===k?e:f.sourceId,targetId:1==k?e:f.targetId,sourceEndpoint:0===k?f.suspendedEndpoint:f.endpoints[0],targetEndpoint:1==k?f.suspendedEndpoint:f.endpoints[1],connection:f},!0,a)}else b.draggable&&jsPlumb.CurrentLibrary.initDraggable(this.element,B,!0,h);1==k?h.anchorManager.updateOtherEndpoint(f.sourceId,f.suspendedElementId,f.targetId,f):h.anchorManager.sourceChanged(f.suspendedEndpoint.elementId,f.sourceId,f),o(f,null,a,!0),n()}.bind(this),s=function(){f.suspendedEndpoint&&(f.endpoints[k]=f.suspendedEndpoint,f.setHover(!1),f._forceDetach=!0,0===k?(f.source=f.suspendedEndpoint.element,f.sourceId=f.suspendedEndpoint.elementId):(f.target=f.suspendedEndpoint.element,f.targetId=f.suspendedEndpoint.elementId),f.suspendedEndpoint.addConnection(f),f.endpoints[0].repaint(),f.repaint(),h.repaint(f.sourceId),f._forceDetach=!1),n()};m=m&&this.isDropAllowed(f.sourceId,f.targetId,f.scope,f,this),m?r():s()}h.currentlyDragging=!1}}.bind(this);e[f]=l.wrap(e[f],n),e[k]=l.wrap(e[k],function(){var a=i.getDragObject(arguments),b=h.getAttribute(a,"dragId"),c=q[b];if(null!=c){var d=null==c.floatingAnchorIndex?1:c.floatingAnchorIndex,e=this.isTarget&&0!==c.floatingAnchorIndex||c.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==c.suspendedEndpoint.id;if(e){var f=h.checkCondition("checkDropAllowed",{sourceEndpoint:c.endpoints[d],targetEndpoint:this,connection:c});this[(f?"add":"remove")+"Class"](h.endpointDropAllowedClass),this[(f?"remove":"add")+"Class"](h.endpointDropForbiddenClass),c.endpoints[d].anchor.over(this.anchor,this)}}}.bind(this)),e[m]=l.wrap(e[m],function(){var a=i.getDragObject(arguments),b=h.getAttribute(a,"dragId"),c=q[b];if(null!=c){var d=null==c.floatingAnchorIndex?1:c.floatingAnchorIndex,e=this.isTarget&&0!==c.floatingAnchorIndex||c.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id==c.suspendedEndpoint.id;e&&(this.removeClass(h.endpointDropAllowedClass),this.removeClass(h.endpointDropForbiddenClass),c.endpoints[d].anchor.out())}}.bind(this)),i.initDroppable(a,e,!0,c)}}.bind(this);return H(j(this.canvas),!0,!(g._transient||this.anchor.isFloating),this),g.type&&this.addType(g.type,g.data,h.isSuspendDrawing()),this},jsPlumbUtil.extend(jsPlumb.Endpoint,OverlayCapableJsPlumbUIComponent,{getTypeDescriptor:function(){return"endpoint"},isVisible:function(){return this._jsPlumb.visible},setVisible:function(a,b,c){if(this._jsPlumb.visible=a,this.canvas&&(this.canvas.style.display=a?"block":"none"),this[a?"showOverlays":"hideOverlays"](),!b)for(var d=0;d<this.connections.length;d++)if(this.connections[d].setVisible(a),!c){var e=this===this.connections[d].endpoints[0]?1:0;1==this.connections[d].endpoints[e].connections.length&&this.connections[d].endpoints[e].setVisible(a,!0,!0)}},getAttachedElements:function(){return this.connections},applyType:function(a){null!=a.maxConnections&&(this._jsPlumb.maxConnections=a.maxConnections),a.scope&&(this.scope=a.scope),jsPlumbUtil.copyValues(d,a,this)},isEnabled:function(){return this._jsPlumb.enabled},setEnabled:function(a){this._jsPlumb.enabled=a},cleanup:function(){jsPlumb.CurrentLibrary.removeClass(this.element,this._jsPlumb.instance.endpointAnchorClassPrefix+"_"+this._jsPlumb.currentAnchorClass),this.anchor=null,this.endpoint.cleanup(),this.endpoint.destroy(),this.endpoint=null;var a=jsPlumb.CurrentLibrary.getElementObject(this.canvas);jsPlumb.CurrentLibrary.destroyDraggable(a),jsPlumb.CurrentLibrary.destroyDroppable(a)},setHover:function(a){this.endpoint&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&this.endpoint.setHover(a)},isFull:function(){return!(this.isFloating()||this._jsPlumb.maxConnections<1||this.connections.length<this._jsPlumb.maxConnections)},getConnectionCost:function(){return this._jsPlumb.connectionCost},setConnectionCost:function(a){this._jsPlumb.connectionCost=a},areConnectionsDirected:function(){return this._jsPlumb.connectionsDirected},setConnectionsDirected:function(a){this._jsPlumb.connectionsDirected=a},setElementId:function(a){this.elementId=a,this.anchor.elementId=a},setReferenceElement:function(a){this.element=jsPlumb.CurrentLibrary.getDOMElement(a)},setDragAllowedWhenFull:function(a){this.dragAllowedWhenFull=a},equals:function(a){return this.anchor.equals(a.anchor)},getUuid:function(){return this._jsPlumb.uuid},computeAnchor:function(a){return this.anchor.compute(a)}})}(),function(){var a=function(a,b,c,d){if(!a.Defaults.DoNotThrowErrors&&null==jsPlumb.Connectors[b][c])throw{msg:"jsPlumb: unknown connector type '"+c+"'"};return new jsPlumb.Connectors[b][c](d)},b=function(a,b,c){return a?c.makeAnchor(a,b,c):null},c=function(a,c,d,e,f,g,h,i,j,k){var l;if(e)d.endpoints[f]=e,e.addConnection(d);else{g.endpoints||(g.endpoints=[null,null]);var m=g.endpoints[f]||g.endpoint||a.Defaults.Endpoints[f]||jsPlumb.Defaults.Endpoints[f]||a.Defaults.Endpoint||jsPlumb.Defaults.Endpoint;g.endpointStyles||(g.endpointStyles=[null,null]),g.endpointHoverStyles||(g.endpointHoverStyles=[null,null]);var n=g.endpointStyles[f]||g.endpointStyle||a.Defaults.EndpointStyles[f]||jsPlumb.Defaults.EndpointStyles[f]||a.Defaults.EndpointStyle||jsPlumb.Defaults.EndpointStyle;null==n.fillStyle&&null!=j&&(n.fillStyle=j.strokeStyle),null==n.outlineColor&&null!=j&&(n.outlineColor=j.outlineColor),null==n.outlineWidth&&null!=j&&(n.outlineWidth=j.outlineWidth);var o=g.endpointHoverStyles[f]||g.endpointHoverStyle||a.Defaults.EndpointHoverStyles[f]||jsPlumb.Defaults.EndpointHoverStyles[f]||a.Defaults.EndpointHoverStyle||jsPlumb.Defaults.EndpointHoverStyle;null!=k&&(null==o&&(o={}),null==o.fillStyle&&(o.fillStyle=k.strokeStyle));var p=g.anchors?g.anchors[f]:g.anchor?g.anchor:b(a.Defaults.Anchors[f],i,a)||b(jsPlumb.Defaults.Anchors[f],i,a)||b(a.Defaults.Anchor,i,a)||b(jsPlumb.Defaults.Anchor,i,a),q=g.uuids?g.uuids[f]:null;l=c({paintStyle:n,hoverPaintStyle:o,endpoint:m,connections:[d],uuid:q,anchor:p,source:h,scope:g.scope,container:g.container,reattach:g.reattach||a.Defaults.ReattachConnections,detachable:g.detachable||a.Defaults.ConnectionsDetachable}),d.endpoints[f]=l,g.drawEndpoints===!1&&l.setVisible(!1,!0,!0)}return l};jsPlumb.Connection=function(a){var b=(a.newConnection,a.newEndpoint),d=jsPlumb.CurrentLibrary,e=(d.getAttribute,d.getElementObject,d.getDOMElement),f=jsPlumbUtil;d.getOffset,this.connector=null,this.idPrefix="_jsplumb_c_",this.defaultLabelLocation=.5,this.defaultOverlayKeys=["Overlays","ConnectionOverlays"],this.parent=a.parent,this.previousConnection=a.previousConnection,this.source=e(a.source),this.target=e(a.target),a.sourceEndpoint&&(this.source=a.sourceEndpoint.endpointWillMoveTo||a.sourceEndpoint.getElement()),a.targetEndpoint&&(this.target=a.targetEndpoint.getElement()),OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.sourceId=this._jsPlumb.instance.getId(this.source),this.targetId=this._jsPlumb.instance.getId(this.target),this.scope=a.scope,this.endpoints=[],this.endpointStyles=[];var g=this._jsPlumb.instance;this._jsPlumb.visible=!0,this._jsPlumb.editable=a.editable===!0,this._jsPlumb.params={parent:a.parent,cssClass:a.cssClass,container:a.container,"pointer-events":a["pointer-events"],editorParams:a.editorParams},this._jsPlumb.lastPaintedAt=null,this.getDefaultType=function(){return{parameters:{},scope:null,detachable:this._jsPlumb.instance.Defaults.ConnectionsDetachable,rettach:this._jsPlumb.instance.Defaults.ReattachConnections,paintStyle:this._jsPlumb.instance.Defaults.PaintStyle||jsPlumb.Defaults.PaintStyle,connector:this._jsPlumb.instance.Defaults.Connector||jsPlumb.Defaults.Connector,hoverPaintStyle:this._jsPlumb.instance.Defaults.HoverPaintStyle||jsPlumb.Defaults.HoverPaintStyle,overlays:this._jsPlumb.instance.Defaults.ConnectorOverlays||jsPlumb.Defaults.ConnectorOverlays}};var h=c(g,b,this,a.sourceEndpoint,0,a,this.source,this.sourceId,a.paintStyle,a.hoverPaintStyle);h&&f.addToList(a.endpointsByElement,this.sourceId,h);var i=c(g,b,this,a.targetEndpoint,1,a,this.target,this.targetId,a.paintStyle,a.hoverPaintStyle);i&&f.addToList(a.endpointsByElement,this.targetId,i),this.scope||(this.scope=this.endpoints[0].scope),null!=a.deleteEndpointsOnDetach?(this.endpoints[0]._deleteOnDetach=a.deleteEndpointsOnDetach,this.endpoints[1]._deleteOnDetach=a.deleteEndpointsOnDetach):(this.endpoints[0]._doNotDeleteOnDetach||(this.endpoints[0]._deleteOnDetach=!0),this.endpoints[1]._doNotDeleteOnDetach||(this.endpoints[1]._deleteOnDetach=!0)),this.setConnector(this.endpoints[0].connector||this.endpoints[1].connector||a.connector||g.Defaults.Connector||jsPlumb.Defaults.Connector,!0),a.path&&this.connector.setPath(a.path),this.setPaintStyle(this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||a.paintStyle||g.Defaults.PaintStyle||jsPlumb.Defaults.PaintStyle,!0),this.setHoverPaintStyle(this.endpoints[0].connectorHoverStyle||this.endpoints[1].connectorHoverStyle||a.hoverPaintStyle||g.Defaults.HoverPaintStyle||jsPlumb.Defaults.HoverPaintStyle,!0),this._jsPlumb.paintStyleInUse=this.getPaintStyle();var j=g.getSuspendedAt();if(g.updateOffset({elId:this.sourceId,timestamp:j}),g.updateOffset({elId:this.targetId,timestamp:j}),!g.isSuspendDrawing()){var k=g.getCachedData(this.sourceId),l=k.o,m=k.s,n=g.getCachedData(this.targetId),o=n.o,p=n.s,q=j||g.timestamp(),r=this.endpoints[0].anchor.compute({xy:[l.left,l.top],wh:m,element:this.endpoints[0],elementId:this.endpoints[0].elementId,txy:[o.left,o.top],twh:p,tElement:this.endpoints[1],timestamp:q});this.endpoints[0].paint({anchorLoc:r,timestamp:q}),r=this.endpoints[1].anchor.compute({xy:[o.left,o.top],wh:p,element:this.endpoints[1],elementId:this.endpoints[1].elementId,txy:[l.left,l.top],twh:m,tElement:this.endpoints[0],timestamp:q}),this.endpoints[1].paint({anchorLoc:r,timestamp:q})}this._jsPlumb.detachable=g.Defaults.ConnectionsDetachable,a.detachable===!1&&(this._jsPlumb.detachable=!1),this.endpoints[0].connectionsDetachable===!1&&(this._jsPlumb.detachable=!1),this.endpoints[1].connectionsDetachable===!1&&(this._jsPlumb.detachable=!1),this._jsPlumb.reattach=a.reattach||this.endpoints[0].reattachConnections||this.endpoints[1].reattachConnections||g.Defaults.ReattachConnections,this._jsPlumb.cost=a.cost||this.endpoints[0].getConnectionCost(),this._jsPlumb.directed=a.directed,null==a.directed&&(this._jsPlumb.directed=this.endpoints[0].areConnectionsDirected());var s=jsPlumb.extend({},this.endpoints[1].getParameters());jsPlumb.extend(s,this.endpoints[0].getParameters()),jsPlumb.extend(s,this.getParameters()),this.setParameters(s);var t=a.type||this.endpoints[0].connectionType||this.endpoints[1].connectionType;t&&this.addType(t,a.data,!0)},jsPlumbUtil.extend(jsPlumb.Connection,OverlayCapableJsPlumbUIComponent,{applyType:function(a,b){null!=a.detachable&&this.setDetachable(a.detachable),null!=a.reattach&&this.setReattach(a.reattach),a.scope&&(this.scope=a.scope),this.setConnector(a.connector,b)},getTypeDescriptor:function(){return"connection"},getAttachedElements:function(){return this.endpoints},addClass:function(a,b){b&&(this.endpoints[0].addClass(a),this.endpoints[1].addClass(a),this.suspendedEndpoint&&this.suspendedEndpoint.addClass(a)),this.connector&&this.connector.addClass(a)},removeClass:function(a,b){b&&(this.endpoints[0].removeClass(a),this.endpoints[1].removeClass(a),this.suspendedEndpoint&&this.suspendedEndpoint.removeClass(a)),this.connector&&this.connector.removeClass(a)},isVisible:function(){return this._jsPlumb.visible},setVisible:function(a){this._jsPlumb.visible=a,this[a?"showOverlays":"hideOverlays"](),this.connector&&this.connector.canvas&&(this.connector.canvas.style.display=a?"block":"none"),this.repaint()},setEditable:function(a){return this.connector&&this.connector.isEditable()&&(this._jsPlumb.editable=a),this._jsPlumb.editable},isEditable:function(){return this._jsPlumb.editable},editStarted:function(){this.setSuspendEvents(!0),this.fire("editStarted",{path:this.connector.getPath()}),this._jsPlumb.instance.setHoverSuspended(!0)},editCompleted:function(){this.fire("editCompleted",{path:this.connector.getPath()}),this.setSuspendEvents(!1),this.setHover(!1),this._jsPlumb.instance.setHoverSuspended(!1)},editCanceled:function(){this.fire("editCanceled",{path:this.connector.getPath()}),this.setHover(!1),this._jsPlumb.instance.setHoverSuspended(!1)},cleanup:function(){this.endpoints=null,this.source=null,this.target=null,null!=this.connector&&(this.connector.cleanup(),this.connector.destroy()),this.connector=null},isDetachable:function(){return this._jsPlumb.detachable===!0},setDetachable:function(a){this._jsPlumb.detachable=a===!0},isReattach:function(){return this._jsPlumb.reattach===!0},setReattach:function(a){this._jsPlumb.reattach=a===!0},setHover:function(a){this.connector&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&(this.connector.setHover(a),jsPlumb.CurrentLibrary[a?"addClass":"removeClass"](this.source,this._jsPlumb.instance.hoverSourceClass),jsPlumb.CurrentLibrary[a?"addClass":"removeClass"](this.target,this._jsPlumb.instance.hoverTargetClass))},getCost:function(){return this._jsPlumb.cost},setCost:function(a){this._jsPlumb.cost=a},isDirected:function(){return this._jsPlumb.directed===!0},moveParent:function(a){var b=jsPlumb.CurrentLibrary;b.getParent(this.connector.canvas),this.connector.bgCanvas&&(b.removeElement(this.connector.bgCanvas),b.appendElement(this.connector.bgCanvas,a)),b.removeElement(this.connector.canvas),b.appendElement(this.connector.canvas,a);for(var c=0;c<this._jsPlumb.overlays.length;c++)this._jsPlumb.overlays[c].isAppendedAtTopLevel&&(b.removeElement(this._jsPlumb.overlays[c].canvas),b.appendElement(this._jsPlumb.overlays[c].canvas,a),this._jsPlumb.overlays[c].reattachListeners&&this._jsPlumb.overlays[c].reattachListeners(this.connector));this.connector.reattachListeners&&this.connector.reattachListeners()},getConnector:function(){return this.connector},setConnector:function(b,c){var d=jsPlumbUtil;null!=this.connector&&(this.connector.cleanup(),this.connector.destroy());var e={_jsPlumb:this._jsPlumb.instance,parent:this._jsPlumb.params.parent,cssClass:this._jsPlumb.params.cssClass,container:this._jsPlumb.params.container,"pointer-events":this._jsPlumb.params["pointer-events"]},f=this._jsPlumb.instance.getRenderMode();d.isString(b)?this.connector=a(this._jsPlumb.instance,f,b,e):d.isArray(b)&&(this.connector=1==b.length?a(this._jsPlumb.instance,f,b[0],e):a(this._jsPlumb.instance,f,b[0],d.merge(b[1],e))),this.bindListeners(this.connector,this,function(a){this.setHover(a,!1)}.bind(this)),this.canvas=this.connector.canvas,this._jsPlumb.editable&&null!=jsPlumb.ConnectorEditors&&jsPlumb.ConnectorEditors[this.connector.type]&&this.connector.isEditable()?new jsPlumb.ConnectorEditors[this.connector.type]({connector:this.connector,connection:this,params:this._jsPlumb.params.editorParams||{}}):editable=!1,c||this.repaint()},paint:function(a){if(!this._jsPlumb.instance.isSuspendDrawing()&&this._jsPlumb.visible){a=a||{};var b=(a.elId,a.ui),c=a.recalc,d=a.timestamp,e=!1,f=e?this.sourceId:this.targetId,g=e?this.targetId:this.sourceId,h=e?0:1,i=e?1:0;if(null==d||d!=this._jsPlumb.lastPaintedAt){var j=this._jsPlumb.instance.updateOffset({elId:g,offset:b,recalc:c,timestamp:d}).o,k=this._jsPlumb.instance.updateOffset({elId:f,timestamp:d}).o,l=this.endpoints[i],m=this.endpoints[h];a.clearEdits&&(l.anchor.clearUserDefinedLocation(),m.anchor.clearUserDefinedLocation(),this.connector.setEdited(!1));var n=l.anchor.getCurrentLocation({xy:[j.left,j.top],wh:[j.width,j.height],element:l,timestamp:d}),o=m.anchor.getCurrentLocation({xy:[k.left,k.top],wh:[k.width,k.height],element:m,timestamp:d});this.connector.resetBounds(),this.connector.compute({sourcePos:n,targetPos:o,sourceEndpoint:this.endpoints[i],targetEndpoint:this.endpoints[h],lineWidth:this._jsPlumb.paintStyleInUse.lineWidth,sourceInfo:j,targetInfo:k,clearEdits:a.clearEdits===!0});for(var p={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0},q=0;q<this._jsPlumb.overlays.length;q++){var r=this._jsPlumb.overlays[q];r.isVisible()&&(this._jsPlumb.overlayPlacements[q]=r.draw(this.connector,this._jsPlumb.paintStyleInUse),p.minX=Math.min(p.minX,this._jsPlumb.overlayPlacements[q].minX),p.maxX=Math.max(p.maxX,this._jsPlumb.overlayPlacements[q].maxX),p.minY=Math.min(p.minY,this._jsPlumb.overlayPlacements[q].minY),p.maxY=Math.max(p.maxY,this._jsPlumb.overlayPlacements[q].maxY))}var s=parseFloat(this._jsPlumb.paintStyleInUse.lineWidth||1)/2,t=parseFloat(this._jsPlumb.paintStyleInUse.lineWidth||0),u={xmin:Math.min(this.connector.bounds.minX-(s+t),p.minX),ymin:Math.min(this.connector.bounds.minY-(s+t),p.minY),xmax:Math.max(this.connector.bounds.maxX+(s+t),p.maxX),ymax:Math.max(this.connector.bounds.maxY+(s+t),p.maxY)};this.connector.paint(this._jsPlumb.paintStyleInUse,null,u);for(var v=0;v<this._jsPlumb.overlays.length;v++){var w=this._jsPlumb.overlays[v];w.isVisible()&&w.paint(this._jsPlumb.overlayPlacements[v],u)}}this._jsPlumb.lastPaintedAt=d}},repaint:function(a){a=a||{},this.paint({elId:this.sourceId,recalc:!(a.recalc===!1),timestamp:a.timestamp,clearEdits:a.clearEdits})}})}(),function(){jsPlumb.AnchorManager=function(a){var b={},c={},d={},e={},f={},g={HORIZONTAL:"horizontal",VERTICAL:"vertical",DIAGONAL:"diagonal",IDENTITY:"identity"},h={},i=this,j={},k=a.jsPlumbInstance,l=jsPlumb.CurrentLibrary,m={},n=function(a,b,c,d,e,f){if(a===b)return{orientation:g.IDENTITY,a:["top","top"]};var h=Math.atan2(d.centery-c.centery,d.centerx-c.centerx),i=Math.atan2(c.centery-d.centery,c.centerx-d.centerx),j=c.left<=d.left&&c.right>=d.left||c.left<=d.right&&c.right>=d.right||c.left<=d.left&&c.right>=d.right||d.left<=c.left&&d.right>=c.right,k=c.top<=d.top&&c.bottom>=d.top||c.top<=d.bottom&&c.bottom>=d.bottom||c.top<=d.top&&c.bottom>=d.bottom||d.top<=c.top&&d.bottom>=c.bottom,l=function(a){return[e.isContinuous?e.verifyEdge(a[0]):a[0],f.isContinuous?f.verifyEdge(a[1]):a[1]]},m={orientation:g.DIAGONAL,theta:h,theta2:i};return j||k?j?(m.orientation=g.HORIZONTAL,m.a=c.top<d.top?["bottom","top"]:["top","bottom"]):(m.orientation=g.VERTICAL,m.a=c.left<d.left?["right","left"]:["left","right"]):d.left>c.left&&d.top>c.top?m.a=["right","top"]:d.left>c.left&&c.top>d.top?m.a=["top","left"]:d.left<c.left&&d.top<c.top?m.a=["top","right"]:d.left<c.left&&d.top>c.top&&(m.a=["left","top"]),m.a=l(m.a),m},o=function(a,b,c,d,e,f,g){for(var h=[],i=b[e?0:1]/(d.length+1),j=0;j<d.length;j++){var k=(j+1)*i,l=f*b[e?1:0];g&&(k=b[e?0:1]-k);var m=e?k:l,n=c[0]+m,o=m/b[0],p=e?l:k,q=c[1]+p,r=p/b[1];h.push([n,q,o,r,d[j][1],d[j][2]])}return h},p=function(a){return function(b,c){var d=!0;return d=a?b[0][0]<c[0][0]:b[0][0]>c[0][0],d===!1?-1:1}},q=function(a,b){var c=a[0][0]<0?-Math.PI-a[0][0]:Math.PI-a[0][0],d=b[0][0]<0?-Math.PI-b[0][0]:Math.PI-b[0][0];return c>d?1:a[0][1]>b[0][1]?1:-1},r={top:function(a,b){return a[0]>b[0]?1:-1},right:p(!0),bottom:p(!0),left:q},s=function(a,b){return a.sort(b)},t=function(a,b){var c=k.getCachedData(a),e=c.s,g=c.o,h=function(b,c,e,g,h,i,j){if(g.length>0)for(var l=s(g,r[b]),m="right"===b||"top"===b,n=o(b,c,e,l,h,i,m),p=function(a,b){var c=k.adjustForParentOffsetAndScroll([b[0],b[1]],a.canvas);d[a.id]=[c[0],c[1],b[2],b[3]],f[a.id]=j},q=0;q<n.length;q++){var t=n[q][4],u=t.endpoints[0].elementId===a,v=t.endpoints[1].elementId===a;u?p(t.endpoints[0],n[q]):v&&p(t.endpoints[1],n[q])}};h("bottom",e,[g.left,g.top],b.bottom,!0,1,[0,1]),h("top",e,[g.left,g.top],b.top,!0,0,[0,-1]),h("left",e,[g.left,g.top],b.left,!1,0,[-1,0]),h("right",e,[g.left,g.top],b.right,!1,1,[1,0])};this.reset=function(){b={},h={},j={}},this.addFloatingConnection=function(a,b){m[a]=b},this.removeFloatingConnection=function(a){delete m[a]},this.newConnection=function(a){var b=a.sourceId,c=a.targetId,d=a.endpoints,e=!0,f=function(a,f,g,i,j){b==c&&g.isContinuous&&(l.removeElement(d[1].canvas),e=!1),jsPlumbUtil.addToList(h,i,[j,f,g.constructor==jsPlumb.DynamicAnchor])};f(0,d[0],d[0].anchor,c,a),e&&f(1,d[1],d[1].anchor,b,a)};var u=function(a){!function(a,b){if(a){var c=function(a){return a[4]==b};jsPlumbUtil.removeWithFunction(a.top,c),jsPlumbUtil.removeWithFunction(a.left,c),jsPlumbUtil.removeWithFunction(a.bottom,c),jsPlumbUtil.removeWithFunction(a.right,c)}}(j[a.elementId],a.id)};this.connectionDetached=function(a){var b=a.connection||a,c=a.sourceId,d=a.targetId,e=b.endpoints,f=function(a,b,c,d,e){null!=c&&c.constructor==jsPlumb.FloatingAnchor||jsPlumbUtil.removeWithFunction(h[d],function(a){return a[0].id==e.id})};f(1,e[1],e[1].anchor,c,b),f(0,e[0],e[0].anchor,d,b),u(b.endpoints[0]),u(b.endpoints[1]),i.redraw(b.sourceId),i.redraw(b.targetId)},this.add=function(a,c){jsPlumbUtil.addToList(b,c,a)},this.changeId=function(a,c){h[c]=h[a],b[c]=b[a],delete h[a],delete b[a]},this.getConnectionsFor=function(a){return h[a]||[]},this.getEndpointsFor=function(a){return b[a]||[]},this.deleteEndpoint=function(a){jsPlumbUtil.removeWithFunction(b[a.elementId],function(b){return b.id==a.id}),u(a)},this.clearFor=function(a){delete b[a],b[a]=[]};var v=function(b,c,d,e,f,g,h,i,j,k,l,m){var n=-1,o=-1,p=e.endpoints[h],q=p.id,r=[1,0][h],s=[[c,d],e,f,g,q],t=b[j],u=p._continuousAnchorEdge?b[p._continuousAnchorEdge]:null;if(u){var v=jsPlumbUtil.findWithFunction(u,function(a){return a[4]==q});if(-1!=v){u.splice(v,1);for(var w=0;w<u.length;w++)jsPlumbUtil.addWithFunction(l,u[w][1],function(a){return a.id==u[w][1].id}),jsPlumbUtil.addWithFunction(m,u[w][1].endpoints[h],function(a){return a.id==u[w][1].endpoints[h].id}),jsPlumbUtil.addWithFunction(m,u[w][1].endpoints[r],function(a){return a.id==u[w][1].endpoints[r].id})}}for(w=0;w<t.length;w++)1==a.idx&&t[w][3]===g&&-1==o&&(o=w),jsPlumbUtil.addWithFunction(l,t[w][1],function(a){return a.id==t[w][1].id}),jsPlumbUtil.addWithFunction(m,t[w][1].endpoints[h],function(a){return a.id==t[w][1].endpoints[h].id}),jsPlumbUtil.addWithFunction(m,t[w][1].endpoints[r],function(a){return a.id==t[w][1].endpoints[r].id});if(-1!=n)t[n]=s;else{var x=i?-1!=o?o:0:t.length;t.splice(x,0,s)}p._continuousAnchorEdge=j};this.updateOtherEndpoint=function(a,b,c,d){var e=jsPlumbUtil.findWithFunction(h[a],function(a){return a[0].id===d.id}),f=jsPlumbUtil.findWithFunction(h[b],function(a){return a[0].id===d.id});-1!=e&&(h[a][e][0]=d,h[a][e][1]=d.endpoints[1],h[a][e][2]=d.endpoints[1].anchor.constructor==jsPlumb.DynamicAnchor),f>-1&&(h[b].splice(f,1),jsPlumbUtil.addToList(h,c,[d,d.endpoints[0],d.endpoints[0].anchor.constructor==jsPlumb.DynamicAnchor]))},this.sourceChanged=function(a,b,c){jsPlumbUtil.removeWithFunction(h[a],function(a){return a[0].id===c.id});var d=jsPlumbUtil.findWithFunction(h[c.targetId],function(a){return a[0].id===c.id});d>-1&&(h[c.targetId][d][0]=c,h[c.targetId][d][1]=c.endpoints[0],h[c.targetId][d][2]=c.endpoints[0].anchor.constructor==jsPlumb.DynamicAnchor),jsPlumbUtil.addToList(h,b,[c,c.endpoints[1],c.endpoints[1].anchor.constructor==jsPlumb.DynamicAnchor])},this.rehomeEndpoint=function(a,c,d){var e=b[c]||[],f=k.getId(d);if(f!==c){var g=jsPlumbUtil.indexOf(e,a);if(g>-1){var h=e.splice(g,1)[0];i.add(h,f)}}for(var j=0;j<a.connections.length;j++)a.connections[j].sourceId==c?(a.connections[j].sourceId=a.elementId,a.connections[j].source=a.element,i.sourceChanged(c,a.elementId,a.connections[j])):a.connections[j].targetId==c&&(a.connections[j].targetId=a.elementId,a.connections[j].target=a.element,i.updateOtherEndpoint(a.connections[j].sourceId,c,a.elementId,a.connections[j]))},this.redraw=function(a,c,d,e,f,g){if(!k.isSuspendDrawing()){var i=b[a]||[],l=h[a]||[],o=[],p=[],q=[];d=d||k.timestamp(),e=e||{left:0,top:0},c&&(c={left:c.left+e.left,top:c.top+e.top});for(var r=k.updateOffset({elId:a,offset:c,recalc:!1,timestamp:d}),s={},u=0;u<l.length;u++){var w=l[u][0],x=w.sourceId,y=w.targetId,z=w.endpoints[0].anchor.isContinuous,A=w.endpoints[1].anchor.isContinuous;if(z||A){var B=x+"_"+y,C=s[B],D=w.sourceId==a?1:0;z&&!j[x]&&(j[x]={top:[],right:[],bottom:[],left:[]}),A&&!j[y]&&(j[y]={top:[],right:[],bottom:[],left:[]}),a!=y&&k.updateOffset({elId:y,timestamp:d}),a!=x&&k.updateOffset({elId:x,timestamp:d});var E=k.getCachedData(y),F=k.getCachedData(x);y==x&&(z||A)?v(j[x],-Math.PI/2,0,w,!1,y,0,!1,"top",x,o,p):(C||(C=n(x,y,F.o,E.o,w.endpoints[0].anchor,w.endpoints[1].anchor),s[B]=C),z&&v(j[x],C.theta,0,w,!1,y,0,!1,C.a[0],x,o,p),A&&v(j[y],C.theta2,-1,w,!0,x,1,!0,C.a[1],y,o,p)),z&&jsPlumbUtil.addWithFunction(q,x,function(a){return a===x}),A&&jsPlumbUtil.addWithFunction(q,y,function(a){return a===y}),jsPlumbUtil.addWithFunction(o,w,function(a){return a.id==w.id}),(z&&0===D||A&&1===D)&&jsPlumbUtil.addWithFunction(p,w.endpoints[D],function(a){return a.id==w.endpoints[D].id})}}for(u=0;u<i.length;u++)0===i[u].connections.length&&i[u].anchor.isContinuous&&(j[a]||(j[a]={top:[],right:[],bottom:[],left:[]}),v(j[a],-Math.PI/2,0,{endpoints:[i[u],i[u]],paint:function(){}},!1,a,0,!1,"top",a,o,p),jsPlumbUtil.addWithFunction(q,a,function(b){return b===a}));for(u=0;u<q.length;u++)t(q[u],j[q[u]]);for(u=0;u<i.length;u++)i[u].paint({timestamp:d,offset:r,dimensions:r.s,recalc:g!==!0});for(u=0;u<p.length;u++){var G=k.getCachedData(p[u].elementId);p[u].paint({timestamp:d,offset:G,dimensions:G.s})}for(u=0;u<l.length;u++){var H=l[u][1];if(H.anchor.constructor==jsPlumb.DynamicAnchor){H.paint({elementWithPrecedence:a,timestamp:d}),jsPlumbUtil.addWithFunction(o,l[u][0],function(a){return a.id==l[u][0].id});for(var I=0;I<H.connections.length;I++)H.connections[I]!==l[u][0]&&jsPlumbUtil.addWithFunction(o,H.connections[I],function(a){return a.id==H.connections[I].id})}else H.anchor.constructor==jsPlumb.Anchor&&jsPlumbUtil.addWithFunction(o,l[u][0],function(a){return a.id==l[u][0].id})}var J=m[a];for(J&&J.paint({timestamp:d,recalc:!1,elId:a}),u=0;u<o.length;u++)o[u].paint({elId:a,timestamp:d,recalc:!1,clearEdits:f})}};var w=function(a){jsPlumbUtil.EventGenerator.apply(this),this.type="Continuous",this.isDynamic=!0,this.isContinuous=!0;
  for(var b=a.faces||["top","right","bottom","left"],c=!(a.clockwise===!1),g={},h={top:"bottom",right:"left",left:"right",bottom:"top"},i={top:"right",right:"bottom",left:"top",bottom:"left"},j={top:"left",right:"top",left:"bottom",bottom:"right"},k=c?i:j,l=c?j:i,m=a.cssClass||"",n=0;n<b.length;n++)g[b[n]]=!0;this.verifyEdge=function(a){return g[a]?a:g[h[a]]?h[a]:g[k[a]]?k[a]:g[l[a]]?l[a]:a},this.compute=function(a){return e[a.element.id]||d[a.element.id]||[0,0]},this.getCurrentLocation=function(a){return e[a.element.id]||d[a.element.id]||[0,0]},this.getOrientation=function(a){return f[a.id]||[0,0]},this.clearUserDefinedLocation=function(){delete e[a.elementId]},this.setUserDefinedLocation=function(b){e[a.elementId]=b},this.getCssClass=function(){return m},this.setCssClass=function(a){m=a}};k.continuousAnchorFactory={get:function(a){var b=c[a.elementId];return b||(b=new w(a),c[a.elementId]=b),b},clear:function(a){delete c[a]}}},jsPlumb.Anchor=function(a){this.x=a.x||0,this.y=a.y||0,this.elementId=a.elementId,this.cssClass=a.cssClass||"",this.userDefinedLocation=null,this.orientation=a.orientation||[0,0],jsPlumbUtil.EventGenerator.apply(this);var b=a.jsPlumbInstance;this.lastReturnValue=null,this.offsets=a.offsets||[0,0],this.timestamp=null,this.compute=function(a){var c=a.xy,d=a.wh,e=a.element,f=a.timestamp;return a.clearUserDefinedLocation&&(this.userDefinedLocation=null),f&&f===self.timestamp?this.lastReturnValue:(null!=this.userDefinedLocation?this.lastReturnValue=this.userDefinedLocation:(this.lastReturnValue=[c[0]+this.x*d[0]+this.offsets[0],c[1]+this.y*d[1]+this.offsets[1]],this.lastReturnValue=b.adjustForParentOffsetAndScroll(this.lastReturnValue,e.canvas)),this.timestamp=f,this.lastReturnValue)},this.getCurrentLocation=function(a){return null==this.lastReturnValue||null!=a.timestamp&&this.timestamp!=a.timestamp?this.compute(a):this.lastReturnValue}},jsPlumbUtil.extend(jsPlumb.Anchor,jsPlumbUtil.EventGenerator,{equals:function(a){if(!a)return!1;var b=a.getOrientation(),c=this.getOrientation();return this.x==a.x&&this.y==a.y&&this.offsets[0]==a.offsets[0]&&this.offsets[1]==a.offsets[1]&&c[0]==b[0]&&c[1]==b[1]},getUserDefinedLocation:function(){return this.userDefinedLocation},setUserDefinedLocation:function(a){this.userDefinedLocation=a},clearUserDefinedLocation:function(){this.userDefinedLocation=null},getOrientation:function(){return this.orientation},getCssClass:function(){return this.cssClass}}),jsPlumb.FloatingAnchor=function(a){jsPlumb.Anchor.apply(this,arguments);var b=a.reference,c=jsPlumb.CurrentLibrary,d=a.jsPlumbInstance,e=a.referenceCanvas,f=c.getSize(c.getElementObject(e)),g=0,h=0,i=null,j=null;this.orientation=null,this.x=0,this.y=0,this.isFloating=!0,this.compute=function(a){var b=a.xy,c=a.element,e=[b[0]+f[0]/2,b[1]+f[1]/2];return e=d.adjustForParentOffsetAndScroll(e,c.canvas),j=e,e},this.getOrientation=function(a){if(i)return i;var c=b.getOrientation(a);return[-1*Math.abs(c[0])*g,-1*Math.abs(c[1])*h]},this.over=function(a,b){i=a.getOrientation(b)},this.out=function(){i=null},this.getCurrentLocation=function(a){return null==j?this.compute(a):j}},jsPlumbUtil.extend(jsPlumb.FloatingAnchor,jsPlumb.Anchor);var a=function(a,b,c){return a.constructor==jsPlumb.Anchor?a:b.makeAnchor(a,c,b)};jsPlumb.DynamicAnchor=function(b){jsPlumb.Anchor.apply(this,arguments),this.isSelective=!0,this.isDynamic=!0,this.anchors=[],this.elementId=b.elementId,this.jsPlumbInstance=b.jsPlumbInstance;for(var c=0;c<b.anchors.length;c++)this.anchors[c]=a(b.anchors[c],this.jsPlumbInstance,this.elementId);this.addAnchor=function(b){this.anchors.push(a(b,this.jsPlumbInstance,this.elementId))},this.getAnchors=function(){return this.anchors},this.locked=!1;var d=this.anchors.length>0?this.anchors[0]:null,e=(this.anchors.length>0?0:-1,d),f=this,g=function(a,b,c,d,e){var f=d[0]+a.x*e[0],g=d[1]+a.y*e[1],h=d[0]+e[0]/2,i=d[1]+e[1]/2;return Math.sqrt(Math.pow(b-f,2)+Math.pow(c-g,2))+Math.sqrt(Math.pow(h-f,2)+Math.pow(i-g,2))},h=b.selector||function(a,b,c,d,e){for(var f=c[0]+d[0]/2,h=c[1]+d[1]/2,i=-1,j=1/0,k=0;k<e.length;k++){var l=g(e[k],f,h,a,b);j>l&&(i=k+0,j=l)}return e[i]};this.compute=function(a){var b=a.xy,c=a.wh,g=a.timestamp,i=a.txy,j=a.twh;a.clearUserDefinedLocation&&(userDefinedLocation=null),this.timestamp=g;var k=f.getUserDefinedLocation();return null!=k?k:this.locked||null==i||null==j?d.compute(a):(a.timestamp=null,d=h(b,c,i,j,this.anchors),this.x=d.x,this.y=d.y,d!=e&&this.fire("anchorChanged",d),e=d,d.compute(a))},this.getCurrentLocation=function(a){return this.getUserDefinedLocation()||(null!=d?d.getCurrentLocation(a):null)},this.getOrientation=function(a){return null!=d?d.getOrientation(a):[0,0]},this.over=function(a,b){null!=d&&d.over(a,b)},this.out=function(){null!=d&&d.out()},this.getCssClass=function(){return d&&d.getCssClass()||""}},jsPlumbUtil.extend(jsPlumb.DynamicAnchor,jsPlumb.Anchor);var b=function(a,b,c,d,e,f){jsPlumb.Anchors[e]=function(g){var h=g.jsPlumbInstance.makeAnchor([a,b,c,d,0,0],g.elementId,g.jsPlumbInstance);return h.type=e,f&&f(h,g),h}};b(.5,0,0,-1,"TopCenter"),b(.5,1,0,1,"BottomCenter"),b(0,.5,-1,0,"LeftMiddle"),b(1,.5,1,0,"RightMiddle"),b(.5,0,0,-1,"Top"),b(.5,1,0,1,"Bottom"),b(0,.5,-1,0,"Left"),b(1,.5,1,0,"Right"),b(.5,.5,0,0,"Center"),b(1,0,0,-1,"TopRight"),b(1,1,0,1,"BottomRight"),b(0,0,0,-1,"TopLeft"),b(0,1,0,1,"BottomLeft"),jsPlumb.Defaults.DynamicAnchors=function(a){return a.jsPlumbInstance.makeAnchors(["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],a.elementId,a.jsPlumbInstance)},jsPlumb.Anchors.AutoDefault=function(a){var b=a.jsPlumbInstance.makeDynamicAnchor(jsPlumb.Defaults.DynamicAnchors(a));return b.type="AutoDefault",b};var c=function(a,b){jsPlumb.Anchors[a]=function(c){var d=c.jsPlumbInstance.makeAnchor(["Continuous",{faces:b}],c.elementId,c.jsPlumbInstance);return d.type=a,d}};jsPlumb.Anchors.Continuous=function(a){return a.jsPlumbInstance.continuousAnchorFactory.get(a)},c("ContinuousLeft",["left"]),c("ContinuousTop",["top"]),c("ContinuousBottom",["bottom"]),c("ContinuousRight",["right"]),jsPlumb.Anchors.Assign=b(0,0,0,0,"Assign",function(a,b){var c=b.position||"Fixed";a.positionFinder=c.constructor==String?b.jsPlumbInstance.AnchorPositionFinders[c]:c,a.constructorParams=b}),jsPlumb.AnchorPositionFinders={Fixed:function(a,b,c){return[(a.left-b.left)/c[0],(a.top-b.top)/c[1]]},Grid:function(a,b,c,d){var e=a.left-b.left,f=a.top-b.top,g=c[0]/d.grid[0],h=c[1]/d.grid[1],i=Math.floor(e/g),j=Math.floor(f/h);return[(i*g+g/2)/c[0],(j*h+h/2)/c[1]]}},jsPlumb.Anchors.Perimeter=function(a){a=a||{};var b=a.anchorCount||60,c=a.shape;if(!c)throw new Error("no shape supplied to Perimeter Anchor type");var d=function(){for(var a=.5,c=2*Math.PI/b,d=0,e=[],f=0;b>f;f++){var g=a+a*Math.sin(d),h=a+a*Math.cos(d);e.push([g,h,0,0]),d+=c}return e},e=function(a){for(var c=b/a.length,d=[],e=function(a,e,f,g,h){c=b*h;for(var i=(f-a)/c,j=(g-e)/c,k=0;c>k;k++)d.push([a+i*k,e+j*k,0,0])},f=0;f<a.length;f++)e.apply(null,a[f]);return d},f=function(a){for(var b=[],c=0;c<a.length;c++)b.push([a[c][0],a[c][1],a[c][2],a[c][3],1/a.length]);return e(b)},g=function(){return f([[0,0,1,0],[1,0,1,1],[1,1,0,1],[0,1,0,0]])},h={Circle:d,Ellipse:d,Diamond:function(){return f([[.5,0,1,.5],[1,.5,.5,1],[.5,1,0,.5],[0,.5,.5,0]])},Rectangle:g,Square:g,Triangle:function(){return f([[.5,0,1,1],[1,1,0,1],[0,1,.5,0]])},Path:function(a){for(var b=a.points,c=[],d=0,f=0;f<b.length-1;f++){var g=Math.sqrt(Math.pow(b[f][2]-b[f][0])+Math.pow(b[f][3]-b[f][1]));d+=g,c.push([b[f][0],b[f][1],b[f+1][0],b[f+1][1],g])}for(var h=0;h<c.length;h++)c[h][4]=c[h][4]/d;return e(c)}},i=function(a,b){for(var c=[],d=b/180*Math.PI,e=0;e<a.length;e++){var f=a[e][0]-.5,g=a[e][1]-.5;c.push([.5+(f*Math.cos(d)-g*Math.sin(d)),.5+(f*Math.sin(d)+g*Math.cos(d)),a[e][2],a[e][3]])}return c};if(!h[c])throw new Error("Shape ["+c+"] is unknown by Perimeter Anchor type");var j=h[c](a);a.rotation&&(j=i(j,a.rotation));var k=a.jsPlumbInstance.makeDynamicAnchor(j);return k.type="Perimeter",k}}(),function(){jsPlumb.DOMElementComponent=jsPlumbUtil.extend(jsPlumb.jsPlumbUIComponent,function(){this.mousemove=this.dblclick=this.click=this.mousedown=this.mouseup=function(){}}),jsPlumb.Segments={AbstractSegment:function(a){this.params=a,this.findClosestPointOnPath=function(){return{d:1/0,x:null,y:null,l:null}},this.getBounds=function(){return{minX:Math.min(a.x1,a.x2),minY:Math.min(a.y1,a.y2),maxX:Math.max(a.x1,a.x2),maxY:Math.max(a.y1,a.y2)}}},Straight:function(a){var b,c,d,e,f,g,h,i=(jsPlumb.Segments.AbstractSegment.apply(this,arguments),function(){b=Math.sqrt(Math.pow(f-e,2)+Math.pow(h-g,2)),c=jsPlumbUtil.gradient({x:e,y:g},{x:f,y:h}),d=-1/c});this.type="Straight",this.getLength=function(){return b},this.getGradient=function(){return c},this.getCoordinates=function(){return{x1:e,y1:g,x2:f,y2:h}},this.setCoordinates=function(a){e=a.x1,g=a.y1,f=a.x2,h=a.y2,i()},this.setCoordinates({x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2}),this.getBounds=function(){return{minX:Math.min(e,f),minY:Math.min(g,h),maxX:Math.max(e,f),maxY:Math.max(g,h)}},this.pointOnPath=function(a,c){if(0!==a||c){if(1!=a||c){var d=c?a>0?a:b+a:a*b;return jsPlumbUtil.pointOnLine({x:e,y:g},{x:f,y:h},d)}return{x:f,y:h}}return{x:e,y:g}},this.gradientAtPoint=function(){return c},this.pointAlongPathFrom=function(a,b,c){var d=this.pointOnPath(a,c),i=0>=b?{x:e,y:g}:{x:f,y:h};return 0>=b&&Math.abs(b)>1&&(b*=-1),jsPlumbUtil.pointOnLine(d,i,b)},this.findClosestPointOnPath=function(a,f){if(0===c)return{x:a,y:g,d:Math.abs(f-g)};if(1/0==c||c==-1/0)return{x:e,y:f,d:Math.abs(a-1)};var h=g-c*e,i=f-d*a,j=(i-h)/(c-d),k=c*j+h,l=jsPlumbUtil.lineLength([a,f],[j,k]),m=jsPlumbUtil.lineLength([j,k],[e,g]);return{d:l,x:j,y:k,l:m/b}}},Arc:function(a){var b=(jsPlumb.Segments.AbstractSegment.apply(this,arguments),function(b,c){return jsPlumbUtil.theta([a.cx,a.cy],[b,c])}),c=function(a,b){if(a.anticlockwise){var c=a.startAngle<a.endAngle?a.startAngle+d:a.startAngle,e=Math.abs(c-a.endAngle);return c-e*b}var f=a.endAngle<a.startAngle?a.endAngle+d:a.endAngle,g=Math.abs(f-a.startAngle);return a.startAngle+g*b},d=2*Math.PI;this.radius=a.r,this.anticlockwise=a.ac,this.type="Arc",a.startAngle&&a.endAngle?(this.startAngle=a.startAngle,this.endAngle=a.endAngle,this.x1=a.cx+this.radius*Math.cos(a.startAngle),this.y1=a.cy+this.radius*Math.sin(a.startAngle),this.x2=a.cx+this.radius*Math.cos(a.endAngle),this.y2=a.cy+this.radius*Math.sin(a.endAngle)):(this.startAngle=b(a.x1,a.y1),this.endAngle=b(a.x2,a.y2),this.x1=a.x1,this.y1=a.y1,this.x2=a.x2,this.y2=a.y2),this.endAngle<0&&(this.endAngle+=d),this.startAngle<0&&(this.startAngle+=d),this.segment=jsPlumbUtil.segment([this.x1,this.y1],[this.x2,this.y2]);var e=this.endAngle<this.startAngle?this.endAngle+d:this.endAngle;this.sweep=Math.abs(e-this.startAngle),this.anticlockwise&&(this.sweep=d-this.sweep);var f=2*Math.PI*this.radius,g=this.sweep/d,h=f*g;this.getLength=function(){return h},this.getBounds=function(){return{minX:a.cx-a.r,maxX:a.cx+a.r,minY:a.cy-a.r,maxY:a.cy+a.r}};var i=1e-10,j=function(a){var b=Math.floor(a),c=Math.ceil(a);return i>a-b?b:i>c-a?c:a};this.pointOnPath=function(b,d){if(0===b)return{x:this.x1,y:this.y1,theta:this.startAngle};if(1==b)return{x:this.x2,y:this.y2,theta:this.endAngle};d&&(b/=h);var e=c(this,b),f=a.cx+a.r*Math.cos(e),g=a.cy+a.r*Math.sin(e);return{x:j(f),y:j(g),theta:e}},this.gradientAtPoint=function(b,c){var d=this.pointOnPath(b,c),e=jsPlumbUtil.normal([a.cx,a.cy],[d.x,d.y]);return this.anticlockwise||1/0!=e&&e!=-1/0||(e*=-1),e},this.pointAlongPathFrom=function(b,c,d){var e=this.pointOnPath(b,d),g=2*(c/f)*Math.PI,h=this.anticlockwise?-1:1,i=e.theta+h*g,j=a.cx+this.radius*Math.cos(i),k=a.cy+this.radius*Math.sin(i);return{x:j,y:k}}},Bezier:function(a){var b=(jsPlumb.Segments.AbstractSegment.apply(this,arguments),[{x:a.x1,y:a.y1},{x:a.cp1x,y:a.cp1y},{x:a.cp2x,y:a.cp2y},{x:a.x2,y:a.y2}]),c={minX:Math.min(a.x1,a.x2,a.cp1x,a.cp2x),minY:Math.min(a.y1,a.y2,a.cp1y,a.cp2y),maxX:Math.max(a.x1,a.x2,a.cp1x,a.cp2x),maxY:Math.max(a.y1,a.y2,a.cp1y,a.cp2y)};this.type="Bezier";var d=function(a,b,c){return c&&(b=jsBezier.locationAlongCurveFrom(a,b>0?0:1,b)),b};this.pointOnPath=function(a,c){return a=d(b,a,c),jsBezier.pointOnCurve(b,a)},this.gradientAtPoint=function(a,c){return a=d(b,a,c),jsBezier.gradientAtPoint(b,a)},this.pointAlongPathFrom=function(a,c,e){return a=d(b,a,e),jsBezier.pointAlongCurveFrom(b,a,c)},this.getLength=function(){return jsBezier.getLength(b)},this.getBounds=function(){return c}}};var a=function(){this.resetBounds=function(){this.bounds={minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}},this.resetBounds()};jsPlumb.Connectors.AbstractConnector=function(b){a.apply(this,arguments);var c=[],d=0,e=[],f=[],g=b.stub||0,h=jsPlumbUtil.isArray(g)?g[0]:g,i=jsPlumbUtil.isArray(g)?g[1]:g,j=b.gap||0,k=jsPlumbUtil.isArray(j)?j[0]:j,l=jsPlumbUtil.isArray(j)?j[1]:j,m=null,n=!1,o=null;this.isEditable=function(){return!1},this.setEdited=function(a){n=a},this.getPath=function(){},this.setPath=function(){},this.findSegmentForPoint=function(a,b){for(var d={d:1/0,s:null,x:null,y:null,l:null},e=0;e<c.length;e++){var f=c[e].findClosestPointOnPath(a,b);f.d<d.d&&(d.d=f.d,d.l=f.l,d.x=f.x,d.y=f.y,d.s=c[e])}return d};var p=function(){for(var a=0,b=0;b<c.length;b++){var g=c[b].getLength();f[b]=g/d,e[b]=[a,a+=g/d]}},q=function(a,b){b&&(a=a>0?a/d:(d+a)/d);for(var g=e.length-1,h=1,i=0;i<e.length;i++)if(e[i][1]>=a){g=i,h=1==a?1:0===a?0:(a-e[i][0])/f[i];break}return{segment:c[g],proportion:h,index:g}},r=function(a,b,e){if(e.x1!=e.x2||e.y1!=e.y2){var f=new jsPlumb.Segments[b](e);c.push(f),d+=f.getLength(),a.updateBounds(f)}},s=function(){d=0,c.splice(0,c.length),e.splice(0,e.length),f.splice(0,f.length)};this.setSegments=function(a){m=[],d=0;for(var b=0;b<a.length;b++)m.push(a[b]),d+=a[b].getLength()};var t=function(a){this.lineWidth=a.lineWidth;var b=jsPlumbUtil.segment(a.sourcePos,a.targetPos),c=a.targetPos[0]<a.sourcePos[0],d=a.targetPos[1]<a.sourcePos[1],e=a.lineWidth||1,f=a.sourceEndpoint.anchor.orientation||a.sourceEndpoint.anchor.getOrientation(a.sourceEndpoint),g=a.targetEndpoint.anchor.orientation||a.targetEndpoint.anchor.getOrientation(a.targetEndpoint),j=c?a.targetPos[0]:a.sourcePos[0],m=d?a.targetPos[1]:a.sourcePos[1],n=Math.abs(a.targetPos[0]-a.sourcePos[0]),o=Math.abs(a.targetPos[1]-a.sourcePos[1]);if(0===f[0]&&0===f[1]||0===g[0]&&0===g[1]){var p=n>o?0:1,q=[1,0][p];f=[],g=[],f[p]=a.sourcePos[p]>a.targetPos[p]?-1:1,g[p]=a.sourcePos[p]>a.targetPos[p]?1:-1,f[q]=0,g[q]=0}var r=c?n+k*f[0]:k*f[0],s=d?o+k*f[1]:k*f[1],t=c?l*g[0]:n+l*g[0],u=d?l*g[1]:o+l*g[1],v=f[0]*g[0]+f[1]*g[1],w={sx:r,sy:s,tx:t,ty:u,lw:e,xSpan:Math.abs(t-r),ySpan:Math.abs(u-s),mx:(r+t)/2,my:(s+u)/2,so:f,to:g,x:j,y:m,w:n,h:o,segment:b,startStubX:r+f[0]*h,startStubY:s+f[1]*h,endStubX:t+g[0]*i,endStubY:u+g[1]*i,isXGreaterThanStubTimes2:Math.abs(r-t)>h+i,isYGreaterThanStubTimes2:Math.abs(s-u)>h+i,opposite:-1==v,perpendicular:0===v,orthogonal:1==v,sourceAxis:0===f[0]?"y":"x",points:[j,m,n,o,r,s,t,u]};return w.anchorOrientation=w.opposite?"opposite":w.orthogonal?"orthogonal":"perpendicular",w};return this.getSegments=function(){return c},this.updateBounds=function(a){var b=a.getBounds();this.bounds.minX=Math.min(this.bounds.minX,b.minX),this.bounds.maxX=Math.max(this.bounds.maxX,b.maxX),this.bounds.minY=Math.min(this.bounds.minY,b.minY),this.bounds.maxY=Math.max(this.bounds.maxY,b.maxY)},this.pointOnPath=function(a,b){var c=q(a,b);return c.segment&&c.segment.pointOnPath(c.proportion,b)||[0,0]},this.gradientAtPoint=function(a){var b=q(a,absolute);return b.segment&&b.segment.gradientAtPoint(b.proportion,absolute)||0},this.pointAlongPathFrom=function(a,b,c){var d=q(a,c);return d.segment&&d.segment.pointAlongPathFrom(d.proportion,b,!1)||[0,0]},this.compute=function(a){n||(o=t(a)),s(),this._compute(o,a),this.x=o.points[0],this.y=o.points[1],this.w=o.points[2],this.h=o.points[3],this.segment=o.segment,p()},{addSegment:r,prepareCompute:t,sourceStub:h,targetStub:i,maxStub:Math.max(h,i),sourceGap:k,targetGap:l,maxGap:Math.max(k,l)}},jsPlumbUtil.extend(jsPlumb.Connectors.AbstractConnector,a);var b=function(){this.type="Straight";var a=jsPlumb.Connectors.AbstractConnector.apply(this,arguments);this._compute=function(b){a.addSegment(this,"Straight",{x1:b.sx,y1:b.sy,x2:b.startStubX,y2:b.startStubY}),a.addSegment(this,"Straight",{x1:b.startStubX,y1:b.startStubY,x2:b.endStubX,y2:b.endStubY}),a.addSegment(this,"Straight",{x1:b.endStubX,y1:b.endStubY,x2:b.tx,y2:b.ty})}};jsPlumbUtil.extend(jsPlumb.Connectors.Straight,jsPlumb.Connectors.AbstractConnector),jsPlumb.registerConnectorType(b,"Straight");var c=function(a){a=a||{};var b=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),c=(a.stub||50,a.curviness||150),d=10;this.type="Bezier",this.getCurviness=function(){return c},this._findControlPoint=function(a,b,e,f,g){var h=f.anchor.getOrientation(f),i=g.anchor.getOrientation(g),j=h[0]!=i[0]||h[1]==i[1],k=[];return j?(0===i[0]?k.push(e[0]<b[0]?a[0]+d:a[0]-d):k.push(a[0]+c*i[0]),0===i[1]?k.push(e[1]<b[1]?a[1]+d:a[1]-d):k.push(a[1]+c*h[1])):(0===h[0]?k.push(b[0]<e[0]?a[0]+d:a[0]-d):k.push(a[0]-c*h[0]),0===h[1]?k.push(b[1]<e[1]?a[1]+d:a[1]-d):k.push(a[1]+c*i[1])),k},this._compute=function(a,c){var d=c.sourcePos,e=c.targetPos,f=Math.abs(d[0]-e[0]),g=Math.abs(d[1]-e[1]),h=d[0]<e[0]?f:0,i=d[1]<e[1]?g:0,j=d[0]<e[0]?0:f,k=d[1]<e[1]?0:g,l=this._findControlPoint([h,i],d,e,c.sourceEndpoint,c.targetEndpoint),m=this._findControlPoint([j,k],e,d,c.targetEndpoint,c.sourceEndpoint);b.addSegment(this,"Bezier",{x1:h,y1:i,x2:j,y2:k,cp1x:l[0],cp1y:l[1],cp2x:m[0],cp2y:m[1]})}};jsPlumbUtil.extend(c,jsPlumb.Connectors.AbstractConnector),jsPlumb.registerConnectorType(c,"Bezier"),jsPlumb.Endpoints.AbstractEndpoint=function(b){a.apply(this,arguments);var c=this.compute=function(){var a=this._compute.apply(this,arguments);return this.x=a[0],this.y=a[1],this.w=a[2],this.h=a[3],this.bounds.minX=this.x,this.bounds.minY=this.y,this.bounds.maxX=this.x+this.w,this.bounds.maxY=this.y+this.h,a};return{compute:c,cssClass:b.cssClass}},jsPlumbUtil.extend(jsPlumb.Endpoints.AbstractEndpoint,a),jsPlumb.Endpoints.Dot=function(a){this.type="Dot",jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),a=a||{},this.radius=a.radius||10,this.defaultOffset=.5*this.radius,this.defaultInnerRadius=this.radius/3,this._compute=function(a,b,c){this.radius=c.radius||this.radius;var d=a[0]-this.radius,e=a[1]-this.radius,f=2*this.radius,g=2*this.radius;if(c.strokeStyle){var h=c.lineWidth||1;d-=h,e-=h,f+=2*h,g+=2*h}return[d,e,f,g,this.radius]}},jsPlumbUtil.extend(jsPlumb.Endpoints.Dot,jsPlumb.Endpoints.AbstractEndpoint),jsPlumb.Endpoints.Rectangle=function(a){this.type="Rectangle",jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),a=a||{},this.width=a.width||20,this.height=a.height||20,this._compute=function(a,b,c){var d=c.width||this.width,e=c.height||this.height,f=a[0]-d/2,g=a[1]-e/2;return[f,g,d,e]}},jsPlumbUtil.extend(jsPlumb.Endpoints.Rectangle,jsPlumb.Endpoints.AbstractEndpoint);var d=function(){jsPlumb.DOMElementComponent.apply(this,arguments),this._jsPlumb.displayElements=[]};jsPlumbUtil.extend(d,jsPlumb.DOMElementComponent,{getDisplayElements:function(){return this._jsPlumb.displayElements},appendDisplayElement:function(a){this._jsPlumb.displayElements.push(a)}}),jsPlumb.Endpoints.Image=function(a){this.type="Image",d.apply(this,arguments),jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments);var b=a.onload,c=a.src||a.url,e=a.parent,f=a.cssClass?" "+a.cssClass:"";this._jsPlumb.img=new Image,this._jsPlumb.ready=!1,this._jsPlumb.initialized=!1,this._jsPlumb.deleted=!1,this._jsPlumb.widthToUse=a.width,this._jsPlumb.heightToUse=a.height,this._jsPlumb.endpoint=a.endpoint,this._jsPlumb.img.onload=function(){null!=this._jsPlumb&&(this._jsPlumb.ready=!0,this._jsPlumb.widthToUse=this._jsPlumb.widthToUse||this._jsPlumb.img.width,this._jsPlumb.heightToUse=this._jsPlumb.heightToUse||this._jsPlumb.img.height,b&&b(this))}.bind(this),this._jsPlumb.endpoint.setImage=function(a,c){var d=a.constructor==String?a:a.src;b=c,this._jsPlumb.img.src=d,null!=this.canvas&&this.canvas.setAttribute("src",this._jsPlumb.img.src)}.bind(this),this._jsPlumb.endpoint.setImage(c,b),this._compute=function(a){return this.anchorPoint=a,this._jsPlumb.ready?[a[0]-this._jsPlumb.widthToUse/2,a[1]-this._jsPlumb.heightToUse/2,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse]:[0,0,0,0]},this.canvas=document.createElement("img"),this.canvas.style.margin=0,this.canvas.style.padding=0,this.canvas.style.outline=0,this.canvas.style.position="absolute",this.canvas.className=this._jsPlumb.instance.endpointClass+f,this._jsPlumb.widthToUse&&this.canvas.setAttribute("width",this._jsPlumb.widthToUse),this._jsPlumb.heightToUse&&this.canvas.setAttribute("height",this._jsPlumb.heightToUse),this._jsPlumb.instance.appendElement(this.canvas,e),this.attachListeners(this.canvas,this),this.actuallyPaint=function(){if(!this._jsPlumb.deleted){this._jsPlumb.initialized||(this.canvas.setAttribute("src",this._jsPlumb.img.src),this.appendDisplayElement(this.canvas),this._jsPlumb.initialized=!0);var a=this.anchorPoint[0]-this._jsPlumb.widthToUse/2,b=this.anchorPoint[1]-this._jsPlumb.heightToUse/2;jsPlumbUtil.sizeElement(this.canvas,a,b,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse)}},this.paint=function(a,b){null!=this._jsPlumb&&(this._jsPlumb.ready?this.actuallyPaint(a,b):window.setTimeout(function(){this.paint(a,b)}.bind(this),200))}},jsPlumbUtil.extend(jsPlumb.Endpoints.Image,[d,jsPlumb.Endpoints.AbstractEndpoint],{cleanup:function(){this._jsPlumb.deleted=!0,jsPlumbUtil.removeElement(this.canvas),this.canvas=null}}),jsPlumb.Endpoints.Blank=function(a){jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),this.type="Blank",d.apply(this,arguments),this._compute=function(a){return[a[0],a[1],10,0]},this.canvas=document.createElement("div"),this.canvas.style.display="block",this.canvas.style.width="1px",this.canvas.style.height="1px",this.canvas.style.background="transparent",this.canvas.style.position="absolute",this.canvas.className=this._jsPlumb.endpointClass,jsPlumb.appendElement(this.canvas,a.parent),this.paint=function(){jsPlumbUtil.sizeElement(this.canvas,this.x,this.y,this.w,this.h)}},jsPlumbUtil.extend(jsPlumb.Endpoints.Blank,[jsPlumb.Endpoints.AbstractEndpoint,d],{cleanup:function(){this.canvas&&this.canvas.parentNode.removeChild(this.canvas)}}),jsPlumb.Endpoints.Triangle=function(a){this.type="Triangle",jsPlumb.Endpoints.AbstractEndpoint.apply(this,arguments),a=a||{},a.width=a.width||55,a.height=a.height||55,this.width=a.width,this.height=a.height,this._compute=function(a,b,c){var d=c.width||self.width,e=c.height||self.height,f=a[0]-d/2,g=a[1]-e/2;return[f,g,d,e]}};var e=jsPlumb.Overlays.AbstractOverlay=function(a){this.visible=!0,this.isAppendedAtTopLevel=!0,this.component=a.component,this.loc=null==a.location?.5:a.location,this.endpointLoc=null==a.endpointLocation?[.5,.5]:a.endpointLocation};e.prototype={cleanup:function(){this.component=null,this.canvas=null,this.endpointLoc=null},setVisible:function(a){this.visible=a,this.component.repaint()},isVisible:function(){return this.visible},hide:function(){this.setVisible(!1)},show:function(){this.setVisible(!0)},incrementLocation:function(a){this.loc+=a,this.component.repaint()},setLocation:function(a){this.loc=a,this.component.repaint()},getLocation:function(){return this.loc}},jsPlumb.Overlays.Arrow=function(a){this.type="Arrow",e.apply(this,arguments),this.isAppendedAtTopLevel=!1,a=a||{};var b=jsPlumbUtil;this.length=a.length||20,this.width=a.width||20,this.id=a.id;var c=(a.direction||1)<0?-1:1,d=a.paintStyle||{lineWidth:1},f=a.foldback||.623;this.computeMaxSize=function(){return 1.5*self.width},this.draw=function(a,e){var g,h,i,j,k;if(a.pointAlongPathFrom){if(b.isString(this.loc)||this.loc>1||this.loc<0){var l=parseInt(this.loc,10);g=a.pointAlongPathFrom(l,c*this.length/2,!0),h=a.pointOnPath(l,!0),i=b.pointOnLine(g,h,this.length)}else if(1==this.loc){if(g=a.pointOnPath(this.loc),h=a.pointAlongPathFrom(this.loc,-this.length),i=b.pointOnLine(g,h,this.length),-1==c){var m=i;i=g,g=m}}else if(0===this.loc){if(i=a.pointOnPath(this.loc),h=a.pointAlongPathFrom(this.loc,this.length),g=b.pointOnLine(i,h,this.length),-1==c){var n=i;i=g,g=n}}else g=a.pointAlongPathFrom(this.loc,c*this.length/2),h=a.pointOnPath(this.loc),i=b.pointOnLine(g,h,this.length);j=b.perpendicularLineTo(g,i,this.width),k=b.pointOnLine(g,i,f*this.length);var o={hxy:g,tail:j,cxy:k},p=d.strokeStyle||e.strokeStyle,q=d.fillStyle||e.strokeStyle,r=d.lineWidth||e.lineWidth,s={component:a,d:o,lineWidth:r,strokeStyle:p,fillStyle:q,minX:Math.min(g.x,j[0].x,j[1].x),maxX:Math.max(g.x,j[0].x,j[1].x),minY:Math.min(g.y,j[0].y,j[1].y),maxY:Math.max(g.y,j[0].y,j[1].y)};return s}return{component:a,minX:0,maxX:0,minY:0,maxY:0}}},jsPlumbUtil.extend(jsPlumb.Overlays.Arrow,e),jsPlumb.Overlays.PlainArrow=function(a){a=a||{};var b=jsPlumb.extend(a,{foldback:1});jsPlumb.Overlays.Arrow.call(this,b),this.type="PlainArrow"},jsPlumbUtil.extend(jsPlumb.Overlays.PlainArrow,jsPlumb.Overlays.Arrow),jsPlumb.Overlays.Diamond=function(a){a=a||{};var b=a.length||40,c=jsPlumb.extend(a,{length:b/2,foldback:2});jsPlumb.Overlays.Arrow.call(this,c),this.type="Diamond"},jsPlumbUtil.extend(jsPlumb.Overlays.Diamond,jsPlumb.Overlays.Arrow);var f=function(a){return null==a._jsPlumb.cachedDimensions&&(a._jsPlumb.cachedDimensions=a.getDimensions()),a._jsPlumb.cachedDimensions},g=function(a){jsPlumb.DOMElementComponent.apply(this,arguments),e.apply(this,arguments);var b=jsPlumb.CurrentLibrary;this.id=a.id,this._jsPlumb.div=null,this._jsPlumb.initialised=!1,this._jsPlumb.component=a.component,this._jsPlumb.cachedDimensions=null,this._jsPlumb.create=a.create,this.getElement=function(){if(null==this._jsPlumb.div){var c=this._jsPlumb.div=b.getDOMElement(this._jsPlumb.create(this._jsPlumb.component));c.style.position="absolute";var d=a._jsPlumb.overlayClass+" "+(this.cssClass?this.cssClass:a.cssClass?a.cssClass:"");c.className=d,this._jsPlumb.instance.appendElement(c,this._jsPlumb.component.parent),this._jsPlumb.instance.getId(c),this.attachListeners(c,this),this.canvas=c}return this._jsPlumb.div},this.draw=function(a){var b=f(this);if(null!=b&&2==b.length){var c={x:0,y:0};if(a.pointOnPath){var d=this.loc,e=!1;(jsPlumbUtil.isString(this.loc)||this.loc<0||this.loc>1)&&(d=parseInt(this.loc,10),e=!0),c=a.pointOnPath(d,e)}else{var g=this.loc.constructor==Array?this.loc:this.endpointLoc;c={x:g[0]*a.w,y:g[1]*a.h}}var h=c.x-b[0]/2,i=c.y-b[1]/2;return{component:a,d:{minx:h,miny:i,td:b,cxy:c},minX:h,maxX:h+b[0],minY:i,maxY:i+b[1]}}return{minX:0,maxX:0,minY:0,maxY:0}}};jsPlumbUtil.extend(g,[jsPlumb.DOMElementComponent,e],{getDimensions:function(){return jsPlumb.CurrentLibrary.getSize(jsPlumb.CurrentLibrary.getElementObject(this.getElement()))},setVisible:function(a){this._jsPlumb.div.style.display=a?"block":"none"},clearCachedDimensions:function(){this._jsPlumb.cachedDimensions=null},cleanup:function(){null!=this._jsPlumb.div&&jsPlumb.CurrentLibrary.removeElement(this._jsPlumb.div)},computeMaxSize:function(){var a=f(this);return Math.max(a[0],a[1])},reattachListeners:function(a){this._jsPlumb.div&&this.reattachListenersForElement(this._jsPlumb.div,this,a)},paint:function(a){this._jsPlumb.initialised||(this.getElement(),a.component.appendDisplayElement(this._jsPlumb.div),this.attachListeners(this._jsPlumb.div,a.component),this._jsPlumb.initialised=!0),this._jsPlumb.div.style.left=a.component.x+a.d.minx+"px",this._jsPlumb.div.style.top=a.component.y+a.d.miny+"px"}}),jsPlumb.Overlays.Custom=function(){this.type="Custom",g.apply(this,arguments)},jsPlumbUtil.extend(jsPlumb.Overlays.Custom,g),jsPlumb.Overlays.GuideLines=function(){var a=this;a.length=50,a.lineWidth=5,this.type="GuideLines",e.apply(this,arguments),jsPlumb.jsPlumbUIComponent.apply(this,arguments),this.draw=function(b){var c=b.pointAlongPathFrom(a.loc,a.length/2),d=b.pointOnPath(a.loc),e=jsPlumbUtil.pointOnLine(c,d,a.length),f=jsPlumbUtil.perpendicularLineTo(c,e,40),g=jsPlumbUtil.perpendicularLineTo(e,c,20);return{connector:b,head:c,tail:e,headLine:g,tailLine:f,minX:Math.min(c.x,e.x,g[0].x,g[1].x),minY:Math.min(c.y,e.y,g[0].y,g[1].y),maxX:Math.max(c.x,e.x,g[0].x,g[1].x),maxY:Math.max(c.y,e.y,g[0].y,g[1].y)}}},jsPlumb.Overlays.Label=function(a){this.labelStyle=a.labelStyle||jsPlumb.Defaults.LabelStyle,this.cssClass=null!=this.labelStyle?this.labelStyle.cssClass:null;var b=jsPlumb.extend({create:function(){return document.createElement("div")}},a);jsPlumb.Overlays.Custom.call(this,b),this.type="Label",this.label=a.label||"",this.labelText=null},jsPlumbUtil.extend(jsPlumb.Overlays.Label,jsPlumb.Overlays.Custom,{cleanup:function(){this.div=null,this.label=null,this.labelText=null,this.cssClass=null,this.labelStyle=null},getLabel:function(){return this.label},setLabel:function(a){this.label=a,this.labelText=null,this.clearCachedDimensions(),this.update(),this.component.repaint()},getDimensions:function(){return this.update(),g.prototype.getDimensions.apply(this,arguments)},update:function(){if("function"==typeof this.label){var a=this.label(this);this.getElement().innerHTML=a.replace(/\r\n/g,"<br/>")}else null==this.labelText&&(this.labelText=this.label,this.getElement().innerHTML=this.labelText.replace(/\r\n/g,"<br/>"))}})}(),function(){var a=function(a){this.type="Flowchart",a=a||{},a.stub=null==a.stub?30:a.stub;var b,c=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),d=null==a.midpoint?.5:a.midpoint,e=[],f=(a.grid,a.alwaysRespectStubs),g=null,h=null,i=null,j=null!=a.cornerRadius?a.cornerRadius:0,k=function(a){return 0>a?-1:0===a?0:1},l=function(a,b,c,d){if(h!=b||i!=c){var e=null==h?d.sx:h,f=null==i?d.sy:i,g=e==b?"v":"h",j=k(b-e),l=k(c-f);h=b,i=c,a.push([e,f,b,c,g,j,l])}},m=function(a){return Math.sqrt(Math.pow(a[0]-a[2],2)+Math.pow(a[1]-a[3],2))},n=function(a){var b=[];return b.push.apply(b,a),b},o=function(a,b,d){for(var e,f,g=0;g<b.length-1;g++){if(e=e||n(b[g]),f=n(b[g+1]),j>0&&e[4]!=f[4]){var h=Math.min(j,m(e),m(f));e[2]-=e[5]*h,e[3]-=e[6]*h,f[0]+=f[5]*h,f[1]+=f[6]*h;var i=e[6]==f[5]&&1==f[5]||e[6]==f[5]&&0===f[5]&&e[5]!=f[6]||e[6]==f[5]&&-1==f[5],k=f[1]>e[3]?1:-1,l=f[0]>e[2]?1:-1,o=k==l,p=o&&i||!o&&!i?f[0]:e[2],q=o&&i||!o&&!i?e[3]:f[1];c.addSegment(a,"Straight",{x1:e[0],y1:e[1],x2:e[2],y2:e[3]}),c.addSegment(a,"Arc",{r:h,x1:e[2],y1:e[3],x2:f[0],y2:f[1],cx:p,cy:q,ac:i})}else{var r=e[2]==e[0]?0:e[2]>e[0]?d.lw/2:-(d.lw/2),s=e[3]==e[1]?0:e[3]>e[1]?d.lw/2:-(d.lw/2);c.addSegment(a,"Straight",{x1:e[0]-r,y1:e[1]-s,x2:e[2]+r,y2:e[3]+s})}e=f}c.addSegment(a,"Straight",{x1:f[0],y1:f[1],x2:f[2],y2:f[3]})};this.setSegments=function(a){g=a},this.isEditable=function(){return!0},this.getOriginalSegments=function(){return g||e},this._compute=function(a,j){if(j.clearEdits&&(g=null),null!=g)return o(this,g,a),void 0;e=[],h=null,i=null,b=null;var k=a.startStubX+(a.endStubX-a.startStubX)*d,m=a.startStubY+(a.endStubY-a.startStubY)*d,n={x:[0,1],y:[1,0]},p=function(){return[a.startStubX,a.startStubY,a.endStubX,a.endStubY]},q={perpendicular:p,orthogonal:p,opposite:function(b){var c=a,d="x"==b?0:1,e={x:function(){return 1==c.so[d]&&(c.startStubX>c.endStubX&&c.tx>c.startStubX||c.sx>c.endStubX&&c.tx>c.sx)||-1==c.so[d]&&(c.startStubX<c.endStubX&&c.tx<c.startStubX||c.sx<c.endStubX&&c.tx<c.sx)},y:function(){return 1==c.so[d]&&(c.startStubY>c.endStubY&&c.ty>c.startStubY||c.sy>c.endStubY&&c.ty>c.sy)||-1==c.so[d]&&(c.startStubY<c.endStubY&&c.ty<c.startStubY||c.sy<c.endStubY&&c.ty<c.sy)}};return!f&&e[b]()?{x:[(a.sx+a.tx)/2,a.startStubY,(a.sx+a.tx)/2,a.endStubY],y:[a.startStubX,(a.sy+a.ty)/2,a.endStubX,(a.sy+a.ty)/2]}[b]:[a.startStubX,a.startStubY,a.endStubX,a.endStubY]}},r={perpendicular:function(b){var c=a,d={x:[[[1,2,3,4],null,[2,1,4,3]],null,[[4,3,2,1],null,[3,4,1,2]]],y:[[[3,2,1,4],null,[2,3,4,1]],null,[[4,1,2,3],null,[1,4,3,2]]]},e={x:[[c.startStubX,c.endStubX],null,[c.endStubX,c.startStubX]],y:[[c.startStubY,c.endStubY],null,[c.endStubY,c.startStubY]]},f={x:[[k,c.startStubY],[k,c.endStubY]],y:[[c.startStubX,m],[c.endStubX,m]]},g={x:[[c.endStubX,c.startStubY]],y:[[c.startStubX,c.endStubY]]},h={x:[[c.startStubX,c.endStubY],[c.endStubX,c.endStubY]],y:[[c.endStubX,c.startStubY],[c.endStubX,c.endStubY]]},i={x:[[c.startStubX,m],[c.endStubX,m],[c.endStubX,c.endStubY]],y:[[k,c.startStubY],[k,c.endStubY],[c.endStubX,c.endStubY]]},j={x:[c.startStubY,c.endStubY],y:[c.startStubX,c.endStubX]},l=n[b][0],o=n[b][1],p=c.so[l]+1,q=c.to[o]+1,r=-1==c.to[o]&&j[b][1]<j[b][0]||1==c.to[o]&&j[b][1]>j[b][0],s=e[b][p][0],t=e[b][p][1],u=d[b][p][q];
  return c.segment==u[3]||c.segment==u[2]&&r?f[b]:c.segment==u[2]&&s>t?g[b]:c.segment==u[2]&&t>=s||c.segment==u[1]&&!r?i[b]:c.segment==u[0]||c.segment==u[1]&&r?h[b]:void 0},orthogonal:function(b,c,d,e,f){var g=a,h={x:-1==g.so[0]?Math.min(c,e):Math.max(c,e),y:-1==g.so[1]?Math.min(c,e):Math.max(c,e)}[b];return{x:[[h,d],[h,f],[e,f]],y:[[d,h],[f,h],[f,e]]}[b]},opposite:function(b,d,e,f){var g=a,h={x:"y",y:"x"}[b],i={x:"height",y:"width"}[b],l=g["is"+b.toUpperCase()+"GreaterThanStubTimes2"];if(j.sourceEndpoint.elementId==j.targetEndpoint.elementId){var n=e+(1-j.sourceEndpoint.anchor[h])*j.sourceInfo[i]+c.maxStub;return{x:[[d,n],[f,n]],y:[[n,d],[n,f]]}[b]}return!l||1==g.so[t]&&d>f||-1==g.so[t]&&f>d?{x:[[d,m],[f,m]],y:[[k,d],[k,f]]}[b]:1==g.so[t]&&f>d||-1==g.so[t]&&d>f?{x:[[k,g.sy],[k,g.ty]],y:[[g.sx,m],[g.tx,m]]}[b]:void 0}},s=q[a.anchorOrientation](a.sourceAxis),t="x"==a.sourceAxis?0:1,u="x"==a.sourceAxis?1:0,v=s[t],w=s[u],x=s[t+2],y=s[u+2];l(e,s[0],s[1],a);var z=r[a.anchorOrientation](a.sourceAxis,v,w,x,y);if(z)for(var A=0;A<z.length;A++)l(e,z[A][0],z[A][1],a);l(e,s[2],s[3],a),l(e,a.tx,a.ty,a),o(this,e,a)},this.getPath=function(){for(var a=null,b=null,c=[],d=g||e,f=0;f<d.length;f++){var h=d[f],i=h[4],j="v"==i?3:2;null!=a&&b===i?a[j]=h[j]:(h[0]!=h[2]||h[1]!=h[3])&&(c.push({start:[h[0],h[1]],end:[h[2],h[3]]}),a=h,b=h[4])}return c},this.setPath=function(a){g=[];for(var b=0;b<a.length;b++){var c=a[b].start[0],d=a[b].start[1],e=a[b].end[0],f=a[b].end[1],h=c==e?"v":"h",i=k(e-c),j=k(f-d);g.push([c,d,e,f,h,i,j])}}};jsPlumbUtil.extend(a,jsPlumb.Connectors.AbstractConnector),jsPlumb.registerConnectorType(a,"Flowchart")}(),function(){var a=function(a,b,c,d){return c>=a&&b>=d?1:c>=a&&d>=b?2:a>=c&&d>=b?3:4},b=function(a,b,c,d,e,f,g,h,i){return i>=h?[a,b]:1===c?d[3]<=0&&e[3]>=1?[a+(d[2]<.5?-1*f:f),b]:d[2]>=1&&e[2]<=0?[a,b+(d[3]<.5?-1*g:g)]:[a+-1*f,b+-1*g]:2===c?d[3]>=1&&e[3]<=0?[a+(d[2]<.5?-1*f:f),b]:d[2]>=1&&e[2]<=0?[a,b+(d[3]<.5?-1*g:g)]:[a+1*f,b+-1*g]:3===c?d[3]>=1&&e[3]<=0?[a+(d[2]<.5?-1*f:f),b]:d[2]<=0&&e[2]>=1?[a,b+(d[3]<.5?-1*g:g)]:[a+-1*f,b+-1*g]:4===c?d[3]<=0&&e[3]>=1?[a+(d[2]<.5?-1*f:f),b]:d[2]<=0&&e[2]>=1?[a,b+(d[3]<.5?-1*g:g)]:[a+1*f,b+-1*g]:void 0},c=function(c){c=c||{},this.type="StateMachine";var d=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),e=c.curviness||10,f=c.margin||5,g=c.proximityLimit||80,h=c.orientation&&"clockwise"===c.orientation,i=c.loopbackRadius||25,j=c.showLoopback!==!1;this._compute=function(c,k){var l=Math.abs(k.sourcePos[0]-k.targetPos[0]),m=Math.abs(k.sourcePos[1]-k.targetPos[1]);if(Math.min(k.sourcePos[0],k.targetPos[0]),Math.min(k.sourcePos[1],k.targetPos[1]),j&&k.sourceEndpoint.elementId===k.targetEndpoint.elementId){var n=k.sourcePos[0],o=(k.sourcePos[0],k.sourcePos[1]-f),p=(k.sourcePos[1]-f,n),q=o-i,r=2*i,s=2*i,t=p-i,u=q-i;c.points[0]=t,c.points[1]=u,c.points[2]=r,c.points[3]=s,d.addSegment(this,"Arc",{x1:n-t+4,y1:o-u,startAngle:0,endAngle:2*Math.PI,r:i,ac:!h,x2:n-t-4,y2:o-u,cx:p-t,cy:q-u})}else{var v=k.sourcePos[0]<k.targetPos[0]?0:l,w=k.sourcePos[1]<k.targetPos[1]?0:m,x=k.sourcePos[0]<k.targetPos[0]?l:0,y=k.sourcePos[1]<k.targetPos[1]?m:0;0===k.sourcePos[2]&&(v-=f),1===k.sourcePos[2]&&(v+=f),0===k.sourcePos[3]&&(w-=f),1===k.sourcePos[3]&&(w+=f),0===k.targetPos[2]&&(x-=f),1===k.targetPos[2]&&(x+=f),0===k.targetPos[3]&&(y-=f),1===k.targetPos[3]&&(y+=f);var z=(v+x)/2,A=(w+y)/2,B=-1*z/A,C=Math.atan(B),D=(1/0==B||B==-1/0?0:Math.abs(e/2*Math.sin(C)),1/0==B||B==-1/0?0:Math.abs(e/2*Math.cos(C)),a(v,w,x,y)),E=Math.sqrt(Math.pow(x-v,2)+Math.pow(y-w,2)),F=b(z,A,D,k.sourcePos,k.targetPos,e,e,E,g);d.addSegment(this,"Bezier",{x1:x,y1:y,x2:v,y2:w,cp1x:F[0],cp1y:F[1],cp2x:F[0],cp2y:F[1]})}}};jsPlumb.registerConnectorType(c,"StateMachine")}(),function(){var a=function(a){a=a||{};var b=this,c=jsPlumb.Connectors.AbstractConnector.apply(this,arguments),d=(a.stub||50,a.curviness||150),e=10;this.type="Bezier",this.getCurviness=function(){return d},this._findControlPoint=function(a,b,c,f,g){var h=f.anchor.getOrientation(f),i=g.anchor.getOrientation(g),j=h[0]!=i[0]||h[1]==i[1],k=[];return j?(0===i[0]?k.push(c[0]<b[0]?a[0]+e:a[0]-e):k.push(a[0]+d*i[0]),0===i[1]?k.push(c[1]<b[1]?a[1]+e:a[1]-e):k.push(a[1]+d*h[1])):(0===h[0]?k.push(b[0]<c[0]?a[0]+e:a[0]-e):k.push(a[0]-d*h[0]),0===h[1]?k.push(b[1]<c[1]?a[1]+e:a[1]-e):k.push(a[1]+d*i[1])),k},this._compute=function(a,d){var e=d.sourcePos,f=d.targetPos,g=Math.abs(e[0]-f[0]),h=Math.abs(e[1]-f[1]),i=e[0]<f[0]?g:0,j=e[1]<f[1]?h:0,k=e[0]<f[0]?0:g,l=e[1]<f[1]?0:h,m=b._findControlPoint([i,j],e,f,d.sourceEndpoint,d.targetEndpoint),n=b._findControlPoint([k,l],f,e,d.targetEndpoint,d.sourceEndpoint);c.addSegment(this,"Bezier",{x1:i,y1:j,x2:k,y2:l,cp1x:m[0],cp1y:m[1],cp2x:n[0],cp2y:n[1]})}};jsPlumb.registerConnectorType(a,"Bezier")}(),function(){var a=null,b=function(a,b){return jsPlumb.CurrentLibrary.hasClass(c(a),b)},c=function(a){return jsPlumb.CurrentLibrary.getElementObject(a)},d=function(a){return jsPlumb.CurrentLibrary.getOffset(c(a))},e=function(a){return jsPlumb.CurrentLibrary.getPageXY(a)},f=function(a){return jsPlumb.CurrentLibrary.getClientXY(a)},g=window.CanvasMouseAdapter=function(){var g=this;g.overlayPlacements=[],jsPlumb.jsPlumbUIComponent.apply(this,arguments),jsPlumbUtil.EventGenerator.apply(this,arguments),this._over=function(a){var b=d(c(g.canvas)),f=e(a),h=f[0]-b.left,i=f[1]-b.top;if(h>0&&i>0&&h<g.canvas.width&&i<g.canvas.height){for(var j=0;j<g.overlayPlacements.length;j++){var k=g.overlayPlacements[j];if(k&&k[0]<=h&&k[1]>=h&&k[2]<=i&&k[3]>=i)return!0}var l=g.canvas.getContext("2d").getImageData(parseInt(h,10),parseInt(i,10),1,1);return 0!==l.data[0]||0!==l.data[1]||0!==l.data[2]||0!==l.data[3]}return!1};var h=!1,i=!1,j=null,k=!1,l=function(a,c){return null!==a&&b(a,c)};this.mousemove=function(b){var c=(e(b),f(b)),d=document.elementFromPoint(c[0],c[1]),i=l(d,"_jsPlumb_overlay"),j=null===a&&(l(d,"_jsPlumb_endpoint")||l(d,"_jsPlumb_connector"));return!h&&j&&g._over(b)?(h=!0,g.fire("mouseenter",g,b),!0):(!h||g._over(b)&&j||i||(h=!1,g.fire("mouseexit",g,b)),g.fire("mousemove",g,b),void 0)},this.click=function(a){h&&g._over(a)&&!k&&g.fire("click",g,a),k=!1},this.dblclick=function(a){h&&g._over(a)&&!k&&g.fire("dblclick",g,a),k=!1},this.mousedown=function(a){g._over(a)&&!i&&(i=!0,j=d(c(g.canvas)),g.fire("mousedown",g,a))},this.mouseup=function(a){i=!1,g.fire("mouseup",g,a)},this.contextmenu=function(a){h&&g._over(a)&&!k&&g.fire("contextmenu",g,a),k=!1}};jsPlumbUtil.extend(g,[jsPlumb.jsPlumbUIComponent,jsPlumbUtil.EventGenerator]);var h=function(a){var b=document.createElement("canvas");return a._jsPlumb.instance.appendElement(b,a.parent),b.style.position="absolute",a["class"]&&(b.className=a["class"]),a._jsPlumb.instance.getId(b,a.uuid),a.tooltip&&b.setAttribute("title",a.tooltip),b},i=window.CanvasComponent=function(){g.apply(this,arguments);var a=[];this.getDisplayElements=function(){return a},this.appendDisplayElement=function(b){a.push(b)}};jsPlumbUtil.extend(i,g);var j=[null,[1,-1],[1,1],[-1,1],[-1,-1]],k=function(a,b,c){if(b.gradient){for(var d=c(),e=0;e<b.gradient.stops.length;e++)d.addColorStop(b.gradient.stops[e][0],b.gradient.stops[e][1]);a.strokeStyle=d}},l=function(a,b,c,d,e){({Straight:function(a,b,c,d,e){var f=a.params;if(b.save(),k(b,c,function(){return b.createLinearGradient(f.x1,f.y1,f.x2,f.y2)}),b.beginPath(),b.translate(d,e),c.dashstyle&&2===c.dashstyle.split(" ").length){var g=c.dashstyle.split(" ");2!==g.length&&(g=[2,2]);for(var h=[g[0]*c.lineWidth,g[1]*c.lineWidth],i=(f.x2-f.x1)/(f.y2-f.y1),l=jsPlumbUtil.segment([f.x1,f.y1],[f.x2,f.y2]),m=j[l],n=Math.atan(i),o=Math.sqrt(Math.pow(f.x2-f.x1,2)+Math.pow(f.y2-f.y1,2)),p=Math.floor(o/(h[0]+h[1])),q=[f.x1,f.y1],r=0;p>r;r++){b.moveTo(q[0],q[1]);var s=q[0]+Math.abs(Math.sin(n)*h[0])*m[0],t=q[1]+Math.abs(Math.cos(n)*h[0])*m[1],u=q[0]+Math.abs(Math.sin(n)*(h[0]+h[1]))*m[0],v=q[1]+Math.abs(Math.cos(n)*(h[0]+h[1]))*m[1];b.lineTo(s,t),q=[u,v]}b.moveTo(q[0],q[1]),b.lineTo(f.x2,f.y2)}else b.moveTo(f.x1,f.y1),b.lineTo(f.x2,f.y2);b.stroke(),b.restore()},Bezier:function(a,b,c,d,e){var f=a.params;b.save(),k(b,c,function(){return b.createLinearGradient(f.x2+d,f.y2+e,f.x1+d,f.y1+e)}),b.beginPath(),b.translate(d,e),b.moveTo(f.x1,f.y1),b.bezierCurveTo(f.cp1x,f.cp1y,f.cp2x,f.cp2y,f.x2,f.y2),b.stroke(),b.restore()},Arc:function(a,b,c,d,e){var f=a.params;b.save(),b.beginPath(),b.translate(d,e),b.arc(f.cx,f.cy,f.r,a.startAngle,a.endAngle,f.ac),b.stroke(),b.restore()}})[a.type](a,b,c,d,e)},m=jsPlumb.ConnectorRenderers.canvas=function(a){i.apply(this,arguments);var b=function(a,b,c){this.ctx.save(),jsPlumb.extend(this.ctx,a);for(var d=this.getSegments(),e=0;e<d.length;e++)l(d[e],this.ctx,a,b,c);this.ctx.restore()}.bind(this),c=this._jsPlumb.instance.connectorClass+" "+(a.cssClass||"");this.canvas=h({"class":c,_jsPlumb:this._jsPlumb,parent:a.parent}),this.ctx=this.canvas.getContext("2d"),this.appendDisplayElement(this.canvas),this.paint=function(a,c,d){if(null!=a){var e=[this.x,this.y],f=[this.w,this.h],g=0,h=0;if(null!=d&&(d.xmin<0&&(e[0]+=d.xmin,g=-d.xmin),d.ymin<0&&(e[1]+=d.ymin,h=-d.ymin),f[0]=d.xmax+(d.xmin<0?-d.xmin:0),f[1]=d.ymax+(d.ymin<0?-d.ymin:0)),this.translateX=g,this.translateY=h,jsPlumbUtil.sizeElement(this.canvas,e[0],e[1],f[0],f[1]),null!=a.outlineColor){var i=a.outlineWidth||1,j=a.lineWidth+2*i,k={strokeStyle:a.outlineColor,lineWidth:j};b(k,g,h)}b(a,g,h)}}};jsPlumbUtil.extend(m,i);var n=function(a){i.apply(this,arguments);var b=this._jsPlumb.instance.endpointClass+" "+(a.cssClass||""),c={"class":b,_jsPlumb:this._jsPlumb,parent:a.parent,tooltip:self.tooltip};this.canvas=h(c),this.ctx=this.canvas.getContext("2d"),this.appendDisplayElement(this.canvas),this.paint=function(a){if(jsPlumbUtil.sizeElement(this.canvas,this.x,this.y,this.w,this.h),null!=a.outlineColor){var b=a.outlineWidth||1,c=a.lineWidth+2*b;({strokeStyle:a.outlineColor,lineWidth:c})}this._paint.apply(this,arguments)}};jsPlumbUtil.extend(n,i),jsPlumb.Endpoints.canvas.Dot=function(a){jsPlumb.Endpoints.Dot.apply(this,arguments),n.apply(this,arguments);var b=this,c=function(a){try{return parseInt(a,10)}catch(b){if("%"==a.substring(a.length-1))return parseInt(a.substring(0,a-1),10)}},d=function(a){var d=b.defaultOffset,e=b.defaultInnerRadius;return a.offset&&(d=c(a.offset)),a.innerRadius&&(e=c(a.innerRadius)),[d,e]};this._paint=function(c){if(null!=c){var e=b.canvas.getContext("2d"),f=a.endpoint.anchor.getOrientation(a.endpoint);if(jsPlumb.extend(e,c),c.gradient){for(var g=d(c.gradient),h=1==f[1]?-1*g[0]:g[0],i=1==f[0]?-1*g[0]:g[0],j=e.createRadialGradient(b.radius,b.radius,b.radius,b.radius+i,b.radius+h,g[1]),k=0;k<c.gradient.stops.length;k++)j.addColorStop(c.gradient.stops[k][0],c.gradient.stops[k][1]);e.fillStyle=j}e.beginPath(),e.arc(b.radius,b.radius,b.radius,0,2*Math.PI,!0),e.closePath(),(c.fillStyle||c.gradient)&&e.fill(),c.strokeStyle&&e.stroke()}}},jsPlumbUtil.extend(jsPlumb.Endpoints.canvas.Dot,[jsPlumb.Endpoints.Dot,n]),jsPlumb.Endpoints.canvas.Rectangle=function(a){var b=this;jsPlumb.Endpoints.Rectangle.apply(this,arguments),n.apply(this,arguments),this._paint=function(c){var d=b.canvas.getContext("2d"),e=a.endpoint.anchor.getOrientation(a.endpoint);if(jsPlumb.extend(d,c),c.gradient){for(var f=1==e[1]?b.h:0===e[1]?b.h/2:0,g=-1==e[1]?b.h:0===e[1]?b.h/2:0,h=1==e[0]?b.w:0===e[0]?b.w/2:0,i=-1==e[0]?b.w:0===e[0]?b.w/2:0,j=d.createLinearGradient(h,f,i,g),k=0;k<c.gradient.stops.length;k++)j.addColorStop(c.gradient.stops[k][0],c.gradient.stops[k][1]);d.fillStyle=j}d.beginPath(),d.rect(0,0,b.w,b.h),d.closePath(),(c.fillStyle||c.gradient)&&d.fill(),c.strokeStyle&&d.stroke()}},jsPlumbUtil.extend(jsPlumb.Endpoints.canvas.Rectangle,[jsPlumb.Endpoints.Rectangle,n]),jsPlumb.Endpoints.canvas.Triangle=function(a){var b=this;jsPlumb.Endpoints.Triangle.apply(this,arguments),n.apply(this,arguments),this._paint=function(c){var d=b.canvas.getContext("2d"),e=0,f=0,g=0,h=a.endpoint.anchor.getOrientation(a.endpoint);1==h[0]&&(e=b.width,f=b.height,g=180),-1==h[1]&&(e=b.width,g=90),1==h[1]&&(f=b.height,g=-90),d.fillStyle=c.fillStyle,d.translate(e,f),d.rotate(g*Math.PI/180),d.beginPath(),d.moveTo(0,0),d.lineTo(b.width/2,b.height/2),d.lineTo(0,b.height),d.closePath(),(c.fillStyle||c.gradient)&&d.fill(),c.strokeStyle&&d.stroke()}},jsPlumbUtil.extend(jsPlumb.Endpoints.canvas.Triangle,[jsPlumb.Endpoints.Triangle,n]),jsPlumb.Endpoints.canvas.Image=jsPlumb.Endpoints.Image,jsPlumb.Endpoints.canvas.Blank=jsPlumb.Endpoints.Blank,jsPlumb.Overlays.canvas.Label=jsPlumb.Overlays.Label,jsPlumb.Overlays.canvas.Custom=jsPlumb.Overlays.Custom;var o=function(){jsPlumb.jsPlumbUIComponent.apply(this,arguments)};jsPlumbUtil.extend(o,jsPlumb.jsPlumbUIComponent);var p=function(a,b){a.apply(this,b),o.apply(this,b),this.paint=function(a){var b=a.component.ctx,c=a.d;c&&(b.save(),b.lineWidth=a.lineWidth,b.beginPath(),b.translate(a.component.translateX,a.component.translateY),b.moveTo(c.hxy.x,c.hxy.y),b.lineTo(c.tail[0].x,c.tail[0].y),b.lineTo(c.cxy.x,c.cxy.y),b.lineTo(c.tail[1].x,c.tail[1].y),b.lineTo(c.hxy.x,c.hxy.y),b.closePath(),a.strokeStyle&&(b.strokeStyle=a.strokeStyle,b.stroke()),a.fillStyle&&(b.fillStyle=a.fillStyle,b.fill()),b.restore())}};jsPlumb.Overlays.canvas.Arrow=function(){p.apply(this,[jsPlumb.Overlays.Arrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.canvas.Arrow,[jsPlumb.Overlays.Arrow,o]),jsPlumb.Overlays.canvas.PlainArrow=function(){p.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.canvas.PlainArrow,[jsPlumb.Overlays.PlainArrow,o]),jsPlumb.Overlays.canvas.Diamond=function(){p.apply(this,[jsPlumb.Overlays.Diamond,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.canvas.Diamond,[jsPlumb.Overlays.Diamond,o])}(),function(){var a={joinstyle:"stroke-linejoin","stroke-linejoin":"stroke-linejoin","stroke-dashoffset":"stroke-dashoffset","stroke-linecap":"stroke-linecap"},b="stroke-dasharray",c="dashstyle",d="linearGradient",e="radialGradient",f="fill",g="stop",h="stroke",i="stroke-width",j="style",k="none",l="jsplumb_gradient_",m="lineWidth",n={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml"},o=function(a,b){for(var c in b)a.setAttribute(c,""+b[c])},p=function(a,b){var c=document.createElementNS(n.svg,a);return b=b||{},b.version="1.1",b.xmlns=n.xhtml,o(c,b),c},q=function(a){return"position:absolute;left:"+a[0]+"px;top:"+a[1]+"px"},r=function(a){for(var b=0;b<a.childNodes.length;b++)(a.childNodes[b].tagName==d||a.childNodes[b].tagName==e)&&a.removeChild(a.childNodes[b])},s=function(a,b,c,i,k){var m=l+k._jsPlumb.instance.idstamp();r(a);var n;n=c.gradient.offset?p(e,{id:m}):p(d,{id:m,gradientUnits:"userSpaceOnUse"}),a.appendChild(n);for(var o=0;o<c.gradient.stops.length;o++){var q=1==k.segment||2==k.segment?o:c.gradient.stops.length-1-o,s=jsPlumbUtil.convertStyle(c.gradient.stops[q][1],!0),t=p(g,{offset:Math.floor(100*c.gradient.stops[o][0])+"%","stop-color":s});n.appendChild(t)}var u=c.strokeStyle?h:f;b.setAttribute(j,u+":url(#"+m+")")},t=function(d,e,g,l,n){if(g.gradient?s(d,e,g,l,n):(r(d),e.setAttribute(j,"")),e.setAttribute(f,g.fillStyle?jsPlumbUtil.convertStyle(g.fillStyle,!0):k),e.setAttribute(h,g.strokeStyle?jsPlumbUtil.convertStyle(g.strokeStyle,!0):k),g.lineWidth&&e.setAttribute(i,g.lineWidth),g[c]&&g[m]&&!g[b]){var o=-1==g[c].indexOf(",")?" ":",",p=g[c].split(o),q="";p.forEach(function(a){q+=Math.floor(a*g.lineWidth)+o}),e.setAttribute(b,q)}else g[b]&&e.setAttribute(b,g[b]);for(var t in a)g[t]&&e.setAttribute(a[t],g[t])},u=function(a,b,c){for(var d=c.split(" "),e=a.className,f=e.baseVal.split(" "),g=0;g<d.length;g++)if(b)-1==f.indexOf(d[g])&&f.push(d[g]);else{var h=f.indexOf(d[g]);-1!=h&&f.splice(h,1)}a.className.baseVal=f.join(" ")},v=function(a,b){u(a,!0,b)},w=function(a,b){u(a,!1,b)},x=function(a,b,c){a.childNodes.length>c?a.insertBefore(b,a.childNodes[c]):a.appendChild(b)};jsPlumbUtil.svg={addClass:v,removeClass:w,node:p,attr:o,pos:q};var y=function(a){var b=a.pointerEventsSpec||"all",c={};jsPlumb.jsPlumbUIComponent.apply(this,a.originalArgs),this.canvas=null,this.path=null,this.svg=null;var d=a.cssClass+" "+(a.originalArgs[0].cssClass||""),e={style:"",width:0,height:0,"pointer-events":b,position:"absolute"};this.svg=p("svg",e),a.useDivWrapper?(this.canvas=document.createElement("div"),this.canvas.style.position="absolute",jsPlumbUtil.sizeElement(this.canvas,0,0,1,1),this.canvas.className=d):(o(this.svg,{"class":d}),this.canvas=this.svg),a._jsPlumb.appendElement(this.canvas,a.originalArgs[0].parent),a.useDivWrapper&&this.canvas.appendChild(this.svg);var f=[this.canvas];return this.getDisplayElements=function(){return f},this.appendDisplayElement=function(a){f.push(a)},this.paint=function(b,d,e){if(null!=b){var f,g=[this.x,this.y],h=[this.w,this.h];null!=e&&(e.xmin<0&&(g[0]+=e.xmin),e.ymin<0&&(g[1]+=e.ymin),h[0]=e.xmax+(e.xmin<0?-e.xmin:0),h[1]=e.ymax+(e.ymin<0?-e.ymin:0)),a.useDivWrapper?(jsPlumbUtil.sizeElement(this.canvas,g[0],g[1],h[0],h[1]),g[0]=0,g[1]=0,f=q([0,0])):f=q([g[0],g[1]]),c.paint.apply(this,arguments),o(this.svg,{style:f,width:h[0],height:h[1]})}},{renderer:c}};jsPlumbUtil.extend(y,jsPlumb.jsPlumbUIComponent,{cleanup:function(){jsPlumbUtil.removeElement(this.canvas),this.svg=null,this.canvas=null,this.path=null}}),jsPlumb.ConnectorRenderers.svg=function(a){var b=this,c=y.apply(this,[{cssClass:a._jsPlumb.connectorClass,originalArgs:arguments,pointerEventsSpec:"none",_jsPlumb:a._jsPlumb}]);c.renderer.paint=function(c,d,e){var f=b.getSegments(),g="",h=[0,0];e.xmin<0&&(h[0]=-e.xmin),e.ymin<0&&(h[1]=-e.ymin);for(var i=0;i<f.length;i++)g+=jsPlumb.Segments.svg.SegmentRenderer.getPath(f[i]),g+=" ";var j={d:g,transform:"translate("+h[0]+","+h[1]+")","pointer-events":a["pointer-events"]||"visibleStroke"},k=null,l=[b.x,b.y,b.w,b.h];if(c.outlineColor){var m=c.outlineWidth||1,n=c.lineWidth+2*m;k=jsPlumb.CurrentLibrary.extend({},c),k.strokeStyle=jsPlumbUtil.convertStyle(c.outlineColor),k.lineWidth=n,null==b.bgPath?(b.bgPath=p("path",j),x(b.svg,b.bgPath,0),b.attachListeners(b.bgPath,b)):o(b.bgPath,j),t(b.svg,b.bgPath,k,l,b)}null==b.path?(b.path=p("path",j),x(b.svg,b.path,c.outlineColor?1:0),b.attachListeners(b.path,b)):o(b.path,j),t(b.svg,b.path,c,l,b)},this.reattachListeners=function(){this.bgPath&&this.reattachListenersForElement(this.bgPath,this),this.path&&this.reattachListenersForElement(this.path,this)}},jsPlumbUtil.extend(jsPlumb.ConnectorRenderers.svg,y),jsPlumb.Segments.svg={SegmentRenderer:{getPath:function(a){return{Straight:function(){var b=a.getCoordinates();return"M "+b.x1+" "+b.y1+" L "+b.x2+" "+b.y2},Bezier:function(){var b=a.params;return"M "+b.x1+" "+b.y1+" C "+b.cp1x+" "+b.cp1y+" "+b.cp2x+" "+b.cp2y+" "+b.x2+" "+b.y2},Arc:function(){var b=a.params,c=a.sweep>Math.PI?1:0,d=a.anticlockwise?0:1;return"M"+a.x1+" "+a.y1+" A "+a.radius+" "+b.r+" 0 "+c+","+d+" "+a.x2+" "+a.y2}}[a.type]()}}};var z=window.SvgEndpoint=function(a){var b=y.apply(this,[{cssClass:a._jsPlumb.endpointClass,originalArgs:arguments,pointerEventsSpec:"all",useDivWrapper:!0,_jsPlumb:a._jsPlumb}]);b.renderer.paint=function(a){var b=jsPlumb.extend({},a);b.outlineColor&&(b.strokeWidth=b.outlineWidth,b.strokeStyle=jsPlumbUtil.convertStyle(b.outlineColor,!0)),null==this.node?(this.node=this.makeNode(b),this.svg.appendChild(this.node),this.attachListeners(this.node,this)):null!=this.updateNode&&this.updateNode(this.node),t(this.svg,this.node,b,[this.x,this.y,this.w,this.h],this),q(this.node,[this.x,this.y])}.bind(this)};jsPlumbUtil.extend(z,y,{reattachListeners:function(){this.node&&this.reattachListenersForElement(this.node,this)}}),jsPlumb.Endpoints.svg.Dot=function(){jsPlumb.Endpoints.Dot.apply(this,arguments),z.apply(this,arguments),this.makeNode=function(){return p("circle",{cx:this.w/2,cy:this.h/2,r:this.radius})},this.updateNode=function(a){o(a,{cx:this.w/2,cy:this.h/2,r:this.radius})}},jsPlumbUtil.extend(jsPlumb.Endpoints.svg.Dot,[jsPlumb.Endpoints.Dot,z]),jsPlumb.Endpoints.svg.Rectangle=function(){jsPlumb.Endpoints.Rectangle.apply(this,arguments),z.apply(this,arguments),this.makeNode=function(){return p("rect",{width:this.w,height:this.h})},this.updateNode=function(a){o(a,{width:this.w,height:this.h})}},jsPlumbUtil.extend(jsPlumb.Endpoints.svg.Rectangle,[jsPlumb.Endpoints.Rectangle,z]),jsPlumb.Endpoints.svg.Image=jsPlumb.Endpoints.Image,jsPlumb.Endpoints.svg.Blank=jsPlumb.Endpoints.Blank,jsPlumb.Overlays.svg.Label=jsPlumb.Overlays.Label,jsPlumb.Overlays.svg.Custom=jsPlumb.Overlays.Custom;var A=function(a,b){a.apply(this,b),jsPlumb.jsPlumbUIComponent.apply(this,b),this.isAppendedAtTopLevel=!1,this.path=null,this.paint=function(a,d){if(a.component.svg&&d){null==this.path&&(this.path=p("path",{"pointer-events":"all"}),a.component.svg.appendChild(this.path),this.attachListeners(this.path,a.component),this.attachListeners(this.path,this));var e=b&&1==b.length?b[0].cssClass||"":"",f=[0,0];d.xmin<0&&(f[0]=-d.xmin),d.ymin<0&&(f[1]=-d.ymin),o(this.path,{d:c(a.d),"class":e,stroke:a.strokeStyle?a.strokeStyle:null,fill:a.fillStyle?a.fillStyle:null,transform:"translate("+f[0]+","+f[1]+")"})}};var c=function(a){return"M"+a.hxy.x+","+a.hxy.y+" L"+a.tail[0].x+","+a.tail[0].y+" L"+a.cxy.x+","+a.cxy.y+" L"+a.tail[1].x+","+a.tail[1].y+" L"+a.hxy.x+","+a.hxy.y};this.reattachListeners=function(){this.path&&this.reattachListenersForElement(this.path,this)}};jsPlumbUtil.extend(A,jsPlumb.jsPlumbUIComponent,{cleanup:function(){null!=this.path&&jsPlumb.CurrentLibrary.removeElement(this.path)}}),jsPlumb.Overlays.svg.Arrow=function(){A.apply(this,[jsPlumb.Overlays.Arrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.svg.Arrow,[jsPlumb.Overlays.Arrow,A]),jsPlumb.Overlays.svg.PlainArrow=function(){A.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.svg.PlainArrow,[jsPlumb.Overlays.PlainArrow,A]),jsPlumb.Overlays.svg.Diamond=function(){A.apply(this,[jsPlumb.Overlays.Diamond,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.svg.Diamond,[jsPlumb.Overlays.Diamond,A]),jsPlumb.Overlays.svg.GuideLines=function(){var a,b,c=null,d=this;jsPlumb.Overlays.GuideLines.apply(this,arguments),this.paint=function(f,g){null==c&&(c=p("path"),f.connector.svg.appendChild(c),d.attachListeners(c,f.connector),d.attachListeners(c,d),a=p("path"),f.connector.svg.appendChild(a),d.attachListeners(a,f.connector),d.attachListeners(a,d),b=p("path"),f.connector.svg.appendChild(b),d.attachListeners(b,f.connector),d.attachListeners(b,d));var h=[0,0];g.xmin<0&&(h[0]=-g.xmin),g.ymin<0&&(h[1]=-g.ymin),o(c,{d:e(f.head,f.tail),stroke:"red",fill:null,transform:"translate("+h[0]+","+h[1]+")"}),o(a,{d:e(f.tailLine[0],f.tailLine[1]),stroke:"blue",fill:null,transform:"translate("+h[0]+","+h[1]+")"}),o(b,{d:e(f.headLine[0],f.headLine[1]),stroke:"green",fill:null,transform:"translate("+h[0]+","+h[1]+")"})};var e=function(a,b){return"M "+a.x+","+a.y+" L"+b.x+","+b.y}},jsPlumbUtil.extend(jsPlumb.Overlays.svg.GuideLines,jsPlumb.Overlays.GuideLines)}(),function(){var a={"stroke-linejoin":"joinstyle",joinstyle:"joinstyle",endcap:"endcap",miterlimit:"miterlimit"},b=null;if(document.createStyleSheet&&document.namespaces){var c=[".jsplumb_vml","jsplumb\\:textbox","jsplumb\\:oval","jsplumb\\:rect","jsplumb\\:stroke","jsplumb\\:shape","jsplumb\\:group"],d="behavior:url(#default#VML);position:absolute;";b=document.createStyleSheet();for(var e=0;e<c.length;e++)b.addRule(c[e],d);document.namespaces.add("jsplumb","urn:schemas-microsoft-com:vml")}jsPlumb.vml={};var f=1e3,g=function(a,b){for(var c in b)a[c]=b[c]},h=function(a,b,c,d,e,f){c=c||{};var h=document.createElement("jsplumb:"+a);return f?e.appendElement(h,d):jsPlumb.CurrentLibrary.appendElement(h,d),h.className=(c["class"]?c["class"]+" ":"")+"jsplumb_vml",i(h,b),g(h,c),h},i=function(a,b,c){a.style.left=b[0]+"px",a.style.top=b[1]+"px",a.style.width=b[2]+"px",a.style.height=b[3]+"px",a.style.position="absolute",c&&(a.style.zIndex=c)},j=jsPlumb.vml.convertValue=function(a){return Math.floor(a*f)},k=function(a,b,c,d){"transparent"===b?d.setOpacity(c,"0.0"):d.setOpacity(c,"1.0")},l=function(a,b,c,d){var e={};if(b.strokeStyle){e.stroked="true";var f=jsPlumbUtil.convertStyle(b.strokeStyle,!0);e.strokecolor=f,k(e,f,"stroke",c),e.strokeweight=b.lineWidth+"px"}else e.stroked="false";if(b.fillStyle){e.filled="true";var i=jsPlumbUtil.convertStyle(b.fillStyle,!0);e.fillcolor=i,k(e,i,"fill",c)}else e.filled="false";if(b.dashstyle)null==c.strokeNode?c.strokeNode=h("stroke",[0,0,0,0],{dashstyle:b.dashstyle},a,d):c.strokeNode.dashstyle=b.dashstyle;else if(b["stroke-dasharray"]&&b.lineWidth){for(var j=-1==b["stroke-dasharray"].indexOf(",")?" ":",",l=b["stroke-dasharray"].split(j),m="",n=0;n<l.length;n++)m+=Math.floor(l[n]/b.lineWidth)+j;null==c.strokeNode?c.strokeNode=h("stroke",[0,0,0,0],{dashstyle:m},a,d):c.strokeNode.dashstyle=m}g(a,e)},m=function(){var a=this;jsPlumb.jsPlumbUIComponent.apply(this,arguments),this.opacityNodes={stroke:null,fill:null},this.initOpacityNodes=function(b){a.opacityNodes.stroke=h("stroke",[0,0,1,1],{opacity:"0.0"},b,a._jsPlumb.instance),a.opacityNodes.fill=h("fill",[0,0,1,1],{opacity:"0.0"},b,a._jsPlumb.instance)},this.setOpacity=function(b,c){var d=a.opacityNodes[b];d&&(d.opacity=""+c)};var b=[];this.getDisplayElements=function(){return b},this.appendDisplayElement=function(c,d){d||a.canvas.parentNode.appendChild(c),b.push(c)}};jsPlumbUtil.extend(m,jsPlumb.jsPlumbUIComponent,{cleanup:function(){this.bgCanvas&&jsPlumbUtil.removeElement(this.bgCanvas),jsPlumbUtil.removeElement(this.canvas)}});var n=jsPlumb.ConnectorRenderers.vml=function(b){this.strokeNode=null,this.canvas=null,m.apply(this,arguments);var c=this._jsPlumb.instance.connectorClass+(b.cssClass?" "+b.cssClass:"");this.paint=function(d){if(null!==d){this.w=Math.max(this.w,1),this.h=Math.max(this.h,1);for(var e=this.getSegments(),j={path:""},k=[this.x,this.y,this.w,this.h],m=0;m<e.length;m++)j.path+=jsPlumb.Segments.vml.SegmentRenderer.getPath(e[m]),j.path+=" ";if(d.outlineColor){var n=d.outlineWidth||1,o=d.lineWidth+2*n,p={strokeStyle:jsPlumbUtil.convertStyle(d.outlineColor),lineWidth:o};for(var q in a)p[q]=d[q];null==this.bgCanvas?(j["class"]=c,j.coordsize=k[2]*f+","+k[3]*f,this.bgCanvas=h("shape",k,j,b.parent,this._jsPlumb.instance,!0),i(this.bgCanvas,k),this.appendDisplayElement(this.bgCanvas,!0),this.attachListeners(this.bgCanvas,this),this.initOpacityNodes(this.bgCanvas,["stroke"])):(j.coordsize=k[2]*f+","+k[3]*f,i(this.bgCanvas,k),g(this.bgCanvas,j)),l(this.bgCanvas,p,this)}null==this.canvas?(j["class"]=c,j.coordsize=k[2]*f+","+k[3]*f,this.canvas=h("shape",k,j,b.parent,this._jsPlumb.instance,!0),this.appendDisplayElement(this.canvas,!0),this.attachListeners(this.canvas,this),this.initOpacityNodes(this.canvas,["stroke"])):(j.coordsize=k[2]*f+","+k[3]*f,i(this.canvas,k),g(this.canvas,j)),l(this.canvas,d,this,this._jsPlumb.instance)}}};jsPlumbUtil.extend(n,m,{reattachListeners:function(){this.canvas&&this.reattachListenersForElement(this.canvas,this)}});var o=window.VmlEndpoint=function(a){m.apply(this,arguments),this._jsPlumb.vml=null,this.canvas=document.createElement("div"),this.canvas.style.position="absolute",this._jsPlumb.clazz=this._jsPlumb.instance.endpointClass+(a.cssClass?" "+a.cssClass:""),a._jsPlumb.appendElement(this.canvas,a.parent),this.paint=function(a,b){var c={},d=this._jsPlumb.vml;jsPlumbUtil.sizeElement(this.canvas,this.x,this.y,this.w,this.h),null==this._jsPlumb.vml?(c["class"]=this._jsPlumb.clazz,d=this._jsPlumb.vml=this.getVml([0,0,this.w,this.h],c,b,this.canvas,this._jsPlumb.instance),this.attachListeners(d,this),this.appendDisplayElement(d,!0),this.appendDisplayElement(this.canvas,!0),this.initOpacityNodes(d,["fill"])):(i(d,[0,0,this.w,this.h]),g(d,c)),l(d,a,this)}};jsPlumbUtil.extend(o,m,{reattachListeners:function(){this._jsPlumb.vml&&this.reattachListenersForElement(this._jsPlumb.vml,this)}}),jsPlumb.Segments.vml={SegmentRenderer:{getPath:function(a){return{Straight:function(a){var b=a.params;return"m"+j(b.x1)+","+j(b.y1)+" l"+j(b.x2)+","+j(b.y2)+" e"},Bezier:function(a){var b=a.params;return"m"+j(b.x1)+","+j(b.y1)+" c"+j(b.cp1x)+","+j(b.cp1y)+","+j(b.cp2x)+","+j(b.cp2y)+","+j(b.x2)+","+j(b.y2)+" e"},Arc:function(a){var b=a.params,c=Math.min(b.x1,b.x2),d=(Math.max(b.x1,b.x2),Math.min(b.y1,b.y2)),e=(Math.max(b.y1,b.y2),a.anticlockwise?1:0),f=a.anticlockwise?"at ":"wa ",g=function(){var f=[null,[function(){return[c,d]},function(){return[c-b.r,d-b.r]}],[function(){return[c-b.r,d]},function(){return[c,d-b.r]}],[function(){return[c-b.r,d-b.r]},function(){return[c,d]}],[function(){return[c,d-b.r]},function(){return[c-b.r,d]}]][a.segment][e]();return j(f[0])+","+j(f[1])+","+j(f[0]+2*b.r)+","+j(f[1]+2*b.r)};return f+g()+","+j(b.x1)+","+j(b.y1)+","+j(b.x2)+","+j(b.y2)+" e"}}[a.type](a)}}},jsPlumb.Endpoints.vml.Dot=function(){jsPlumb.Endpoints.Dot.apply(this,arguments),o.apply(this,arguments),this.getVml=function(a,b,c,d,e){return h("oval",a,b,d,e)}},jsPlumbUtil.extend(jsPlumb.Endpoints.vml.Dot,o),jsPlumb.Endpoints.vml.Rectangle=function(){jsPlumb.Endpoints.Rectangle.apply(this,arguments),o.apply(this,arguments),this.getVml=function(a,b,c,d,e){return h("rect",a,b,d,e)}},jsPlumbUtil.extend(jsPlumb.Endpoints.vml.Rectangle,o),jsPlumb.Endpoints.vml.Image=jsPlumb.Endpoints.Image,jsPlumb.Endpoints.vml.Blank=jsPlumb.Endpoints.Blank,jsPlumb.Overlays.vml.Label=jsPlumb.Overlays.Label,jsPlumb.Overlays.vml.Custom=jsPlumb.Overlays.Custom;var p=function(a,b){a.apply(this,b),m.apply(this,b);var c=this;c.canvas=null,c.isAppendedAtTopLevel=!0;var d=function(a){return"m "+j(a.hxy.x)+","+j(a.hxy.y)+" l "+j(a.tail[0].x)+","+j(a.tail[0].y)+" "+j(a.cxy.x)+","+j(a.cxy.y)+" "+j(a.tail[1].x)+","+j(a.tail[1].y)+" x e"};this.paint=function(a){var e={},j=a.d,k=a.component;a.strokeStyle&&(e.stroked="true",e.strokecolor=jsPlumbUtil.convertStyle(a.strokeStyle,!0)),a.lineWidth&&(e.strokeweight=a.lineWidth+"px"),a.fillStyle&&(e.filled="true",e.fillcolor=a.fillStyle);var l=Math.min(j.hxy.x,j.tail[0].x,j.tail[1].x,j.cxy.x),m=Math.min(j.hxy.y,j.tail[0].y,j.tail[1].y,j.cxy.y),n=Math.max(j.hxy.x,j.tail[0].x,j.tail[1].x,j.cxy.x),o=Math.max(j.hxy.y,j.tail[0].y,j.tail[1].y,j.cxy.y),p=Math.abs(n-l),q=Math.abs(o-m),r=[l,m,p,q];if(e.path=d(j),e.coordsize=k.w*f+","+k.h*f,r[0]=k.x,r[1]=k.y,r[2]=k.w,r[3]=k.h,null==c.canvas){var s=k._jsPlumb.overlayClass||"",t=b&&1==b.length?b[0].cssClass||"":"";e["class"]=t+" "+s,c.canvas=h("shape",r,e,k.canvas.parentNode,k._jsPlumb.instance,!0),k.appendDisplayElement(c.canvas,!0),c.attachListeners(c.canvas,k),c.attachListeners(c.canvas,c)}else i(c.canvas,r),g(c.canvas,e)},this.reattachListeners=function(){c.canvas&&c.reattachListenersForElement(c.canvas,c)},this.cleanup=function(){null!=c.canvas&&jsPlumb.CurrentLibrary.removeElement(c.canvas)}};jsPlumbUtil.extend(p,m),jsPlumb.Overlays.vml.Arrow=function(){p.apply(this,[jsPlumb.Overlays.Arrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.vml.Arrow,[jsPlumb.Overlays.Arrow,p]),jsPlumb.Overlays.vml.PlainArrow=function(){p.apply(this,[jsPlumb.Overlays.PlainArrow,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.vml.PlainArrow,[jsPlumb.Overlays.PlainArrow,p]),jsPlumb.Overlays.vml.Diamond=function(){p.apply(this,[jsPlumb.Overlays.Diamond,arguments])},jsPlumbUtil.extend(jsPlumb.Overlays.vml.Diamond,[jsPlumb.Overlays.Diamond,p])}(),function(a){var b=function(b){return"string"==typeof b?a("#"+b):a(b)};jsPlumb.CurrentLibrary={addClass:function(a,c){a=b(a);try{a[0].className.constructor==SVGAnimatedString&&jsPlumbUtil.svg.addClass(a[0],c)}catch(d){}try{a.addClass(c)}catch(d){}},animate:function(a,b,c){a.animate(b,c)},appendElement:function(a,c){b(c).append(a)},ajax:function(b){b=b||{},b.type=b.type||"get",a.ajax(b)},bind:function(a,c,d){a=b(a),a.bind(c,d)},destroyDraggable:function(b){a(b).data("draggable")&&a(b).draggable("destroy")},destroyDroppable:function(b){a(b).data("droppable")&&a(b).droppable("destroy")},dragEvents:{start:"start",stop:"stop",drag:"drag",step:"step",over:"over",out:"out",drop:"drop",complete:"complete"},extend:function(b,c){return a.extend(b,c)},getClientXY:function(a){return[a.clientX,a.clientY]},getDragObject:function(a){return a[1].draggable||a[1].helper
},getDragScope:function(b){return a(b).draggable("option","scope")},getDropEvent:function(a){return a[0]},getDropScope:function(b){return a(b).droppable("option","scope")},getDOMElement:function(a){return null==a?null:"string"==typeof a?document.getElementById(a):a.context||null!=a.length?a[0]:a},getElementObject:b,getOffset:function(a){return a.offset()},getOriginalEvent:function(a){return a.originalEvent},getPageXY:function(a){return[a.pageX,a.pageY]},getParent:function(a){return b(a).parent()},getScrollLeft:function(a){return a.scrollLeft()},getScrollTop:function(a){return a.scrollTop()},getSelector:function(c,d){return 2==arguments.length?b(c).find(d):a(c)},getSize:function(b){return b=a(b),[b.outerWidth(),b.outerHeight()]},getTagName:function(a){var c=b(a);return c.length>0?c[0].tagName:null},getUIPosition:function(a,b){if(b=b||1,1==a.length)ret={left:a[0].pageX,top:a[0].pageY};else{var c=a[1],d=c.offset;ret=d||c.absolutePosition,c.position.left/=b,c.position.top/=b}return{left:ret.left/b,top:ret.top/b}},hasClass:function(a,b){return a.hasClass(b)},initDraggable:function(b,c,d,e){c=c||{},b=a(b),c.start=jsPlumbUtil.wrap(c.start,function(){a("body").addClass(e.dragSelectClass)},!1),c.stop=jsPlumbUtil.wrap(c.stop,function(){a("body").removeClass(e.dragSelectClass)}),c.doNotRemoveHelper||(c.helper=null),d&&(c.scope=c.scope||jsPlumb.Defaults.Scope),b.draggable(c)},initDroppable:function(b,c){c.scope=c.scope||jsPlumb.Defaults.Scope,a(b).droppable(c)},isAlreadyDraggable:function(b){return a(b).hasClass("ui-draggable")},isDragSupported:function(b){return a(b).draggable},isDropSupported:function(b){return a(b).droppable},removeClass:function(a,c){a=b(a);try{if(a[0].className.constructor==SVGAnimatedString)return jsPlumbUtil.svg.removeClass(a[0],c),void 0}catch(d){}a.removeClass(c)},removeElement:function(a){b(a).remove()},setDragFilter:function(a,b){jsPlumb.CurrentLibrary.isAlreadyDraggable(a)&&a.draggable("option","cancel",b)},setDraggable:function(a,b){a.draggable("option","disabled",!b)},setDragScope:function(a,b){a.draggable("option","scope",b)},setOffset:function(a,c){b(a).offset(c)},trigger:function(a,c,d){var e=jQuery._data(b(a)[0],"handle");e(d)},unbind:function(a,c,d){a=b(a),a.unbind(c,d)}},a(document).ready(jsPlumb.init)}(jQuery);




// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return k._events=j={n:{}},void 0;var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b},c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=0|16*N.random(),c="x"==a?b:8|3&b;return c.toString(16)}),c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=60*((d+360)%6)/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=60*((d+360)%6)/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")},c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a},c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){var e=[];M.call(c),d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&1==n(a,[["M",b,d],["H",e.x2+10]],1)%2},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin((a-.075)*2*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(console.log("runned"),c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":var u=q("title"),w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u);break;case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var u=q("a");x.insertBefore(u,i),u.appendChild(i),x=u}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var z=b(p).split(j);if(4==z.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var A=q("clipPath"),B=q("rect");A.id=c.createUUID(),q(B,{x:z[0],y:z[1],width:z[2],height:z[3]}),A.appendChild(B),d.paper.defs.appendChild(A),q(i,{"clip-path":"url(#"+A.id+")"}),d.clip=B}if(!p){var C=i.getAttribute("clip-path");if(C){var D=c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g,l));D&&D.parentNode.removeChild(D),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var E=b(p).match(c._ISURL);if(E){A=q("pattern");var F=q("image");A.id=c.createUUID(),q(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":E[1]}),A.appendChild(F),function(a){c._preload(E[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(F,{width:b,height:c}),d.paper.safari()})}(A),d.paper.defs.appendChild(A),q(i,{fill:"url(#"+A.id+")"}),d.pattern=A,d.pattern&&s(d);break}var G=c.getRGB(p);if(G.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});G[a]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=c.getRGB(p),i.setAttribute(o,G.hex),"stroke"==o&&G[a]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
  if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;return"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper),this.paper,this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),i["stroke-dasharray"]){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){var f=a.path();return f.attrs,f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){var e=a.path();return e.attrs,e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});




/*
 Version: core-1.0
 The MIT License: Copyright (c) 2012 LiosK.
 */
function UUID(){}UUID.generate=function(){var a=UUID._gri,b=UUID._ha;return b(a(32),8)+"-"+b(a(16),4)+"-"+b(16384|a(12),4)+"-"+b(32768|a(14),4)+"-"+b(a(48),12)};UUID._gri=function(a){return 0>a?NaN:30>=a?0|Math.random()*(1<<a):53>=a?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<a-30)):NaN};UUID._ha=function(a,b){for(var c=a.toString(16),d=b-c.length,e="0";0<d;d>>>=1,e+=e)d&1&&(c=e+c);return c};




/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);




(function init_jquery_spaceSwitcher ($) {

  var pluginName = 'searchSelect';
  var infoName = pluginName;

  var KEYS = {
    ENTER: 13,
    ESC: 27,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINTSCREEN: 44,
    INSERT: 45,
    COMMAND: 91,
    CONTEXT_MENU: 93,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    META: 224,
  };

  // When any of the meta keys are pressed, don't perform search.
  var searchExcludeKeys = Object.keys(KEYS).map(function (name) {
    return KEYS[name];
  });

  // Setup global defaults for the plugin
  $[pluginName] = {
    // All the default options supported are defined here.
    options: {
      // Pass an array of Category objects each containing an array of Element
      //  objects to be used as the selectors.
      data: null,

      // The class to be added to the handler when the menu is open.
      openClass: 'selected',

      // Whether to hide the original target or not.
      hideTarget: true,

      // Which element # to be selected.
      selectedIndex: 0,
    },

    // All the classes being used in the plugin are defined here.
    classes: {
      wrapper: pluginName,
      handle: pluginName + '-handle',
      search: pluginName + '-search',
      listWrapper: pluginName + '-listWrapper',
      element: pluginName + '-element',
      trigger: pluginName + '-trigger',
      selected: pluginName + '-selected',
      highlighted: pluginName + '-highlighted',
      searchable: pluginName + '-searchable',
      addElement: pluginName + '-addElement',
    },

    // All methods that the plugin supports are bellow.
    // Methods are passed as the first argument the jQuery element.
    methods: {
      search: search,
      select: select,
      isOpen: isOpen,
      setValue: setValue,
      hide: hide,
      show: show,
      destroy: destroy,
    },
  };

  /**
   * Creates a new searchSelect on the matched elements.
   *
   * @param  {Object} options Optional. Overwrite the default options provided
   *                            in $.spaceSwitcher.options;
   * @param  {Object} classes Optional. Overwrite the default classes provided
   *                            in $.spaceSwitcher.classes;
   * @return {jQuery}
   */
  $.fn[pluginName] = function init_jquery_plugin (options, classes) {
    // If the first argument is a string, treat this as a method name.
    if (typeof options == 'string') {
      if (!(options in $[pluginName].methods)) {
        throw new Error('[$.' + pluginName + '] Unknown method `' + options + '`');
      }
      var args = toArray(arguments);
      return this.each(function () {
        var tmp_args = toArray(args);
        tmp_args[0] = $(this);
        $[pluginName].methods[options].apply(null, tmp_args);
      });
    };

    // Apply the plugin on every selected element.
    return this.each(function init () {
      var $this = $(this);

      // Extend arguments with defaults.
      var opt = $.extend(true, {}, $[pluginName].options, options);
      var cls = $.extend(true, {}, $[pluginName].classes, classes);

      var data = opt.data;

      // Don't apply the plugin if it has already been initialized.
      if ($this.data(infoName)) { return; }

      // If no data is passed, try to auto-generate it.
      if (!data) {
        if (this.tagName.toLowerCase() != 'select') {
          throw new Error('[$.' + pluginName + '] Invalid data object and target element is not a <select> tag');
        }
        data = $this.find('option').get().map(function (elem, index) {
          if (elem.getAttribute('selected') !== null) {
            opt.selectedIndex = index;
          }
          return [elem.getAttribute('value'), elem.innerHTML];
        });
      } else {
        data = data.map(function (option) {
          if (Array.isArray(option)) { return option; }
          return [option, option];
        });
      }

      // input[type="search"] has huge style limitations, so we'll go the classic way.
      var $searchField = jqElement('input').attr({type:'text'});
      var $trigger = jqElement('span').addClass(cls.trigger).addClass('icon-chevron-down');
      var $search = jqElement('span').addClass(cls.search).append($searchField, $trigger);

      var $listWrapper = jqElement('div').addClass(cls.listWrapper);

      var $wrapper = jqElement('span');
      $wrapper.addClass(cls.wrapper).append($search).append($listWrapper);

      // Build options.
      data.forEach(function (option, index) {
        var value = option[0] !== null ? option[0] : option[1];
        $listWrapper.append(
          jqElement('div').
            data('value', value).
            data('index', index).
            addClass(cls.element).
            addClass(cls.searchable).
            html(option[1])
        );
      });

      $wrapper.insertAfter($this);
      opt.hideTarget && $this.hide();

      // Save info.
      $this.
        addClass(cls.handle).
        data(infoName, {
          events: {},
          options: opt,
          classes: cls,
          wrapper: $wrapper,
          searchField: $searchField,
          trigger: $trigger,
          search: $search,
          listWrapper: $listWrapper,
          searchable: $listWrapper.find('.' + cls.searchable),
          addElements: $(),
        });

      // Post Setup.
      addSearchEvents($this);
      addDisplayEvents($this);
      hide($this, true);
      setValue($this, opt.selectedIndex, true);
      select($this, opt.selectedIndex);
    });

  };

  /**
   * Revers back to the state before the plugin was used.
   * @param  {jQuery} $elem
   * @return {jQuery}
   */
  function destroy ($elem) {
    var info = $elem.data(infoName);

    // Detach events.
    for (var name in info.events) {
      detach_event($elem, name);
    }

    // Remove and restore elements.
    info.wrapper.remove();
    $elem.show();

    // Reset the data object.
    $elem.removeData(infoName);

    return $elem;
  }

  /**
   * Attach an event to an element.
   * This keeps track of all events for cleanup purposes.
   *
   * @param {jQuery}    $elem The target root $elem.
   * @param  {String}   name
   * @param  {jQuery}   $target The element you want to attach the event to.
   * @param  {String}   eventType
   * @param  {Function} callback
   * @return {jQuery} Returns back the target
   */
  function attach_event ($elem, name, $target, eventType, callback) {
    if (arguments.length < 5) {
      throw new Error('[$.' + pluginName + '.attach_event()] Too few arguments: ' +
                      arguments.length);
    }

    var info = $elem.data(infoName);

    if (name in info.events) {
      console.warn('[$.' + pluginName + '.attach_event()] Overwriting event: ' + name);
      detach_event($elem, name);
    }

    $target.on(eventType, callback);
    info.events[name] = [$target, eventType, callback];

    return $target;
  }

  /**
   * Remove an event attached with attach_event().
   * @param  {jQuery} $elem
   * @param  {String} name
   * @return {jQuery} Returns back the element
   */
  function detach_event ($elem, name) {
    var info = $elem.data(infoName);

    if (!info.events[name]) { return; }

    info.events[name][0].off(info.events[name][1], info.events[name][2]);

    return info.events[name][0];
  }

  /**
   * Checks to see if the menu is open/visible.
   * @param  {jQuery}  $elem
   * @return {Boolean}
   */
  function isOpen ($elem) {
    var info = $elem.data(infoName);
    return info.listWrapper.is(':visible');
  }

  /**
   * Display the menu.
   * @param  {jQuery} $elem
   * @param  {Boolean} instant=false Whether to animate or just .show();
   * @return {jQuery}
   */
  function show ($elem, instant) {
    // Check if the element exists and it's attached to the DOM.
    if (!$elem || !$.contains(document, $elem[0])) { return; }

    instant = !!instant;

    $elem.trigger('show-before', [instant]);

    removeHighlighted($elem);

    var info = $elem.data(infoName);
    instant ? info.listWrapper.show() : info.listWrapper.fadeIn('fast');
    $elem.addClass(info.options.openClass);
    var offset = $elem.offset();
    info.listWrapper.css({
      position: 'absolute',
      top: info.searchField.outerHeight(),
      left: 0,
    });

    select($elem, $elem[0].selectedIndex);

    $elem.trigger('show-after', [instant]);

    return $elem;
  }

  /**
   * Hide the menu.
   * @param  {jQuery} $elem
   * @param  {Boolean} instant=false Whether to animate or just .hide();
   * @return {jQuery}
   */
  function hide ($elem, instant) {
    // Check if the element exists and it's attached to the DOM.
    if (!$elem || !$.contains(document, $elem[0])) { return; }

    instant = !!instant;

    $elem.trigger('hide-before', [instant]);

    var info = $elem.data(infoName);
    instant ? info.listWrapper.hide() : info.listWrapper.fadeOut('fast');
    $elem.removeClass(info.options.openClass);
    setValue($elem, $elem[0].selectedIndex, true);

    $elem.trigger('hide-after', [instant]);

    return $elem;
  }

  /**
   * Selects an Element name by an index.
   * @param  {jQuery} $elem
   * @param  {Number} index
   * @return {jQuery}
   */
  function select ($elem, index, noScroll) {
    $elem.trigger('select-before', [index]);

    var info = $elem.data(infoName);
    index = wrapAround(index, info.searchable.length);
    var $selected = info.searchable.
                          removeClass(info.classes.selected).
                          eq(index).
                          addClass(info.classes.selected);
    !noScroll && $selected[0].scrollIntoView(false);
    info.selected = index;

    $elem.trigger('select-after', [index]);

    return $elem;
  }

  /**
   * Sets the value of the given element.
   * @param {jQuery} $elem
   * @param {Number} index
   * @param {Boolean} noHide
   */
  function setValue ($elem, index, noHide) {
    $elem.trigger('setValue-before', [index]);

    var info = $elem.data(infoName);
    index = wrapAround(index, info.searchable.length);
    var $target = info.searchable.eq(index);

    $elem.val($target.data('value'));
    info.searchField.val($target.text());

    !noHide && info.searchField[0].focus();
    !noHide && hide($elem);

    $elem.trigger('change');
    $elem.trigger('setValue-after', [index]);

    return $elem;
  }

  /**
   * Makes sure that a value wraps around a 0 based interval.
   * Used for navigating up/down.
   *
   * @param  {Number} value
   * @param  {Number} interval
   * @return {Number}
   */
  function wrapAround (value, interval) {
    return value < 0 ? interval - 1 : value % interval;
  }

  /**
   * Adds show/hide events
   * @param {jQUery} $elem
   */
  function addDisplayEvents ($elem) {
    var info = $elem.data(infoName);

    attach_event($elem, 'trigger-show-options', info.trigger, 'click.show-options',
      function on_click (event) {
        show($elem);
        info.searchField[0].focus();
      });

    attach_event($elem, 'search-show-options', info.searchField, 'focus.show-options',
      function on_focus (event) {
        show($elem);
      });

    // Clicking outside of the menu, closes the menu.
    attach_event($elem, 'global-close', $(document), 'click.closeMenu',
      function on_close_menu (event) {
        var $target = $(event.target);
        while ($target && $target.length > 0) {
          if ($target.is(info.wrapper) || $target.is($elem)) {
            return;
          }
          $target = $target.parent();
        }
        hide($elem);
      });
  }

  /**
   * Add the search events to the textfield
   * @param {jQuery} $elem
   */
  function addSearchEvents ($elem) {
    var info = $elem.data(infoName);

    // Search events.
    attach_event($elem, 'search', info.searchField, 'keyup.search', function on_search (event) {
      var val = $(this).val();

      if (searchExcludeKeys.indexOf(event.keyCode) > -1) { return; }

      // Apparently CMD+delete does not re-trigger show, so just re-check for it.
      if (val.length == 0) {
        removeHighlighted($elem);
        info.searchable.show();
        return;
      }

      search($elem, val);
    });

    // Meta events (e.g. UP/DOWN/ENTER/etc).
    attach_event($elem, 'search-actions', info.wrapper, 'keydown.search-actions',
      function on_search_actions (event) {
        var stopEvent = true;

        switch (event.keyCode) {
          case KEYS.ENTER: setValue($elem, info.selected); break;
          case KEYS.UP:
          case KEYS.DOWN:
            if (!isOpen($elem)) {
              show($elem);
              select($elem, 0);
              return;
            }

            var $visible = info.searchable.filter(':visible');
            // Convert from global to visible index.
            var index = $visible.index(info.searchable.eq(info.selected));
            index = wrapAround(index + (event.keyCode == KEYS.UP ? -1 : 1), $visible.length);

            // Convert from visible to global index.
            select($elem, info.searchable.index($visible.eq(index)), true);

            // Scroll into view the next element in line, if it exists.
            var viz_index = Math.min(index + 1, $visible.length - 1);
            $visible[viz_index].scrollIntoView(false);
            break;
          default:
            stopEvent = false;
        }

        if (stopEvent) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      });

    attach_event($elem, 'element-hover', info.searchable, 'mouseenter',
      function on_searchable_hover (event) {
        select($elem, $(this).data('index'), true);
      });

    attach_event($elem, 'element-click', info.searchable, 'click',
      function on_searchable_click (event) {
        setValue($elem, $(this).data('index'));
      });
  }

  /**
   * Removes all the highlighted tags as a result of the search function.
   * @param  {jQuery} $elem
   * @return {jQuery}
   */
  function removeHighlighted ($elem) {

    var info = $elem.data(infoName);

    // Remove old matches.
    info.searchable.find('.' + info.classes.highlighted).each(function () {
      $(this).replaceWith(this.innerHTML);
    });

    return $elem;
  }

  /**
   * Search through the elements for the given string and highlighted the matches.
   * Side-effect: selects the first element in the remaining set.
   *
   * @param  {jQuery} $elem
   * @param  {String} str
   * @return {jQuery}
   */
  function search ($elem, str) {
    var info = $elem.data(infoName);

    $elem.trigger('search-before', [str]);
    show($elem);
    str = str.toLowerCase();

    // Highlight new matches.
    info.searchable.each(function highlight_matches () {
      var $this = $(this);
      var text = this.textContent;
      var begin = text.toLowerCase().indexOf(str);

      if (begin === -1) {
        $this.hide();
        return;
      }

      var end = begin + str.length;

      $this.show();
      this.innerHTML = text.slice(0, begin) +
                      '<span class="' + info.classes.highlighted + '">' +
                        text.slice(begin, end) +
                      '</span>' +
                      text.slice(end);
    });

    // Select first visible element.
    select($elem, info.searchable.index(info.searchable.filter(':visible').eq(0)));

    $elem.trigger('search-after', [str]);

    return $elem;
  }

  /**
   * Create a new jQuery element of specified type.
   * @param {String} type
   * @return {jQuery}
   */
  function jqElement (type) {
    return $(document.createElement(type));
  }

  /**
   * Either clones an array or converts form arguments to an actual array.
   * Note: No deep-clone
   *
   * @param  {Array|Object} obj
   * @return {Array}
   */
  function toArray (obj) {
    return Array.prototype.slice.call(obj);
  }

})(jQuery);




/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Contains utility functionality to be used by the service
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.util.Util", {
  init: function() {

  },
  methods: {
    /**
     * Generates a RFC4122 compliant UUID.
     * @return {String} hexadecimal string containing the UUID
     */
    generateUUID: function() {
      var uuid = UUID.generate();
      return uuid;
    },
  
    registerDocumentationPopover: function(selector) {
      var popoverOptions = {
        "title": "Documentation",
        "placement": "right",
        "content": $(selector).data("documentation")
      };
      $(selector).popover(popoverOptions);
    },
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * XMLDoc is a class that provides a series of utility functions for easier parsing of XML docs using XPath
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 * @version 3.0.0
 */
FlancheJs.defineClass("kat.util.XMLDoc", {

  init: function (xml) {
    var resXml;
    if ((xml instanceof Document) || (xml instanceof Element)) {
      resXml = xml;
    }
    else {
      var parser = new DOMParser();
      resXml = parser.parseFromString(xml, "application/xml");
    }
    this.setXmlDoc(resXml);
    this._setup();
  },

  properties: {
    xmlDoc: {}
  },

  methods: {
    filter: function (xPath) {
      var doc = this.getXmlDoc();
      var iter = doc.evaluate(xPath, doc, this._resolver, XPathResult.ANY_TYPE, null);
      var resultSet = [];
      do {
        var next = iter.iterateNext();
        if ((next instanceof Document) || (next instanceof Element)) {
          next = new kat.util.XMLDoc(next);
          resultSet.push(next);
        }
      } while (next != null);
      return resultSet;
    },

    contains: function (xPath) {
      var doc = this.getXmlDoc();
      var iter = doc.evaluate(xPath, doc, this._resolver, XPathResult.ANY_TYPE, null);
      return _.exists(iter.iterateNext())
    },

    toString: function () {
      var serializer = new XMLSerializer();
      return serializer.serializeToString(this.getXmlDoc());
    },

    getTextContents: function () {
      return this.getXmlDoc().textContent;
    },

    getAttribute: function (attribute) {
      return this.getXmlDoc().getAttribute(attribute)
    },

    getChildren: function(){
      return _.map(this.getXmlDoc().childNodes, function(node){
        return new kat.util.XMLDoc(node);
      });
    }
  },

  internals: {
    resolver: null,

    setup: function () {
      var doc = this.getXmlDoc();
      this._resolver = document.createNSResolver(doc.ownerDocument == null ? doc.documentElement : doc.ownerDocument.documentElement);
    }
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * A singleton containing all the configuration parameters that can be tweaked.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.util.ConfigManager", {

  init: function () {

  },

  properties : {
    //the title displayed in the annotation form
    newAnnotationFormTitle : "Add new annotation"
  }
})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/*
 * KAT Constants.
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineObject("kat.Constants", {
  init   : function () {

  },
  statics: {
    TextPreprocessor: {
      IdPrefix          : "kat",
      Selector          : "body",
      SpanClass         : "kat-counter",
      AnnotationLinkText: "Annotate!"
    },
    Display         : {
      SpecialClass       : "kat-annotated",
      Triger             : "hover",
      AnnotationIdPrefix : "kat-annotation",
      AnnotationFormTitle: "Add Annotation",
      EditAnnotationFormTitle: "Edit annotation",
      SelectOntologyText : "Select an ontology",
      SelectConceptText  : "Select a concept",
      FormText           : "Fill in the following form",
      EditFormText       : "",
      CPanelTitle        : "KAT Control Panel"
    },
    Form            : {
      FieldPrefix: "field-id-",
      FieldWrapPrefix: "field-wrap-id-",
      FieldWrapClass: "kat-form-field-wrapper",
      FieldClass: "kat-form-field",
      ValuesSeparator: " | "
    }
  }
});







/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class for text preprocessing. It adds text selection listeners.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.preprocessor.TextPreprocessor", {
    /**
     * Class constructor.
     * @param {string} selector A valid cs3 selector, indicating the region in
     * HTML where the text to be processed sits.
     * @param {string} idPrefix [optional] The prefix to be added to the span
     * ids.
     */
    init: function (selector, idPrefix, ontologyRegistry, conceptRegistry, anotationRegistry) {
        if (selector) {
            this.setSelector(selector);
        }
        if (idPrefix) {
            this.setIdPrefix(idPrefix)
        }
        this._ontologyRegistry = ontologyRegistry;
        this._conceptRegistry = conceptRegistry;
        this._anotationRegistry = anotationRegistry;
    },
    properties: {
        selector: {
            value: kat.Constants.TextPreprocessor.Selector
        },
        idPrefix: {
            value: kat.Constants.TextPreprocessor.IdPrefix
        },
        display: {}
    },
    methods: {
        /**
         * Returns the ids containing the selected text.
         */
        getSelectedIds: function () {
            var t;
            if (window.getSelection) {
                t = window.getSelection();
            } else if (document.getSelection) {
                t = document.getSelection();
            } else if (document.selection) {
                t = document.selection.createRange().text;
            }
            var baseNode = t.getRangeAt(0).startContainer;
            var extentNode = t.getRangeAt(0).endContainer;
            var baseNodeId = $(baseNode.parentNode).attr('id');
            var extentNodeId = $(extentNode.parentNode).attr('id');
            if (t.toString()) {
                var result = {
                    "baseNodeId": baseNodeId,
                    "extentNodeId": extentNodeId
                };

                Object.keys(result).forEach(function (key) {
                   result[key] = result[key].replace(/\./g, '\\.');
                });

                return result;
            }
            else {
                return null;
            }

        },
        /**
         * When text is selected, the container ids are sent for further
         * processing.
         */
        addSelectionListener: function () {
            var self = this;
            $(this.getSelector()).mouseup(function () {
                var selectedIds = self.getSelectedIds();
                if (selectedIds) {
                    self._currentLinkId = "kat-add-annotation-" + parseInt(Math.random() * 1000);
                    var tooltipOptions = {
                        trigger: "custom",
                        interactive: true,
                        content: "<a id='" + self._currentLinkId + "' href='#'>" + kat.Constants.TextPreprocessor.AnnotationLinkText + "</a>"
                    };
                    var $target = $("#" + selectedIds["extentNodeId"]).eq(0);
                    $target.tooltipster(tooltipOptions);
                    $target.tooltipster('show');
                    //timeout necessary to allow the link to exist before registering an event to it
                    //to be removed when replaced by jobad callback
                    setTimeout(function () {
                            self._registerAddAnnotationHandler(selectedIds["baseNodeId"], selectedIds["extentNodeId"])
                        },
                        500);
                }
            })
        },
        /**
         * Encapsulates the behavior of the text preprocessor.
         * It adds selection listeners.
         */
        run: function () {
            this.addSelectionListener();
        }
    },

    internals: {
        ontologyRegistry: null,

        conceptRegistry: null,

        currentLinkId: "",

        registerAddAnnotationHandler: function (baseId, extentId) {
            var self = this;
            $("#" + this._currentLinkId).off("click.kat");
            $("#" + this._currentLinkId).on("click", function (e) {
                e.preventDefault();
                //check that at least 1 annotation ontology and at least 1 concept are defined
                if (!self._ontologyRegistry.getAllOntologies().length) {
                    throw Error("Please define at least 1 annotation ontology before adding annotations!");
                }
                if (!self._conceptRegistry.getAllConcepts().length) {
                    throw Error("Please make sure that the annotation ontologies define at least 1 concept!");
                }
                var typeForm = new kat.display.AnnotationTypeForm(baseId, extentId, self._ontologyRegistry, self._conceptRegistry, self._anotationRegistry, self.getDisplay());
                typeForm.run();
            })
        }
    }
});




/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * The Field Parser Registry contains all the field parsers that are available to parse
 * an annotation field.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.FieldParserRegistry", {
  init: function (annotationRegistry) {
    for (var parserName in kat.input.form.fieldparser) {
      if (kat.input.form.fieldparser[parserName] instanceof Function) {
        var parser = new kat.input.form.fieldparser[parserName](annotationRegistry);
        this._registry.push(parser);
      }
    }
  },

  methods: {
    /**
     * Returns a parser for the given field or throws an error if one
     * @param {kat.util.XMLDoc} xmlField the field to pe parsed
     * @return {*}
     */
    getParser: function (xmlField) {
      for (var i = 0; i < this._registry.length; i++) {
        if (this._registry[i].canParse(xmlField) === true) {
          return this._registry[i];
        }
      }
      throw Error("No suitable field parser found for this input type" + xmlField.toString())
    }
  },

  internals: {
    registry: []
  }
})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * The Form class decides which fields to be displayed in the current form.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.Form", {

  /**
   * Constructor for the class
   * @param {kat.annotation.ConceptRegistry} conceptsRegistry a registry containing the available concepts
   * @param {kat.annotation.AnnotationRegistry} annotationRegistry an annotation registry where the submitted annotation will be added
   */
  init: function (conceptsRegistry, annotationRegistry) {
    this.$conceptsRegistry = conceptsRegistry;
    this.$annotationRegistry = annotationRegistry;
    this._conceptName = this.getConceptsRegistry().getAllConcepts()[0].getName();
  },

  methods: {
    run: function () {

    }
  },

  properties: {
    conceptsRegistry  : {value: null, writable: false},
    annotationRegistry: {value: null, writable: false}
  },

  internals: {
    concept: null,

    setConceptName: function (conceptName) {
      this._conceptName = conceptName;
    },

    parseForm : function(){
      var parser = new kat.form.FormParser();
      return parser.getFields();
    },

    /**
     * Handler for the change event on the select box component of the selector
     */
    registerSelectorChangeHandler: function () {
      var self = this;
      jQuery("#" + kat.form.Concept.KSelectorId).on("change", function () {
        var conceptName = $(this).val();
        self._setConceptName(conceptName);
      });
    }

  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Describes a class that renders an annotation form containing the fields described in the concept
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.Form", {

  /**
   * Constructor for the class
   * @param {jQuery} $container the container in which the form should be places
   * @param {String[]} fields the fields to be added to the form, each as an HTML string.
   */
  init: function ($container, fields) {
    this._fields = fields;
    this._$container = $container;
  },

  methods: {
    /**
     * Renders the form in the given container
     */
    render: function () {
      var template = this.KFormTemplate.replace("{id}", this.KFormId)
        .replace("{fields}", this._fields.join("\n"));
      this._$container.html(template);
    }
  },

  internals: {
    fields    : [],
    $container: null
  },

  statics: {
    KFormId      : 'kat-form-annotation-form',
    KFormTemplate: '<form id="{id}" class="form-horizontal">{fields}</form>'
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Describes a class that acts as a container for an annotation form and a concept selector.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.FormContainer", {

  /**
   * Constructor for the class
   * @param {String[]} fields
   */
  init: function (fields) {
    this._fields = fields;
  },

  methods: {
    /**
     * Renders the container with both the concept selector and annotation form
     */
    render: function () {
      this._createContainer();
      this._createSelector();
      this._createForm();
    }
  },

  internals: {
    fields: null,

    /**
     * Creates the concept selector
     */
    createSelector: function () {
      var selector = new kat.form.view.ConceptSelector($("#" + this.KSelectorContainerId), this._form);
      selector.render();
    },

    /**
     * Creates the container in which the selector and annotation form will be rendered
     */
    createContainer: function () {
      var template = this.KContainerTemplate.replace("id", this.KContainerId)
        .replace("{title}", kat.util.ConfigManager.getNewAnnotationFormTitle())
        .replace("{conceptSelectorId}", this.KSelectorContainerId)
        .replace("{annotationFormId}", this.KAnnotationFormId);
      $("body").append(template);
    },

    /**
     * Creates the annotation form
     */
    createForm: function () {
      var form = new kat.form.view.Form($("#" + this.KAnnotationFormId), fields);
      form.render();
    }
  },

  statics: {
    KContainerId        : 'kat-form-container',
    KSelectorContainerId: 'kat-form-concept-selector',
    KAnnotationFormId   : 'kat-form-annotation-form',
    KContainerTemplate  : '<div id="{id}" class="modal hide fade">' +
      '<div class="modal-header">' +
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
      '<h3>{title}</h3>' +
      '</div>' +
      '<div class="modal-body">' +
      '<div id="{conceptSelectorId}"></div> ' +
      '<div id="{annotationFormId}"></div> ' +
      '</div>' +
      '<div class="modal-footer"><a href="#" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div>' +
      '</div>'
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class to describe an input element in the form container that is used to select a concept to be used in the
 * annotation form.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.form.view.ConceptSelector", {

  /**
   * Constructor for the class
   * @param {Object} $container the dom element in which the selector will be placed
   * @param {kat.form} form the form containing this selector
   */
  init: function ($container, form) {
    this._form = form;
    this._$container = $container;
  },

  methods: {
    /**
     * Renders the selector into the given container
     */
    render: function () {
      var html = this.KTemplate.replace("{id}", this.KSelectorId)
        .replace("{options}", this._getConceptsAsOptions())
      this._$container.html(html);
      this._registerChangeHandler();
    }
  },


  internals: {
    $container: null,
    concepts  : null,
    form      : null,

    /**
     * Returns the concepts available to the form as an <option> string
     * @return {String}
     */
    getConceptsAsOptions: function () {
      return _.map(this._form.getConceptRegistry().getAllConcepts(),function (concept) {
        return '<option>' + concept.name + '</option>';
      }).join("\n");
    }
  },

  statics: {
    KSelectorId: 'concept-selector',
    KTemplate  : '<select id="{id}">{options}</select>'
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * A form parser can be used to parse the fields and documentation from a given concept object.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.FormParser", {
  /**
   * Constructor for the class
   * @param {kat.annotation.Concept} concept an annotation:input xml element from which the form should be extracted
   */
  init: function(concept, annotationRegistry) {
    this._concept = concept;
    this._annotationRegistry = annotationRegistry;
  },
  methods: {
    /**
     * Parses the fields in xml format an returns an array of html input fields in string format.
     * @return {String[]}
     */
    parseFields: function() {
      var xmlFields = this._concept.getDefinition().getXmlDoc().getElementsByTagName("field");
      var fields = [];
      for (var i = 0; i < xmlFields.length; i++) {
        fields.push(this._parseField(new kat.util.XMLDoc(xmlFields[i])));
        this._fieldNames.push(xmlFields[i].getAttribute("name"));
      }
      return fields;
    },
    /**
     * Returns the documentation attached to the concept as a string.
     * @return {String}
     */
    parseDocumentation: function() {
      var documentation = "";
      if (this._concept.getDefinition().getXmlDoc().getElementsByTagName("documentation").length) {
        documentation = this._concept.getDefinition().getXmlDoc().getElementsByTagName("documentation")[0].textContent;
      }
      return documentation;
    },
    /**
     * Returns the form values as a map of form name => value
     * @return {Object}
     */
    getFormValues: function() {
      var values = {};
      for (var i = 0; i < this._fieldNames.length; i++) {
        var currentId = this._fieldNames[i];
        values[currentId] = "";
        //iterate over all of the inputs, possibly more than one
        jQuery("[name='" + currentId + "']").each(function() {
          //special handling for checkboxes
          if ($(this).attr("type") == "checkbox") {
            //take the ones that are checked
            if ($(this).is(":checked")) {
              //if it is the first one, just copy its value
              if (values[currentId] == "") {
                values[currentId] = $(this).val();
              }
              else {
                //if there was another one before, add a comma
                values[currentId] += kat.Constants.Form.ValuesSeparator + $(this).val();
              }
            }
          }
          else {
            //any other input
            //if it is the first one, just copy its value
            if (values[currentId] == "") {
              values[currentId] = $(this).val();
            }
            else {
              //if there was another one before, add a comma
              values[currentId] += kat.Constants.Form.ValuesSeparator + $(this).val();
            }
          }

        });
      }
      return values;
    }

  },
  internals: {
    concept: null,
    annotationRegistry: null,
    fieldNames: [],
    /**
     * Looks for a parser for the given field and if one is found it returns the parsed result.
     * @param {kat.util.XMLDoc} conceptField a concept field to be parsed
     * @return {String} the html input element as string parsed from the concept field
     */
    parseField: function(conceptField) {
      var registry = new kat.input.form.FieldParserRegistry(this._annotationRegistry);
      return registry.getParser(conceptField).parse(conceptField);
    }
  }
})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.SelectParser", {

  implements: ["kat.input.form.fieldparser"],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "select") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var ret = "";
      //check if there is a number of instances of the field required
      var atLeast = 0;
      var atMost = 0;
      var number = xmlField.getXmlDoc().getElementsByTagName("number");
      if(number.length){
        atLeast = parseInt(number[0].getAttribute("atleast"));
        atMost = parseInt(number[0].getAttribute("atmost"));
      }
      var options = xmlField.getXmlDoc().getElementsByTagName("option");
      if (!options) {
        throw Error("Error in the Annotation Ontology. No list of options provided for the select field!");
      }
      var optionsHtml = _.map(options,function (value) {
        //check if the option is default
        var isDefault = value.getAttribute("default") ? "default='true'" : "";
        //option value is mandatory
        var val = value.getElementsByTagName("value");
        if(!val.length){
          throw Error("Error in the Annotation Ontology. All options must have a value!");
        }
        val = val[0].textContent
        //check if a label exists, if not, use the value
        var label = value.getElementsByTagName("label").length ? value.getElementsByTagName("label")[0].textContent : val;
        //add documentation if present
        var documentation = value.getElementsByTagName("documentation").length ? "data-documentation='" + value.getElementsByTagName("documentation")[0].textContent + "'" : "";
        return "<option value='" + val + "' " + isDefault + documentation + ">" + label + "</option>"
      }).join("\n");     
      //if no requirements, append to template
      if(!atLeast){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
        var name="name='"+xmlField.getAttribute("name")+"'";
         ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
        .replace(/{required}/g, "");
      }
      //if requirements, append as many as needed
      for(var i = 0; i < atLeast; i++){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
         var name="name='"+xmlField.getAttribute("name")+"'";
         ret += this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
        .replace(/{required}/g, "required");
      }
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>"+ "<label class='control-label'>" + label + "</label>"  + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'> <div class='controls'><select {name} {documentation} {required} id='{id}'>{options}</select></div></div>"
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Parses the fields of type reference
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.ReferenceParser", {

  implements: ["kat.input.form.fieldparser"],

  init: function (annotationRegistry) {
    this._annotationRegistry = annotationRegistry;
  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "reference") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
      if (documentation != "") {
        documentation = "data-documentation='" + documentation + "'";
      }
      var referencedType = xmlField.getXmlDoc().getElementsByTagName("referencedType").length ? xmlField.getXmlDoc().getElementsByTagName("referencedType")[0].textContent : "";
      if (referencedType == "") {
        throw Error("Error in the Annotation Ontology. No referencedType provided for the reference field!");
      }
      var name = "name='" + xmlField.getAttribute("name") + "'";
      var annotations = this._annotationRegistry.getAnnotationsForConcept(referencedType);
      var options = "";
      for (var i = 0; i < annotations.length; i++) {
        var annotationText = annotations[i].getText();
        options += '<option data-annotation-id="' + annotations[i].getId() + '" value="' + annotationText["text"] + '">' + annotationText["trimmedText"] + '</option>\n';
      }
      if (options == "") {
        options = '<option value="undefined">No annotation found</option>';
      }
      var ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{documentation}/g, documentation)
        .replace(/{options}/g, options);

      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      ret = "<div " + wrapperClass + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>" + "<label class='control-label'>" + label + "</label>" + ret + "</div>";
      return ret;
    }
  },

  internals: {
    annotationRegistry: null
  },

  statics: {
    template: "<div class='control-group'> <div class='controls'><select class='reference-field' {name} {documentation} required='true' id='{id}'>{options}</select></div></div>"
  }

})

/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Field processor for text fields. For more details see @link{kat.input.form.fieldparser.FieldParser}
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.TextAreaParser", {
  //implements: [kat.input.form.fieldparser],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "textarea") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var ret = "";
      //check if there is a number of instances of the field required
      var atLeast = 0;
      var atMost = 0;
      var number = xmlField.getXmlDoc().getElementsByTagName("number");
      if(number.length){
        atLeast = parseInt(number[0].getAttribute("atleast"));
        atMost = parseInt(number[0].getAttribute("atmost"));
      }
      //if no requirements, append the template
      if(!atLeast){
        var name="name='"+xmlField.getAttribute("name")+"'";
        ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "false")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      //if any requirements, append the minimum required numbers of instances
      for(var i = 0; i < atLeast; i++){
        var name="name='"+xmlField.getAttribute("name")+"'";
        ret += this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length != null ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "true")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>"+ "<label class='control-label'>" + label + "</label>" + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'><div class='controls'><textarea class='" + kat.Constants.Form.FieldClass + "' name='{name}' data-documentation='{documentation}' data-validation='{validation}' id='{id}' required='{required}'>{value}</textarea></div></div>"
  }

});

/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * A field parser parses an annotation:field into an html string. This trait serves only as
 * an interface that the extending classes follow
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineTrait("kat.input.form.fieldparser.FieldParser", {
  needs: {
    canParse: Function,
    parse   : Function
  }
})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Parses a field of type checkboxes outputing html.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.CheckboxesParser", {

  implements: ["kat.input.form.fieldparser"],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "checkboxes") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var ret = "";
      //check if there is a number of instances of the field required
      var atLeast = 0;
      var atMost = 0;
      var number = xmlField.getXmlDoc().getElementsByTagName("number");
      if(number.length){
        atLeast = parseInt(number[0].getAttribute("atleast"));
        atMost = parseInt(number[0].getAttribute("atmost"));
      }
      var options = xmlField.getXmlDoc().getElementsByTagName("option");
      if (!options) {
        throw Error("Error in the Annotation Ontology. No list of options provided for the checkboxes field!");
      }
      var optionsHtml = _.map(options,function (value) {
        //check if the option is default
        var isDefault = value.getAttribute("default") ? "checked " : "";
        //option value is mandatory
        var val = value.getElementsByTagName("value");
        if(!val){
          throw Error("Error in the Annotation Ontology. All options must have a value!");
        }
        val = val[0].textContent
        //check if a label exists, if not, use the value
        var label = value.getElementsByTagName("label").length ? value.getElementsByTagName("label")[0].textContent : val;
        //add documentation if present
        var documentation = value.getElementsByTagName("documentation").length ? "data-documentation='" + value.getElementsByTagName("documentation")[0].textContent + "'" : "";
        var checkBox = "<label class='checkbox'>" + "<input name='" + xmlField.getAttribute("name") + "' type='checkbox' value='" + val + "' " + isDefault + documentation + ">" + label + "</input>";
        return checkBox + "</label>"
      }).join("\n");     
      //if no requirements, append to template
      if(!atLeast){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
         ret = this.template
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
      }
      //if requirements, append as many as needed
      for(var i = 0; i < atLeast; i++){
        var documentation = xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "";
        if(documentation != ""){
          documentation = "data-documentation='" + documentation + "'";
        }
         ret += this.template
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getAttribute("label") != null ? xmlField.getAttribute("label") : xmlField.getAttribute("name"))
        .replace(/{options}/g, optionsHtml)
        .replace(/{documentation}/g, documentation)
      }
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>"+ "<label class='control-label'>" + label + "</label>"  + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'><div class='controls'><div {documentation} id='{id}'>{options}</div></div></div>"
  }

})


/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Field processor for text fields. For more details see @link{kat.input.form.fieldparser.FieldParser}
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.input.form.fieldparser.TextFieldParser", {
  //implements: [kat.input.form.fieldparser],

  init: function () {

  },

  methods: {
    canParse: function (xmlField) {
      if (xmlField.getAttribute("type") == "text") {
        return true;
      }
      return false;
    },

    parse: function (xmlField) {
      var ret = "";
      //check if there is a number of instances of the field required
      var atLeast = 0;
      var atMost = 0;
      var number = xmlField.getXmlDoc().getElementsByTagName("number");
      if(number.length){
        atLeast = parseInt(number[0].getAttribute("atleast"));
        atMost = parseInt(number[0].getAttribute("atmost"));
      }
      //if no requirements, append the template
      if(!atLeast){
        var name="name='"+xmlField.getAttribute("name")+"'";
        ret = this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-0")
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "false")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      //if any requirements, append the minimum required numbers of instances
      for(var i = 0; i < atLeast; i++){
        var name="name='"+xmlField.getAttribute("name")+"'";
        ret += this.template
        .replace(/{name}/g, name)
        .replace(/{id}/g, kat.Constants.Form.FieldPrefix + xmlField.getAttribute("name") + "-" + i)
        .replace(/{label}/g, xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name"))
        .replace(/{value}/g, xmlField.getXmlDoc().getElementsByTagName("default").length ? xmlField.getXmlDoc().getElementsByTagName("default")[0].textContent : "")
        .replace(/{required}/g, "true")
        .replace(/{validation}/g, xmlField.getXmlDoc().getElementsByTagName("validation").length ? xmlField.getXmlDoc().getElementsByTagName("validation")[0].textContent : "")
        .replace(/{documentation}/g, xmlField.getXmlDoc().getElementsByTagName("documentation").length ? xmlField.getXmlDoc().getElementsByTagName("documentation")[0].textContent : "")
      }
      var label = xmlField.getXmlDoc().getElementsByTagName("label").length ? xmlField.getXmlDoc().getElementsByTagName("label")[0].textContent : xmlField.getAttribute("name");
      //adding a wrap over the added fields
      var dataAtMost = "";
      if(atMost){
        dataAtMost = "data-atmost='"+ atMost +"'";
      }
      var wrapperClass = "class='" + kat.Constants.Form.FieldWrapClass + "'";
      ret = "<div " + wrapperClass + dataAtMost + " id='" + kat.Constants.Form.FieldWrapPrefix + xmlField.getAttribute("name") + "'>" + "<label class='control-label'>" + label + "</label>" + ret + "</div>";
      return ret;
    }
  },

  statics: {
    template: "<div class='control-group'> \n\
<div class='controls'><input class='" + kat.Constants.Form.FieldClass + "' {name} data-documentation='{documentation}' data-validation='{validation}' type='text' id='{id}' value='{value}' required='{required}' /></div></div>"
  }

});









/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Creates an svg arrow that can be used to connect two dom elements, for example a
 * reference field annotation to the referenced item.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.ArrowConnector", {

    init: function (arrowBaseElement, arrowHeadElement) {
        this._arrowBaseElement = arrowBaseElement;
        this._arrowHeadElement = arrowHeadElement;
    },

    methods: {
        render: function () {
            if (!this._connection) {
                this._createSVGArrow();
            }
        },

        destroy: function () {
            if (this._connection) {
                jsPlumb.detach(this._connection, {
                    forceDetatch: true
                })
                this._connection = null;
            }
        }
    },

    internals: {
        arrowBaseElement: null,
        arrowHeadElement: null,
        connection: null,

        createSVGArrow: function () {
            this._connection = jsPlumb.connect({
                source: this._arrowBaseElement.attr('id'),
                target: this._arrowHeadElement.attr('id'),
                container: this._arrowBaseElement.parent(),
                overlays: [
                    "Arrow"
                ],
                paintStyle: {
                    strokeStyle: "#5b9ada",
                    lineWidth: 3
                },
                endpoint: "Blank",
                connector: ["Bezier", {curviness: 70}]
            });
        }

    }


})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class for handling the form displayed when an annotation is added.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationTypeForm", {
    init: function (idBase, idExtent, ontologyRegistry, conceptRegistry, annotationRegistry, display) {
        this._idBase = idBase;
        this._idExtent = idExtent;
        this._ontologyRegistry = ontologyRegistry;
        this._conceptRegistry = conceptRegistry;
        this._annotationRegistry = annotationRegistry;
        this.$display = display;
    },
    methods: {
        run: function () {
            this._renderContainer();
        }
    },
    properties: {
        display: {}
    },
    internals: {
        idBase: null,
        idExtent: null,
        selectedConceptName: null,
        formParser: null,
        ontologyRegistry: null,
        conceptRegistry: null,
        annotationRegistry: null,

        renderContainer: function () {
            jQuery("#" + this.KContainerId).remove();
            var containerHtml = this.KModalTemplate.replace("{id}", this.KContainerId)
                .replace("{title}", kat.Constants.Display.AnnotationFormTitle)
            jQuery("body").append(containerHtml);
            jQuery("#" + this.KContainerId).modal();
            this._renderOntologySelector();
        },

        renderOntologySelector: function () {
            var ontologies = _.map(this._ontologyRegistry.getAllOntologies(), function (val) {
                return {name: val.getName()};
            });
            var selectHtml = "<h5>" + kat.Constants.Display.SelectOntologyText + "</h5>";
            var documentationI = "<a data-documentation='Please select an ontology.' id='annotation-ontology-documentation' href='#'><i class='icon-question-sign'></i></a>";
            selectHtml += "<select id='annotation-ontology-selector'>{options}</select>" + documentationI + "<hr>";
            var options = "";
            for (var ontology in ontologies) {
                options += "<option>" + ontologies[ontology].name + "</option>\n";
            }
            $(".kat-ontology-selector").html(selectHtml.replace("{options}", options));
            var self = this;
            $("#annotation-ontology-selector").on("change", function () {
                self._registerConceptForOntology();
            });
            //register the documentation popover
            kat.util.Util.registerDocumentationPopover("#annotation-ontology-documentation");
            this._registerConceptForOntology();
        },

        registerConceptForOntology: function () {
            var ontology = $("#annotation-ontology-selector").val();
            if (ontology != "") {
                this._renderConceptSelector(ontology);
                //set the documentation
                var documentation = $(this._ontologyRegistry.lookupOntology(ontology).getDefinition().getXmlDoc()).children().contents("documentation");
                if (documentation.length) {
                    $("#annotation-ontology-documentation").show();
                    $("#annotation-ontology-documentation").data("documentation", $.trim($(documentation[0]).text()));
                    $("#annotation-ontology-documentation").popover('destroy');
                    kat.util.Util.registerDocumentationPopover("#annotation-ontology-documentation");
                }
                else {
                    $("#annotation-ontology-documentation").hide();
                }
            }
        },

        renderConceptSelector: function (ontology) {
            var selectHtml = "<h5>" + kat.Constants.Display.SelectConceptText + "</h5>";
            var documentationI = "<a data-documentation='Please select a concept.' id='annotation-concept-documentation' href='#'><i class='icon-question-sign'></i></a>";
            selectHtml += "<select id='annotation-concept-selector'>{options}</select>" + documentationI + "<hr>";
            var options = "";
            var concepts = this._conceptRegistry.getConceptsByOntology(ontology);
            for (var i = 0; i < concepts.length; i++) {
                options += '<option value="' + concepts[i].getName() + '">' +
                                concepts[i].getConceptName() + '</option>\n';
            }

            // Remove any previous installation of searchSelect
            jQuery("#annotation-concept-selector").searchSelect('destroy');
            $(".kat-concept-selector").html(selectHtml.replace("{options}", options));

            var self = this;

            jQuery("#annotation-concept-selector").on("change", function () {
                self._registerFormForConcept();
            }).searchSelect();

            //register documentation popover
            kat.util.Util.registerDocumentationPopover("#annotation-concept-documentation");
            self._registerFormForConcept();
        },

        registerFormForConcept: function () {
            var concept = $("#annotation-concept-selector").val();
            if (concept != "") {
                this._renderForm(concept);
                //set the documentation
                var documentation = $(this._conceptRegistry.lookupConcept(concept).getDefinition().getXmlDoc()).children().contents("documentation");
                //the following in needed because in some case, XMLDoc shortens the xml by 1 level
                if (!documentation.length) {
                    documentation = $(this._conceptRegistry.lookupConcept(concept).getDefinition().getXmlDoc()).contents("documentation");
                }
                if (documentation.length) {
                    $("#annotation-concept-documentation").show();
                    $("#annotation-concept-documentation").data("documentation", $.trim($(documentation[0]).text()));
                    $("#annotation-concept-documentation").popover('destroy');
                    kat.util.Util.registerDocumentationPopover("#annotation-concept-documentation");
                }
                else {
                    $("#annotation-concept-documentation").hide();
                }
            }
        },

        renderForm: function (concept) {
            this._selectedConceptName = concept;
            var conceptObject = this._conceptRegistry.lookupConcept(concept);
            this._formParser = new kat.input.form.FormParser(conceptObject, this._annotationRegistry);
            var documentation = "data-documentation='" + this._formParser.parseDocumentation() + "'";
            var fields = this._formParser.parseFields().join("\n");
            var htmlString = "<h5>" + kat.Constants.Display.FormText + "</h5>";
            htmlString += "<div {documentation} id='annotation-form-input'>{fields}</div>";
            $(".kat-form-display").html(htmlString.replace("{documentation}", documentation).replace("{fields}", fields));
            this._registerFormSaveHandler();
            this._addFormDocumentation();
            this._addFormExpandableInputs();
        },

        addFormDocumentation: function () {
            var documentedItems = $("#annotation-form-input").find("[data-documentation]");
            for (var i = 0; i < documentedItems.length; i++) {
                var documentation = $(documentedItems[i]).data("documentation")
                if (documentation) {
                    var linkId = "form-documentation-a-" + parseInt(Math.random() * 1000);
                    $(documentedItems[i]).parent().append('<a id="' + linkId + '" title="Documentation" class="form-documentation-a" href="#"><i class="icon-question-sign"></i></a>');
                    var popoverOptions = {
                        "title": "Documentation",
                        "placement": "right",
                        "content": documentation
                    };
                    $("#" + linkId).popover(popoverOptions);
                }
            }
        },

        addFormExpandableInputs: function () {
            var expandableItems = $("#annotation-form-input").find("[data-atmost]");
            for (var i = 0; i < expandableItems.length; i++) {
                var atmost = parseInt($(expandableItems[i]).data("atmost"));
                var children = $(expandableItems[i]).find(".control-group");
                if (children.length < atmost) {
                    var linkId = "form-expand-a-" + parseInt(Math.random() * 1000);
                    //find the last control group, add the plus sign inside
                    $(expandableItems[i]).find('.control-label:first').prepend('<a id="' + linkId + '" title="Add More" class="form-expand-a" href="#"><i class="icon-plus-sign"></i></a>');
                    //register the add more behaviour
                    $("#" + linkId).off("click.kat");
                    $("#" + linkId).on("click.kat", function () {
                        var wrapper = $(this).parents(".kat-form-field-wrapper:first");
                        //add another control group
                        var newGroup = $(wrapper).find(".control-group:last").clone();
                        $(wrapper).append(newGroup);
                        //if the maximum allowed number is achieved, remove the button
                        if (parseInt($(wrapper).data("atmost")) == $(wrapper).children(".control-group").length) {
                            $(this).remove();
                        }
                    });
                }
            }
        },

        registerFormSaveHandler: function () {
            var self = this;
            var formSaveButton = $("#kat-form-save");
            formSaveButton.off("click.kat");
            formSaveButton.on("click.kat", function () {
                var form = jQuery(".kat-form-display");
                var extraData = {};
                if (form.find(".reference-field")) {
                    extraData.referenceId = form.find(".reference-field :selected").attr("data-annotation-id");
                }
                var annotation = new kat.annotation.Annotation(self._idBase, self._idExtent, self._selectedConceptName, self._formParser.getFormValues(), null, extraData);
                self._registerNewAnnotation(annotation);
                self._destroy();
            })
        },

        displaySuccessMessage: function () {
            $.pnotify({
                title: 'KAT Message',
                text: 'Annotation was successfully saved.',
                type: 'success'
            });
        },

        registerNewAnnotation: function (annotation) {
            this._annotationRegistry.addAnnotation(annotation);
            var renderedAnnotation = (new kat.display.AnnotationRenderer(annotation, this._conceptRegistry)).render();
            this.getDisplay().addAnnotation(renderedAnnotation);
            this.getDisplay().update();
            this._displaySuccessMessage();
        },

        destroy: function () {
            jQuery("#annotation-concept-selector").searchSelect('destroy');
            jQuery("#" + this.KContainerId).modal("hide");
            jQuery("#" + this.KContainerId).remove();
        }
    },
    statics: {
        KAnnotationInputFilter: "//rdf:Description/annotation:annotation/annotation:input",
        KContainerId: "kat-annotation-form-display",
        KModalTemplate: '<div id="{id}" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>{title}</h3></div><div class="modal-body"><div class="kat-ontology-selector"></div><div class="kat-concept-selector"></div> <form class="form-horizontal"><div class="kat-form-display"></div></form> </div><div class="modal-footer"><a href="#" data-dismiss="modal" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div></div>'
    }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class for handling the display of a singe annotation.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationRenderer", {
  init: function(annotation, conceptRegsitry) {
    this._annotation = annotation;
    this._conceptRegistry = conceptRegsitry;
  },
  methods: {
    render: function() {
      return {
        ontology: this._annotation.getOntology(),
        concept: this._annotation.getConcept(),
        idBase: this._annotation.getIdBase(),
        idExtent: this._annotation.getIdExtent(),
        content: this._buildContent(),
        id: this._annotation.getId(),
        style: this._style
      }
    }
  },
  internals: {
    annotation: null,
    conceptRegistry: null,
    style: null,

    buildContent: function() {
      var annotationType = this._conceptRegistry.lookupConcept(this._annotation.getConcept());
      var display = annotationType.getDefinition().getXmlDoc().getElementsByTagName("template");
      if(!display.length){
        throw Error("Each annotation concept must define a display!");
      }
      //get the eventual style definition
      var style = annotationType.getDefinition().getXmlDoc().getElementsByTagName("style");
      if(style.length){
          this._style = style[0].textContent.trim();
      }
      var template = display[0].textContent;
      var replacements = this._annotation.getAnnotationValues();
      for (var name in replacements) {
        template = template.replace(new RegExp("{" + name + "}", "g"), replacements[name]);
      }
      return template;
    },

    displayReference: function(){

    }
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class for handling the form displayed when an annotation is being edited.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationEditForm", {

    init: function (annotation, concept, annotationRegistry, conceptRegistry, display) {
        this.$annotation = annotation;
        this.$concept = concept;
        this._annotationRegistry = annotationRegistry;
        this.$display = display;
        this._conceptRegistry = conceptRegistry;
    },

    properties: {
        annotation: {},
        concept: {},
        display: {}
    },

    methods: {
        run: function () {
            this._renderContainer();
            jQuery("#" + this.KContainerId).on("hidden", function () {
                $(this).remove();
            })
        }
    },

    internals: {
        getAnnotationText: function () {
            var annotation = this.$annotation;
            var text = $("#" + annotation["$idBase"]).html();
            if (annotation["$idBase"] != annotation["$idExtent"]) {
                text += " ...";
            }
            return "<span class='kat-annotation-text'>" + text + "</span>";
        },
        renderContainer: function () {
            jQuery("#" + this.KContainerId).remove();
            var containerHtml = this.KModalTemplate.replace("{id}", this.KContainerId)
                .replace("{title}", kat.Constants.Display.EditAnnotationFormTitle + " for: " + this._getAnnotationText());
            jQuery("body").append(containerHtml);
            jQuery("#" + this.KContainerId).modal();
            var formParser = new kat.input.form.FormParser(this.getConcept(), this._annotationRegistry);
            var documentation = "data-documentation='" + formParser.parseDocumentation() + "'";
            var fields = formParser.parseFields().join("\n");
            var htmlString = "<h5>" + kat.Constants.Display.FormText + "</h5>";
            htmlString += "<div {documentation} class='annotation-form-edit-input'>{fields}</div>";
            $(".kat-form-display").html(htmlString.replace("{documentation}", documentation).replace("{fields}", fields));
            this._addFormDocumentation();
            this._addFormExpandableInputs();
            this._registerDeleteHandler();
            this._populateForm();
            this._registerSaveHandler(formParser);
        },
        addFormDocumentation: function () {
            var documentedItems = $(".annotation-form-edit-input").find("[data-documentation]");
            for (var i = 0; i < documentedItems.length; i++) {
                var documentation = $(documentedItems[i]).data("documentation")
                if (documentation) {
                    var linkId = "form-documentation-a-" + parseInt(Math.random() * 1000);
                    $(documentedItems[i]).parent().append('<a id="' + linkId + '" title="Documentation" class="form-documentation-a" href="#"><i class="icon-question-sign"></i></a>');
                    var popoverOptions = {
                        "title": "Documentation",
                        "placement": "right",
                        "content": documentation
                    };
                    $("#" + linkId).popover(popoverOptions);
                }
            }
        },
        addFormExpandableInputs: function () {
            var expandableItems = $(".annotation-form-edit-input").find("[data-atmost]");
            for (var i = 0; i < expandableItems.length; i++) {
                var atmost = parseInt($(expandableItems[i]).data("atmost"));
                var children = $(expandableItems[i]).find(".control-group");
                if (children.length < atmost) {
                    var linkId = "form-expand-a-" + parseInt(Math.random() * 1000);
                    //find the last control group, add the plus sign inside
                    $(expandableItems[i]).find('.control-label:first').prepend('<a id="' + linkId + '" title="Add More" class="form-expand-a" href="#"><i class="icon-plus-sign"></i></a>');
                    //register the add more behaviour
                    $("#" + linkId).off("click.kat");
                    $("#" + linkId).on("click.kat", function () {
                        var wrapper = $(this).parents(".kat-form-field-wrapper:first");
                        //add another control group
                        var newGroup = $(wrapper).find(".control-group:last").clone();
                        $(wrapper).append(newGroup);
                        //if the maximum allowed number is achieved, remove the button
                        if (parseInt($(wrapper).data("atmost")) == $(wrapper).children(".control-group").length) {
                            $(this).remove();
                        }
                    });
                }
            }
        },
        populateForm: function () {
            for (var key in this.$annotation["$annotationValues"]) {
                var values = this.$annotation["$annotationValues"][key].split(kat.Constants.Form.ValuesSeparator);
                //if only 1 value, put it in the field
                if (values.length == 1) {
                    $("[name='" + key + "']").val(this.$annotation["$annotationValues"][key]);
                }
                else {
                    for (var i = 0; i < values.length; i++) {
                        //expand the form if needed
                        if (i) {
                            $("[name='" + key + "']").parents(".kat-form-field-wrapper").find(".form-expand-a").click();
                        }
                        //set the value of the expanded field
                        $("[name='" + key + "']:last").val(values[i]);

                    }
                }
            }
        },
        registerDeleteHandler: function () {
            var self = this;
            $(".delete-kat-annotation").off("click.kat");
            $(".delete-kat-annotation").on("click.kat", function () {
                self._destroy();
                bootbox.confirm("Delete the annotation for " + self._getAnnotationText() + "?", function (e) {
                    if (e) {
                        //remove the annotation from the registry
                        self._annotationRegistry.deleteAnnotation(self.$annotation["$id"]);
                        //remove it from the display as well
                        self.getDisplay().deleteAnnotation(self.$annotation["$id"]);
                        self.getDisplay().update();
                        $.pnotify({
                            title: 'KAT Message',
                            text: 'The annotation for <b>' + self._getAnnotationText() + '</b> was successfully deleted.',
                            type: 'success'
                        });
                    }
                })
            })
        },
        registerSaveHandler: function (formParser) {
            var self = this;
            var form = $("#kat-form-save");
            form.off("click.kat");
            form.on("click.kat", function () {
                //create a new annotation
                var annotation = new kat.annotation.Annotation(self.$annotation["$idBase"], self.$annotation["$idExtent"], self.$concept["$name"], formParser.getFormValues());
                self._annotationRegistry.addAnnotation(annotation);
                var renderedAnnotation = (new kat.display.AnnotationRenderer(annotation, self._conceptRegistry)).render();
                self.getDisplay().addAnnotation(renderedAnnotation);
                //remove the old one
                self._annotationRegistry.deleteAnnotation(self.$annotation["$id"]);
                self.getDisplay().deleteAnnotation(self.$annotation["$id"]);
                //update the display
                self.getDisplay().update();
                self._destroy();
                $.pnotify({
                    title: 'KAT Message',
                    text: 'The annotation for <b>' + self._getAnnotationText() + '</b> was successfully updated.',
                    type: 'success'
                })
            })
        },
        destroy: function () {
            jQuery("#" + this.KContainerId).modal("hide");
            jQuery("#" + this.KContainerId).remove();
        },
        annotationRegistry: null,
        conceptRegistry: null
    },

    statics: {
        KContainerId: "kat-annotation-edit-form-display",
        KModalTemplate: '<div id="{id}" class="modal hide fade"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>{title}</h3></div><div class="modal-body"><form class="form-horizontal"><div class="kat-form-display"></div></form> </div><div class="modal-footer"><button class="btn btn-danger pull-left delete-kat-annotation">Delete</button></button><a href="#" data-dismiss="modal" class="btn">Close</a><a href="#" id="kat-form-save" class="btn btn-primary">Save</a></div></div>'
    }

})/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/*
 * Creates and controls the annotation displays.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.Display", {
  /**
   * Class constructor
   * @param {Array[Object{idBase, idExtent, content}]} annotations The array of
   * annotations to be displayed.
   * @param {String} specialClass The class to be added to the words having
   * annotations bound.
   */
  init      : function (annotations, annotationRegsitry, conceptRegsitry, specialClass) {
    this.setAnnotations(annotations);
    if (specialClass) {
      this.setSetSpecialClass(specialClass);
    }
    this._annotationRegistry = annotationRegsitry;
    this._conceptRegistry = conceptRegsitry;
  },
  properties: {
    annotations : {
      value: []
    },
    specialClass: {
      value: kat.Constants.Display.SpecialClass
    }
  },
  methods   : {
    /**
     * Adds an annotation to the display
     */
    addAnnotation         : function (annotation) {
      this.$annotations.push(annotation);
    },
    /**
     * Removes an annotation from the display
     */
    deleteAnnotation      : function (id) {
      for (var i = 0; i < this.$annotations.length; i++) {
        if (this.$annotations[i]["id"] == id) {
          this.$annotations.splice(i, 1);
        }
      }
    },
    /**
     * Adds the class to the spans having annotations bound
     */
    addSpecialClassToSpans: function () {
      for (var i = 0; i < this.getAnnotations().length; i++) {
        var annotation = this.$annotations[i];
        var id1 = annotation["idBase"];
        var id2 = annotation["idExtent"];

        //exchange if necessary, to start from the smallest
        if ($("#" + id1).index() > $("#" + id2).index()) {
          var aux = id2;
          id2 = id1;
          id1 = aux;
        }
        console.log("ids ", id1, id2);
        var annotatedIds;
        if (id1 === id2) {
          annotatedIds = $('#' + id1);
        } else {
          annotatedIds = $("#" + id1).nextUntil("#" + id2).andSelf().add($('#' + id2));
        }

        var ontologyClass = 'ontology-' + annotation.ontology;
        var conceptClass = 'concept-' + annotation.concept.replace(/\./g, '-');
        var classes = [this.getSpecialClass(), ontologyClass, conceptClass].join(" ");
        var currentAnnotationId = annotation["id"];
        annotatedIds.wrapAll("<span " +
          "id='" + currentAnnotationId + "' " +
          "class='" + classes + "' " +
          "ontology='" + annotation.ontology + "' " +
          "concept='" + annotation.concept + "'>"
        );
        annotation["id"] = currentAnnotationId;
        if (annotation["style"] != null) {
          var rules = annotation["style"].split(";");
          for (var j = 0; j < rules.length; j++) {
            var rule = rules[j].split(":");
            if (rule.length == 2) {
              $("#" + currentAnnotationId).css(rule[0].trim(), rule[1].trim());
            }
          }
        }

      }
    },
    createTooltipDisplays : function () {
      for (var i = 0; i < this.getAnnotations().length; i++) {
        var editButton = '<i title="Edit" class="icon-edit pull-right edit-annotation" id="edit-annotation-' + this.$annotations[i].id + '"></i>';
        var closeButton = '<i title="Close" class="icon-remove"></i>';
        var tooltipsterOptions = {
          //"trigger": kat.Constants.Display.Triger,
          //"interactive": true,
          "title"    : 'Annotation <button type="button" class="close" id="close-' + this.$annotations[i].id + '" aria-hidden="true">' + closeButton + '</button>' + editButton,
          "html"     : true,
          "placement": "bottom",
          "content"  : this.$annotations[i].content
        }
        var currentAnnotation = this._annotationRegistry.getAnnotation(this.$annotations[i].id);
        if (currentAnnotation.getExtraData().referenceId) {
          this.createReferenceArrow(currentAnnotation, this.$annotations[i].id);
        }
        $("#" + this.$annotations[i].id).popover(tooltipsterOptions);
        var annotationId = "#" + this.$annotations[i].id;
        var annotationCloseId = "#" + 'close-' + this.$annotations[i].id;
        (function (annotationId, annotationCloseId) {
          $("body").delegate(annotationCloseId, "click", function () {
            $(annotationId).popover('hide');
          })
        })(annotationId, annotationCloseId)
      }
      this._registerEditAnnotationCallback();
    },

    createReferenceArrow: function (currentAnnotation, annotationId) {
      var self = this;
      var baseAnnotationSpan = jQuery("#" + currentAnnotation.getIdBase());
      var pointingAnnotationSpan = jQuery("#" + self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId).getIdBase());
      var arrow = new kat.display.ArrowConnector(baseAnnotationSpan, pointingAnnotationSpan);
      $("#" + annotationId).on('shown', function () {
        arrow.render();
      })
      $("#" + annotationId).on('hide', function () {
        arrow.destroy();
      });
    },

    /**
     * Encapsulates the behavior of the Display by adding classes to
     * annotated spans and creating display handlers.
     */
    run   : function () {
      this.addSpecialClassToSpans();
      this.createTooltipDisplays();
    },
    /**
     * Resets the display object
     */
    reset : function () {
      //remove the popovers
      for (var i = 0; i < this.$annotations.length; i++) {
        $("#" + this.$annotations[i].id).popover('destroy');
      }
      //remove the special class span
      $("." + this.getSpecialClass()).each(function () {
        $(this).children().unwrap();
      })
    },
    /**
     * Updates the display
     */
    update: function () {
      this.reset();
      this.run();
    }
  },

  internals: {
    registerEditAnnotationCallback: function () {
      var self = this;
      $("body").off("click.kat", ".edit-annotation");
      $("body").on("click.kat", ".edit-annotation", function () {
        var id = $(this).attr('id').split('edit-annotation-');
        id = id[1];
        $("#" + id).popover('hide');
        var annotation = self._annotationRegistry.getAnnotation(id);
        var concept = self._conceptRegistry.lookupConcept(annotation["$concept"]);
        var annotationEditForm = new kat.display.AnnotationEditForm(annotation, concept, self._annotationRegistry, self._conceptRegistry, self);
        annotationEditForm.run();
      });
    },

    annotationRegistry: null,
    conceptRegistry   : null
  }
});
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * This class provides a tool for displaying and handling the KAT Control Panel.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.display.AnnotationOntologyViewer", {
  init     : function (ontologyRegistry, conceptRegistry, annotationRegistry) {
    this._ontologyRegistry = ontologyRegistry;
    this._conceptRegistry = conceptRegistry;
    this._annotationRegistry = annotationRegistry;
  },
  methods  : {
    run: function () {
      this._registerViewerLink();
    }
  },
  internals: {
    registerViewerLink          : function () {
      $("body").append(this.ontologyViewerLink);
      var self = this;
      $("#annotation-viewer-link a").on('click', function (event) {
        event.preventDefault();
        self._viewOntology();
      })

    },
    viewOntology                : function () {
      var ontologies = this._ontologyRegistry.getAllOntologies();
      var ontologyList = [];
      _.each(ontologies, function (ontology) {
        ontologyList.push("<li class='ontology-type-view'><a href='#'>" + ontology.getName() + "</a>" + "</li>");
      });
      ontologyList.push("<li class='active ontology-type-view'><a class='new-ontology' href='#'>New Ontology</a></li>")
      var ontologyHtml = this.viewOntologiesTemplate.replace("{annotationTabs}", ontologyList.join("\n"));
      $("#annotation-viewer-modal").remove();
      $("body").append(ontologyHtml);
      var self = this;
      $(".ontology-type-view a").on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        var ontology = null;
        $("li.ontology-type-view").removeClass("active");
        $this.parent().addClass("active");
        var deleteOntology = "";
        if ($this.hasClass("new-ontology")) {
          ontology = new kat.annotation.Ontology("", "");
        } else {
          ontology = self._ontologyRegistry.lookupOntology($this.text());
          deleteOntology = '<span class="pull-right"><button id = "delete-' + ontology.getName() + '" class="btn btn-danger delete-ontology" data-dismiss="modal" type="button">Delete this annotation ontology</button><label class="checkbox"><input type="checkbox" name="delete-ontology">all annotations of this type too</label></span>';
        }
        var formHtml = self.ontologyHtmlForm.replace("{annotationName}", ontology.getName())
          .replace("{annotationText}", ontology.getDefinition())
          .replace("{delete-annotation}", deleteOntology);
        $("#annotation-viewer-contents").html(formHtml);
        self._registerSaveHandler();
        self._registerDeleteHandler();
      })
      $("#annotation-viewer-modal").modal("show");
      self._registerClearRegistryHandler();
      self._registerDeleteAllAnnotationsHandler();
      self._registerShowHideAllAnnotations();
      self._registerDisplayAllConnections();
      $(".active.ontology-type-view a").click();
    },
    registerSaveHandler         : function () {
      var self = this;
      $("#annotation-loader-save").off('click.kat');
      $("#annotation-loader-save").on('click.kat', function () {
        var name = $("#annotation-type-name").val();
        var ontologyXmlString = $("#annotation-type-contents").val()
        var ontology = new kat.annotation.Ontology(name, ontologyXmlString.trim());
        //remove the old ontology from the registry
        self._ontologyRegistry.removeOntology(name);
        //remove all the concepts
        var concepts = self._conceptRegistry.getAllConcepts();
        for (var i = 0; i < concepts.length; i++) {
          if (concepts[i].getOntology() == name) {
            self._conceptRegistry.removeConcept(concepts[i].getName());
          }
        }
        //add the new ontology
        self._ontologyRegistry.addOntology(ontology);
        //add the new concepts
        var conceptsText = "The following concepts have been added:<br/>";
        var newConcepts = ontology.getDefinition().getXmlDoc().getElementsByTagName("concept");
        for (var i = 0; i < newConcepts.length; i++) {
          var conceptName = newConcepts[i].getAttribute("name");
          conceptsText += '<i class="icon-arrow-right"></i> <b>' + name + "." + conceptName + "</b><br/>";
          self._conceptRegistry.addConcept(new kat.annotation.Concept(name + "." + conceptName, newConcepts[i], name));
        }
        $.pnotify({
          title: 'KAT Message',
          text : 'The annotation ontology <b>' + ontology.getName() + '</b> was successfully saved.<br/>' + conceptsText,
          type : 'success'
        });
      })
    },
    registerClearRegistryHandler: function () {
      var self = this;
      $("#annotation-registry-clear").off('click.kat');
      $("#annotation-registry-clear").on('click.kat', function () {
        bootbox.confirm("Clearing the registry is irreversible. Do you want to continue?", function (e) {
          if (e) {
            self._ontologyRegistry.clearRegistry();
            self._conceptRegistry.clearRegistry();
            $.pnotify({
              title: 'KAT Message',
              text : 'The annotation ontology registry was successfully cleared.',
              type : 'success'
            });
          }
        });
      })
    },

    registerDeleteAllAnnotationsHandler: function () {
      var self = this;
      $("#annotations-clear").off('click.kat');
      $("#annotations-clear").on('click.kat', function () {
        bootbox.confirm("All annotation, of all types, will be deleted. This action is irreversible. Do you want to continue?", function (e) {
          if (e) {
            self._annotationRegistry.clearRegistry();
            $.pnotify({
              title: 'KAT Message',
              text : 'The annotation registry was successfully cleared.',
              type : 'success'
            });
          }
        });
      })
    },
    registerDeleteHandler              : function () {
      var self = this;
      $('.delete-ontology').off('click.kat');
      $('.delete-ontology').on('click.kat', function () {
        var that = this;
        bootbox.confirm("Removing ontologies is irreversible. Do you want to continue?", function (e) {
          if (e) {
            var id = $(that).attr('id').split("delete-");
            var ontologyName = id[1];
            //remove ontology
            self._ontologyRegistry.removeOntology(ontologyName);
            //remove all concepts
            for (var i = 0; i < self._conceptRegistry.getAllConcepts().length; i++) {
              if (self._conceptRegistry.getAllConcepts()[i].getOntology() == ontologyName) {
                self._conceptRegistry.removeConcept(self._conceptRegistry.getAllConcepts()[i].getName());
              }
            }
            var deleteAnnotations = "";
            //if delete-annotations is checked, delete annotations
            if ($('input[name="delete-ontology"]').is(":checked")) {
              var countAnnotations = 0;
              for (var i = 0; i < self._annotationRegistry.getAnnotations().length; i++) {
                if (self._annotationRegistry.getAllAnnotations()[i].getOntology() == ontologyName) {
                  countAnnotations++;
                  self._annotationRegistry.removeConcept(self._annotationRegistry.getAllAnnotations()[i].getName());
                }
              }
              deleteAnnotations = "</br>" + countAnnotations + " annotations of were deleted as well.";
            }
            $.pnotify({
              title: 'KAT Message',
              text : 'The ontology <b>' + ontologyName + '</b> was successfully deleted.' + deleteAnnotations,
              type : 'success'
            });
          }
        })

      });
    },
    registerShowHideAllAnnotations     : function () {
      $("#show-all-annotations").off("click.kat");
      $("#show-all-annotations").on("click.kat", function () {
        $("." + kat.Constants.Display.SpecialClass).popover("show");
        $.pnotify({
          title: 'KAT Message',
          text : 'All annotations shown.',
          type : 'success'
        });
        $("#close-cpanel").click();
      })
      $("#hide-all-annotations").off("click.kat");
      $("#hide-all-annotations").on("click.kat", function () {
        $("." + kat.Constants.Display.SpecialClass).popover("hide");
        $.pnotify({
          title: 'KAT Message',
          text : 'All annotations hidden.',
          type : 'success'
        });
        $("#close-cpanel").click();
      })

    },

    registerDisplayAllConnections: function () {
      var self = this;
      jQuery("#show-all-connections").click(function () {
        if (!self._arrowsDisplayed) {
          self._arrowsDisplayed = true;
          var annotations = self._annotationRegistry.getAnnotations();
          for (var i = 0; i < annotations.length; i++) {
            var currentAnnotation = annotations[i];
            if (currentAnnotation.getExtraData().referenceId) {
              var referencedAnnotation = self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId);
              var arrowConnector = new kat.display.ArrowConnector(jQuery("#" + currentAnnotation.getIdBase()), jQuery("#" + referencedAnnotation.getIdBase()));
              self._arrowConnectors.push(arrowConnector);
              arrowConnector.render();
            }
          }

          $.pnotify({
            title: 'KAT Message',
            text : 'All connections shown.',
            type : 'success'
          });
          $("#close-cpanel").click();
        }
        else {
          for (var i = 0; i < self._arrowConnectors.length; i++) {
            self._arrowConnectors[i].destroy();
          }
          self._arrowConnectors = [];
          self._arrowsDisplayed = false;

          $.pnotify({
            title: 'KAT Message',
            text : 'All connections hidden.',
            type : 'success'
          });
          $("#close-cpanel").click();
        }
      })
    },

    ontologyRegistry  : null,
    conceptRegistry   : null,
    annotationRegistry: null,
    arrowConnectors   : [],
    arrowsDisplayed   : false
  },
  statics  : {
    viewOntologiesTemplate: '<div id="annotation-viewer-modal" class="modal hide fade"><div class="modal-header"><button id="close-cpanel" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><i id="hide-all-annotations" title="Hide all annotations" class="icon-eye-close pull-right"></i> <i title="Show all annotations" id="show-all-annotations" class="icon-eye-open pull-right"></i> <i title="Show all reference connections" id="show-all-connections" class="icon-refresh pull-right"></i><h3>' + kat.Constants.Display.CPanelTitle + '</h3></div>  <div class="modal-body"> <ul class="nav nav-tabs" id="annotation-tabs">{annotationTabs}</ul> <div id="annotation-viewer-contents"></div>  </div>  <div class="modal-footer">    <a href="#" data-dismiss="modal" data-dismiss="modal" class="btn">Close</a> <a href="#" data-dismiss="modal" id="annotation-registry-clear" class="pull-left btn btn-danger">Clear Registry</a><a href="#" data-dismiss="modal" id="annotations-clear" class="pull-left btn btn-danger">Clear All Annotations</a>    <a href="#" data-dismiss="modal" id="annotation-loader-save" class="btn btn-primary">Save changes</a>  </div></div>',
    ontologyHtmlForm      : '<input id="annotation-type-name" type="text" value="{annotationName}" placeholder="Annotation Name"/>{delete-annotation} <textarea id="annotation-type-contents" style="width: 90%" rows="14">{annotationText}</textarea>',
    ontologyViewerLink    : '<div id="annotation-viewer-link">      <a href="#">' + kat.Constants.Display.CPanelTitle + '</a></div>'
  }

})




/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Retrieves the document and the annotations from the CoreTeX service and populates
 * the internal registry
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.remote.CoreTeXAnnotationRetriever", {
  init: function (serviceUrl, conceptRegistry, documentId, container) {
    this._serviceUrl = serviceUrl;
    this._conceptRegistry = conceptRegistry;
    this._documentId = documentId;
    this._container = container;
  },

  methods: {
    loadRegistry: function (annotationRegistry) {
      this._annotationRegistry = annotationRegistry;
      this._retrieveDocumentAndAnnotations();
    }
  },

  internals: {
    serviceUrl        : null,
    conceptRegistry   : null,
    annotationRegistry: null,
    documentId        : null,


    retrieveDocumentAndAnnotations: function () {
      var retrievalUrl = this._serviceUrl + "?" + this.KServiceParameters + "&" + this.KDocumentIdParameter + "=" + this._documentId;
      jQuery.get(retrievalUrl,function (data) {
        var decodedData = JSON.parse(data);
        var document = decodedData.document;
        var annotations = decodedData.annotations;
        if (document == null || annotations == null) {
          throw Error("Error while loading the document from the CoreTeX service.");
        }
        this._setupDocument(document);
        this._registerAnnotations(annotations);
      }).fail(function () {
          throw Error("Could not load the document and annotations from the specified url: " + retrievalUrl)
        })
    },

    setupDocument: function (documentString) {
      this._container.html(documentString);
    },

    registerAnnotations: function (annotations) {
      for (var annotationId in annotations) {
        var annotation = new kat.annotation.Annotation(annotations[annotationId].baseId,
          annotations[annotationId].idExtent,
          this._conceptRegistry.lookupConcept(annotations[annotationId].concept),
          annotations[annotationId].values,
          annotationId,
          annotations[annotationId].extraData
        )
        this._annotationRegistry.addAnnotation(annotation);
      }
    }
  },

  statics: {
    KServiceParameters  : "service=KAT",
    KDocumentIdParameter: "documentId"
  }


})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Sends the annotations being created on this document to the CoreTeX system.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.remote.CoreTexAnnotationInserter", {
  init: function (serviceUrl, documentId, conceptRegistry) {
    this._serviceUrl = serviceUrl;
    this._documentId = documentId;
    this._conceptRegistry = conceptRegistry;
  },

  methods: {
    save: function (annotationRegistry) {
      this._annotationRegistry = annotationRegistry;
      this._postData();
    }
  },

  internals: {
    serviceUrl        : null,
    annotationRegistry: null,
    documentId        : null,
    conceptRegistry   : null,

    postData: function () {
      var postUrl = this._serviceUrl + "?" + this.KServiceParameters + "&" + this.KDocumentIdParameter
      jQuery.post(postUrl, this._serializePostData(),function () {
        $.pnotify({
          title: 'Success',
          text : "The annotations were successfully saved.",
          type : 'success'
        });
      }).fail(function () {
          window.error("Could not save the annotations.");
        })
    },

    serializeAnnotation: function (annotation) {
      var serializedAnnotation = {
        id       : annotation.getId(),
        idBase   : annotation.getIdBase(),
        idExtent : annotation.getIdExtent(),
        values   : annotation.getAnnotationValues(),
        concept  : annotation.getConcept(),
        extraData: annotation.getExtraData()
      }
      return serializedAnnotation
    },

    serializePostData: function () {
      var rdfAnnotations = "";
      var serializedAnnotations = [];
      var self = this;
      var annotations = this._annotationRegistry.getAnnotations();
      _.each(annotations, function (annotation) {
        rdfAnnotations += annotation.toRDF(self._conceptRegistry);
        serializedAnnotations.push(self._serializeAnnotation(annotation));
      });

      var serializedObj = {};
      serializedObj[this.KAnnotationsParameter] = rdfAnnotations;
      serializedObj[this.KJSONAnnotationsParameter] = JSON.stringify(serializedAnnotations);
      serializedObj[this.KDocumentIdParameter] = this._documentId;

      return serializedObj;
    }
  },

  statics: {
    KServiceParameters       : "service=KAT",
    KDocumentIdParameter     : "id",
    KAnnotationsParameter    : "annotations",
    KJSONAnnotationsParameter: "jsannotations"
  }
})




/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Describes an annotation that was collected from a user and can be saved and transported over
 * network
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Annotation", {

  /**
   * Constructor for the class
   * @param {String} idBase the id of the starting selection token
   * @param {String} idExtent the id of the last selection token
   * @param {String} concept the concept associated with this annotation
   * @param {Object} values the form values associated with the concept fields. The format is {conceptFieldName : userSuppliedValue}
   * @param {String} id optional, a UUID, if none given one will be generated automatically
   * @param {Object} extraData optional, an object containing extra information about the annotation
   */
  init: function (idBase, idExtent, concept, values, id, extraData) {
    this.$idBase = idBase;
    this.$idExtent = idExtent;
    this.$ontology = concept.slice(0, concept.indexOf('.'));
    this.$concept = concept;
    this.$annotationValues = values;
    this.$id = id || kat.util.Util.generateUUID();
    this.$extraData = extraData || {};
  },

  properties: {
    idBase          : {value: null, writable: false},
    idExtent        : {value: null, writable: false},
    ontology        : {value: null, writable: false},
    concept         : {value: null, writable: false},
    annotationValues: {value: null, writable: false},
    id              : {value: null, writable: false},
    extraData       : {value: {}, writable: false}
  },

  methods: {
    /**
     * Serializes the annotation *data* in JSON format. JSON.parse will not return a @link{kat.annotation.Annotation}, use
     * the static method included in this class, fromSerializedString to build a full featured annotation object
     *
     * @return {String}
     */
    serialize: function () {
      return JSON.stringify({
        idBase          : this.getIdBase(),
        idExtent        : this.getIdExtent(),
        ontology        : this.getOntology(),
        concept         : this.getConcept(),
        annotationValues: this.getAnnotationValues(),
        id              : this.getId(),
        extraData       : this.getExtraData()
      })
    },

    /**
     * Returns the text to which the annotation is bound
     * @return Object {text: The text of the annotation, trimmedText: The text trimmed after the first word}
     */
    getText: function () {
      var fullText = "";
      var trimmedText = "";
      var counter = 0;
      $("#" + this.getIdBase()).nextAll("#" + this.getIdExtent()).andSelf().each(function () {
        fullText += $(this).html();
        if (!counter) {
          trimmedText = fullText;
        }
        if (counter == 1) {
          trimmedText += "...";
        }
        counter++;
      });
      return {"text": fullText, "trimmedText": trimmedText};
    },

    toRDF: function (conceptRegistry) {
      var rdf = new kat.util.XMLDoc(conceptRegistry.lookupConcept(this.getConcept()).getDefinition().getXmlDoc().getElementsByTagName("RDF")[0]).toString();
      var values = this.getAnnotationValues();
      for (var key in values) {
        rdf = rdf.replace(new RegExp(key, "g"), values[key]);
      }
      return rdf;
    }
  },

  statics: {
    /**
     * Returns a full featured Annotation object from a json serialization of its data.
     *
     * @param {String} json the data of the annotation in json format
     * @return {kat.annotation.Annotation}
     */
    fromSerializedString: function (json) {
      var values = JSON.parse(json);
      return new kat.annotation.Annotation(values.idBase, values.idExtent, values.concept, values.annotationValues, values.id, values.extraData);
    }
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Describes an annotation registry that keeps track of all the annotations for the current document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.AnnotationRegistry", {

  /**
   * Constructor for the class
   */
  init: function (storageService, retrievalService) {
    if (storageService) {
      this._storageService = storageService;
    }
    if (retrievalService) {
      this._retrievalService = retrievalService;
    }
    this._loadRegistry();
  },

  methods: {
    /**
     * Add an annotation to the registry. It will be automatically persisted to the selected storage medium.
     * @param annotation the annotation to be saved
     * @param {Boolean} doNotTriggerSave set to true if the insertion should not persist the annotation to the server
     */
    addAnnotation   : function (annotation, doNotTriggerSave) {
      this._registry[annotation.getId()] = annotation;
      if (!doNotTriggerSave) {
        this._saveRegistry();
      }
    },
    /**
     * Deletes an annotation from the registry
     * @param id - the id of the annotation to be deleted
     */
    deleteAnnotation: function (id) {
      delete this._registry[id];
      this._saveRegistry();
    },
    /**
     * Returns a list of the annotations in the system.
     * @return {Array}
     */
    getAnnotations  : function () {
      var annotations = [];
      for (var name in this._registry) {
        annotations.push(this._registry[name]);
      }
      return annotations;
    },

    /**
     * Returns th annotation with the given id.
     * @return Object
     */
    getAnnotation: function (id) {
      var returnedAnnotation = null;
      for (var annotation in this._registry) {
        if (this._registry[annotation]["$id"] == id) {
          returnedAnnotation = this._registry[annotation];
          break;
        }
      }
      return returnedAnnotation;
    },

    /**
     * Returns the list of annotations corresponding to the given concept
     * @param conceptName
     */
    getAnnotationsForConcept: function (conceptName) {
      var returnedAnnotations = new Array();
      for (var annotation in this._registry) {
        if (this._registry[annotation]["$concept"] == conceptName) {
          returnedAnnotations.push(this._registry[annotation]);
        }
      }
      return returnedAnnotations;
    },

    /**
     * Removes all annotations from the registry and from the storage medium.
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
      this.getDisplay().$annotations = [];
      this.getDisplay().reset();
    }
  },

  internals: {
    registry      : {},
    storageService: null,

    /**
     * Persists the registry to the given storage medium.
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
      if (this._storageService) {
        this._storageService.save(this);
      }
    },

    /**
     * Loads the registry from the given storage medium
     */
    loadRegistry: function () {
      if (this._retrievalService) {
        this._retrievalService.loadRegistry(this);
      }
      else if (localStorage.getItem(this.KLocalStorageRegistryKey)) {
        var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
        for (var name in values) {
          this._registry[name] = kat.annotation.Annotation.fromSerializedString(values[name]);
        }
      }
      else {
        this._registry = {};
      }
    }

  },

  properties: {
    display: {}
  },

  statics: {
    KLocalStorageRegistryKey: "annotationRegistry"
  }

});
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class to describe an annotation concept. Annotation concepts describe the annotation model (i.e. the fields contained
 * by the annotation) and the behaviour of the annotation (i.e. user interaction and display).
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Concept", {

  /**
   * Constructor for the class
   * @param {String} name the name of the concept
   * @param {String} definition the definition in xml format of the concept
   * @param {String} ontology definition
   */
  init: function (name, definition, ontology) {
    this.setName(name);
    this.setConceptName(name.slice(name.indexOf('.') + 1));
    this.setDefinition(new kat.util.XMLDoc(definition));
    this.setOntology(ontology);
  },


  properties: {
    name      : {
      value: null
    },
    conceptName : {
      value: null,
    },
    definition: {
      value: null
    },
    ontology: {
      value: null
    }
  },

  methods: {
    /**
     * Serializes the concept into a JSON representation.
     * @return {String} json representation of the concept
     */
    serialize: function () {
      return JSON.stringify({
        name      : this.getName(),
        definition: this.getDefinition().toString(),
        ontology  : this.getOntology()
      })
    }
  },

  statics: {
    /**
     * Constructs a new Concept from a json representation
     * @param {String} json the json representation
     * @return {kat.annotation.Concept}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.Concept(obj.name, obj.definition, obj.ontology);
    }
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * A registry to keep track of all available concepts for this document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.ConceptRegistry", {

  init: function () {
    if (window.localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {};
    }
  },

  methods: {
    /**
     * Adds a concept to the registry
     * @param {kat.annotation.Concept} concept the concept to be added
     */
    addConcept: function (concept) {
      this._registry[concept.getName()] = concept;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation concept in the registry
     * @param {String} concept the annotation type name
     * @return {kat.annotation.Concept}
     */
    lookupConcept: function (concept) {
      return this._registry[concept];
    },

    /**
     * Returns a concept by the resource type its rdf representation contains.
     * @param {String} resourceUrl any valid resource url
     * @return {kat.annotation.Concept}
     */
    lookupConceptByResource: function (resourceUrl) {
      for (var conceptName in this._registry) {
        if (this._registry[conceptName].getDefinition().filter("rdf:type").getAttribute("rdf:resource") == resourceUrl) {
          return this._registry[conceptName];
        }
      }
      return null;
    },

    /**
     * Removes an annotation concept from the registry.
     * @param {String} conceptName the name of the concept
     */
    removeConcept: function (conceptName) {
      delete this._registry[conceptName];
      this._saveRegistry();
    },

    /**
     * Returns all the concepts in the registry as an array
     * @return {kat.annotation.Concept[]}
     */
    getAllConcepts: function () {
      var concepts = [];
      for (var name in this._registry) {
        concepts.push(this._registry[name]);
      }
      return concepts;
    },

    /**
     * Returns all the concepts corresponding to the given ontology
     * @return {kat.annotation.Concept[]}
     */
    getConceptsByOntology: function (ontology) {
      var concepts = [];
      for (var name in this._registry) {
        if (this._registry[name].getOntology() == ontology) {
          concepts.push(this._registry[name]);
        }
      }
      return concepts;
    },

    /**
     * Removes all entries from the registry
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
    }
  },

  internals: {
    registry: {},

    /**
     * Saves the registry to the medium of storage
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    /**
     * Loads the registry from the medium of storage
     */
    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.Concept.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "conceptsRegistry"
  }

})
/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Class to describe an annotation ontology. Annotation ontologies describe the annotation model (i.e. the fields contained
 * by the annotation) and the behaviour of the annotation (i.e. user interaction and display).
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.Ontology", {

  /**
   * Constructor for the class
   * @param {String} name the name of the ontology
   * @param {String} definition the definition in xml format of the concept
   */
  init: function (name, definition) {
    this.setName(name);
    if(definition){
      this.setDefinition(new kat.util.XMLDoc(definition));
    }
    else{
      this.setDefinition("");
    }
  },


  properties: {
    name      : {
      value: null
    },
    definition: {
      value: null
    }
  },

  methods: {
    /**
     * Serializes the concept into a JSON representation.
     * @return {String} json representation of the concept
     */
    serialize: function () {
      return JSON.stringify({
        name      : this.getName(),
        definition: this.getDefinition().toString()
      })
    }
  },

  statics: {
    /**
     * Constructs a new Concept from a json representation
     * @param {String} json the json representation
     * @return {kat.annotation.AnnotationType}
     */
    fromSerializedString: function (json) {
      var obj = JSON.parse(json);
      return new kat.annotation.Ontology(obj.name, obj.definition);
    }
  }

})


/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * A registry to keep track of all available ontologies for this document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.OntologyRegistry", {

  init: function () {
    if (window.localStorage.getItem(this.KLocalStorageRegistryKey)) {
      this._loadRegistry();
    }
    else {
      this._registry = {};
    }
  },

  methods: {
    /**
     * Adds a concept to the registry
     * @param {kat.annotation.Concept} concept the concept to be added
     */
    addOntology: function (concept) {
      this._registry[concept.getName()] = concept;
      this._saveRegistry();
    },

    /**
     * Looks up an annotation concept in the registry
     * @param {String} concept the annotation type name
     * @return {kat.annotation.Concept}
     */
    lookupOntology: function (concept) {
      return this._registry[concept];
    },

    /**
     * Removes an annotation concept from the registry.
     * @param {String} conceptName the name of the concept
     */
    removeOntology: function (ontologyName) {
      delete this._registry[ontologyName];
      this._saveRegistry();
    },

    /**
     * Returns all the concepts in the registry as an array
     * @return {kat.annotation.Concept[]}
     */
    getAllOntologies: function () {
      var concepts = [];
      for (var name in this._registry) {
        concepts.push(this._registry[name]);
      }
      return concepts;
    },

    /**
     * Removes all entries from the registry
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
    }
  },

  internals: {
    registry: {},

    /**
     * Saves the registry to the medium of storage
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
    },

    /**
     * Loads the registry from the medium of storage
     */
    loadRegistry: function () {
      var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
      for (var name in values) {
        this._registry[name] = kat.annotation.Ontology.fromSerializedString(values[name]);
      }
    }
  },

  statics: {
    KLocalStorageRegistryKey: "ontologiesRegistry"
  }

});




/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * The main entry point of the service. The KAT Service requires a CSS3/XPATH selector to identify
 * the container on which annotations can be made, a coretex service url and a document identifier for
 * the annotated document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */


FlancheJs.defineClass("kat.main.KATService", {
  init: function (selector, coretexUrl, documentName) {
    this._selector = selector;
    this._ontologyRegistry = new kat.annotation.OntologyRegistry();
    this._conceptRegistry = new kat.annotation.ConceptRegistry();
    this._coretexInserter = new kat.remote.CoreTexAnnotationInserter(coretexUrl, documentName, this._conceptRegistry);
    this._coretexRetriever = new kat.remote.CoreTeXAnnotationRetriever(coretexUrl, documentName, this._conceptRegistry, jQuery(selector));
    this._annotationRegistry = new kat.annotation.AnnotationRegistry();
  },

  methods: {
    run: function () {

      //register error handler
      window.onerror = function (message) {
        $.pnotify({
          title: 'KAT Error',
          text : message,
          type : 'error'
        })
      }
      var preProcessor = new kat.preprocessor.TextPreprocessor(this._selector, "", this._ontologyRegistry, this._conceptRegistry, this._annotationRegistry);
      preProcessor.run();
      var currentAnnotations = this._annotationRegistry.getAnnotations();
      var renderedAnnotations = [];
      for (var i = 0; i < currentAnnotations.length; i++) {
        var renderer = new kat.display.AnnotationRenderer(currentAnnotations[i], this._conceptRegistry);
        renderedAnnotations.push(renderer.render())
      }
      var displayer = new kat.Display(renderedAnnotations, this._annotationRegistry, this._conceptRegistry);
      displayer.run();
      preProcessor.setDisplay(displayer);
      this._annotationRegistry.setDisplay(displayer);
      var ontologyViewer = new kat.display.AnnotationOntologyViewer(this._ontologyRegistry, this._conceptRegistry, this._annotationRegistry);
      ontologyViewer.run();
    }
  },

  internals: {
    selector          : null,
    annotationRegsitry: null,
    ontologyRegistry  : null,
    conceptRegistry   : null,
    coretexInserter   : null,
    coretexRetriever  : null
  }

})

//only used for demo, to retrieve and add an ontology
//jQuery.get("http://localhost/katGit/test/newAnnotationOntology.xml", function(xmlOntology){
//  var ontology = new kat.annotation.Ontology("OMDoc", xmlOntology);
//  var name = "OMDoc";
//  self._ontologyRegistry.addOntology(ontology);
//  var newConcepts = ontology.getDefinition().getXmlDoc().getElementsByTagName("concept");
//  for (var i = 0; i < newConcepts.length; i++) {
//    var conceptName = newConcepts[i].getAttribute("name");
//    //conceptsText += '<i class="icon-arrow-right"></i> <b>' + name + "." + conceptName + "</b><br/>";
//    self._conceptRegistry.addConcept(new kat.annotation.Concept(name + "." + conceptName, newConcepts[i], name));
//  }
//})
