import{d as h,r as n,g as A,t as o,v as d,x as e,z as _,A as y,D as C,E as k,B as M,y as f,I as v,F as g,_ as b}from"./JMy-IeVZ.js";const x={class:"wrapper"},I={class:"margins"},w={class:"header"},N={class:"toolkit"},U={class:"tool"},T=["disabled"],E=["disabled"],L={key:0},O={key:1},V={key:0,class:"result"},B={class:"gradient__text"},D={key:1,class:"error-message"},$={key:0,class:"tool"},z={class:"result"},F=h({__name:"MacAddress",setup(P){const i=n(""),l=n(""),c=n(""),s=n(""),r=n(!1),p=async()=>{if(!i.value){s.value="Please enter a MAC address.";return}const u=i.value.replace(/[^a-fA-F0-9]/g,"").toUpperCase();if(u.length!==12){s.value="Invalid MAC address format. Please check the input.";return}r.value=!0,s.value="";try{const t=await fetch(`/api/macLookup?mac_address=${u}`);if(!t.ok)throw new Error("Failed to fetch MAC address info");const a=await t.json();if(a.error)throw new Error(a.error);l.value=JSON.stringify(a,null,2),c.value=`OUI: ${a.macPrefix||"N/A"}
Company: ${a.company||"N/A"}
Address: ${a.address||"N/A"}
Country: ${a.country||"N/A"}`}catch(t){l.value="",s.value=t.message||"Error looking up MAC address."}finally{r.value=!1}};return(u,t)=>{const a=A("router-link");return o(),d("div",x,[e("div",I,[e("div",w,[t[2]||(t[2]=e("h1",{class:"heading"},"MAC Address Toolkit",-1)),_(a,{to:"/",class:"home-button"},{default:y(()=>t[1]||(t[1]=[e("button",{class:"action-button"},"Home",-1)])),_:1})]),t[8]||(t[8]=e("p",{class:"description"}," Welcome to the Technician MAC Address Toolkit. Here you can manage MAC address information and tools. ",-1)),e("div",N,[e("div",U,[t[4]||(t[4]=e("h2",{class:"tool-title"},"MAC Address Lookup",-1)),t[5]||(t[5]=e("p",{class:"tool-description"},"Look up information about a specific MAC address.",-1)),C(e("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>i.value=m),type:"text",placeholder:"Enter MAC Address",class:"mac-input",disabled:r.value},null,8,T),[[k,i.value]]),e("button",{class:"action-button",onClick:p,disabled:r.value},[r.value?(o(),d("span",L,"Loading...")):(o(),d("span",O,"Lookup MAC"))],8,E),l.value?(o(),d("p",V,[t[3]||(t[3]=M(" MAC Info: ")),e("span",B,f(l.value),1)])):v("",!0),s.value?(o(),d("p",D,f(s.value),1)):v("",!0)]),c.value?(o(),d("div",$,[t[6]||(t[6]=e("h2",{class:"tool-title"},"OUI Breakdown",-1)),t[7]||(t[7]=e("p",{class:"tool-description"},"Details about the OUI of the MAC address.",-1)),e("pre",z,[e("code",null,f(c.value),1)])])):v("",!0)]),t[9]||(t[9]=g('<div class="toolkit" data-v-c25266fd><h2 class="tool-title" data-v-c25266fd><span class="gradient__text" data-v-c25266fd>Media Access Control</span></h2><p class="tool-description" data-v-c25266fd>The mac address identifies different devices that share the same local network.</p><table class="mac-table" data-v-c25266fd><thead data-v-c25266fd><tr data-v-c25266fd><th data-v-c25266fd>Component</th><th data-v-c25266fd>Description</th></tr></thead><tbody data-v-c25266fd><tr data-v-c25266fd><td data-v-c25266fd>Organizationally Unique Identifier (OUI)</td><td data-v-c25266fd>The first 6 characters of a MAC address identify the manufacturer.</td></tr><tr data-v-c25266fd><td data-v-c25266fd>Universally Administered Address (UAA)</td><td data-v-c25266fd>The last 6 characters uniquely identify a device within the OUI.</td></tr></tbody></table></div><footer class="margins footer" data-v-c25266fd><div class="social" data-v-c25266fd><a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation" data-v-c25266fd><span class="gradient__text" data-v-c25266fd>@iLostmyipad</span></a></div></footer>',2))])])}}}),q=b(F,[["__scopeId","data-v-c25266fd"]]);export{q as default};
