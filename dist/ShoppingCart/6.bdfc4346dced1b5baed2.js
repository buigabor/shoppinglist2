(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return R}));var r=i("PCNd"),n=i("tyNb"),c=i("IzEk"),o=i("lJxs"),b=i("fXoL"),s=i("qXBG");let p=(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){return this.authService.user.pipe(Object(c.a)(1),Object(o.a)(e=>!!e||this.router.createUrlTree(["./auth"])))}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(s.a),b.Ob(n.c))},e.\u0275prov=b.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var a=i("ceC1"),u=i("3V6w"),d=i("ofXK");function l(e,t){if(1&e&&(b.Kb(0,"li",11),b.gc(1),b.Jb()),2&e){const e=t.$implicit;b.xb(1),b.jc(" ",e.name," - ",e.amount," ")}}const m=function(){return["edit"]};let g=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=this.route.snapshot.params.id,this.recipe=this.recipeService.getRecipe(this.id)})}toShoppingList(){this.recipeService.toShoppingList(this.recipe.ingredients)}onDelete(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(a.a),b.Hb(n.a),b.Hb(n.c))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:6,consts:[[1,"row"],[1,"col-xs-12"],["alt","",1,"image-responsive",2,"max-height","300px",3,"src"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[2,"cursor","pointer",3,"routerLink"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1),b.Ib(2,"img",2),b.Jb(),b.Jb(),b.Kb(3,"div",0),b.Kb(4,"div",1),b.Kb(5,"h1"),b.gc(6),b.Jb(),b.Jb(),b.Jb(),b.Kb(7,"div",0),b.Kb(8,"div",1),b.Kb(9,"div",3),b.Kb(10,"button",4),b.gc(11," Manage Recipe "),b.Ib(12,"span",5),b.Jb(),b.Kb(13,"ul",6),b.Kb(14,"li"),b.Kb(15,"a",7),b.Rb("click",(function(){return t.toShoppingList()})),b.gc(16,"To Shopping List"),b.Jb(),b.Jb(),b.Kb(17,"li"),b.Kb(18,"a",8),b.gc(19,"Edit Recipe"),b.Jb(),b.Jb(),b.Kb(20,"li"),b.Kb(21,"a",7),b.Rb("click",(function(){return t.onDelete()})),b.gc(22,"Delete Recipe"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Kb(23,"div",0),b.Kb(24,"div",1),b.gc(25),b.Jb(),b.Jb(),b.Kb(26,"div",0),b.Kb(27,"div",1),b.Kb(28,"ul",9),b.fc(29,l,2,2,"li",10),b.Jb(),b.Jb(),b.Jb()),2&e&&(b.xb(2),b.Ub("src",t.recipe.imagePath,b.dc),b.xb(4),b.hc(t.recipe.name),b.xb(12),b.Ub("routerLink",b.Wb(5,m)),b.xb(7),b.hc(t.recipe.description),b.xb(4),b.Ub("ngForOf",t.recipe.ingredients))},directives:[u.a,n.f,d.h],styles:[""]}),e})();var h=i("3Pt+");function v(e,t){if(1&e){const e=b.Lb();b.Kb(0,"div",23),b.Kb(1,"div",24),b.Ib(2,"input",25),b.Jb(),b.Kb(3,"div",26),b.Ib(4,"input",27),b.Jb(),b.Kb(5,"div",26),b.Kb(6,"button",28),b.Rb("click",(function(){b.cc(e);const i=t.index;return b.Tb().onDeleteIngredient(i)})),b.gc(7," X "),b.Jb(),b.Jb(),b.Jb()}2&e&&b.Ub("formGroupName",t.index)}let f=(()=>{class e{constructor(e,t,i){this.route=e,this.recipeService=t,this.router=i,this.editMode=!1}get ingredientsControls(){return this.recipeForm.get("ingredients").controls}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new h.g({name:new h.e(null,h.t.required),amount:new h.e(null,[h.t.required,h.t.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}onDeleteAll(){this.recipeForm.get("ingredients").clear()}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let e="",t="",i="";const r=new h.c([]);if(this.editMode){const n=this.recipeService.getRecipe(this.id);if(e=n.name,t=n.imagePath,i=n.description,n.ingredients)for(const e of n.ingredients)r.push(new h.g({name:new h.e(e.name,h.t.required),amount:new h.e(e.amount,[h.t.required,h.t.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new h.g({name:new h.e(e,h.t.required),imagePath:new h.e(t,h.t.required),description:new h.e(i,h.t.required),ingredients:r})}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(n.a),b.Hb(a.a),b.Hb(n.c))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-recipe-edit"]],decls:43,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["form","ngForm"],[1,"row",2,"margin-top","15px"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["formControlName","description","type","text","id","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row",3,"formGroupName",4,"ngFor","ngForOf"],[1,"container-fluid",2,"padding-bottom","3rem"],[1,"col-sm-8",2,"margin-top","15px"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",2,"margin","0 10px",3,"click"],[1,"col-sm-4",2,"margin-top","15px"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",2,"margin","0 5px",3,"click"],[1,"row",3,"formGroupName"],[1,"col-xs-8",2,"margin-bottom","10px"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1),b.Kb(2,"form",2,3),b.Rb("ngSubmit",(function(){return t.onSubmit()})),b.Kb(4,"div",4),b.Kb(5,"div",1),b.Kb(6,"div",5),b.Kb(7,"label",6),b.gc(8,"Name:"),b.Jb(),b.Ib(9,"input",7),b.Jb(),b.Jb(),b.Jb(),b.Kb(10,"div",0),b.Kb(11,"div",1),b.Kb(12,"div",5),b.Kb(13,"label",8),b.gc(14,"Image URL"),b.Jb(),b.Ib(15,"input",9,10),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"div",0),b.Kb(18,"div",1),b.Ib(19,"img",11),b.Jb(),b.Jb(),b.Kb(20,"div",0),b.Kb(21,"div",1),b.Kb(22,"div",5),b.Kb(23,"label",12),b.gc(24,"Description"),b.Jb(),b.Ib(25,"br"),b.Ib(26,"textarea",13),b.Jb(),b.Jb(),b.Jb(),b.Kb(27,"div",0),b.Kb(28,"div",14),b.fc(29,v,8,1,"div",15),b.Jb(),b.Jb(),b.Ib(30,"hr"),b.Kb(31,"div",16),b.Kb(32,"div",0),b.Kb(33,"div",17),b.Kb(34,"button",18),b.Rb("click",(function(){return t.onAddIngredient()})),b.gc(35," Add Ingredient "),b.Jb(),b.Kb(36,"button",19),b.Rb("click",(function(){return t.onDeleteAll()})),b.gc(37," Delete All Ingredients "),b.Jb(),b.Jb(),b.Kb(38,"div",20),b.Kb(39,"button",21),b.gc(40," Save "),b.Jb(),b.Kb(41,"button",22),b.Rb("click",(function(){return t.onCancel()})),b.gc(42," Cancel "),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb()),2&e){const e=b.Zb(16);b.xb(2),b.Ub("formGroup",t.recipeForm),b.xb(17),b.Ub("src",e.value,b.dc),b.xb(10),b.Ub("ngForOf",t.ingredientsControls),b.xb(10),b.Ub("disabled",t.recipeForm.invalid)}},directives:[h.u,h.m,h.h,h.a,h.l,h.f,h.d,d.h,h.i,h.p],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})(),J=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Bb({type:e,selectors:[["app-recipe-home"]],decls:2,vars:0,template:function(e,t){1&e&&(b.Kb(0,"h3"),b.gc(1,"Please select a recipe!"),b.Jb())},styles:[""]}),e})();var K=i("GXvH");let x=(()=>{class e{constructor(e,t){this.dataStorageService=e,this.recipeService=t}resolve(e,t){const i=this.recipeService.getRecipes();return 0===i.length?this.dataStorageService.fetchRecipes():i}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(K.a),b.Ob(a.a))},e.\u0275prov=b.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const w=function(e){return[e]};let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Bb({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(b.Kb(0,"a",0),b.Kb(1,"div",1),b.Kb(2,"h4",2),b.gc(3),b.Jb(),b.Kb(4,"p",3),b.gc(5),b.Jb(),b.Jb(),b.Kb(6,"span",4),b.Ib(7,"img",5),b.Jb(),b.Jb()),2&e&&(b.Ub("routerLink",b.Xb(5,w,t.index)),b.xb(3),b.hc(t.recipe.name),b.xb(2),b.hc(t.recipe.description),b.xb(2),b.Vb("src",t.recipe.imagePath,b.dc),b.Vb("alt",t.recipe.name))},directives:[n.f,n.e],styles:[""]}),e})();function I(e,t){if(1&e&&b.Ib(0,"app-recipe-item",4),2&e){const e=t.index;b.Ub("recipe",t.$implicit)("index",e)}}const S=function(){return["/recipes","new"]};let k=(()=>{class e{constructor(e){this.recipeService=e}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipes()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(a.a))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-recipe-list"]],decls:8,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"routerLink"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1),b.Kb(2,"button",2),b.gc(3," New Recipe "),b.Jb(),b.Jb(),b.Jb(),b.Ib(4,"hr"),b.Kb(5,"div",0),b.Kb(6,"div",1),b.fc(7,I,1,2,"app-recipe-item",3),b.Jb(),b.Jb()),2&e&&(b.xb(2),b.Ub("routerLink",b.Wb(2,S)),b.xb(5),b.Ub("ngForOf",t.recipes))},directives:[n.d,d.h,y],styles:[""]}),e})();const F=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Bb({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1),b.Ib(2,"app-recipe-list"),b.Jb(),b.Kb(3,"div",2),b.Ib(4,"router-outlet"),b.Jb(),b.Jb())},directives:[k,n.h],styles:[""]}),e})(),canActivate:[p],children:[{path:"",component:J},{path:"new",component:f},{path:":id",component:g,resolve:[x]},{path:":id/edit",component:f,resolve:[x]}]}];let O=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[n.g.forChild(F)],n.g]}),e})(),R=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[O,r.a,h.r]]}),e})()}}]);