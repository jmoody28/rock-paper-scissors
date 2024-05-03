let humanScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice() {
  let count = Math.floor(Math.random() * 3);
  const choice = ["rock", "paper", "scissors"];
  return choice[count];
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, or scisors").toLowerCase();
  return humanChoice;
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("tie");
    draw++;
  } else if (humanSelection == "rock") {
    if (computerSelection == "paper") {
      console.log("Computer wins");
      computerScore++;
    } else {
      console.log("You win");
      humanScore++;
    }
  } else if (humanSelection == "paper") {
    if (computerSelection == "scissors") {
      console.log("Computer wins");
      computerScore++;
    } else {
      console.log("You win");
      humanScore++;
    }
  } else if (humanSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("Computer wins");
      computerScore++;
    } else {
      console.log("You win");
      humanScore++;
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(humanScore, computerScore);
}

playGame();
