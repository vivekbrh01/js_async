Guess the output of the codes below :-

1.
```js
function sayHello() {
  console.log("Hey You Called Me");
}
setTimeout(sayHello, 1000);

console.log("Hey You!");
```

 output: 
 1 ms: Hey You!
 1001 ms: Hey You Called Me

2.
```js
function sayHello() {
  console.log("Hey You Called Me");
}

setTimeout(sayHello, 0);

console.log("Hey You!");
```
 output:
1 ms: Hey You!
2 ms: Hey You Called Me

3.
```js
function main() {
  console.log("A");
  setTimeout(function display() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```
 output:
 1 ms: A
 2 ms: C
 3 ms: B


4.
```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}

 output: Since the `function main ()` is never called it will return `undefined`

5. Look at the output of the code below to understand hwo things are happening.

```js
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log("A", Date.now() - current);
  setTimeout(function exec() {
    console.log("B", Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log("C", Date.now() - current);
}

main();

output: 
0 ms: A
3001 ms : C
3002 ms : B
```