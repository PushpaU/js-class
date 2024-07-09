// Generate a random number between 0 and 20
let secretNumber = Math.floor(Math.random() * 21);

// Selecting elements from the DOM
const userInput = document.getElementById('userInput');
const startBtn = document.getElementById('startBtn');
const message = document.getElementById('check');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const numberDisplay = document.getElementById('number');
const againBtn = document.getElementById('againBtn');

let score = 20;
let highscore = 0;

// Function to update message
function updateMessage(msg) {
  message.textContent = msg;
}

// Function to update score
function updateScore(num) {
  scoreDisplay.textContent = num;
}

// Function to update highscore
function updateHighscore(num) {
  highscoreDisplay.textContent = num;
}

// Function to reset the game
function resetGame() {
  score = 20;
  updateScore(score);
  secretNumber = Math.floor(Math.random() * 21);
  numberDisplay.textContent = '?';
  updateMessage('Start guessing...');
  userInput.value = '';
}

// Event listener for Check! button
startBtn.addEventListener('click', function() {
  const guess = parseInt(userInput.value);

  if (!guess || guess < 0 || guess > 20) {
    updateMessage('Please enter a valid number between 0 and 20.');
  } else {
    if (guess === secretNumber) {
      updateMessage('🎉 Correct number! You win!');
      if (score > highscore) {
        highscore = score;
        updateHighscore(highscore);
      }
      numberDisplay.textContent = secretNumber;
    } else {
      score--;
      updateScore(score);
      if (score === 0) {
        updateMessage(`😔 Game over! The correct number was ${secretNumber}.`);
      } else {
        updateMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
      }
    }
  }
});

// Event listener for Again! button
againBtn.addEventListener('click', resetGame);

// Initial setup
resetGame();
