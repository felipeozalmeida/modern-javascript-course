// Function shorthands
const $ = document.querySelector.bind(document);
const e = document.createElement.bind(document);
const t = document.createTextNode.bind(document);

// UI elements
const gameWrapper = $('#game');
const minNum = $('#min-num');
const maxNum = $('#max-num');
const guessInput = $('#guess-input');
const guessBtn = $('#guess-btn');
const message = $('#message');

// App

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const preState = {
  min: 1,
  max: 10,
  guessesLeft: 3
};

const state = {
  ...preState,
  winningNum: getRandomNumber(preState.min, preState.max)
};

function setMessage(msg, color = 'inherit') {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  const borderColor = won === true ? 'green' : 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = borderColor;
  guessBtn.value = 'Play again';
  guessBtn.classList.add('play-again');
  setMessage(msg, borderColor);
}

function handleClick() {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < state.min || guess > state.max) {
    setMessage(`Please enter a number between ${state.min} and ${state.max}`, 'red');
  } else if (guess === state.winningNum) {
    gameOver(true, `${state.winningNum} is correct, YOU WIN!`);
  } else {
    state.guessesLeft--;
    if (state.guessesLeft === 0) {
      gameOver(false, `GAME OVER: The correct number was ${state.winningNum}`);
    } else {
      setMessage(`${guessInput.value} is wrong! You have ${state.guessesLeft} guesses left`);
      guessInput.value = '';
    }
  }
}

function handleReload(e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
}

function setupEventListeners() {
  guessBtn.addEventListener('click', handleClick);
  gameWrapper.addEventListener('mousedown', handleReload);
}

function init() {
  minNum.textContent = state.min;
  maxNum.textContent = state.max;
  setupEventListeners();
}

init();
