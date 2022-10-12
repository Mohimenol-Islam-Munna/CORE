// [[Prototype]] :: This is the reference of object's constructor/parent prototype. parent prototype's properties and methods are availabe in [[Prototype]].

function Student(name, id) {
  this.name = name;
  this.id = id;
}

Student.prototype.address = {
  division: "Mymensingh",
  district: "Mymensingh",
  upazila: "Nandail",
};

console.dir(Student.prototype);

const munna = new Student("munna", 160133);

console.dir(munna);

// Created obj's constructor property is equal to it's parent constructor

console.log(
  "obj.constructor === Parent constructor ::",
  munna.constructor === Student
);

// prototype.constructor :: This is constructor is used to create this prototype. function prototype is created by function_name.prototype.constructor.

