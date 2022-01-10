let width=require("readline-sync")
var width1=width.questionInt("enter the width")
var width2=width.questionInt("enter the width")
var width3=width.questionInt("enter the width")
var width4=width.questionInt("enter the width")
if (width1==width2 && width1==width3 && width1==width4 && width2==width3 && width2==width4 && width4==width3){
    console.log("it is squre")
}else if ((width1==width2 && width4==width3)||(width1==width3 && width2==width4)||(width1==width4 && width2==width3)){
    console.log ("it is rectangle")
} else {
    console.log("it is invalid")
}
