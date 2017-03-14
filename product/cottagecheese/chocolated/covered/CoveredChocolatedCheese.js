function CoveredChocolatedCheese(baseProductName,
                                 baseProductAmount,
                                 cottageCheeseAmount,
                                 chocolateCheeseAmount,
                                 coveredCheeseAmount) {
    ChocolatedCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount);

    this.coveredChocolatedCheeseAmount = coveredCheeseAmount;
    this.className = "CoveredChocolatedCheese";
}

CoveredChocolatedCheese.prototype = {
    constructor: CoveredChocolatedCheese,

    getCoveredChocolatedCheeseAmount: function () {
        return this.coveredChocolatedCheeseAmount;
    },

    getClassName: function () {
        return this.className;
    }
};

CoveredChocolatedCheese.prototype = inherit(ChocolatedCheese.prototype, CoveredChocolatedCheese.prototype);