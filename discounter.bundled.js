/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.4.1");const g=window,m=g.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,b=`<${w}>`,A=document,k=(t="")=>A.createComment(t),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,U=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,M=/"/g,H=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),N=new WeakMap,R=A.createTreeWalker(A,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=S;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===S?"!--"===l[1]?r=C:void 0!==l[1]?r=U:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=o?o:S,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?M:P):r===M||r===P?r=T:r===C||r===U?r=S:(r=T,o=void 0);const h=r===T&&t[e+1].startsWith("/>")?" ":"";n+=r===S?i+b:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(s.push(void 0),e):h)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=q.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?W:"@"===e[1]?J:I})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),R.nextNode(),a.push({type:2,index:++o});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var o,n,r,a;if(e===O)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const c=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);R.currentNode=o;let n=R.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new j(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Q(n,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=R.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{constructor(t,e,i,s){var o;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),x(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==L&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new q(t)),e}O(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new j(this.S(k()),this.S(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,s,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=F(this,s[i+r],e,r),a===O&&(a=this._$AH[r]),n||(n=!x(a)||a!==this._$AH[r]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.P(t)}P(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends I{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===L?void 0:t}}const V=m?m.emptyScript:"";class W extends I{constructor(){super(...arguments),this.type=4}P(t){t&&t!==L?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class J extends I{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:L)===O)return;const s=this._$AH,o=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==L&&(s===L||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const K=g.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,Y;null==K||K(q,j),(null!==(_=g.litHtmlVersions)&&void 0!==_?_:g.litHtmlVersions=[]).push("2.3.1");class X extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new j(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return O}}X.finalized=!0,X._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ot(t){return st({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;const rt=z`<svg class="icon discount_icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17.78 3.09A1.995 1.995 0 0 0 16 2h-5.165c-.535 0-1.046.214-1.422.593l-6.82 6.89c0 .002 0 .003-.002.003a2.015 2.015 0 0 0-.5.874L.738 8.055a2 2 0 0 1 .712-2.737L9.823.425A1.99 1.99 0 0 1 11.35.22l4.99 1.337a2 2 0 0 1 1.44 1.533z" fill-opacity=".55"/><path d="M10.835 2H16a2 2 0 0 1 2 2v5.172c0 .53-.21 1.04-.586 1.414l-6.818 6.818a2 2 0 0 1-2.82.01l-5.166-5.1a2.001 2.001 0 0 1-.02-2.828c.002 0 .003 0 .003-.002l6.82-6.89A2 2 0 0 1 10.835 2zM13.5 8a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 13.5 8z"/></svg>`,at=z`<svg class="icon gift_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><g fill-rule="evenodd"><path d="M12.915 5c.055-.156.085-.325.085-.5 0-.828-.672-1.5-1.5-1.5S10 3.672 10 4.5V11h6v2h-6v5H8v-5H2v-2h6V4.5C8 3.672 7.328 3 6.5 3S5 3.672 5 4.5c0 .175.03.344.085.5h-2.05C3.012 4.837 3 4.67 3 4.5 3 2.567 4.567 1 6.5 1c.98 0 1.865.402 2.5 1.05C9.635 1.403 10.52 1 11.5 1 13.433 1 15 2.567 15 4.5c0 .17-.012.337-.035.5h-2.05z" fill-opacity=".55" fill-rule="nonzero"></path><path d="M16 13v2c0 1.657-1.343 3-3 3h-3v-5h6zm0-2h-6V5h6c1.105 0 2 .895 2 2s-.895 2-2 2v2zM2 13h6v5H5c-1.657 0-3-1.343-3-3v-2zm0-2V9C.895 9 0 8.105 0 7s.895-2 2-2h6v6H2z"></path></g></svg>`,lt=z`<svg class="icon info_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11h1v7h-2v-5c-.552 0-1-.448-1-1s.448-1 1-1h1zm0 13C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.5 7.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"></path></svg>`,ct=z`<svg class="icon spinner_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z"></path></svg>`,dt=z`<svg class="icon close_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 13.05-5.075 5.075q-.2.2-.512.212-.313.013-.538-.212-.225-.225-.225-.525 0-.3.225-.525L10.95 12 5.875 6.925q-.2-.2-.212-.513-.013-.312.212-.537.225-.225.525-.225.3 0 .525.225L12 10.95l5.075-5.075q.2-.2.513-.213.312-.012.537.213.225.225.225.525 0 .3-.225.525L13.05 12l5.075 5.075q.2.2.212.512.013.313-.212.538-.225.225-.525.225-.3 0-.525-.225Z"/></svg>`;class ht{constructor(t){this._token="",this._authorizationToken="",this._data={checkout:{applied_discounts:[],gift_cards:[],total_discount_amount:"",total_line_items_price:"",payment_due:"",customer_locale:"",presentment_currency:""}},this._discounts=[],this._gift_cards=[],this._error=!1,(this.host=t).addController(this)}getMetaUrl(t){var e,i;const s=document.createElement("div");s.innerHTML=t;const o=(null!==(i=null===(e=s.querySelector('meta[http-equiv="refresh"]'))||void 0===e?void 0:e.content)&&void 0!==i?i:"").match(/(https?:\/\/[^ ]*)/);if(null==o?void 0:o.length)return o[1]}async getDataFromMetaURL(t){const e=this.getMetaUrl(t);if(!e)return;const i=await fetch(e);if(409!==i.status){if(!i.ok)throw Error("Query failed!");return this._token=i.url.split("/").pop(),await i.text()}await this.getTokens()}async getTokens(){var t,e,i,s;const o=await fetch("/checkout");if(409===o.status)return void await this.getTokens();if(!o.ok)throw Error("Query failed!");const n=await o.text(),r=document.createElement("div");r.innerHTML=n;const a="[name=shopify-checkout-authorization-token]";if(this._authorizationToken=null!==(e=null===(t=r.querySelector(a))||void 0===t?void 0:t.content)&&void 0!==e?e:"",this._token=o.url.split("/").pop(),!this._authorizationToken){const t=await this.getDataFromMetaURL(n);if(!t)return;const e=await this.getDataFromMetaURL(t);if(!e)return;const o=document.createElement("div");o.innerHTML=e,this._authorizationToken=null!==(s=null===(i=o.querySelector(a))||void 0===i?void 0:i.content)&&void 0!==s?s:""}}async queryCheckout(t="GET",e=null){let i=await fetch(`/wallets/checkouts/${this._token}`,{headers:{accept:"*/*","content-type":"application/json","x-shopify-checkout-authorization-token":this._authorizationToken},body:e,method:t,mode:"cors",credentials:"omit"});return 409===i.status&&(i=await this.queryCheckout(t,e)),i}async clearDiscount(t,e){var i,s;const o=t.currentTarget;o.classList.add("loading");try{const t=JSON.stringify({checkout:{clear_discount:1,discount_code:e}}),n=await this.queryCheckout("PUT",t);if(!n.ok)throw Error("Operation failed!");const r=await n.json();this._data=r,(null===(i=null==r?void 0:r.checkout)||void 0===i?void 0:i.applied_discounts)&&(this._discounts=r.checkout.applied_discounts),(null===(s=null==r?void 0:r.checkout)||void 0===s?void 0:s.gift_cards)&&(this._gift_cards=r.checkout.gift_cards),o.classList.remove("loading"),this.host.requestUpdate()}catch(t){o.classList.remove("loading"),console.log(t)}}async clearGiftCard(t,e){var i,s;const o=t.currentTarget;o.classList.add("loading");try{const t=JSON.stringify({checkout:{applied_gift_cards:{[e.id]:{id:e.id,_delete:1}}}}),n=await this.queryCheckout("PUT",t);if(!n.ok)throw Error("Operation failed!");const r=await n.json();this._data=r,(null===(i=null==r?void 0:r.checkout)||void 0===i?void 0:i.applied_discounts)&&(this._discounts=r.checkout.applied_discounts),(null===(s=null==r?void 0:r.checkout)||void 0===s?void 0:s.gift_cards)&&(this._gift_cards=r.checkout.gift_cards),o.classList.remove("loading"),this.host.requestUpdate()}catch(t){o.classList.remove("loading"),console.log(t)}}async applyCode(t){var e,i;const s=JSON.stringify({checkout:{reduction_code:t}}),o=await this.queryCheckout("PUT",s);if(!o.ok)throw Error("Operation failed!");const n=await o.json();this._data=n,(null===(e=null==n?void 0:n.checkout)||void 0===e?void 0:e.applied_discounts)&&(this._discounts=n.checkout.applied_discounts),(null===(i=null==n?void 0:n.checkout)||void 0===i?void 0:i.gift_cards)&&(this._gift_cards=n.checkout.gift_cards),this.host.requestUpdate()}async discountQuery(){var t,e;try{await this.getTokens();const i=await this.queryCheckout();if(404===i.status)return void(this._error=!0);if(!i.ok)throw Error("Operation failed!");const s=await i.json();this._data=s,(null===(t=null==s?void 0:s.checkout)||void 0===t?void 0:t.applied_discounts)&&(this._discounts=s.checkout.applied_discounts),(null===(e=null==s?void 0:s.checkout)||void 0===e?void 0:e.gift_cards)&&(this._gift_cards=s.checkout.gift_cards)}catch(t){console.log(t)}}async hostConnected(){await this.discountQuery(),this.host.requestUpdate(),window.addEventListener("cart-updated",(async()=>{await this.discountQuery(),this.host.requestUpdate()}))}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt=function(t,e,i,s){for(var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let ut=class extends X{constructor(){super(...arguments),this.emptyMsg=!1,this.error=!1,this.loading=!1,this.code="",this.dataFetcher=new ht(this)}updated(){const t={data:this.dataFetcher._data},e=new CustomEvent("discounter-update",{detail:t,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)}handleInput(t){var e;this.error=!1,this.code=null===(e=t.target)||void 0===e?void 0:e.value}showTooltip(t){t.currentTarget.firstElementChild.style.display="block"}hideTooltip(t){t.currentTarget.firstElementChild.style.display="none"}async clearDiscount(t,e){await this.dataFetcher.clearDiscount(t,e),this.code="",this.error=!1}async clearGiftCard(t,e){await this.dataFetcher.clearGiftCard(t,e),this.code="",this.error=!1}async applyCode(){if(this.code.length){this.loading=!0;try{await this.dataFetcher.applyCode(this.code),this.code="",this.loading=!1}catch(t){this.loading=!1,this.error=!0,console.log(t)}}}getDiscountsAndGifts(){return!this.dataFetcher._discounts.length&&!this.dataFetcher._gift_cards.length||this.dataFetcher._error?"":z`<div class="codes">${this.dataFetcher._discounts.map((t=>{const e="automatic"===t.application_type?z`<div style="position:relative;display:flex" @mouseenter="${this.showTooltip}" @mouseleave="${this.hideTooltip}"><div class="tooltip" style="position:absolute;display:none">Automatic discount can't be removed</div>${lt}</div>`:z`<button type="button" @click="${e=>this.clearDiscount(e,t.title)}">${dt} ${ct}</button>`;return z`<div class="code"><span>${rt} <span>${t.title.toUpperCase()}</span> </span>${e}</div>`}))} ${this.dataFetcher._gift_cards.map((t=>z`<div class="code"><span>${at} <span>•••• ${t.last_characters.toUpperCase()}</span> </span><button type="button" @click="${e=>this.clearGiftCard(e,t)}">${dt} ${ct}</button></div>`))}</div>`}render(){if(this.dataFetcher._error&&this.emptyMsg)return z`<p>Your cart is currently empty.</p>`;const t=this.loading?"loading":"",e=this.error?"error":"";return z`<div class="discounter-form"><div class="form--wrapper"><div class="form"><input type="text" class="${e}" placeholder="Gift card or discount code" .value="${this.code}" @input="${this.handleInput}"> <button type="submit" class="${t}" ?disabled="${this.dataFetcher._error||!this.code.length}" @click="${this.applyCode}"><span>Apply</span> ${ct}</button></div>${this.dataFetcher._error?z`<p class="message">Your cart is currently empty.</p>`:""} ${this.error?z`<p class="message error">Invalid discount code or gift card or invalid combination</p>`:""}</div>${this.getDiscountsAndGifts()}</div>`}};ut.styles=n`.form--wrapper{padding:6px 0}.form{display:flex;flex-wrap:wrap;gap:12px}.form input{color:inherit;border-radius:5px;flex:1 1 0%;padding:13px 11px}.form input.error{border:1px solid #ff6d6d}.form button{border:0;border-radius:5px;background:var(--discounter-button-color,#000);color:#fff;cursor:pointer;font-weight:600;padding:13px 24px;position:relative}.form button[disabled]{cursor:not-allowed;opacity:.4}.form button svg{visibility:hidden;position:absolute;top:50%;left:50%;margin-top:-10px;margin-left:-10px;transition:opacity .3s ease-in-out;opacity:0}.form button.loading span{visibility:hidden}.form button.loading svg{animation:rotate .5s linear infinite;visibility:visible;opacity:1}.message{font-size:14px;margin:8px 0 4px}.message.error{color:#ff6d6d}.codes{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}.tooltip{background:var(--discounter-tooltip-bg,#fff);color:var(--discounter-tooltip-color,#000);padding:8px;border-radius:5px;font-weight:600;left:50%;top:50%;white-space:nowrap}.code{background-color:var(--discounter-code-bg,#e7f3f6);border-radius:5px;color:var(--discounter-code-color,#000);display:inline-flex;gap:8px;padding:10px}.code span{align-items:center;display:flex;font-size:13px;font-weight:600;gap:8px}.icon{fill:currentColor;height:18px;width:18px}.code button{background:0 0;border:0;cursor:pointer;padding:0}.code button .spinner_icon{animation:rotate .5s linear infinite}.code button .close_icon,.code button.loading .spinner_icon{display:block}.code button .spinner_icon,.code button.loading .close_icon{display:none}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`,pt([st({type:Boolean,attribute:"empty-msg"})],ut.prototype,"emptyMsg",void 0),pt([ot()],ut.prototype,"error",void 0),pt([ot()],ut.prototype,"loading",void 0),pt([ot()],ut.prototype,"code",void 0),ut=pt([et("discounter-form")],ut);let vt=class extends X{constructor(){super(),this.dataFetcher=new ht(this),this.data=this.dataFetcher._data,window.addEventListener("discounter-update",(t=>{this.data=t.detail.data}))}_getDiscounts(t,e){return this.data.checkout.applied_discounts.length?z`${this.data.checkout.applied_discounts.map((i=>{const s="shipping"===i.value_type?"Free shipping":`- ${this._formatMoney(t,e,i.amount)}`;return z`<tr class="reduction-code"><th class="name" scope="row"><span>Discount</span> <span>${rt} <span class="text">${i.title.toUpperCase()}</span></span></th><td class="price"><span class="emphasis" aria-hidden="true">${s}</span> <span class="visually-hidden">${s} of total order price</span></td></tr>`}))}`:""}_getGiftCards(t,e){return this.data.checkout.gift_cards.length?z`${this.data.checkout.gift_cards.map((i=>z`<tr class="reduction-code"><th class="name" scope="row"><span>Gift card</span> <span>${at} <span class="text"><span aria-hidden="true">•••• ${i.last_characters.toUpperCase()}</span> <span class="visually-hidden">Gift card ending with ${i.last_characters.toUpperCase()}</span></span></span></th><td class="price"><span class="emphasis">- ${this._formatMoney(t,e,i.presentment_amount_used)}</span></td></tr>`))}`:""}_formatMoney(t,e,i){return new Intl.NumberFormat(t,{style:"currency",currency:e}).format(+i)}render(){return this.dataFetcher._error?"":this.data.checkout.total_line_items_price?z`<div class="discounter-summary"><table class="table"><caption class="visually-hidden">Cost summary</caption><thead><tr><th scope="col"><span class="visually-hidden">Description</span></th><th scope="col"><span class="visually-hidden">Price</span></th></tr></thead><tbody class="tbody"><tr class="subtotal"><th class="name" scope="row">Subtotal</th><td class="price"><span class="emphasis">${this._formatMoney(this.data.checkout.customer_locale,this.data.checkout.presentment_currency,this.data.checkout.total_line_items_price)}</span></td></tr>${this._getDiscounts(this.data.checkout.customer_locale,this.data.checkout.presentment_currency)} ${this._getGiftCards(this.data.checkout.customer_locale,this.data.checkout.presentment_currency)}</tbody><tfoot class="footer"><tr class="payment-due"><th class="name" scope="row">Total</th><td class="price"><span class="currency">${this.data.checkout.presentment_currency}</span> <span class="emphasis">${this._formatMoney(this.data.checkout.customer_locale,this.data.checkout.presentment_currency,this.data.checkout.payment_due)}</span></td></tr></tfoot></table></div>`:z`<div class="discounter-summary"><table class="table"><caption class="visually-hidden">Cost summary</caption><thead><tr><th scope="col"><span class="visually-hidden">Description</span></th><th scope="col"><span class="visually-hidden">Price</span></th></tr></thead><tbody class="tbody"><tr class="subtotal"><th class="name" scope="row">Subtotal</th><td class="price loading"></td></tr><tr class="reduction-code"><th class="name loading" scope="row"></th><td class="price loading"></td></tr></tbody><tfoot class="footer"><tr class="payment-due"><th class="name" scope="row">Total</th><td class="price loading"></td></tr></tfoot></table></div>`}};vt.styles=n`table{width:100%}.visually-hidden{border:0;clip:rect(0,0,0,0);clip:rect(0 0 0 0);width:2px;height:2px;margin:-2px;overflow:hidden;padding:0;position:absolute;white-space:nowrap}.discounter-summary .icon{fill:currentColor;height:18px;width:18px}tbody tr:first-child .name{padding-top:0}.name.loading,.price.loading{padding-top:8px}.name{font-size:14px;font-weight:400;text-align:left}.name span:nth-child(2){margin-left:8px}.price{font-size:14px;font-weight:600;text-align:right}.name.loading::after{width:80px}.price.loading{width:80px}.name.loading::after,.price.loading::after{animation:pulse 1s infinite;background-color:var(--discounter-loading-bg,#f0f0fa);border-radius:3px;content:"";color:transparent;display:list-item}.footer .name{font-size:16px;font-weight:400}.footer .currency{font-size:12px;font-weight:400}.footer .emphasis{font-size:24px;font-weight:600;letter-spacing:-.04em;line-height:1em}.footer .name,.footer .price{line-height:1.3em;padding-top:3em;white-space:nowrap}.footer .payment-due{position:sticky}.footer .payment-due::after{background-color:rgba(162,170,172,.34);content:'';position:absolute;top:1.2em;left:0;width:100%;height:1px}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0}}`,pt([ot()],vt.prototype,"data",void 0),vt=pt([et("discounter-summary")],vt);export{ut as DiscounterForm,vt as DiscounterSummary};
