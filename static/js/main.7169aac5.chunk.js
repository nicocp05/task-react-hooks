(this["webpackJsonptask-react-hooks"]=this["webpackJsonptask-react-hooks"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),i=(c(13),c(6)),o=c(8),d=c(3),l=c(0);function j(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.task.name}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"checkbox",checked:e.task.done,onChange:function(){return e.toggleTask(e.task)}})})]},e.task.id)}function b(e){return Object(l.jsxs)("h4",{className:"bg-primary text-white text-center p-4",children:["TaskApp (",e.taskItems.filter((function(e){return!e.done})).length," tasks to do)"]})}function h(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],a=c[1];return Object(l.jsxs)("div",{className:"my-1",children:[Object(l.jsx)("input",{type:"text",className:"form-control",style:{width:"300px"},value:s,onChange:function(e){return a(e.target.value)},placeholder:"Write task"}),Object(l.jsx)("button",{className:"btn btn-primary mt-1",onClick:function(){e.callback(s),a("")},children:"Add task"})]})}function u(e){return Object(l.jsxs)("div",{className:"form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input",checked:e.isChecked,onChange:function(t){return e.callback(t.target.checked)}}),Object(l.jsxs)("label",{htmlFor:"form-check-label",children:["Show ",e.description]})]})}var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),r=Object(d.a)(a,2),O=r[0],k=r[1];Object(n.useEffect)((function(){var e=localStorage.getItem("tasks");null!=e?s(JSON.parse(e)):(s([{id:1,name:"Task One",done:!1},{id:2,name:"Task Two",done:!1},{id:3,name:"Task Three",done:!0}]),k(!0))}),[]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))}),[c]);var x=function(e){s(c.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t})))},f=function(e){return c.filter((function(t){return t.done===e})).map((function(e){return Object(l.jsx)(j,{task:e,toggleTask:x},e.id)}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{taskItems:c}),Object(l.jsx)(h,{callback:function(e){c.find((function(t){return t.id===e.id}))||s([].concat(Object(o.a)(c),[{id:c.length+1,name:e,done:!1}]))}}),Object(l.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Done"})]})}),Object(l.jsx)("tbody",{children:f(!1)})]}),Object(l.jsx)("div",{className:"bg-secondary-text-white text-center p-2",children:Object(l.jsx)(u,{description:"Completed task",isChecked:O,callback:function(e){return k(e)}})}),O&&Object(l.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Done"})]})}),Object(l.jsx)("tbody",{children:f(!0)})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(15);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.7169aac5.chunk.js.map