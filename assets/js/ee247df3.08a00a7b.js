"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[9521],{2541:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(5893),c=n(1151);const r={sidebar_position:5},o="EKS",i={id:"k8s/eks",title:"EKS",description:"Access",source:"@site/docs/k8s/eks.md",sourceDirName:"k8s",slug:"/k8s/eks",permalink:"/k8s/eks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"OIDC Plugin",permalink:"/k8s/oidc-login"},next:{title:"Helm",permalink:"/k8s/helm"}},a={},l=[{value:"Access",id:"access",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"eks",children:"EKS"}),"\n",(0,t.jsx)(s.h2,{id:"access",children:"Access"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl get-contexts\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl use-context\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"aws configure sso\n"})}),"\n",(0,t.jsx)(s.p,{children:"Export creds from AWS"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"aws eks update-kubeconfig --region <region> --name <cluster-name> --profile <profile-name> #`--profile` to resolve Lens issue\n"})})]})}function u(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>o});var t=n(7294);const c={},r=t.createContext(c);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);