import{a as ve,b as Wn,c as Yn,h as Gn,i as Kn,j as Xn}from"./chunk-D5V73A2S.js";import{$ as Q,B as _e,Da as An,E as mn,Fa as En,Ga as Cn,Ha as at,I as gn,Ia as Tn,Ja as de,Jb as zn,Ka as st,Mb as Pe,Na as ot,Nb as Hn,Oa as ee,Pa as te,Pb as $n,Qa as On,Qb as Un,Ra as Mn,Sa as xn,Ta as Ln,Ua as In,V as yn,Va as Dn,Wa as kn,Xa as Y,Xb as Bn,Y as vn,Ya as Re,a as g,aa as bn,ab as pe,b as _,ba as Sn,bb as ct,c as ln,cb as _n,da as M,db as Rn,eb as he,fa as S,fb as Pn,ga as ue,h as fn,ia as w,ja as m,jb as me,k as un,ka as v,kb as ge,l as dn,la as j,lb as ne,lc as re,mb as Nn,mc as lt,na as wn,o as pn,pb as Fn,q as nt,r as ke,rb as ye,sc as Ne,tc as E,va as C,vc as Fe,w as J,wa as W,x as hn,xa as rt,xb as jn,xc as Vn,za as it}from"./chunk-VDFLNB2U.js";var ze=new w(""),ht=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,i,a){return this._findPluginFor(n).addEventListener(t,n,i,a)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(a=>a.supports(t)),!n)throw new M(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(m(ze),m(ye))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),be=class{_doc;constructor(r){this._doc=r}manager},ft="ng-app-id";function qn(e){for(let r of e)r.remove()}function Zn(e,r){let t=r.createElement("style");return t.textContent=e,t}function Fi(e,r,t,n){let i=e.head?.querySelectorAll(`style[${ft}="${r}"],link[${ft}="${r}"]`);if(i)for(let a of i)a.removeAttribute(ft),a instanceof HTMLLinkElement?n.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&t.set(a.textContent,{usage:0,elements:[a]})}function dt(e,r){let t=r.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var mt=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,i,a={}){this.doc=t,this.appId=n,this.nonce=i,Fi(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let i of t)this.addUsage(i,this.inline,Zn);n?.forEach(i=>this.addUsage(i,this.external,dt))}removeStyles(t,n){for(let i of t)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,n,i){let a=n.get(t);a?a.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(t,this.doc)))})}removeUsage(t,n){let i=n.get(t);i&&(i.usage--,i.usage<=0&&(qn(i.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])qn(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(t,Zn(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(t,dt(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(m(C),m(at),m(st,8),m(de))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),ut={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},gt=/%COMP%/g;var Qn="%COMP%",ji=`_nghost-${Qn}`,zi=`_ngcontent-${Qn}`,Hi=!0,$i=new w("",{providedIn:"root",factory:()=>Hi});function Ui(e){return zi.replace(gt,e)}function Bi(e){return ji.replace(gt,e)}function er(e,r){return r.map(t=>t.replace(gt,e))}var yt=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,i,a,s,o,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=a,this.doc=s,this.platformId=o,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=!1,this.defaultRenderer=new Se(t,s,l,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,n);return i instanceof je?i.applyToHost(t):i instanceof we&&i.applyStyles(),i}getOrCreateRenderer(t,n){let i=this.rendererByCompId,a=i.get(n.id);if(!a){let s=this.doc,o=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.platformIsServer,h=this.tracingService;switch(n.encapsulation){case ot.Emulated:a=new je(l,c,n,this.appId,u,s,o,p,h);break;case ot.ShadowDom:return new pt(l,c,t,n,s,o,this.nonce,p,h);default:a=new we(l,c,n,u,s,o,p,h);break}i.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||e)(m(ht),m(mt),m(at),m($i),m(C),m(de),m(ye),m(st),m(Fn,8))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Se=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,t,n,i,a){this.eventManager=r,this.doc=t,this.ngZone=n,this.platformIsServer=i,this.tracingService=a}destroy(){}destroyNode=null;createElement(r,t){return t?this.doc.createElementNS(ut[t]||t,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,t){(Jn(r)?r.content:r).appendChild(t)}insertBefore(r,t,n){r&&(Jn(r)?r.content:r).insertBefore(t,n)}removeChild(r,t){t.remove()}selectRootElement(r,t){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new M(-5104,!1);return t||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,t,n,i){if(i){t=i+":"+t;let a=ut[i];a?r.setAttributeNS(a,t,n):r.setAttribute(t,n)}else r.setAttribute(t,n)}removeAttribute(r,t,n){if(n){let i=ut[n];i?r.removeAttributeNS(i,t):r.removeAttribute(`${n}:${t}`)}else r.removeAttribute(t)}addClass(r,t){r.classList.add(t)}removeClass(r,t){r.classList.remove(t)}setStyle(r,t,n,i){i&(pe.DashCase|pe.Important)?r.style.setProperty(t,n,i&pe.Important?"important":""):r.style[t]=n}removeStyle(r,t,n){n&pe.DashCase?r.style.removeProperty(t):r.style[t]=""}setProperty(r,t,n){r!=null&&(r[t]=n)}setValue(r,t){r.nodeValue=t}listen(r,t,n,i){if(typeof r=="string"&&(r=ve().getGlobalEventTarget(this.doc,r),!r))throw new M(5102,!1);let a=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(r,t,a)),this.eventManager.addEventListener(r,t,a,i)}decoratePreventDefault(r){return t=>{if(t==="__ngUnwrap__")return r;r(t)===!1&&t.preventDefault()}}};function Jn(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var pt=class extends Se{sharedStylesHost;hostEl;shadowRoot;constructor(r,t,n,i,a,s,o,l,c){super(r,a,s,l,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=er(i.id,u);for(let h of u){let b=document.createElement("style");o&&b.setAttribute("nonce",o),b.textContent=h,this.shadowRoot.appendChild(b)}let p=i.getExternalStyles?.();if(p)for(let h of p){let b=dt(h,a);o&&b.setAttribute("nonce",o),this.shadowRoot.appendChild(b)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,t){return super.appendChild(this.nodeOrShadowRoot(r),t)}insertBefore(r,t,n){return super.insertBefore(this.nodeOrShadowRoot(r),t,n)}removeChild(r,t){return super.removeChild(null,t)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},we=class extends Se{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,t,n,i,a,s,o,l,c){super(r,a,s,o,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let u=n.styles;this.styles=c?er(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},je=class extends we{contentAttr;hostAttr;constructor(r,t,n,i,a,s,o,l,c){let u=i+"-"+n.id;super(r,t,n,a,s,o,l,c,u),this.contentAttr=Ui(u),this.hostAttr=Bi(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,t){let n=super.createElement(r,t);return super.setAttribute(n,this.contentAttr,""),n}};var He=class e extends Yn{supportsDOMEvents=!0;static makeCurrent(){Wn(new e)}onAndCancel(r,t,n,i){return r.addEventListener(t,n,i),()=>{r.removeEventListener(t,n,i)}}dispatchEvent(r,t){r.dispatchEvent(t)}remove(r){r.remove()}createElement(r,t){return t=t||this.getDefaultDocument(),t.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,t){return t==="window"?window:t==="document"?r:t==="body"?r.body:null}getBaseHref(r){let t=Wi();return t==null?null:Yi(t)}resetBaseElement(){Ee=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Gn(document.cookie,r)}},Ee=null;function Wi(){return Ee=Ee||document.head.querySelector("base"),Ee?Ee.getAttribute("href"):null}function Yi(e){return new URL(e,document.baseURI).pathname}var Gi=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),nr=(()=>{class e extends be{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,i,a){return t.addEventListener(n,i,a),()=>this.removeEventListener(t,n,i,a)}removeEventListener(t,n,i,a){return t.removeEventListener(n,i,a)}static \u0275fac=function(n){return new(n||e)(m(C))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),tr=["alt","control","meta","shift"],Ki={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Xi={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},rr=(()=>{class e extends be{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,i,a){let s=e.parseEventName(n),o=e.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ve().onAndCancel(t,s.domEventName,o,a))}static parseEventName(t){let n=t.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let a=e._normalizeKey(n.pop()),s="",o=n.indexOf("code");if(o>-1&&(n.splice(o,1),s="code."),tr.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=a,n.length!=0||a.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(t,n){let i=Ki[t.key]||t.key,a="";return n.indexOf("code.")>-1&&(i=t.code,a="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),tr.forEach(s=>{if(s!==i){let o=Xi[s];o(t)&&(a+=s+".")}}),a+=i,a===n)}static eventCallback(t,n,i){return a=>{e.matchEventFullKeyCode(a,t)&&i.runGuarded(()=>n(a))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(m(C))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function qi(e,r){return Vn(g({rootComponent:e},Zi(r)))}function Zi(e){return{appProviders:[...na,...e?.providers??[]],platformProviders:ta}}function Ji(){He.makeCurrent()}function Qi(){return new rt}function ea(){return Cn(document),document}var ta=[{provide:de,useValue:Xn},{provide:Tn,useValue:Ji,multi:!0},{provide:C,useFactory:ea}];var na=[{provide:wn,useValue:"root"},{provide:rt,useFactory:Qi},{provide:ze,useClass:nr,multi:!0,deps:[C]},{provide:ze,useClass:rr,multi:!0,deps:[C]},yt,mt,ht,{provide:_n,useExisting:yt},{provide:Kn,useClass:Gi},[]];var Nc=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(m(C))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var bt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:function(n){let i=null;return n?i=new(n||e):i=m(ra),i},providedIn:"root"})}return e})(),ra=(()=>{class e extends bt{_doc;constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case Y.NONE:return n;case Y.HTML:return te(n,"HTML")?ee(n):kn(this._doc,String(n)).toString();case Y.STYLE:return te(n,"Style")?ee(n):n;case Y.SCRIPT:if(te(n,"Script"))return ee(n);throw new M(5200,!1);case Y.URL:return te(n,"URL")?ee(n):Dn(String(n));case Y.RESOURCE_URL:if(te(n,"ResourceURL"))return ee(n);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(t){return On(t)}bypassSecurityTrustStyle(t){return Mn(t)}bypassSecurityTrustScript(t){return xn(t)}bypassSecurityTrustUrl(t){return Ln(t)}bypassSecurityTrustResourceUrl(t){return In(t)}static \u0275fac=function(n){return new(n||e)(m(C))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function St(e){e||(e=v(W));let r=new fn(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(bn(r))}function ia(e,r){let n=!r?.manualCleanup?r?.injector?.get(W)??v(W):null,i=aa(r?.equal),a;r?.requireSync?a=it({kind:0},{equal:i}):a=it({kind:1,value:r?.initialValue},{equal:i});let s,o=e.subscribe({next:l=>a.set({kind:1,value:l}),error:l=>{a.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(r?.requireSync&&a().kind===0)throw new M(601,!1);return s=n?.onDestroy(o.unsubscribe.bind(o)),re(()=>{let l=a();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new M(601,!1)}},{equal:r?.equal})}function aa(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var Et=class{translations;constructor(r){this.translations=r}getTranslation(r){return ke(this.translations.get(r)||{})}},sr=new w("");function wt(e,r){return e&&(Object.prototype.hasOwnProperty.call(e,r)?e[r]:r.split(".").reduce((t,n)=>t?.[n],e))}function oa(e,r,t){e=g({},e);let n=r.split("."),i=n.length-1;return n.reduce((a,s,o)=>(o===i?a[s]=t:a[s]=Array.isArray(a[s])?a[s].slice():g({},a[s]),a&&a[s]),e),e}function or(e){return e?Array.isArray(e)?e.length:Be(e)?Object.keys(e).length:e?e.length:0:0}function ca(e){return or(e)===0}function la(e){return typeof e=="function"}function ae(e){return typeof e=="string"}function Be(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function cr(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,(r,t)=>t==0?r.toLowerCase():r.toUpperCase()).replace(/\s+|_|-|\//g,"")}function lr(){return typeof window<"u"}function Ct(e){return e==null}function ir(e){return Ct(e)===!1}function fr(e){return e&&typeof e.scope=="string"}function fa(e){return e&&Be(e.loader)}function ar(e){let r={};function t(n,i){if(n===null)r[i]=null;else if(Be(n))for(let[a,s]of Object.entries(n))t(s,i?`${i}.${a}`:a);else r[i]=n}return t(e,""),r}function ua(e){let r={};for(let[t,n]of Object.entries(e)){let i=t.split("."),a=r;i.forEach((s,o)=>{o===i.length-1?a[s]=n:(a[s]??={},a=a[s])})}return r}var se=new w("",{providedIn:"root",factory:()=>ie}),ie={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function da(e={}){return _(g(g({},ie),e),{missingHandler:g(g({},ie.missingHandler),e.missingHandler),flatten:g(g({},ie.flatten),e.flatten),scopes:g(g({},ie.scopes),e.scopes)})}var ur=new w(""),pa=(()=>{class e{config=v(se,{optional:!0})??ie;get interpolationMatcher(){return ha(this.config)}transpile({value:t,params:n={},translation:i,key:a}){if(ae(t)){let s,o=t;for(;(s=this.interpolationMatcher.exec(o))!==null;){let[l,c]=s;o=o.replace(l,()=>{let u=c.trim(),p=wt(n,u);return ir(p)?p:ir(i[u])?this.transpile({params:n,translation:i,key:a,value:i[u]}):""})}return o}else n&&(Be(t)?t=this.handleObject({value:t,params:n,translation:i,key:a}):Array.isArray(t)&&(t=this.handleArray({value:t,params:n,translation:i,key:a})));return t}handleObject({value:t,params:n={},translation:i,key:a}){let s=t;return Object.keys(n).forEach(o=>{let l=this.transpile({value:wt(s,o),params:wt(n,o),translation:i,key:a});s=oa(s,o,l)}),s}handleArray(i){var a=i,{value:t}=a,n=ln(a,["value"]);return t.map(s=>this.transpile(g({value:s},n)))}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function ha(e){let[r,t]=e.interpolation;return new RegExp(`${r}([^${r}${t}]*?)${t}`,"g")}var dr=new w(""),ma=(()=>{class e{handle(t,n){if(n.missingHandler.logMissingKey&&!n.prodMode){let i=`Missing translation for '${t}'`;console.warn(`%c ${i}`,"font-size: 12px; color: red")}return t}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),pr=new w(""),ga=(()=>{class e{preSaveTranslation(t){return t}preSaveTranslationKey(t,n){return n}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),hr=new w(""),ya=(()=>{class e{userConfig;constructor(t){this.userConfig=t}getNextLangs(){let t=this.userConfig.fallbackLang;if(!t)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(t)?t:[t]}static \u0275fac=function(n){return new(n||e)(m(se))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Ce(e){if(!e)return"";let r=e.split("/");return r.pop(),r.join("/")}function z(e){return e?e.split("/").pop():""}function Tt(e,r,t="|"){if(ae(e)){let n=e.split(t),i=n.pop();return i===r?[!0,n.toString()]:[!1,i]}return[!1,""]}function mr(e,r){let[t]=Tt(r,"static");return t?!1:!!e.config.reRenderOnLangChange}function gr(e){return e?r=>r:gn(1)}function va(e,r){return Object.keys(e).reduce((t,n)=>(t[`${r}/${n}`]=e[n],t),{})}function Mt(e,r){return fa(e)?va(e.loader,r):void 0}function At(e){return{scope:Ce(e)||null,langName:z(e)}}function yr(e){let{path:r,inlineLoader:t,mainLoader:n,data:i}=e;if(t){let a=t[r];if(la(a)===!1)throw`You're using an inline loader but didn't provide a loader for ${r}`;return t[r]().then(s=>s.default?s.default:s)}return n.getTranslation(r,i)}function ba({mainLoader:e,path:r,data:t,fallbackPath:n,inlineLoader:i}){return(n?[r,n]:[r]).map(s=>{let o=yr({path:s,mainLoader:e,inlineLoader:i,data:t});return nt(o).pipe(J(l=>({translation:l,lang:s})))})}var vr;function br(e,r={},t){return vr.translate(e,r,t)}var Sr=(()=>{class e{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new un;events$=this.events.asObservable();config;destroyRef=v(W);constructor(t,n,i,a,s,o){this.loader=t,this.parser=n,this.missingHandler=i,this.interceptor=a,this.fallbackStrategy=o,this.loader||(this.loader=new Et(this.translations)),vr=this,this.config=JSON.parse(JSON.stringify(s)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new dn(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.subscribe(l=>{l.type==="translationLoadSuccess"&&l.wasFailure&&this.setActiveLang(l.payload.langName)}),this.destroyRef.onDestroy(()=>{this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(t){this.defaultLang=t}getActiveLang(){return this.lang.getValue()}setActiveLang(t){return this.parser.onLangChanged?.(t),this.lang.next(t),this.events.next({type:"langChanged",payload:At(t)}),this}setAvailableLangs(t){this.availableLangs=t}getAvailableLangs(){return this.availableLangs}load(t,n={}){let i=this.cache.get(t);if(i)return i;let a,s=this._isLangScoped(t),o;s&&(o=Ce(t));let l={path:t,mainLoader:this.loader,inlineLoader:n.inlineLoader,data:s?{scope:o}:void 0};if(this.useFallbackTranslation(t)){let u=s?`${o}/${this.firstFallbackLang}`:this.firstFallbackLang,p=ba(_(g({},l),{fallbackPath:u}));a=_e(p)}else{let u=yr(l);a=nt(u)}let c=a.pipe(yn(this.config.failedRetries),Sn(u=>{if(Array.isArray(u)){u.forEach(p=>{this.handleSuccess(p.lang,p.translation),p.lang!==t&&this.cache.set(p.lang,ke({}))});return}this.handleSuccess(t,u)}),mn(u=>(this.config.prodMode||console.error(`Error while trying to load "${t}"`,u),this.handleFailure(t,n))),vn(1),St(this.destroyRef));return this.cache.set(t,c),c}translate(t,n={},i=this.getActiveLang()){if(!t)return t;let{scope:a,resolveLang:s}=this.resolveLangAndScope(i);if(Array.isArray(t))return t.map(c=>this.translate(a?`${a}.${c}`:c,n,s));t=a?`${a}.${t}`:t;let o=this.getTranslation(s),l=o[t];return l?this.parser.transpile({value:l,params:n,translation:o,key:t}):this._handleMissingKey(t,l,n)}selectTranslate(t,n,i,a=!1){let s,o=(c,u)=>this.load(c,u).pipe(J(()=>a?this.translateObject(t,n,c):this.translate(t,n,c)));if(Ct(i))return this.langChanges$.pipe(Q(c=>o(c)));if(i=Array.isArray(i)?i[0]:i,fr(i)){let c=i;i=c.scope,s=Mt(c,c.scope)}if(i=i,this.isLang(i)||this.isScopeWithLang(i))return o(i);let l=i;return this.langChanges$.pipe(Q(c=>o(`${l}/${c}`,{inlineLoader:s})))}isScopeWithLang(t){return this.isLang(z(t))}translateObject(t,n={},i=this.getActiveLang()){if(ae(t)||Array.isArray(t)){let{resolveLang:s,scope:o}=this.resolveLangAndScope(i);if(Array.isArray(t))return t.map(u=>this.translateObject(o?`${o}.${u}`:u,n,s));let l=this.getTranslation(s);t=o?`${o}.${t}`:t;let c=ua(this.getObjectByKey(l,t));return ca(c)?this.translate(t,n,i):this.parser.transpile({value:c,params:n,translation:l,key:t})}let a=[];for(let[s,o]of this.getEntries(t))a.push(this.translateObject(s,o,i));return a}selectTranslateObject(t,n,i){if(ae(t)||Array.isArray(t))return this.selectTranslate(t,n,i,!0);let[[a,s],...o]=this.getEntries(t);return this.selectTranslateObject(a,s,i).pipe(J(l=>{let c=[l];for(let[u,p]of o)c.push(this.translateObject(u,p,i));return c}))}getTranslation(t){if(t){if(this.isLang(t))return this.translations.get(t)||{};{let{scope:n,resolveLang:i}=this.resolveLangAndScope(t),a=this.translations.get(i)||{};return this.getObjectByKey(a,n)}}return this.translations}selectTranslation(t){let n=this.langChanges$;if(t){let i=z(t)!==t;this.isLang(t)||i?n=ke(t):n=this.langChanges$.pipe(J(a=>`${t}/${a}`))}return n.pipe(Q(i=>this.load(i).pipe(J(()=>this.getTranslation(i)))))}setTranslation(t,n=this.getActiveLang(),i={}){let s=g(g({},{merge:!0,emitChange:!0}),i),o=Ce(n),l=t;if(o){let b=this.getMappedScope(o);l=ar({[b]:t})}let c=o?z(n):n,u=g(g({},s.merge&&this.getTranslation(c)),l),p=this.config.flatten.aot?u:ar(u),h=this.interceptor.preSaveTranslation(p,c);this.translations.set(c,h),s.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(t,n,i={}){let a=i.lang||this.getActiveLang(),s=this.interceptor.preSaveTranslationKey(t,n,a),o={[t]:s};this.setTranslation(o,a,_(g({},i),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:t}){let n=Array.isArray(t)?t[0]:t;t&&this.useFallbackTranslation(n)&&(this.firstFallbackLang=n)}_handleMissingKey(t,n,i){if(this.config.missingHandler.allowEmpty&&n==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let a=this.translate(t,i,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,a}return this.missingHandler.handle(t,this.getMissingHandlerData(),i)}_isLangScoped(t){return this.getAvailableLangsIds().indexOf(t)===-1}isLang(t){return this.getAvailableLangsIds().indexOf(t)!==-1}_loadDependencies(t,n){let i=z(t);return this._isLangScoped(t)&&!this.isLoadedTranslation(i)?hn([this.load(i),this.load(t,{inlineLoader:n})]):this.load(t,{inlineLoader:n})}_completeScopeWithLang(t){return this._isLangScoped(t)&&!this.isLang(z(t))?`${t}/${this.getActiveLang()}`:t}_setScopeAlias(t,n){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[t]=n}isLoadedTranslation(t){return or(this.getTranslation(t))}getAvailableLangsIds(){let t=this.getAvailableLangs()[0];return ae(t)?this.getAvailableLangs():this.getAvailableLangs().map(n=>n.id)}getMissingHandlerData(){return _(g({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(t){return this.config.missingHandler.useFallbackTranslation&&t!==this.firstFallbackLang}handleSuccess(t,n){this.setTranslation(n,t,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:At(t)}),this.failedLangs.forEach(i=>this.cache.delete(i)),this.failedLangs.clear()}handleFailure(t,n){Ct(n.failedCounter)&&(n.failedCounter=0,n.fallbackLangs||(n.fallbackLangs=this.fallbackStrategy.getNextLangs(t)));let i=t.split("/"),s=n.fallbackLangs[n.failedCounter];if(this.failedLangs.add(t),this.cache.has(s))return this.handleSuccess(s,this.getTranslation(s)),pn;let o=s===i[i.length-1];if(!s||o){let c="Unable to load translation and all the fallback languages";throw i.length>1&&(c+=", did you misspelled the scope name?"),new Error(c)}let l=s;return i.length>1&&(i[i.length-1]=s,l=i.join("/")),n.failedCounter++,this.events.next({type:"translationLoadFailure",payload:At(t)}),this.load(l,n)}getMappedScope(t){let{scopeMapping:n={},scopes:i={keepCasing:!1}}=this.config;return n[t]||(i.keepCasing?t:cr(t))}resolveLangAndScope(t){let n=t,i;if(this._isLangScoped(t)){let a=z(t),s=this.isLang(a);n=s?a:this.getActiveLang(),i=this.getMappedScope(s?Ce(t):t)}return{scope:i,resolveLang:n}}getObjectByKey(t,n){let i={},a=`${n}.`;for(let s in t)s.startsWith(a)&&(i[s.replace(a,"")]=t[s]);return i}getEntries(t){return t instanceof Map?t.entries():Object.entries(t)}static \u0275fac=function(n){return new(n||e)(m(sr,8),m(ur),m(dr),m(pr),m(se),m(hr))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Sa=(()=>{class e{html;static \u0275fac=function(n){return new(n||e)};static \u0275cmp=me({type:e,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(n,i){n&1&&zn(0,"div",0),n&2&&Pe("innerHTML",i.html,Re)},encapsulation:2})}return e})(),Ot=class{view;vcr;constructor(r,t){this.view=r,this.vcr=t}attachView(){if(this.view instanceof ct)this.vcr.createEmbeddedView(this.view);else if(ae(this.view)){let r=this.vcr.createComponent(Sa);r.instance.html=this.view,r.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},wr=new w(""),wa=new w(""),Ar=new w(""),$e=class{initialized=!1;resolve({inline:r,provider:t,active:n}){let i=n;if(this.initialized)return i=n,i;if(t){let[,a]=Tt(t,"static");i=a}if(r){let[,a]=Tt(r,"static");i=a}return this.initialized=!0,i}resolveLangBasedOnScope(r){return Ce(r)?z(r):r}resolveLangPath(r,t){return t?`${t}/${r}`:r}},Ue=class{service;constructor(r){this.service=r}resolve(r){let{inline:t,provider:n}=r;if(t)return t;if(n){if(fr(n)){let{scope:i,alias:a=this.service.config.scopes.keepCasing?i:cr(i)}=n;return this.service._setScopeAlias(i,a),i}return n}}},ml=(()=>{class e{destroyRef=v(W);service=v(Sr);tpl=v(ct,{optional:!0});providerLang=v(wr,{optional:!0});providerScope=v(Ar,{optional:!0});providedLoadingTpl=v(wa,{optional:!0});cdr=v(Fe);host=v(En);vcr=v(Pn);renderer=v(Rn);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new $e;scopeResolver=new Ue(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(t,n){return!0}ngOnInit(){let t=mr(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(Q(n=>{let i=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:n});return Array.isArray(this.providerScope)?_e(this.providerScope.map(a=>this.resolveScope(i,a))):this.resolveScope(i,this.providerScope)}),gr(t),St(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let n=this.resolveLoadingContent();n&&(this.loaderTplHandler=new Ot(n,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(t){this.strategy==="attribute"&&Object.keys(t).some(i=>!t[i].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(t,n){this.memo.clear();let i=this.getTranslateFn(t,n);this.view?(this.view.context.$implicit=i,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:i,currentLang:this.currentLang}))}getTranslateFn(t,n){return(i,a)=>{let s=n?`${n}.${i}`:i,o=a?`${s}${JSON.stringify(a)}`:s;return this.memo.has(o)||this.memo.set(o,this.service.translate(s,a,t)),this.memo.get(o)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(t,n){let i=this.scopeResolver.resolve({inline:this.inlineScope,provider:n});this.path=this.langResolver.resolveLangPath(t,i);let a=Mt(n,i);return this.service._loadDependencies(this.path,a)}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ne({type:e,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[An]})}return e})(),gl=(()=>{class e{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new $e;scopeResolver;constructor(t,n,i,a){this.service=t,this.providerScope=n,this.providerLang=i,this.cdr=a,this.scopeResolver=new Ue(this.service)}transform(t,n,i){if(!t)return t;let a=n?`${t}${JSON.stringify(n)}`:t;if(a===this.lastKey)return this.lastValue;this.lastKey=a,this.subscription?.unsubscribe();let s=mr(this.service,this.providerLang||i);return this.subscription=this.service.langChanges$.pipe(Q(o=>{let l=this.langResolver.resolve({inline:i,provider:this.providerLang,active:o});return Array.isArray(this.providerScope)?_e(this.providerScope.map(c=>this.resolveScope(l,c))):this.resolveScope(l,this.providerScope)}),gr(s)).subscribe(()=>this.updateValue(t,n)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(t,n){let i=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(t,n,i),this.cdr.markForCheck()}resolveScope(t,n){let i=this.scopeResolver.resolve({inline:void 0,provider:n});this.path=this.langResolver.resolveLangPath(t,i);let a=Mt(n,i);return this.service._loadDependencies(this.path,a)}static \u0275fac=function(n){return new(n||e)(he(Sr,16),he(Ar,24),he(wr,24),he(Fe,16))};static \u0275pipe=Nn({name:"transloco",type:e,pure:!1})}return e})();function yl(e){let r=[Ca(pa),Oa(ma),Ma(ga),Ta(ya)];return e.config&&r.push(Aa(e.config)),e.loader&&r.push(Ea(e.loader)),r}function Aa(e){return j([{provide:se,useValue:da(e)}])}function Ea(e){return j([{provide:sr,useClass:e}])}function Ca(e){return j([{provide:ur,useClass:e,deps:[se]}])}function Ta(e){return j([{provide:hr,useClass:e,deps:[se]}])}function Oa(e){return j([{provide:dr,useClass:e}])}function Ma(e){return j([{provide:pr,useClass:e}])}var vl=new w("TRANSLOCO_TEST_LANGS - Available testing languages"),bl=new w("TRANSLOCO_TEST_OPTIONS - Testing options");function Sl(){let e=xa();if(!(!e||!lr()))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}function xa(){if(!lr())return"";let e=window.navigator;return e.languages?.[0]??e.language}function La(e,r,t){return(r=Da(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Er(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Er(Object(t),!0).forEach(function(n){La(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Er(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ia(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Da(e){var r=Ia(e,"string");return typeof r=="symbol"?r:r+""}var Cr=()=>{},qt={},qr={},Zr=null,Jr={mark:Cr,measure:Cr};try{typeof window<"u"&&(qt=window),typeof document<"u"&&(qr=document),typeof MutationObserver<"u"&&(Zr=MutationObserver),typeof performance<"u"&&(Jr=performance)}catch{}var{userAgent:Tr=""}=qt.navigator||{},$=qt,y=qr,Or=Zr,Ve=Jr,El=!!$.document,N=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Qr=~Tr.indexOf("MSIE")||~Tr.indexOf("Trident/"),ka=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,_a=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ei={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ra={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ti=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",qe="duotone",Pa="sharp",Na="sharp-duotone",ni=[A,qe,Pa,Na],Fa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ja={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},za=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ha={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},$a=["fak","fa-kit","fakd","fa-kit-duotone"],Mr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ua=["kit"],Ba={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Va=["fak","fakd"],Wa={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},xr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},We={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ya=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ga=["fak","fa-kit","fakd","fa-kit-duotone"],Ka={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},_t={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Za=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Rt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ya,...Za],Ja=["solid","regular","light","thin","duotone","brands"],ri=[1,2,3,4,5,6,7,8,9,10],Qa=ri.concat([11,12,13,14,15,16,17,18,19,20]),es=[...Object.keys(qa),...Ja,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",We.GROUP,We.SWAP_OPACITY,We.PRIMARY,We.SECONDARY].concat(ri.map(e=>"".concat(e,"x"))).concat(Qa.map(e=>"w-".concat(e))),ts={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",Pt=16,ii="fa",ai="svg-inline--fa",K="data-fa-i2svg",Nt="data-fa-pseudo-element",ns="data-fa-pseudo-element-pending",Zt="data-prefix",Jt="data-icon",Lr="fontawesome-i2svg",rs="async",is=["HTML","HEAD","STYLE","SCRIPT"],si=(()=>{try{return!0}catch{return!1}})();function Ie(e){return new Proxy(e,{get(r,t){return t in r?r[t]:r[A]}})}var oi=f({},ei);oi[A]=f(f(f(f({},{"fa-duotone":"duotone"}),ei[A]),Mr.kit),Mr["kit-duotone"]);var as=Ie(oi),Ft=f({},Ha);Ft[A]=f(f(f(f({},{duotone:"fad"}),Ft[A]),xr.kit),xr["kit-duotone"]);var Ir=Ie(Ft),jt=f({},_t);jt[A]=f(f({},jt[A]),Wa.kit);var Qt=Ie(jt),zt=f({},Xa);zt[A]=f(f({},zt[A]),Ba.kit);var Cl=Ie(zt),ss=ka,ci="fa-layers-text",os=_a,cs=f({},Fa),Tl=Ie(cs),ls=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt=Ra,fs=[...Ua,...es],Oe=$.FontAwesomeConfig||{};function us(e){var r=y.querySelector("script["+e+"]");if(r)return r.getAttribute(e)}function ds(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(r=>{let[t,n]=r,i=ds(us(t));i!=null&&(Oe[n]=i)});var li={styleDefault:"solid",familyDefault:A,cssPrefix:ii,replacementClass:ai,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oe.familyPrefix&&(Oe.cssPrefix=Oe.familyPrefix);var le=f(f({},li),Oe);le.autoReplaceSvg||(le.observeMutations=!1);var d={};Object.keys(li).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(r){le[e]=r,Me.forEach(t=>t(d))},get:function(){return le[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){le.cssPrefix=e,Me.forEach(r=>r(d))},get:function(){return le.cssPrefix}});$.FontAwesomeConfig=d;var Me=[];function ps(e){return Me.push(e),()=>{Me.splice(Me.indexOf(e),1)}}var H=Pt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hs(e){if(!e||!N)return;let r=y.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=e;let t=y.head.childNodes,n=null;for(let i=t.length-1;i>-1;i--){let a=t[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=a)}return y.head.insertBefore(r,n),e}var ms="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xe(){let e=12,r="";for(;e-- >0;)r+=ms[Math.random()*62|0];return r}function fe(e){let r=[];for(let t=(e||[]).length>>>0;t--;)r[t]=e[t];return r}function en(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(r=>r)}function fi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gs(e){return Object.keys(e||{}).reduce((r,t)=>r+"".concat(t,'="').concat(fi(e[t]),'" '),"").trim()}function Ze(e){return Object.keys(e||{}).reduce((r,t)=>r+"".concat(t,": ").concat(e[t].trim(),";"),"")}function tn(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function ys(e){let{transform:r,containerWidth:t,iconWidth:n}=e,i={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(a," ").concat(s," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:l,path:c}}function vs(e){let{transform:r,width:t=Pt,height:n=Pt,startCentered:i=!1}=e,a="";return i&&Qr?a+="translate(".concat(r.x/H-t/2,"em, ").concat(r.y/H-n/2,"em) "):i?a+="translate(calc(-50% + ".concat(r.x/H,"em), calc(-50% + ").concat(r.y/H,"em)) "):a+="translate(".concat(r.x/H,"em, ").concat(r.y/H,"em) "),a+="scale(".concat(r.size/H*(r.flipX?-1:1),", ").concat(r.size/H*(r.flipY?-1:1),") "),a+="rotate(".concat(r.rotate,"deg) "),a}var bs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
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
}`;function ui(){let e=ii,r=ai,t=d.cssPrefix,n=d.replacementClass,i=bs;if(t!==e||n!==r){let a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(r),"g");i=i.replace(a,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(o,".".concat(n))}return i}var Dr=!1;function Lt(){d.autoAddCss&&!Dr&&(hs(ui()),Dr=!0)}var Ss={mixout(){return{dom:{css:ui,insertCss:Lt}}},hooks(){return{beforeDOMElementCreation(){Lt()},beforeI2svg(){Lt()}}}},P=$||{};P[R]||(P[R]={});P[R].styles||(P[R].styles={});P[R].hooks||(P[R].hooks={});P[R].shims||(P[R].shims=[]);var D=P[R],di=[],pi=function(){y.removeEventListener("DOMContentLoaded",pi),Ke=1,di.map(e=>e())},Ke=!1;N&&(Ke=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Ke||y.addEventListener("DOMContentLoaded",pi));function ws(e){N&&(Ke?setTimeout(e,0):di.push(e))}function De(e){let{tag:r,attributes:t={},children:n=[]}=e;return typeof e=="string"?fi(e):"<".concat(r," ").concat(gs(t),">").concat(n.map(De).join(""),"</").concat(r,">")}function kr(e,r,t){if(e&&e[r]&&e[r][t])return{prefix:r,iconName:t,icon:e[r][t]}}var As=function(r,t){return function(n,i,a,s){return r.call(t,n,i,a,s)}},It=function(r,t,n,i){var a=Object.keys(r),s=a.length,o=i!==void 0?As(t,i):t,l,c,u;for(n===void 0?(l=1,u=r[a[0]]):(l=0,u=n);l<s;l++)c=a[l],u=o(u,r[c],c,r);return u};function Es(e){let r=[],t=0,n=e.length;for(;t<n;){let i=e.charCodeAt(t++);if(i>=55296&&i<=56319&&t<n){let a=e.charCodeAt(t++);(a&64512)==56320?r.push(((i&1023)<<10)+(a&1023)+65536):(r.push(i),t--)}else r.push(i)}return r}function Ht(e){let r=Es(e);return r.length===1?r[0].toString(16):null}function Cs(e,r){let t=e.length,n=e.charCodeAt(r),i;return n>=55296&&n<=56319&&t>r+1&&(i=e.charCodeAt(r+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function _r(e){return Object.keys(e).reduce((r,t)=>{let n=e[t];return!!n.icon?r[n.iconName]=n.icon:r[t]=n,r},{})}function $t(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=t,i=_r(r);typeof D.hooks.addPack=="function"&&!n?D.hooks.addPack(e,_r(r)):D.styles[e]=f(f({},D.styles[e]||{}),i),e==="fas"&&$t("fa",r)}var{styles:Le,shims:Ts}=D,hi=Object.keys(Qt),Os=hi.reduce((e,r)=>(e[r]=Object.keys(Qt[r]),e),{}),nn=null,mi={},gi={},yi={},vi={},bi={};function Ms(e){return~fs.indexOf(e)}function xs(e,r){let t=r.split("-"),n=t[0],i=t.slice(1).join("-");return n===e&&i!==""&&!Ms(i)?i:null}var Si=()=>{let e=n=>It(Le,(i,a,s)=>(i[s]=It(a,n,{}),i),{});mi=e((n,i,a)=>(i[3]&&(n[i[3]]=a),i[2]&&i[2].filter(o=>typeof o=="number").forEach(o=>{n[o.toString(16)]=a}),n)),gi=e((n,i,a)=>(n[a]=a,i[2]&&i[2].filter(o=>typeof o=="string").forEach(o=>{n[o]=a}),n)),bi=e((n,i,a)=>{let s=i[2];return n[a]=a,s.forEach(o=>{n[o]=a}),n});let r="far"in Le||d.autoFetchSvg,t=It(Ts,(n,i)=>{let a=i[0],s=i[1],o=i[2];return s==="far"&&!r&&(s="fas"),typeof a=="string"&&(n.names[a]={prefix:s,iconName:o}),typeof a=="number"&&(n.unicodes[a.toString(16)]={prefix:s,iconName:o}),n},{names:{},unicodes:{}});yi=t.names,vi=t.unicodes,nn=Je(d.styleDefault,{family:d.familyDefault})};ps(e=>{nn=Je(e.styleDefault,{family:d.familyDefault})});Si();function rn(e,r){return(mi[e]||{})[r]}function Ls(e,r){return(gi[e]||{})[r]}function G(e,r){return(bi[e]||{})[r]}function wi(e){return yi[e]||{prefix:null,iconName:null}}function Is(e){let r=vi[e],t=rn("fas",e);return r||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function U(){return nn}var Ai=()=>({prefix:null,iconName:null,rest:[]});function Ds(e){let r=A,t=hi.reduce((n,i)=>(n[i]="".concat(d.cssPrefix,"-").concat(i),n),{});return ni.forEach(n=>{(e.includes(t[n])||e.some(i=>Os[n].includes(i)))&&(r=n)}),r}function Je(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=A}=r,n=as[t][e];if(t===qe&&!e)return"fad";let i=Ir[t][e]||Ir[t][n],a=e in D.styles?e:null;return i||a||null}function ks(e){let r=[],t=null;return e.forEach(n=>{let i=xs(d.cssPrefix,n);i?t=i:n&&r.push(n)}),{iconName:t,rest:r}}function Rr(e){return e.sort().filter((r,t,n)=>n.indexOf(r)===t)}function Qe(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=r,n=null,i=Rt.concat(Ga),a=Rr(e.filter(p=>i.includes(p))),s=Rr(e.filter(p=>!Rt.includes(p))),o=a.filter(p=>(n=p,!ti.includes(p))),[l=null]=o,c=Ds(a),u=f(f({},ks(s)),{},{prefix:Je(l,{family:c})});return f(f(f({},u),Ns({values:e,family:c,styles:Le,config:d,canonical:u,givenPrefix:n})),_s(t,n,u))}function _s(e,r,t){let{prefix:n,iconName:i}=t;if(e||!n||!i)return{prefix:n,iconName:i};let a=r==="fa"?wi(i):{},s=G(n,i);return i=a.iconName||s||i,n=a.prefix||n,n==="far"&&!Le.far&&Le.fas&&!d.autoFetchSvg&&(n="fas"),{prefix:n,iconName:i}}var Rs=ni.filter(e=>e!==A||e!==qe),Ps=Object.keys(_t).filter(e=>e!==A).map(e=>Object.keys(_t[e])).flat();function Ns(e){let{values:r,family:t,canonical:n,givenPrefix:i="",styles:a={},config:s={}}=e,o=t===qe,l=r.includes("fa-duotone")||r.includes("fad"),c=s.familyDefault==="duotone",u=n.prefix==="fad"||n.prefix==="fa-duotone";if(!o&&(l||c||u)&&(n.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Rs.includes(t)&&(Object.keys(a).find(h=>Ps.includes(h))||s.autoFetchSvg)){let h=za.get(t).defaultShortPrefixId;n.prefix=h,n.iconName=G(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||i==="fa")&&(n.prefix=U()||"fas"),n}var Ut=class{constructor(){this.definitions={}}add(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];let i=t.reduce(this._pullDefinitions,{});Object.keys(i).forEach(a=>{this.definitions[a]=f(f({},this.definitions[a]||{}),i[a]),$t(a,i[a]);let s=Qt[A][a];s&&$t(s,i[a]),Si()})}reset(){this.definitions={}}_pullDefinitions(r,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(i=>{let{prefix:a,iconName:s,icon:o}=n[i],l=o[2];r[a]||(r[a]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(r[a][c]=o)}),r[a][s]=o}),r}},Pr=[],oe={},ce={},Fs=Object.keys(ce);function js(e,r){let{mixoutsTo:t}=r;return Pr=e,oe={},Object.keys(ce).forEach(n=>{Fs.indexOf(n)===-1&&delete ce[n]}),Pr.forEach(n=>{let i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(a=>{typeof i[a]=="function"&&(t[a]=i[a]),typeof i[a]=="object"&&Object.keys(i[a]).forEach(s=>{t[a]||(t[a]={}),t[a][s]=i[a][s]})}),n.hooks){let a=n.hooks();Object.keys(a).forEach(s=>{oe[s]||(oe[s]=[]),oe[s].push(a[s])})}n.provides&&n.provides(ce)}),t}function Bt(e,r){for(var t=arguments.length,n=new Array(t>2?t-2:0),i=2;i<t;i++)n[i-2]=arguments[i];return(oe[e]||[]).forEach(s=>{r=s.apply(null,[r,...n])}),r}function X(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];(oe[e]||[]).forEach(a=>{a.apply(null,t)})}function B(){let e=arguments[0],r=Array.prototype.slice.call(arguments,1);return ce[e]?ce[e].apply(null,r):void 0}function Vt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:r}=e,t=e.prefix||U();if(r)return r=G(t,r)||r,kr(Ei.definitions,t,r)||kr(D.styles,t,r)}var Ei=new Ut,zs=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,X("noAuto")},Hs={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(X("beforeI2svg",e),B("pseudoElements2svg",e),B("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:r}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ws(()=>{Us({autoReplaceSvgRoot:r}),X("watch",e)})}},$s={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let r=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=Je(e[0]);return{prefix:t,iconName:G(t,r)||r}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(ss))){let r=Qe(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){let r=U();return{prefix:r,iconName:G(r,e)||e}}}},O={noAuto:zs,config:d,dom:Hs,parse:$s,library:Ei,findIconDefinition:Vt,toHtml:De},Us=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:r=y}=e;(Object.keys(D.styles).length>0||d.autoFetchSvg)&&N&&d.autoReplaceSvg&&O.dom.i2svg({node:r})};function et(e,r){return Object.defineProperty(e,"abstract",{get:r}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>De(t))}}),Object.defineProperty(e,"node",{get:function(){if(!N)return;let t=y.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Bs(e){let{children:r,main:t,mask:n,attributes:i,styles:a,transform:s}=e;if(tn(s)&&t.found&&!n.found){let{width:o,height:l}=t,c={x:o/l/2,y:.5};i.style=Ze(f(f({},a),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:r}]}function Vs(e){let{prefix:r,iconName:t,children:n,attributes:i,symbol:a}=e,s=a===!0?"".concat(r,"-").concat(d.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:s}),children:n}]}]}function an(e){let{icons:{main:r,mask:t},prefix:n,iconName:i,transform:a,symbol:s,title:o,maskId:l,titleId:c,extra:u,watchable:p=!1}=e,{width:h,height:b}=t.found?t:r,F=Va.includes(n),V=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(Z=>u.classes.indexOf(Z)===-1).filter(Z=>Z!==""||!!Z).concat(u.classes).join(" "),x={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":i,class:V,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(b)})},k=F&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/b*16*.0625,"em")}:{};p&&(x.attributes[K]=""),o&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||xe())},children:[o]}),delete x.attributes.title);let T=f(f({},x),{},{prefix:n,iconName:i,main:r,mask:t,maskId:l,transform:a,symbol:s,styles:f(f({},k),u.styles)}),{children:L,attributes:q}=t.found&&r.found?B("generateAbstractMask",T)||{children:[],attributes:{}}:B("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=L,T.attributes=q,s?Vs(T):Bs(T)}function Nr(e){let{content:r,width:t,height:n,transform:i,title:a,extra:s,watchable:o=!1}=e,l=f(f(f({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});o&&(l[K]="");let c=f({},s.styles);tn(i)&&(c.transform=vs({transform:i,startCentered:!0,width:t,height:n}),c["-webkit-transform"]=c.transform);let u=Ze(c);u.length>0&&(l.style=u);let p=[];return p.push({tag:"span",attributes:l,children:[r]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function Ws(e){let{content:r,title:t,extra:n}=e,i=f(f(f({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),a=Ze(n.styles);a.length>0&&(i.style=a);let s=[];return s.push({tag:"span",attributes:i,children:[r]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var{styles:Dt}=D;function Wt(e){let r=e[0],t=e[1],[n]=e.slice(4),i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:r,height:t,icon:i}}var Ys={found:!1,width:512,height:512};function Gs(e,r){!si&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(r,'" is missing.'))}function Yt(e,r){let t=r;return r==="fa"&&d.styleDefault!==null&&(r=U()),new Promise((n,i)=>{if(t==="fa"){let a=wi(e)||{};e=a.iconName||e,r=a.prefix||r}if(e&&r&&Dt[r]&&Dt[r][e]){let a=Dt[r][e];return n(Wt(a))}Gs(e,r),n(f(f({},Ys),{},{icon:d.showMissingIcons&&e?B("missingIconAbstract")||{}:{}}))})}var Fr=()=>{},Gt=d.measurePerformance&&Ve&&Ve.mark&&Ve.measure?Ve:{mark:Fr,measure:Fr},Te='FA "6.7.2"',Ks=e=>(Gt.mark("".concat(Te," ").concat(e," begins")),()=>Ci(e)),Ci=e=>{Gt.mark("".concat(Te," ").concat(e," ends")),Gt.measure("".concat(Te," ").concat(e),"".concat(Te," ").concat(e," begins"),"".concat(Te," ").concat(e," ends"))},sn={begin:Ks,end:Ci},Ye=()=>{};function jr(e){return typeof(e.getAttribute?e.getAttribute(K):null)=="string"}function Xs(e){let r=e.getAttribute?e.getAttribute(Zt):null,t=e.getAttribute?e.getAttribute(Jt):null;return r&&t}function qs(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function Zs(){return d.autoReplaceSvg===!0?Ge.replace:Ge[d.autoReplaceSvg]||Ge.replace}function Js(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function Qs(e){return y.createElement(e)}function Ti(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?Js:Qs}=r;if(typeof e=="string")return y.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){n.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){n.appendChild(Ti(a,{ceFn:t}))}),n}function eo(e){let r=" ".concat(e.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var Ge={replace:function(e){let r=e[0];if(r.parentNode)if(e[1].forEach(t=>{r.parentNode.insertBefore(Ti(t),r)}),r.getAttribute(K)===null&&d.keepOriginalSource){let t=y.createComment(eo(r));r.parentNode.replaceChild(t,r)}else r.remove()},nest:function(e){let r=e[0],t=e[1];if(~en(r).indexOf(d.replacementClass))return Ge.replace(e);let n=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let a=t[0].attributes.class.split(" ").reduce((s,o)=>(o===d.replacementClass||o.match(n)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",a.toNode.join(" "))}let i=t.map(a=>De(a)).join(`
`);r.setAttribute(K,""),r.innerHTML=i}};function zr(e){e()}function Oi(e,r){let t=typeof r=="function"?r:Ye;if(e.length===0)t();else{let n=zr;d.mutateApproach===rs&&(n=$.requestAnimationFrame||zr),n(()=>{let i=Zs(),a=sn.begin("mutate");e.map(i),a(),t()})}}var on=!1;function Mi(){on=!0}function Kt(){on=!1}var Xe=null;function Hr(e){if(!Or||!d.observeMutations)return;let{treeCallback:r=Ye,nodeCallback:t=Ye,pseudoElementsCallback:n=Ye,observeMutationsRoot:i=y}=e;Xe=new Or(a=>{if(on)return;let s=U();fe(a).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!jr(o.addedNodes[0])&&(d.searchPseudoElements&&n(o.target),r(o.target)),o.type==="attributes"&&o.target.parentNode&&d.searchPseudoElements&&n(o.target.parentNode),o.type==="attributes"&&jr(o.target)&&~ls.indexOf(o.attributeName))if(o.attributeName==="class"&&Xs(o.target)){let{prefix:l,iconName:c}=Qe(en(o.target));o.target.setAttribute(Zt,l||s),c&&o.target.setAttribute(Jt,c)}else qs(o.target)&&t(o.target)})}),N&&Xe.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function to(){Xe&&Xe.disconnect()}function no(e){let r=e.getAttribute("style"),t=[];return r&&(t=r.split(";").reduce((n,i)=>{let a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),t}function ro(e){let r=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",i=Qe(en(e));return i.prefix||(i.prefix=U()),r&&t&&(i.prefix=r,i.iconName=t),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Ls(i.prefix,e.innerText)||rn(i.prefix,Ht(e.innerText))),!i.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function io(e){let r=fe(e.attributes).reduce((i,a)=>(i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i),{}),t=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return d.autoA11y&&(t?r["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(n||xe()):(r["aria-hidden"]="true",r.focusable="false")),r}function ao(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $r(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:n,rest:i}=ro(e),a=io(e),s=Bt("parseNodeAttributes",{},e),o=r.styleParser?no(e):[];return f({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:a}},s)}var{styles:so}=D;function xi(e){let r=d.autoReplaceSvg==="nest"?$r(e,{styleParser:!1}):$r(e);return~r.extra.classes.indexOf(ci)?B("generateLayersText",e,r):B("generateSvgReplacementMutation",e,r)}function oo(){return[...$a,...Rt]}function Ur(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();let t=y.documentElement.classList,n=u=>t.add("".concat(Lr,"-").concat(u)),i=u=>t.remove("".concat(Lr,"-").concat(u)),a=d.autoFetchSvg?oo():ti.concat(Object.keys(so));a.includes("fa")||a.push("fa");let s=[".".concat(ci,":not([").concat(K,"])")].concat(a.map(u=>".".concat(u,":not([").concat(K,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=fe(e.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),i("complete");else return Promise.resolve();let l=sn.begin("onTree"),c=o.reduce((u,p)=>{try{let h=xi(p);h&&u.push(h)}catch(h){si||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(h=>{Oi(h,()=>{n("active"),n("complete"),i("pending"),typeof r=="function"&&r(),l(),u()})}).catch(h=>{l(),p(h)})})}function co(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xi(e).then(t=>{t&&Oi([t],r)})}function lo(e){return function(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(r||{}).icon?r:Vt(r||{}),{mask:i}=t;return i&&(i=(i||{}).icon?i:Vt(i||{})),e(n,f(f({},t),{},{mask:i}))}}var fo=function(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=I,symbol:n=!1,mask:i=null,maskId:a=null,title:s=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=r;if(!e)return;let{prefix:p,iconName:h,icon:b}=e;return et(f({type:"icon"},e),()=>(X("beforeDOMElementCreation",{iconDefinition:e,params:r}),d.autoA11y&&(s?c["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(o||xe()):(c["aria-hidden"]="true",c.focusable="false")),an({icons:{main:Wt(b),mask:i?Wt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:f(f({},I),t),symbol:n,title:s,maskId:a,titleId:o,extra:{attributes:c,styles:u,classes:l}})))},uo={mixout(){return{icon:lo(fo)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ur,e.nodeCallback=co,e}}},provides(e){e.i2svg=function(r){let{node:t=y,callback:n=()=>{}}=r;return Ur(t,n)},e.generateSvgReplacementMutation=function(r,t){let{iconName:n,title:i,titleId:a,prefix:s,transform:o,symbol:l,mask:c,maskId:u,extra:p}=t;return new Promise((h,b)=>{Promise.all([Yt(n,s),c.iconName?Yt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(F=>{let[V,x]=F;h([r,an({icons:{main:V,mask:x},prefix:s,iconName:n,transform:o,symbol:l,maskId:u,title:i,titleId:a,extra:p,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(r){let{children:t,attributes:n,main:i,transform:a,styles:s}=r,o=Ze(s);o.length>0&&(n.style=o);let l;return tn(a)&&(l=B("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),t.push(l||i.icon),{children:t,attributes:n}}}},po={mixout(){return{layer(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=r;return et({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:e,params:r});let n=[];return e(i=>{Array.isArray(i)?i.map(a=>{n=n.concat(a.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...t].join(" ")},children:n}]})}}}},ho={mixout(){return{counter(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:n=[],attributes:i={},styles:a={}}=r;return et({type:"counter",content:e},()=>(X("beforeDOMElementCreation",{content:e,params:r}),Ws({content:e.toString(),title:t,extra:{attributes:i,styles:a,classes:["".concat(d.cssPrefix,"-layers-counter"),...n]}})))}}}},mo={mixout(){return{text(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=I,title:n=null,classes:i=[],attributes:a={},styles:s={}}=r;return et({type:"text",content:e},()=>(X("beforeDOMElementCreation",{content:e,params:r}),Nr({content:e,transform:f(f({},I),t),title:n,extra:{attributes:a,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(r,t){let{title:n,transform:i,extra:a}=t,s=null,o=null;if(Qr){let l=parseInt(getComputedStyle(r).fontSize,10),c=r.getBoundingClientRect();s=c.width/l,o=c.height/l}return d.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([r,Nr({content:r.innerHTML,width:s,height:o,transform:i,title:n,extra:a,watchable:!0})])}}},go=new RegExp('"',"ug"),Br=[1105920,1112319],Vr=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),ja),ts),Ka),Xt=Object.keys(Vr).reduce((e,r)=>(e[r.toLowerCase()]=Vr[r],e),{}),yo=Object.keys(Xt).reduce((e,r)=>{let t=Xt[r];return e[r]=t[900]||[...Object.entries(t)][0][1],e},{});function vo(e){let r=e.replace(go,""),t=Cs(r,0),n=t>=Br[0]&&t<=Br[1],i=r.length===2?r[0]===r[1]:!1;return{value:Ht(i?r[0]:r),isSecondary:n||i}}function bo(e,r){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(r),i=isNaN(n)?"normal":n;return(Xt[t]||{})[i]||yo[t]}function Wr(e,r){let t="".concat(ns).concat(r.replace(":","-"));return new Promise((n,i)=>{if(e.getAttribute(t)!==null)return n();let s=fe(e.children).filter(h=>h.getAttribute(Nt)===r)[0],o=$.getComputedStyle(e,r),l=o.getPropertyValue("font-family"),c=l.match(os),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!c)return e.removeChild(s),n();if(c&&p!=="none"&&p!==""){let h=o.getPropertyValue("content"),b=bo(l,u),{value:F,isSecondary:V}=vo(h),x=c[0].startsWith("FontAwesome"),k=rn(b,F),T=k;if(x){let L=Is(F);L.iconName&&L.prefix&&(k=L.iconName,b=L.prefix)}if(k&&!V&&(!s||s.getAttribute(Zt)!==b||s.getAttribute(Jt)!==T)){e.setAttribute(t,T),s&&e.removeChild(s);let L=ao(),{extra:q}=L;q.attributes[Nt]=r,Yt(k,b).then(Z=>{let Pi=an(f(f({},L),{},{icons:{main:Z,mask:Ai()},prefix:b,iconName:T,extra:q,watchable:!0})),tt=y.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?e.insertBefore(tt,e.firstChild):e.appendChild(tt),tt.outerHTML=Pi.map(Ni=>De(Ni)).join(`
`),e.removeAttribute(t),n()}).catch(i)}else n()}else n()})}function So(e){return Promise.all([Wr(e,"::before"),Wr(e,"::after")])}function wo(e){return e.parentNode!==document.head&&!~is.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yr(e){if(N)return new Promise((r,t)=>{let n=fe(e.querySelectorAll("*")).filter(wo).map(So),i=sn.begin("searchPseudoElements");Mi(),Promise.all(n).then(()=>{i(),Kt(),r()}).catch(()=>{i(),Kt(),t()})})}var Ao={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Yr,e}}},provides(e){e.pseudoElements2svg=function(r){let{node:t=y}=r;d.searchPseudoElements&&Yr(t)}}},Gr=!1,Eo={mixout(){return{dom:{unwatch(){Mi(),Gr=!0}}}},hooks(){return{bootstrap(){Hr(Bt("mutationObserverCallbacks",{}))},noAuto(){to()},watch(e){let{observeMutationsRoot:r}=e;Gr?Kt():Hr(Bt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Kr=e=>{let r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,n)=>{let i=n.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return t.flipX=!0,t;if(a&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(a){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},r)},Co={mixout(){return{parse:{transform:e=>Kr(e)}}},hooks(){return{parseNodeAttributes(e,r){let t=r.getAttribute("data-fa-transform");return t&&(e.transform=Kr(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(r){let{main:t,transform:n,containerWidth:i,iconWidth:a}=r,s={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")},h={outer:s,inner:u,path:p};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:f(f({},t.icon.attributes),h.path)}]}]}}}},kt={x:0,y:0,width:"100%",height:"100%"};function Xr(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||r)&&(e.attributes.fill="black"),e}function To(e){return e.tag==="g"?e.children:[e]}var Oo={hooks(){return{parseNodeAttributes(e,r){let t=r.getAttribute("data-fa-mask"),n=t?Qe(t.split(" ").map(i=>i.trim())):Ai();return n.prefix||(n.prefix=U()),e.mask=n,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(r){let{children:t,attributes:n,main:i,mask:a,maskId:s,transform:o}=r,{width:l,icon:c}=i,{width:u,icon:p}=a,h=ys({transform:o,containerWidth:u,iconWidth:l}),b={tag:"rect",attributes:f(f({},kt),{},{fill:"white"})},F=c.children?{children:c.children.map(Xr)}:{},V={tag:"g",attributes:f({},h.inner),children:[Xr(f({tag:c.tag,attributes:f(f({},c.attributes),h.path)},F))]},x={tag:"g",attributes:f({},h.outer),children:[V]},k="mask-".concat(s||xe()),T="clip-".concat(s||xe()),L={tag:"mask",attributes:f(f({},kt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:To(p)},L]};return t.push(q,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(k,")")},kt)}),{children:t,attributes:n}}}},Mo={provides(e){let r=!1;$.matchMedia&&(r=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},a),{},{values:"1;0;1;1;0;1;"})}),t.push(s),t.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:f(f({},a),{},{values:"1;0;0;0;0;1;"})}]}),r||t.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},xo={hooks(){return{parseNodeAttributes(e,r){let t=r.getAttribute("data-fa-symbol"),n=t===null?!1:t===""?!0:t;return e.symbol=n,e}}}},Lo=[Ss,uo,po,ho,mo,Ao,Eo,Co,Oo,Mo,xo];js(Lo,{mixoutsTo:O});var Ol=O.noAuto,Li=O.config,Ml=O.library,Ii=O.dom,Di=O.parse,xl=O.findIconDefinition,Ll=O.toHtml,ki=O.icon,Il=O.layer,Io=O.text,Do=O.counter;var ko=["*"],_o=(()=>{class e{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){Li.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ro=(()=>{class e{definitions={};addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let i of n.icon[2])typeof i=="string"&&(this.definitions[n.prefix][i]=n)}}addIconPacks(...t){for(let n of t){let i=Object.keys(n).map(a=>n[a]);this.addIcons(...i)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Po=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},No=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Ri=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),Fo=e=>{let r=Ri(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:r,"fa-rotate-by":e.rotate!=null&&!r,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(n=>t[n]?n:null).filter(n=>n!=null)},cn=new WeakSet,_i="fa-auto-css";function jo(e,r){if(!r.autoAddCss||cn.has(e))return;if(e.getElementById(_i)!=null){r.autoAddCss=!1,cn.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",_i),t.innerHTML=Ii.css();let n=e.head.childNodes,i=null;for(let a=n.length-1;a>-1;a--){let s=n[a],o=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}e.head.insertBefore(t,i),r.autoAddCss=!1,cn.add(e)}var zo=e=>e.prefix!==void 0&&e.iconName!==void 0,Ho=(e,r)=>zo(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:r,iconName:e},$o=(()=>{class e{stackItemSize=Ne("1x");size=Ne();_effect=lt(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(n){return new(n||e)};static \u0275dir=ne({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return e})(),Uo=(()=>{class e{size=Ne();classes=re(()=>{let t=this.size(),n=t?{[`fa-${t}`]:!0}:{};return _(g({},n),{"fa-stack":!0})});static \u0275fac=function(n){return new(n||e)};static \u0275cmp=me({type:e,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(n,i){n&2&&Bn(i.classes())},inputs:{size:[1,"size"]},ngContentSelectors:ko,decls:1,vars:0,template:function(n,i){n&1&&($n(),Un(0))},encapsulation:2,changeDetection:0})}return e})(),$l=(()=>{class e{icon=E.required();title=E();animation=E();mask=E();flip=E();size=E();pull=E();border=E();inverse=E();symbol=E();rotate=E();fixedWidth=E();transform=E();a11yRole=E();renderedIconHTML=re(()=>{let t=this.icon();if(t==null&&this.config.fallbackIcon==null)return No(),"";let n=this.findIconDefinition(t??this.config.fallbackIcon);if(!n)return"";let i=this.buildParams();jo(this.document,this.config);let a=ki(n,i);return this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))});document=v(C);sanitizer=v(bt);config=v(_o);iconLibrary=v(Ro);stackItem=v($o,{optional:!0});stack=v(Uo,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}findIconDefinition(t){let n=Ho(t,this.config.defaultPrefix);if("icon"in n)return n;let i=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return i??(Po(n),null)}buildParams(){let t=this.fixedWidth(),n={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},i=this.transform(),a=typeof i=="string"?Di.transform(i):i,s=this.mask(),o=s!=null?this.findIconDefinition(s):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let u={};return n.rotate!=null&&!Ri(n.rotate)&&(u["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title(),transform:a,classes:Fo(n),mask:o??void 0,symbol:this.symbol(),attributes:l,styles:u}}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=me({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,i){n&2&&(Pe("innerHTML",i.renderedIconHTML(),Re),jn("title",i.title()))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(n,i){},encapsulation:2,changeDetection:0})}return e})();var Ul=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ge({type:e});static \u0275inj=ue({})}return e})();var Yl=(()=>{class e{confirmOpenLink(t){window.confirm(br("open-link-confirmation.message"))||t.preventDefault()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=ne({type:e,selectors:[["a","jcOpenLinkConfirmation",""]],hostBindings:function(n,i){n&1&&Hn("click",function(s){return i.confirmOpenLink(s)})}})}return e})();var Kl={email:"jchen070702@gmail.com"};export{qi as a,Nc as b,St as c,ia as d,Sr as e,ml as f,gl as g,yl as h,Sl as i,Yl as j,Ro as k,$l as l,Ul as m,Kl as n};
