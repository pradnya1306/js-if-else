

// let unit1=require("readline-sync")
// var unit=unit1.questionInt("enter the unit")
// if (unit<=50){
//    bill=unit*0.50
//    console.log("your electricity bill is",bill)
// }else if(unit<=100){
//     bill=unit*0.75
//     console.log("your electricity bill is",bill)
// }else if(unit<=250){
//     bill=unit*1.20
//     console.log("your electricity bill is",bill)
// }else{
//     bill=unit*1.50
//     console.log("your electricity bill is",bill)
// }

// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);