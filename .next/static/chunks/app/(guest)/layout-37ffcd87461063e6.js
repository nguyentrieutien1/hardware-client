(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5031],{6234:function(e,s,a){Promise.resolve().then(a.t.bind(a,6319,23)),Promise.resolve().then(a.t.bind(a,4050,23)),Promise.resolve().then(a.t.bind(a,2462,23)),Promise.resolve().then(a.t.bind(a,8222,23)),Promise.resolve().then(a.bind(a,4371))},2813:function(e,s,a){"use strict";a.d(s,{l:function(){return r}});var n=a(7437),i=a(6716),l=a(9609);function r(e){let{modalIsOpen:s,closeModal:a,title:r,content:t,onConfirm:c,size:d}=e;return(0,n.jsx)(n.Fragment,{children:d?(0,n.jsxs)(l.Z,{size:d,backdrop:"static",show:s,onHide:()=>a(),children:[(0,n.jsx)(l.Z.Header,{closeButton:!1,children:(0,n.jsx)(l.Z.Title,{children:r})}),(0,n.jsx)(l.Z.Body,{children:t}),(0,n.jsxs)(l.Z.Footer,{children:[(0,n.jsx)(i.Z,{className:"p-2",variant:"secondary",onClick:()=>a(),children:"Đ\xf3ng"}),(0,n.jsx)(i.Z,{className:"p-2",variant:"success",onClick:()=>c(),children:"X\xe1c nhận"})]})]}):(0,n.jsxs)(l.Z,{backdrop:"static",show:s,onHide:()=>a(),children:[(0,n.jsx)(l.Z.Header,{closeButton:!1,children:(0,n.jsx)(l.Z.Title,{children:r})}),(0,n.jsx)(l.Z.Body,{children:t}),(0,n.jsxs)(l.Z.Footer,{children:[(0,n.jsx)(i.Z,{className:"p-2",size:"sm",variant:"secondary",onClick:()=>a(),children:"Đ\xf3ng"}),(0,n.jsx)(i.Z,{className:"p-2",size:"sm",variant:"success",onClick:()=>c(),children:"X\xe1c nhận"})]})]})})}},4371:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return y}});var n=a(7437),i=a(1396),l=a.n(i),r=a(4033),t=a(2265),c=a(1365),d=a(145),o=a(6778),u=a(2813);a(5103);var h=a(5343),m=a.n(h);function x(e){var s,a;let{setAccount:i,account:l}=e,[r,c]=(0,t.useState)([]),{data:o}=(0,d.rj)(),u=e=>{let{name:s,value:a}=e.target;i(e=>({...e,[s]:a}))};return(0,t.useEffect)(()=>{if(null==o?void 0:o.data){var e,s;i({...null==o?void 0:o.data}),console.log(null==o?void 0:o.data),c([{data_url:null==o?void 0:null===(s=o.data)||void 0===s?void 0:null===(e=s.image)||void 0===e?void 0:e.url}])}},[null==o?void 0:o.data]),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row profile",children:(0,n.jsx)("div",{className:"text-center d-flex justify-content-center",children:(0,n.jsxs)("div",{className:"profile-sidebar",children:[(0,n.jsx)("div",{className:"profile-userpic",children:(0,n.jsx)(m(),{value:r,multiple:!1,onChange:e=>{c(e),i(s=>({...s,images:e[0].data_url}))},maxNumber:69,dataURLKey:"data_url",children:e=>{var s;let{imageList:a,onImageUpload:i,isDragging:l,dragProps:t}=e;return(0,n.jsx)("div",{className:"upload__image-wrapper",children:(0,n.jsx)("div",{style:l?{color:"red"}:void 0,onClick:e=>{e.preventDefault(),i()},...t,children:(0,n.jsx)("img",{style:{width:"200px",height:"200px",objectFit:"cover"},src:(null==r?void 0:r.length)>0?null===(s=r[0])||void 0===s?void 0:s.data_url:"https://japans.vn/wp-content/uploads/2023/07/avt-anh-gai-xinh-1.jpg ",className:"img-responsive rounded-circle object-fit-contain icon-link-hover "})})})}})}),(0,n.jsxs)("div",{className:"profile-usertitle",children:[(0,n.jsx)("div",{className:"profile-usertitle-name",children:(0,n.jsx)("input",{type:"text",className:"form-control small border-0 bg-transparent text-center ","aria-describedby":"helpId",value:null==l?void 0:l.fullName,name:"fullName",onChange:u})}),(0,n.jsx)("div",{className:"profile-usertitle-job",children:"Developer"})]}),(0,n.jsx)("div",{className:"profile-userbuttons"}),(0,n.jsx)("div",{className:"profile-usermenu",children:(0,n.jsxs)("ul",{className:"nav flex-column",children:[(0,n.jsxs)("li",{className:"active d-flex align-items-center  mb-1",children:[(0,n.jsx)("p",{className:"w-100 m-0",children:"Email :"}),(0,n.jsx)("input",{type:"text",className:"form-control small border-0 bg-transparent ","aria-describedby":"helpId",value:null==l?void 0:l.email,name:"email",onChange:u})]}),(0,n.jsxs)("li",{className:"active d-flex align-items-center  mb-1",children:[(0,n.jsx)("p",{className:"w-100 m-0",children:"Số điện thoại :"}),(0,n.jsx)("input",{type:"number",className:"form-control small border-0 bg-transparent ","aria-describedby":"helpId",value:null==l?void 0:l.phone,name:"phone",onChange:u})]}),(0,n.jsxs)("li",{className:"active d-flex align-items-center  mb-1",children:[(0,n.jsx)("p",{className:"w-100 m-0",children:"Ng\xe0y sinh :"}),(0,n.jsx)("input",{type:"date",className:"form-control small border-0 bg-transparent ","aria-describedby":"helpId",value:null==l?void 0:l.birthday,name:"birthday",onChange:u})]}),(0,n.jsxs)("li",{className:"active d-flex align-items-center  mb-1",children:[(0,n.jsx)("p",{className:"w-100 m-0",children:"Địa chỉ :"}),(0,n.jsx)("input",{type:"text",className:"form-control small border-0 bg-transparent ","aria-describedby":"helpId",value:null==l?void 0:l.address,name:"address",onChange:u})]}),(0,n.jsxs)("li",{className:"active d-flex align-items-center  mb-1",children:[(0,n.jsx)("p",{className:"w-100 m-0",children:"Giới t\xednh :"}),(0,n.jsxs)("select",{className:"form-select form-select-sm border-0",name:"sex",onChange:u,children:[(0,n.jsx)("option",{selected:(null==o?void 0:null===(s=o.data)||void 0===s?void 0:s.sex)==="male",value:"male",children:"Nam"}),(0,n.jsx)("option",{selected:(null==o?void 0:null===(a=o.data)||void 0===a?void 0:a.sex)==="female",value:"female",children:"Nữ"})]})]})]})})]})})})})})}var v=a(9077);let j=async e=>{let{id:s,data:a}=e;return await o.p7.put("/account/".concat(s),a,{headers:{Authorization:"Bearer ".concat((0,o.$c)(o.B$.ACCESS_TOKEN))}})},p=()=>{let e=(0,v.useQueryClient)();return(0,v.useMutation)(j,{onSuccess(s){let{}=s,a=(0,d.xE)();e.fetchQuery({queryKey:a})}})};var f=a(3538),g=a(6691),N=a.n(g),_=a(6300);function y(){var e;let[s,a]=(0,t.useState)({}),[i,h]=(0,t.useState)(!1),m=(0,r.usePathname)();(0,r.useRouter)();let{mutateAsync:v}=p(),{data:j,isLoading:g}=(0,d.iu)(),[y,b]=(0,t.useState)([]),[w,O]=(0,t.useState)(0),[C,T]=(0,t.useState)(0),{value:A}=(0,o.CG)(e=>e.cart);console.log(A);let E=[{text:c.A.HOME,href:c.Z.HOME},{text:c.A.SHOP,href:c.Z.SHOP},{text:c.A.CART,href:c.Z.CART}];return(0,t.useEffect)(()=>{j&&T(A.map(e=>{let s=null==j?void 0:j.data.find(s=>(null==s?void 0:s.id)==(null==e?void 0:e.productId));return{...e,product:s}}).reduce((e,s)=>{var a;return e+(null==s?void 0:null===(a=s.product)||void 0===a?void 0:a.price)*(null==s?void 0:s.quantity)},0))},[A,j]),(0,t.useEffect)(()=>{O(A.reduce((e,s)=>e+=null==s?void 0:s.quantity,0))},[A]),(0,t.useEffect)(()=>{if(null==j?void 0:j.data){let e=(0,f.PM)("cart")||[];b([...e=e.map(e=>{let s=null==j?void 0:j.data.find(s=>(null==s?void 0:s.id)==(null==e?void 0:e.productId));return{...e,product:s}})])}},[null==j?void 0:j.data,null==j?void 0:null===(e=j.data)||void 0===e?void 0:e.length]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"humberger__menu__overlay "}),(0,n.jsxs)("div",{className:"humberger__menu__wrapper active",children:[(0,n.jsx)("div",{className:"humberger__menu__cart",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l(),{href:c.Z.CART,children:[(0,n.jsx)("i",{className:"fa fa-shopping-bag"})," ",(0,n.jsx)("span",{children:w})]})}),(0,n.jsxs)("div",{className:"header__cart__price",children:["item: ",(0,n.jsx)("span",{children:(0,_.x)(C)})]})]})}),(0,n.jsx)("div",{id:"mobile-menu-wrap",children:(0,n.jsx)("nav",{className:"mobile-menu-wrap",children:(0,n.jsx)("ul",{children:E.map((e,s)=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{className:"list-unstyled",href:e.href,children:e.text})},s))})})}),(0,n.jsx)("div",{className:"humberger__menu__contact",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-envelope"})," vanhao.0112@gmail.com"]}),(0,n.jsx)("li",{children:"Miễn ph\xed vận chuyển"})]})})]}),i&&(0,n.jsx)(u.l,{closeModal:()=>{h(!1),a({})},content:(0,n.jsx)(x,{account:s,setAccount:a}),modalIsOpen:i,onConfirm:()=>{v({id:null==s?void 0:s.id,data:{email:null==s?void 0:s.email,phone:null==s?void 0:s.phone,birthday:null==s?void 0:s.birthday,address:null==s?void 0:s.address,sex:null==s?void 0:s.sex,images:null==s?void 0:s.images,fullName:null==s?void 0:s.fullName}}).then(()=>{(0,o.Dd)("Cập nhật th\xf4ng tin th\xe0nh c\xf4ng !",{status:"success"}),h(!1)}).catch(e=>{(0,f.Cg)(e,"Cập nhật t\xe0i khoản thất bại")})},title:"Hồ sơ"}),(0,n.jsxs)("header",{className:"header mb-3",children:[(0,n.jsx)("div",{className:"header__top",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"header__top__left",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-envelope"}),"vanhao.0112@gmail.com"]}),(0,n.jsx)("li",{children:"Miễn ph\xed vận chuyển"})]})})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"header__top__right",children:[(0,n.jsxs)("div",{className:"header__top__right__social",children:[(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fa fa-facebook"})}),(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fa fa-twitter"})}),(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fa fa-linkedin"})}),(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("i",{className:"fa fa-pinterest-p"})})]}),(0,n.jsxs)("div",{className:"header__top__right__language",children:[(0,n.jsx)("img",{src:"img/language.png",alt:""}),(0,n.jsx)("div",{children:"T\xf9y chọn"}),(0,n.jsx)("span",{className:"arrow_carrot-down"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"T\xf9y chọn 1"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"T\xf9y chọn 2"})})]})]}),(0,n.jsx)("div",{className:"header__top__right__auth cursor-pointer",children:(0,n.jsxs)("a",{onClick:()=>window.location.href=c.Z.LOGIN,children:[(0,n.jsx)("i",{className:"fa fa-user"})," Login"]})})]})})]})})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row d-flex align-items-center justify-content-between",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"header__logo",children:(0,n.jsx)(l(),{href:c.Z.HOME,children:(0,n.jsx)(N(),{src:"".concat("https://maytinhthunguyen.com","/api/upload/1705643045785-625737817.png"),alt:"logo",width:100,height:100,style:{objectFit:"contain"}})})})}),(0,n.jsx)("div",{className:"active",children:(0,n.jsx)("nav",{className:"header__menu",children:(0,n.jsx)("ul",{children:E.map((e,s)=>(0,n.jsx)("li",{className:"nav-item ".concat(E.findIndex(e=>e.href===m)===s?"active":""),children:(0,n.jsx)(l(),{href:e.href,children:e.text})},s))})})}),(0,n.jsx)("div",{className:"d-flex d-sm-block m-sm-auto m-lg-0",children:(0,n.jsx)("div",{className:"header__cart",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l(),{href:c.Z.CART,children:[(0,n.jsx)("i",{className:"fa fa-shopping-bag"})," ",(0,n.jsx)("span",{children:w})]})}),(0,n.jsxs)("div",{className:"header__cart__price ml-3",children:["item: ",(0,n.jsx)("span",{children:(0,_.x)(C)})]})]})})}),(0,n.jsx)("div",{className:"humberger__open",children:(0,n.jsx)("i",{className:"fa fa-bars"})})]})})]})]})}},1365:function(e,s,a){"use strict";a.d(s,{Z:function(){return n},A:function(){return i}});let n={HOME:"/",CART:"/cart",SHOP:"/shop",SHOP_DETAIL:"/shop-detail",POST_DETAIL:"/post-detail",LOGIN:"/login",ORDER:"/order",REGISTER:"/register",DASHBOARD:"/dashboard",DASHBOARD_PRODUCT:"/dashboard/product",DASHBOARD_ORDER:"/dashboard/order",DASHBOARD_CATEGORIES:"/dashboard/categories",DASHBOARD_POST:"/dashboard/post"},i={HOME:"Trang chủ",CART:"Giỏ h\xe0ng",SHOP:"Mua sắm"}},6300:function(e,s,a){"use strict";a.d(s,{x:function(){return i}});var n=a(4859);let i=e=>n.format(e,{code:"VND"})},145:function(e,s,a){"use strict";a.d(s,{TC:function(){return v},U6:function(){return f},be:function(){return d},xE:function(){return r},L_:function(){return j},tn:function(){return y},Yi:function(){return g},cO:function(){return m},iu:function(){return o},rj:function(){return t}});var n=a(9077),i=a(6778);let l=async()=>await i.p7.get("/auth/check-is-login",{headers:{Authorization:"Bearer ".concat((0,i.$c)(i.B$.ACCESS_TOKEN))}}),r=()=>["is-user-logined"],t=()=>(0,n.useQuery)({queryKey:r(),queryFn:l,refetchOnWindowFocus:!1}),c=async()=>await i.p7.get("/product"),d=()=>["get-products"],o=()=>(0,n.useQuery)({queryKey:d(),queryFn:c,refetchOnWindowFocus:!1,cacheTime:432e5,staleTime:432e5}),u=async e=>{let{id:s}=e;return await i.p7.get("/product/".concat(s))},h=e=>["get-product",e],m=e=>{let{id:s}=e;return(0,n.useQuery)({queryFn:()=>u({id:s}),queryKey:h(s),refetchOnWindowFocus:!1,cacheTime:432e5,staleTime:432e5})},x=async()=>await i.p7.get("/categories"),v=()=>["get-categories"],j=()=>(0,n.useQuery)({queryKey:v(),queryFn:x,refetchOnWindowFocus:!1,cacheTime:432e5,staleTime:432e5}),p=async()=>await i.p7.get("/posts"),f=()=>["get-posts"],g=()=>(0,n.useQuery)({queryKey:f(),queryFn:p,refetchOnWindowFocus:!1,cacheTime:432e5,staleTime:432e5}),N=async e=>{let{id:s}=e;return await i.p7.get("/posts/".concat(s))},_=e=>["get-post",e],y=e=>{let{id:s}=e;return(0,n.useQuery)({queryFn:()=>N({id:s}),queryKey:_(s),refetchOnWindowFocus:!1,cacheTime:432e5,staleTime:432e5})}},8222:function(){},2462:function(){},6319:function(){},4050:function(){},5103:function(){}},function(e){e.O(0,[1201,4859,7640,1396,5078,5343,4758,3538,3951,5780,2971,4938,1744],function(){return e(e.s=6234)}),_N_E=e.O()}]);