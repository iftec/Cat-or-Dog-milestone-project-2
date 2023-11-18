/**
 * @jest-environment jsdom
 */


// scripts.test.js

describe('makeGuess', () => {

  test('increments score when guess matches actual', () => {
    // Mock implementation 
  });

  test('ends game when guess does not match actual', () => {
    // Mock implementation
  });

});

describe('restartGame', () => {

  test('resets score to 0', () => {
    // Mock implementation
  });

  test('sets gameOver to false', () => {
    // Mock implementation  
  });

});

// score.test.js

describe('saveScore', () => {

  test('saves new score to localStorage', () => {
    // Mock localStorage
  });

  test('sorts scores descending', () => {
    // Mock scores array
  });

  test('limits scores array to 5 items', () => {
    // Add more than 5 items
  });

});

// highscores.test.js

describe('getTopScores', () => {

  test('gets scores from localStorage', () => {
     // Mock localStorage  
  });

  test('sorts scores descending', () => {
    // Pass in unsorted array
  });

  test('limits scores to top 3', () => {
    // Pass in more than 3 scores
  });

});
