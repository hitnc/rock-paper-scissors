
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`\n--- ROUND ${i + 1} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("\n======================");
    console.log("       GAME OVER        ");
    console.log("========================");
    console.log(`Final resutl -> You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations, you won!!");
    } else if (computerScore > humanScore) {
        console.log("Computer won. Try it again!!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();