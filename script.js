// Computer choice logic

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * 3)];  
  return choice;
}

//Human choice

const getHumanChoice = () => {
  let choice = prompt("Rock, paper or scissors? Please enter: ");  
  choice = choice.toLowerCase();  
  return choice;
}


// Entire game logic

const playGame = () => {
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
    console.log(roundResult);  
  }
  
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
    playRound(humanSelection, computerSelection);
  }  
  const gameResult = humanScore > computerScore ? `You win, your score: ${humanScore}` : humanScore === computerScore ? "Draw" : `You lose! Computer score: ${computerScore}`;
  console.log(gameResult);
}

playGame();