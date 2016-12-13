// query selector
var tr = document.querySelectorAll('tr');
var td = document.querySelectorAll('td');
var color1 = 'color1';
var color2 = 'color2';
var colorHolder = color1;
var button = document.querySelector('button');


// add class on click
function onClick(){
  console.log(this);
  if (colorHolder == color1) {
    colorHolder = color2;
    console.log(this);
    // adds .color1
    this.setAttribute('class', 'color1');
    // prevents second click
    this.removeEventListener('click', onClick);
  } else {
    colorHolder = color1;
      console.log(this);
    // adds .color2
    this.setAttribute('class', 'color2');
    //prevents second click
    this.removeEventListener('click', onClick);
    console.log(colorHolder + "othrer color")
  }
}


// adds event listeners to individual td
td.forEach(function(element){
  console.log(element);
  element.addEventListener('click', onClick);
});





// create array for td
tr.forEach(function(element){
  console.log(element);
  ////////////////////////////////////////////////////// HOW DO I RETURN AN ARRAY?

});



// if (document.querySelector('.color1')) {
//   return true;
// } else ()




    ///////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////
  // code below make shapes bigger by clicking on them //
 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// // query selector
// var td = document.querySelectorAll('td');
// var color1 = document.querySelector('.color1');
// var color2 = document.querySelector('.color2');
// var button = document.querySelector('.clear');

// // add class on click
// function onClick(){
//   console.log(this);
//   // add class of .color1
//   this.setAttribute('class', 'color1');

//   // add x inside
//   var p = document.createElement('p');
//   p.innerText = "X";
//   this.appendChild(p);
// }


// // add event listeners to individual td
// td.forEach(function(element){
//   console.log(element);
//   element.addEventListener('click', onClick);
// });








