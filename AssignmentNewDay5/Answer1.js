

var arr=[];

function add(){
    
    temp= +(document.getElementById("insNum").value);
    
    arr.push(temp)
    
    console.log(arr)
    document.getElementById("insNum").value = " ";
    

}



function oddArray(){
    
    var ods = arr.filter(el=>el%2!=0);

    document.getElementById("oddNum").innerHTML= ods;
   

}


function oddArrayCubes(){
    var ods = arr.filter(el=>el%2!=0);
    
    var cubesOdd = ods.map(el=>el**3);

    document.getElementById("oddNumCub").innerHTML= cubesOdd;

    

}