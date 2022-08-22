let computerScore = 0;
let playerScore = 0;
let userInput = prompt();

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
  return randomNum;
}

const getComputerAnswer = getComputerChoice();

function playGround(playerSelection, computerSelection) {
  const playerSelectionLowCase = playerSelection.toLowerCase();

  if (playerSelectionLowCase === "rock" && computerSelection === "scissors") {
    console.log(
      `You Win with a score of ${++playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "rock" &&
    computerSelection === "paper"
  ) {
    console.log(
      `You Lose with a score of ${playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "rock" &&
    computerSelection === "rock"
  ) {
    console.log(
      `You Tied with a score of ${playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "paper" &&
    computerSelection === "scissors"
  ) {
    console.log(
      `You Lose with a score of ${playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "paper" &&
    computerSelection === "rock"
  ) {
    console.log(
      `You Win with a score of ${++playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "paper" &&
    computerSelection === "paper"
  ) {
    console.log(
      `You Tied with a score of ${playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "scissors" &&
    computerSelection === "paper"
  ) {
    console.log(
      `You Win with a score of ${++playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "scissors" &&
    computerSelection === "rock"
  ) {
    console.log(
      `You Lose with a score of ${playerScore} and you chose ${userInput}`
    );
  } else if (
    playerSelectionLowCase === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log(
      `You Tied with a score of ${playerScore} and you chose ${userInput}`
    );
  }

  while (playerScore !== 5) {
    prompt();
    playGround(userInput, getComputerAnswer);
  }
}

// console.log(game())
console.log(playGround(userInput, getComputerAnswer));

// console.log(getComputerChoice())
