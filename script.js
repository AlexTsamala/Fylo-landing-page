
const invalidtext = document.getElementById("text");
const invalidtext2 = document.getElementById("text-two");
const button = document.getElementById("checkbutton");
const buttonsecond=document.getElementById("checkbuttontwo");
const inputfirst = document.getElementById("first-input");
const inputsecond = document.getElementById("second-input");


button.addEventListener("click", ()=>{
  if(!inputfirst.checkValidity()){
        invalidtext.style.display="block";
        invalidtext.style.color="#EF4877";
  }else{
    invalidtext.style.display="none"
  }
});

buttonsecond.addEventListener("click",()=>{
    if(!inputsecond.checkValidity()){
        invalidtext2.style.display="block"
    }else{
        invalidtext2.style.display="none"
    }
})