import{l as k}from"./index-30d4c17e.js";import{_ as p,ab as I,o as s,f as i,d as e,w as a,h as u,t as m,F as _,r as x,e as V,V as y,q as r}from"./index-d8bdc496.js";import{V as b,a as C,b as $,c as S}from"./VList-c151f906.js";import{V as B}from"./VAvatar-89ad20fc.js";import{H as L,B as w}from"./bottomMobile-5275bfb4.js";import"./index-3dc29f8e.js";import"./VImg-d0ac8ec7.js";import"./ssrBoot-46c30e5a.js";import"./createSimpleFunctional-0b4fdfea.js";import"./VDivider-b6f72085.js";import"./user-c43492e4.js";import"./swiper-vue-02fd500e.js";import"./product-52434122.js";import"./index-a4fb869b.js";const N={name:"profileMenu",computed:{userInfo(){return JSON.parse(localStorage.getItem("infoUser"))}},data:()=>({items:[{text:"Đơn mua hàng",icon:"icon-park-outline:transaction-order",link:"order"},{text:"Giỏ hàng",icon:"noto-v1:shopping-cart",link:"cart"},{text:"Thông tin tài khoản",icon:"icon-park:people",link:"account"}]}),methods:{handleClick(n){this.$router.push({name:n})},handleLogout(){k().then(n=>{this.$moshaToast("Đăng xuất thành công",{type:"success",transition:"slide",timeout:3e3}),localStorage.removeItem("access_token"),localStorage.removeItem("infoUser"),I.push("/login")})}}},T={class:"hidden-xs"},D={style:{"margin-left":"1rem"}};function M(n,d,f,h,g,t){return s(),i("div",T,[e(S,{density:"compact",class:"menu-list"},{default:a(()=>[e(b,{class:"menu-header"},{default:a(()=>[e(B,{size:"80",image:t.userInfo.avatar?t.userInfo.avatar:"https://kiddy.edu.vn/wp-content/uploads/2023/04/150-Hinh-Avatar-Nam-Dep-Trai-Ca-Tinh-Doc-Dao.jpg"},null,8,["image"]),u("strong",D,m(t.userInfo.name?t.userInfo.name:"customer"),1)]),_:1}),(s(!0),i(_,null,x(n.items,(o,c)=>(s(),V($,{key:c,value:o,color:"primary",onClick:l=>t.handleClick(o.link)},{prepend:a(()=>[e(y,{icon:o.icon},null,8,["icon"])]),default:a(()=>[e(C,{textContent:m(o.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"]))),128))]),_:1})])}const H=p(N,[["render",M],["__scopeId","data-v-9c3beff8"]]);const A={name:"profile",components:{HeaderNav:L,ProfileMenu:H,BottomMobile:w},computed:{userInfo(){return localStorage.getItem("access_token")}}},F={class:"container-profile"};function R(n,d,f,h,g,t){const o=r("header-nav"),c=r("profile-menu"),l=r("RouterView"),v=r("bottom-mobile");return s(),i(_,null,[e(o),u("div",F,[e(c),e(l,{class:"content"}),e(v)])],64)}const Z=p(A,[["render",R],["__scopeId","data-v-c6a7e4cc"]]);export{Z as default};