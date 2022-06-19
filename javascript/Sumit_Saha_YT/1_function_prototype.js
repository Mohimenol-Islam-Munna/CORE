const common = {
  eat() {
    return "Player is eating..";
  },
  training() {
    return "Players are well trained";
  },
};

function Player(name, age) {
  const player = Object.create(common);
  player.name = name;
  player.age = age;

  return player;
}

const player1 = Player("Munna", 25);

console.log("player1 : ", player1);

const player2 = new Player("ifti", 15);

console.log("player2 : ", player2.eat());
