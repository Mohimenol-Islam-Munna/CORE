// this in global scope :: point to window object
console.log("this in global scope ::", this);

// this is block scope :: point to window object
if (true) {
  console.log("this is block scope ::", this);
}

// this in function scope :: point to window object
function func1() {
  console.log("this in function scope ::", this);
}

func1();

// this in function scope with strict mode :: point to undefined
function func2() {
  "use strict";
  console.log("this in function scope with strict mode ::", this);
}

func2();

// this in function scope :: point to window object
const func3 = () => {
  console.log("this in function 3 ::", this);
  //   console.log("arguments ::", arguments);
};

func3();

// this in inner function scope :: point to window object
function func4() {
  console.log("this in function 4 ::", this);

  const inner = () => {
    console.log("this in function 4 inner function  :56:", this);
  };
  inner();
}

func4();

window.func4;

// this in object method
const obj = {
  name: "messi",
  jersy: 10,
  age: 36,
  playerInfo: function () {
    console.log("this in object method ::", this);
  },
};

// this point to 'obj' object
obj.playerInfo();

const playerInfo2 = obj.playerInfo;

// this point to window object
playerInfo2();

const obj2 = {
  name: "ronaldo",
};

obj2.playerInfo = obj.playerInfo;

// this point to 'obj2' object
obj2.playerInfo();

// 2 Arrow functions :: This arrow function inherit the value of 'this' from parent's(here window) scope.
const arrowFun = () => {
  console.log("this in arrow function ::", this);
};

arrowFun();

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    console.log("this in object normal function/method ::", this.title);

    function showListInner() {
      console.log("this in object showListInner function/method :1:", this);
    }

    showListInner();

    const showListInner2 = () => {
      console.log("this in object showListInner function/method :2:", this);
    };

    showListInner2();
  },

  anotherShowList: () => {
    function anotherInner() {
      console.log("this in object anotherInner function/method ::", this.title);
    }

    anotherInner();

    console.log("this in object arrow function/method ::", this);
  },
};

group.showList();
group.anotherShowList();

// 2. we can change the value of 'this' based on function call

// NOTES ::::::

// 1. 1 main rule for this :: this always point his parent object.
// 2. this value depand on the way of function call.

// 3. Arrow functions do not have their own this, instead, they inherit the one from the    parent scope, which is called "lexical scoping".
