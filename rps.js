function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*arr.length)];
}


function simulateRound (playerSelection, computerSelection) {
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
                case "Rock":
                    draw = true;
                    break;
                case "Scissors":
                    playerWin = true;
                    break;
                case "Paper":
                    playerWin = false;
                    break;
                default:
                    break;
            }

        }
        else if (playerSelection === 'paper') {
            switch (computerSelection) {
                case "Rock":
                    playerWin = true;
                    break;
                case "Scissors":
                    playerWin = false;
                    break;
                case "Paper":
                    draw = true;
                    break;
                default:
                    break;
            }

        }
        else if (playerSelection === 'scissors') {
            switch (computerSelection) {
                case "Rock":
                    playerWin = false;
                    break;
                case "Scissors":
                    draw = true;
                    break;
                case "Paper":
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
            playerSelection = prompt("Rock, paper or scissors?");
            computerSelection = computerPlay();
        }
        if (invalidChoice) {
            alert("Invalid choice, go again!");
            playerSelection = prompt("Rock, paper or scissors?");
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

function game() {
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        computerSelection = computerPlay();
        playerSelection = prompt("Rock, paper or scissors?");
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