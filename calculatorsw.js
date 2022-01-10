var calculator=require("readline-sync")
var num1=calculator.questionInt("enter the first number")
var num2=calculator.questionInt("enter the second number")
var operator=calculator.question("enter the operator")
switch(operator){
    case '+':
        var result=num1+num2
        console.log(`${num1}+${num2}=${result}`)
        break;
    case '-':
        result=num1-num2
        console.log(`${num1}-${num2}=${result}`)
        break;
    case '/':
        result=num1/num2
        console.log(`${num1}/${num2}=${result}`)
        break;

    case '*':
        result=num1*num2
        console.log(`${num1}*${num2}=${result}`)
        break;
    default:
        console.log("invalid number")
        break;
}
// var result=num1+num2
// console.log(result)