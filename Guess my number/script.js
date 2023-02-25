'use strict';
/*

document.querySelector('.message');

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 20;

document.querySelector('.score').textContent = 32;

console.log((document.querySelector('.guess').value = 23));
*/

// selecting button element to handle the click event

// ---------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// ------------------------------------------------------

/*----- check button ----- */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input:
  if (!guess) {
    displayMessage('🛑 No Number!');
  }

  // when player wins the game :
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').value = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
    } else {
      displayMessage('💥 You lost the game');
      score = 0;
    }
  }
  document.querySelector('.score').textContent = score;
});

/*----- Again button ----- */
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#333';

  // set highscore
  // document.querySelector('.highscore').textContent = score;

  // set score to zero(0) and print in the score value
  score = 20;
  document.querySelector('.score').textContent = score;

  // again ask Start guessing...
  displayMessage('Start guessing...');

  // secret number turns --> ?
  document.querySelector('.number').textContent = '?';

  // guess is blank
  document.querySelector('.guess').value = '';

  // Again generate new number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
