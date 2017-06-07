// TODO
// Draw rect
// Make a control bar on the top of the page
//
let arrayLength = 30;
let array = [arrayLength];

window.onload = function() {
  for (let i = 0; i < arrayLength; i++) {
    array[i] = i + 1;
  }
  array = shuffle(array);
  
  console.log(array)
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
  createCanvas(windowWidth, windowHeight);
  background(255, 50, 50);
}
