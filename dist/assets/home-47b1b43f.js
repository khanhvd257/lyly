import{g as ee}from"./index-30d4c17e.js";import"./QRcode.vue_vue_type_style_index_0_scoped_7e7556d3_lang-489fc7d6.js";import{_ as V,o as c,f as d,d as a,w as h,F as y,r as w,h as t,t as m,i as W,p as x,l as S,a as L,m as z,s as te,v as se,x as ae,y as F,z as oe,A as $,B as re,C as ne,D as ie,u as D,e as I,V as ce,j as le,E as de,G as ue,H as he,J as me,K as _e,L as pe,M as ge,N as ve,O as fe,P as R}from"./index-d8bdc496.js";import{S as q,a as E,A as ye,P as be,N as $e}from"./swiper-vue-02fd500e.js";import{R as we}from"./Review-cef14774.js";import{g as k,a as Ve}from"./product-52434122.js";import{V as M}from"./VRating-fff97717.js";import{V as C}from"./VRow-a0998b98.js";import{P as O}from"./productList-6fbce282.js";import{g as xe}from"./getScrollParent-7b3d9385.js";import{V as B}from"./VImg-d0ac8ec7.js";import{m as Se,V as Pe,a as ke}from"./VWindowItem-4babeb23.js";import{V as Ce}from"./VCol-2f8f9c79.js";import{V as Ie}from"./VCard-1e8bcd02.js";import{V as Le}from"./VAvatar-89ad20fc.js";import"./lazy-93080ec6.js";import"./ssrBoot-46c30e5a.js";import"./createSimpleFunctional-0b4fdfea.js";const De={name:"FavoriteProduct",data(){return{productList:[]}},created(){this.getData()},methods:{getData(){k({favorite:!0}).then(e=>{this.productList=e.data})},handleToProduct(e){this.$router.push({name:"productDetail",query:{id:e.id},params:{title:e.name}})}}},H=e=>(x("data-v-ff9b7b26"),e=e(),S(),e),Be={class:"product"},je=H(()=>t("h3",{class:"header-text"},"Sản phẩm được yêu thích nhất",-1)),Te=["onClick"],Ne={class:"product-img"},Ae=["src"],Re=H(()=>t("div",{class:"item-img-tag"},[t("div",{class:"tag-favorite"},[t("span",null,"Yêu thích")])],-1)),We={class:"product-desc"},ze={class:"product-name clamp-text"},Fe={class:"product-rating"},qe={style:{display:"flex","align-items":"stretch"}},Ee={class:"product-price"};function Me(e,_,o,i,r,u){return c(),d("div",Be,[je,a(C,{class:"container","justify-sm":"space-between",justify:"space-around"},{default:h(()=>[(c(!0),d(y,null,w(r.productList,s=>(c(),d("div",{key:s.id},[t("div",{class:"product-content hover-card",onClick:b=>u.handleToProduct(s)},[t("div",Ne,[t("img",{src:s.image_url,alt:""},null,8,Ae),Re]),t("div",We,[t("span",ze,m(s.name),1),t("div",Fe,[t("div",qe,[a(M,{"model-value":s.avg_rating,size:"18",icon:"emojione:star"},null,8,["model-value"])]),t("span",null,[W(" Đã bán "),t("strong",null,m(s.total_sold),1)])]),t("span",Ee,m(e.formatPrice(s.price)),1)])],8,Te)]))),128))]),_:1})])}const U=V(De,[["render",Me],["__scopeId","data-v-ff9b7b26"]]);function Oe(e){return Math.floor(Math.abs(e))*Math.sign(e)}const He=L()({name:"VParallax",props:{scale:{type:[Number,String],default:.5},...z()},setup(e,_){let{slots:o}=_;const{intersectionRef:i,isIntersecting:r}=te(),{resizeRef:u,contentRect:s}=se(),{height:b}=ae(),f=F();oe(()=>{var l;i.value=u.value=(l=f.value)==null?void 0:l.$el});let n;$(r,l=>{l?(n=xe(i.value),n=n===document.scrollingElement?document:n,n.addEventListener("scroll",g,{passive:!0}),g()):n.removeEventListener("scroll",g)}),re(()=>{n==null||n.removeEventListener("scroll",g)}),$(b,g),$(()=>{var l;return(l=s.value)==null?void 0:l.height},g);const p=ne(()=>1-ie(+e.scale));let v=-1;function g(){r.value&&(cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var A;const l=((A=f.value)==null?void 0:A.$el).querySelector(".v-img__img");if(!l)return;const T=n instanceof Document?document.documentElement.clientHeight:n.clientHeight,N=n instanceof Document?window.scrollY:n.scrollTop,G=i.value.getBoundingClientRect().top+N,P=s.value.height,Q=G+(P-T)/2,X=Oe((N-Q)*p.value),Z=Math.max(1,(p.value*(T-P)+P)/P);l.style.setProperty("transform",`translateY(${X}px) scale(${Z})`)}))}return D(()=>a(B,{class:["v-parallax",{"v-parallax--active":r.value},e.class],style:e.style,ref:f,cover:!0,onLoadstart:g,onLoad:g},o)),{}}}),Ue={name:"ThreeBanner"},Ye=e=>(x("data-v-b75f93b2"),e=e(),S(),e),Je=Ye(()=>t("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[t("h1",{class:"text-h4 font-weight-thin mb-4"}," LYLY STORE "),t("h4",{class:"subheading"}," MANG KỈ NIỆM VỀ BÊN BẠN ")],-1));function Ke(e,_,o,i,r,u){return c(),I(He,{height:"300",class:"banner",src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"},{default:h(()=>[Je]),_:1})}const Y=V(Ue,[["render",Ke],["__scopeId","data-v-b75f93b2"]]);const Ge={name:"HotProduct",data(){return{productList:[]}},created(){this.getData()},methods:{getData(){k({rating:!0}).then(e=>{this.productList=e.data})},handleToProduct(e){this.$router.push({name:"productDetail",query:{id:e.id},params:{title:e.name}})}}},J=e=>(x("data-v-619877a8"),e=e(),S(),e),Qe={class:"product"},Xe=J(()=>t("h3",{class:"header-text"},"Sản phẩm bán chạy",-1)),Ze={class:"product-content hover-card"},et=J(()=>t("div",{class:"product-img"},[t("img",{src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",alt:""})],-1)),tt={class:"product-desc"},st={class:"product-name"},at={class:"product-rating"},ot={style:{display:"flex","align-items":"stretch"}},rt={class:"product-price"};function nt(e,_,o,i,r,u){return c(),d("div",Qe,[Xe,a(C,{class:"container-product","justify-sm":"space-between",justify:"space-around"},{default:h(()=>[(c(!0),d(y,null,w(r.productList,s=>(c(),d("div",{key:s.id},[t("div",Ze,[et,t("div",tt,[t("span",st,m(s.name),1),t("div",at,[t("div",ot,[t("span",null,m(s.avg_rating),1),a(ce,{size:"16",icon:"emojione:star"})]),t("span",null,m(s.total_sold),1)]),t("span",rt,m(s.price),1)])])]))),128))]),_:1})])}const it=V(Ge,[["render",nt],["__scopeId","data-v-619877a8"]]);const ct={name:"bestSell",data(){return{productList:[]}},created(){this.getData()},methods:{getData(){k({bestSelling:!0}).then(e=>{this.productList=e.data})},handleToProduct(e){this.$router.push({name:"productDetail",query:{id:e.id},params:{title:e.name}})}}},lt=e=>(x("data-v-ae79b696"),e=e(),S(),e),dt={class:"product"},ut=lt(()=>t("h3",{class:"header-text"},"Sản phẩm bán chạy",-1)),ht=["onClick"],mt={class:"product-img"},_t={key:0,class:"sold-out"},pt={class:"product-desc"},gt={class:"product-name clamp-text"},vt={class:"product-rating"},ft={style:{display:"flex","align-items":"stretch"}},yt={class:"product-price"};function bt(e,_,o,i,r,u){return c(),d("div",dt,[ut,a(C,{class:"container",justify:"space-around","justify-sm":"space-between"},{default:h(()=>[(c(!0),d(y,null,w(r.productList,s=>(c(),d("div",{key:s.id},[t("div",{class:"product-content hover-card",onClick:b=>u.handleToProduct(s)},[t("div",mt,[a(B,{src:s.image_url,cover:"",alt:s.id},null,8,["src","alt"]),s.quantity==0?(c(),d("span",_t,"Bán hết")):le("",!0)]),t("div",pt,[t("span",gt,m(s.name),1),t("div",vt,[t("div",ft,[a(M,{"model-value":s.avg_rating,size:"18",icon:"emojione:star"},null,8,["model-value"])]),t("span",null,[W(" Đã bán "),t("strong",null,m(s.total_sold),1)])]),t("span",yt,m(e.formatPrice(s.price)),1)])],8,ht)]))),128))]),_:1})])}const K=V(ct,[["render",bt],["__scopeId","data-v-ae79b696"]]);const $t=L()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:de,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Se({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,_){let{slots:o}=_;const i=ue(e,"modelValue"),{t:r}=he(),u=F();let s=-1;$(i,f),$(()=>e.interval,f),$(()=>e.cycle,n=>{n?f():window.clearTimeout(s)}),me(b);function b(){!e.cycle||!u.value||(s=window.setTimeout(u.value.group.next,+e.interval>0?+e.interval:6e3))}function f(){window.clearTimeout(s),window.requestAnimationFrame(b)}return D(()=>a(Pe,{ref:u,modelValue:i.value,"onUpdate:modelValue":n=>i.value=n,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:fe(e.height)},e.style],continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:o.default,additional:n=>{let{group:p}=n;return a(y,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[p.items.value.length>0&&a(_e,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[p.items.value.map((v,g)=>{const l={id:`carousel-item-${v.id}`,"aria-label":r("$vuetify.carousel.ariaLabel.delimiter",g+1,p.items.value.length),class:[p.isSelected(v.id)&&"v-btn--active"],onClick:()=>p.select(v.id,!0)};return o.item?o.item({props:l,item:v}):a(pe,ge(v,l),null)})]})]),e.progress&&a(ve,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(p.getItemIndex(i.value)+1)/p.items.value.length*100},null)])},prev:o.prev,next:o.next})),{}}}),wt=L()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null,...z()},setup(e,_){let{slots:o,attrs:i}=_;D(()=>a(ke,{class:["v-carousel-item",e.class],style:e.style,value:e.value},{default:()=>[a(B,i,o)]}))}}),j=e=>(x("data-v-e1ddeb22"),e=e(),S(),e),Vt={class:"banner"},xt={class:"banner-right"},St=["src"],Pt=j(()=>t("div",{class:"banner-left hidden-xs"},[t("img",{src:"https://st3.depositphotos.com/1306638/12575/v/450/depositphotos_125753420-stock-illustration-retro-bus-travel-banner.jpg"})],-1)),kt={class:"category"},Ct=j(()=>t("h3",{class:"header-text"},"Bạn muốn mua hàng gì?",-1)),It=["src"],Lt=j(()=>t("div",{class:"swiper-pagination",slot:"pagination"},null,-1)),Dt={name:"home",components:{BestSell:K,HotProduct:it,ThreeBanner:Y,ProductList:O,FavoriteProduct:U,Review:we,Swiper:q,SwiperSlide:E},mounted(){},created(){this.checkWindowWidth(),window.addEventListener("resize",this.checkWindowWidth),this.getDataCate(),this.getDataProduct()},data(){return{numberCate:9,cateArr:[],productList:[],bannerList:["banner1","banner2","banner3"],modules:[ye,be,$e],imgList:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKL5w-51d5c3l5X1aemJTF_b_b1e6OQ5XZzZrNhfIMw0tRcjKsglsQgXTYtV-kOO0WIo&usqp=CAU"],cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]}},methods:{getDataCate(){Ve().then(e=>{this.cateArr=e.data,console.log(e)})},getDataProduct(){k().then(e=>{this.productList=e.data})},checkWindowWidth(){let e=window.innerWidth;e<=600?this.numberCate=3:e>600&&e<=1e3?this.numberCate=5:this.numberCate=9},handleFilterCate(e){this.$router.push({name:"search",query:{category_id:e.id}})}}},Bt=Object.assign(Dt,{setup(e){return localStorage.getItem("access_token")&&ee().then(o=>{console.log(o.data.info.name);const i=JSON.stringify(o.data.info);localStorage.setItem("infoUser",i)}),(o,i)=>(c(),d(y,null,[t("div",Vt,[t("div",xt,[a($t,{"hide-delimiter-background":"","show-arrows":"hover",cycle:"",height:"300",interval:"4000"},{default:h(()=>[(c(!0),d(y,null,w(o.bannerList,r=>(c(),I(wt,{key:r},{default:h(()=>[t("img",{width:"890",height:"300",class:"baner-img",slot:"sources",src:`./src/assets/banner/${r}.png`},null,8,St)]),_:2},1024))),128))]),_:1})]),Pt]),a(C,null,{default:h(()=>[a(Ce,{sm:"12"},{default:h(()=>[t("div",kt,[Ct,a(R(q),{class:"category-container swiper","grab-cursor":"","slides-per-view":o.numberCate,spaceBetween:30,modules:o.modules},{default:h(()=>[(c(!0),d(y,null,w(o.cateArr,r=>(c(),I(R(E),{class:"swiper-slide",onClick:u=>o.handleFilterCate(r),key:r.id},{default:h(()=>[a(Ie,{variant:"flat",class:"content hover-card"},{default:h(()=>[a(Le,{size:"60"},{default:h(()=>[t("img",{class:"category-img",src:r.image_url,alt:"item.image_url"},null,8,It)]),_:2},1024),t("span",null,m(r.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128)),Lt]),_:1},8,["slides-per-view","modules"])])]),_:1})]),_:1}),a(K),a(U),a(Y),a(O,{"product-list":o.productList},null,8,["product-list"])],64))}}),Qt=V(Bt,[["__scopeId","data-v-e1ddeb22"]]);export{Qt as default};