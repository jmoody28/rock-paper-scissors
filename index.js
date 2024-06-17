let humanScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const result = document.querySelector("#result");
const player = document.querySelector("#player");
const bot = document.querySelector("#bot");
const tie = document.querySelector("#tie");
const count = document.querySelector("#count");

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
    result.textContent = "Tie";
    draw++;
    tie.textContent = draw;
    round++;
    count.textContent = round;
  } else if (humanSelection == "rock") {
    if (computerSelection == "paper") {
      result.textContent = "Computer gains a point";
      computerScore++;
      bot.textContent = computerScore;
      round++;
      count.textContent = round;
    } else {
      result.textContent = "You gain a point";
      humanScore++;
      player.textContent = humanScore;
      round++;
      count.textContent = round;
    }
  } else if (humanSelection == "paper") {
    if (computerSelection == "scissors") {
      result.textContent = "Computer gains a point";
      computerScore++;
      bot.textContent = computerScore;
      round++;
      count.textContent = round;
    } else {
      result.textContent = "You gain a point";
      humanScore++;
      player.textContent = humanScore;
      round++;
      count.textContent = round;
    }
  } else if (humanSelection == "scissors") {
    if (computerSelection == "rock") {
      result.textContent = "Computer gains a point";
      computerScore++;
      bot.textContent = computerScore;
      round++;
      count.textContent = round;
    } else {
      result.textContent = "You gain a point";
      humanScore++;
      player.textContent = humanScore;
      round++;
      count.textContent = round;
    }
  }
  if (humanScore == 5) {
    result.textContent = "Victory! You won 5 rounds.";
    humanScore = 0;
    player.textContent = humanScore;
    computerScore = 0;
    bot.textContent = computerScore;
    draw = 0;
    tie.textContent = draw;
  } else if (computerScore == 5) {
    result.textContent = "Defeat! The computer won 5 rounds";
    humanScore = 0;
    player.textContent = humanScore;
    computerScore = 0;
    bot.textContent = computerScore;
    draw = 0;
    tie.textContent = draw;
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   console.log(humanScore, computerScore);
// }

// playGame();
