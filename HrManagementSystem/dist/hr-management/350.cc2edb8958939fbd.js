"use strict";(self.webpackChunkHrManagement=self.webpackChunkHrManagement||[]).push([[350],{350:(G,u,a)=>{a.r(u),a.d(u,{EmployeeModule:()=>O});var i=a(736),r=a(433),e=a(256);let s=(()=>{class t{constructor(){this.empList=[{id:1,name:"James",email:"James@gmail.com",mobile:"9856112233",gender:"Male"}]}getEmployees(){return this.empList}removeUser(n){this.empList=this.empList.filter(o=>o.id!=n)}getUsersByID(n){return this.empList.find(o=>o.id==n)}EditUser(n){const o=this.empList.findIndex(p=>p.id==n.id);null!=o&&null!=o&&(this.empList[o]=n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=a(895);function g(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * name is required "),e.qZA())}function c(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * name Not valid. "),e.qZA())}function _(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * name length "),e.qZA())}function f(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * email is required "),e.qZA())}function E(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * email Not valid format "),e.qZA())}function Z(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * mobile Length "),e.qZA())}function b(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * mobile Not valid. "),e.qZA())}function h(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * mobile Length "),e.qZA())}function y(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * mobile max Length "),e.qZA())}function U(t,m){1&t&&(e.TgZ(0,"span",18),e._uU(1," * gender is required "),e.qZA())}const T=function(){return["/employees"]};let q=(()=>{class t{constructor(n,o,p){this.employeeService=n,this.formBuilder=o,this.router=p,this.empList=[],this.EmpForm=this.formBuilder.group({id:"",name:"",email:"",mobile:"",gender:""})}ngOnInit(){this.EmpForm=this.formBuilder.group({id:"",name:new r.NI("",[r.kI.required,r.kI.pattern("^[a-zA-Z]+$")]),email:["",[r.kI.required,r.kI.email]],mobile:["",[r.kI.required,r.kI.pattern("^[0-9]+$")]],gender:["",[r.kI.required]]}),this.empList=this.employeeService.getEmployees()}initForm(){this.EmpForm=new r.cw({name:new r.NI(null,r.kI.required)})}onSubmit(){var n=this.EmpForm.value;console.log(n),this.empList.push(n),console.log(this.empList),this.router.navigate(["/"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s),e.Y36(r.qu),e.Y36(i.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-employee"]],decls:56,vars:14,consts:[[1,"row"],[1,"card","col-md-6","offset-md-3","offset-md-3"],[1,"text-center"],[1,"card-body"],[3,"formGroup","ngSubmit"],["for","id"],["type","text","formControlName","id"],["for","name"],["type","text","id","name","name","name","formControlName","name","minlength","5"],["style","color: RED;",4,"ngIf"],["for","email"],["type","text","id","email","formControlName","email"],["for","mobile"],["type","text","id","mobile","minlength","10","maxlength","10","formControlName","mobile"],["for","gender"],["type","text","id","gender","formControlName","gender"],[1,"btn","btn-warning",3,"routerLink"],["type","submit",1,"btn","btn-success",3,"disabled"],[2,"color","RED"]],template:function(n,o){1&n&&(e._UZ(0,"br")(1,"br")(2,"br"),e.TgZ(3,"div",0)(4,"div",1)(5,"div",0)(6,"h3",2),e._uU(7," Add New Employee "),e.qZA(),e._UZ(8,"hr"),e.TgZ(9,"div",3)(10,"form",4),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(11,"label",5),e._uU(12,"Id:"),e.qZA(),e._UZ(13,"br")(14,"input",6)(15,"br"),e.TgZ(16,"label",7),e._uU(17,"Name:"),e.qZA(),e._UZ(18,"br")(19,"input",8)(20,"br"),e.YNc(21,g,2,0,"span",9),e.YNc(22,c,2,0,"span",9),e.YNc(23,_,2,0,"span",9),e._UZ(24,"br"),e.TgZ(25,"label",10),e._uU(26,"Email :"),e.qZA(),e._UZ(27,"br")(28,"input",11)(29,"br"),e.YNc(30,f,2,0,"span",9),e.YNc(31,E,2,0,"span",9),e._UZ(32,"br"),e.TgZ(33,"label",12),e._uU(34,"Mobile No:"),e.qZA(),e._UZ(35,"br")(36,"input",13)(37,"br"),e.YNc(38,Z,2,0,"span",9),e.YNc(39,b,2,0,"span",9),e.YNc(40,h,2,0,"span",9),e.YNc(41,y,2,0,"span",9),e._UZ(42,"br"),e.TgZ(43,"label",14),e._uU(44,"Gender:"),e.qZA(),e._UZ(45,"br")(46,"input",15)(47,"br"),e.YNc(48,U,2,0,"span",9),e._UZ(49,"br")(50,"br"),e.TgZ(51,"button",16),e._uU(52,"Back"),e.qZA(),e._uU(53,"\xa0 "),e.TgZ(54,"button",17),e._uU(55,"Submit"),e.qZA()()()()()()),2&n&&(e.xp6(10),e.Q6J("formGroup",o.EmpForm),e.xp6(11),e.Q6J("ngIf",o.EmpForm.get("name").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("name").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("name").hasError("minlength")),e.xp6(7),e.Q6J("ngIf",o.EmpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("email").hasError("email")),e.xp6(7),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("maxlength")),e.xp6(7),e.Q6J("ngIf",o.EmpForm.get("gender").hasError("required")),e.xp6(3),e.Q6J("routerLink",e.DdM(13,T)),e.xp6(3),e.Q6J("disabled",!o.EmpForm.valid))},dependencies:[i.rH,r._Y,r.Fj,r.JJ,r.JL,r.wO,r.nD,r.sg,r.u,l.O5]}),t})();function A(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * name is required "),e.qZA())}function C(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * name Not valid. "),e.qZA())}function x(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * name length "),e.qZA())}function I(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * email is required "),e.qZA())}function N(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * email Not valid format "),e.qZA())}function v(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * mobile Length "),e.qZA())}function F(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * mobile Not valid. "),e.qZA())}function J(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * mobile Length "),e.qZA())}function L(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * mobile max Length "),e.qZA())}function Y(t,m){1&t&&(e.TgZ(0,"span",16),e._uU(1," * gender is required "),e.qZA())}const k=function(){return["/employees"]};let Q=(()=>{class t{constructor(n,o,p,d){this.employeeService=n,this.route=o,this.ro=p,this.formBuilder=d,this.id=0,this.empList=[],this.EmpForm=this.formBuilder.group({id:"",name:new r.NI("",[r.kI.required,r.kI.pattern("^[a-zA-Z]+$")]),email:["",[r.kI.required,r.kI.email]],mobile:["",[r.kI.required,r.kI.pattern("^[0-9]+$")]],gender:["",[r.kI.required]]})}ngOnInit(){this.route.params.subscribe(n=>{if(this.id=n.id,null!=n.id){this.EmpForm.get("id")?.setValue(n.id);const o=this.employeeService.getUsersByID(this.id);o&&this.EmpForm.setValue(o)}})}onSubmit(){this.employeeService.EditUser(this.EmpForm.value),this.ro.navigate(["/"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s),e.Y36(i.gz),e.Y36(i.F0),e.Y36(r.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit-employee"]],decls:52,vars:14,consts:[[1,"row"],[1,"card","col-md-6","offset-md-3","offset-md-3"],[1,"text-center"],[1,"card-body"],[3,"formGroup","ngSubmit"],["for","name"],["type","text","id","name","formControlName","name"],["style","color: RED;",4,"ngIf"],["for","email"],["type","text","id","email","formControlName","email"],["for","mobile"],["type","text","id","mobile","formControlName","mobile"],["for","gender"],["type","text","id","gender","formControlName","gender"],[1,"btn","btn-warning",3,"routerLink"],["type","submit",1,"btn","btn-success",3,"disabled"],[2,"color","RED"]],template:function(n,o){1&n&&(e._UZ(0,"br")(1,"br")(2,"br"),e.TgZ(3,"div",0)(4,"div",1)(5,"div",0)(6,"h3",2),e._uU(7," Edit Employee "),e.qZA(),e._UZ(8,"hr"),e.TgZ(9,"div",3)(10,"form",4),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(11,"label",5),e._uU(12,"Name:"),e.qZA(),e._UZ(13,"br")(14,"input",6)(15,"br"),e.YNc(16,A,2,0,"span",7),e.YNc(17,C,2,0,"span",7),e.YNc(18,x,2,0,"span",7),e._UZ(19,"br"),e.TgZ(20,"label",8),e._uU(21,"Email :"),e.qZA(),e._UZ(22,"br")(23,"input",9)(24,"br"),e.YNc(25,I,2,0,"span",7),e.YNc(26,N,2,0,"span",7),e._UZ(27,"br"),e.TgZ(28,"label",10),e._uU(29,"Mobile No:"),e.qZA(),e._UZ(30,"br")(31,"input",11)(32,"br"),e.YNc(33,v,2,0,"span",7),e.YNc(34,F,2,0,"span",7),e.YNc(35,J,2,0,"span",7),e.YNc(36,L,2,0,"span",7),e._UZ(37,"br"),e.TgZ(38,"label",12),e._uU(39,"Gender:"),e.qZA(),e._UZ(40,"br")(41,"input",13)(42,"br"),e.YNc(43,Y,2,0,"span",7),e._UZ(44,"br")(45,"br")(46,"br"),e.TgZ(47,"button",14),e._uU(48,"Back"),e.qZA(),e._uU(49,"\xa0 "),e.TgZ(50,"button",15),e._uU(51,"Submit"),e.qZA()()()()()()),2&n&&(e.xp6(10),e.Q6J("formGroup",o.EmpForm),e.xp6(6),e.Q6J("ngIf",o.EmpForm.get("name").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("name").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("name").hasError("minlength")),e.xp6(7),e.Q6J("ngIf",o.EmpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("email").hasError("email")),e.xp6(7),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",o.EmpForm.get("mobile").hasError("maxlength")),e.xp6(7),e.Q6J("ngIf",o.EmpForm.get("gender").hasError("required")),e.xp6(4),e.Q6J("routerLink",e.DdM(13,k)),e.xp6(3),e.Q6J("disabled",!o.EmpForm.valid))},dependencies:[i.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.O5]}),t})();const S=function(t){return["/employees/edit",t]};function w(t,m){if(1&t){const n=e.EpF();e.TgZ(0,"tr")(1,"th",8),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"button",9),e._uU(13,"Edit"),e.qZA()(),e.TgZ(14,"td")(15,"button",10),e.NdJ("click",function(){const d=e.CHM(n).$implicit,j=e.oxw();return e.KtG(j.remove(d.id))}),e._uU(16," Remove"),e.qZA()()()}if(2&t){const n=m.$implicit;e.xp6(2),e.Oqu(n.id),e.xp6(2),e.hij(" ",n.name,""),e.xp6(2),e.hij(" ",n.email," "),e.xp6(2),e.hij(" ",n.mobile,""),e.xp6(2),e.hij("",n.gender," "),e.xp6(2),e.Q6J("routerLink",e.VKq(6,S,n.id))}}const M=function(){return["/employees/add"]},B=[{path:"",component:(()=>{class t{constructor(n){this.employeeService=n,this.empList=[]}ngOnInit(){this.empList=this.employeeService.getEmployees()}remove(n){this.employeeService.removeUser(n),this.empList=this.employeeService.getEmployees()}Edit(n){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-show-employee"]],decls:31,vars:3,consts:[[1,""],[1,"card-body"],[2,"margin-left","40%"],[1,"btn","btn-primary",2,"margin-left","80%",3,"routerLink"],[1,"table"],[1,"thead-dark"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn","btn-primary",3,"routerLink"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,o){1&n&&(e._UZ(0,"br")(1,"br")(2,"br"),e.TgZ(3,"div",0)(4,"div",1)(5,"h2",2),e._uU(6,"Employee List"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"button",3),e._uU(9,"Create a New Employee"),e.qZA(),e._UZ(10,"br")(11,"br"),e.TgZ(12,"table",4)(13,"thead",5)(14,"tr")(15,"th",6),e._uU(16,"Id"),e.qZA(),e.TgZ(17,"th",6),e._uU(18,"Name"),e.qZA(),e.TgZ(19,"th",6),e._uU(20,"Email"),e.qZA(),e.TgZ(21,"th",6),e._uU(22,"MobileNo."),e.qZA(),e.TgZ(23,"th",6),e._uU(24,"Gender"),e.qZA(),e.TgZ(25,"th",6),e._uU(26,"Edit"),e.qZA(),e.TgZ(27,"th",6),e._uU(28,"Delete"),e.qZA()()(),e.TgZ(29,"tbody"),e.YNc(30,w,17,8,"tr",7),e.qZA()()()()),2&n&&(e.xp6(8),e.Q6J("routerLink",e.DdM(2,M)),e.xp6(22),e.Q6J("ngForOf",o.empList))},dependencies:[i.rH,l.sg]}),t})()},{path:"add",component:q},{path:"edit",component:Q}];let D=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(B),i.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[D,r.UX,r.u5,l.ez]}),t})()}}]);