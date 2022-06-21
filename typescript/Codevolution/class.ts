// ------------------------- Class ----------------------

class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greetring() {
    return `Hello ${this.name}, Welcome To typescript world!`;
  }
}

let munna = new Employee("Md Mohimenol Islam Munna");

console.log(munna.greetring());

// inheritance

class Developer extends Employee {
  age: number;
  constructor(developer: string, age: number) {
    super(developer);
    this.age = age;
  }

  workingStatus() {
    return `${this.age} years old developer done great job!`;
  }
}

let reactDev = new Developer("Md Munna", 26);

console.log(reactDev.name);
console.log(reactDev.greetring());
console.log(reactDev.workingStatus());
