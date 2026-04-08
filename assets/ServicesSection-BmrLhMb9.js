import{c as r,r as s,j as e}from"./index-DBcHPOqS.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=r("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=r("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=r("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=r("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=r("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=r("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),m=[{icon:d,title:"Webdesign",description:"Individuelles Design, das Ihre Marke stark positioniert – kein Template, kein Baukasten.",num:"01"},{icon:u,title:"Conversion-Optimierung",description:"Strategisch aufgebaute Seiten, die Besucher in zahlende Kunden verwandeln.",num:"02"},{icon:l,title:"SEO & Performance",description:"Technisch sauber, blitzschnell und sichtbar – damit Ihre Zielgruppe Sie findet.",num:"03"},{icon:h,title:"Responsive Design",description:"Perfekte Darstellung auf jedem Gerät – Smartphone, Tablet oder Desktop.",num:"04"},{icon:a,title:"Content & Copywriting",description:"Überzeugende Texte und Inhalte, die Ihre Zielgruppe ansprechen und konvertieren.",num:"05"},{icon:o,title:"Betreuung & Support",description:"Langfristige Partnerschaft – Updates, Änderungen und technischer Support inklusive.",num:"06"}],p=()=>{const n=s.useRef(null);return s.useEffect(()=>{const t=n.current;if(!t)return;const i=new IntersectionObserver(([c])=>{c.isIntersecting&&(t.classList.add("visible"),i.disconnect())},{threshold:.15});return i.observe(t),()=>i.disconnect()},[]),n},x=s.memo(()=>{const n=p();return e.jsx("section",{id:"leistungen",className:"section-padding",children:e.jsxs("div",{className:"container mx-auto max-w-6xl",children:[e.jsxs("div",{className:"text-center mb-14 md:mb-20 reveal",ref:n,children:[e.jsx("span",{className:"section-label",children:"Leistungen"}),e.jsxs("h2",{className:"section-title",children:["Alles aus einer Hand"," ",e.jsx("span",{className:"gradient-text",children:"– von A bis Z"})]}),e.jsx("p",{className:"section-desc",children:"Von der Strategie über Design bis zur technischen Umsetzung – wir liefern das komplette Paket."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",children:m.map(t=>e.jsxs("div",{className:"group relative bg-card border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-8 hover-lift cursor-default overflow-hidden",children:[e.jsxs("div",{className:"flex items-start justify-between mb-5 md:mb-6",children:[e.jsx("div",{className:"w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary",children:e.jsx(t.icon,{className:"text-primary group-hover:text-primary-foreground transition-colors duration-300",size:20})}),e.jsx("span",{className:"text-3xl md:text-4xl font-display font-extrabold text-foreground/[0.04] select-none",children:t.num})]}),e.jsx("h3",{className:"font-display text-base md:text-lg font-bold mb-2",children:t.title}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:t.description})]},t.title))})]})})});x.displayName="ServicesSection";export{x as default};
