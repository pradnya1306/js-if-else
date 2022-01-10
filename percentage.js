let mark=require("readline-sync")
// var mark1=mark.questionInt("enter the physics")
// var mark2=mark.questionInt("enter the chemstry")
// var mark3=mark.questionInt("enter the Biology")
// var mark4=mark.questionInt("enter the Mathematics")
// var mark5=mark.questionInt("enter the Computer")
// var sum=mark1+mark2+mark3+mark4+mark5
// var per=sum/5
var per=mark.questionInt("enter the physics")
if  (per>=90){
    console.log("Grade A")
}else if(per >= 80){
    console.log("Grade B")
}else if(per>= 70) {
    console.log("Grade C")
}else if(per >= 60){
    console.log("Grade D")
}else if(per >= 40){
    console.log ("Grade E")
}else if(per < 40){
    console.log("Grade F")
}
