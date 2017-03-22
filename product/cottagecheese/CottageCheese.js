function CottageCheese(baseProductName, baseProductAmount, cottageCheeseAmount) {
    BaseProduct.call(this, baseProductName, baseProductAmount);

    this.className = "CottageCheese";

    this.setCottageCheeseData(cottageCheeseAmount);
}

CottageCheese.prototype = {
    constructor: CottageCheese,

    MIN_COTTAGE_CHEESE_AMOUNT: 50,

    MAX_COTTAGE_CHEESE_AMOUNT: 5000,

    getCottageCheeseAmount: function () {
        return this.cottageCheeseAmount;
    },

    getClassName: function () {
        return this.className;
    },

    setCottageCheeseData: function (amount) {
        if (amount < this.MIN_COTTAGE_CHEESE_AMOUNT || amount > this.MAX_COTTAGE_CHEESE_AMOUNT)
            throw new Error("Amount value is out of valuable range");

        this.cottageCheeseAmount = amount;
    }
};

CottageCheese.prototype = inherit(BaseProduct.prototype, CottageCheese.prototype);