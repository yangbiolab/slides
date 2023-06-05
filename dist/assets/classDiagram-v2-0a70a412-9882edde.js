import{p as $,d as N,s as M}from"./styles-b9045be1-0b44bfd4.js";import{ay as p,as as c,ax as w,aK as B,aI as G,aG as C,aH as D,aE as R,aB as _}from"./index-57d11751.js";import{G as z}from"./layout-23ab7ebc-45ea3f64.js";import{r as H}from"./index-ce156fd5-57e29d99.js";import"./edges-84ec6f60-fa93e151.js";import"./createText-2f2a343a-cfd8e4c7.js";import"./svgDraw-d5bb5edb-5e90b1e3.js";import"./line-850ff9a1-c15e0cfd.js";import"./array-b7dcf730-9f3ba611.js";import"./constant-b644328d-6af51708.js";const S=s=>_.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const P=function(s,t,y,n){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var l,r;const o=s[i],d={shape:"rect",id:o.id,domId:o.domId,labelText:S(o.id),labelStyle:"",style:"fill: none; stroke: black",padding:((l=c().flowchart)==null?void 0:l.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(o.id,d),A(o.classes,t,y,n,o.id),p.info("setNode",d)})},A=function(s,t,y,n,e){const i=Object.keys(s);p.info("keys:",i),p.info(s),i.forEach(function(l){var r,o;const a=s[l];let d="";a.cssClasses.length>0&&(d=d+" "+a.cssClasses.join(" "));const f={labelStyle:"",style:""},m=a.label??a.id,b=0,h="class_box",u={labelStyle:f.labelStyle,shape:h,labelText:S(m),classData:a,rx:b,ry:b,class:d,style:f.style,id:a.id,domId:a.domId,tooltip:n.db.getTooltip(a.id,e)||"",haveCallback:a.haveCallback,link:a.link,width:a.type==="group"?500:void 0,type:a.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((o=c().class)==null?void 0:o.padding)};t.setNode(a.id,u),e&&t.setParent(a.id,e),p.info("setNode",u)})},q=function(s,t,y,n){p.info(s),s.forEach(function(e,i){var l,r;const o=e,a="",d={labelStyle:"",style:""},f=o.text,m=0,b="note",h={labelStyle:d.labelStyle,shape:b,labelText:S(f),noteData:o,rx:m,ry:m,class:a,style:d.style,id:o.id,domId:o.id,tooltip:"",type:"note",padding:((l=c().flowchart)==null?void 0:l.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(o.id,h),p.info("setNode",h),!o.class||!(o.class in n))return;const u=y+i,g={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:C(k.curve,D)};t.setEdge(o.id,o.class,g,u)})},F=function(s,t){const y=c().flowchart;let n=0;s.forEach(function(e){var i;n++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+n,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:E(e.relation.type1),arrowTypeEnd:E(e.relation.type2),style:"fill:none",labelStyle:"",curve:C(y==null?void 0:y.curve,D)};if(p.info(l,e),e.style!==void 0){const r=R(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(_.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,l,n)})},K=function(s){k={...k,...s}},V=async function(s,t,y,n){p.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;p.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,o=new z({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),a=n.db.getNamespaces(),d=n.db.getClasses(),f=n.db.getRelations(),m=n.db.getNotes();p.info(f),P(a,o,t,n),A(d,o,t,n),F(f,o),q(m,o,f.length+1,d);let b;i==="sandbox"&&(b=w("#i"+t));const h=i==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),u=h.select(`[id="${t}"]`),g=h.select("#"+t+" g");if(await H(g,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),B.insertTitle(u,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),G(o,u,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?b.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const x of I){const L=x.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),x.insertBefore(v,x.firstChild)}}};function E(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const W={setConf:K,draw:V},oe={parser:$,db:N,renderer:W,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{oe as diagram};
