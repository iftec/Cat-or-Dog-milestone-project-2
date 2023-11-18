// Assignments
const catButton = document.getElementById('catButton');
const dogButton = document.getElementById('dogButton');
const animalImage = document.getElementById('animalImage');
const resultText = document.getElementById('resultText');
const scoreText = document.getElementById('scoreText');
const restartButton = document.getElementById('restartButton');
const scoreList = document.getElementById('scoreList');
const nameModal = document.getElementById('nameModal');
const closeNameModal = document.getElementById('closeModal');
const userNameInput = document.getElementById('userName');
const saveScoreButton = document.getElementById('saveScoreButton');
const topScores = getTopScores();
const restartGameButton = document.getElementById('restartGameButton');
let score = 0;
let gameOver = false;
// Images used in the game
const images = [
  'images/cat1.jpg',
  'images/cat2.jpg',
  'images/cat3.jpg',
  'images/cat4.jpg',
  'images/cat5.jpg',
  'images/cat6.jpg',
  'images/cat7.jpg',
  'images/cat8.jpg',
  'images/cat9.jpg',
  'images/cat10.jpg',
  'images/dog1.jpg',
  'images/dog2.jpg',
  'images/dog3.jpg',
  'images/dog5.jpg',
  'images/dog6.jpg',
  'images/dog7.jpg',
  'images/dog8.jpg',
  'images/dog9.jpg',
  'images/dog10.jpg'
];

// Add event listeners to buttons
catButton.addEventListener('click', () => makeGuess('cat'));
dogButton.addEventListener('click', () => makeGuess('dog'));
restartButton.addEventListener('click', restartGame);
saveScoreButton.addEventListener('click', saveUserScore);
closeNameModal.addEventListener('click', closeModal);