// try {
//   const buttons = document.querySelectorAll('.buttons');
//   const showWord = document.querySelector('#showWord p');
//   const image = document.querySelector('#image img');
//   const gameOver = document.querySelector('#gameover');

//   // rest of the code
// } catch (error) {
//   console.error('Error:', error);
// }

let incorrectGuesses = [];
let incorrectGuessCount = 1;
let correctGuesses = [];

function addButtons() {
  const divContainer = document.querySelector(".container");
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const letterArray = letter.split('');

  for (let i = 0; i < letterArray.length; i++) {
    const buttonsInsideDiv = document.createElement("button");
    buttonsInsideDiv.classList.add('buttons');
    buttonsInsideDiv.innerText = letterArray[i];
    divContainer.appendChild(buttonsInsideDiv);
  }

  // function for randomly choose a word from words array
  const wordToGuess = randomword();

  function randomword(){
    const words= ["php","java",'csharp','car','church','lion','google','msn','yoga'];
    return words[Math.floor(Math.random()* words.length)];
  }

  const buttons = document.querySelectorAll('.buttons');
  const showWord = document.querySelector('#showWord p');
  const image = document.querySelector('#image img');
  const gameOver = document.querySelector('#gameover');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (!wordToGuess.includes(this.innerText)) {
        incorrectGuesses.push(this.innerText);
        incorrectGuessCount++;
        console.log(incorrectGuessCount);
        image.src = `img/hangman${incorrectGuessCount - 1}.png`;
        if (incorrectGuessCount === 6) {
          gameOver.style.display = 'block';
          gameOver.addEventListener('click', function() {
            location.reload();
          });
        }
      } else {
        correctGuesses.push(this.innerText);
        let word = '';
        for (let i = 0; i < wordToGuess.length; i++) {
          if (correctGuesses.includes(wordToGuess[i])) {
            word += wordToGuess[i];
          } else {
            word += '_';
          }
        }
        showWord.innerText = word;
        if (!word.includes('_')) {
          gameOver.style.display = 'block';
          gameOver.innerText = 'You won! (click here to play again)';
          gameOver.addEventListener('click', function() {
            location.reload();
          });
        }
      }
      this.setAttribute('disabled', true);
    });
  });
}

addButtons();

