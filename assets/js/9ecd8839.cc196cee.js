"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[7170],{3022:(e,c,l)=>{l.r(c),l.d(c,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>r});var n=l(5893),s=l(1151);const t={sidebar_position:1},a="kubectl",d={id:"k8s/kubectl",title:"kubectl",description:"kubectl config",source:"@site/docs/k8s/kubectl.md",sourceDirName:"k8s",slug:"/k8s/kubectl",permalink:"/k8s/kubectl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"K8s",permalink:"/category/k8s"},next:{title:"Kubernetes Concepts",permalink:"/k8s/concepts"}},i={},r=[{value:"kubectl config",id:"kubectl-config",level:2},{value:"kubectl get nodes",id:"kubectl-get-nodes",level:2},{value:"kubectl get pods",id:"kubectl-get-pods",level:2},{value:"kubectl get services",id:"kubectl-get-services",level:2},{value:"kubectl get svc",id:"kubectl-get-svc",level:2},{value:"kubectl get events",id:"kubectl-get-events",level:2},{value:"kubectl describe svc",id:"kubectl-describe-svc",level:2},{value:"kubectl describe pod",id:"kubectl-describe-pod",level:2},{value:"kubectl get networkpolicy",id:"kubectl-get-networkpolicy",level:2},{value:"kubectl logs",id:"kubectl-logs",level:2},{value:"kubectl exec",id:"kubectl-exec",level:2},{value:"kubectl apply",id:"kubectl-apply",level:2},{value:"kubectl top node",id:"kubectl-top-node",level:2},{value:"kubectl top pod",id:"kubectl-top-pod",level:2}];function o(e){const c={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.h1,{id:"kubectl",children:"kubectl"}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-config",children:"kubectl config"}),"\n",(0,n.jsxs)(c.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0444\u0430\u0439\u043b ",(0,n.jsx)(c.code,{children:"kubeconfig"})," \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u044b:"]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl config get-contexts\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-get-nodes",children:"kubectl get nodes"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get nodes\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-get-pods",children:"kubectl get pods"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get pods --all-namespaces\n"})}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get pods -n <namespace>\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-get-services",children:"kubectl get services"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get svc -n <namespace>\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-get-svc",children:"kubectl get svc"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get svc\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-get-events",children:"kubectl get events"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get events\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-describe-svc",children:"kubectl describe svc"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl describe svc <service-name> -n <namespace>\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-describe-pod",children:"kubectl describe pod"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl describe pod\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-get-networkpolicy",children:"kubectl get networkpolicy"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl get networkpolicy -n <namespace>\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-logs",children:"kubectl logs"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl logs <pod-name> -n <namespace>\n"})}),"\n",(0,n.jsx)(c.p,{children:"real-time monitoring:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl logs -f <pod-name> -n <namespace>\n"})}),"\n",(0,n.jsx)(c.p,{children:"View Logs for a Specific Container in the Pod:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl logs <pod-name> -c <container-name> -n <namespace>\n"})}),"\n",(0,n.jsx)(c.p,{children:"Filter Logs for Errors:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl logs <pod-name> -n <namespace> | grep -i error\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-exec",children:"kubectl exec"}),"\n",(0,n.jsx)(c.p,{children:"Exec into the Pod:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl exec -it <pod-name> -n <namespace> -- /bin/bash\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-apply",children:"kubectl apply"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl apply -f <policy-file>.yaml\n"})}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-top-node",children:"kubectl top node"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl top node\n"})}),"\n",(0,n.jsx)(c.h2,{id:"kubectl-top-pod",children:"kubectl top pod"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"kubectl top pod\n"})})]})}function u(e={}){const{wrapper:c}={...(0,s.a)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,c,l)=>{l.d(c,{Z:()=>d,a:()=>a});var n=l(7294);const s={},t=n.createContext(s);function a(e){const c=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function d(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(t.Provider,{value:c},e.children)}}}]);