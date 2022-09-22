let i = 1;
let sum = 0;

for (i; i <= 10; ++i) {
  console.log("i in loop ::", i);
  let j = ++i;
  sum = sum + j;
  console.log("sum in loop ::", sum);
}

console.log("sum :", sum);
console.log("i :", i);
