"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[9043],{5338:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=s(5893),r=s(1151);const t={sidebar_position:1},c="OSI",d={id:"networking/osi",title:"OSI",description:"\u041c\u043e\u0434\u0435\u043b\u044c Open Systems Interconnection (OSI) - \u044d\u0442\u043e \u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u0435\u0442 \u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0426\u0435\u043b\u044c \u2014 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0441\u0432\u044f\u0437\u0438 \u0441\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430\u043c\u0438. \u041c\u043e\u0434\u0435\u043b\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441\u0432\u044f\u0437\u0438 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438.",source:"@site/docs/networking/osi.md",sourceDirName:"networking",slug:"/networking/osi",permalink:"/networking/osi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/category/networking"},next:{title:"DNS",permalink:"/networking/dns"}},l={},o=[{value:"DCP",id:"dcp",level:2},{value:"CIDR",id:"cidr",level:2},{value:"Public vs Private IP",id:"public-vs-private-ip",level:3}];function h(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"osi",children:"OSI"}),"\n",(0,i.jsxs)(e.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c ",(0,i.jsx)(e.em,{children:"Open Systems Interconnection"})," (",(0,i.jsx)(e.strong,{children:"OSI"}),") - \u044d\u0442\u043e \u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u0435\u0442 \u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0426\u0435\u043b\u044c \u2014 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0441\u0432\u044f\u0437\u0438 \u0441\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430\u043c\u0438. \u041c\u043e\u0434\u0435\u043b\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441\u0432\u044f\u0437\u0438 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u0438."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"OSI",src:s(6979).Z+"",width:"720",height:"516"})}),"\n",(0,i.jsx)(e.h2,{id:"dcp",children:"DCP"}),"\n",(0,i.jsx)(e.h2,{id:"cidr",children:"CIDR"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Classless Inter-Domain Routing"})," (",(0,i.jsx)(e.em,{children:"\u0431\u0435\u0441\u043a\u043b\u0430\u0441\u0441\u043e\u0432\u0430\u044f \u043c\u0435\u0436\u0434\u043e\u043c\u0435\u043d\u043d\u0430\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f"}),") \u2014 \u044d\u0442\u043e \u043c\u0435\u0442\u043e\u0434 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435. \u041a\u0430\u0436\u0434\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430, \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0435\u0441\u044f \u043a \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443, \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u0441 \u043d\u0438\u043c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u043e\u043c. \u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0442 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430 \u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u044d\u0442\u0438 ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u0430. \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,i.jsx)(e.strong,{children:"CIDR"})," \u0434\u043b\u044f \u0433\u0438\u0431\u043a\u043e\u0433\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0432 \u0441\u0432\u043e\u0438\u0445 \u0441\u0435\u0442\u044f\u0445. \u0412\u043c\u0435\u0441\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0442\u0438 \u0438 \u0445\u043e\u0441\u0442\u0430, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u043e\u043c ",(0,i.jsx)(e.strong,{children:"CIDR"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"CIDR"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0445 \u0444\u0430\u0435\u0440\u0432\u043e\u043b\u043e\u0432 (\u043a\u0430\u043a \u0438 \u0432 \u043d\u0435\u0442\u0432\u043e\u0440\u043a\u0438\u043d\u0433\u0435 \u0432 \u0446\u0435\u043b\u043e\u043c) \u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0440\u0435\u043d\u0436 ",(0,i.jsx)(e.strong,{children:"IP"})," \u0430\u0434\u0440\u0435\u0441\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.jsx)(e.em,{children:"ww.xx.yy.zz/32"})," => ",(0,i.jsx)(e.code,{children:"1"})," ",(0,i.jsx)(e.strong,{children:"IP"}),", \u0430 ",(0,i.jsx)(e.em,{children:"0.0.0.0/0"})," => \u0432\u0441\u0435 ",(0,i.jsx)(e.strong,{children:"IPs"}),". \u0415\u0441\u043b\u0438 \u043c\u044b \u0443\u043a\u0430\u0436\u0435\u043c ",(0,i.jsx)(e.em,{children:"192.168.0.0/26"})," - \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u043d\u0436 \u043e\u0442 ",(0,i.jsx)(e.em,{children:"192.168.0.0"})," \u0434\u043e ",(0,i.jsx)(e.em,{children:"192.168.0.63"})," (",(0,i.jsx)(e.code,{children:"64"})," ",(0,i.jsx)(e.strong,{children:"IP"})," \u0430\u0434\u0440\u0435\u0441\u0430)."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"CIDR"})," \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Base IP"}),": \u0431\u0430\u0437\u043e\u0432\u044b\u0439 IP, \u0442\u0438\u043f\u043e 10.0.0.0, 192.168.0.0 \u0438 \u0442\u0434."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Subnet Mask"}),": \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0431\u0438\u0442\u043e\u0432 \u0432 IP (/0, /24, /34)."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"CIDR notation",src:s(4255).Z+"",width:"655",height:"385"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Subnet Mask"})," \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0447\u0430\u0441\u0442\u0438 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e ",(0,i.jsx)(e.strong,{children:"IP"}),"-\u0430\u0434\u0440\u0435\u0441\u0430."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"CIDR Subnet Mask",src:s(1152).Z+"",width:"1344",height:"615"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"CIDR Octets",src:s(8637).Z+"",width:"468",height:"454"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://aws.amazon.com/what-is/cidr/",children:"https://aws.amazon.com/what-is/cidr/"})}),"\n",(0,i.jsx)(e.h3,{id:"public-vs-private-ip",children:"Public vs Private IP"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"IANA"})," (",(0,i.jsx)(e.em,{children:"Internet Assigned Numbers Authority"}),") \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 ",(0,i.jsx)(e.strong,{children:"IPv4"})," \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043d\u044b\u0445 (",(0,i.jsx)(e.strong,{children:"LAN"}),") \u0438 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 (",(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442"}),") \u0430\u0434\u0440\u0435\u0441\u043e\u0432:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Private IP:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"10.0.0.0"})," - ",(0,i.jsx)(e.em,{children:"10.255.255.255"})," (",(0,i.jsx)(e.strong,{children:"10.0.0.0/8"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"172.16.0.0"})," - ",(0,i.jsx)(e.em,{children:"172.31.255.255"})," (",(0,i.jsx)(e.strong,{children:"172.16.0.0/12"}),") AWS default VPC in that range"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"192.168.0.0"})," - ",(0,i.jsx)(e.em,{children:"192.168.255.255"})," (",(0,i.jsx)(e.strong,{children:"192.168.0.0/16"}),") home networks"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043d\u0436\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c\u0438."})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},4255:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/CIDR-notation-297fd8c435ed5513bff9f3dfaf2d0fe4.webp"},8637:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/CIDR_Octets-f2dc65d4a9df55c0279fd4d8637a41af.png"},1152:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/CIDR_SubnetMask-41667a0d81e5dd47293f171be8cb4967.png"},6979:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/osi-39c1bb8d90f30240a7e8154829c8179f.webp"},1151:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>c});var i=s(7294);const r={},t=i.createContext(r);function c(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);