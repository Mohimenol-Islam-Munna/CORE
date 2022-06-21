// ----------------------- Function -------------------------

// typescript function parameter with it's type
function func1(num1: number, num2: number) {
  return num1 + num2;
}

console.log(func1(2, 3));

// type script function return type
function func2(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(func2(20, 3));

// type script function return with multiple type
function func3(num1: number, num2: string): string | number {
  return num1 + num2;
}

console.log(func3(20, "3"));
