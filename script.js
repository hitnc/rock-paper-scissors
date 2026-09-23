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
let sign = prompt("What is your choice?"); {
    console.log(sign);
    return sign;
}
}



//* Score variables *//

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win!");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win!");
    } else {
        console.log("Draw");
    }
}

const humanSelection = getHumanChoice();
console.log("Lo que yo elegí:", humanSelection);
const computerSelection = getComputerChoice();
console.log("Lo que eligió la compu:", computerSelection);

playRound(humanSelection, computerSelection);
