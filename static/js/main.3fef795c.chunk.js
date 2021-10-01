(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{18:function(e,t,o){},20:function(e,t,o){},21:function(e,t,o){},22:function(e,t,o){},23:function(e,t,o){},29:function(e,t,o){},30:function(e,t,o){},31:function(e,t,o){},32:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o.n(n),a=o(6),r=o.n(a),l=(o(18),o(8)),s=o(3);var u=function(e,t){var o=c.a.useState(!0),n=Object(s.a)(o,2),a=n[0],r=n[1],l=c.a.useState(null),u=Object(s.a)(l,2),d=u[0],i=u[1],j=c.a.useState(t),b=Object(s.a)(j,2),m=b[0],O=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),O(o),r(!1)}catch(d){i(d)}}),1e3)})),{item:m,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),O(t)}catch(d){i(d)}},loading:a,error:d}},d=o(1),i=c.a.createContext();function j(e){var t=u("TODOS_V1",[]),o=t.item,n=t.saveItem,a=t.loading,r=t.error,j=c.a.useState(""),b=Object(s.a)(j,2),m=b[0],O=b[1],p=c.a.useState(!1),f=Object(s.a)(p,2),h=f[0],x=f[1],v=o.filter((function(e){return!!e.completed})).length,T=o.length,g=o.filter((function(e){return e.text.toLowerCase().includes(m.toLowerCase())}));return Object(d.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:T,completedTodos:v,searchValue:m,setSearchValue:O,searchedTodos:g,completeATodo:function(e){var t=Object(l.a)(o);t[e].completed=!0,n(t)},deleteATodo:function(e){var t=Object(l.a)(o);t.splice(e,1),n(t)},addTodo:function(e){var t=Object(l.a)(o);t.push({completed:!1,text:e}),n(t)},openModal:h,setOpenModal:x},children:e.children})}o(20);function b(){var e=c.a.useContext(i),t=e.totalTodos,o=e.completedTodos;return Object(d.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",o," de ",t," Tareas"]})}o(21);function m(){var e=c.a.useContext(i),t=e.searchValue,o=e.setSearchValue;return Object(d.jsx)("input",{className:"TodoSearch",value:t,placeholder:"Buscar...",onChange:function(e){o(e.target.value)}})}o(22);function O(e){return Object(d.jsx)("ul",{children:e.children})}o(23);var p=o(11),f=o(12);function h(e){return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)(p.a,{icon:f.a,className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(d.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(d.jsx)(p.a,{icon:f.b,className:"Icon Icon-delete",onClick:e.onDelete,children:"x"})]})}o(29);function x(e){return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"".concat(e.openModal?"\xd7":"+")})}o(30);function v(e){var t=e.children;return r.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}o(31);var T=function(){var e=c.a.useState(""),t=Object(s.a)(e,2),o=t[0],n=t[1],a=c.a.useContext(i),r=a.addTodo,l=a.setOpenModal;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(o),l(!1)},children:[Object(d.jsx)("label",{children:"Nueva tarea:"}),Object(d.jsx)("textarea",{onChange:function(e){n(e.target.value)},value:o,placeholder:"Escribe tu tarea..."}),Object(d.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(d.jsx)("button",{type:"button",onClick:function(){l(!1)},className:"TodoForm-button TodoForm-button-cancel",children:"Cancelar"}),Object(d.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button-add",children:"A\xf1adir"})]})]})},g=o(13),C=function(){return Object(d.jsx)(g.a,{style:{width:"95%",margin:"0px auto"},viewBox:"0 0 150 150",foregroundColor:"#6d9886",backgroundColor:"#7EB5A6"})};var S=function(){var e=c.a.useContext(i),t=e.error,o=e.loading,n=e.searchedTodos,a=e.completeATodo,r=e.deleteATodo,l=e.openModal,s=e.setOpenModal;return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(m,{}),Object(d.jsxs)(O,{children:[o&&Object(d.jsx)(C,{}),t&&Object(d.jsx)("p",{style:{textAlign:"center"},children:"Ha ocurrido un error"}),!o&&!n.length&&Object(d.jsx)("p",{style:{textAlign:"center"},children:"Crea tu primer TODO!"}),n.map((function(e,t){return Object(d.jsx)(h,{text:e.text,completed:e.completed,onComplete:function(){return a(t)},onDelete:function(){return r(t)}},t)}))]}),l&&Object(d.jsx)(v,{children:Object(d.jsx)(T,{})}),Object(d.jsx)(x,{setOpenModal:s,openModal:l})]})};var I=function(){return Object(d.jsx)(j,{children:Object(d.jsx)(S,{})})};r.a.render(Object(d.jsx)(I,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3fef795c.chunk.js.map