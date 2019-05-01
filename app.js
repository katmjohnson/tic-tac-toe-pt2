let gameBoard = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
let cells = document.querySelectorAll('.row div');
let gameOver = false;
let player1 = 'X';
let player2 = 'O';
let movesMade = 0;
let winningCombo;
let turn = true;
let player = 0;
let marker;
var score = {};

function checkForTie() {
    // Let's look at all the squares to see if the've all been set?
    if (A1.textContent && A2.textContent && A3.textContent
        && B1.textContent && B2.textContent && B3.textContent
        && C1.textContent && C2.textContent && C3.textContent
    ) {
        setTimeout(function () {
            alert("Tie");
        }, 100);
        document.getElementById("message").innerHTML = "Game Over!"
        // Set gameOver flag. This triggers a reset when the next square is clicked.
        gameOver = true;
    } else {
        return false;
    }
}

function resetBoard() {
    // Set all squares to empty and reset gameOver flag so we can play again.
    A1.textContent = '';
    A2.textContent = '';
    A3.textContent = '';
    B1.textContent = '';
    B2.textContent = '';
    B3.textContent = '';
    C1.textContent = '';
    C2.textContent = '';
    C3.textContent = '';
    document.getElementById("message").innerHTML = "";
    gameOver = false;
}

for (let i = 0; i < cells.length; i++) {
    // Add a listener to every square to do something when the square is clicked.
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    // This is where we do something when a square is clicked.
    if (gameOver) {
        resetBoard();
        return
    }
    // Check to make sure somebody hasn't already played that box
    if (document.getElementById(event.target.id).textContent == '') {
        if (player == 0) {
            document.getElementById(event.target.id).textContent = player1;
        } else if (player == 1) {
            document.getElementById(event.target.id).textContent = player2;
        }
        // Calculate the winner, check for tie, and toggle player after every turn.
        calculateWinner();
        if (!gameOver) {
            checkForTie();
            togglePlayer();
        }
    } else {
        alert('Try another Square');
    }

}

function togglePlayer() {
    if (player === 0) {
        player = 1;
    } else {
        player = 0;
    }
}

function calculateWinner() {
    // Set the marker to look for
    if (player == 0) {
        marker = 'X';
    } else if (player == 1) {
        marker = 'O';
    }
    if (
        (A1.textContent == marker && A2.textContent == marker && A3.textContent == marker) ||
        (B1.textContent == marker && B2.textContent == marker && B3.textContent == marker) ||
        (C1.textContent == marker && C2.textContent == marker && C3.textContent == marker) ||
        (A1.textContent == marker && B1.textContent == marker && C1.textContent == marker) ||
        (A2.textContent == marker && B2.textContent == marker && C2.textContent == marker) ||
        (A3.textContent == marker && B3.textContent == marker && C3.textContent == marker) ||
        (A1.textContent == marker && B2.textContent == marker && C3.textContent == marker) ||
        (A3.textContent == marker && B2.textContent == marker && C1.textContent == marker)

    ) {
        setTimeout(function () {
            alert(marker + " Won!");
        }, 100);
        document.getElementById("message").innerHTML = "Game Over!"
        gameOver = true;
    }
}