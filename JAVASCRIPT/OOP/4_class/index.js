// This is protected property. Actually there is no protected propery in js, it's a convention. In other programming language like (C ++) we can not access protected property from outside the class or inherited class, but in js we can access from outside.

// Bad practice
class Person {
  name = "munna";
  age = 25;
  designation = "Full Stack Developer";
}

const obj1 = new Person();

// Good Practice : Always use constructor function in class.
class Engineer {
  // private property
  #contact;

  constructor(name, age, designation, salary, contact) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    // protected property
    this._salary = salary;
    this.#contact = contact;
  }

  // access protected property in methods
  getSalary() {
    return this._salary;
  }

  // access private property in methods
  getContact() {
    return this.#contact;
  }

  // portected method
  _getAge() {
    return this.age;
  }

  // private method
  #getInfo() {
    return "Private Method";
  }
}

const eng = new Engineer(
  "ifti",
  20,
  "Node js developer",
  "200$",
  "01234567890"
);

// access protected property and method
console.log("eng._salary ::", eng._salary);
console.log("getSalary ::", eng.getSalary());
console.log("_getAge ::", eng._getAge());


// access private property and method

// this will through error
// console.log("contact ::", eng.#contact);

console.log("getContact ::", eng.getContact());

// this will through error
// console.log("getContact ::", eng.#getInfo());
