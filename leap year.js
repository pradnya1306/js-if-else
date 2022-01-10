let year=require("readline-sync")
var year1=year.question("enter the year")
if (year1%100==0){
    if (year1%400==0){
        console.log("its century year")
    }else{
        console.log("it is not leap year")
    }
}else{
    if (year1%4==0){
        console.log("it is leap year")
    }else{
        console.log("it is not leap year")
    }
}