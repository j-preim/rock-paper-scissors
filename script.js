var choices = ["R", "P", "S"];


function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

var ties = 0;
var playerWins = 0;
var cpuWins = 0;

playRound();

function playRound() {
  var playerChoice = prompt("Enter R for rock, P for paper, S for scissors");

  console.log("Player choice: " + playerChoice);

  var cpu = random(0, 2);
  var cpuChoice = choices[cpu];

  console.log("CPU choice: " + cpuChoice);

  var message;

  if (playerChoice === cpuChoice) {
    ties++;
    message = "It's a tie!";
  }
  else if (
    (playerChoice === "R" && cpuChoice === "S") ||
    (playerChoice === "P" && cpuChoice === "R") ||
    (playerChoice === "S" && cpuChoice === "P")
  ) {
    playerWins++;
    message = "You win!";
  } else {
    cpuWins++;
    message = "You Lose!";
  }

  alert(message);
  alert(
    "Your wins: " +
      playerWins +
      "\n" +
      "Computer wins: " +
      cpuWins +
      "\n" +
      "Ties: " +
      ties
  );
  if (confirm("Play again?")) {
    playRound();
  };
}
