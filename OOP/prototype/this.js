console.log("This is ::", this);

const func = function () {
  console.log("this inside function ::", this);
};

func();

// functin in strict mode
("use strict");
const func2 = function () {
  console.log("this inside function ::", this);
};

func2();
