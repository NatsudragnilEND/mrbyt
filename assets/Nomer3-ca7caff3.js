import{u as V,r as d,B as n,C as b,w as E,o as p,c as M,a as u,d as N,e as y,f as _,b as a,h as k,D as r,E as f,H as C,T as w,v as $,I as F,J as S,z as T,t as q,F as z,K as H}from"./index-de4ca0e6.js";const ee="/MrByt/assets/svector-84b466a4.svg",se="/MrByt/assets/masterimg-dad3602e.png",te="/MrByt/assets/payment-3cabe0fe.svg",J={class:"forrm"},L={class:"ushdr"},O=["src"],U=u("img",{src:H,alt:""},null,-1),j={key:0,class:"drsh"},A={class:"d"},G=["src"],P=["src"],Q=["src"],R=["placeholder","maxlength","onKeyup"],W=["onClick"],X=u("p",null,"Отправлено",-1),le={__name:"Nomer3",setup(Y){const o=V();let h=d(!1);const B=()=>(console.log(o.input2),e.value.length>13&&o.input2!==""?(e.value="",o.input2="",h.value=!0,setTimeout(()=>{h.value=!1},1600)):o.input2==""?(v.value=!0,setTimeout(()=>{v.value=!1},1600)):(v.value=!0,setTimeout(()=>{v.value=!1},1600)),o.yes=!1);let v=d(!1);const s=d(n),g=d(!1),i=b(()=>s.value===n?{1:"+7(999)123-45-67",2:"+7 "}:s.value===r?{1:"+998(99)123-45-67",2:"+998 "}:{1:"+1(778)123-45-67",2:"+1 "});let D=b(()=>s.value===n?14:s.value===r?15:14);const I=t=>{let l=t.keyCode?t.keyCode:t.which;(l<48||l>57)&&t.preventDefault(),(s.value===n||s.value===f)&&(e.value.length==6&&(e.value=e.value+" "),e.value.length==2&&(e.value=e.value+" ")),s.value===r&&(e.value.length==7&&(e.value=e.value+" "),e.value.length==4&&(e.value=e.value+" "))},e=d("");E(()=>{e.value=i.value[2],o.selectedImage=s.value});const x=t=>{e.value.split("")[0]!=="+"&&(e.value=i.value[2]),(s.value===n||s.value===f)&&(e.value.length<4&&t.key==="Backspace"&&e.value!==i.value[2]||e.value=="")&&(e.value=i.value[2],t.preventDefault()),s.value===r&&(e.value.length<6&&t.key==="Backspace"&&e.value!==i.value[2]||e.value=="")&&(e.value=i.value[2],t.preventDefault())},m=t=>{s.value=t,g.value=!0};document.addEventListener("click",K);function K(t){t.target.closest(".dyvv")||(g.value=!1)}return(t,l)=>(p(),M(z,null,[u("form",J,[u("div",L,[u("div",{onClick:l[0]||(l[0]=c=>m(s.value)),class:"dyvv"},[u("img",{class:"rew",src:s.value,alt:""},null,8,O),U]),N(w,{name:"medo"},{default:y(()=>[g.value?(p(),M("div",j,[u("div",A,[_(u("img",{class:"melche",src:a(n),onClick:l[1]||(l[1]=c=>m(a(n))),alt:""},null,8,G),[[k,s.value!==a(n)]]),_(u("img",{class:"melche",src:a(r),onClick:l[2]||(l[2]=c=>m(a(r))),alt:""},null,8,P),[[k,s.value!==a(r)]]),_(u("img",{class:"melche",src:a(f),onClick:l[3]||(l[3]=c=>m(a(f))),alt:""},null,8,Q),[[k,s.value!==a(f)]])])])):C("",!0)]),_:1})]),_(u("input",{class:"yput",type:"text","onUpdate:modelValue":l[4]||(l[4]=c=>e.value=c),onKeypress:I,required:"",onKeydown:x,placeholder:i.value[1],maxlength:a(D),onKeyup:F(B,["enter"]),onInput:x},null,40,R),[[$,e.value]]),u("button",{onClick:S(B,["prevent"]),class:"subb"},"Отправить",8,W)]),a(v)?(p(),T(w,{key:0,name:"mene",class:"ninit"},{default:y(()=>[u("p",null,q(a(o).input2==""?"Вы не ввели имя":"Неверный номер"),1)]),_:1})):C("",!0),a(h)?(p(),T(w,{key:1,name:"mene",class:"ninit"},{default:y(()=>[X]),_:1})):C("",!0)],64))}};export{ee as _,le as a,se as b,te as c};
