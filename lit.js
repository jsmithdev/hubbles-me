function t(t,e,r,o){var i,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(a<3?i(n):a>3?i(e,r,n):i(e,r))||n);return a>3&&n&&Object.defineProperty(e,r,n),n}function e(t,e,r,o){return new(r||(r=Promise))((function(i,a){function n(t){try{l(o.next(t))}catch(t){a(t)}}function s(t){try{l(o.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(n,s)}l((o=o.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=globalThis,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let n=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1]),t[0]);return new n(r,t,i)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:u}=Object,w=globalThis,b=w.trustedTypes,m=b?b.emptyScript:"",f=w.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},x=(t,e)=>!c(t,e),k={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&d(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:i}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const a=o?.call(this);i.call(this,e),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...g(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const o of e){const e=document.createElement("style"),i=r.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:y).toAttribute(e,r.type);this._$Em=t,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o,this[o]=i.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??x)(this[t],e))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,f?.({ReactiveElement:$}),(w.reactiveElementVersions??=[]).push("2.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,A=_.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,C="?"+z,P=`<${C}>`,H=document,I=()=>H.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,U=t=>j(t)||"function"==typeof t?.[Symbol.iterator],N="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,O=/>/g,B=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,R=/"/g,V=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),W=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Y=new WeakMap,q=H.createTreeWalker(H,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const r=t.length-1,o=[];let i,a=2===e?"<svg>":"",n=T;for(let e=0;e<r;e++){const r=t[e];let s,l,c=-1,d=0;for(;d<r.length&&(n.lastIndex=d,l=n.exec(r),null!==l);)d=n.lastIndex,n===T?"!--"===l[1]?n=L:void 0!==l[1]?n=O:void 0!==l[2]?(V.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=B):void 0!==l[3]&&(n=B):n===B?">"===l[0]?(n=i??T,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?B:'"'===l[3]?R:D):n===R||n===D?n=B:n===L||n===O?n=T:(n=B,i=void 0);const p=n===B&&t[e+1].startsWith("/>")?" ":"";a+=n===T?r+P:c>=0?(o.push(s),r.slice(0,c)+S+r.slice(c)+z+p):r+z+(-2===c?e:p)}return[K(t,a+(t[r]||"<?>")+(2===e?"</svg>":"")),o]};class J{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,a=0;const n=t.length-1,s=this.parts,[l,c]=Z(t,e);if(this.el=J.createElement(l,r),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=c[a++],r=o.getAttribute(t).split(z),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:n[2],strings:r,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?it:et}),o.removeAttribute(t)}else t.startsWith(z)&&(s.push({type:6,index:i}),o.removeAttribute(t));if(V.test(o.tagName)){const t=o.textContent.split(z),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],I()),q.nextNode(),s.push({type:2,index:++i});o.append(t[e],I())}}}else if(8===o.nodeType)if(o.data===C)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=o.data.indexOf(z,t+1));)s.push({type:7,index:i}),t+=z.length-1}i++}}static createElement(t,e){const r=H.createElement("template");return r.innerHTML=t,r}}function G(t,e,r=t,o){if(e===W)return e;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const a=M(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(t),i._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(e=G(t,i._$AS(t,e.values),i,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??H).importNode(e,!0);q.currentNode=o;let i=q.nextNode(),a=0,n=0,s=r[0];for(;void 0!==s;){if(a===s.index){let e;2===s.type?e=new tt(i,i.nextSibling,this,t):1===s.type?e=new s.ctor(i,s.name,s.strings,this,t):6===s.type&&(e=new at(i,this,t)),this._$AV.push(e),s=r[++n]}a!==s?.index&&(i=q.nextNode(),a++)}return q.currentNode=H,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):U(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==X&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(H.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=J.createElement(K(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),r=t.u(this.options);t.p(e),this.$(r),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new J(t)),e}T(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const i of t)o===e.length?e.push(r=new tt(this.k(I()),this.k(I()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=X}_$AI(t,e=this,r,o){const i=this.strings;let a=!1;if(void 0===i)t=G(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const o=t;let n,s;for(t=i[0],n=0;n<i.length-1;n++)s=G(this,o[r+n],e,n),s===W&&(s=this._$AH[n]),a||=!M(s)||s!==this._$AH[n],s===X?t=X:t!==X&&(t+=(s??"")+i[n+1]),this._$AH[n]=s}a&&!o&&this.O(t)}O(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===X?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class it extends et{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??X)===W)return;const r=this._$AH,o=t===X&&r!==X||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==X&&(r===X||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt={j:S,P:z,A:C,C:1,M:Z,L:Q,R:U,V:G,D:tt,I:et,H:ot,N:it,U:rt,B:at},st=_.litHtmlPolyfillSupport;st?.(J,tt),(_.litHtmlVersions??=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let lt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(void 0===i){const t=r?.renderBefore??null;o._$litPart$=i=new tt(e.insertBefore(I(),t),t,void 0,r??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,pt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x},ht=(t=pt,e,r)=>{const{kind:o,metadata:i}=r;let a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const i=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,i,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];e.call(this,r),this.requestUpdate(o,i,t)}}throw Error("Unsupported decorator location: "+o)};function gt(t){return(e,r)=>"object"==typeof r?ht(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ut(t){return gt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=2,bt=t=>(...e)=>({_$litDirective$:t,values:e});class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft extends mt{constructor(t){if(super(t),this.et=X,t.type!==wt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===X||null==t)return this.vt=void 0,this.et=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ft.directiveName="unsafeHTML",ft.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let vt=class extends ft{};vt.directiveName="unsafeSVG",vt.resultType=2;const yt=bt(vt),xt=s` /*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
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
[type='button'],
[type='reset'],
[type='submit'] {
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

html {
  font-family: 'League Spartan', sans-serif;
  font-family: 'Ubuntu', sans-serif;
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

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
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

.left-1 {
  left: 0.25rem;
}

.left-20 {
  left: 5rem;
}

.left-4 {
  left: 1rem;
}

.left-full {
  left: 100%;
}

.right-0 {
  right: 0px;
}

.right-4 {
  right: 1rem;
}

.top-0 {
  top: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-14 {
  top: 3.5rem;
}

.top-3 {
  top: 0.75rem;
}

.top-3\\.5 {
  top: 0.875rem;
}

.top-4 {
  top: 1rem;
}

.z-10 {
  z-index: 10;
}

.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

.col-end-1 {
  grid-column-end: 1;
}

.-m-2 {
  margin: -0.5rem;
}

.-m-2\\.5 {
  margin: -0.625rem;
}

.m-4 {
  margin: 1rem;
}

.-mx-2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.-my-2 {
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.-mb-2 {
  margin-bottom: -0.5rem;
}

.-ml-2 {
  margin-left: -0.5rem;
}

.-mt-2 {
  margin-top: -0.5rem;
}

.-mt-8 {
  margin-top: -2rem;
}

.-mt-px {
  margin-top: -1px;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
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

.ml-5 {
  margin-left: 1.25rem;
}

.ml-auto {
  margin-left: auto;
}

.mr-16 {
  margin-right: 4rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mr-auto {
  margin-right: auto;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
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

.table {
  display: table;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-0 {
  height: 0px;
}

.h-1 {
  height: 0.25rem;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-16 {
  height: 4rem;
}

.h-2 {
  height: 0.5rem;
}

.h-20 {
  height: 5rem;
}

.h-24 {
  height: 6rem;
}

.h-3 {
  height: 0.75rem;
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

.h-7 {
  height: 1.75rem;
}

.h-72 {
  height: 18rem;
}

.h-8 {
  height: 2rem;
}

.h-96 {
  height: 24rem;
}

.h-auto {
  height: auto;
}

.h-dvh {
  height: 100dvh;
}

.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}

.h-full {
  height: 100%;
}

.h-screen {
  height: 100vh;
}

.max-h-72 {
  max-height: 18rem;
}

.max-h-96 {
  max-height: 24rem;
}

.w-1 {
  width: 0.25rem;
}

.w-10 {
  width: 2.5rem;
}

.w-11 {
  width: 2.75rem;
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

.w-24 {
  width: 6rem;
}

.w-3 {
  width: 0.75rem;
}

.w-4 {
  width: 1rem;
}

.w-5 {
  width: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.w-7 {
  width: 1.75rem;
}

.w-8 {
  width: 2rem;
}

.w-96 {
  width: 24rem;
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

.w-screen {
  width: 100vw;
}

.min-w-0 {
  min-width: 0px;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-xl {
  max-width: 36rem;
}

.max-w-xs {
  max-width: 20rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-none {
  flex: none;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.shrink-0 {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.grow {
  flex-grow: 1;
}

.border-collapse {
  border-collapse: collapse;
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-5 {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
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

.transform-gpu {
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.resize {
  resize: both;
}

.scroll-py-2 {
  scroll-padding-top: 0.5rem;
  scroll-padding-bottom: 0.5rem;
}

.scroll-py-4 {
  scroll-padding-top: 1rem;
  scroll-padding-bottom: 1rem;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
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

.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}

.gap-x-3 {
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}

.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}

.gap-x-6 {
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}

.gap-y-2 {
  row-gap: 0.5rem;
}

.gap-y-3 {
  row-gap: 0.75rem;
}

.gap-y-5 {
  row-gap: 1.25rem;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.overflow-y-auto {
  overflow-y: auto;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-r {
  border-right-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-slate-100 {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
}

.border-slate-500 {
  --tw-border-opacity: 1;
  border-color: rgb(100 116 139 / var(--tw-border-opacity));
}

.border-transparent {
  border-color: transparent;
}

.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--tw-bg-opacity));
}

.bg-cyan-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 211 238 / var(--tw-bg-opacity));
}

.bg-cyan-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 182 212 / var(--tw-bg-opacity));
}

.bg-emerald-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(52 211 153 / var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}

.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity));
}

.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.bg-sky-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(56 189 248 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}

.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}

.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}

.bg-slate-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}

.bg-slate-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.bg-slate-900\\/80 {
  background-color: rgb(15 23 42 / 0.8);
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-opacity-25 {
  --tw-bg-opacity: 0.25;
}

.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-cyan-400 {
  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-transparent {
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-gray-900 {
  --tw-gradient-to: #111827 var(--tw-gradient-to-position);
}

.to-pink-300 {
  --tw-gradient-to: #f9a8d4 var(--tw-gradient-to-position);
}

.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}

.fill-current {
  fill: currentColor;
}

.fill-slate-400 {
  fill: #94a3b8;
}

.fill-slate-500 {
  fill: #64748b;
}

.stroke-white {
  stroke: #fff;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 0.25rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\\.5 {
  padding: 0.625rem;
}

.p-20 {
  padding: 5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.px-14 {
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}

.px-16 {
  padding-left: 4rem;
  padding-right: 4rem;
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

.px-48 {
  padding-left: 12rem;
  padding-right: 12rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
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

.pb-2 {
  padding-bottom: 0.5rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pl-0 {
  padding-left: 0px;
}

.pl-10 {
  padding-left: 2.5rem;
}

.pl-11 {
  padding-left: 2.75rem;
}

.pl-20 {
  padding-left: 5rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-6 {
  padding-left: 1.5rem;
}

.pl-96 {
  padding-left: 24rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pt-10 {
  padding-top: 2.5rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.text-center {
  text-align: center;
}

.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
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

.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.leading-5 {
  line-height: 1.25rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-7 {
  line-height: 1.75rem;
}

.leading-none {
  line-height: 1;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.text-cyan-400 {
  --tw-text-opacity: 1;
  color: rgb(34 211 238 / var(--tw-text-opacity));
}

.text-cyan-500 {
  --tw-text-opacity: 1;
  color: rgb(6 182 212 / var(--tw-text-opacity));
}

.text-emerald-300 {
  --tw-text-opacity: 1;
  color: rgb(110 231 183 / var(--tw-text-opacity));
}

.text-emerald-400 {
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity));
}

.text-emerald-600 {
  --tw-text-opacity: 1;
  color: rgb(5 150 105 / var(--tw-text-opacity));
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

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-sky-300 {
  --tw-text-opacity: 1;
  color: rgb(125 211 252 / var(--tw-text-opacity));
}

.text-sky-400 {
  --tw-text-opacity: 1;
  color: rgb(56 189 248 / var(--tw-text-opacity));
}

.text-sky-500 {
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
}

.text-sky-600 {
  --tw-text-opacity: 1;
  color: rgb(2 132 199 / var(--tw-text-opacity));
}

.text-slate-100 {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.text-slate-200 {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity));
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.text-slate-50 {
  --tw-text-opacity: 1;
  color: rgb(248 250 252 / var(--tw-text-opacity));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}

.text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}

.text-transparent {
  color: transparent;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-70 {
  opacity: 0.7;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline {
  outline-style: solid;
}

.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-inset {
  --tw-ring-inset: inset;
}

.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}

.ring-cyan-400 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(34 211 238 / var(--tw-ring-opacity));
}

.ring-cyan-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 182 212 / var(--tw-ring-opacity));
}

.ring-gray-100 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity));
}

.ring-slate-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(100 116 139 / var(--tw-ring-opacity));
}

.ring-slate-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(15 23 42 / var(--tw-ring-opacity));
}

.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
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

.blur-2xl {
  --tw-blur: blur(40px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.backdrop-blur-xl {
  --tw-backdrop-blur: blur(24px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
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

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
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

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
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

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

@media (min-width: 640px) {
  .sm\\:gap-x-4 {
    -moz-column-gap: 1rem;
         column-gap: 1rem;
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

  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 768px) {
  .md\\:fixed {
    position: fixed;
  }

  .md\\:inset-y-0 {
    top: 0px;
    bottom: 0px;
  }

  .md\\:left-0 {
    left: 0px;
  }

  .md\\:z-50 {
    z-index: 50;
  }

  .md\\:block {
    display: block;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:w-20 {
    width: 5rem;
  }

  .md\\:overflow-y-auto {
    overflow-y: auto;
  }

  .md\\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }

  .md\\:p-4 {
    padding: 1rem;
  }

  .md\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .md\\:py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .md\\:pb-4 {
    padding-bottom: 1rem;
  }

  .md\\:pl-20 {
    padding-left: 5rem;
  }
}

@media (min-width: 1024px) {
  .lg\\:block {
    display: block;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
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
  .xl\\:block {
    display: block;
  }

  .xl\\:px-48 {
    padding-left: 12rem;
    padding-right: 12rem;
  }
} `;function kt(t){var e,r;t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),console.log("applyAlter: ",t.target);const o=t.target.closest("[data-parent]"),i=!!o.dataset.active;if(!i||"active"!==(null===(r=null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.dataset)||void 0===r?void 0:r.ignore))return $t(o,i),o.dataset.active=i?"":"true",i}function $t(t,e=!1){var r;const o=null===(r=null==t?void 0:t.dataset)||void 0===r?void 0:r.alter;if(o){const[r,i]=o.split(";").map((t=>t.trim().split(" ")));e?(t.classList.remove(...i),t.classList.add(...r)):(t.classList.remove(...r),t.classList.add(...i))}t.querySelectorAll("[data-alter]").forEach((t=>$t(t,e)))}function _t(t){return t.split("-").map((t=>t[0].toUpperCase()+t.slice(1))).join(" ")}const At=[{name:"view-home",title:"Home",icon:'<svg viewBox="0 -960 960 960" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>'}],Et=(t,e)=>e.some((e=>t instanceof e));let St,zt;const Ct=new WeakMap,Pt=new WeakMap,Ht=new WeakMap;let It={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return Ct.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Nt(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Mt(t){It=t(It)}function jt(t){return(zt||(zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Tt(this),e),Nt(this.request)}:function(...e){return Nt(t.apply(Tt(this),e))}}function Ut(t){return"function"==typeof t?jt(t):(t instanceof IDBTransaction&&function(t){if(Ct.has(t))return;const e=new Promise(((e,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{e(),o()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)}));Ct.set(t,e)}(t),Et(t,St||(St=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,It):t)}function Nt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{e(Nt(t.result)),o()},a=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",a)}));return Ht.set(e,t),e}(t);if(Pt.has(t))return Pt.get(t);const e=Ut(t);return e!==t&&(Pt.set(t,e),Ht.set(e,t)),e}const Tt=t=>Ht.get(t);const Lt=["get","getKey","getAll","getAllKeys","count"],Ot=["put","add","delete","clear"],Bt=new Map;function Dt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Bt.get(e))return Bt.get(e);const r=e.replace(/FromIndex$/,""),o=e!==r,i=Ot.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!i&&!Lt.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,i?"readwrite":"readonly");let n=a.store;return o&&(n=n.index(e.shift())),(await Promise.all([n[r](...e),i&&a.done]))[0]};return Bt.set(e,a),a}Mt((t=>({...t,get:(e,r,o)=>Dt(e,r)||t.get(e,r,o),has:(e,r)=>!!Dt(e,r)||t.has(e,r)})));const Rt=["continue","continuePrimaryKey","advance"],Vt={},Ft=new WeakMap,Wt=new WeakMap,Xt={get(t,e){if(!Rt.includes(e))return t[e];let r=Vt[e];return r||(r=Vt[e]=function(...t){Ft.set(this,Wt.get(this)[e](...t))}),r}};async function*Yt(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;const r=new Proxy(e,Xt);for(Wt.set(r,e),Ht.set(r,Tt(e));e;)yield r,e=await(Ft.get(r)||e.continue()),Ft.delete(r)}function qt(t,e){return e===Symbol.asyncIterator&&Et(t,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===e&&Et(t,[IDBIndex,IDBObjectStore])}Mt((t=>({...t,get:(e,r,o)=>qt(e,r)?Yt:t.get(e,r,o),has:(e,r)=>qt(e,r)||t.has(e,r)})));const Kt=function(t,e,{blocked:r,upgrade:o,blocking:i,terminated:a}={}){const n=indexedDB.open(t,e),s=Nt(n);return o&&n.addEventListener("upgradeneeded",(t=>{o(Nt(n.result),t.oldVersion,t.newVersion,Nt(n.transaction),t)})),r&&n.addEventListener("blocked",(t=>r(t.oldVersion,t.newVersion,t))),s.then((t=>{a&&t.addEventListener("close",(()=>a())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),s}("hubbles",1,{upgrade(t){t.createObjectStore("hubbles",{keyPath:"name"})}});class Zt{constructor(t){this.enabled=!1,this.version=t.version,this.author=t.author,Object.keys(t.hubbles).forEach((e=>{this[e]=t.hubbles[e]}))}sync(){return e(this,void 0,void 0,(function*(){const t=yield Kt.then((t=>t.getAll("hubbles"))),e=t.find((t=>t.name===this.name));return e&&(this.enabled=e.enabled),this}))}}function Jt(){return e(this,void 0,void 0,(function*(){try{return function(){return e(this,void 0,void 0,(function*(){const t=yield fetch("https://raw.githubusercontent.com/jsmithdev/hubbles-list/main/list.json").then((t=>t.text())).then((t=>e(this,void 0,void 0,(function*(){console.log("getHubbleListItems  stringArr",t);const r=function(t){return console.log("stringArrayToArray",t),t.replace("[","").replace("]","").replace(/"/g,"").trim().split(",").filter((t=>t)).map((t=>t.trim().replace(/\n/g,"")))}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(t);return console.log("getHubbleListItems  list",r),Promise.all(r.map((t=>function(t){return e(this,void 0,void 0,(function*(){const e="https://raw.githubusercontent.com/",r=t.replace("https://github.com/","");return fetch(e+r+"/main/package.json").then((t=>t.json())).then((t=>new Zt(t))).then((t=>t.sync())).catch((t=>t))}))}(t))))})))).catch((t=>t));return t}))}()}catch(t){return console.warn(t),Kt.then((t=>t.getAll("hubbles")))}}))}function Gt(t){console.log("saveHubbleListItem: ",t),Kt.then((e=>e.put("hubbles",t)))}const{D:Qt}=nt,te=()=>document.createComment(""),ee=(t,e,r)=>{const o=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===r){const e=o.insertBefore(te(),i),a=o.insertBefore(te(),i);r=new Qt(e,a,t,t.options)}else{const e=r._$AB.nextSibling,a=r._$AM,n=a!==t;if(n){let e;r._$AQ?.(t),r._$AM=t,void 0!==r._$AP&&(e=t._$AU)!==a._$AU&&r._$AP(e)}if(e!==i||n){let t=r._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,i),t=e}}}return r},re=(t,e,r=t)=>(t._$AI(e,r),t),oe={},ie=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const t=e.nextSibling;e.remove(),e=t}},ae=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},ne=bt(class extends mt{constructor(t){if(super(t),t.type!==wt)throw Error("repeat() can only be used in text expressions")}ht(t,e,r){let o;void 0===r?r=e:void 0!==e&&(o=e);const i=[],a=[];let n=0;for(const e of t)i[n]=o?o(e,n):n,a[n]=r(e,n),n++;return{values:a,keys:i}}render(t,e,r){return this.ht(t,e,r).values}update(t,[e,r,o]){const i=(t=>t._$AH)(t),{values:a,keys:n}=this.ht(e,r,o);if(!Array.isArray(i))return this.dt=n,a;const s=this.dt??=[],l=[];let c,d,p=0,h=i.length-1,g=0,u=a.length-1;for(;p<=h&&g<=u;)if(null===i[p])p++;else if(null===i[h])h--;else if(s[p]===n[g])l[g]=re(i[p],a[g]),p++,g++;else if(s[h]===n[u])l[u]=re(i[h],a[u]),h--,u--;else if(s[p]===n[u])l[u]=re(i[p],a[u]),ee(t,l[u+1],i[p]),p++,u--;else if(s[h]===n[g])l[g]=re(i[h],a[g]),ee(t,i[p],i[h]),h--,g++;else if(void 0===c&&(c=ae(n,g,u),d=ae(s,p,h)),c.has(s[p]))if(c.has(s[h])){const e=d.get(n[g]),r=void 0!==e?i[e]:null;if(null===r){const e=ee(t,i[p]);re(e,a[g]),l[g]=e}else l[g]=re(r,a[g]),ee(t,i[p],r),i[e]=null;g++}else ie(i[h]),h--;else ie(i[p]),p++;for(;g<=u;){const e=ee(t,l[u+1]);re(e,a[g]),l[g++]=e}for(;p<=h;){const t=i[p++];null!==t&&ie(t)}return this.dt=n,((t,e=oe)=>{t._$AH=e})(t,l),W}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends lt{constructor(){super(...arguments),this.hubbles=[]}_alter(t){return kt.bind(this)(t)}connectedCallback(){super.connectedCallback()}_selectHubble(t,e){this._alter(e),this._toggleHubble(t)}_toggleHubble(t){console.log("CP: _toggleHubble hubble",t),this.dispatchEvent(new CustomEvent("toggle-hubble",{bubbles:!0,composed:!0,detail:{item:t,enabled:!t.enabled}}))}render(){return F`
            
            <div data-parent class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <div class="relative">
                <svg class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
                <input type="text" class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options">
                </div>

                <!-- Results, show/hide based on command palette state -->
                ${console.log(this.hubbles.length)}
                ${this.hubbles.length>0?F`
                    <ul class="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                        <!-- Active: "bg-indigo-600 text-white" -->
                        ${ne(this.hubbles,(t=>t.name),((t,e)=>F`
                            <li 
                            class="cursor-pointer hover:bg-gray-100 select-none px-4 py-2 grid grid-cols-1 grid-rows-2 gap-y-2 sm:gap-x-4"  
                            role="option" 
                            tabindex="${e}">
                                <div class="flex gap-x-2 justify-between w-full">
                                <span class="truncate">${_t(t.name)}</span>
                                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                                
                                ${t.enabled?F`
                                    <button 
                                    type="button" 
                                    class="bg-gray-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2" 
                                    role="switch" 
                                    aria-checked="false"
                                    data-parent
                                    @click="${e=>this._selectHubble(t,e)}" >
                                    <span class="sr-only">Add hubble</span>
                                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                                    <span
                                    aria-hidden="true" class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                    </button>
                                    `:F`
                                    <button 
                                    type="button" 
                                    class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2" 
                                    role="switch" 
                                    aria-checked="false"
                                    @click="${e=>this._selectHubble(t,e)}" >
                                    <span class="sr-only">Add hubble</span>
                                    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                                    <span
                                    aria-hidden="true" 
                                    class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                    </button>
                                    `}
                                </div>
                                <div>
                                <p class="text-sm">${t.description}</p>
                                </div>
                            </li>
                        `))}
                    </ul>`:F`<p class="p-4 text-sm text-gray-500">No hubbles found.</p>`}                
            </div>
        `}};se.styles=[xt],t([gt()],se.prototype,"hubbles",void 0),se=t([dt("command-pallette")],se);let le=class extends lt{constructor(){super(...arguments),this.hubbles=[]}render(){return this.getHtml()}_todo(){console.log("todo")}getHtml(){return F`
		<div class="bg-slate-700 text-center w-full h-full p-2 lg:p6">
			<div class="bg-slate-900/80 shadow sm:rounded-lg">
				<div class="px-4 py-5 sm:p-6">
					<h1 class="text-5xl w-fit p-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300" ">
						Welcome to Hubbles
					</h1>
					
					<p class="mb-6 w-fit p-4 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
						Start by adding some hubbles to your sidebar<br>
					</p>
					<command-pallette .hubbles=${this.hubbles}></command-pallette>
					<br class="mb-4"/>
					<div class="flex justify-center text-white">
					hubbles@0.0.2
					</div>
				</div>
			</div>			
		</div>
		`}};le.styles=[xt],t([gt()],le.prototype,"hubbles",void 0),le=t([dt("view-home")],le);let ce=class extends lt{constructor(){super(),this.view="view-home",this.hubbles=[],this.navItems=[],this.appNavItems=At}connectedCallback(){super.connectedCallback(),this._initializeApp()}render(){return this.getHtml()}_initializeApp(){return e(this,void 0,void 0,(function*(){console.log("App: initializing..."),this.view="view-home",this.hubbles=yield Jt(),console.log("App: hubbles",this.hubbles),Promise.all(this.hubbles.map((t=>{if(t.enabled)return this._activateHubble(t)}))).then((()=>{this._loadLastItem()}))}))}_loadLastItem(){const t=localStorage.getItem("last-item");if(t){const e=JSON.parse(t),r=this.hubbles.find((t=>t.name===e.name));if(r.enabled){const{name:t,title:r,icon:o}=e;this._router({name:t,title:r,icon:o})}}}_router(t){if(console.log("App: _router: ",t),!(null==t?void 0:t.name))return;const e=this.renderRoot.querySelector("div#router"),r=null==e?void 0:e.querySelector(t.name);if(r)console.log("App: existing view",r),this.hideAllViews(e),r.classList.remove("opacity-0","hidden"),r.classList.add("opacity-100");else{console.log("App: new view",t);const r="opacity-100 transition-opacity ease-linear duration-300".split(" "),o=window.customElements.get(t.name);if(!o)return console.warn("CustomElement not found");const i=new o;null==i||i.classList.add(...r),this.hideAllViews(e),null==e||e.append(i)}localStorage.setItem("last-item",JSON.stringify(t))}hideAllViews(t){t.childNodes.forEach((t=>{t.nodeType===Node.ELEMENT_NODE&&(t.classList.remove("opacity-100"),t.classList.add("opacity-0","hidden"))}))}_toggleHubble(t){console.log("App: toggleHubble",t.detail);const{item:e,enabled:r}=t.detail;r?(this._activateHubble(e),Gt(e)):this._deactivateHubble(e)}_activateHubble(t){return console.log("App: activate hubble",t),t.enabled=!0,fetch(t.icon).then((t=>t.text())).then((e=>this._addNavItem(e,t))).then((t=>this._loadScript(t))).catch((t=>console.error(t)))}_deactivateHubble(t){console.log("App: _deactivateHubble",t),t.enabled=!1,this.navItems=this.navItems.filter((e=>e.name!==t.name)),this.hubbles=this.hubbles.map((e=>e.name===t.name?t:e)),Gt(t)}_addNavItem(t,r){return e(this,void 0,void 0,(function*(){r.enabled=!0;const e={name:r.name,title:_t(r.name),icon:t};return this.navItems=[e,...this.navItems],r}))}_loadScript(t){return new Promise(((e,r)=>{const o=document.createElement("script");o.type="module",o.src=t.executable,o.onload=()=>e(t),o.onerror=t=>r(t),document.head.append(o)}))}getHtml(){var t;return F`
	<div class="h-dvh">
	<!-- Mobile: Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div data-parent class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
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
				@click="${kt}">
				<span class="sr-only">Close sidebar</span>
				<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
				</button>
			</div>

			<div class="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 pb-2 ring-1 ring-white/10">
				<div class="flex px-6 mb-6 h-16 shrink-0 items-center">
					<!-- https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500 -->
				<img class="h-8 w-auto" src="./resources/hubbles.png" alt="Hubbles">
				<h1 class="pl-4 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300" ">
						Hubbles
				</h1>
				</div>
				<nav class="flex flex-1 flex-col px-6">
					<ul role="list" class="flex flex-col space-y-1 pointer-events-auto">

					${this.navItems.map((t=>F`<li id="${t.name}"
						@click="${e=>{this._router(t),kt(e)}}">
							<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
							<a href="#" class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
							<div class="h-6 w-6 shrink-0">
								${yt(t.icon)}
							</div>
							${t.title}
							</a>
						</li>`))}
					
					</ul>
				</nav>
				<!-- App Navigation -->
				<nav class="pointer-events-auto absolute bottom-0 w-full px-6 mb-6">
					<hr class="my-6 border-t border-gray-700" />
					<ul role="list" class="flex flex-col space-y-1">
						${this.appNavItems.map((t=>F`<li @click="${e=>{this._router(t),kt(e)}}">
							<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
							<a href="#" class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
							<div class="h-6 w-6 shrink-0">
								${yt(t.icon)}
							</div>
							${t.title}
							</a>
						</li>`))}
					</ul>
				</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- Desktop: Static sidebar for desktop -->
	<div class="hidden lg:block fixed inset-y-0 left-0 z-50 w-20 overflow-y-auto bg-gray-900 pb-4">
		<div class="flex h-16 shrink-0 items-center justify-center">
			<img class="h-8 w-auto" src="./resources/hubbles.png" alt="Hubbles">
		</div>
		<hr class="mb-6 border-t border-gray-700" />
		<nav>
			<ul role="list" class="flex flex-col items-center space-y-1">
				${this.navItems.map((t=>F`<li @click="${()=>this._router(t)}">
					<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
					<a href="#" class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold">
						<div class="h-6 w-6 shrink-0">
							${yt(t.icon)}
						</div>
						<span class="sr-only">${t.title}</span>
					</a>
				</li>`))}
			</ul>
		</nav>
		<!-- Desktop: App Navigation -->
		<nav class="absolute bottom-0 text-center w-full">
			<hr class="my-6 border-t border-gray-700" />
			<ul role="list" class="flex flex-col items-center space-y-1 mb-6">
				${this.appNavItems.map((t=>F`<li @click="${()=>this._router(t)}">
					<!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
					<a href="#" class="bg-gray-800 text-white group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold">
						<div class="h-auto w-7 shrink-0">
							${yt(t.icon)}
						</div>
						<span class="sr-only">${t.title}</span>
					</a>
				</li>`))}
			</ul>
		</nav>
	</div>

	<!-- Mobile: App Bar + Nav -->
	<div class="lg:hidden sticky px-4 py-4 top-0 z-40 flex items-center gap-x-6 bg-gray-900 shadow-sm ">
		<button type="button" class="-m-2.5 p-2.5 text-gray-400">
			<span class="sr-only">Open sidebar</span>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</button>
		<div class="w-full text-center">
			<h1 class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-300" ">
					Hubbles
			</h1>
		</div>
		<div class="flex-1 text-sm font-semibold leading-6 text-white">
			${null===(t=this.navItems.find((t=>t.name===this.view)))||void 0===t?void 0:t.title}
		</div>
		<a href="#">
			<span class="sr-only">Not logged in</span>
			<span class="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
			<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
				<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
			</svg>
			</span>
		</a>
	</div>

	<main 
	@toggle-hubble="${this._toggleHubble}"
	class="lg:pl-20 lg:h-fill ">
	<!-- px-4 py-10 sm:px-6 lg:px-8 lg:py-6 -->
		<!-- px-4 py-10 sm:px-6 lg:px-8 lg:py-6 -->
		<!-- Main area -->
		<div id="router">
			<view-home 
				.hubbles=${this.hubbles}
				class="opacity-100 transition-opacity ease-linear duration-300"
			></view-home>
		</div>
	</main>

	<!--<aside class="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
	Secondary column (hidden on smaller screens) --
	</aside>-->
	</div>

			`}};ce.styles=[xt,s`
		div > svg {
			fill: currentColor;
		}
	`],ce.properties={view:{type:String}},t([ut()],ce.prototype,"hubbles",void 0),t([ut()],ce.prototype,"navItems",void 0),ce=t([dt("hubbles-app")],ce);
