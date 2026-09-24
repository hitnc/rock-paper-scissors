
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const answer = Math.floor(Math.random() * 3);  

  if (answer === 0) {
    return "rock";
    } else if (answer === 1) {
    return "paper";
    } else {
    return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors?");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    console.log("You chose:", humanChoice);
    console.log("Computer's choice:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
    console.log("Your score: " + humanScore + " " + "///" + " Computer's score: " + computerScore);
}

function playGame(humanScore, computerScore) {
    console.log("Global score: " + humanScore + " " + "/" + " " + computerScore);
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
