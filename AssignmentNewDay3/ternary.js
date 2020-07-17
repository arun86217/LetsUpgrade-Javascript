console.log("The next line is output from Ternary.js ");

var result =(marks>=0 &&marks<50)   ?   console.log(`Marks are ${marks} and grade is C`) :
            (marks>=50 &&marks<80)  ?  console.log(`Marks are ${marks} and grade is B`):
            (marks>=80 &&marks<=100)? console.log(`Marks are ${marks} and grade is A`):
            console.log(`Enter marks value between 0 and 100 only`);
