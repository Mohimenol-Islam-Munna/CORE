"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello TypeScript World!");
// varialbles
let name;
name = "munna";
let subject = "CSE";
console.log(name);
console.log(subject);
// object
let obj = {
    name: "Munna",
    age: 20,
    zila: "Mymensingh",
};
let obj2;
obj2 = {
    name: "Md",
    age: 40,
    isGraduated: true,
};
console.log(obj2);
// function type
let player;
player = () => {
    return "player function";
};
console.log(player());
// function signature 
let student;
student = (name, className) => {
    return `${name} is studying in class ${className}`;
};
console.log(student("Ifti", 9));
