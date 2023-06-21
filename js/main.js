function reveal() {
  //select the class .reveal
  const reveals = document.querySelectorAll(".reveal");
  //for loop to run through all the .reveal classes
  for (let i = 0; i < reveals.length; i++) {
    //get window height
    const windowHeight = window.innerHeight;
    //get object data about the size of an element
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      //add class active
      reveals[i].classList.add("active");
    } else {
      //remove active
      reveals[i].classList.remove("active");
    }
  }
}

function animation() {
  //select the class .ani
  const reveals = document.querySelectorAll(".ani");
  //for loop to run through all the .ani classes
  for (let i = 0; i < reveals.length; i++) {
    //get window height
    const windowHeight = window.innerHeight;
    //get object data about the size of an element
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
       //add class active
      reveals[i].classList.add("active");
    } else {
       //add class active
      reveals[i].classList.remove("active");
    }
  }
}

//EVENTS\\
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", animation);

//BUTTONS\\

//ABOUT BTN
if(document.querySelectorAll('.btn')[0]) {
  document.querySelectorAll('.btn')[0].addEventListener('click', function() {
    window.location.href = "#about";
  });
}

//SKILLS BTN
if(document.querySelectorAll('.btn')[1]) {
  document.querySelectorAll('.btn')[1].addEventListener('click', function() {
    window.location.href = "#skills";
  });
}

//PROJECTEN BTNS\\

//HOGER LAGER
if(document.querySelectorAll('.btn')[2]) {
  document.querySelectorAll('.btn')[2].addEventListener('click', function() {
    window.location.href = "https://arjunsantokhi.github.io/hogerlager/";
  });
}

//TIC TAC TOE
if(document.querySelectorAll('.btn')[3]) {
  document.querySelectorAll('.btn')[3].addEventListener('click', function() {
    window.location.href = "https://arjunsantokhi.github.io/tictactoe";
  });
}

//ESCAPE ROOM
if(document.querySelectorAll('.btn')[4]) {
  document.querySelectorAll('.btn')[4].addEventListener('click', function() {
    window.location.href = "https://nasim-saaidi.github.io/escape-room/";
  });
}

//BLACK JACK
if(document.querySelectorAll('.btn')[5]) {
  document.querySelectorAll('.btn')[5].addEventListener('click', function() {
    window.location.href = "https://github.com/ROCMondriaanTIN/sd22-themaweek-2-t1h-arjunsantokhi";
  });
}

//DASHBOARD
if(document.querySelectorAll('.btn')[6]) {
  document.querySelectorAll('.btn')[6].addEventListener('click', function() {
    window.location.href = "https://github.com/ROCMondriaanTIN/sd22-p04-project-dashboard-team-yaragg-riders";
  });
}

//PORTFOLIO
if(document.querySelectorAll('.btn')[7]) {
  document.querySelectorAll('.btn')[7].addEventListener('click', function() {
    window.location.href = "#";
  });
}