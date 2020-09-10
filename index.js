




let hr=document.querySelector("#hr");
let min=document.querySelector("#mn");
let sec=document.querySelector("#sc");

const deg=6;
setInterval(()=>{
var day=new Date();
let hh=day.getHours()*30;
let mm=day.getMinutes()*deg;
let ss=day.getSeconds()*deg;

 hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
 min.style.transform=`rotateZ(${mm}deg)`;
 sec.style.transform=`rotateZ(${ss}deg)`;
});