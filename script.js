'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generate a randon dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `img/dice-${dice}.png`;
  console.log(dice);
  //   check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //   Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //   switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
