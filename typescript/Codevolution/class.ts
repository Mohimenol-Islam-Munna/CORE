// ------------------------- Class ----------------------

class Employee {
  name: string;
  public age: number;
  protected dept: string;
  private contact: number;

  constructor(name: string, age: number, dept: string, contact: number) {
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.contact = contact;
  }

  greetring() {
    return `Hello ${this.name}, Welcome To typescript world!. Your contact number is ${this.contact}`;
  }
}

let munna = new Employee("Mohimenol Munna", 26, "CSE", 177);

console.log(munna.greetring());
console.log("Access Modifier ::", munna.age);

// inheritance
class Developer extends Employee {
  age: number;
  constructor(
    developer: string,
    age: number,
    empAge: number,
    dept: string,
    contact: number
  ) {
    super(developer, empAge, dept, contact);
    this.age = age;
  }

  workingStatus() {
    return `${this.age} years old developer done great job! These developer came from ${this.dept}.`;
  }
}

let reactDev = new Developer("Md Munna", 26, 28, "CSE", 17);

console.log(reactDev.name);
console.log(reactDev.greetring());
console.log(reactDev.workingStatus());
