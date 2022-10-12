// ----------------------- Interface -------------------
// 1. Interface is like object which contain multiple variable declaration with type
function fullName(person) {
    return "My name is ".concat(person.firstName, " ").concat(person.lastName);
}
var realPerson = {
    firstName: "Md Mohimenol",
    lastName: "Islam Munna"
};
console.log(fullName(realPerson));
