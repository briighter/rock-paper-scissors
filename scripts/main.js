// Get computer callout
let compCallOut = document.querySelector("#computerchoicecallout");

// get button objects from DOM
let rock_btn = document.getElementById('rock');
let paper_btn = document.getElementById('paper');
let scissors_btn = document.getElementById('scissors');

// Get score objects
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

// Initialize scores
let playScore = 0;
let cpuScore = 0;

rock_btn.addEventListener("click", playGame);
paper_btn.addEventListener("click", playGame);
scissors_btn.addEventListener("click", playGame);


function playGame() {
    //let playerChoice = document.getElementById(e.id).value;
    let compRoll = Math.random() * 3;
    let compChoice = compRoll.toString().substr(0,1);
    
    switch (Number(this.value)) {
        case 0:
            if (Number(compChoice) == 1) {
                //computer wins
                cpuScore++;
                computerScore.innerHTML = cpuScore;
                compCallOut.innerHTML = "I selected Paper :P";
            } else if (Number(compChoice) == 2) {
                // player wins
                playScore++;
                playerScore.innerHTML = playScore;
                compCallOut.innerHTML = "I selected Scissors >:(";
            } else {
                compCallOut.innerHTML = "I selected Rock. DRAW!";
            }
            break;
        case 1:
            if (Number(compChoice) == 2) {
                //computer wins
                cpuScore++;
                computerScore.innerHTML = cpuScore;
                compCallOut.innerHTML = "I selected Scissors :P";
            } else if (Number(compChoice) == 0) {
                // player wins
                playScore++;
                playerScore.innerHTML = playScore;
                compCallOut.innerHTML = "I selected Rock >:(";
            } else {
                compCallOut.innerHTML = "I selected Paper DRAW!";
            }
            break;
        case 2:
            if (Number(compChoice) == 0) {
                //computer wins
                cpuScore++;
                computerScore.innerHTML = cpuScore;
                compCallOut.innerHTML = "I selected Rock :P";
            } else if (Number(compChoice) == 1) {
                // player wins
                playScore++;
                playerScore.innerHTML = playScore;
                compCallOut.innerHTML = "I selected Paper >:(";
            } else {
                compCallOut.innerHTML = "I selected Scissors DRAW!";
            }
            break;
        default:
            break;
    }
}
