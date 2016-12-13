console.log('hello');
var button = document.querySelector('button');
var word1 = ['C', 'O', 'F', 'F', 'E', 'E'];
var word2 = ['I', 'N', 'T', 'E', 'R', 'N', 'E', 'T'];
var word3 = ['D', 'O', 'G']
var playWord;
var letter;


function gameLogic(evt) {
  var number = Math.random();
  if (number >= .6){
    playWord = word1;
  } else if (number < .6 && number >= .3){
    playWord = word2;
  } else if (number < .3){
    playWord = word3;
  }
  letter = prompt('Guess a letter').toUpperCase();
  if (playWord.includes(letter)){
    console.log('yes');
  } else {
    console.log('no');
  }
}

button.addEventListener('click', gameLogic);
