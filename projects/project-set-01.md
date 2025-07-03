# Projects related to DOM

## Project link: [Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-uxaaqyjd?file=index.html)

# Solution code </>

## project 01:

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = `${this.id}`; // [cannot use 'this' with arrow function]
    // body.style.backgroundColor = `${button.id}`;
    // body.style.backgroundColor = `${e.target.id}`;
  });
});
```

## project 02:

```javascript
// const height = Number(document.querySelector("#height").textContent);
// const weight = Number(document.querySelector("#weight").textContent);
// [accessing the value before 'submit' will give empty value when page is loaded]

const form = document.querySelector('form');

function bmiCalculate(height, weight) {
  const BMI = weight / (height * height);
  return BMI.toFixed(1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); // [prevents form submitting]

  const height = Number(document.querySelector('#height').value); // ['value' because this is an input field]
  const weight = Number(document.querySelector('#weight').value); // ['value' because this is an input field]
  const heightInMeters = height / 100;
  const resultText = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    return (resultText.innerHTML = 'Please give a valid number');
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    return (resultText.innerHTML = 'Please give a valid number');
  }
  
  const result = bmiCalculate(heightInMeters, weight);
  resultText.innerHTML = result;
});
```

## project 03:

```javascript
const clockDisplay = document.getElementById('clock');

// run after every one second
setInterval(() => {
  const date = new Date();
  const localTime = date.toLocaleTimeString();
  const timeZone = date.toDateString();
  clockDisplay.innerText = `${timeZone}\n${localTime}`;
}, 1000);
```

## project 04:

```javascript
const form = document.querySelector('form');
const submit = document.querySelector('#subt');
const guessField = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const hint = document.querySelector('.lowOrHigh');
const resultParas = document.querySelector('.resultParas');

let random = Math.floor(Math.random() * 100 + 1);
const totalGuesses = 10;
remaining.innerHTML = `${totalGuesses}`;

const p = document.createElement('p');

let prevGuesses = [];
let playGame = true;

if (playGame) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userGuess = parseInt(guessField.value);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (guess === '' || 1 > guess > 100 || isNaN(guess)) {
    alert('Please enter a valid guess (1-100)');
    guessField.value = '';
    return;
  }

  prevGuesses.push(guess);
  if (prevGuesses.length === totalGuesses && guess === random) {
    displayGuess(guess);
    displayMessage(
      `Congratulations! You guessed the correct number: ${random}`
    );
    endGame();
  } else if (prevGuesses.length === totalGuesses) {
    displayGuess(guess);
    displayMessage(`Oops! You've run out of guesses. The number was ${random}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(
      `Congratulations! You guessed the correct number: ${random}`
    );
    endGame();
  } else if (guess > random) {
    displayMessage(`Try Lower!`);
    displayGuess(guess);
  } else if (guess < random) {
    displayMessage(`Try higher!`);
    displayGuess(guess);
  }
}

function displayGuess(guess) {
  guessField.value = '';
  guesses.innerHTML = ` ${prevGuesses}`;
  remaining.innerHTML = `${totalGuesses - prevGuesses.length}`;
}

function displayMessage(message) {
  hint.innerHTML = `${message}`;
}

function endGame() {
  playGame = false;
  guessField.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('btn', 'newGame');
  p.innerHTML = 'Start New Game';
  resultParas.appendChild(p);
  startGame();
}

function startGame() {
  const newGameBtn = document.querySelector('.newGame');
  newGameBtn.addEventListener('click', (e) => {
    random = Math.floor(Math.random() * 100 + 1);
    guessField.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    prevGuesses = [];
    guesses.innerHTML = '';
    hint.innerHTML = '';
    remaining.innerHTML = `${totalGuesses}`;
    resultParas.removeChild(p);
    playGame = true;
  });
}
```