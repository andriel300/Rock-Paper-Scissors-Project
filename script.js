// get elements from the DOM
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const resultEl = document.querySelector('.result');
const confirmBtn = document.querySelector('#confirm');
const messageEl = document.createElement('p');

// set initial scores
let playerScore = 0;
let computerScore = 0;

// add event listeners to the buttons
rockBtn.addEventListener('click', () => {
  playRound('rock');
});

paperBtn.addEventListener('click', () => {
  playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});

// play a round of the game
const playRound = (playerSelection) => {
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerSelection = computerPlay();
  const result = getResult(playerSelection, computerSelection);

  // Update the score and result displays
  if (result === 'win') {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (result === 'lose') {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
  resultEl.textContent = `You ${result}! ${playerSelection} ${getVerb(result)} ${computerSelection}.`;

  // check if the game is over
  if (playerScore >= 5 || computerScore >= 5) {
    endGame(playerScore >= 5 ? 'win' : 'lose');
  }
};

// get a random selection for the computer
const computerPlay = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// get the result of a round
const getResult = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
};

// get the correct verb for the result
const getVerb = (result) => {
  if (result === 'win') {
    return 'beats';
  } else if (result === 'lose') {
    return 'loses to';
  } else {
    return 'ties with';
  }
};

const endGame = (result) => {
  let message;
  if (result === 'win') {
    message = 'Congratulations! You won the game!';
  } else {
    message = 'You lost the game. Better luck next time!';
  }
  resultEl.textContent = message;

  // check if the button and message elements already exist
  const confirmBtn = document.querySelector('#confirm');
  const messageEl = document.querySelector('#message');
  if (!confirmBtn && !messageEl) {
    // create a new button to play again
    const newConfirmBtn = document.createElement('button');
    newConfirmBtn.id = 'confirm';
    newConfirmBtn.textContent = 'Play Again';

    // add event listener to the button
    newConfirmBtn.addEventListener('click', () => {
      // reset the scores and update the score displays
      playerScore = 0;
      computerScore = 0;
      playerScoreEl.textContent = '0';
      computerScoreEl.textContent = '0';

      // remove the button and message elements;
      if (confirmBtn) {
        confirmBtn.remove();
      }
      if (messageEl) {
        messageEl.remove();
      }
      // remove the play again button
      newConfirmBtn.remove();
    });

    // display the play again button and message
    resultEl.after(newConfirmBtn);
  }
};
