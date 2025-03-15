"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[7951],{7920:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=s(5893),t=s(1151);const r={sidebar_position:4},i="Deploy with compose",c={id:"docker/compose",title:"Deploy with compose",description:"Docker Compose \u2014 \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043c\u043d\u043e\u0433\u043e\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 Docker. \u0421 Compose \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0444\u0430\u0439\u043b YAML \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043b\u0443\u0436\u0431, \u0441\u0435\u0442\u0435\u0439 \u0438 \u0442\u043e\u043c\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0417\u0430\u0442\u0435\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438.",source:"@site/docs/docker/compose.md",sourceDirName:"docker",slug:"/docker/compose",permalink:"/docker/compose",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CMD's",permalink:"/docker/cmd"},next:{title:"Multi-Stage Builds",permalink:"/docker/multi-stage-builds"}},l={},a=[{value:"CMD&#39;s",id:"cmds",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-with-compose",children:"Deploy with compose"}),"\n",(0,o.jsx)(n.p,{children:"Docker Compose \u2014 \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043c\u043d\u043e\u0433\u043e\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 Docker. \u0421 Compose \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0444\u0430\u0439\u043b YAML \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043b\u0443\u0436\u0431, \u0441\u0435\u0442\u0435\u0439 \u0438 \u0442\u043e\u043c\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0417\u0430\u0442\u0435\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"docker-compose.yml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"version: '3.8'\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - \"80:80\"\n    networks:\n      - webnet\n  database:\n    image: postgres:latest\n    environment:\n      POSTGRES_DB: exampledb\n      POSTGRES_USER: exampleuser\n      POSTGRES_PASSWORD: examplepass\n    volumes:\n      - db-data:/var/lib/postgresql/data\n    networks:\n      - webnet\n\nvolumes:\n  db-data:\n\nnetworks:\n  webnet:\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Services"}),": \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u0434\u0432\u0435 \u0441\u043b\u0443\u0436\u0431\u044b, \u0432\u0435\u0431-\u0441\u043b\u0443\u0436\u0431\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0431\u0440\u0430\u0437\u0430 nginx \u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043e\u0431\u0440\u0430\u0437\u0430 postgres."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Ports"}),": \u0432\u0435\u0431-\u0441\u043b\u0443\u0436\u0431\u0430 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0440\u0442 80 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0438 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0430 \u043f\u043e\u0440\u0442 80 \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Environment Variables"}),": \u0441\u043b\u0443\u0436\u0431\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043c\u0435\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 PostgreSQL."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Volumes"}),": \u0414\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 PostgreSQL \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f \u0432 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0442\u043e\u043c\u0435 (db-data)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Networks"}),": \u043e\u0431\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043a \u0441\u0435\u0442\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c webnet."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"cmds",children:"CMD's"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# This command will pull the required Docker images, start the services defined in your docker-compose.yml file, and create the networks and volumes as specified.\ndocker-compose up        \n\ndocker-compose up -d     # To run in detached mode (in the background)\ndocker-compose stop      # Stopping Services: To stop the services without removing them\ndocker-compose start     # Starting Services: To start services that were previously stopped\ndocker-compose down      # Removing Services: To stop and remove containers, networks, and volumes created by up\ndocker-compose logs      # To view logs for running services\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mukovoz/youtube-elk/blob/main/docker-compose.yaml",children:"https://github.com/mukovoz/youtube-elk/blob/main/docker-compose.yaml"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'services:\n  php:\n    container_name: "elk-php"\n    build:  \n      context: ./config/php\n    volumes:\n      - "./src:/var/www/html"\n      - "./logs/debug.log:/var/www/debug.log"\n    expose:\n      - 9000\n    environment:\n      WEBROOT: "/var/www/html"\n      XDEBUG_MODE: "debug"\n    networks:\n      - elastic\n  nginx:\n    image: nginx:latest\n    volumes:\n      - "./config/nginx/default.vhosts.conf:/etc/nginx/conf.d/default.conf"\n      - "./src:/var/www/html"\n      - "./logs/access.log:/var/log/nginx/access.log"\n    ports:\n      - "80:80"\n    networks:\n      - elastic\n  elasticsearch:\n    image: elasticsearch:7.16.1\n    container_name: es\n    environment:\n      discovery.type: single-node\n      ES_JAVA_OPTS: "-Xms512m -Xmx512m"\n      http.host: 0.0.0.0\n      http.port: 9200\n      http.cors.allow-origin: http://localhost:8081\n      http.cors.enabled: true\n      http.cors.allow-headers: X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization"\n      http.cors.allow-credentials: true\n    ports:\n      - "9200:9200"\n      - "9300:9300"\n    healthcheck:\n      test: ["CMD-SHELL", "curl --silent --fail localhost:9200/_cluster/health || exit 1"]\n      interval: 10s\n      timeout: 10s\n      retries: 3\n    networks:\n      - elastic\n  logstash:\n    image: logstash:7.16.1\n    container_name: logstash\n    environment:\n      discovery.seed_hosts: logstash\n      LS_JAVA_OPTS: "-Xms512m -Xmx512m"\n    volumes:\n      - ./config/logstash/pipeline/:/usr/share/logstash/pipeline/\n      - ./config/logstash/pipelines.yml:/usr/share/logstash/config/pipelines.yml\n      - ./logs/access.log:/home/access.log\n      - ./logs/debug.log:/home/debug.log\n    ports:\n      - "5000:5000/tcp"\n      - "5000:5000/udp"\n      - "5044:5044"\n      - "5043:5043"\n      - "9600:9600"\n    expose:\n      - 5043\n    depends_on:\n      - elasticsearch\n    networks:\n      - elastic\n    command: logstash  \n  kibana:\n    image: kibana:7.16.1\n    container_name: kib\n    ports:\n      - "5601:5601"\n    depends_on:\n      - elasticsearch\n    networks:\n      - elastic\nnetworks:\n  elastic:\n    driver: bridge\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var o=s(7294);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);