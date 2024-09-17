"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[723],{7073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(5893),s=t(1151);const c={sidebar_position:1},o="Kubernetes Concepts",i={id:"k8s/concepts",title:"Kubernetes Concepts",description:"Container Runtime Interface (CRI)",source:"@site/docs/k8s/concepts.md",sourceDirName:"k8s",slug:"/k8s/concepts",permalink:"/k8s/concepts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"K8s",permalink:"/category/k8s"},next:{title:"Helm",permalink:"/k8s/helm"}},d={},l=[{value:"Container Runtime Interface (CRI)",id:"container-runtime-interface-cri",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kubernetes-concepts",children:"Kubernetes Concepts"}),"\n",(0,r.jsx)(n.h2,{id:"container-runtime-interface-cri",children:"Container Runtime Interface (CRI)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CRI"})," \u2014 \u044d\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043b\u0430\u0433\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ",(0,r.jsx)(n.strong,{children:"kubelet"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u0441\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0420\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0439 ",(0,r.jsx)(n.code,{children:"Container Runtime"})," \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 ",(0,r.jsx)(n.code,{children:"Node"})," \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u0447\u0442\u043e\u0431\u044b ",(0,r.jsx)(n.strong,{children:"kubelet"})," \u043c\u043e\u0433 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u043e\u0434\u044b \u0438 \u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b. ",(0,r.jsx)(n.strong,{children:"CRI"})," \u2014 \u044d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 ",(0,r.jsx)(n.strong,{children:"kubelet"})," \u0438 ",(0,r.jsx)(n.code,{children:"Container Runtime"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CRI"})," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b ",(0,r.jsx)(n.strong,{children:"gRPC"})," \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 ",(0,r.jsx)(n.code,{children:"Node"})," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 ",(0,r.jsx)(n.strong,{children:"kubelet"})," \u0438 ",(0,r.jsx)(n.code,{children:"Container Runtime"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"CRI - Docker vs conteinerd"}),"\n",(0,r.jsx)(n.p,{children:"Docker - \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441, \u0434\u043e\u043a\u0435\u0440 \u0437\u0430\u043b\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441 \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d - pip (\u0434\u043b\u044f \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438), net (\u0441\u0435\u0442\u0435\u0432\u0430\u044f \u0441\u0432\u044f\u0437\u043a\u0430), icp (inter process comm), mount (\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a \u041e\u0421), etc (\u0434\u043b\u044f \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044f\u0434\u0440\u0430 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438)."}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0443\u043f\u043f\u044b - \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 (\u0446\u043f\u0443, \u043f\u0430\u043c\u044f\u0442\u044c)\nUnionFS - \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0431\u043b\u043e\u043a\u043e\u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430.\n\u041e\u0431\u0440\u0430\u0437 - RO \u0448\u0430\u0431\u043b\u043e\u043d. \u041e\u0431\u0440\u0430\u0437\u044b \u0445\u0440\u0430\u043d\u044f\u0442\u044c\u0441\u044f \u0441\u043b\u043e\u044f\u043c\u0438.\n\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 - \u043e\u0431\u0440\u0430\u0437 \u0441 Write \u0441\u043b\u043e\u0435\u043c."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);