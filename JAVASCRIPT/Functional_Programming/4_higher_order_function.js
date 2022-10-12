// ----------------- Higher order function -----------------
// 1. This function can takes function as an arguments 
// 2. This function can return another function 


function student(msg) {
  function name(value) {
    return `Hi ${msg}! ${value}`;
  }
  return name;
}

// const f1 = student("Good Morning");
console.log(student("munna")("Good Night"));
