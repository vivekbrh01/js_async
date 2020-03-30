/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

// Answer: Partnah will be logged in the console first. Then Howdy will be console logged

// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function display() {
  console.log("Hello");
}

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(display, 3000);
}

// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("Hello");
  setTimeout( function display() {
    console.log("Good Bye");
  }, 2000)
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

var end;

function brokenRecord() {
  // ADD CODE HERE
  end = setInterval(() => {
    console.log("Hi Again");
  }, 1000);
}

function stop () {
  clearInterval(end);
}

addEventListener("click", stop);

// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */
var end;
function limitedRepeat() {
  // ADD CODE HERE
 end = setInterval(() => {
    console.log("Hi");
  }, 1000);
}

limitedRepeat();
  setTimeout(() => {
    clearInterval(end);
  }, 5000);

// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  // ADD CODE HERE

  interval = interval * 1000;
  duration = duration * 1000;

  let timeInterval = setInterval (func, interval);

  setTimeout(() => {
    clearInterval(timeInterval);
  }, duration);
}

// Uncomment the following lines to check your work!

function theEnd() {
  console.log('This is the end!');
}

everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!