import{d as B,z as v,f,o as u,g as s,j as m,n as c,k as w,a as r,aJ as b,b as C,w as l,e as h,ag as F,m as o,ac as t,v as E,x as T,C as g}from"../modules/vue-BDPYql1M.js";import{u as x,f as j}from"./context-BqAnedtr.js";import{_ as R}from"../index-CquQ3WY3.js";import"../modules/shiki-DY0obXpQ.js";function y(a){return a.startsWith("/")?"/"+a.slice(1):a}function S(a,e=!1,n="cover"){const p=a&&(a[0]==="#"||a.startsWith("rgb")),i={background:p?a:void 0,color:a&&!p?"white":void 0,backgroundImage:p?void 0:a?e?`linear-gradient(#0005, #0008), url(${y(a)})`:`url("${y(a)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:n};return i.background||delete i.background,i}const O={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},z=B({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(a){const e=a,n=v(()=>S(e.image,!1,e.backgroundSize));return(p,i)=>(u(),f("div",O,[s("div",{class:c(["slidev-layout default",e.class])},[m(p.$slots,"default")],2),s("div",{class:"w-full h-full",style:w(n.value)},null,4)]))}}),$={class:"shiki shiki-themes vitesse-dark vitesse-light twoslash lsp slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},W={class:"language-ts"},I={class:"line"},P={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},U={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},N={class:"line"},V={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},G={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},J={class:"line"},L={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},M={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},q={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},H={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},K={class:"line"},Q={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},X={__name:"ppt1.md__slidev_5",setup(a){const{$clicksContext:e,$frontmatter:n}=x();return e.setup(),(p,i)=>{const k=r("v-menu"),d=r("CodeBlockWrapper"),A=r("arrow"),D=b("click");return u(),C(z,E(T(g(j)(g(n),4))),{default:l(()=>[i[65]||(i[65]=s("h1",null,"Code",-1)),i[66]||(i[66]=s("p",null,"Use code snippets and get the highlighting directly, and even types hover!",-1)),h(d,o({},{ranges:["all","5","7","7-8","10","all"]}),{default:l(()=>[s("pre",$,[s("code",W,[i[48]||(i[48]=s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// TwoSlash enables TypeScript hover information")],-1)),i[49]||(i[49]=t(`
`)),i[50]||(i[50]=s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// and errors in markdown code blocks")],-1)),i[51]||(i[51]=t(`
`)),i[52]||(i[52]=s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// More at https://shiki.style/packages/twoslash")],-1)),i[53]||(i[53]=t(`
`)),i[54]||(i[54]=s("span",{class:"line"},null,-1)),i[55]||(i[55]=t(`
`)),s("span",I,[i[4]||(i[4]=s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import",-1)),i[5]||(i[5]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {",-1)),i[6]||(i[6]=s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),s("span",P,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[0]||(i[0]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},", "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"S"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," = "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"options"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},", "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"S"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},", "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"S"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])])])],-1)])),default:l(()=>[i[1]||(i[1]=s("span",null,"computed",-1))]),_:1})]),i[7]||(i[7]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",",-1)),i[8]||(i[8]=s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),s("span",U,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[2]||(i[2]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," extends"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ?"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," IfAny"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">,"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," :"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"UnwrapRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">,"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," UnwrapRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," |"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)])),default:l(()=>[i[3]||(i[3]=s("span",null,"ref",-1))]),_:1})]),i[9]||(i[9]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }",-1)),i[10]||(i[10]=s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from",-1)),i[11]||(i[11]=s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '",-1)),i[12]||(i[12]=s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"vue",-1)),i[13]||(i[13]=s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'",-1))]),i[56]||(i[56]=t(`
`)),i[57]||(i[57]=s("span",{class:"line"},null,-1)),i[58]||(i[58]=t(`
`)),s("span",N,[i[18]||(i[18]=s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),s("span",V,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[14]||(i[14]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},", "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)])),default:l(()=>[i[15]||(i[15]=s("span",null,"count",-1))]),_:1})]),i[19]||(i[19]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),i[20]||(i[20]=s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),s("span",G,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[16]||(i[16]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)])),default:l(()=>[i[17]||(i[17]=s("span",null,"ref",-1))]),_:1})]),i[21]||(i[21]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(",-1)),i[22]||(i[22]=s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0",-1)),i[23]||(i[23]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1))]),i[59]||(i[59]=t(`
`)),s("span",J,[i[32]||(i[32]=s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),s("span",L,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[24]||(i[24]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)])),default:l(()=>[i[25]||(i[25]=s("span",null,"doubled",-1))]),_:1})]),i[33]||(i[33]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),i[34]||(i[34]=s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),s("span",M,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[26]||(i[26]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">,"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?:"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,`Takes a getter function and returns a readonly reactive ref object for the
returned value from the getter. It can also take an object with get and set
functions to create a writable ref object.`)]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@example"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a readonly computed ref:")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 2")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"++"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // error")])])])]),t(`
`),s("code",null,[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a writable computed ref:")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  get"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  set"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"val"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," -"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"})")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 0")])])])])])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"getter"),t("  - Function that produces the next value.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"debugOptions"),t("  - For debugging. See "),s("a",{href:"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"},"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"),t(".")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#computed"},"https://vuejs.org/api/reactivity-core.html#computed")])])])],-1)])),default:l(()=>[i[27]||(i[27]=s("span",null,"computed",-1))]),_:1})]),i[35]||(i[35]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()",-1)),i[36]||(i[36]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>",-1)),i[37]||(i[37]=s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),s("span",q,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[28]||(i[28]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},", "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)])),default:l(()=>[i[29]||(i[29]=s("span",null,"count",-1))]),_:1})]),i[38]||(i[38]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),s("span",H,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[30]||(i[30]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number")])],-1)])),default:l(()=>[i[31]||(i[31]=s("span",null,"value",-1))]),_:1})]),i[39]||(i[39]=s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," * ",-1)),i[40]||(i[40]=s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2",-1)),i[41]||(i[41]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1))]),i[60]||(i[60]=t(`
`)),i[61]||(i[61]=s("span",{class:"line"},null,-1)),i[62]||(i[62]=t(`
`)),s("span",K,[s("span",Q,[h(k,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:l(({})=>i[42]||(i[42]=[s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)])),default:l(()=>[i[43]||(i[43]=s("span",null,"doubled",-1))]),_:1})]),i[44]||(i[44]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),i[45]||(i[45]=s("span",{class:"twoslash-error"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value")],-1)),i[46]||(i[46]=s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),i[47]||(i[47]=s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2",-1))]),i[63]||(i[63]=s("div",{class:"twoslash-meta-line twoslash-error-line vp-copy-ignore"},"Cannot assign to 'value' because it is a read-only property.",-1))])])]),_:1},16),F(h(A,{x1:"350",y1:"310",x2:"195",y2:"334",color:"#953",width:"2",arrowSize:"1"},null,512),[[D,[4,5]]]),h(d,o({},{ranges:[]}),{default:l(()=>i[64]||(i[64]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Inside ./snippets/external.ts")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"export"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," emptyArray"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"length"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Array"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"from"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">({ "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"length"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),i[67]||(i[67]=s("p",null,[s("a",{href:"https://sli.dev/features/line-highlighting",target:"_blank"},"Learn more")],-1))]),_:1},16)}}},is=R(X,[["__scopeId","data-v-04a40017"]]);export{is as default};
