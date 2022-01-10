let price=require("readline-sync")
var buyPrice=price.questionInt("enter the buy price")
var sellingPrice=price.questionInt("enter the selling price")
if (sellingPrice>buyPrice){
    var profit=sellingPrice-buyPrice
    console.log("profit=",profit)
}else{
    var loss=buyPrice-sellingPrice
    console.log("loss=",loss)
}