function ChocolatedCheese(baseProductName, baseProductAmount, cottageCheeseAmount, ChocolateCheeseAmount) {
    CottageCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount);
    this.amount = ChocolateCheeseAmount;
}

ChocolatedCheese.prototype = Object.create(CottageCheese.prototype);
ChocolatedCheese.prototype.constructor = ChocolatedCheese;