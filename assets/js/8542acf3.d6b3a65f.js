"use strict";(self.webpackChunktech_notes=self.webpackChunktech_notes||[]).push([[5746],{2293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>E,default:()=>q,frontMatter:()=>T,metadata:()=>S,toc:()=>N});var a=n(5893),r=n(1151),o=n(7294),s=n(512),l=n(2466),u=n(6550),i=n(469),c=n(1980),d=n(7392),b=n(12);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=f(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,c]=h({queryString:n,groupId:a}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,b.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),v=(()=>{const e=u??d;return m({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),p(e)}),[c,p,r]),tabValues:r}}var g=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=u[n].value;a!==r&&(c(t),o(a))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:b,onClick:d,...o,className:(0,s.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=v(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,a.jsx)(w,{...e,...t}),(0,a.jsx)(k,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,a.jsx)(y,{...e,children:p(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function V(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(I.tabItem,r),hidden:n,children:t})}const T={title:"Tabs in Markdown",sidebar_position:4},E=void 0,S={id:"examples/tabs",title:"Tabs in Markdown",description:"Dive into the world of knowledge with a captivating book \ud83d\udcda",source:"@site/docs/examples/tabs.md",sourceDirName:"examples",slug:"/examples/tabs",permalink:"/examples/tabs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Tabs in Markdown",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Table of Contents",permalink:"/examples/table-of-contents"},next:{title:"Alerts or Admonitions",permalink:"/examples/alerts"}},C={},N=[];function _(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(j,{children:[(0,a.jsx)(V,{value:"book",label:"Book",default:!0,children:(0,a.jsx)(t.p,{children:"Dive into the world of knowledge with a captivating book \ud83d\udcda"})}),(0,a.jsx)(V,{value:"painting",label:"Painting",children:(0,a.jsx)(t.p,{children:"Admire the strokes of artistry on a beautiful painting \ud83d\uddbc\ufe0f"})}),(0,a.jsx)(V,{value:"music",label:"Music",children:(0,a.jsx)(t.p,{children:"Let the soothing melodies of music transport you \ud83c\udfb6"})})]}),"\n",(0,a.jsx)(t.p,{children:"I'm a text that doesn't belong to any tab. So I'm always visible."})]})}function q(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(7294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);