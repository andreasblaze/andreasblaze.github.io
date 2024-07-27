"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[2795],{2921:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>t,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var l=c(5893),s=c(1151);const d={sidebar_position:3},r="CMD's",a={id:"docker/cmd",title:"CMD's",description:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432",source:"@site/docs/docker/cmd.md",sourceDirName:"docker",slug:"/docker/cmd",permalink:"/docker/cmd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dockerfile",permalink:"/docker/docker-file"},next:{title:"Deploy with compose",permalink:"/docker/compose"}},i={},o=[{value:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432",id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432",level:2},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430/\u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u0430",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0430-\u043e\u0431\u0440\u0430\u0437\u0430",level:2},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u0430 \u0438\u0437 Dockerfile",id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u043e\u0431\u0440\u0430\u0437\u0430-\u0438\u0437-dockerfile",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u043c \u043b\u043e\u0433\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u0441\u043c\u043e\u0442\u0440\u0438\u043c-\u043b\u043e\u0433\u0438-\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e-\u043e\u0431\u0440\u0430\u0437\u0430",level:2},{value:"\u041c\u044f\u0433\u043a\u0430\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u043c\u044f\u0433\u043a\u0430\u044f-\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0443\u0436\u0435-\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:2},{value:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:2},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",level:2},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0437\u0430",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043e\u0431\u0440\u0430\u0437\u0430",level:2},{value:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u043e\u0439 \u043e\u0431\u0440\u0430\u0437\u0430 \u0432 \u0440\u0435\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044f \u0440\u044f\u0434 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439",id:"\u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442-\u043a\u0430\u0436\u0434\u044b\u0439-\u0441\u043b\u043e\u0439-\u043e\u0431\u0440\u0430\u0437\u0430-\u0432-\u0440\u0435\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435-\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044f-\u0440\u044f\u0434-\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445-\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0435\u0437 \u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u0435\u0442-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0431\u0435\u0437-\u0435\u0433\u043e-\u0437\u0430\u043f\u0443\u0441\u043a\u0430",level:2},{value:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432 \u043d\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443",id:"\u0432\u043e\u0439\u0442\u0438-\u0432-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0438-\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c-\u0432-\u043d\u0435\u043c-\u043a\u043e\u043c\u0430\u043d\u0434\u0443",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e Docker",id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e-\u043e-docker",level:2},{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0438\u0437 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443",id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c-\u0444\u0430\u0439\u043b-\u0438\u0437-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430-\u0432-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443\u044e-\u0441\u0438\u0441\u0442\u0435\u043c\u0443",level:2},{value:"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b",id:"\u0443\u0434\u0430\u043b\u044f\u0435\u0442-\u0432\u0441\u0435-\u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 Docker (\u0434\u0435\u043c\u043e\u043d\u0430)",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u0435\u0440\u0432\u0438\u0441\u0430-docker-\u0434\u0435\u043c\u043e\u043d\u0430",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430 \u0438\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-\u043e\u0431\u0440\u0430\u0437\u0430-\u0438\u0437-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439-\u0432-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"cmds",children:"CMD's"}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0430-\u043e\u0431\u0440\u0430\u0437\u0430",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430/\u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker pull/push\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u043e\u0431\u0440\u0430\u0437\u0430-\u0438\u0437-dockerfile",children:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u0430 \u0438\u0437 Dockerfile"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker build -t pdp:v1 .\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u043c\u043e\u0442\u0440\u0438\u043c-\u043b\u043e\u0433\u0438-\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:"\u0421\u043c\u043e\u0442\u0440\u0438\u043c \u043b\u043e\u0433\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker logs -follow pdp\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e-\u043e\u0431\u0440\u0430\u0437\u0430",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker run pdp -d -it bash\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"-d(detached) -it(interactive) bash"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u043c\u044f\u0433\u043a\u0430\u044f-\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:"\u041c\u044f\u0433\u043a\u0430\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker stop $(docker ps -a -q)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0443\u0436\u0435-\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker start --attach -i mycontainer\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker kill $(ps -a -q)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker rm\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u043e\u0431\u0440\u0430\u0437\u0430",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0437\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker rmi\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442-\u043a\u0430\u0436\u0434\u044b\u0439-\u0441\u043b\u043e\u0439-\u043e\u0431\u0440\u0430\u0437\u0430-\u0432-\u0440\u0435\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435-\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044f-\u0440\u044f\u0434-\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445-\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439",children:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u043e\u0439 \u043e\u0431\u0440\u0430\u0437\u0430 \u0432 \u0440\u0435\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044f \u0440\u044f\u0434 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker history\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u043e\u0437\u0434\u0430\u0435\u0442-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0431\u0435\u0437-\u0435\u0433\u043e-\u0437\u0430\u043f\u0443\u0441\u043a\u0430",children:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0435\u0437 \u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker create -i -t --name mycontainer alpine\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0432\u043e\u0439\u0442\u0438-\u0432-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0438-\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c-\u0432-\u043d\u0435\u043c-\u043a\u043e\u043c\u0430\u043d\u0434\u0443",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432 \u043d\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker exec -d ubuntu_bash touch /tmp/execWorks\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e-\u043e-docker",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e Docker"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker info\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c-\u0444\u0430\u0439\u043b-\u0438\u0437-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430-\u0432-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443\u044e-\u0441\u0438\u0441\u0442\u0435\u043c\u0443",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0438\u0437 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker cp CONTAINER:/var/logs/ /tmp/app_logs\n"})}),"\n",(0,l.jsx)(n.h2,{id:""}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker search --filter stars=3 busybox\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0443\u0434\u0430\u043b\u044f\u0435\u0442-\u0432\u0441\u0435-\u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b",children:"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker container prune\n"})}),"\n",(0,l.jsx)(n.h2,{id:"-1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker login localhost:8080\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0441\u0435\u0440\u0432\u0438\u0441\u0430-docker-\u0434\u0435\u043c\u043e\u043d\u0430",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 Docker (\u0434\u0435\u043c\u043e\u043d\u0430)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dockerd\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0433\u043e-\u043e\u0431\u0440\u0430\u0437\u0430-\u0438\u0437-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439-\u0432-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430 \u0438\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"commit\n"})}),"\n",(0,l.jsx)(n.h2,{id:"-2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash"})})]})}function t(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,n,c)=>{c.d(n,{Z:()=>a,a:()=>r});var l=c(7294);const s={},d=l.createContext(s);function r(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);