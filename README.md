# odin-Tic-Tac-Toe

A Tic Tac Toe game built as part of "The Odin Project" **JavaScript Course** in the Full Stack JavaScript path.

## Table of Contents

- [General Information](#general-information)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## General Information

"Odin Tic Tac Toe" is a classic Tic Tac Toe game implemented in JavaScript, with a focus on modular code design. The project is structured to minimize global variables and make use of factories and the module pattern to manage game logic, player data, and the game board. The goal is to create a well-structured, interactive game that allows two players to compete by marking spaces in a 3x3 grid, with logic to determine when the game is won or tied.

## Features

- **Modular Design:** The game logic is encapsulated in objects such as `GameBoard`, `Player`, and `GameController`, adhering to the principles of object-oriented programming.
- **Interactive Game Play:** Players can input their names and take turns marking the game board by clicking on grid squares.
- **Win/Tie Detection:** The game checks for winning combinations or a tie after each move, displaying the results accordingly.
- **Restart Functionality:** Includes a button to start a new game, resetting the game board and player data.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Setup

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MuzakkirHossainMinhaz/odin-Tic-Tac-Toe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd odin-Tic-Tac-Toe
   ```

## Usage

1. Open the `index.html` file in your browser.
2. Enter player names and start the game.
3. Players take turns clicking on the grid to place their marks.
4. The game will announce the winner or declare a tie once the game ends.
5. Use the restart button to play again.

## Acknowledgements

- **The Odin Project:** For providing the course and project guidelines.
- **MDN Web Docs:** For documentation and resources on JavaScript, HTML, and CSS.
