// ------------------ Function Composition ---------------
// 1. When result of one function pass as the argument/input of another function then it's called function composition.

function mainFunc(a) {
  return a * 100;
}

function one(b) {
  return b / 10;
}

function two(c) {
  return c + 5;
}

let result = mainFunc(one(two(20)));
console.log("result :", result);
