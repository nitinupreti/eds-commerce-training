/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as o,jsxs as L}from"@dropins/tools/preact-jsx-runtime.js";import{Card as P,Header as x}from"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{classes as h}from"@dropins/tools/lib.js";import{useState as O,useEffect as g,useMemo as y}from"@dropins/tools/preact-hooks.js";import{events as T}from"@dropins/tools/event-bus.js";import{s as S}from"../chunks/setTaxStatus.js";import{g as I}from"../chunks/getStoreConfig.js";import{Fragment as k}from"@dropins/tools/preact.js";import"@dropins/tools/preact-compat.js";import{e as N}from"../chunks/returnOrdersHelper.js";import{O as b}from"../chunks/OrderLoaders.js";import{C as v}from"../chunks/CartSummaryItem.js";import{useText as G}from"@dropins/tools/i18n.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/form.types.js";const j=({orderData:s})=>{const[l,n]=O(!0),[a,c]=O(s),[u,d]=O({taxIncluded:!1,taxExcluded:!1});return g(()=>{I().then(t=>{if(t){const i=S(t==null?void 0:t.shoppingCartDisplayPrice);d(i)}}).finally(()=>{n(!1)})},[]),g(()=>{const t=T.on("order/data",i=>{c(i)},{eager:!0});return()=>{t==null||t.off()}},[]),{loading:l,taxConfig:u,order:a}},q=({loading:s,taxConfig:l,order:n=null,withHeader:a=!0,showConfigurableOptions:c,routeProductDetails:u})=>{const d=!!(n!=null&&n.returnNumber),t=G({cancelled:"Order.OrderProductListContent.cancelledTitle",allOrders:"Order.OrderProductListContent.allOrdersTitle",returned:"Order.OrderProductListContent.returnedTitle",refunded:"Order.OrderProductListContent.refundedTitle",sender:"Order.OrderProductListContent.GiftCard.sender",recipient:"Order.OrderProductListContent.GiftCard.recipient",message:"Order.OrderProductListContent.GiftCard.message",outOfStock:"Order.OrderProductListContent.stockStatus.outOfStock",downloadableCount:"Order.OrderProductListContent.downloadableCount"}),i=y(()=>{if(!n)return[];const{modifyOrder:e,returnedList:m}=N(n);if(!d){const C=e==null?void 0:e.filter(r=>r.quantityCanceled),f=e==null?void 0:e.filter(r=>!r.quantityCanceled);return[{type:"returned",list:m,title:t.returned},{type:"cancelled",list:C,title:t.cancelled},{type:"allItems",list:f,title:t.allOrders}].filter(r=>{var p;return((p=r==null?void 0:r.list)==null?void 0:p.length)>0})}return[{type:"returned",list:m,title:t.returned}]},[n,d,t]);return n?i.every(e=>e.list.length===0)?null:o(P,{variant:"secondary",className:"order-order-product-list-content",children:i.map((e,m)=>{var f;const C=e.list.reduce((r,{totalQuantity:p})=>p+r,0);return L(k,{children:[a?o(x,{title:`${e.title} (${C})`}):null,o("ul",{className:"order-order-product-list-content__items",children:(f=e.list)==null?void 0:f.map(r=>o("li",{"data-testid":"order-product-list-content-item",children:o(v,{loading:s,product:r,itemType:e.type,taxConfig:l,translations:t,showConfigurableOptions:c,routeProductDetails:u})},r.id))})]},m)})}):o(b,{})},W=({className:s,orderData:l,withHeader:n,showConfigurableOptions:a,routeProductDetails:c})=>{const{loading:u,taxConfig:d,order:t}=j({orderData:l});return o("div",{className:h(["order-order-product-list",s]),children:o(q,{loading:u,taxConfig:d,order:t,withHeader:n,showConfigurableOptions:a,routeProductDetails:c})})};export{W as OrderProductList,W as default};
