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

function getLetter(){
  letter = document.querySelector('input').value;
  letter = letter.toUpperCase();
  document.querySelector('input').value = '';
  gameLogic();
}

function getWord(evt) {
  var number = Math.random();
  if (number >= .6){
    playWord = word1;
  } else if (number < .6 && number >= .3){
    playWord = word2;
  } else if (number < .3){
    playWord = word3;
  }
}
 function gameLogic(){
  for (i = 0; i < playWord.length; i++){
  if (playWord.includes(letter)){
    console.log('yes');
    letter = null;
    return;
  } else {
    console.log('no');
    skeleton[j].style.visibility = "visible";
    j = j + 1;
    return;
  }
}
}


button.addEventListener('click', getWord);
submit.addEventListener('click', getLetter);
