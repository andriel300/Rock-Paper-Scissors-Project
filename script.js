let choices = ["rock", "paper", "scissors"]
let userScore = 0;
let computerScore = 0;
let playerSelection = inputUser();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function inputUser(){
    let UserChoice = prompt("Please use only Paper, rock or scissors to play: ").toLowerCase();
    return UserChoice;
}