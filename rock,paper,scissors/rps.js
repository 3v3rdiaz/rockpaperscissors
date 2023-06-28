const zero = "rock";
const one = "paper";
const two = "scissors";

const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText");
const playAgainText = document.querySelector('#playAgainText');
const yes = document.querySelector('#yesOption');
const no = document.querySelector('#noOption');
var countRounds = localStorage.getItem("cr");
var count = 0;

let player;
let result;
let computerHand;

// Need to take round input before the script starts.

function returnRounds()
{
    var countRounds = parseInt(localStorage.getItem("cr"));
    return countRounds;
}

/*var userInput = document.getElementById("rounds");
userInput.addEventListener("keypress", returnRounds);*/


function getComputerChoice() {
  // This function computes a random choice for the computer.
  const computerHandGeneration = Math.floor(Math.random() * 3);

  switch(computerHandGeneration) 
  {
    case 0:
      return zero;
      break;
    case 1:
      return one;
      break;
    case 2:
      return two;
      break;
  }
}

function winner(player, computerHand) {
  if (
    (player === zero && computerHand === one) ||
    (player === one && computerHand === two) ||
    (player === two && computerHand === zero)
  ) {
    return("Computer wins");
  } else if (
    (computerHand === zero && player === one) ||
    (computerHand === one && player === two) ||
    (computerHand === two && player === zero)
  ) {
    return("You win");
  } else if (
    (player === zero && computerHand === zero) ||
    (player === one && computerHand === one) ||
    (player === two && computerHand === two)
  ) {
    return("Tie");
  }
}

function disableButtons()
{
  document.getElementById("rockChoice").disabled = true;
  document.getElementById("paperChoice").disabled = true;
  document.getElementById("scissorChoice").disabled = true;
};

const rockBtn = document.querySelectorAll('#rockChoice');
const paperBtn = document.querySelectorAll('#paperChoice');
const scissorBtn = document.querySelectorAll('#scissorChoice');
const yesButton = document.querySelectorAll('#yesOption'); 
const noButton = document.querySelectorAll('#noOption');

yesButton.forEach(button => button.addEventListener("click", () => {
  location.reload();
}));

rockBtn.forEach(button => button.addEventListener("click", () =>
{
  player = button.textContent;
  computerHand = getComputerChoice();

  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computerHand}`;

  var winText = winner(player, computerHand);
  resultText.textContent = `Result: ${winText}`;

  
  if(count === returnRounds())
  {
    disableButtons();
    window.location.href="no.html";
  };
  
  count++;
}));

scissorBtn.forEach(button => button.addEventListener("click", () =>
{
  player = button.textContent;
  computerHand = getComputerChoice();

  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computerHand}`;

  var winText = winner(player, computerHand);
  resultText.textContent = `Result: ${winText}`;

  if(count === returnRounds())
  {
    disableButtons();
    window.location.href="no.html";
  };

  count++;
}));

paperBtn.forEach(button => button.addEventListener("click", () =>
{
  player = button.textContent;
  computerHand = getComputerChoice();

  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computerHand}`;

  var winText = winner(player, computerHand);
  resultText.textContent = `Result: ${winText}`;

  if(count === returnRounds())
  {
    disableButtons();
    window.location.href="no.html";
  };

  count++;
}));


