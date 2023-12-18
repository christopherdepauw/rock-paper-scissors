let playerScore = 0;
let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tieGame;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return roundWin;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return roundWin;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return roundWin;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return roundLoss;
     } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return roundLoss;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return roundLoss;
    } else {
        return inputError;
    }
  }

    const roundWin = "user wins round."
    const roundLoss = "computer wins round.";
    const tieGame = "Tie game, replay round.";
    const inputError = "Error. Only enter rock, paper, or scissors. Replay round.";

    
    
    
  function game() {
    for (i = 0; i < 50; i++) {
    let randomChoice = Math.floor(Math.random() * 3);
    
    function getComputerChoice() {
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else if (randomChoice === 2) {
        return "scissors"; 
    }
}
    let userInput = prompt("Rock, paper, or scissors");
    function getUserChoice() {
        return userInput.toLowerCase();
    }
    let playerSelection = getUserChoice();
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("Computer score is " + computerScore);
    if (computerScore === 3 || playerScore === 3) {
        break;
    }
    }
    function gameScore(roundResult) {
        if (roundResult === roundWin) {
            playerScore++;
        } else if (roundResult === roundLoss) {
            computerScore++;
        }
    } 

    if (playerScore === 3) {
        console.log("Game over. User wins match " + playerScore + " games to " + computerScore + ". ");
    } else if (computerScore === 3 ) {
        console.log("Game over. Computer wins match " + computerScore + " games to " + playerScore + ". ");
    }
   }
   game();


  


  
  