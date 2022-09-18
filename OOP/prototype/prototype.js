// constructor function
function Fun1() {
  return "MD";
}

// console.log(Fun1);

const obj1 = new Fun1();

// console.log("obj1 ::", obj1);

Fun1.prototype.name = "munna";

function Func2() {
  this.name = " value";

  console.log("first");

  return {
    ...Func2.prototype,
    name: this.name,
    age: 25,
    showName: function () {
      console.log("show name ::", this.name);
      return "s";
    },
  };
}

Func2.prototype.newName = "Ifti";

const obj2 = new Func2();
// console.log("obj2 ::", obj2.newName);
console.log("obj2 ::", obj2);

console.dir(Func2);
