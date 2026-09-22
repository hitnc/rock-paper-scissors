//* Computer choice *//

function getComputerChoice(max) {
  let answer = Math.floor(Math.random() * max);  

  if (answer === 0) {
    return "rock";
} else if (answer === 1) {
    return "paper";
} else {
    return "scissors";
}
}

console.log(getComputerChoice(3));

//* Human choice *//
function getHumanChoice() {
sign = prompt("What is your choice"); {
    
console.log(sign);
}
}


//* Score variables *//

let humanChoice = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("draw");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
    } else (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Draw");
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
