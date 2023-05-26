/* function that randomly returns 'rock' or 'paper' or 'scissors' */

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* function that plays a single round of rock paper scissors */

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
        } else {
            return `You Lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
        }
}

function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/* function that keeps score and declares a winner when one player reaches 5 points */

let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {
    let computerSelection = getComputerChoice() 
    let result = playRound(playerSelection, computerSelection); 

    let resultDiv = document.getElementById('result'); 
    resultDiv.textContent = `Round Result: ${result}`;

    if (result.includes('Win')) {
        playerScore++;
    } else if (result.includes('Lose')) {
        computerScore++;
    }

    let scoreDiv = document.getElementById('score'); 
    scoreDiv.textContent= `Score: You = ${playerScore}, Computer = ${computerScore}`; 

    if (playerScore === 5 || computerScore === 5) {
        let winner = playerScore === 5 ? 'You won!' : 'You lose! The computer won!';
        resultDiv.textContent += `\n${winner}`; 
    }
}

/* Add event listeners to buttons */

document.getElementById('rock').addEventListener('click', function() {
    game('rock'); 
});

document.getElementById('paper').addEventListener('click', function() {
    game('paper'); 
});

document.getElementById('scissors').addEventListener('click', function() {
    game('scissors'); 
});

console.log(playerScore); 
