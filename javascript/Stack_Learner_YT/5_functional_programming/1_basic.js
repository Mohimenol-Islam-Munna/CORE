function first() {
  return "hello first function";
}

function second() {
  console.log("hello second function");
}

const f1 = first();

console.log(f1);
second();

function third(a, b, c) {
  console.log("function arguments ::", arguments["1"], a);
}

third(1, 2, 3);
