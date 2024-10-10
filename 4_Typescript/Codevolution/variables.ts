// --------------------- variables ------------------
// 1. variables of typescript almost same to the variables of javascript
// 2. Type in ts variables is optional
// 3. There are three basic types of ts variables :: string, number, boolean.
// 4. null and undefined are sub types of ts variables types
// 5. syntax of variables :: let/const/var variable_name : type = value;
// 6. When variable declared without type and assign value then it becomes particular type based on it's vlaue

export {};

// ----------------------- basic ------------------------
// three basic types
let name: string = "Munna";
let isBeginner: boolean = true;
let id: number = 160133;

console.log("Three basic types ::", name, " ", isBeginner, " ", id);

// sub types
// this can be used in few times
let contact: null = null;
let price: undefined = undefined;

// most use case
// Remember that when the strictNullChecks flag is set to true in tsconfig.json
// null and undefined can be stored in three basic types
// let phone: number = null;
// let isGraduated: boolean = undefined;

// console.log("Sub types ::", contact, " ", price, " ", phone, " ", isGraduated);

// --------------------- array ------------------------
// number array
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// string array
let arr3: string[] = ["js", "ts", "react", "vue", "react native"];
let arr4: Array<string> = [
  "js",
  "ts",
  "react",
  "vue",
  "react native",
  "node js",
  "express js",
];

let arr5: boolean[] = [true, false];
let arr6: Array<boolean> = [false, true];

console.log(
  "Array Declaration ::",
  arr1,
  " ",
  arr2,
  " ",
  arr3,
  " ",
  arr4,
  " ",
  arr5,
  " ",
  arr6
);

// ----------------------- array with mixed type ::: tuple type ---------------------
// In this type order of type must be maintain in the order of value
let mixedArryOrTuple: [string, number, boolean] = ["Munna", 33, true];

console.log("Array Tuple/mixed Type Declaration ::", mixedArryOrTuple);

// --------------------------  enum type ----------------------------
enum Color {
  red,
  green,
  blue,
}

let clr: Color = Color.blue;

console.log("Color Enum :", clr);

// ------------------------------ any type ---------------------------
let anyType: any = "Munna";
console.log("Any type ::", anyType);
anyType = false;
console.log("Any type ::", anyType);
anyType = 15;
console.log("Any type ::", anyType);

// ------------------------------ unknown type ---------------------------
let unknownType: unknown = "Munna";
console.log("Unknown type ::", unknownType);
unknownType = true;
console.log("Unknown type ::", unknownType);
unknownType = 15;
console.log("Unknown type ::", unknownType);

// type assertion
// console.log((unknownType as string).toUpperCase())

// ------------------------- union type/multiple type --------------------------
let multipleTypeVariable: string | number = "Munna";
console.log("multipleTypeVariable :", multipleTypeVariable);

multipleTypeVariable = 20;

console.log("multipleTypeVariable :", multipleTypeVariable);
