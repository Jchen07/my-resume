import{Aa as ht,B as Ar,C as Tr,Da as Te,E as le,Ea as zr,F as Fr,Fa as un,Fb as Me,G as Mr,Ga as $r,Gb as Ve,H as A,J as b,Ja as gt,Jb as Ie,K as De,Ka as Ur,Kb as R,La as $e,Lb as Zr,M as w,Ma as Ue,Mb as he,N as y,Na as te,Nb as Jr,O as h,Oa as mt,Ob as We,P as k,Pb as cn,Q as Ir,R as Qt,S as en,Sa as He,T as fe,Ta as Fe,Ua as V,Va as pt,X as we,Y as I,Z as j,_a as Hr,a as D,aa as Ee,b as H,ba as tn,c as vr,da as nn,ea as rn,f as ut,fa as _r,g as ct,ga as ft,h as yr,ha as Se,i as Jt,ia as xr,j as qt,ja as an,k as be,ka as on,kb as Vr,la as sn,ma as Ce,na as de,nb as vt,o as N,oa as ze,ob as Wr,p as br,pa as Or,qa as dt,ra as ee,rb as Gr,sa as Ae,sb as Yr,t as lt,ta as Rr,u as Dr,ua as Pr,ub as Xr,v as wr,va as Lr,vb as Kr,w as Er,wa as Nr,x as Sr,xa as kr,y as Cr,ya as jr,za as Br}from"./chunk-CSW6NEHN.js";var qr=null;function X(){return qr}function ln(t){qr??=t}var Ge=class{},_e=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>h(Qr),providedIn:"platform"})}return t})();var Qr=(()=>{class t extends _e{_location;_history;_doc=h(I);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return X().getBaseHref(this._doc)}onPopState(e){let n=X().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=X().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ri(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function ei(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function ne(t){return t&&t[0]!=="?"?`?${t}`:t}var yt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>h(Wo),providedIn:"root"})}return t})(),Vo=new w(""),Wo=(()=>{class t extends yt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ri(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+ne(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,a){let o=this.prepareExternalUrl(i+ne(a));this._platformLocation.pushState(e,n,o)}replaceState(e,n,i,a){let o=this.prepareExternalUrl(i+ne(a));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(y(_e),y(Vo,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ii=(()=>{class t{_subject=new ct;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Xo(ei(ti(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+ne(n))}normalize(e){return t.stripTrailingSlash(Yo(this._basePath,ti(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ne(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ne(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=ne;static joinWithSlash=ri;static stripTrailingSlash=ei;static \u0275fac=function(n){return new(n||t)(y(yt))};static \u0275prov=b({token:t,factory:()=>Go(),providedIn:"root"})}return t})();function Go(){return new ii(y(yt))}function Yo(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function ti(t){return t.replace(/\/index\.html$/,"")}function Xo(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Zo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=h(we);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(te(mt))};static \u0275dir=V({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ce]})}return t})();function Jo(t,r){return{key:t,value:r}}var qo=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=ai;transform(e,n=ai){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let i=this.differ.diff(e),a=n!==this.compareFn;return i&&(this.keyValues=[],i.forEachItem(o=>{this.keyValues.push(Jo(o.key,o.currentValue))})),(i||a)&&(n&&this.keyValues.sort(n),this.compareFn=n),this.keyValues}static \u0275fac=function(n){return new(n||t)(te(Zr,16))};static \u0275pipe=pt({name:"keyvalue",type:t,pure:!1})}return t})();function ai(t,r){let e=t.key,n=r.key;if(e===n)return 0;if(e==null)return 1;if(n==null)return-1;if(typeof e=="string"&&typeof n=="string")return e<n?-1:1;if(typeof e=="number"&&typeof n=="number")return e-n;if(typeof e=="boolean"&&typeof n=="boolean")return e<n?-1:1;let i=String(e),a=String(n);return i==a?0:i<a?-1:1}function Ye(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,a]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()!==r)continue;let o=a;try{o=decodeURIComponent(a)}catch{}return o.length>1&&o[0]==='"'&&o[o.length-1]==='"'&&(o=o.slice(1,-1)),o}return null}var ui="browser";function oi(t){return t.replace(/\\/g,"\\\\").replace(/[\n\r\f\0]/g,"").replace(/"/g,'\\"')}var ci=t=>t.src,rs=new w("",{factory:()=>ci});var si=/^((\s*\d+w\s*(,|$)){1,})$/;var is=[1,2],as=640;var os=1920,ss=1080;var dg=(()=>{class t{imageLoader=h(rs);config=us(h(an));renderer=h($e);imgElement=h(ze).nativeElement;injector=h(we);destroyRef=h(j);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){$r("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&si.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let i=this.getAspectRatio();return i!==null&&n.width&&(n.height=Math.round(n.width/i)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=si.test(this.ngSrcset);return this.ngSrcset.split(",").filter(i=>i!=="").map(i=>{i=i.trim();let a=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:a})} ${i}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(a=>a>=as)),n.map(a=>`${this.callImageLoader({src:this.ngSrc,width:a})} ${a}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute("srcset",i),i}getFixedSrcset(){return is.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>os||this.height>ss),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==ci&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${oi(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e=="string"?`url("${oi(e)}")`:null}shouldBlurPlaceholder(e){return!e||!Object.hasOwn(e,"blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let o=this.injector.get(he);i(),a(),this.placeholder=!1,o.markForCheck()},i=this.renderer.listen(e,"load",n),a=this.renderer.listen(e,"error",n);this.destroyRef.onDestroy(()=>{i(),a()}),cs(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,i){n&2&&Xr("position",i.fill?"absolute":null)("width",i.fill?"100%":null)("height",i.fill?"100%":null)("inset",i.fill?"0":null)("background-size",i.placeholder?"cover":null)("background-position",i.placeholder?"50% 50%":null)("background-repeat",i.placeholder?"no-repeat":null)("background-image",i.placeholder?i.generatePlaceholder(i.placeholder):null)("filter",i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",ls],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",cn],height:[2,"height","height",cn],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",We],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",We],fill:[2,"fill","fill",We],placeholder:[2,"placeholder","placeholder",fs],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Ce]})}return t})();function us(t){let r={};return t.breakpoints&&(r.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},xr,t,r)}function cs(t,r){t.complete&&t.naturalWidth&&r()}function ls(t){return typeof t=="string"?t:ee(t)}function fs(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:We(t)}var Xe=class{_doc;constructor(r){this._doc=r}manager},bt=(()=>{class t extends Xe{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,a){return e.addEventListener(n,i,a),()=>this.removeEventListener(e,n,i,a)}removeEventListener(e,n,i,a){return e.removeEventListener(n,i,a)}static \u0275fac=function(n){return new(n||t)(y(I))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Et=new w(""),mn=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this});let i=e.filter(o=>!(o instanceof bt));this._plugins=i.slice().reverse();let a=e.find(o=>o instanceof bt);a&&this._plugins.push(a)}addEventListener(e,n,i,a){return this._findPluginFor(n).addEventListener(e,n,i,a)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(a=>a.supports(e)),!n)throw new A(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(y(Et),y(Ee))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),dn="ng-app-id";function li(t){for(let r of t)r.remove()}function fi(t,r){let e=r.createElement("style");return e.textContent=t,e}function ds(t,r,e,n){let i=t.head?.querySelectorAll(`style[${dn}="${r}"],link[${dn}="${r}"]`);if(!i||i.length===0)return!1;for(let a of i)a.removeAttribute(dn),a instanceof HTMLLinkElement?n.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&e.set(a.textContent,{usage:0,elements:[a]});return!0}function gn(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var pn=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,a={}){this.doc=e,this.appId=n,this.nonce=i,ds(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,fi);n?.forEach(i=>this.addUsage(i,this.external,gn))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let a=n.get(e);a?a.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(li(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])li(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,fi(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,gn(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let i=[];for(let a of n.elements)a.parentNode===e?a.remove():i.push(a);n.elements=i}}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(y(I),y(rn),y(Se,8),y(ft))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),hn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},vn=/%COMP%/g;var hi="%COMP%",hs=`_nghost-${hi}`,gs=`_ngcontent-${hi}`,ms=!0,ps=new w("",{factory:()=>ms}),vs=new w("");function ys(t){return gs.replace(vn,t)}function bs(t){return hs.replace(vn,t)}function gi(t,r){return r.map(e=>e.replace(vn,t))}var yn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,n,i,a,o,s,u=null,c=null,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=a,this.doc=o,this.ngZone=s,this.nonce=u,this.tracingService=c,this.cssVarNamespace=l??"",this.defaultRenderer=new Ke(e,o,s,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof wt?i.applyToHost(e):i instanceof Ze&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,a=i.get(n.id);if(!a){let o=this.doc,s=this.ngZone,u=this.eventManager,c=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case dt.Emulated:a=new wt(u,c,n,this.appId,l,o,s,f,this.cssVarNamespace);break;case dt.ShadowDom:return new Dt(u,e,n,o,s,this.nonce,f,this.cssVarNamespace,c);case dt.ExperimentalIsolatedShadowDom:return new Dt(u,e,n,o,s,this.nonce,f,this.cssVarNamespace);default:a=new Ze(u,c,n,l,o,s,f,this.cssVarNamespace);break}i.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(y(mn),y(Ue),y(rn),y(ps),y(I),y(Ee),y(Se),y(un,8),y(vs,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),Ke=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i,a=""){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i,this.cssVarNamespace=a}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(hn[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(di(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){if(r){let i=di(r)?r.content:r;if(n!=null&&n.parentNode!==i)throw new A(-5106,!1);i.insertBefore(e,n)}}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new A(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let a=hn[i];a?r.setAttributeNS(a,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=hn[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){let a=e.startsWith("--");a&&(e=e.replace("%NS%",this.cssVarNamespace)),a||i&(Te.DashCase|Te.Important)?r.style.setProperty(e,n,i&Te.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){let i=e.startsWith("--");i&&(e=e.replace("%NS%",this.cssVarNamespace)),i||n&Te.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=X().getGlobalEventTarget(this.doc,r),!r))throw new A(-5102,!1);let a=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(r,e,a)),this.eventManager.addEventListener(r,e,a,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function di(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Dt=class extends Ke{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,a,o,s,u,c){super(r,i,a,s,u),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=gi(n.id,l).map(v=>v.replace(/%NS%/g,u));for(let v of l){let p=document.createElement("style");o&&p.setAttribute("nonce",o),p.textContent=v,this.shadowRoot.appendChild(p)}let f=n.getExternalStyles?.();if(f)for(let v of f){let p=gn(v,i);o&&p.setAttribute("nonce",o),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ze=class extends Ke{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,a,o,s,u,c){super(r,a,o,s,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let l=n.styles,f=c?gi(c,l):l;this.styles=f.map(v=>v.replace(/%NS%/g,u)),this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&zr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},wt=class extends Ze{contentAttr;hostAttr;constructor(r,e,n,i,a,o,s,u,c){let l=i+"-"+n.id;super(r,e,n,a,o,s,u,c,l),this.contentAttr=ys(l),this.hostAttr=bs(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var St=class t extends Ge{supportsDOMEvents=!0;static makeCurrent(){ln(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=ws();return e==null?null:Es(e)}resetBaseElement(){Je=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Ye(document.cookie,r)}},Je=null;function ws(){return Je=Je||document.head.querySelector("base"),Je?Je.getAttribute("href"):null}function Es(t){return new URL(t,document.baseURI).pathname}var mi=["alt","control","meta","shift"],Ss={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Cs={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},pi=(()=>{class t extends Xe{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,a){let o=t.parseEventName(n),s=t.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>X().onAndCancel(e,o.domEventName,s,a))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let a=t._normalizeKey(n.pop()),o="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),o="code."),mi.forEach(c=>{let l=n.indexOf(c);l>-1&&(n.splice(l,1),o+=c+".")}),o+=a,n.length!=0||a.length===0)return null;let u={};return u.domEventName=i,u.fullKey=o,u}static matchEventFullKeyCode(e,n){let i=Ss[e.key]||e.key,a="";return n.indexOf("code.")>-1&&(i=e.code,a="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),mi.forEach(o=>{if(o!==i){let s=Cs[o];s(e)&&(a+=o+".")}}),a+=i,a===n)}static eventCallback(e,n,i){return a=>{t.matchEventFullKeyCode(a,e)&&i.runGuarded(()=>n(a))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(y(I))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();async function As(t,r,e){let n=D({rootComponent:t},Ts(r,e));return Jr(n)}function Ts(t,r){return{platformRef:r?.platformRef,appProviders:[...xs,...t?.providers??[]],platformProviders:_s}}function Fs(){St.makeCurrent()}function Ms(){return new tn}function Is(){return Or(document),document}var _s=[{provide:ft,useValue:ui},{provide:_r,useValue:Fs,multi:!0},{provide:I,useFactory:Is}];var xs=[{provide:Ir,useValue:"root"},{provide:tn,useFactory:Ms},{provide:Et,useClass:bt,multi:!0},{provide:Et,useClass:pi,multi:!0},yn,{provide:Ue,useClass:pn},{provide:pn,useExisting:Ue},mn,{provide:Ur,useExisting:yn},[]];var Z=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),a=e.slice(n+1).trim();this.addHeaderEntry(i,a)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[e,n]of r.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,r.normalizedNames.get(e))}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=r.op==="a"?(this.headers.get(e)||[]).slice():[];i.push(...n),this.headers.set(e,i);break;case"d":let a=r.value;if(a===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(a)?a:[a],s=this.headers.get(e);if(!s)return;s=s.filter(u=>o.indexOf(u)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(a=>a.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var At=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},Tt=class{encodeKey(r){return vi(r)}encodeValue(r){return vi(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Os(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let a=i.indexOf("="),[o,s]=a==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,a)),r.decodeValue(i.slice(a+1))],u=e.get(o)||[];u.push(s),e.set(o,u)}),e}var Rs=/%(\d[a-f0-9])/gi,Ps={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function vi(t){return encodeURIComponent(t).replace(Rs,(r,e)=>Ps[e]??r)}function Ct(t){return`${t}`}var K=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Tt,r.fromString){if(r.fromObject)throw new A(2805,!1);this.map=Os(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Ct):[Ct(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(a=>{e.push({param:n,value:a,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,e]of this.cloneFrom.map.entries())this.map.set(r,e);this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=r.op==="a"?(this.map.get(r.param)||[]).slice():[];e.push(Ct(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=(this.map.get(r.param)||[]).slice(),i=n.indexOf(Ct(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function Ls(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function yi(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function bi(t){return typeof Blob<"u"&&t instanceof Blob}function Di(t){return typeof FormData<"u"&&t instanceof FormData}function Ns(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var bn="Content-Type",wi="Accept",Ci="text/plain",Ai="application/json",ks=`${Ai}, ${Ci}, */*`,xe=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let a;if(Ls(this.method)||i?(this.body=n!==void 0?n:null,a=i):a=n,a){if(this.reportProgress=!!a.reportProgress,this.reportUploadProgress=!!a.reportUploadProgress,this.reportDownloadProgress=!!a.reportDownloadProgress,this.withCredentials=!!a.withCredentials,this.keepalive=!!a.keepalive,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.context&&(this.context=a.context),a.params&&(this.params=a.params),a.priority&&(this.priority=a.priority),a.cache&&(this.cache=a.cache),a.credentials&&(this.credentials=a.credentials),typeof a.timeout=="number"){if(a.timeout<1||!Number.isInteger(a.timeout))throw new A(2822,"");this.timeout=a.timeout}a.mode&&(this.mode=a.mode),a.redirect&&(this.redirect=a.redirect),a.integrity&&(this.integrity=a.integrity),a.referrer!==void 0&&(this.referrer=a.referrer),a.referrerPolicy&&(this.referrerPolicy=a.referrerPolicy),this.transferCache=a.transferCache}if(this.headers??=new Z,this.context??=new At,!this.params)this.params=new K,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let s=e,u="",c=e.indexOf("#");c!==-1&&(u=e.substring(c),s=e.substring(0,c));let l=s.indexOf("?"),f=l===-1?"?":l<s.length-1?"&":"";this.urlWithParams=s+f+o+u}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||yi(this.body)||bi(this.body)||Di(this.body)||Ns(this.body)?this.body:this.body instanceof K?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Di(this.body)?null:bi(this.body)?this.body.type||null:yi(this.body)?null:typeof this.body=="string"?Ci:this.body instanceof K?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ai:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,a=r.keepalive??this.keepalive,o=r.priority||this.priority,s=r.cache||this.cache,u=r.mode||this.mode,c=r.redirect||this.redirect,l=r.credentials||this.credentials,f=r.referrer??this.referrer,v=r.integrity||this.integrity,p=r.referrerPolicy||this.referrerPolicy,T=r.transferCache??this.transferCache,E=r.timeout??this.timeout,S=r.body!==void 0?r.body:this.body,F=r.withCredentials??this.withCredentials,M=r.reportProgress??this.reportProgress,O=r.reportUploadProgress??this.reportUploadProgress,L=r.reportDownloadProgress??this.reportDownloadProgress,_=r.headers||this.headers,Y=r.params||this.params,ce=r.context??this.context;return r.setHeaders!==void 0&&(_=Object.keys(r.setHeaders).reduce(($,U)=>$.set(U,r.setHeaders[U]),_)),r.setParams&&(Y=Object.keys(r.setParams).reduce(($,U)=>$.set(U,r.setParams[U]),Y)),new t(e,n,S,{params:Y,headers:_,context:ce,reportProgress:M,reportUploadProgress:O,reportDownloadProgress:L,responseType:i,withCredentials:F,transferCache:T,keepalive:a,cache:s,priority:o,timeout:E,mode:u,redirect:c,credentials:l,referrer:f,integrity:v,referrerPolicy:p})}},me=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(me||{}),Oe=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new Z,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Ft=class t extends Oe{constructor(r={}){super(r)}type=me.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},qe=class t extends Oe{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=me.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},ge=class extends Oe{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},js=200;var Bs=/^\)\]\}',?\n/,nm=1024*1024,Ti=new w("",{factory:()=>null}),Re=(()=>{class t{fetchImpl=h(wn,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=h(Ee);destroyRef=h(j);maxResponseSize=h(Ti);handle(e){return new ut(n=>{let i=new AbortController,a=!1,o={next:u=>{u.type===me.Response&&(a=!0),n.next(u)},error:u=>{a=!0,n.error(u)},complete:()=>{a=!0,n.complete()}};this.doRequest(e,i.signal,o).then(En,u=>o.error(new ge({error:u})));let s;return e.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{s!==void 0&&clearTimeout(s),!a&&!i.signal.aborted&&i.abort()}})}async doRequest(e,n,i){let a=this.createRequestInit(e),o;try{let S=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,D({signal:n},a)));zs(S),i.next({type:me.Sent}),o=await S}catch(S){i.error(new ge({error:S,status:S.status??0,statusText:S.statusText,url:e.urlWithParams,headers:S.headers}));return}let s=new Z(o.headers),u=o.statusText,c=o.url||e.urlWithParams,l=o.status,f=null,v=e.reportProgress||e.reportDownloadProgress;if(v&&i.next(new Ft({headers:s,status:l,statusText:u,url:c})),o.body){let S=o.headers.get(bn)??"",F=o.headers.get("content-length"),M=F!==null?Number(F):NaN;this.maxResponseSize!==null&&Number.isFinite(M)&&M>this.maxResponseSize&&(await o.body.cancel(),Ei(this.maxResponseSize));let O=[],L=o.body.getReader(),_=0,Y,ce,$=typeof Zone<"u"&&Zone.current,U=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await L.cancel(),U=!0;break}let{done:Kt,value:Zt}=await L.read();if(Kt)break;if(O.push(Zt),_+=Zt.length,this.maxResponseSize!==null&&_>this.maxResponseSize&&(await L.cancel(),Ei(this.maxResponseSize)),v){ce=e.responseType==="text"?(ce??"")+(Y??=Si(S)).decode(Zt,{stream:!0}):void 0;let pr=()=>i.next({type:me.DownloadProgress,total:Number.isFinite(M)?M:void 0,loaded:_,partialText:ce});$?$.run(pr):pr()}}}),U){i.complete();return}let Ho=this.concatChunks(O,_);try{f=this.parseBody(e,Ho,S,l)}catch(Kt){i.error(new ge({error:Kt,headers:new Z(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}l===0&&(l=f?js:0);let p=l>=200&&l<300,T=o.redirected,E=o.type;p?(i.next(new qe({body:f,headers:s,status:l,statusText:u,url:c,redirected:T,responseType:E})),i.complete()):i.error(new ge({error:f,headers:s,status:l,statusText:u,url:c,redirected:T,responseType:E}))}parseBody(e,n,i,a){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Bs,"");if(o==="")return null;try{return JSON.parse(o)}catch(s){if(a<200||a>=300)return o;throw s}case"text":return Si(i).decode(n);case"blob":return new Blob([n],{type:i});case"arraybuffer":return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new A(2824,!1);let n={},i;if(i=e.credentials,e.withCredentials&&(i="include"),e.headers.forEach((a,o)=>n[a]=o.join(",")),e.headers.has(wi)||(n[wi]=ks),!e.headers.has(bn)){let a=e.detectContentTypeHeader();a!==null&&(n[bn]=a)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let i=new Uint8Array(n),a=0;for(let o of e)i.set(o,a),a+=o.length;return i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})(),wn=class{};function En(){}function zs(t){t.then(En,En)}function Ei(t){throw new A(-2825,!1)}var $s=/charset=\s*["']?([^;"'\s]+)["']?/i;function Si(t){let r=t.match($s);if(r!==null)try{return new TextDecoder(r[1])}catch{}return new TextDecoder}var Us=new w("",{factory:()=>!0}),Hs="XSRF-TOKEN",Vs=new w("",{factory:()=>Hs}),Ws="X-XSRF-TOKEN",Gs=new w("",{factory:()=>Ws}),Ys=(()=>{class t{cookieName=h(Vs);doc=h(I);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ye(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})(),Fi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=y(Ys),i},providedIn:"root"})}return t})();function Mi(t,r){if(!h(Us)||t.method==="GET"||t.method==="HEAD")return r(t);try{let i=h(_e).href,{origin:a}=new URL(i),{origin:o}=new URL(t.url,a);if(a!==o)return r(t)}catch{return r(t)}let e=h(Fi).getToken(),n=h(Gs);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function Xs(t,r){return r(t)}function Ks(t,r,e){return(n,i)=>en(e,()=>r(n,a=>t(a,i)))}var Ii=new w("",{factory:()=>[Mi]}),_i=new w(""),xi=new w("",{factory:()=>!0});var It=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=y(Re),i},providedIn:"root"})}return t})();var Mt=(()=>{class t{backend;injector;chain=null;pendingTasks=h(sn);contributeToStability=h(xi);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let i=this.injector.get(_t,null,{skipSelf:!0}),a=i!==null&&this.backend===i,o=this.injector.get(_i,[],a?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(Ii),...o]));this.chain=s.reduceRight((u,c)=>Ks(u,c,this.injector),Xs)}let n=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return Ve(()=>n(e,a=>this.backend.handle(a))).pipe(Cr(i))}else return Ve(()=>n(e,i=>this.backend.handle(i)))}static \u0275fac=function(n){return new(n||t)(y(It),y(Qt))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_t=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=y(Mt),i},providedIn:"root"})}return t})();function Dn(t,r){return D({body:r},t)}var Oi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let a;if(e instanceof xe)a=e;else{let u;i.headers instanceof Z?u=i.headers:u=new Z(i.headers);let c;i.params&&(i.params instanceof K?c=i.params:c=new K({fromObject:i.params})),a=new xe(e,n,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let o=be(a).pipe(Er(u=>this.handler.handle(u)));if(e instanceof xe||i.observe==="events")return o;let s=o.pipe(Dr(u=>u instanceof qe));switch(i.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return s.pipe(N(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new A(2806,!1);return u.body}));case"blob":return s.pipe(N(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new A(2807,!1);return u.body}));case"text":return s.pipe(N(u=>{if(u.body!==null&&typeof u.body!="string")throw new A(2808,!1);return u.body}));default:return s.pipe(N(u=>u.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new K().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Dn(i,n))}post(e,n,i={}){return this.request("POST",e,Dn(i,n))}put(e,n,i={}){return this.request("PUT",e,Dn(i,n))}static \u0275fac=function(n){return new(n||t)(y(_t))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sn=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t[t.Xhr=7]="Xhr",t})(Sn||{});function Zs(t,r){return{\u0275kind:t,\u0275providers:r}}function Js(...t){let r=[Oi,Re,Mt,{provide:_t,useExisting:Mt},{provide:It,useFactory:()=>h(Re)},{provide:Ii,useValue:Mi,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return k(r)}function qs(){return Zs(Sn.Fetch,[Re,{provide:It,useExisting:Re}])}var Xm=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(y(I))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=y(Qs),i},providedIn:"root"})}return t})(),Qs=(()=>{class t extends Cn{_doc=h(I);sanitize(e,n){if(n==null)return null;switch(e){case fe.NONE:return n;case fe.HTML:return Ae(n,"HTML")?ee(n):Br(this._doc,String(n)).toString();case fe.STYLE:return Ae(n,"Style")?ee(n):n;case fe.SCRIPT:if(Ae(n,"Script"))return ee(n);throw new A(5200,!1);case fe.URL:return Ae(n,"URL")?ee(n):jr(String(n));case fe.RESOURCE_URL:if(Ae(n,"ResourceURL"))return ee(n);throw new A(-5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Rr(e)}bypassSecurityTrustStyle(e){return Pr(e)}bypassSecurityTrustScript(e){return Lr(e)}bypassSecurityTrustUrl(e){return Nr(e)}bypassSecurityTrustResourceUrl(e){return kr(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();function An(t){t||(t=h(j));let r=new ut(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(Fr(r))}function Ri(t,r){let n=!r?.manualCleanup?r?.injector?.get(j)??h(j):null,i=eu(r?.equal),a;r?.requireSync?a=nn({kind:0},{equal:i}):a=nn({kind:1,value:r?.initialValue},{equal:i});let o,s=t.subscribe({next:u=>a.set({kind:1,value:u}),error:u=>{a.set({kind:2,error:u}),o?.()},complete:()=>{o?.()}});if(r?.requireSync&&a().kind===0)throw new A(601,!1);return o=n?.onDestroy(s.unsubscribe.bind(s)),Me(()=>{let u=a();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new A(601,!1)}},{equal:r?.equal})}function eu(t=Object.is){return(r,e)=>r.kind===1&&e.kind===1&&t(r.value,e.value)}function Pi(t){return typeof t=="function"}function re(t){return typeof t=="string"}function Qe(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function xt(t){return t==null}function Tn(t){return!xt(t)}function Fn(t){return t?Array.isArray(t)||re(t)?t.length:Qe(t)?Object.keys(t).length:0:0}function Li(t){return Fn(t)===0}function Mn(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(r,e)=>e==0?r.toLowerCase():r.toUpperCase()).replace(/\s+|_|-|\//g,"")}var xn=class{translations;constructor(r){this.translations=r}getTranslation(r){return be(this.translations.get(r)||{})}},ki=new w(""),Le=new w("",{factory:()=>Pe}),Pe={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1,autoPrefixKeys:!0}};function tu(t={}){return H(D(D({},Pe),t),{missingHandler:D(D({},Pe.missingHandler),t.missingHandler),flatten:D(D({},Pe.flatten),t.flatten),scopes:D(D({},Pe.scopes),t.scopes)})}function In(t,r){return t&&(Object.prototype.hasOwnProperty.call(t,r)?t[r]:r.split(".").reduce((e,n)=>e?.[n],t))}function nu(t,r,e){t=D({},t);let n=r.split("."),i=n.length-1;return n.reduce((a,o,s)=>(s===i?a[o]=e:a[o]=Array.isArray(a[o])?a[o].slice():D({},a[o]),a&&a[o]),t),t}function ru(t){return`[transloco]:${t}`}var ji=new w(""),iu=(()=>{class t{config=h(Le,{optional:!0})??Pe;get interpolationMatcher(){return au(this.config)}transpile({value:e,params:n={},translation:i,key:a}){if(re(e)){let o,s=e;for(;(o=this.interpolationMatcher.exec(s))!==null;){let[u,c]=o;s=s.replace(u,()=>{let l=c.trim(),f=In(n,l);return Tn(f)?f:Tn(i[l])?this.transpile({params:n,translation:i,key:a,value:i[l]}):""})}return s}else n&&(Qe(e)?e=this.handleObject({value:e,params:n,translation:i,key:a}):Array.isArray(e)&&(e=this.handleArray({value:e,params:n,translation:i,key:a})));return e}handleObject({value:e,params:n={},translation:i,key:a}){let o=e;return Object.keys(n).forEach(s=>{let u=this.transpile({value:In(o,s),params:In(n,s),translation:i,key:a});o=nu(o,s,u)}),o}handleArray(i){var a=i,{value:e}=a,n=vr(a,["value"]);return e.map(o=>this.transpile(D({value:o},n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function au(t){let[r,e]=t.interpolation;return new RegExp(`${r}([^${r}${e}]*?)${e}`,"g")}var Bi=new w(""),ou=(()=>{class t{handle(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),zi=new w(""),su=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,n){return n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})(),$i=new w(""),uu=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e){let n;throw n=ru(4),new Error(n)}return Array.isArray(e)?e:[e]}static \u0275fac=function(n){return new(n||t)(y(Le))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();function Ui(t){let{path:r,inlineLoader:e,mainLoader:n,data:i}=t;if(e){let a=e[r];if(Pi(a)===!1)throw`You're using an inline loader but didn't provide a loader for ${r}`;return e[r]().then(o=>o.default?o.default:o)}return n.getTranslation(r,i)}function cu({mainLoader:t,path:r,data:e,fallbackPath:n,inlineLoader:i}){return(n?[r,n]:[r]).map(o=>{let s=Ui({path:o,mainLoader:t,inlineLoader:i,data:e});return qt(s).pipe(N(u=>({translation:u,lang:o})))})}function Ni(t){let r={};function e(n,i){if(n===null)r[i]=null;else if(Qe(n))for(let[a,o]of Object.entries(n))e(o,i?`${i}.${a}`:a);else r[i]=n}return e(t,""),r}function lu(t){let r={};for(let[e,n]of Object.entries(t)){let i=e.split("."),a=r;i.forEach((o,s)=>{s===i.length-1?a[o]=n:(a[o]??={},a=a[o])})}return r}function et(t){if(!t)return"";let r=t.split("/");return r.pop(),r.join("/")}function ie(t){return t?t.split("/").pop():""}function fu(t,r){return Object.keys(t).reduce((e,n)=>(e[`${r}/${n}`]=t[n],e),{})}function Hi(t){return typeof t?.scope=="string"}function du(t){return t?.loader&&Qe(t.loader)}function Ln(t,r){return du(t)?fu(t.loader,r):void 0}function _n(t){return{scope:et(t)||null,langName:ie(t)}}var Vi;function Nn(t,r={},e){return Vi.translate(t,r,e)}var On=class t extends Error{lang;fallbackLangs;isScope;name="TranslationLoadError";constructor(r,e,n){super(""),this.lang=r,this.fallbackLangs=e,this.isScope=n,Object.setPrototypeOf(this,t.prototype)}},Wi=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new ct;events$=this.events.asObservable();config;activeLang;destroyRef=h(j);destroyed=!1;constructor(e,n,i,a,o,s){this.loader=e,this.parser=n,this.missingHandler=i,this.interceptor=a,this.fallbackStrategy=s,this.loader||(this.loader=new xn(this.translations)),Vi=this,this.config=JSON.parse(JSON.stringify(o)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new yr(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.activeLang=Ri(this.lang,{requireSync:!0}),this.events$.subscribe(u=>{u.type==="translationLoadSuccess"&&u.wasFailure&&this.setActiveLang(u.payload.langName)}),this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:_n(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,n={}){if(this.destroyed)return Jt;let i=this.cache.get(e);if(i)return i;let a,o=this._isLangScoped(e),s;o&&(s=et(e));let u={path:e,mainLoader:this.loader,inlineLoader:n.inlineLoader,data:o?{scope:s}:void 0};if(this.useFallbackTranslation(e)){let l=o?`${s}/${this.firstFallbackLang}`:this.firstFallbackLang,f=cu(H(D({},u),{fallbackPath:l}));a=lt(f)}else{let l=Ui(u);a=qt(l)}let c=a.pipe(Ar(this.config.failedRetries),Mr(l=>{if(Array.isArray(l)){l.forEach(f=>{this.handleSuccess(f.lang,f.translation),f.lang!==e&&this.cache.set(f.lang,be({}))});return}this.handleSuccess(e,l)}),wr(l=>this.handleFailure(e,n)),Tr(1),An(this.destroyRef));return this.cache.set(e,c),c}translate(e,n={},i=this.getActiveLang()){if(!e)return e;let{scope:a,resolveLang:o}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(c=>this.translate(this.config.scopes.autoPrefixKeys&&a?`${a}.${c}`:c,n,o));e=this.config.scopes.autoPrefixKeys&&a?`${a}.${e}`:e;let s=this.getTranslation(o),u=s[e];return u?this.parser.transpile({value:u,params:n,translation:s,key:e}):this._handleMissingKey(e,u,n)}selectTranslate(e,n,i,a=!1){let o,s=(c,l)=>this.load(c,l).pipe(N(()=>a?this.translateObject(e,n,c):this.translate(e,n,c)));if(xt(i))return this.langChanges$.pipe(le(c=>s(c)));if(i=Array.isArray(i)?i[i.length-1]:i,Hi(i)){let c=i;i=c.scope,o=Ln(c,c.scope)}if(i=i,this.isLang(i)||this.isScopeWithLang(i))return s(i);let u=i;return this.langChanges$.pipe(le(c=>s(`${u}/${c}`,{inlineLoader:o})))}isScopeWithLang(e){return this.isLang(ie(e))}translateObject(e,n={},i=this.getActiveLang()){if(re(e)||Array.isArray(e)){let{resolveLang:o,scope:s}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(l=>this.translateObject(this.config.scopes.autoPrefixKeys&&s?`${s}.${l}`:l,n,o));let u=this.getTranslation(o);e=this.config.scopes.autoPrefixKeys&&s?`${s}.${e}`:e;let c=lu(this.getObjectByKey(u,e));return Li(c)?this.translate(e,n,i):this.parser.transpile({value:c,params:n,translation:u,key:e})}let a=[];for(let[o,s]of this.getEntries(e))a.push(this.translateObject(o,s,i));return a}selectTranslateObject(e,n,i){if(re(e)||Array.isArray(e))return this.selectTranslate(e,n,i,!0);let[[a,o],...s]=this.getEntries(e);return this.selectTranslateObject(a,o,i).pipe(N(u=>{let c=[u];for(let[l,f]of s)c.push(this.translateObject(l,f,i));return c}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:n,resolveLang:i}=this.resolveLangAndScope(e),a=this.translations.get(i)||{};return this.getObjectByKey(a,n)}}return this.translations}selectTranslation(e){let n=this.langChanges$;if(e){let i=ie(e)!==e;this.isLang(e)||i?n=be(e):n=this.langChanges$.pipe(N(a=>`${e}/${a}`))}return n.pipe(le(i=>this.load(i).pipe(N(()=>this.getTranslation(i)))))}setTranslation(e,n=this.getActiveLang(),i={}){let o=D(D({},{merge:!0,emitChange:!0}),i),s=et(n),u=e;if(s){let p=this.getMappedScope(s);u=Ni({[p]:e})}let c=s?ie(n):n,l=D(D({},o.merge&&this.getTranslation(c)),u),f=this.config.flatten.aot?l:Ni(l),v=this.interceptor.preSaveTranslation(f,c);this.translations.set(c,v),o.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,n,i={}){let a=i.lang||this.getActiveLang(),o=this.interceptor.preSaveTranslationKey(e,n,a),s={[e]:o};this.setTranslation(s,a,H(D({},i),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let n=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(n)&&(this.firstFallbackLang=n)}_handleMissingKey(e,n,i){if(this.config.missingHandler.allowEmpty&&n==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let a=this.translate(e,i,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,a}return this.missingHandler.handle(e,this.getMissingHandlerData(),i)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,n){let i=ie(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(i)?br([this.load(i),this.load(e,{inlineLoader:n})]):this.load(e,{inlineLoader:n})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(ie(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,n){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=n}isLoadedTranslation(e){return Fn(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return re(e)?this.getAvailableLangs():this.getAvailableLangs().map(n=>n.id)}getMissingHandlerData(){return H(D({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,n){this.setTranslation(n,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:_n(e)}),this.failedLangs.forEach(i=>this.cache.delete(i)),this.failedLangs.clear()}handleFailure(e,n){xt(n.failedCounter)&&(n.failedCounter=0,n.fallbackLangs||(n.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let i=e.split("/"),a=n.fallbackLangs,o=a[n.failedCounter];if(this.failedLangs.add(e),this.cache.has(o))return this.handleSuccess(o,this.getTranslation(o)),Jt;let s=o===i[i.length-1];if(!o||s)throw new On(e,a??[],i.length>1);let u=o;return i.length>1&&(i[i.length-1]=o,u=i.join("/")),n.failedCounter++,this.events.next({type:"translationLoadFailure",payload:_n(e)}),this.load(u,n)}getMappedScope(e){let{scopeMapping:n={},scopes:i={keepCasing:!1}}=this.config;return n[e]||(i.keepCasing?e:Mn(e))}resolveLangAndScope(e){let n=e,i;if(this._isLangScoped(e)){let a=ie(e),o=this.isLang(a);n=o?a:this.getActiveLang(),i=this.getMappedScope(o?et(e):e)}return{scope:i,resolveLang:n}}getObjectByKey(e,n){let i={},a=`${n}.`;for(let o in e)o.startsWith(a)&&(i[o.replace(a,"")]=e[o]);return i}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(n){return new(n||t)(y(ki,8),y(ji),y(Bi),y(zi),y(Le),y($i))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hu=(()=>{class t{html;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=He({type:t,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(n,i){n&1&&Vr(0,"div",0),n&2&&vt("innerHTML",i.html,ht)},encapsulation:2,changeDetection:1})}return t})(),Rn=class{view;vcr;constructor(r,e){this.view=r,this.vcr=e}attachView(){if(this.view instanceof gt)this.vcr.createEmbeddedView(this.view);else if(re(this.view)){let r=this.vcr.createComponent(hu);r.instance.html=this.view,r.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},Gi=new w(""),gu=new w(""),Yi=new w("");function Pn(t,r,e="|"){if(re(t)){let n=t.split(e),i=n.pop();return i===r?[!0,n.toString()]:[!1,i]}return[!1,""]}function Xi(t,r){let[e]=Pn(r,"static");return e?!1:!!t.config.reRenderOnLangChange}function Ki(t){return t?r=>r:Sr(1)}var Ot=class{initialized=!1;resolve({inline:r,provider:e,active:n}){let i=n;if(this.initialized)return i=n,i;if(e){let[,a]=Pn(e,"static");i=a}if(r){let[,a]=Pn(r,"static");i=a}return this.initialized=!0,i}resolveLangBasedOnScope(r){return et(r)?ie(r):r}resolveLangPath(r,e){return e?`${e}/${r}`:r}},Rt=class{service;constructor(r){this.service=r}resolve(r){let{inline:e,provider:n}=r;if(e)return e;if(n){if(Hi(n)){let{scope:i,alias:a=this.service.config.scopes.keepCasing?i:Mn(i)}=n;return this.service._setScopeAlias(i,a),i}return n}}},Tp=(()=>{class t{destroyRef=h(j);service=h(Wi);tpl=h(gt,{optional:!0});providerLang=h(Gi,{optional:!0});providerScope=h(Yi,{optional:!0});providedLoadingTpl=h(gu,{optional:!0});cdr=h(he);host=h(ze);vcr=h(mt);renderer=h($e);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new Ot;scopeResolver=new Rt(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,n){return!0}ngOnInit(){let e=Xi(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(le(n=>{let i=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:n});return Array.isArray(this.providerScope)?lt(this.providerScope.map(a=>this.resolveScope(i,a))):this.resolveScope(i,this.providerScope)}),Ki(e),An(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let n=this.resolveLoadingContent();n&&(this.loaderTplHandler=new Rn(n,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(i=>!e[i].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,n){this.memo.clear();let i=this.getTranslateFn(e,n);this.view?(this.view.context.$implicit=i,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:i,currentLang:this.currentLang}))}getTranslateFn(e,n){return(i,a)=>{let o=n?`${n}.${i}`:i,s=a?`${o}${JSON.stringify(a)}`:o;return this.memo.has(s)||this.memo.set(s,this.service.translate(o,a,e)),this.memo.get(s)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,n){let i=this.scopeResolver.resolve({inline:this.inlineScope,provider:n});this.path=this.langResolver.resolveLangPath(e,i);let a=Ln(n,i);return this.service._loadDependencies(this.path,a)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[Ce]})}return t})(),Fp=(()=>{class t{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new Ot;scopeResolver;constructor(e,n,i,a){this.service=e,this.providerScope=n,this.providerLang=i,this.cdr=a,this.scopeResolver=new Rt(this.service)}transform(e,n,i){if(!e)return e;let a=n?`${e}${JSON.stringify(n)}`:e;if(a===this.lastKey)return this.lastValue;this.lastKey=a,this.subscription?.unsubscribe();let o=Xi(this.service,this.providerLang||i);return this.subscription=this.service.langChanges$.pipe(le(s=>{let u=this.langResolver.resolve({inline:i,provider:this.providerLang,active:s});return Array.isArray(this.providerScope)?lt(this.providerScope.map(c=>this.resolveScope(u,c))):this.resolveScope(u,this.providerScope)}),Ki(o)).subscribe(()=>this.updateValue(e,n)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,n){let i=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,n,i),this.cdr.markForCheck()}resolveScope(e,n){let i=this.scopeResolver.resolve({inline:void 0,provider:n});this.path=this.langResolver.resolveLangPath(e,i);let a=Ln(n,i);return this.service._loadDependencies(this.path,a)}static \u0275fac=function(n){return new(n||t)(te(Wi,16),te(Yi,24),te(Gi,24),te(he,16))};static \u0275pipe=pt({name:"transloco",type:t,pure:!1})}return t})();function Mp(t){let r=[vu(iu),bu(ou),Du(su),yu(uu)];return t.config&&r.push(mu(t.config)),t.loader&&r.push(pu(t.loader)),r}function mu(t){return k([{provide:Le,useValue:tu(t)}])}function pu(t){return k([{provide:ki,useClass:t}])}function vu(t){return k([{provide:ji,useClass:t,deps:[Le]}])}function yu(t){return k([{provide:$i,useClass:t,deps:[Le]}])}function bu(t){return k([{provide:Bi,useClass:t}])}function Du(t){return k([{provide:zi,useClass:t}])}function Zi(){return typeof window<"u"}function Ip(){let t=wu();if(!(!t||!Zi()))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}function wu(){if(!Zi())return"";let t=window.navigator;return t.languages?.[0]??t.language}function Un(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function Eu(t){if(Array.isArray(t))return t}function Su(t){if(Array.isArray(t))return Un(t)}function Cu(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function Ji(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Ia(n.key),n)}}function Au(t,r,e){return r&&Ji(t.prototype,r),e&&Ji(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function jt(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=rr(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var u=e.next();return o=u.done,u},e:function(u){s=!0,a=u},f:function(){try{o||e.return==null||e.return()}finally{if(s)throw a}}}}function m(t,r,e){return(r=Ia(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function Tu(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fu(t,r){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var n,i,a,o,s=[],u=!0,c=!1;try{if(a=(e=e.call(t)).next,r===0){if(Object(e)!==e)return;u=!1}else for(;!(u=(n=a.call(e)).done)&&(s.push(n.value),s.length!==r);u=!0);}catch(l){c=!0,i=l}finally{try{if(!u&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}function Mu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qi(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,n)}return e}function d(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?qi(Object(e),!0).forEach(function(n){m(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):qi(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Vt(t,r){return Eu(t)||Fu(t,r)||rr(t,r)||Mu()}function z(t){return Su(t)||Tu(t)||rr(t)||Iu()}function _u(t,r){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Ia(t){var r=_u(t,"string");return typeof r=="symbol"?r:r+""}function $t(t){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},$t(t)}function rr(t,r){if(t){if(typeof t=="string")return Un(t,r);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Un(t,r):void 0}}var Qi=function(){},ir={},_a={},xa=null,Oa={mark:Qi,measure:Qi};try{typeof window<"u"&&(ir=window),typeof document<"u"&&(_a=document),typeof MutationObserver<"u"&&(xa=MutationObserver),typeof performance<"u"&&(Oa=performance)}catch{}var xu=ir.navigator||{},ea=xu.userAgent,ta=ea===void 0?"":ea,oe=ir,C=_a,na=xa,Pt=Oa,Op=!!oe.document,Q=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Ra=~ta.indexOf("MSIE")||~ta.indexOf("Trident/"),Lt,Ou=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ru=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Pa={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Pu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},La=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],x="classic",at="duotone",Na="sharp",ka="sharp-duotone",ja="chisel",Ba="etch",za="graphite",$a="jelly",Ua="jelly-duo",Ha="jelly-fill",Va="mosaic",Wa="notdog",Ga="notdog-duo",Ya="pixel",Xa="slab",Ka="slab-duo",Za="slab-press",Ja="slab-press-duo",qa="thumbprint",Qa="utility",eo="utility-duo",to="utility-fill",no="vellum",ro="whiteboard",Lu="Classic",Nu="Duotone",ku="Sharp",ju="Sharp Duotone",Bu="Chisel",zu="Etch",$u="Graphite",Uu="Jelly",Hu="Jelly Duo",Vu="Jelly Fill",Wu="Mosaic",Gu="Notdog",Yu="Notdog Duo",Xu="Pixel",Ku="Slab",Zu="Slab Duo",Ju="Slab Press",qu="Slab Press Duo",Qu="Thumbprint",ec="Utility",tc="Utility Duo",nc="Utility Fill",rc="Vellum",ic="Whiteboard",io=[x,at,Na,ka,ja,Ba,za,$a,Ua,Ha,Va,Wa,Ga,Ya,Xa,Ka,Za,Ja,qa,Qa,eo,to,no,ro],Rp=(Lt={},m(m(m(m(m(m(m(m(m(m(Lt,x,Lu),at,Nu),Na,ku),ka,ju),ja,Bu),Ba,zu),za,$u),$a,Uu),Ua,Hu),Ha,Vu),m(m(m(m(m(m(m(m(m(m(Lt,Va,Wu),Wa,Gu),Ga,Yu),Ya,Xu),Xa,Ku),Ka,Zu),Za,Ju),Ja,qu),qa,Qu),Qa,ec),m(m(m(m(Lt,eo,tc),to,nc),no,rc),ro,ic)),ac={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},oc={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},sc=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),uc={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},ao=["fak","fa-kit","fakd","fa-kit-duotone"],ra={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cc=["kit"],lc="kit",fc="kit-duotone",dc="Kit",hc="Kit Duotone",Pp=m(m({},lc,dc),fc,hc),gc={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},mc={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pc={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ia={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nt,kt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vc=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],yc="classic",bc="duotone",Dc="sharp",wc="sharp-duotone",Ec="chisel",Sc="etch",Cc="graphite",Ac="jelly",Tc="jelly-duo",Fc="jelly-fill",Mc="mosaic",Ic="notdog",_c="notdog-duo",xc="pixel",Oc="slab",Rc="slab-duo",Pc="slab-press",Lc="slab-press-duo",Nc="thumbprint",kc="utility",jc="utility-duo",Bc="utility-fill",zc="vellum",$c="whiteboard",Uc="Classic",Hc="Duotone",Vc="Sharp",Wc="Sharp Duotone",Gc="Chisel",Yc="Etch",Xc="Graphite",Kc="Jelly",Zc="Jelly Duo",Jc="Jelly Fill",qc="Mosaic",Qc="Notdog",el="Notdog Duo",tl="Pixel",nl="Slab",rl="Slab Duo",il="Slab Press",al="Slab Press Duo",ol="Thumbprint",sl="Utility",ul="Utility Duo",cl="Utility Fill",ll="Vellum",fl="Whiteboard",Lp=(Nt={},m(m(m(m(m(m(m(m(m(m(Nt,yc,Uc),bc,Hc),Dc,Vc),wc,Wc),Ec,Gc),Sc,Yc),Cc,Xc),Ac,Kc),Tc,Zc),Fc,Jc),m(m(m(m(m(m(m(m(m(m(Nt,Mc,qc),Ic,Qc),_c,el),xc,tl),Oc,nl),Rc,rl),Pc,il),Lc,al),Nc,ol),kc,sl),m(m(m(m(Nt,jc,ul),Bc,cl),zc,ll),$c,fl)),dl="kit",hl="kit-duotone",gl="Kit",ml="Kit Duotone",Np=m(m({},dl,gl),hl,ml),pl={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},vl={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Hn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},yl=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],oo=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(vc,yl),bl=["solid","regular","light","thin","duotone","brands","semibold"],so=[1,2,3,4,5,6,7,8,9,10],Dl=so.concat([11,12,13,14,15,16,17,18,19,20]),wl=["aw","fw","pull-left","pull-right"],El=[].concat(z(Object.keys(vl)),bl,wl,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",kt.GROUP,kt.SWAP_OPACITY,kt.PRIMARY,kt.SECONDARY]).concat(so.map(function(t){return"".concat(t,"x")})).concat(Dl.map(function(t){return"w-".concat(t)})),Sl={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},J="___FONT_AWESOME___",Vn=16,uo="fa",co="svg-inline--fa",ve="data-fa-i2svg",Wn="data-fa-pseudo-element",Cl="data-fa-pseudo-element-pending",ar="data-prefix",or="data-icon",aa="fontawesome-i2svg",Al="async",Tl=["HTML","HEAD","STYLE","SCRIPT"],lo=["::before","::after",":before",":after"],fo=(function(){try{return!0}catch{return!1}})();function ot(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[x]}})}var ho=d({},Pa);ho[x]=d(d(d(d({},{"fa-duotone":"duotone"}),Pa[x]),ra.kit),ra["kit-duotone"]);var Fl=ot(ho),Gn=d({},uc);Gn[x]=d(d(d(d({},{duotone:"fad"}),Gn[x]),ia.kit),ia["kit-duotone"]);var oa=ot(Gn),Yn=d({},Hn);Yn[x]=d(d({},Yn[x]),pc.kit);var sr=ot(Yn),Xn=d({},pl);Xn[x]=d(d({},Xn[x]),gc.kit);var kp=ot(Xn),Ml=Ou,go="fa-layers-text",Il=Ru,_l=d({},ac),jp=ot(_l),xl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kn=Pu,Ol=[].concat(z(cc),z(El)),nt=oe.FontAwesomeConfig||{};function Rl(t){var r=C.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function Pl(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&(sa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],sa.forEach(function(t){var r=Vt(t,2),e=r[0],n=r[1],i=Pl(Rl(e));i!=null&&(nt[n]=i)}));var sa,mo={styleDefault:"solid",familyDefault:x,cssPrefix:uo,replacementClass:co,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var je=d(d({},mo),nt);je.autoReplaceSvg||(je.observeMutations=!1);var g={};Object.keys(mo).forEach(function(t){Object.defineProperty(g,t,{enumerable:!0,set:function(e){je[t]=e,rt.forEach(function(n){return n(g)})},get:function(){return je[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(r){je.cssPrefix=r,rt.forEach(function(e){return e(g)})},get:function(){return je.cssPrefix}});oe.FontAwesomeConfig=g;var rt=[];function Ll(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var ae=Vn,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nl(t){if(!(!t||!Q)){var r=C.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var e=C.head.childNodes,n=null,i=e.length-1;i>-1;i--){var a=e[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=a)}return C.head.insertBefore(r,n),t}}var kl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ua(){for(var t=12,r="";t-- >0;)r+=kl[Math.random()*62|0];return r}function Be(t){for(var r=[],e=(t||[]).length>>>0;e--;)r[e]=t[e];return r}function ur(t){return t.classList?Be(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(r){return r})}function po(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jl(t){return Object.keys(t||{}).reduce(function(r,e){return r+"".concat(e,'="').concat(po(t[e]),'" ')},"").trim()}function Wt(t){return Object.keys(t||{}).reduce(function(r,e){return r+"".concat(e,": ").concat(t[e].trim(),";")},"")}function cr(t){return t.size!==G.size||t.x!==G.x||t.y!==G.y||t.rotate!==G.rotate||t.flipX||t.flipY}function Bl(t){var r=t.transform,e=t.containerWidth,n=t.iconWidth,i={transform:"translate(".concat(e/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:u,path:c}}function zl(t){var r=t.transform,e=t.width,n=e===void 0?Vn:e,i=t.height,a=i===void 0?Vn:i,o=t.startCentered,s=o===void 0?!1:o,u="";return s&&Ra?u+="translate(".concat(r.x/ae-n/2,"em, ").concat(r.y/ae-a/2,"em) "):s?u+="translate(calc(-50% + ".concat(r.x/ae,"em), calc(-50% + ").concat(r.y/ae,"em)) "):u+="translate(".concat(r.x/ae,"em, ").concat(r.y/ae,"em) "),u+="scale(".concat(r.size/ae*(r.flipX?-1:1),", ").concat(r.size/ae*(r.flipY?-1:1),") "),u+="rotate(".concat(r.rotate,"deg) "),u}var $l=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
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
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
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
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
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

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
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
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function vo(){var t=uo,r=co,e=g.cssPrefix,n=g.replacementClass,i=$l;if(e!==t||n!==r){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(r),"g");i=i.replace(a,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(n))}return i}var ca=!1;function jn(){g.autoAddCss&&!ca&&(Nl(vo()),ca=!0)}var Ul={mixout:function(){return{dom:{css:vo,insertCss:jn}}},hooks:function(){return{beforeDOMElementCreation:function(){jn()},beforeI2svg:function(){jn()}}}},q=oe||{};q[J]||(q[J]={});q[J].styles||(q[J].styles={});q[J].hooks||(q[J].hooks={});q[J].shims||(q[J].shims=[]);var B=q[J],yo=[],bo=function(){C.removeEventListener("DOMContentLoaded",bo),Ut=1,yo.map(function(r){return r()})},Ut=!1;Q&&(Ut=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Ut||C.addEventListener("DOMContentLoaded",bo));function Hl(t){Q&&(Ut?setTimeout(t,0):yo.push(t))}function st(t){var r=t.tag,e=t.attributes,n=e===void 0?{}:e,i=t.children,a=i===void 0?[]:i;return typeof t=="string"?po(t):"<".concat(r," ").concat(jl(n),">").concat(a.map(st).join(""),"</").concat(r,">")}function la(t,r,e){if(t&&t[r]&&t[r][e])return{prefix:r,iconName:e,icon:t[r][e]}}var Vl=function(r,e){return function(n,i,a,o){return r.call(e,n,i,a,o)}},Bn=function(r,e,n,i){var a=Object.keys(r),o=a.length,s=i!==void 0?Vl(e,i):e,u,c,l;for(n===void 0?(u=1,l=r[a[0]]):(u=0,l=n);u<o;u++)c=a[u],l=s(l,r[c],c,r);return l};function Do(t){return z(t).length!==1?null:t.codePointAt(0).toString(16)}function fa(t){return Object.keys(t).reduce(function(r,e){var n=t[e],i=!!n.icon;return i?r[n.iconName]=n.icon:r[e]=n,r},{})}function Kn(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,i=n===void 0?!1:n,a=fa(r);typeof B.hooks.addPack=="function"&&!i?B.hooks.addPack(t,fa(r)):B.styles[t]=d(d({},B.styles[t]||{}),a),t==="fas"&&Kn("fa",r)}var it=B.styles,Wl=B.shims,wo=Object.keys(sr),Gl=wo.reduce(function(t,r){return t[r]=Object.keys(sr[r]),t},{}),lr=null,Eo={},So={},Co={},Ao={},To={};function Yl(t){return~Ol.indexOf(t)}function Xl(t,r){var e=r.split("-"),n=e[0],i=e.slice(1).join("-");return n===t&&i!==""&&!Yl(i)?i:null}var Fo=function(){var r=function(a){return Bn(it,function(o,s,u){return o[u]=Bn(s,a,{}),o},{})};Eo=r(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(u){return typeof u=="number"});s.forEach(function(u){i[u.toString(16)]=o})}return i}),So=r(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(u){return typeof u=="string"});s.forEach(function(u){i[u]=o})}return i}),To=r(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(u){i[u]=o}),i});var e="far"in it||g.autoFetchSvg,n=Bn(Wl,function(i,a){var o=a[0],s=a[1],u=a[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:u}),i},{names:{},unicodes:{}});Co=n.names,Ao=n.unicodes,lr=Gt(g.styleDefault,{family:g.familyDefault})};Ll(function(t){lr=Gt(t.styleDefault,{family:g.familyDefault})});Fo();function fr(t,r){return(Eo[t]||{})[r]}function Kl(t,r){return(So[t]||{})[r]}function pe(t,r){return(To[t]||{})[r]}function Mo(t){return Co[t]||{prefix:null,iconName:null}}function Zl(t){var r=Ao[t],e=fr("fas",t);return r||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function se(){return lr}var Io=function(){return{prefix:null,iconName:null,rest:[]}};function Jl(t){var r=x,e=wo.reduce(function(n,i){return n[i]="".concat(g.cssPrefix,"-").concat(i),n},{});return io.forEach(function(n){(t.includes(e[n])||t.some(function(i){return Gl[n].includes(i)}))&&(r=n)}),r}function Gt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.family,n=e===void 0?x:e,i=Fl[n][t];if(n===at&&!t)return"fad";var a=oa[n][t]||oa[n][i],o=t in B.styles?t:null,s=a||o||null;return s}function ql(t){var r=[],e=null;return t.forEach(function(n){var i=Xl(g.cssPrefix,n);i?e=i:n&&r.push(n)}),{iconName:e,rest:r}}function da(t){return t.sort().filter(function(r,e,n){return n.indexOf(r)===e})}var ha=oo.concat(ao);function Yt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,n=e===void 0?!1:e,i=null,a=da(t.filter(function(p){return ha.includes(p)})),o=da(t.filter(function(p){return!ha.includes(p)})),s=a.filter(function(p){return i=p,!La.includes(p)}),u=Vt(s,1),c=u[0],l=c===void 0?null:c,f=Jl(a),v=d(d({},ql(o)),{},{prefix:Gt(l,{family:f})});return d(d(d({},v),nf({values:t,family:f,styles:it,config:g,canonical:v,givenPrefix:i})),Ql(n,i,v))}function Ql(t,r,e){var n=e.prefix,i=e.iconName;if(t||!n||!i)return{prefix:n,iconName:i};var a=r==="fa"?Mo(i):{},o=pe(n,i);return i=a.iconName||o||i,n=a.prefix||n,n==="far"&&!it.far&&it.fas&&!g.autoFetchSvg&&(n="fas"),{prefix:n,iconName:i}}var ef=io.filter(function(t){return t!==x||t!==at}),tf=Object.keys(Hn).filter(function(t){return t!==x}).map(function(t){return Object.keys(Hn[t])}).flat();function nf(t){var r=t.values,e=t.family,n=t.canonical,i=t.givenPrefix,a=i===void 0?"":i,o=t.styles,s=o===void 0?{}:o,u=t.config,c=u===void 0?{}:u,l=e===at,f=r.includes("fa-duotone")||r.includes("fad"),v=c.familyDefault==="duotone",p=n.prefix==="fad"||n.prefix==="fa-duotone";if(!l&&(f||v||p)&&(n.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(n.prefix="fab"),!n.prefix&&ef.includes(e)){var T=Object.keys(s).find(function(S){return tf.includes(S)});if(T||c.autoFetchSvg){var E=sc.get(e).defaultShortPrefixId;n.prefix=E,n.iconName=pe(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||a==="fa")&&(n.prefix=se()||"fas"),n}var rf=(function(){function t(){Cu(this,t),this.definitions={}}return Au(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=d(d({},e.definitions[s]||{}),o[s]),Kn(s,o[s]);var u=sr[x][s];u&&Kn(u,o[s]),Fo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,u=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(f){typeof f=="string"&&(e[s][f]=c)}),e[s][u]=c}),e}}])})(),ga=[],Ne={},ke={},af=Object.keys(ke);function of(t,r){var e=r.mixoutsTo;return ga=t,Ne={},Object.keys(ke).forEach(function(n){af.indexOf(n)===-1&&delete ke[n]}),ga.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(e[o]=i[o]),$t(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=i[o][s]})}),n.hooks){var a=n.hooks();Object.keys(a).forEach(function(o){Ne[o]||(Ne[o]=[]),Ne[o].push(a[o])})}n.provides&&n.provides(ke)}),e}function Zn(t,r){for(var e=arguments.length,n=new Array(e>2?e-2:0),i=2;i<e;i++)n[i-2]=arguments[i];var a=Ne[t]||[];return a.forEach(function(o){r=o.apply(null,[r].concat(n))}),r}function ye(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];var i=Ne[t]||[];i.forEach(function(a){a.apply(null,e)})}function ue(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1);return ke[t]?ke[t].apply(null,r):void 0}function Jn(t){t.prefix==="fa"&&(t.prefix="fas");var r=t.iconName,e=t.prefix||se();if(r)return r=pe(e,r)||r,la(_o.definitions,e,r)||la(B.styles,e,r)}var _o=new rf,sf=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,ye("noAuto")},uf={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(ye("beforeI2svg",r),ue("pseudoElements2svg",r),ue("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,Hl(function(){lf({autoReplaceSvgRoot:e}),ye("watch",r)})}},cf={icon:function(r){if(r===null)return null;if($t(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:pe(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var e=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],n=Gt(r[0]);return{prefix:n,iconName:pe(n,e)||e}}if(typeof r=="string"&&(r.indexOf("".concat(g.cssPrefix,"-"))>-1||r.match(Ml))){var i=Yt(r.split(" "),{skipLookups:!0});return{prefix:i.prefix||se(),iconName:pe(i.prefix,i.iconName)||i.iconName}}if(typeof r=="string"){var a=se();return{prefix:a,iconName:pe(a,r)||r}}}},P={noAuto:sf,config:g,dom:uf,parse:cf,library:_o,findIconDefinition:Jn,toHtml:st},lf=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.autoReplaceSvgRoot,n=e===void 0?C:e;(Object.keys(B.styles).length>0||g.autoFetchSvg)&&Q&&g.autoReplaceSvg&&P.dom.i2svg({node:n})};function Xt(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return st(n)})}}),Object.defineProperty(t,"node",{get:function(){if(Q){var n=C.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function ff(t){var r=t.children,e=t.main,n=t.mask,i=t.attributes,a=t.styles,o=t.transform;if(cr(o)&&e.found&&!n.found){var s=e.width,u=e.height,c={x:s/u/2,y:.5};i.style=Wt(d(d({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:r}]}function df(t){var r=t.prefix,e=t.iconName,n=t.children,i=t.attributes,a=t.symbol,o=a===!0?"".concat(r,"-").concat(g.cssPrefix,"-").concat(e):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},i),{},{id:o}),children:n}]}]}function hf(t){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(e){return e in t})}function dr(t){var r=t.icons,e=r.main,n=r.mask,i=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,u=t.maskId,c=t.extra,l=t.watchable,f=l===void 0?!1:l,v=n.found?n:e,p=v.width,T=v.height,E=[g.replacementClass,a?"".concat(g.cssPrefix,"-").concat(a):""].filter(function(_){return c.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(c.classes).join(" "),S={children:[],attributes:d(d({},c.attributes),{},{"data-prefix":i,"data-icon":a,class:E,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(T)})};!hf(c.attributes)&&!c.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),f&&(S.attributes[ve]="");var F=d(d({},S),{},{prefix:i,iconName:a,main:e,mask:n,maskId:u,transform:o,symbol:s,styles:d({},c.styles)}),M=n.found&&e.found?ue("generateAbstractMask",F)||{children:[],attributes:{}}:ue("generateAbstractIcon",F)||{children:[],attributes:{}},O=M.children,L=M.attributes;return F.children=O,F.attributes=L,s?df(F):ff(F)}function ma(t){var r=t.content,e=t.width,n=t.height,i=t.transform,a=t.extra,o=t.watchable,s=o===void 0?!1:o,u=d(d({},a.attributes),{},{class:a.classes.join(" ")});s&&(u[ve]="");var c=d({},a.styles);cr(i)&&(c.transform=zl({transform:i,startCentered:!0,width:e,height:n}),c["-webkit-transform"]=c.transform);var l=Wt(c);l.length>0&&(u.style=l);var f=[];return f.push({tag:"span",attributes:u,children:[r]}),f}function gf(t){var r=t.content,e=t.extra,n=d(d({},e.attributes),{},{class:e.classes.join(" ")}),i=Wt(e.styles);i.length>0&&(n.style=i);var a=[];return a.push({tag:"span",attributes:n,children:[r]}),a}var zn=B.styles;function qn(t){var r=t[0],e=t[1],n=t.slice(4),i=Vt(n,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(kn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(kn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(kn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:r,height:e,icon:o}}var mf={found:!1,width:512,height:512};function pf(t,r){!fo&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function Qn(t,r){var e=r;return r==="fa"&&g.styleDefault!==null&&(r=se()),new Promise(function(n,i){if(e==="fa"){var a=Mo(t)||{};t=a.iconName||t,r=a.prefix||r}if(t&&r&&zn[r]&&zn[r][t]){var o=zn[r][t];return n(qn(o))}pf(t,r),n(d(d({},mf),{},{icon:g.showMissingIcons&&t?ue("missingIconAbstract")||{}:{}}))})}var pa=function(){},er=g.measurePerformance&&Pt&&Pt.mark&&Pt.measure?Pt:{mark:pa,measure:pa},tt='FA "7.3.1"',vf=function(r){return er.mark("".concat(tt," ").concat(r," begins")),function(){return xo(r)}},xo=function(r){er.mark("".concat(tt," ").concat(r," ends")),er.measure("".concat(tt," ").concat(r),"".concat(tt," ").concat(r," begins"),"".concat(tt," ").concat(r," ends"))},hr={begin:vf,end:xo},Bt=function(){};function va(t){var r=t.getAttribute?t.getAttribute(ve):null;return typeof r=="string"}function yf(t){var r=t.getAttribute?t.getAttribute(ar):null,e=t.getAttribute?t.getAttribute(or):null;return r&&e}function bf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function Df(){if(g.autoReplaceSvg===!0)return zt.replace;var t=zt[g.autoReplaceSvg];return t||zt.replace}function wf(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function Ef(t){return C.createElement(t)}function Oo(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.ceFn,n=e===void 0?t.tag==="svg"?wf:Ef:e;if(typeof t=="string")return C.createTextNode(t);var i=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){i.appendChild(Oo(o,{ceFn:n}))}),i}function Sf(t){var r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var zt={replace:function(r){var e=r[0];if(e.parentNode)if(r[1].forEach(function(i){e.parentNode.insertBefore(Oo(i),e)}),e.getAttribute(ve)===null&&g.keepOriginalSource){var n=C.createComment(Sf(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(r){var e=r[0],n=r[1];if(~ur(e).indexOf(g.replacementClass))return zt.replace(r);var i=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(s,u){return u===g.replacementClass||u.match(i)?s.toSvg.push(u):s.toNode.push(u),s},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var o=n.map(function(s){return st(s)}).join(`
`);e.setAttribute(ve,""),e.innerHTML=o}};function ya(t){t()}function Ro(t,r){var e=typeof r=="function"?r:Bt;if(t.length===0)e();else{var n=ya;g.mutateApproach===Al&&(n=oe.requestAnimationFrame||ya),n(function(){var i=Df(),a=hr.begin("mutate");t.map(i),a(),e()})}}var gr=!1;function Po(){gr=!0}function tr(){gr=!1}var Ht=null;function ba(t){if(na&&g.observeMutations){var r=t.treeCallback,e=r===void 0?Bt:r,n=t.nodeCallback,i=n===void 0?Bt:n,a=t.pseudoElementsCallback,o=a===void 0?Bt:a,s=t.observeMutationsRoot,u=s===void 0?C:s;Ht=new na(function(c){if(!gr){var l=se();Be(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!va(f.addedNodes[0])&&(g.searchPseudoElements&&o(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&g.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&va(f.target)&&~xl.indexOf(f.attributeName))if(f.attributeName==="class"&&yf(f.target)){var v=Yt(ur(f.target)),p=v.prefix,T=v.iconName;f.target.setAttribute(ar,p||l),T&&f.target.setAttribute(or,T)}else bf(f.target)&&i(f.target)})}}),Q&&Ht.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cf(){Ht&&Ht.disconnect()}function Af(t){var r=t.getAttribute("style"),e=[];return r&&(e=r.split(";").reduce(function(n,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),e}function Tf(t){var r=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",i=Yt(ur(t));return i.prefix||(i.prefix=se()),r&&e&&(i.prefix=r,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=Kl(i.prefix,t.innerText)||fr(i.prefix,Do(t.innerText))),!i.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ff(t){var r=Be(t.attributes).reduce(function(e,n){return e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e},{});return r}function Mf(){return{iconName:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Da(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Tf(t),n=e.iconName,i=e.prefix,a=e.rest,o=Ff(t),s=Zn("parseNodeAttributes",{},t),u=r.styleParser?Af(t):[];return d({iconName:n,prefix:i,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:u,attributes:o}},s)}var If=B.styles;function Lo(t){var r=g.autoReplaceSvg==="nest"?Da(t,{styleParser:!1}):Da(t);return~r.extra.classes.indexOf(go)?ue("generateLayersText",t,r):ue("generateSvgReplacementMutation",t,r)}function _f(){return[].concat(z(ao),z(oo))}function wa(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var e=C.documentElement.classList,n=function(f){return e.add("".concat(aa,"-").concat(f))},i=function(f){return e.remove("".concat(aa,"-").concat(f))},a=g.autoFetchSvg?_f():La.concat(Object.keys(If));a.includes("fa")||a.push("fa");var o=[".".concat(go,":not([").concat(ve,"])")].concat(a.map(function(l){return".".concat(l,":not([").concat(ve,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Be(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),i("complete");else return Promise.resolve();var u=hr.begin("onTree"),c=s.reduce(function(l,f){try{var v=Lo(f);v&&l.push(v)}catch(p){fo||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,f){Promise.all(c).then(function(v){Ro(v,function(){n("active"),n("complete"),i("pending"),typeof r=="function"&&r(),u(),l()})}).catch(function(v){u(),f(v)})})}function xf(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lo(t).then(function(e){e&&Ro([e],r)})}function Of(t){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(r||{}).icon?r:Jn(r||{}),i=e.mask;return i&&(i=(i||{}).icon?i:Jn(i||{})),t(n,d(d({},e),{},{mask:i}))}}var Rf=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?G:n,a=e.symbol,o=a===void 0?!1:a,s=e.mask,u=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,f=e.classes,v=f===void 0?[]:f,p=e.attributes,T=p===void 0?{}:p,E=e.styles,S=E===void 0?{}:E;if(r){var F=r.prefix,M=r.iconName,O=r.icon;return Xt(d({type:"icon"},r),function(){return ye("beforeDOMElementCreation",{iconDefinition:r,params:e}),dr({icons:{main:qn(O),mask:u?qn(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:M,transform:d(d({},G),i),symbol:o,maskId:l,extra:{attributes:T,styles:S,classes:v}})})}},Pf={mixout:function(){return{icon:Of(Rf)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=wa,e.nodeCallback=xf,e}}},provides:function(r){r.i2svg=function(e){var n=e.node,i=n===void 0?C:n,a=e.callback,o=a===void 0?function(){}:a;return wa(i,o)},r.generateSvgReplacementMutation=function(e,n){var i=n.iconName,a=n.prefix,o=n.transform,s=n.symbol,u=n.mask,c=n.maskId,l=n.extra;return new Promise(function(f,v){Promise.all([Qn(i,a),u.iconName?Qn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var T=Vt(p,2),E=T[0],S=T[1];f([e,dr({icons:{main:E,mask:S},prefix:a,iconName:i,transform:o,symbol:s,maskId:c,extra:l,watchable:!0})])}).catch(v)})},r.generateAbstractIcon=function(e){var n=e.children,i=e.attributes,a=e.main,o=e.transform,s=e.styles,u=Wt(s);u.length>0&&(i.style=u);var c;return cr(o)&&(c=ue("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:i}}}},Lf={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,a=i===void 0?[]:i;return Xt({type:"layer"},function(){ye("beforeDOMElementCreation",{assembler:e,params:n});var o=[];return e(function(s){Array.isArray(s)?s.map(function(u){o=o.concat(u.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(z(a)).join(" ")},children:o}]})}}}},Nf={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,a=i===void 0?null:i,o=n.classes,s=o===void 0?[]:o,u=n.attributes,c=u===void 0?{}:u,l=n.styles,f=l===void 0?{}:l;return Xt({type:"counter",content:e},function(){return ye("beforeDOMElementCreation",{content:e,params:n}),gf({content:e.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(z(s))}})})}}}},kf={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,a=i===void 0?G:i,o=n.classes,s=o===void 0?[]:o,u=n.attributes,c=u===void 0?{}:u,l=n.styles,f=l===void 0?{}:l;return Xt({type:"text",content:e},function(){return ye("beforeDOMElementCreation",{content:e,params:n}),ma({content:e,transform:d(d({},G),a),extra:{attributes:c,styles:f,classes:["".concat(g.cssPrefix,"-layers-text")].concat(z(s))}})})}}},provides:function(r){r.generateLayersText=function(e,n){var i=n.transform,a=n.extra,o=null,s=null;if(Ra){var u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,s=c.height/u}return Promise.resolve([e,ma({content:e.innerHTML,width:o,height:s,transform:i,extra:a,watchable:!0})])}}},No=new RegExp('"',"ug"),Ea=[1105920,1112319],Sa=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),oc),Sl),mc),nr=Object.keys(Sa).reduce(function(t,r){return t[r.toLowerCase()]=Sa[r],t},{}),jf=Object.keys(nr).reduce(function(t,r){var e=nr[r];return t[r]=e[900]||z(Object.entries(e))[0][1],t},{});function Bf(t){var r=t.replace(No,"");return Do(z(r)[0]||"")}function zf(t){var r=t.getPropertyValue("font-feature-settings").includes("ss01"),e=t.getPropertyValue("content"),n=e.replace(No,""),i=n.codePointAt(0),a=i>=Ea[0]&&i<=Ea[1],o=n.length===2?n[0]===n[1]:!1;return a||o||r}function $f(t,r){var e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(r),i=isNaN(n)?"normal":n;return(nr[e]||{})[i]||jf[e]}function Ca(t,r){var e="".concat(Cl).concat(r.replace(":","-"));return new Promise(function(n,i){if(t.getAttribute(e)!==null)return n();var a=Be(t.children),o=a.filter(function(Y){return Y.getAttribute(Wn)===r})[0],s=oe.getComputedStyle(t,r),u=s.getPropertyValue("font-family"),c=u.match(Il),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),n();if(c&&f!=="none"&&f!==""){var v=s.getPropertyValue("content"),p=$f(u,l),T=Bf(v),E=c[0].startsWith("FontAwesome"),S=zf(s),F=fr(p,T),M=F;if(E){var O=Zl(T);O.iconName&&O.prefix&&(F=O.iconName,p=O.prefix)}if(F&&!S&&(!o||o.getAttribute(ar)!==p||o.getAttribute(or)!==M)){t.setAttribute(e,M),o&&t.removeChild(o);var L=Mf(),_=L.extra;_.attributes[Wn]=r,Qn(F,p).then(function(Y){var ce=dr(d(d({},L),{},{icons:{main:Y,mask:Io()},prefix:p,iconName:M,extra:_,watchable:!0})),$=C.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=ce.map(function(U){return st(U)}).join(`
`),t.removeAttribute(e),n()}).catch(i)}else n()}else n()})}function Uf(t){return Promise.all([Ca(t,"::before"),Ca(t,"::after")])}function Hf(t){return t.parentNode!==document.head&&!~Tl.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Vf=function(r){return!!r&&lo.some(function(e){return r.includes(e)})},Wf=function(r){if(!r)return[];var e=new Set,n=r.split(/,(?![^()]*\))/).map(function(u){return u.trim()});n=n.flatMap(function(u){return u.includes("(")?u:u.split(",").map(function(c){return c.trim()})});var i=jt(n),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;if(Vf(o)){var s=lo.reduce(function(u,c){return u.replace(c,"")},o);s!==""&&s!=="*"&&e.add(s)}}}catch(u){i.e(u)}finally{i.f()}return e};function Aa(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Q){var e;if(r)e=t;else if(g.searchPseudoElementsFullScan)e=t.querySelectorAll("*");else{var n=new Set,i=jt(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=jt(o.cssRules),u;try{for(s.s();!(u=s.n()).done;){var c=u.value,l=Wf(c.selectorText),f=jt(l),v;try{for(f.s();!(v=f.n()).done;){var p=v.value;n.add(p)}}catch(E){f.e(E)}finally{f.f()}}}catch(E){s.e(E)}finally{s.f()}}catch(E){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(E.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(E){i.e(E)}finally{i.f()}if(!n.size)return;var T=Array.from(n).join(", ");try{e=t.querySelectorAll(T)}catch{}}return new Promise(function(E,S){var F=Be(e).filter(Hf).map(Uf),M=hr.begin("searchPseudoElements");Po(),Promise.all(F).then(function(){M(),tr(),E()}).catch(function(){M(),tr(),S()})})}}var Gf={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Aa,e}}},provides:function(r){r.pseudoElements2svg=function(e){var n=e.node,i=n===void 0?C:n;g.searchPseudoElements&&Aa(i)}}},Ta=!1,Yf={mixout:function(){return{dom:{unwatch:function(){Po(),Ta=!0}}}},hooks:function(){return{bootstrap:function(){ba(Zn("mutationObserverCallbacks",{}))},noAuto:function(){Cf()},watch:function(e){var n=e.observeMutationsRoot;Ta?tr():ba(Zn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Fa=function(r){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(n,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)},Xf={mixout:function(){return{parse:{transform:function(e){return Fa(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-transform");return i&&(e.transform=Fa(i)),e}}},provides:function(r){r.generateAbstractTransformGrouping=function(e){var n=e.main,i=e.transform,a=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(a/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(u," ").concat(c," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:v};return{tag:"g",attributes:d({},p.outer),children:[{tag:"g",attributes:d({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),p.path)}]}]}}}},$n={x:0,y:0,width:"100%",height:"100%"};function Ma(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function Kf(t){return t.tag==="g"?t.children:[t]}var Zf={hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-mask"),a=i?Yt(i.split(" ").map(function(o){return o.trim()})):Io();return a.prefix||(a.prefix=se()),e.mask=a,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(r){r.generateAbstractMask=function(e){var n=e.children,i=e.attributes,a=e.main,o=e.mask,s=e.maskId,u=e.transform,c=a.width,l=a.icon,f=o.width,v=o.icon,p=Bl({transform:u,containerWidth:f,iconWidth:c}),T={tag:"rect",attributes:d(d({},$n),{},{fill:"white"})},E=l.children?{children:l.children.map(Ma)}:{},S={tag:"g",attributes:d({},p.inner),children:[Ma(d({tag:l.tag,attributes:d(d({},l.attributes),p.path)},E))]},F={tag:"g",attributes:d({},p.outer),children:[S]},M="mask-".concat(s||ua()),O="clip-".concat(s||ua()),L={tag:"mask",attributes:d(d({},$n),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,F]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Kf(v)},L]};return n.push(_,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(M,")")},$n)}),{children:n,attributes:i}}}},Jf={provides:function(r){var e=!1;oe.matchMedia&&(e=oe.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:d(d({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qf={hooks:function(){return{parseNodeAttributes:function(e,n){var i=n.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return e.symbol=a,e}}}},Qf=[Ul,Pf,Lf,Nf,kf,Gf,Yf,Xf,Zf,Jf,qf];of(Qf,{mixoutsTo:P});var Bp=P.noAuto,ko=P.config,zp=P.library,jo=P.dom,Bo=P.parse,$p=P.findIconDefinition,Up=P.toHtml,zo=P.icon,Hp=P.layer,ed=P.text,td=P.counter;var nd=["*"],rd=(()=>{class t{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){ko.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),id=(()=>{class t{definitions={};addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let i of n.icon[2])typeof i=="string"&&(this.definitions[n.prefix][i]=n)}}addIconPacks(...e){for(let n of e){let i=Object.keys(n).map(a=>n[a]);this.addIcons(...i)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ad=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},od=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Uo=t=>t!=null&&(t===90||t===180||t===270||t==="90"||t==="180"||t==="270"),sd=t=>{let r=Uo(t.rotate),e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!=null,[`fa-rotate-${t.rotate}`]:r,"fa-rotate-by":t.rotate!=null&&!r,[`fa-pull-${t.pull}`]:t.pull!=null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n!=null)},mr=new WeakSet,$o="fa-auto-css";function ud(t,r,e){if(!r.autoAddCss||mr.has(t))return;if(t.getElementById($o)!=null){r.autoAddCss=!1,mr.add(t);return}let n=t.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",$o),e&&n.setAttribute("nonce",e),n.innerHTML=jo.css();let i=t.head.childNodes,a=null;for(let o=i.length-1;o>-1;o--){let s=i[o],u=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(a=s)}t.head.insertBefore(n,a),r.autoAddCss=!1,mr.add(t)}var cd=t=>t.prefix!==void 0&&t.iconName!==void 0,ld=(t,r)=>cd(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:r,iconName:t},fd=(()=>{class t{stackItemSize=Ie("1x");size=Ie();_effect=on(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return t})(),dd=(()=>{class t{size=Ie();classes=Me(()=>{let e=this.size(),n=e?{[`fa-${e}`]:!0}:{};return H(D({},n),{"fa-stack":!0})});static \u0275fac=function(n){return new(n||t)};static \u0275cmp=He({type:t,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(n,i){n&2&&Kr(i.classes())},inputs:{size:[1,"size"]},ngContentSelectors:nd,decls:1,vars:0,template:function(n,i){n&1&&(Gr(),Yr(0))},encapsulation:2})}return t})(),e0=(()=>{class t{icon=R();title=R();animation=R();mask=R();flip=R();size=R();pull=R();border=R();inverse=R();symbol=R();rotate=R();fixedWidth=R();transform=R();a11yRole=R();renderedIconHTML=Me(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return od(),"";let n=this.findIconDefinition(e);if(!n)return"";let i=this.buildParams();ud(this.document,this.config,this.cspNonce);let a=zo(n,i);return this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))});cspNonce=h(Se);document=h(I);sanitizer=h(Cn);config=h(rd);iconLibrary=h(id);stackItem=h(fd,{optional:!0});stack=h(dd,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let n=ld(e,this.config.defaultPrefix);if("icon"in n)return n;let i=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return i??(ad(n),null)}buildParams(){let e=this.fixedWidth(),n={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},i=this.transform(),a=typeof i=="string"?Bo.transform(i):i,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,u={},c=this.a11yRole();c!=null&&(u.role=c);let l={};return n.rotate!=null&&!Uo(n.rotate)&&(l["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title(),transform:a,classes:sd(n),mask:s??void 0,symbol:this.symbol(),attributes:u,styles:l}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=He({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,i){n&2&&(vt("innerHTML",i.renderedIconHTML(),ht),Hr("title",i.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(n,i){},encapsulation:2})}return t})();var t0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Fe({type:t});static \u0275inj=De({})}return t})();var s0=(()=>{class t{downloadMessage=Ie(!1);confirmOpenLink(e){let n=e.currentTarget.href,i;this.downloadMessage()?i=window.confirm(Nn("open-link-confirmation.download-message")):i=window.confirm(Nn("open-link-confirmation.message")+`
`+(n??"")),!i&&e.preventDefault()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["a","jcOpenLinkConfirmation",""]],hostBindings:function(n,i){n&1&&Wr("click",function(o){return i.confirmOpenLink(o)})},inputs:{downloadMessage:[1,"downloadMessage"]}})}return t})();var c0={linkedinUrl:"https://www.linkedin.com/in/jc-jie-chen"};export{ii as a,Zo as b,qo as c,dg as d,As as e,Oi as f,Js as g,qs as h,Xm as i,Ri as j,Wi as k,Tp as l,Fp as m,Mp as n,Ip as o,s0 as p,c0 as q,id as r,e0 as s,t0 as t};
