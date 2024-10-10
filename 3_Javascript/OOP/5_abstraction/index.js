// Abstraction : An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

// Using ES6 class
class Player {
  constructor(name, club, salary, bonus, sponsorAmount) {
    this.name = name;
    this.club = club;
    this.salary = salary;
    this.bonus = bonus;
    this.sponsorAmount = sponsorAmount;
  }

  // implementation :: Here we hide the total income calculation process from outside user.
  #totalIncome() {
    return this.salary + this.bonus + this.sponsorAmount;
  }

  getPlayerDetails() {
    return {
      name: this.name,
      club: this.club,
      totalIncome: this.#totalIncome(),
    };
  }
}

const messi = new Player("Leo Messi", "psg", 200, 50, 300);

console.log("messi ::", messi);
console.log("messi.totalIncome ::", messi);
console.log("messi.getPlayerDetails ::", messi.getPlayerDetails());

// Using Constructor Function
function Cricketer(name, club, salary, bonus, sponsorAmount) {
  this.name = name;
  this.club = club;
  this.salary = salary;
  this.bonus = bonus;
  this.sponsorAmount = sponsorAmount;

  // implementation :: Here we hide the total income calculation process from outside user.
  function totalIncome() {
    return salary + bonus + sponsorAmount;
  }

  this.getPlayerDetails = function () {
    return {
      name: this.name,
      club: this.club,
      totalIncome: totalIncome(),
    };
  };
}

const mash = new Cricketer("Mashrafee", "DD", 100, 20, 200);

console.log("mash ::", mash.getPlayerDetails());
