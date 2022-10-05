let userScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const arrayOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoices = arrayOfChoices[randomNum];
    return compChoices;
};

console.log(computerPlay)

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
