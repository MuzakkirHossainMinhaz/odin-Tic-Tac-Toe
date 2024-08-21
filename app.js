// game board
const GameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
      return true; // mark was successfully placed
    }
    return false; // cell already occupied
  };

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, setMark, resetBoard };
})();

// player Factory
const Player = (name, marker) => {
  return { name, marker };
};

// game controller
const GameController = (() => {
  let player1, player2;
  let currentPlayer;
  let gameOver = false;

  // start a new game
  const startGame = (name1, name2) => {
    player1 = Player(name1, "X");
    player2 = Player(name2, "O");
    currentPlayer = player1;
    gameOver = false;
    GameBoard.resetBoard();
    DisplayController.setMessage(`${currentPlayer.name}'s turn`);
    DisplayController.renderBoard();
  };

  // play a round (player places a mark)
  const playRound = (index) => {
    if (gameOver) return;

    if (GameBoard.setMark(index, currentPlayer.marker)) {
      if (checkWinner()) {
        DisplayController.setMessage(`${currentPlayer.name} wins!`);
        gameOver = true;
      } else if (checkTie()) {
        DisplayController.setMessage("It's a tie!");
        gameOver = true;
      } else {
        switchPlayer();
        DisplayController.setMessage(`${currentPlayer.name}'s turn`);
      }
      DisplayController.renderBoard();
    } else {
      DisplayController.setMessage("Spot already taken! Try again.");
    }
  };

  // switch the current player
  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  // check for a winner
  const checkWinner = () => {
    const board = GameBoard.getBoard();
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    return winPatterns.some(
      (pattern) =>
        board[pattern[0]] &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
    );
  };

  // check for a tie
  const checkTie = () => {
    return GameBoard.getBoard().every((cell) => cell !== "");
  };

  return { startGame, playRound };
})();

// display controller
const DisplayController = (() => {
  const cells = document.querySelectorAll(".cell");
  const messageElement = document.querySelector("#message");
  const startButton = document.querySelector("#start");
  const nameInput1 = document.querySelector("#name1");
  const nameInput2 = document.querySelector("#name2");

  // render the game board to the DOM
  const renderBoard = () => {
    const board = GameBoard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  };

  // set a message on the display
  const setMessage = (message) => {
    messageElement.textContent = message;
  };

  // bind events to the DOM elements
  const bindEvents = () => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        GameController.playRound(index);
      });
    });

    startButton.addEventListener("click", () => {
      const name1 = nameInput1.value || "Player 1";
      const name2 = nameInput2.value || "Player 2";
      GameController.startGame(name1, name2);
    });
  };

  return { renderBoard, setMessage, bindEvents };
})();

// initialize event bindings when the page loads
DisplayController.bindEvents();
