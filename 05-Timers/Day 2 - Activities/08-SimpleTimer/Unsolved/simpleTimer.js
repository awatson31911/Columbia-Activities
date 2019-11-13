// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
  setTimeout(fiveSeconds, 5000)
  setTimeout(tenSeconds, 10000)
  setTimeout(timeUp, 15000)
// ---------------------

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  $('#time-left').html('<h2>About 10 seconds left</h2>')
  console.log('10 Seconds Left')
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $('#time-left').html('<h2>About 5 seconds left</h2>')
  console.log('5 Seconds Left')
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done
  $('#time-left').html('<h2>Time\'s up !</h2 > ')
  console.log('DONE')

  // The following line will play the audio file above
  audio.play();
}
