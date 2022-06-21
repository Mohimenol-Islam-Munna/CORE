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
// inheritance
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(developer, age) {
        var _this = _super.call(this, developer) || this;
        _this.age = age;
        return _this;
    }
    Developer.prototype.workingStatus = function () {
        return "".concat(this.age, " years old developer done great job!");
    };
    return Developer;
}(Employee));
var reactDev = new Developer("Md Munna", 26);
console.log(reactDev.name);
console.log(reactDev.greetring());
console.log(reactDev.workingStatus());
