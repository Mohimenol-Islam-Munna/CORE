var name = "munna";
let age = 23;
const university = "Pabna University of Science and Technology";

console.log(
  `My name is ${name}. I am ${age} years old. I have completed Bsc engineering from ${university}.`
);

// js variables declare rules
// valid variables 
let n1ame = "munna vai";
let _name = "munna islam";
let $name = "munna islam munna";
let name2 = "munna islam munna";
let _ = 1000;
let $ = true;
let $_ = false;
let _$ = {
  type: "variables",
};

console.log("variable's name rules ::", n1ame);
console.log("variable's name rules ::", _name);
console.log("variable's name rules ::", $name);
console.log("variable's name rules ::", _);
console.log("variable's name rules ::", $);
console.log("variable's name rules ::", $_);
console.log("variable's name rules ::", _$);

