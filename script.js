function getComputerChoice(max) {
  let answer = Math.floor(Math.random() * max);  

  if (answer === 0) {
    return "Rock";
} else if (answer === 1) {
    return "Paper";
} else {
    return "Scissors";
}
}

console.log(getComputerChoice(3));




