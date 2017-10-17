var html = '';
var red;
var green;
var blue;
var rgbColor;
var testCounter = 0;

function question (){
var recordPress = prompt("How many circles do you want?");

  for (i = 0; i < parseInt(recordPress); i++) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html = '<div style="background-color:' + rgbColor + '"></div>';

  document.write(html);
  }
}

question();
