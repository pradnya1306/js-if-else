var num=require("readline-sync")
num1=num.question("enter the number")
if((num1%3==0) && (num1%7==0)){
    console.log("chocolate")
}else if(num1%3==0){
    console.log("choco")
}else if(num1%7==0){
    console.log("late")
}else{
    console.log("not divisible by 3,7,")
}
