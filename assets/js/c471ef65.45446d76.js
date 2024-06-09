"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[4333],{3557:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=l(5893),t=l(1151),i=l(3901);const s={title:"Troubleshooting",sidebar_position:10,toc_min_heading_level:2,toc_max_heading_level:6},o=void 0,c={id:"networking/troubleshooting",title:"Troubleshooting",description:"curl",source:"@site/docs/networking/troubleshooting.md",sourceDirName:"networking",slug:"/networking/troubleshooting",permalink:"/networking/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Troubleshooting",sidebar_position:10,toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"tutorialSidebar",previous:{title:"CloudFlare",permalink:"/networking/cloudflare"},next:{title:"Hardware Networking",permalink:"/networking/hardware"}},a={},d=[{value:"curl",id:"curl",level:2},{value:"nmap",id:"nmap",level:2},{value:"telnet",id:"telnet",level:2},{value:"traceroute",id:"traceroute",level:2},{value:"netcat",id:"netcat",level:2},{value:"mtr",id:"mtr",level:2},{value:"nslookup",id:"nslookup",level:2},{value:"dig",id:"dig",level:2},{value:"Networking Errors &amp; solutions in Linux",id:"networking-errors--solutions-in-linux",level:2},{value:"Connection Refused",id:"connection-refused",level:3},{value:"Connection Timed Out",id:"connection-timed-out",level:3},{value:"No Route to Host",id:"no-route-to-host",level:3},{value:"Host Unreachable",id:"host-unreachable",level:3},{value:"Ports",id:"ports",level:2},{value:"Opening a Port",id:"opening-a-port",level:3},{value:"List All Open Ports",id:"list-all-open-ports",level:3},{value:"Check Port",id:"check-port",level:3},{value:"To Check The Availability of a Port on a Remote Server",id:"to-check-the-availability-of-a-port-on-a-remote-server",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{toc:d,minHeadingLevel:2,maxHeadingLevel:6}),"\n",(0,r.jsx)(n.h2,{id:"curl",children:"curl"}),"\n",(0,r.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0449\u0435\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -v example.com\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0440\u0442 \u0434\u043e\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -vvv whois.namecheap.com\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 HTTP, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u043e\u0434 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, HTTP/1.1 200 OK):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -I https://www.example.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nmap",children:"nmap"}),"\n",(0,r.jsx)(n.p,{children:"nmap - To check which network ports are open on the server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nmap -p 80,443 www.example.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"telnet",children:"telnet"}),"\n",(0,r.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0440\u0442 443:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"telnet www.example.com 443\n"})}),"\n",(0,r.jsx)(n.h2,{id:"traceroute",children:"traceroute"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash"})}),"\n",(0,r.jsx)(n.h2,{id:"netcat",children:"netcat"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nc -w3 -4 -v www.redhat.com 80\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mtr",children:"mtr"}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0441 \u0445\u043e\u0441\u0442\u043e\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f example.com:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mtr -rw example.com\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044f \u0432\u044b\u0432\u043e\u0434 MTR, \u0432\u044b \u0438\u0449\u0435\u0442\u0435 \u0434\u0432\u0435 \u0432\u0435\u0449\u0438: \u043f\u043e\u0442\u0435\u0440\u0438 \u0438 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0443:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mtr --report www.google.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nslookup",children:"nslookup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash"})}),"\n",(0,r.jsx)(n.h2,{id:"dig",children:"dig"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'dig @8.8.8.8 +short TXT mailout.spacemail.com "v=spf1 include:spf-spacemail.jellyfish.systems -all"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"networking-errors--solutions-in-linux",children:"Networking Errors & solutions in Linux"}),"\n",(0,r.jsx)(n.h3,{id:"connection-refused",children:"Connection Refused"}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043e\u0442\u043a\u043b\u043e\u043d\u044f\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0441\u043b\u0443\u0436\u0431\u0430 \u043d\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."}),"\n",(0,r.jsx)(n.li,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0438 \u0444\u0430\u0439\u043b\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"connection-timed-out",children:"Connection Timed Out"}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0437\u0430\u043d\u044f\u043b\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0444\u0430\u0435\u0440\u0432\u043e\u043b\u0430, \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0442\u0438 \u0438\u043b\u0438 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440."}),"\n",(0,r.jsx)(n.li,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0444\u0430\u0435\u0440\u0432\u043e\u043b\u0430, \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0442\u0438 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.\n\u043e\u0442\u0432\u0435\u0442\u043d\u0430\u044f \u0440\u0435\u0430\u043a\u0446\u0438\u044f."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"no-route-to-host",children:"No Route to Host"}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0445\u043e\u0441\u0442\u043e\u043c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0442\u0438."}),"\n",(0,r.jsxs)(n.li,{children:["\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(n.code,{children:"route"})," \u0438\u043b\u0438 ",(0,r.jsx)(n.code,{children:"ip route"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"host-unreachable",children:"Host Unreachable"}),"\n",(0,r.jsx)(n.p,{children:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \xab\u041d\u0435\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 \u043a \u0445\u043e\u0441\u0442\u0443\xbb \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u043c\u0435\u0441\u0442\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430: \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0442\u0438 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 IP-\u0430\u0434\u0440\u0435\u0441."}),"\n",(0,r.jsx)(n.li,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e IP \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0442\u0438."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ports",children:"Ports"}),"\n",(0,r.jsx)(n.h3,{id:"opening-a-port",children:"Opening a Port"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ufw allow <port_number>\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --add-port=<port_number>/tcp\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"iptables -A INPUT -p tcp --dport <port_number> -j ACCEPT\n"})}),"\n",(0,r.jsx)(n.h3,{id:"list-all-open-ports",children:"List All Open Ports"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"netstat -lntu\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ss -lntu\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["all listening sockets (",(0,r.jsx)(n.code,{children:"-l"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["the port number (",(0,r.jsx)(n.code,{children:"-n"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["TCP ports (",(0,r.jsx)(n.code,{children:"-t"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["UDP ports (",(0,r.jsx)(n.code,{children:"-u"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"check-port",children:"Check Port"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls | nc -l -p <port_number>\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"telnet localhost <port_number>\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nmap localhost -p <port_number>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"to-check-the-availability-of-a-port-on-a-remote-server",children:"To Check The Availability of a Port on a Remote Server"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat < /dev/tcp/<server-ip-or-dns>/<port>\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u043e\u0440\u0442 \u043e\u0442\u043a\u0440\u044b\u0442: \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u043a ",(0,r.jsx)(n.code,{children:"example.com"})," \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0440\u0442 ",(0,r.jsx)(n.code,{children:"80"})," (\u043f\u043e\u0440\u0442 HTTP). \u0415\u0441\u043b\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0435, \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0436\u0438\u0434\u0430\u0442\u044c \u0432\u0432\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432\u044b\u0432\u043e\u0434\u0430. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3901:(e,n,l)=>{l.d(n,{Z:()=>s});l(7294);var r=l(3743);const t={tableOfContentsInline:"tableOfContentsInline_prmo"};var i=l(5893);function s(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:s}=e;return(0,i.jsx)("div",{className:t.tableOfContentsInline,children:(0,i.jsx)(r.Z,{toc:n,minHeadingLevel:l,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}},3743:(e,n,l)=>{l.d(n,{Z:()=>p});var r=l(7294),t=l(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),l=Array(7).fill(-1);n.forEach(((e,n)=>{const r=l.slice(2,e.level);e.parentIndex=Math.max(...r),l[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:l,...t}=e;l>=0?n[l].children.push(t):r.push(t)})),r}function s(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:l,maxHeadingLevel:r});return function(e){return e.level>=l&&e.level<=r}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function c(e,n){let{anchorTopOffset:l}=n;const r=e.find((e=>o(e).top>=l));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function a(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,t.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,r.useRef)(void 0),l=a();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:t,minHeadingLevel:i,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:l}=e;const r=[];for(let t=n;t<=l;t+=1)r.push(`h${t}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),a=c(o,{anchorTopOffset:l.current}),d=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,l){l?(n.current&&n.current!==e&&n.current.classList.remove(t),e.classList.add(t),n.current=e):e.classList.remove(t)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,l])}var h=l(3692),u=l(5893);function m(e){let{toc:n,className:l,linkClassName:r,isChild:t}=e;return n.length?(0,u.jsx)("ul",{className:t?void 0:l,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:l,linkClassName:r})]},e.id)))}):null}const x=r.memo(m);function p(e){let{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:a,maxHeadingLevel:h,...m}=e;const p=(0,t.L)(),v=a??p.tableOfContents.minHeadingLevel,g=h??p.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:t}=e;return(0,r.useMemo)((()=>s({toc:i(n),minHeadingLevel:l,maxHeadingLevel:t})),[n,l,t])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,r.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[o,c,v,g])),(0,u.jsx)(x,{toc:j,className:l,linkClassName:o,...m})}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>s});var r=l(7294);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);