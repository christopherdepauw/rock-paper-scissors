let randomChoice = Math.floor(Math.random() * 3);
let userInput = prompt("Rock, paper, or scissors");



function getUserChoice() {
    return userInput.toLowerCase();
} 

console.log(getUserChoice());

function getComputerChoice() {
    if (randomChoice === 0) { 
         return "rock";
    } else if (randomChoice === 1) {
         return "paper";
    } else if (randomChoice === 2) {
         return "scissors"; 
    }
} 
console.log(getComputerChoice());

let playerSelection = getUserChoice();
let computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
        playerSelection = getUserChoice();
        computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            return "tie",
            replayRound();
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
          return "win";
         } else if (playerSelection === "scissors" && computerSelection === "paper") {
          return "win";
         } else if (playerSelection === "paper" && computerSelection === "rock") {
          return "win";
         } else if (computerSelection === "rock" && playerSelection === "scissors") {
          return "loss";
          } else if (computerSelection === "scissors" && playerSelection === "paper") {
          return "loss";
         } else if (computerSelection === "paper" && playerSelection === "rock") {
          return "loss";
         } else {
            return "invalid response"
         }
        }

        console.log(playRound());

        function replayRound(playerSelection, computerSelection) {
            randomChoice = Math.floor(Math.random() * 3);
            userInput = prompt("Rock, paper, or scissors");
            playerSelection = getUserChoice();
            computerSelection = getComputerChoice();
            getComputerChoice();
            getUserChoice();
            console.log(playerSelection);
            console.log(computerSelection);
            return playRound(playerSelection, computerSelection);
        }
        
    

       
    










       
    











    

   /* if(userWins === 1) {
        score = 'Wins: ';
    }
    score += playRound("win") + ' ';
    if(computerWins === 1) {
        score = 'Losses: ';
    }
    score += playRound("loss") + ' ';

    score++; */
    

       
    









