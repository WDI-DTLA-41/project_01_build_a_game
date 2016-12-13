// query selector
var td = document.querySelectorAll('td');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var button = document.querySelector('button');

// add class on click
function onClick(){
  console.log(this);
  // add class of color1
  this.setAttribute('class', 'color1');
}


// add event listeners to individual td
td.forEach(function(element){
  console.log(element);
  element.addEventListener('click', onClick);
});






// attempted if/else to change classes
// function toggle(td) {
//   if (td) {
//   // add class of color1
//   this.setAttribute('class', 'color1');

//   // add x inside
//   var p = document.createElement('p');
//   p.innerText = "X";
//   this.appendChild(p);
//   } else {
//       // add class of color1
//   this.setAttribute('class', 'color2');

//   // add x inside
//   var p = document.createElement('p');
//   p.innerText = "O";
//   this.appendChild(p);
//   }
// }



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








