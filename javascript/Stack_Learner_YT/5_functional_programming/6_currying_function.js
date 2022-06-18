// ----------------- currying function -----------------
// 1. This function takes only one argument.
// 2. If need many arguments then it return another function which takes another argument.

// Ex 1 : General Function
function generalFunc(a, b, c) {
  return a + b + c;
}

let generalResult = generalFunc(10, 20, 30);

console.log("generalResult :", generalResult);

// Ex 2 : Currying Function
function curryingFunc(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let curryingResult = curryingFunc(10)(20)(30);
let curryingResult1 = curryingFunc(10);
let curryingResult2 = curryingResult1(20);
let curryingResult3 = curryingResult2(30);

console.log("curryingResult :", curryingResult);
console.log("curryingResult3 :", curryingResult3);
