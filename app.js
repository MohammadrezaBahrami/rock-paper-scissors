const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset-btn');
const textEl = document.getElementById('text');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[randomNumber];
}


function win(text) {
    textEl.innerText = `Computer choice was ${text}, you won!`;
    userScore++;
    userScoreSpan.innerText = userScore;
    userScoreSpan.style.color = 'green';
    setInterval(() => {
        userScoreSpan.style.color = '#fff';
    }, 2000)
}

function lose(text) {
    textEl.innerText = `Computer choice was ${text}, you lost!`;
    computerScore++;
    computerScoreSpan.innerText = computerScore;
    computerScoreSpan.style.color = 'red';
    setInterval(() => {
        computerScoreSpan.style.color = '#fff';
    }, 2000)
}

function draw(text) {
    textEl.innerText = `Computer choice was ${text}, it's even!`;

}


function game(userChoice) {
    const computerChoice = getComputerChoice()

    switch (computerChoice + userChoice) {
        case 'rockRock':
        case 'paperPaper':
        case 'scissorsScissors':
            draw(computerChoice)
            break;
        case 'paperRock':
        case 'scissorsPaper':
        case 'rockScissors':
            lose(computerChoice)
            break;
        case 'scissorsRock':
        case 'paperScissors':
        case 'rockPaper':
            win(computerChoice)
            break;
    }
}


function reset() {
    userScore = 0;
    computerScore = 0;
    textEl.innerText = 'Choose your move.';
    userScoreSpan.innerText = userScore;
    computerScoreSpan.innerText = computerScore;
}

rockBtn.addEventListener('click', () => {
    game('Rock')
    
})

paperBtn.addEventListener('click', () => {
    game('Paper')

})

scissorsBtn.addEventListener('click', () => {
    game('Scissors')
})

resetBtn.addEventListener('click', () => {
    reset()
})