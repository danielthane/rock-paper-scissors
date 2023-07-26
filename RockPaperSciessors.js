const options = ["rock", "paper", "scissors"];

// Function to get input from the user
let userScore = 0;
let computerScore = 0;

const cards = document.querySelectorAll('.game-btn');
const resultText = document.querySelector('#resultComment');
const userScoreEl = document.querySelector('#playerScore');
const computerScoreEl = document.querySelector('#computerScore');


cards.forEach(card => card.addEventListener('click', (e) => {
    if (userScore < 5 && computerScore < 5)
    {
        let userGuess = card.id;
        computerGuess = getComputerChoice();
        console.log(userGuess);
        console.log(computerGuess);
        result = checkWinner(userGuess, computerGuess);
        if (result === "Player"){
            userScore ++;
            userScoreEl.textContent = userScore;
            if (userScore < 5){
                resultText.textContent = `You win! ${userGuess} beats ${computerGuess}!`;
            }
            else{
                resultText.textContent = "You have won the game!!!"
                resultText.style.color = "green"
            }
            
        }
        else if (result === "Comp"){
            computerScore ++;
            computerScoreEl.textContent = computerScore;
            if (computerScore < 5){
                resultText.textContent =`You lose! ${computerGuess} beats ${userGuess}!`;
            }
            else{
                resultText.textContent = "The computer wins!!!"
                resultText.style.color = "red"
            }
        }
        else{
            resultText.textContent =`That's a draw! Two ${userGuess}'s`;
        }
    }
}))



function getComputerChoice(){
    // Random number between 0-2, the access the options array at this index
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function checkWinner(userGuess, computerGuess){
    let result;
    if (userGuess == "rock"){
        if (computerGuess == "rock"){
            return "Draw";
        }
        else if(computerGuess == "paper"){
            return "Comp";
        }
        else {
            return "Player";
        }
    }
    else if (userGuess == "paper"){
        if (computerGuess == "rock"){
            return "Player";
        }
        else if(computerGuess == "paper"){
            return "Draw";
        }
        else {
            return "Comp";
        }
    }
    else{
        if (computerGuess == "rock"){
            return "Comp";
        }
        else if(computerGuess == "paper"){
            return "Player";
        }
        else {
            return "Draw";
        }
    }
}