var num=require("readline-sync")
var num1=num.questionInt("enter the number")
var num2=num.questionInt("enter the number")
if (num1>num2){
    console.log(num1,"is greater")
}else{
    console.log(num2,"is greater")
}