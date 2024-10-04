import{_ as c,v as u,x as a,z as b,A as m,C,D as d,S as g,E as n,I as f,F as h,g as k,t as p}from"./JMy-IeVZ.js";const y={data(){return{encryptionMethod:"WPA/WPA2",ssid:"",password:"",foregroundColor:"#000000",backgroundColor:"#ffffff",qrCodeUrl:""}},methods:{generateQRCode(){const s=`WIFI:S:${this.ssid};T:${this.encryptionMethod};P:${this.password};;`,t=this.foregroundColor.replace("#",""),l=this.backgroundColor.replace("#",""),i=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(s)}&size=200x200&color=${t}&bgcolor=${l}`;this.qrCodeUrl=i},shareQRCode(){this.qrCodeUrl&&(navigator.share?navigator.share({title:"WiFi QR Code",text:"WiFi Connection Code",url:this.qrCodeUrl}).then(()=>{this.$toast.success("QR Code shared successfully!")}).catch(s=>{this.$toast.error("Error sharing QR Code: "+s)}):navigator.clipboard.writeText(this.qrCodeUrl).then(()=>{this.$toast.success("QR Code link copied to clipboard!")}).catch(()=>{this.$toast.error("Failed to copy QR Code link.")}))}}},x={class:"wrapper"},W={class:"margins"},w={class:"header flex items-center justify-between"},R={class:"qr-generator tool"},Q={class:"mb-4"},q={class:"mb-4"},U={class:"mb-4"},_={class:"mb-4"},F={class:"mb-4"},I={key:0,class:"mt-6"},P=["src"];function S(s,t,l,i,e,r){const v=k("router-link");return p(),u("div",x,[a("div",W,[a("div",w,[t[8]||(t[8]=a("h1",{class:"heading"},"WIFI Toolkit",-1)),b(v,{to:"/",class:"home-button"},{default:m(()=>t[7]||(t[7]=[a("button",{class:"home-button-style"},"Home",-1)])),_:1})]),t[18]||(t[18]=a("p",{class:"description"}," Welcome to the Technician WIFI Toolkit. Here you can access a GUI or create a WIFI QR Code. ",-1)),a("div",R,[t[17]||(t[17]=a("h2",{class:"sub-heading"},"WiFi QR Code Generator",-1)),a("form",{onSubmit:t[5]||(t[5]=C((...o)=>r.generateQRCode&&r.generateQRCode(...o),["prevent"]))},[a("div",Q,[t[10]||(t[10]=a("label",{class:"block mb-1 gradient__text"},"Encryption Method:",-1)),d(a("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.encryptionMethod=o),class:"input-field"},t[9]||(t[9]=[a("option",{value:"WPA/WPA2"},"WPA/WPA2",-1),a("option",{value:"WEP"},"WEP",-1),a("option",{value:"None"},"None",-1)]),512),[[g,e.encryptionMethod]])]),a("div",q,[t[11]||(t[11]=a("label",{class:"block mb-1 gradient__text"},"SSID:",-1)),d(a("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>e.ssid=o),class:"input-field",required:""},null,512),[[n,e.ssid]])]),a("div",U,[t[12]||(t[12]=a("label",{class:"block mb-1 gradient__text"},"Password:",-1)),d(a("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=o=>e.password=o),class:"input-field",required:""},null,512),[[n,e.password]])]),a("div",_,[t[13]||(t[13]=a("label",{class:"block mb-1 gradient__text"},"Foreground Color:",-1)),d(a("input",{type:"color","onUpdate:modelValue":t[3]||(t[3]=o=>e.foregroundColor=o),class:"color-picker-input"},null,512),[[n,e.foregroundColor]])]),a("div",F,[t[14]||(t[14]=a("label",{class:"block mb-1 gradient__text"},"Background Color:",-1)),d(a("input",{type:"color","onUpdate:modelValue":t[4]||(t[4]=o=>e.backgroundColor=o),class:"color-picker-input"},null,512),[[n,e.backgroundColor]])]),t[15]||(t[15]=a("button",{type:"submit",class:"action-button gradient__button"},"Generate QR Code",-1))],32),e.qrCodeUrl?(p(),u("div",I,[t[16]||(t[16]=a("h3",{class:"sub-heading"},"Scan to Connect",-1)),a("img",{src:e.qrCodeUrl,alt:"WiFi QR Code",class:"qr-code"},null,8,P),a("button",{onClick:t[6]||(t[6]=(...o)=>r.shareQRCode&&r.shareQRCode(...o)),class:"share-button gradient__button"},"Share QR Code")])):f("",!0)]),t[19]||(t[19]=h('<div class="tool wifi-channels" data-v-27a517ad><table class="mac-table" data-v-27a517ad><thead data-v-27a517ad><tr data-v-27a517ad><th data-v-27a517ad>Frequency Band</th><th data-v-27a517ad>Channel Number</th><th data-v-27a517ad>Bandwidth (MHz)</th></tr></thead><tbody data-v-27a517ad><tr data-v-27a517ad><td rowspan="3" data-v-27a517ad>2.4 GHz</td><td data-v-27a517ad>1</td><td data-v-27a517ad>20</td></tr><tr data-v-27a517ad><td data-v-27a517ad>6</td><td data-v-27a517ad>20</td></tr><tr data-v-27a517ad><td data-v-27a517ad>11</td><td data-v-27a517ad>20</td></tr><tr data-v-27a517ad><td rowspan="3" data-v-27a517ad>5 GHz</td><td data-v-27a517ad>36</td><td data-v-27a517ad>20 / 40</td></tr><tr data-v-27a517ad><td data-v-27a517ad>44</td><td data-v-27a517ad>20 / 40</td></tr><tr data-v-27a517ad><td data-v-27a517ad>149</td><td data-v-27a517ad>20 / 40</td></tr></tbody></table></div><footer class="margins footer" data-v-27a517ad><div class="social" data-v-27a517ad><a href="https://x.com/ilostmyipad" rel="noopener noreferrer" target="_blank" class="hover-underline-animation" data-v-27a517ad><span class="gradient__text" data-v-27a517ad>@iLostmyipad</span></a></div></footer>',2))])])}const V=c(y,[["render",S],["__scopeId","data-v-27a517ad"]]);export{V as default};
