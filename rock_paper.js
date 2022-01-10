
let choice=require("readline-sync")
var player_choice = choice.question('What do you pick? (rock, paper, scissors) : ')

// player_choice.strip()
moves = ['rock', 'paper', 'scissors']

random_move = (Math.floor((Math.random() * 3) + 0))
// random_move = (Math.floor(Math.random() * moves.length))

computer_choice = moves[random_move]

console.log("computer choice : ",computer_choice)


// console.log;
// if (player_choice ==computer_choice){
//    console.log('Draw!')
// }
// else if (player_choice== 'rock' && computer_choice== 'scissors'){

//     console.log("you win")
// }
// else if  (player_choice== 'paper' && computer_choice== 'scissors'){

//     console.log("computer win.you loss your game")
// }
// else if (player_choice == 'scissors' && computer_choice== 'paper'){

//     console.log("you win")
// }
// else if (player_choice == 'scissors' && computer_choice== 'rock'){

//     console.log("computer win")

// }
// else if (player_choice == 'paper' && computer_choice== 'rock'){

//     console.log("you win")

// }
// else if (player_choice =="rock"  && computer_choice=="paper"){

//     console.log("computer win")
// }
