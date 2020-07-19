function fun()
{
    
 sales = Number(document.getElementById('sale').value);;
 
 
 if (sales>=0&&sales<=5000){
 
     comm="2%";

     document.getElementById('demo').innerHTML="commissiom earned from sales are:  " +comm;
 }
 else if (sales>=5001&&sales<=10000){
     comm="5%";
     document.getElementById('demo').innerHTML="commissiom earned from sales are:  " +comm;
 }
 else if (sales>=10001&&sales<=20000){
     comm="7%";
     document.getElementById('demo').innerHTML="commissiom earned from sales are:  " +comm;
 }
 else if (sales>20000){
     comm="10%";
     document.getElementById('demo').innerHTML="commissiom earned from sales are:  " +comm;
 }
}