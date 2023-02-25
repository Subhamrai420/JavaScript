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
// ------------------------------------------------------

/*----- check button ----- */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input:
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No Number!';
  }

  // when player wins the game :
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //---------------------------------

    // // set highscore
    // let highScore = document.querySelector('.highscore').value;

    // highScore = score;
    // console.log(highScore);
    // document.querySelector('.highscore').textContent = score;

    //----------------------------------
    // set highscore
    // highScore = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').value = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is too high :
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      score = 0;
    }
  }

  // when guess is too low :
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      score = 0;
    }
  }

  // else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = '📉 Too low';
  //   score--;
  // }

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
  document.querySelector('.message').textContent = 'Start guessing...';

  // secret number turns --> ?
  document.querySelector('.number').textContent = '?';

  // guess is blank
  document.querySelector('.guess').value = '';

  // Again generate new number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
