"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[4333],{3557:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=l(5893),i=l(1151),r=l(3901);const s={title:"Troubleshooting",sidebar_position:10,toc_min_heading_level:2,toc_max_heading_level:6},o=void 0,a={id:"networking/troubleshooting",title:"Troubleshooting",description:"curl",source:"@site/docs/networking/troubleshooting.md",sourceDirName:"networking",slug:"/networking/troubleshooting",permalink:"/networking/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Troubleshooting",sidebar_position:10,toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"CloudFlare",permalink:"/networking/cloudflare"},next:{title:"Databases",permalink:"/category/databases"}},c={},d=[{value:"curl",id:"curl",level:2},{value:"nmap",id:"nmap",level:2},{value:"telnet",id:"telnet",level:2},{value:"traceroute",id:"traceroute",level:2},{value:"netcat",id:"netcat",level:2},{value:"mtr",id:"mtr",level:2},{value:"nslookup",id:"nslookup",level:2},{value:"dig",id:"dig",level:2},{value:"Networking Errors &amp; solutions in Linux",id:"networking-errors--solutions-in-linux",level:2},{value:"Connection Refused",id:"connection-refused",level:3},{value:"Connection Timed Out",id:"connection-timed-out",level:3},{value:"No Route to Host",id:"no-route-to-host",level:3},{value:"Host Unreachable",id:"host-unreachable",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{toc:d,minHeadingLevel:2,maxHeadingLevel:6}),"\n",(0,t.jsx)(n.h2,{id:"curl",children:"curl"}),"\n",(0,t.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0449\u0435\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v example.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u0442 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -vvv whois.namecheap.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 HTTP, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, HTTP/1.1 200 OK):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -I https://www.example.com\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap",children:"nmap"}),"\n",(0,t.jsx)(n.p,{children:"nmap - To check which network ports are open on the server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nmap -p 80,443 www.example.com\n"})}),"\n",(0,t.jsx)(n.h2,{id:"telnet",children:"telnet"}),"\n",(0,t.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0440\u0442 443:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"telnet www.example.com 443\n"})}),"\n",(0,t.jsx)(n.h2,{id:"traceroute",children:"traceroute"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash"})}),"\n",(0,t.jsx)(n.h2,{id:"netcat",children:"netcat"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nc -w3 -4 -v www.redhat.com 80\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mtr",children:"mtr"}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0441 \u0445\u043e\u0441\u0442\u043e\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f example.com:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mtr -rw example.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044f \u0432\u044b\u0432\u043e\u0434 MTR, \u0432\u044b \u0438\u0449\u0435\u0442\u0435 \u0434\u0432\u0435 \u0432\u0435\u0449\u0438: \u043f\u043e\u0442\u0435\u0440\u0438 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0443:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mtr --report www.google.com\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nslookup",children:"nslookup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash"})}),"\n",(0,t.jsx)(n.h2,{id:"dig",children:"dig"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'dig @8.8.8.8 +short TXT mailout.spacemail.com "v=spf1 include:spf-spacemail.jellyfish.systems -all"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"networking-errors--solutions-in-linux",children:"Networking Errors & solutions in Linux"}),"\n",(0,t.jsx)(n.h3,{id:"connection-refused",children:"Connection Refused"}),"\n",(0,t.jsx)(n.p,{children:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043e\u0442\u043a\u043b\u043e\u043d\u044f\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0441\u043b\u0443\u0436\u0431\u0430 \u043d\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."}),"\n",(0,t.jsx)(n.li,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0438 \u0444\u0430\u0439\u043b\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"connection-timed-out",children:"Connection Timed Out"}),"\n",(0,t.jsx)(n.p,{children:"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0437\u0430\u043d\u044f\u043b\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0444\u0430\u0435\u0440\u0432\u043e\u043b\u0430, \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0442\u0438 \u0438\u043b\u0438 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440."}),"\n",(0,t.jsx)(n.li,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0430\u0435\u0440\u0432\u043e\u043b\u0430, \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.\n\u043e\u0442\u0432\u0435\u0442\u043d\u0430\u044f \u0440\u0435\u0430\u043a\u0446\u0438\u044f."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"no-route-to-host",children:"No Route to Host"}),"\n",(0,t.jsx)(n.p,{children:"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0445\u043e\u0441\u0442\u043e\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0442\u0438."}),"\n",(0,t.jsxs)(n.li,{children:["\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,t.jsx)(n.code,{children:"route"})," \u0438\u043b\u0438 ",(0,t.jsx)(n.code,{children:"ip route"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"host-unreachable",children:"Host Unreachable"}),"\n",(0,t.jsx)(n.p,{children:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \xab\u041d\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u043a \u0445\u043e\u0441\u0442\u0443\xbb \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u043c\u0435\u0441\u0442\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0442\u0438 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 IP-\u0430\u0434\u0440\u0435\u0441."}),"\n",(0,t.jsx)(n.li,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e IP \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0442\u0438."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},3901:(e,n,l)=>{l.d(n,{Z:()=>s});l(7294);var t=l(3743);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};var r=l(5893);function s(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:s}=e;return(0,r.jsx)("div",{className:i.tableOfContentsInline,children:(0,r.jsx)(t.Z,{toc:n,minHeadingLevel:l,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}},3743:(e,n,l)=>{l.d(n,{Z:()=>v});var t=l(7294),i=l(6668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),l=Array(7).fill(-1);n.forEach(((e,n)=>{const t=l.slice(2,e.level);e.parentIndex=Math.max(...t),l[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:l,...i}=e;l>=0?n[l].children.push(i):t.push(i)})),t}function s(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:l,maxHeadingLevel:t});return function(e){return e.level>=l&&e.level<=t}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function a(e,n){let{anchorTopOffset:l}=n;const t=e.find((e=>o(e).top>=l));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function c(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,t.useRef)(void 0),l=c();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:l}=e;const t=[];for(let i=n;i<=l;i+=1)t.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=a(o,{anchorTopOffset:l.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,l){l?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,l])}var u=l(3692),h=l(5893);function m(e){let{toc:n,className:l,linkClassName:t,isChild:i}=e;return n.length?(0,h.jsx)("ul",{className:i?void 0:l,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(u.Z,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(m,{isChild:!0,toc:e.children,className:l,linkClassName:t})]},e.id)))}):null}const x=t.memo(m);function v(e){let{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:u,...m}=e;const v=(0,i.L)(),g=c??v.tableOfContents.minHeadingLevel,p=u??v.tableOfContents.maxHeadingLevel,f=function(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:i}=e;return(0,t.useMemo)((()=>s({toc:r(n),minHeadingLevel:l,maxHeadingLevel:i})),[n,l,i])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return d((0,t.useMemo)((()=>{if(o&&a)return{linkClassName:o,linkActiveClassName:a,minHeadingLevel:g,maxHeadingLevel:p}}),[o,a,g,p])),(0,h.jsx)(x,{toc:f,className:l,linkClassName:o,...m})}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>s});var t=l(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);