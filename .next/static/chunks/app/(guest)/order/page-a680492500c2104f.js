(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{2753:function(e,n,t){Promise.resolve().then(t.bind(t,9640))},7452:function(e,n,t){"use strict";var r=t(7437),s=t(4033),i=t(2265),c=t(7182),a=t(4021),u=t(3647);n.Z=e=>n=>{let t=(0,s.useRouter)(),{data:o,isLoading:l}=(0,u.rj)();return(0,i.useEffect)(()=>{(0,c.$c)(c.B$.ACCESS_TOKEN)&&(l||(null==o?void 0:o.data))||t.replace(a.Zj.LOGIN)},[l,null==o?void 0:o.data]),(null==o?void 0:o.data)?(0,r.jsx)(e,{...n}):(0,r.jsx)(r.Fragment,{})}},4110:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7437);function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"pageloader gray-bg",children:(0,r.jsxs)("div",{className:"loader",children:[(0,r.jsx)("span",{className:"z-3 opacity-100",children:"M\xe1y T\xednh Thu Nguyễn"}),(0,r.jsx)("div",{className:"sp-hydrogen"})]})})})}t(2265),t(3274)},2813:function(e,n,t){"use strict";t.d(n,{l:function(){return c}});var r=t(7437),s=t(6716),i=t(3289);function c(e){let{modalIsOpen:n,closeModal:t,title:c,content:a,onConfirm:u,size:o}=e;return(0,r.jsx)(r.Fragment,{children:o?(0,r.jsxs)(i.Z,{size:o,backdrop:"static",show:n,onHide:()=>t(),children:[(0,r.jsx)(i.Z.Header,{closeButton:!0,children:(0,r.jsx)(i.Z.Title,{children:c})}),(0,r.jsx)(i.Z.Body,{children:a}),(0,r.jsxs)(i.Z.Footer,{children:[(0,r.jsx)(s.Z,{variant:"secondary",onClick:()=>t(),children:"Đ\xf3ng"}),(0,r.jsx)(s.Z,{variant:"primary",onClick:()=>u(),children:"X\xe1c nhận"})]})]}):(0,r.jsxs)(i.Z,{backdrop:"static",show:n,onHide:()=>t(),children:[(0,r.jsx)(i.Z.Header,{closeButton:!0,children:(0,r.jsx)(i.Z.Title,{children:c})}),(0,r.jsx)(i.Z.Body,{children:a}),(0,r.jsxs)(i.Z.Footer,{children:[(0,r.jsx)(s.Z,{size:"sm",variant:"secondary",onClick:()=>t(),children:"Đ\xf3ng"}),(0,r.jsx)(s.Z,{size:"sm",variant:"primary",onClick:()=>u(),children:"X\xe1c nhận"})]})]})})}},9640:function(e,n,t){"use strict";t.r(n);var r=t(7437),s=t(2265);t(1636);var i=t(6716),c=t(3647),a=t(3797),u=t(4021),o=t(9130),l=t(2813),d=t(7182),h=t(6300),v=t(7452),f=t(4110);n.default=(0,v.Z)(function(){var e;let[n,t]=(0,s.useState)(),[v,x]=(0,s.useState)(!1),{data:g,isLoading:E}=(0,c.rj)(),j=null==g?void 0:null===(e=g.data)||void 0===e?void 0:e.order,{mutateAsync:m}=(0,o.O)(),y=e=>{m({id:e,data:{statusId:6}}).then(()=>{(0,d.Dd)("Hủy đơn h\xe0ng th\xe0nh c\xf4ng",{status:"success"}),x(!1)}).catch(e=>{(0,a.Cg)(e,"Hủy đơn h\xe0ng")})};return E?(0,r.jsx)(f.Z,{}):(0,r.jsxs)(r.Fragment,{children:[v&&(0,r.jsx)(l.l,{modalIsOpen:v,closeModal:()=>x(!1),onConfirm:()=>y(n),title:"X\xf3a đơn đặt h\xe0ng",content:(0,r.jsx)("p",{children:"Bạn c\xf3 muốn x\xf3a đơn đặt h\xe0ng n\xe0y kh\xf4ng ?"})}),(0,r.jsx)("section",{className:"ftco-section",children:(null==j?void 0:j.length)>0?(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("div",{className:"table-wrap",children:(0,r.jsxs)("table",{className:"table table-responsive-xl",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Số thứ tự"}),(0,r.jsx)("th",{children:"T\xean sản phẩm"}),(0,r.jsx)("th",{children:"Số lượng"}),(0,r.jsx)("th",{children:"Gi\xe1"}),(0,r.jsx)("th",{children:"Ng\xe0y đặt h\xe0ng"}),(0,r.jsx)("th",{children:"Trạng th\xe1i đặt h\xe0ng"}),(0,r.jsx)("th",{children:"Hủy đặt h\xe0ng"})]})}),(0,r.jsx)("tbody",{children:j.map((e,n)=>{var s,c,o,l,d,v,f,g,E;return(0,r.jsxs)("tr",{className:"alert",role:"alert",children:[(0,r.jsx)("td",{children:n+1}),(0,r.jsxs)("td",{className:"d-flex align-items-center",children:[(0,r.jsx)("div",{className:"img",style:{backgroundImage:"url(images/person_1.jpg)"}}),(0,r.jsx)("div",{className:"pl-3  mx-3",children:(0,r.jsx)("span",{children:null==e?void 0:null===(s=e.account)||void 0===s?void 0:s.fullName})})]}),(0,r.jsx)("td",{children:null==e?void 0:null===(c=e.cart)||void 0===c?void 0:c.quantity}),(0,r.jsx)("td",{children:(0,h.x)(null==e?void 0:null===(l=e.cart)||void 0===l?void 0:null===(o=l.product)||void 0===o?void 0:o.price)}),(0,r.jsx)("td",{children:(0,a.Bi)(null==e?void 0:e.createdAt)}),(0,r.jsx)("td",{className:"status text-left",children:(0,r.jsx)("span",{className:"".concat((null==e?void 0:null===(d=e.status)||void 0===d?void 0:d.name)===u.DF.PENDING?"bg-warning":(null==e?void 0:null===(v=e.status)||void 0===v?void 0:v.name)===u.DF.ACCEPTED?"bg-success":"bg-danger"," text-white  px-3 py-1"),children:(null==e?void 0:null===(f=e.status)||void 0===f?void 0:f.name)===u.DF.PENDING?u.GP.PENDING:(null==e?void 0:null===(g=e.status)||void 0===g?void 0:g.name)===u.DF.ACCEPTED?u.GP.ACCEPTED:u.GP.REJECT})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.Z,{onClick:()=>{x(!0),t(null==e?void 0:e.id)},disabled:(null==e?void 0:null===(E=e.status)||void 0===E?void 0:E.name)===u.DF.REJECT,className:"btn-sm  px-4 py-2 float-start",children:"Hủy"})})]},n)})})]})})})})}):(0,r.jsx)("h3",{className:"text-center",children:"Kh\xf4ng c\xf3 đơn h\xe0ng n\xe0o được đặt ở đ\xe2y"})})]})})},4021:function(e,n,t){"use strict";t.d(n,{Zj:function(){return r.Z},GP:function(){return s},DF:function(){return i}});var r=t(1365);let s={PENDING:"Chờ ph\xea duyệt",ACCEPTED:"Đ\xe3 ph\xea duyệt",CANCELED:"Đ\xe3 hủy",REJECT:"Đ\xe3 đ\xf3ng ph\xea duyệt"},i={PENDING:"ORDER_PENDING",ACCEPTED:"ORDER_ACCEPTED",CANCELED:"ORDER_CANCELED",REJECT:"ORDER_REJECT"}},1365:function(e,n,t){"use strict";t.d(n,{Z:function(){return r},A:function(){return s}});let r={HOME:"/",CART:"/cart",SHOP:"/shop",LOGIN:"/login",ORDER:"/order",REGISTER:"/register",DASHBOARD:"/dashboard",DASHBOARD_PRODUCT:"/dashboard/product",DASHBOARD_ORDER:"/dashboard/order"},s={HOME:"Trang chủ",CART:"Giỏ h\xe0ng",SHOP:"Mua sắm"}},1362:function(e,n,t){"use strict";t.d(n,{$c:function(){return c},B$:function(){return s},EU:function(){return i},UK:function(){return a}});var r=t(7713);let s={ACCESS_TOKEN:"access_token"},i=(e,n,t)=>(0,r.setCookie)(e,n,{expires:new Date(new Date().getTime()+6048e5)}),c=e=>(0,r.getCookie)(e),a=e=>(0,r.deleteCookie)(e)},6300:function(e,n,t){"use strict";t.d(n,{x:function(){return s}});var r=t(4859);let s=e=>r.format(e,{code:"VND"})},3797:function(e,n,t){"use strict";t.d(n,{B$:function(){return r.B$},Bi:function(){return u},$c:function(){return r.$c},Cg:function(){return a}});var r=t(1362),s=t(2265),i=t(9077);(0,s.cache)(()=>new i.QueryClient),t(8526);var c=t(7182);let a=(e,n)=>{var t;return(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)===401?(0,c.Dd)(n,{status:"error"}):(0,c.Dd)("Cửa h\xe0ng đang bận, vui l\xf2ng trở lại sau \xedt ph\xfat nữa",{status:"error"})},u=e=>{let n=new Date(e);return null==n?void 0:n.toLocaleDateString("en-GB")}},7182:function(e,n,t){"use strict";t.d(n,{B$:function(){return u.B$},p7:function(){return a},UK:function(){return u.UK},$c:function(){return u.$c},EU:function(){return u.EU},Dd:function(){return s}});var r=t(171);let s=(e,n)=>(0,r.toast)(e,{progressStyle:{background:(null==n?void 0:n.status)==="success"?"var(--bs-primary)":(null==n?void 0:n.status)==="error"?"var(--bs-danger)":(null==n?void 0:n.status)==="warning"?"var(--bs-warning)":"var(--bs-info)"},autoClose:2e3,bodyStyle:{fontSize:16,fontWeight:500}});var i=t(2173),c=t(3797);console.log(!0);let a=i.Z.create({baseURL:"https://maytinhthunguyen.com/api"});i.Z.defaults.withCredentials=!0,a.defaults.headers.common.Authorization="Bearer ".concat((0,c.$c)(c.B$.ACCESS_TOKEN)),i.Z.interceptors.request.use(function(e){return e.headers.Authorization="Bearer ".concat((0,c.$c)(c.B$.ACCESS_TOKEN)),e.headers["Content-Type"]="application/json",e},function(e){return console.log(e),Promise.reject(e)});var u=t(1362)},9130:function(e,n,t){"use strict";t.d(n,{O:function(){return u}});var r=t(9077),s=t(7182),i=t(3647),c=t(2146);let a=async e=>{let{id:n,data:t}=e;return await s.p7.put("/order/".concat(n),t,{headers:{Authorization:"Bearer ".concat((0,s.$c)(s.B$.ACCESS_TOKEN))}})},u=()=>{let e=(0,r.useQueryClient)();return(0,r.useMutation)(a,{onSuccess(n){let{data:t}=n,r=(0,i.xE)(),s=(0,c.y)();e.refetchQueries({queryKey:r}),e.refetchQueries({queryKey:s})}})}},3647:function(e,n,t){"use strict";t.d(n,{be:function(){return o},xE:function(){return c},iu:function(){return l},rj:function(){return a}});var r=t(9077),s=t(7182);let i=async()=>await s.p7.get("/auth/check-is-login",{headers:{Authorization:"Bearer ".concat((0,s.$c)(s.B$.ACCESS_TOKEN))}}),c=()=>["is-user-logined"],a=()=>(0,r.useQuery)({queryKey:c(),queryFn:i,staleTime:0,cacheTime:0,refetchIntervalInBackground:!0,refetchOnReconnect:!0}),u=async()=>await s.p7.get("/product"),o=()=>["get-products"],l=()=>(0,r.useQuery)({queryKey:o(),queryFn:u,staleTime:5e3,cacheTime:5e3})},2146:function(e,n,t){"use strict";t.d(n,{Y:function(){return a},y:function(){return c}});var r=t(9077),s=t(7182);let i=async()=>await s.p7.get("/order"),c=()=>["get-orders"],a=()=>(0,r.useQuery)({queryKey:c(),queryFn:i,staleTime:5e3,cacheTime:5e3})},3274:function(){},1636:function(){},4033:function(e,n,t){e.exports=t(5313)}},function(e){e.O(0,[366,180,859,42,526,971,938,744],function(){return e(e.s=2753)}),_N_E=e.O()}]);