// Write a program to accept the cost price of a bike and display the road tax 
// to be paid according to the following criteria : 
//         Cost price (in Rs)                                       Tax
//         > 100000                                                  15 %
//         > 50000 and <= 100000                          10%
//         <= 50000                                                  5%

let bike=require("readline-sync")
var price=bike.question("enter the bike price : ")
if (price>100000){
    tax=price/100*15
    console.log("road tax=",tax)
}else if(price>50000 && price<=100000){
    tax=price/100*10
    console.log("road tax =",tax)
}else{
    tax=price/100*5
    console.log("road tax = ",tax)
}