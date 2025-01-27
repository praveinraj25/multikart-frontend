import{g as f,m as C,q as w}from"./chunk-NN2O2SRW.js";import{e as v}from"./chunk-JNNHAVON.js";import{e as T}from"./chunk-SWOSTGIK.js";import{Fc as o,L as m,O as n,Pc as O,Wb as l,a,b as r,ba as g,d as i,ea as c,gc as u,hc as d,lc as _,qc as b,t as h,ud as y}from"./chunk-FQQSMIRW.js";var e=class e{constructor(t,s,$,B,M){this.meta=t;this.router=s;this.titleService=$;this.platformId=B;this.ngZone=M;this.currentMessageIndex=0;this.delay=1e3;this.isTabInFocus=!0;this.scoContent={};this.isBrowser=l(this.platformId),this.isBrowser&&(this.router.events.pipe(h(p=>p instanceof _)).subscribe(p=>{this.path=p.url,document.addEventListener("visibilitychange",()=>{this.messages=this.themeOption.general.taglines,this.ngZone.run(()=>{this.updateSeo(this.path)})}),this.updateSeo(this.path)}),this.fetchData())}fetchData(){this.setting$.subscribe(t=>this.setting=t),this.product$.subscribe(t=>this.product=t),this.blog$.subscribe(t=>this.blog=t),this.page$.subscribe(t=>this.page=t),this.brand$.subscribe(t=>this.brand=t),this.category$.subscribe(t=>this.category=t),this.themeOption$.subscribe(t=>{this.themeOption=t})}updateSeo(t){t.includes("product")?(this.product&&(this.scoContent={url:window.location.href,og_title:this.product.meta_title||this.themeOption?.seo?.meta_title,og_description:this.product.meta_description||this.themeOption?.seo?.meta_description,og_image:this.product.product_meta_image?.original_url||this.themeOption?.seo?.og_image?.original_url}),this.customSCO()):t.includes("blog")?this.blog&&(this.scoContent=r(a({},this.scoContent),{url:window.location.href,og_title:this.blog?.meta_title||this.themeOption?.seo?.meta_title,og_description:this.blog?.meta_description||this.themeOption?.seo?.meta_description,og_image:this.blog?.blog_meta_image?.original_url||this.themeOption?.seo?.og_image?.original_url}),this.customSCO()):t.includes("page")?(this.page&&(this.scoContent=r(a({},this.scoContent),{url:window.location.href,og_title:this.page?.meta_title||this.themeOption?.seo?.meta_title,og_description:this.page?.meta_description||this.themeOption?.seo?.meta_description,og_image:this.page?.page_meta_image?.original_url||this.themeOption?.seo?.og_image?.original_url})),this.customSCO()):t.includes("brand")?(this.brand&&(this.scoContent=r(a({},this.scoContent),{url:window.location.href,og_title:this.brand?.meta_title||this.themeOption?.seo?.meta_title,og_description:this.brand?.meta_description||this.themeOption?.seo?.meta_description,og_image:this.brand?.brand_meta_image?.original_url||this.themeOption?.seo?.og_image?.original_url})),this.customSCO()):t.includes("category")?(this.category&&(this.scoContent=r(a({},this.scoContent),{url:window.location.href,og_title:this.category?.meta_title||this.themeOption?.seo?.meta_title,og_description:this.category?.meta_description||this.themeOption?.seo?.meta_description,og_image:this.category?.category_meta_image?.original_url||this.themeOption?.seo?.og_image?.original_url})),this.customSCO()):this.updateDefaultSeo()}updateDefaultSeo(){if(this.meta.updateTag({name:"title",content:this.themeOption?.seo?.meta_title}),this.meta.updateTag({name:"description",content:this.themeOption?.seo?.meta_description}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:url",content:this.scoContent.url}),this.meta.updateTag({property:"og:title",content:this.themeOption?.seo?.meta_title}),this.meta.updateTag({property:"og:description",content:this.themeOption?.seo?.meta_description}),this.meta.updateTag({property:"og:image",content:this.scoContent.og_image}),this.meta.updateTag({property:"twitter:card",content:"summary_large_image"}),this.meta.updateTag({property:"twitter:url",content:this.scoContent.url}),this.meta.updateTag({property:"twitter:title",content:this.themeOption?.seo?.meta_title}),this.meta.updateTag({property:"twitter:description",content:this.themeOption?.seo?.meta_description}),this.meta.updateTag({property:"twitter:image",content:this.scoContent.og_image}),this.themeOption?.general&&this.themeOption?.general?.exit_tagline_enable)document.addEventListener("visibilitychange",()=>{this.messages=this.themeOption.general.taglines,this.ngZone.run(()=>{if(this.isTabInFocus=!document.hidden,this.isTabInFocus)return clearTimeout(this.timeoutId),this.titleService.setTitle(this.themeOption?.general?.site_title&&this.themeOption?.general?.site_tagline?`${this.themeOption?.general?.site_title} | ${this.themeOption?.general?.site_tagline}`:"");this.updateMessage()})}),this.scoContent=r(a({},this.scoContent),{url:window.location.href,og_title:this.themeOption?.seo?.meta_title,og_description:this.themeOption?.seo?.meta_description,og_image:this.themeOption?.seo?.og_image?.original_url}),this.customSCO();else return this.titleService.setTitle(this.themeOption?.general?.site_title&&this.themeOption?.general?.site_tagline?`${this.themeOption?.general?.site_title} | ${this.themeOption?.general?.site_tagline}`:"")}customSCO(){let t=this.scoContent.og_title,s=this.scoContent.og_description;this.titleService.setTitle(t),this.meta.updateTag({name:"title",content:t}),this.meta.updateTag({name:"description",content:s}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:url",content:this.scoContent.url}),this.meta.updateTag({property:"og:title",content:t}),this.meta.updateTag({property:"og:description",content:s}),this.meta.updateTag({property:"og:image",content:this.scoContent.og_image}),this.meta.updateTag({property:"twitter:card",content:"summary_large_image"}),this.meta.updateTag({property:"twitter:url",content:this.scoContent.url}),this.meta.updateTag({property:"twitter:title",content:t}),this.meta.updateTag({property:"twitter:description",content:s}),this.meta.updateTag({property:"twitter:image",content:this.scoContent.og_image})}updateMessage(){clearTimeout(this.timeoutId),this.currentMessage=this.messages[this.currentMessageIndex],this.titleService.setTitle(this.currentMessage),this.currentMessageIndex=(this.currentMessageIndex+1)%this.messages.length,this.timeoutId=setTimeout(()=>{this.updateMessage()},this.delay)}ngOnDestroy(){clearTimeout(this.timeoutId)}static{this.\u0275fac=function(s){return new(s||e)(n(u),n(b),n(d),n(c),n(g))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}};i([o(T.themeOptions)],e.prototype,"themeOption$",2),i([o(O.setting)],e.prototype,"setting$",2),i([o(y.selectedProduct)],e.prototype,"product$",2),i([o(C.selectedBlog)],e.prototype,"blog$",2),i([o(w.selectedBrand)],e.prototype,"brand$",2),i([o(v.selectedPage)],e.prototype,"page$",2),i([o(f.selectedCategory)],e.prototype,"category$",2);var I=e;export{I as a};
