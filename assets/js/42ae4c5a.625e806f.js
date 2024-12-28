"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[5193],{682:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var s=r(5893),c=r(1151);const i={sidebar_position:6},o="NGINX",d={id:"networking/nginx",title:"NGINX",description:"Token validation on SSR",source:"@site/docs/networking/nginx.md",sourceDirName:"networking",slug:"/networking/nginx",permalink:"/networking/nginx",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CDN",permalink:"/networking/cdn"},next:{title:"CloudFlare",permalink:"/networking/cloudflare"}},l={},t=[{value:"Account Panel",id:"account-panel",level:2},{value:"remote_addr vs http_x_forwarder_for",id:"remote_addr-vs-http_x_forwarder_for",level:2},{value:"source_host vs server_name (sn)",id:"source_host-vs-server_name-sn",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nginx",children:"NGINX"}),"\n",(0,s.jsx)(n.p,{children:"Token validation on SSR"}),"\n",(0,s.jsx)(n.h2,{id:"account-panel",children:"Account Panel"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u043b\u043e\u0433\u0435 ",(0,s.jsx)(n.strong,{children:"NGINX"}),", ",(0,s.jsx)(n.code,{children:"uriStem"})," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0443\u0442\u044c \u043a \u0440\u0435\u0441\u0443\u0440\u0441\u0443, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u044b\u0442\u0430\u043b\u0441\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043e\u0448\u0438\u0431\u043a\u0443 404, \u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0449\u0443\u044e, \u0447\u0442\u043e \u0440\u0435\u0441\u0443\u0440\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uriStem"})," \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0447\u0430\u0441\u0442\u0438 URL-\u0430\u0434\u0440\u0435\u0441\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0434\u0435\u0442 \u043f\u043e\u0441\u043b\u0435 \u0438\u043c\u0435\u043d\u0438 \u0434\u043e\u043c\u0435\u043d\u0430 \u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u044b\u0442\u0430\u043b\u0441\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043f\u0440\u043e\u0441."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"referer"})," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0448\u0435\u043b \u0438\u0437 \u043f\u0430\u043d\u0435\u043b\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u043c\u0435\u043d\u043e\u043c, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u044b\u0442\u0430\u044f\u0441\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0447\u0435\u043c\u0443-\u0442\u043e, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0441 \xabexample.com\xbb."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"referer"})," \u2014 \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442 \u0430\u0434\u0440\u0435\u0441 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0439 \u0441 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u043c. \u041f\u043e \u0441\u0443\u0442\u0438, \u043e\u043d \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442 \u0432\u0430\u043c, \u043e\u0442\u043a\u0443\u0434\u0430 \u043f\u0440\u0438\u0448\u0435\u043b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043f\u043e\u043f\u0430\u043b \u043d\u0430 \u0440\u0435\u0441\u0443\u0440\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0435\u0440\u043d\u0443\u043b \u043e\u0448\u0438\u0431\u043a\u0443 404."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0431\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u043b\u043e\u0433\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442, \u0447\u0442\u043e \u0440\u0435\u0441\u0443\u0440\u0441 \u043f\u043e \u043f\u0443\u0442\u0438 ",(0,s.jsx)(n.em,{children:"/test"})," \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."]}),"\n",(0,s.jsxs)(n.p,{children:["HTTP \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"POST"})," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u044d\u0442\u043e \u0431\u044b\u043b\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c, \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 API \u0438\u043b\u0438 \u043b\u044e\u0431\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442\u0441\u044f."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 ",(0,s.jsx)(n.code,{children:"HTTP/1.0"}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0430\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u044d\u0442\u043e \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0430\u0440\u044b\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b ",(0,s.jsx)(n.strong,{children:"HTTP"}),", \u043f\u0440\u0438 \u044d\u0442\u043e\u043c ",(0,s.jsx)(n.code,{children:"HTTP/1.1"})," \u0438 ",(0,s.jsx)(n.code,{children:"HTTP/2"})," \u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u044b \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 API:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 (",(0,s.jsx)(n.code,{children:"Persistent Connections"}),", \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f):  ",(0,s.jsx)(n.code,{children:"HTTP/1.0"})," \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ",(0,s.jsx)(n.code,{children:"Persistent Connections"}),". \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u044b ",(0,s.jsx)(n.strong,{children:"HTTP"}),"-\u0437\u0430\u043f\u0440\u043e\u0441/\u043e\u0442\u0432\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u043e\u0432\u043e\u0435 ",(0,s.jsx)(n.strong,{children:"TCP"}),"-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044e \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u0438 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438\u0437-\u0437\u0430 \u0437\u0430\u0442\u0440\u0430\u0442 \u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0438 \u0440\u0430\u0437\u0440\u044b\u0432 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.1"})," \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438: \u044d\u0442\u0438 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 ",(0,s.jsx)(n.code,{children:"Persistent Connections"}),". \u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 ",(0,s.jsx)(n.strong,{children:"TCP"}),"-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044e, \u0447\u0442\u043e \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0443 \u0438 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.1"})," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (",(0,s.jsx)(n.code,{children:"Pipelining"}),"), \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u043f\u0435\u0440\u0432\u044b\u0439 \u043e\u0442\u0432\u0435\u0442. \u042d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0442\u0438."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.0"}),": ",(0,s.jsx)(n.strong,{children:"\u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442"})," \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0435 \u043c\u0435\u043d\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0432 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.1"}),": \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f (",(0,s.jsx)(n.code,{children:"Bandwidth"}),"), \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u044d\u0448\u0435\u043c. \u042d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u043c, \u0433\u0434\u0435 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.0"}),": \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0441\u043e\u0439 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.1"}),": \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u044b \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0448\u0438\u0431\u043e\u043a, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 \u0431\u043e\u043b\u0435\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u043a\u043e\u0434\u044b \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430 \u043e\u0448\u0438\u0431\u043a\u0438."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTP/1.0"}),": \u0418\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u043e\u0431\u0449\u0438\u0435 \u0438 \u043c\u0435\u043d\u0435\u0435 \u043e\u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HTTP/2"})," - \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 ",(0,s.jsx)(n.code,{children:"HTTP/1.1"})," \u0437\u0430 \u0441\u0447\u0435\u0442 \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043a\u0430\u043a \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438), \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u0441\u0436\u0430\u0442\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432. \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0435\u0449\u0435 \u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445, \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0445 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u0443\u0434\u044f \u043f\u043e \u0432\u0441\u0435\u043c\u0443, \u044d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0440\u0443\u0447\u043d\u0443\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e ",(0,s.jsx)(n.strong,{children:"POST"}),", \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u0443\u044e \u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043c \u0432 \u043f\u0430\u043d\u0435\u043b\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u043c\u0435\u043d\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u0438\u0432\u0435\u043b\u043e \u043a \u043e\u0448\u0438\u0431\u043a\u0435, \u043e \u0447\u0435\u043c \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 404. \u0425\u043e\u0442\u044f ",(0,s.jsx)(n.strong,{children:"API"})," \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u043e\u0433\u043e \u0440\u043e\u0434\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0440\u0435\u0444\u0435\u0440\u0435\u0440\u0430, \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,s.jsx)(n.strong,{children:"POST"})," \u0438 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0430\u0433\u0435\u043d\u0442\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0440\u0443\u0447\u043d\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c \u0432\u043e\u0448\u0435\u0434\u0448\u0435\u0433\u043e \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0430 \u043d\u0435 \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 ",(0,s.jsx)(n.strong,{children:"API"}),". \u0432\u044b\u0437\u043e\u0432."]}),"\n",(0,s.jsx)(n.h2,{id:"remote_addr-vs-http_x_forwarder_for",children:"remote_addr vs http_x_forwarder_for"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"remote_addr"})," - \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u043c IP \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u043b\u0438 \u043f\u0440\u043e\u043a\u0441\u0438. \u0415\u0441\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u0441 ",(0,s.jsx)(n.code,{children:"http_x_forwarder_for"})," - \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u043a\u0441\u0438, \u0430 \u0448\u0435\u043b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"http_x_forwarder_for"})," - the original client IP."]}),"\n",(0,s.jsx)(n.h2,{id:"source_host-vs-server_name-sn",children:"source_host vs server_name (sn)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"source_host"})," - \u0431\u043e\u043b\u0435\u0435 \u043e\u0431\u0449\u0435\u0435 \u043f\u043e\u043b\u0435, \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0435 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u043e\u043c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043b\u043e\u0433\u0430 \u0438\u043b\u0438 \u0438\u043c\u044f \u0445\u043e\u0441\u0442\u0430, \u0433\u0434\u0435 \u043b\u043e\u0433 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d.\n",(0,s.jsx)(n.code,{children:"server_name"})," (sn) - \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e \u043a ",(0,s.jsx)(n.code,{children:"server_name"})," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 NGINX, \u043f\u043e\u043c\u043e\u0433\u0430\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u043a\u0430\u043a\u043e\u0439 \u0431\u043b\u043e\u043a \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0437\u0430\u043f\u0440\u043e\u0441."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u0411\u043b\u043e\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 ",(0,s.jsx)(n.code,{children:"server { ... }"})," \u0432 \u0444\u0430\u0439\u043b\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 NGINX, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u044b\u0447\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 ",(0,s.jsx)(n.code,{children:"/etc/nginx/nginx.conf"})," \u0438\u043b\u0438 ",(0,s.jsx)(n.code,{children:"/etc/nginx/sites-enabled/"}),". \u041a\u0430\u0436\u0434\u044b\u0439 \u0431\u043b\u043e\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430, \u043f\u043e\u0440\u0442\u044b \u0438\u043b\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"server {\n    listen 80;  # Listen on port 80 for HTTP\n    server_name example.com www.example.com;  # Respond to these domain names\n\n    location / {\n        root /var/www/html;  # Serve files from this directory\n        index index.html;\n    }\n}\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var s=r(7294);const c={},i=s.createContext(c);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);