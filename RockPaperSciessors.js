const options = ["rock", "paper", "scissors"];

// Function to get input from the user
function getUserGuess(){
    let userGuess;
    // Loop to ensure the input is valid
    while (!options.includes(userGuess)){
        userGuess = prompt("Rock, Paper or Scissors - Don't Forget the capital!").toLowerCase();
        console.log(userGuess);
    }
    return userGuess;
}

function getComputerChoice(){
    // Random number between 0-2, the access the options array at this index
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function checkWinner(userGuess, computerGuess){
    let result;
    if (userGuess == "Rock"){
        if (computerGuess == "Rock"){
            return "Draw";
        }
        else if(computerGuess == "Paper"){
            return "Comp";
        }
        else {
            return "Player";
        }
    }
    else if (userGuess == "Paper"){
        if (computerGuess == "Rock"){
            return "Player";
        }
        else if(computerGuess == "Paper"){
            return "Draw";
        }
        else {
            return "Comp";
        }
    }
    else{
        if (computerGuess == "Rock"){
            return "Comp";
        }
        else if(computerGuess == "Paper"){
            return "Player";
        }
        else {
            return "Draw";
        }
    }
}

function playRound(){
    userGuess = getUserGuess();
    computerGuess = getComputerChoice();
    result = checkWinner(userGuess, computerGuess);
    if (result === "Player"){
        console.log(`You win! ${userGuess} beats ${computerGuess}!`);
    }
    else if (result === "Comp"){
        console.log(`You lose! ${computerGuess} beats ${userGuess}!`);
    }
    else{
        console.log(`That's a draw! Two ${userGuess}'s`);
    }
}

game();