function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber == 0){
        return "Rock";
    }
    else if (randomNumber == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    

    if (playerSelection == "Rock"){
        if (computerSelection == "Scissors"){
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            return "You Lose! Paper beats Rock";
        }
        else{
            return "Draw!";
        }
    }

    else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == "Scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "Draw!";
        }
    }

    else{
        if (computerSelection == "Rock"){
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "Paper"){
            return "You Win! Scissors beats Paper";
        }
        else{
            return "Draw!";
        }
    }
}

function game(){
    let playerSelection;
    let valid;
    let result;
    let rounds = 5;

    let win = 0;
    let lose = 0;

    for (let i=0; i< rounds; i++){
        
        valid = false;

        while(valid != true){
            playerSelection = prompt("Input your selection");
            playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
            if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors"){
                valid = true
            }
            else{
                alert("Invalid selection.Try Again")
            }
        }

        result = playRound(playerSelection,computerPlay());
        console.log(result);
        if (result.slice(0,1) == "Y"){
            if (result.slice(4,5) == "W"){
                win += 1
            }
            else{
                lose += 1
            }
        }
    }

    if (win > lose){
        console.log("You win the game!")
    }
    else if (win < lose){
        console.log("You lose the game!")
    }
    else{
        console.log("Game ended in a draw")
    }

    
}