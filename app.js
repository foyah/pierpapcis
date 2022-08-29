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

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0 :
            return 'PIERRE'
        case 1 :
            return 'PAPIER'
        case 2 : 
            return 'CISEAUX'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// UI

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('PIERRE'))
paperBtn.addEventListener('click', () => handleClick('PAPIER'))
scissorsBtn.addEventListener('click', () => handleClick('CISEAUX'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)


function handleClick(playerSelection){
    if(isGameOver()){
        openEndgameModal()
        return
    }

const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)
updateChoices(playerSelection, computerSelection)
updateScore()

if(isGameOver()) {
    openEndgameModal()
    setFinalMessage()
}
}

function updateChoices(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'PIERRE' :
            playerSign.textContent = '✊'
            break
        case 'PAPIER' :
            playerSign.textContent = '✋'
            break
        case 'CISEAUX' :
            playerSign.textContent = '✌'
            break
    }
    switch(computerSelection) {
        case 'PIERRE' :
            computerSign.textContent = '✊'
            break
        case 'PAPIER' :
            computerSign.textContent = '✋'
            break
        case 'CISEAUX' :
            computerSign.textContent = '✌'
            break
    }
}

function updateScore() {
    if(roundWinner === 'Égalité'){
        scoreInfo.textContent = 'Égalité!'
    } else if(roundWinner === 'Joueur') {
    scoreInfo.textContent = 'Tu as gagné!'
    } else if(roundWinner === 'Ordinateur') {
    scoreInfo.textContent = 'Tu as perdu!'
    }
    playerScorePara.textContent = `Joueur : ${playerScore}`
    computerScorePara.textContent = `Ordinateur : ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection){
    if(winner === 'Joueur'){
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} bat ${computerSelection.toLowerCase()}`
        return
    }
    else if(winner === 'Ordinateur'){
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} est battu par ${computerSelection.toLowerCase()}`
        return
    } 
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} est à égalité avec ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore ? (endGameMsg.textContent = 'Tu as gagné!') : (endGameMsg.textContent = 'Tu as perdu...')
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = "Choisis Ton Arme"
    scoreMessage.textContent = "Le premier qui arrive à 5 points a gagné"
    playerScorePara.textContent = "Joueur : 0"
    computerScorePara.textContent = "Ordinateur : 0"
    playerSign.textContent = "❔"
    computerSign.textContent = "❔"
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}
