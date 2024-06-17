function hasEnoughFundsToBuy(price, qty, balance) {
  const subtotal = Math.round(price * qty * 100) / 100;
  console.log("subtotal:", subtotal);
  console.log("balance:", balance);
  if (subtotal <= balance) {
    return "YOU HAVE ENOUGH MONEY!";
  }
  return "SORRY, YOU NEED MORE MONEY TO BUY THAT";
}
//Testing

//NOT ENOUGH MONEY
hasEnoughFundsToBuy(50.5, 10, 300);
hasEnoughFundsToBuy(200.3, 5, 600.9);

//ENOUGH MONEY
hasEnoughFundsToBuy(10, 6, 60);
hasEnoughFundsToBuy(30, 3, 100);
hasEnoughFundsToBuy(200.3, 3, 600.9);
