var day=require("readline-sync")
day1=day.question("enter the day")
if (day1=="monday"){
    console.log("Dhanwantari\nSiddhi\nKritika\nSalon\nMayuri\nGauri")
}else if(day1=="tuesday"){
    console.log("Keemaya\nRoshni\nPooja\nPriyanka\nnalini\nManisha")
}else if(day1=="wendsday"){
    console.log("Shrusti\nKaruna\nParveen\nSandhya\nLeena\nKarishma")
}else if(day1=="thirsday"){
    console.log("Nikita\nMona\nPriyanka\nTejashree\nLovely\nMehzebin")
}else if(day1=="friday"){
    console.log("Pihu\nSejal\nChaya\nShrestha\nMonali\nAardhangya")
}else if(day1=="saturday"){
    console.log("Swati\nKhusboo\nidhi\nPreeti\nDipti\nAnamika")
}else if(day1=="sunday"){
    console.log("Gunjan\nShweta\nRani\nIsha\nKusu\nMadhu")
}else{
    console.log("Please enter valid week day")
}