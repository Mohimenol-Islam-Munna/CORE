function student(msg) {
  function name(value) {
    return `Hi ${msg}! ${value}`;
  }
  return name;
}

// const f1 = student("Good Morning");
console.log(student("munna")("Good Night"));
