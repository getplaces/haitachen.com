
//Validate function
function validateForm() {
  const regexvalid = new RegExp(/^[a-zA-Z\u0590-\u05FF \u00a9\u00ae\u2000-\u3300\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff,.:!?-]+$/);
  const isValid = regexvalid.test(req.body.newLine);
  if (!isValid) {
    alert("אין להשתמש בתווים מיוחדים");
    return false;
  }
}


//Make Iframe full size function
function resizeIframe(iframe) {
  iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}


//Confetti functions
var confettiCount = 200
var currConfettiCounter = 0

function randomTiming() {
  var timing = Math.random()*3 + 2.2
  return timing
}

function createConfettiDiv(id, top, right, timing) {

  var textArray = ['🎉','🎊','✨','🍰','❤',]
  var item = textArray[Math.floor(Math.random()*textArray.length)]

  var div = document.createElement('div')
  div.id = id
  div.className = 'confetti , unselectable'
  div.innerHTML = item
  div.style.position = 'absolute'
  div.style.overflow = 'hidden'
  div.style.top = top
  div.style.right = right

  div.style.transition = 'top '+ timing +'s ease-in , right '+ timing +'s linear'

  var tilt = Math.random() * 10
  tilt *= Math.round(Math.random()) ? 1:-1;
  div.style.transform = 'rotate('+ tilt + 'deg)'
  
  document.getElementById('page').appendChild(div)
}

function createConfetti(id,timing) {
  var w = window.innerWidth - (0.1 * window.innerWidth)
  var tops = -Math.floor(Math.random() * 2500 + 200) + 'px'
  var right = Math.floor(Math.random() * w) + 'px'
  createConfettiDiv(id, tops , right, timing)
}


function throwConfetti(id) {
  setTimeout(function(){
  var h = window.innerHeight
  var tops = Math.floor(Math.random() * 1000 + h + 200)
  var right = Math.floor(Math.random() * 200 + 20 )
  right *= Math.round(Math.random()) ? 1: -1;

  document.getElementById(id).style.top = tops +'px'

  var currRight = document.getElementById(id).style.right
  document.getElementById(id).style.right = (parseInt(currRight,10) + right)},1)
}

function deleteConfetti(id, timing){
  setTimeout(function(){
    document.getElementById(id).remove()
  },timing*1000)
}

function confetti(e){
  var currConfettiId = currConfettiCounter
  currConfettiCounter += 50
  for (let i = 0; i<confettiCount; i++){
    var rndTiming = randomTiming()
    var id = 'confetti'+(currConfettiId+i)
    createConfetti(id, rndTiming)
    throwConfetti(id)
    deleteConfetti(id,rndTiming)
  }
}

document.getElementById('cards').addEventListener('click',confetti)


// Countdown functions
var countDownDate = new Date("Jan 12, 2022 00:00:00").getTime();


var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const fixeddays = ('' + days).padStart(2, '0')
  const fixedhours = ('' + hours).padStart(2, '0')
  const fixedminutes = ('' + minutes).padStart(2, '0')
  const fixedseconds = ('' + seconds).padStart(2, '0')

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = fixeddays + ":" + fixedhours + ":"
  + fixedminutes + ":" + fixedseconds;
}, 1);