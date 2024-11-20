/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsxs as n,jsx as e}from"@dropins/tools/preact-jsx-runtime.js";/* empty css                             */import{Card as k,Icon as l,Image as h}from"@dropins/tools/components.js";/* empty css                       */import{classes as O}from"@dropins/tools/lib.js";import{H as d}from"../chunks/Heading.js";import"@dropins/tools/preact-hooks.js";/* empty css                  */import{S as p}from"../chunks/OrderError.js";import{useText as S}from"@dropins/tools/i18n.js";import{events as v}from"@dropins/tools/event-bus.js";import{useState as g,useCallback as _,useEffect as N}from"@dropins/tools/preact-compat.js";const w=({className:i,items:r,onRemoveOutOfStock:o,routeCart:a,...m})=>{const s=S({title:"Checkout.OutOfStock.title",message:"Checkout.OutOfStock.message",reviewCart:"Checkout.OutOfStock.actions.reviewCart",removeOutOfStock:"Checkout.OutOfStock.actions.removeOutOfStock"});return n(k,{className:O(["checkout-out-of-stock",i]),"data-testid":"checkout-out-of-stock",variant:"secondary",...m,children:[n(d,{level:4,className:"checkout-out-of-stock__title",children:[e(l,{source:p,size:"16",stroke:"1"}),s.title]}),e("p",{className:"checkout-out-of-stock__message",children:s.message}),e("ol",{className:"checkout-out-of-stock__items",children:r.map(u=>e("li",{"data-testid":"out-of-stock-item",className:"checkout-out-of-stock__item",children:e(h,{loading:"eager",src:u.image.src,alt:u.image.alt,width:"100",height:"100",params:{width:100}})},u.sku))}),n("div",{className:"checkout-out-of-stock__actions",children:[a&&e("a",{"data-testid":"review-cart",className:"checkout-out-of-stock__action",href:a,children:s.reviewCart}),o&&e("button",{className:"checkout-out-of-stock__action","data-testid":"remove-out-of-stock",type:"button",onClick:o,children:s.removeOutOfStock})]})]})},T=({onCartProductsUpdate:i,routeCart:r})=>{const[o,a]=g([]),m=t=>t.outOfStock||t.insufficientQuantity,s=_(()=>{if(!i)return;const t=o.filter(c=>c.outOfStock).map(c=>({uid:c.uid,quantity:0}));i(t)},[o,i]);if(N(()=>{const t=v.on("cart/data",c=>{const f=(c==null?void 0:c.items)||[];a(f.filter(m))},{eager:!0});return()=>{t==null||t.off()}},[]),o.length===0)return null;const u=!o.some(t=>t.insufficientQuantity);return e(w,{items:o,onRemoveOutOfStock:u?s:void 0,routeCart:r==null?void 0:r()})};export{T as OutOfStock,T as default};