const cell = function() {
    let cellValue = '';

    const getValue = () => cellValue;

    const setValue = (value) => {
        cellValue = value;
    }

    const checkTaken = () => {
        return (cellValue !== '') ? true : false;
    }

    return { setValue, getValue, checkTaken };
}

const gameBoard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board.push([]);
        for (let n = 0; n < columns; n++) {
            board[i].push(cell());
        }
    } 

    const getBoard = () => board;

    const logBoard = () => {
        let boardString = '';

        board.map((row) => {
            row.map((cell) => {
                boardString += `|${cell.getValue()}|  `;
            });
            boardString += '\n\n';
        });

        console.log(boardString);
    }

    const setToken = (row, column, token) => {
        board[row][column].setValue(token);
    }

    const checkCell = (row, column, token) => {
        if (board[row][column].checkTaken(token)) return true;
    }

    return { getBoard, logBoard, setToken, checkCell };
})();

const createPlayer = function(name, token) {
    const getName = () => name;
    const getToken = () => token; 

    return { getName, getToken };
}

const gameController = (function() {
    const playerOne = createPlayer('Player 1', 'X');
    const playerTwo = createPlayer('Player 2', 'O');
    let currentTurn = playerOne;
    let currentToken = currentTurn.getToken();

    const switchTurn = () => {
        if (currentTurn.getName() === playerOne.getName()) {
            currentTurn = playerTwo;
            currentToken = currentTurn.getToken();
        } else {
            currentTurn = playerOne;
            currentToken = currentTurn.getToken();
        }
    }

    const placeToken = (row, column) => {
        if (gameBoard.checkCell(row, column, currentToken)) {
            return console.log('Cell is already taken!');
        }
        gameBoard.setToken(row, column, currentToken);
        switchTurn();
        gameBoard.logBoard();
    }

    console.log('Let\'s play Tic, Tac, and Toe!')
    console.log(gameBoard.logBoard());

    return { placeToken, switchTurn };
})();