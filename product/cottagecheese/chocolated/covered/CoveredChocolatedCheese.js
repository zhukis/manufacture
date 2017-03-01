function CoveredChocolatedCheese(baseProductName,
                                 baseProductAmount,
                                 cottageCheeseAmount,
                                 chocolateCheeseAmount,
                                 coveredCheeseAmount) {
    ChocolatedCheese.apply(this, baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount);

    this.amount = coveredCheeseAmount;
}

CoveredChocolatedCheese.prototype = {
    constructor: CoveredChocolatedCheese,

    getAmount: function () {
        return this.amount;
    }
};

CoveredChocolatedCheese.prototype = _.assign(inherit(ChocolatedCheese.prototype), CoveredChocolatedCheese.prototype);