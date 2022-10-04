let choices = ["rock", "paper", "scissors"]
let userScore = 0;
let computerScore = 0;
let playerSelection = inputUser();
let computerSelection = computerPlay();

function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}
