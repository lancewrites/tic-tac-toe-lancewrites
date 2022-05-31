# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### 📚 User Stories
- As a user, I can see a 3x3 grid game board on the page.
    - Branch: game-board
    - Mapped over the square component using the square array to get 9 squares
    - styled the group of squares with flexbox
    - Passed the value of the array in state to Square Component
    
- As a user, I can click on a square to mark it.
    - Branch: square-click
    - First user click shows an `X`
    - Make an array of `X` and `O`
    - loop through the array and if the index number is even, then it is player one's turn and when they click it shows an `X`
    [X, O, X, O]
- As a user, my partner can click on a square after me and see their mark.
    - Branch: square-click
    - Second user click shows an `O`
    - oop through the array and if the index number is odd, then it is player two's turn and when they click it shows an `O`
- As a user, I can't click on a square that has already been marked.
    - Branch: square-click

- As a user, when either my partner or I win the game (3 squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 🛠 Resources
- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
