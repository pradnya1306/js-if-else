let result=require("readline-sync")
var name=result.question("enter the name")
var password=result.question("enter the password")
if (!password.includes(name)){
    console.log("you can not take this password")
}
else{
    console.log("you can take this password")
}

// var a="my name is pradnya"
// var result=a.includes("name")
// console.log(result)

