console.log("The next line is output from Switch.js ");

let count=0;

if (marks>=0 &&marks<50){
    count ='C';
}
else if (marks>=50 &&marks<80){
    count = 'B';
}
else if (marks>=80 &&marks<=100){
    count = 'A';
}


switch(count){

    case 'C':
        console.log(`Marks are ${marks} and grade is C`);
        break;

    case 'B':
        console.log(`Marks are ${marks} and grade is B`);
        break;

    case 'A':
        console.log(`Marks are ${marks} and grade is A`);
        break;
            
    default :
        console.log(`Enter marks value between 0 and 100 only`);
        break;

}