let date = new Date();
let today = date.getDay();

switch (today) {
  case 0:
    console.log("today : ", "Sunday");
    break;
  case 1:
    console.log("today : ", "Monday");
    break;
  case 2:
    console.log("today : ", "Tuesday");
    break;
  case 3:
    console.log("today : ", "Wednesday");
    break;
  case 4:
    console.log("today : ", "Thusday");
    break;
  case 5:
    console.log("today : ", "Friday");
    break;
  default:
    console.log("today : ", "Saturday");
    return;
}

console.log("Day type :y:", "" || "munna");
console.log("Day type :y:", "" ?? "munna");
console.log("Day type :y:", null || "munna");
console.log("Day type :y:", null ?? "munna");
