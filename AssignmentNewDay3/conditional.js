console.log("The next line is output from Conditional.js ");

if (marks>=0 &&marks<50){
    console.log(`Marks are ${marks} and grade is C`);
}
else if (marks>=50 &&marks<80){
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks>=80 &&marks<=100){
    console.log(`Marks are ${marks} and grade is A`);
}
else{
    console.log(`Enter marks value between 0 and 100 only`);
}