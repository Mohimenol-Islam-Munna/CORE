// ------------- Fisrt class function -------------
// 1. This function can be stored in variable
const funcName = function () {
  console.log("first class function");
  return;
};

// 2. This function can be stored in object
const obj = {
  funcName,
};
console.log(obj);

// 3. This function can be stored in array
const arr = [funcName];
console.log(arr);

// 4. We can create this function as need

console.log(typeof funcName);
