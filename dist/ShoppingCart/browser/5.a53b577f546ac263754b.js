(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,i,n){"use strict";n.r(i),n.d(i,"AuthModule",(function(){return h}));var e=n("tyNb"),o=n("3Pt+"),s=n("PCNd"),r=n("ofXK"),c=n("lJxs"),b=n("/WaZ"),a=n("fXoL"),l=n("l7P3");let d=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a.Bb({type:t,selectors:[["app-loading-spinner"]],decls:2,vars:0,consts:[[1,"lds-circle"]],template:function(t,i){1&t&&(a.Kb(0,"div",0),a.Ib(1,"div"),a.Jb())},styles:[".lds-circle[_ngcontent-%COMP%]{display:inline-block;transform:translateZ(1px)}.lds-circle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;width:64px;height:64px;margin:8px;border-radius:50%;background:#572eec;animation:lds-circle 2.4s cubic-bezier(0,.2,.8,1) infinite}@keyframes lds-circle{0%,to{animation-timing-function:cubic-bezier(.5,0,1,.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(5turn);animation-timing-function:cubic-bezier(0,.5,.5,1)}to{transform:rotateY(10turn)}}"]}),t})(),u=(()=>{class t{constructor(){this.closeThis=new a.n}onClose(){this.closeThis.emit()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a.Bb({type:t,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{closeThis:"closeThis"},decls:7,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(t,i){1&t&&(a.Kb(0,"div",0),a.Rb("click",(function(){return i.onClose()})),a.Jb(),a.Kb(1,"div",1),a.Kb(2,"p"),a.ic(3),a.Jb(),a.Kb(4,"div",2),a.Kb(5,"button",3),a.Rb("click",(function(){return i.onClose()})),a.ic(6,"Close"),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.xb(3),a.jc(i.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),t})();function p(t,i){1&t&&(a.Kb(0,"div",5),a.Ib(1,"app-loading-spinner"),a.Jb())}function g(t,i){if(1&t){const t=a.Lb();a.Kb(0,"app-alert",6),a.Rb("closeThis",(function(){return a.ec(t),a.Tb().onHandleError()})),a.Jb()}if(2&t){const t=a.Tb();a.Wb("message",t.error)}}function f(t,i){if(1&t){const t=a.Lb();a.Kb(0,"form",7,8),a.Rb("ngSubmit",(function(){a.ec(t);const i=a.bc(1);return a.Tb().onSubmit(i)})),a.Kb(2,"div",9),a.Kb(3,"label",10),a.ic(4,"E-mail"),a.Jb(),a.Ib(5,"input",11),a.Jb(),a.Kb(6,"div",9),a.Kb(7,"label",12),a.ic(8,"Password"),a.Jb(),a.Ib(9,"input",13),a.Jb(),a.Kb(10,"div"),a.Kb(11,"button",14),a.ic(12),a.Jb(),a.Kb(13,"button",15),a.Rb("click",(function(){return a.ec(t),a.Tb().onSwitchMode()})),a.ic(14),a.Jb(),a.Jb(),a.Jb()}if(2&t){const t=a.bc(1),i=a.Tb();a.xb(11),a.Wb("disabled",t.invalid),a.xb(1),a.kc(" ",i.isLoginMode?"Login":"Sign Up"," "),a.xb(2),a.kc(" Switch To ",i.isLoginMode?"Sign Up":"Login"," ")}}const m=[{path:"",component:(()=>{class t{constructor(t){this.store=t,this.isLoginMode=!0,this.isLoading=!1,this.error=null}ngOnInit(){this.storeSub=this.store.select("auth").subscribe(t=>{this.isLoading=t.loading,this.error=t.authError})}onSwitchMode(){this.isLoginMode=!this.isLoginMode}onSubmit(t){if(t.invalid)return;const i=t.value.email,n=t.value.password;this.isLoading=!0,this.store.dispatch(this.isLoginMode?b.e({email:i,password:n}):b.g({email:i,password:n})),this.store.select("auth").pipe(Object(c.a)(t=>t.authError)).subscribe(t=>{this.error=t}),t.reset()}onHandleError(){this.store.dispatch(b.d())}ngOnDestroy(){this.storeSub&&this.storeSub.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(a.Hb(l.h))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-auth"]],decls:5,vars:3,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"message","closeThis",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"message","closeThis"],[3,"ngSubmit"],["form","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","ngModel","","name","password","minlength","6","required","",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-primary",2,"margin","0 10px",3,"click"]],template:function(t,i){1&t&&(a.Kb(0,"div",0),a.Kb(1,"div",1),a.hc(2,p,2,0,"div",2),a.hc(3,g,1,1,"app-alert",3),a.hc(4,f,15,3,"form",4),a.Jb(),a.Jb()),2&t&&(a.xb(2),a.Wb("ngIf",i.isLoading),a.xb(1),a.Wb("ngIf",!i.isLoading&&i.error),a.xb(1),a.Wb("ngIf",!i.isLoading))},directives:[r.j,d,u,o.u,o.m,o.n,o.a,o.l,o.o,o.s,o.b,o.k],encapsulation:2}),t})()}];let h=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(i){return new(i||t)},imports:[[r.c,s.a,o.j,e.g.forChild(m)],e.g]}),t})()}}]);