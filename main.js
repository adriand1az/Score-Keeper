// Selcting Id's
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2')
const reset = document.querySelector('#reset')
const player1ScoreUpdate = document.querySelector('#player-1-score');
const player2ScoreUpdate = document.querySelector('#player-2-score');
const setScore = document.querySelector('#set-score');

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;

// Restart function
function restart() {
    isGameOver = false;
    player1Score = 0;
    player2Score = 0;
    player1ScoreUpdate.textContent = 0;
    player2ScoreUpdate.textContent = 0;
}

// Player 1
player1.addEventListener('click', function () {
    if (!isGameOver) {
        player1Score++;

        if (player1Score === winningScore) {
            isGameOver = true;
        }
        player1ScoreUpdate.textContent = player1Score;
    }

})

player2.addEventListener('click', function () {
    if (!isGameOver) {
        player2Score++;

        if (player2Score === winningScore) {
            isGameOver = true;
        }
        player2ScoreUpdate.textContent = player2Score;
    }
})

// When changing select item
setScore.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    restart()
})

// reset button
reset.addEventListener('click', restart)

