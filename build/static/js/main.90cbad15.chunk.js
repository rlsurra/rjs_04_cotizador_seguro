(this.webpackJsonp04_cotizador_seguro=this.webpackJsonp04_cotizador_seguro||[]).push([[0],{10:function(e,n,a){e.exports=a(17)},15:function(e,n,a){},16:function(e,n,a){},17:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(7),o=a.n(c),l=(a(15),a(3)),i=a(1),u=a(2);function m(){var e=Object(i.a)(["\n    font-size: 2rem;\n    margin:0;\n    font-family: 'Slabo 27px', serif;\n    text-align: center;\n"]);return m=function(){return e},e}function s(){var e=Object(i.a)(["\n    background-color: #26C6DA;\n    padding: 10px;\n    font-weight: bold;\n    color: #FFFFFF\n\n"]);return s=function(){return e},e}var d=u.a.header(s()),v=u.a.h1(m()),p=function(e){var n=e.titulo;return r.a.createElement(d,null,r.a.createElement(v,null,n))},f=a(4),E=a(5);function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(){var e=Object(i.a)(["\n    background-color: red;\n    width: 100%;\n    color: white;\n    text-align: center;\n    margin-top: 1rem;\n    padding: 0.5rem;\n    box-sizing: border-box;\n"]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n    margin-top: 10px;\n    padding: 0.5rem;\n    width: 100%;\n    background-color: #00838F;\n    font-size: 16px;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    border: none;\n    transition: background-color .3s ease;\n\n    &:hover {\n        cursor: pointer;\n        background-color: #26C6DA;\n    }\n"]);return h=function(){return e},e}function k(){var e=Object(i.a)(["\n    margin: 0 1rem;\n"]);return k=function(){return e},e}function j(){var e=Object(i.a)(["\n    display: block;\n    width: 100%;\n    padding: 0.5rem;\n    border: 1px solid #e1e1e1;\n    -webkit-appearance: none;\n"]);return j=function(){return e},e}function O(){var e=Object(i.a)(["\n    flex: 0 0 100px;\n"]);return O=function(){return e},e}function x(){var e=Object(i.a)(["\n    display: flex;\n    margin-bottom: 1rem;\n    align-items: center;\n"]);return x=function(){return e},e}var w=u.a.div(x()),F=u.a.label(O()),C=u.a.select(j()),N=u.a.input(k()),S=u.a.button(h()),y=u.a.div(g()),z=function(e){var n=e.setResumen,a=e.setCargando,c=Object(t.useState)({marca:"",anio:"",plan:""}),o=Object(l.a)(c,2),i=o[0],u=o[1],m=Object(t.useState)(!1),s=Object(l.a)(m,2),d=s[0],v=s[1],p=i.marca,b=i.anio,g=i.plan,h=function(e){u(Object(E.a)(Object(E.a)({},i),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==p.trim()&&""!==b.trim()&&""!==g.trim()){v(!1);var t=2e3,r=function(e){return(new Date).getFullYear()-e}(b),c=function(e){var n;switch(e){case"europeo":n=.3;case"asiatico":n=.05;case"americano":n=.15}return n}(p),o=function(e){return"basico"===e?.2:.5}(g);t=t+t*c-t*(.03*r)+t*o,t=parseFloat(t).toFixed(2),a(!0),setTimeout((function(){a(!1),n({resultado:t,datos:i})}),2e3)}else v(!0)}},r.a.createElement(w,null,r.a.createElement(F,null,"Marca"),r.a.createElement(C,{name:"marca",value:p,onChange:h},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"americano"},"Americano"),r.a.createElement("option",{value:"europeo"},"Europeo"),r.a.createElement("option",{value:"asiatico"},"Asiatico"))),r.a.createElement(w,null,r.a.createElement(F,null,"A\xf1o"),r.a.createElement(C,{name:"anio",value:b,onChange:h},r.a.createElement("option",{value:""},"-- Seleccione --"),r.a.createElement("option",{value:"2021"},"2021"),r.a.createElement("option",{value:"2020"},"2020"),r.a.createElement("option",{value:"2019"},"2019"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2015"},"2015"),r.a.createElement("option",{value:"2014"},"2014"),r.a.createElement("option",{value:"2013"},"2013"),r.a.createElement("option",{value:"2012"},"2012"))),r.a.createElement(w,null,r.a.createElement(F,null,"Plan"),r.a.createElement(N,{type:"radio",name:"plan",value:"basico",checked:"basico"===g,onChange:h})," Basico",r.a.createElement(N,{type:"radio",name:"plan",value:"completo",checked:"completo"===g,onChange:h})," Completo"),r.a.createElement(S,{type:"submit"},"Cotizar"),d?r.a.createElement(y,null," Todos los campos son obligatorios "):null)};function A(){var e=Object(i.a)(["\n    padding: 1rem;\n    text-align: center;\n    background-color: #00838F;\n    color: #FFF;\n    margin-top: 1rem;\n\n"]);return A=function(){return e},e}var D=u.a.div(A()),_=function(e){var n=e.datos,a=n.marca,t=n.anio,c=n.plan;return""===a||""===t||""===c?null:r.a.createElement(D,null,r.a.createElement("h2",null,"Resumen de cotizacion"),r.a.createElement("ul",null,r.a.createElement("li",null,"Marca: ",b(a)),r.a.createElement("li",null,"A\xf1o: ",t),r.a.createElement("li",null,"Plan: ",b(c))))};function B(){var e=Object(i.a)(["\n        color: #00838F;\n        padding: 1rem;\n        text-transform: uppercase;\n        font-weight: bold;\n        margin: 0;\n    "]);return B=function(){return e},e}function M(){var e=Object(i.a)(["\n        text-align: center;\n        padding: .5rem;\n        border: 1px solid #26C6DA;\n        background-color: rgb(127,224,237);\n        margin-top: 1rem;\n        position: relative;\n    "]);return M=function(){return e},e}var R=function(e){var n=e.resultado;if(0===n)return null;var a=u.a.div(M()),t=u.a.p(B());return r.a.createElement(a,null,r.a.createElement(t,null," El total es $ ",n," "))},J=(a(16),function(){return r.a.createElement("div",{className:"sk-circle"},r.a.createElement("div",{className:"sk-circle1 sk-child"}),r.a.createElement("div",{className:"sk-circle2 sk-child"}),r.a.createElement("div",{className:"sk-circle3 sk-child"}),r.a.createElement("div",{className:"sk-circle4 sk-child"}),r.a.createElement("div",{className:"sk-circle5 sk-child"}),r.a.createElement("div",{className:"sk-circle6 sk-child"}),r.a.createElement("div",{className:"sk-circle7 sk-child"}),r.a.createElement("div",{className:"sk-circle8 sk-child"}),r.a.createElement("div",{className:"sk-circle9 sk-child"}),r.a.createElement("div",{className:"sk-circle10 sk-child"}),r.a.createElement("div",{className:"sk-circle11 sk-child"}),r.a.createElement("div",{className:"sk-circle12 sk-child"}))});function P(){var e=Object(i.a)(["\n  background-color: #FFF;\n  padding: 3rem;\n"]);return P=function(){return e},e}function T(){var e=Object(i.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n"]);return T=function(){return e},e}var W=u.a.div(T()),$=u.a.div(P());var I=function(){var e=Object(t.useState)({datos:{marca:"",plan:"",anio:""},resultado:0}),n=Object(l.a)(e,2),a=n[0],c=n[1],o=a.datos,i=a.resultado,u=Object(t.useState)(!1),m=Object(l.a)(u,2),s=m[0],d=m[1];return r.a.createElement(W,null,r.a.createElement(p,{titulo:"Cotizador de seguros"}),r.a.createElement($,null,r.a.createElement(z,{setResumen:c,setCargando:d}),s?r.a.createElement(J,null):null,s?null:r.a.createElement(t.Fragment,null,r.a.createElement(_,{datos:o}),r.a.createElement(R,{resultado:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.90cbad15.chunk.js.map