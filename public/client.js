const socket = io.connect('http://localhost:3000/');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const piece1 = document.getElementById('player1');
const piece2 = document.getElementById('player2');

let pos1 = 0;
let pos2 = 0;

function handleClick1(evt) {
    pos1 ++;
    piece1.style.left = pos1 + 'px';
}

function handleClick2(evt) {
    pos1 ++;
    piece1.style.left = pos1 + 'px';
}

btn1.addEventListener('click', function() {
    socket.emit('play1', handleClick1)
})

btn2.addEventListener('click', function() {
    socket.emit('play2', handleClick1)
})





