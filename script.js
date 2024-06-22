// Computer choice logic
console.log("Hello World");
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * 3)];  
  return choice;
}

getComputerChoice();

//Human choice

const getHumanChoice = () => {
  let choice = prompt("Rock, paper or scissors? Please enter: ");  
  choice = choice.toLowerCase();
  console.log(choice);
  return choice;
}

getHumanChoice();