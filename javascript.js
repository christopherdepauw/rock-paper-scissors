let randomChoice = Math.floor(Math.random() * 3);
const userInput = prompt("Rock, paper, or scissors");
const playerSelection = userInput.toLowerCase();
console.log(playerSelection);


function getComputerChoice(rock, paper, scissors) {
    if (randomChoice === 0) { 
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else if (randomChoice === 2) {
        return "scissors"; 
    }
}
console.log(getComputerChoice());



const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
      if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats rock!";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
      } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats scissors!";
      } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beats paper!";
      } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats rock!";
      } else if (playerSelection === computerSelection) {
        return "It's a tie! Replay round!";
    }
}


console.log(playRound(playerSelection, computerSelection));
    









