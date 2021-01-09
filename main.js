// Selcting Id's
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2')
const reset = document.querySelector('#reset')

let player1Score = 0;
let player2Score = 0;


// When clicked change color
// Player 1
player1.addEventListener('click', function () {
    this.style.backgroundColor = ('green');
    player2.style.backgroundColor = ('red');
    player1Score++;
    console.log(`Player 1 Score: ${player1Score}`);
})

// Player 2
player2.addEventListener('click', function () {
    this.style.backgroundColor = ('green');
    player1.style.backgroundColor = ('red');
    player2Score++;
    console.log(`Player 2 Score: ${player2Score}`);
})

// Reset
reset.addEventListener('click', function () {
    player1.style.backgroundColor = '';
    player2.style.backgroundColor = '';
    this.style.backgroundColor = 'red';
    player1Score = 0;
    player2Score = 0;
})

// Setting the option to choose the total score before a winner is declared

