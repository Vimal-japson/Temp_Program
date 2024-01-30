
let temp;
const text = document.getElementById("textbox")
const toFaren = document.getElementById("toFaren");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");
const button = document.getElementById("button");

function convert(){
  if(toFaren.checked){
    temp = Number(text.value);
    temp = temp* 9/5 + 32 ;
    result.textContent = temp.toFixed(1)+" deg F";
  }
  if(toCel.checked){
    temp = Number(text.value);
    temp = ((temp-32) * 5/9).toFixed(1) +" deg Cel";
    result.textContent = temp;
  }
}



