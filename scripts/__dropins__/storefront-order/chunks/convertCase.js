/*! Copyright 2024 Adobe
All Rights Reserved. */
const l=r=>r.replace(/_([a-z])/g,(n,s)=>s.toUpperCase()),C=r=>r.replace(/([A-Z])/g,n=>`_${n.toLowerCase()}`),u=(r,n,s)=>{const c=["string","boolean","number"],p=n==="camelCase"?l:C;return Array.isArray(r)?r.map(e=>c.includes(typeof e)||e===null?e:typeof e=="object"?u(e,n,s):e):r!==null&&typeof r=="object"?Object.entries(r).reduce((e,[t,o])=>{const f=s&&s[t]?s[t]:p(t);return e[f]=c.includes(typeof o)||o===null?o:u(o,n,s),e},{}):r};export{u as a,l as c};
