export let returnCoins = [];
export const amountToCoins = (amount) => {
  if (amount == 0 || amount == NaN) {
    return;
  } else {
    if (amount >= 25) {
      returnCoins.push(25);
      return amountToCoins(amount - 25);
    } else if (amount >= 10) {
      returnCoins.push(10);
      return amountToCoins(amount - 10);
    } else if (amount >= 5) {
      returnCoins.push(5);
      return amountToCoins(amount - 5);
    } else if (amount >= 1) {
      returnCoins.push(1);
      return amountToCoins(amount - 1);
    }
  }
  return returnCoins;
};
