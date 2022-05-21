function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()*arr.length)];
}


const buttons = document.querySelectorAll('.play');
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        console.log(playerSelection);
        result = playRound(playerSelection, computerSelection);
        gameState = updateScoreBoard(result);
        

    })
})

const resetButton = document.querySelector('#reset');
resetButton.disabled = true;
resetButton.addEventListener('click', ()=> {
    const buttons = document.querySelector('.play');
    if (buttons.disabled) {
        enableButtons();
        resetButton.disabled = true;
        const scoreBoard = document.querySelector('#scoreBoard');
        console.log(scoreBoard.textContent);
    
        score = scoreBoard.textContent.split("-");
        playerScore = 0;
        computerScore = 0;
        
        scoreBoard.textContent = playerScore + "-" + computerScore;
    }


})

function updateScoreBoard(result) {
    const scoreBoard = document.querySelector('#scoreBoard');
    console.log(scoreBoard.textContent);

    score = scoreBoard.textContent.split("-");
    playerScore = parseInt(score[0]);
    computerScore = parseInt(score[1]);
    
    const container = document.querySelector('.container');
    const header = document.querySelector('.container h3');

    let text = "";
    switch (result) {
        case "Win":
            text = "Nice! " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
            break;
        case "Lose":
            text = "Oh no! " + playerSelection + " loses to " + computerSelection;
            computerScore += 1;
            break;
        case "Draw":
            text = "Draw! Go again!";
            break;
        default:
            break;
    }
    header.textContent = text;
    container.appendChild(header);
    scoreBoard.textContent = playerScore + "-" + computerScore;

    if (playerScore == 5) {
        const p = document.createElement('h1');
        p.textContent = 'Congratulations! You Won!';
        scoreBoard.appendChild(p);
        disableButtons();
    }
    else if (computerScore == 5) {
        const p = document.createElement('h1');
        p.textContent = 'Too bad! You Lost!';
        scoreBoard.append(p);
        disableButtons();
    }
    

}

function disableButtons() {
    const buttons = document.querySelectorAll('.play');
    buttons.forEach((button) => {
        button.disabled = true;
    })
    resetButton.disabled = false;
}

function enableButtons() {
    const buttons = document.querySelectorAll('.play');
    buttons.forEach((button) => {
        button.disabled = false;
    })
}






function playRound (playerSelection, computerSelection) {
    let playerWin = false;
    let draw = false;

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                draw = true;
                break;
            case "scissors":
                playerWin = true;
                break;
            case "paper":
                playerWin = false;
                break;
            default:
                break;
        }

    }
    else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case "rock":
                playerWin = true;
                break;
            case "scissors":
                playerWin = false;
                break;
            case "paper":
                draw = true;
                break;
            default:
                break;
        }

    }
    else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case "rock":
                playerWin = false;
                break;
            case "scissors":
                draw = true;
                break;
            case "paper":
                playerWin = true;
                break;
            default:
                break;
        }
    }

    if (draw) {
        return 'Draw';
    }
    

    if (playerWin) {
        return "Win";
    } else {
        return "Lose";
    }
}









// unused when change to GUI
function simulateRound (playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
    playerSelection = playerSelection.toLowerCase();
    let playerWin = false;
    let draw = true;
    let invalidChoice = false;
    while (draw == true) {
        invalidChoice = false;
        draw = false;
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "rock":
                    draw = true;
                    break;
                case "scissors":
                    playerWin = true;
                    break;
                case "paper":
                    playerWin = false;
                    break;
                default:
                    break;
            }

        }
        else if (playerSelection === 'paper') {
            switch (computerSelection) {
                case "rock":
                    playerWin = true;
                    break;
                case "scissors":
                    playerWin = false;
                    break;
                case "paper":
                    draw = true;
                    break;
                default:
                    break;
            }

        }
        else if (playerSelection === 'scissors') {
            switch (computerSelection) {
                case "rock":
                    playerWin = false;
                    break;
                case "scissors":
                    draw = true;
                    break;
                case "paper":
                    playerWin = true;
                    break;
                default:
                    break;
            }
        }
        else {
            console.log('Invalid choice');
            invalidChoice = true;
        }
        if (draw) {
            alert("Draw, go again!");
            //playerSelection = prompt("rock, paper or scissors?");
            computerSelection = computerPlay();
        }
        if (invalidChoice) {
            alert("Invalid choice, go again!");
            //playerSelection = prompt("rock, paper or scissors?");
            draw = true;
            computerSelection = computerPlay();
        }
    }
    if (playerWin) {
        return [playerWin, "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection];
    } else {
        return [playerWin, "You Lose! " + computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)];
    }
}


// unused when changing to GUI format.
function game() {
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        computerSelection = computerPlay();
        playerSelection = prompt("rock, paper or scissors?");
        values = simulateRound(playerSelection, computerSelection);
        console.log(values[1]);
        if (values[0]) {
            playerScore += 1;
        }
        else {
            computerScore += 1;
        }
        console.log("The score now is " + playerScore + " - " + computerScore);

    }
    if (computerScore > playerScore) {
        console.log("hahahahaha u lost");
    }
    else {
        console.log("Congratulations! You won!!");
    }
}




