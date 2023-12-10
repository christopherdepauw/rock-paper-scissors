let randomChoice = Math.floor(Math.random() * 3);

function getComputerChoice(rock, paper, scissors) {
    if (randomChoice === 0) { 
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else if (randomChoice === 2) {
        return "scissors"; 
    }
}
console.log(getComputerChoice())




