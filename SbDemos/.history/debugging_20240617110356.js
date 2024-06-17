function hasEnoughFundsToBuy(price, qty, balance) {
  const subtotal = price * qty;
  if (subtotal <= balance) {
    return "YOU HAVE ENOUGH MONEY!";
  }
  return "SORRY, YOU NEED MORE MONEY TO BUY THAT";
}

hasEnoughFundsToBuy(50.5, 10, 300);
hasEnoughFundsToBuy(200.3, 5, 600.9);
