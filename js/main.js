//greeting
var input = document.getElementById('input');
var button = document.getElementById('button');
var p = document.getElementById('text');
addText = function() {
  var userValue = input.value;
  h3 = document.createElement('h3');
  textNode = document.createTextNode("Dive in " + userValue);
  p.appendChild(h3);
  h3.appendChild(textNode);
}
button.addEventListener('click', addText);
//greeting



var sharkNames = ['Carcharodon carcharias', 'Rhincodon typus', 'Galeocerdo cuvier',
  'Manta birostris', 'Stegostoma fasciatum', 'Mitsukurina owstoni',
  'Cetorhinus maximus', 'Alopias vulpinus', 'Sphyrna mokarran', 'Squatina squatina',
  'Etmopterus benchleyi'];

