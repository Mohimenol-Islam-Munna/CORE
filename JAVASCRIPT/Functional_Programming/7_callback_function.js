// --------------- Callback Function ----------------
// 1. We can pass callback function like higher order function as argument of another function
// 2. Form first class function we know that we can define a function anywhere for our need.
// 3 callback function is the combination of the above two function.

// main/simple function which takes cb as a callback function with others arguments.
function resultFunc(a, b, cb) {
  let sum = a + b;
  let sub = a - b;
  let cb_return = cb(sum, sub);
  return cb_return;
}

// Ex 1: callback function
function multiply(sum, sub) {
  return sum * sub;
}

// callback function pass like higher order function 
let resultOfMainFunc = resultFunc(15, 10, multiply);
console.log("resultOfMainFunc :", resultOfMainFunc);

// Ex 2 : callback funciton
// callback function like first class function 
let resultOfMainFunc2 = resultFunc(15, 10, function (sum, sub) {
  return sum / sub;
});

console.log("resultOfMainFunc2 :", resultOfMainFunc2);
