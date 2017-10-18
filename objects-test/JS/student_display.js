var message = "";
var i;
var extraLoop = true;

function print(message){
  var newMessage = document.getElementById("mainParagraph");
  newMessage.innerHTML = message;
}

var printPattern = function(){
  message +="<h2>Student: " + studentInfo[i].name + "</h2>";
  message +="<p>Track: " + studentInfo[i].track + "</p>";
  message +="<p>Achievements: " + studentInfo[i].achievements + "</p>";
  message +="<p>Points: " + studentInfo[i].points + "</p>";
}

var searchPattern = function(){
  while (true) {
      var searchThis = prompt("Type a student name (John, Sally, Bill, Kool, or Candy) to get info. Type 'quit' to exit");
      if (searchThis.toLowerCase() === "john") {
          i = 0;
          printPattern();
        } else if (searchThis.toLowerCase() === "sally") {
          i = 1;
          printPattern();
        } else if (searchThis.toLowerCase() === "bill") {
          i = 2;
          printPattern();
        } else if (searchThis.toLowerCase() === "kool") {
          i = 3;
          printPattern();
        } else if (searchThis.toLowerCase() === "candy") {
          i = 4;
          printPattern();
        } else if (searchThis.toLowerCase() === "quit") {
          break;
          }
      }
      print(message);
  }

var repeatPattern = function(){
  var askAgain = prompt("Type 'Yes' to kill/search another student, or 'No' to exit");
  if (askAgain.toLowerCase() === "yes") {
    searchPattern();
    } else if (askAgain.toLowerCase() !== "yes") {
    print(message);
    extraLoop = false;
    }
}

searchPattern();

while (extraLoop) {
    repeatPattern();
    if (extraLoop === false){
      break;
    }
}
