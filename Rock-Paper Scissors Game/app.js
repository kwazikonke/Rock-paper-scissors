let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3); //This always returns value from 0.0000111 to 2.9999.Math.random() returns value between 0 and 1.Math.floor() changes decimal to integer.
  return choices[randomNumber]; //returns r,p,s.
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  let user = convertToWord(userChoice);
  let computer = convertToWord(computerChoice);
  let smallUser = "(YOU)".fontsize(3).sub();
  let smallComp = "(COMPUTER)".fontsize(3).sub();
  result_p.innerHTML = user + smallUser + " beats " + computer + smallComp + ".You win!.";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 400); //this can also be written,this is css6.
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  let user = convertToWord(userChoice);
  let computer = convertToWord(computerChoice);
  let smallUser = "(YOU)".fontsize(3).sub();
  let smallComp = "(COMPUTER)".fontsize(3).sub();
  result_p.innerHTML = computer + smallComp + " beats " + user + smallUser + ".You lost!.";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 400);
}

function draw(userChoice, computerChoice) {
  let user = convertToWord(userChoice);
  let computer = convertToWord(computerChoice);
  let smallUser = "(YOU)".fontsize(3).sub();
  let smallComp = "(COMPUTER)".fontsize(3).sub();
  result_p.innerHTML = user + smallUser + " equals " + computer + smallComp + ". It's a draw.";
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function () { document.getElementById(userChoice).classList.remove('grey-glow') }, 400);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }


}

function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })
  paper_div.addEventListener('click', function () {
    game("p");
  })
  scissors_div.addEventListener('click', function () {
    game("s");
  })
}
main();
