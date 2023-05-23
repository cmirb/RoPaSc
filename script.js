/* function that randomly returns 'rock' or 'paper' or 'scissors' */

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice())

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

/* define player and computer selection */
/*const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection)); */


/* function that plays a 5 round game, keeps a score and declares a winner */

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <=5; round++) {
        let playerSelection = prompt('Round' + round + ': Rock, Paper, or Scissors?');

        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt('Please enter a valid option: Rock, Paper, Scissors?').toLowerCase();
        }

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    console.log(`\nFinal Score: You = ${playerScore}, Computer = ${computerScore}\n`);

    if(playerScore > computerScore) {
        console.log('Congrats! You won!');
    } else if (playerScore < computerScore) {
        console.log('Your Lose! Looks like the computers are beating humans yet again!');
    } else {
        console.log('It\'s a tie!');
    }
}

game(); 