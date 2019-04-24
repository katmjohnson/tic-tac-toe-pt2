let gameBoard = ['A1','A2','A3', 'B1','B2','B3','C1','C2','C3'];
let cells = document.querySelectorAll('.row div');
let gameOver = false;
let player1 = 'X';
let player2 = 'O';
let movesMade = 0;
let winner;
let winningCombo;
let turn = true;


const checkForTie = () => {
    if (gameboard.every((val, i) => typeof val != 'number')) {
         return true;
    }else{
       return false;
    }
}

const winningCombos = [
    //horizontal
    [A1,A2,A3],
    [B1,B2,B3],
    [C1,C2,C3],
    //vertical
    [A1,B1,C1]
    [A2,B2,C2],
    [A3,B3,C3],
    //criss-cross
    [A1,B2,C3],
    [A3,B2,C1]
]

for (let i=0;i<cells.length; i++){
    cells[i].addEventListener('click',cellClicked);
}

function cellClicked(){
    if(gameOver){
        resetBoard();
        return
    }
    
    event.target.textcontent = player1 && player2
  
}
function toggle(){
    if(player === 0){
        player = 1;
    } else {
        player = 0;
    }
}

function xGame(){
    gameBoard = ['X','O','X','O','X','O','X','O','X']
}

function oGame(){
    gameBoard = ['O','X','O','X','O','X','O','X','O']
}


function winner1(board,player1) {
    if (
        (board[A1] == player && board[A2] == player && board[A3] == player) ||
        (board[B1] == player && board[B2] == player && board[B3] == player) ||
        (board[C1] == player && board[C2] == player && board[C3] == player) ||
        (board[A1] == player && board[B1] == player && board[C1] == player) ||
        (board[A2] == player && board[B2] == player && board[C2] == player) ||
        (board[A3] == player && board[B3] == player && board[C3] == player) ||
        (board[A1] == player && board[B2] == player && board[C3] == player) ||
        (board[A3] == player && board[B2] == player && board[C1] == player)
        
    ) 
        if (gameOver); 
            return true; {
        } setTimeout (function() {
            alert("X Won!");
        }, 100);
        document.getElementById("message").textContent="Game Over!"

}

function winner2(board,player2) {
    if (
        (board[A1] == player && board[A2] == player && board[A3] == player) ||
        (board[B1] == player && board[B2] == player && board[B3] == player) ||
        (board[C1] == player && board[C2] == player && board[C3] == player) ||
        (board[A1] == player && board[B1] == player && board[C1] == player) ||
        (board[A2] == player && board[B2] == player && board[C2] == player) ||
        (board[A3] == player && board[B3] == player && board[C3] == player) ||
        (board[A1] == player && board[B2] == player && board[C3] == player) ||
        (board[A3] == player && board[B2] == player && board[C1] == player)    
    ) 
        if(gameOver);
            return true; {
        }   setTimeout(function() {
                alert("O Won!");
        },100);
        document.getElementById("message").textContent="Game Over!"
}