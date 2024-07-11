document.addEventListener("DOMContentLoaded", function() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
      const choices = ["rock", "paper", "scissor"];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];

      if (humanChoice === computerChoice) {
        alert("Tie");
      } else if ((humanChoice === "rock" && computerChoice === "scissor") ||
                 (humanChoice === "scissor" && computerChoice === "paper") ||
                 (humanChoice === "paper" && computerChoice === "rock")) {
        alert("Human wins");
        humanScore++;
      } else {
        alert("Computer wins");
        computerScore++;
      }

      const logMessage = `Human choice: ${humanChoice}, Computer choice: ${computerChoice}`;
      displayLogMessage(logMessage);
      displayScores();

      if (humanScore >= 5 || computerScore >= 5) {
        announceWinner();
      }
    }

    const rockBut = document.querySelector("#rock");
    rockBut.addEventListener("click", () => playRound("rock"));

    const paperBut = document.querySelector("#paper");
    paperBut.addEventListener("click", () => playRound("paper"));

    const scissorBut = document.querySelector("#scissor");
    scissorBut.addEventListener("click", () => playRound("scissor"));

    function displayLogMessage(message) {
      const resultDiv = document.querySelector("#results-container");
      const logItem = document.createElement("div");
      logItem.textContent = message;
      resultDiv.appendChild(logItem);
    }

    function displayScores() {
      const scoreDiv = document.querySelector("#results-container");
      scoreDiv.innerHTML = "";

      const humanScoreDisplay = document.createElement("p");
      humanScoreDisplay.textContent = `Human score: ${humanScore}`;
      scoreDiv.appendChild(humanScoreDisplay);

      const computerScoreDisplay = document.createElement("p");
      computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
      scoreDiv.appendChild(computerScoreDisplay);
    }

    function announceWinner() {
      const winnerMessage = humanScore > computerScore ? "Human wins the game!" :
                            computerScore > humanScore ? "Computer wins the game!" :
                            "It's a tie!";
      const resultsDiv = document.querySelector("#results-container");
      const winnerDisplay = document.createElement("p");
      winnerDisplay.textContent = winnerMessage;
      resultsDiv.appendChild(winnerDisplay);

      // Disable buttons after game ends
      document.querySelectorAll("#container button").forEach(button => {
        button.disabled = true;
      });
    }
  });