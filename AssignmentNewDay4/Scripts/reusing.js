

function  rec(){
   
    let x=prompt(Number(document.getElementById('demo').value));
   
    if (x>100) {

        document.getElementById('ans').innerHTML="number "+x 

    } 
    else {
        rec();
    }

}