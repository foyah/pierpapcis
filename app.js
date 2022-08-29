let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        roundWinner = 'Égalité'
    }
    if ((playerSelection === 'PIERRE' && computerSelection === 'CISEAUX') ||
    (playerSelection === 'CISEAUX' && computerSelection === 'PAPIER') ||
    (playerSelection === 'PAPIER' && computerSelection === 'PIERRE') 
    ) {
        playerScore++
        roundWinner = 'Joueur'
    }
    if ((computerSelection === 'PIERRE' && playerSelection === 'CISEAUX') ||
    (computerSelection === 'CISEAUX' && playerSelection === 'PAPIER') ||
    (computerSelection === 'PAPIER' && playerSelection === 'PIERRE') 
    ) {
        computerScore++
        roundWinner = 'Ordinateur'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoise() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0 :
            return 'PIERRE'
        case 1 :
            return 'PAPIER'
        case 2 : 
            return 'SCISSORS'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
