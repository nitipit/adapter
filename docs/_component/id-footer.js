(()=>{var e=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),t="-ms-",r="-moz-",n="-webkit-",a="comm",s="rule",i="decl",c="@keyframes",o=Math.abs,u=String.fromCharCode,l=Object.assign;function f(e,t){return 45^v(e,0)?(((t<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}function h(e){return e.trim()}function d(e,t){return(e=t.exec(e))?e[0]:e}function p(e,t,r){return e.replace(t,r)}function y(e,t){return e.indexOf(t)}function v(e,t){return 0|e.charCodeAt(t)}function g(e,t,r){return e.slice(t,r)}function m(e){return e.length}function b(e){return e.length}function w(e,t){return t.push(e),e}function k(e,t){return e.map(t).join("")}var $=1,x=1,S=0,A=0,C=0,E="";function N(e,t,r,n,a,s,i){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:$,column:x,length:i,return:""}}function _(e,t){return l(N("",null,null,"",null,null,0),e,{length:-e.length},t)}function j(){return C=A<S?v(E,A++):0,x++,10===C&&(x=1,$++),C}function O(){return v(E,A)}function R(){return A}function z(e,t){return g(E,e,t)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return $=x=1,S=m(E=e),A=0,[]}function I(e){return E="",e}function M(e){return h(z(A-1,L(91===e?e+2:40===e?e+1:e)))}function T(e){for(;(C=O())&&C<33;)j();return G(e)>2||G(C)>3?"":" "}function W(e,t){for(;--t&&j()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return z(e,R()+(t<6&&32==O()&&32==j()))}function L(e){for(;j();)switch(C){case e:return A;case 34:case 39:34!==e&&39!==e&&L(C);break;case 40:41===e&&L(e);break;case 92:j()}return A}function q(e,t){for(;j()&&e+C!==57&&(e+C!==84||47!==O()););return"/*"+z(t,A-1)+"*"+u(47===e?e:j())}function D(e){for(;!G(O());)j();return z(e,A)}function F(e){return I(H("",null,null,null,[""],e=P(e),0,[0],e))}function H(e,t,r,n,a,s,i,c,o){for(var l=0,f=0,h=i,d=0,g=0,b=0,k=1,S=1,N=1,_=0,z="",G=a,P=s,I=n,L=z;S;)switch(b=_,_=j()){case 40:if(108!=b&&58==v(L,h-1)){-1!=y(L+=p(M(_),"&","&\f"),"&\f")&&(N=-1);break}case 34:case 39:case 91:L+=M(_);break;case 9:case 10:case 13:case 32:L+=T(b);break;case 92:L+=W(R()-1,7);continue;case 47:switch(O()){case 42:case 47:w(Z(q(j(),R()),t,r),o);break;default:L+="/"}break;case 123*k:c[l++]=m(L)*N;case 125*k:case 59:case 0:switch(_){case 0:case 125:S=0;case 59+f:g>0&&m(L)-h&&w(g>32?J(L+";",n,r,h-1):J(p(L," ","")+";",n,r,h-2),o);break;case 59:L+=";";default:if(w(I=B(L,t,r,l,f,a,c,z,G=[],P=[],h),s),123===_)if(0===f)H(L,t,I,I,G,s,h,c,P);else switch(99===d&&110===v(L,3)?100:d){case 100:case 109:case 115:H(e,I,I,n&&w(B(e,I,I,0,0,a,c,z,a,G=[],h),P),a,P,h,c,n?G:P);break;default:H(L,I,I,I,[""],P,0,c,P)}}l=f=g=0,k=N=1,z=L="",h=i;break;case 58:h=1+m(L),g=b;default:if(k<1)if(123==_)--k;else if(125==_&&0==k++&&125==(C=A>0?v(E,--A):0,x--,10===C&&(x=1,$--),C))continue;switch(L+=u(_),_*k){case 38:N=f>0?1:(L+="\f",-1);break;case 44:c[l++]=(m(L)-1)*N,N=1;break;case 64:45===O()&&(L+=M(j())),d=O(),f=h=m(z=L+=D(R())),_++;break;case 45:45===b&&2==m(L)&&(k=0)}}return s}function B(e,t,r,n,a,i,c,u,l,f,d){for(var y=a-1,v=0===a?i:[""],m=b(v),w=0,k=0,$=0;w<n;++w)for(var x=0,S=g(e,y+1,y=o(k=c[w])),A=e;x<m;++x)(A=h(k>0?v[x]+" "+S:p(S,/&\f/g,v[x])))&&(l[$++]=A);return N(e,t,r,0===a?s:u,l,f,d)}function Z(e,t,r){return N(e,t,r,a,u(C),g(e,2,-2),0)}function J(e,t,r,n){return N(e,t,r,i,g(e,0,n),g(e,n+1,-1),n)}function K(e,t){for(var r="",n=b(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function Q(e,t,r,n){switch(e.type){case"@import":case i:return e.return=e.return||e.value;case a:return"";case c:return e.return=e.value+"{"+K(e.children,n)+"}";case s:e.value=e.props.join(",")}return m(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function U(e){var t=b(e);return function(r,n,a,s){for(var i="",c=0;c<t;c++)i+=e[c](r,n,a,s)||"";return i}}var V=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},X=function(e,t,r){for(var n=0,a=0;n=a,a=O(),38===n&&12===a&&(t[r]=1),!G(a);)j();return z(e,A)},Y=function(e,t){return I(function(e,t){var r=-1,n=44;do{switch(G(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=X(A-1,t,r);break;case 2:e[r]+=M(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=u(n)}}while(n=j());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var a=[],s=Y(t,a),i=r.props,c=0,o=0;c<s.length;c++)for(var u=0;u<i.length;u++,o++)e.props[o]=a[c]?s[c].replace(/&\f/g,i[u]):i[u]+" "+s[c]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ne(e,a){switch(f(e,a)){case 5103:return"-webkit-print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return n+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return n+e+r+e+t+e+e;case 6828:case 4268:return n+e+t+e+e;case 6165:return n+e+t+"flex-"+e+e;case 5187:return n+e+p(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return n+e+t+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return n+e+t+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return n+e+t+p(e,"shrink","negative")+e;case 5292:return n+e+t+p(e,"basis","preferred-size")+e;case 6060:return"-webkit-box-"+p(e,"-grow","")+n+e+t+p(e,"grow","positive")+e;case 4554:return n+p(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,"-webkit-$1"),/(image-set)/,"-webkit-$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,"-webkit-$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+n+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,"-webkit-$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(m(e)-1-a>6)switch(v(e,a+1)){case 109:if(45!==v(e,a+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==v(e,a+3)?"$3":"$2-$3"))+e;case 115:return~y(e,"stretch")?ne(p(e,"stretch","fill-available"),a)+e:e}break;case 4949:if(115!==v(e,a+1))break;case 6444:switch(v(e,m(e)-3-(~y(e,"!important")&&10))){case 107:return p(e,":",":-webkit-")+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1-webkit-"+(45===v(e,14)?"inline-":"")+"box$3$1"+"-webkit-$2$3$1"+"-ms-$2box$3")+e}break;case 5936:switch(v(e,a+11)){case 114:return n+e+t+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return n+e+t+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return n+e+t+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return n+e+t+e+e}return e}var ae=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case i:e.return=ne(e.value,e.length);break;case c:return K([_(e,{value:p(e.value,"@","@-webkit-")})],n);case s:if(e.length)return k(e.props,(function(t){switch(d(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([_(e,{props:[p(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return K([_(e,{props:[p(t,/:(plac\w+)/,":-webkit-input-$1")]}),_(e,{props:[p(t,/:(plac\w+)/,":-moz-$1")]}),_(e,{props:[p(t,/:(plac\w+)/,"-ms-input-$1")]})],n)}return""}))}}],se=function(t){var r=t.key;if("css"===r){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,s,i=t.stylisPlugins||ae,c={},o=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;o.push(e)}));var u,l,f=[Q,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],h=U([te,re].concat(i,f));s=function(e,t,r,n){u=r,K(F(e?e+"{"+t.styles+"}":t.styles),h),n&&(d.inserted[t.name]=!0)};var d={key:r,sheet:new e({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:c,registered:{},insert:s};return d.sheet.hydrate(o),d};var ie=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},ce={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe=/[A-Z]|^ms/g,ue=/_EMO_([^_]+?)_([^]*?)_EMO_/g,le=function(e){return 45===e.charCodeAt(1)},fe=function(e){return null!=e&&"boolean"!=typeof e},he=V((function(e){return le(e)?e:e.replace(oe,"-$&").toLowerCase()})),de=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ue,(function(e,t,r){return ye={name:t,styles:r,next:ye},t}))}return 1===ce[e]||le(e)||"number"!=typeof t||0===t?t:t+"px"};function pe(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ye={name:r.name,styles:r.styles,next:ye},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ye={name:n.name,styles:n.styles,next:ye},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=pe(e,t,r[a])+";";else for(var s in r){var i=r[s];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=s+"{"+t[i]+"}":fe(i)&&(n+=he(s)+":"+de(s,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=pe(e,t,i);switch(s){case"animation":case"animationName":n+=he(s)+":"+c+";";break;default:n+=s+"{"+c+"}"}}else for(var o=0;o<i.length;o++)fe(i[o])&&(n+=he(s)+":"+de(s,i[o])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=ye,s=r(e);return ye=a,pe(e,t,s)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var ye,ve=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ge=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ye=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=pe(r,t,s)):a+=s[0];for(var i=1;i<e.length;i++)a+=pe(r,t,e[i]),n&&(a+=s[i]);ve.lastIndex=0;for(var c,o="";null!==(c=ve.exec(a));)o+="-"+c[1];return{name:ie(a)+o,styles:a,next:ye}};function me(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var be=function(e,t,r){!function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)}(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};function we(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function ke(e,t,r){var n=[],a=me(e,n,r);return n.length<2?r:a+t(n)}var $e=function e(t){for(var r="",n=0;n<t.length;n++){var a=t[n];if(null!=a){var s=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))s=e(a);else for(var i in s="",a)a[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=a}s&&(r&&(r+=" "),r+=s)}}return r},xe=function(e){var t=se(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var r=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=ge(r,t.registered,void 0);return be(t,a,!1),t.key+"-"+a.name};return{css:r,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return ke(t.registered,r,$e(n))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=ge(r,t.registered);we(t,a)},keyframes:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=ge(r,t.registered),s="animation-"+a.name;return we(t,{name:a.name,styles:"@keyframes "+s+"{"+a.styles+"}"}),s},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:me.bind(null,t.registered),merge:ke.bind(null,t.registered,r)}}({key:"css"}),Se=(xe.flush,xe.hydrate,xe.cx),Ae=(xe.merge,xe.getRegisteredStyles,xe.injectGlobal),Ce=(xe.keyframes,xe.css);xe.sheet,xe.cache;class Ee{static css(e={}){return""}static style(e={}){return""}}class Ne extends HTMLElement{static Style=Ee;static define(e){customElements.define(e,this)}static initStyle(e){this.Style&&Ae`
        ${this.tagName} {
            ${this.Style.css(e)}
        }`}static tagStyle(e){"string"!=typeof e?Ae`
        ${this.tagName} {
            ${this.Style.style(e)}
        }`:Ae`
            ${this.tagName} {
                ${e}
            }`}static classStyle(e,t){"string"==typeof t?Ae`
            ${this.tagName}.${e} {
                ${t}
            }`:"object"==typeof t&&Ae`
            ${this.tagName}.${e} {
                ${this.Style.style(t)}
            }`}constructor(){super(),this._class=this.constructor}addStyle(e){let t;"string"==typeof e?t=Ce`${e}`:"object"==typeof e&&(t=Ce`${this._class.Style.style(e)}`),t=Se(...this.classList,t),this.className=t}notify(e,t){const r=new CustomEvent(e,t);this.dispatchEvent(r)}}class _e extends Ne{}((e,t=Ne)=>{t.tagName=e,t.define(e),t.initStyle()})("id-footer",_e),_e.tagStyle("\n    display: flex;\n    width: 100%;\n    padding-bottom: 20vh;\n")})();
//# sourceMappingURL=id-footer.js.map
