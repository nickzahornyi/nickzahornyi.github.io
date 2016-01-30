var hours = "00";
var	minutes = "00";
var	seconds = "00";
var	miliseconds = '0';
var timer;
var counter = 0;
var date = new Date(0, 0);

var app = {
createElement: function (elementParams) {
    var element = document.createElement(elementParams.tagName);

    if (elementParams.inputType){
      element.setAttribute('type', elementParams.inputType);
    }

    if (elementParams.className){
      element.className = elementParams.className;
    }

    if (elementParams.content){
      element.innerHTML = elementParams.content;
    }

    if (elementParams.parentElementFirst){
      elementParams.parentElementFirst.insertBefore(element, document.body.firstChild);
    } 

	if (elementParams.parentElement){
      elementParams.parentElement.appendChild(element);
 	}
    
    return element;
  }
}

var body = app.createElement ({
  tagName: 'div',
  parentElementFirst: document.body,
  className: 'wrapper'
});

var wrapper = document.querySelector('.wrapper')
  timer = app.createElement ({
  tagName: 'div',
  content: '00:00:00:000',
  parentElement: wrapper,
  className: 'timer'
});

  start = app.createElement ({
  tagName: 'button',
  content: 'Start',
  parentElement: wrapper,
  className: 'start'
});

  clear = app.createElement ({
  tagName: 'button',
  content: 'Clear',
  parentElement: wrapper,
  className: 'clear'
});

start.addEventListener('click', startTimer);
clear.addEventListener('click', resetTimer);

function startTimer() {
   counter++;
   if (counter%2) {   
   if (timer) clearInterval(timer);
   timer = setInterval(
   function () {
   date.setMilliseconds( date.getMilliseconds() + 4);
   var miliseconds = date.getMilliseconds();

   if (miliseconds < 99){
       miliseconds = '0' + miliseconds;
       };

   if (miliseconds === 996) {
       seconds++;
       if (seconds < 10){
       seconds = "0" + seconds;
       };
       miliseconds = 0;
       };

   if (seconds == 60) {
       minutes++;
       if (minutes < 10){
       minutes = "0" + minutes;
       };
       seconds = '00';
       };
       document.querySelector('.timer').innerHTML = hours + ':' + minutes + ':' + seconds + ':' + miliseconds;
     });
       var linkPause = document.querySelector('.start')
       linkPause.innerHTML = 'Pause';
       linkPause.style.backgroundColor = '#2812F0';
     } else {
       window.clearInterval(timer);
       var linkCont = document.querySelector('.start')
       linkCont.innerHTML = 'Cont..';
       linkCont.style.backgroundColor = '#49C90D';
     };
     };

function resetTimer()
     {     
     if (timer) clearInterval(timer);  
     miliseconds = 0;
     seconds = '00';
     minutes = '00';
     var hours = '00';
     document.querySelector('.timer').innerHTML = '00:00:00:000';
     var linkStart = document.querySelector('.start');
     linkStart.innerHTML = 'Start';
     linkStart.style.backgroundColor = '#49C90D';
     }

