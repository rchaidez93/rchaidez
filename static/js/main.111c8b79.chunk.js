(this["webpackJsonprichard-website"]=this["webpackJsonprichard-website"]||[]).push([[0],{66:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t(0),i=t.n(n),c=t(15),o=t.n(c),s=t(47),l=t(92),d=t(30);function x(e,a){switch(a.type){case"ON":return{darkMode:!0};case"OFF":return{darkMode:!1};default:throw new Error}}var b=i.a.createContext(),j=i.a.createContext();function h(e){var a=e.children,t=i.a.useReducer(x,{darkMode:!1}),n=Object(d.a)(t,2),c=n[0],o=n[1];return Object(r.jsx)(b.Provider,{value:c,children:Object(r.jsx)(j.Provider,{value:o,children:a})})}function p(){var e=i.a.useContext(b);if(void 0===e)throw new Error("useDarkModeState must be used within a darkModeProvider");return e}var m=function(e){var a=e.children,t=p().darkMode;console.log(t);var n=i.a.useMemo((function(){return Object(s.a)({palette:{type:t?"dark":"light"}})}),[t]);return Object(r.jsx)(l.a,{theme:n,children:a})},u=t(101),g=t(21),O=t(17),f=t.n(O),v=t(99),w=t(94),F=t(70),k=t(49),A=t(100),C=t(93),y={footer:{padding:"3rem 0"}},S=Object(C.a)(y),E=function(){var e=S();return Object(r.jsx)("footer",{className:e.footer,children:Object(r.jsx)(w.a,{container:!0,justify:"center",alignItems:"center",children:Object(r.jsx)(w.a,{item:!0,children:"Contact: rchaidez.dev@gmail.com"})})})},M=t(11),I=t(95),R=t(96),L={root:{flexGrow:1},title:{flexGrow:1},appBar:{color:"#555",backgroundColor:"#fff",boxShadow:"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",transition:"all 150ms ease 0s"},flex:{flex:1},appResponsive:{margin:"20px 10px"},primary:{backgroundColor:"#9c27b0",color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"},info:{backgroundColor:"#00acc1",color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"},success:{backgroundColor:"#4caf50",color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"},warning:{backgroundColor:"#ff9800",color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"},danger:{backgroundColor:"#f44336",color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"},rose:{backgroundColor:"#e91e63",color:"#FFFFFF",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"},transparent:{backgroundColor:"transparent !important",boxShadow:"none",paddingTop:"25px",color:"#FFFFFF"},dark:{color:"#FFFFFF",backgroundColor:"#212121 !important",boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"},white:{border:"0",padding:"0.625rem 0",marginBottom:"20px",color:"#555",backgroundColor:"#fff !important",boxShadow:"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"},icons:{color:"inherit"}},z=t(103),N=t(45),J=t.n(N),B=t(46),V=t.n(B),D=t(97),U=t(98),G=t(104);var T=Object(C.a)(L),Y=function(e){var a,t=T(),n=p().darkMode,c=function(){var e=i.a.useContext(j);if(void 0===e)throw new Error("useDarkModeState must be used within a darkModeProvider");return e}();i.a.useEffect((function(){return e.changeColorOnScroll&&window.addEventListener("scroll",o),function(){e.changeColorOnScroll&&window.removeEventListener("scroll",o)}}));var o=function(){var a=e.color,r=e.changeColorOnScroll;window.pageYOffset>r.height?(document.body.getElementsByTagName("header")[0].classList.remove(t[a]),document.body.getElementsByTagName("header")[0].classList.add(t[r.color])):(document.body.getElementsByTagName("header")[0].classList.add(t[a]),document.body.getElementsByTagName("header")[0].classList.remove(t[r.color]))},s=e.color,l=f()((a={},Object(M.a)(a,t.appBar,!0),Object(M.a)(a,t[s],s),a));return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(I.a,{className:l,children:Object(r.jsxs)(R.a,{children:[Object(r.jsx)("div",{className:t.title,children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADrUlEQVRYhcWX228MURzHh39kti4lyotLJEgaXkQE4UGFeHF5EERIELRUxJNI8EB0T6vLotVomlq3xqVW25BSrUtdEiq2tnrZszu7s7Nmdud8PUx3zo7O6KjWnuT38pvfnPM5v+uMIJSXTxa9kTKR0D6RUOYhFBMpIqFMJJE+sWKoVAAmCaI3UjbRhzrCeOlhQfRG+vMGQCLfhXwdng1HXgE8hMIWoMhHURKIY+G1qOuNDj2VcbFLwcGgjEXX3b9nC3DyeRLZRVM6noQ0nH6hYHWDZLvJrGoKTWfmOzpjCIY0bAjY248KcKU7Baf1JZbBqfYk5vr5LVc1SLa2jDHc61Ex3+/sEVuAC52KI0B2JTWGcx0KplVSbLkftzzTdIYV9TGE5QwAIJzIoLg25h6guDaG7U0JfKIZc1M1w2C3DgRl7HmcsOg6B9LwEIrmkGbqaj6k3ANk5UlINTc42iZjRb2Eii4FcVU39dVvUzgYlC0AV7qNw669/2nqznYofw9wt4cD7A/Kpn6uP4q3g2kAwL0eFUdarAClrYbtqXaezE4J/EeAm5/4DXY9Spj6BVejGFIML7T0ajjamrQAbLoTh4dQ7HxohOZVf/rvkjArl9/xatjaZGxaWEXR3sdjG+zVcKzNCpBNuOLaGAYVHctv2ifgqAC51bDxThwFhOLWZ+4VnTHsa05YABhjmHmJ7zGlcgx9ICu5MVzXKOHqe+6RtG4c7iFGF8yupKaP2nxcAxzPuVn7D+52SdWx+W7ctNvxgJfhoDKOAL+XFwAoaYZlddaYrm3knfCHPI4Aux/xm0k5tb/pdtxiN88fnRgP5LbYslbujdbv2gjbSEof9pAVYH1AwolnybEBlAS4a2f7KFp6VTPT1zVaG8vTXs18NmO4CgoIxUeaRnNoJLArgJX1MROgsIpiaV0MP4dnQtNX1WJ7roOX7OIaY/ptazI82DUwxka0pMaIbUZnpu7MS+MgnVmTceNtHq71w98BXQNGu26zCZkrgCIfBQAkcmq78BLFl5gxJf3dfMJNr+J5cLwtib05E/J8p/0gGhXAQyiaQyoGktbEKglI0BmDkmYo8nH9mgYJ3+IZhGUdssbH9yqHQeQKYI6Pou7jyFle+SaFjv40pv7WaouqKbyvU+b3w7Ows/tdAThJAaEjDs+VxTVRnH2poPiG8yD6J4DxEuF//A86iUgoE0RC+/IIEBbEimhp3gC8Q0cEobx8slgxVCoSGv5vv+feSFj00sMCMOkXkxy+OXKh+AEAAAAASUVORK5CYII=",alt:"..."})}),Object(r.jsx)(D.a,{row:!0,children:Object(r.jsx)(U.a,{control:Object(r.jsx)(G.a,{checked:n,onChange:function(){return c({type:n?"OFF":"ON"})},name:"darkMode"}),label:"Dark Mode"})}),Object(r.jsx)(z.a,{classes:{root:t.icons},href:"https://github.com/rchaidez93",children:Object(r.jsx)(J.a,{color:"inherit",fontSize:"default"})}),Object(r.jsx)(z.a,{classes:{root:t.icons},href:"https://www.linkedin.com/in/richard-chaidez/",children:Object(r.jsx)(V.a,{color:"inherit",fontSize:"default"})})]})})})},H={parallax:{height:"90vh",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center center",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"}},K=Object(C.a)(H),P=function(e){var a,t,n=e.filter,c=e.className,o=e.children,s=e.style,l=e.image,x=e.small;t=window.innerWidth>=768?window.pageYOffset/3:0;var b=i.a.useState("translate3d(0,"+t+"px,0)"),j=Object(d.a)(b,2),h=j[0],p=j[1];i.a.useEffect((function(){return window.innerWidth>=768&&window.addEventListener("scroll",m),function(){window.innerWidth>=768&&window.removeEventListener("scroll",m)}}));var m=function(){var e=window.pageYOffset/3;p("translate3d(0,"+e+"px,0)")},u=K(),O=f()((a={},Object(M.a)(a,u.parallax,!0),Object(M.a)(a,u.filter,n),Object(M.a)(a,u.small,x),Object(M.a)(a,c,void 0!==c),a));return Object(r.jsx)("div",{className:O,style:Object(g.a)(Object(g.a)({},s),{},{backgroundImage:"url("+l+")",transform:h}),children:o})},W=t.p+"static/media/sitemainbackground.8129069f.jpg",q=t.p+"static/media/me.18214c53.jpg",X={profile:{"& img":{maxWidth:"160px",width:"100%",margin:"0 auto",transform:"translate3d(0, -50%, 0)",background:t(32).a[400]}},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"}},Q={projects:[{name:"Login and Portfolio Template - Mern stack",link:"https://github.com/rchaidez93/mern_login_website"},{name:"Aws S3 bucket storage app - Java using Docker",link:"https://github.com/rchaidez93/myportfolio"},{name:"User CRUD app - Java",link:"https://github.com/rchaidez93/crud_users"},{name:"React Dnd - React",link:"https://github.com/rchaidez93/reactdnd-imagereplacetarget"},{name:"Chat app - Mern stack",link:"https://github.com/rchaidez93/ChatApp"}],skills:[{label:"PHP",value:98},{label:"HTML",value:99},{label:"CSS",value:99},{label:"Javascript",value:95},{label:"Java",value:90},{label:"MySQL",value:90},{label:"React",value:90},{label:"Swift",value:80},{label:"Kotlin",value:85},{label:"C#",value:75},{label:"C++",value:80}]},Z=t(105),_=t(102),$=Object(C.a)({root:{width:"100%"}}),ee=function(e){var a=e.label,t=e.value,n=$();return Object(r.jsx)(_.a,{className:n.root,children:Object(r.jsxs)(_.a,{display:"flex",alignItems:"center",children:[Object(r.jsxs)(_.a,{width:"100%",mr:1,children:[Object(r.jsx)(k.a,{variant:"caption",children:a}),Object(r.jsx)(Z.a,{variant:"determinate",value:t})]}),Object(r.jsx)(_.a,{minWidth:35,children:Object(r.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(t),"%")})})]})})},ae=Object(C.a)(X),te=function(e){var a=ae(),t=Object.assign({},e),n=f()(a.imgRaised,a.imgRoundedCircle,a.imgFluid),i=Q.projects;return Object(r.jsxs)("div",{children:[Object(r.jsx)(Y,Object(g.a)({color:"transparent",brand:"Richard Chaidez",fixed:!0,changeColorOnScroll:{height:200,color:"white"}},t)),Object(r.jsx)(P,{small:!0,filter:!0,image:W}),Object(r.jsx)(v.a,{maxWidth:"xl",children:Object(r.jsxs)(F.a,{elevation:20,children:[Object(r.jsx)(w.a,{container:!0,justify:"center",children:Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:6,children:Object(r.jsxs)("div",{className:a.profile,children:[Object(r.jsx)("div",{style:{textAlign:"center"},children:Object(r.jsx)("img",{src:q,alt:"...",className:n})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(k.a,{align:"center",variant:"h3",children:"Richard Chaidez"}),Object(r.jsx)(k.a,{align:"center",variant:"h6",children:"Junior Software Developer"})]})]})})}),Object(r.jsx)(w.a,{container:!0,justify:"center",children:Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:6,children:Object(r.jsx)(k.a,{variant:"caption",children:"Software Developer from St. Louis, Missouri with four years of professional experience in coding, testing, and establishing quick responsive web applications. Self-motivated, determined, and passionate about learning and increasing my skills everyday by constantly coding and studying different programming languages."})})}),Object(r.jsx)("div",{style:{paddingTop:"60px"}}),Object(r.jsx)(v.a,{maxWidth:"lg",children:Object(r.jsxs)(w.a,{container:!0,direcion:"row",spacing:6,children:[Object(r.jsx)(w.a,{item:!0,xs:12,children:Object(r.jsxs)(w.a,{container:!0,children:[Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:2,children:Object(r.jsx)(k.a,{variant:"h6",children:"Projects"})}),Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:10,children:i.map((function(e){return Object(r.jsx)(k.a,{children:Object(r.jsx)(A.a,{href:e.link,color:"inherit",children:e.name})})}))})]})}),Object(r.jsx)(w.a,{item:!0,xs:12,children:Object(r.jsxs)(w.a,{container:!0,children:[Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:2,children:Object(r.jsx)(k.a,{variant:"h6",children:"Experience"})}),Object(r.jsxs)(w.a,{item:!0,xs:12,sm:12,md:10,children:[Object(r.jsx)(k.a,{children:"Junior Software Developer at LB Networks, Chesterfield, MO"}),Object(r.jsx)(k.a,{variant:"caption",children:"Febuary 2017 - Present"}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(k.a,{children:"Developed and maintained code using Php, MySql, Javascript, Html, and CSS for LB Networks."})}),Object(r.jsx)("li",{children:Object(r.jsx)(k.a,{children:"Contributed software development expertise in the development of version releases through the software cycle, from requirements definition through successful deployment."})}),Object(r.jsx)("li",{children:Object(r.jsx)(k.a,{children:"Migrated legacy procedural code to Codeigniter\u2019s framework."})}),Object(r.jsx)("li",{children:Object(r.jsx)(k.a,{children:"Developed a new user interface using React and Material UI design."})}),Object(r.jsx)("li",{children:Object(r.jsx)(k.a,{children:"Implemented Amazon S3 cloud storage to store images."})})]})})]})]})}),Object(r.jsx)(w.a,{item:!0,xs:12,children:Object(r.jsxs)(w.a,{container:!0,children:[Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:2,children:Object(r.jsx)(k.a,{variant:"h6",children:"Education"})}),Object(r.jsxs)(w.a,{item:!0,xs:12,sm:12,md:10,children:[Object(r.jsx)(k.a,{children:"University of Missouri - St. Louis"}),Object(r.jsx)(k.a,{variant:"caption",children:"January 2014 - May 2017"}),Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Bachelor's - Computer Science"}),Object(r.jsx)("li",{children:"Minor's - Mathematics"})]})})]})]})}),Object(r.jsx)(w.a,{item:!0,xs:12,children:Object(r.jsxs)(w.a,{container:!0,children:[Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:2,children:Object(r.jsx)(k.a,{variant:"h6",children:"Skills"})}),Object(r.jsx)(w.a,{item:!0,xs:12,sm:12,md:10,children:Q.skills.map((function(e,a){return Object(r.jsx)(ee,{label:e.label,value:e.value},a)}))})]})})]})})]})}),Object(r.jsx)(E,{})]})};function re(){return Object(r.jsx)(h,{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(te,{})]})})}o.a.render(Object(r.jsx)(re,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.111c8b79.chunk.js.map