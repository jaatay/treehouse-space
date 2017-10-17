
var yesCounter = 0;

var questions = [
  ["What is the answer to life, love, and everything?" , "42"],
  ["What number comes between 8 and 10?" , "9"],
  ["What internet rule states that if something exists, there is a porn of it?" , "34"]
]

var answers = [
  ["Truely, you know everything!" , "You know nothing, Jon Snow"],
  ["Congratulations, you can read!" , "Ugh...just ugh. Go play with sticks."],
  ["You have plumbed the depths of depravity" , "Congratulations, virgin."]
]

var finalAnalysis = ["You will die alone." , "Meh. Good enough." , "Overachiever!"]

var wrongAnswers = []

for (var i = 0; i < questions.length; i++) {
  answer = prompt(questions[i][0]);
    if (answer === questions[i][1]){
      yesCounter++;
      alert(answers[i][0]);
    } else {
      alert(answers[i][1]);
       wrongAnswers.push(questions[i][0]);
    }
}

document.write("<p>You got " + yesCounter + " question/s correct.</p>");
document.write("<p>That is " + Math.round((yesCounter/3)*100) + "%.</p>" );
document.write("<p><strong>Analysis:</strong></p>");

while (true) {
  var k = yesCounter - 1
    if (yesCounter === 0) {
      document.write("<p>" + finalAnalysis[0] + "</p>");
    } else {
      document.write("<p>" + finalAnalysis[k] + "</p");
    }

    document.write("<div><ol>You missed the following questions:" + "<li>" + wrongAnswers.join(".</li><li> ") + "</li></ol></div>")
    break;
}
