const gameBoard = function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let n = 0; n < columns; n++) {
            // n will become a cell function later
            board[i].push(cell());
        }
    } 

    const getBoard = () => board;

    const printBoard = () => {
        let boardString = '';
        board.map((row) => {
            row.map((cell) => {
                boardString += `${cell.getValue()}  `;
                console.log(cell.getValue());
            });
            boardString += '\n\n';
        });
        console.log(boardString);
    }

    printBoard();

    return { getBoard, printBoard };
};

const cell = function() {
    let cellValue = 'X';

    const placeToken = (value) => {
        cellValue = value;
    }

    const getValue = () => cellValue;

    return { placeToken, getValue }
}

const newBoard = gameBoard();