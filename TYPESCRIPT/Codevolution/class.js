// ------------------------- Class ----------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age, dept, contact) {
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.contact = contact;
    }
    Employee.prototype.greetring = function () {
        return "Hello ".concat(this.name, ", Welcome To typescript world!. Your contact number is ").concat(this.contact);
    };
    return Employee;
}());
var munna = new Employee("Mohimenol Munna", 26, "CSE", 177);
console.log(munna.greetring());
console.log("Access Modifier ::", munna.age);
// inheritance
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(developer, age, empAge, dept, contact) {
        var _this = _super.call(this, developer, empAge, dept, contact) || this;
        _this.age = age;
        return _this;
    }
    Developer.prototype.workingStatus = function () {
        return "".concat(this.age, " years old developer done great job! These developer came from ").concat(this.dept, ".");
    };
    return Developer;
}(Employee));
var reactDev = new Developer("Md Munna", 26, 28, "CSE", 17);
console.log(reactDev.name);
console.log(reactDev.greetring());
console.log(reactDev.workingStatus());
