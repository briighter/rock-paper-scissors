// Get Header Container Element
const headerContainer = document.querySelector('#header-container');
// Make a title header
const title = document.createElement('h1');
title.classList.add('title')
title.textContent = 'Rock Paper Scissors';
headerContainer.appendChild(title);

// Get Selection Section
const selectionContainer = document.querySelector('#selection-container');


/* Begin Game Logic */
function startGame() {
    // Create Computers selection options
    let computerOptions = ["Rock", "Paper", "Scissors"];

    // Track player and computer wins
    let playerWins = 0;
    let computerWins = 0;

    playerOneChoice = prompt("Select: Rock, Paper, or Scissors\n'Exit' to leave");
    playerOneChoice = playerOneChoice.toLowerCase(); // Transform player entry to fit system
    while (playerOneChoice != "exit") { // Unitl the player enters "exit"
    //Get a random selection from the computers choices and display computers choice
        let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
        // Set computer pick to variable for reuse
        computerPick = "Computer picks " + computerChoice;
    
    // TODO: Change to be SWITCH CASE algorithm
        if (playerOneChoice == "rock" && computerChoice == "Paper") {
            alert(computerPick + "\nComputer Wins!");
            computerWins += 1; // Increment computer win
        } else if (playerOneChoice == "rock" && computerChoice == "Scissors") {
            alert(computerPick + "\nPlayer Wins!");
            playerWins += 1; // Increment player win
        } else if (playerOneChoice == "paper" && computerChoice == "Scissors") {
            computerWins += 1;
            alert(computerPick + "\nComputer Wins!");
        } else if (playerOneChoice == "paper" && computerChoice == "Rock") {
            playerWins += 1;
            alert(computerPick + "\nPlayer Wins!");
        } else if (playerOneChoice == "scissors" && computerChoice == "Rock") {
            computerWins += 1;
            alert(computerPick + "\nComputer Wins!");
        } else if (playerOneChoice == "scissors" && computerChoice == "Paper") {
            playerWins += 1;
            alert(computerPick + "\nPlayer Wins!");
        } else if (playerOneChoice == computerChoice.toLowerCase()) {
            alert(computerPick + "\nDraw!");
        }
        playerOneChoice = prompt("Select: Rock, Paper, or Scissors\
                                \nPlayer score: " + playerWins +"\
                                \nComputer score: " + computerWins);
        playerOneChoice = playerOneChoice.toLowerCase(); // Transform player entry to fit system
    }
}
/*Start the game*/
// startGame();

