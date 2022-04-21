import e from"next/image";import t,{useLayoutEffect as n,useEffect as o,useRef as i,useCallback as r,useState as a}from"react";import{createStitches as l,createTheme as d}from"@stitches/react";import{Warning as c,Check as s,ClipboardText as g,SunHorizon as m,MoonStars as h}from"phosphor-react";import p,{useToaster as u}from"react-hot-toast";const f={desktop:"@media only screen and (max-width: 2160px)",desktopX:"@media only screen and (min-width: 1481px) and (max-width: 2160px)",laptop:"@media only screen and (max-width: 1480px)",laptopX:"@media only screen and (min-width: 961px) and (max-width: 1480px)",phone:"@media only screen and (max-width: 720px)",tablet:"@media only screen and (max-width: 960px)",tabletX:"@media only screen and (min-width: 721px) and (max-width: 960px)",wide:"@media only screen and (min-width: 2161px)"},{theme:$,css:b,styled:v,getCssText:w,globalCss:y,keyframes:k}=l({theme:{colors:{background:"rgb(19, 19, 27)",blueBorder:"rgba(115, 172, 255, 0.4)",blueOverlay:"rgba(115, 172, 255, 0.2)",blueText:"#8c9eff",border:"rgb(65, 65, 71)",greenBorder:"rgba(0, 200, 83, 0.4)",greenOverlay:"rgba(0, 200, 83, 0.2)",greenText:"#93e0ba",orangeBorder:"rgba(255, 172, 115, 0.4)",orangeOverlay:"rgba(255, 172, 115, 0.2)",orangeText:"#FCA67D",overlay:"rgba(255, 255, 255, 0.05)",overlayActive:"rgb(51, 51, 59)",overlayHover:"rgb(66, 66, 74)",pinkBorder:"rgba(255, 115, 172, 0.4)",pinkOverlay:"rgba(255, 115, 172, 0.2)",pinkText:"#eb83cc",purpleBorder:"rgba(172, 115, 255, 0.4)",purpleOverlay:"rgba(172, 115, 255, 0.2)",purpleText:"#c887f3",redBorder:"rgba(255, 115, 115, 0.4)",redOverlay:"rgba(255, 115, 115, 0.2)",redText:"#fa7083",text:"rgb(255, 255, 255)"},fontSizes:{h1:"2.8rem",h2:"2.6rem",h3:"2.2rem",h4:"1.7rem",h5:"1.6rem",h6:"1.5rem",p:"1.4rem",small:"1.25rem"},fontWeights:{h1:"700",h2:"700",h3:"700",h4:"500",h5:"400",h6:"400",p:"400",small:"400"},fonts:{default:"DM Sans, apple-system, sans-serif"},lineHeights:{h1:"1.3",h2:"1.3",h3:"1.4",h4:"1.4",h5:"1.4",h6:"1.45",p:"1.4",small:"1.4"},media:f,radii:{1:"0.5rem",2:"1rem",3:"1.5rem"},space:{1:"0.3rem",2:"0.5rem",3:"1rem",4:"1.5rem",5:"2rem",6:"3rem",7:"5rem",8:"8rem"},transitions:{default:"all 0.233s ease-in-out"},zIndices:{dialog:100,popover:150,toast:200}},utils:{desktop:e=>({[f.desktop]:e}),desktopX:e=>({[f.desktopX]:e}),hidden:e=>({[f[e]]:{display:"none"}}),laptop:e=>({[f.laptop]:e}),laptopX:e=>({[f.laptopX]:e}),phone:e=>({[f.phone]:e}),tablet:e=>({[f.tablet]:e}),tabletX:e=>({[f.tabletX]:e}),visible:e=>({display:"none",[f[e]]:{display:"block"}}),visibleInline:e=>({display:"none",[f[e]]:{display:"inline-block"}}),wide:e=>({[f.wide]:e})}}),x=d({colors:{background:"rgb(255, 255, 255)",blueText:"#202f88",border:"rgb(230, 233, 239)",greenText:"#178f53",orangeText:"#c7541e",overlay:"#ebeef5",overlayActive:"#d9dde4",overlayHover:"#ced3db",pinkText:"#ad1680",purpleText:"#7017ab",redText:"#aa1c2f",text:"rgb(19, 19, 27)"}}),E=k({"0%":{opacity:0},"100%":{opacity:1}}),S=k({"0%":{opacity:1},"100%":{opacity:0}}),z=v("div",{alignItems:"center",borderRadius:"100%",display:"inline-flex",height:20,justifyContent:"center",overflow:"hidden",position:"relative",userSelect:"none",width:20}),T=v("div",{borderRadius:"inherit",height:"100%",position:"relative",width:"100%"}),B=v("div",{alignItems:"center",background:"$overlay",color:"$text",display:"flex",height:"100%",justifyContent:"center",lineHeight:1,textAlign:"center",width:"100%"});function R(n){/*#__PURE__*/return t.createElement(z,{css:n.css,id:n.id},n.image?/*#__PURE__*/t.createElement(T,null,/*#__PURE__*/t.createElement(e,{alt:n.fallback,layout:"fill",src:n.image})):/*#__PURE__*/t.createElement(B,null,n.fallback))}function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},W.apply(this,arguments)}function C({stroke:e="#969696",width:n=16}){/*#__PURE__*/return t.createElement("svg",{height:n,stroke:e,viewBox:"0 0 38 38",width:n,xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/t.createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/t.createElement("g",{strokeWidth:"2",transform:"translate(1 1)"},/*#__PURE__*/t.createElement("circle",{cx:"18",cy:"18",r:"18",strokeOpacity:".5"}),/*#__PURE__*/t.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},/*#__PURE__*/t.createElement("animateTransform",{attributeName:"transform",dur:"1s",from:"0 18 18",repeatCount:"indefinite",to:"360 18 18",type:"rotate"})))))}const X=v("div",{alignItems:"center",borderRadius:"$2",display:"inline-flex",fontSize:"$h6",fontWeight:500,justifyContent:"center",padding:"$1 $3",[f.phone]:{fontSize:"$p"},variants:{theme:{blue:{background:"$blueOverlay",color:"$blueText"},default:{background:"$overlayActive",color:"$text"},green:{background:"$greenOverlay",color:"$greenText"},orange:{background:"$orangeOverlay",color:"$orangeText"},pink:{background:"$pinkOverlay",color:"$pinkText"},purple:{background:"$purpleOverlay",color:"$purpleText"},red:{background:"$redOverlay",color:"$redText"}}}}),L=v("span",{display:"inline-flex",paddingRight:"$2",svg:{alignSelf:"center",height:"1.7rem",marginTop:"-0.1rem",width:"1.7rem"},verticalAlign:"middle"});function A(e){/*#__PURE__*/return t.createElement(X,{css:W({},e.css,e.inline&&{display:"inline-block",marginBottom:"0 !important",marginRight:"auto"===e.inline?"auto":`$${e.inline}`,[f.phone]:{marginRight:"auto"===e.inline?"auto":`calc($${e.inline} * 0.8)`},verticalAlign:"middle"}),id:e.id,onClick:e.onClick,theme:e.theme||"default"},e.icon&&/*#__PURE__*/t.createElement(L,null,e.icon),e.loading?/*#__PURE__*/t.createElement(C,null):e.children)}const O=v("div",{height:"100%",position:"relative",transition:"$default",variants:{borderRadius:{1:{borderRadius:"$1",img:{borderRadius:"$1"}},2:{borderRadius:"$2",img:{borderRadius:"$2"}},3:{borderRadius:"$3",img:{borderRadius:"$3"}}},hover:{false:{"&:hover":{opacity:1}},true:{"&:hover":{opacity:.7}}}},width:"100%"}),H=["borderRadius","css","hover","fillHeight"];function M(n){const{borderRadius:o,css:i,hover:r,fillHeight:a}=n,l=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t.indexOf(n=r[o])>=0||(i[n]=e[n]);return i}(n,H);/*#__PURE__*/return t.createElement(O,{borderRadius:o,hover:r,css:W({height:a||"100%"},i)},/*#__PURE__*/t.createElement(e,l))}const F=M,I={padding:{default:{padding:"$4 $5"},none:{padding:0}}},D=v("div",{background:"$overlay",border:"0.1rem solid transparent",borderRadius:"$3",display:"block",height:"100%",margin:0,paddingBlock:0,position:"relative",transition:"$default",variants:W({hover:{true:{"&:hover":{background:"$overlayHover"}}},loading:{true:{opacity:.5}},micro:{true:{background:"$background",borderRadius:"$2",borderWidth:"0.2rem",padding:"0 $3"}},theme:{default:{borderColor:"$border"},error:{background:"$orangeOverlay",borderColor:"$orangeBorder",color:"$orangeText"},success:{background:"$greenOverlay",borderColor:"$greenBorder",color:"$greenText"}}},I),width:"auto"}),j=v("div",{variants:W({},I)});function P(e){return null!=e&&e.image?/*#__PURE__*/t.createElement(D,{css:e.css,hover:e.hover,id:e.id,loading:e.loading||!1,padding:"none",theme:e.theme||"default"},e.imageCTA?/*#__PURE__*/t.createElement("a",{href:e.imageCTA,rel:"noopener noreferrer",target:e.imageTarget||"_blank"},/*#__PURE__*/t.createElement(F,{css:{img:{borderTopLeftRadius:"$3",borderTopRightRadius:"$3"}},fillHeight:e.imageHeight||"20rem",alt:e.imageAlt||"#",objectFit:"cover",layout:"fill",src:e.image.toString(),hover:!0})):/*#__PURE__*/t.createElement(F,{css:{img:{borderTopLeftRadius:"$3",borderTopRightRadius:"$3"}},fillHeight:e.imageHeight||"20rem",alt:e.imageAlt||"#",objectFit:"cover",layout:"fill",src:e.image.toString(),hover:!0}),/*#__PURE__*/t.createElement(j,{padding:"default"},e.children)):/*#__PURE__*/t.createElement(D,{css:e.css,hover:e.hover,id:e.id,loading:e.loading||!1,micro:e.micro,padding:"default",theme:e.theme||"default"},e.children)}const N=v("button",{"&:disabled":{cursor:"not-allowed",opacity:.5},"&:hover":{backgroundColor:"$overlayHover",color:"$text"},alignContent:"center",alignItems:"center",border:"0.1rem solid $overlay",borderRadius:"$1",fontSize:"$h6",fontWeight:500,padding:"$2 $3",svg:{alignSelf:"center",height:"1.9rem",marginTop:"-0.1rem",width:"1.9rem"},[f.phone]:{fontSize:"$p"},transition:"$default",variants:{block:{false:{display:"inline-block"},true:{display:"block",width:"100%"}},solid:{false:{background:"$overlayActive",color:"$text"},true:{background:"$text",color:"$background"}}},verticalAlign:"middle"}),Y=v("span",{display:"inline-flex",marginRight:"$3",verticalAlign:"middle"});function _(e){/*#__PURE__*/return t.createElement(N,W({css:W({},e.css,e.inline&&{display:"inline-block",marginBottom:"0 !important",marginRight:"auto"===e.inline?"auto":`$${e.inline}`,verticalAlign:"middle",[f.phone]:{marginRight:"auto"===e.inline?"auto":`calc($${e.inline} * 0.8)`}}),id:e.id,block:e.block||!1,solid:e.solid||!1},e),e.icon&&/*#__PURE__*/t.createElement(Y,null,e.icon),e.loading?/*#__PURE__*/t.createElement(C,null):e.children)}const J="undefined"!=typeof window?n:o;function V(e,t,n){const r=i(t);J(()=>{r.current=t},[t]),o(()=>{const t=n?.current||window;if(!t||!t.addEventListener)return;const o=e=>r.current(e);return t.addEventListener(e,o),()=>{t.removeEventListener(e,o)}},[e,n])}function q(e){const t=function(e){const t=e=>"undefined"!=typeof window&&window.matchMedia(e).matches,[n,i]=a(t(e));function r(){i(t(e))}return o(()=>{const t=window.matchMedia(e);return r(),t.addListener?t.addListener(r):t.addEventListener("change",r),()=>{t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}},[e]),n}("(prefers-color-scheme: dark)"),[n,l]=function(e,t){const n=r(()=>{if("undefined"==typeof window)return t;try{const n=window.localStorage.getItem(e);return n?function(e){try{return"undefined"===e?void 0:JSON.parse(e??"")}catch{return void console.log("parsing error on",{value:e})}}(n):t}catch(n){return console.warn(`Error reading localStorage key “${e}”:`,n),t}},[t,e]),[l,d]=a(n),c=i();c.current=t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const n=t instanceof Function?t(l):t;window.localStorage.setItem(e,JSON.stringify(n)),d(n),window.dispatchEvent(new Event("local-storage"))}catch(t){console.warn(`Error setting localStorage key “${e}”:`,t)}};const s=r(e=>c.current?.(e),[]);o(()=>{d(n())},[]);const g=r(()=>{d(n())},[n]);return V("storage",g),V("local-storage",g),[l,s]}("usehooks-ts-dark-mode",e??t??!1);return function(e,n){const r=function(){const e=i(!0);return e.current?(e.current=!1,!0):e.current}();o(()=>{r||l(t)},n)}(0,[t]),{isDarkMode:n,toggle:()=>l(e=>!e),enable:()=>l(!0),disable:()=>l(!1)}}function G(e,t,n="mousedown"){V(n,n=>{const o=e?.current;o&&!o.contains(n.target)&&t(n)})}const K=v("div",{display:"inline-flex",position:"relative"}),Q=v("div",{display:"inline-flex",position:"relative"}),U=v("div",{background:"rgba(0,0,0,0.5)",bottom:0,left:0,overflowY:"scroll",position:"fixed",right:0,top:0,transition:"$default",variants:{animation:{false:{animation:`${S} .3s ease-in-out`,animationFillMode:"forwards"},true:{animation:`${E} .1s ease-in-out`,animationFillMode:"forwards"}}},width:"100%",zIndex:"$dialog"}),Z=v("div",{background:"$background",borderRadius:"$3",left:"50%",maxHeight:"80vh",overflowY:"auto",position:"fixed",textAlign:"left",top:"50%",transform:"translate(-50%, -50%)",transition:"$default",variants:{animation:{false:{animation:`${S} .4s ease-in-out`,animationFillMode:"forwards"},true:{animation:`${E} .4s ease-in-out`,animationFillMode:"forwards"}}},width:"70rem",[f.phone]:{maxHeight:"95vh",maxWidth:"90%",width:"90%"}}),ee=v("div",{cursor:"pointer",padding:"1rem",position:"absolute",right:0,top:0,transition:"$default"});function te(e){const n=i(null),[r,l]=a(!1),[d,c]=a(!1);function s(){l(!1),setTimeout(()=>{c(!1)},420)}return G(n,()=>{s()}),V("keydown",e=>{"Escape"===e.key&&s()}),function(e=!1){const[t,n]=a(e);J(()=>{if(!t)return;const e=document.body.style.overflow,n=document.body.style.paddingRight;document.body.style.overflow="hidden";const o=document.getElementById("___gatsby"),i=o?o.offsetWidth-o.scrollWidth:0;return i&&(document.body.style.paddingRight=`${i}px`),()=>{document.body.style.overflow=e,i&&(document.body.style.paddingRight=n)}},[t]),o(()=>{t!==e&&n(e)},[e])}(r),/*#__PURE__*/t.createElement(K,{id:e.id},/*#__PURE__*/t.createElement(Q,{onClickCapture:e=>{e.persist(),l(!0),c(!0)}},e.trigger),d&&/*#__PURE__*/t.createElement(U,{animation:r},/*#__PURE__*/t.createElement(Z,{animation:r,css:e.css,ref:n},/*#__PURE__*/t.createElement(P,{css:{"&:hover":{background:"$overlay"},paddingBottom:"$6",paddingTop:"$6",[f.phone]:{paddingBottom:"$5",paddingTop:"$5"}}},/*#__PURE__*/t.createElement(ee,{onClick:()=>s()},/*#__PURE__*/t.createElement(_,null,"Close")),e.children))))}const ne=v("div",{margin:"0 auto",variants:{theme:{blue:{border:"0.1rem solid $blue"},default:{border:"0.1rem solid $overlayActive"},orange:{border:"0.1rem solid $orange"},pink:{border:"0.1rem solid $pink"},purple:{border:"0.1rem solid $purple"},red:{border:"0.1rem solid $red"}}},width:"100%"});function oe(e){/*#__PURE__*/return t.createElement(ne,{css:W({},e.css,e.top&&{marginTop:`$${e.top}`,[f.phone]:{marginTop:`calc($${e.top} * 0.9)`}},e.bottom&&{marginBottom:`$${e.bottom}`,[f.phone]:{marginBottom:`calc($${e.bottom} * 0.9)`}}),id:e.id,theme:e.theme||"default"})}const ie=v("div",{marginBlockEnd:0,marginBlockStart:0});function re(e){/*#__PURE__*/return t.createElement(ie,{css:W({},e.top&&{paddingTop:`$${e.top}`,[f.phone]:{paddingTop:`calc($${e.top} * 0.9)`}},e.bottom&&{paddingBottom:`$${e.bottom}`,[f.phone]:{paddingBottom:`calc($${e.bottom} * 0.9)`}},e.css),id:e.id},e.children)}const ae=v("div",{"&:focus-within":{background:"$overlayHover"},"&:hover":{background:"$overlayHover"},"*":{verticalAlign:"middle"},alignContent:"center",alignSelf:"center",background:"$overlayActive",borderRadius:"$2",display:"inline-flex",justifyContent:"center",maxWidth:"80%",padding:"$2 $3",position:"relative",transition:"$default",variants:{disabled:{true:{cursor:"not-allowed",opacity:"0.5"}},state:{default:{border:"0.1rem solid $border"},error:{border:"0.2rem solid $redOverlay"},success:{border:"0.2rem solid $greenOverlay"},warning:{border:"0.2rem solid $orangeOverlay"}}},width:"100%"}),le=v("input",{"&:focus":{outline:"none"},appearance:"none",backgroundColor:"transparent",border:"none",color:"$text",fontSize:"1.6rem !important",margin:"0",maxWidth:"100%",outline:"none",padding:"0",textAlign:"left",transition:"$default",width:"100%"}),de=v("div",{button:{ft:"1.4rem",lineHeight:"$1",marginLeft:"$2",paddingBottom:"$1",paddingLeft:"$3",paddingRight:"$3",paddingTop:"$1"},display:"inline-flex",height:"100%",marginLeft:"$3",position:"relative",svg:{height:"1.85rem",width:"auto"},verticalAlign:"middle",width:"auto"});function ce(e){const[n,o]=a(e.value||""),[i,r]=a(!1);/*#__PURE__*/return t.createElement(ae,{css:e.css,disabled:e.disabled,id:e.id,state:e.success?"success":e.warning?"warning":e.error?"error":"default"},/*#__PURE__*/t.createElement(le,{css:W({maxWidth:e.maxWidth||"100%"},e.css),disabled:e.disabled,onChange:function(t){o(t.target.value),e.onChange&&e.onChange(t)},placeholder:e.placeholder,value:n}),(e.error||e.success||e.warning||e.loading||e.submit||e.copy)&&/*#__PURE__*/t.createElement(de,null,e.error&&/*#__PURE__*/t.createElement(A,{icon:/*#__PURE__*/t.createElement(c,{weight:"duotone"}),theme:"red"},e.errorMessage||"Error"),e.success&&/*#__PURE__*/t.createElement(A,{icon:/*#__PURE__*/t.createElement(s,{weight:"duotone"}),theme:"green"},e.successMessage||"Success"),e.warning&&/*#__PURE__*/t.createElement(A,{icon:/*#__PURE__*/t.createElement(c,{weight:"duotone"}),theme:"orange"},e.warningMessage||"Warning"),e.loading&&/*#__PURE__*/t.createElement(A,null,/*#__PURE__*/t.createElement(C,null)),e.copy&&/*#__PURE__*/t.createElement(_,{icon:/*#__PURE__*/t.createElement(g,i?{opacity:.4,weight:"duotone"}:{weight:"duotone"}),onClick:function(){e.copy&&(navigator.clipboard.writeText(n),r(!0),setTimeout(()=>{r(!1)},3e3))}},"Copy"),e.submit&&e.submitFunction&&/*#__PURE__*/t.createElement(_,{disabled:!e.submitValid,onClick:()=>e.submitFunction(n),solid:!0},e.submit)))}const se=v("div",{position:"relative",width:"auto"}),ge=v("div",{display:"inline-flex",position:"relative",width:"auto"}),me=v("div",{background:"$background",borderRadius:"$2",fontSize:"1.5rem",lineBreak:"auto",overflowY:"auto",position:"absolute",top:"120%",transition:"$default",variants:{animation:{false:{animation:`${S} .4s`,animationFillMode:"forwards"},true:{animation:`${E} .4s`,animationFillMode:"forwards"}}},width:"auto",zIndex:"$popover"});function he(e){const n=i(null),[o,r]=a(!1),[l,d]=a(!1);function c(){r(!1),setTimeout(()=>{d(!1)},420)}return G(n,()=>c()),/*#__PURE__*/t.createElement(se,{css:e.css,id:e.id},/*#__PURE__*/t.createElement(ge,{onClick:function(){e.type&&"click"!==e.type||(o?c():(r(!0),d(!0)))},onMouseEnter:function(){"hover"===e.type&&(r(!0),d(!0))},onMouseLeave:function(){"hover"===e.type&&c()}},e.trigger),l&&/*#__PURE__*/t.createElement(me,{animation:o,ref:n},/*#__PURE__*/t.createElement(P,{micro:!0},e.children)))}const pe=v("div",{background:"$background",borderRadius:"$2",boxShadow:"0 0.5rem 0.25rem rgba(0, 0, 0, 0.05)",cursor:"pointer",fontSize:"1.6rem",fontWeight:500,height:"auto",lineHeight:"2",marginTop:"$3",overflow:"hidden",position:"relative",transition:"$default",variants:{animation:{false:{animation:`${S} .3s`,animationFillMode:"forwards"},true:{animation:`${E} .4s`,animationFillMode:"forwards"}}},width:"100%"}),ue=v("div",{bottom:"$3",position:"fixed",right:"$3",zIndex:"$toast"});function fe(e){const{toasts:n,handlers:o}=u(),{startPause:i,endPause:r}=o;return V("keydown",e=>{"Escape"===e.key&&p.dismiss()}),/*#__PURE__*/t.createElement(ue,W({onMouseEnter:i,onMouseLeave:r},e),n.map(e=>{var n;return e.duration=5e3,/*#__PURE__*/t.createElement(pe,{animation:e.visible,key:e.id,onClick:()=>p.dismiss(e.id)},/*#__PURE__*/t.createElement(P,{css:{paddingBlock:0},micro:!0,theme:"success"===e.type?"success":"error"===e.type?"error":"default"},e.message&&e.message.toString().length>50?`${e.message.toString().substring(0,50)}...`:null==(n=e.message)?void 0:n.toString()))}))}const $e=v("div",{background:"$background",color:"$text",minHeight:"100vh",position:"relative"}),be=y({"@import":'url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap")',"*":{MozOsxFontSmoothing:"grayscale",WebkitAppearance:"none",WebkitFontSmoothing:"antialiased",boxSizing:"inherit",letterSpacing:"normal",marginBlockEnd:0,marginBlockStart:0,marginInlineEnd:0,marginInlineStart:0,outline:"none",paddingBlockEnd:0,paddingBlockStart:0,paddingInlineEnd:0,paddingInlineStart:0,wordSpacing:"normal"},"*:after":{boxSizing:"inherit"},"*:before":{boxSizing:"inherit"},a:{color:"inherit",textDecoration:"none"},body:{backgroundColor:"inherit",border:0,color:"$text",fontFamily:"$default",fontSize:"1.6rem",margin:0,overflowX:"hidden",overflowY:"auto",padding:0,[`.${$}`]:{background:"$background",color:"$text"},[`.${x}`]:{background:"$background",color:"$text"}},button:{"&::-moz-focus-inner":{border:0,outline:0,outlineOffset:0,padding:0},"&:active":{outline:0},"&:focus":{outline:0},MozOsxFontSmoothing:"grayscale",WebkitAppearance:"none",WebkitFontSmoothing:"antialiased",appearance:"none",background:"transparent",border:0,cursor:"pointer",font:"$default",fontFamily:"inherit",margin:0,outline:"none",overflow:"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"auto"},html:{MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",fontSize:"62.5%",lineHeight:"1.5",textRendering:"optimizeLegibility"},svg:{verticalAlign:"middle"}});function ve(e){const{isDarkMode:n}=q(!0),[i,r]=a(!1);return be(),o(()=>{r(!0)},[]),i?/*#__PURE__*/t.createElement($e,{css:e.css,className:n?$.toString():x.toString()},/*#__PURE__*/t.createElement(fe,null),e.children):/*#__PURE__*/t.createElement("div",null)}function we(e){const{isDarkMode:n,toggle:o}=q(!0);/*#__PURE__*/return t.createElement(_,{css:e,onClick:o},/*#__PURE__*/t.createElement(n?m:h,{weight:"duotone"}))}const ye=v("div",{"*":{boxSizing:"border-box"},display:"flex",flexDirection:"row",flexFlow:"row wrap",maxWidth:"100%",minWidth:"100%",width:"100%"}),ke=v("div",{flex:"1 1 auto",maxWidth:"100%",paddingLeft:"$3",paddingRight:"$3",width:"100%"});function xe(e){return"row"===e.direction?/*#__PURE__*/t.createElement(ye,{css:W({},e.css,{"*":{alignItems:e.flex||"initial"},alignItems:e.flex||"initial"},e.top&&{paddingTop:`$${e.top}`,[f.phone]:{paddingTop:`calc($${e.top} * 0.9)`}},e.bottom&&{paddingBottom:`$${e.bottom}`,[f.phone]:{paddingBottom:`calc($${e.bottom} * 0.9)`}}),id:e.id},e.children):/*#__PURE__*/t.createElement(ke,{css:W({},e.top&&{paddingTop:`$${e.top}`,[f.phone]:{paddingTop:`calc($${e.top} * 0.9)`}},e.bottom&&{paddingBottom:`$${e.bottom}`,[f.phone]:{paddingBottom:`calc($${e.bottom} * 0.9)`}},e.minimal&&{paddingLeft:"0!important",paddingRight:"0!important"},{textAlign:e.align,[f.phone]:{flex:e.widthPhone?`0 0 ${e.widthPhone}%`:"0 0 100%",marginLeft:e.offsetPhone?`${e.offsetPhone}%`:0,width:e.widthPhone?`${e.widthPhone}%`:"100%"},[f.tabletX]:{flex:e.widthTablet?`0 0 ${e.widthTablet}%`:`0 0 ${e.width}%`,marginLeft:e.offsetTablet?`${e.offsetTablet}%`:`${e.offset}%`,width:e.widthTablet?`${e.widthTablet}%`:`${e.width}%`},[f.laptopX]:{flex:e.widthLaptop?`0 0 ${e.widthLaptop}%`:`0 0 ${e.width}%`,marginLeft:e.offsetLaptop?`${e.offsetLaptop}%`:`${e.offset}%`,width:e.widthLaptop?`${e.widthLaptop}%`:`${e.width}%`},[f.desktopX]:{flex:e.widthDesktop?`0 0 ${e.widthDesktop}%`:`0 0 ${e.width}%`,marginLeft:e.offsetDesktop?`${e.offsetDesktop}%`:`${e.offset}%`,width:e.widthDesktop?`${e.widthDesktop}%`:`${e.width}%`},[f.wide]:{flex:e.widthWide?`0 0 ${e.widthWide}%`:`0 0 ${e.width}%`,marginLeft:e.offsetWide?`${e.offsetWide}%`:`${e.offset}%`,width:e.widthWide?`${e.widthWide}%`:`${e.width}%`}},e.css),id:e.id},e.children)}const Ee=v("table",{"*":{verticalAlign:"middle"},borderRadius:"$1",borderSpacing:0,display:"inline-table",fontSize:"1.5rem",overflowX:"auto",[f.phone]:{display:"block",paddingBottom:"$3"},width:"100%"}),Se=v("thead",{borderBottom:"0.1rem solid $border",textAlign:"left",width:"100%"}),ze=v("tbody",{width:"100%"}),Te=v("tr",{borderBottom:"0.1rem solid $overlay",borderRadius:"$3","tbody > &:hover":{background:"$overlay"},transition:"$default"}),Be=v("td",{"&:last-child":{textAlign:"right"},padding:"$3 $3 $3 $3",whiteSpace:"nowrap"}),Re=v("th",{"&:last-child":{textAlign:"right"},fontSize:"1.4rem",fontWeight:"500",opacity:.6,padding:"0 $3 $4 $3"}),We=e=>/*#__PURE__*/t.createElement(Ee,e),Ce=e=>/*#__PURE__*/t.createElement(Se,e),Xe=e=>/*#__PURE__*/t.createElement(ze,e),Le=e=>/*#__PURE__*/t.createElement(Te,e),Ae=e=>/*#__PURE__*/t.createElement(Be,e),Oe=e=>/*#__PURE__*/t.createElement(Re,e),He=v("div",{"&:last-child":{marginBottom:"0!important"},display:"block",variants:{bold:{false:{fontWeight:"inherit"},true:{fontWeight:"700"}},size:{h1:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h1",fontWeight:"$h1",lineHeight:"$h1",[f.phone]:{fontSize:"calc($h1 * 0.82)"},[f.tabletX]:{fontSize:"calc($h1 * 0.9)"},[f.laptopX]:{fontSize:"calc($h1 * 0.92)"}},h2:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h2",fontWeight:"$h2",lineHeight:"$h2",[f.phone]:{fontSize:"calc($h2 * 0.86)"},[f.tabletX]:{fontSize:"calc($h2 * 0.92)"},[f.laptopX]:{fontSize:"calc($h2 * 0.94)"}},h3:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h3",fontWeight:"$h3",lineHeight:"$h3",[f.phone]:{fontSize:"calc($h3 * 0.86)"},[f.tabletX]:{fontSize:"calc($h3 * 0.92)"},[f.laptopX]:{fontSize:"calc($h3 * 0.94)"}},h4:{"&:not(:last-child)":{marginBottom:"$3"},fontSize:"$h4",fontWeight:"$h4",lineHeight:"$h4",[f.phone]:{fontSize:"calc($h4 * 0.88)"},[f.tabletX]:{fontSize:"calc($h4 * 0.94)"},[f.laptopX]:{fontSize:"calc($h4 * 0.96)"}},h5:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h5",fontWeight:"$h5",lineHeight:"$h5",[f.phone]:{fontSize:"calc($h5 * 0.92)"},[f.tabletX]:{fontSize:"calc($h5 * 0.96)"},[f.laptopX]:{fontSize:"calc($h5 * 0.98)"}},h6:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$h6",fontWeight:"$h6",lineHeight:"$h6",opacity:"0.77",[f.phone]:{fontSize:"calc($h6 * 0.9)"},[f.tabletX]:{fontSize:"calc($h6 * 0.94)"},[f.laptopX]:{fontSize:"calc($h6 * 0.96)"}},p:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$p",fontWeight:"$p",lineHeight:"$p",[f.phone]:{fontSize:"calc($p * 0.9)"},[f.tabletX]:{fontSize:"calc($p * 0.96)"},[f.laptopX]:{fontSize:"calc($p * 0.98)"}},small:{"&:not(:last-child)":{marginBottom:"$4"},fontSize:"$small",fontWeight:"$small",lineHeight:"$small",[f.phone]:{fontSize:"calc($small * 0.9)"},[f.tabletX]:{fontSize:"calc($small * 0.96)"},[f.laptopX]:{fontSize:"calc($small * 0.98)"}},span:{fontSize:"inherit",fontWeight:"inherit",lineHeight:"inherit"}}}});function Me(e){/*#__PURE__*/return t.createElement(He,{css:W({},e.css,e.top&&{paddingTop:`$${e.top}`,[f.phone]:{paddingTop:`calc($${e.top} * 0.9)`}},e.bottom&&{paddingBottom:`$${e.bottom}`,[f.phone]:{paddingBottom:`calc($${e.bottom} * 0.9)`}},e.inline&&{display:"inline-block",marginBottom:"0 !important",marginRight:"auto"===e.inline?"auto":`$${e.inline}`,verticalAlign:"middle",[f.phone]:{marginRight:"auto"===e.inline?"auto":`calc($${e.inline} * 0.8)`}}),as:e.as,bold:e.bold,size:e.as},e.children)}const Fe=v("div",{paddingLeft:"$2",paddingRight:"$2",variants:{container:{false:{minWidth:"100%"},true:{margin:"auto",[f.phone]:{width:"98%"},[f.tabletX]:{width:"98%"},[f.laptopX]:{maxWidth:"1400px",width:"97%"},[f.desktopX]:{maxWidth:"1600px",width:"96%"},[f.wide]:{maxWidth:"1850px",width:"95%"}}}},width:"100%"});function Ie(e){/*#__PURE__*/return t.createElement(Fe,{container:e.container,css:W({},e.css,e.top&&{paddingTop:`$${e.top}`,[f.phone]:{paddingTop:`calc($${e.top} * 0.9)`}},e.bottom&&{paddingBottom:`$${e.bottom}`,[f.phone]:{paddingBottom:`calc($${e.bottom} * 0.9)`}}),id:e.id},e.children)}export{R as Avatar,A as Badge,P as Box,_ as Button,te as Dialog,oe as Divider,re as Element,M as Image,ce as Input,C as Loading,he as Popover,ve as Provider,we as ProviderToggle,xe as Stack,We as Table,Xe as TableBody,Ae as TableCell,Ce as TableHead,Oe as TableHeadCell,Le as TableRow,Me as Text,F as ThreesImage,fe as Toast,Ie as View,f as breakpoints,b as css,w as getCssText,x as lightTheme,v as styled,$ as theme};
//# sourceMappingURL=index.modern.js.map
