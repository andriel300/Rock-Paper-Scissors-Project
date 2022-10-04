let choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let playerSelection = inputUser();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    // computer chooses all of the three choices in random
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function inputUser() {
    // user input type
    let UserChoice = prompt(
        "Please use only paper, rock or scissors to play: ",
    ).toLowerCase();
    return UserChoice;
}

function playRound(playerSelection, computerSelection) {
    // Rounds of the game
    // function that will randomly return either rock paper or scissors in console log

    inputUser();
    getComputerChoice();

    // Tie
    if (playerSelection === computerSelection) {
        return "Its a tie! Play again!";
    }
    // Rock beats Scissors
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return "You win! Rock beats Scissors!";
    }
}
