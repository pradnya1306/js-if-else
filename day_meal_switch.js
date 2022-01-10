let day=require("readline-sync")
var day1=day.question("enter the name of day : ")
// var time=day.question("enter the meal time(breakfast,lunch,dinner)")
switch(day1){
    case "monday":
      console.log("your meal is pav bhaji")
      break;
    case "tuesday":
    console.log("your meal is roti")
        break;
    case "wendsday":
      console.log("your meal is pav")
      break;
    case "thirsday":
      console.log("your meal is poha")
      break;
    case "friday":
      console.log("your meal is rice")
      break;
    case "saturday":
      console.log("your meal is rajma")
      break;
    case "sunday":
      console.log("your meal is pullav")
      break;
    default:
        console.log("invalid day")
}