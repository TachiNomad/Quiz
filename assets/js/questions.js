//Question 1-----------------------------------------------------

var q1List = document.querySelector("#questions-list");
var q1CountSpan = document.querySelector("#questions-count");

var questions = [];

renderq1();

function renderq1() {

  q1List.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var q1 = questions[i];

    var li = document.createElement("li");
    li.textContent = q1;
    q1List.appendChild(li);

    li.appendChild(button);
    q1List.appendChild(li);
  }
};