// Bad practice
class Person {
  name = "munna";
  age = 25;
  designation = "Full Stack Developer";
}

const obj = new Person();

// Good Practice : Always use constructor function in class.
class Engineer {
  // private property
  #contact;

  //   static property
  static country = "Bangladesh";

  //   static method
  static getDesignation() {
    return "Engineer";
  }

  constructor(name, age, designation, salary, contact) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    this.#contact = contact;

    // protected property
    this._salary = salary;
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

  // get
  get getName() {
    return this.name;
  }

  // set
  set setName(data) {
    this.name = data;
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
console.log("eng ::", eng);
console.log("eng._salary ::", eng._salary);
console.log("getSalary ::", eng.getSalary());
console.log("_getAge ::", eng._getAge());

// access private property and method

// this will through error
// console.log("contact ::", eng.#contact);

console.log("getContact ::", eng.getContact());

// this will through error
// console.log("getContact ::", eng.#getInfo());

// static property & method
console.log("country ::", Engineer.country);

console.log("getDesignation ::", Engineer.getDesignation());

// get/set methods :: Must be access like property not method
console.log("getName ::", eng.getName);

// set eng object property name
eng.setName = "Md Iftekharul Islam Ifti";
console.log("getName ::", eng.getName);

// Protected property: Actually there is no protected propery in js, it's a convention. In other programming language like ( C++ ) we can not access protected property from outside the class, but in js we can access from outside.
