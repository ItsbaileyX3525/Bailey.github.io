function play(id) {
  if (gameOver) {
    return;
  }

  let cell = document.getElementById(id);
  if (cell.innerHTML === '') {
    cell.innerHTML = turn;
    board[id] = turn;

    if (checkWinner()) {
      gameOver = true;
      alert('Player ' + turn + ' wins!');
    } else if (checkDraw()) {
      gameOver = true;
      alert('Draw!');
    } else {
      turn = turn === 'X' ? 'O' : 'X';
    }
  }
}