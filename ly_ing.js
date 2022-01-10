var str=require("readline-sync")
var str1=str.question("enter the name")
if (str1.includes("ing")){
    console.log(str1.replace("ing","ly"))
}
else if(str1.includes("ly")){
    console.log(str1.replace("ly","ing"))
}
else{
    console.log(str1+"ingly")
}