// --------------- pure function ---------------------
// 1. This function always return same vlaue for same argument
// 2. This function does not generate any side effect

// expample 1 : pure function
function pureFunction(a) {
  return a + a;
}

const pureFunctionCall = pureFunction(10);
console.log("pureFunctionCall ::", pureFunctionCall);

// example 2 : impure function
let arr = [];

function imPureFunction(b) {
  arr.push(b);
}

imPureFunction(50);

console.log("imPureFunction generate side effect ::", arr);
