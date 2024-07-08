
let n=document.getElementById("n");
let lastScroll=window.scrollY;
let x=document.getElementById("x");
document.addEventListener("scroll",()=>{
  if(lastScroll<window.scrollY){
   // n.style.transform="scale(0)";
   n.style.top="-70px";
   x.style.top="-70px";
   console.log("Going down");
  }
  else{
   console.log("Going up");
   n.style.top="0px";
   x.style.top="12px";
   // n.style.transform="scale(1)";
  }
  lastScroll=window.scrollY;
});