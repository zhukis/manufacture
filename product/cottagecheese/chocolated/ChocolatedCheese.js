function ChocolatedCheese(baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount) {
    CottageCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount);

    this.chocolatedCheeseAmount = chocolateCheeseAmount;
    this.className = "ChocolatedCheese";
}

ChocolatedCheese.prototype = {
    constructor: ChocolatedCheese,

    getChocolatedCheeseAmount: function () {
        return this.chocolatedCheeseAmount;
    },

    getClassName: function () {
        return this.className;
    }
};

ChocolatedCheese.prototype = inherit(CottageCheese.prototype, ChocolatedCheese.prototype);