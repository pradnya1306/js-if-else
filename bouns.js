// A company decided to give a bonus of 5% to an employee if his/her year of 
// service is more than 5 years. Ask users for their salary and year of service
//  and print the net bonus amount.
let net=require("readline-sync")
var salary=net.questionInt("enter the salary")
var service=(net.questionInt("enter the service year"))
if (service>5){
    bouns=salary/100*5
    console.log("net bouns =",bouns)
}else{
    console.log("no bouns")
}