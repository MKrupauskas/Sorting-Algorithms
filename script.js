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
  console.log(array)
}


function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255, 50, 50);
}
