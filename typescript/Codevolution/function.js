// ----------------------- Function -------------------------
// 1. Every paramerters in ts are required
// 2. It's possible to pass optional and default parameters in ts function.
// 3. Optional parameters always come after required parameters
// typescript function parameter with it's type
function func1(num1, num2) {
    return num1 + num2;
}
console.log(func1(2, 3));
// type script function return type
function func2(num1, num2) {
    return num1 + num2;
}
console.log(func2(20, 3));
// type script function return with multiple type
function func3(num1, num2) {
    return num1 + num2;
}
console.log(func3(20, "3"));
// fucntion with optional parameter
function optionalParameterFunction(num1, num2) {
    return "".concat(num1, " is required parameter value and ").concat(num2, " is optional parameter value");
}
console.log(optionalParameterFunction(true, 10));
// fucntion with optional parameter
function defaultParameterFunction(num1, num2) {
    if (num2 === void 0) { num2 = 100; }
    return "".concat(num1, " is required parameter value and ").concat(num2, " is default parameter value");
}
console.log(defaultParameterFunction(true));
