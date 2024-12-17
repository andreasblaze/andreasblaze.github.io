"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[7170],{3022:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var c=s(5893),l=s(1151);const t={sidebar_position:2},a="kubectl",i={id:"k8s/kubectl",title:"kubectl",description:"kubectl get",source:"@site/docs/k8s/kubectl.md",sourceDirName:"k8s",slug:"/k8s/kubectl",permalink:"/k8s/kubectl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Concepts",permalink:"/k8s/concepts"},next:{title:"kube_config",permalink:"/k8s/kube_config"}},r={},d=[{value:"kubectl get",id:"kubectl-get",level:2},{value:"kubectl describe",id:"kubectl-describe",level:2},{value:"kubectl logs",id:"kubectl-logs",level:2},{value:"kubectl exec",id:"kubectl-exec",level:2},{value:"kubectl apply",id:"kubectl-apply",level:2},{value:"kubectl top",id:"kubectl-top",level:2},{value:"kubectl edit",id:"kubectl-edit",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"kubectl",children:"kubectl"}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-get",children:"kubectl get"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl get nodes\n"})}),"\n",(0,c.jsx)(n.p,{children:"OR"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl get pods/deployments/svc/events/networkpolicy -n <namespace> #OR --all-namespaces\n"})}),"\n",(0,c.jsx)(n.p,{children:"Get a list of items in JSON:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl get deployments/daemonset/sts -n sre-monitoring -o json | jq '.items[].spec.template.spec.containers[] | {name: .name, requests: .resources.requests, limits: .resources.limits}'\n"})}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-describe",children:"kubectl describe"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl describe pod/svc <service-name> -n <namespace>\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Verify the Updated DaemonSet"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl describe daemonset cadvisor -n utils\n"})}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-logs",children:"kubectl logs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl logs <pod-name> -n <namespace>\n"})}),"\n",(0,c.jsx)(n.p,{children:"real-time monitoring:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl logs -f <pod-name> -n <namespace>\n"})}),"\n",(0,c.jsx)(n.p,{children:"View Logs for a Specific Container in the Pod:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl logs <pod-name> -c <container-name> -n <namespace>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Filter Logs for Errors:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl logs <pod-name> -n <namespace> | grep -i error\n"})}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-exec",children:"kubectl exec"}),"\n",(0,c.jsx)(n.p,{children:"Exec into the Pod:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl exec -it <pod-name> -n <namespace> -- /bin/bash\n"})}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-apply",children:"kubectl apply"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f <policy-file>.yaml\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash"})}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-top",children:"kubectl top"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl top <node-name>\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl top <pod-name> -n <namespace> #can be used with --containers\n"})}),"\n",(0,c.jsx)(n.h2,{id:"kubectl-edit",children:"kubectl edit"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Manually Edit the DaemonSet (if necessary)"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"kubectl edit daemonset cadvisor -n utils\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var c=s(7294);const l={},t=c.createContext(l);function a(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);