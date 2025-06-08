function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log(`Panda Pikipiki!`);
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const km = Number(input);
if (!isNaN(km) && km > 0) {
  calculateBodaFare(km);
} else {
  console.log("Please enter a valid distance in kilometers.");
}
