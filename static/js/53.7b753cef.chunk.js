"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{9894:function(e,n,r){r.d(n,{Z:function(){return i}});r(2791);var t="Button_button__wiIYs",a=r(184),i=function(e){var n=e.onClick,r=e.padding,i=e.children;return(0,a.jsx)("button",{onClick:n,className:t,style:{padding:r},children:i})}},6583:function(e,n,r){r.d(n,{Z:function(){return U}});var t=r(2791),a=r(9439),i="CarItem_item__EKxTS",s="CarItem_imageWrap__iWPNB",c="CarItem_image__Oszm9",l="CarItem_heartBtn__PpyD5",o="CarItem_checked__YFWXq",d="CarItem_icon__FNxDj",u="CarItem_titleWrap__iWi4g",p="CarItem_title__Jm+ZN",h="CarItem_info__TkuEf",m="CarItem_break__ruAhJ",x=r(9894),f="Modal_backdrop__xTnIT",_="Modal_modal__DJDMv",v="Modal_content__gGb69",g="Modal_closeBtn__mlOa4",j="Modal_closeIcon__9I0vC",b="Modal_image__PGSjp",N="Modal_btnContainer__4UrcL",C="Modal_title__3HkNf",Z="Modal_list__EF-Lt",k="Modal_break__YJxbK",w="Modal_info__W+d9L",M="Modal_details__v-Ol9",S="Modal_descr__OIW3t",y="Modal_subtitle__DvDbq",I="Modal_conditions__7hMDH",T="Modal_condition__dprdU";var P=r.p+"static/media/sprite.26074b8ff1f988733db7f50328c9c07d.svg",B=r(184),F=function(e){var n=e.car,r=e.onClose;return(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&r()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{className:f,onClick:r}),(0,B.jsx)("div",{className:_,children:(0,B.jsxs)("div",{className:v,children:[(0,B.jsx)("button",{type:"button",className:g,onClick:r,children:(0,B.jsx)("svg",{width:"24",height:"24",className:j,children:(0,B.jsx)("use",{href:P+"#icon-x"})})}),(0,B.jsx)("img",{loading:"lazy",src:n.img||"https://source.unsplash.com/s3mTM-faobU/800x600",alt:n.make,width:461,height:248,className:b,onError:function(e){e.target.src="https://source.unsplash.com/s3mTM-faobU/800x600"}}),(0,B.jsxs)("h2",{className:C,children:[n.make," ",(0,B.jsx)("span",{children:n.model}),", ",n.year]}),(0,B.jsxs)("ul",{className:"".concat(Z," ").concat(w),children:[(0,B.jsx)("li",{children:n.address.split(",")[1]}),(0,B.jsx)("li",{children:n.address.split(",")[2]}),(0,B.jsxs)("li",{children:["Id: ",n.id]}),(0,B.jsxs)("li",{children:["Year: ",n.year]}),(0,B.jsxs)("li",{children:["Type: ",n.type]}),(0,B.jsx)("li",{className:k}),(0,B.jsxs)("li",{children:["Fuel Consumption: ",n.fuelConsumption]}),(0,B.jsxs)("li",{children:["Engine Size: ",n.engineSize]})]}),(0,B.jsx)("p",{className:S,children:n.description}),(0,B.jsx)("h3",{className:y,children:"Accessories and functionalities:"}),(0,B.jsxs)("ul",{className:"".concat(Z," ").concat(M),children:[n.accessories.map((function(e,n){return(0,B.jsx)("li",{children:e},n)})),(0,B.jsx)("li",{className:k}),n.functionalities.map((function(e,n){return(0,B.jsx)("li",{children:e},n)}))]}),(0,B.jsx)("h3",{className:y,children:"Rental Conditions:"}),(0,B.jsxs)("ul",{className:I,children:[(0,B.jsxs)("li",{className:T,children:["Minimum age:"," ",(0,B.jsx)("span",{children:n.rentalConditions.split("\n")[0].split(": ")[1]})]}),(0,B.jsx)("li",{className:T,children:n.rentalConditions.split("\n")[1]}),(0,B.jsx)("li",{className:T,children:n.rentalConditions.split("\n")[2]}),(0,B.jsxs)("li",{className:T,children:["Mileage:"," ",(0,B.jsx)("span",{children:Number(n.mileage).toLocaleString("en-US")})]}),(0,B.jsxs)("li",{className:T,children:["Price: ",(0,B.jsx)("span",{children:n.rentalPrice})]})]}),(0,B.jsx)("a",{href:"tel:+380730000000",className:N,children:(0,B.jsx)(x.Z,{children:"Rental car"})})]})})]})},L=r(9434),W=r(838),E=r(6351),z=function(e){var n=e.car,r=(0,t.useState)(!1),f=(0,a.Z)(r,2),_=f[0],v=f[1],g=(0,L.I0)(),j=(0,L.v9)(E.T).favorites.some((function(e){return e.id===n.id}));return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("li",{className:i,children:[(0,B.jsxs)("div",{className:s,children:[(0,B.jsx)("img",{loading:"lazy",src:n.img||"https://source.unsplash.com/s3mTM-faobU/800x600",alt:n.make,width:274,height:268,className:c,onError:function(e){e.target.src="https://source.unsplash.com/s3mTM-faobU/800x600"}}),(0,B.jsx)("button",{className:"".concat(l," ").concat(j?o:""),onClick:function(){g(j?(0,W.Ni)(n):(0,W.a3)(n))},children:(0,B.jsx)("svg",{width:"18",height:"18",className:d,children:(0,B.jsx)("use",{href:P+"#icon-heart-white"})})})]}),(0,B.jsxs)("div",{className:u,children:[(0,B.jsxs)("h2",{className:p,children:[n.make," ",(0,B.jsx)("span",{children:n.model}),", ",n.year]}),(0,B.jsx)("p",{children:n.rentalPrice})]}),(0,B.jsxs)("ul",{className:h,children:[(0,B.jsx)("li",{children:n.address.split(", ")[1]}),(0,B.jsx)("li",{children:n.address.split(", ")[2]}),(0,B.jsx)("li",{children:n.rentalCompany}),(0,B.jsx)("li",{className:m}),(0,B.jsx)("li",{children:n.type}),(0,B.jsx)("li",{children:n.model}),(0,B.jsx)("li",{children:n.mileage}),(0,B.jsx)("li",{children:n.accessories[0]})]}),(0,B.jsx)(x.Z,{onClick:function(){v(!0)},children:"Learn more"})]}),_&&(0,B.jsx)(F,{car:n,onClose:function(){v(!1)}})]})},H="CarList_list__Bss5J",U=function(e){var n=e.data;return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)("ul",{className:H,children:n.map((function(e){return(0,B.jsx)(z,{car:e},e.id)}))})})}},6053:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});for(var t=r(3433),a=r(5861),i=r(9439),s=r(4687),c=r.n(s),l=r(2791),o=r(1413),d=r(4654),u={form:"Filter_form__wVnxJ",btnContainer:"Filter_btnContainer__VVQ0o",inputContainer:"Filter_inputContainer__aHsIZ",input:"Filter_input__N7T3z",inputWrap:"Filter_inputWrap__XEHXz"},p=r(9894),h=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),m=r(184),x=[{value:"",label:"Any"}].concat((0,t.Z)(h.map((function(e){return{value:e.toLowerCase(),label:e}})))),f=[],_=30;_<=500;_+=10)f.push({value:_.toString(),label:_.toString()});var v={control:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{display:"flex",flexWrap:"nowrap",minWidth:"brand"===n.selectProps.id?"224px":"125px",height:"48px",padding:"brand"===n.selectProps.id?"14px 18px":"14px 18px 14px 52px",border:"none",borderRadius:"14px",backgroundColor:"var(--light)","&::before":{content:"price"===n.selectProps.id?"'To $'":"''",position:"absolute",left:"18px",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"}})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e,n){return(0,o.Z)((0,o.Z)({},e),{},{padding:"0",color:"var(--dark)",transition:"transform var(--tra)",transform:n.isFocused?"rotate(180deg)":"rotate(0)"})},valueContainer:function(e){return(0,o.Z)((0,o.Z)({},e),{},{color:"var(--dark)",fontSize:"18px",fontWeight:"500",lineHeight:"1.11",padding:"0"})},placeholder:function(e){return(0,o.Z)((0,o.Z)({},e),{},{color:"var(--dark)"})},menu:function(e){return(0,o.Z)((0,o.Z)({},e),{},{marginTop:"4px",padding:"14px 8px 14px 18px",borderRadius:"14px",border:"1px solid rgba(18, 20, 23, 0.05)",background:"var(--white)",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)"})},menuList:function(e,n){return{maxHeight:"carBrand"===n.selectProps.id?"272px":"188px",overflowY:"auto"}},option:function(){return{color:"rgba(18, 20, 23, 0.20)",fontWeight:"500",fontSize:"16px",lineHeight:"1.25",cursor:"pointer",marginBottom:"8px",transition:"color var(--tra)","&:hover":{color:"var(--dark)"}}}},g=function(e){var n=e.onSearch,r=(0,l.useState)(""),t=(0,i.Z)(r,2),a=t[0],s=t[1],c=(0,l.useState)(""),o=(0,i.Z)(c,2),h=o[0],_=o[1],g=(0,l.useState)(""),j=(0,i.Z)(g,2),b=j[0],N=j[1],C=(0,l.useState)(""),Z=(0,i.Z)(C,2),k=Z[0],w=Z[1];return(0,m.jsxs)("form",{className:u.form,children:[(0,m.jsxs)("div",{className:u.filterItem,children:[(0,m.jsx)("label",{children:"Car brand"}),(0,m.jsx)(d.ZP,{id:"brand",placeholder:"Enter the text",isSearchable:!0,name:"brand",options:x,styles:v,onChange:function(e){return s(e.value)}})]}),(0,m.jsxs)("div",{className:u.filterItem,children:[(0,m.jsx)("label",{children:"Price/1 hour"}),(0,m.jsx)(d.ZP,{id:"price",placeholder:"",isSearchable:!0,name:"price",options:f,styles:v,onChange:function(e){return _(e.value)}})]}),(0,m.jsxs)("div",{className:u.filterItem,children:[(0,m.jsx)("label",{children:"Car mileage/km"}),(0,m.jsxs)("div",{className:u.inputContainer,children:[(0,m.jsx)("div",{className:u.inputWrap,children:(0,m.jsx)("input",{type:"number",className:u.input,value:b,onChange:function(e){return N(e.target.value)}})}),(0,m.jsx)("div",{className:u.inputWrap,children:(0,m.jsx)("input",{type:"number",className:u.input,value:k,onChange:function(e){return w(e.target.value)}})})]})]}),(0,m.jsx)("div",{className:u.btnContainer,children:(0,m.jsx)(p.Z,{type:"submit",padding:"14px",onClick:function(e){e.preventDefault(),n({carBrand:a,priceTo:h,mileageFrom:b,mileageTo:k})},children:"Search"})})]})},j=r(6583),b="CatalogPage_container__w3ZO8",N="CatalogPage_loadMoreBtn__Z5kAU",C=r(5294);C.Z.defaults.baseURL="https://654f52d5358230d8f0cd3548.mockapi.io";var Z=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Z.get("/advert");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Z.get("/advert",{params:{page:n,limit:12}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),w=r(1968),M=r.n(w),S=function(){return(0,m.jsx)("div",{style:{textAlign:"center"},children:(0,m.jsx)(M(),{type:"bubbles",color:"var(--blue)",height:50,width:50})})},y=r(5218),I=function(){var e=(0,l.useState)(1),n=(0,i.Z)(e,2),r=n[0],s=n[1],o=(0,l.useState)([]),d=(0,i.Z)(o,2),u=d[0],p=d[1],h=(0,l.useState)([]),x=(0,i.Z)(h,2),f=x[0],_=x[1],v=(0,l.useState)(null),C=(0,i.Z)(v,2),w=C[0],M=C[1],I=(0,l.useState)({carBrand:"",priceTo:"",mileageFrom:"",mileageTo:""}),T=(0,i.Z)(I,2),P=T[0],B=T[1],F=(0,l.useState)(!1),L=(0,i.Z)(F,2),W=L[0],E=L[1],z=(0,l.useState)(!0),H=(0,i.Z)(z,2),U=H[0],A=H[1];(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,Z();case 4:n=e.sent,_(n),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,A(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,k(n);case 4:r=e.sent,p((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(r))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y.Am.error("Oops! Something went wrong while loading adverts.");case 11:return e.prev=11,A(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();e(r)}),[r]),(0,l.useEffect)((function(){if(W){var e=f.filter((function(e){var n,r=!P.carBrand||(null===(n=e.make)||void 0===n?void 0:n.toLowerCase())===P.carBrand.toLowerCase(),t=!P.priceTo||e.rentalPrice&&parseInt(e.rentalPrice.replace("$",""))<=P.priceTo,a=!P.mileageFrom||e.mileage&&e.mileage>=P.mileageFrom,i=!P.mileageTo||e.mileage&&e.mileage<=P.mileageTo;return r&&t&&a&&i}));M(e);var n=e.length?"".concat(e.length," adverts found."):"No adverts found.";y.Am.success(n)}else M([])}),[P,W,f]);return(0,m.jsxs)("div",{className:b,children:[(0,m.jsx)(g,{onSearch:function(e){E(!0),B(e)}}),W?(0,m.jsx)(j.Z,{data:w}):(0,m.jsx)(j.Z,{data:u}),U&&(0,m.jsx)(S,{}),!W&&u.length<f.length&&(0,m.jsx)("button",{onClick:function(){s(r+1)},className:N,children:"Load more"})]})}},6351:function(e,n,r){r.d(n,{T:function(){return t}});var t=function(e){return e.favorites}}}]);
//# sourceMappingURL=53.7b753cef.chunk.js.map