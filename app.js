// When a function is stored inside an object after a key, it is called a method.

const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
    if(selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
        ) {
            alert(`Invalid Choice! We chose ${DEFAULT_PLAYER_CHOICE} for you.`);
            return DEFAULT_PLAYER_CHOICE;
    }
    return selection;
}

const getComputerchoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER
    } else {
        return SCISSORS
    }
}

const getWinner = (cChoice, pChoice) => 
    cChoice === pChoice ? RESULT_DRAW :
     (cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK) 
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;


startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerchoice();
    const winner = getWinner(computerChoice, playerSelection);
    console.log(winner);
});