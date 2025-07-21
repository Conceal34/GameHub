document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('tic-tac-toe-board');
    const resetButton = document.getElementById('reset-game');
    let cells = [];
    let currentPlayer = 'X';
    let gameActive = true;

    // Create the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
        cells.push(cell);
    }

    resetButton.addEventListener('click', resetGame);

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.dataset.index;

        if (cell.textContent === '' && gameActive) {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                alert(`${currentPlayer} wins!`);
                gameActive = false;
            } else if (cells.every(cell => cell.textContent !== '')) {
                alert(`It's a draw!`);
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        return winPatterns.some(pattern => {
            return pattern.every(index => {
                return cells[index].textContent === currentPlayer;
            });
        });
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        gameActive = true;
    }
});
