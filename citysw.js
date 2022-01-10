// Delhi Red Fort
// Agra Taj Mahal
// Jaipur Jal Maha
let city=require("readline-sync")
var city1=city.question("enter the city name")
switch(city1){
    case 'Delhi':
        console.log("Red Fort");
        break;
    case 'Agra':
        console.log("Taj Mahal");
        break;
    case 'Jaipur':
        console.log('Jal Mahal')
        break;
    default:
        console.log("'invalid input")

}