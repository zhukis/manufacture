function ChocolatedCheese(baseProductName, baseProductAmount, cottageCheeseAmount, chocolateCheeseAmount) {
    CottageCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount);

    this.className = "ChocolatedCheese";

    this.setChocolatedCheeseData(chocolateCheeseAmount);
}

ChocolatedCheese.prototype = {
    constructor: ChocolatedCheese,

    MIN_CHOCOLATED_CHEESE_AMOUNT: 10,

    MAX_CHOCOLATED_CHEESE_AMOUNT: 1000,

    getChocolatedCheeseAmount: function () {
        return this.chocolatedCheeseAmount;
    },

    getClassName: function () {
        return this.className;
    },

    setChocolatedCheeseData: function (amount) {
        if (amount < this.MIN_CHOCOLATED_CHEESE_AMOUNT || amount > this.MAX_CHOCOLATED_CHEESE_AMOUNT)
            throw new Error("Amount value is out of valuable range");

        this.chocolatedCheeseAmount = amount;
    }
};

ChocolatedCheese.prototype = inherit(CottageCheese.prototype, ChocolatedCheese.prototype);