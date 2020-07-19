let x=Number(document.getElementById('demo').value);

function  rec(){
   
    if (x>100) {

        document.getElementById('ans').innerHTML="number "+x 

    } 
    else {
        rec();
    }

}