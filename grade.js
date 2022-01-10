// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the correspondin

let marks=require("readline-sync")
var mark=marks.questionInt("enter the marks")
if(mark<25){
    console.log("grade f")
}else if(mark>=25 && mark<45){
    console.log("grade E")
}else if(mark>=45 && mark<50){
    console.log("grade D")
}else if(mark>=50 && mark<60){
    console.log("grade C")
}else if(mark>=60 && mark<80){
    console.log("grade B")
}else if(mark>=80){
    console.log("grade A")
}

