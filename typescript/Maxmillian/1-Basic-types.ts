console.log("TypeScript All Basic Types : here");

// Basic Types ::

// 1. string :
let playerName = "messi";
let playerClub: string;
let playerCountry: string = "argentina";
playerClub = "psg";
console.log("playerClub :", playerClub);
console.log("playerCountry :", playerCountry);

// 2. number
let playerJersy = 10;
let playerTrophy: number;
playerTrophy = 101;
let playerBDor: number = 5;
console.log("playerTrophy :", playerTrophy);
console.log("playerBDor :", playerBDor);

// 3. Boolean
let hasWc: boolean = true;
let hasBDor: boolean;
hasBDor = false;
console.log("hasWc :", hasWc);

// 4. array
let playes: string[] = ["messi", "dybala", "mashrafe"];
let jersy: number[] = [10, 9, 2];
let sticker: boolean[] = [true, true, false];
console.log("playes :", playes);

// array alternative syntax
let players2: Array<string> = ["messi2", "dybala2", "mashrafe2"];

// 5. object
let playerInfo = {
  name: "mash",
  type: "Bowler",
  jersy: 10,
};

let playerInfo2: object = {
  name: "sakib",
  type: "all-rounder",
  jersy: 75,
};

console.log("playerInfo2 :", playerInfo2);

let playerInfo3: {} = {
  name: "tamim",
  type: "batter",
  jersy: 28,
};

console.log("playerInfo3 :", playerInfo3);

let playerInfo4: {
  name: string;
  type: string;
  jersy: number;
} = {
  name: "tamim",
  type: "batter",
  jersy: 28,
};

console.log("playerInfo4 :", playerInfo4.name);

// object type using interface
interface PlayerInfo5 {
  name: string;
  type: string;
  jersy: number;
}

let playerInfo5: PlayerInfo5 = {
  name: "mushfiq",
  type: "wk-Batter",
  jersy: 15,
};

console.log("playerInfo5 :", playerInfo5.type);

// object type using type alias
type PlayerInfo6 = {
  name: string;
  type: string;
  jersy: number;
}

let playerInfo6: PlayerInfo6 = {
  name: "Taskin",
  type: "Bowler",
  jersy: 3
};

console.log("playerInfo6 :", playerInfo6);
