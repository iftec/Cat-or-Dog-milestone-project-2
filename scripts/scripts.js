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