function hasEnoughFundsToBuy(price, qty, balance) {
  const subtotal = price * qty;
  if (subtotal <= balance) {
    return "YOU HAVE ENOUGH MONEY!";
  }
  return "SORRY, YOU NEED MORE MONEY TO BUY THAT";
}

hasEnoughFundsToBuy(10, 7, 60);