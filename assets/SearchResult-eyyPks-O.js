import{u as M,e as se,f as te,g as Y,h as ae,P as le,t as re,i as ue,j as P,k as Q,l as ie,w as B,m as t,n as ne,R as I,p as oe,q as ce,s as ve,C as pe,v as de,x as he,y as ye,z as me,A as ge,B as xe,D as fe,E as $,F as j,G as He,H as C,I as Re}from"./app-Cv6tpA8c.js";const ke=["/","/index/index-custom.html","/index/index-framer.html","/index/index-spline.html","/index/index-wix-local.html","/index/index-wix.html","/index/","/posts/mission.html","/posts/paper/HCI.html","/posts/paper/LLM.html","/posts/paper/Steve%20Jobs%20President%20_%20CEO_%20NeXT%20Computer%20Corp%20and1.html","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",g=M(we,[]),Qe=()=>{const{queryHistoryCount:a}=C,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),Ce="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=C,x=M(Ce,[]),qe=()=>{const a=U>0;return{enabled:a,resultHistory:x,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),x.value=[r,...x.value.slice(0,U-1)]}},removeResultHistory:l=>{x.value=[...x.value.slice(0,l),...x.value.slice(l+1)]}}},Se=a=>{const l=pe(),r=Y(),q=de(),i=P(0),R=Q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:S}=me(),f=He(c=>{const H=c.join(" "),{searchFilter:L=d=>d,splitWord:D,suggestionsFilter:O,...m}=l.value;H?(i.value+=1,y(c.join(" "),r.value,m).then(d=>L(d,H,r.value,q.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},C.searchDelay-C.suggestDelay);B([a,r],([c])=>f(c),{immediate:!0}),ge(()=>{S()})}),{isSearching:R,results:h}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),q=Y(),i=ae(le),{enabled:R,addQueryHistory:h,queryHistory:y,removeQueryHistory:S}=Qe(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:L}=qe(),D=R||f,O=re(a,"queries"),{results:m,isSearching:d}=Se(O),u=ue({isQuery:!0,index:0}),v=P(0),p=P(0),T=Q(()=>D&&(y.value.length>0||c.value.length>0)),b=Q(()=>m.value.length>0),E=Q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=E.value.contents.length-1},N=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<E.value.contents.length-1?p.value+=1:N()},X=()=>{p.value>0?p.value-=1:J()},A=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),K=e=>{if(e.type==="customField"){const s=xe[e.index]||"$content",[n,w=""]=fe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(o=>t("div",A([n,...o,w])))}return e.display.map(s=>t("div",A(s)))},k=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},W=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:n=>{n.preventDefault(),n.stopPropagation(),S(s)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(I,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{k()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(n=>A(n)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:n=>{n.preventDefault(),n.stopPropagation(),L(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(b.value){if(e.key==="ArrowUp")X();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=E.value.contents[p.value];h(a.queries.join(" ")),H(s),r.push(F(s)),k()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),k())}}}}),B([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!b.value:!T.value}],id:"search-pro-results"},a.queries.length?d.value?t(ne,{hint:i.value.searching}):b.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const w=v.value===n;return t("li",{class:["search-pro-result-list-item",{active:w}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((o,ee)=>{const _=w&&p.value===ee;return t(I,{to:F(o),class:["search-pro-result-item",{active:_,"aria-selected":_}],onClick:()=>{h(a.queries.join(" ")),H(o),k()}},()=>[o.type==="text"?null:t(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?t("div",{class:"content-header"},o.header):null,t("div",K(o))])])})])})):i.value.emptyResult:D?T.value?[W(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
