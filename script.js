let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, target) {
    const humanDiff = Math.abs(target - human);
    const computerDiff = Math.abs(target - computer);

    if (humanDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
}

function updateScore(string) {
    if (string === 'human') {
        humanScore++;
    } else if (string === 'computer') {
        computerScore++;
    } else {
        console.log('An error occurred.')
    }
}

function advanceRound() {
    currentRoundNumber++;
}