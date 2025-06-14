function calculateChaiIngredients(numberOfCups) {
  const waterCup = 200; 
  const milkCup = 50;  
  const teaLeavesCup = 1; 
  const sugarCup = 2; 

  const totalWater = waterCup * numberOfCups;
  const totalMilk = milkCup * numberOfCups;
  const totalTea = teaLeavesCup * numberOfCups;
  const totalSugar = sugarCup * numberOfCups;

  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTea} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)\n`);
  console.log(`Enjoy your Chai Bora!`);
}

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
