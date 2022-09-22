function MyString() {
  this.name2 = "munna";
}

MyString.prototype.address = {
  id: 1,
  name: "messi",
  club: "psg",
};

// MyString.prototype.name2 = "UI";

// call as function
let asFunc = MyString();
// console.dir(asFunc);
// console.dir(MyString);

// call as constructor function
let asConstructor = MyString;
// console.dir(asConstructor);

// call to create object
let asObj = new MyString();
// console.dir(asObj.address);

// js build in String
console.dir(String(" "));

let cObj = String("Munna 31");

// console.dir(cObj.toUpperCase());
// console.dir(String.prototype);

let sObj = new String();

// console.dir(sObj.toUpperCase());

function Cricketer() {
  console.log("Cricketer");
  return "abc";
}

Cricketer.prototype.name = "Hasan Mahmud";

Cricketer.prototype.hasWc = function () {
  console.log("No");
  return 200;
};

let hasan = Cricketer();

// console.dir(hasan.hasWc);

let myObj = Object;

let myObj2 = new Object({ id: 9 });

console.dir(Object.prototype);
// console.dir(myObj2);

// console.dir({ id: 1, name: "mm" });
