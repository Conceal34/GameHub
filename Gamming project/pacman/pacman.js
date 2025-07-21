document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const width = 28;
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1,
        1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    const cells = [];
    layout.forEach((cellType, i) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (cellType === 1) {
            cell.classList.add('wall');
        } else if (cellType === 0) {
            cell.classList.add('dot');
        }
        gameBoard.appendChild(cell);
        cells.push(cell);
    });

    let pacManCurrentIndex = 49; // Starting position of Pac-Man
    cells[pacManCurrentIndex].classList.add('pac-man');

    document.addEventListener('keyup', movePacMan);

    function movePacMan(e) {
        cells[pacManCurrentIndex].classList.remove('pac-man');
        switch (e.keyCode) {
            case 37:
                if (
                    pacManCurrentIndex % width !== 0 &&
                    !cells[pacManCurrentIndex - 1].classList.contains('wall')
                )
                    pacManCurrentIndex -= 1;
                break;
            case 38:
                if (
                    pacManCurrentIndex - width >= 0 &&
                    !cells[pacManCurrentIndex - width].classList.contains('wall')
                )
                    pacManCurrentIndex -= width;
                break;
            case 39:
                if (
                    pacManCurrentIndex % width < width - 1 &&
                    !cells[pacManCurrentIndex + 1].classList.contains('wall')
                )
                    pacManCurrentIndex += 1;
                break;
            case 40:
                if (
                    pacManCurrentIndex + width < width * width &&
                    !cells[pacManCurrentIndex + width].classList.contains('wall')
                )
                    pacManCurrentIndex += width;
                break;
        }
        cells[pacManCurrentIndex].classList.add('pac-man');
        eatDot();
    }

    function eatDot() {
        if (cells[pacManCurrentIndex].classList.contains('dot')) {
            cells[pacManCurrentIndex].classList.remove('dot');
        }
    }
});
