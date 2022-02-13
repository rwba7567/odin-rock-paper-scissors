function updateImage(selector,selection){
    //console.log(selector + " " + selection)

    let image = 0

    if (selector == "player")
    {
        image = document.querySelector("#playerimg");
    }
    else if (selector == "computer")
    {
        image = document.querySelector("#computerimg");
    }
    else
    {
        console.log("Error 1")
    }

    if (selection == "rock")
    {
        image.src = "images/rock.jpg";
    }
    else if (selection == "paper")
    {
        image.src = "images/paper.jpg";
    }
    else if (selection == "scissors")
    {
        image.src = "images/scissors.jpg";

    }
    else
    {
        console.log("Error 1")
    }

}

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber == 0){
        return "rock";
    }
    else if (randomNumber == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection){
    //console.log("player:" + playerSelection);
    //console.log("computer:" + computerSelection);

    computerSelection = computerPlay()
    updateImage("player",playerSelection);
    updateImage("computer",computerSelection);

    let result = document.querySelector("#result")

    if (playerSelection == "rock"){
        if (computerSelection == "scissors"){
            result.innerText="Round " + roundCount + ": Player Wins" ;
            return "p"
        }
        else if (computerSelection == "paper"){
            result.innerText="Round " + roundCount + ": Computer Wins";
            return "c"
        }
        else{
            result.innerText="Round " + roundCount + ": Draw";
            return "d"
        }
    }

    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            result.innerText="Round " + roundCount + ": Player Wins";
            return "p"
        }
        else if (computerSelection == "scissors"){
            result.innerText="Round " + roundCount + ": Computer Wins";
            return "c"
        }
        else{
            result.innerText="Round " + roundCount + ": Draw";
            return "d"
        }
    }

    else{
        if (computerSelection == "rock"){
            result.innerText="Round " + roundCount + ": Computer Wins";
            return "c"
        }
        else if (computerSelection == "paper"){
            result.innerText="Round " + roundCount + ": Player Wins";
            return "p"
        }
        else{
            result.innerText="Round " + roundCount + ": Draw";
            return "d"
        }
    }
}

function game(e){
    if (playerScore >= 5 || computerScore >= 5)
    {
        alert("Game has ended.")
        return 0;
    }

    result = playRound(e.target.alt);
    roundCount++;
    
    if (result == "p")
    {
        playerScore++;
    }
    else if (result == "c")
    {
        computerScore++;
    }

    score.innerText = playerScore + " - " + computerScore;

    let resultDisplay = document.querySelector('#result')
    if (playerScore >= 5 || computerScore >= 5)
    {
        
        if (playerScore > computerScore)
        {
            resultDisplay.innerText = "Game Over. You won!"
        }
        else if (playerScore < computerScore)
        {
            resultDisplay.innerText = ("Game Over. You lost!")
        }
        else
        {
            resultDisplay.innerText = ("Game Over. Game ended in draw")
        }

        let reset = document.querySelector('#controlsBottom')
        reset.style.display = "block"
    }
}

let buttons = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let score = document.querySelector("#score");
score.innerText = "0 - 0";

buttons.forEach(button => {
    button.addEventListener("click", game)
});



