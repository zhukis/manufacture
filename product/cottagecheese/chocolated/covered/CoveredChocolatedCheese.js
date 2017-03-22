function CoveredChocolatedCheese(baseProductName,
                                 baseProductAmount,
                                 cottageCheeseAmount,
                                 chocolateCheeseAmount,
                                 coveredCheeseAmount) {
    ChocolatedCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount);

    this.className = "CoveredChocolatedCheese";

    this.setProductData(coveredCheeseAmount);
}

CoveredChocolatedCheese.prototype = {
    constructor: CoveredChocolatedCheese,

    MIN_COVERED_CHOLOLATED_CHEESE_AMOUNT: 10,

    MAX_COVERED_CHOLOLATED_CHEESE_AMOUNT: 500,

    getCoveredChocolatedCheeseAmount: function () {
        return this.coveredChocolatedCheeseAmount;
    },

    getClassName: function () {
        return this.className;
    },

    setProductData: function (amount) {
        if (amount < this.MIN_COVERED_CHOLOLATED_CHEESE_AMOUNT || amount > this.MAX_COVERED_CHOLOLATED_CHEESE_AMOUNT)
            throw new Error("Amount value is out of valuable range");

        this.coveredChocolatedCheeseAmount = amount;
    }
};

CoveredChocolatedCheese.prototype = inherit(ChocolatedCheese.prototype, CoveredChocolatedCheese.prototype);