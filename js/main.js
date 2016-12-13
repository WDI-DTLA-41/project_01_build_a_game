console.log('hello');
var button = document.querySelector('button');
var word1 = ['C', 'O', 'F', 'F', 'E', 'E'];
var word2 = ['I', 'N', 'T', 'E', 'R', 'N', 'E', 'T'];
var word3 = ['D', 'O', 'G']
var skeleton = [
document.querySelector('.head'),
document.querySelector('.body'),
document.querySelector('.leftarm'),
document.querySelector('.rightarm'),
document.querySelector('.leftleg'),
document.querySelector('.rightleg')
]
var playWord;
var letter;
var submit = document.querySelector('.submit');
var j = 0;
var underscores = [];
var placeholders;
var guessed = [];
var guessedBox = document.querySelector('.guessed')
var resetButton = document.querySelector('.reset');


function getLetter(){
  letter = document.querySelector('input').value;
  letter = letter.toUpperCase();
  document.querySelector('input').value = '';
  gameLogic();
}

function getWord(evt) {
  underscores = [];
  var number = Math.random();
  if (number >= .6){
    playWord = word1;
  } else if (number < .6 && number >= .3){
    playWord = word2;
  } else if (number < .3){
    playWord = word3;
  }
  for (h = 0; h < playWord.length; h++){
    underscores.push('_');
  }
  placeholders = document.querySelector('.placeholders');
  placeholders.textContent = underscores.join(' ');
}
 function gameLogic(){
  for (i = 0; i < playWord.length; i++){
  if (playWord.includes(letter)){
    console.log('yes');
    index = playWord.indexOf(letter);
    underscores[index] = playWord[index];
    placeholders.textContent = underscores.join(' ');
    // letter = null;
    return;
  } else {
    console.log('no');
    guessed.push(letter);
    guessedBox.innerHTML = 'Guessed:<br>' + guessed;
    skeleton[j].style.visibility = "visible";
    j = j + 1;
    return;
  }
}
}

function reset(evt) {
  guessedBox.innerHTML = 'Guessed:';
  placeholders.textContent = '';
  for (k = 0; k < skeleton.length; k++){
    skeleton[k].style.visibility = "hidden";
  }
  playWord = null;
}


button.addEventListener('click', getWord);
submit.addEventListener('click', getLetter);
resetButton.addEventListener('click', reset)
