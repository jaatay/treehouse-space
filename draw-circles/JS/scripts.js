var html = '';
var red;
var green;
var blue;
var rgbColor;
var testCounter = 0;

function question (){
var recordPress = prompt("How many circles do you want?");

function randomColor (){
  return Math.floor(Math.random() * 256 );
}

  for (i = 0; i < parseInt(recordPress); i++) {
  red = randomColor();
  green = randomColor();
  blue = randomColor();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html = '<div style="background-color:' + rgbColor + '"></div>';

  document.write(html);
  }
}

question();
