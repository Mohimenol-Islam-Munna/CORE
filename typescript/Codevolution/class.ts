// ------------------------- Class ---------------------- 

class Employee {
    name : string

    constructor(name : string){
        this.name = name;
    }

    greetring(){
        return `Hello ${this.name}, Welcome To typescript world!`;
    }
}

let munna = new Employee("Md Mohimenol Islam Munna");

console.log(munna.greetring())