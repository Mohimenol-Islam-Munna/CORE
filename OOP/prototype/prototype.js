// constructor function
function Fun1() {
  this.age = 23;
  return function () {
    console.log("afg");
  };
}

console.dir(Fun1);

const obj1 = new Fun1();

// console.log("obj1 ::", obj1);

Fun1.prototype.name = "munna";

function Func2() {
  this.name = "islam";

  //   return {
  //     age: 25,
  //     showName: function () {
  //       console.log("show name ::", "this.name");
  //       return "s";
  //     },
  //   };
}

Func2.prototype.newName2 = "Ifti 40";

const obj2 = new Func2();

console.log("obj2 ::", obj2);
console.log("obj2 ::", obj2.newName2);

// console.dir(Func2);

const player = {
  name: "messi",
  club: "psg",
  age: 34,
};

const messi = Object.create(player);

// console.log("messi ::", messi);

function Func3() {
  return {};
}

Func3.prototype.salary = 100;

let employee = new Func3();
let employee2 = Func3();

// console.dir(employee);
// console.dir(employee2);
// console.dir(Func3);
