function table(){
    tableNumber = Number(document.getElementById("tableNumber").value);
    document.getElementById("s").innerHTML=""   
    for (let i=1;i<=10;i++){
        document.getElementById("s").innerHTML+= `${tableNumber} *  ${i} = ${tableNumber*i}`+"<br/>";
    }
    
}