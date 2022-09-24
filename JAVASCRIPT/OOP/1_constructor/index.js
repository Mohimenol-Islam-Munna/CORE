// In javascript every function is a constructor function.
// Convention is write constructor function with capitial letter.
// Constructor function is used to create or initialize object from this function with new keyword.
// In modern javascript constructor function is used in class to create object from this class.

function Fun(name, price) {
  this.name = name;
  this.price = price;
}

const f1 = new Fun("Nagordola", 30);

console.log("f1 ::", f1);

class Fun2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const f2 = new Fun2("Chorki", 25);

console.log("f2 ::", f2);
