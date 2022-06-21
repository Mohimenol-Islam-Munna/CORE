// ----------------------- Interface -------------------
// 1. Interface is like object which contain multiple variable declaration with type

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person): string {
  return `My name is ${person.firstName} ${person.lastName}`;
}

let realPerson = {
  firstName: "Md Mohimenol",
  lastName: "Islam Munna",
};

console.log(fullName(realPerson));
