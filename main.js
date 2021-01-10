// Creating dictionaries for each button
const p1 = {
    score: 0,
    button: document.querySelector('#player-1'),
    display: document.querySelector('#player-1-score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player-2'),
    display: document.querySelector('#player-2-score')
}

// Setting the reset button
const reset = document.querySelector('#reset')
const setScore = document.querySelector('#set-score');


// Setting default values
let winningScore = 3;
let isGameOver = false;

// Function update score
function updateScore(player) {
    if (!isGameOver) {
        player.score++;

        if (player.score === winningScore) {
            isGameOver = true;
        }
        player.display.textContent = player.score;
    }
}

// Player 1
p1.button.addEventListener('click', function () {
    updateScore(p1)
})

// Player 2
p2.button.addEventListener('click', function () {
    updateScore(p2)
})


// Restart function
function restart() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
}



// When changing select item
setScore.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    restart()
})

// reset button
reset.addEventListener('click', restart);

