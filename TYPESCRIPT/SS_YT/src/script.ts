export {};

console.log("Hello TypeScript World!");

// varialbles
let name;
name = "munna";

let subject: string = "CSE";

console.log(name);
console.log(subject);

// object
let obj: object = {
  name: "Munna",
  age: 20,
  zila: "Mymensingh",
};

let obj2: {
  name: string;
  age: number;
  isGraduated: boolean;
};

obj2 = {
  name: "Md",
  age: 40,
  isGraduated: true,
};

console.log(obj2);

// function type
let player: Function;

player = () => {
  return "player function";
}; 

console.log(player())


// function signature 
let student: (name: string, className: number) => string;

student = (name: string, className: number) => {
    return `${name} is studying in class ${className}`;
}

console.log(student("Ifti", 9));