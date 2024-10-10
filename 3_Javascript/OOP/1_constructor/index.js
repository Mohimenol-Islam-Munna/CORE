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

// NOTE ::

// Constructor function by default return an object.
// If we manually return premitives from constructor then it ignore premitives and return  default object.
// If we manually return object from constructor then it override default return by this new return value. Then new objects form this constructor have no access to prototype properties and methods of this constructor.

// Build-In constructors :: String, Array, Object, Function, Date, Math ... 
