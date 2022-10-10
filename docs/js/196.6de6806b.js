"use strict";(self["webpackChunkcell"]=self["webpackChunkcell"]||[]).push([[196],{8316:function(e,t){t["Z"]={data(){return{slugField:""}},computed:{slugedGenre(){if(this.slugField){let e=this.slugField.toLowerCase().trim().replace(/\s+/g,"-").replace(/[^0-9-a-zа-я\u0370-\u03ff\u1f00-\u1fff]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return e.replace(/\u0401/g,"YO").replace(/\u0419/g,"I").replace(/\u0426/g,"TS").replace(/\u0423/g,"U").replace(/\u041A/g,"K").replace(/\u0415/g,"E").replace(/\u041D/g,"N").replace(/\u0413/g,"G").replace(/\u0428/g,"SH").replace(/\u0429/g,"SCH").replace(/\u0417/g,"Z").replace(/\u0425/g,"H").replace(/\u042A/g,"").replace(/\u0451/g,"yo").replace(/\u0439/g,"i").replace(/\u0446/g,"ts").replace(/\u0443/g,"u").replace(/\u043A/g,"k").replace(/\u0435/g,"e").replace(/\u043D/g,"n").replace(/\u0433/g,"g").replace(/\u0448/g,"sh").replace(/\u0449/g,"sch").replace(/\u0437/g,"z").replace(/\u0445/g,"h").replace(/\u044A/g,"'").replace(/\u0424/g,"F").replace(/\u042B/g,"I").replace(/\u0412/g,"V").replace(/\u0410/g,"a").replace(/\u041F/g,"P").replace(/\u0420/g,"R").replace(/\u041E/g,"O").replace(/\u041B/g,"L").replace(/\u0414/g,"D").replace(/\u0416/g,"ZH").replace(/\u042D/g,"E").replace(/\u0444/g,"f").replace(/\u044B/g,"i").replace(/\u0432/g,"v").replace(/\u0430/g,"a").replace(/\u043F/g,"p").replace(/\u0440/g,"r").replace(/\u043E/g,"o").replace(/\u043B/g,"l").replace(/\u0434/g,"d").replace(/\u0436/g,"zh").replace(/\u044D/g,"e").replace(/\u042F/g,"Ya").replace(/\u0427/g,"CH").replace(/\u0421/g,"S").replace(/\u041C/g,"M").replace(/\u0418/g,"I").replace(/\u0422/g,"T").replace(/\u042C/g,"'").replace(/\u0411/g,"B").replace(/\u042E/g,"YU").replace(/\u044F/g,"ya").replace(/\u0447/g,"ch").replace(/\u0441/g,"s").replace(/\u043C/g,"m").replace(/\u0438/g,"i").replace(/\u0442/g,"t").replace(/\u044C/g,"'").replace(/\u0431/g,"b").replace(/\u044E/g,"yu")}return" "}}}},8319:function(e,t){t["Z"]={data(){return{Toast:this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",this.$swal.stopTimer),e.addEventListener("mouseleave",this.$swal.resumeTimer)}})}},methods:{setSuccess(e){this.Toast.fire({icon:"success",title:e})},setError(){this.Toast.fire({icon:"error",title:"Произошла ошибка"})}}}},3453:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(3396);const r={class:"form-wrapper"},s=(0,l.Uk)("Создать");function i(e,t,a,i,u,n){const o=(0,l.up)("default-button"),c=(0,l.up)("Close"),d=(0,l.up)("Form");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(d,{class:"form","validation-schema":n.LocalSchema,onSubmit:n.onSubmit,ref:"Form"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.WI)(e.$slots,"default",{},void 0,!0)]),(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[s])),_:1}),(0,l.Wm)(c,{class:"form-close",onClick:n.hideForm},null,8,["onClick"])])),_:3},8,["validation-schema","onSubmit"])])}var u=a(5708),n=a(9938),o=a(8810),c={name:"adminForm",emits:["hide","refForm","formValues"],components:{Close:o.Z,DefaultButton:n.Z,Form:u.l0,Field:u.gN,ErrorMessage:u.Bc},props:{schema:{type:Object},updateValues:{type:Object}},data(){return{setValues:null}},mounted(){this.$emit("refForm",this.$refs.Form)},methods:{onSubmit(e,{resetForm:t}){this.$emit("formValues",e),t()},hideForm(){this.$emit("hide",!1)}},computed:{LocalSchema(){return this.schema}}},d=a(89);const m=(0,d.Z)(c,[["render",i],["__scopeId","data-v-3d02cfa1"]]);var p=m},5781:function(e,t,a){a.d(t,{Z:function(){return I}});var l=a(3396),r=a(7139),s=a(9242);const i={class:"table-actions"},u={class:"table"},n={class:"table-header"},o={class:"table-body"},c={class:"table-body-item"},d={class:"table-body-item"},m={class:"table-body-item"};function p(e,t,a,p,g,h){const f=(0,l.up)("Pen"),b=(0,l.up)("Close");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[(0,l._)("input",{type:"text",class:"input",onInput:t[0]||(t[0]=(...e)=>h.filterValue&&h.filterValue(...e))},null,32),(0,l._)("button",{class:"button",onClick:t[1]||(t[1]=(...e)=>h.visibleForm&&h.visibleForm(...e))},"Добавить запись")]),(0,l._)("div",u,[(0,l._)("div",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.tableHeader,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"table-header-item",key:Math.random()},(0,r.zw)(e),1)))),128))]),(0,l.wy)((0,l._)("div",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.data,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"table-row",key:e.id},[(0,l._)("div",c,(0,r.zw)(e.name),1),(0,l._)("div",d,(0,r.zw)(e.slug),1),(0,l._)("div",m,[(0,l.Wm)(f,{onClick:t=>h.updateValues(e.id)},null,8,["onClick"]),(0,l.Wm)(b,{onClick:t=>h.DeleteGenre(e.id)},null,8,["onClick"])])])))),128))],512),[[s.F8,a.data]])])],64)}const g={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 48 48",width:"48px",height:"48px"},h=(0,l.uE)('<g id="surface209380960"><path style="stroke:none;fill-rule:nonzero;fill:rgb(89.803922%, 45.09804%, 45.09804%);fill-opacity:1;" d="M 42.582031 9.066406 L 38.933594 5.417969 C 38.378906 4.859375 37.472656 4.859375 36.917969 5.417969 L 35.199219 7.136719 L 40.863281 12.800781 L 42.582031 11.082031 C 43.140625 10.527344 43.140625 9.625 42.582031 9.066406 "></path><path style="stroke:none;fill-rule:nonzero;fill:rgb(100%, 59.607846%, 0%);fill-opacity:1;" d="M 38.03125 15.632812 L 12.570312 41.09375 L 6.90625 35.429688 L 32.367188 9.96875 Z M 38.03125 15.632812 "></path><path style="stroke:none;fill-rule:nonzero;fill:rgb(69.01961%, 74.509805%, 77.254903%);fill-opacity:1;" d="M 32.363281 9.96875 L 35.195312 7.132812 L 40.863281 12.796875 L 38.03125 15.632812 Z M 32.363281 9.96875 "></path><path style="stroke:none;fill-rule:nonzero;fill:rgb(100%, 75.686276%, 2.745098%);fill-opacity:1;" d="M 6.90625 35.429688 L 5 43 L 12.570312 41.09375 Z M 6.90625 35.429688 "></path><path style="stroke:none;fill-rule:nonzero;fill:rgb(21.568628%, 27.843139%, 30.980393%);fill-opacity:1;" d="M 5.964844 39.171875 L 5 43 L 8.828125 42.035156 Z M 5.964844 39.171875 "></path></g>',1),f=[h];function b(e,t,a,r,s,i){return(0,l.wg)(),(0,l.iD)("svg",g,f)}var v={name:"pen"},w=a(89);const F=(0,w.Z)(v,[["render",b]]);var y=F,D=a(8810),V={name:"Table",components:{Pen:y,Close:D.Z},emits:["visible","updateValues","DeleteItem","filterValue"],data(){return{}},props:{tableHeader:{type:Array},data:{type:Array}},mounted(){},methods:{filterValue(e){this.$emit("filterValue",e.currentTarget.value)},updateValues(e){this.$emit("updateValues",e),this.visibleForm()},visibleForm(){this.$emit("visible",!0)},DeleteGenre(e){this.$emit("DeleteItem",e)}}};const _=(0,w.Z)(V,[["render",p],["__scopeId","data-v-5f12cd1f"]]);var I=_},8810:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(3396);const r={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px"},s=(0,l._)("path",{fill:"#F44336",d:"M21.5 4.5H26.501V43.5H21.5z",transform:"rotate(45.001 24 24)"},null,-1),i=(0,l._)("path",{fill:"#F44336",d:"M21.5 4.5H26.5V43.501H21.5z",transform:"rotate(135.008 24 24)"},null,-1),u=[s,i];function n(e,t,a,s,i,n){return(0,l.wg)(),(0,l.iD)("svg",r,u)}var o={name:"close"},c=a(89);const d=(0,c.Z)(o,[["render",n]]);var m=d},3196:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var l=a(3396),r=a(9242);const s=e=>((0,l.dD)("data-v-7acdf4fe"),e=e(),(0,l.Cn)(),e),i={for:"name",class:"form-item"},u=(0,l.Uk)(" Введите жанр "),n={for:"slug",class:"form-item"},o=(0,l.Uk)(" Чпу "),c={for:"genre",class:"form-item"},d=(0,l.Uk)(" Изображение "),m={key:0,class:"form-item genre-img"},p=s((()=>(0,l._)("h5",null,"Текущее изображение",-1))),g={href:"#"},h=["src"];function f(e,t,a,s,f,b){const v=(0,l.up)("Field"),w=(0,l.up)("ErrorMessage"),F=(0,l.up)("adminForm"),y=(0,l.up)("Table");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)((0,l.Wm)(F,{onFormValues:b.submitData,schema:b.schema,onHide:b.visibleForm},{default:(0,l.w5)((()=>[(0,l._)("label",i,[u,(0,l.Wm)(v,{name:"name",id:"name",class:"input",modelValue:e.slugField,"onUpdate:modelValue":t[0]||(t[0]=t=>e.slugField=t)},null,8,["modelValue"]),(0,l.Wm)(w,{name:"name"})]),(0,l._)("label",n,[o,(0,l.Wm)(v,{name:"slug",id:"slug",class:"input slug",modelValue:e.slugedGenre,"onUpdate:modelValue":t[1]||(t[1]=t=>e.slugedGenre=t),readonly:!0},null,8,["modelValue"]),(0,l.Wm)(w,{name:"slug"})]),(0,l._)("label",c,[d,(0,l.Wm)(v,{name:"genre",id:"genre",class:"input",type:"file"}),(0,l.Wm)(w,{name:"genre"})]),f.currentUpdateItem.genre?((0,l.wg)(),(0,l.iD)("div",m,[p,(0,l._)("a",g,[(0,l._)("img",{src:f.currentUpdateItem.genre,alt:""},null,8,h)])])):(0,l.kq)("",!0)])),_:1},8,["onFormValues","schema","onHide"]),[[r.F8,f.visible]]),(0,l.Wm)(y,{"table-header":f.tableHeader,data:e.searchTable,onUpdateValues:b.SetId,onVisible:b.visibleForm,onDeleteItem:b.DeleteItem,onFilterValue:b.setQuery},null,8,["table-header","data","onUpdateValues","onVisible","onDeleteItem","onFilterValue"])],64)}var b=a(5781),v=a(3453),w=a(9938),F=a(5708),y=a(65),D=a(6542),V=a(8316),_=a(8319),I={name:"admin-genres",mixins:[V.Z,_.Z],components:{Table:b.Z,AdminNav:b.Z,adminForm:v.Z,DefaultButton:w.Z,Field:F.gN,ErrorMessage:F.Bc},data(){return{visible:!1,tableHeader:["Название жанра","чпу","действия"],updateId:null,submitType:"submit",currentUpdateItem:[]}},methods:{setQuery(e){this.setGenresQuery(e)},...(0,y.OI)({setGenresQuery:"admin/setGenresQuery"}),visibleForm(e){this.visible=e,!1===e&&(this.submitType="submit")},submitData(e){if("submit"===this.submitType){let t={to:"genres",val:e};this.CreateItem(t).then((e=>this.setSuccess("Запись добавлена"))).catch((e=>this.setError()))}else if("update"===this.submitType){let t={id:this.updateId,to:"genres",items:e};this.updateDoc(t).then((e=>this.setSuccess("Запись обновлена"))).catch((e=>this.setError())),this.submitType="submit"}},DeleteItem(e){let t={to:"genres",id:e};this.DeleteDoc(t).then((e=>this.setSuccess("Запись удалена"))).catch((e=>this.setError()))},...(0,y.nv)({CreateItem:"admin/CreateItem",FetchData:"admin/FetchData",updateDoc:"admin/updateDoc",DeleteDoc:"admin/DeleteDoc"}),SetId(e){this.updateId=e}},mounted(){this.FetchData("genres")},watch:{updateId(e){let t=this.genres.find((t=>t.id===e));this.slugField=t.name,this.currentUpdateItem=t,this.submitType="update"}},computed:{...(0,y.rn)({genres:e=>e.admin.genres}),...(0,y.Se)({searchTable:"admin/searchTableGenres"}),schema(){return D.Ry({name:D.Z_().required(),slug:D.Z_().required(),genre:D.Z_().required()})}}},Z=a(89);const k=(0,Z.Z)(I,[["render",f],["__scopeId","data-v-7acdf4fe"]]);var C=k}}]);
//# sourceMappingURL=196.6de6806b.js.map