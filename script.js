let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    // computer chooses all of the three choices in random
    return choices[~~(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // Rounds of the game
    // function that will randomly return either rock paper or scissors in console log

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

function game(playerSelect) {
    //play the game for five rounds
    let playerSelection = capitalize(playerSelect);
    let computerSelection = computerPlay;

    // Plays one a round game
    playRound(playerSelection, computerSelection);

    // Evaluates rounds scores
    if (userScore === 5) {
        console.log("WINNER!");
    } else if (computerScore === 5) {
        console.log("The computer has defeated you!");
    }
}

function capitalize(string) {
    return (
        string.toLowerCase().charAt(0).toUpperCase() +
        string.toLowerCase().slice(1)
    );
}

game();
