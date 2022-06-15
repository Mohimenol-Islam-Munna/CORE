// Data Types:
// 1. Primitives
// 2. Object

// --------- Primitives ----------
// 1. Number
let num1 = 123;
console.log("number 1 :", num1);
console.log("typeof ::", typeof num1);

let num2 = Number(123);
console.log("Number :", num2);
console.log("Typeof Number ::", typeof Number);
console.log("Typeof Number() ::", typeof Number());

// Infinity number
console.log("Infinity Number ::", 1 / 0);

// NaN number
console.log("NaN Number ::", "abc" / 0);

// Compare number
console.log("Compare Number ::", "123" === 123, 456 === 456);

// Parse number
console.log("Parse to Int Number ::", parseInt(23.59));
console.log("Parse to Float Number ::", parseFloat(23));

// Min/max number
console.log("Min number  :", Number.MIN_VALUE);
console.log("Max number  :", Number.MAX_VALUE);

// String of numeric to number
let num3 = Number("456");
console.log("String of numeric to number :", num3);

// !String of numeric & characters to number
let num4 = Number("456y");
console.log("Numeric & characters to number :", num4);

// Boolean to number
let num5 = Number(false);
let num6 = Number(true);
console.log("Boolean to number :", num5);
console.log("Boolean to number :", num6);

// !Undefined to number
let num7 = Number(undefined);
console.log("Undefined to number :", num7);

// Null to number
let num8 = Number(null);
console.log("Null to number :", num8);

// Symbol to number
// TypeError
// let num9 = Number(Symbol(id));
// console.log("Symbol to number :", num9);

// !Object to number
let num10 = Number({ name: "munna", age: 26 });
console.log("Object to number :", num10);

// 2. BigInt
// 3. String
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// ---------- End Primitives -----

// --------- Object --------------
// 1. Object
// 2. Array
// 3. Function
// --------- End Object ----------
