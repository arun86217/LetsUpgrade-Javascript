function calc(){
   var a=+(document.getElementById('calculatingBox').value);
   let y = eval(a)
    document.getElementById("answer").innerHTML=y;
}