// ------------------------- Class ---------------------- 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greetring = function () {
        return "Hello ".concat(this.name, ", Welcome To typescript world!");
    };
    return Employee;
}());
var munna = new Employee("Md Mohimenol Islam Munna");
console.log(munna.greetring());
