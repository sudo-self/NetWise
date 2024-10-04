import{_ as f,r as u,v as i,x as t,z as c,A as x,D as k,E as b,I as v,B as l,y as e,g as P,t as r}from"./JMy-IeVZ.js";const w={class:"wrapper"},C={class:"margins"},N={class:"flex justify-end mt-4"},D={class:"input-group"},R={key:0,class:"loading"},T={key:1,class:"record-types"},V={key:2,class:"error-message"},_={__name:"Ping",setup(B){const d=u(""),p=u(!1),n=u(null),a=u(null),g=async()=>{p.value=!0,a.value=null,n.value=null;try{const o=await fetch("/api/ping",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:d.value})});if(!o.ok)throw new Error("Failed to ping the provided URL.");const s=await o.json();n.value=s.data}catch(o){a.value=o.message||"An unexpected error occurred."}finally{p.value=!1}};return(o,s)=>{const m=P("router-link");return r(),i("div",w,[t("div",C,[s[11]||(s[11]=t("h2",{class:"sub-heading"},"PING Toolkit",-1)),t("div",N,[c(m,{to:"/",class:"home-button"},{default:x(()=>s[1]||(s[1]=[t("button",{class:"action-button"},"Home",-1)])),_:1})]),s[12]||(s[12]=t("p",{class:"description"},"Check the reachability of a host by sending ping requests.",-1)),t("div",D,[k(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=y=>d.value=y),placeholder:"Enter URL to ping https://",class:"input-field"},null,512),[[b,d.value]]),t("button",{onClick:g,class:"action-button"},"Ping")]),p.value?(r(),i("div",R,"Pinging...")):v("",!0),n.value?(r(),i("div",T,[s[10]||(s[10]=t("h3",{class:"sub-heading"},"Ping Result:",-1)),t("p",null,[s[2]||(s[2]=t("strong",null,"IP:",-1)),l(" "+e(n.value.ip),1)]),t("p",null,[s[3]||(s[3]=t("strong",null,"Requests:",-1)),l(" "+e(n.value.requests),1)]),t("p",null,[s[4]||(s[4]=t("strong",null,"Loss:",-1)),l(" "+e(n.value.loss)+"%",1)]),t("p",null,[s[5]||(s[5]=t("strong",null,"Latency:",-1)),l(" "+e(n.value.latency)+" ms",1)]),t("p",null,[s[6]||(s[6]=t("strong",null,"Min:",-1)),l(" "+e(n.value.min)+" ms",1)]),t("p",null,[s[7]||(s[7]=t("strong",null,"Max:",-1)),l(" "+e(n.value.max)+" ms",1)]),t("p",null,[s[8]||(s[8]=t("strong",null,"Avg:",-1)),l(" "+e(n.value.avg)+" ms",1)]),t("p",null,[s[9]||(s[9]=t("strong",null,"Standard Deviation:",-1)),l(" "+e(n.value.stdDev)+" ms",1)])])):v("",!0),a.value?(r(),i("div",V,e(a.value),1)):v("",!0)])])}}},I=f(_,[["__scopeId","data-v-52f782ca"]]);export{I as default};