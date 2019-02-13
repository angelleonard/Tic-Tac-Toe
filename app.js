let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach(function (cell) {
    cell.addEventListener('click', cellClicked);
});



function cellClicked(e) {

    if (e.target.textContent !== '') {
        return;
    }
    e.target.textContent = currentPlayer;
    checkGame();
    togglePlayer();
};

function checkGame() {
    if (checkTop() || checkMiddle()) {
        alert("Winner!")
        return true;
    } else {
        return false;
    }
}
function checkTop() {
    if (cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent && !isEmpty(0, 1, 2)) {

        return true;
    } else {
        return false;
    }
}
function checkMiddle() {
    if (cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent && !isEmpty(3, 4, 5)) {
        alert("There's a winner!")
        return true;
    } else {
        return false;
    }
}
function isEmpty(a, b, c) {
    if (cells[a].textContent === "" || cells[b].textContent === "" || cells[c].textContent === "") {
        return true;
    } else {
        return false;
    }
};
function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X'
    }
};