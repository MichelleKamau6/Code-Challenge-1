function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;   // teaspoons

  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTea = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTea} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)\n`);
  console.log(`Enjoy your Chai Bora!`);
}

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = Number(input);
if (!isNaN(cups) && cups > 0) {
  calculateChaiIngredients(cups);
} else {
  console.log("Please enter a valid number of cups.");
}
