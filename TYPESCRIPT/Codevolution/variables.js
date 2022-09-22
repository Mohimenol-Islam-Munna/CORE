"use strict";
// --------------------- variables ------------------
// 1. variables of typescript almost same to the variables  of javascript
// 2. Type in ts variables is optional
// 3. There are three basic types of ts variables :: string, number, boolean.
// 4. null and undefined are sub types of ts variables types
// 5. syntax of variables :: let/const/var variable_name : type = value;
// 6. When variable declared without type and assign value then it becomes particular type based on it's vlaue
exports.__esModule = true;
// ----------------------- basic ------------------------
// three basic types
var name = "Munna";
var isBeginner = true;
var id = 160133;
console.log("Three basic types ::", name, " ", isBeginner, " ", id);
// sub types
// this can be used in few times
var contact = null;
var price = undefined;
// most use case
// null and undefined can be stored in three basic types
var phone = null;
var isGraduated = undefined;
console.log("Sub types ::", contact, " ", price, " ", phone, " ", isGraduated);
// --------------------- array ------------------------
// number array
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// string array
var arr3 = ["js", "ts", "react", "vue", "react native"];
var arr4 = [
    "js",
    "ts",
    "react",
    "vue",
    "react native",
    "node js",
    "express js",
];
var arr5 = [true, false];
var arr6 = [false, true];
console.log("Array Declaration ::", arr1, " ", arr2, " ", arr3, " ", arr4, " ", arr5, " ", arr6);
// ----------------------- array with mixed type ::: tuple type ---------------------
// In this type order of type must be maintain in the order of value
var mixedArryOrTuple = ["Munna", 33, true];
console.log("Array Tuple/mixed Type Declaration ::", mixedArryOrTuple);
// --------------------------  enum type ----------------------------
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var clr = Color.blue;
console.log("Color Enum :", clr);
// ------------------------------ any type ---------------------------
var anyType = "Munna";
console.log("Any type ::", anyType);
anyType = false;
console.log("Any type ::", anyType);
anyType = 15;
console.log("Any type ::", anyType);
// ------------------------------ unknown type ---------------------------
var unknownType = "Munna";
console.log("Unknown type ::", unknownType);
unknownType = true;
console.log("Unknown type ::", unknownType);
unknownType = 15;
console.log("Unknown type ::", unknownType);
// type assertion
// console.log((unknownType as string).toUpperCase())
// ------------------------- union type/multiple type --------------------------
var multipleTypeVariable = "Munna";
console.log("multipleTypeVariable :", multipleTypeVariable);
multipleTypeVariable = 20;
console.log("multipleTypeVariable :", multipleTypeVariable);
