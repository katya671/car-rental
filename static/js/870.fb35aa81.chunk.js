"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[870],{870:(e,a,i)=>{i.r(a),i.d(a,{default:()=>Z});var l=i(791),s=i(545);const n={form:"Filter_form__qg6Nx",btnContainer:"Filter_btnContainer__9Jgrr",inputContainer:"Filter_inputContainer__SvgNv",input:"Filter_input__1aF+e",inputWrap:"Filter_inputWrap__z8Zcf"},r="Button_button__qPlzq";var t=i(184);const o=e=>{let{onClick:a,padding:i,children:l}=e;return(0,t.jsx)("button",{onClick:a,className:r,style:{padding:i},children:l})},c=[{value:"buick",label:"buick"},{value:"volvo",label:"volvo"},{value:"hummer",label:"hummer"},{value:"subaru",label:"subaru"},{value:"mitsubishi",label:"mitsubishi"},{value:"nissan",label:"nissan"},{value:"lincoln",label:"lincoln"},{value:"gmc",label:"gmc"},{value:"hyundai",label:"hyundai"},{value:"buick2",label:"buick2"},{value:"volvo2",label:"volvo2"},{value:"hummer2",label:"hummer2"},{value:"subaru2",label:"subaru2"},{value:"mitsubishi2",label:"mitsubishi2"},{value:"nissan2",label:"nissan2"},{value:"lincoln2",label:"lincoln2"},{value:"gmc2",label:"gmc2"},{value:"hyundai2",label:"hyundai2"}],d=[{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"},{value:"100",label:"100"},{value:"110",label:"110"}],m={control:(e,a)=>({...e,display:"flex",flexWrap:"nowrap",minWidth:"brand"===a.selectProps.id?"224px":"125px",height:"48px",padding:"brand"===a.selectProps.id?"14px 18px":"14px 18px 14px 52px",border:"none",borderRadius:"14px",backgroundColor:"var(--light)","&::before":{content:"price"===a.selectProps.id?"'To $'":"''",position:"absolute",left:"18px",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"}}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,a)=>({...e,padding:"0",color:"var(--dark)",transition:"transform var(--tra)",transform:a.isFocused?"rotate(180deg)":"rotate(0)"}),valueContainer:e=>({...e,color:"var(--dark)",fontSize:"18px",fontWeight:"500",lineHeight:"1.11",padding:"0"}),placeholder:e=>({...e,color:"var(--dark)"}),menu:e=>({...e,marginTop:"4px",padding:"14px 8px 14px 18px",borderRadius:"14px",border:"1px solid rgba(18, 20, 23, 0.05)",background:"var(--white)",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)"}),menuList:(e,a)=>({maxHeight:"carBrand"===a.selectProps.id?"272px":"188px",overflowY:"auto"}),option:()=>({color:"rgba(18, 20, 23, 0.20)",fontWeight:"500",fontSize:"16px",lineHeight:"1.25",cursor:"pointer",marginBottom:"8px",transition:"color var(--tra)","&:hover":{color:"var(--dark)"}})},u=()=>{const[e,a]=(0,l.useState)(""),[i,r]=(0,l.useState)(""),[u,p]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),[_,v]=(0,l.useState)("");return(0,t.jsxs)("form",{className:n.form,children:[(0,t.jsxs)("div",{className:n.filterItem,children:[(0,t.jsx)("label",{children:"Car brand"}),(0,t.jsx)(s.ZP,{id:"brand",placeholder:"Enter the text",isSearchable:!0,name:"brand",options:c,styles:m})]}),(0,t.jsxs)("div",{className:n.filterItem,children:[(0,t.jsx)("label",{children:"Price/1 hour"}),(0,t.jsx)(s.ZP,{id:"price",placeholder:"",isSearchable:!0,name:"price",options:d,styles:m})]}),(0,t.jsxs)("div",{className:n.filterItem,children:[(0,t.jsx)("label",{children:"Car mileage/km"}),(0,t.jsxs)("div",{className:n.inputContainer,children:[(0,t.jsx)("div",{className:n.inputWrap,children:(0,t.jsx)("input",{type:"number",className:n.input,value:h,onChange:e=>x(e.target.value)})}),(0,t.jsx)("div",{className:n.inputWrap,children:(0,t.jsx)("input",{type:"number",className:n.input,value:_,onChange:e=>v(e.target.value)})})]})]}),(0,t.jsx)("div",{className:n.btnContainer,children:(0,t.jsx)(o,{padding:"14px",children:"Search"})})]})},p="CarItem_item__hkgqJ",h="CarItem_imageWrap__xqRhi",x="CarItem_image__JC6uY",_="CarItem_heartBtn__N+v9c",v="CarItem_checked__6MX8q",g="CarItem_icon__OfVnz",b="CarItem_titleWrap__v2Hcm",j="CarItem_title__+zhke",f="CarItem_info__tIE8K",C="CarItem_break__fsMdL",y="Modal_backdrop__fjqVR",k="Modal_modal__uAcAq",N="Modal_content__DsB17",S="Modal_closeBtn__Z5ETI",M="Modal_closeIcon__sNNd3",P="Modal_image__UIg+V",w="Modal_btnContainer__-CGMl",V="Modal_title__8gpS6",z="Modal_list__vLQHd",I="Modal_break__MxCV9",q="Modal_info__Dsdue",R="Modal_details__14G5b",U="Modal_descr__cfcp-",H="Modal_subtitle__yWObO",E="Modal_conditions__kbxtz",F="Modal_condition__SRgXd";const L=i.p+"static/media/sprite.26074b8ff1f988733db7f50328c9c07d.svg",W=e=>{let{car:a,onClose:i,onRentalClick:l,isOpen:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:y,onClick:i}),(0,t.jsx)("div",{className:k,children:(0,t.jsxs)("div",{className:N,children:[(0,t.jsx)("button",{type:"button",className:S,onClick:i,children:(0,t.jsx)("svg",{width:"24",height:"24",className:M,children:(0,t.jsx)("use",{href:L+"#icon-x"})})}),(0,t.jsx)("img",{loading:"lazy",src:a.img,alt:a.make,width:461,height:248,className:P}),(0,t.jsxs)("h2",{className:V,children:[a.make," ",(0,t.jsx)("span",{children:a.model}),", ",a.year]}),(0,t.jsxs)("ul",{className:"".concat(z," ").concat(q),children:[(0,t.jsx)("li",{children:a.address.split(",")[1]}),(0,t.jsx)("li",{children:a.address.split(",")[2]}),(0,t.jsxs)("li",{children:["Id: ",a.id]}),(0,t.jsxs)("li",{children:["Year: ",a.year]}),(0,t.jsxs)("li",{children:["Type: ",a.type]}),(0,t.jsx)("li",{className:I}),(0,t.jsxs)("li",{children:["Fuel Consumption: ",a.fuelConsumption]}),(0,t.jsxs)("li",{children:["Engine Size: ",a.engineSize]})]}),(0,t.jsx)("p",{className:U,children:a.description}),(0,t.jsx)("h3",{className:H,children:"Accessories and functionalities:"}),(0,t.jsxs)("ul",{className:"".concat(z," ").concat(R),children:[a.accessories.map((e=>(0,t.jsx)("li",{children:e}))),(0,t.jsx)("li",{className:I}),a.functionalities.map((e=>(0,t.jsx)("li",{children:e})))]}),(0,t.jsx)("h3",{className:H,children:"Rental Conditions:"}),(0,t.jsxs)("ul",{className:E,children:[(0,t.jsxs)("li",{className:F,children:["Minimum age:"," ",(0,t.jsx)("span",{children:a.rentalConditions.split("\n")[0].split(": ")[1]})]}),(0,t.jsx)("li",{className:F,children:a.rentalConditions.split("\n")[1]}),(0,t.jsx)("li",{className:F,children:a.rentalConditions.split("\n")[2]}),(0,t.jsxs)("li",{className:F,children:["Mileage: ",(0,t.jsx)("span",{children:a.mileage})]}),(0,t.jsxs)("li",{className:F,children:["Price: ",(0,t.jsx)("span",{children:a.rentalPrice})]})]}),(0,t.jsx)("div",{className:w,children:(0,t.jsx)(o,{onClick:l,children:"Rental car"})})]})})]})},B=e=>{let{car:a}=e;const[i,s]=(0,l.useState)(!1),[n,r]=(0,l.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("li",{className:p,children:[(0,t.jsxs)("div",{className:h,children:[(0,t.jsx)("img",{loading:"lazy",src:a.img,alt:a.make,width:274,height:268,className:x}),(0,t.jsx)("button",{className:"".concat(_," ").concat(n?v:""),onClick:()=>{r(!n)},children:(0,t.jsx)("svg",{width:"18",height:"18",className:g,children:(0,t.jsx)("use",{href:L+"#icon-heart-white"})})})]}),(0,t.jsxs)("div",{className:b,children:[(0,t.jsxs)("h2",{className:j,children:[a.make," ",(0,t.jsx)("span",{children:a.model}),", ",a.year]}),(0,t.jsx)("p",{children:a.rentalPrice})]}),(0,t.jsxs)("ul",{className:f,children:[(0,t.jsx)("li",{children:a.address.split(", ")[1]}),(0,t.jsx)("li",{children:a.address.split(", ")[2]}),(0,t.jsx)("li",{children:a.rentalCompany}),(0,t.jsx)("li",{className:C}),(0,t.jsx)("li",{children:a.type}),(0,t.jsx)("li",{children:a.model}),(0,t.jsx)("li",{children:a.mileage}),(0,t.jsx)("li",{children:a.accessories[0]})]}),(0,t.jsx)(o,{onClick:()=>{s(!0)},children:"Learn more"})]}),i&&(0,t.jsx)(W,{car:a,onClose:()=>{s(!1)},isOpen:i})]})},T="CarList_list__FdZ8P",A=[{id:9582,year:2008,make:"Buick",model:"Enclave",type:"SUV",img:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",description:"The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",fuelConsumption:"10.5",engineSize:"3.6L V6",accessories:["Leather seats","Panoramic sunroof","Premium audio system"],functionalities:["Power liftgate","Remote start","Blind-spot monitoring"],rentalPrice:"$40",rentalCompany:"Luxury Car Rentals",address:"123 Example Street, Kiev, Ukraine",rentalConditions:"Minimum age: 25\nValid driver's license\nSecurity deposit required",mileage:5858},{id:9584,year:2019,make:"Volvo",model:"XC90",type:"SUV",img:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",description:"The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",fuelConsumption:"8.3",engineSize:"2.0L 4-cylinder",accessories:["Nappa leather seats","Bowers & Wilkins premium sound system","Head-up display"],functionalities:["IntelliSafe advanced safety features","Pilot Assist semi-autonomous driving","Four-zone automatic climate control"],rentalPrice:"$50",rentalCompany:"Premium Auto Rentals",address:"456 Example Avenue, Lviv, Ukraine",rentalConditions:"Minimum age: 21\nValid driver's license\nProof of insurance required",mileage:5352},{id:9586,year:2020,make:"Volvo",model:"XC60",type:"SUV",img:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc60.webp",description:"The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",fuelConsumption:"7.9",engineSize:"2.0L 4-cylinder",accessories:["Premium leather seats","Harman Kardon audio system","Hands-free power tailgate"],functionalities:["City Safety collision avoidance technology","Pilot Assist with adaptive cruise control","9-inch Sensus touchscreen infotainment system"],rentalPrice:"$45",rentalCompany:"Luxury Car Rentals",address:"789 Example Boulevard, Odessa, Ukraine",rentalConditions:"Minimum age: 23\nValid driver's license\nCredit card required",mileage:5966},{id:9587,year:2006,make:"HUMMER",model:"H2",type:"SUV",img:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp",description:"The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",fuelConsumption:"19.8",engineSize:"6.0L V8",accessories:["Heated leather seats","Bose premium sound system","Off-road package"],functionalities:["Electronic locking front and rear differentials","Stabilitrak stability control","Tire pressure monitoring system"],rentalPrice:"$55",rentalCompany:"Adventure Car Rentals",address:"321 Example Road, Kharkiv, Ukraine",rentalConditions:"Minimum age: 25\nValid driver's license\nSecurity deposit required",mileage:4771}],O=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("ul",{className:T,children:A.map((e=>(0,t.jsx)(B,{car:e},e.id)))})}),X="CatalogPage_container__GeSuX",Z=()=>(0,t.jsxs)("div",{className:X,children:[(0,t.jsx)(u,{}),(0,t.jsx)(O,{})]})}}]);
//# sourceMappingURL=870.fb35aa81.chunk.js.map