sr=""
function prim(){
    sr=[];
    var primeInput = document.getElementById("primieInput").value;
   for (let i=2;i<=primeInput;i++){
        count=0;
        for (let j=2;j<i;j++){

            if ((i %j)==0){
                count +=1;
            }
        }
            if(count<1){   
                sr +=i+" ";
            }
   
    }
    document.getElementById('ans').innerHTML=sr;
}

