// ------------- First class function -------------
// 1. This function can be stored in variable
// 2. This function can be stored in object
// 3. This function can be stored in array
// 4. We can create this function as need

const funcName = function () {
  console.log("first class function");
  return;
};

const obj = {
  funcName,
};
console.log(obj);

const arr = [funcName];
console.log(arr);

console.log(typeof funcName);
