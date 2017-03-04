function ChocolatedCheese(baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount) {
    CottageCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount);

    this.chocolatedCheeseAmount = chocolateCheeseAmount;
}

ChocolatedCheese.prototype = {
    constructor: ChocolatedCheese,

    getChocolatedCheeseAmount: function () {
    return this.chocolatedCheeseAmount;
}};

ChocolatedCheese.prototype = inherit(CottageCheese.prototype, ChocolatedCheese.prototype);