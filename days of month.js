let days=require("readline-sync")
var month=days.question("enter the month : ")
if (month=="january"){
    console.log("31")
}else if(month=="february"){
    console.log("28 or 29")
}else if (month=="march"){
    console.log("31")
}else if (month=="april"){
    console.log("30")
}else if (month=="may"){
    console.log("31")
}else if (month=="june"){
    console.log("30")
}else if (month=="jully"){
    console.log("31")
}else if (month=="auguest"){
    console.log("31")
}else if (month=="september"){
    console.log("30")
}else if (month=="october"){
    console.log("31")
}else if (month=="november"){
    console.log("30")
}else if (month=="december"){
    console.log("31")
}else{
    console.log("we have only twelve months of the year")
}