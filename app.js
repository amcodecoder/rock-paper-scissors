
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button')

  // variables for storing scores
  let humanScore = 0;
  let computerScore = 0;

 //  events listeners for human inputs from the DOM
rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

//  the game logic
function playRound(e){

    // GAME INPUTS

    // get human input for the game and play the game
    let humanSelection = e.target.textContent.toLowerCase();
    // console.log(humanSelection);

    //  get computer input for the game
    let computerSelection = getComputerSelection() 
    function getComputerSelection() {
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
    
    // The game logic
    if (humanScore < 5 && computerScore < 5 ){
           
        // do this when rock button is clicked
        if (humanSelection === 'rock' && computerSelection === 'scissors'){
                // increment the value of humanScore 
                ++humanScore
                if (humanScore === 5){
                    document.querySelector('#announcement').textContent = 'The winner is Human...'
                }
                // update the DOM with the score
                document.querySelector('#humanScore').textContent = `Human: ${humanScore}`
                // update the game status indicating who won the current round
                document.querySelector('#win').textContent = 'Status: Human Won this round';

        } else if (humanSelection === 'rock' && computerSelection === 'paper'){
                // increment the value of computerScore 
                ++computerScore
                if (computerScore === 5){
                    document.querySelector('#announcement').textContent = 'The winner is Computer ...'
                }
                // update the DOM with the score
                document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`
                // update the game status indicating who won the current round
                document.querySelector('#win').textContent = 'Status: Computer Won this round';
        
        // do this when paper button is clicked
        }else if (humanSelection === 'paper' && computerSelection === 'rock'){
                // increment the value of humanScore 
                ++humanScore
                if (humanScore === 5){
                    document.querySelector('#announcement').textContent = 'The winner is Human...'
                }
                // update the DOM with human score
                document.querySelector('#humanScore').textContent = `Human: ${humanScore}`
                 // update the game status indicating human won the current round
               document.querySelector('#win').textContent = 'Status: Human Won this round';
         }else if (humanSelection === 'paper' && computerSelection === 'scissors'){
               // increment the computer Score 
                ++computerScore
                if (computerScore === 5){
                    document.querySelector('#announcement').textContent = 'The winner is Computer ...'
                }
                // update the DOM with the score
                document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`
                 // update the game status indicating computer won the current round
               document.querySelector('#win').textContent = 'Status: Computer Won this round';
               
            // do this when scissors button is clicked
            } else if (humanSelection === 'scissors' && computerSelection === 'paper'){
                // increment the value of humanScore 
                ++humanScore
                if (humanScore === 5){
                    document.querySelector('#announcement').textContent = 'The winner is Human...'
                }
                // update the DOM with human score
                document.querySelector('#humanScore').textContent = `Human: ${humanScore}`
                 // update the game status indicating human won the current round
               document.querySelector('#win').textContent = 'Status: Human Won this round';
         }else if (humanSelection === 'scissors' && computerSelection === 'rock'){
               // increment the computer Score 
                ++computerScore
                if (computerScore === 5){
                    document.querySelector('#announcement').textContent = 'The winner is Computer ...'
                }
                // update the DOM with the score
                document.querySelector('#computerScore').textContent = `Computer: ${computerScore}`
                 // update the game status indicating computer won the current round
               document.querySelector('#win').textContent = 'Status: Computer Won this round';
               } else if (humanSelection === computerSelection){
                // update the game status with 'tiles'
                document.querySelector('#win').textContent = `Status: It's Tiles`;
            } 
                
    } 

}

    