let clas=require("readline-sync")
var held_class=clas.question("enter the how many classes held")
var attend_class=clas.question("enter the how many class attend")
var percentage=100/held_class*attend_class
if (percentage>75){
    console.log(percentage,"student will allowed to sit for exam ")
}else{
    console.log(percentage,"student will allowed to sit for exam ")
}