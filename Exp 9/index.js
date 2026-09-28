let form=document.querySelector("#form");
let inp=document.querySelector('#inp');
let btn1=document.querySelector("btn1");
let sp =document.querySelector("#sp");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sp.textContent=`You Entered : ${inp.value}`;
});