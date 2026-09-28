let form =document.querySelector("#form");
let num=document.querySelector("#num");
let s=document.querySelector("#s");
let btn=document.querySelector("#btn");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(num.value%2==0){
        s.textContent="You entered a even number"
    }else if(num.value%2!=0){
        s.textContent="You entered a odd number"
    }
})