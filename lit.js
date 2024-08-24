function e(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}function t(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function r(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let a=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}};const c=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new a(r,e,o)},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:h,getOwnPropertySymbols:f,getPrototypeOf:m}=Object,g=globalThis,y=g.trustedTypes,w=y?y.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!l(e,t),S={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&u(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...f(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??E)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[v("elementProperties")]=new Map,k[v("finalized")]=new Map,b?.({ReactiveElement:k}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,P=A.trustedTypes,$=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+I,R=`<${O}>`,M=document,T=()=>M.createComment(""),_=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,N="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,H=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),G=new WeakMap,K=M.createTreeWalker(M,129);function X(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}class Y{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0;const s=e.length-1,a=this.parts,[c,d]=((e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",s=F;for(let t=0;t<r;t++){const r=e[t];let a,c,d=-1,l=0;for(;l<r.length&&(s.lastIndex=l,c=s.exec(r),null!==c);)l=s.lastIndex,s===F?"!--"===c[1]?s=z:void 0!==c[1]?s=D:void 0!==c[2]?(H.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=i??F,d=-1):void 0===c[1]?d=-2:(d=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?j:'"'===c[3]?B:L):s===B||s===L?s=j:s===z||s===D?s=F:(s=j,i=void 0);const u=s===j&&e[t+1].startsWith("/>")?" ":"";o+=s===F?r+R:d>=0?(n.push(a),r.slice(0,d)+C+r.slice(d)+I+u):r+I+(-2===d?t:u)}return[X(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=Y.createElement(c,r),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=K.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(C)){const t=d[o++],r=n.getAttribute(e).split(I),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?te:"?"===s[1]?re:"@"===s[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(I)&&(a.push({type:6,index:i}),n.removeAttribute(e));if(H.test(n.tagName)){const e=n.textContent.split(I),t=e.length-1;if(t>0){n.textContent=P?P.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],T()),K.nextNode(),a.push({type:2,index:++i});n.append(e[t],T())}}}else if(8===n.nodeType)if(n.data===O)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(I,e+1));)a.push({type:7,index:i}),e+=I.length-1}i++}}static createElement(e,t){const r=M.createElement("template");return r.innerHTML=e,r}}function J(e,t,r=e,n){if(t===V)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=_(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=J(e,i._$AS(e,t.values),i,n)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??M).importNode(t,!0);K.currentNode=n;let i=K.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new Z(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ie(i,this,e)),this._$AV.push(t),a=r[++s]}o!==a?.index&&(i=K.nextNode(),o++)}return K.currentNode=M,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),_(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==W&&_(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=Y.createElement(X(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Q(n,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Y(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new Z(this.S(T()),this.S(T()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(void 0===i)e=J(this,e,t,0),o=!_(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=J(this,n[r+s],t,s),a===V&&(a=this._$AH[s]),o||=!_(a)||a!==this._$AH[s],a===W?e=W:e!==W&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let te=class extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}};class re extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class ne extends ee{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??W)===V)return;const r=this._$AH,n=e===W&&r!==W||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==W&&(r===W||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const oe=A.litHtmlPolyfillSupport;oe?.(Y,Z),(A.litHtmlVersions??=[]).push("3.1.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let se=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new Z(t.insertBefore(T(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};se._$litElement$=!0,se.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:se});const ae=globalThis.litElementPolyfillSupport;ae?.({LitElement:se}),(globalThis.litElementVersions??=[]).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,de={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:E},le=(e=de,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function ue(e){return(t,r)=>"object"==typeof r?le(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pe(e){return ue({...e,state:!0,attribute:!1})}const he=c` /*
! tailwindcss v3.4.6 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit {
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {
  [type='checkbox']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {
  [type='radio']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active)  {
  [type='checkbox']:indeterminate {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

@font-face {
  font-family: 'Playfair Display SC';

  font-style: normal;

  font-weight: 400;

  font-display: swap;

  src: url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap') format('woff2');
}

.font-fancy {
  font-family: "Playfair Display SC", serif;
}

.bg-primary {
  background-color: #ff9a9e;
}

.bg-primary:hover {
  background-color: #ffa5a8;
}

.color-primary {
  color: #ff9a9e;
}

.color-primary:hover {
  color: #ffa5a8;
}

:root {
  --color-primary: 2 136 209;
  --color-secondary: 246 8 240;
  --color-accent: #ff9a9e;
  --color-accent-light: #fad0c4;
}

/* Scrollbar styles for webkit-based browsers */

::-webkit-scrollbar {
  width: 12px;
  /* Width of the scrollbar */
  height: 12px;
  /* Height of the scrollbar */
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  /* Background of the scrollbar track */
  border-radius: 10px;
  /* Rounded corners for the track */
}

::-webkit-scrollbar-thumb {
  background-color: #ff9a9e;
  /* Color of the scrollbar thumb */
  border-radius: 10px;
  /* Rounded corners for the thumb */
  border: 3px solid #f1f1f1;
  /* Padding around the thumb */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #e68a8c;
  /* Darker color on hover */
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.sr-only {
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

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.inset-0 {
  inset: 0px;
}

.inset-x-px {
  left: 1px;
  right: 1px;
}

.inset-y-0 {
  top: 0px;
  bottom: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.left-0 {
  left: 0px;
}

.left-full {
  left: 100%;
}

.right-0 {
  right: 0px;
}

.top-0 {
  top: 0px;
}

.z-10 {
  z-index: 10;
}

.z-30 {
  z-index: 30;
}

.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

.-m-2\\.5 {
  margin: -0.625rem;
}

.m-0 {
  margin: 0px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mr-16 {
  margin-right: 4rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.grid {
  display: grid;
}

.hidden {
  display: none;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-14 {
  height: 3.5rem;
}

.h-16 {
  height: 4rem;
}

.h-4 {
  height: 1rem;
}

.h-5 {
  height: 1.25rem;
}

.h-6 {
  height: 1.5rem;
}

.h-8 {
  height: 2rem;
}

.h-80 {
  height: 20rem;
}

.h-9 {
  height: 2.25rem;
}

.h-auto {
  height: auto;
}

.h-dvh {
  height: 100dvh;
}

.h-full {
  height: 100%;
}

.h-px {
  height: 1px;
}

.h-screen {
  height: 100vh;
}

.h-\\[calc\\(100vh-4rem\\)\\] {
  height: calc(100vh - 4rem);
}

.min-h-full {
  min-height: 100%;
}

.w-0 {
  width: 0px;
}

.w-12 {
  width: 3rem;
}

.w-16 {
  width: 4rem;
}

.w-20 {
  width: 5rem;
}

.w-4 {
  width: 1rem;
}

.w-5 {
  width: 1.25rem;
}

.w-56 {
  width: 14rem;
}

.w-6 {
  width: 1.5rem;
}

.w-64 {
  width: 16rem;
}

.w-7 {
  width: 1.75rem;
}

.w-8 {
  width: 2rem;
}

.w-auto {
  width: auto;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-full {
  width: 100%;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-sm {
  max-width: 24rem;
}

.max-w-xs {
  max-width: 20rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.shrink-0 {
  flex-shrink: 0;
}

.grow {
  flex-grow: 1;
}

.origin-top-right {
  transform-origin: top right;
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-2 {
  --tw-translate-y: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-\\[-100\\%\\] {
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-50 {
  --tw-scale-x: .5;
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-pointer {
  cursor: pointer;
}

.resize-none {
  resize: none;
}

.list-disc {
  list-style-type: disc;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-\\[repeat\\(auto-fill\\2c 16rem\\)\\] {
  grid-template-columns: repeat(auto-fill,16rem);
}

.flex-col {
  flex-direction: column;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-items-center {
  justify-items: center;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-x-3 {
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}

.gap-x-6 {
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}

.gap-y-5 {
  row-gap: 1.25rem;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-t {
  border-top-width: 1px;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}

.bg-orange-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 88 12 / var(--tw-bg-opacity));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.bg-slate-900\\/80 {
  background-color: rgb(15 23 42 / 0.8);
}

.bg-transparent {
  background-color: transparent;
}

.bg-violet-900\\/80 {
  background-color: rgb(76 29 149 / 0.8);
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-cyan-400 {
  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-pink-300 {
  --tw-gradient-to: #f9a8d4 var(--tw-gradient-to-position);
}

.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}

.fill-\\[\\#24292F\\] {
  fill: #24292F;
}

.fill-current {
  fill: currentColor;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\\.5 {
  padding: 0.625rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-px {
  padding-top: 1px;
  padding-bottom: 1px;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pt-0\\.5 {
  padding-top: 0.125rem;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pt-2\\.5 {
  padding-top: 0.625rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.font-serif {
  font-family: "Playfair Display SC", serif;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-extrabold {
  font-weight: 800;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-9 {
  line-height: 2.25rem;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
}

.text-transparent {
  color: transparent;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-inset {
  --tw-ring-inset: inset;
}

.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}

.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.ring-white\\/10 {
  --tw-ring-color: rgb(255 255 255 / 0.1);
}

.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-75 {
  transition-duration: 75ms;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.placeholder\\:text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.placeholder\\:text-gray-400::placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:left-1::after {
  content: var(--tw-content);
  left: 0.25rem;
}

.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}

.after\\:w-16::after {
  content: var(--tw-content);
  width: 4rem;
}

.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}

.after\\:bg-red-300\\/40::after {
  content: var(--tw-content);
  background-color: rgb(252 165 165 / 0.4);
}

.after\\:bg-white\\/40::after {
  content: var(--tw-content);
  background-color: rgb(255 255 255 / 0.4);
}

.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}

.focus-within\\:border-red-200:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-border-opacity));
}

.focus-within\\:ring-1:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-within\\:ring-red-200:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 202 202 / var(--tw-ring-opacity));
}

.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.hover\\:bg-indigo-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity));
}

.hover\\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.hover\\:text-indigo-500:hover {
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-inset:focus {
  --tw-ring-inset: inset;
}

.focus\\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}

.focus\\:ring-indigo-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus\\:ring-offset-gray-100:focus {
  --tw-ring-offset-color: #f3f4f6;
}

.focus-visible\\:outline:focus-visible {
  outline-style: solid;
}

.focus-visible\\:outline-2:focus-visible {
  outline-width: 2px;
}

.focus-visible\\:outline-offset-2:focus-visible {
  outline-offset: 2px;
}

.focus-visible\\:outline-indigo-600:focus-visible {
  outline-color: #4f46e5;
}

.focus-visible\\:ring-transparent:focus-visible {
  --tw-ring-color: transparent;
}

.peer:checked ~ .peer-checked\\:bg-red-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 165 165 / var(--tw-bg-opacity));
}

.peer:checked ~ .peer-checked\\:bg-stone-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(87 83 78 / var(--tw-bg-opacity));
}

.peer:checked ~ .peer-checked\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:checked ~ .peer-checked\\:after\\:bg-white\\/40::after {
  content: var(--tw-content);
  background-color: rgb(255 255 255 / 0.4);
}

.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 640px) {
  .sm\\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:translate-x-2 {
    --tw-translate-x: 0.5rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:items-end {
    align-items: flex-end;
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:px-16 {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .sm\\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:leading-6 {
    line-height: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .lg\\:mt-0 {
    margin-top: 0px;
  }

  .lg\\:block {
    display: block;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:h-screen {
    height: 100vh;
  }

  .lg\\:w-2\\/3 {
    width: 66.666667%;
  }

  .lg\\:w-96 {
    width: 24rem;
  }

  .lg\\:flex-none {
    flex: none;
  }

  .lg\\:px-20 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .lg\\:pl-20 {
    padding-left: 5rem;
  }

  .lg\\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1280px) {
  .xl\\:w-1\\/2 {
    width: 50%;
  }

  .xl\\:px-24 {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .xl\\:px-48 {
    padding-left: 12rem;
    padding-right: 12rem;
  }
}

@media (prefers-color-scheme: dark) {
  .dark\\:border-slate-600 {
    --tw-border-opacity: 1;
    border-color: rgb(71 85 105 / var(--tw-border-opacity));
  }

  .dark\\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }

  .dark\\:bg-slate-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  }

  .dark\\:bg-slate-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  }

  .dark\\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}
 `,fe=[],me=e=>{let t=e.httpHandler;return{setHttpHandler(e){t=e},httpHandler:()=>t,updateHttpClientConfig(e,r){t.updateHttpClientConfig(e,r)},httpHandlerConfigs:()=>t.httpHandlerConfigs()}},ge=e=>({httpHandler:e.httpHandler()});var ye,we,be,ve,xe;!function(e){e.HEADER="header",e.QUERY="query"}(ye||(ye={})),function(e){e.HEADER="header",e.QUERY="query"}(we||(we={})),function(e){e.HTTP="http",e.HTTPS="https"}(be||(be={})),function(e){e.MD5="md5",e.CRC32="crc32",e.CRC32C="crc32c",e.SHA1="sha1",e.SHA256="sha256"}(ve||(ve={})),function(e){e[e.HEADER=0]="HEADER",e[e.TRAILER=1]="TRAILER"}(xe||(xe={}));const Ee="__smithy_context";var Se,ke;!function(e){e.PROFILE="profile",e.SSO_SESSION="sso-session",e.SERVICES="services"}(Se||(Se={})),function(e){e.HTTP_0_9="http/0.9",e.HTTP_1_0="http/1.0",e.TDS_8_0="tds/8.0"}(ke||(ke={}));class Ae{constructor(e){this.method=e.method||"GET",this.hostname=e.hostname||"localhost",this.port=e.port,this.query=e.query||{},this.headers=e.headers||{},this.body=e.body,this.protocol=e.protocol?":"!==e.protocol.slice(-1)?`${e.protocol}:`:e.protocol:"https:",this.path=e.path?"/"!==e.path.charAt(0)?`/${e.path}`:e.path:"/",this.username=e.username,this.password=e.password,this.fragment=e.fragment}static clone(e){const t=new Ae({...e,headers:{...e.headers}});var r;return t.query&&(t.query=(r=t.query,Object.keys(r).reduce(((e,t)=>{const n=r[t];return{...e,[t]:Array.isArray(n)?[...n]:n}}),{}))),t}static isInstance(e){if(!e)return!1;const t=e;return"method"in t&&"protocol"in t&&"hostname"in t&&"path"in t&&"object"==typeof t.query&&"object"==typeof t.headers}clone(){return Ae.clone(this)}}class Pe{constructor(e){this.statusCode=e.statusCode,this.reason=e.reason,this.headers=e.headers||{},this.body=e.body}static isInstance(e){if(!e)return!1;const t=e;return"number"==typeof t.statusCode&&"object"==typeof t.headers}}var $e,Ce,Ie,Oe;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function Re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Me(){if(Oe)return Ie;Oe=1;var e="undefined"!=typeof ArrayBuffer,t="undefined"!=typeof Symbol;function r(r,n){var i,o,s,a,c;if(!r)throw new Error("obliterator/forEach: invalid iterable.");if("function"!=typeof n)throw new Error("obliterator/forEach: expecting a callback.");if(Array.isArray(r)||e&&ArrayBuffer.isView(r)||"string"==typeof r||"[object Arguments]"===r.toString())for(s=0,a=r.length;s<a;s++)n(r[s],s);else if("function"!=typeof r.forEach)if(t&&Symbol.iterator in r&&"function"!=typeof r.next&&(r=r[Symbol.iterator]()),"function"!=typeof r.next)for(o in r)r.hasOwnProperty(o)&&n(r[o],o);else for(i=r,s=0;!0!==(c=i.next()).done;)n(c.value,s),s++;else r.forEach(n)}return r.forEachWithNullKeys=function(r,n){var i,o,s,a,c;if(!r)throw new Error("obliterator/forEachWithNullKeys: invalid iterable.");if("function"!=typeof n)throw new Error("obliterator/forEachWithNullKeys: expecting a callback.");if(Array.isArray(r)||e&&ArrayBuffer.isView(r)||"string"==typeof r||"[object Arguments]"===r.toString())for(s=0,a=r.length;s<a;s++)n(r[s],null);else if(r instanceof Set)r.forEach((function(e){n(e,null)}));else if("function"!=typeof r.forEach)if(t&&Symbol.iterator in r&&"function"!=typeof r.next&&(r=r[Symbol.iterator]()),"function"!=typeof r.next)for(o in r)r.hasOwnProperty(o)&&n(r[o],o);else for(i=r,s=0;!0!==(c=i.next()).done;)n(c.value,null),s++;else r.forEach(n)},Ie=r}var Te,_e={};function Ue(){return Te||(Te=1,function(e){var t=Math.pow(2,8)-1,r=Math.pow(2,16)-1,n=Math.pow(2,32)-1,i=Math.pow(2,7)-1,o=Math.pow(2,15)-1,s=Math.pow(2,31)-1;e.getPointerArray=function(e){var i=e-1;return i<=t?Uint8Array:i<=r?Uint16Array:i<=n?Uint32Array:Float64Array},e.getSignedPointerArray=function(e){var t=e-1;return t<=i?Int8Array:t<=o?Int16Array:t<=s?Int32Array:Float64Array},e.getNumberType=function(e){return e===(0|e)?-1===Math.sign(e)?e<=127&&e>=-128?Int8Array:e<=32767&&e>=-32768?Int16Array:Int32Array:e<=255?Uint8Array:e<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};e.getMinimalRepresentation=function(t,r){var n,i,o,s,c,d=null,l=0;for(s=0,c=t.length;s<c;s++)o=r?r(t[s]):t[s],i=e.getNumberType(o),(n=a[i.name])>l&&(l=n,d=i);return d},e.isTypedArray=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(e)},e.concat=function(){var e,t,r,n=0;for(e=0,r=arguments.length;e<r;e++)n+=arguments[e].length;var i=new arguments[0].constructor(n);for(e=0,t=0;e<r;e++)i.set(arguments[e],t),t+=arguments[e].length;return i},e.indices=function(t){for(var r=new(e.getPointerArray(t))(t),n=0;n<t;n++)r[n]=n;return r}}(_e)),_e}var Ne,Fe,ze,De={};function je(){if(Ne)return De;Ne=1;var e=Me(),t=Ue();function r(e){return"number"==typeof e.length?e.length:"number"==typeof e.size?e.size:void 0}return De.isArrayLike=function(e){return Array.isArray(e)||t.isTypedArray(e)},De.guessLength=r,De.toArray=function(t){var n=r(t),i="number"==typeof n?new Array(n):[],o=0;return e(t,(function(e){i[o++]=e})),i},De.toArrayWithIndices=function(n){var i=r(n),o="number"==typeof i?t.getPointerArray(i):Array,s="number"==typeof i?new Array(i):[],a="number"==typeof i?new o(i):[],c=0;return e(n,(function(e){s[c]=e,a[c]=c++})),[s,a]},De}var Le=function(){if(ze)return Fe;ze=1;var e=function(){if(Ce)return $e;function e(e){Object.defineProperty(this,"_next",{writable:!1,enumerable:!1,value:e}),this.done=!1}return Ce=1,e.prototype.next=function(){if(this.done)return{done:!0};var e=this._next();return e.done&&(this.done=!0),e},"undefined"!=typeof Symbol&&(e.prototype[Symbol.iterator]=function(){return this}),e.of=function(){var t=arguments,r=t.length,n=0;return new e((function(){return n>=r?{done:!0}:{done:!1,value:t[n++]}}))},e.empty=function(){var t=new e(null);return t.done=!0,t},e.is=function(t){return t instanceof e||"object"==typeof t&&null!==t&&"function"==typeof t.next},$e=e}(),t=Me(),r=Ue(),n=je();function i(e,t,n){if(arguments.length<2&&(n=e,e=null,t=null),this.capacity=n,"number"!=typeof this.capacity||this.capacity<=0)throw new Error("mnemonist/lru-cache: capacity should be positive number.");var i=r.getPointerArray(n);this.forward=new i(n),this.backward=new i(n),this.K="function"==typeof e?new e(n):new Array(n),this.V="function"==typeof t?new t(n):new Array(n),this.size=0,this.head=0,this.tail=0,this.items={}}return i.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},i.prototype.splayOnTop=function(e){var t=this.head;if(this.head===e)return this;var r=this.backward[e],n=this.forward[e];return this.tail===e?this.tail=r:this.backward[n]=r,this.forward[r]=n,this.backward[t]=e,this.head=e,this.forward[e]=t,this},i.prototype.set=function(e,t){var r=this.items[e];if(void 0!==r)return this.splayOnTop(r),void(this.V[r]=t);this.size<this.capacity?r=this.size++:(r=this.tail,this.tail=this.backward[r],delete this.items[this.K[r]]),this.items[e]=r,this.K[r]=e,this.V[r]=t,this.forward[r]=this.head,this.backward[this.head]=r,this.head=r},i.prototype.setpop=function(e,t){var r=null,n=null,i=this.items[e];return void 0!==i?(this.splayOnTop(i),r=this.V[i],this.V[i]=t,{evicted:!1,key:e,value:r}):(this.size<this.capacity?i=this.size++:(i=this.tail,this.tail=this.backward[i],r=this.V[i],n=this.K[i],delete this.items[this.K[i]]),this.items[e]=i,this.K[i]=e,this.V[i]=t,this.forward[i]=this.head,this.backward[this.head]=i,this.head=i,n?{evicted:!0,key:n,value:r}:null)},i.prototype.has=function(e){return e in this.items},i.prototype.get=function(e){var t=this.items[e];if(void 0!==t)return this.splayOnTop(t),this.V[t]},i.prototype.peek=function(e){var t=this.items[e];if(void 0!==t)return this.V[t]},i.prototype.forEach=function(e,t){t=arguments.length>1?t:this;for(var r=0,n=this.size,i=this.head,o=this.K,s=this.V,a=this.forward;r<n;)e.call(t,s[i],o[i],this),i=a[i],r++},i.prototype.keys=function(){var t=0,r=this.size,n=this.head,i=this.K,o=this.forward;return new e((function(){if(t>=r)return{done:!0};var e=i[n];return++t<r&&(n=o[n]),{done:!1,value:e}}))},i.prototype.values=function(){var t=0,r=this.size,n=this.head,i=this.V,o=this.forward;return new e((function(){if(t>=r)return{done:!0};var e=i[n];return++t<r&&(n=o[n]),{done:!1,value:e}}))},i.prototype.entries=function(){var t=0,r=this.size,n=this.head,i=this.K,o=this.V,s=this.forward;return new e((function(){if(t>=r)return{done:!0};var e=i[n],a=o[n];return++t<r&&(n=s[n]),{done:!1,value:[e,a]}}))},"undefined"!=typeof Symbol&&(i.prototype[Symbol.iterator]=i.prototype.entries),i.prototype.inspect=function(){for(var e,t=new Map,r=this.entries();!(e=r.next()).done;)t.set(e.value[0],e.value[1]);return Object.defineProperty(t,"constructor",{value:i,enumerable:!1}),t},"undefined"!=typeof Symbol&&(i.prototype[Symbol.for("nodejs.util.inspect.custom")]=i.prototype.inspect),i.from=function(e,r,o,s){if(arguments.length<2){if("number"!=typeof(s=n.guessLength(e)))throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else 2===arguments.length&&(s=r,r=null,o=null);var a=new i(r,o,s);return t(e,(function(e,t){a.set(t,e)})),a},Fe=i}(),Be=Re(Le);class He{constructor(e){this.cache=new Be(e)}getEndpoint(e){const t=this.get(e);if(!t||0===t.length)return;const r=t.map((e=>e.Address));return r[Math.floor(Math.random()*r.length)]}get(e){if(!this.has(e))return;const t=this.cache.get(e);if(!t)return;const r=Date.now(),n=t.filter((e=>r<e.Expires));if(0!==n.length)return n;this.delete(e)}set(e,t){const r=Date.now();this.cache.set(e,t.map((({Address:e,CachePeriodInMinutes:t})=>({Address:e,Expires:r+60*t*1e3}))))}delete(e){this.cache.set(e,[])}has(e){if(!this.cache.has(e))return!1;const t=this.cache.peek(e);return!!t&&t.length>0}clear(){this.cache.clear()}}const qe={name:"hostHeaderMiddleware",step:"build",priority:"low",tags:["HOST"],override:!0},Ve=e=>({applyToStack:t=>{t.add((e=>t=>async r=>{if(!Ae.isInstance(r.request))return t(r);const{request:n}=r,{handlerProtocol:i=""}=e.requestHandler.metadata||{};if(i.indexOf("h2")>=0&&!n.headers[":authority"])delete n.headers.host,n.headers[":authority"]=n.hostname+(n.port?":"+n.port:"");else if(!n.headers.host){let e=n.hostname;null!=n.port&&(e+=`:${n.port}`),n.headers.host=e}return t(r)})(e),qe)}}),We={name:"loggerMiddleware",tags:["LOGGER"],step:"initialize",override:!0},Ge=e=>({applyToStack:e=>{e.add(((e,t)=>async r=>{try{const n=await e(r),{clientName:i,commandName:o,logger:s,dynamoDbDocumentClientOptions:a={}}=t,{overrideInputFilterSensitiveLog:c,overrideOutputFilterSensitiveLog:d}=a,l=c??t.inputFilterSensitiveLog,u=d??t.outputFilterSensitiveLog,{$metadata:p,...h}=n.output;return s?.info?.({clientName:i,commandName:o,input:l(r.input),output:u(h),metadata:p}),n}catch(e){const{clientName:n,commandName:i,logger:o,dynamoDbDocumentClientOptions:s={}}=t,{overrideInputFilterSensitiveLog:a}=s,c=a??t.inputFilterSensitiveLog;throw o?.error?.({clientName:n,commandName:i,input:c(r.input),error:e,metadata:e.$metadata}),e}}),We)}}),Ke="X-Amzn-Trace-Id",Xe={step:"build",tags:["RECURSION_DETECTION"],name:"recursionDetectionMiddleware",override:!0,priority:"low"},Ye=e=>({applyToStack:t=>{t.add((e=>t=>async r=>{const{request:n}=r;if(!Ae.isInstance(n)||"node"!==e.runtime||n.headers.hasOwnProperty(Ke))return t(r);const i=process.env.AWS_LAMBDA_FUNCTION_NAME,o=process.env._X_AMZN_TRACE_ID,s=e=>"string"==typeof e&&e.length>0;return s(i)&&s(o)&&(n.headers[Ke]=o),t({...r,request:n})})(e),Xe)}});function Je(e){return{...e,customUserAgent:"string"==typeof e.customUserAgent?[[e.customUserAgent]]:e.customUserAgent}}const Qe=new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),Ze=e=>Qe.test(e)||e.startsWith("[")&&e.endsWith("]"),et=new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),tt=(e,t=!1)=>{if(!t)return et.test(e);const r=e.split(".");for(const e of r)if(!tt(e))return!1;return!0},rt={},nt="endpoints";function it(e){return"object"!=typeof e||null==e?e:"ref"in e?`$${it(e.ref)}`:"fn"in e?`${e.fn}(${(e.argv||[]).map(it).join(", ")})`:JSON.stringify(e,null,2)}class ot extends Error{constructor(e){super(e),this.name="EndpointError"}}const st=(e,t)=>(e=>{const t=e.split("."),r=[];for(const n of t){const t=n.indexOf("[");if(-1!==t){if(n.indexOf("]")!==n.length-1)throw new ot(`Path: '${e}' does not end with ']'`);const i=n.slice(t+1,-1);if(Number.isNaN(parseInt(i)))throw new ot(`Invalid array index: '${i}' in path: '${e}'`);0!==t&&r.push(n.slice(0,t)),r.push(i)}else r.push(n)}return r})(t).reduce(((r,n)=>{if("object"!=typeof r)throw new ot(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);return Array.isArray(r)?r[parseInt(n)]:r[n]}),e),at={[be.HTTP]:80,[be.HTTPS]:443},ct={booleanEquals:(e,t)=>e===t,getAttr:st,isSet:e=>null!=e,isValidHostLabel:tt,not:e=>!e,parseURL:e=>{const t=(()=>{try{if(e instanceof URL)return e;if("object"==typeof e&&"hostname"in e){const{hostname:t,port:r,protocol:n="",path:i="",query:o={}}=e,s=new URL(`${n}//${t}${r?`:${r}`:""}${i}`);return s.search=Object.entries(o).map((([e,t])=>`${e}=${t}`)).join("&"),s}return new URL(e)}catch(e){return null}})();if(!t)return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`),null;const r=t.href,{host:n,hostname:i,pathname:o,protocol:s,search:a}=t;if(a)return null;const c=s.slice(0,-1);if(!Object.values(be).includes(c))return null;const d=Ze(i);return{scheme:c,authority:`${n}${r.includes(`${n}:${at[c]}`)||"string"==typeof e&&e.includes(`${n}:${at[c]}`)?`:${at[c]}`:""}`,path:o,normalizedPath:o.endsWith("/")?o:`${o}/`,isIp:d}},stringEquals:(e,t)=>e===t,substring:(e,t,r,n)=>t>=r||e.length<r?null:n?e.substring(e.length-r,e.length-t):e.substring(t,r),uriEncode:e=>encodeURIComponent(e).replace(/[!*'()]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},dt=(e,t)=>{const r=[],n={...t.endpointParams,...t.referenceRecord};let i=0;for(;i<e.length;){const t=e.indexOf("{",i);if(-1===t){r.push(e.slice(i));break}r.push(e.slice(i,t));const o=e.indexOf("}",t);if(-1===o){r.push(e.slice(t));break}"{"===e[t+1]&&"}"===e[o+1]&&(r.push(e.slice(t+1,o)),i=o+2);const s=e.substring(t+1,o);if(s.includes("#")){const[e,t]=s.split("#");r.push(st(n[e],t))}else r.push(n[s]);i=o+1}return r.join("")},lt=(e,t,r)=>{if("string"==typeof e)return dt(e,r);if(e.fn)return ut(e,r);if(e.ref)return(({ref:e},t)=>({...t.endpointParams,...t.referenceRecord}[e]))(e,r);throw new ot(`'${t}': ${String(e)} is not a string, function or reference.`)},ut=({fn:e,argv:t},r)=>{const n=t.map((e=>["boolean","number"].includes(typeof e)?e:lt(e,"arg",r))),i=e.split(".");return i[0]in rt&&null!=i[1]?rt[i[0]][i[1]](...n):ct[e](...n)},pt=({assign:e,...t},r)=>{if(e&&e in r.referenceRecord)throw new ot(`'${e}' is already defined in Reference Record.`);const n=ut(t,r);return r.logger?.debug?.(`${nt} evaluateCondition: ${it(t)} = ${it(n)}`),{result:""===n||!!n,...null!=e&&{toAssign:{name:e,value:n}}}},ht=(e=[],t)=>{const r={};for(const n of e){const{result:e,toAssign:i}=pt(n,{...t,referenceRecord:{...t.referenceRecord,...r}});if(!e)return{result:e};i&&(r[i.name]=i.value,t.logger?.debug?.(`${nt} assign: ${i.name} := ${it(i.value)}`))}return{result:!0,referenceRecord:r}},ft=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>({...e,[r]:n.map((e=>{const n=lt(e,"Header value entry",t);if("string"!=typeof n)throw new ot(`Header '${r}' value '${n}' is not a string`);return n}))})),{}),mt=(e,t)=>{if(Array.isArray(e))return e.map((e=>mt(e,t)));switch(typeof e){case"string":return dt(e,t);case"object":if(null===e)throw new ot(`Unexpected endpoint property: ${e}`);return gt(e,t);case"boolean":return e;default:throw new ot("Unexpected endpoint property type: "+typeof e)}},gt=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>({...e,[r]:mt(n,t)})),{}),yt=(e,t)=>{const r=lt(e,"Endpoint URL",t);if("string"==typeof r)try{return new URL(r)}catch(e){throw console.error(`Failed to construct URL with ${r}`,e),e}throw new ot("Endpoint URL must be a string, got "+typeof r)},wt=(e,t)=>{const{conditions:r,endpoint:n}=e,{result:i,referenceRecord:o}=ht(r,t);if(!i)return;const s={...t,referenceRecord:{...t.referenceRecord,...o}},{url:a,properties:c,headers:d}=n;return t.logger?.debug?.(`${nt} Resolving endpoint from template: ${it(n)}`),{...null!=d&&{headers:ft(d,s)},...null!=c&&{properties:gt(c,s)},url:yt(a,s)}},bt=(e,t)=>{const{conditions:r,error:n}=e,{result:i,referenceRecord:o}=ht(r,t);if(i)throw new ot(lt(n,"Error",{...t,referenceRecord:{...t.referenceRecord,...o}}))},vt=(e,t)=>{const{conditions:r,rules:n}=e,{result:i,referenceRecord:o}=ht(r,t);if(i)return xt(n,{...t,referenceRecord:{...t.referenceRecord,...o}})},xt=(e,t)=>{for(const r of e)if("endpoint"===r.type){const e=wt(r,t);if(e)return e}else if("error"===r.type)bt(r,t);else{if("tree"!==r.type)throw new ot(`Unknown endpoint rule: ${r}`);{const e=vt(r,t);if(e)return e}}throw new ot("Rules evaluation failed")},Et=(e,t)=>{const{endpointParams:r,logger:n}=t,{parameters:i,rules:o}=e;t.logger?.debug?.(`${nt} Initial EndpointParams: ${it(r)}`);const s=Object.entries(i).filter((([,e])=>null!=e.default)).map((([e,t])=>[e,t.default]));if(s.length>0)for(const[e,t]of s)r[e]=r[e]??t;const a=Object.entries(i).filter((([,e])=>e.required)).map((([e])=>e));for(const e of a)if(null==r[e])throw new ot(`Missing required parameter: '${e}'`);const c=xt(o,{endpointParams:r,logger:n,referenceRecord:{}});if(t.endpointParams?.Endpoint)try{const e=new URL(t.endpointParams.Endpoint),{protocol:r,port:n}=e;c.url.protocol=r,c.url.port=n}catch(e){}return t.logger?.debug?.(`${nt} Resolved endpoint: ${it(c)}`),c},St=(e,t=!1)=>{if(t){for(const t of e.split("."))if(!St(t))return!1;return!0}return!!tt(e)&&(!(e.length<3||e.length>63)&&(e===e.toLowerCase()&&!Ze(e)))};let kt={partitions:[{id:"aws",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-east-1",name:"aws",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",regions:{"af-south-1":{description:"Africa (Cape Town)"},"ap-east-1":{description:"Asia Pacific (Hong Kong)"},"ap-northeast-1":{description:"Asia Pacific (Tokyo)"},"ap-northeast-2":{description:"Asia Pacific (Seoul)"},"ap-northeast-3":{description:"Asia Pacific (Osaka)"},"ap-south-1":{description:"Asia Pacific (Mumbai)"},"ap-south-2":{description:"Asia Pacific (Hyderabad)"},"ap-southeast-1":{description:"Asia Pacific (Singapore)"},"ap-southeast-2":{description:"Asia Pacific (Sydney)"},"ap-southeast-3":{description:"Asia Pacific (Jakarta)"},"ap-southeast-4":{description:"Asia Pacific (Melbourne)"},"aws-global":{description:"AWS Standard global region"},"ca-central-1":{description:"Canada (Central)"},"ca-west-1":{description:"Canada West (Calgary)"},"eu-central-1":{description:"Europe (Frankfurt)"},"eu-central-2":{description:"Europe (Zurich)"},"eu-north-1":{description:"Europe (Stockholm)"},"eu-south-1":{description:"Europe (Milan)"},"eu-south-2":{description:"Europe (Spain)"},"eu-west-1":{description:"Europe (Ireland)"},"eu-west-2":{description:"Europe (London)"},"eu-west-3":{description:"Europe (Paris)"},"il-central-1":{description:"Israel (Tel Aviv)"},"me-central-1":{description:"Middle East (UAE)"},"me-south-1":{description:"Middle East (Bahrain)"},"sa-east-1":{description:"South America (Sao Paulo)"},"us-east-1":{description:"US East (N. Virginia)"},"us-east-2":{description:"US East (Ohio)"},"us-west-1":{description:"US West (N. California)"},"us-west-2":{description:"US West (Oregon)"}}},{id:"aws-cn",outputs:{dnsSuffix:"amazonaws.com.cn",dualStackDnsSuffix:"api.amazonwebservices.com.cn",implicitGlobalRegion:"cn-northwest-1",name:"aws-cn",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^cn\\-\\w+\\-\\d+$",regions:{"aws-cn-global":{description:"AWS China global region"},"cn-north-1":{description:"China (Beijing)"},"cn-northwest-1":{description:"China (Ningxia)"}}},{id:"aws-us-gov",outputs:{dnsSuffix:"amazonaws.com",dualStackDnsSuffix:"api.aws",implicitGlobalRegion:"us-gov-west-1",name:"aws-us-gov",supportsDualStack:!0,supportsFIPS:!0},regionRegex:"^us\\-gov\\-\\w+\\-\\d+$",regions:{"aws-us-gov-global":{description:"AWS GovCloud (US) global region"},"us-gov-east-1":{description:"AWS GovCloud (US-East)"},"us-gov-west-1":{description:"AWS GovCloud (US-West)"}}},{id:"aws-iso",outputs:{dnsSuffix:"c2s.ic.gov",dualStackDnsSuffix:"c2s.ic.gov",implicitGlobalRegion:"us-iso-east-1",name:"aws-iso",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-iso\\-\\w+\\-\\d+$",regions:{"aws-iso-global":{description:"AWS ISO (US) global region"},"us-iso-east-1":{description:"US ISO East"},"us-iso-west-1":{description:"US ISO WEST"}}},{id:"aws-iso-b",outputs:{dnsSuffix:"sc2s.sgov.gov",dualStackDnsSuffix:"sc2s.sgov.gov",implicitGlobalRegion:"us-isob-east-1",name:"aws-iso-b",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isob\\-\\w+\\-\\d+$",regions:{"aws-iso-b-global":{description:"AWS ISOB (US) global region"},"us-isob-east-1":{description:"US ISOB East (Ohio)"}}},{id:"aws-iso-e",outputs:{dnsSuffix:"cloud.adc-e.uk",dualStackDnsSuffix:"cloud.adc-e.uk",implicitGlobalRegion:"eu-isoe-west-1",name:"aws-iso-e",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^eu\\-isoe\\-\\w+\\-\\d+$",regions:{"eu-isoe-west-1":{description:"EU ISOE West"}}},{id:"aws-iso-f",outputs:{dnsSuffix:"csp.hci.ic.gov",dualStackDnsSuffix:"csp.hci.ic.gov",implicitGlobalRegion:"us-isof-south-1",name:"aws-iso-f",supportsDualStack:!1,supportsFIPS:!0},regionRegex:"^us\\-isof\\-\\w+\\-\\d+$",regions:{}}],version:"1.1"};const At={isVirtualHostableS3Bucket:St,parseArn:e=>{const t=e.split(":");if(t.length<6)return null;const[r,n,i,o,s,...a]=t;if("arn"!==r||""===n||""===i||""===a.join(":"))return null;return{partition:n,service:i,region:o,accountId:s,resourceId:a.map((e=>e.split("/"))).flat()}},partition:e=>{const{partitions:t}=kt;for(const r of t){const{regions:t,outputs:n}=r;for(const[r,i]of Object.entries(t))if(r===e)return{...n,...i}}for(const r of t){const{regionRegex:t,outputs:n}=r;if(new RegExp(t).test(e))return{...n}}const r=t.find((e=>"aws"===e.id));if(!r)throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");return{...r.outputs}}};rt.aws=At;const Pt="user-agent",$t="x-amz-user-agent",Ct=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,It=/[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,Ot=e=>{const t=e[0].split("/").map((e=>e.replace(Ct,"-"))).join("/"),r=e[1]?.replace(It,"-"),n=t.indexOf("/"),i=t.substring(0,n);let o=t.substring(n+1);return"api"===i&&(o=o.toLowerCase()),[i,o,r].filter((e=>e&&e.length>0)).reduce(((e,t,r)=>{switch(r){case 0:return t;case 1:return`${e}/${t}`;default:return`${e}#${t}`}}),"")},Rt={name:"getUserAgentMiddleware",step:"build",priority:"low",tags:["SET_USER_AGENT","USER_AGENT"],override:!0},Mt=e=>({applyToStack:t=>{var r;t.add((r=e,(e,t)=>async n=>{const{request:i}=n;if(!Ae.isInstance(i))return e(n);const{headers:o}=i,s=t?.userAgent?.map(Ot)||[],a=(await r.defaultUserAgentProvider()).map(Ot),c=r?.customUserAgent?.map(Ot)||[],d=[].concat([...a,...s,...c]).join(" "),l=[...a.filter((e=>e.startsWith("aws-sdk-"))),...c].join(" ");return"browser"!==r.runtime?(l&&(o[$t]=o[$t]?`${o[Pt]} ${l}`:l),o[Pt]=d):o[$t]=d,e({...n,request:i})}),Rt)}});var Tt;!function(e){e.ENV="env",e.CONFIG="shared config entry"}(Tt||(Tt={}));const _t=!1,Ut=!1,Nt=e=>e[Ee]||(e[Ee]={}),Ft=e=>{if("function"==typeof e)return e;const t=Promise.resolve(e);return()=>t},zt=e=>"string"==typeof e&&(e.startsWith("fips-")||e.endsWith("-fips")),Dt=e=>zt(e)?["fips-aws-global","aws-fips"].includes(e)?"us-east-1":e.replace(/fips-(dkr-|prod-)?|-fips/,""):e,jt=e=>{const{region:t,useFipsEndpoint:r}=e;if(!t)throw new Error("Region is missing");return{...e,region:async()=>{if("string"==typeof t)return Dt(t);const e=await t();return Dt(e)},useFipsEndpoint:async()=>{const e="string"==typeof t?t:await t();return!!zt(e)||("function"!=typeof r?Promise.resolve(!!r):r())}}};const Lt=(e,t)=>(r,n)=>async i=>{const o=e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e,n,i.input)),s=function(e){const t=new Map;for(const r of e)t.set(r.schemeId,r);return t}(e.httpAuthSchemes),a=Nt(n),c=[];for(const r of o){const i=s.get(r.schemeId);if(!i){c.push(`HttpAuthScheme \`${r.schemeId}\` was not enabled for this service.`);continue}const o=i.identityProvider(await t.identityProviderConfigProvider(e));if(!o){c.push(`HttpAuthScheme \`${r.schemeId}\` did not have an IdentityProvider configured.`);continue}const{identityProperties:d={},signingProperties:l={}}=r.propertiesExtractor?.(e,n)||{};r.identityProperties=Object.assign(r.identityProperties||{},d),r.signingProperties=Object.assign(r.signingProperties||{},l),a.selectedHttpAuthScheme={httpAuthOption:r,identity:await o(r.identityProperties),signer:i.signer};break}if(!a.selectedHttpAuthScheme)throw new Error(c.join("\n"));return r(i)},Bt=/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,Ht=/(\d+\.){3}\d+/,qt=/\.\./,Vt=e=>Bt.test(e)&&!Ht.test(e)&&!qt.test(e),Wt=e=>{const[t,r,n,,,i]=e.split(":"),o="arn"===t&&e.split(":").length>=6,s=Boolean(o&&r&&n&&i);if(o&&!s)throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);return s},Gt=(e,t,r)=>{const n=async()=>{const n=r[e]??r[t];return"function"==typeof n?n():n};return"credentialScope"===e||"CredentialScope"===t?async()=>{const e="function"==typeof r.credentials?await r.credentials():r.credentials;return e?.credentialScope??e?.CredentialScope}:"accountId"===e||"AccountId"===t?async()=>{const e="function"==typeof r.credentials?await r.credentials():r.credentials;return e?.accountId??e?.AccountId}:"endpoint"===e||"endpoint"===t?async()=>{const e=await n();if(e&&"object"==typeof e){if("url"in e)return e.url.href;if("hostname"in e){const{protocol:t,hostname:r,port:n,path:i}=e;return`${t}//${r}${n?":"+n:""}${i}`}}return e}:n};const Kt=e=>{if("string"==typeof e)return Kt(new URL(e));const{hostname:t,pathname:r,port:n,protocol:i,search:o}=e;let s;return o&&(s=function(e){const t={};if(e=e.replace(/^\?/,""))for(const r of e.split("&")){let[e,n=null]=r.split("=");e=decodeURIComponent(e),n&&(n=decodeURIComponent(n)),e in t?Array.isArray(t[e])?t[e].push(n):t[e]=[t[e],n]:t[e]=n}return t}(o)),{hostname:t,port:n?parseInt(n):void 0,protocol:i,path:r,query:s}},Xt=e=>"object"==typeof e?"url"in e?Kt(e.url):e:Kt(e),Yt=async(e,t,r)=>{const n={},i=t?.getEndpointParameterInstructions?.()||{};for(const[t,o]of Object.entries(i))switch(o.type){case"staticContextParams":n[t]=o.value;break;case"contextParams":n[t]=e[o.name];break;case"clientContextParams":case"builtInParams":n[t]=await Gt(o.name,t,r)();break;default:throw new Error("Unrecognized endpoint parameter instruction: "+JSON.stringify(o))}return 0===Object.keys(i).length&&Object.assign(n,r),"s3"===String(r.serviceId).toLowerCase()&&await(async e=>{const t=e?.Bucket||"";if("string"==typeof e.Bucket&&(e.Bucket=t.replace(/#/g,encodeURIComponent("#")).replace(/\?/g,encodeURIComponent("?"))),Wt(t)){if(!0===e.ForcePathStyle)throw new Error("Path-style addressing cannot be used with ARN buckets")}else(!Vt(t)||-1!==t.indexOf(".")&&!String(e.Endpoint).startsWith("http:")||t.toLowerCase()!==t||t.length<3)&&(e.ForcePathStyle=!0);return e.DisableMultiRegionAccessPoints&&(e.disableMultiRegionAccessPoints=!0,e.DisableMRAP=!0),e})(n),n},Jt=({config:e,instructions:t})=>(r,n)=>async i=>{const o=await(async(e,t,r,n)=>{if(!r.endpoint){const e=await(async()=>{})(r.serviceId);e&&(r.endpoint=()=>Promise.resolve(Xt(e)))}const i=await Yt(e,t,r);if("function"!=typeof r.endpointProvider)throw new Error("config.endpointProvider is not set.");return r.endpointProvider(i,n)})(i.input,{getEndpointParameterInstructions:()=>t},{...e},n);n.endpointV2=o,n.authSchemes=o.properties?.authSchemes;const s=n.authSchemes?.[0];if(s){n.signing_region=s.signingRegion,n.signing_service=s.signingName;const e=Nt(n),t=e?.selectedHttpAuthScheme?.httpAuthOption;t&&(t.signingProperties=Object.assign(t.signingProperties||{},{signing_region:s.signingRegion,signingRegion:s.signingRegion,signing_service:s.signingName,signingName:s.signingName,signingRegionSet:s.signingRegionSet},s.properties))}return r({...i})},Qt={name:"deserializerMiddleware",step:"deserialize",tags:["DESERIALIZER"],override:!0},Zt={name:"serializerMiddleware",step:"serialize",tags:["SERIALIZER"],override:!0};function er(e,t,r){return{applyToStack:n=>{n.add(((e,t)=>r=>async n=>{const{response:i}=await r(n);try{return{response:i,output:await t(i,e)}}catch(e){if(Object.defineProperty(e,"$response",{value:i}),!("$metadata"in e)){const t="Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";e.message+="\n  "+t,void 0!==e.$responseBodyText&&e.$response&&(e.$response.body=e.$responseBodyText)}throw e}})(e,r),Qt),n.add(((e,t)=>(r,n)=>async i=>{const o=n.endpointV2?.url&&e.urlParser?async()=>e.urlParser(n.endpointV2.url):e.endpoint;if(!o)throw new Error("No valid endpoint provider available.");const s=await t(i.input,{...e,endpoint:o});return r({...i,request:s})})(e,t),Zt)}}}const tr={step:"serialize",tags:["ENDPOINT_PARAMETERS","ENDPOINT_V2","ENDPOINT"],name:"endpointV2Middleware",override:!0,relation:"before",toMiddleware:Zt.name},rr=(e,t)=>({applyToStack:r=>{r.addRelativeTo(Jt({config:e,instructions:t}),tr)}}),nr=e=>{const t=e.tls??!0,{endpoint:r}=e,n=null!=r?async()=>Xt(await Ft(r)()):void 0,i=!!r;return{...e,endpoint:n,tls:t,isCustomEndpoint:i,useDualstackEndpoint:Ft(e.useDualstackEndpoint??!1),useFipsEndpoint:Ft(e.useFipsEndpoint??!1)}},ir={step:"serialize",tags:["HTTP_AUTH_SCHEME"],name:"httpAuthSchemeMiddleware",override:!0,relation:"before",toMiddleware:tr.name},or=(e,{httpAuthSchemeParametersProvider:t,identityProviderConfigProvider:r})=>({applyToStack:n=>{n.addRelativeTo(Lt(e,{httpAuthSchemeParametersProvider:t,identityProviderConfigProvider:r}),ir)}}),sr=e=>e=>{throw e},ar=(e,t)=>{};var cr;!function(e){e.STANDARD="standard",e.ADAPTIVE="adaptive"}(cr||(cr={}));const dr=cr.STANDARD,lr=["BandwidthLimitExceeded","EC2ThrottledException","LimitExceededException","PriorRequestNotComplete","ProvisionedThroughputExceededException","RequestLimitExceeded","RequestThrottled","RequestThrottledException","SlowDown","ThrottledException","Throttling","ThrottlingException","TooManyRequestsException","TransactionInProgressException"],ur=["TimeoutError","RequestTimeout","RequestTimeoutException"],pr=[500,502,503,504],hr=["ECONNRESET","ECONNREFUSED","EPIPE","ETIMEDOUT"],fr=e=>429===e.$metadata?.httpStatusCode||lr.includes(e.name)||1==e.$retryable?.throttling,mr=e=>(e=>e.$metadata?.clockSkewCorrected)(e)||ur.includes(e.name)||hr.includes(e?.code||"")||pr.includes(e.$metadata?.httpStatusCode||0);class gr{constructor(e){this.currentCapacity=0,this.enabled=!1,this.lastMaxRate=0,this.measuredTxRate=0,this.requestCount=0,this.lastTimestamp=0,this.timeWindow=0,this.beta=e?.beta??.7,this.minCapacity=e?.minCapacity??1,this.minFillRate=e?.minFillRate??.5,this.scaleConstant=e?.scaleConstant??.4,this.smooth=e?.smooth??.8;const t=this.getCurrentTimeInSeconds();this.lastThrottleTime=t,this.lastTxRateBucket=Math.floor(this.getCurrentTimeInSeconds()),this.fillRate=this.minFillRate,this.maxCapacity=this.minCapacity}getCurrentTimeInSeconds(){return Date.now()/1e3}async getSendToken(){return this.acquireTokenBucket(1)}async acquireTokenBucket(e){if(this.enabled){if(this.refillTokenBucket(),e>this.currentCapacity){const t=(e-this.currentCapacity)/this.fillRate*1e3;await new Promise((e=>setTimeout(e,t)))}this.currentCapacity=this.currentCapacity-e}}refillTokenBucket(){const e=this.getCurrentTimeInSeconds();if(!this.lastTimestamp)return void(this.lastTimestamp=e);const t=(e-this.lastTimestamp)*this.fillRate;this.currentCapacity=Math.min(this.maxCapacity,this.currentCapacity+t),this.lastTimestamp=e}updateClientSendingRate(e){let t;if(this.updateMeasuredRate(),fr(e)){const e=this.enabled?Math.min(this.measuredTxRate,this.fillRate):this.measuredTxRate;this.lastMaxRate=e,this.calculateTimeWindow(),this.lastThrottleTime=this.getCurrentTimeInSeconds(),t=this.cubicThrottle(e),this.enableTokenBucket()}else this.calculateTimeWindow(),t=this.cubicSuccess(this.getCurrentTimeInSeconds());const r=Math.min(t,2*this.measuredTxRate);this.updateTokenBucketRate(r)}calculateTimeWindow(){this.timeWindow=this.getPrecise(Math.pow(this.lastMaxRate*(1-this.beta)/this.scaleConstant,1/3))}cubicThrottle(e){return this.getPrecise(e*this.beta)}cubicSuccess(e){return this.getPrecise(this.scaleConstant*Math.pow(e-this.lastThrottleTime-this.timeWindow,3)+this.lastMaxRate)}enableTokenBucket(){this.enabled=!0}updateTokenBucketRate(e){this.refillTokenBucket(),this.fillRate=Math.max(e,this.minFillRate),this.maxCapacity=Math.max(e,this.minCapacity),this.currentCapacity=Math.min(this.currentCapacity,this.maxCapacity)}updateMeasuredRate(){const e=this.getCurrentTimeInSeconds(),t=Math.floor(2*e)/2;if(this.requestCount++,t>this.lastTxRateBucket){const e=this.requestCount/(t-this.lastTxRateBucket);this.measuredTxRate=this.getPrecise(e*this.smooth+this.measuredTxRate*(1-this.smooth)),this.requestCount=0,this.lastTxRateBucket=t}}getPrecise(e){return parseFloat(e.toFixed(8))}}const yr=({retryDelay:e,retryCount:t,retryCost:r})=>({getRetryCount:()=>t,getRetryDelay:()=>Math.min(2e4,e),getRetryCost:()=>r});class wr{constructor(e){this.maxAttempts=e,this.mode=cr.STANDARD,this.capacity=500,this.retryBackoffStrategy=(()=>{let e=100;return{computeNextBackoffDelay:t=>Math.floor(Math.min(2e4,Math.random()*2**t*e)),setDelayBase:t=>{e=t}}})(),this.maxAttemptsProvider="function"==typeof e?e:async()=>e}async acquireInitialRetryToken(e){return yr({retryDelay:100,retryCount:0})}async refreshRetryTokenForRetry(e,t){const r=await this.getMaxAttempts();if(this.shouldRetry(e,t,r)){const r=t.errorType;this.retryBackoffStrategy.setDelayBase("THROTTLING"===r?500:100);const n=this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),i=t.retryAfterHint?Math.max(t.retryAfterHint.getTime()-Date.now()||0,n):n,o=this.getCapacityCost(r);return this.capacity-=o,yr({retryDelay:i,retryCount:e.getRetryCount()+1,retryCost:o})}throw new Error("No retry token available")}recordSuccess(e){this.capacity=Math.max(500,this.capacity+(e.getRetryCost()??1))}getCapacity(){return this.capacity}async getMaxAttempts(){try{return await this.maxAttemptsProvider()}catch(e){return console.warn("Max attempts provider could not resolve. Using default of 3"),3}}shouldRetry(e,t,r){return e.getRetryCount()+1<r&&this.capacity>=this.getCapacityCost(t.errorType)&&this.isRetryableError(t.errorType)}getCapacityCost(e){return"TRANSIENT"===e?10:5}isRetryableError(e){return"THROTTLING"===e||"TRANSIENT"===e}}class br{constructor(e,t){this.maxAttemptsProvider=e,this.mode=cr.ADAPTIVE;const{rateLimiter:r}=t??{};this.rateLimiter=r??new gr,this.standardRetryStrategy=new wr(e)}async acquireInitialRetryToken(e){return await this.rateLimiter.getSendToken(),this.standardRetryStrategy.acquireInitialRetryToken(e)}async refreshRetryTokenForRetry(e,t){return this.rateLimiter.updateClientSendingRate(t),this.standardRetryStrategy.refreshRetryTokenForRetry(e,t)}recordSuccess(e){this.rateLimiter.updateClientSendingRate({}),this.standardRetryStrategy.recordSuccess(e)}}let vr;const xr=new Uint8Array(16);function Er(){if(!vr&&(vr="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vr(xr)}const Sr=[];for(let e=0;e<256;++e)Sr.push((e+256).toString(16).slice(1));var kr={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Ar(e,t,r){if(kr.randomUUID&&!t&&!e)return kr.randomUUID();const n=(e=e||{}).random||(e.rng||Er)();return n[6]=15&n[6]|64,n[8]=63&n[8]|128,function(e,t=0){return Sr[e[t+0]]+Sr[e[t+1]]+Sr[e[t+2]]+Sr[e[t+3]]+"-"+Sr[e[t+4]]+Sr[e[t+5]]+"-"+Sr[e[t+6]]+Sr[e[t+7]]+"-"+Sr[e[t+8]]+Sr[e[t+9]]+"-"+Sr[e[t+10]]+Sr[e[t+11]]+Sr[e[t+12]]+Sr[e[t+13]]+Sr[e[t+14]]+Sr[e[t+15]]}(n)}const Pr=e=>{const{retryStrategy:t}=e,r=Ft(e.maxAttempts??3);return{...e,maxAttempts:r,retryStrategy:async()=>{if(t)return t;return await Ft(e.retryMode)()===cr.ADAPTIVE?new br(r):new wr(r)}}};class $r{trace(){}debug(){}info(){}warn(){}error(){}}const Cr=(e,t)=>{const r=[];if(e&&r.push(e),t)for(const e of t)r.push(e);return r},Ir=(e,t)=>`${e||"anonymous"}${t&&t.length>0?` (a.k.a. ${t.join(",")})`:""}`,Or=()=>{let e=[],t=[],r=!1;const n=new Set,i=r=>(e.forEach((e=>{r.add(e.middleware,{...e})})),t.forEach((e=>{r.addRelativeTo(e.middleware,{...e})})),r.identifyOnResolve?.(a.identifyOnResolve()),r),o=e=>{const t=[];return e.before.forEach((e=>{0===e.before.length&&0===e.after.length?t.push(e):t.push(...o(e))})),t.push(e),e.after.reverse().forEach((e=>{0===e.before.length&&0===e.after.length?t.push(e):t.push(...o(e))})),t},s=(r=!1)=>{const n=[],i=[],s={};e.forEach((e=>{const t={...e,before:[],after:[]};for(const e of Cr(t.name,t.aliases))s[e]=t;n.push(t)})),t.forEach((e=>{const t={...e,before:[],after:[]};for(const e of Cr(t.name,t.aliases))s[e]=t;i.push(t)})),i.forEach((e=>{if(e.toMiddleware){const t=s[e.toMiddleware];if(void 0===t){if(r)return;throw new Error(`${e.toMiddleware} is not found when adding ${Ir(e.name,e.aliases)} middleware ${e.relation} ${e.toMiddleware}`)}"after"===e.relation&&t.after.push(e),"before"===e.relation&&t.before.push(e)}}));const a=(c=n,c.sort(((e,t)=>Rr[t.step]-Rr[e.step]||Mr[t.priority||"normal"]-Mr[e.priority||"normal"]))).map(o).reduce(((e,t)=>(e.push(...t),e)),[]);var c;return a},a={add:(t,r={})=>{const{name:i,override:o,aliases:s}=r,a={step:"initialize",priority:"normal",middleware:t,...r},c=Cr(i,s);if(c.length>0){if(c.some((e=>n.has(e)))){if(!o)throw new Error(`Duplicate middleware name '${Ir(i,s)}'`);for(const t of c){const r=e.findIndex((e=>e.name===t||e.aliases?.some((e=>e===t))));if(-1===r)continue;const n=e[r];if(n.step!==a.step||a.priority!==n.priority)throw new Error(`"${Ir(n.name,n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${Ir(i,s)}" middleware with ${a.priority} priority in ${a.step} step.`);e.splice(r,1)}}for(const e of c)n.add(e)}e.push(a)},addRelativeTo:(e,r)=>{const{name:i,override:o,aliases:s}=r,a={middleware:e,...r},c=Cr(i,s);if(c.length>0){if(c.some((e=>n.has(e)))){if(!o)throw new Error(`Duplicate middleware name '${Ir(i,s)}'`);for(const e of c){const r=t.findIndex((t=>t.name===e||t.aliases?.some((t=>t===e))));if(-1===r)continue;const n=t[r];if(n.toMiddleware!==a.toMiddleware||n.relation!==a.relation)throw new Error(`"${Ir(n.name,n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${Ir(i,s)}" middleware ${a.relation} "${a.toMiddleware}" middleware.`);t.splice(r,1)}}for(const e of c)n.add(e)}t.push(a)},clone:()=>i(Or()),use:e=>{e.applyToStack(a)},remove:r=>"string"==typeof r?(r=>{let i=!1;const o=e=>{const t=Cr(e.name,e.aliases);if(t.includes(r)){i=!0;for(const e of t)n.delete(e);return!1}return!0};return e=e.filter(o),t=t.filter(o),i})(r):(r=>{let i=!1;const o=e=>{if(e.middleware===r){i=!0;for(const t of Cr(e.name,e.aliases))n.delete(t);return!1}return!0};return e=e.filter(o),t=t.filter(o),i})(r),removeByTag:r=>{let i=!1;const o=e=>{const{tags:t,name:o,aliases:s}=e;if(t&&t.includes(r)){const e=Cr(o,s);for(const t of e)n.delete(t);return i=!0,!1}return!0};return e=e.filter(o),t=t.filter(o),i},concat:e=>{const t=i(Or());return t.use(e),t.identifyOnResolve(r||t.identifyOnResolve()||(e.identifyOnResolve?.()??!1)),t},applyToStack:i,identify:()=>s(!0).map((e=>{const t=e.step??e.relation+" "+e.toMiddleware;return Ir(e.name,e.aliases)+" - "+t})),identifyOnResolve:e=>("boolean"==typeof e&&(r=e),r),resolve:(e,t)=>{for(const r of s().map((e=>e.middleware)).reverse())e=r(e,t);return r&&console.log(a.identify()),e}};return a},Rr={initialize:5,serialize:4,build:3,finalizeRequest:2,deserialize:1},Mr={high:3,normal:2,low:1};class Tr{constructor(e){this.middlewareStack=Or(),this.config=e}send(e,t,r){const n="function"!=typeof t?t:void 0,i="function"==typeof t?t:r,o=e.resolveMiddleware(this.middlewareStack,this.config,n);if(!i)return o(e).then((e=>e.output));o(e).then((e=>i(null,e.output)),(e=>i(e))).catch((()=>{}))}destroy(){this.config.requestHandler.destroy&&this.config.requestHandler.destroy()}}const _r={},Ur=new Array(64);for(let e=0,t="A".charCodeAt(0),r="Z".charCodeAt(0);e+t<=r;e++){const r=String.fromCharCode(e+t);_r[r]=e,Ur[e]=r}for(let e=0,t="a".charCodeAt(0),r="z".charCodeAt(0);e+t<=r;e++){const r=String.fromCharCode(e+t),n=e+26;_r[r]=n,Ur[n]=r}for(let e=0;e<10;e++){_r[e.toString(10)]=e+52;const t=e.toString(10),r=e+52;_r[t]=r,Ur[r]=t}_r["+"]=62,Ur[62]="+",_r["/"]=63,Ur[63]="/";const Nr=6,Fr=8,zr=63,Dr=e=>{let t=e.length/4*3;"=="===e.slice(-2)?t-=2:"="===e.slice(-1)&&t--;const r=new ArrayBuffer(t),n=new DataView(r);for(let t=0;t<e.length;t+=4){let r=0,i=0;for(let n=t,o=t+3;n<=o;n++)if("="!==e[n]){if(!(e[n]in _r))throw new TypeError(`Invalid character ${e[n]} in base64 string.`);r|=_r[e[n]]<<(o-n)*Nr,i+=Nr}else r>>=Nr;const o=t/4*3;r>>=i%Fr;const s=Math.floor(i/Fr);for(let e=0;e<s;e++){const t=(s-e-1)*Fr;n.setUint8(o+e,(r&255<<t)>>t)}}return new Uint8Array(r)},jr=e=>(new TextEncoder).encode(e),Lr=e=>"string"==typeof e?jr(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e),Br=e=>{if("string"==typeof e)return e;if("object"!=typeof e||"number"!=typeof e.byteOffset||"number"!=typeof e.byteLength)throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");return new TextDecoder("utf-8").decode(e)};function Hr(e){let t;t="string"==typeof e?jr(e):e;const r="object"==typeof t&&"number"==typeof t.length,n="object"==typeof t&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength;if(!r&&!n)throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");let i="";for(let e=0;e<t.length;e+=3){let r=0,n=0;for(let i=e,o=Math.min(e+3,t.length);i<o;i++)r|=t[i]<<(o-i-1)*Fr,n+=Fr;const o=Math.ceil(n/Nr);r<<=o*Nr-n;for(let e=1;e<=o;e++){const t=(o-e)*Nr;i+=Ur[(r&zr<<t)>>t]}i+="==".slice(0,4-o)}return i}class qr extends Uint8Array{static fromString(e,t="utf-8"){if("string"==typeof e)return function(e,t){return"base64"===t?qr.mutate(Dr(e)):qr.mutate(jr(e))}(e,t);throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`)}static mutate(e){return Object.setPrototypeOf(e,qr.prototype),e}transformToString(e="utf-8"){return function(e,t="utf-8"){return"base64"===t?Hr(e):Br(e)}(this,e)}}const Vr=e=>encodeURIComponent(e).replace(/[!'()*]/g,Wr),Wr=e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`;function Gr(e=0){return new Promise(((t,r)=>{e&&setTimeout((()=>{const t=new Error(`Request did not complete within ${e} ms`);t.name="TimeoutError",r(t)}),e)}))}const Kr={supported:void 0};class Xr{static create(e){return"function"==typeof e?.handle?e:new Xr(e)}constructor(e){"function"==typeof e?this.configProvider=e().then((e=>e||{})):(this.config=e??{},this.configProvider=Promise.resolve(this.config)),void 0===Kr.supported&&(Kr.supported=Boolean("undefined"!=typeof Request&&"keepalive"in new Request("https://[::1]")))}destroy(){}async handle(e,{abortSignal:t}={}){this.config||(this.config=await this.configProvider);const r=this.config.requestTimeout,n=!0===this.config.keepAlive,i=this.config.credentials;if(t?.aborted){const e=new Error("Request aborted");return e.name="AbortError",Promise.reject(e)}let o=e.path;const s=function(e){const t=[];for(let r of Object.keys(e).sort()){const n=e[r];if(r=Vr(r),Array.isArray(n))for(let e=0,i=n.length;e<i;e++)t.push(`${r}=${Vr(n[e])}`);else{let e=r;(n||"string"==typeof n)&&(e+=`=${Vr(n)}`),t.push(e)}}return t.join("&")}(e.query||{});s&&(o+=`?${s}`),e.fragment&&(o+=`#${e.fragment}`);let a="";if(null!=e.username||null!=e.password){a=`${e.username??""}:${e.password??""}@`}const{port:c,method:d}=e,l=`${e.protocol}//${a}${e.hostname}${c?`:${c}`:""}${o}`,u="GET"===d||"HEAD"===d?void 0:e.body,p={body:u,headers:new Headers(e.headers),method:d,credentials:i};u&&(p.duplex="half"),"undefined"!=typeof AbortController&&(p.signal=t),Kr.supported&&(p.keepalive=n);let h=()=>{};const f=new Request(l,p),m=[fetch(f).then((e=>{const t=e.headers,r={};for(const e of t.entries())r[e[0]]=e[1];return null!=e.body?{response:new Pe({headers:r,reason:e.statusText,statusCode:e.status,body:e.body})}:e.blob().then((t=>({response:new Pe({headers:r,reason:e.statusText,statusCode:e.status,body:t})})))})),Gr(r)];return t&&m.push(new Promise(((e,r)=>{const n=()=>{const e=new Error("Request aborted");e.name="AbortError",r(e)};if("function"==typeof t.addEventListener){const e=t;e.addEventListener("abort",n,{once:!0}),h=()=>e.removeEventListener("abort",n)}else t.onabort=n}))),Promise.race(m).finally(h)}updateHttpClientConfig(e,t){this.config=void 0,this.configProvider=this.configProvider.then((r=>(r[e]=t,r)))}httpHandlerConfigs(){return this.config??{}}}const Yr=e=>"function"==typeof Blob&&e instanceof Blob?async function(e){const t=await function(e){return new Promise(((t,r)=>{const n=new FileReader;n.onloadend=()=>{if(2!==n.readyState)return r(new Error("Reader aborted too early"));const e=n.result??"",i=e.indexOf(","),o=i>-1?i+1:e.length;t(e.substring(o))},n.onabort=()=>r(new Error("Read aborted")),n.onerror=()=>r(n.error),n.readAsDataURL(e)}))}(e),r=Dr(t);return new Uint8Array(r)}(e):async function(e){const t=[],r=e.getReader();let n=!1,i=0;for(;!n;){const{done:e,value:o}=await r.read();o&&(t.push(o),i+=o.length),n=e}const o=new Uint8Array(i);let s=0;for(const e of t)o.set(e,s),s+=e.length;return o}(e);const Jr={},Qr={};for(let e=0;e<256;e++){let t=e.toString(16).toLowerCase();1===t.length&&(t=`0${t}`),Jr[e]=t,Qr[t]=e}function Zr(e){let t="";for(let r=0;r<e.byteLength;r++)t+=Jr[e[r]];return t}class en{constructor(){this.middlewareStack=Or()}static classBuilder(){return new tn}resolveMiddlewareWithContext(e,t,r,{middlewareFn:n,clientName:i,commandName:o,inputFilterSensitiveLog:s,outputFilterSensitiveLog:a,smithyContext:c,additionalContext:d,CommandCtor:l}){for(const i of n.bind(this)(l,e,t,r))this.middlewareStack.use(i);const u=e.concat(this.middlewareStack),{logger:p}=t,h={logger:p,clientName:i,commandName:o,inputFilterSensitiveLog:s,outputFilterSensitiveLog:a,[Ee]:{commandInstance:this,...c},...d},{requestHandler:f}=t;return u.resolve((e=>f.handle(e.request,r||{})),h)}}class tn{constructor(){this._init=()=>{},this._ep={},this._middlewareFn=()=>[],this._commandName="",this._clientName="",this._additionalContext={},this._smithyContext={},this._inputFilterSensitiveLog=e=>e,this._outputFilterSensitiveLog=e=>e,this._serializer=null,this._deserializer=null}init(e){this._init=e}ep(e){return this._ep=e,this}m(e){return this._middlewareFn=e,this}s(e,t,r={}){return this._smithyContext={service:e,operation:t,...r},this}c(e={}){return this._additionalContext=e,this}n(e,t){return this._clientName=e,this._commandName=t,this}f(e=e=>e,t=e=>e){return this._inputFilterSensitiveLog=e,this._outputFilterSensitiveLog=t,this}ser(e){return this._serializer=e,this}de(e){return this._deserializer=e,this}build(){const e=this;let t;return t=class extends en{static getEndpointParameterInstructions(){return e._ep}constructor(...[t]){super(),this.serialize=e._serializer,this.deserialize=e._deserializer,this.input=t??{},e._init(this)}resolveMiddleware(r,n,i){return this.resolveMiddlewareWithContext(r,n,i,{CommandCtor:t,middlewareFn:e._middlewareFn,clientName:e._clientName,commandName:e._commandName,inputFilterSensitiveLog:e._inputFilterSensitiveLog,outputFilterSensitiveLog:e._outputFilterSensitiveLog,smithyContext:e._smithyContext,additionalContext:e._additionalContext})}}}}const rn="***SensitiveInformation***",nn=e=>{if(null!=e){if("number"==typeof e){if(0!==e&&1!==e||gn.warn(mn(`Expected boolean, got ${typeof e}: ${e}`)),0===e)return!1;if(1===e)return!0}if("string"==typeof e){const t=e.toLowerCase();if("false"!==t&&"true"!==t||gn.warn(mn(`Expected boolean, got ${typeof e}: ${e}`)),"false"===t)return!1;if("true"===t)return!0}if("boolean"==typeof e)return e;throw new TypeError(`Expected boolean, got ${typeof e}: ${e}`)}},on=e=>{if(null!=e){if("string"==typeof e){const t=parseFloat(e);if(!Number.isNaN(t))return String(t)!==String(e)&&gn.warn(mn(`Expected number but observed string: ${e}`)),t}if("number"==typeof e)return e;throw new TypeError(`Expected number, got ${typeof e}: ${e}`)}},sn=e=>an(e,32),an=(e,t)=>{const r=(e=>{if(null!=e){if(Number.isInteger(e)&&!Number.isNaN(e))return e;throw new TypeError(`Expected integer, got ${typeof e}: ${e}`)}})(e);if(void 0!==r&&cn(r,t)!==r)throw new TypeError(`Expected ${t}-bit integer, got ${e}`);return r},cn=(e,t)=>{switch(t){case 32:return Int32Array.of(e)[0];case 16:return Int16Array.of(e)[0];case 8:return Int8Array.of(e)[0]}},dn=e=>{if(null!=e){if("string"==typeof e)return e;if(["boolean","number","bigint"].includes(typeof e))return gn.warn(mn(`Expected string, got ${typeof e}: ${e}`)),String(e);throw new TypeError(`Expected string, got ${typeof e}: ${e}`)}},ln=e=>{if(null==e)return;const t=(e=>{if(null==e)return;if("object"==typeof e&&!Array.isArray(e))return e;const t=Array.isArray(e)?"array":typeof e;throw new TypeError(`Expected object, got ${t}: ${e}`)})(e),r=Object.entries(t).filter((([,e])=>null!=e)).map((([e])=>e));if(0===r.length)throw new TypeError("Unions must have exactly one non-null member. None were found.");if(r.length>1)throw new TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);return t},un=/(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,pn=e=>{const t=e.match(un);if(null===t||t[0].length!==e.length)throw new TypeError("Expected real number, got implicit NaN");return parseFloat(e)},hn=e=>"string"==typeof e?fn(e):on(e),fn=e=>{switch(e){case"NaN":return NaN;case"Infinity":return 1/0;case"-Infinity":return-1/0;default:throw new Error(`Unable to parse float value: ${e}`)}},mn=e=>String(new TypeError(e).stack||e).split("\n").slice(0,5).filter((e=>!e.includes("stackTraceWarning"))).join("\n"),gn={warn:console.warn},yn=e=>{if(null==e)return;let t;if("number"==typeof e)t=e;else if("string"==typeof e)t=(e=>on("string"==typeof e?pn(e):e))(e);else{if("object"!=typeof e||1!==e.tag)throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");t=e.value}if(Number.isNaN(t)||t===1/0||t===-1/0)throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");return new Date(Math.round(1e3*t))};class wn extends Error{constructor(e){super(e.message),Object.setPrototypeOf(this,wn.prototype),this.name=e.name,this.$fault=e.$fault,this.$metadata=e.$metadata}}const bn=(e,t={})=>{Object.entries(t).filter((([,e])=>void 0!==e)).forEach((([t,r])=>{null!=e[t]&&""!==e[t]||(e[t]=r)}));const r=e.message||e.Message||"UnknownError";return e.message=r,delete e.Message,e},vn=e=>({output:t,parsedBody:r,errorCode:n})=>{(({output:e,parsedBody:t,exceptionCtor:r,errorCode:n})=>{const i=xn(e),o=i.httpStatusCode?i.httpStatusCode+"":void 0,s=new r({name:t?.code||t?.Code||n||o||"UnknownError",$fault:"client",$metadata:i});throw bn(s,t)})({output:t,parsedBody:r,exceptionCtor:e,errorCode:n})},xn=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),En=e=>{switch(e){case"standard":case"cross-region":return{retryMode:"standard",connectionTimeout:3100};case"in-region":return{retryMode:"standard",connectionTimeout:1100};case"mobile":return{retryMode:"standard",connectionTimeout:3e4};default:return{}}},Sn=e=>{const t=[];for(const r in ve){const n=ve[r];void 0!==e[n]&&t.push({algorithmId:()=>n,checksumConstructor:()=>e[n]})}return{_checksumAlgorithms:t,addChecksumAlgorithm(e){this._checksumAlgorithms.push(e)},checksumAlgorithms(){return this._checksumAlgorithms}}},kn=e=>{const t={};return e.checksumAlgorithms().forEach((e=>{t[e.algorithmId()]=e.checksumConstructor()})),t},An=e=>{let t=e.retryStrategy;return{setRetryStrategy(e){t=e},retryStrategy:()=>t}},Pn=e=>{const t={};return t.retryStrategy=e.retryStrategy(),t},$n=e=>({...Sn(e),...An(e)}),Cn=e=>({...kn(e),...Pn(e)}),In=function(){const e=Object.getPrototypeOf(this).constructor,t=new(Function.bind.apply(String,[null,...arguments]));return Object.setPrototypeOf(t,e.prototype),t};In.prototype=Object.create(String.prototype,{constructor:{value:In,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(In,String);const On=(e,t)=>{const r={};for(const n in t)Rn(r,e,t,n);return r},Rn=(e,t,r,n)=>{if(null!==t){let i=r[n];"function"==typeof i&&(i=[,i]);const[o=Mn,s=Tn,a=n]=i;return void(("function"==typeof o&&o(t[a])||"function"!=typeof o&&o)&&(e[n]=s(t[a])))}let[i,o]=r[n];if("function"==typeof o){let t;const r=void 0===i&&null!=(t=o()),s="function"==typeof i&&!!i(void 0)||"function"!=typeof i&&!!i;r?e[n]=t:s&&(e[n]=o())}else{const t=void 0===i&&null!=o,r="function"==typeof i&&!!i(o)||"function"!=typeof i&&!!i;(t||r)&&(e[n]=o)}},Mn=e=>null!=e,Tn=e=>e,_n=e=>{if(null==e)return{};if(Array.isArray(e))return e.filter((e=>null!=e)).map(_n);if("object"==typeof e){const t={};for(const r of Object.keys(e))null!=e[r]&&(t[r]=_n(e[r]));return t}return e},Un=e=>e?.body instanceof ReadableStream,Nn=e=>void 0!==e.acquireInitialRetryToken&&void 0!==e.refreshRetryTokenForRetry&&void 0!==e.recordSuccess,Fn=e=>{const t={error:e,errorType:zn(e)},r=Ln(e.$response);return r&&(t.retryAfterHint=r),t},zn=e=>fr(e)?"THROTTLING":mr(e)?"TRANSIENT":(e=>{if(void 0!==e.$metadata?.httpStatusCode){const t=e.$metadata.httpStatusCode;return 500<=t&&t<=599&&!mr(e)}return!1})(e)?"SERVER_ERROR":"CLIENT_ERROR",Dn={name:"retryMiddleware",tags:["RETRY"],step:"finalizeRequest",priority:"high",override:!0},jn=e=>({applyToStack:t=>{t.add((e=>(t,r)=>async n=>{let i=await e.retryStrategy();const o=await e.maxAttempts();if(!Nn(i))return i?.mode&&(r.userAgent=[...r.userAgent||[],["cfg/retry-mode",i.mode]]),i.retry(t,n);{let e=await i.acquireInitialRetryToken(r.partition_id),a=new Error,c=0,d=0;const{request:l}=n,u=Ae.isInstance(l);for(u&&(l.headers["amz-sdk-invocation-id"]=Ar());;)try{u&&(l.headers["amz-sdk-request"]=`attempt=${c+1}; max=${o}`);const{response:r,output:s}=await t(n);return i.recordSuccess(e),s.$metadata.attempts=c+1,s.$metadata.totalRetryDelay=d,{response:r,output:s}}catch(t){const n=Fn(t);if(a=(s=t)instanceof Error?s:s instanceof Object?Object.assign(new Error,s):"string"==typeof s?new Error(s):new Error(`AWS SDK error wrapper for ${s}`),u&&Un(l))throw(r.logger instanceof $r?console:r.logger)?.warn("An error was encountered in a non-retryable streaming request."),a;try{e=await i.refreshRetryTokenForRetry(e,n)}catch(e){throw a.$metadata||(a.$metadata={}),a.$metadata.attempts=c+1,a.$metadata.totalRetryDelay=d,a}c=e.getRetryCount();const o=e.getRetryDelay();d+=o,await new Promise((e=>setTimeout(e,o)))}}var s})(e),Dn)}}),Ln=e=>{if(!Pe.isInstance(e))return;const t=Object.keys(e.headers).find((e=>"retry-after"===e.toLowerCase()));if(!t)return;const r=e.headers[t],n=Number(r);if(!Number.isNaN(n))return new Date(1e3*n);return new Date(r)},Bn={step:"finalizeRequest",tags:["HTTP_SIGNING"],name:"httpSigningMiddleware",aliases:["apiKeyMiddleware","tokenMiddleware","awsAuthMiddleware"],override:!0,relation:"after",toMiddleware:Dn.name},Hn=e=>({applyToStack:e=>{e.addRelativeTo(((e,t)=>async r=>{if(!Ae.isInstance(r.request))return e(r);const n=Nt(t).selectedHttpAuthScheme;if(!n)throw new Error("No HttpAuthScheme was selected: unable to sign request");const{httpAuthOption:{signingProperties:i={}},identity:o,signer:s}=n,a=await e({...r,request:await s.sign(r.request,o,i)}).catch((s.errorHandler||sr)(i));return(s.successHandler||ar)(a.response,i),a}),Bn)}});class qn{constructor(e){this.authSchemes=new Map;for(const[t,r]of Object.entries(e))void 0!==r&&this.authSchemes.set(t,r)}getIdentityProvider(e){return this.authSchemes.get(e)}}class Vn{async sign(e,t,r){return e}}const Wn=(Gn=3e5,e=>Kn(e)&&e.expiration.getTime()-Date.now()<Gn);var Gn;const Kn=e=>void 0!==e.expiration,Xn=e=>{if("function"==typeof e)return e;const t=Promise.resolve(e);return()=>t},Yn="content-length";const Jn={step:"build",tags:["SET_CONTENT_LENGTH","CONTENT_LENGTH"],name:"contentLengthMiddleware",override:!0},Qn=e=>({applyToStack:t=>{var r;t.add((r=e.bodyLengthChecker,e=>async t=>{const n=t.request;if(Ae.isInstance(n)){const{body:e,headers:t}=n;if(e&&-1===Object.keys(t).map((e=>e.toLowerCase())).indexOf(Yn))try{const t=r(e);n.headers={...n.headers,[Yn]:String(t)}}catch(e){}}return e({...t,request:n})}),Jn)}}),Zn=e=>Pe.isInstance(e)?e.headers?.date??e.headers?.Date:void 0,ei=e=>new Date(Date.now()+e),ti=(e,t)=>{const r=Date.parse(e);return((e,t)=>Math.abs(ei(t).getTime()-e)>=3e5)(r,t)?r-Date.now():t},ri=(e,t)=>{if(!t)throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);return t};class ni{async sign(e,t,r){if(!Ae.isInstance(e))throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");const n=await(async e=>{const t=ri("context",e.context),r=ri("config",e.config),n=t.endpointV2?.properties?.authSchemes?.[0],i=ri("signer",r.signer),o=await i(n),s=e?.signingRegion,a=e?.signingRegionSet,c=e?.signingName;return{config:r,signer:o,signingRegion:s,signingRegionSet:a,signingName:c}})(r),{config:i,signer:o}=n;let{signingRegion:s,signingName:a}=n;const c=r.context;if(c?.authSchemes?.length){const[e,t]=c.authSchemes;"sigv4a"===e?.name&&"sigv4"===t?.name&&(s=t?.signingRegion??s,a=t?.signingName??a)}return await o.sign(e,{signingDate:ei(i.systemClockOffset),signingRegion:s,signingService:a})}errorHandler(e){return t=>{const r=t.ServerTime??Zn(t.$response);if(r){const n=ri("config",e.config),i=n.systemClockOffset;n.systemClockOffset=ti(r,n.systemClockOffset);n.systemClockOffset!==i&&t.$metadata&&(t.$metadata.clockSkewCorrected=!0)}throw t}}successHandler(e,t){const r=Zn(e);if(r){const e=ri("config",t.config);e.systemClockOffset=ti(r,e.systemClockOffset)}}}class ii extends Error{constructor(e,t=!0){let r,n=!0;"boolean"==typeof t?(r=void 0,n=t):null!=t&&"object"==typeof t&&(r=t.logger,n=t.tryNextLink??!0),super(e),this.name="ProviderError",this.tryNextLink=n,Object.setPrototypeOf(this,ii.prototype),r?.debug?.(`@smithy/property-provider ${n?"->":"(!)"} ${e}`)}static from(e,t=!0){return Object.assign(new this(e.message,t),e)}}class oi extends ii{constructor(e,t=!0){super(e,t),this.name="CredentialsProviderError",Object.setPrototypeOf(this,oi.prototype)}}const si=(e,t,r)=>{let n,i,o,s=!1;return async t=>(o&&!t?.forceRefresh||(n=await(async()=>{i||(i=e());try{n=await i,o=!0,s=!1}finally{i=void 0}return n})()),n)},ai="X-Amz-Date",ci="X-Amz-Signature",di="X-Amz-Security-Token",li="authorization",ui=ai.toLowerCase(),pi=[li,ui,"date"],hi=ci.toLowerCase(),fi="x-amz-content-sha256",mi=di.toLowerCase(),gi={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},yi=/^proxy-/,wi=/^sec-/,bi="AWS4-HMAC-SHA256",vi="AWS4-HMAC-SHA256-PAYLOAD",xi="aws4_request",Ei={},Si=[],ki=(e,t,r)=>`${e}/${t}/${r}/${xi}`,Ai=(e,t,r)=>{const n=new e(t);return n.update(Lr(r)),n.digest()},Pi=({headers:e},t,r)=>{const n={};for(const i of Object.keys(e).sort()){if(null==e[i])continue;const o=i.toLowerCase();(o in gi||t?.has(o)||yi.test(o)||wi.test(o))&&(!r||r&&!r.has(o))||(n[o]=e[i].trim().replace(/\s+/g," "))}return n},$i=async({headers:e,body:t},r)=>{for(const t of Object.keys(e))if(t.toLowerCase()===fi)return e[t];if(null==t)return"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";if("string"==typeof t||ArrayBuffer.isView(t)||(n=t,"function"==typeof ArrayBuffer&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(n))){const e=new r;return e.update(Lr(t)),Zr(await e.digest())}var n;return"UNSIGNED-PAYLOAD"};class Ci{format(e){const t=[];for(const r of Object.keys(e)){const n=jr(r);t.push(Uint8Array.from([n.byteLength]),n,this.formatHeaderValue(e[r]))}const r=new Uint8Array(t.reduce(((e,t)=>e+t.byteLength),0));let n=0;for(const e of t)r.set(e,n),n+=e.byteLength;return r}formatHeaderValue(e){switch(e.type){case"boolean":return Uint8Array.from([e.value?0:1]);case"byte":return Uint8Array.from([2,e.value]);case"short":const t=new DataView(new ArrayBuffer(3));return t.setUint8(0,3),t.setInt16(1,e.value,!1),new Uint8Array(t.buffer);case"integer":const r=new DataView(new ArrayBuffer(5));return r.setUint8(0,4),r.setInt32(1,e.value,!1),new Uint8Array(r.buffer);case"long":const n=new Uint8Array(9);return n[0]=5,n.set(e.value.bytes,1),n;case"binary":const i=new DataView(new ArrayBuffer(3+e.value.byteLength));i.setUint8(0,6),i.setUint16(1,e.value.byteLength,!1);const o=new Uint8Array(i.buffer);return o.set(e.value,3),o;case"string":const s=jr(e.value),a=new DataView(new ArrayBuffer(3+s.byteLength));a.setUint8(0,7),a.setUint16(1,s.byteLength,!1);const c=new Uint8Array(a.buffer);return c.set(s,3),c;case"timestamp":const d=new Uint8Array(9);return d[0]=8,d.set(Ri.fromNumber(e.value.valueOf()).bytes,1),d;case"uuid":if(!Oi.test(e.value))throw new Error(`Invalid UUID received: ${e.value}`);const l=new Uint8Array(17);return l[0]=9,l.set(function(e){if(e.length%2!=0)throw new Error("Hex encoded strings must have an even number length");const t=new Uint8Array(e.length/2);for(let r=0;r<e.length;r+=2){const n=e.slice(r,r+2).toLowerCase();if(!(n in Qr))throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);t[r/2]=Qr[n]}return t}(e.value.replace(/\-/g,"")),1),l}}}var Ii;!function(e){e[e.boolTrue=0]="boolTrue",e[e.boolFalse=1]="boolFalse",e[e.byte=2]="byte",e[e.short=3]="short",e[e.integer=4]="integer",e[e.long=5]="long",e[e.byteArray=6]="byteArray",e[e.string=7]="string",e[e.timestamp=8]="timestamp",e[e.uuid=9]="uuid"}(Ii||(Ii={}));const Oi=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;class Ri{constructor(e){if(this.bytes=e,8!==e.byteLength)throw new Error("Int64 buffers must be exactly 8 bytes")}static fromNumber(e){if(e>0x8000000000000000||e<-0x8000000000000000)throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);const t=new Uint8Array(8);for(let r=7,n=Math.abs(Math.round(e));r>-1&&n>0;r--,n/=256)t[r]=n;return e<0&&Mi(t),new Ri(t)}valueOf(){const e=this.bytes.slice(0),t=128&e[0];return t&&Mi(e),parseInt(Zr(e),16)*(t?-1:1)}toString(){return String(this.valueOf())}}function Mi(e){for(let t=0;t<8;t++)e[t]^=255;for(let t=7;t>-1&&(e[t]++,0===e[t]);t--);}const Ti=e=>{e=Ae.clone(e);for(const t of Object.keys(e.headers))pi.indexOf(t.toLowerCase())>-1&&delete e.headers[t];return e},_i=e=>"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e;class Ui{constructor({applyChecksum:e,credentials:t,region:r,service:n,sha256:i,uriEscapePath:o=!0}){this.headerFormatter=new Ci,this.service=n,this.sha256=i,this.uriEscapePath=o,this.applyChecksum="boolean"!=typeof e||e,this.regionProvider=Ft(r),this.credentialProvider=Ft(t)}async presign(e,t={}){const{signingDate:r=new Date,expiresIn:n=3600,unsignableHeaders:i,unhoistableHeaders:o,signableHeaders:s,signingRegion:a,signingService:c}=t,d=await this.credentialProvider();this.validateResolvedCredentials(d);const l=a??await this.regionProvider(),{longDate:u,shortDate:p}=Ni(r);if(n>604800)return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");const h=ki(p,l,c??this.service),f=((e,t={})=>{const{headers:r,query:n={}}=Ae.clone(e);for(const e of Object.keys(r)){const i=e.toLowerCase();"x-amz-"!==i.slice(0,6)||t.unhoistableHeaders?.has(i)||(n[e]=r[e],delete r[e])}return{...e,headers:r,query:n}})(Ti(e),{unhoistableHeaders:o});d.sessionToken&&(f.query[di]=d.sessionToken),f.query["X-Amz-Algorithm"]=bi,f.query["X-Amz-Credential"]=`${d.accessKeyId}/${h}`,f.query[ai]=u,f.query["X-Amz-Expires"]=n.toString(10);const m=Pi(f,i,s);return f.query["X-Amz-SignedHeaders"]=Fi(m),f.query[ci]=await this.getSignature(u,h,this.getSigningKey(d,l,p,c),this.createCanonicalRequest(f,m,await $i(e,this.sha256))),f}async sign(e,t){return"string"==typeof e?this.signString(e,t):e.headers&&e.payload?this.signEvent(e,t):e.message?this.signMessage(e,t):this.signRequest(e,t)}async signEvent({headers:e,payload:t},{signingDate:r=new Date,priorSignature:n,signingRegion:i,signingService:o}){const s=i??await this.regionProvider(),{shortDate:a,longDate:c}=Ni(r),d=ki(a,s,o??this.service),l=await $i({headers:{},body:t},this.sha256),u=new this.sha256;u.update(e);const p=Zr(await u.digest()),h=[vi,c,d,n,p,l].join("\n");return this.signString(h,{signingDate:r,signingRegion:s,signingService:o})}async signMessage(e,{signingDate:t=new Date,signingRegion:r,signingService:n}){return this.signEvent({headers:this.headerFormatter.format(e.message.headers),payload:e.message.body},{signingDate:t,signingRegion:r,signingService:n,priorSignature:e.priorSignature}).then((t=>({message:e.message,signature:t})))}async signString(e,{signingDate:t=new Date,signingRegion:r,signingService:n}={}){const i=await this.credentialProvider();this.validateResolvedCredentials(i);const o=r??await this.regionProvider(),{shortDate:s}=Ni(t),a=new this.sha256(await this.getSigningKey(i,o,s,n));return a.update(Lr(e)),Zr(await a.digest())}async signRequest(e,{signingDate:t=new Date,signableHeaders:r,unsignableHeaders:n,signingRegion:i,signingService:o}={}){const s=await this.credentialProvider();this.validateResolvedCredentials(s);const a=i??await this.regionProvider(),c=Ti(e),{longDate:d,shortDate:l}=Ni(t),u=ki(l,a,o??this.service);c.headers[ui]=d,s.sessionToken&&(c.headers[mi]=s.sessionToken);const p=await $i(c,this.sha256);!((e,t)=>{e=e.toLowerCase();for(const r of Object.keys(t))if(e===r.toLowerCase())return!0;return!1})(fi,c.headers)&&this.applyChecksum&&(c.headers[fi]=p);const h=Pi(c,n,r),f=await this.getSignature(d,u,this.getSigningKey(s,a,l,o),this.createCanonicalRequest(c,h,p));return c.headers[li]=`${bi} Credential=${s.accessKeyId}/${u}, SignedHeaders=${Fi(h)}, Signature=${f}`,c}createCanonicalRequest(e,t,r){const n=Object.keys(t).sort();return`${e.method}\n${this.getCanonicalPath(e)}\n${(({query:e={}})=>{const t=[],r={};for(const n of Object.keys(e).sort()){if(n.toLowerCase()===hi)continue;t.push(n);const i=e[n];"string"==typeof i?r[n]=`${Vr(n)}=${Vr(i)}`:Array.isArray(i)&&(r[n]=i.slice(0).reduce(((e,t)=>e.concat([`${Vr(n)}=${Vr(t)}`])),[]).sort().join("&"))}return t.map((e=>r[e])).filter((e=>e)).join("&")})(e)}\n${n.map((e=>`${e}:${t[e]}`)).join("\n")}\n\n${n.join(";")}\n${r}`}async createStringToSign(e,t,r){const n=new this.sha256;n.update(Lr(r));const i=await n.digest();return`${bi}\n${e}\n${t}\n${Zr(i)}`}getCanonicalPath({path:e}){if(this.uriEscapePath){const t=[];for(const r of e.split("/"))0!==r?.length&&"."!==r&&(".."===r?t.pop():t.push(r));const r=`${e?.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&e?.endsWith("/")?"/":""}`;return Vr(r).replace(/%2F/g,"/")}return e}async getSignature(e,t,r,n){const i=await this.createStringToSign(e,t,n),o=new this.sha256(await r);return o.update(Lr(i)),Zr(await o.digest())}getSigningKey(e,t,r,n){return(async(e,t,r,n,i)=>{const o=`${r}:${n}:${i}:${Zr(await Ai(e,t.secretAccessKey,t.accessKeyId))}:${t.sessionToken}`;if(o in Ei)return Ei[o];for(Si.push(o);Si.length>50;)delete Ei[Si.shift()];let s=`AWS4${t.secretAccessKey}`;for(const t of[r,n,i,xi])s=await Ai(e,s,t);return Ei[o]=s})(this.sha256,e,r,t,n||this.service)}validateResolvedCredentials(e){if("object"!=typeof e||"string"!=typeof e.accessKeyId||"string"!=typeof e.secretAccessKey)throw new Error("Resolved credential object is not valid")}}const Ni=e=>{const t=(r=e,_i(r).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[\-:]/g,"");var r;return{longDate:t,shortDate:t.slice(0,8)}},Fi=e=>Object.keys(e).sort().join(";"),zi=e=>{let t;e.credentials&&(t=((e,t,r)=>{if(void 0===e)return;const n="function"!=typeof e?async()=>Promise.resolve(e):e;let i,o,s,a=!1;const c=async e=>{o||(o=n(e));try{i=await o,s=!0,a=!1}finally{o=void 0}return i};return void 0===t?async e=>(s&&!e?.forceRefresh||(i=await c(e)),i):async e=>(s&&!e?.forceRefresh||(i=await c(e)),a?i:r(i)?t(i)?(await c(e),i):i:(a=!0,i))})(e.credentials,Wn,Kn)),t||(t=e.credentialDefaultProvider?Xn(e.credentialDefaultProvider(Object.assign({},e,{parentClientConfig:e}))):async()=>{throw new Error("`credentials` is missing")});const{signingEscapePath:r=!0,systemClockOffset:n=e.systemClockOffset||0,sha256:i}=e;let o;return o=e.signer?Xn(e.signer):e.regionInfoProvider?()=>Xn(e.region)().then((async t=>[await e.regionInfoProvider(t,{useFipsEndpoint:await e.useFipsEndpoint(),useDualstackEndpoint:await e.useDualstackEndpoint()})||{},t])).then((([n,o])=>{const{signingRegion:s,signingService:a}=n;e.signingRegion=e.signingRegion||s||o,e.signingName=e.signingName||a||e.serviceId;const c={...e,credentials:t,region:e.signingRegion,service:e.signingName,sha256:i,uriEscapePath:r};return new(e.signerConstructor||Ui)(c)})):async n=>{const o=(n=Object.assign({},{name:"sigv4",signingName:e.signingName||e.defaultSigningName,signingRegion:await Xn(e.region)(),properties:{}},n)).signingRegion,s=n.signingName;e.signingRegion=e.signingRegion||o,e.signingName=e.signingName||s||e.serviceId;const a={...e,credentials:t,region:e.signingRegion,service:e.signingName,sha256:i,uriEscapePath:r};return new(e.signerConstructor||Ui)(a)},{...e,systemClockOffset:n,signingEscapePath:r,credentials:t,signer:o}},Di=e=>{if(null!=e)return"object"==typeof e&&"__type"in e&&delete e.__type,ln(e)},ji=(e,t)=>(async(e=new Uint8Array,t)=>{if(e instanceof Uint8Array)return qr.mutate(e);if(!e)return qr.mutate(new Uint8Array);const r=t.streamCollector(e);return qr.mutate(await r)})(e,t).then((e=>t.utf8Encoder(e))),Li=(e,t)=>ji(e,t).then((e=>{if(e.length)try{return JSON.parse(e)}catch(t){throw"SyntaxError"===t?.name&&Object.defineProperty(t,"$responseBodyText",{value:e}),t}return{}})),Bi=async(e,t)=>{const r=await Li(e,t);return r.message=r.message??r.Message,r},Hi=(e,t)=>{const r=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},n=(i=e.headers,o="x-amzn-errortype",Object.keys(i).find((e=>e.toLowerCase()===o.toLowerCase())));var i,o;return void 0!==n?r(e.headers[n]):void 0!==t.code?r(t.code):void 0!==t.__type?r(t.__type):void 0},qi=async(e,t,r)=>({operation:Nt(t).operation,region:await Ft(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});const Vi=e=>{const t=[];return e.operation,t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"dynamodb",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e)),t},Wi={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};class Gi extends wn{constructor(e){super(e),Object.setPrototypeOf(this,Gi.prototype)}}class Ki extends Gi{constructor(e){super({name:"BackupInUseException",$fault:"client",...e}),this.name="BackupInUseException",this.$fault="client",Object.setPrototypeOf(this,Ki.prototype)}}class Xi extends Gi{constructor(e){super({name:"BackupNotFoundException",$fault:"client",...e}),this.name="BackupNotFoundException",this.$fault="client",Object.setPrototypeOf(this,Xi.prototype)}}class Yi extends Gi{constructor(e){super({name:"InternalServerError",$fault:"server",...e}),this.name="InternalServerError",this.$fault="server",Object.setPrototypeOf(this,Yi.prototype)}}class Ji extends Gi{constructor(e){super({name:"RequestLimitExceeded",$fault:"client",...e}),this.name="RequestLimitExceeded",this.$fault="client",Object.setPrototypeOf(this,Ji.prototype)}}class Qi extends Gi{constructor(e){super({name:"InvalidEndpointException",$fault:"client",...e}),this.name="InvalidEndpointException",this.$fault="client",Object.setPrototypeOf(this,Qi.prototype),this.Message=e.Message}}class Zi extends Gi{constructor(e){super({name:"ProvisionedThroughputExceededException",$fault:"client",...e}),this.name="ProvisionedThroughputExceededException",this.$fault="client",Object.setPrototypeOf(this,Zi.prototype)}}let eo=class e extends Gi{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}};class to extends Gi{constructor(e){super({name:"ItemCollectionSizeLimitExceededException",$fault:"client",...e}),this.name="ItemCollectionSizeLimitExceededException",this.$fault="client",Object.setPrototypeOf(this,to.prototype)}}class ro extends Gi{constructor(e){super({name:"ContinuousBackupsUnavailableException",$fault:"client",...e}),this.name="ContinuousBackupsUnavailableException",this.$fault="client",Object.setPrototypeOf(this,ro.prototype)}}let no=class e extends Gi{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}};class io extends Gi{constructor(e){super({name:"TableInUseException",$fault:"client",...e}),this.name="TableInUseException",this.$fault="client",Object.setPrototypeOf(this,io.prototype)}}class oo extends Gi{constructor(e){super({name:"TableNotFoundException",$fault:"client",...e}),this.name="TableNotFoundException",this.$fault="client",Object.setPrototypeOf(this,oo.prototype)}}class so extends Gi{constructor(e){super({name:"GlobalTableAlreadyExistsException",$fault:"client",...e}),this.name="GlobalTableAlreadyExistsException",this.$fault="client",Object.setPrototypeOf(this,so.prototype)}}class ao extends Gi{constructor(e){super({name:"ResourceInUseException",$fault:"client",...e}),this.name="ResourceInUseException",this.$fault="client",Object.setPrototypeOf(this,ao.prototype)}}class co extends Gi{constructor(e){super({name:"TransactionConflictException",$fault:"client",...e}),this.name="TransactionConflictException",this.$fault="client",Object.setPrototypeOf(this,co.prototype)}}class lo extends Gi{constructor(e){super({name:"PolicyNotFoundException",$fault:"client",...e}),this.name="PolicyNotFoundException",this.$fault="client",Object.setPrototypeOf(this,lo.prototype)}}class uo extends Gi{constructor(e){super({name:"ExportNotFoundException",$fault:"client",...e}),this.name="ExportNotFoundException",this.$fault="client",Object.setPrototypeOf(this,uo.prototype)}}class po extends Gi{constructor(e){super({name:"GlobalTableNotFoundException",$fault:"client",...e}),this.name="GlobalTableNotFoundException",this.$fault="client",Object.setPrototypeOf(this,po.prototype)}}class ho extends Gi{constructor(e){super({name:"ImportNotFoundException",$fault:"client",...e}),this.name="ImportNotFoundException",this.$fault="client",Object.setPrototypeOf(this,ho.prototype)}}class fo extends Gi{constructor(e){super({name:"DuplicateItemException",$fault:"client",...e}),this.name="DuplicateItemException",this.$fault="client",Object.setPrototypeOf(this,fo.prototype)}}class mo extends Gi{constructor(e){super({name:"IdempotentParameterMismatchException",$fault:"client",...e}),this.name="IdempotentParameterMismatchException",this.$fault="client",Object.setPrototypeOf(this,mo.prototype),this.Message=e.Message}}class go extends Gi{constructor(e){super({name:"TransactionInProgressException",$fault:"client",...e}),this.name="TransactionInProgressException",this.$fault="client",Object.setPrototypeOf(this,go.prototype),this.Message=e.Message}}class yo extends Gi{constructor(e){super({name:"ExportConflictException",$fault:"client",...e}),this.name="ExportConflictException",this.$fault="client",Object.setPrototypeOf(this,yo.prototype)}}class wo extends Gi{constructor(e){super({name:"InvalidExportTimeException",$fault:"client",...e}),this.name="InvalidExportTimeException",this.$fault="client",Object.setPrototypeOf(this,wo.prototype)}}class bo extends Gi{constructor(e){super({name:"PointInTimeRecoveryUnavailableException",$fault:"client",...e}),this.name="PointInTimeRecoveryUnavailableException",this.$fault="client",Object.setPrototypeOf(this,bo.prototype)}}class vo extends Gi{constructor(e){super({name:"ImportConflictException",$fault:"client",...e}),this.name="ImportConflictException",this.$fault="client",Object.setPrototypeOf(this,vo.prototype)}}class xo extends Gi{constructor(e){super({name:"TableAlreadyExistsException",$fault:"client",...e}),this.name="TableAlreadyExistsException",this.$fault="client",Object.setPrototypeOf(this,xo.prototype)}}class Eo extends Gi{constructor(e){super({name:"InvalidRestoreTimeException",$fault:"client",...e}),this.name="InvalidRestoreTimeException",this.$fault="client",Object.setPrototypeOf(this,Eo.prototype)}}class So extends Gi{constructor(e){super({name:"ReplicaAlreadyExistsException",$fault:"client",...e}),this.name="ReplicaAlreadyExistsException",this.$fault="client",Object.setPrototypeOf(this,So.prototype)}}class ko extends Gi{constructor(e){super({name:"ReplicaNotFoundException",$fault:"client",...e}),this.name="ReplicaNotFoundException",this.$fault="client",Object.setPrototypeOf(this,ko.prototype)}}class Ao extends Gi{constructor(e){super({name:"IndexNotFoundException",$fault:"client",...e}),this.name="IndexNotFoundException",this.$fault="client",Object.setPrototypeOf(this,Ao.prototype)}}var Po;!function(e){e.visit=(e,t)=>void 0!==e.S?t.S(e.S):void 0!==e.N?t.N(e.N):void 0!==e.B?t.B(e.B):void 0!==e.SS?t.SS(e.SS):void 0!==e.NS?t.NS(e.NS):void 0!==e.BS?t.BS(e.BS):void 0!==e.M?t.M(e.M):void 0!==e.L?t.L(e.L):void 0!==e.NULL?t.NULL(e.NULL):void 0!==e.BOOL?t.BOOL(e.BOOL):t._(e.$unknown[0],e.$unknown[1])}(Po||(Po={}));class $o extends Gi{constructor(e){super({name:"ConditionalCheckFailedException",$fault:"client",...e}),this.name="ConditionalCheckFailedException",this.$fault="client",Object.setPrototypeOf(this,$o.prototype),this.Item=e.Item}}class Co extends Gi{constructor(e){super({name:"TransactionCanceledException",$fault:"client",...e}),this.name="TransactionCanceledException",this.$fault="client",Object.setPrototypeOf(this,Co.prototype),this.Message=e.Message,this.CancellationReasons=e.CancellationReasons}}const Io=async(e,t)=>{const r=qs("DescribeEndpoints");let n;return n=JSON.stringify(_n(e)),Hs(t,r,"/",void 0,n)},Oo=async(e,t)=>{const r=qs("PutItem");let n;return n=JSON.stringify(Ss(e,t)),Hs(t,r,"/",void 0,n)},Ro=async(e,t)=>{const r=qs("Query");let n;return n=JSON.stringify(As(e,t)),Hs(t,r,"/",void 0,n)},Mo=async(e,t)=>{if(e.statusCode>=300)return Uo(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:Ls(e),...n}},To=async(e,t)=>{if(e.statusCode>=300)return Uo(e,t);const r=await Li(e.body,t);let n={};n=Fs(r,t);return{$metadata:Ls(e),...n}},_o=async(e,t)=>{if(e.statusCode>=300)return Uo(e,t);const r=await Li(e.body,t);let n={};n=zs(r,t);return{$metadata:Ls(e),...n}},Uo=async(e,t)=>{const r={...e,body:await Bi(e.body,t)},n=Hi(e,r.body);switch(n){case"InternalServerError":case"com.amazonaws.dynamodb#InternalServerError":throw await Xo(r);case"RequestLimitExceeded":case"com.amazonaws.dynamodb#RequestLimitExceeded":throw await ss(r);case"InvalidEndpointException":case"com.amazonaws.dynamodb#InvalidEndpointException":throw await Yo(r);case"ProvisionedThroughputExceededException":case"com.amazonaws.dynamodb#ProvisionedThroughputExceededException":throw await ns(r);case"ResourceNotFoundException":case"com.amazonaws.dynamodb#ResourceNotFoundException":throw await cs(r);case"ItemCollectionSizeLimitExceededException":case"com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":throw await Zo(r);case"BackupInUseException":case"com.amazonaws.dynamodb#BackupInUseException":throw await No(r);case"ContinuousBackupsUnavailableException":case"com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":throw await Do(r);case"LimitExceededException":case"com.amazonaws.dynamodb#LimitExceededException":throw await es(r);case"TableInUseException":case"com.amazonaws.dynamodb#TableInUseException":throw await ls(r);case"TableNotFoundException":case"com.amazonaws.dynamodb#TableNotFoundException":throw await us(r);case"GlobalTableAlreadyExistsException":case"com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":throw await Ho(r);case"ResourceInUseException":case"com.amazonaws.dynamodb#ResourceInUseException":throw await as(r);case"BackupNotFoundException":case"com.amazonaws.dynamodb#BackupNotFoundException":throw await Fo(r);case"ConditionalCheckFailedException":case"com.amazonaws.dynamodb#ConditionalCheckFailedException":throw await zo(r,t);case"TransactionConflictException":case"com.amazonaws.dynamodb#TransactionConflictException":throw await hs(r);case"PolicyNotFoundException":case"com.amazonaws.dynamodb#PolicyNotFoundException":throw await rs(r);case"ExportNotFoundException":case"com.amazonaws.dynamodb#ExportNotFoundException":throw await Bo(r);case"GlobalTableNotFoundException":case"com.amazonaws.dynamodb#GlobalTableNotFoundException":throw await qo(r);case"ImportNotFoundException":case"com.amazonaws.dynamodb#ImportNotFoundException":throw await Go(r);case"DuplicateItemException":case"com.amazonaws.dynamodb#DuplicateItemException":throw await jo(r);case"IdempotentParameterMismatchException":case"com.amazonaws.dynamodb#IdempotentParameterMismatchException":throw await Vo(r);case"TransactionCanceledException":case"com.amazonaws.dynamodb#TransactionCanceledException":throw await ps(r,t);case"TransactionInProgressException":case"com.amazonaws.dynamodb#TransactionInProgressException":throw await fs(r);case"ExportConflictException":case"com.amazonaws.dynamodb#ExportConflictException":throw await Lo(r);case"InvalidExportTimeException":case"com.amazonaws.dynamodb#InvalidExportTimeException":throw await Jo(r);case"PointInTimeRecoveryUnavailableException":case"com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":throw await ts(r);case"ImportConflictException":case"com.amazonaws.dynamodb#ImportConflictException":throw await Wo(r);case"TableAlreadyExistsException":case"com.amazonaws.dynamodb#TableAlreadyExistsException":throw await ds(r);case"InvalidRestoreTimeException":case"com.amazonaws.dynamodb#InvalidRestoreTimeException":throw await Qo(r);case"ReplicaAlreadyExistsException":case"com.amazonaws.dynamodb#ReplicaAlreadyExistsException":throw await is(r);case"ReplicaNotFoundException":case"com.amazonaws.dynamodb#ReplicaNotFoundException":throw await os(r);case"IndexNotFoundException":case"com.amazonaws.dynamodb#IndexNotFoundException":throw await Ko(r);default:const i=r.body;return Bs({output:e,parsedBody:i,errorCode:n})}},No=async(e,t)=>{const r=e.body,n=_n(r),i=new Ki({$metadata:Ls(e),...n});return bn(i,r)},Fo=async(e,t)=>{const r=e.body,n=_n(r),i=new Xi({$metadata:Ls(e),...n});return bn(i,r)},zo=async(e,t)=>{const r=e.body,n=Rs(r,t),i=new $o({$metadata:Ls(e),...n});return bn(i,r)},Do=async(e,t)=>{const r=e.body,n=_n(r),i=new ro({$metadata:Ls(e),...n});return bn(i,r)},jo=async(e,t)=>{const r=e.body,n=_n(r),i=new fo({$metadata:Ls(e),...n});return bn(i,r)},Lo=async(e,t)=>{const r=e.body,n=_n(r),i=new yo({$metadata:Ls(e),...n});return bn(i,r)},Bo=async(e,t)=>{const r=e.body,n=_n(r),i=new uo({$metadata:Ls(e),...n});return bn(i,r)},Ho=async(e,t)=>{const r=e.body,n=_n(r),i=new so({$metadata:Ls(e),...n});return bn(i,r)},qo=async(e,t)=>{const r=e.body,n=_n(r),i=new po({$metadata:Ls(e),...n});return bn(i,r)},Vo=async(e,t)=>{const r=e.body,n=_n(r),i=new mo({$metadata:Ls(e),...n});return bn(i,r)},Wo=async(e,t)=>{const r=e.body,n=_n(r),i=new vo({$metadata:Ls(e),...n});return bn(i,r)},Go=async(e,t)=>{const r=e.body,n=_n(r),i=new ho({$metadata:Ls(e),...n});return bn(i,r)},Ko=async(e,t)=>{const r=e.body,n=_n(r),i=new Ao({$metadata:Ls(e),...n});return bn(i,r)},Xo=async(e,t)=>{const r=e.body,n=_n(r),i=new Yi({$metadata:Ls(e),...n});return bn(i,r)},Yo=async(e,t)=>{const r=e.body,n=_n(r),i=new Qi({$metadata:Ls(e),...n});return bn(i,r)},Jo=async(e,t)=>{const r=e.body,n=_n(r),i=new wo({$metadata:Ls(e),...n});return bn(i,r)},Qo=async(e,t)=>{const r=e.body,n=_n(r),i=new Eo({$metadata:Ls(e),...n});return bn(i,r)},Zo=async(e,t)=>{const r=e.body,n=_n(r),i=new to({$metadata:Ls(e),...n});return bn(i,r)},es=async(e,t)=>{const r=e.body,n=_n(r),i=new no({$metadata:Ls(e),...n});return bn(i,r)},ts=async(e,t)=>{const r=e.body,n=_n(r),i=new bo({$metadata:Ls(e),...n});return bn(i,r)},rs=async(e,t)=>{const r=e.body,n=_n(r),i=new lo({$metadata:Ls(e),...n});return bn(i,r)},ns=async(e,t)=>{const r=e.body,n=_n(r),i=new Zi({$metadata:Ls(e),...n});return bn(i,r)},is=async(e,t)=>{const r=e.body,n=_n(r),i=new So({$metadata:Ls(e),...n});return bn(i,r)},os=async(e,t)=>{const r=e.body,n=_n(r),i=new ko({$metadata:Ls(e),...n});return bn(i,r)},ss=async(e,t)=>{const r=e.body,n=_n(r),i=new Ji({$metadata:Ls(e),...n});return bn(i,r)},as=async(e,t)=>{const r=e.body,n=_n(r),i=new ao({$metadata:Ls(e),...n});return bn(i,r)},cs=async(e,t)=>{const r=e.body,n=_n(r),i=new eo({$metadata:Ls(e),...n});return bn(i,r)},ds=async(e,t)=>{const r=e.body,n=_n(r),i=new xo({$metadata:Ls(e),...n});return bn(i,r)},ls=async(e,t)=>{const r=e.body,n=_n(r),i=new io({$metadata:Ls(e),...n});return bn(i,r)},us=async(e,t)=>{const r=e.body,n=_n(r),i=new oo({$metadata:Ls(e),...n});return bn(i,r)},ps=async(e,t)=>{const r=e.body,n=js(r,t),i=new Co({$metadata:Ls(e),...n});return bn(i,r)},hs=async(e,t)=>{const r=e.body,n=_n(r),i=new co({$metadata:Ls(e),...n});return bn(i,r)},fs=async(e,t)=>{const r=e.body,n=_n(r),i=new go({$metadata:Ls(e),...n});return bn(i,r)},ms=(e,t)=>Po.visit(e,{B:e=>({B:t.base64Encoder(e)}),BOOL:e=>({BOOL:e}),BS:e=>({BS:ys(e,t)}),L:e=>({L:xs(e,t)}),M:e=>({M:Es(e,t)}),N:e=>({N:e}),NS:e=>({NS:_n(e)}),NULL:e=>({NULL:e}),S:e=>({S:e}),SS:e=>({SS:_n(e)}),_:(e,t)=>({name:t})}),gs=(e,t)=>e.filter((e=>null!=e)).map((e=>ms(e,t))),ys=(e,t)=>e.filter((e=>null!=e)).map((e=>t.base64Encoder(e))),ws=(e,t)=>On(e,{AttributeValueList:e=>gs(e,t),ComparisonOperator:[]}),bs=(e,t)=>On(e,{AttributeValueList:e=>gs(e,t),ComparisonOperator:[],Exists:[],Value:e=>ms(e,t)}),vs=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=ms(n,t)),e)),{}),xs=(e,t)=>e.filter((e=>null!=e)).map((e=>ms(e,t))),Es=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=ms(n,t)),e)),{}),Ss=(e,t)=>On(e,{ConditionExpression:[],ConditionalOperator:[],Expected:e=>((e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=bs(n,t)),e)),{}))(e,t),ExpressionAttributeNames:_n,ExpressionAttributeValues:e=>vs(e,t),Item:e=>ks(e,t),ReturnConsumedCapacity:[],ReturnItemCollectionMetrics:[],ReturnValues:[],ReturnValuesOnConditionCheckFailure:[],TableName:[]}),ks=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=ms(n,t)),e)),{}),As=(e,t)=>On(e,{AttributesToGet:_n,ConditionalOperator:[],ConsistentRead:[],ExclusiveStartKey:e=>((e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=ms(n,t)),e)),{}))(e,t),ExpressionAttributeNames:_n,ExpressionAttributeValues:e=>vs(e,t),FilterExpression:[],IndexName:[],KeyConditionExpression:[],KeyConditions:e=>((e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=ws(n,t)),e)),{}))(e,t),Limit:[],ProjectionExpression:[],QueryFilter:e=>((e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=ws(n,t)),e)),{}))(e,t),ReturnConsumedCapacity:[],ScanIndexForward:[],Select:[],TableName:[]}),Ps=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=$s(Di(n),t)),e)),{}),$s=(e,t)=>null!=e.B?{B:t.base64Decoder(e.B)}:void 0!==nn(e.BOOL)?{BOOL:nn(e.BOOL)}:null!=e.BS?{BS:Cs(e.BS,t)}:null!=e.L?{L:Us(e.L,t)}:null!=e.M?{M:Ns(e.M,t)}:void 0!==dn(e.N)?{N:dn(e.N)}:null!=e.NS?{NS:_n(e.NS)}:void 0!==nn(e.NULL)?{NULL:nn(e.NULL)}:void 0!==dn(e.S)?{S:dn(e.S)}:null!=e.SS?{SS:_n(e.SS)}:{$unknown:Object.entries(e)[0]},Cs=(e,t)=>{const r=(e||[]).filter((e=>null!=e)).map((e=>t.base64Decoder(e)));return r},Is=(e,t)=>{const r=(e||[]).filter((e=>null!=e)).map((e=>((e,t)=>On(e,{Code:dn,Item:e=>Ps(e,t),Message:dn}))(e,t)));return r},Os=(e,t)=>On(e,{CapacityUnits:hn,ReadCapacityUnits:hn,WriteCapacityUnits:hn}),Rs=(e,t)=>On(e,{Item:e=>Ps(e,t),message:dn}),Ms=(e,t)=>On(e,{CapacityUnits:hn,GlobalSecondaryIndexes:e=>Ds(e),LocalSecondaryIndexes:e=>Ds(e),ReadCapacityUnits:hn,Table:e=>Os(e),TableName:dn,WriteCapacityUnits:hn}),Ts=(e,t)=>On(e,{ItemCollectionKey:e=>((e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=$s(Di(n),t)),e)),{}))(e,t),SizeEstimateRangeGB:e=>_s(e)}),_s=(e,t)=>{const r=(e||[]).filter((e=>null!=e)).map((e=>hn(e)));return r},Us=(e,t)=>{const r=(e||[]).filter((e=>null!=e)).map((e=>$s(Di(e),t)));return r},Ns=(e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=$s(Di(n),t)),e)),{}),Fs=(e,t)=>On(e,{Attributes:e=>Ps(e,t),ConsumedCapacity:e=>Ms(e),ItemCollectionMetrics:e=>Ts(e,t)}),zs=(e,t)=>On(e,{ConsumedCapacity:e=>Ms(e),Count:sn,Items:e=>((e,t)=>{const r=(e||[]).filter((e=>null!=e)).map((e=>Ps(e,t)));return r})(e,t),LastEvaluatedKey:e=>((e,t)=>Object.entries(e).reduce(((e,[r,n])=>(null===n||(e[r]=$s(Di(n),t)),e)),{}))(e,t),ScannedCount:sn}),Ds=(e,t)=>Object.entries(e).reduce(((e,[t,r])=>(null===r||(e[t]=Os(r)),e)),{}),js=(e,t)=>On(e,{CancellationReasons:e=>Is(e,t),Message:dn}),Ls=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),Bs=vn(Gi),Hs=async(e,t,r,n,i)=>{const{hostname:o,protocol:s="https",port:a,path:c}=await e.endpoint(),d={protocol:s,hostname:o,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+r:c+r,headers:t};return void 0!==i&&(d.body=i),new Ae(d)};function qs(e){return{"content-type":"application/x-amz-json-1.0","x-amz-target":`DynamoDB_20120810.${e}`}}class Vs extends(en.classBuilder().ep({...Wi}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("DynamoDB_20120810","DescribeEndpoints",{}).n("DynamoDBClient","DescribeEndpointsCommand").f(void 0,void 0).ser(Io).de(Mo).build()){}var Ws="3.632.0";var Gs="undefined"!=typeof Buffer&&Buffer.from?function(e){return Buffer.from(e,"utf8")}:e=>(new TextEncoder).encode(e);function Ks(e){return e instanceof Uint8Array?e:"string"==typeof e?Gs(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}function Xs(e){return"string"==typeof e?0===e.length:0===e.byteLength}var Ys={name:"SHA-256"},Js={name:"HMAC",hash:Ys},Qs=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85]);const Zs={};function ea(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:Zs}var ta=function(){function e(e){this.toHash=new Uint8Array(0),this.secret=e,this.reset()}return e.prototype.update=function(e){if(!Xs(e)){var t=Ks(e),r=new Uint8Array(this.toHash.byteLength+t.byteLength);r.set(this.toHash,0),r.set(t,this.toHash.byteLength),this.toHash=r}},e.prototype.digest=function(){var e=this;return this.key?this.key.then((function(t){return ea().crypto.subtle.sign(Js,t,e.toHash).then((function(e){return new Uint8Array(e)}))})):Xs(this.toHash)?Promise.resolve(Qs):Promise.resolve().then((function(){return ea().crypto.subtle.digest(Ys,e.toHash)})).then((function(e){return Promise.resolve(new Uint8Array(e))}))},e.prototype.reset=function(){var e=this;this.toHash=new Uint8Array(0),this.secret&&void 0!==this.secret&&(this.key=new Promise((function(t,r){ea().crypto.subtle.importKey("raw",Ks(e.secret),Js,!1,["sign"]).then(t,r)})),this.key.catch((function(){})))},e}(),ra=64,na=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ia=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],oa=Math.pow(2,53)-1,sa=function(){function e(){this.state=Int32Array.from(ia),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return e.prototype.update=function(e){if(this.finished)throw new Error("Attempted to update an already finished hash.");var t=0,r=e.byteLength;if(this.bytesHashed+=r,8*this.bytesHashed>oa)throw new Error("Cannot hash more than 2^53 - 1 bits");for(;r>0;)this.buffer[this.bufferLength++]=e[t++],r--,this.bufferLength===ra&&(this.hashBuffer(),this.bufferLength=0)},e.prototype.digest=function(){if(!this.finished){var e=8*this.bytesHashed,t=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),r=this.bufferLength;if(t.setUint8(this.bufferLength++,128),r%ra>=56){for(var n=this.bufferLength;n<ra;n++)t.setUint8(n,0);this.hashBuffer(),this.bufferLength=0}for(n=this.bufferLength;n<56;n++)t.setUint8(n,0);t.setUint32(56,Math.floor(e/4294967296),!0),t.setUint32(60,e),this.hashBuffer(),this.finished=!0}var i=new Uint8Array(32);for(n=0;n<8;n++)i[4*n]=this.state[n]>>>24&255,i[4*n+1]=this.state[n]>>>16&255,i[4*n+2]=this.state[n]>>>8&255,i[4*n+3]=this.state[n]>>>0&255;return i},e.prototype.hashBuffer=function(){for(var e=this.buffer,t=this.state,r=t[0],n=t[1],i=t[2],o=t[3],s=t[4],a=t[5],c=t[6],d=t[7],l=0;l<ra;l++){if(l<16)this.temp[l]=(255&e[4*l])<<24|(255&e[4*l+1])<<16|(255&e[4*l+2])<<8|255&e[4*l+3];else{var u=this.temp[l-2],p=(u>>>17|u<<15)^(u>>>19|u<<13)^u>>>10,h=((u=this.temp[l-15])>>>7|u<<25)^(u>>>18|u<<14)^u>>>3;this.temp[l]=(p+this.temp[l-7]|0)+(h+this.temp[l-16]|0)}var f=(((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(s&a^~s&c)|0)+(d+(na[l]+this.temp[l]|0)|0)|0,m=((r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10))+(r&n^r&i^n&i)|0;d=c,c=a,a=s,s=o+f|0,o=i,i=n,n=r,r=f+m|0}t[0]+=r,t[1]+=n,t[2]+=i,t[3]+=o,t[4]+=s,t[5]+=a,t[6]+=c,t[7]+=d},e}(),aa=function(){function e(e){this.secret=e,this.hash=new sa,this.reset()}return e.prototype.update=function(e){if(!Xs(e)&&!this.error)try{this.hash.update(Ks(e))}catch(e){this.error=e}},e.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},e.prototype.digest=function(){return t(this,void 0,void 0,(function(){return r(this,(function(e){return[2,this.digestSync()]}))}))},e.prototype.reset=function(){if(this.hash=new sa,this.secret){this.outer=new sa;var e=function(e){var t=Ks(e);if(t.byteLength>ra){var r=new sa;r.update(t),t=r.digest()}var n=new Uint8Array(ra);return n.set(t),n}(this.secret),t=new Uint8Array(ra);t.set(e);for(var r=0;r<ra;r++)e[r]^=54,t[r]^=92;this.hash.update(e),this.outer.update(t);for(r=0;r<e.byteLength;r++)e[r]=0}},e}();var ca=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function da(e){return!(!function(e){if("object"==typeof e&&"object"==typeof e.crypto){return"function"==typeof e.crypto.getRandomValues}return!1}(e)||"object"!=typeof e.crypto.subtle)&&function(e){return e&&ca.every((function(t){return"function"==typeof e[t]}))}(e.crypto.subtle)}var la,ua=function(){function e(e){da(ea())?this.hash=new ta(e):this.hash=new aa(e)}return e.prototype.update=function(e,t){this.hash.update(Ks(e))},e.prototype.digest=function(){return this.hash.digest()},e.prototype.reset=function(){this.hash.reset()},e}(),pa={exports:{}};var ha=(la||(la=1,pa.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),o=e.getVersionPrecision(r),s=Math.max(i,o),a=0,c=e.map([t,r],(function(t){var r=s-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(a=s-Math.min(i,o)),s-=1;s>=a;){if(c[0][s]>c[1][s])return 1;if(c[0][s]===c[1][s]){if(s===a)return 0;s-=1}else if(c[0][s]<c[1][s])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];if(Object.assign)return Object.assign.apply(Object,[e].concat(o));var a=function(){var e=o[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=o.length;t<r;t+=1)a();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},o=r(18);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return o.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return o.ENGINE_MAP}},{key:"OS_MAP",get:function(){return o.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return o.PLATFORMS_MAP}}],(r=null)&&s(t.prototype,r),n&&s(t,n),e}();t.default=a,e.exports=t.default},91:function(e,t,r){t.__esModule=!0,t.default=void 0;var n=c(r(92)),i=c(r(93)),o=c(r(94)),s=c(r(95)),a=c(r(17));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=a.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=a.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=a.default.find(o.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=a.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return a.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},o=0;if(Object.keys(e).forEach((function(t){var s=e[t];"string"==typeof s?(i[t]=s,o+=1):"object"==typeof s&&(r[t]=s,n+=1)})),n>0){var s=Object.keys(r),c=a.default.find(s,(function(e){return t.isOS(e)}));if(c){var d=this.satisfies(r[c]);if(void 0!==d)return d}var l=a.default.find(s,(function(e){return t.isPlatform(e)}));if(l){var u=this.satisfies(r[l]);if(void 0!==u)return u}}if(o>0){var p=Object.keys(i),h=a.default.find(p,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=a.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(a.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(o,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(o,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=s,e.exports=t.default},93:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=r(18),s=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:o.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:o.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:o.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:o.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:o.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:o.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:o.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:o.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:o.OS_MAP.PlayStation4,version:t}}}];t.default=s,e.exports=t.default},94:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=r(18),s=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}];t.default=s,e.exports=t.default},95:function(e,t,r){t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},o=r(18),s=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:o.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:o.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:o.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:o.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:o.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:o.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=s,e.exports=t.default}})),pa.exports),fa=Re(ha);const ma=({serviceId:e,clientVersion:t})=>async()=>{const r="undefined"!=typeof window&&window?.navigator?.userAgent?fa.parse(window.navigator.userAgent):void 0,n=[["aws-sdk-js",t],["ua","2.0"],[`os/${r?.os?.name||"other"}`,r?.os?.version],["lang/js"],["md/browser",`${r?.browser?.name??"unknown"}_${r?.browser?.version??"unknown"}`]];return e&&n.push([`api/${e}`,t]),n},ga=e=>()=>Promise.reject(e),ya="function"==typeof TextEncoder?new TextEncoder:null,wa=e=>{if("string"==typeof e){if(ya)return ya.encode(e).byteLength;let t=e.length;for(let r=t-1;r>=0;r--){const n=e.charCodeAt(r);n>127&&n<=2047?t++:n>2047&&n<=65535&&(t+=2),n>=56320&&n<=57343&&r--}return t}if("number"==typeof e.byteLength)return e.byteLength;if("number"==typeof e.size)return e.size;throw new Error(`Body Length computation failed for ${e}`)},ba="required",va="fn",xa="argv",Ea="ref",Sa=!0,ka="isSet",Aa="booleanEquals",Pa="error",$a="endpoint",Ca="tree",Ia="PartitionResult",Oa="getAttr",Ra="stringEquals",Ma={[ba]:!1,type:"String"},Ta={[ba]:!0,default:!1,type:"Boolean"},_a={[Ea]:"Endpoint"},Ua={[va]:Aa,[xa]:[{[Ea]:"UseFIPS"},!0]},Na={[va]:Aa,[xa]:[{[Ea]:"UseDualStack"},!0]},Fa={},za={[Ea]:"Region"},Da={[va]:Oa,[xa]:[{[Ea]:Ia},"supportsFIPS"]},ja={[Ea]:Ia},La={[va]:Aa,[xa]:[!0,{[va]:Oa,[xa]:[ja,"supportsDualStack"]}]},Ba=[Ua],Ha=[Na],qa=[za],Va={version:"1.0",parameters:{Region:Ma,UseDualStack:Ta,UseFIPS:Ta,Endpoint:Ma},rules:[{conditions:[{[va]:ka,[xa]:[_a]}],rules:[{conditions:Ba,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:Pa},{conditions:Ha,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:Pa},{endpoint:{url:_a,properties:Fa,headers:Fa},type:$a}],type:Ca},{conditions:[{[va]:ka,[xa]:qa}],rules:[{conditions:[{[va]:"aws.partition",[xa]:qa,assign:Ia}],rules:[{conditions:[Ua,Na],rules:[{conditions:[{[va]:Aa,[xa]:[Sa,Da]},La],rules:[{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Fa,headers:Fa},type:$a}],type:Ca},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:Pa}],type:Ca},{conditions:Ba,rules:[{conditions:[{[va]:Aa,[xa]:[Da,Sa]}],rules:[{conditions:[{[va]:Ra,[xa]:[{[va]:Oa,[xa]:[ja,"name"]},"aws-us-gov"]}],endpoint:{url:"https://dynamodb.{Region}.amazonaws.com",properties:Fa,headers:Fa},type:$a},{endpoint:{url:"https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}",properties:Fa,headers:Fa},type:$a}],type:Ca},{error:"FIPS is enabled but this partition does not support FIPS",type:Pa}],type:Ca},{conditions:Ha,rules:[{conditions:[La],rules:[{endpoint:{url:"https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Fa,headers:Fa},type:$a}],type:Ca},{error:"DualStack is enabled but this partition does not support DualStack",type:Pa}],type:Ca},{conditions:[{[va]:Ra,[xa]:[za,"local"]}],endpoint:{url:"http://localhost:8000",properties:{authSchemes:[{name:"sigv4",signingName:"dynamodb",signingRegion:"us-east-1"}]},headers:Fa},type:$a},{endpoint:{url:"https://dynamodb.{Region}.{PartitionResult#dnsSuffix}",properties:Fa,headers:Fa},type:$a}],type:Ca}],type:Ca},{error:"Invalid Configuration: Missing Region",type:Pa}]},Wa=(e,t={})=>Et(Va,{endpointParams:e,logger:t.logger});rt.aws=At;const Ga=["in-region","cross-region","mobile","standard","legacy"],Ka=({defaultsMode:e}={})=>si((async()=>{const t="function"==typeof e?await e():e;switch(t?.toLowerCase()){case"auto":return Promise.resolve(Xa()?"mobile":"standard");case"mobile":case"in-region":case"cross-region":case"standard":case"legacy":return Promise.resolve(t?.toLocaleLowerCase());case void 0:return Promise.resolve("legacy");default:throw new Error(`Invalid parameter for "defaultsMode", expect ${Ga.join(", ")}, got ${t}`)}})),Xa=()=>{const e="undefined"!=typeof window&&window?.navigator?.userAgent?fa.parse(window.navigator.userAgent):void 0,t=e?.platform?.type;return"tablet"===t||"mobile"===t},Ya=e=>{const t=Ka(e),r=()=>t().then(En),n=(e=>({apiVersion:"2012-08-10",base64Decoder:e?.base64Decoder??Dr,base64Encoder:e?.base64Encoder??Hr,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??Wa,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??Vi,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new ni}],logger:e?.logger??new $r,serviceId:e?.serviceId??"DynamoDB",urlParser:e?.urlParser??Kt,utf8Decoder:e?.utf8Decoder??jr,utf8Encoder:e?.utf8Encoder??Br}))(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??wa,credentialDefaultProvider:e?.credentialDefaultProvider??(e=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:e?.defaultUserAgentProvider??ma({serviceId:n.serviceId,clientVersion:Ws}),endpointDiscoveryEnabledProvider:e?.endpointDiscoveryEnabledProvider??(()=>Promise.resolve(void 0)),maxAttempts:e?.maxAttempts??3,region:e?.region??ga("Region is missing"),requestHandler:Xr.create(e?.requestHandler??r),retryMode:e?.retryMode??(async()=>(await r()).retryMode||dr),sha256:e?.sha256??ua,streamCollector:e?.streamCollector??Yr,useDualstackEndpoint:e?.useDualstackEndpoint??(()=>Promise.resolve(_t)),useFipsEndpoint:e?.useFipsEndpoint??(()=>Promise.resolve(Ut))}},Ja=e=>{let t=async()=>{if(void 0===e.region)throw new Error("Region is missing from runtimeConfig");const t=e.region;return"string"==typeof t?t:t()};return{setRegion(e){t=e},region:()=>t}},Qa=e=>({region:e.region()}),Za=e=>{const t=e.httpAuthSchemes;let r=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(e){const r=t.findIndex((t=>t.schemeId===e.schemeId));-1===r?t.push(e):t.splice(r,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){r=e},httpAuthSchemeProvider:()=>r,setCredentials(e){n=e},credentials:()=>n}};class ec extends Tr{constructor(...[e]){const t=Ya(e||{});var r;const n=Je((r=t,{...r,useDualstackEndpoint:r.useDualstackEndpoint??!1,useFipsEndpoint:r.useFipsEndpoint??!1,defaultSigningName:"dynamodb"})),i=Pr(n),o=jt(i),s=nr(o);const a=((e,t)=>{const r={...Ja(e),...$n(e),...me(e),...Za(e)};return t.forEach((e=>e.configure(r))),{...e,...Qa(r),...Cn(r),...ge(r),...(n=r,{httpAuthSchemes:n.httpAuthSchemes(),httpAuthSchemeProvider:n.httpAuthSchemeProvider(),credentials:n.credentials()})};var n})(((e,{endpointDiscoveryCommandCtor:t})=>({...e,endpointDiscoveryCommandCtor:t,endpointCache:new He(e.endpointCacheSize??1e3),endpointDiscoveryEnabled:void 0!==e.endpointDiscoveryEnabled?()=>Promise.resolve(e.endpointDiscoveryEnabled):e.endpointDiscoveryEnabledProvider,isClientEndpointDiscoveryEnabled:void 0!==e.endpointDiscoveryEnabled}))({...zi(s)},{endpointDiscoveryCommandCtor:Vs}),e?.extensions||[]);super(a),this.config=a,this.middlewareStack.use(Mt(this.config)),this.middlewareStack.use(jn(this.config)),this.middlewareStack.use(Qn(this.config)),this.middlewareStack.use(Ve(this.config)),this.middlewareStack.use(Ge(this.config)),this.middlewareStack.use(Ye(this.config)),this.middlewareStack.use(or(this.config,{httpAuthSchemeParametersProvider:qi,identityProviderConfigProvider:async e=>new qn({"aws.auth#sigv4":e.credentials})})),this.middlewareStack.use(Hn(this.config))}destroy(){super.destroy()}}class tc extends(en.classBuilder().ep({...Wi}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("DynamoDB_20120810","PutItem",{}).n("DynamoDBClient","PutItemCommand").f(void 0,void 0).ser(Oo).de(To).build()){}class rc extends(en.classBuilder().ep({...Wi}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("DynamoDB_20120810","Query",{}).n("DynamoDBClient","QueryCommand").f(void 0,void 0).ser(Ro).de(_o).build()){}function nc(e){return Promise.all(Object.keys(e).reduce(((t,r)=>{const n=e[r];return"string"==typeof n?t.push([r,n]):t.push(n().then((e=>[r,e]))),t}),[])).then((e=>e.reduce(((e,[t,r])=>(e[t]=r,e)),{})))}function ic(e){throw new oi("Response from Amazon Cognito contained no access key ID",{logger:e})}function oc(e){throw new oi("Response from Amazon Cognito contained no credentials",{logger:e})}function sc(e){throw new oi("Response from Amazon Cognito contained no secret key",{logger:e})}const ac="IdentityIds";class cc{constructor(e="aws:cognito-identity-ids"){this.dbName=e}getItem(e){return this.withObjectStore("readonly",(t=>{const r=t.get(e);return new Promise((e=>{r.onerror=()=>e(null),r.onsuccess=()=>e(r.result?r.result.value:null)}))})).catch((()=>null))}removeItem(e){return this.withObjectStore("readwrite",(t=>{const r=t.delete(e);return new Promise(((e,t)=>{r.onerror=()=>t(r.error),r.onsuccess=()=>e()}))}))}setItem(e,t){return this.withObjectStore("readwrite",(r=>{const n=r.put({id:e,value:t});return new Promise(((e,t)=>{n.onerror=()=>t(n.error),n.onsuccess=()=>e()}))}))}getDb(){const e=self.indexedDB.open(this.dbName,1);return new Promise(((t,r)=>{e.onsuccess=()=>{t(e.result)},e.onerror=()=>{r(e.error)},e.onblocked=()=>{r(new Error("Unable to access DB"))},e.onupgradeneeded=()=>{const t=e.result;t.onerror=()=>{r(new Error("Failed to create object store"))},t.createObjectStore(ac,{keyPath:"id"})}}))}withObjectStore(e,t){return this.getDb().then((r=>{const n=r.transaction(ac,e);return n.oncomplete=()=>r.close(),new Promise(((e,r)=>{n.onerror=()=>r(n.error),e(t(n.objectStore(ac)))})).catch((e=>{throw r.close(),e}))}))}}const dc=new class{constructor(e={}){this.store=e}getItem(e){return e in this.store?this.store[e]:null}removeItem(e){delete this.store[e]}setItem(e,t){this.store[e]=t}};function lc(){return"object"==typeof self&&self.indexedDB?new cc:"object"==typeof window&&window.localStorage?window.localStorage:dc}function uc({accountId:e,cache:t=lc(),client:r,clientConfig:n,customRoleArn:i,identityPoolId:o,logins:s,userIdentifier:a=(s&&0!==Object.keys(s).length?void 0:"ANONYMOUS"),logger:c,parentClientConfig:d}){c?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");const l=a?`aws:cognito-identity-credentials:${o}:${a}`:void 0;let u=async()=>{const{GetIdCommand:a,CognitoIdentityClient:p}=await Promise.resolve().then((function(){return bh})),h=r??new p(Object.assign({},n??{},{region:n?.region??d?.region}));let f=l&&await t.getItem(l);if(!f){const{IdentityId:r=pc(c)}=await h.send(new a({AccountId:e,IdentityPoolId:o,Logins:s?await nc(s):void 0}));f=r,l&&Promise.resolve(t.setItem(l,f)).catch((()=>{}))}var m;return m={client:h,customRoleArn:i,logins:s,identityId:f},u=async()=>{m.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");const{GetCredentialsForIdentityCommand:e,CognitoIdentityClient:t}=await Promise.resolve().then((function(){return bh})),{Credentials:{AccessKeyId:r=ic(m.logger),Expiration:n,SecretKey:i=sc(m.logger),SessionToken:o}=oc(m.logger)}=await(m.client??new t(Object.assign({},m.clientConfig??{},{region:m.clientConfig?.region??m.parentClientConfig?.region}))).send(new e({CustomRoleArn:m.customRoleArn,IdentityId:m.identityId,Logins:m.logins?await nc(m.logins):void 0}));return{identityId:m.identityId,accessKeyId:r,secretAccessKey:i,sessionToken:o,expiration:n}},u()};return()=>u().catch((async e=>{throw l&&Promise.resolve(t.removeItem(l)).catch((()=>{})),e}))}function pc(e){throw new oi("Response from Amazon Cognito contained no identity ID",{logger:e})}const hc=e=>uc({...e}),fc=async(e,t,r)=>({operation:Nt(t).operation,region:await Ft(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});const mc=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":case"GetId":case"GetOpenIdToken":case"UnlinkIdentity":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},gc={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};var yc="3.632.0";const wc="required",bc="fn",vc="argv",xc="ref",Ec=!0,Sc="isSet",kc="booleanEquals",Ac="error",Pc="endpoint",$c="tree",Cc="PartitionResult",Ic={[wc]:!1,type:"String"},Oc={[wc]:!0,default:!1,type:"Boolean"},Rc={[xc]:"Endpoint"},Mc={[bc]:kc,[vc]:[{[xc]:"UseFIPS"},!0]},Tc={[bc]:kc,[vc]:[{[xc]:"UseDualStack"},!0]},_c={},Uc={[bc]:"getAttr",[vc]:[{[xc]:Cc},"supportsFIPS"]},Nc={[bc]:kc,[vc]:[!0,{[bc]:"getAttr",[vc]:[{[xc]:Cc},"supportsDualStack"]}]},Fc=[Mc],zc=[Tc],Dc=[{[xc]:"Region"}],jc={version:"1.0",parameters:{Region:Ic,UseDualStack:Oc,UseFIPS:Oc,Endpoint:Ic},rules:[{conditions:[{[bc]:Sc,[vc]:[Rc]}],rules:[{conditions:Fc,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:Ac},{conditions:zc,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:Ac},{endpoint:{url:Rc,properties:_c,headers:_c},type:Pc}],type:$c},{conditions:[{[bc]:Sc,[vc]:Dc}],rules:[{conditions:[{[bc]:"aws.partition",[vc]:Dc,assign:Cc}],rules:[{conditions:[Mc,Tc],rules:[{conditions:[{[bc]:kc,[vc]:[Ec,Uc]},Nc],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:_c,headers:_c},type:Pc}],type:$c},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:Ac}],type:$c},{conditions:Fc,rules:[{conditions:[{[bc]:kc,[vc]:[Uc,Ec]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:_c,headers:_c},type:Pc}],type:$c},{error:"FIPS is enabled but this partition does not support FIPS",type:Ac}],type:$c},{conditions:zc,rules:[{conditions:[Nc],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:_c,headers:_c},type:Pc}],type:$c},{error:"DualStack is enabled but this partition does not support DualStack",type:Ac}],type:$c},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:_c,headers:_c},type:Pc}],type:$c}],type:$c},{error:"Invalid Configuration: Missing Region",type:Ac}]},Lc=(e,t={})=>Et(jc,{endpointParams:e,logger:t.logger});rt.aws=At;const Bc=e=>{const t=Ka(e),r=()=>t().then(En),n=(e=>({apiVersion:"2014-06-30",base64Decoder:e?.base64Decoder??Dr,base64Encoder:e?.base64Encoder??Hr,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??Lc,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??mc,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new ni},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new Vn}],logger:e?.logger??new $r,serviceId:e?.serviceId??"Cognito Identity",urlParser:e?.urlParser??Kt,utf8Decoder:e?.utf8Decoder??jr,utf8Encoder:e?.utf8Encoder??Br}))(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??wa,credentialDefaultProvider:e?.credentialDefaultProvider??(e=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:e?.defaultUserAgentProvider??ma({serviceId:n.serviceId,clientVersion:yc}),maxAttempts:e?.maxAttempts??3,region:e?.region??ga("Region is missing"),requestHandler:Xr.create(e?.requestHandler??r),retryMode:e?.retryMode??(async()=>(await r()).retryMode||dr),sha256:e?.sha256??ua,streamCollector:e?.streamCollector??Yr,useDualstackEndpoint:e?.useDualstackEndpoint??(()=>Promise.resolve(_t)),useFipsEndpoint:e?.useFipsEndpoint??(()=>Promise.resolve(Ut))}},Hc=e=>{const t=e.httpAuthSchemes;let r=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(e){const r=t.findIndex((t=>t.schemeId===e.schemeId));-1===r?t.push(e):t.splice(r,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){r=e},httpAuthSchemeProvider:()=>r,setCredentials(e){n=e},credentials:()=>n}};class qc extends Tr{constructor(...[e]){const t=Bc(e||{});var r;const n=Je((r=t,{...r,useDualstackEndpoint:r.useDualstackEndpoint??!1,useFipsEndpoint:r.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"})),i=Pr(n),o=jt(i),s=nr(o);const a=((e,t)=>{const r={...Ja(e),...$n(e),...me(e),...Hc(e)};return t.forEach((e=>e.configure(r))),{...e,...Qa(r),...Cn(r),...ge(r),...(n=r,{httpAuthSchemes:n.httpAuthSchemes(),httpAuthSchemeProvider:n.httpAuthSchemeProvider(),credentials:n.credentials()})};var n})({...zi(s)},e?.extensions||[]);super(a),this.config=a,this.middlewareStack.use(Mt(this.config)),this.middlewareStack.use(jn(this.config)),this.middlewareStack.use(Qn(this.config)),this.middlewareStack.use(Ve(this.config)),this.middlewareStack.use(Ge(this.config)),this.middlewareStack.use(Ye(this.config)),this.middlewareStack.use(or(this.config,{httpAuthSchemeParametersProvider:fc,identityProviderConfigProvider:async e=>new qn({"aws.auth#sigv4":e.credentials})})),this.middlewareStack.use(Hn(this.config))}destroy(){super.destroy()}}class Vc extends wn{constructor(e){super(e),Object.setPrototypeOf(this,Vc.prototype)}}let Wc=class e extends Vc{constructor(t){super({name:"InternalErrorException",$fault:"server",...t}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,e.prototype)}},Gc=class e extends Vc{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}},Kc=class e extends Vc{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}},Xc=class e extends Vc{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}};class Yc extends Vc{constructor(e){super({name:"ResourceConflictException",$fault:"client",...e}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,Yc.prototype)}}let Jc=class e extends Vc{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}},Qc=class e extends Vc{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}};class Zc extends Vc{constructor(e){super({name:"ExternalServiceException",$fault:"client",...e}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,Zc.prototype)}}class ed extends Vc{constructor(e){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...e}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,ed.prototype)}}class td extends Vc{constructor(e){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...e}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,td.prototype)}}let rd=class e extends Vc{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,e.prototype)}};const nd=async(e,t)=>{const r=kd("GetCredentialsForIdentity");let n;return n=JSON.stringify(_n(e)),Sd(t,r,"/",void 0,n)},id=async(e,t)=>{const r=kd("GetId");let n;return n=JSON.stringify(_n(e)),Sd(t,r,"/",void 0,n)},od=async(e,t)=>{if(e.statusCode>=300)return ad(e,t);const r=await Li(e.body,t);let n={};n=vd(r);return{$metadata:xd(e),...n}},sd=async(e,t)=>{if(e.statusCode>=300)return ad(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:xd(e),...n}},ad=async(e,t)=>{const r={...e,body:await Bi(e.body,t)},n=Hi(e,r.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await ud(r);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await hd(r);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await fd(r);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await md(r);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await gd(r);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await wd(r);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await yd(r);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await ld(r);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await pd(r);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await dd(r);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await cd(r);default:const t=r.body;return Ed({output:e,parsedBody:t,errorCode:n})}},cd=async(e,t)=>{const r=e.body,n=_n(r),i=new rd({$metadata:xd(e),...n});return bn(i,r)},dd=async(e,t)=>{const r=e.body,n=_n(r),i=new td({$metadata:xd(e),...n});return bn(i,r)},ld=async(e,t)=>{const r=e.body,n=_n(r),i=new Zc({$metadata:xd(e),...n});return bn(i,r)},ud=async(e,t)=>{const r=e.body,n=_n(r),i=new Wc({$metadata:xd(e),...n});return bn(i,r)},pd=async(e,t)=>{const r=e.body,n=_n(r),i=new ed({$metadata:xd(e),...n});return bn(i,r)},hd=async(e,t)=>{const r=e.body,n=_n(r),i=new Gc({$metadata:xd(e),...n});return bn(i,r)},fd=async(e,t)=>{const r=e.body,n=_n(r),i=new Kc({$metadata:xd(e),...n});return bn(i,r)},md=async(e,t)=>{const r=e.body,n=_n(r),i=new Xc({$metadata:xd(e),...n});return bn(i,r)},gd=async(e,t)=>{const r=e.body,n=_n(r),i=new Yc({$metadata:xd(e),...n});return bn(i,r)},yd=async(e,t)=>{const r=e.body,n=_n(r),i=new Qc({$metadata:xd(e),...n});return bn(i,r)},wd=async(e,t)=>{const r=e.body,n=_n(r),i=new Jc({$metadata:xd(e),...n});return bn(i,r)},bd=(e,t)=>On(e,{AccessKeyId:dn,Expiration:e=>(e=>{if(null==e)throw new TypeError("Expected a non-null value");return e})(yn(on(e))),SecretKey:dn,SessionToken:dn}),vd=(e,t)=>On(e,{Credentials:e=>bd(e),IdentityId:dn}),xd=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),Ed=vn(Vc),Sd=async(e,t,r,n,i)=>{const{hostname:o,protocol:s="https",port:a,path:c}=await e.endpoint(),d={protocol:s,hostname:o,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+r:c+r,headers:t};return void 0!==i&&(d.body=i),new Ae(d)};function kd(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class Ad extends(en.classBuilder().ep({...gc}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(void 0,void 0).ser(nd).de(od).build()){}class Pd extends(en.classBuilder().ep({...gc}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(void 0,void 0).ser(id).de(sd).build()){}function $d(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}const Cd="0.0.3";function Id(e){return new ec({region:e.region,credentials:hc({client:new qc({region:e.region}),identityPoolId:e.identityPoolId,logins:{[`cognito-idp.${e.region}.amazonaws.com/${e.userPoolId}`]:e.session.IdToken}})})}const Od=(e,t)=>t.some((t=>e instanceof t));let Rd,Md;const Td=new WeakMap,_d=new WeakMap,Ud=new WeakMap;let Nd={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Td.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return jd(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fd(e){Nd=e(Nd)}function zd(e){return(Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ld(this),t),jd(this.request)}:function(...t){return jd(e.apply(Ld(this),t))}}function Dd(e){return"function"==typeof e?zd(e):(e instanceof IDBTransaction&&function(e){if(Td.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));Td.set(e,t)}(e),Od(e,Rd||(Rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Nd):e)}function jd(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(jd(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)}));return Ud.set(t,e),t}(e);if(_d.has(e))return _d.get(e);const t=Dd(e);return t!==e&&(_d.set(e,t),Ud.set(t,e)),t}const Ld=e=>Ud.get(e);const Bd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],qd=new Map;function Vd(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(qd.get(t))return qd.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=Hd.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!Bd.includes(r))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&o.done]))[0]};return qd.set(t,o),o}Fd((e=>({...e,get:(t,r,n)=>Vd(t,r)||e.get(t,r,n),has:(t,r)=>!!Vd(t,r)||e.has(t,r)})));const Wd=["continue","continuePrimaryKey","advance"],Gd={},Kd=new WeakMap,Xd=new WeakMap,Yd={get(e,t){if(!Wd.includes(t))return e[t];let r=Gd[t];return r||(r=Gd[t]=function(...e){Kd.set(this,Xd.get(this)[t](...e))}),r}};async function*Jd(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const r=new Proxy(t,Yd);for(Xd.set(r,t),Ud.set(r,Ld(t));t;)yield r,t=await(Kd.get(r)||t.continue()),Kd.delete(r)}function Qd(e,t){return t===Symbol.asyncIterator&&Od(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&Od(e,[IDBIndex,IDBObjectStore])}Fd((e=>({...e,get:(t,r,n)=>Qd(t,r)?Jd:e.get(t,r,n),has:(t,r)=>Qd(t,r)||e.has(t,r)})));const Zd="writery",el=1;function tl(){return function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=jd(s);return n&&s.addEventListener("upgradeneeded",(e=>{n(jd(s.result),e.oldVersion,e.newVersion,jd(s.transaction),e)})),r&&s.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Zd,el,{upgrade(e){e.objectStoreNames.contains("writings")||e.createObjectStore("writings",{keyPath:"id",autoIncrement:!1}),e.objectStoreNames.contains("user-writings")||e.createObjectStore("user-writings",{keyPath:"id",autoIncrement:!1}),e.objectStoreNames.contains("user")||e.createObjectStore("user",{keyPath:"id",autoIncrement:!1})}})}function rl(e){return function(e,r){return t(this,void 0,void 0,(function*(){const t=tl();return(yield t).get(e,r)}))}("user",e)}function nl(e,r){return t(this,void 0,void 0,(function*(){const t=tl();return(yield t).put(e,r)}))}function il(e){try{return function(e){return t(this,void 0,void 0,(function*(){try{const t=Id(e),r={TableName:"user-writings",KeyConditionExpression:"userId = :userId",ExpressionAttributeValues:{":userId":{S:e.id}}},n=new rc(r);return(yield t.send(n)).Items.map((e=>({recordId:e.recordId.S,content:e.content.S,userId:e.userId.S,title:e.title.S})))}catch(e){return console.warn(e),e}}))}(e)}catch(e){return console.warn(e),function(e){return t(this,void 0,void 0,(function*(){const t=tl();return(yield t).getAll(e)}))}("writings")}}const ol=async(e,t,r)=>({operation:Nt(t).operation,region:await Ft(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});const sl=e=>{const t=[];switch(e.operation){case"AssociateSoftwareToken":case"ChangePassword":case"ConfirmDevice":case"ConfirmForgotPassword":case"ConfirmSignUp":case"DeleteUser":case"DeleteUserAttributes":case"ForgetDevice":case"ForgotPassword":case"GetDevice":case"GetUser":case"GetUserAttributeVerificationCode":case"GlobalSignOut":case"InitiateAuth":case"ListDevices":case"ResendConfirmationCode":case"RespondToAuthChallenge":case"RevokeToken":case"SetUserMFAPreference":case"SetUserSettings":case"SignUp":case"UpdateAuthEventFeedback":case"UpdateDeviceStatus":case"UpdateUserAttributes":case"VerifySoftwareToken":case"VerifyUserAttribute":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-idp",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},al={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};var cl="3.632.0";const dl="required",ll="fn",ul="argv",pl="ref",hl=!0,fl="isSet",ml="booleanEquals",gl="error",yl="endpoint",wl="tree",bl="PartitionResult",vl={[dl]:!1,type:"String"},xl={[dl]:!0,default:!1,type:"Boolean"},El={[pl]:"Endpoint"},Sl={[ll]:ml,[ul]:[{[pl]:"UseFIPS"},!0]},kl={[ll]:ml,[ul]:[{[pl]:"UseDualStack"},!0]},Al={},Pl={[ll]:"getAttr",[ul]:[{[pl]:bl},"supportsFIPS"]},$l={[ll]:ml,[ul]:[!0,{[ll]:"getAttr",[ul]:[{[pl]:bl},"supportsDualStack"]}]},Cl=[Sl],Il=[kl],Ol=[{[pl]:"Region"}],Rl={version:"1.0",parameters:{Region:vl,UseDualStack:xl,UseFIPS:xl,Endpoint:vl},rules:[{conditions:[{[ll]:fl,[ul]:[El]}],rules:[{conditions:Cl,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:gl},{conditions:Il,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:gl},{endpoint:{url:El,properties:Al,headers:Al},type:yl}],type:wl},{conditions:[{[ll]:fl,[ul]:Ol}],rules:[{conditions:[{[ll]:"aws.partition",[ul]:Ol,assign:bl}],rules:[{conditions:[Sl,kl],rules:[{conditions:[{[ll]:ml,[ul]:[hl,Pl]},$l],rules:[{endpoint:{url:"https://cognito-idp-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Al,headers:Al},type:yl}],type:wl},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:gl}],type:wl},{conditions:Cl,rules:[{conditions:[{[ll]:ml,[ul]:[Pl,hl]}],rules:[{endpoint:{url:"https://cognito-idp-fips.{Region}.{PartitionResult#dnsSuffix}",properties:Al,headers:Al},type:yl}],type:wl},{error:"FIPS is enabled but this partition does not support FIPS",type:gl}],type:wl},{conditions:Il,rules:[{conditions:[$l],rules:[{endpoint:{url:"https://cognito-idp.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Al,headers:Al},type:yl}],type:wl},{error:"DualStack is enabled but this partition does not support DualStack",type:gl}],type:wl},{endpoint:{url:"https://cognito-idp.{Region}.{PartitionResult#dnsSuffix}",properties:Al,headers:Al},type:yl}],type:wl}],type:wl},{error:"Invalid Configuration: Missing Region",type:gl}]},Ml=(e,t={})=>Et(Rl,{endpointParams:e,logger:t.logger});rt.aws=At;const Tl=e=>{const t=Ka(e),r=()=>t().then(En),n=(e=>({apiVersion:"2016-04-18",base64Decoder:e?.base64Decoder??Dr,base64Encoder:e?.base64Encoder??Hr,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??Ml,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??sl,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new ni},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new Vn}],logger:e?.logger??new $r,serviceId:e?.serviceId??"Cognito Identity Provider",urlParser:e?.urlParser??Kt,utf8Decoder:e?.utf8Decoder??jr,utf8Encoder:e?.utf8Encoder??Br}))(e);return{...n,...e,runtime:"browser",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??wa,credentialDefaultProvider:e?.credentialDefaultProvider??(e=>()=>Promise.reject(new Error("Credential is missing"))),defaultUserAgentProvider:e?.defaultUserAgentProvider??ma({serviceId:n.serviceId,clientVersion:cl}),maxAttempts:e?.maxAttempts??3,region:e?.region??ga("Region is missing"),requestHandler:Xr.create(e?.requestHandler??r),retryMode:e?.retryMode??(async()=>(await r()).retryMode||dr),sha256:e?.sha256??ua,streamCollector:e?.streamCollector??Yr,useDualstackEndpoint:e?.useDualstackEndpoint??(()=>Promise.resolve(_t)),useFipsEndpoint:e?.useFipsEndpoint??(()=>Promise.resolve(Ut))}},_l=e=>{const t=e.httpAuthSchemes;let r=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(e){const r=t.findIndex((t=>t.schemeId===e.schemeId));-1===r?t.push(e):t.splice(r,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){r=e},httpAuthSchemeProvider:()=>r,setCredentials(e){n=e},credentials:()=>n}};class Ul extends Tr{constructor(...[e]){const t=Tl(e||{});var r;const n=Je((r=t,{...r,useDualstackEndpoint:r.useDualstackEndpoint??!1,useFipsEndpoint:r.useFipsEndpoint??!1,defaultSigningName:"cognito-idp"})),i=Pr(n),o=jt(i),s=nr(o);const a=((e,t)=>{const r={...Ja(e),...$n(e),...me(e),..._l(e)};return t.forEach((e=>e.configure(r))),{...e,...Qa(r),...Cn(r),...ge(r),...(n=r,{httpAuthSchemes:n.httpAuthSchemes(),httpAuthSchemeProvider:n.httpAuthSchemeProvider(),credentials:n.credentials()})};var n})({...zi(s)},e?.extensions||[]);super(a),this.config=a,this.middlewareStack.use(Mt(this.config)),this.middlewareStack.use(jn(this.config)),this.middlewareStack.use(Qn(this.config)),this.middlewareStack.use(Ve(this.config)),this.middlewareStack.use(Ge(this.config)),this.middlewareStack.use(Ye(this.config)),this.middlewareStack.use(or(this.config,{httpAuthSchemeParametersProvider:ol,identityProviderConfigProvider:async e=>new qn({"aws.auth#sigv4":e.credentials})})),this.middlewareStack.use(Hn(this.config))}destroy(){super.destroy()}}class Nl extends wn{constructor(e){super(e),Object.setPrototypeOf(this,Nl.prototype)}}class Fl extends Nl{constructor(e){super({name:"InternalErrorException",$fault:"server",...e}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,Fl.prototype)}}class zl extends Nl{constructor(e){super({name:"InvalidParameterException",$fault:"client",...e}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,zl.prototype)}}class Dl extends Nl{constructor(e){super({name:"NotAuthorizedException",$fault:"client",...e}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,Dl.prototype)}}class jl extends Nl{constructor(e){super({name:"ResourceNotFoundException",$fault:"client",...e}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,jl.prototype)}}class Ll extends Nl{constructor(e){super({name:"TooManyRequestsException",$fault:"client",...e}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,Ll.prototype)}}class Bl extends Nl{constructor(e){super({name:"UserImportInProgressException",$fault:"client",...e}),this.name="UserImportInProgressException",this.$fault="client",Object.setPrototypeOf(this,Bl.prototype)}}class Hl extends Nl{constructor(e){super({name:"UserNotFoundException",$fault:"client",...e}),this.name="UserNotFoundException",this.$fault="client",Object.setPrototypeOf(this,Hl.prototype)}}class ql extends Nl{constructor(e){super({name:"InvalidLambdaResponseException",$fault:"client",...e}),this.name="InvalidLambdaResponseException",this.$fault="client",Object.setPrototypeOf(this,ql.prototype)}}class Vl extends Nl{constructor(e){super({name:"LimitExceededException",$fault:"client",...e}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,Vl.prototype)}}class Wl extends Nl{constructor(e){super({name:"TooManyFailedAttemptsException",$fault:"client",...e}),this.name="TooManyFailedAttemptsException",this.$fault="client",Object.setPrototypeOf(this,Wl.prototype)}}class Gl extends Nl{constructor(e){super({name:"UnexpectedLambdaException",$fault:"client",...e}),this.name="UnexpectedLambdaException",this.$fault="client",Object.setPrototypeOf(this,Gl.prototype)}}class Kl extends Nl{constructor(e){super({name:"UserLambdaValidationException",$fault:"client",...e}),this.name="UserLambdaValidationException",this.$fault="client",Object.setPrototypeOf(this,Kl.prototype)}}class Xl extends Nl{constructor(e){super({name:"CodeDeliveryFailureException",$fault:"client",...e}),this.name="CodeDeliveryFailureException",this.$fault="client",Object.setPrototypeOf(this,Xl.prototype)}}class Yl extends Nl{constructor(e){super({name:"InvalidPasswordException",$fault:"client",...e}),this.name="InvalidPasswordException",this.$fault="client",Object.setPrototypeOf(this,Yl.prototype)}}class Jl extends Nl{constructor(e){super({name:"InvalidSmsRoleAccessPolicyException",$fault:"client",...e}),this.name="InvalidSmsRoleAccessPolicyException",this.$fault="client",Object.setPrototypeOf(this,Jl.prototype)}}class Ql extends Nl{constructor(e){super({name:"InvalidSmsRoleTrustRelationshipException",$fault:"client",...e}),this.name="InvalidSmsRoleTrustRelationshipException",this.$fault="client",Object.setPrototypeOf(this,Ql.prototype)}}class Zl extends Nl{constructor(e){super({name:"PreconditionNotMetException",$fault:"client",...e}),this.name="PreconditionNotMetException",this.$fault="client",Object.setPrototypeOf(this,Zl.prototype)}}class eu extends Nl{constructor(e){super({name:"UnsupportedUserStateException",$fault:"client",...e}),this.name="UnsupportedUserStateException",this.$fault="client",Object.setPrototypeOf(this,eu.prototype)}}class tu extends Nl{constructor(e){super({name:"UsernameExistsException",$fault:"client",...e}),this.name="UsernameExistsException",this.$fault="client",Object.setPrototypeOf(this,tu.prototype)}}class ru extends Nl{constructor(e){super({name:"AliasExistsException",$fault:"client",...e}),this.name="AliasExistsException",this.$fault="client",Object.setPrototypeOf(this,ru.prototype)}}class nu extends Nl{constructor(e){super({name:"InvalidUserPoolConfigurationException",$fault:"client",...e}),this.name="InvalidUserPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,nu.prototype)}}const iu="REFRESH_TOKEN_AUTH",ou="USER_PASSWORD_AUTH";class su extends Nl{constructor(e){super({name:"MFAMethodNotFoundException",$fault:"client",...e}),this.name="MFAMethodNotFoundException",this.$fault="client",Object.setPrototypeOf(this,su.prototype)}}class au extends Nl{constructor(e){super({name:"PasswordResetRequiredException",$fault:"client",...e}),this.name="PasswordResetRequiredException",this.$fault="client",Object.setPrototypeOf(this,au.prototype)}}class cu extends Nl{constructor(e){super({name:"UserNotConfirmedException",$fault:"client",...e}),this.name="UserNotConfirmedException",this.$fault="client",Object.setPrototypeOf(this,cu.prototype)}}class du extends Nl{constructor(e){super({name:"UserPoolAddOnNotEnabledException",$fault:"client",...e}),this.name="UserPoolAddOnNotEnabledException",this.$fault="client",Object.setPrototypeOf(this,du.prototype)}}class lu extends Nl{constructor(e){super({name:"InvalidEmailRoleAccessPolicyException",$fault:"client",...e}),this.name="InvalidEmailRoleAccessPolicyException",this.$fault="client",Object.setPrototypeOf(this,lu.prototype)}}class uu extends Nl{constructor(e){super({name:"CodeMismatchException",$fault:"client",...e}),this.name="CodeMismatchException",this.$fault="client",Object.setPrototypeOf(this,uu.prototype)}}class pu extends Nl{constructor(e){super({name:"ExpiredCodeException",$fault:"client",...e}),this.name="ExpiredCodeException",this.$fault="client",Object.setPrototypeOf(this,pu.prototype)}}class hu extends Nl{constructor(e){super({name:"PasswordHistoryPolicyViolationException",$fault:"client",...e}),this.name="PasswordHistoryPolicyViolationException",this.$fault="client",Object.setPrototypeOf(this,hu.prototype)}}class fu extends Nl{constructor(e){super({name:"SoftwareTokenMFANotFoundException",$fault:"client",...e}),this.name="SoftwareTokenMFANotFoundException",this.$fault="client",Object.setPrototypeOf(this,fu.prototype)}}class mu extends Nl{constructor(e){super({name:"ConcurrentModificationException",$fault:"client",...e}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,mu.prototype)}}class gu extends Nl{constructor(e){super({name:"ForbiddenException",$fault:"client",...e}),this.name="ForbiddenException",this.$fault="client",Object.setPrototypeOf(this,gu.prototype)}}class yu extends Nl{constructor(e){super({name:"GroupExistsException",$fault:"client",...e}),this.name="GroupExistsException",this.$fault="client",Object.setPrototypeOf(this,yu.prototype)}}class wu extends Nl{constructor(e){super({name:"DuplicateProviderException",$fault:"client",...e}),this.name="DuplicateProviderException",this.$fault="client",Object.setPrototypeOf(this,wu.prototype)}}class bu extends Nl{constructor(e){super({name:"UserPoolTaggingException",$fault:"client",...e}),this.name="UserPoolTaggingException",this.$fault="client",Object.setPrototypeOf(this,bu.prototype)}}class vu extends Nl{constructor(e){super({name:"InvalidOAuthFlowException",$fault:"client",...e}),this.name="InvalidOAuthFlowException",this.$fault="client",Object.setPrototypeOf(this,vu.prototype)}}class xu extends Nl{constructor(e){super({name:"ScopeDoesNotExistException",$fault:"client",...e}),this.name="ScopeDoesNotExistException",this.$fault="client",Object.setPrototypeOf(this,xu.prototype)}}class Eu extends Nl{constructor(e){super({name:"UnsupportedIdentityProviderException",$fault:"client",...e}),this.name="UnsupportedIdentityProviderException",this.$fault="client",Object.setPrototypeOf(this,Eu.prototype)}}const Su=e=>({...e,...e.Value&&{Value:rn}}),ku=e=>({...e,...e.AccessToken&&{AccessToken:rn},...e.RefreshToken&&{RefreshToken:rn},...e.IdToken&&{IdToken:rn}}),Au=e=>({...e,...e.ClientId&&{ClientId:rn},...e.SecretHash&&{SecretHash:rn},...e.Username&&{Username:rn},...e.Password&&{Password:rn},...e.UserContextData&&{UserContextData:rn}}),Pu=e=>({...e,...e.ClientId&&{ClientId:rn},...e.SecretHash&&{SecretHash:rn},...e.Username&&{Username:rn},...e.UserContextData&&{UserContextData:rn}}),$u=e=>({...e,...e.ClientId&&{ClientId:rn},...e.SecretHash&&{SecretHash:rn},...e.UserContextData&&{UserContextData:rn},...e.Username&&{Username:rn}}),Cu=e=>({...e,...e.AuthParameters&&{AuthParameters:rn},...e.ClientId&&{ClientId:rn},...e.UserContextData&&{UserContextData:rn}}),Iu=e=>({...e,...e.Session&&{Session:rn},...e.AuthenticationResult&&{AuthenticationResult:ku(e.AuthenticationResult)}});class Ou extends Nl{constructor(e){super({name:"UnauthorizedException",$fault:"client",...e}),this.name="UnauthorizedException",this.$fault="client",Object.setPrototypeOf(this,Ou.prototype)}}class Ru extends Nl{constructor(e){super({name:"UnsupportedOperationException",$fault:"client",...e}),this.name="UnsupportedOperationException",this.$fault="client",Object.setPrototypeOf(this,Ru.prototype)}}class Mu extends Nl{constructor(e){super({name:"UnsupportedTokenTypeException",$fault:"client",...e}),this.name="UnsupportedTokenTypeException",this.$fault="client",Object.setPrototypeOf(this,Mu.prototype)}}class Tu extends Nl{constructor(e){super({name:"EnableSoftwareTokenMFAException",$fault:"client",...e}),this.name="EnableSoftwareTokenMFAException",this.$fault="client",Object.setPrototypeOf(this,Tu.prototype)}}const _u=e=>({...e,...e.ClientId&&{ClientId:rn},...e.SecretHash&&{SecretHash:rn},...e.Username&&{Username:rn},...e.Password&&{Password:rn},...e.UserAttributes&&{UserAttributes:e.UserAttributes.map((e=>Su(e)))},...e.ValidationData&&{ValidationData:e.ValidationData.map((e=>Su(e)))},...e.UserContextData&&{UserContextData:rn}}),Uu=async(e,t)=>{const r=Fp("ConfirmForgotPassword");let n;return n=JSON.stringify(_n(e)),Np(t,r,"/",void 0,n)},Nu=async(e,t)=>{const r=Fp("ConfirmSignUp");let n;return n=JSON.stringify(_n(e)),Np(t,r,"/",void 0,n)},Fu=async(e,t)=>{const r=Fp("ForgotPassword");let n;return n=JSON.stringify(_n(e)),Np(t,r,"/",void 0,n)},zu=async(e,t)=>{const r=Fp("InitiateAuth");let n;return n=JSON.stringify(_n(e)),Np(t,r,"/",void 0,n)},Du=async(e,t)=>{const r=Fp("SignUp");let n;return n=JSON.stringify(_n(e)),Np(t,r,"/",void 0,n)},ju=async(e,t)=>{if(e.statusCode>=300)return Vu(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:_p(e),...n}},Lu=async(e,t)=>{if(e.statusCode>=300)return Vu(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:_p(e),...n}},Bu=async(e,t)=>{if(e.statusCode>=300)return Vu(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:_p(e),...n}},Hu=async(e,t)=>{if(e.statusCode>=300)return Vu(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:_p(e),...n}},qu=async(e,t)=>{if(e.statusCode>=300)return Vu(e,t);const r=await Li(e.body,t);let n={};n=_n(r);return{$metadata:_p(e),...n}},Vu=async(e,t)=>{const r={...e,body:await Bi(e.body,t)},n=Hi(e,r.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentityprovider#InternalErrorException":throw await tp(r);case"InvalidParameterException":case"com.amazonaws.cognitoidentityprovider#InvalidParameterException":throw await op(r);case"NotAuthorizedException":case"com.amazonaws.cognitoidentityprovider#NotAuthorizedException":throw await pp(r);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":throw await gp(r);case"TooManyRequestsException":case"com.amazonaws.cognitoidentityprovider#TooManyRequestsException":throw await vp(r);case"UserImportInProgressException":case"com.amazonaws.cognitoidentityprovider#UserImportInProgressException":throw await $p(r);case"UserNotFoundException":case"com.amazonaws.cognitoidentityprovider#UserNotFoundException":throw await Rp(r);case"InvalidLambdaResponseException":case"com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":throw await np(r);case"LimitExceededException":case"com.amazonaws.cognitoidentityprovider#LimitExceededException":throw await lp(r);case"TooManyFailedAttemptsException":case"com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":throw await bp(r);case"UnexpectedLambdaException":case"com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":throw await Ep(r);case"UserLambdaValidationException":case"com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":throw await Cp(r);case"CodeDeliveryFailureException":case"com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":throw await Gu(r);case"InvalidPasswordException":case"com.amazonaws.cognitoidentityprovider#InvalidPasswordException":throw await sp(r);case"InvalidSmsRoleAccessPolicyException":case"com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":throw await ap(r);case"InvalidSmsRoleTrustRelationshipException":case"com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":throw await cp(r);case"PreconditionNotMetException":case"com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":throw await mp(r);case"UnsupportedUserStateException":case"com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException":throw await Pp(r);case"UsernameExistsException":case"com.amazonaws.cognitoidentityprovider#UsernameExistsException":throw await Ip(r);case"AliasExistsException":case"com.amazonaws.cognitoidentityprovider#AliasExistsException":throw await Wu(r);case"InvalidUserPoolConfigurationException":case"com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":throw await dp(r);case"MFAMethodNotFoundException":case"com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":throw await up(r);case"PasswordResetRequiredException":case"com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":throw await fp(r);case"UserNotConfirmedException":case"com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":throw await Op(r);case"UserPoolAddOnNotEnabledException":case"com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":throw await Mp(r);case"InvalidEmailRoleAccessPolicyException":case"com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":throw await rp(r);case"CodeMismatchException":case"com.amazonaws.cognitoidentityprovider#CodeMismatchException":throw await Ku(r);case"ExpiredCodeException":case"com.amazonaws.cognitoidentityprovider#ExpiredCodeException":throw await Qu(r);case"PasswordHistoryPolicyViolationException":case"com.amazonaws.cognitoidentityprovider#PasswordHistoryPolicyViolationException":throw await hp(r);case"SoftwareTokenMFANotFoundException":case"com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":throw await wp(r);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":throw await Xu(r);case"ForbiddenException":case"com.amazonaws.cognitoidentityprovider#ForbiddenException":throw await Zu(r);case"GroupExistsException":case"com.amazonaws.cognitoidentityprovider#GroupExistsException":throw await ep(r);case"DuplicateProviderException":case"com.amazonaws.cognitoidentityprovider#DuplicateProviderException":throw await Yu(r);case"UserPoolTaggingException":case"com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":throw await Tp(r);case"InvalidOAuthFlowException":case"com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":throw await ip(r);case"ScopeDoesNotExistException":case"com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":throw await yp(r);case"UnsupportedIdentityProviderException":case"com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":throw await Sp(r);case"UnauthorizedException":case"com.amazonaws.cognitoidentityprovider#UnauthorizedException":throw await xp(r);case"UnsupportedOperationException":case"com.amazonaws.cognitoidentityprovider#UnsupportedOperationException":throw await kp(r);case"UnsupportedTokenTypeException":case"com.amazonaws.cognitoidentityprovider#UnsupportedTokenTypeException":throw await Ap(r);case"EnableSoftwareTokenMFAException":case"com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException":throw await Ju(r);default:const t=r.body;return Up({output:e,parsedBody:t,errorCode:n})}},Wu=async(e,t)=>{const r=e.body,n=_n(r),i=new ru({$metadata:_p(e),...n});return bn(i,r)},Gu=async(e,t)=>{const r=e.body,n=_n(r),i=new Xl({$metadata:_p(e),...n});return bn(i,r)},Ku=async(e,t)=>{const r=e.body,n=_n(r),i=new uu({$metadata:_p(e),...n});return bn(i,r)},Xu=async(e,t)=>{const r=e.body,n=_n(r),i=new mu({$metadata:_p(e),...n});return bn(i,r)},Yu=async(e,t)=>{const r=e.body,n=_n(r),i=new wu({$metadata:_p(e),...n});return bn(i,r)},Ju=async(e,t)=>{const r=e.body,n=_n(r),i=new Tu({$metadata:_p(e),...n});return bn(i,r)},Qu=async(e,t)=>{const r=e.body,n=_n(r),i=new pu({$metadata:_p(e),...n});return bn(i,r)},Zu=async(e,t)=>{const r=e.body,n=_n(r),i=new gu({$metadata:_p(e),...n});return bn(i,r)},ep=async(e,t)=>{const r=e.body,n=_n(r),i=new yu({$metadata:_p(e),...n});return bn(i,r)},tp=async(e,t)=>{const r=e.body,n=_n(r),i=new Fl({$metadata:_p(e),...n});return bn(i,r)},rp=async(e,t)=>{const r=e.body,n=_n(r),i=new lu({$metadata:_p(e),...n});return bn(i,r)},np=async(e,t)=>{const r=e.body,n=_n(r),i=new ql({$metadata:_p(e),...n});return bn(i,r)},ip=async(e,t)=>{const r=e.body,n=_n(r),i=new vu({$metadata:_p(e),...n});return bn(i,r)},op=async(e,t)=>{const r=e.body,n=_n(r),i=new zl({$metadata:_p(e),...n});return bn(i,r)},sp=async(e,t)=>{const r=e.body,n=_n(r),i=new Yl({$metadata:_p(e),...n});return bn(i,r)},ap=async(e,t)=>{const r=e.body,n=_n(r),i=new Jl({$metadata:_p(e),...n});return bn(i,r)},cp=async(e,t)=>{const r=e.body,n=_n(r),i=new Ql({$metadata:_p(e),...n});return bn(i,r)},dp=async(e,t)=>{const r=e.body,n=_n(r),i=new nu({$metadata:_p(e),...n});return bn(i,r)},lp=async(e,t)=>{const r=e.body,n=_n(r),i=new Vl({$metadata:_p(e),...n});return bn(i,r)},up=async(e,t)=>{const r=e.body,n=_n(r),i=new su({$metadata:_p(e),...n});return bn(i,r)},pp=async(e,t)=>{const r=e.body,n=_n(r),i=new Dl({$metadata:_p(e),...n});return bn(i,r)},hp=async(e,t)=>{const r=e.body,n=_n(r),i=new hu({$metadata:_p(e),...n});return bn(i,r)},fp=async(e,t)=>{const r=e.body,n=_n(r),i=new au({$metadata:_p(e),...n});return bn(i,r)},mp=async(e,t)=>{const r=e.body,n=_n(r),i=new Zl({$metadata:_p(e),...n});return bn(i,r)},gp=async(e,t)=>{const r=e.body,n=_n(r),i=new jl({$metadata:_p(e),...n});return bn(i,r)},yp=async(e,t)=>{const r=e.body,n=_n(r),i=new xu({$metadata:_p(e),...n});return bn(i,r)},wp=async(e,t)=>{const r=e.body,n=_n(r),i=new fu({$metadata:_p(e),...n});return bn(i,r)},bp=async(e,t)=>{const r=e.body,n=_n(r),i=new Wl({$metadata:_p(e),...n});return bn(i,r)},vp=async(e,t)=>{const r=e.body,n=_n(r),i=new Ll({$metadata:_p(e),...n});return bn(i,r)},xp=async(e,t)=>{const r=e.body,n=_n(r),i=new Ou({$metadata:_p(e),...n});return bn(i,r)},Ep=async(e,t)=>{const r=e.body,n=_n(r),i=new Gl({$metadata:_p(e),...n});return bn(i,r)},Sp=async(e,t)=>{const r=e.body,n=_n(r),i=new Eu({$metadata:_p(e),...n});return bn(i,r)},kp=async(e,t)=>{const r=e.body,n=_n(r),i=new Ru({$metadata:_p(e),...n});return bn(i,r)},Ap=async(e,t)=>{const r=e.body,n=_n(r),i=new Mu({$metadata:_p(e),...n});return bn(i,r)},Pp=async(e,t)=>{const r=e.body,n=_n(r),i=new eu({$metadata:_p(e),...n});return bn(i,r)},$p=async(e,t)=>{const r=e.body,n=_n(r),i=new Bl({$metadata:_p(e),...n});return bn(i,r)},Cp=async(e,t)=>{const r=e.body,n=_n(r),i=new Kl({$metadata:_p(e),...n});return bn(i,r)},Ip=async(e,t)=>{const r=e.body,n=_n(r),i=new tu({$metadata:_p(e),...n});return bn(i,r)},Op=async(e,t)=>{const r=e.body,n=_n(r),i=new cu({$metadata:_p(e),...n});return bn(i,r)},Rp=async(e,t)=>{const r=e.body,n=_n(r),i=new Hl({$metadata:_p(e),...n});return bn(i,r)},Mp=async(e,t)=>{const r=e.body,n=_n(r),i=new du({$metadata:_p(e),...n});return bn(i,r)},Tp=async(e,t)=>{const r=e.body,n=_n(r),i=new bu({$metadata:_p(e),...n});return bn(i,r)},_p=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),Up=vn(Nl),Np=async(e,t,r,n,i)=>{const{hostname:o,protocol:s="https",port:a,path:c}=await e.endpoint(),d={protocol:s,hostname:o,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+r:c+r,headers:t};return void 0!==i&&(d.body=i),new Ae(d)};function Fp(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityProviderService.${e}`}}class zp extends(en.classBuilder().ep({...al}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityProviderService","ConfirmForgotPassword",{}).n("CognitoIdentityProviderClient","ConfirmForgotPasswordCommand").f(Au,void 0).ser(Uu).de(ju).build()){}class Dp extends(en.classBuilder().ep({...al}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityProviderService","ConfirmSignUp",{}).n("CognitoIdentityProviderClient","ConfirmSignUpCommand").f(Pu,void 0).ser(Nu).de(Lu).build()){}class jp extends(en.classBuilder().ep({...al}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityProviderService","ForgotPassword",{}).n("CognitoIdentityProviderClient","ForgotPasswordCommand").f($u,void 0).ser(Fu).de(Bu).build()){}class Lp extends(en.classBuilder().ep({...al}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityProviderService","InitiateAuth",{}).n("CognitoIdentityProviderClient","InitiateAuthCommand").f(Cu,Iu).ser(zu).de(Hu).build()){}class Bp extends(en.classBuilder().ep({...al}).m((function(e,t,r,n){return[er(r,this.serialize,this.deserialize),rr(r,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityProviderService","SignUp",{}).n("CognitoIdentityProviderClient","SignUpCommand").f(_u,void 0).ser(Du).de(qu).build()){}const Hp="us-east-2",qp="bena23g1ahh81aeru1s0himfo",Vp={region:Hp};class Wp{constructor(e,t){console.log("User construct: ",e);const{sub:r}=e;this.username=e.email,this.session=t,this.region=Hp,this.userPoolId="us-east-2_ZDXyQSYKV",this.clientId=qp,this.identityPoolId="us-east-2:e5898d05-ee56-4e21-a3aa-73832e2bd9fb",this.id=r,localStorage.setItem("uid",this.id)}get logins(){var e;return{[`cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`]:null===(e=this.session)||void 0===e?void 0:e.IdToken}}}class Gp extends Error{}function Kp(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(e){return decodeURIComponent(atob(e).replace(/(.)/g,((e,t)=>{let r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return atob(t)}}function Xp({Username:e,Password:r}){return t(this,void 0,void 0,(function*(){const t=new Ul(Vp),n=new Lp({AuthFlow:ou,ClientId:qp,AuthParameters:{USERNAME:e,PASSWORD:r}}),i=yield t.send(n);console.log("signIn: ",i);const o=function(e,t){if("string"!=typeof e)throw new Gp("Invalid token specified: must be a string");t||(t={});const r=!0===t.header?0:1,n=e.split(".")[r];if("string"!=typeof n)throw new Gp(`Invalid token specified: missing part #${r+1}`);let i;try{i=Kp(n)}catch(e){throw new Gp(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)}try{return JSON.parse(i)}catch(e){throw new Gp(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)}}(i.AuthenticationResult.IdToken),s=new Wp(o,i.AuthenticationResult);return nl("user",s),s}))}Gp.prototype.name="InvalidTokenError";const Yp=e=>class extends e{toast(e,t,r){var n;this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:t,message:e,title:r||(n=t,n.charAt(0).toUpperCase()+n.slice(1))}}))}};let Jp=class extends(Yp(se)){constructor(){super(...arguments),this.isOpen=!1,this.writing=null}get title(){var e;return(null===(e=this.writing)||void 0===e?void 0:e.title)||""}set title(e){this.writing.title=e}get content(){var e;return(null===(e=this.writing)||void 0===e?void 0:e.content)||""}set content(e){this.writing.content=e}get recordId(){var e;return(null===(e=this.writing)||void 0===e?void 0:e.recordId)||null}get parentClass(){return this.isOpen?"block":"hidden"}open(e=null){console.log("writing => ",e),this.writing=e,this.isOpen=!0}close(){this.isOpen=!1}create(){var e,r;return t(this,void 0,void 0,(function*(){const n={title:(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('input[name="title"]')).value,content:(null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector('textarea[name="content"]')).value,userId:this.user.id,recordId:this.recordId};try{yield function(e,r){return t(this,void 0,void 0,(function*(){try{const t=Id(e);console.log("saveUserListItem => ",r);const n={userId:{S:e.id},recordId:{S:r.recordId?r.recordId:$d()},title:{S:r.title},content:{S:r.content}};console.log(n);const i=new tc({TableName:"user-writings",Item:n}),o=yield t.send(i);return console.log(o),o}catch(e){return console.warn(e),e}}))}(this.user,n),this.setAppData(n)}catch(e){return console.error(e),this.toast(e.message,"error")}this.toast("Created successfully!","success"),this.close()}))}setAppData(e){console.log("setAppData: ",e);const t=new CustomEvent("data",{detail:e});this.dispatchEvent(t)}render(){return q`
<div class="w-full">
<form 
action="#" 
class="bg-transparent fixed bottom-0 w-full lg:w-2/3 xl:w-1/2 right-0 m-0 ${this.parentClass}">
  <div class="overflow-hidden rounded-lg border border-gray-300 shadow-sm 
  	focus-within:border-red-200 focus-within:ring-1 focus-within:ring-red-200">
    <label for="title" class="sr-only">Title</label>
    <input 
		.value=${this.title}
		type="text" 
		name="title" 
		id="title" 
		placeholder="Title"
		class="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0">
    <label for="content" class="sr-only">Body</label>
    <textarea 
		.value=${this.content}
		rows="15" 
		name="content" 
		id="content" 
		placeholder="Write on..."
		class="block w-full resize-none border-0 py-0 text-gray-900 
			placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
	</textarea>

    <!-- Spacer element to match the height of the toolbar -->
    <div aria-hidden="true" class="bg-white">
      <div class="py-2">
        <div class="h-9"></div>
      </div>
      <div class="h-px"></div>
      <div class="py-2">
        <div class="py-px">
          <div class="h-9"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute inset-x-px bottom-0 bg-white ">
    <div class="flex items-center justify-between space-x-3 border-t 
		border-gray-200 px-2 py-2 sm:px-3">
      	<div class="flex">
			<label class="relative inline-flex cursor-pointer items-center">
				<input type="checkbox" class="peer sr-only" />
				<div
					class="flex peer h-8 items-center gap-4 rounded-full 
						text-xs  
						text-center 
						text-black
						bg-white
						px-3 

						after:absolute 
						after:left-1 
						after:h-6
						after:w-16 
						after:rounded-full 		
						after:bg-red-300/40
						after:transition-all 
						after:content-[''] 

						peer-checked:text-white 
						peer-checked:bg-red-300
						peer-checked:after:bg-white/40
						peer-checked:after:translate-x-full 
						peer-focus:outline-none">
					<span class=" w-12">Private</span>
					<span class=" w-12">Public</span>
				</div>
			</label>
			<!-- 
					class="peer flex h-8 items-center gap-4 rounded-full bg-orange-600 px-3 after:absolute after:h-6 after:w-16 after:rounded-full 
					after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-stone-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-sm text-white"
	 -->
		</div>
      	<div class="flex-shrink-0">
			<button 
				@click=${this.close} 
				type="button" 
				class="color-writery mr-4 bg-white inline-flex items-center rounded-md 
					px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline 
					focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
				Cancel
			</button>
			
			<button 
				@click=${this.create} 
				type="button" 
				class="bg-writery text-white inline-flex items-center rounded-md 
					px-3 py-2 text-sm font-semibold shadow-sm 
					focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
					focus-visible:outline-indigo-600">
				Save
			</button>
		</div>
    </div>
</div>
</form>
</div>
	`}};Jp.styles=[he,c`
		.p-gradient {
		background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
		}
		.color-writery {
			color: #ff9a9e;
		}
		.bg-writery {
			background-color: #ff9a9e;
		}
  	`],e([ue({type:Object})],Jp.prototype,"user",void 0),e([pe()],Jp.prototype,"isOpen",void 0),e([pe()],Jp.prototype,"writing",void 0),Jp=e([ce("new-writing")],Jp);let Qp=class extends se{constructor(){super(...arguments),this.writings=[]}userCompose(e=null){var t;const r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("new-writing");r&&r.open(e)}render(){return q`
		
		<div class="relative w-full h-full p-2 grid grid-cols-[repeat(auto-fill,16rem)] gap-2 
			items-center justify-items-center justify-evenly overflow-auto">
			<div 
				class=" bg-white shadow-lg rounded-lg mb-4 w-64 h-80 cursor-pointer relative" 
				@click=${()=>this.userCompose(null)}>
				
				<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute scale-50 overflow-hidden" viewBox="0 -960 960 960">
					<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
					<defs>
						<linearGradient id="writery-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
							<stop offset="0%" style="stop-color:rgb(255,154,158);stop-opacity:1" />
							<stop offset="100%" style="stop-color:rgb(250,208,196);stop-opacity:1" />
						</linearGradient>
					</defs>
					<style type="text/css">
						svg{fill:url(#writery-gradient)}
					</style>
				</svg>

				<div class="p-4 fuzzy absolute">
					<div class="text-lg font-bold">
						Blank Page
					</div>
					<div class="text-sm text-gray-600">
						Start anew
					</div>
				</div>
			</div>
			${this.writings.map((e=>q`
				<div
					@click=${()=>this.userCompose(e)} 
					class="scrollbar p-4 bg-white shadow-lg rounded-lg mt-4 mb-4 w-64 h-80 cursor-pointer">
					<div class="text-lg font-bold">${e.title}</div>
					<div class="text-sm text-gray-600">${e.content}</div>
				</div>
			`))}
		</div>

		<div class="w-full absolute bottom-0">
			<new-writing .user=${this.user}></new-writing>
		</div>
	`}};Qp.styles=[he,c`
    .p-gradient {
      background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
    }
    .fuzzy {
      filter: blur(2px);
    }
  `],e([ue({type:Object})],Qp.prototype,"user",void 0),e([ue({type:Array})],Qp.prototype,"writings",void 0),Qp=e([ce("view-home")],Qp);let Zp=class extends se{constructor(){super(...arguments),this.variant="success",this.message="Hello World",this.title="Success",this.messages=[],this.isActive=!1,this.enterClasses="z-50 relative transform ease-out duration-300 transition translate-y-2 sm:translate-y-0 sm:translate-x-2 opacity-100",this.leaveClasses="fixed transition ease-in duration-100 translate-y-0 sm:translate-x-0 opacity-0"}set toast(e){const{variant:t,message:r,messages:n,title:i}=e;this.variant=t,this.message=r,this.messages=n,this.title=i,this.transition()}get icon(){switch(this.variant){case"error":return this.errorIcon;case"warn":return this.warnIcon;case"success":return this.successIcon;default:return this.infoIcon}}getColor(e){switch(this.variant){case"error":return`${e}-error`;case"warn":return`${e}-warn`;case"success":return`${e}-accent`;default:return`${e}-primary`}}get errorIcon(){return q`<svg class="h-5 w-5 text-error fill-current" viewBox="0 0 20 20"  aria-hidden="true">
      <path class="fill-current" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
    </svg>`}get warnIcon(){return q`<svg class="h-5 w-5 text-warn" viewBox="0 0 20 20"  aria-hidden="true">
    <path class="fill-current" fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
  </svg>`}get successIcon(){return q`<svg class=" text-green-400 h-5 w-5 text-accent}" viewBox="0 0 20 20"  aria-hidden="true">
    <path class="fill-current" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
  </svg>`}get infoIcon(){return q`<svg class="h-5 w-5 text-primary fill-current" viewBox="0 0 20 20"  aria-hidden="true">
    <path class="fill-current" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
  </svg>`}transition(){this.isActive=!0,setTimeout((()=>{}),4e3)}get aniClassList(){return this.isActive?this.enterClasses:this.leaveClasses}render(){return q`<!-- Global notification live region, render this permanently at the end of the document -->
    <div id="toast" class=${this.aniClassList}>
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <!--
          Notification panel, dynamically insert this into the live region when it needs to be displayed
    
          Entering: "transform ease-out duration-300 transition"
            From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            To: "translate-y-0 opacity-100 sm:translate-x-0"
          Leaving: "transition ease-in duration-100"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class=" absolute z-50 pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                ${this.icon}
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">${this.title}</p>
                <p class="mt-1 text-sm text-gray-500">${this.message}</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button @click=${()=>this.isActive=!this.isActive} type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Close</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>`}};function eh(e){return e.then((e=>[null,e])).catch((e=>[e,null]))}Zp.styles=[he],e([pe()],Zp.prototype,"variant",void 0),e([pe()],Zp.prototype,"message",void 0),e([pe()],Zp.prototype,"title",void 0),e([pe()],Zp.prototype,"messages",void 0),e([pe()],Zp.prototype,"isActive",void 0),e([ue({type:Object})],Zp.prototype,"toast",null),Zp=e([ce("toast-ui")],Zp);class th extends se{toast(e){this.dispatchEvent(new CustomEvent("toast",{detail:e,bubbles:!0,composed:!0}))}show(e){this.dispatchEvent(new CustomEvent("show",{detail:e,bubbles:!0,composed:!0}))}setEmail(e){this.dispatchEvent(new CustomEvent("email",{detail:e,bubbles:!0,composed:!0}))}}function rh(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}let nh=class extends th{constructor(){super(...arguments),this.email="",this.pass=""}get creds(){return{Username:this.email,Password:this.pass}}submit(e){return t(this,void 0,void 0,(function*(){if(e.preventDefault(),!this.email||!this.pass)return this.toast({message:"Needs an email and password",variant:"error",title:"Sign In Error"});if(!rh(this.email))return this.toast({message:"Email is not valid",variant:"error",title:"Sign In Error"});const t=Xp(this.creds),[r,n]=yield eh(t);return r?(console.error(r),this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:"error",title:"Sign In Error",message:r.message}}))):(console.log(n),this.dispatchEvent(new CustomEvent("auth",{bubbles:!0,composed:!0,detail:n})))}))}render(){return q`

      <form class="space-y-6" @submit=${this.submit}>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-black dark:text-white">Email address</label>
          <div class="mt-2">
            <input @change=${e=>this.email=e.target.value} value=${this.email} id="email" name="email" type="text" required class="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-black dark:text-white">Password</label>
            <div class="text-sm">
              <a @click=${()=>this.show("forgot")} class="font-semibold cursor-pointer color-primary">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input @change=${e=>this.pass=e.target.value} 
            id="password" 
            name="password" 
            type="password" 
            autocomplete="current-password" 
            required 
            class="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-6">
            </div>
        </div>

        <div>
            <button class="bg-primary text-white flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Sign In
            </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-black dark:text-white">
        Have a code?&nbsp;
        <a @click=${()=>this.show("code-verify")} class="cursor-pointer font-semibold leading-6 color-primary">
          Confirm
        </a>
      </p>

      <p class="mt-2 text-center text-sm text-black  dark:text-white">
        Don't have an account yet?&nbsp;
        <a @click=${()=>this.show("sign-up")} class=" cursor-pointer font-semibold leading-6 color-primary">
          Create Account
        </a>
      </p>
    `}};nh.styles=[he],e([ue()],nh.prototype,"email",void 0),e([pe()],nh.prototype,"pass",void 0),nh=e([ce("aws-auth-login")],nh);let ih=class extends th{constructor(){super(...arguments),this.email="",this.name="",this.pass="",this.passAgain=""}get creds(){return{Username:this.email,Password:this.pass,UserAttributes:[{Name:"name",Value:this.name}]}}submit(e){return t(this,void 0,void 0,(function*(){if(e.preventDefault(),console.log({where:"submit sign up",email:this.email,pass:this.pass,passAgain:this.passAgain,creds:this.creds}),!this.email||!this.pass||!this.passAgain)return this.toast({message:"Needs an email, password and password confirmation",variant:"error",title:"Sign Up Error"});if(!rh(this.email))return this.toast({message:"Email is not valid",variant:"error",title:"Sign Up Error"});if(this.pass!==this.passAgain)return console.warn("Passwords do not match"),this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:"error",title:"Sign Up Error",message:"Passwords do not match"}}));if(this.pass.length<8)return console.warn("Password needs to be at least 8 characters"),this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:"error",title:"Sign Up Error",message:"Password must be at least 8 characters"}}));const t=function(e){const t=new Ul(Vp),r=new Bp(Object.assign({Region:Hp,ClientId:qp},e));return t.send(r)}(this.creds),[r,n]=yield eh(t);return r?(console.error(r),this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:"error",title:"Sign Up Error",message:r.message}}))):(console.log(n),this.toast({variant:"success",title:"Sign Up",message:"Please verify your email with the code sent to "+this.email}),this.setEmail(this.email),this.show("verify"),n.username=this.email,this.dispatchEvent(new CustomEvent("auth",{bubbles:!0,composed:!0,detail:n})))}))}render(){return q`
      <form class="space-y-6" @submit=${this.submit}>
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-black dark:text-white">
            Pen Name
          </label>
          <div class="mt-2">
            <input @change=${e=>this.name=e.target.value} value=${this.name} id="name" name="name" type="text" required 
              class="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-black dark:text-white">Email address</label>
          <div class="mt-2">
            <input @change=${e=>this.email=e.target.value} value=${this.email} id="email" name="email" type="text" required class="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-black dark:text-white">Password</label>
          </div>
          <div class="mt-2">
            <input @change=${e=>this.pass=e.target.value} 
              id="password" 
              name="password" 
              type="password" 
              autocomplete="current-password" 
              required 
              class="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-6"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password-again" class="block text-sm font-medium leading-6 text-black dark:text-white">
              Re-enter Password
            </label>
          </div>
          <div class="mt-2">
            <input @change=${e=>this.passAgain=e.target.value} 
              id="password-again" 
              name="password-again" 
              type="password" 
              autocomplete="current-password" 
              required 
              class="block w-full rounded-md border-0  py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
          </div>
        </div>
        
        <div>
          <button class="bg-primary text-white flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Sign Up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-black dark:text-white">
        Have a code?&nbsp;
        <a @click=${()=>this.show("code-verify")} class="cursor-pointer font-semibold leading-6 color-primary">
          Confirm
        </a>
      </p>

      <p class="mt-2 text-center text-sm text-black  dark:text-white">
        Already a member?&nbsp;
        <a @click=${()=>this.show("login")} class=" cursor-pointer font-semibold leading-6 color-primary">
          Sign in
        </a>
      </p>
    `}};ih.styles=[he],e([ue()],ih.prototype,"email",void 0),e([pe()],ih.prototype,"name",void 0),e([pe()],ih.prototype,"pass",void 0),e([pe()],ih.prototype,"passAgain",void 0),ih=e([ce("aws-auth-sign")],ih);let oh=class extends th{constructor(){super(...arguments),this.email="",this.pass=""}sendForgotCode(e){return t(this,void 0,void 0,(function*(){if(e.preventDefault(),!this.email)return this.toast({variant:"error",title:"Forgot Password Error",message:"Email is required"});const t=function({username:e}){const t=new Ul(Vp),r=new jp({ClientId:qp,Username:e});return t.send(r)}({username:this.email}),[r,n]=yield eh(t);if(r)return console.error(r),void this.toast({variant:"error",title:"Forgot Password Error",message:r.message});console.log(n),this.toast({variant:"success",title:"Forgot Password",message:"Code sent to "+this.email}),this.show("forgot-verify")}))}render(){return q`

      <form class="space-y-6" @submit=${this.sendForgotCode}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-black  dark:text-white">Email</label>
          <div class="mt-2">
            <input @change=${e=>this.email=e.target.value} 
              required
              value=${this.email} 
              id="email" 
              name="email" 
              type="text" 
              class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-6">
          </div>
        </div>
        <div>
          <button class="bg-primary flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Send Code
          </button>
        </div>
  
        <p class="mt-10 text-center text-sm text-accent">
          <a @click=${()=>this.show("login")} class=" cursor-pointer font-semibold leading-6 color-primary">
            Back
          </a>
        </p>
      </form>
    `}};oh.styles=[he],e([ue()],oh.prototype,"email",void 0),e([pe()],oh.prototype,"pass",void 0),oh=e([ce("aws-auth-forgot")],oh);let sh=class extends th{constructor(){super(...arguments),this.email="",this.pass="",this.passAgain="",this.confirmationCode=""}verifyPasswordCode(e){return t(this,void 0,void 0,(function*(){if(e.preventDefault(),!this.email||!this.confirmationCode)return this.toast({variant:"error",title:"Forgot Password Error",message:"Email and code are required"});if(!this.pass||!this.passAgain)return this.toast({variant:"error",title:"Forgot Password Error",message:"Password and confirmation are required"});if(this.pass!==this.passAgain)return this.toast({variant:"error",title:"Forgot Password Error",message:"Passwords do not match"});const t=function({username:e,password:t,code:r}){const n=new Ul(Vp),i=new zp({ClientId:qp,Username:e,ConfirmationCode:r,Password:t});return n.send(i)}({username:this.email,code:this.confirmationCode,password:this.pass}),[r,n]=yield eh(t);if(r)return console.error(r),void this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:"error",title:"Forgot Password Error",message:r.message}}));console.log(n),this.toast({variant:"success",title:"Forgot Password",message:"Password reset"}),this.show("login")}))}render(){return q`
      <form class="space-y-6" @submit=${this.verifyPasswordCode}>
        <p class="text-black dark:text-white">
          A code has been sent to your email. Please enter it below and set a new password.
        </p>
        <div>
          <label for="code" class="block text-sm font-medium leading-6 text-black  dark:text-white">
            Code
          </label>
          <div class="mt-2">
            <input @change=${e=>this.confirmationCode=e.target.value} id="code" name="code" type="text" required class="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-6 text-white">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-black dark:text-white">
            Password
          </label>
          <div class="mt-2">
            <input @change=${e=>this.pass=e.target.value} id="password" name="password" type="password" autocomplete="current-password" required 
              class="block w-full rounded-md border-0  py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 text-black">
          </div>
        </div>

        <div>
          <label for="password-again" class="block text-sm font-medium leading-6 text-black dark:text-white">
            Re-enter Password
          </label>
          <div class="mt-2">
            <input @change=${e=>this.passAgain=e.target.value} id="password-again" name="password-again" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0   py-1.5  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 text-black">
          </div>
        </div>

        <div>
          <button class="bg-primary color-primary flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Confirm
          </button>
        </div>
      </form>
    `}};sh.styles=[he],e([ue()],sh.prototype,"email",void 0),e([pe()],sh.prototype,"pass",void 0),e([pe()],sh.prototype,"passAgain",void 0),e([pe()],sh.prototype,"confirmationCode",void 0),sh=e([ce("aws-auth-forgot-confirm")],sh);let ah=class extends th{constructor(){super(...arguments),this.email="",this.pass="",this.confirmationCode=""}confirmCode(e){return t(this,void 0,void 0,(function*(){if(e.preventDefault(),!this.confirmationCode)return;const t=function({username:e,code:t}){const r=new Ul(Vp),n=new Dp({ClientId:qp,Username:e,ConfirmationCode:t});return r.send(n)}({username:this.email,code:this.confirmationCode}),[r,n]=yield eh(t);if(r)return console.error(r),void this.dispatchEvent(new CustomEvent("toast",{bubbles:!0,composed:!0,detail:{variant:"error",title:"Verification Error",message:r.message}}));console.log(n),this.toast({variant:"success",title:"Verification",message:"Email verified"}),this.show("login")}))}render(){return q`
      <form class="space-y-6" @submit=${this.confirmCode}>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-black dark:text-white dark:text-b">Email</label>
          <div class="mt-2">
            <input @change=${e=>this.email=e.target.value} value=${this.email} id="email" name="email" type="text" required class="block w-full rounded-md border-0 text-black  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-6">
          </div>
        </div>

        <div>
          <label for="code" class="block text-sm font-medium leading-6 text-black  dark:text-white">Code</label>
          <div class="mt-2">
            <input @change=${e=>this.confirmationCode=e.target.value} id="code" name="code" type="text" required class="block w-full rounded-md border-0 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm leading-6">
          </div>
        </div>

        <div>
          <button class="bg-primary text-white flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Confirm
          </button>
        </div>

        <p class="mt-10 text-center text-sm text-accent">
          <a @click=${()=>this.show("login")} class=" cursor-pointer font-semibold leading-6 color-primary">
            Back
          </a>
        </p>
      </form>
    `}};ah.styles=[he],e([ue()],ah.prototype,"email",void 0),e([pe()],ah.prototype,"pass",void 0),e([pe()],ah.prototype,"confirmationCode",void 0),ah=e([ce("aws-auth-code-confirm")],ah);let ch=class extends th{constructor(){super(...arguments),this.needsToVerify=!1,this.needsToResetPassword=!1,this.needsToVerifyPassword=!1,this.needsToVerifyCode=!1,this.needsToSignUp=!1,this.email="",this.confirmationCode=""}get html(){return this.needsToVerify?q`<aws-auth-code-confirm @show=${this.route} email=${this.email}></aws-auth-code-confirm>`:this.needsToResetPassword?q`<aws-auth-forgot @show=${this.route} email=${this.email}></aws-auth-forgot>`:this.needsToVerifyPassword?q`<aws-auth-forgot-confirm @show=${this.route} email=${this.email}></aws-auth-forgot-confirm>`:this.needsToVerifyCode?q`<aws-auth-code-confirm @show=${this.route} email=${this.email}></aws-auth-code-confirm>`:this.needsToSignUp?q`<aws-auth-sign @show=${this.route} email=${this.email}></aws-auth-sign>`:q`<aws-auth-login @show=${this.route} email=${this.email}></aws-auth-login>`}route(e){const{detail:t}=e;this.needsToVerify="has-code"===t,this.needsToResetPassword="forgot"===t,this.needsToVerifyPassword="forgot-verify"===t,this.needsToVerifyCode="code-verify"===t,this.needsToSignUp="sign-up"===t}render(){return this.html}};e([pe()],ch.prototype,"needsToVerify",void 0),e([pe()],ch.prototype,"needsToResetPassword",void 0),e([pe()],ch.prototype,"needsToVerifyPassword",void 0),e([pe()],ch.prototype,"needsToVerifyCode",void 0),e([pe()],ch.prototype,"needsToSignUp",void 0),e([pe()],ch.prototype,"email",void 0),e([pe()],ch.prototype,"confirmationCode",void 0),ch=e([ce("aws-auth")],ch);let dh=class extends se{render(){return q`
      <section id="section" class="w-full bg-transparent pt-10 flex justify-center">
        <div class="bg-white dark:bg-slate-800 rounded px-8 py-6 ">
          <div class="flex flex-col" >
            <div class="mx-auto w-full max-w-sm justify-center">
              <img class="mx-auto h-12 w-auto" src="resources/writery.png" alt="Writery">
              <h2 class="font-serif text-center mt-10 text-2xl leading-9 tracking-tight text-black dark:text-white">
                Welcome to Writery
              </h2>
            </div>

            <div class="mt-10 mx-auto w-full max-w-sm">
              <aws-auth></aws-auth>
            </div>
          </div>
        </div>
      </section>
    `}};function lh(e){var t;e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),console.log("applyAlter: ",e.target);const r=e.target,n=r.closest("[data-parent]"),i=!!n.dataset.active;if(!i||"active"!==(null===(t=null==r?void 0:r.dataset)||void 0===t?void 0:t.ignore))return uh(n,i),n.dataset.active=i?"":"true",i}function uh(e,t=!1){var r;const n=null===(r=null==e?void 0:e.dataset)||void 0===r?void 0:r.alter;if(n){const[r,i]=n.split(";").map((e=>e.trim().split(" ")));t?(e.classList.remove(...i),e.classList.add(...r)):(e.classList.remove(...r),e.classList.add(...i))}e.querySelectorAll("[data-alter]").forEach((e=>uh(e,t)))}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */dh.styles=[he],dh=e([ce("app-registration")],dh);const ph=2;class hh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fh extends hh{constructor(e){if(super(e),this.it=W,e.type!==ph)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===W||null==e)return this._t=void 0,this.it=e;if(e===V)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}fh.directiveName="unsafeHTML",fh.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class mh extends fh{}mh.directiveName="unsafeSVG",mh.resultType=2;const gh=(e=>(...t)=>({_$litDirective$:e,values:t}))(mh);let yh=class extends se{constructor(){super(...arguments),this.navItems=[],this.view="",this.navItemClick=()=>{}}_router(e){if(console.log("App: _router: ",e),!(null==e?void 0:e.name))return;const t=this.renderRoot.querySelector("div#router"),r=null==t?void 0:t.querySelector(e.name);if(r)console.log("App: existing view",r),this.hideAllViews(t),r.classList.remove("opacity-0","hidden"),r.classList.add("opacity-100");else{console.log("App: new view",e);const r="opacity-100 transition-opacity ease-linear duration-300".split(" "),n=window.customElements.get(e.name);if(!n)return console.warn("CustomElement not found");const i=new n;null==i||i.classList.add(...r),this.hideAllViews(t),null==t||t.append(i)}localStorage.setItem("last-item",JSON.stringify(e))}hideAllViews(e){e.childNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&(e.classList.remove("opacity-100"),e.classList.add("opacity-0","hidden"))}))}render(){var e;return q`
<!-- Mobile: Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
<div data-parent class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
	<!--
		Off-canvas menu backdrop, show/hide based on off-canvas menu state.

		Entering: "transition-opacity ease-linear duration-300"
		From: "opacity-0"
		To: "opacity-100"
		Leaving: "transition-opacity ease-linear duration-300"
		From: "opacity-100"
		To: "opacity-0"
	-->
<div
	data-alter="opacity-0;opacity-100"
	class=" pointer-events-none opacity-0 fixed inset-0 bg-slate-900/80 transition-opacity ease-linear duration-300"></div>

<div
	data-ignore="active"
	class="fixed inset-0 flex pointer-events-none">
	<!--
	Off-canvas menu, show/hide based on off-canvas menu state.

	Entering: "transition ease-in-out duration-300 transform"
		From: "-translate-x-full"
		To: "translate-x-0"
	Leaving: "transition ease-in-out duration-300 transform"
		From: "translate-x-0"
		To: "-translate-x-full"
	-->
	<div
		data-alter="-translate-x-full;translate-x-0"
		class=" pointer-events-none -translate-x-full relative mr-16 flex w-full max-w-xs flex-1 transition ease-in-out duration-300 transform">
		<!--
			Close button, show/hide based on off-canvas menu state.

			Entering: "ease-in-out duration-300"
			From: "opacity-0"
			To: "opacity-100"
			Leaving: "ease-in-out duration-300"
			From: "opacity-100"
			To: "opacity-0"
		-->
		<div
			data-alter="opacity-0;opacity-100"
			class="pointer-events-auto opacity-0 absolute left-full top-0 flex w-16 justify-center pt-5 ease-in-out duration-300">
			<button type="button" class="-m-2.5 p-2.5"
			@click="${lh}">
			<span class="sr-only">Close sidebar</span>
			<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
			</button>
		</div>

		<div class="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 pb-2 ring-1 ring-white/10">
			<div class="flex px-6 mb-6 h-16 shrink-0 items-center">
				<!-- https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500 -->
				<img class="h-8 w-auto" src="./resources/writery.png" alt="Writery">
				<h1 class="pl-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r font-serif text-gradient" ">
					Writery
				</h1>
			</div>
			<nav class="flex flex-1 flex-col px-6">
				<ul role="list" class="flex flex-col space-y-1 pointer-events-auto">

					${this.navItems.map((e=>q`
						<li
							id="${e.name}"
							@click="${t=>this.navItemClick(t,e)}"
						>
							<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
							<a
								href="#"
								class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
								>
								<div class="h-6 w-6 shrink-0">${gh(e.icon)}</div>
								${e.title}
							</a>
						</li>`))}

				</ul>
			</nav>
			<!-- App Navigation -->
			<nav class="pointer-events-auto absolute bottom-0 w-full px-6 ">

				<ul role="list" class="flex flex-col space-y-1">
					${this.navItems.map((e=>q`
						<li
							@click="${t=>this.navItemClick(t,e)}"
						>
						<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
						<a
							href="#"
							class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
						>
							<div class="h-6 w-6 shrink-0">${gh(e.icon)}</div>
							${e.title}
						</a>
						</li>`))}
				</ul>

				<hr class="mt-6 border-t border-gray-700" />
				
				<div class="h-9 flex justify-evenly items-center">
					<p class="text-white text-sm">v${Cd}</p>
				</div>
			</nav>
		</div>
	</div>
</div>
</div>
</div>

<!-- Desktop: Static sidebar for desktop -->
<div class="hidden lg:block fixed inset-y-0 left-0 z-40 w-20 overflow-y-auto bg-gray-900 pb-4">
	<div class="flex h-16 shrink-0 items-center justify-center">
		<img class="h-8 w-auto" src="./resources/writery.png" alt="Writery">
	</div>
	<hr class="mb-6 border-t border-gray-700" />
	<!-- Desktop: App Navigation -->
	<nav>
		<ul role="list" class="flex flex-col items-center space-y-1">
			${this.navItems.map((e=>q`<li @click="${t=>this.navItemClick(t,e)}">
		  <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
		  <a
			href="#"
			class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
		  >
			<div class="h-6 w-6 shrink-0">${gh(e.icon)}</div>
			<span class="sr-only">${e.title}</span>
		  </a>
		</li>`))}
		</ul>
	</nav>
	<nav class="absolute bottom-0 text-center w-full">
		<hr class="mt-6 border-t border-gray-700" />
		<div class="h-14 flex justify-evenly items-center">
			<p class="text-white text-sm">v${Cd}</p>
		</div>
	</nav>
</div>

<!-- Mobile: App Bar + Nav -->
<!-- <div class="lg:hidden sticky px-4 py-4 top-0 z-40 flex items-center gap-x-6 bg-gray-50 dark:bg-gray-900 shadow-sm "> -->
<div class="lg:hidden fixed z-30 w-full px-4 h-16 flex items-center gap-x-6 bg-gray-50 dark:bg-gray-900 shadow-sm">

	<button type="button" class="-m-2.5 p-2.5 text-gray-400">
		<span class="sr-only">Open sidebar</span>
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
		<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		</svg>
	</button>
	<div class="w-full text-center">
		<h1 class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r font-serif text-gradient" ">
				Writery
		</h1>
	</div>
	<div class="flex-1 text-sm font-semibold leading-6 text-white">
		<!--${null===(e=this.navItems.find((e=>e.name===this.view)))||void 0===e?void 0:e.title}-->
	</div>
	<a href="#">
		<span class="sr-only">Not logged in</span>
			<span class="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
			<!-- <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
				<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
			</svg> -->
			<img class="h-full w-full" src="./resources/writery.png" alt="User">
		</span>
	</a>
</div>

<div class="flex flex-col h-screen">
	<!-- Main content area -->
	<main class="lg:pl-20 flex-1 w-full p-gradient mt-16 lg:mt-0">
		<toast-ui></toast-ui>
		<div class="h-[calc(100vh-4rem)] lg:h-screen">
			<slot name="content"></slot>
		</div>
	</main>
</div>

		`}};yh.styles=[he,c`
		div > svg {
			fill: currentColor;
		}
		.p-gradient {
			background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
		}
		.text-gradient {
			background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	`],e([ue({type:Array})],yh.prototype,"navItems",void 0),e([ue()],yh.prototype,"view",void 0),yh=e([ce("app-layout")],yh);let wh=class extends se{constructor(){super(),this.view="view-home",this.writings=[{recordId:"8887fd4a-26dc-fb48-de36-3f43fd4c0581",content:"Hello, World! Again",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"Second"},{recordId:"b5a931e3-27e1-e6f0-6fbf-937f4d97f568",content:"Hello, World!",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"First"},{recordId:"8887fd4a-26dc-fb48-de36-3f43fd4c0581",content:"Hello, World! Again",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"Second"},{recordId:"b5a931e3-27e1-e6f0-6fbf-937f4d97f568",content:"Hello, World!",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"First"},{recordId:"8887fd4a-26dc-fb48-de36-3f43fd4c0581",content:"Hello, World! Again",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"Second"},{recordId:"b5a931e3-27e1-e6f0-6fbf-937f4d97f568",content:"Hello, World!",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"First"},{recordId:"b5a931e3-27e1-e6f0-6fbf-937f4d97f568",content:"Hello, World!",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"First"},{recordId:"8887fd4a-26dc-fb48-de36-3f43fd4c0581",content:"Hello, World! Again",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"Second"},{recordId:"b5a931e3-27e1-e6f0-6fbf-937f4d97f568",content:"Hello, World!",userId:"a13b55c0-5081-709c-75c8-2194cf1a3dcc",title:"First"}],this.navItems=[],this.appNavItems=fe}connectedCallback(){super.connectedCallback(),this._initializeApp()}render(){return this.getHtml()}_initializeApp(){return t(this,void 0,void 0,(function*(){console.log("App: initializing..."),this.view="view-home",this.refreshCheck()}))}getWritings(e){return t(this,void 0,void 0,(function*(){console.log("App: getWritings",e);const t=yield il(e);console.log("App: getWritings",t),this.writings=t}))}toastMessage(e){console.log("APP: toastMessage",e.detail);const t=this.renderRoot.querySelector("toast-ui");console.log("APP: el",t),t.toast=e.detail}auth(e){var t;console.log("APP: auth",e.detail),this.user=e.detail,t=this.user,console.log("setUser: ",t),nl("user",t),this.getWritings(this.user)}refreshCheck(){return t(this,void 0,void 0,(function*(){console.log("APP: user check");const e=localStorage.getItem("uid"),r=yield rl(e);if(r){const e=yield function(e){return t(this,void 0,void 0,(function*(){const t=new Ul(Vp),r=new Lp({AuthFlow:iu,ClientId:qp,AuthParameters:{REFRESH_TOKEN:e.session.RefreshToken,identityPoolId:e.identityPoolId,region:e.region,userPoolId:e.userPoolId}}),n=yield t.send(r);return e.session=Object.assign(Object.assign({},e.session),n.AuthenticationResult),e}))}(r);console.log("APP: freshUser",e),this.user=e,this.getWritings(e)}}))}getView(){return this.user?q`<view-home .writings=${this.writings} .user=${this.user} class="h-full w-full"></view-home>`:q`<app-registration class="pt-10 h-full w-full"></app-registration>`}getHtml(){return q`
			<div 
				class="h-dvh" 
				@auth=${this.auth}
				@toast=${this.toastMessage}>

				<toast-ui></toast-ui>
			
				<app-layout .navItems=${this.appNavItems} .view=${this.view}>
					<div slot="content">
						${this.getView()}
					</div>
				</app-layout>
			</div>
		`}};wh.styles=[he,c`
			div > svg {
				fill: currentColor;
			}
			.p-gradient {
				background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%);
			}
    	`],wh.properties={view:{type:String}},e([pe()],wh.prototype,"writings",void 0),e([pe()],wh.prototype,"navItems",void 0),e([pe()],wh.prototype,"user",void 0),wh=e([ce("writery-app")],wh);var bh=Object.freeze({__proto__:null,CognitoIdentityClient:qc,GetCredentialsForIdentityCommand:Ad,GetIdCommand:Pd});
//# sourceMappingURL=lit.js.map
