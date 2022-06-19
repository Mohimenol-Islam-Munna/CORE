// ---------------- Function Prototype -----------------------
// This is property of any js function which can poin to any object.
// every function in js is a constructor. It can be called with new keyword. Constructor function name start with Capital leter(It's convension)

// const common = {
//   eat() {
//     return "Player is eating..";
//   },
//   training() {
//     return "Players are well trained";
//   },
// };

function Player(name, age) {
  const player = Object.create(Player.prototype);
  player.name = name;
  player.age = age;

  return player;
}

function PlayerWithNew(name, age) {
  // const this = Object.create(Player.prototype);
  this.name = name;
  this.age = age;

  // return this;
}

Player.prototype = {
  eat() {
    return "Player is eating..";
  },
  training() {
    return "Players are well trained";
  },
};

PlayerWithNew.prototype = {
  eat() {
    return "Player is eating..";
  },
  training() {
    return "Players are well trained";
  },
};

const player1 = Player("Munna", 25);

console.log("player1 : ", player1.eat());

const player2 = new PlayerWithNew("ifti", 15);

console.log("player2 : ", player2.eat());



// customize build in Array constructor 
const arr = [];

function Array() {
  this.name = "munna";
}

Array.prototype = {
  how() {
    return "how r u";
  },
};

const a1 = new Array();

console.dir(Array);
console.dir(a1.how());
