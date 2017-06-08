// TODO
// Draw rect
// Make a control bar on the top of the page
//
let arrayLength = 30;
let array = [arrayLength];
let canvas;
let canvasContext;

window.onload = function() {
  for (let i = 0; i < arrayLength; i++) {
    array[i] = i + 1;
  }
  array = shuffle(array);

  console.log(array)
  canvas = document.getElementById('canvas');
  canvasContext = canvas.getContext('2d');

  setInterval(draw, 1000 / 30)
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}


function draw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}
