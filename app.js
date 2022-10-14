
// store computer total scores 
let computerScore = 0
// store human total scores 
let humanScore = 0
// const rock = 'rock'
// const paper = 'paper'
// const scissors = 'scissors'

// This loop allow th game to be played up to 5 times
for (let i = 0; i<5; i++){
    // get inputs from the human
    const playerSelection = getHumanChoice()
    // get inputs from the computer
    const computerSelection = getComputerChoice()
    
    // this keeps track of computer wins
    if(game(playerSelection,computerSelection) === 'Computer Wins!'){
        computerScore++
    // keeps tracks of human wins
    }else if(game(playerSelection,computerSelection) === 'You Win!'){
        humanScore++
    }
    // this displays who wins the current round of the game 
    console.log(game(playerSelection,computerSelection))

}
// this is where the main logics of the game reside, it's where all conditions get checked in order to decide who wins a particular round in the game.. 
function game(playerSelection,computerSelection){
        
        function playRound(){
            if (playerSelection === 'rock' && computerSelection === 'scissors'){
                return 'You Win!'
            } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
                return 'You Win!'
            } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                return 'You Win!'
            } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
                return 'Computer Wins!'
            } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
                return 'Computer Wins!'
            } else if (playerSelection === 'rock' && computerSelection === 'paper'){
                return 'Computer Wins!'
            }else if (playerSelection === computerSelection){
                return 'Ties!'
            } 

        }
        return playRound()
    }
// This is used to get human input for the game
function getHumanChoice(){
    // prompt human for input and store in humanChoice var
    let input = prompt(`What's your choice?`)
        // convert any kind of input by human to lowe case 
        input = input.toLowerCase()
      
    //check if the input provided matches one of the valid words used in the game when ever new input is inserted. If it does not match valid input ask the user to try again with valid input.   
    while (input != 'rock' && input != 'scissors' && input != 'paper'){
        // alert user invalid input is entered
        alert('Invalid input, please try again!')
        // ask the user for new inputs and convert the inputs all to lower case
        input = prompt(`What's your choice?`)
        input = input.toLowerCase()

     }
     return input 
       
        
}
// This is used to get computer input for the game
function getComputerChoice() {
    let computerChoice =  Math.floor( Math.random() * 3)
    let play = ''

    switch (computerChoice) {
        case 0: play = 'rock'
            
            break;
        case 1: play = 'paper'
            
            break;
        case 2: play = 'scissors'
            
            break;
    
    }

    return play
}

 // this announces winner and loser at the end of the game 
 if (computerScore > humanScore){
    console.log(`Computer won the game with total score of ${computerScore}`)
}else if(computerScore < humanScore){
    console.log(`You won the game with total score of ${humanScore}`)
}else if (humanScore === computerScore){
    console.log(`The game is Tie! Human score: ${humanScore} and Computer score: ${computerScore}`)
}

