const obj = { a: 1, b: 2, c: 3 };

const obj2 = obj;
const obj3 = { ...obj };

console.log(obj === obj2);
console.log(obj === obj3);

console.log(obj.a);
console.log(obj["a"]);

let i = "b";
console.log(obj[i]);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (j in obj) {
  console.log("j :", j, "::", obj[j]);
}

