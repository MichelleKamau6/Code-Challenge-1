function estimateTransactionFee(amountToSend) {
  const feeRate = 1.5%;
  const minFee = 10;
  const maxFee = 70;

  let fee = amountToSend * feeRate;
  fee = Math.max(minFee, Math.min(fee, maxFee));
  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}\n`);
  console.log(`Send Money Securely!`);
}

const input = prompt("Unatuma Ngapi? (KES):");
const amount = Number(input);
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else {
  console.log("Please enter a valid amount.");
}
