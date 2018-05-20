var main = document.getElementById('main');
var singlePlayerMenu = document.getElementsByClassName('spMenu');
var multiPlayerMenu = document.getElementsByClassName('mpMenu');
var rwPlay = document.getElementsByClassName('rwPlay');
var spButton = document.getElementById('singlePlayer');
var mpButton = document.getElementById('multiPlayer');
var spMainMenu = document.getElementById('spMainMenu');
var mpMainMenu = document.getElementById('mpMainMenu');
var spRandomWords = document.getElementById('spRandomWords');
var sprwStart = document.getElementById('sprwStart');
/**
 * Hide element
 */
function hide(el) {
  el.style.display = 'none';
}
/**
 * Show element
 */
function show(el) {
  el.style.display = 'block';
}
/**
 * Show the main menu
 */
function mainMenu() {
  show(main);
}
/**
 * Click handlers for the different menu screens
*/
spButton.addEventListener('click', function() {
  hide(main);
  show(singlePlayerMenu[0]);
});

mpButton.addEventListener('click', function() {
  hide(main);
  show(multiPlayerMenu[0]);
});

spMainMenu.addEventListener('click', function() {
  hide(singlePlayerMenu[0]);
  mainMenu();
});

mpMainMenu.addEventListener('click', function() {
  hide(multiPlayerMenu[0]);
  mainMenu();
});

spRandomWords.addEventListener('click', function() {
  hide(singlePlayerMenu[0]);
  show(rwPlay[0]);
});

// Play a single player random words game
sprwStart.addEventListener('click', function () {
  var text = "Scrooge knew he was dead valuable brown ring odd treat show classy" +
  " blue-eyed apologize delightful astonishing rigid prefer ultra recess handsomely " +
 "actor secretary happen pause ponder decrease ambiguous win jail resist weigh " +
"oatmeal burn abject observe acrid view proceed tooth";
  var nextChar;
  var nextWord = text.split(" ")[0];
  var nextWordCount = 0;
  var count = 0;
  var score = 0;

  var div = document.createElement("div");
  div.setAttribute("id", "timer");
  div.className = "timer";
  div.innerHTML = 0 + ":" + 05;
  var spDiv = document.getElementById("spGame");
  while(spDiv.firstChild){
    spDiv.removeChild(spDiv.firstChild);
  }
  spDiv.appendChild(div);
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "rwCanvas");
  canvas.setAttribute("width", 800);
  canvas.setAttribute("height", 480);
  spDiv.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.clearRect(0,0,800,480);
  ctx.fillText(text.split(" ")[0],10,50);
  startTimer();



function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    window.addEventListener('keypress', keyTyped, false);
    ctx.clearRect(0,0,800,480);
    ctx.fillText("Time\'s up! Your typed: " + score + " words ", 10, 50);
    return;
  }

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

  window.addEventListener('keypress', keyTyped, false);

  function keyTyped(e){

    nextChar = nextWord.charAt(count);

    if(String.fromCharCode(e.charCode) === nextChar){
      count++;
    }

    if(count === nextWord.length){
      count = 0;
      nextWordCount++;
      if(nextWordCount < text.split(" ").length){
        nextWord = text.split(" ")[nextWordCount];
      }
      score ++;
      console.log('Score is: ' + score);
      ctx.clearRect(0,0,800,480);
      ctx.fillText(nextWord,10,50);
    }
  }
});
