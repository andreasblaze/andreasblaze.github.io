"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[1404],{7973:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=s(5893),n=s(1151);const o={},i=void 0,a={id:"k8s/troubleshooting",title:"troubleshooting",description:"---",source:"@site/docs/k8s/troubleshooting.md",sourceDirName:"k8s",slug:"/k8s/troubleshooting",permalink:"/k8s/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Concepts",permalink:"/k8s/concepts"},next:{title:"Linux",permalink:"/category/linux"}},d={},p=[{value:"sidebar_position: 2",id:"sidebar_position-2",level:2},{value:"OOMKilled",id:"oomkilled",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",hr:"hr",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"sidebar_position-2",children:"sidebar_position: 2"}),"\n",(0,r.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(t.h2,{id:"oomkilled",children:"OOMKilled"}),"\n",(0,r.jsx)(t.p,{children:"Container in pod has been OOMKilled 1 times in the last 120 minutes. \u041f\u043e \u043f\u0430\u043c\u044f\u0442\u0438 \u043f\u043b\u0430\u043d\u043a\u0430 \u0438\u0434\u0435\u0442 286 \u041c\u0431, \u0442.\u0435. \u0434\u043e \u043b\u0438\u043c\u0438\u0442\u0430 364\u041c, \u0432\u0440\u043e\u0434\u0435 \u0437\u0430\u043f\u0430\u0441\u0438\u043a \u0431\u044b\u043b."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043a\u0438\u043b\u043b\u0435\u0440 \u0435\u0433\u043e \u043f\u0440\u0438\u0431\u0438\u043b, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043d\u0430 \u043d\u043e\u0434\u0435 \u0431\u044b\u043b\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u0423 \u0432\u0430\u0441 \u0440\u0435\u043a\u0432\u0435\u0441\u0442\u044b \u043d\u0438\u0437\u043a\u043e\u0432\u0430\u0442\u044b\u0435. \u0422\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u043a\u0432\u0435\u0441\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u041b\u0438\u043c\u0438\u0442 \u043d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u041f\u043e\u0434\u0443 \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u0430\u044e\u0442 \u0436\u0440\u0430\u0442\u044c \u0432\u044b\u0448\u0435 \u0440\u0435\u043a\u0432\u0435\u0441\u0442\u0430, \u043d\u043e \u043d\u0438\u0436\u0435 \u043b\u0438\u043c\u0438\u0442\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043d\u0430 \u043d\u043e\u0434\u0435 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:['help to identify problem:\nWe got PD alerts for this errors:\n"*22218811 upstream prematurely closed connection while reading response header from upstream, client: 172.29.35.56, server: internal-domainregistryprovider.apps.prod-1.us-west-2.spaceship.net, request: "POST /api/v1/domainregistryprovider/create HTTP/1.1", upstream: "',(0,r.jsx)(t.a,{href:"http://172.29.62.66:8080/api/v1/domainregistryprovider/create",children:"http://172.29.62.66:8080/api/v1/domainregistryprovider/create"}),'", host: "internal-domainregistryprovider.apps.prod-1.us-west-2.spaceship.net"\nThen\n"2024/06/25 19:45:14 [error] 1229#1229: *22218758 connect() failed (111: Connection refused) while connecting to upstream, client: 172.29.108.12, server: internal-domainregistryprovider.apps.prod-1.us-west-2.spaceship.net, request: "POST /api/v1/domainregistryprovider/nameserversupdate HTTP/1.1", upstream: "',(0,r.jsx)(t.a,{href:"http://172.29.62.66:8080/api/v1/domainregistryprovider/nameserversupdate",children:"http://172.29.62.66:8080/api/v1/domainregistryprovider/nameserversupdate"}),'", host: "internal-domainregistryprovider.apps.prod-1.us-west-2.spaceship.net""']}),"\n",(0,r.jsxs)(t.p,{children:["We analyzed logs for our service and not found any timeouts. Request to service was interrupted over 2 second from start.\nPlease review if it was network AWS issue?\nHost- domainregistryprovider-7b6b96c65c-wm4r2\nTimestamp - 25.06.2024 22:45:14.212\nAnswer:\nUpstream Pod stopped receiving requests:\n",(0,r.jsx)(t.a,{href:"https://dashboards.logs.prod-1.us-west-2.spaceship.net/_dashboards/goto/bbb457d7061613f4ade9bf6c0658c0a3?security_tenant=global",children:"https://dashboards.logs.prod-1.us-west-2.spaceship.net/_dashboards/goto/bbb457d7061613f4ade9bf6c0658c0a3?security_tenant=global"})]}),"\n",(0,r.jsxs)(t.p,{children:["Also according to kube events container inside pod was restarted, most probably OOM:\n",(0,r.jsx)(t.a,{href:"https://dashboards.logs.prod-1.us-west-2.spaceship.net/_dashboards/goto/2c1569e7ed6192c50823452697e636d7?security_tenant=global",children:"https://dashboards.logs.prod-1.us-west-2.spaceship.net/_dashboards/goto/2c1569e7ed6192c50823452697e636d7?security_tenant=global"})]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var r=s(7294);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);