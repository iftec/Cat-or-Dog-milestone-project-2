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
restartGameButton.addEventListener('click', () => {
  closeModal();
  restartGame();
});
updateScoreboard();

// Make guess function
function makeGuess(guess) {
  if (gameOver) {
    return;
  }

  // Maths for random image
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
        animalImage.src = randomImage;
  const isCat = randomImage.includes('cat');
  const isDog = randomImage.includes('dog');

  // Check if guess is correct
  if ((isCat && guess === 'cat') || (isDog && guess === 'dog')) {
    resultText.textContent = 'Correct! It\'s a ' + (isCat ? 'cat' : 'dog') + ', keep going!';
    score++;
  } else {
    resultText.textContent = 'Wrong! It\'s a ' + (isCat ? 'cat' : 'dog') + '. Try again';
    gameOver = true;
    openModal();
  }

  scoreText.textContent = 'Score: ' + score;
}

// Set restart game parameters
function restartGame() {
  score = 0;
  scoreText.textContent = 'Score: 0';
  gameOver = false;
  restartButton.style.display = 'none';
  resultText.textContent = '';
  animalImage.src = "images/arrow_text1.jpg";

}

// Popup modal
function openModal() {
  nameModal.style.display = 'block';
}

function closeModal() {
  nameModal.style.display = 'none'; 
}

// Score functions
function saveUserScore() {
  const playerName = userNameInput.value;
  if (playerName) {
    saveScore(playerName, score);
    closeModal();
    updateScoreboard();
    restartGame();
  }
}

function saveScore(playerName, playerScore) {
  const scores = getTopScores();
  scores.push({name: playerName, score: playerScore});
  scores.sort((a, b) => b.score - a.score);
  scores.splice(5);
  localStorage.setItem('topScores', JSON.stringify(scores));
}

function getTopScores() {

  // Get scores array
  const scores = JSON.parse(localStorage.getItem('topScores')) || [];
  
  // Only keep top 3 scores
  scores.sort
((a, b) => b.score - a.score);
scores.splice(3);

return scores;
}

function updateScoreboard() {
  const scores = getTopScores();
  scoreList.innerHTML = '';
  scores.forEach((entry, index) => {
      const listItem = document.createElement('li' );
      listItem.textContent =  `${entry.name}: ${entry.score}`;
      scoreList.appendChild(listItem);
  });
}

module.exports = {
  makeGuess,
  restartGame,
  saveScore,
  getTopScores,
  

};
