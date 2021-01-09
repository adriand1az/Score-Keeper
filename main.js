const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2')
const reset = document.querySelector('#reset')

player1.addEventListener('click', function () {
    this.style.backgroundColor = ('green');
    player2.style.backgroundColor = ('red');
})

player2.addEventListener('click', function () {
    this.style.backgroundColor = ('green');
    player1.style.backgroundColor = ('red');
})

reset.addEventListener('click', function () {
    player1.style.backgroundColor = '';
    player2.style.backgroundColor = '';
    this.style.backgroundColor = 'red';
})