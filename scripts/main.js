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
    alert(this.value);
    alert(compChoice);

    switch (Number(this.value)) {
        case 0:
            if (Number(compChoice) == 1) {
                //computer wins
                cpuScore++;
                computerScore.innerHTML = cpuScore;
            } else if (Number(compChoice) == 2) {
                // player wins
                playScore++;
                playerScore.innerHTML = playScore;
            }
            break;
        case 1:
            if (Number(compChoice) == 2) {
                //computer wins
                cpuScore++;
                computerScore.innerHTML = cpuScore;
            } else if (Number(compChoice) == 0) {
                // player wins
                playScore++;
                playerScore.innerHTML = playScore;
            }
            break;
        case 2:
            if (Number(compChoice) == 0) {
                //computer wins
                cpuScore++;
                computerScore.innerHTML = cpuScore;
            } else if (Number(compChoice) == 1) {
                // player wins
                playScore++;
                playerScore.innerHTML = playScore;
            }
            break;
        default:
            break;
    }
}
