// Computer logic
console.log("Hello World");
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * 3)];  
  return choice;
}

getComputerChoice();