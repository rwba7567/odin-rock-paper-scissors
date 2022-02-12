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

function playRound(playerSelection){
    //console.log("player:" + playerSelection);
    //console.log("computer:" + computerSelection);

    let pHand = document.querySelector("#playerHand")
    pHand.innerText = playerSelection

    let computerSelection = computerPlay()
    let cHand = document.querySelector("#computerHand")
    cHand.innerText = computerSelection

    let result = document.querySelector("#result")

    if (playerSelection == "Rock"){
        if (computerSelection == "Scissors"){
            result.innerText="You Win! Rock beats Scissors";
            return "p"
        }
        else if (computerSelection == "Paper"){
            result.innerText="You Lose! Paper beats Rock";
            return "c"
        }
        else{
            result.innerText="Round ended in draw!";
            return "d"
        }
    }

    else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            result.innerText="You Win! Paper beats Rock";
            return "p"
        }
        else if (computerSelection == "Scissors"){
            result.innerText="You Lose! Scissors beats Paper";
            return "c"
        }
        else{
            result.innerText="Round ended in draw!";
            return "d"
        }
    }

    else{
        if (computerSelection == "Rock"){
            result.innerText="You Lose! Rock beats Scissors";
            return "c"
        }
        else if (computerSelection == "Paper"){
            result.innerText="You Win! Scissors beats Paper";
            return "p"
        }
        else{
            result.innerText="Round ended in draw!";
            return "d"
        }
    }
}

let buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let modal = document.querySelector("#modal")


buttons.forEach(button => {
    button.addEventListener("click", function(e){
        result = playRound(e.target.innerText);
        roundCount++;
        
        if (result == "p")
        {
            playerScore++;
        }
        else if (result == "c")
        {
            computerScore++;
        }

        let score = document.querySelector("#score");
        score.innerText = playerScore + " - " + computerScore;

        if (roundCount >= 5)
        {
            modal.style.display = "flex"
            /*
            if (playerScore > computerScore)
            {
                alert("Game Over. You won!")
            }
            else if (playerScore < computerScore)
            {
                alert("Game Over. You lost!")
            }
            else
            {
                alert("Game Over. Game ended in draw")
            }
            */
        }
    })
});



