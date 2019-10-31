// Code based on a lesson of CodeAcademy

// Here I made a mistake because I wrote const getUserChoice = userInput outside of the bracket
// Another mistake I made was to write const getUserChoice = userInput =>
const getUserChoice = (userInput) => {
  // you forgot the lower case which will be written as:
  userInput = userInput.toLowerCase();
/*Originally the code was like 
userInput === 'rock' || 'paper' || 'scissor'
and it was outside the getuserchoice
*/
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb')
{return userInput;
}
else{
  console.log('Error')
}
};
  
const getComputerChoice = () => {
  const randomNumber = 
  Math.floor(Math.random() * 3); 
  // orignially switch worked with computer Choice, but now it gets randomNumber
switch (randomNumber) {
  case 0: 
    return 'rock'; 
  case 1: 
    return 'paper'; 
    // might be wrong
  case 2: 
    return 'scissors';
  case 3: 
    return 'bomb';
  default:
    return 'invalid'; 
}
}

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === 'bomb') {return 'you won!';}
 if (userChoice === computerChoice) {
  return 'The game is a tie!';
}

if (userChoice === 'rock') {
  if (computerChoice === 'paper') {return 'computer won';}
else {
  return 'user won!';
}
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {return 'The computer won';} 
  else {
    return 'You won!';
  }
}

if (userChoice === 'scissors') 
{if (computerChoice === 'rock')
{return 'The computer won';}
else {
  return 'You won!';}
}
};

const playGame = () => {
  const userChoice = 
        //change this line to get a different output
        getUserChoice('rock'); 
  const computerChoice =
  getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}; 


playGame(); 
