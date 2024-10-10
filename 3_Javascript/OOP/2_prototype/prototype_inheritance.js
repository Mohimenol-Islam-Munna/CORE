function Person(name, country, religion) {
  this.name = name;
  this.country = country;
  this.religion = religion;
}

Person.prototype.age = 32;

const munna = new Person("Md Mohimenol Islam Munna", "Bangladesh", "Islam");

function Engineer(name, country, religion, sector, experience) {
  Person.call(this, name, country, religion);
  this.sector = sector;
  this.experience = experience;
}

Engineer.prototype = Object.create(Person.prototype);

// no need this line
// Engineer.prototype.constructor = Engineer;

const EngInfo = new Engineer(
  "Md Iftekharul Islam Ifti",
  "Bangladesh",
  "Islam",
  "Web Developer",
  "1 Years"
);

console.log(EngInfo);
