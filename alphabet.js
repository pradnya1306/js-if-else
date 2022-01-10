var chr=require("readline-sync")
var chr1=chr.question("enter the character")
if ((chr1>="a"&& chr1<="z")||(chr1>="A"&& chr1<="Z")){
    console.log("it is Alphabet")
}
else if(chr1>=0){
    console.log("it is digit")
}
else{
   console.log("it is special characters")
}