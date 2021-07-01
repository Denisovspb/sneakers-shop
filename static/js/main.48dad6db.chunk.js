(this["webpackJsonpsneakers-shop"]=this["webpackJsonpsneakers-shop"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__3XTFe",drawer:"Drawer_drawer__hVHC6",items:"Drawer_items__7oNn3",overlayVisible:"Drawer_overlayVisible__3c2X_"}},20:function(e,t,c){e.exports={card:"Card_card__Eq7aF",favorite:"Card_favorite__DY1iP"}},40:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(33),s=c.n(n),i=(c(40),c(8)),o=c(14),l=c(5),j=c.n(l),b=c(13),u=c(4),d=c(6),x=c.n(d),m=c(12),h=r.a.createContext({}),f=c(0);var p=function(e){var t=r.a.useContext(h).cartItems.reduce((function(e,t){return e+t.price}),0);return Object(f.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(f.jsx)(m.b,{to:"/",children:Object(f.jsxs)("div",{className:"d-flex align-center",children:[Object(f.jsx)("img",{src:"img/logo.png",width:40,height:40,alt:"Logo"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:"text-uppercase",children:"Sneakers shop"}),Object(f.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(f.jsxs)("ul",{className:"d-flex",children:[Object(f.jsxs)("li",{className:"mr-30 cu-p",onClick:e.onClickCart,children:[Object(f.jsx)("img",{src:"img/cart.svg",width:18,height:18,alt:"Cart"}),Object(f.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(f.jsx)("li",{className:"mr-20 cu-p",children:Object(f.jsx)(m.b,{to:"/favorites",children:Object(f.jsx)("img",{src:"img/favorite.svg",width:18,height:18,alt:"Favorites"})})}),Object(f.jsx)("li",{className:"cu-p",children:Object(f.jsx)(m.b,{to:"/orders",children:Object(f.jsx)("img",{src:"img/user.svg",width:18,height:18,alt:"User"})})})]})]})};var v=function(e){var t=e.image,c=e.title,a=e.description,n=r.a.useContext(h).setCartOpened;return Object(f.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{className:"mb-20",src:t,alt:"Empty box",width:120}),Object(f.jsx)("h2",{children:c}),Object(f.jsx)("p",{className:"opacity-6",children:a}),Object(f.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})," \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},O=c(19),g=c.n(O),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var N=function(e){var t=e.onClose,c=e.onRemove,a=e.items,n=void 0===a?[]:a,s=e.opened,i=r.a.useState(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],m=r.a.useState(null),p=Object(u.a)(m,2),O=p[0],N=p[1],k=r.a.useState(!1),y=Object(u.a)(k,2),C=y[0],I=y[1],S=r.a.useContext(h),_=S.setCartItems,F=S.cartItems,A=F.reduce((function(e,t){return e+t.price}),0),B=function(){var e=Object(b.a)(j.a.mark((function e(){var t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,x.a.post("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/orders",{items:F});case 4:t=e.sent,c=t.data,N(c.id),d(!0),_([]),a=0;case 10:if(!(a<F.length)){e.next=19;break}return r=F[a],e.next=14,x.a.delete("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart/".concat(r.id));case 14:return e.next=16,w(1e3);case 16:a++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430");case 24:I(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"".concat(g.a.overlay," ").concat(s?g.a.overlayVisible:""),children:Object(f.jsxs)("div",{className:g.a.drawer,children:[Object(f.jsxs)("h2",{className:"mb-30 d-flex justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(f.jsx)("img",{className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:"Close",onClick:t})]}),n.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(f.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(e.src,")")},className:"cartItemImg"}),Object(f.jsxs)("div",{className:"mr-20 flex",children:[Object(f.jsx)("p",{className:"mb-5",children:e.name}),Object(f.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(f.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(f.jsxs)("div",{className:"cartTotalBlock",children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[A," \u0440\u0443\u0431. "]})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[(.05*A).toFixed(2)," \u0440\u0443\u0431. "]})]})]}),Object(f.jsxs)("button",{disabled:C,className:"greenButton",onClick:B,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(f.jsx)(v,{title:l?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:l?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(O," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0442\u043e\u0432\u0430\u0440, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:l?"img/complete-order.svg":"img/cartIsEmpty.svg"})]})})},k=c(2),y=c(20),C=c.n(y),I=c(35);var S=function(e){var t=e.id,c=(e.parentId,e.name),a=e.price,n=e.src,s=e.onPlus,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,j=e.loading,b=void 0!==j&&j,d=r.a.useState(l),x=Object(u.a)(d,2),m=x[0],p=x[1],v=r.a.useContext(h).isItemAdded,O={id:t,parentId:t,name:c,price:a,src:n};return Object(f.jsx)("div",{className:C.a.card,children:b?Object(f.jsxs)(I.a,{speed:2,width:150,height:250,viewBox:"0 0 150 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"90"}),Object(f.jsx)("rect",{x:"0",y:"107",rx:"5",ry:"5",width:"150",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"132",rx:"5",ry:"5",width:"93",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"180",rx:"5",ry:"5",width:"80",height:"25"}),Object(f.jsx)("rect",{x:"118",y:"21",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[i&&Object(f.jsx)("div",{className:C.a.favorite,children:Object(f.jsx)("img",{width:32,height:32,src:m?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"Heart",onClick:function(){i(O),p(!m)}})}),Object(f.jsx)("img",{width:133,height:112,src:n,alt:"Sneakers"}),Object(f.jsx)("h5",{className:"flex",children:c}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(f.jsxs)("b",{children:[a," \u0440\u0443\u0431."]})]}),s&&Object(f.jsx)("img",{className:C.a.plus,onClick:function(){s(O)},width:32,height:32,src:v(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var _=function(e){var t=e.items,c=e.searchValue,a=e.onChangeSearchInput,r=e.onFavorite,n=e.onAddToCart,s=e.isLoading;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(f.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(f.jsxs)("div",{className:"search-block d-flex",children:[Object(f.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(f.jsx)("input",{onChange:a,value:c,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return(s?Object(o.a)(Array(8)):e).map((function(e,t){return Object(f.jsx)(S,Object(i.a)(Object(i.a)({onPlus:function(e){return n(e)},onFavorite:function(e){return r(e)}},e),{},{loading:s}),t)}))}()})]})};var F=function(){var e=r.a.useContext(h),t=e.favorites,c=e.onFavorite;return Object(f.jsx)("div",{className:"content p-40",children:t.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e){return Object(f.jsx)(S,Object(i.a)({favorited:!0,onFavorite:c},e),e.src)}))})]}):Object(f.jsxs)("div",{className:"empty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{width:70,height:70,src:"img/favIsEmpty.svg",alt:"Sad smile"}),Object(f.jsx)("h3",{className:"mb-10",children:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :((("}),Object(f.jsx)("p",{children:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(f.jsx)(m.b,{to:"/",children:Object(f.jsxs)("button",{className:"greenButton",children:[Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})," \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})})};var A=function(){var e=r.a.useContext(h),t=e.onAddToCart,c=e.onFavorite,a=r.a.useState([]),n=Object(u.a)(a,2),s=n[0],l=n[1],d=r.a.useState([]),p=Object(u.a)(d,2),v=(p[0],p[1],r.a.useState(!0)),O=Object(u.a)(v,2),g=O[0],w=O[1],N=s.map((function(e){return e.items.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)}));return console.log(N),r.a.useEffect((function(){Object(b.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/orders");case 3:t=e.sent,c=t.data,l(c.map((function(e){return e}))),w(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(f.jsx)("div",{className:"d-flex flex-wrap flex-column",children:g?Object(o.a)(Array(8)).map((function(e,a){return Object(f.jsx)(S,Object(i.a)(Object(i.a)({onPlus:function(e){return t(e)},onFavorite:function(e){return c(e)}},e),{},{loading:g}),a)})):s.length>0?s.map((function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h3",{className:"mb-20",children:["\u0417\u0430\u043a\u0430\u0437 #",e.id," \u043d\u0430 \u0441\u0443\u043c\u043c\u0443"," ",e.items.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)," \u0440\u0443\u0431."]}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:e.items.map((function(e,t){return Object(f.jsx)(S,Object(i.a)(Object(i.a)({},e),{},{loading:g}),t)}))})]})})):Object(f.jsxs)("div",{className:"empty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{width:70,height:70,src:"img/ordersEmpty.svg",alt:"Sadness"}),Object(f.jsx)("h3",{className:"mb-10",children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(f.jsx)("p",{children:"\u0412\u0438\u0434\u0438\u043c\u043e \u0432\u044b \u0431\u043e\u043c\u0436..."}),Object(f.jsx)(m.b,{to:"/",children:Object(f.jsxs)("button",{className:"greenButton",children:[Object(f.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})," \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})})]})};var B=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=r.a.useState([]),s=Object(u.a)(n,2),l=s[0],d=s[1],m=r.a.useState([]),v=Object(u.a)(m,2),O=v[0],g=v[1],w=r.a.useState(""),y=Object(u.a)(w,2),C=y[0],I=y[1],S=r.a.useState(!1),B=Object(u.a)(S,2),E=B[0],P=B[1],V=r.a.useState(!0),T=Object(u.a)(V,2),D=T[0],L=T[1];r.a.useEffect((function(){function e(){return(e=Object(b.a)(j.a.mark((function e(){var t,c,r,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([x.a.get("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart"),x.a.get("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/favorites"),x.a.get("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/items")]);case 3:t=e.sent,c=Object(u.a)(t,3),r=c[0],n=c[1],s=c[2],L(!1),d(r.data),g(n.data),a(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var R=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=l.find((function(e){return Number(e.id)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,x.a.delete("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,x.a.post("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart",t);case 11:a=e.sent,r=a.data,d((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(i.a)(Object(i.a)({},e),{},{id:r.parentId}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t)}))})),e.next=4,x.a.delete("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/cart/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}x.a.delete("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return e.id!==t.id}))})),e.next=11;break;case 6:return e.next=8,x.a.post("https://60b7cfaab54b0a0017c02b08.mockapi.io/api/v1/favorites",t);case 8:c=e.sent,a=c.data,g((function(e){return[].concat(Object(o.a)(e),[a])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(h.Provider,{value:{items:c,cartItems:l,favorites:O,isItemAdded:function(e){return l.some((function(t){return Number(t.parentId)===Number(e)}))},onFavorite:J,setCartOpened:P,setCartItems:d},children:Object(f.jsxs)("div",{className:"wrapper clear",children:[Object(f.jsx)(N,{items:l,onClose:function(){return P(!1)},onRemove:H,opened:E}),Object(f.jsx)(p,{onClickCart:function(){return P(!0)}}),Object(f.jsx)(k.a,{exact:!0,path:"/",children:Object(f.jsx)(_,{items:c,cartItems:l,searchValue:C,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onFavorite:J,onAddToCart:R,isLoading:D})}),Object(f.jsx)(k.a,{path:"/favorites",exact:!0,children:Object(f.jsx)(F,{})}),Object(f.jsx)(k.a,{path:"/orders",exact:!0,children:Object(f.jsx)(A,{})})]})})};c(69);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)(B,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.48dad6db.chunk.js.map