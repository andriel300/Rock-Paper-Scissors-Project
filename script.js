let userScore = 0;
let computerScore = 0;
let playerSelection = inputUser();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    // computer chooses all of the three choices in random
    let choices = ["rock", "paper", "scissors"];
    let getRandomChoices = choices[Math.floor(Math.random() * choices.length)];
    return choices[getRandomChoices];
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

    console.log(`You selected: "${playerSelection}"`);
    console.log(`Computer selected: "${computerSelection}"`);

    // Tie
    if (playerSelection === computerSelection) {
        return "Its a tie! Play again!";
    }

    // Paper beats Rock 1
    else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return "You win! Paper beats rock!";
    }

    // Rock beats Scissors 2
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        return "You win! Rock beats Scissors!";
    }

    // Scissors beats Paper 3
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return "You win! Scissors beats paper!";
    }

    // Rock beats Scissors 4
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors!";
    }
    // Rock beats Scissors 5
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    }
    // Rock beats Scissors 6
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!";
    }
}

function game(playerChoice) {
    //play the game for five rounds
    let player = playerChoice;
    let computer = getComputerChoice;

    // Plays one a round game
    playRound(player, computer);

    // Evaluates rounds scores
    if (userScore === 5) {
        console.log("WINNER!");
    } else if (computerScore == 5) {
        console.log("The computer has defeated you!");
    }
}

game();
