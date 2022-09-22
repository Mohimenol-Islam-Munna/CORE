// 1.Emplicit Binding :: Default Binding

// this in global scope :: point to window object
console.log("this in global scope ::", this);

// this in block scope :: point to window object
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

// Arrow functions :: arrow function have no value of 'this', but 'this' in arrow function can inherit the value from outer function or window object

// This arrow function inherit the value of 'this' from parent's(here window) scope.
const arrowFun = () => {
  console.log("this in arrow function ::", this);
};

arrowFun();

// this in inner function scope
function func4() {
  console.log("this in function 4 ::", this);

  // :: point to window object
  function inner1() {
    console.log("this in function 4 inner function  ::", this);
  }

  inner1();

  // :: 'this' get the value from outer function (here func4)
  const inner2 = () => {
    console.log("this in function 4 inner function  ::", this);
  };

  inner2();
}

func4();

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

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    console.log("this in object normal function/method ::", this);

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
      console.log("this in object anotherInner function/method ::", this);
    }

    anotherInner();

    console.log("this in object arrow function/method ::", this);
  },
};

group.showList();
group.anotherShowList();

// 2. Explicit Binding :: we can change the value of 'this' based on function call

const player1 = {
  name: "Messi",
  club: "psg",
  jersey: 10,
};

const player2 = {
  name: "Ronaldo",
  club: "MU",
  jersey: 9,
};

// 1. Using call():
function playerInfo(age, position) {
  console.log(
    `${this.name} is playing at ${this.club}. His jersey number is ${
      this.jersey
    }. He is ${age ? age : 30} years old. He is ${
      position ? position : "Forward"
    }.`
  );
}

// Here we explicitly set that 'this' in playerInfo function must point to player1/player2 object
playerInfo.call(player1);
playerInfo.call(player2);

// we can also pass arguments while explicit binding
playerInfo.call(player1, 36, "sricker");
playerInfo.call(player2, 38, "playmekar");

// 2. Using apply():
function playerInfoTwo(age, position) {
  console.log(
    `${this.name} is playing at ${this.club}. His jersey number is ${
      this.jersey
    }. He is ${age ? age : 30} years old. He is ${
      position ? position : "Forward"
    }.`
  );
}

// Here we explicitly set that 'this' in playerInfoTwo function must point to player1/player2 object
playerInfoTwo.apply(player1);
playerInfoTwo.apply(player2);

// we can also pass arguments while explicit binding 
playerInfoTwo.apply(player1, [36, "sricker"]);
playerInfoTwo.apply(player2, [38, "playmekar"]);

// 3. Using bind():
function playerInfoThree(age, position) {
  console.log(
    `${this.name} is playing at ${this.club}. His jersey number is ${
      this.jersey
    }. He is ${age ? age : 30} years old. He is ${
      position ? position : "Forward"
    }.`
  );
}

// Here we explicitly set that 'this' in playerInfoThree function must point to player1/player2 object
const p31 = playerInfoThree.bind(player1);
p31();
const p32 = playerInfoThree.bind(player2);
p32();

// we can also pass arguments while explicit binding
const p33 = playerInfoThree.bind(player1, 36, "sricker");
p33();
const p34 = playerInfoThree.bind(player2, 38, "playmekar");
p34();

// SUMMARY NOTES ::::::

// 1. 1 main rule for this :: this always point his parent object.
// 2. this value depand on the way of function call.

// 3. Arrow functions do not have their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".

// 4. Difference Between call(), apply(), bind() ::

// 4.1. call() pass extra parameter as single value and also call that function.
// 4.2. apply() pass extra parameter as an array and also call that function.
// 4.3. bind() pass extra parameter as single value like call() but does not call that function. It return reference of that function.
// 4.4 With call(), apply() and bind() arrow function has no own value of 'this'.
