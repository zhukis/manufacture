function ChocolatedCheese(baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount) {
    CottageCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount);
    this.amount = chocolateCheeseAmount;
}

ChocolatedCheese.prototype = {
    constructor: ChocolatedCheese,

    getAmount: function () {
    return this.amount;
}};

ChocolatedCheese.prototype = _.assign(inherit(CottageCheese.prototype), ChocolatedCheese.prototype);