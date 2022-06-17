const arr = [];
const arr2 = [1, 2, 3, 4, 5];

// copy array reference
const arr3 = arr2;

// copy array value : this create new/different array
const arr4 = [...arr2];

console.log(arr2 === arr3);

console.log(arr2 === arr4);
