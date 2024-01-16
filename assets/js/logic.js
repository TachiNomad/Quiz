document.getElementById('questions').style.display="none"; 

document.getElementById('questions2').style.display="none"; 

document.getElementById('questions3').style.display="none"; 

document.getElementById('questions4').style.display="none"; 



var sec = 45

//starting to question 1-------------------------------------------------------------------

document.getElementById('start').addEventListener('click', function() {
    
    localStorage.clear();

  var x = document.getElementById("start-screen");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  };

  var v = document.getElementById("questions");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "show";
  };



  var timer = setInterval(function(){
      document.getElementById('time').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
          alert("Time is up!")
          var href = 'highscores.html'
          window.location=href;
      }
      console.log(sec)
  }, 1000);
  
  const card = document.getElementsByClassName("incorrect");

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", redirect);
  }
  
  function redirect(event) {
      audio2.play();
      document.getElementById('time').innerHTML='00:'+sec;
      sec -= 10;
  }
  
  document.getElementById('q4btn1').addEventListener('click', function() {
        localStorage.setitem("sec");
    });
});



//question 1 to question 2---------------------------------------------------------------------------------

document.getElementById('q1btn2').addEventListener('click', function() {
    audio1.play();

    var x = document.getElementById("questions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    };
    var v = document.getElementById("questions2");
    if (v.style.display === "none") {
      v.style.display = "block";
    } else {
      v.style.display = "show";
    };
});

//question 2 to question 3--------------------------------------------------------------

document.getElementById('q2btn3').addEventListener('click', function() {
    audio1.play();

    var x = document.getElementById("questions2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    };
    var v = document.getElementById("questions3");
    if (v.style.display === "none") {
      v.style.display = "block";
    } else {
      v.style.display = "show";
    };
});

//question 3 to question 4---------------------------------------------------------------------

document.getElementById('q3btn4').addEventListener('click', function() {
    audio1.play();

    var x = document.getElementById("questions3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    };
    var v = document.getElementById("questions4");
    if (v.style.display === "none") {
      v.style.display = "block";
    } else {
      v.style.display = "show";
    };
});

//question 4 to highscore-----------------------------------------------------------------

document.getElementById('q4btn1').addEventListener('click', function() {
//         console.log(time)
// window.myVariable = "time";
    audio1.play();
    var href = 'highscores.html'
    window.location=href;
});

var score = time

//  other--------------------------------------------------------------------------------

var audio1 = new Audio('assets/sfx/correct.wav');

var audio2 = new Audio('assets/sfx/incorrect.wav');