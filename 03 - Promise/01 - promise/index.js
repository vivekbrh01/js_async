// Challenge 1

function sayHello() {

  setTimeout( function display() {
    console.log("Hello");
  }, 1000 );

}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {

  // ADD CODE HERE

  setTimeout ( () => resolve("Resolved!"), 1000 );
});

// ADD CODE HERE

promise.then(
  result => console.log(result)
);

// Should print out "Resolved!"



// Challenge 3
let myVar;

let promise = new Promise(function(resolve, reject) {
  // ADD CODE HERE

  myVar = setInterval( () => reject("Rejected!"), 1000);
});


// Should print out "Reject!"
// ADD CODE HERE

promise.catch(
  result => console.log(result)
);

// Challenge 4

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE

  setTimeout( () => resolve("Promise has been resolved!"), 0)
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");

//Answer : I'm not the promise! is printed first and then Promise has been resolved! is printed.

// This happens because the once the background work is initiated in the web browser a placeholder object i.e. Promise is returned immediately to the JavaScript.


// Challenge 5
function delay() {
  let promise = new Promise( function (resolve, reject) {

    setTimeout( () => resolve(), 1000)

  });

  return promise;

}

function sayHello () {
  console.log("Hello");
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW

var secondPromise = new Promise ( function (resolve, reject) {
  setTimeout( () => resolve ("Second!"), 3000 )
});

var firstPromise = new Promise ( function (resolve, reject) {
  setTimeout(() => resolve(secondPromise), 1000 )
});

firstPromise.then( value => console.log(secondPromise) );

//

// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise( (resolve, reject) => {
    if ( i >= 0 && i < fakePeople.length ) {
      setTimeout(() => resolve( fakePeople[i] ), returnTime);
    } else {
      reject( { message: "index out of range" } );
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  return fakeAPICall.then( 
    responses => Promise.all( 
      responses.map ( r => r.json() ) 
    ) 
  )
}