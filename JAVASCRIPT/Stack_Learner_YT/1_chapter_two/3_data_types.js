// Data Types:
// 1. Primitives
// 2. Object

// --------- Primitives ----------
// 1. Number
console.log(" ********* Number *********");
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
console.log("NaN Number ::", "abc" * 0);

// Infinity vs NaN 
console.log("Infinity vs NaN  ::", 1 / 0 == "abc" * 0);
console.log("Infinity vs NaN ::", 1 / 0 === "abc" * 0);

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
console.log(" ********* BigInt *********");
let largeData = 10n;
console.log("BigInt ::", largeData);
console.log("BigInt Type ::", typeof largeData);

// 3. String
console.log(" ********* String *********");
let str1 = "123";
let str2 = "munna";
let str3 = `munna`;
console.log("String  :", str1);
console.log("String :", str2);
console.log("String  :", str3);
console.log("Typeof of String ::", typeof str1);

console.log("Typeof String ::", typeof String);
console.log("Typeof String() ::", typeof String());

// Numeric to String
let str4 = String(456);
console.log("Numeric to String :", str4);

// Boolean to String
let str5 = String(false);
let str6 = String(true);
console.log("Boolean to String  :", str5);
console.log("Boolean to String :", str6);

// !Undefined to String
let str7 = String(undefined);
console.log("Undefined to String :", str7);

// Null to String
let str8 = String(null);
console.log("Null to String :", str8);

// 4. Boolean
console.log(" ********* Boolean *********");
console.log("true :", true);
console.log("false :", false);

console.log("Boolean true:", Boolean(0));
console.log("Boolean false :", Boolean(1));

console.log("Boolean number:", Boolean(123));
console.log("Boolean string :", Boolean("abc"));

console.log("Boolean true:", Boolean(null));
console.log("Boolean false :", Boolean(undefined));

console.log("Boolean true compare :", true === true);
console.log("Boolean false compare :", false === false);
console.log("Boolean false compare :", true == false);

// 5. Undefined
console.log(" ********* Undefined *********");

let und1;
console.log("Undefined :", und1);

// 6. Null
let null1 = null;
console.log(" ********* Null *********");
console.log("Null :", null1);

console.log("Undefined vs NUll ::", undefined == null);
console.log("Undefined vs NUll ::", undefined === null);

// 7. Symbol
console.log(" ********* Symbol *********");
// create unique value
let sym1 = Symbol();
let sym2 = Symbol("id");

console.log("Symbol sym1 ::", sym1);
console.log("Symbol sym2 ::", sym2);

console.log("Symbol typeof ::", Symbol);
console.log("Symbol typeof ::", Symbol());

console.log("Symbol compare ::", Symbol() == Symbol());
console.log("Symbol compare ::", Symbol() === Symbol());

// ---------- End Primitives -----

// --------- Object --------------
// 1. Object
// 2. Array
// 3. Function
// --------- End Object ----------
