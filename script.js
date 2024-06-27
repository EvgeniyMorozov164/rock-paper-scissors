const buttons = document.querySelectorAll("button");
let roundWinner = document.querySelector(".round-result");
const plScore = document.querySelector(".player-score");
const compScore = document.querySelector(".computer-score");
const resetButton = document.querySelector(".reset");
// Computer choice logic

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * 3)];  
  return choice;
}

//Human choice
buttons.forEach((button) => {
button.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target.id);
  if (target.id) {
    let human = target.id;
  let comp = getComputerChoice();
  playRound(human, comp);
  }  
  if (humanScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.disabled = true;
      resetButton.disabled = false;
    });
    showResult();
  }
});
});
// Reset game
const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  plScore.textContent = humanScore;
  compScore.textContent = computerScore;
  roundWinner.textContent = "Round result will be here";
  gameResult.textContent = "GAME RESULT";
  buttons.forEach((button) => {
     button.disabled = false;    
  });
  if (gameResult.classList.contains("win")) {
    gameResult.classList.remove("win");
  } else {
    gameResult.classList.remove("lose");
  }
}
resetButton.addEventListener("click", resetGame);
// Entire game logic


  let humanScore = 0;
  let computerScore = 0;  
  
  const playRound = (humanChoice, computerChoice) => {
    let roundResult= "";
    if (humanChoice === "rock" && computerChoice === "paper"
      || humanChoice === "paper" && computerChoice === "scissors"
      || humanChoice === "scissors" && computerChoice === "rock") {
      roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"
      || humanChoice === "paper" && computerChoice === "rock"
      || humanChoice === "scissors" && computerChoice === "paper") {
      roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      roundResult = "Draw!";
    }
    plScore.textContent = humanScore;
    compScore.textContent = computerScore;
    roundWinner.textContent = roundResult;    
  } 

  let gameResult = document.querySelector(".result");

  const showResult = () => {
    if (humanScore === 5) {
      gameResult.textContent = "You win!";
      gameResult.classList.add("win");
    } else if (computerScore === 5) {
      gameResult.textContent = "Computer wins!";
      gameResult.classList.add("lose");
    }
  }
  

