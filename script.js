const gameBoard = function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let n = 0; n < columns; n++) {
            // n will become a cell function later
            board[i].push(n);
        }
    } 

    const getBoard = () => board;

    const printBoard = () => {
        console.log(board.join('\n').replaceAll(',', ' '));
    }

    return { getBoard, printBoard };
};