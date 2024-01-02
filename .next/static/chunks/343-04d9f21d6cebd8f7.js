"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{9142:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DATA_URL_KEY=t.INIT_MAX_NUMBER=t.DEFAULT_NULL_INDEX=void 0,t.DEFAULT_NULL_INDEX=-1,t.INIT_MAX_NUMBER=1e3,t.DEFAULT_DATA_URL_KEY="dataURL"},5343:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},c=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],o=0,u=a.length;o<u;o++,i++)r[i]=a[o];return r};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(2265)),f=n(4306),p=n(980),d=n(9142);t.default=function(e){var t=e.value,n=e.onChange,i=e.onError,a=e.children,o=e.dataURLKey,h=void 0===o?d.DEFAULT_DATA_URL_KEY:o,g=e.multiple,v=void 0!==g&&g,y=e.maxNumber,b=void 0===y?d.INIT_MAX_NUMBER:y,_=e.acceptType,m=e.maxFileSize,L=e.resolutionWidth,w=e.resolutionHeight,T=e.resolutionType,D=e.inputProps,E=e.allowNonImageType,N=void 0!==E&&E,U=(void 0===t?[]:t)||[],A=s.useRef(null),I=s.useState(d.DEFAULT_NULL_INDEX),F=I[0],x=I[1],k=s.useState(null),P=k[0],S=k[1],M=s.useState(!1),R=M[0],V=M[1],O=s.useCallback(function(){return f.openFileDialog(A)},[A]),j=s.useCallback(function(){x(d.DEFAULT_NULL_INDEX),O()},[O]),X=s.useCallback(function(){null==n||n([])},[n]),C=function(e){return u(void 0,void 0,void 0,function(){var t,r,a,o,s;return l(this,function(g){switch(g.label){case 0:if(!e)return[2];return[4,f.getListFiles(e,h)];case 1:var y;if(!(t=g.sent()).length)return[2];return[4,(y=t,u(void 0,void 0,void 0,function(){var e;return l(this,function(t){switch(t.label){case 0:return[4,p.getErrorValidation({fileList:y,maxFileSize:m,maxNumber:b,acceptType:_,keyUpdate:F,resolutionType:T,resolutionWidth:L,resolutionHeight:w,value:U,allowNonImageType:N})];case 1:if(e=t.sent())return S(e),null==i||i(e,y),[2,!1];return P&&S(null),[2,!0]}})}))];case 2:if(!g.sent())return[2];if(a=[],F>d.DEFAULT_NULL_INDEX)o=t[0],(r=c(U))[F]=o,a.push(F);else if(v)for(r=c(U,t),s=U.length;s<r.length;s+=1)a.push(s);else r=[t[0]],a.push(0);return null==n||n(r,a),[2]}})})},z=s.useMemo(function(){return f.getAcceptTypeString(_,N)},[_,N]);return s.default.createElement(s.default.Fragment,null,s.default.createElement("input",r({type:"file",accept:z,ref:A,multiple:v&&F===d.DEFAULT_NULL_INDEX,onChange:function(e){return u(void 0,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,C(e.target.files)];case 1:return t.sent(),F>d.DEFAULT_NULL_INDEX&&x(d.DEFAULT_NULL_INDEX),A.current&&(A.current.value=""),[2]}})})},style:{display:"none"}},void 0===D?{}:D)),null==a?void 0:a({imageList:U,onImageUpload:j,onImageRemoveAll:X,onImageUpdate:function(e){x(e),O()},onImageRemove:function(e){var t=c(U);Array.isArray(e)?e.forEach(function(e){t.splice(e,1)}):t.splice(e,1),null==n||n(t)},errors:P,dragProps:{onDrop:function(e){e.preventDefault(),e.stopPropagation(),V(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&C(e.dataTransfer.files)},onDragEnter:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.items&&e.dataTransfer.items.length>0&&V(!0)},onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),V(!1)},onDragOver:function(e){e.preventDefault(),e.stopPropagation()},onDragStart:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.clearData()}},isDragging:R}))}},4306:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getListFiles=t.getImage=t.getBase64=t.getAcceptTypeString=t.openFileDialog=void 0,t.openFileDialog=function(e){e.current&&e.current.click()},t.getAcceptTypeString=function(e,t){return(null==e?void 0:e.length)?e.map(function(e){return"."+e}).join(", "):t?"":"image/*"},t.getBase64=function(e){var t=new FileReader;return new Promise(function(n){t.addEventListener("load",function(){return n(String(t.result))}),t.readAsDataURL(e)})},t.getImage=function(e){var t=new Image;return new Promise(function(n){t.addEventListener("load",function(){return n(t)}),t.src=URL.createObjectURL(e)})},t.getListFiles=function(e,n){for(var r=[],i=0;i<e.length;i+=1)r.push(t.getBase64(e[i]));return Promise.all(r).then(function(t){return t.map(function(t,r){var i;return(i={})[n]=t,i.file=e[r],i})})}},980:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,u)}l((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorValidation=t.isMaxNumberValid=t.isAcceptTypeValid=t.isMaxFileSizeValid=t.isImageValid=t.isResolutionValid=void 0;var a=n(9142),o=n(4306);t.isResolutionValid=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=1),!n||!r||!e.width||!e.height)return!0;switch(t){case"absolute":if(e.width===n&&e.height===r)return!0;break;case"ratio":var i=n/r;if(e.width/e.height===i)return!0;break;case"less":if(e.width<=n&&e.height<=r)return!0;break;case"more":if(e.width>=n&&e.height>=r)return!0}return!1},t.isImageValid=function(e){return!!e.includes("image")},t.isMaxFileSizeValid=function(e,t){return!t||e<=t},t.isAcceptTypeValid=function(e,t){if(e&&e.length>0){var n=t.split(".").pop()||"";if(0>e.findIndex(function(e){return e.toLowerCase()===n.toLowerCase()}))return!1}return!0},t.isMaxNumberValid=function(e,t,n){if(0!==t&&!t)return!0;if(n===a.DEFAULT_NULL_INDEX){if(e<=t)return!0}else if(e<=t+1)return!0;return!1},t.getErrorValidation=function(e){var n=e.fileList,a=e.value,u=e.maxNumber,l=e.keyUpdate,c=e.acceptType,s=e.maxFileSize,f=e.resolutionType,p=e.resolutionWidth,d=e.resolutionHeight,h=e.allowNonImageType;return r(void 0,void 0,void 0,function(){var e,r,g,v;return i(this,function(i){switch(i.label){case 0:if(e={},t.isMaxNumberValid(n.length+a.length,u,l))return[3,1];return e.maxNumber=!0,[3,5];case 1:r=0,i.label=2;case 2:if(!(r<n.length))return[3,5];if(!(g=n[r].file))return[3,4];if(!h&&!t.isImageValid(g.type)||!t.isAcceptTypeValid(c,g.name))return e.acceptType=!0,[3,5];if(!t.isMaxFileSizeValid(g.size,s))return e.maxFileSize=!0,[3,5];if(!f)return[3,4];return[4,o.getImage(g)];case 3:if(v=i.sent(),!t.isResolutionValid(v,f,p,d))return e.resolution=!0,[3,5];i.label=4;case 4:return r+=1,[3,2];case 5:if(Object.values(e).find(Boolean))return[2,e];return[2,null]}})})}}}]);